// (v0.976.29) THE EXPLOSION BOOK'S OWN ECHO - the blast voice's cross-
// face word. The field priced the recurrence by hand seven faces deep
// before the word existed: FACE 313's book held 2 explosion(s), FACE
// 314's went quiet (0), FACE 315's SPOKE 1 (the lone blast - the voice
// RETURNING after the rest), FACE 316's SPOKE 2 (the REPEAT), FACE
// 317's and 318's went quiet again (0, 0 - two faces of rest), FACE
// 319's SPOKE 1 (the second RETURN), FACE 320's and 321's went quiet
// (0, 0), then FACE 322 = 38504523787's book SPOKE 4 explosion(s) of 7
// death(s) - the storm's own skin, the siege returning at full weight
// while the deaths' own kind seat priced the within-face shape
// (explosion owns 4 of 7, the v0.784.0 row) and the cross-face voice
// recurrence rode unnamed.
//
// The branch law: the valve's own echo's law (v0.976.24) rides again -
// a QUIET blast book prices no echo (the voice's rest is not the
// subject - the voice is; the rest is the honest null the face rides),
// a spoke-after-silence face prices the RETURN, a spoke-after-spoke
// face prices the REPEAT. The deaths' own mass rides the row as
// context bytes (the blast's own share of the book - co-existence
// reported, causation never guessed - the v0.471.0 idiom).
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19).
// The fold receives the census's own images { explosions, deaths }
// per face (deathKindCensus owns the book - one-parser law, the same
// parser runs over the prior face's lines, never a fork; the same
// images the deaths block already holds).
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
 *   blast book images { explosions, deaths }
 * @returns {boolean}
 */
export function explosionEchoConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { explosions, deaths } = s
    if (!Number.isInteger(explosions) || explosions < 0) return false
    if (!Number.isInteger(deaths) || deaths < 0) return false
    return true
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the blast voice's cross-face echo. The honest
 * null when the fence fails, or this face's blast book stayed quiet
 * (the voice's rest is not the subject - the voice is). A spoke-after-
 * silence face prices the RETURN; a spoke-after-spoke face prices the
 * REPEAT (co-existence reported, causation never guessed).
 *
 * @param {object|null} [e] the echo fold
 *   { prev: {explosions, deaths}, cur: {explosions, deaths} }
 * @returns {string|null} the row byte, or null
 */
export function explosionEchoRow (e) {
  if (!explosionEchoConsistent(e)) return null
  const { prev, cur } = e
  // the honest silence: a quiet blast book prices no echo (the
  // voice's rest is not the subject - the voice is)
  if (cur.explosions === 0) return null
  if (prev.explosions === 0) {
    return `the explosion book's own echo (v0.976.29): this face's blast book holds ${cur.explosions} explosion(s) of ${cur.deaths} death(s) against the prior face's silence - the siege's own voice returning (co-existence reported, causation never guessed)`
  }
  return `the explosion book's own echo (v0.976.29): this face's blast book holds ${cur.explosions} explosion(s) of ${cur.deaths} death(s) against the prior face's ${prev.explosions} explosion(s) of ${prev.deaths} death(s) - the siege's own voice repeating (co-existence reported, causation never guessed)`
}
