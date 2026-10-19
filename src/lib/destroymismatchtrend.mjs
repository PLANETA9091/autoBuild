// (v0.976.295) THE SERVER'S OWN DESYNC COMPLAINT MASS - the destroy
// block pos mismatch the word prices across the faces. THE EVIDENCE
// (the seat the fleet-server-log artifact lane carries): the vanilla
// server's own handler prints '[17:02:44] [Server thread/WARN]:
// Mismatch in destroy block pos: BlockPos{x=-117, y=68, z=416}
// BlockPos{x=-116, y=64, z=422}' (F496's own face, run 39287423190) -
// the server's own testimony that a bot's dig packet named a position
// the server's own world disagrees with, one print per desync the
// mining fleet provokes - and no book owned the mass across the
// faces: the .278 advancement word prices the same console's own
// advancement lines, the .281/.289/.290 gc words price the [gc] band,
// the .292 fill word prices the fill echo lane (its grammar refuses
// the mismatch line by frame and shape), the .293 boot word prices
// the boot prep duration, the deathcause module prices the
// join/leave/death lines - the desync mass itself rode unread (the
// REAL five-face arc the faces carry: F492 voiced 2 mismatches,
// F493 voiced 0, F494 voiced 0, F495 voiced 1, F496 voiced 2 - the
// three REAL windows the arc holds: W1 the 2 -> 0 -> 0 the held law
// keeps silent (the zero arrival the family's own held precedent
// prices), W2 the 0 -> 0 -> 1 the held first step keeps silent, W3
// the 0 -> 1 -> 2 the swell speaks - the desync grew two steps deep,
// THE REAL SWELL THE WORD BORN SPEAKING).
//
// GRAMMAR: the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/WARN]: ' head (the WARN level the desync lane's own
// skin - the .278/.292/.293 INFO frame convention never rides here),
// the 'Mismatch in destroy block pos: ' body, the two BlockPos cells
// the complaint carries - 'BlockPos{x=I, y=I, z=I}' twice, the coord
// cell I the proven signed integer (the minus the REAL faces carry:
// x=-117 y=68 z=416) no leading zero no plus - the single space
// between the two cells, LINE END tail boundary (the .288 word's own
// precedent); the near-miss lanes never ride - the bot-tagged prefix,
// the INFO frame, the pretty spacing, the single BlockPos, the
// altered verb, the float coord, the leading-zero coord, the plus
// coord, the leading whitespace, the trailing junk, the missing
// colon, the CR tail. THE SIBLING LANES keep their own rows beside -
// the 'Changed the block at' echo and the 'Could not set the block'
// refusal the same dig conversation holds this word never prices.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281/.289/.290/.292/.293 folds the neighbours hold),
// the fleet's own console never changes.

const MISMATCH_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/WARN\]: Mismatch in destroy block pos: BlockPos\{x=(-?(?:0|[1-9]\d*)), y=(-?(?:0|[1-9]\d*)), z=(-?(?:0|[1-9]\d*))\} BlockPos\{x=(-?(?:0|[1-9]\d*)), y=(-?(?:0|[1-9]\d*)), z=(-?(?:0|[1-9]\d*))\}$/

/**
 * The desync census - the complaints the face's server voiced.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{mismatches: number}|null} the mass or null (non-array)
 */
export function destroyMismatchCensus (lines) {
  if (!Array.isArray(lines)) return null
  let mismatches = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (MISMATCH_RE.test(l)) mismatches++ // the lane counts whole (the .232 census law - the count never caps)
  }
  return { mismatches }
}

/**
 * The fence - every face the proven non-negative integer cell.
 *
 * @param {{back: {mismatches: number}, prev: {mismatches: number}, cur: {mismatches: number}}} e
 * @returns {boolean}
 */
export function destroyMismatchConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.mismatches) && numOk(e.prev.mismatches) && numOk(e.cur.mismatches))
}

/**
 * The desync weather's own two-step shape across three faces.
 *
 * @param {{back: {mismatches: number}, prev: {mismatches: number}, cur: {mismatches: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function destroyMismatchTrendRow (e) {
  if (!destroyMismatchConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.mismatches
  const p = prev.mismatches
  const c = cur.mismatches
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the desync never invents - the REAL faces' own held
  // windows 2 -> 0 -> 0 and 0 -> 0 -> 1 the silence prices)
  if (first === 0 || second === 0) return null
  const tail = "(the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the .292 fill word keeps the fill echo lane, the .293 boot word keeps the prep duration seat, the deathcause module keeps the join/leave/death lines, the 'Changed the block at' echo and the 'Could not set the block' refusal keep their own rows beside (the same dig conversation's siblings this word never prices) - the desync mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server desync trend (v0.976.295): the destroy mismatch's own fade ran two steps deep - ${arc} - the dig packets fell back in line, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server desync trend (v0.976.295): the destroy mismatch's own swell ran two steps deep - ${arc} - the dig desync grew (the bots' own positions drifted), ${tail}`
  }
  return `the server desync trend (v0.976.295): the destroy mismatch's own swing - ${arc} - the desync traded between the faces, ${tail}`
}
