// (v0.976.24) THE VALVE'S OWN ECHO - the valve's cross-face voice.
// The field priced the silence before the word existed: FACE 315's,
// 316's and 317's allocvalve rode 0 CLOSED / 0 OPEN three faces deep,
// then FACE 318 = 38496821547's own valve SPOKE - 2 closure(s) by the
// queue-pressure arm (strikes 1 and 2, ts=75s and ts=139s) with both
// opens riding back (ts=88s and ts=151s) - the voice RETURNING after
// the silence while the waterline's own step (+1M) rode the creep's
// word. The BETWEEN-faces voice recurrence rode unnamed: the silent
// cross and the answer's own wire price the voice WITHIN the face
// (the margin lens, v0.976.3 / v0.976.9), the creep carries the
// closures as context bytes (v0.976.21) - no word named the voice's
// own across-face shape: silent -> spoke (the return), spoke ->
// spoke (the repeat).
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19).
// The fold receives the census's own valve images { closures, opens }
// per face (stormcensus owns the valve - one-parser law, never
// re-parsed here; the same images the creep's wire already holds).
//
// The silences: a SILENT face prices no echo (the voice's rest is
// not the subject - the voice is; the rest is the honest null both
// faces ride). The arm flavors ride the allocvalve block already -
// the echo prices the voice's own recurrence, never the arm.
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
 *   valve voice images { closures, opens }
 * @returns {boolean}
 */
export function valveEchoConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { closures, opens } = s
    if (!Number.isInteger(closures) || closures < 0) return false
    if (!Number.isInteger(opens) || opens < 0) return false
    return true
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the valve's cross-face voice. The honest null
 * when the fence fails, or this face's voice stayed silent (the
 * voice's rest is not the subject - the voice is). A spoke-after-
 * silence face prices the RETURN; a spoke-after-spoke face prices
 * the REPEAT (co-existence reported, causation never guessed).
 *
 * @param {object|null} [e] the echo fold
 *   { prev: {closures, opens}, cur: {closures, opens} }
 * @returns {string|null} the row byte, or null
 */
export function valveEchoRow (e) {
  if (!valveEchoConsistent(e)) return null
  const { prev, cur } = e
  // the honest silence: a silent face prices no echo (the voice's
  // rest is not the subject - the voice is)
  if (cur.closures === 0 && cur.opens === 0) return null
  if (prev.closures === 0 && prev.opens === 0) {
    return `the valve's own echo (v0.976.24): this face's valve spoke ${cur.closures} closure(s) ${cur.opens} open(s) against the prior face's silence - the valve's own voice returning (the waterline's own step rides the creep's word, causation never guessed)`
  }
  return `the valve's own echo (v0.976.24): this face's valve spoke ${cur.closures} closure(s) ${cur.opens} open(s) against the prior face's ${prev.closures} closure(s) ${prev.opens} open(s) - the valve's own voice repeating (co-existence reported, causation never guessed)`
}
