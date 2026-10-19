// (v0.976.310) THE LOST CONNECTION'S OWN DISCONNECT MASS - the server
// console's own '<name> lost connection: Disconnected' INFO line the
// word prices across the faces (the count cell the dupclock echo fold
// buries in the merge class - the split-the-merge law the gc band
// holds: the .299 Normal count split the .281 merged pause book, the
// .301/.302/.303 kind-max words split the same band's merged cell,
// this word splits the loss book's reason class the same way). THE
// EVIDENCE (the seat the vanilla server itself carries): the server's
// own handler prints '[21:45:39] [Server thread/INFO]: F13 lost
// connection: Disconnected' (F502's own face) - one print per client
// the vanilla server dropped gracefully, the churn lane's own
// server-side echo - and no book owned the DISCONNECT count across
// the faces: the dupclock word (v0.729.0) prices the duplicate-loss
// churn ('You logged in from another location' - its own class), and
// its v0.741.0 echo fold counts the non-dup losses as one MERGE mass
// (otherLosses + echo.byBot + midrun/shutdown split - the Disconnected
// and the Timed out bytes ride that fold blended, the reason class
// never split), the deathcause word refuses the line (its /\blost
// connection\b/ guard keeps the death lane clean - a refusal never a
// price), the kick bill prices the fleet log's own event cells - the
// per-reason count itself rode unread (the REAL eight-face arc the
// faces carry: F496's console voiced 27 Disconnected losses, F497 23,
// F498 52, F499 24, F500 29, F501 22, F502 30, F504 30 - the REAL
// windows the seven-face arc holds: W1 the swing 27 -> 23 (-4) -> 52
// (+29), W2 the swing 23 -> 52 (+29) -> 24 (-28), W3 the swing 52 ->
// 24 (-28) -> 29 (+5), W4 the swing 24 -> 29 (+5) -> 22 (-7), W5 the
// swing 29 -> 22 (-7) -> 30 (+8), W6 the held step 22 -> 30 (+8) ->
// 30 (0) - FIVE REAL WINDOWS FIVE SWINGS ONE HELD the word born
// speaking five deep, the server's own drop mass the faces pace; the
// Timed out reason rode F501's face alone (17 bytes the merge fold
// blends away - the sibling reason the tail names, never prices)).
//
// GRAMMAR: the dupclock word's own frame byte-exact (the same lane's
// own precedent that birth holds - the '[(HH:MM:SS)] [Server
// thread/INFO]: ' head the .278/.292/.293 INFO frame convention holds,
// the '<name> lost connection: ' body the \S+ name cell the dupclock
// who-byte law rides, the reason clause anchored byte-exact to
// 'Disconnected' - the dup reason clause the DUP_LOSS_RE owns never
// rides, the Timed out sibling clause never rides, LINE END tail
// boundary (the .288 word's own precedent)); the near-miss lanes
// never ride - the bot-tagged prefix (the fleet log's own skin - the
// server console never wears it), the dup reason clause, the Timed
// out sibling, the WARN frame, the pretty spacing, the missing reason
// clause, the plural body, the altered verb, the leading whitespace,
// the trailing junk, the CR tail, the one-digit hour skin. THE SCALAR
// THE DISCONNECT PRICES: the census counts the face's Disconnected
// bytes whole (the .232 count law - the count never caps, the .299
// Normal count's own precedent the split-the-merge family holds).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281/.289/.290/.292/.293/.294/.295/.296/.297/.298/
// .299/.300/.301/.302/.303/.304/.305/.306/.307/.308/.309 folds the
// neighbours hold), the fleet's own console never changes.

const DISCONNECT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+) lost connection: Disconnected$/

/**
 * The disconnect census - the drop mass the face's console voiced
 * (the count the merge fold buries - the split-the-merge law's own
 * newest hand).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{disconnects: number}|null} the mass or null (non-array)
 */
export function disconnectCensus (lines) {
  if (!Array.isArray(lines)) return null
  let n = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (DISCONNECT_RE.test(l)) n++ // the drop the server voiced - the count the reason class holds
  }
  return { disconnects: n }
}

/**
 * The fence - every face the proven non-negative integer cell (the
 * count the .299 Normal count's own integer fence law holds).
 *
 * @param {{back: {disconnects: number}, prev: {disconnects: number}, cur: {disconnects: number}}} e
 * @returns {boolean}
 */
export function disconnectConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.disconnects) && numOk(e.prev.disconnects) && numOk(e.cur.disconnects))
}

/**
 * The disconnect weather's own two-step shape across three faces.
 *
 * @param {{back: {disconnects: number}, prev: {disconnects: number}, cur: {disconnects: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function disconnectTrendRow (e) {
  if (!disconnectConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.disconnects
  const p = prev.disconnects
  const c = cur.disconnects
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the drop mass never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the dupclock word keeps the churn lane's own duplicate-loss seat (its v0.741.0 echo fold counts the non-dup bytes as one merge mass - otherLosses, the echo byBot, the midrun and shutdown split - this word prices the Disconnected reason alone, co-existence by reason class never by duplication), the deathcause word keeps the death lane (its lost-connection guard a refusal never a price), the kick bill keeps the fleet log's own event cells, the 'Timed out' sibling reason keeps the merge fold's own remaining bytes (F501's face rode 17 - a lane the tail names and never prices), the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the deathcause module keeps the join/leave lines - the disconnect's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server trend (v0.976.310): the lost connection's own disconnect fade ran two steps deep - ${arc} - the server held its clients, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server trend (v0.976.310): the lost connection's own disconnect swell ran two steps deep - ${arc} - the server dropped more each face, ${tail}`
  }
  return `the server trend (v0.976.310): the lost connection's own disconnect swing - ${arc} - the server traded its drops between the faces, ${tail}`
}
