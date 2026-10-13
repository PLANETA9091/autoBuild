// (v0.77.0) THE FREEZE OSCILLOSCOPE - event-loop phase counters that survive
// a main-thread freeze, readable by the heartbeat worker through a
// SharedArrayBuffer.
//
// WHY: the blackbox (v0.62.0) names the last activity labels inside a freeze
// window and mainLate names the drift magnitude - but FOUR runs of dumps
// (run68 151s/64s, run69 43s, run71 33s, run72 3x36s, run73 53s/25s/10s/6s)
// still leave the mechanism unnamed: the labels show the gotoSafe funnel
// QUEUING AND COMPLETING walks at 0.1-5s cadence INSIDE the dead window -
// the main thread executes fleet code while its timers starve - yet the
// per-walk A* answers arrive in 0.1s, so the sync-think-window theory does
// not hold for the residual class either. What starves is the TIMERS PHASE;
// what keeps running is SOMETHING ELSE. The two candidate phases are the
// POLL (I/O callbacks: 19 bot connections' packet handlers) and the CHECK
// (setImmediate) phases, or a promise (microtask) chain that never bottoms
// out. The treatment is completely different per phase - and no dump so far
// can tell them apart.
//
// THE INSTRUMENT: two monotonic counters in a SharedArrayBuffer, written by
// the MAIN thread, read by the heartbeat WORKER (its own thread - it reads
// exactly when the main thread cannot):
//   slot 1: TIMERS - a setInterval(intervalMs) fire count. Healthy: intervalMs
//           / 250 fires per 20s beat window (~80). Starved timers phase: ~0.
//   slot 2: IMMEDIATES - a self-re-arming setImmediate fire count = the
//           number of event-loop ITERATIONS that reached the check phase.
//           Healthy: hundreds/s. Macrotask-flooded loop: huge. Hard sync
//           block: frozen at the freeze start value.
// The worker's freeze dump (bbDump) prints the per-beat-window deltas:
//   '[blackbox] main freeze ~Xs; ... ; loop: timers=3 imm=41255/20s'
// reads as: the loop iterated 41k times but the timer phase fired 3 times -
// the poll/check phases are saturated, NOT a sync spin. Both ~0 = sync
// block. timers ~80 = the loop is fine (the drift would be a lie).
//
// THE FLOOD CLASS (v0.974.15 - the instrument's own theory priced wrong by
// the field): FACE 282 = 38337910926's dump rode 'timers=1467
// imm=140006193/20s (healthy)' with mainLate 48085ms and the freeze census
// pricing the freeze REAL (~48s, the pf:* class's second face) - the drift
// was NOT a lie, so the doc line above ('timers ~80 = the loop is fine')
// priced WRONG: a loop can serve its timers AND drown in the check phase
// (7 million loop passes/s = the macrotask flood's own signature - the
// healthy word lied exactly once the flood rode). THE CURE: the imm's own
// seat outranks the timers-passed cell (fresh evidence outranks the stale
// cell - the band arm's own law): timers served + imm past the LOOPING line
// (w*50, the existing constant, never a new number) reads 'FLOODED' - the
// drift is real, the flood owns the window. The legacy classes keep their
// exact bytes (the byte-stable verdict law); the FLOOD words stay
// PAREN-FREE (the mainfreeze grammar's own slot - a paren inside the
// verdict tail eats the loop scope into the chain, the one-level-nesting
// fix's own lesson).
//
// (v0.974.16) THE HANDLE CENSUS - the flood's own population cell. THE
// RE-PRICE THAT ARMED IT: FACE 284's artifact bytes (id 11788692678) read
// 'timers=1530 imm=138010822/20s (healthy)' - the SAME flood signature as
// FACE 282 (imm 140M/20s), not the 'loop-healthy freeze' the field had
// believed (the '(healthy)' byte was the pre-v0.974.15 era's own lie - the
// flood word did not exist on that tree). Both priced pf:* faces are ONE
// flood class: the poll/check phases spin ~7M passes/s WITH the timers
// served - the probe timer FIRES mid-flood (1530 timers/20s proves the
// thread alive), so evidence written by the probe SURVIVES the flood. The
// census rides exactly that seat: every probe tick the main counts its own
// active handles by family (sock/tmr/pipe/oth) into SAB slots 3-6, magic-
// gated in slot 7; the worker's freeze dump prints the census AFTER the
// verdict paren - the flood window's own population prices the flood's fd
// seat (the poisoned-socket theory's own cell: a leak or a tear-down shows
// in the counts before any cure is wired).
//
// Zero-risk by construction: the counters are plain Int32 increments on the
// main thread (nanoseconds per fire), the immediates loop is guarded and
// stoppable, junk SABs stay harmless, and diagnostics never throw.
export const PULSE_SLOT_TIMERS = 1
export const PULSE_SLOT_IMMEDIATES = 2
export const PULSE_SLOT_HANDLE_SOCK = 3
export const PULSE_SLOT_HANDLE_TIMER = 4
export const PULSE_SLOT_HANDLE_PIPE = 5
export const PULSE_SLOT_HANDLE_OTHER = 6
export const PULSE_SLOT_HANDLE_MAGIC = 7
export const PULSE_HANDLE_MAGIC = 0x48434E53 // 'HCNS' - the junk gate (a 1-in-4B collision stays harmless)
export const PULSE_SAB_INT32_SLOTS = 8

/** The instrument's own SAB: 8 Int32 slots, [1]=timers, [2]=immediates,
 * [3..6]=handle census (v0.974.16), [7]=the census magic. */
export function createPulseSab () {
  return new SharedArrayBuffer(PULSE_SAB_INT32_SLOTS * 4)
}

/**
 * Create the main-thread pulse writer.
 * @param {object} [opts]
 * @param {SharedArrayBuffer} [opts.sab] - from createPulseSab(); a junk sab
 *   disables the writer (the counters stay 0) instead of throwing.
 * @param {number} [opts.intervalMs=250] - the timers-phase probe period
 *   (aligned with the heartbeat probe's 250ms).
 */
export function createLoopPulse ({ sab = null, intervalMs = 250 } = {}) {
  const view = (() => {
    try {
      const v = new Int32Array(sab)
      return v.length >= PULSE_SAB_INT32_SLOTS ? v : null
    } catch { return null }
  })()
  const period = Number.isFinite(intervalMs) && intervalMs >= 25 ? intervalMs : 250
  let running = false
  let timer = null
  // (v0.974.16) the handle census rides the probe's own tick - the tick FIRES
  // mid-flood (the field's own proof: 1530 timers/20s under the 138M imm
  // flood), so the population cell lands inside the very window the dump reads.
  const writeCensus = () => {
    if (!view) return
    try {
      const c = handleCensus(typeof process !== 'undefined' && process._getActiveHandles ? process._getActiveHandles() : null)
      view[PULSE_SLOT_HANDLE_SOCK] = c.sock
      view[PULSE_SLOT_HANDLE_TIMER] = c.tmr
      view[PULSE_SLOT_HANDLE_PIPE] = c.pipe
      view[PULSE_SLOT_HANDLE_OTHER] = c.oth
      view[PULSE_SLOT_HANDLE_MAGIC] = PULSE_HANDLE_MAGIC
    } catch { /* the census degrades, the probe does not */ }
  }
  const tick = () => { if (!running || !view) return; view[PULSE_SLOT_TIMERS]++; writeCensus() }
  const immTick = () => {
    if (!running) return
    if (view) view[PULSE_SLOT_IMMEDIATES]++
    // re-arm: one fire per event-loop pass through the check phase
    setImmediate(immTick)
  }
  return {
    start () {
      if (running) return
      running = true
      timer = setInterval(tick, period)
      try { timer.unref && timer.unref() } catch { /* diagnostics never hold the process */ }
      writeCensus() // the first census lands before the first probe fire
      setImmediate(immTick)
    },
    stop () {
      running = false
      try { clearInterval(timer) } catch { /* already gone */ }
    },
    /** Cumulative counters for tests and the worker mirror. */
    snapshot () {
      return {
        timers: view ? view[PULSE_SLOT_TIMERS] : 0,
        immediates: view ? view[PULSE_SLOT_IMMEDIATES] : 0,
        running
      }
    }
  }
}

/** Read the pulse counters from a worker thread (junk-safe). */
export function readPulseSab (sab) {
  try {
    const v = new Int32Array(sab)
    if (v.length < PULSE_SAB_INT32_SLOTS) return { timers: 0, immediates: 0 }
    return { timers: v[PULSE_SLOT_TIMERS], immediates: v[PULSE_SLOT_IMMEDIATES] }
  } catch { return { timers: 0, immediates: 0 } }
}

/** (v0.974.16) The handle census - the pure count the writer packs into the
 * SAB. Families: TCP/Socket/TLSWrap -> sock (the flood fd's own family),
 * Timeout -> tmr, Pipe -> pipe, everything else (incl. junk entries) -> oth.
 * Junk input stays a zeroed census - never throws. */
export function handleCensus (handles) {
  const c = { sock: 0, tmr: 0, pipe: 0, oth: 0 }
  if (!Array.isArray(handles)) return c
  for (const h of handles) {
    let name = ''
    try { name = h && h.constructor && h.constructor.name ? h.constructor.name : '' } catch { name = '' }
    if (name === 'TCP' || name === 'Socket' || name === 'TLSWrap') c.sock++
    else if (name === 'Timeout') c.tmr++
    else if (name === 'Pipe') c.pipe++
    else c.oth++
  }
  return c
}

/** (v0.974.16) Read the handle census from a worker thread. Magic-gated:
 * a SAB the writer never touched (or a junk SAB without the magic) reads
 * null - the dump's tail stays absent, the legacy bytes hold. */
export function readHandleCensus (sab) {
  try {
    const v = new Int32Array(sab)
    if (v.length < PULSE_SAB_INT32_SLOTS) return null
    if (v[PULSE_SLOT_HANDLE_MAGIC] !== PULSE_HANDLE_MAGIC) return null
    const sock = v[PULSE_SLOT_HANDLE_SOCK]
    const tmr = v[PULSE_SLOT_HANDLE_TIMER]
    const pipe = v[PULSE_SLOT_HANDLE_PIPE]
    const oth = v[PULSE_SLOT_HANDLE_OTHER]
    if (!(sock >= 0) || !(tmr >= 0) || !(pipe >= 0) || !(oth >= 0)) return null
    return { sock, tmr, pipe, oth }
  } catch { return null }
}

/** The dump suffix the worker appends to the blackbox freeze line. Pure:
 * pins the format the log-reading agents will parse. dtS = the observation
 * window in seconds (the heartbeat beat period).
 * (v0.974.15) THE FLOOD CLASS: timers served + imm past the LOOPING line
 * (w*50) reads FLOODED - the macrotask flood's own signature (FACE 282's
 * own falsification: timers=1467 imm=140006193/20s read 'healthy' while
 * the ~48s freeze was real). The FLOOD words stay paren-free.
 * (v0.974.16) THE HANDLE CENSUS TAIL: when the worker holds a magic-gated
 * census, the counts ride AFTER the closing paren (' | h: sock=N tmr=N
 * pipe=N oth=N') - the mainfreeze grammar's optional tail group keeps the
 * line parseable, and handles=null (junk SAB, no census) keeps the legacy
 * bytes byte-exact. */
export function pulseLine ({ timers, immediates, dtS = 20, handles = null } = {}) {
  const t = Number.isFinite(timers) ? timers : 0
  const i = Number.isFinite(immediates) ? immediates : 0
  const w = Number.isFinite(dtS) && dtS > 0 ? Math.round(dtS) : 20
  const expected = Math.max(1, Math.round(w / 0.25)) // the timers-phase budget at the 250ms probe period
  const flood = i > w * 50
  const verdict = t >= expected * 0.5
    ? (flood
        ? 'FLOODED - poll/check saturated WITH the timers served - the drift is real, the healthy word lied'
        : 'healthy')
    : (flood
        ? 'LOOPING - poll/check saturated, the timers phase starved (NOT a sync spin)'
        : 'NOT LOOPING - a sync block owns the thread')
  let tail = ''
  if (handles && Number.isFinite(handles.sock) && Number.isFinite(handles.tmr) && Number.isFinite(handles.pipe) && Number.isFinite(handles.oth)) {
    tail = ` | h: sock=${handles.sock} tmr=${handles.tmr} pipe=${handles.pipe} oth=${handles.oth}`
  }
  return `; loop: timers=${t} imm=${i}/${w}s (${verdict})${tail}`
}
