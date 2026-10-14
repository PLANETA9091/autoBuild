// (v0.976.44) THE SIEGE'S OWN TREND - the death book's own magnitude
// shape across three faces. The field priced every branch by hand six
// faces deep before the word existed (the book's own total, face by
// face, the census's own arithmetic: 325 rode 9, 326 rode 1, 327 rode
// 4, 328 rode 7, 329 rode 4, 330 rode 4 - the SWING rode twice (9 ->
// 1 -> 4 and 4 -> 7 -> 4 - the rise and the fall traded seats between
// the walks), the SWELL'S OWN RUN rode once (1 -> 4 -> 7 - two
// consecutive rises, the word's own birth face), the held step priced
// the silence once (7 -> 4 -> 4 - a held book is no direction, the
// family's own held law), and the FADE'S OWN RUN never rode the six
// faces the census priced - the law prices it, the bars never invent
// it.
//
// The seat law: the kind's word (v0.976.31, v0.976.39) prices the
// HEAD's own identity (the dynasty, the turn - WHICH kind owns the
// book), the pace's word (v0.976.32) prices the sustained RATE
// between two faces (deaths per minute), and the book's own
// MAGNITUDE shape - the total's own rise, fall, and trade across
// three faces - rode unnamed. The echo's word (v0.976.29) prices the
// blast voice's recurrence - the voice and the owner and the mass are
// different subjects, co-existence by seat never by duplication.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// SIEGE'S OWN SWELL, fall then fall prices the SIEGE'S OWN FADE, a
// traded direction prices the SIEGE'S OWN SWING, a held step (any
// total-to-total zero) prices the honest silence (a held siege is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the kind's own
// words (no dynasty, no churn, no turn) nor the pace's own units
// (never deaths/min) - co-existence by seat never by duplication.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42). The fold receives the census's
// own totals per face (deathKindCensus owns the book's own mass -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cells the kind trend's wire already holds).
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
 *   { back: {deaths}, prev: {deaths}, cur: {deaths} }
 * @returns {boolean}
 */
export function siegeTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.deaths) && s.deaths >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the siege's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {deaths}, prev: {deaths}, cur: {deaths} }
 * @returns {string|null} the row byte, or null
 */
export function siegeTrendRow (e) {
  if (!siegeTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.deaths - back.deaths
  const second = cur.deaths - prev.deaths
  const arc = `${back.deaths} -> ${prev.deaths} (${first >= 0 ? '+' : ''}${first}) -> ${cur.deaths} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the kind\'s word prices the head\'s own seat, the pace prices the sustained rate - this word prices the book\'s own magnitude, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the siege's own trend (v0.976.44): the book's rise ran two steps deep - ${arc} - the siege's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the siege's own trend (v0.976.44): the book's fall ran two steps deep - ${arc} - the siege's own fade ${tail}`
  }
  return `the siege's own trend (v0.976.44): the siege's own swing - ${arc} - the rise and the fall traded seats between the walks (the kind's word prices the head's own seat, the pace prices the sustained rate - this word prices the book's own magnitude, co-existence by seat never by duplication)`
}
