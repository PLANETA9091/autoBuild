// (v0.976.83) THE OTHER'S OWN TREND - the hound census's own residual
// book's trend seat: the unclassed answer moments - the wake's own
// remainder, the anchored combat lines mentioning drowned matching
// none of the named classes (the escape hatch's own anatomy, the
// SAME cell the presence fold already buckets and the episode detail
// line already holds: "other N") - their magnitude shape across
// three faces.
//
// The field priced every branch by hand twelve faces deep before the
// word existed (the other's own count face by face, the census's own
// arithmetic: 347 rode 0, 348 rode 7, 349 rode 0, 350 rode 7,
// 351 rode 6, 352 rode 0, 353 rode 0, 354 rode 2, 355 rode 0,
// 356 rode 4, 357 rode 20, 358 rode 17 - the FACE 349 chain the
// swing 0 -> 7 (+7) -> 0 (-7), the FACE 350 chain the swing
// 7 -> 0 (-7) -> 7 (+7), the FACE 351 chain the swing
// 0 -> 7 (+7) -> 6 (-1), and THE FACE 352 CHAIN THE FADE'S OWN RIDE
// 7 -> 6 (-1) -> 0 (-6) - THE WORD BORN SPEAKING FOUR CHAINS DEEP
// (three swings + the fade, the flee hop's own fade-birth the
// precedent, v0.976.74), the FACE 353 chain the held second step
// 6 -> 0 -> 0 (the storm's own exit - the win's own FACE 353
// precedent), the FACE 354 chain the held first step 0 -> 0 -> 2
// (the arrival rode unnamed - the re-verdict's own FACE 350
// precedent), the FACE 355/356 chains the swings 0 -> 2 -> 0 and
// 2 -> 0 -> 4, THE FACE 357 CHAIN THE SWELL'S OWN RIDE
// 0 -> 4 (+4) -> 20 (+16) - the wake's own storm the word's own
// swell greeted, and the FACE 358 chain the swing 4 -> 20 (+16) ->
// 17 (-3) - the storm's own relief - EVERY BRANCH THE LAW PRICES
// RODE THE TWELVE PRICED FACES, the fullest birth the trend family
// ever priced: the swell, the fade and the swing all spoke before
// the word shipped, the held silences the only lanes the field
// greeted with nothing).
//
// The seat law: the presence's own word (v0.976.77) prices the six
// answer classes' own SUM across the walks, the answer's own word
// (v0.925.0) prices WHICH class owns the presence book WITHIN one
// face, the wet flee's own word (v0.976.79) prices the shore class's
// own count ACROSS the walks, the fight's own word (v0.976.80)
// prices the courage class's own count ACROSS them, the dry flee's
// own word (v0.976.81) prices the DRY class's own count ACROSS them,
// the shelter's own word (v0.976.82) prices the seal class's own
// count ACROSS them, this word prices the RESIDUAL class's own count
// ACROSS the walks - different books, the cells never merge (the
// remainder is its own book, never a named class's skin). The branch
// law: ONE SHAPE ONE WORD - rise then rise prices the other's own
// swell, fall then fall prices the other's own fade, a traded
// direction prices the other's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats (the re-verdict's word,
// the verdict flip's word, the flee hop's word, the win's word, the
// kill's word, the presence's word, the wet flee's word, the fight's
// word, the dry flee's word, the shelter's word) - the names ride by
// law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the shelter's own v0.976.82). The fold receives the
// census's own other per face (houndCensus owns the remainder count
// - one-parser law: the same census runs over each face's own
// lines, never a fork; the SAME cell the episode detail line already
// holds: "other N"). No two-back face given -> no read (the
// carrier's own null pass).
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
 *   { back: {other}, prev: {other}, cur: {other} }
 * @returns {boolean}
 */
export function houndOtherTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.other) && s.other >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the other's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {other}, prev: {other}, cur: {other} }
 * @returns {string|null} the row byte, or null
 */
export function houndOtherTrendRow (e) {
  if (!houndOtherTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.other - back.other
  const second = cur.other - prev.other
  const arc = `${back.other} -> ${prev.other} (${first >= 0 ? '+' : ''}${first}) -> ${cur.other} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the wet retreats\' own mass, the fight\'s word prices the courage\'s own mass, the dry flee\'s word prices the dry retreats\' own mass, the shelter\'s word prices the seal answers\' own mass - the answer\'s word prices which class the presence book holds within one face, this word prices the residual class\'s own count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the other's own trend (v0.976.83): the other's rise ran two steps deep - ${arc} - the other's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the other's own trend (v0.976.83): the other's fall ran two steps deep - ${arc} - the other's own fade ${tail}`
  }
  return `the other's own trend (v0.976.83): the other's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
