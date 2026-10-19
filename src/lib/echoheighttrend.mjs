// (v0.976.304) THE SETBLOCK SUCCESS ECHO'S OWN HEIGHT MASS - the
// server console's own 'Changed the block at X, Y, Z' success echo
// line the word prices across the faces. THE EVIDENCE (the seat the
// vanilla server itself carries - the same console the .278/.292/.293/
// .295/.296 words price): the server's own handler prints '[13:11:13]
// [Server thread/INFO]: Changed the block at -125, 77, 408' (F492's
// own face, run 39174346168's fleet of record) - one print per block
// the fleet's setblock placed, the success echo the dig conversation's
// own third voice - and no book owned the MASS across the faces: the
// .292 fill word prices the 'Successfully filled N block(s)' volume
// lane, the .296 refusal word prices the 'Could not set the block'
// lane, the .295 desync word prices the 'Mismatch in destroy block
// pos' WARN seat - and all three name the echo lane a sibling they
// never price (the .292 tail: 'the Changed the block at echo lane and
// the Could not set the block refusal lane keep their own rows
// beside'; the .296 tail: 'the Changed the block at echo the sibling
// prairies this word never prices'; the .295 tail names it too) - the
// circular referral rode the echo itself unread (the REAL seven-face
// arc the faces carry: F492's echoes topped at Y 77, F493 at Y 84,
// F494 at Y 78, F495 at Y 75, F496 at Y 76, F498 at Y 86, F500 at Y
// 75 - the REAL windows the arc holds: W1 the swing 77 -> 84 (+7) ->
// 78 (-6), W2 the fade 84 -> 78 (-6) -> 75 (-3), W3 the swing 78 ->
// 75 (-3) -> 76 (+1), W4 the swell 75 -> 76 (+1) -> 86 (+10) - FOUR
// REAL WINDOWS FOUR SPEAKS THE WORD BORN SPEAKING FOUR DEEP, the
// builders' own height ceiling the faces trade, the count hand flat
// 152 across all seven faces the side-car rides honest).
//
// GRAMMAR: one emitter one shape - the '[(HH:MM:SS)] [Server
// thread/INFO]: ' head the .278/.292/.293 INFO frame convention holds,
// the 'Changed the block at ' body, the three coord cells 'I, I, I'
// the proven signed integers no leading zero no plus (the .295
// destroy-mismatch coord law's own precedent - the negative X the
// faces print, the positive Y and Z), the single spaces between the
// cells, LINE END tail boundary (the .288 word's own precedent); the
// near-miss lanes never ride - the bot-tagged prefix, the WARN frame,
// the pretty spacing, the plural body, the altered verb, the missing
// coord cell, the float coord, the leading-zero coord, the plus coord,
// the leading whitespace, the trailing junk, the CR tail, the
// 'Successfully filled' sibling volume line, the 'Could not set the
// block' sibling refusal line. THE SCALAR THE HEIGHT PRICES: the
// census takes the MAX Y the face's echoes reached (the .289 maxPause
// law's own precedent - the .302 normal-peak birth the seat extends)
// while the echoes count the side-car rides (the count hand the same
// lane holds - the .289 pauses side-car precedent). CENSUS GUARD:
// zero fleet wiring, zero new fleet log lines - the word rides the
// reader's fold through the SECOND carrier lane the server-console
// faces ride (the argv[6..8] tail the .278 contract extends, the
// .281/.289/.290/.292/.293/.294/.295/.296/.297/.298/.299/.300/.301/
// .302 folds the neighbours hold), the fleet's own console never
// changes.

const ECHO_HEIGHT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Changed the block at (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*))$/

/**
 * The echo height census - the highest Y the face's setblock echoes
 * reached (the count hand the side-car rides).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxEchoY: number, echoes: number}|null} the mass or null (non-array)
 */
export function echoHeightCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = 0
  let echoes = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = ECHO_HEIGHT_RE.exec(l)
    if (!m) continue
    echoes += 1 // one line one echo (the .289 pauses side-car precedent)
    const y = Number(m[3])
    if (y > max) max = y // the height ceiling the echoes reached - the .289 maxPause law's own precedent
  }
  return { maxEchoY: max, echoes }
}

/**
 * The fence - every face the proven non-negative integer cells (the
 * height the world's own surface holds, the count the side-car
 * carries - the .292 fill word's own integer fence law).
 *
 * @param {{back: {maxEchoY: number, echoes: number}, prev: {maxEchoY: number, echoes: number}, cur: {maxEchoY: number, echoes: number}}} e
 * @returns {boolean}
 */
export function echoHeightConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  const faceOk = (f) => Boolean(f) && numOk(f.maxEchoY) && numOk(f.echoes)
  return Boolean(e.back && e.prev && e.cur && faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur))
}

/**
 * The echo height weather's own two-step shape across three faces.
 *
 * @param {{back: {maxEchoY: number, echoes: number}, prev: {maxEchoY: number, echoes: number}, cur: {maxEchoY: number, echoes: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function echoHeightTrendRow (e) {
  if (!echoHeightConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxEchoY
  const p = prev.maxEchoY
  const c = cur.maxEchoY
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the echo never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat - all three tails name this echo lane a sibling they never price, the circular referral the mass itself answers; the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo height's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server trend (v0.976.304): the setblock echo's own height fade ran two steps deep - ${arc} - the builders settled lower, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server trend (v0.976.304): the setblock echo's own height swell ran two steps deep - ${arc} - the builders climbed, ${tail}`
  }
  return `the server trend (v0.976.304): the setblock echo's own height swing - ${arc} - the builders traded between the faces, ${tail}`
}
