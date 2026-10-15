// (v0.976.81) THE DRY FLEE'S OWN TREND - the hound census's own
// land book's trend seat: the flee-dry answers - the dry flees,
// the hound's own land retreats beside the drowned's own waters -
// their magnitude shape across three faces. The mass: the census's
// own fleeDry count - the anchored combat lines the census buckets
// as the dry answer's own class (the FLEE_DRY_RE anatomy, the
// v0.373.0 answer class, the SAME cell the presence fold already
// buckets and the episode detail line already holds: "flee-dry N").
//
// The field priced every branch by hand eleven faces deep before the
// word existed (the dry flee's own count face by face, the census's
// own arithmetic: 347 rode 0, 348 rode 2, 349 rode 0, 350 rode 5,
// 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 0, 355 rode 0,
// 356 rode 0, 357 rode 16 - the FACE 349 chain the swing
// 0 -> 2 (+2) -> 0 (-2), the FACE 350 chain the swing
// 2 -> 0 (-2) -> 5 (+5), the FACE 351 chain the swing
// 0 -> 5 (+5) -> 0 (-5), the FACE 352 chain the held second step
// 5 -> 0 -> 0 (the storm's own exit - the win's own FACE 353
// precedent), the FACE 353/354/355/356 chains the clean trios
// 0 -> 0 -> 0, and the FACE 357 chain the held first step
// 0 -> 0 -> 16 (the arrival rode unnamed - the re-verdict's own
// FACE 350 precedent) - THE WORD BORN SPEAKING THREE SWINGS DEEP,
// the kill's own three-swing birth the precedent beside it
// (v0.976.76)). The swell and the fade never rode the eleven priced
// faces - the dry flee's own storms trade every walk (the dry
// answer arrives and exits the same span, the wet flee's own trade
// rhythm the sibling book holds); the bars never invent the shapes
// the field keeps, the law prices the branches, the field holds the
// silence.
//
// The seat law: the presence's own word (v0.976.77) prices the six
// answer classes' own SUM across the walks, the answer's own word
// (v0.925.0) prices WHICH class owns the presence book WITHIN one
// face, the wet flee's own word (v0.976.79) prices the shore class's
// own count ACROSS the walks, the fight's own word (v0.976.80)
// prices the courage class's own count ACROSS them, this word
// prices the DRY class's own count ACROSS the walks - different
// books, the cells never merge (the dry retreats and the wet
// retreats never share a word). The
// branch law: ONE SHAPE ONE WORD - rise then rise prices the dry
// flee's own swell, fall then fall prices the dry flee's own fade,
// a traded direction prices the dry flee's own swing, a held step
// (any count-to-count zero) prices the honest silence (a held lane
// is no direction - the bars never invent; the watertrend family's
// own held law). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the seats' own verdict word (no owns) nor the dynasty's own
// (no dynasty, no turn) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the
// re-verdict's word, the verdict flip's word, the flee hop's word,
// the win's word, the kill's word, the presence's word, the wet
// flee's word, the fight's word) - the names ride by law, the
// neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the wet flee's own v0.976.79). The fold receives the
// census's own fleeDry per face (houndCensus owns the dry count -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cell the episode detail line already
// holds: "flee-dry N"). No two-back face given -> no read (the
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
 *   { back: {dry}, prev: {dry}, cur: {dry} }
 * @returns {boolean}
 */
export function houndFleeDryTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.dry) && s.dry >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the dry flee's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {dry}, prev: {dry}, cur: {dry} }
 * @returns {string|null} the row byte, or null
 */
export function houndFleeDryTrendRow (e) {
  if (!houndFleeDryTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.dry - back.dry
  const second = cur.dry - prev.dry
  const arc = `${back.dry} -> ${prev.dry} (${first >= 0 ? '+' : ''}${first}) -> ${cur.dry} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the wet retreats\' own mass, the fight\'s word prices the courage\'s own mass - the answer\'s word prices which class the presence book holds within one face, this word prices the dry flee\'s own class count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the dry flee's own trend (v0.976.81): the dry flee's rise ran two steps deep - ${arc} - the dry flee's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the dry flee's own trend (v0.976.81): the dry flee's fall ran two steps deep - ${arc} - the dry flee's own fade ${tail}`
  }
  return `the dry flee's own trend (v0.976.81): the dry flee's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
