// (v0.976.309) THE SETBLOCK ECHO'S OWN WEST EDGE MASS - the server
// console's own 'Changed the block at X, Y, Z' success echo line's
// X cell's minimum the word prices across the faces (the sibling
// hand the .306 east-edge word's own envelope carries - the SAME-
// CELL DIFFERENT-HAND LAW the .304/.307 Y pair holds and the .305/
// .308 Z pair confirms: the .306 word prices the X cell's maximum,
// this word prices the X cell's minimum, the two hands never merge;
// the .304 word prices the Y maximum and the echoes count side-car,
// the .305 word prices the Z minimum, the .307 word prices the Y
// minimum, the .308 word prices the Z maximum, the X floor rode
// unread). THE EVIDENCE (the seat the vanilla server itself carries
// - the same console the .278/.292/.293/.295/.296/.304/.305/.306/
// .307/.308 words price): the server's own handler prints '[13:11:
// 22] [Server thread/INFO]: Changed the block at -149, 77, 392'
// (F492's own face) - one print per block the fleet's setblock
// placed, and the echoes' own X positions the dig envelope's west
// edge carries - and no book owned the WEST EDGE across the faces:
// the .306 echoeast word prices the X maximum (its census returns
// {maxEchoX} - the east hand, never the floor), the .292 fill word
// prices the volume lane, the .296 refusal word prices the refusal
// lane, the .295 desync word prices the WARN mismatch seat - the X
// floor itself rode unread (the REAL seven-face arc the faces
// carry: F492's echoes reached west to X -149, F493 to X -151, F494
// to X -152, F495 to X -157, F496 to X -157, F498 to X -143, F500
// to X -155 - the REAL windows the arc holds: W1 the fade -149 ->
// -151 (-2) -> -152 (-1), W2 the fade -151 -> -152 (-1) -> -157
// (-5), W3 the held step -152 -> -157 (-5) -> -157 (0), W4 the held
// step -157 -> -157 (0) -> -143 (+14), W5 the swing -157 -> -143
// (+14) -> -155 (-12) - THREE REAL WINDOWS THREE SPEAKS THE WORD
// BORN SPEAKING THREE DEEP the two held steps the family's own held
// law keeps honest (the .300 birth's own held precedent the .306
// word's own three-speaks birth holds - THE MIRROR SHAPE the west
// edge the same weather the east edge rides, the envelope the rigid
// body the span constant keeps), the builders' own west edge the
// faces trade; the X span maxX - minX flat 48 across all seven
// faces the envelope's own constant the edge law rides (the .306
// word's own X-span constant the mirror sibling hand the same
// evidence base holds - the .305 word's own Z-span constant and the
// .307 word's own Y-span constant the family precedents hold)).
//
// GRAMMAR: the .307 word's own frame byte-exact (the same-lane
// different-cell precedent that birth holds) - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293 INFO frame
// convention holds, the 'Changed the block at ' body, the three coord
// cells 'I, I, I' the proven signed integers no leading zero no plus
// (the .295 destroy-mismatch coord law's own precedent), the single
// spaces between the cells, LINE END tail boundary (the .288 word's
// own precedent); the near-miss lanes never ride - the bot-tagged
// prefix, the WARN frame, the pretty spacing, the plural body, the
// altered verb, the missing coord cell, the float coord, the
// leading-zero coord, the plus coord, the leading whitespace, the
// trailing junk, the CR tail, the 'Successfully filled' sibling volume
// line, the 'Could not set the block' sibling refusal line. THE
// SCALAR THE FLOOR PRICES: the census takes the MIN X the face's
// echoes reached (the MIN hand the floor law holds - the .307 word's
// own min-hand precedent the Y floor birth carries, the .289
// maxPause law's own mirror on the signed domain - the edge the
// minimum carries, the negatives the world's own west-of-origin
// coords hold). CENSUS GUARD: zero fleet wiring, zero new fleet log
// lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail
// the .278 contract extends, the .281/.289/.290/.292/.293/.294/.295/
// .296/.297/.298/.299/.300/.301/.302/.303/.304/.305/.306/.307/.308
// folds the neighbours hold), the fleet's own console never changes.

const ECHO_WEST_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Changed the block at (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*))$/

/**
 * The echo west census - the westernmost X the face's setblock
 * echoes reached (the min the floor carries on the signed domain -
 * the .307 word's own min-hand precedent).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{minEchoX: number}|null} the mass or null (non-array)
 */
export function echoWestCensus (lines) {
  if (!Array.isArray(lines)) return null
  let min = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = ECHO_WEST_RE.exec(l)
    if (!m) continue
    const x = Number(m[2])
    if (min === null || x < min) min = x // the west edge the echoes reached - the min hand the floor law holds
  }
  return { minEchoX: min === null ? 0 : min }
}

/**
 * The fence - every face the proven signed integer cell (the floor
 * the world's own west-of-origin coords hold - the .295 destroy-
 * mismatch coord law's own signed domain).
 *
 * @param {{back: {minEchoX: number}, prev: {minEchoX: number}, cur: {minEchoX: number}}} e
 * @returns {boolean}
 */
export function echoWestConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.minEchoX) && numOk(e.prev.minEchoX) && numOk(e.cur.minEchoX))
}

/**
 * The echo west weather's own two-step shape across three faces.
 *
 * @param {{back: {minEchoX: number}, prev: {minEchoX: number}, cur: {minEchoX: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function echoWestTrendRow (e) {
  if (!echoWestConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.minEchoX
  const p = prev.minEchoX
  const c = cur.minEchoX
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the floor never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .306 echoeast word keeps the same echo envelope's east edge seat - the west edge's own mirror sibling hand (its census returns the X maximum, never the floor), the .304 echoheight word keeps the same envelope's Y ceiling seat and the echoes count side-car, the .307 echofloor word keeps the same envelope's Y floor seat, the .305 echoedge word keeps the same envelope's north edge seat (the Z minimum), the .308 echosouth word keeps the same envelope's south edge seat (the Z maximum), the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo west edge's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server trend (v0.976.309): the setblock echo's own west edge fade ran two steps deep - ${arc} - the builders withdrew west, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server trend (v0.976.309): the setblock echo's own west edge swell ran two steps deep - ${arc} - the builders pressed east, ${tail}`
  }
  return `the server trend (v0.976.309): the setblock echo's own west edge swing - ${arc} - the builders traded between the faces, ${tail}`
}
