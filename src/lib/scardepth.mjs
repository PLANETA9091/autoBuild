// (v0.976.46) THE SCAR'S OWN DEPTH - the unclosed starts' own magnitude
// shape across three faces. The field priced every branch by hand
// eight faces deep before the word existed (the book's own unclosed
// count, face by face, the ledger's own arithmetic: 325 rode 2, 326
// rode 1, 327 rode 0, 328 rode 0, 329 rode 0, 330 rode 3, 331 rode 1,
// 332 rode 0 - the DEPTH'S OWN FADE rode twice (2 -> 1 -> 0 the word's
// own birth face - the scar draining to clean - and 3 -> 1 -> 0 the
// storm's own healing two walks later), the DEPTH'S OWN SWING rode
// once (0 -> 3 -> 1 - the scar's return cut short one walk later),
// the held step priced the silence three times (1 -> 0 -> 0, 0 -> 0
// -> 0, 0 -> 0 -> 3 - a held depth is no direction), and the DEPTH'S
// OWN SWELL never rode the eight faces the ledger priced - the law
// prices it, the bars never invent it.
//
// The seat law: the shape's word (v0.976.36) prices the scar's own
// SHAPE (the presence's own seat trading across three faces - the
// return, the repeat, the run, the stay), the echo's word (v0.976.25)
// prices each step's own recurrence one at a time, the arms' word
// (v0.976.45) prices the STARTS' own mass - and the scar's own DEPTH
// - how deep the unclosed book runs, rising, falling, and trading
// across three faces - rode unnamed. A book present thin (1) and a
// book present deep (3) ride the same seat in the shape's word - the
// presence cannot price the depth; this word prices the depth.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// DEPTH'S OWN SWELL, fall then fall prices the DEPTH'S OWN FADE, a
// traded direction prices the DEPTH'S OWN SWING, a held step (any
// count-to-count zero) prices the honest silence (a held depth is no
// direction - the bars never invent; the watertrend family's own held
// law). The byte-pin: the trend row never speaks the shape's own
// verdict words (no return, no repeat, no stay, no run) - co-existence
// by seat never by duplication; the seat-law tail names the neighbor
// seats (the shape's word, the arms' word, the echo) - the names ride
// by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45). The fold receives the ledger's own totals
// per face (rescueLedger owns the unclosed - one-parser law: the same
// ledger runs over each face's own lines, never a fork; the SAME
// cells the scar trend's and the arms' wires already hold). No
// two-back face given -> no read (the carrier's own null pass).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {unclosed}, prev: {unclosed}, cur: {unclosed} }
 * @returns {boolean}
 */
export function scarDepthConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.unclosed) && s.unclosed >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the scar's own two-step depth shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {unclosed}, prev: {unclosed}, cur: {unclosed} }
 * @returns {string|null} the row byte, or null
 */
export function scarDepthRow (e) {
  if (!scarDepthConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.unclosed - back.unclosed
  const second = cur.unclosed - prev.unclosed
  const arc = `${back.unclosed} -> ${prev.unclosed} (${first >= 0 ? '+' : ''}${first}) -> ${cur.unclosed} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the shape\'s word prices the scar\'s own shape, the arms\' word prices the starts\' own mass, the echo prices each step one at a time - this word prices the scar\'s own depth, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the scar's own depth (v0.976.46): the depth's rise ran two steps deep - ${arc} - the depth's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the scar's own depth (v0.976.46): the depth's fall ran two steps deep - ${arc} - the depth's own fade ${tail}`
  }
  return `the scar's own depth (v0.976.46): the depth's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
