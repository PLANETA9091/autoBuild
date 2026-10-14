// (v0.976.56) THE BLIND-LIVE'S OWN TREND - the rescue lane's
// blind-live mid-episode stretches' own magnitude shape across three
// faces. The field priced every branch by hand seven faces deep
// before the word existed (the blind-live's own count - the ledger's
// own midEvents.blindLive, the rescue walks that lived through their
// blind stretch - face by face, the caches' own arithmetic: 334 rode
// 14, 335 rode 17, 336 rode 16, 337 rode 26, 338 rode 25, 339 rode
// 29, 340 rode 49 - the BLIND-LIVE'S OWN SWING rode four times
// (14 -> 17 -> 16, 17 -> 16 -> 26, 16 -> 26 -> 25, 26 -> 25 -> 29 -
// the blind stretch trading seats between the walks), the
// BLIND-LIVE'S OWN SWELL rode once (25 -> 29 -> 49 - the word's own
// birth window, the blind stretch swelling two walks straight into
// the face 340 storm's own 49), the BLIND-LIVE'S OWN FADE never rode
// the seven faces the ledger priced, and the held step never rode
// either (every step moved) - the law prices them, the bars never
// invent them.
//
// The seat law: the rescue mid seat's word (v0.790.0) prices WHICH
// mid-episode event owns the churn WITHIN one face - the seat and
// the riders, one row never both; the mid-episode bill prices each
// face's own five counters as bare bytes. The BLIND-LIVE'S OWN MASS
// - the pair's own shape ACROSS the walks - rode unnamed (the seat's
// word never leaves the single face, and the bill's bytes never
// price a shape at all). The branch law: ONE SHAPE ONE WORD - rise
// then rise prices the blind-live's own swell, fall then fall prices
// the blind-live's own fade, a traded direction prices the
// blind-live's own swing, a held step (any count-to-count zero)
// prices the honest silence (a held lane is no direction - the bars
// never invent; the watertrend family's own held law). The byte-pin:
// the trend row never speaks the shape's own verdict words (no
// return, no repeat, no stay, no run) nor the seat's own verdict
// word (no owns) - co-existence by seat never by duplication; the
// seat-law tail names the neighbor seats (the mid seat's word, the
// mid-episode bill) - the names ride by law, the neighbor verdicts
// never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50; the frozen ends' own, v0.976.52; the drain's own,
// v0.976.53; the orphans' own, v0.976.54). The fold receives the
// ledger's own midEvents.blindLive per face (rescueLedger owns the
// blind-live count - one-parser law: the same ledger runs over each
// face's own lines, never a fork; the SAME cells the mid seat's wire
// already holds). No two-back face given -> no read (the carrier's
// own null pass).
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
 *   { back: {blind}, prev: {blind}, cur: {blind} }
 * @returns {boolean}
 */
export function blindLiveTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.blind) && s.blind >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the blind-live's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {blind}, prev: {blind}, cur: {blind} }
 * @returns {string|null} the row byte, or null
 */
export function blindLiveTrendRow (e) {
  if (!blindLiveTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.blind - back.blind
  const second = cur.blind - prev.blind
  const arc = `${back.blind} -> ${prev.blind} (${first >= 0 ? '+' : ''}${first}) -> ${cur.blind} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the mid seat\'s word prices the face\'s own owner, the mid-episode bill prices the face\'s own counts - this word prices the blind-live\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the blind-live's own trend (v0.976.56): the blind-live's rise ran two steps deep - ${arc} - the blind-live's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the blind-live's own trend (v0.976.56): the blind-live's fall ran two steps deep - ${arc} - the blind-live's own fade ${tail}`
  }
  return `the blind-live's own trend (v0.976.56): the blind-live's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
