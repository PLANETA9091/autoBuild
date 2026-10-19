// (v0.976.306) THE SETBLOCK ECHO'S OWN EAST EDGE MASS - the server
// console's own 'Changed the block at X, Y, Z' success echo line's
// X cell's maximum the word prices across the faces (the sibling
// cell the .305 north-edge word's own envelope carries - the .305
// word prices the Z minimum and the .304 word prices the Y ceiling
// and the echoes count side-car, the X edge rode unread). THE
// EVIDENCE (the seat the vanilla server itself carries - the same
// console the .278/.292/.293/.295/.296/.304/.305 words price): the
// server's own handler prints '[13:11:22] [Server thread/INFO]:
// Changed the block at -109, 73, 386' (F492's own face) - one print
// per block the fleet's setblock placed, and the echoes' own X
// positions the dig envelope's east edge carries - and no book owned
// the EDGE across the faces: the .304 echoheight word prices the Y
// ceiling (its census returns {maxEchoY, echoes} - the Y cell and the
// count hand, never the X), the .305 echoedge word prices the Z
// minimum (its census returns {minEchoZ} - the north hand, never the
// X), the .292 fill word prices the volume lane, the .296 refusal
// word prices the refusal lane, the .295 desync word prices the WARN
// mismatch seat - the east edge itself rode unread (the REAL
// seven-face arc the faces carry: F492's echoes reached east to X
// -101, F493 to X -103, F494 to X -104, F495 to X -109, F496 to X
// -109, F498 to X -95, F500 to X -107 - the REAL windows the arc
// holds: W1 the fade -101 -> -103 (-2) -> -104 (-1), W2 the fade
// -103 -> -104 (-1) -> -109 (-5), W3 the held step -104 -> -109 (-5)
// -> -109 (0), W4 the held step -109 -> -109 (0) -> -95 (+14), W5
// the swing -109 -> -95 (+14) -> -107 (-12) - THREE REAL WINDOWS
// THREE SPEAKS THE WORD BORN SPEAKING THREE DEEP the two held steps
// the family's own held law keeps honest (the .300 birth's own held
// precedent), the builders' own east edge the faces trade; the X span
// maxX - minX flat 48 across all seven faces the envelope's own
// constant the edge law rides (the .305 word's own Z-span constant
// the sibling precedent holds)).
//
// GRAMMAR: the .305 word's own frame byte-exact (the same-lane
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
// SCALAR THE EDGE PRICES: the census takes the MAX X the face's
// echoes reached (the .289 maxPause law's own mirror on the signed
// domain - the edge the maximum carries, the east hand the negatives
// the world's own west-of-origin coords hold, the .305 same-line
// different-cell birth the seat extends). CENSUS GUARD: zero fleet
// wiring, zero new fleet log lines - the word rides the reader's fold
// through the SECOND carrier lane the server-console faces ride (the
// argv[6..8] tail the .278 contract extends, the .281/.289/.290/.292/
// .293/.294/.295/.296/.297/.298/.299/.300/.301/.302/.303/.304/.305
// folds the neighbours hold), the fleet's own console never changes.

const ECHO_EAST_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Changed the block at (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*))$/

/**
 * The echo east census - the easternmost X the face's setblock
 * echoes reached (the max the edge carries on the signed domain - the
 * .289 maxPause law's own mirror).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxEchoX: number}|null} the mass or null (non-array)
 */
export function echoEastCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = ECHO_EAST_RE.exec(l)
    if (!m) continue
    const x = Number(m[2])
    if (max === null || x > max) max = x // the east edge the echoes reached - the max hand the edge law holds
  }
  return { maxEchoX: max === null ? 0 : max }
}

/**
 * The fence - every face the proven signed integer cell (the edge the
 * world's own west-of-origin coords hold - the .295 destroy-mismatch
 * coord law's own signed domain).
 *
 * @param {{back: {maxEchoX: number}, prev: {maxEchoX: number}, cur: {maxEchoX: number}}} e
 * @returns {boolean}
 */
export function echoEastConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxEchoX) && numOk(e.prev.maxEchoX) && numOk(e.cur.maxEchoX))
}

/**
 * The echo east weather's own two-step shape across three faces.
 *
 * @param {{back: {maxEchoX: number}, prev: {maxEchoX: number}, cur: {maxEchoX: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function echoEastTrendRow (e) {
  if (!echoEastConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxEchoX
  const p = prev.maxEchoX
  const c = cur.maxEchoX
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the edge never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .305 echoedge word keeps the same echo envelope's north edge seat (its census returns the Z minimum - the X edge never its price), the .304 echoheight word keeps the same envelope's Y ceiling seat and the echoes count side-car, the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo east edge's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server trend (v0.976.306): the setblock echo's own east edge fade ran two steps deep - ${arc} - the builders withdrew west, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server trend (v0.976.306): the setblock echo's own east edge swell ran two steps deep - ${arc} - the builders pressed east, ${tail}`
  }
  return `the server trend (v0.976.306): the setblock echo's own east edge swing - ${arc} - the builders traded between the faces, ${tail}`
}
