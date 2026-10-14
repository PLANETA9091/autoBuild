// (v0.976.73) THE VERDICT FLIP'S OWN TREND - the hound book's own
// second trend seat: the drowned hound's verdict flips' own magnitude
// shape across three faces. The mass: the census's own verdictFlips
// count - the hound's own verdict trades within the episodes (the log's
// own seat the episode detail line already prints: "verdict flips N").
//
// The field priced every branch by hand five faces deep before the
// word existed (the flip's own count face by face, the census's own
// arithmetic: 347 rode 0, 348 rode 0, 349 rode 0, 350 rode 1, 351
// rode 2 - the FACE 349 chain the clean trio 0 -> 0 -> 0, the FACE
// 350 chain the arrival riding unnamed behind a held first step
// 0 -> 0 -> 1, and THE FACE 351 CHAIN THE WORD'S OWN BIRTH RIDE the
// swell 0 -> 1 (+1) -> 2 (+1) - THE WORD BORN SPEAKING, the first
// hound word the field greeted with an arrow (the re-verdict's own
// v0.976.71 birth the held-step precedent beside it - two hound seats,
// two births, one vocabulary)). The fade never rode the five priced
// faces, the swing never rode - the arrows come when the hound's own
// verdict trades run or drain, the bars never invent them; the law
// prices the branches, the field holds the silence.
//
// The seat law: the hound book's own unnamed seat - the answer's word
// prices WHICH answer class owns the presence book (v0.925.0), the
// pressure's word WHICH bot owns the moments (v0.928.0), the prey's
// word WHOSE deaths own the kill book (v0.926.0), the bane's word
// WHOSE wins own the defeat book (v0.929.0), the arena's word WHERE
// the hound won (v0.791.0) - every hound seat prices WITHIN one face;
// the re-verdict's own word (v0.976.71) prices the re-engagements'
// own mass ACROSS the walks, and the VERDICT FLIPS' OWN MASS - the
// verdict trades' own shape ACROSS the walks - rode unnamed (a seat
// can hold while the count moves: different books, and one hound
// seat's book is never another hound seat's). The branch law: ONE
// SHAPE ONE WORD - rise then rise prices the flip's own swell, fall
// then fall prices the flip's own fade, a traded direction prices the
// flip's own swing, a held step (any count-to-count zero) prices the
// honest silence (a held lane is no direction - the bars never
// invent; the watertrend family's own held law). The byte-pin: the
// trend row never speaks the shape's own verdict words (no return,
// no repeat, no stay, no run) nor the seats' own verdict word (no
// owns) nor the dynasty's own (no dynasty, no turn) - co-existence
// by seat never by duplication; the seat-law tail names the neighbor
// seats (the re-verdict's word, the answer's word, the pressure's
// word) - the names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the trend family's own carrier chain v0.976.34 through the
// re-verdict's own v0.976.71). The fold receives the census's own
// verdictFlips per face (houndCensus owns the flip count - one-parser
// law: the same census runs over each face's own lines, never a fork;
// the SAME cell the episode detail line and the hound seats' wires
// already hold). No two-back face given -> no read (the carrier's
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
 *   { back: {flips}, prev: {flips}, cur: {flips} }
 * @returns {boolean}
 */
export function houndVerdictFlipTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.flips) && s.flips >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the verdict flip's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {flips}, prev: {flips}, cur: {flips} }
 * @returns {string|null} the row byte, or null
 */
export function houndVerdictFlipTrendRow (e) {
  if (!houndVerdictFlipTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.flips - back.flips
  const second = cur.flips - prev.flips
  const arc = `${back.flips} -> ${prev.flips} (${first >= 0 ? '+' : ''}${first}) -> ${cur.flips} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the answer\'s word prices the presence book\'s own classes, the pressure\'s word prices the magnets\' own mix - this word prices the verdict flips\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the verdict flip's own trend (v0.976.73): the verdict flip's rise ran two steps deep - ${arc} - the verdict flip's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the verdict flip's own trend (v0.976.73): the verdict flip's fall ran two steps deep - ${arc} - the verdict flip's own fade ${tail}`
  }
  return `the verdict flip's own trend (v0.976.73): the verdict flip's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
