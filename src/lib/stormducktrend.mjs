// (v0.976.258) THE STORM DUCK'S OWN ARM MASS - the report frame's own
// duck cells the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own report blocks carry): the
// final report prints 'storm duck: 0 arm(s), 0 walk(s) refused fleet-wide
// while ducked (v0.143.0 - run58: ...)' (run39170522050's own face, F477)
// - testbed/fleet19.mjs's report line (one print per face, ALWAYS
// printed), the alloc-valve stats' own duck cells (avs.duckArms the arms
// the fleet-wide pause spent, avs.duckRefusals the walks the ducked valve
// refused) - and no book owned the frame across the faces: the walk
// governor's own stall line keeps its own lane (the .254 word), the fleet
// churn ceiling's own line keeps its own lane (the .255 word), the goal
// brake's own line keeps its lane (goalbrake.mjs), the alloc valve's own
// line keeps the valve's seat (jobqueue.mjs), the runtime's fleet-wide
// pause prose ('storm duck: fleet-wide pathfinder pause Ns left - <label>
// refused (a live storm verdict shut the near exemption; every walk waits
// out the wind-down)', jobqueue's own live mouth) keeps the live lane -
// the duck mass itself (the arms the pause spent, the walks the ducked
// valve refused) rode unread across the faces.
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the fleet's own template byte-exact - the frame, the two proven
// integer cells no leading zero no sign (the .248 house law), the fixed
// prose tail the emitter's own template holds byte-exact), the near-miss
// lanes never ride (the runtime's fleet-wide pause prose, the bot-tagged
// prefix, the pretty spacing, the missing comma, the missing prose tail,
// the leading zero, the negative count, the altered prose, the truncated
// tail, the wrong frame), the law LAST-PRINT-WINS - the frame speaks
// once per face, the last print the freshest state the face held.
//
// THE CELLS: arms, refusals (the duck's own end counts - the proven
// integer cells, the zero lawful - the never-ducked face keeps the
// healthy-looking zeros). The trend reads the arms mass's arc two steps
// deep (the family's own two-step shape): both steps down = the duck
// weather's own fade (the valve rests - the storms stop arming the
// fleet-wide pause), both steps up = the duck weather's own swell (the
// storm weather arms the pause - the walks priced), a trade = the swing.
// The refusals mass (the walks the ducked valve refused) rides the read's
// own side-car. A held step prices no direction - the honest silence
// (the family's own held law); a three-face zero arms mass prices
// nothing - the duck never armed the whole arc (the lawful silence the
// zeros keep - the .255 churn ceiling's own lawful-zero birth the
// precedent holds; the word waits loaded - the first face the duck arms
// prices the word's speaking birth).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const STORM_DUCK_RE = /^storm duck: (0|[1-9]\d*) arm\(s\), (0|[1-9]\d*) walk\(s\) refused fleet-wide while ducked \(v0\.143\.0 - run58: the storm's next-column class is near BY CONSTRUCTION and rode the closed valve's near exemption to the 3000M ceiling; a live storm verdict now shuts EVERY goal for 15s and sweeps the in-flight goals, the A\* starves within one think window, the worker's grace lands the cure instead of the ceiling landing the kill\)$/

/**
 * The census - the family's own strict grammar, the face's own end
 * frame (the report's own storm duck line; LAST-PRINT-WINS - the
 * last print the freshest state the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{arms: number, refusals: number}|null}
 *   the duck cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no report print is the LAWFUL ZERO - the
 *   never-ducked face keeps the healthy-looking zeros), null when the
 *   input itself is not an array
 */
export function stormDuckCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { arms: 0, refusals: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = STORM_DUCK_RE.exec(l)
    if (!m) continue
    mass.arms = Number(m[1])
    mass.refusals = Number(m[2])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-ducked face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {arms,refusals}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function stormDuckConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.arms) && numOk(s.refusals)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the duck's own arms mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the duck never armed -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {arms,refusals}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function stormDuckTrendRow (e) {
  if (!stormDuckConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.arms
  const p = prev.arms
  const c = cur.arms
  // the duck never armed across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const refusalArc = `the refusals rode ${back.refusals} -> ${prev.refusals} -> ${cur.refusals}`
  const tail = "(the walk governor's own line keeps its own lane, the goal brake's own line keeps its lane, the alloc valve's own line keeps the valve's seat, the runtime's fleet-wide pause prose keeps the live mouth - the storm duck's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the storm duck trend (v0.976.258): the duck weather's own fade ran two steps deep - ${arc} - the arms mass's own fade, ${refusalArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the storm duck trend (v0.976.258): the duck weather's own swell ran two steps deep - ${arc} - the arms mass's own swell, ${refusalArc} ${tail}`
  }
  return `the storm duck trend (v0.976.258): the duck weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${refusalArc} ${tail}`
}
