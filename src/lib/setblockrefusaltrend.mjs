// (v0.976.296) THE SETBLOCK REFUSAL'S OWN LAWFUL-ZERO MASS - the
// 'Could not set the block' refusal line the word prices across the
// faces. THE EVIDENCE (the seat the fleet-server-log artifact lane
// carries): the vanilla server's own handler prints '[16:57:27]
// [Server thread/INFO]: Could not set the block' (F496's own face,
// run 39287423190) - the server's own refusal to place a block the
// fleet's fill command named, one print per refused block the world
// keeps - and no book owned the mass across the faces: the .278
// advancement word prices the same console's own advancement lines,
// the .281/.289/.290 gc words price the [gc] band, the .292 fill
// word prices the fill volume lane ('Successfully filled N
// block(s)') and its own tail NAMED this refusal lane a sibling it
// never prices, the .293 boot word prices the boot prep duration,
// the .295 desync word prices the destroy mismatch seat (its WARN
// frame refuses this INFO line), the deathcause module prices the
// join/leave/death lines - the refusal mass itself rode unread, and
// the fire-0043 seat audit priced the lane's twelve-face shape and
// KEPT it for a future lawful-zero seat (the .288 counterwt word's
// own held-prairie birth the precedent holds): the REAL thirteen-
// face arc the faces carry - twelve faces audited flat 4 (the
// setblock-arc-mine-0043.mjs record) and F496's own face voicing 4 -
// every REAL window the arc holds a held step, the deterministic
// setblock routine the world never varies, THE WORD BORN INTO THE
// LAWFUL SILENCE the flat prairie keeps (a guard seat: the day the
// fleet's fills meet new refusals the word speaks the first word).
//
// GRAMMAR: the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head (the INFO frame the refusal lane's
// own skin - the .278/.292/.293 INFO frame convention holds), the
// 'Could not set the block' body byte-exact (no number cell - the
// census the lane counts whole, one print per refused block), LINE
// END tail boundary (the .288 word's own precedent); the near-miss
// lanes never ride - the bot-tagged prefix, the WARN frame, the
// pretty spacing, the trailing period, the lowercase skin, the
// altered verb, the plural body, the leading whitespace, the
// trailing junk, the leading-zero none (no cell the line carries),
// the CR tail, the 'Changed the block at' sibling echo line, the
// 'Successfully filled' sibling volume line. THE SIBLING LANES keep
// their own rows beside - the 'Changed the block at' echo the .292
// word's own tail named this word's sister prairie, the desync
// mismatch the .295 word prices, the same setblock conversation
// holds them all. CENSUS GUARD: zero fleet wiring, zero new fleet
// log lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail
// the .278 contract extends, the .281/.289/.290/.292/.293/.295
// folds the neighbours hold), the fleet's own console never changes.

const REFUSAL_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Could not set the block$/

/**
 * The setblock refusal census - the refusals the face's server voiced.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{refusals: number}|null} the mass or null (non-array)
 */
export function setblockRefusalCensus (lines) {
  if (!Array.isArray(lines)) return null
  let refusals = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (REFUSAL_RE.test(l)) refusals++ // the lane counts whole (the .232 census law - the count never caps)
  }
  return { refusals }
}

/**
 * The fence - every face the proven non-negative integer cell.
 *
 * @param {{back: {refusals: number}, prev: {refusals: number}, cur: {refusals: number}}} e
 * @returns {boolean}
 */
export function setblockRefusalConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.refusals) && numOk(e.prev.refusals) && numOk(e.cur.refusals))
}

/**
 * The setblock refusal weather's own two-step shape across three faces.
 *
 * @param {{back: {refusals: number}, prev: {refusals: number}, cur: {refusals: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function setblockRefusalTrendRow (e) {
  if (!setblockRefusalConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.refusals
  const p = prev.refusals
  const c = cur.refusals
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the refusal never invents - the REAL flat prairie
  // 4 -> 4 -> 4 the silence prices, the word's own birth shape)
  if (first === 0 || second === 0) return null
  const tail = "(the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the .292 fill word keeps the fill volume lane and the 'Changed the block at' echo the sibling prairies this word never prices, the .293 boot word keeps the prep duration seat, the .295 desync word keeps the destroy mismatch seat (its WARN frame refuses this INFO line), the deathcause module keeps the join/leave/death lines - the refusal mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the setblock refusal trend (v0.976.296): the setblock refusal's own fade ran two steps deep - ${arc} - the fills met fewer walls, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the setblock refusal trend (v0.976.296): the setblock refusal's own swell ran two steps deep - ${arc} - the refusals grew (the fills met the world's own walls), ${tail}`
  }
  return `the setblock refusal trend (v0.976.296): the setblock refusal's own swing - ${arc} - the refusals traded between the faces, ${tail}`
}
