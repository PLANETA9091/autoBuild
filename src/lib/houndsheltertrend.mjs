// (v0.976.82) THE SHELTER'S OWN TREND - the hound census's own
// shelter book's trend seat: the shelter tries - the seal answers,
// the hound's own walls beside the drowned's own waters - their
// magnitude shape across three faces. The mass: the census's own
// shelter count - the anchored combat lines the census buckets as
// the seal answer's own class (the SHELTER_RE anatomy, the v0.433.0
// answer class, the SAME cell the presence fold already buckets and
// the presence line already holds: "shelter N").
//
// The field priced every branch by hand twelve faces deep before the
// word existed (the shelter's own count face by face, the census's
// own arithmetic: 347 rode 0, 348 rode 2, 349 rode 0, 350 rode 6,
// 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 0, 355 rode 0,
// 356 rode 0, 357 rode 8, 358 rode 12 - the FACE 349 chain the swing
// 0 -> 2 (+2) -> 0 (-2), the FACE 350 chain the swing
// 2 -> 0 (-2) -> 6 (+6), the FACE 351 chain the swing
// 0 -> 6 (+6) -> 0 (-6) - THE WORD BORN SPEAKING THREE SWINGS DEEP,
// the kill's own three-swing birth the precedent beside it
// (v0.976.76), the FACE 352 chain the held second step 6 -> 0 -> 0
// (the storm's own exit - the win's own FACE 353 precedent), the
// FACE 353/354/355/356 chains the clean trios, the FACE 357 chain
// the held first step 0 -> 0 -> 8 (the arrival rode unnamed - the
// re-verdict's own FACE 350 precedent), and THE FACE 358 CHAIN THE
// SHELTER'S OWN SWELL 0 -> 8 (+8) -> 12 (+4) - the walls built two
// steps deep, the branch the presence's own word never rode (the
// sum's own arithmetic traded that same walk, the walls' own build
// ran beneath it) - the word born on the proof rides the swell
// beside its three swings). The fade never rode the twelve priced
// faces - the walls build and break in storms (the courage's own
// trade rhythm the sibling book holds); the bars never invent the
// shapes the field keeps, the law prices the branches, the field
// holds the silence.
//
// The seat law: the presence's own word (v0.976.77) prices the six
// answer classes' own SUM across the walks, the answer's own word
// (v0.925.0) prices WHICH class owns the presence book WITHIN one
// face, the wet flee's own word (v0.976.79) prices the shore class's
// own count ACROSS the walks, the fight's own word (v0.976.80)
// prices the courage class's own count ACROSS them, the dry flee's
// own word (v0.976.81) prices the DRY class's own count ACROSS them,
// this word prices the SHELTER class's own count ACROSS the walks -
// different books, the cells never merge (the walls and the retreats
// never share a word; the seal-reserve's own census v0.397.0 prices
// the deposit-side keeps, a different book again). The
// branch law: ONE SHAPE ONE WORD - rise then rise prices the
// shelter's own swell, fall then fall prices the shelter's own fade,
// a traded direction prices the shelter's own swing, a held step
// (any count-to-count zero) prices the honest silence (a held lane
// is no direction - the bars never invent; the watertrend family's
// own held law). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the seats' own verdict word (no owns) nor the dynasty's own
// (no dynasty, no turn) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the
// re-verdict's word, the verdict flip's word, the flee hop's word,
// the win's word, the kill's word, the presence's word, the wet
// flee's word, the fight's word, the dry flee's word) - the names
// ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the dry flee's own v0.976.81). The fold receives the
// census's own shelter per face (houndCensus owns the shelter count -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cell the presence line already holds:
// "shelter N"). No two-back face given -> no read (the carrier's
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
 *   { back: {shelter}, prev: {shelter}, cur: {shelter} }
 * @returns {boolean}
 */
export function houndShelterTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.shelter) && s.shelter >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the shelter's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {shelter}, prev: {shelter}, cur: {shelter} }
 * @returns {string|null} the row byte, or null
 */
export function houndShelterTrendRow (e) {
  if (!houndShelterTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.shelter - back.shelter
  const second = cur.shelter - prev.shelter
  const arc = `${back.shelter} -> ${prev.shelter} (${first >= 0 ? '+' : ''}${first}) -> ${cur.shelter} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the wet retreats\' own mass, the fight\'s word prices the courage\'s own mass, the dry flee\'s word prices the dry retreats\' own mass - the answer\'s word prices which class the presence book holds within one face, this word prices the shelter\'s own class count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the shelter's own trend (v0.976.82): the shelter's rise ran two steps deep - ${arc} - the shelter's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the shelter's own trend (v0.976.82): the shelter's fall ran two steps deep - ${arc} - the shelter's own fade ${tail}`
  }
  return `the shelter's own trend (v0.976.82): the shelter's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
