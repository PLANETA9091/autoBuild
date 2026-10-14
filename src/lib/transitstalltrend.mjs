// (v0.976.60) THE TRANSIT-STALL'S OWN TREND - the rescue lane's
// transit-stalled walks' own magnitude shape across three faces. The
// field priced every branch by hand ten faces deep before the word
// existed (the transit-stall's own count - the ledger's own
// midEvents.transitStall, the walks stalled in transit - face by
// face, the caches' own arithmetic: 334 rode 9, 335 rode 1, 336 rode
// 1, 337 rode 0, 338 rode 5, 339 rode 0, 340 rode 0, 341 rode 3, 342
// rode 0, 343 rode 3 - the TRANSIT-STALL'S OWN SWING rode four times
// (1 -> 0 -> 5 on the FACE 338 chain, 0 -> 5 -> 0 on the FACE 339
// chain, 0 -> 3 -> 0 on the FACE 342 chain, 3 -> 0 -> 3 on the FACE
// 343 chain - the stall trading seats between the walks, the quiet
// face's own drain and the refill one walk later), the TRANSIT-STALL'S
// OWN SWELL and the FADE never rode the ten faces the ledger priced,
// the held step rode three times (1 -> 1 -> 0 on the FACE 337 chain,
// 5 -> 0 -> 0 on the FACE 340 chain, 0 -> 0 -> 3 on the FACE 341
// chain - the law prices it, the bars never invent it).
//
// The seat law: the rescue mid seat's word (v0.790.0) prices WHICH
// mid-episode event owns the churn WITHIN one face - the seat and
// the riders, one row never both; the mid-episode bill prices each
// face's own five counters as bare bytes. The TRANSIT-STALL'S OWN
// MASS - the pair's own shape ACROSS the walks - rode unnamed (the
// seat's word never leaves the single face, and the bill's bytes
// never price a shape at all). The branch law: ONE SHAPE ONE WORD -
// rise then rise prices the transit-stall's own swell, fall then
// fall prices the transit-stall's own fade, a traded direction
// prices the transit-stall's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seat's own verdict word (no owns) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the mid
// seat's word, the mid-episode bill) - the names ride by law, the
// neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50; the frozen ends' own, v0.976.52; the drain's own,
// v0.976.53; the orphans' own, v0.976.54; the blind-live's own,
// v0.976.56; the no-ground-truth's own, v0.976.57; the shore-stall's
// own, v0.976.58; the shore-pin's own, v0.976.59). The fold receives
// the ledger's own midEvents.transitStall per face (rescueLedger owns
// the transit-stall count - one-parser law: the same ledger runs over
// each face's own lines, never a fork; the SAME cells the mid seat's
// wire and the bill's bytes already hold). No two-back face given ->
// no read (the carrier's own null pass).
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
 *   { back: {transit}, prev: {transit}, cur: {transit} }
 * @returns {boolean}
 */
export function transitStallTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.transit) && s.transit >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the transit-stall's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {transit}, prev: {transit}, cur: {transit} }
 * @returns {string|null} the row byte, or null
 */
export function transitStallTrendRow (e) {
  if (!transitStallTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.transit - back.transit
  const second = cur.transit - prev.transit
  const arc = `${back.transit} -> ${prev.transit} (${first >= 0 ? '+' : ''}${first}) -> ${cur.transit} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the mid seat\'s word prices the face\'s own owner, the mid-episode bill prices the face\'s own five counters - this word prices the transit-stall\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the transit-stall's own trend (v0.976.60): the transit-stall's rise ran two steps deep - ${arc} - the transit-stall's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the transit-stall's own trend (v0.976.60): the transit-stall's fall ran two steps deep - ${arc} - the transit-stall's own fade ${tail}`
  }
  return `the transit-stall's own trend (v0.976.60): the transit-stall's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
