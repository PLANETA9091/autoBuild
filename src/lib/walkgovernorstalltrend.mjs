// (v0.976.254) THE WALK GOVERNOR'S OWN STALL MASS - the report frame's
// own stall-opens/refusal cells the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own report blocks carry): the
// final report prints 'walk governor: 17 stall(s) opened, 238 churn
// re-issues refused (v0.74.0 churn breaker - goals queued+done with zero
// progress during the run68-class storms)' (run39164157313's own face,
// F475) - testbed/fleet19.mjs's report line (one print per face, the
// churn breaker's own end read: the stalls the governor opened, the
// re-issues the valve refused) - and no book owned the frame: the
// governorrefusaltrend.mjs module owns the sweep verdict book's own
// machine-unreachable governor-refusal SKIN's cell (the .128 word, the
// walkFailCensus's own seat), the walkgovernorrefusaltrend.mjs module
// owns the walk-lane's own governor-refusal cell (the .140 word, the
// same census another lane deeper), the fleet churn ceiling's own line
// keeps its own lane beside - the stall mass itself (the opens the
// governor spent, the refusals the storm priced) rode unread across the
// faces. THIS WORD TAKES THE SEAT: the strict grammar one emitter one
// shape (the fleet's own template byte-exact - the frame, the two proven
// integer cells no leading zero no sign (the .248 house law), the fixed
// prose tail the emitter's own template holds byte-exact), the
// near-miss lanes never ride (the fleet churn ceiling's own line, the
// bot-tagged churn prose the runtime prints live, the sweep's
// machine-unreachable governor-refusal skin, the walk-lane census cells,
// the bot-tagged prefix, the pretty spacing, the missing comma, the
// missing prose tail, the leading zero, the negative count, the altered
// prose, the truncated tail, the wrong frame), the law LAST-PRINT-WINS
// - the frame speaks once per face, the last print the freshest state
// the face held.
//
// THE CELLS: opens and refusals (the governor's own end counts - the
// proven integer cells, the zero lawful - the never-fired face keeps
// the healthy-looking zeros). The trend reads the opens mass's arc two
// steps deep (the family's own two-step shape): both steps down = the
// stall weather's own fade (the governor's valve rests), both steps up
// = the stall weather's own swell (the churn storms grow the opens), a
// trade = the swing. The refusals arc rides the read's own side-car
// (the storm's re-issue pressure beside the valve's own action). A held
// step prices no direction - the honest silence (the family's own held
// law); a three-face zero opens mass prices nothing - the governor
// never fired the whole arc (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const WALK_GOVERNOR_STALL_RE = /^walk governor: (0|[1-9]\d*) stall\(s\) opened, (0|[1-9]\d*) churn re-issues refused \(v0\.74\.0 churn breaker - goals queued\+done with zero progress during the run68-class storms\)$/

/**
 * The census - the family's own strict grammar, the face's own end
 * frame (the report's own walk governor line; LAST-PRINT-WINS - the
 * last print the freshest state the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{opens: number, refusals: number}|null}
 *   the governor cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no report print is the LAWFUL ZERO - the
 *   never-fired face keeps the healthy-looking zeros), null when the
 *   input itself is not an array
 */
export function walkGovernorStallCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { opens: 0, refusals: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = WALK_GOVERNOR_STALL_RE.exec(l)
    if (!m) continue
    mass.opens = Number(m[1])
    mass.refusals = Number(m[2])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-fired face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {opens,refusals}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function walkGovernorStallConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.opens) && numOk(s.refusals)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the governor's own opens mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the governor never fired -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {opens,refusals}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function walkGovernorStallTrendRow (e) {
  if (!walkGovernorStallConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.opens
  const p = prev.opens
  const c = cur.opens
  // the governor never fired across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const refusalArc = `the refusals rode ${back.refusals} -> ${prev.refusals} -> ${cur.refusals}`
  const tail = "(the fleet churn ceiling's own line keeps its own lane, the bot-tagged churn prose keeps its lane, the sweep's machine-unreachable governor-refusal skin keeps the .128 word's cell, the walk-lane's own governor-refusal trend keeps the .140 word's seat - the walk governor's stall row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the walk governor stall trend (v0.976.254): the stall weather's own fade ran two steps deep - ${arc} - the opens mass's own fade, ${refusalArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the walk governor stall trend (v0.976.254): the stall weather's own swell ran two steps deep - ${arc} - the opens mass's own swell, ${refusalArc} ${tail}`
  }
  return `the walk governor stall trend (v0.976.254): the opens mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${refusalArc} ${tail}`
}
