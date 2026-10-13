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
  PULSE_SLOT_TIMERS, PULSE_SLOT_IMMEDIATES, PULSE_SAB_INT32_SLOTS
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
