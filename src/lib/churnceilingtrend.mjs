// (v0.976.255) THE FLEET CHURN CEILING'S OWN BURST MASS - the report
// frame's own fleet-opens/aggregate-refusals cells the word prices
// across the faces.
// THE EVIDENCE (the seat the fleet faces' own report blocks carry): the
// final report prints 'fleet churn ceiling: 0 open(s), 0 aggregate
// re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide
// burst unbounded)' (every cached face holds the line - face467 run
// 39131684179, face474 run 39160949802, face475 the fire-0530 read's
// own face) - testbed/fleet19.mjs's report line (one print per face,
// the ceiling's own end read: the opens the fleet-wide valve spent,
// the aggregate re-issues the storm priced) - and no book owned the
// frame: the walkgovernorstalltrend.mjs module owns the walk governor's
// own line beside (the .254 word, the sibling frame it explicitly
// deferred - 'the fleet churn ceiling's own line keeps its own lane'),
// the goalbrake.mjs module owns the goal brake's own line, the runtime
// refusal prose ('fleet churn ceiling: N zero-progress walks fleet-wide
// - ... refused for Ms', jobqueue's own live mouth) keeps the live lane
// - the burst mass itself (the opens the ceiling spent, the aggregate
// refusals the ceiling counted) rode unread across the faces. THIS WORD
// TAKES THE SEAT: the strict grammar one emitter one shape (the fleet's
// own template byte-exact - the frame, the two proven integer cells no
// leading zero no sign (the .248 house law), the fixed prose tail the
// emitter's own template holds byte-exact), the near-miss lanes never
// ride (the runtime's zero-progress refusal prose, the walk governor's
// own line, the goal brake's own line, the bot-tagged prefix, the
// pretty spacing, the missing comma, the missing prose tail, the
// leading zero, the negative count, the altered prose, the truncated
// tail, the wrong frame), the law LAST-PRINT-WINS - the frame speaks
// once per face, the last print the freshest state the face held.
//
// THE CELLS: opens and refusals (the ceiling's own end counts - the
// proven integer cells, the zero lawful - the never-fired face keeps
// the healthy-looking zeros; every cached face rode the zero - the
// ceiling stayed closed, the per-bot governor held the lane alone).
// The trend reads the opens mass's arc two steps deep (the family's
// own two-step shape): both steps down = the burst weather's own fade
// (the ceiling's valve rests), both steps up = the burst weather's own
// swell (the churn storms open the ceiling), a trade = the swing. The
// refusals arc rides the read's own side-car (the storm's aggregate
// pressure beside the valve's own action). A held step prices no
// direction - the honest silence (the family's own held law); a
// three-face zero opens mass prices nothing - the ceiling never fired
// the whole arc (the lawful silence the zeros keep - the cached
// corpus's own truth).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const CHURN_CEILING_RE = /^fleet churn ceiling: (0|[1-9]\d*) open\(s\), (0|[1-9]\d*) aggregate re-issues refused \(v0\.77\.0 - the per-bot limit leaves the fleet-wide burst unbounded\)$/

/**
 * The census - the family's own strict grammar, the face's own end
 * frame (the report's own fleet churn ceiling line; LAST-PRINT-WINS -
 * the last print the freshest state the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{opens: number, refusals: number}|null}
 *   the ceiling cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no report print is the LAWFUL ZERO - the
 *   never-fired face keeps the healthy-looking zeros), null when the
 *   input itself is not an array
 */
export function churnCeilingCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { opens: 0, refusals: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = CHURN_CEILING_RE.exec(l)
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
export function churnCeilingConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.opens) && numOk(s.refusals)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the ceiling's own opens mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the ceiling never fired -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {opens,refusals}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function churnCeilingTrendRow (e) {
  if (!churnCeilingConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.opens
  const p = prev.opens
  const c = cur.opens
  // the ceiling never fired across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const refusalArc = `the refusals rode ${back.refusals} -> ${prev.refusals} -> ${cur.refusals}`
  const tail = "(the walk governor's own line keeps its own lane, the goal brake's own line keeps its lane, the runtime's zero-progress refusal prose keeps the live lane - the fleet churn ceiling's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet churn ceiling trend (v0.976.255): the burst weather's own fade ran two steps deep - ${arc} - the opens mass's own fade, ${refusalArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet churn ceiling trend (v0.976.255): the burst weather's own swell ran two steps deep - ${arc} - the opens mass's own swell, ${refusalArc} ${tail}`
  }
  return `the fleet churn ceiling trend (v0.976.255): the opens mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${refusalArc} ${tail}`
}
