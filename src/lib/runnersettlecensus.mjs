// (v0.976.246) THE RUNNER SETTLE TELEMETRY'S OWN PARKED MASS - the drain's
// own per-runner read the word prices across the faces. THE SEAT THIS TIME
// IS THE FLEET'S OWN WIRING: the never-drain class's named OPEN FRONT (the
// per-runner settle telemetry the runtime front names - the fleet-wiring
// word, the bigger seat the fires priced three times and deferred) - THIS
// commit both wires the emitter and takes the pricing seat. THE EVIDENCE
// (the F469 face's own read, the run 39143233533): the watchdog printed
// 'exit watchdog: the margin spent (...s past the deadline+420s grace, the
// runners never drained) - the hard exit owns the process' and exited 12 -
// the verdict held the parked anatomy only as a fleet sum, the runner the
// drain never saw rode unnamed. THIS WORD'S EMITTER NAMES THEM: the drain
// past the deadline prints '[fleet] runner settle: 18/19 settled, 1 parked
// (F7 390s) - the drain's own per-runner read' every 30s while the drain
// holds parked runners (testbed/fleet19.mjs's settle telemetry, one call
// site), the parked runner the log itself names, the clean drain's silence
// the clean read keeps.
// THE WORD PRICES THE MASS: the strict grammar one emitter one shape (the
// '[fleet] runner settle:' frame, the settled/total fraction, the parked
// count, the parenthesised per-runner list, the 'the drain's own
// per-runner read' tail byte-exact), the arithmetic the emitter's own
// invariant holds (the settled plus the parked must sum to the total - a
// forged fraction the census refuses), the near-miss lanes never ride (the
// '[fleet] partial:' kill row a different lane, the exit watchdog's own
// verdict line, the boards' ledger lines the .241 seat prices, the
// truncated tail, the zero-parked skin the emitter never prints), the law
// LAST-PRINT-WINS (the telemetry speaks many times per face, the last
// print the freshest state the drain held before the report or the
// watchdog landed).
//
// THE CELLS: settled (the runners that came home by the last print) and
// total (the roster the drain walks) and parked (the never-drain mass the
// arc prices - the runners the drain still holds) and detail (the last
// print's own per-runner list - the parked names and their seconds, the
// cure the read names). The trend reads the parked mass arc two steps deep
// (the family's own two-step shape): both steps down = the drain's own
// heal ran two steps deep (the runners come home), both steps up = the
// parked mass's own swell ran two steps deep (the never-drain front's own
// grip), a trade = the swing. A held step prices no direction - the honest
// silence (the family's own held law); a three-face zero parked mass
// prices nothing - the drains ran clean or the lane never fired (the
// lawful silence the zeros keep).
//
// CENSUS GUARD NOTE (the wiring's own seat): unlike the family's pure
// readers, THIS word's emitter rides the same commit - the wiring is the
// improvement the fire ships, the word prices it from the first face on.
// The zero fleet-log-line law holds where it always did: the telemetry
// speaks ONLY past the deadline, only while the drain holds parked
// runners, and the analysis side - scripts/fleet-mining/decompose.mjs -
// owns the fold over the lines the fleet now emits.

const RUNNER_SETTLE_RE = /^\[fleet\] runner settle: (\d+)\/(\d+) settled, (\d+) parked \(([^)]*)\) - the drain's own per-runner read$/

/**
 * The census - the family's own strict grammar, the face's own state
 * (the last print's own snapshot the law keeps - the settled fraction,
 * the parked mass, the per-runner detail the cure names).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{settled: number, total: number, parked: number, detail: string}|null}
 *   the settle snapshot, or null when the lines themselves are junk (a
 *   face whose lines hold no settle print is the LAWFUL ZERO - the drain
 *   ran clean or never spoke, the zeros speak)
 */
export function runnerSettleCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { settled: 0, total: 0, parked: 0, detail: '' }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = RUNNER_SETTLE_RE.exec(l)
    if (!m) continue
    const settled = Number(m[1])
    const total = Number(m[2])
    const parked = Number(m[3])
    // the emitter's own arithmetic the census holds: every runner is
    // either settled or parked - a forged fraction never rides
    if (settled + parked !== total) continue
    // the emitter's own silence law the census holds: the telemetry never
    // prints a zero-parked line (the clean read keeps its silence) - the
    // zero-parked skin is a near-miss the grammar refuses
    if (parked < 1) continue
    mass.settled = settled
    mass.total = total
    mass.parked = parked
    mass.detail = m[4]
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all three
 * proven integer counts (the zero lawful - the drain ran clean). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {settled,total,parked,detail}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function runnerSettleCensusConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.settled) && s.settled >= 0 &&
      Number.isInteger(s.total) && s.total >= 0 &&
      Number.isInteger(s.parked) && s.parked >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the parked mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face parked mass is zero (the drains ran clean - nothing to
 * price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function runnerSettleCensusRow (e) {
  if (!runnerSettleCensusConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.parked
  const p = prev.parked
  const c = cur.parked
  // the drains ran clean across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const settledArc = `the settled read rode ${back.settled}/${back.total} -> ${prev.settled}/${prev.total} -> ${cur.settled}/${cur.total}`
  const tail = "(the exit watchdog's own verdict the runtime's own backstop holds, the boards' live cells the .241 seat prices, the doom residue's live cell the .242 seat prices, the body's alive cell the .243 seat prices, the death-spot memorize's mass the .244 seat prices, the climb run-up's mass the .245 seat prices - the never-drain front's own per-runner witness row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the runner settle trend (v0.976.246): the drain's own heal ran two steps deep - ${arc} - the parked mass's own fade, ${settledArc}, the cur face's own parked list: ${cur.detail || 'none'} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the runner settle trend (v0.976.246): the parked mass's own swell ran two steps deep - ${arc} - the never-drain front's own grip, ${settledArc}, the cur face's own parked list: ${cur.detail || 'none'} ${tail}`
  }
  return `the runner settle trend (v0.976.246): the parked mass's own swing - ${arc} - the heal and the swell traded seats between the faces, ${settledArc}, the cur face's own parked list: ${cur.detail || 'none'} ${tail}`
}
