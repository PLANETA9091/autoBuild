// (v0.976.25) THE UNCLOSED STARTS' OWN ECHO - the rescue book's
// cross-face scar. The field priced the recurrence by hand before the
// word existed: FACE 315's book rode clean (33 starts, 0 unclosed),
// then FACE 316's book SPOKE 4 unclosed start(s) of 116 (the thin-air
// word's first field read rode that face), FACE 317's book cleaned
// again (11 starts, 0 unclosed), then FACE 318 = 38493190499's book
// SPOKE 1 unclosed start (F11) of 29 - the scar RETURNING after the
// clean book, twice across four faces, while the unclosed starts' own
// words (the oxygen, the rider, the thin air, the blind seat) price
// each start WITHIN its face and no word prices the book's own
// across-face shape.
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19).
// The fold receives the ledger's own totals { unclosed, starts } per
// face (rescueLedger owns the book - one-parser law: the same parser
// runs over the prior face's lines, never a fork; the ground/valve
// wires' proven prev-parser pattern).
//
// The silences: a CLEAN face prices no echo (the clean book is not
// the subject - the scar is; the clean is the honest null both faces
// ride). The unclosed starts' own words keep their per-face seats -
// the echo names the book's own recurrence, never re-spells a start.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the echo fold: { prev, cur } per-face
 *   book images { unclosed, starts }
 * @returns {boolean}
 */
export function rescueEchoConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { unclosed, starts } = s
    if (!Number.isInteger(unclosed) || unclosed < 0) return false
    if (!Number.isInteger(starts) || starts < 0) return false
    return true
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the rescue book's cross-face scar. The honest
 * null when the fence fails, or this face's book rode clean (the
 * clean book is not the subject - the scar is). A scar-after-clean
 * face prices the RETURN; a scar-after-scar face prices the REPEAT.
 *
 * @param {object|null} [e] the echo fold
 *   { prev: {unclosed, starts}, cur: {unclosed, starts} }
 * @returns {string|null} the row byte, or null
 */
export function rescueEchoRow (e) {
  if (!rescueEchoConsistent(e)) return null
  const { prev, cur } = e
  // the honest silence: a clean face prices no echo (the clean book
  // is not the subject - the scar is)
  if (cur.unclosed === 0) return null
  if (prev.unclosed === 0) {
    return `the rescue book's own echo (v0.976.25): this face's ${cur.unclosed} unclosed start(s) of ${cur.starts} start(s) against the prior face's clean book - the scar returning (the unclosed starts' own words keep their seats)`
  }
  return `the rescue book's own echo (v0.976.25): this face's ${cur.unclosed} unclosed start(s) of ${cur.starts} start(s) against the prior face's ${prev.unclosed} unclosed of ${prev.starts} start(s) - the scar repeating (the book's own churn riding both faces)`
}
