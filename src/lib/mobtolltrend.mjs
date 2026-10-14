// (v0.976.62) THE MOB TOLL'S OWN TREND - the churn's own biggest
// crowd's own magnitude shape across three faces. The field priced
// every branch by hand eleven faces deep before the word existed (the
// mob kind's own count - the census's own byKind.mob, the deaths the
// server's named attackers took - face by face, the caches' own
// arithmetic: 334 rode 12, 335 rode 5, 336 rode 5, 337 rode 1, 338
// rode 4, 339 rode 6, 340 rode 3, 341 rode 1, 342 rode 6, 343 rode 1,
// 344 rode 4 - the MOB TOLL'S OWN SWING rode five times (5 -> 1 -> 4
// on the FACE 338 chain, 4 -> 6 -> 3 on the FACE 340 chain, 3 -> 1
// -> 6 on the FACE 342 chain, 1 -> 6 -> 1 on the FACE 343 chain, 6
// -> 1 -> 4 on the FACE 344 chain the freshest swing), the MOB TOLL'S
// OWN SWELL rode once (1 -> 4 -> 6 on the FACE 339 chain the crowd's
// own climb), the MOB TOLL'S OWN FADE rode once (6 -> 3 -> 1 on the
// FACE 341 chain two falls deep the crowd's own relief), and the held
// step rode twice (12 -> 5 -> 5 on the FACE 336 chain the record 12's
// own aftermath, 5 -> 5 -> 1 on the FACE 337 chain - the record
// single-face toll riding unnamed behind a held step - the law prices
// them, the bars never invent them).
//
// The seat law: the kind's word (v0.976.39) prices the HEAD's own
// identity - WHICH class owns the churn, the dynasty's own sequence;
// the siege's word (v0.976.44) prices the book's own TOTAL - every
// kind's mass summed; and the MOB TOLL - ONE FIXED CLASS's own count,
// the server's named attackers' own harvest, riding whether it leads
// or not - rode unnamed (a name can hold while the toll moves, the
// toll can climb while the head turns: different books - and the toll
// can BE the head's own crowd and still be a different book, identity
// vs magnitude; the drown toll's own word, v0.976.61, prices the
// lane's own namesake kind the same way). The branch law: ONE SHAPE
// ONE WORD - rise then rise prices the mob toll's own swell, fall
// then fall prices the mob toll's own fade, a traded direction prices
// the mob toll's own swing, a held step (any count-to-count zero)
// prices the honest silence (a held crowd is no direction - the bars
// never invent; the watertrend family's own held law). The byte-pin:
// the trend row never speaks the shape's own verdict words (no
// return, no repeat, no stay, no run) nor the head's own verdict
// words (no dynasty, no turn) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the kind's
// word, the siege's word) - the names ride by law, the neighbor
// verdicts never ride.
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
// own, v0.976.58; the shore-pin's own, v0.976.59; the transit-stall's
// own, v0.976.60; the drown toll's own, v0.976.61). The fold receives
// the census's own byKind.mob per face (deathKindCensus owns the
// buckets - one-parser law: the same census runs over each face's own
// lines, never a fork; the SAME cells the kind trend's, the siege's
// and the drown toll's wires already hold). No two-back face given ->
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
 *   { back: {mob}, prev: {mob}, cur: {mob} }
 * @returns {boolean}
 */
export function mobTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.mob) && s.mob >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the mob toll's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law) or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {mob}, prev: {mob}, cur: {mob} }
 * @returns {string|null} the row byte, or null
 */
export function mobTollTrendRow (e) {
  if (!mobTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.mob - back.mob
  const second = cur.mob - prev.mob
  const arc = `${back.mob} -> ${prev.mob} (${first >= 0 ? '+' : ''}${first}) -> ${cur.mob} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the kind\'s word prices the head\'s own identity, the siege\'s word prices the book\'s own total - this word prices the mob toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the mob toll's own trend (v0.976.62): the mob toll's rise ran two steps deep - ${arc} - the mob toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the mob toll's own trend (v0.976.62): the mob toll's fall ran two steps deep - ${arc} - the mob toll's own fade ${tail}`
  }
  return `the mob toll's own trend (v0.976.62): the mob toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
