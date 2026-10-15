// (v0.976.75) THE WIN'S OWN TREND - the hound book's own fourth trend
// seat: the fleet's own wins vs the drowned hound - their magnitude
// shape across three faces. The mass: the census's own fightsWon
// count - the "mob down" fight ends (the log's own seat the bane
// seats' wires already hold: the hound's defeat book, the fleet's
// side of it).
//
// The field priced every branch by hand seven faces deep before the
// word existed (the win's own count face by face, the census's own
// arithmetic: 347 rode 0, 348 rode 0, 349 rode 0, 350 rode 0, 351
// rode 1, 352 rode 0, 353 rode 0 - the FACE 351 chain the held
// first step 0 -> 0 (+0) -> 1 (+1) the arrival rode unnamed behind
// the silence (the re-verdict's own FACE 350 arrival precedent),
// the FACE 353 chain the held second step 1 -> 0 (-1) -> 0 (-0)
// the honest silence, and THE FACE 352 CHAIN THE WORD'S OWN BIRTH
// RIDE the swing 0 -> 1 (+1) -> 0 (-1) - THE WORD BORN SPEAKING,
// the third hound trend word the field greeted with an arrow (the
// verdict flip's own v0.976.73 birth the swell precedent, the flee
// hop's own v0.976.74 birth the fade precedent beside it - three
// births, one vocabulary)). The swell and the fade never rode the
// seven priced faces - a face holds few wins, the arrows come when
// the fleet's own wins move differently, the bars never invent
// them; the law prices the branches, the field holds the silence.
//
// The seat law: the hound book's own unnamed seat - the answer's
// word prices WHICH answer class owns the presence book (v0.925.0),
// the pressure's word WHICH bot owns the moments (v0.928.0), the
// prey's word WHOSE deaths own the kill book (v0.926.0), the bane's
// word WHICH bot owns the win book WITHIN one face (v0.929.0), the
// arena's word WHERE the hound fell (v0.791.0) - every hound seat
// prices WITHIN one face; the re-verdict's own word (v0.976.71)
// prices the re-engagements' own mass ACROSS the walks, the verdict
// flip's own word (v0.976.73) prices the trades' own shape ACROSS
// them, the flee hop's own word (v0.976.74) prices the flight's own
// shape ACROSS them, and the WINS' OWN MASS - the fleet's own
// victories vs the hound, ACROSS the walks - rode unnamed (a seat
// can hold while the count moves: different books, and one hound
// seat's book is never another hound seat's). The branch law: ONE
// SHAPE ONE WORD - rise then rise prices the win's own swell, fall
// then fall prices the win's own fade, a traded direction prices
// the win's own swing, a held step (any count-to-count zero) prices
// the honest silence (a held lane is no direction - the bars never
// invent; the watertrend family's own held law). The byte-pin: the
// trend row never speaks the shape's own verdict words (no return,
// no repeat, no stay, no run) nor the seats' own verdict word (no
// owns) nor the dynasty's own (no dynasty, no turn) - co-existence
// by seat never by duplication; the seat-law tail names the
// neighbor seats (the re-verdict's word, the verdict flip's word,
// the flee hop's word, the bane's word) - the names ride by law,
// the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the flee hop's own v0.976.74). The fold receives the
// census's own fightsWon per face (houndCensus owns the win count -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cell the bane seats' wires already hold).
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
 *   { back: {wins}, prev: {wins}, cur: {wins} }
 * @returns {boolean}
 */
export function houndWinTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.wins) && s.wins >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the win's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {wins}, prev: {wins}, cur: {wins} }
 * @returns {string|null} the row byte, or null
 */
export function houndWinTrendRow (e) {
  if (!houndWinTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.wins - back.wins
  const second = cur.wins - prev.wins
  const arc = `${back.wins} -> ${prev.wins} (${first >= 0 ? '+' : ''}${first}) -> ${cur.wins} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the bane\'s word prices which bot the win book holds within one face - the episode detail prints the face\'s own wins - this word prices the wins\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the win's own trend (v0.976.75): the win's rise ran two steps deep - ${arc} - the win's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the win's own trend (v0.976.75): the win's fall ran two steps deep - ${arc} - the win's own fade ${tail}`
  }
  return `the win's own trend (v0.976.75): the win's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
