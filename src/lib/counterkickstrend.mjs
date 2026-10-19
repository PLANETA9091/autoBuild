// (v0.976.284) THE COUNTERS KICKS CELL'S OWN EXCLUSION MASS - the
// counters line's own kicks cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry):
// the final report prints 'bots=19 spawned=19 reconnects=1 kicks=0
// ...' (F478's own face, run 39174346168) and '... reconnects=20
// kicks=12 ...' (F479, run 39178460638) and '... reconnects=14
// kicks=1 ...' (F480) and '... kicks=1 ...' (F481) and '... kicks=9
// ...' (F482) and '... kicks=2 ...' (F483) and '... kicks=0 ...'
// (F484, run 39206031566) and '... kicks=6 ...' (F485, run
// 39208857636) - testbed/fleet19.mjs's counters line
// (fleet19.mjs:4682), one print per face, the kicks cell the server's
// own eviction tally (the kicks the churn forced beside the
// re-links). The .268 word's row rides the kicks hand as its own
// side-car (the rider never the priced voice) - the .269 word's own
// precedent the family holds (whose row rides the banked hand while
// the .276 word prices the banked cell) - and the kick bill's own
// lanes (the v0.717 bill and the v0.730 kinds and the v0.908 witness
// and the v0.906 kindless words) keep their separate emitters, the
// counters cell itself rode unread (0 -> 12 -> 1 -> 1 -> 9 -> 2 -> 0
// -> 6 the eight-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor
// rides whole through the spawned and the reconnects cells, the
// emitter's own template order, the priced cell no leading zero no
// sign (the .248 house law), the tail boundary the cell ends at
// whitespace or line end never mid-token - the fused-tail skin the
// grammar refuses), the near-miss lanes never ride (the bare cell
// without the frame, the pretty spacing, the altered order, the
// leading zero, the negative count, the bot-tagged prefix, the
// drifted template, the truncated head, the wrong frame), the law
// LAST-PRINT-WINS - the counters line speaks once per face, the last
// print the freshest body the face held. THE CELLS: kicks (the
// exclusion mass - the proven integer cell, the zero lawful - the
// never-kicked face keeps the healthy zero), reconnects (the churn
// hand the side-car holds - the .268 word's own priced voice, the
// cell rides the row as a number never a second word). The exclusion
// mass's own arc the row prices (the fade the evictions thinned, the
// swell the kick storm, the swing the trade - the family's own
// two-step shape), the held step the honest silence (the REAL
// faces' own helds the W479-480-481 and W480-481-482 windows the
// silence prices); the three-face zero mass prices nothing - the
// server never kicked the whole arc (the lawful silence the .255
// churn ceiling's own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold, the fleet's own
// console never changes).

const COUNTER_KICKS_RE = /^bots=(0|[1-9]\d*) spawned=(0|[1-9]\d*) reconnects=(0|[1-9]\d*) kicks=(0|[1-9]\d*)(?: |$)/

/**
 * The census - the family's own strict grammar, the face's own kick
 * read (the counters line's own kicks cell; LAST-PRINT-WINS - the
 * last strict line the face's own freshest body, the junk line never
 * poisons).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{kicks: number, reconnects: number}|null} the cells (the
 *   zeros lawful - the face whose lines hold no counters line), null
 *   when the input itself is not an array
 */
export function counterKicksCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { kicks: 0, reconnects: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = COUNTER_KICKS_RE.exec(l)
    if (!m) continue
    mass.kicks = Number(m[4]) // the priced cell - the exclusion mass
    mass.reconnects = Number(m[3]) // the side-car - the churn hand
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. Every face must hold both proven integer cells (the zero
 * lawful - the never-kicked face). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {kicks,reconnects}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterKicksConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.kicks) && numOk(s.reconnects)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the exclusion mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass (the fleet never kicked),
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {kicks,reconnects}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterKicksTrendRow (e) {
  if (!counterKicksConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.kicks
  const p = prev.kicks
  const c = cur.kicks
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent - the REAL faces' own helds
  // the W479-480-481 and W480-481-482 windows the silence prices)
  if (first === 0 || second === 0) return null
  const recArc = `the reconnections rode ${back.reconnects} -> ${prev.reconnects} -> ${cur.reconnects}`
  const tail = "(the reconnect word's row keeps the churn seat (the .268 word - whose side-car rides this same kicks hand, the rider never the priced voice), the kick bill's own lanes keep the kick data's separate emitters (the v0.717 bill and the v0.730 kinds and the v0.908 witness and the v0.906 kindless words - different lanes never the counters cell), the recovered cell the cure word prices (the .283 word), the spawned/banked/smelted cells their words keep (the .277/.276/.269 words) - the kick mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters kicks trend (v0.976.284): the kick weather's own fade ran two steps deep - ${arc} - the server's evictions thinned, ${recArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters kicks trend (v0.976.284): the kick weather's own swell ran two steps deep - ${arc} - the kick storm surged, ${recArc} ${tail}`
  }
  return `the counters kicks trend (v0.976.284): the kick weather's own swing - ${arc} - the evictions and the calm traded seats between the faces, ${recArc} ${tail}`
}
