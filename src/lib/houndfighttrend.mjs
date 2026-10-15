// (v0.976.80) THE FIGHT'S OWN TREND - the hound census's fight book's
// trend seat: the stand-and-fight answers - the hound's own courage -
// their magnitude shape across three faces. The mass: the census's
// own fight count (one-parser law, the SAME cell the presence line
// already holds: "fight ${hound.fight}" - the answer moments' own
// stand-and-fight class). The seat law: the answer's word (v0.925.0)
// prices WHICH class the presence book holds within one face, the
// presence's word (v0.976.77) prices the wake's own SUM across the
// walks - every hound seat prices WITHIN one face, the sum's own
// word prices the whole wake - this word prices ONE CLASS of the
// sum, the stand-and-fight's own mass ACROSS the walks (a seat can
// hold while the count moves: different books, one hound seat's book
// is never another hound seat's).
//
// The field priced every branch by hand ten faces deep before the
// word existed (the fight's own count face by face, the census's
// own arithmetic: 347 rode 0, 348 rode 0, 349 rode 0, 350 rode 2,
// 351 rode 4, 352 rode 0, 353 rode 0, 354 rode 3, 355 rode 0,
// 356 rode 2 - the FACE 349 chain the clean trio, the FACE 350
// chain the held first step 0 -> 0 -> 2 (the arrival rode unnamed,
// the re-verdict's own FACE 350 arrival precedent), and THE FACE
// 351 CHAIN THE WORD'S OWN BIRTH RIDE the swell 0 -> 2 (+2) ->
// 4 (+2) - the stand-and-fight's own courage built two steps deep,
// THE WORD BORN SPEAKING ON THE SWELL - the branch the presence's
// own word never rode across its eight priced faces (the sum's own
// arithmetic traded every walk, the class's own courage built), the
// fight's word prices it; the FACE 352 chain the swing 2 -> 4 (+2)
// -> 0 (-4) (the storm's own exit - the courage of four collapsed
// to the honest zero the walk after), the FACE 353 chain the held
// second step 4 -> 0 -> 0 (the storm's own exit held), the FACE
// 354 chain the held first step 0 -> 0 -> 3 (the arrival rode
// unnamed again), the FACE 355 chain the swing 0 -> 3 (+3) -> 0
// (-3), and the FACE 356 chain the swing 3 -> 0 (-3) -> 2 (+2)
// (the hound's own return - the courage traded back); the fade
// never rode the ten priced faces - the courage's storms build and
// break, the slow two-fall the field has not held; the bars never
// invent the shapes the field keeps, the law prices the branches,
// the field holds the silence.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// fight's own swell, fall then fall prices the fight's own fade, a
// traded direction prices the fight's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats (the re-verdict's word,
// the verdict flip's word, the flee hop's word, the win's word, the
// kill's word, the presence's word, the wet flee's word) - the names
// ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the wet flee's own v0.976.79). The fold receives the
// census's own fight per face (houndCensus owns the fight count -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cell the presence line already holds).
// No two-back face given -> no read (the carrier's own null pass).
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
 *   { back: {fight}, prev: {fight}, cur: {fight} }
 * @returns {boolean}
 */
export function houndFightTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.fight) && s.fight >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the fight's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {fight}, prev: {fight}, cur: {fight} }
 * @returns {string|null} the row byte, or null
 */
export function houndFightTrendRow (e) {
  if (!houndFightTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.fight - back.fight
  const second = cur.fight - prev.fight
  const arc = `${back.fight} -> ${prev.fight} (${first >= 0 ? '+' : ''}${first}) -> ${cur.fight} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the water retreat\'s own count - the answer\'s word prices which class the presence book holds within one face, this word prices the stand-and-fight\'s own class count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the fight's own trend (v0.976.80): the fight's rise ran two steps deep - ${arc} - the fight's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the fight's own trend (v0.976.80): the fight's fall ran two steps deep - ${arc} - the fight's own fade ${tail}`
  }
  return `the fight's own trend (v0.976.80): the fight's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
