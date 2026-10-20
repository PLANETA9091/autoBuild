// (v0.976.311) THE LOST CONNECTION'S OWN TIMED OUT MASS - the server
// console's own '<name> lost connection: Timed out' INFO line the word
// prices across the faces (the count cell the dupclock echo fold buries
// in the merge class - the split-the-merge law the loss book holds:
// the .310 disconnect word split the Disconnected reason out of the
// merge mass, this word splits the Timed out sibling reason the same
// lane's own second hand). THE NAME AUDIT (the seat the v0.976.69
// rescue word owns): the timeouttrend name belongs to the fleet log's
// own rescue-budget expiry lane (the still-wet walks' own burn - a
// different book the same name family holds) - this word takes the
// timedouttrend name, co-existence by name never by duplication. THE
// EVIDENCE (the seat the vanilla server itself carries): the server's
// own handler prints '[20:46:41] [Server thread/INFO]: F3 lost
// connection: Timed out' (F501's own face) and '[23:50:45] [Server
// thread/INFO]: F5 lost connection: Timed out' (F505's own face) - one
// print per client the vanilla server dropped on a stalled read, the
// churn lane's own server-side echo - and no book owned the TIMED OUT
// count across the faces: the dupclock word (v0.729.0) prices the
// duplicate-loss churn, its v0.741.0 echo fold counts the non-dup
// losses as one MERGE mass (the Timed out bytes ride that fold blended,
// the reason class never split), the .310 disconnect word prices the
// Disconnected sibling alone (its grammar anchors 'Disconnected'
// byte-exact - the Timed out clause its tail names and never prices) -
// the per-reason timed out count itself rode unread (the REAL nine-face
// arc the faces carry: F496's console voiced 0 Timed out losses, F497
// 0, F498 0, F499 0, F500 0, F501 17, F502 0, F504 0, F505 17 - the
// REAL windows the seven-window arc holds: W1 the three-face zero
// silence, W2 the zero silence, W3 the zero silence, W4 the held step
// 0 -> 0 (+0) -> 17 (+17), W5 the swing 0 -> 17 (+17) -> 0 (-17), W6
// the held step 17 -> 0 (-17) -> 0 (+0), W7 the held step 0 -> 0 (+0)
// -> 17 (+17) - ONE REAL WINDOW ONE SWING the word born speaking one
// deep, the F503 zero face the sibling set's own skip holds
// (byte-verified 0) and the F505 re-voice the sibling's own condition
// keeps lawful - the fire-0743 law: the variant cell rides when the
// F505+ face re-voices the lane, the 17-line re-voice the face carries
// holds). THE CROSS-CHECK (the sibling arc the same mining pipeline
// re-proved): the Disconnected counts the same nine faces hold -
// 27/23/52/24/29/22/30/30/23 - match the .310 word's REAL eight-face
// arc byte-exact on every shared face, the census hand the family
// trusts.
//
// GRAMMAR: the dupclock word's own frame byte-exact (the same lane's
// own precedent the .310 sibling birth holds - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293 INFO frame
// convention, the '<name> lost connection: ' body the \S+ name cell
// the dupclock who-byte law rides, the reason clause anchored
// byte-exact to 'Timed out' - the Disconnected sibling clause the .310
// word owns never rides, the dup reason clause the DUP_LOSS_RE owns
// never rides, LINE END tail boundary (the .288 word's own
// precedent)); the near-miss lanes never ride - the bot-tagged prefix
// (the fleet log's own skin - the server console never wears it), the
// Disconnected sibling clause, the dup reason clause, the WARN frame,
// the pretty spacing, the missing reason clause, the plural body, the
// altered verb, the leading whitespace, the trailing junk, the CR
// tail, the one-digit hour skin. THE SCALAR THE TIMED OUT PRICES: the
// census counts the face's Timed out bytes whole (the .232 count law -
// the count never caps, the .299 Normal count's own precedent the
// split-the-merge family holds). CENSUS GUARD: zero fleet wiring, zero
// new fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane the server-console faces ride (the argv[6..8]
// tail the .278 contract extends, the .281 through .310 folds the
// neighbours hold), the fleet's own console never changes.

const TIMEDOUT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+) lost connection: Timed out$/

/**
 * The timed out census - the stalled-read drop mass the face's console
 * voiced (the count the merge fold buries - the split-the-merge law's
 * own second reason hand).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{timedouts: number}|null} the mass or null (non-array)
 */
export function timedoutCensus (lines) {
  if (!Array.isArray(lines)) return null
  let n = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (TIMEDOUT_RE.test(l)) n++ // the stalled drop the server voiced - the count the reason class holds
  }
  return { timedouts: n }
}

/**
 * The fence - every face the proven non-negative integer cell (the
 * count the .299 Normal count's own integer fence law holds).
 *
 * @param {{back: {timedouts: number}, prev: {timedouts: number}, cur: {timedouts: number}}} e
 * @returns {boolean}
 */
export function timedoutConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.timedouts) && numOk(e.prev.timedouts) && numOk(e.cur.timedouts))
}

/**
 * The timed out weather's own two-step shape across three faces.
 *
 * @param {{back: {timedouts: number}, prev: {timedouts: number}, cur: {timedouts: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function timedoutTrendRow (e) {
  if (!timedoutConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.timedouts
  const p = prev.timedouts
  const c = cur.timedouts
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the drop mass never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .310 disconnect word keeps the Disconnected reason seat (the same frame's own sibling hand - the reason class the merge fold held split the same lane, co-existence by reason clause never by duplication), the rescue timeout word (v0.976.69) keeps the fleet log's own budget-expiry seat (the still-wet walks' own burn - a different book the timeout name family holds), the dupclock word keeps the churn lane's own duplicate-loss seat (its v0.741.0 echo fold counts the non-dup bytes as one merge mass - this word prices the Timed out reason alone), the deathcause word keeps the death lane (its lost-connection guard a refusal never a price), the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the deathcause module keeps the join/leave lines - the timed out row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server trend (v0.976.311): the lost connection's own Timed out fade ran two steps deep - ${arc} - the server timed its clients out less each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server trend (v0.976.311): the lost connection's own Timed out swell ran two steps deep - ${arc} - the server timed its clients out more each face, ${tail}`
  }
  return `the server trend (v0.976.311): the lost connection's own Timed out swing - ${arc} - the server traded its stalled drops between the faces, ${tail}`
}
