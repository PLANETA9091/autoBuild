// (v0.976.42) THE RELOG BOOK'S OWN TREND - the voice's own two-step
// shape across three faces. The field priced every branch by hand
// seven faces deep before the word existed: the voice rode 6 relog(s)
// on FACE 323, 9 on FACE 324, 4 on FACE 325, 3 on FACE 326, 2 on FACE
// 327, 2 on FACE 328, 5 on FACE 329 - the swing rode once (6 -> 9 ->
// 4, the rise traded seats with the fall), the fade's own run rode
// twice (9 -> 4 -> 3 and 4 -> 3 -> 2 - two consecutive falls), the
// held step priced the silence twice (3 -> 2 -> 2 and 2 -> 2 -> 5 -
// the held step is no direction, the family's own held law), and the
// swell's own run (two consecutive rises) never rode the seven faces
// the voice spoke - the law prices it, the bars never invent it.
//
// The echo's word (v0.976.38) prices the PAIR's own recurrence (the
// return, the repeat) and never the magnitude's own direction - the
// counts rode as context bytes "the trend's family owns the steps":
// the trend's family's own seat on the relog book rode unnamed. The
// relog's own bill (v0.715.0) prices the book WITHIN the face, the
// frozen census (v0.426.0) counts the voice - the book's own
// between-faces SHAPE rode unnamed.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// SWELL'S OWN RUN, fall then fall prices the FADE'S OWN RUN, a traded
// direction prices the VOICE'S OWN SWING, a held step (any
// count-to-count zero) prices the honest silence (a held voice is no
// direction - the bars never invent; the watertrend family's own
// held law). The co-existence law rides by seat: the echo prices each
// recurrence one at a time (its row already printed beside this
// wire), this word prices the PAIR's own shape - never a second
// retelling of a single recurrence. The byte-pin: the trend row never
// speaks the echo's own words (no return, no repeat) - co-existence
// by seat never by duplication.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41).
// The fold receives the census's own images per face (frozenCensus
// owns the relog count - one-parser law: the same census runs over
// each face's own lines, never a fork; the SAME image the echo's wire
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
 *   { back: {relogs}, prev: {relogs}, cur: {relogs} }
 * @returns {boolean}
 */
export function relogTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.relogs) && s.relogs >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the voice's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {relogs}, prev: {relogs}, cur: {relogs} }
 * @returns {string|null} the row byte, or null
 */
export function relogTrendRow (e) {
  if (!relogTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.relogs - back.relogs
  const second = cur.relogs - prev.relogs
  const arc = `${back.relogs} -> ${prev.relogs} (${first >= 0 ? '+' : ''}${first}) -> ${cur.relogs} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the echo prices each recurrence one at a time - the run is the pair\'s own shape)'
  if (first > 0 && second > 0) {
    return `the relog book's own trend (v0.976.42): the voice's rise ran two steps deep - ${arc} - the swell's own run ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the relog book's own trend (v0.976.42): the voice's fall ran two steps deep - ${arc} - the fade's own run ${tail}`
  }
  return `the relog book's own trend (v0.976.42): the voice's own swing - ${arc} - the rise and the fall traded seats between the walks (the echo prices each recurrence one at a time - the alternation is the pair's own shape)`
}
