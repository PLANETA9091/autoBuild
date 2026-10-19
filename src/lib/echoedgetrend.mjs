// (v0.976.305) THE SETBLOCK ECHO'S OWN NORTH EDGE MASS - the server
// console's own 'Changed the block at X, Y, Z' success echo line's
// Z cell's minimum the word prices across the faces (the sibling
// cell the .304 height word's own envelope carries - the .304 word
// prices the Y ceiling and the echoes count side-car, the Z edge rode
// unread). THE EVIDENCE (the seat the vanilla server itself carries -
// the same console the .278/.292/.293/.295/.296/.304 words price): the
// server's own handler prints '[13:11:22] [Server thread/INFO]:
// Changed the block at -109, 73, 386' (F492's own face) - one print
// per block the fleet's setblock placed, and the echoes' own Z
// positions the dig envelope's north edge carries - and no book owned
// the EDGE across the faces: the .304 echoheight word prices the Y
// ceiling (its census returns {maxEchoY, echoes} - the Y cell and the
// count hand, never the Z), the .292 fill word prices the volume lane,
// the .296 refusal word prices the refusal lane, the .295 desync word
// prices the WARN mismatch seat - the north edge itself rode unread
// (the REAL seven-face arc the faces carry: F492's echoes reached
// north to Z 386, F493 to Z 388, F494 to Z 389, F495 to Z 396, F496
// to Z 395, F498 to Z 386, F500 to Z 380 - the REAL windows the arc
// holds: W1 the swell 386 -> 388 (+2) -> 389 (+1), W2 the swell 388
// -> 389 (+1) -> 396 (+7), W3 the swing 389 -> 396 (+7) -> 395 (-1),
// W4 the fade 396 -> 395 (-1) -> 386 (-9), W5 the fade 395 -> 386
// (-9) -> 380 (-6) - FIVE REAL WINDOWS FIVE SPEAKS THE WORD BORN
// SPEAKING FIVE DEEP, the builders' own north edge the faces trade;
// the Z span maxZ - minZ flat 28 across all seven faces the envelope's
// own constant the edge law rides).
//
// GRAMMAR: the .304 word's own frame byte-exact (the same-lane
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
// SCALAR THE EDGE PRICES: the census takes the MIN Z the face's
// echoes reached (the .289 maxPause law's own mirror - the edge the
// minimum carries, the .304 same-line different-cell birth the seat
// extends). CENSUS GUARD: zero fleet wiring, zero new fleet log lines
// - the word rides the reader's fold through the SECOND carrier lane
// the server-console faces ride (the argv[6..8] tail the .278
// contract extends, the .281/.289/.290/.292/.293/.294/.295/.296/
// .297/.298/.299/.300/.301/.302/.303/.304 folds the neighbours hold),
// the fleet's own console never changes.

const ECHO_EDGE_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Changed the block at (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*))$/

/**
 * The echo edge census - the northernmost Z the face's setblock
 * echoes reached (the min the edge carries - the .289 maxPause law's
 * own mirror).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{minEchoZ: number}|null} the mass or null (non-array)
 */
export function echoEdgeCensus (lines) {
  if (!Array.isArray(lines)) return null
  let min = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = ECHO_EDGE_RE.exec(l)
    if (!m) continue
    const z = Number(m[4])
    if (min === 0 || z < min) min = z // the north edge the echoes reached - the min hand the edge law holds
  }
  return { minEchoZ: min }
}

/**
 * The fence - every face the proven non-negative integer cell (the
 * edge the world's own surface holds - the .292 fill word's own
 * integer fence law).
 *
 * @param {{back: {minEchoZ: number}, prev: {minEchoZ: number}, cur: {minEchoZ: number}}} e
 * @returns {boolean}
 */
export function echoEdgeConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.minEchoZ) && numOk(e.prev.minEchoZ) && numOk(e.cur.minEchoZ))
}

/**
 * The echo edge weather's own two-step shape across three faces.
 *
 * @param {{back: {minEchoZ: number}, prev: {minEchoZ: number}, cur: {minEchoZ: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function echoEdgeTrendRow (e) {
  if (!echoEdgeConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.minEchoZ
  const p = prev.minEchoZ
  const c = cur.minEchoZ
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the edge never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .304 echoheight word keeps the same echo envelope's Y ceiling seat and the echoes count side-car (its census returns the Y cell and the count hand - the Z edge never its price), the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo edge's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server trend (v0.976.305): the setblock echo's own north edge fade ran two steps deep - ${arc} - the builders withdrew south, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server trend (v0.976.305): the setblock echo's own north edge swell ran two steps deep - ${arc} - the builders pressed north, ${tail}`
  }
  return `the server trend (v0.976.305): the setblock echo's own north edge swing - ${arc} - the builders traded between the faces, ${tail}`
}
