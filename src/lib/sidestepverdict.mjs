// (v0.976.257) THE SIDE-STEP'S OWN VERDICT MASS - the raw lane's own
// moved/stalled split the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own logs carry): the walk
// approach machinery prints 'F1 fuel commons: path nudge approach: the
// stall side-step (right) moved the start (d now 6.0)' and '[F6]
// approach: the stall side-step (left) stalled too' (src/lib/
// approach.mjs's own emitters, the v0.167.0 side-step budget - right,
// then left, then the honest end), riding the fleet19 filter's own
// 'approach' key - and no book owned the lane: the approachwalktrend
// .250 word prices the walk SUMMARY lane beside and explicitly refuses
// the side-step's own prints ('the side-step's own prints ... the raw
// lane's own words' - its own near-miss law), the yardapproachtrend
// seat prices the sibling 'yard approach:' frame, the walknudgetrend
// keeps its own lane - the side-step's own verdict mass (the moves the
// start earned, the stalls the second side paid) rode unread across
// the faces. THIS WORD TAKES THE SEAT: the strict grammar one anchor
// one shape - the context path the logger's own chain carries never
// frozen (the runtime owns the prefix: the bot tag, the 'fuel commons:
// path nudge' lane names, the bare 'approach:' frame - the anchor
// alone the grammar prices), the side cell the enumerated space
// '(right|left)' holds, the verdict cell the two canonical shapes 'moved
// the start' and 'stalled too' hold, the optional d-cell ' (d now N.N)'
// the emitter's own toFixed(1) ternary prints (the one-decimal law -
// the integer-d skin, the missing-digit skin, the trailing junk the
// grammar refuses), the line must END at the shape's own tail byte.
// THE LAW: THE MASS SUMS EVERY SUMMARY - each side-step a vote, no
// last-print-wins here (the .250 walk summary's own law, the .245
// climb run-up's precedent).
//
// THE CELLS: moved and stalled (the proven integer cells, the zero
// lawful - the never-stepped face keeps the healthy-looking zeros).
// The trend reads the moved mass's arc two steps deep (the family's
// own two-step shape): both steps down = the side-step weather's own
// fade (the side-steps stop landing), both steps up = the side-step
// weather's own swell (the stalls price their side-steps and land),
// a trade = the swing. The stalled arc rides the read's own side-car
// (the second side's own tax beside the first side's own yield). A
// held step prices no direction - the honest silence (the family's
// own held law); a three-face zero moved mass prices nothing - the
// lane never rode the whole arc (the lawful silence the zeros keep).
//
// THE FIELD (the cached corpus's own truth): face467 moved=1 stalled=2,
// face474 moved=3 stalled=0, face475 moved=2 stalled=2, face478
// moved=20 stalled=1 - the W467-474-475 swing 1 -> 3 (+2) -> 2 (-1)
// and the W474-475-478 swing 3 -> 2 (-1) -> 20 (+18) - THE WORD BORN
// SPEAKING (the .234 final climb's own speaking-birth precedent).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const SIDESTEP_VERDICT_RE = /approach: the stall side-step \((?:right|left)\) (?:moved the start(?: \(d now \d+\.\d\))?|stalled too)$/

/**
 * The census - the mass sums every side-step print the face holds
 * (each side-step a vote; no last-print-wins here).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{moved: number, stalled: number}|null}
 *   the side-step cells, or the zeros when the lines themselves are
 *   junk (a face whose lines hold no side-step print is the LAWFUL
 *   ZERO - the never-stepped face keeps the healthy-looking zeros),
 *   null when the input itself is not an array
 */
export function sidestepVerdictCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { moved: 0, stalled: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (!SIDESTEP_VERDICT_RE.test(l)) continue
    if (/stalled too$/.test(l)) mass.stalled++
    else mass.moved++
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-stepped face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {moved,stalled}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function sidestepVerdictConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.moved) && numOk(s.stalled)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the moved mass's two-step shape. The honest
 * null when a step held (no direction - the family's own held law),
 * the three-face mass is zero (the lane never rode - nothing to
 * price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {moved,stalled}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function sidestepVerdictTrendRow (e) {
  if (!sidestepVerdictConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.moved
  const p = prev.moved
  const c = cur.moved
  // the lane never rode across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const stalledArc = `the stalls rode ${back.stalled} -> ${prev.stalled} -> ${cur.stalled}`
  const tail = "(the approach walk's own summary row keeps its own lane, the yard approach's own frame keeps its seat, the walk nudge's own trend keeps its cell - the side-step verdict row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the side-step verdict trend (v0.976.257): the side-step weather's own fade ran two steps deep - ${arc} - the moved mass's own fade, ${stalledArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the side-step verdict trend (v0.976.257): the side-step weather's own swell ran two steps deep - ${arc} - the moved mass's own swell, ${stalledArc} ${tail}`
  }
  return `the side-step verdict trend (v0.976.257): the moved mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${stalledArc} ${tail}`
}
