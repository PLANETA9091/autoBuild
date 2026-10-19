// (v0.976.307) THE SETBLOCK ECHO'S OWN FLOOR MASS - the server
// console's own 'Changed the block at X, Y, Z' success echo line's
// Y cell's minimum the word prices across the faces (the sibling
// cell the .304 Y-ceiling word's own envelope carries - the .304
// word prices the Y maximum and the echoes count side-car, the .305
// word prices the Z minimum, the .306 word prices the X maximum, the
// Y floor rode unread). THE EVIDENCE (the seat the vanilla server
// itself carries - the same console the .278/.292/.293/.295/.296/
// .304/.305/.306 words price): the server's own handler prints
// '[13:11:22] [Server thread/INFO]: Changed the block at -139, 72,
// 388' (F492's own face) - one print per block the fleet's setblock
// placed, and the echoes' own Y positions the dig envelope's floor
// carries - and no book owned the FLOOR across the faces: the .304
// echoheight word prices the Y ceiling (its census returns {maxEchoY,
// echoes} - the maximum hand and the count hand, never the floor),
// the .305 echoedge word prices the Z minimum, the .306 echoeast word
// prices the X maximum, the .292 fill word prices the volume lane,
// the .296 refusal word prices the refusal lane, the .295 desync word
// prices the WARN mismatch seat - the Y floor itself rode unread (the
// REAL seven-face arc the faces carry: F492's echoes reached down to
// Y 72, F493 to Y 79, F494 to Y 73, F495 to Y 70, F496 to Y 71, F498
// to Y 81, F500 to Y 70 - the REAL windows the arc holds: W1 the
// swing 72 -> 79 (+7) -> 73 (-6), W2 the fade 79 -> 73 (-6) -> 70
// (-3), W3 the swing 73 -> 70 (-3) -> 71 (+1), W4 the swell 70 -> 71
// (+1) -> 81 (+10), W5 the swing 71 -> 81 (+10) -> 70 (-11) - FIVE
// REAL WINDOWS FOUR SPEAKS ONE FADE the word born speaking five deep
// the deepest birth the four-swing family holds, the builders' own
// floor the faces trade; the Y span maxY - minY flat 5 across all
// seven faces the envelope's own constant the floor law rides (the
// .306 word's own X-span constant and the .305 word's own Z-span
// constant the sibling precedents hold)).
//
// GRAMMAR: the .306 word's own frame byte-exact (the same-lane
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
// SCALAR THE FLOOR PRICES: the census takes the MIN Y the face's
// echoes reached (the .289 maxPause law's own mirror - the edge the
// minimum carries, the .305 same-line different-cell birth the seat
// extends, the MIN hand the floor law holds - the .305 word's own
// min-hand precedent the Z minimum birth carries). CENSUS GUARD: zero
// fleet wiring, zero new fleet log lines - the word rides the
// reader's fold through the SECOND carrier lane the server-console
// faces ride (the argv[6..8] tail the .278 contract extends, the
// .281/.289/.290/.292/.293/.294/.295/.296/.297/.298/.299/.300/.301/
// .302/.303/.304/.305/.306 folds the neighbours hold), the fleet's
// own console never changes.

const ECHO_FLOOR_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Changed the block at (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*))$/

/**
 * The echo floor census - the deepest Y the face's setblock echoes
 * reached (the min the floor carries - the .305 word's own min-hand
 * precedent on the signed domain).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{minEchoY: number}|null} the mass or null (non-array)
 */
export function echoFloorCensus (lines) {
  if (!Array.isArray(lines)) return null
  let min = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = ECHO_FLOOR_RE.exec(l)
    if (!m) continue
    const y = Number(m[3])
    if (min === null || y < min) min = y // the floor the echoes reached - the min hand the floor law holds
  }
  return { minEchoY: min === null ? 0 : min }
}

/**
 * The fence - every face the proven signed integer cell (the floor
 * the world's own depth coords hold - the .295 destroy-mismatch coord
 * law's own signed domain).
 *
 * @param {{back: {minEchoY: number}, prev: {minEchoY: number}, cur: {minEchoY: number}}} e
 * @returns {boolean}
 */
export function echoFloorConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.minEchoY) && numOk(e.prev.minEchoY) && numOk(e.cur.minEchoY))
}

/**
 * The echo floor weather's own two-step shape across three faces.
 *
 * @param {{back: {minEchoY: number}, prev: {minEchoY: number}, cur: {minEchoY: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function echoFloorTrendRow (e) {
  if (!echoFloorConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.minEchoY
  const p = prev.minEchoY
  const c = cur.minEchoY
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the floor never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .304 echoheight word keeps the same echo envelope's Y ceiling seat and the echoes count side-car - the floor's own sibling above (its census returns the Y maximum, never the floor), the .305 echoedge word keeps the same envelope's north edge seat (the Z minimum), the .306 echoeast word keeps the same envelope's east edge seat (the X maximum), the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo floor's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server trend (v0.976.307): the setblock echo's own floor fade ran two steps deep - ${arc} - the builders climbed off the floor, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server trend (v0.976.307): the setblock echo's own floor swell ran two steps deep - ${arc} - the builders dug beneath the floor, ${tail}`
  }
  return `the server trend (v0.976.307): the setblock echo's own floor swing - ${arc} - the builders traded between the faces, ${tail}`
}
