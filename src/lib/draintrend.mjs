// (v0.976.53) THE DRAIN'S OWN TREND - the death drops' own magnitude
// shape across three faces. The field priced every branch by hand
// thirteen faces deep before the word existed (the drops' own u - the
// seal death ledger's own lostTotal, the mass the lane's deaths
// scattered on the ground - face by face, the census's own arithmetic:
// 325 rode 650, 326 rode 116, 327 rode 407, 328 rode 374, 329 rode
// 326, 330 rode 264, 331 rode 190, 332 rode 178, 334 rode 968, 335
// rode 284, 336 rode 436, 337 rode 196, 338 rode 643 - the DRAIN'S
// OWN FADE rode four times (407 -> 374 -> 326, 374 -> 326 -> 264,
// 326 -> 264 -> 190, 264 -> 190 -> 178 - the long drain five faces
// deep 407 -> 374 -> 326 -> 264 -> 190 -> 178, the storm's own drops
// draining walk after walk), the DRAIN'S OWN SWING rode five times
// (650 -> 116 -> 407, 116 -> 407 -> 374, 968 -> 284 -> 436,
// 284 -> 436 -> 196, 436 -> 196 -> 643 - the drain trading seats
// between the walks: the storm's own loss refilling and easing one
// walk later, and the face 334 storm's own 968u draining one walk
// later to 284 then returning 436), and the DRAIN'S OWN SWELL and the
// held step never rode the thirteen faces the census priced - the law
// prices them, the bars never invent them.
//
// The seat law: the siege's word (v0.976.44) prices the DEATHS' own
// mass - the count of the fallen - and the DRAIN'S OWN MASS - the u
// the drops scattered on the ground - rode unnamed (the deaths are a
// count, the drain is a weight: different books). The thirds' own
// word (v0.883.0) prices the split WITHIN one face - this word prices
// the pair's own shape ACROSS the walks. The stranded piles' own word
// (v0.476.0) prices the mass that STAYED where it fell - the drain
// prices the mass the deaths LOST. The branch law: ONE SHAPE ONE WORD
// - rise then rise prices the DRAIN'S OWN SWELL, fall then fall
// prices the DRAIN'S OWN FADE, a traded direction prices the DRAIN'S
// OWN SWING, a held step (any count-to-count zero) prices the honest
// silence (a held lane is no direction - the bars never invent; the
// watertrend family's own held law). The byte-pin: the trend row
// never speaks the shape's own verdict words (no return, no repeat,
// no stay, no run) nor the bill's own verdict word (no owns) -
// co-existence by seat never by duplication; the seat-law tail names
// the neighbor seats (the siege's word, the thirds' word, the
// stranded piles' word) - the names ride by law, the neighbor
// verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50; the frozen ends' own, v0.976.52). The fold receives the
// census's own totals per face (sealDeathCensus owns the lostTotal -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cells the thirds' word's, the clock's and
// the seal watch's wires already hold). No two-back face given -> no
// read (the carrier's own null pass).
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
 *   { back: {lost}, prev: {lost}, cur: {lost} }
 * @returns {boolean}
 */
export function drainTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.lost) && s.lost >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the drain's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {lost}, prev: {lost}, cur: {lost} }
 * @returns {string|null} the row byte, or null
 */
export function drainTrendRow (e) {
  if (!drainTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.lost - back.lost
  const second = cur.lost - prev.lost
  const arc = `${back.lost} -> ${prev.lost} (${first >= 0 ? '+' : ''}${first}) -> ${cur.lost} (${second >= 0 ? '+' : ''}${second})u`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the siege\'s word prices the deaths\' own mass, the thirds\' word prices the face\'s own split, the stranded piles\' word prices the mass that stayed - this word prices the drops\' own u, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the drain's own trend (v0.976.53): the drain's rise ran two steps deep - ${arc} - the drain's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the drain's own trend (v0.976.53): the drain's fall ran two steps deep - ${arc} - the drain's own fade ${tail}`
  }
  return `the drain's own trend (v0.976.53): the drain's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
