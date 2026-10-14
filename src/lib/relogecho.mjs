// (v0.976.38) THE RELOG BOOK'S OWN ECHO - the relog voice's cross-face
// word. The field priced the voice's recurrence by hand five faces
// deep before the word existed: FACE 323 rode 6 relog(s), FACE 324
// rode 9, FACE 325 rode 4, FACE 326 = 38521191638 rode 3, FACE 327 =
// 38524422893 rode 2 - the voice SPOKE five faces deep, the repeat
// four consecutive pairs (6 -> 9, 9 -> 4, 4 -> 3, 3 -> 2), and no
// word named the book's own between-faces shape: the relog's own bill
// (v0.715.0) prices the book WITHIN the face (the stalled walk-outs,
// the ladder rungs), the frozen census (v0.426.0) counts the relogs -
// the VOICE's own recurrence rode unnamed.
//
// The branch law: ONE VOICE ONE WORD - a silent prior face then a
// spoken face prices the VOICE'S OWN RETURN, a spoken prior face then
// a spoken face prices the VOICE'S OWN REPEAT; a silent face prices
// the honest silence (the voice's rest is not the subject - the voice
// is; the valve's own echo family law, v0.976.24). The counts ride
// the row as context bytes - the echo prices the recurrence, never
// the magnitude's own direction (the trend's family owns the steps).
//
// The seat law: the relog's own bill prices the book within the face,
// the echo prices the voice's own recurrence across faces -
// co-existence by seat never by duplication.
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19).
// The fold receives the census's own images per face (frozenCensus
// owns the relog count - one-parser law: the same census runs over
// the prior face's lines, never a fork; the SAME image the frozen
// census's own row already holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the echo fold:
 *   { prev: {relogs}, cur: {relogs} }
 * @returns {boolean}
 */
export function relogEchoConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.relogs) && s.relogs >= 0
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the relog voice's own recurrence. The honest
 * null when a face rode silent (the voice's rest is not the subject)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the echo fold
 *   { prev: {relogs}, cur: {relogs} }
 * @returns {string|null} the row byte, or null
 */
export function relogEchoRow (e) {
  if (!relogEchoConsistent(e)) return null
  const { prev, cur } = e
  const tail = '(the relog\'s own bill prices the book within the face - the echo prices the voice\'s own recurrence, co-existence by seat never by duplication)'
  if (prev.relogs === 0 && cur.relogs === 0) return null
  if (prev.relogs === 0) {
    return `the relog book's own echo (v0.976.38): the prior face rode 0 relog(s), ${cur.relogs} this face - the voice's own return ${tail}`
  }
  if (cur.relogs === 0) return null
  return `the relog book's own echo (v0.976.38): ${prev.relogs} relog(s) rode the prior face, ${cur.relogs} this face - the voice's own repeat ${tail}`
}
