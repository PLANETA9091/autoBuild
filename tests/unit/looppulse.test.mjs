// Tests for the freeze oscilloscope (v0.77.0) - src/lib/looppulse.mjs.
// WHY: four runs of freeze dumps (run68 151s/64s, run69 43s, run71 33s,
// run72 3x36s, run73 53s/25s/10s/6s) show the gotoSafe funnel QUEUING AND
// COMPLETING walks INSIDE the dead window while the timers phase starves -
// the sync-A*-think theory does not hold for the residual class, and the
// candidate mechanisms (poll/check saturation vs a true sync block) have
// completely different treatments. The pulse writes two monotonic counters
// (a setInterval fire count = the timers phase, a self-re-arming
// setImmediate fire count = event-loop iterations reaching the check phase)
// into a SharedArrayBuffer the heartbeat worker reads during a freeze; the
// dump then NAMES the starving phase. Pins: the counters move on a real
// clock, junk SABs stay harmless, and the dump verdict boundaries are exact.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  createPulseSab, createLoopPulse, readPulseSab, pulseLine,
  handleCensus, readHandleCensus,
  PULSE_SLOT_TIMERS, PULSE_SLOT_IMMEDIATES, PULSE_SAB_INT32_SLOTS,
  PULSE_SLOT_HANDLE_MAGIC, PULSE_HANDLE_MAGIC
} from '../../src/lib/looppulse.mjs'

const sleep = ms => new Promise(r => setTimeout(r, ms))

test('the counters move on a real clock (timer fires + loop iterations)', async () => {
  const sab = createPulseSab()
  const pulse = createLoopPulse({ sab, intervalMs: 25 })
  pulse.start()
  const before = pulse.snapshot()
  await sleep(140)
  const mid = pulse.snapshot()
  assert.ok(mid.timers - before.timers >= 3, `the timers counter must advance (~5 fires in 140ms at 25ms), got ${mid.timers - before.timers}`)
  assert.ok(mid.immediates - before.immediates >= 10, 'the self-re-arming setImmediate must iterate many times per timer fire')
  assert.equal(mid.running, true)
  pulse.stop()
  const afterStop = pulse.snapshot()
  assert.equal(afterStop.running, false)
  await sleep(60)
  assert.equal(pulse.snapshot().timers, afterStop.timers, 'a stopped pulse counts nothing')
})

test('double start is idempotent; the counters live in the SAB (cross-thread readable)', async () => {
  const sab = createPulseSab()
  const pulse = createLoopPulse({ sab, intervalMs: 25 })
  pulse.start()
  pulse.start() // second start must not double-arm
  await sleep(80)
  pulse.stop()
  const snap = pulse.snapshot()
  assert.equal(readPulseSab(sab).timers, snap.timers, 'the worker-side read must see the same slots')
  assert.equal(readPulseSab(sab).immediates, snap.immediates)
  const view = new Int32Array(sab)
  assert.equal(view[PULSE_SLOT_TIMERS], snap.timers)
  assert.equal(view[PULSE_SLOT_IMMEDIATES], snap.immediates)
})

test('junk SABs stay harmless (the writer disables itself, the reader returns zeros)', () => {
  const pulse = createLoopPulse({ sab: null })
  assert.doesNotThrow(() => pulse.start())
  assert.equal(pulse.snapshot().timers, 0)
  pulse.stop()
  assert.deepEqual(readPulseSab(null), { timers: 0, immediates: 0 })
  assert.deepEqual(readPulseSab(new SharedArrayBuffer(4)), { timers: 0, immediates: 0 }, 'a too-small SAB reads as zeros')
  assert.deepEqual(readPulseSab(undefined), { timers: 0, immediates: 0 })
  assert.equal(createPulseSab().byteLength, PULSE_SAB_INT32_SLOTS * 4)
})

test('pulseLine: the verdict boundaries are exact (the dump must NAME the phase)', () => {
  // healthy: the timers budget at 250ms over 20s is 80 fires; >= half is healthy
  assert.match(pulseLine({ timers: 80, immediates: 900, dtS: 20 }), /healthy/)
  assert.match(pulseLine({ timers: 40, immediates: 900, dtS: 20 }), /healthy/)
  // LOOPING: timers starved but the loop iterated hard -> poll/check saturation
  const flood = pulseLine({ timers: 0, immediates: 40000, dtS: 20 })
  assert.match(flood, /LOOPING/)
  assert.match(flood, /NOT a sync spin/)
  // NOT LOOPING: both frozen -> a sync block owns the thread
  const block = pulseLine({ timers: 0, immediates: 3, dtS: 20 })
  assert.match(block, /NOT LOOPING/)
  assert.match(block, /sync block/)
  // junk stays numeric, never throws
  assert.match(pulseLine({}), /timers=0 imm=0/)
  assert.match(pulseLine({ timers: NaN, immediates: undefined }), /timers=0 imm=0/)
  // the wire format the log-reading agents parse
  assert.equal(
    pulseLine({ timers: 7, immediates: 41255, dtS: 20 }),
    '; loop: timers=7 imm=41255/20s (LOOPING - poll/check saturated, the timers phase starved (NOT a sync spin))'
  )
})

test('pulseLine: the FLOOD class (v0.974.15) - the timers served AND the check phase saturated reads FLOODED (the healthy word lied)', () => {
  // FACE 282's own falsification: timers passed (1467/20s), the check phase
  // exploded (140006193/20s = 7M loop passes/s), the dump read 'healthy'
  // while the ~48s freeze was real (mainLate 48085ms, the census priced it)
  const flood = pulseLine({ timers: 1467, immediates: 140006193, dtS: 20 })
  assert.equal(
    flood,
    '; loop: timers=1467 imm=140006193/20s (FLOODED - poll/check saturated WITH the timers served - the drift is real, the healthy word lied)'
  )
  // the flood line rides the EXISTING LOOPING constant (w*50, never a new
  // number) - the boundary byte: 1000 stays healthy, 1001 floods
  assert.match(pulseLine({ timers: 40, immediates: 1000, dtS: 20 }), /healthy/)
  assert.match(pulseLine({ timers: 40, immediates: 1001, dtS: 20 }), /FLOODED/)
  // the FLOOD words stay paren-free (the mainfreeze grammar's own slot)
  const floodWords = (pulseLine({ timers: 40, immediates: 5000, dtS: 20 }).match(/\((.*)\)$/))[1]
  assert.equal(floodWords.includes('('), false)
  // the starved classes keep their exact bytes (the byte-stable verdict law)
  assert.equal(
    pulseLine({ timers: 0, immediates: 40000, dtS: 20 }),
    '; loop: timers=0 imm=40000/20s (LOOPING - poll/check saturated, the timers phase starved (NOT a sync spin))'
  )
  assert.equal(
    pulseLine({ timers: 0, immediates: 3, dtS: 20 }),
    '; loop: timers=0 imm=3/20s (NOT LOOPING - a sync block owns the thread)'
  )
  // the legacy healthy string byte-true (the pre-flood dumps re-read the same)
  assert.equal(
    pulseLine({ timers: 40, immediates: 900, dtS: 20 }),
    '; loop: timers=40 imm=900/20s (healthy)'
  )
})

test('handleCensus (v0.974.16): the pure fd-family count - the flood\'s population prices its own seat', () => {
  const mk = name => ({ constructor: { name } })
  // FACE 284's own flood window's expected shape: 19 bot sockets ride among
  // the handles; the families split sock/tmr/pipe/oth, junk entries -> oth
  const c = handleCensus([
    mk('TCP'), mk('Socket'), mk('TLSWrap'), // sock family
    mk('Timeout'), mk('Timeout'), mk('Timeout'), // tmr family
    mk('Pipe'), // pipe family
    mk('Server'), mk('MessagePort'), null, 42, undefined // oth family
  ])
  assert.deepEqual(c, { sock: 3, tmr: 3, pipe: 1, oth: 5 })
  // junk input stays a zeroed census - never throws
  assert.deepEqual(handleCensus(null), { sock: 0, tmr: 0, pipe: 0, oth: 0 })
  assert.deepEqual(handleCensus(undefined), { sock: 0, tmr: 0, pipe: 0, oth: 0 })
  assert.deepEqual(handleCensus('junk'), { sock: 0, tmr: 0, pipe: 0, oth: 0 })
  assert.deepEqual(handleCensus([]), { sock: 0, tmr: 0, pipe: 0, oth: 0 })
  // a handle whose constructor read throws stays oth (diagnostics never throw)
  const bomb = { get constructor () { throw new Error('boom') } }
  assert.deepEqual(handleCensus([bomb]), { sock: 0, tmr: 0, pipe: 0, oth: 1 })
})

test('the census lands in the SAB magic-gated (the writer rides start + every probe tick)', async () => {
  const sab = createPulseSab()
  const orig = process._getActiveHandles
  process._getActiveHandles = () => [ { constructor: { name: 'TCP' } }, { constructor: { name: 'Timeout' } } ]
  try {
    const pulse = createLoopPulse({ sab, intervalMs: 25 })
    pulse.start() // the FIRST census lands synchronously, before any probe fire
    const fresh = readHandleCensus(sab)
    assert.deepEqual(fresh, { sock: 1, tmr: 1, pipe: 0, oth: 0 })
    await sleep(60) // a probe tick rewrites the census
    pulse.stop()
  } finally { process._getActiveHandles = orig }
  assert.deepEqual(readHandleCensus(sab), { sock: 1, tmr: 1, pipe: 0, oth: 0 })
  // the magic gate: a fresh SAB (no census ever written) reads null
  assert.equal(readHandleCensus(createPulseSab()), null)
  // a junk magic reads null (the tail stays absent, the legacy bytes hold)
  const junk = createPulseSab()
  new Int32Array(junk)[PULSE_SLOT_HANDLE_MAGIC] = 12345
  assert.equal(readHandleCensus(junk), null)
  assert.equal(readHandleCensus(null), null)
  assert.equal(readHandleCensus(new SharedArrayBuffer(4)), null)
  // the real _getActiveHandles throws nothing through the writer (junk-safe)
  const sab2 = createPulseSab()
  const pulse2 = createLoopPulse({ sab: sab2, intervalMs: 25 })
  assert.doesNotThrow(() => pulse2.start())
  await sleep(40)
  pulse2.stop()
  const real = readHandleCensus(sab2)
  assert.ok(real && real.sock >= 0 && real.tmr >= 0 && real.pipe >= 0 && real.oth >= 0, 'the real census rides non-negative counts')
})

test('pulseLine: the handle-census tail rides AFTER the verdict paren (the grammar stays parseable)', () => {
  // FACE 284's own flood numbers + a census tail: the same numbers that read
  // '(healthy)' on the stale-byte era read FLOODED on the v0.974.15 ladder,
  // and the population rides the dump line's own tail
  assert.equal(
    pulseLine({ timers: 1530, immediates: 138010822, dtS: 20, handles: { sock: 19, tmr: 42, pipe: 1, oth: 3 } }),
    '; loop: timers=1530 imm=138010822/20s (FLOODED - poll/check saturated WITH the timers served - the drift is real, the healthy word lied) | h: sock=19 tmr=42 pipe=1 oth=3'
  )
  // handles absent/junk -> the legacy bytes byte-exact (the tail never lies)
  assert.equal(
    pulseLine({ timers: 40, immediates: 900, dtS: 20 }),
    '; loop: timers=40 imm=900/20s (healthy)'
  )
  assert.equal(
    pulseLine({ timers: 0, immediates: 3, dtS: 20, handles: null }),
    '; loop: timers=0 imm=3/20s (NOT LOOPING - a sync block owns the thread)'
  )
  assert.equal(
    pulseLine({ timers: 0, immediates: 3, dtS: 20, handles: {} }),
    '; loop: timers=0 imm=3/20s (NOT LOOPING - a sync block owns the thread)'
  )
  assert.equal(
    pulseLine({ timers: 0, immediates: 3, dtS: 20, handles: { sock: NaN, tmr: 1, pipe: 0, oth: 0 } }),
    '; loop: timers=0 imm=3/20s (NOT LOOPING - a sync block owns the thread)'
  )
})
