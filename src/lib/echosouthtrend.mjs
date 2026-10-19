// (v0.976.308) THE SETBLOCK ECHO'S OWN SOUTH EDGE MASS - the server
// console's own 'Changed the block at X, Y, Z' success echo line's
// Z cell's maximum the word prices across the faces (the sibling cell
// the .305 north-edge word's own envelope carries - the .305 word
// prices the Z minimum, the .304 word prices the Y maximum and the
// echoes count side-car, the .306 word prices the X maximum, the .307
// word prices the Y floor, the Z south edge rode unread). THE
// EVIDENCE (the seat the vanilla server itself carries - the same
// console the .278/.292/.293/.295/.296/.304/.305/.306/.307 words
// price): the server's own handler prints '[18:44:05] [Server
// thread/INFO]: Changed the block at -139, 81, 414' (F498's own face)
// - one print per block the fleet's setblock placed, and the echoes'
// own Z positions the dig envelope's south edge carries - and no book
// owned the SOUTH EDGE across the faces: the .305 echoedge word
// prices the Z minimum (its census returns {minEchoZ} - the north
// hand, never the south), the .304 echoheight word prices the Y
// ceiling and the echoes count side-car, the .306 echoeast word
// prices the X maximum, the .307 echofloor word prices the Y floor,
// the .292 fill word prices the volume lane, the .296 refusal word
// prices the refusal lane, the .295 desync word prices the WARN
// mismatch seat - the Z south edge itself rode unread (the REAL
// five-face arc the faces carry: F498's echoes reached south to Z 414,
// F499 to Z 422, F500 to Z 408, F501 to Z 412, F502 to Z 408 - the
// REAL windows the arc holds: W1 the swing 414 -> 422 (+8) -> 408
// (-14), W2 the swing 422 -> 408 (-14) -> 412 (+4), W3 the swing 408
// -> 412 (+4) -> 408 (-4) - THREE REAL WINDOWS THREE SWINGS ZERO HELD
// the word born speaking three deep every window traded, the
// builders' own south edge the faces pace; the Z span maxZ - minZ
// flat 28 across all five faces the envelope's own constant the edge
// law rides (the .306 word's own X-span constant and the .305 word's
// own Z-span constant and the .307 word's own Y-span constant the
// sibling precedents hold - the envelope's span the constant the
// edge hands never move)).
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
// SCALAR THE SOUTH EDGE PRICES: the census takes the MAX Z the face's
// echoes reached (the .306 east-edge word's own max-hand precedent on
// the same hand's own signed domain - the .304 Y ceiling the max-hand
// birth the seat extends, the .289 maxPause law's own max hand); the
// SAME-CELL DIFFERENT-HAND LAW the .304/.307 Y pair holds - the .305
// word prices the Z cell's minimum, this word prices the Z cell's
// maximum, the two hands never merge (co-existence by hand never by
// duplication). CENSUS GUARD: zero fleet wiring, zero new fleet log
// lines - the word rides the reader's fold through the SECOND carrier
// lane the server-console faces ride (the argv[6..8] tail the .278
// contract extends, the .281/.289/.290/.292/.293/.294/.295/.296/
// .297/.298/.299/.300/.301/.302/.303/.304/.305/.306/.307 folds the
// neighbours hold), the fleet's own console never changes.

const ECHO_SOUTH_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Changed the block at (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*))$/

/**
 * The echo south edge census - the furthest Z the face's setblock
 * echoes reached (the max the south edge carries - the .306 word's
 * own max-hand precedent on the signed domain).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxEchoZ: number}|null} the mass or null (non-array)
 */
export function echoSouthCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = ECHO_SOUTH_RE.exec(l)
    if (!m) continue
    const z = Number(m[4])
    if (max === null || z > max) max = z // the south edge the echoes reached - the max hand the edge law holds
  }
  return { maxEchoZ: max === null ? 0 : max }
}

/**
 * The fence - every face the proven signed integer cell (the edge the
 * world's own coords hold - the .295 destroy-mismatch coord law's own
 * signed domain).
 *
 * @param {{back: {maxEchoZ: number}, prev: {maxEchoZ: number}, cur: {maxEchoZ: number}}} e
 * @returns {boolean}
 */
export function echoSouthConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxEchoZ) && numOk(e.prev.maxEchoZ) && numOk(e.cur.maxEchoZ))
}

/**
 * The echo south edge weather's own two-step shape across three faces.
 *
 * @param {{back: {maxEchoZ: number}, prev: {maxEchoZ: number}, cur: {maxEchoZ: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function echoSouthTrendRow (e) {
  if (!echoSouthConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxEchoZ
  const p = prev.maxEchoZ
  const c = cur.maxEchoZ
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the edge never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .305 echoedge word keeps the same echo envelope's north edge seat (the Z minimum - the south edge's own sibling hand the same Z cell holds), the .304 echoheight word keeps the same envelope's Y ceiling seat and the echoes count side-car, the .306 echoeast word keeps the same envelope's east edge seat (the X maximum), the .307 echofloor word keeps the same envelope's floor seat (the Y minimum), the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo south edge's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server trend (v0.976.308): the setblock echo's own south edge fade ran two steps deep - ${arc} - the builders withdrew north, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server trend (v0.976.308): the setblock echo's own south edge swell ran two steps deep - ${arc} - the builders pressed south, ${tail}`
  }
  return `the server trend (v0.976.308): the setblock echo's own south edge swing - ${arc} - the builders traded between the faces, ${tail}`
}
