// (v0.976.77) THE PRESENCE'S OWN TREND - the hound book's own sixth
// trend seat: the drowned hound's own presence - its magnitude shape
// across three faces. The mass: the census's own presence count (the
// six answer classes' own sum - fight + flee-dry + shelter + flee-
// shore + shore-no-cell + other - the log's own seat the presence
// line and the answer's seat's wires already hold: the hound's own
// engagement book, the wake's own head count).
//
// The field priced every branch by hand eight faces deep before the
// word existed (the presence's own count face by face, the census's
// own arithmetic: 347 rode 0, 348 rode 16, 349 rode 0, 350 rode 27,
// 351 rode 10, 352 rode 0, 353 rode 0, 354 rode 11 - the FACE 349
// chain the swing 0 -> 16 (+16) -> 0 (-16), the FACE 350 chain the
// swing 16 -> 0 (-16) -> 27 (+27), the FACE 351 chain the swing
// 0 -> 27 (+27) -> 10 (-17), and THE FACE 352 CHAIN THE WORD'S OWN
// BIRTH RIDE the fade 27 -> 10 (-17) -> 0 (-10) - THE WORD BORN
// SPEAKING, the hound's own wake the field greeted with arrows on
// four of the six priced chains (the flee hop's own v0.976.74 birth
// the fade precedent beside it - the storm's own arithmetic: the
// wake of 27 collapsed to the honest 0 the walk after); the FACE 353
// chain the held second step 10 -> 0 (-10) -> 0 (-0) and the FACE
// 354 chain the held first step 0 -> 0 (+0) -> 11 (+11) ride the
// honest silence - the arrivals rode unnamed (the re-verdict's own
// FACE 350 arrival precedent, the win's own FACE 351 precedent
// beside them); the swell never rode the eight priced faces - the
// hound's own wake moves in storms and collapses, the bars never
// invent the slow climb the field has not held; the law prices the
// branches, the field holds the silence.
//
// The seat law: the hound book's own unnamed seat - the answer's
// word (v0.925.0) prices WHICH answer class the presence book holds
// within one face, the pressure's word (v0.928.0) WHICH bot owns the
// moments within it, the prey's word (v0.926.0) WHOSE deaths own the
// kill book, the bane's word (v0.929.0) WHICH bot the win book
// holds, the arena's word (v0.791.0) WHERE the hound fell - every
// hound seat prices WITHIN one face; the re-verdict's own word
// (v0.976.71) prices the re-engagements' own mass ACROSS the walks,
// the verdict flip's own word (v0.976.73) prices the trades' own
// shape, the flee hop's own word (v0.976.74) prices the flight's
// own, the win's own word (v0.976.75) prices the fleet's own side,
// the kill's own word (v0.976.76) prices the hound's own side - and
// THE PRESENCE'S OWN MASS - the wake's own head count, the six
// classes' own sum, ACROSS the walks - rode unnamed (a seat can hold
// while the count moves: different books, and one hound seat's book
// is never another hound seat's). The branch law: ONE SHAPE ONE WORD
// - rise then rise prices the presence's own swell, fall then fall
// prices the presence's own fade, a traded direction prices the
// presence's own swing, a held step (any count-to-count zero) prices
// the honest silence (a held lane is no direction - the bars never
// invent; the watertrend family's own held law). The byte-pin: the
// trend row never speaks the shape's own verdict words (no return,
// no repeat, no stay, no run) nor the seats' own verdict word (no
// owns) nor the dynasty's own (no dynasty, no turn) - co-existence
// by seat never by duplication; the seat-law tail names the neighbor
// seats (the re-verdict's word, the verdict flip's word, the flee
// hop's word, the win's word, the kill's word, the answer's word) -
// the names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the kill's own v0.976.76). The fold receives the census's
// own presence per face (houndCensus owns the presence count -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cell the presence line and the answer's
// seat's wires already hold). No two-back face given -> no read
// (the carrier's own null pass).
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
 *   { back: {presence}, prev: {presence}, cur: {presence} }
 * @returns {boolean}
 */
export function houndPresenceTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.presence) && s.presence >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the presence's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {presence}, prev: {presence}, cur: {presence} }
 * @returns {string|null} the row byte, or null
 */
export function houndPresenceTrendRow (e) {
  if (!houndPresenceTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.presence - back.presence
  const second = cur.presence - prev.presence
  const arc = `${back.presence} -> ${prev.presence} (${first >= 0 ? '+' : ''}${first}) -> ${cur.presence} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the answer\'s word prices which class the presence book holds within one face - the presence line prints the face\'s own answer moments - this word prices the presence\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the presence's own trend (v0.976.77): the presence's rise ran two steps deep - ${arc} - the presence's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the presence's own trend (v0.976.77): the presence's fall ran two steps deep - ${arc} - the presence's own fade ${tail}`
  }
  return `the presence's own trend (v0.976.77): the presence's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
