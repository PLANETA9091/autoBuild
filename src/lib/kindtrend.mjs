// (v0.976.39) THE KIND'S OWN TREND - the death book's own head shape
// across three faces. The field priced every branch by hand sixteen
// faces deep before the word existed (the head kind, face by face:
// 313 mob, 314 mob, 315 mob, 316 mob, 317 mob - the mob kind's own
// DYNASTY five faces straight, the 317 siege the dynasty's own peak
// 10 of 12 - then 318 drown, 319 explosion, 320 mob, 321 fall, 322
// explosion, 323 mob, 324 mob, 325 drown, 326 drown, 327 mob, 328
// fall): the CHURN'S OWN RUN rode six times (a turn then a turn - the
// seat trading two walks straight: 317/318/319, 318/319/320, 319/320/
// 321, 320/321/322, 321/322/323, and 326/327/328 the word's own birth
// face), the DYNASTY'S OWN DEATH rode three times (a repeat then a
// turn - the dynasty died at one repeat: 316/317/318 the first
// dynasty's own end, 323/324/325 the mob's second dynasty dying at
// one repeat, 325/326/327 the drown dynasty's own end), the
// DYNASTY'S OWN BIRTH rode twice (a turn then a repeat - the dynasty
// born of a turn: 322/323/324 the mob's second dynasty rising,
// 324/325/326 the drown dynasty's own rise), and the DYNASTY'S OWN
// HOLD rode three times (a repeat then a repeat - the head held three
// faces deep: 313/314/315, 314/315/316, 315/316/317). The echo's word
// (v0.976.31) prices ONE step (the dynasty, the turn, an empty book
// the honest silence) - the PAIR's own shape (the run, the hold, the
// death, the birth) rode unnamed: one face cannot read persistence
// (the v0.471.0 law), and two steps cannot be read from two faces.
//
// The branch law: ONE SHAPE ONE WORD - a turn then a turn prices the
// CHURN'S OWN RUN, a repeat then a repeat prices the DYNASTY'S OWN
// HOLD, a repeat then a turn prices the DYNASTY'S OWN DEATH, a turn
// then a repeat prices the DYNASTY'S OWN BIRTH, and an empty book on
// any face prices the honest silence (the echo's own empty-book law -
// the bars never invent).
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26; the watertrend's own, v0.976.34; the rescue
// book's own, v0.976.36 - the two-back face rides argv[5], nearest
// first). The fold receives the census's own head images per face
// (deathKindCensus owns the buckets, kindSeatHead owns the argmax
// under the family's tie law - one-parser law: the same census runs
// over each face's own lines, never a fork; the SAME cells the
// echo's wire already holds). No two-back face given -> no read (the
// carrier's own null pass).
//
// The co-existence law rides by seat: the echo prices each step one
// at a time (its row already printed beside this wire), this word
// prices the PAIR's own shape - never a second retelling of a single
// step.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). A null head is a legal shape (the
 * empty book's own silence); a present head must carry a non-empty
 * kind byte and a non-negative integer mass.
 *
 * @param {object|null} [e] the trend fold: { back, prev, cur }
 *   per-face head images { kind, deaths } or null (the empty book)
 * @returns {boolean}
 */
export function kindTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (s === null) return true // the empty book's own silence is a legal shape
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { kind, deaths } = s
    if (typeof kind !== 'string' || !kind.length) return false
    if (!Number.isInteger(deaths) || deaths < 0) return false
    return true
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the death book's own two-step head shape. The
 * honest null when the carrier rode no two-back face, or any face's
 * book rode empty (the empty book's own law - the bars never invent).
 *
 * @param {object|null} [e] the trend fold { back, prev, cur }
 *   per-face head images { kind, deaths } or null (the empty book)
 * @returns {string|null} the row byte, or null
 */
export function kindTrendRow (e) {
  if (!kindTrendConsistent(e)) return null
  const { back, prev, cur } = e
  // the honest silences: an empty book on any face prices no trend
  // (the echo's own empty-book law - the bars never invent)
  if (!back || !prev || !cur) return null
  const arc = `${back.kind} (${back.deaths}) -> ${prev.kind} (${prev.deaths}) -> ${cur.kind} (${cur.deaths})`
  const firstRepeat = back.kind === prev.kind
  const secondRepeat = prev.kind === cur.kind
  // a turn then a turn - the seat traded two walks straight
  if (!firstRepeat && !secondRepeat) {
    return `the kind's own trend (v0.976.39): the seat traded two walks straight - ${arc} - the churn's own run (the echo prices each turn one step at a time - the run is the pair's own shape)`
  }
  // a repeat then a repeat - the head held three faces deep
  if (firstRepeat && secondRepeat) {
    return `the kind's own trend (v0.976.39): the head held three faces deep - ${arc} - the dynasty's own hold (the echo prices each repeat one step at a time - the hold is the pair's own shape)`
  }
  // a repeat then a turn - the dynasty died at one repeat
  if (firstRepeat && !secondRepeat) {
    return `the kind's own trend (v0.976.39): the dynasty died at one repeat - ${arc} - the dynasty's own death (the echo prices the repeat and the turn one step at a time - the death is the pair's own shape)`
  }
  // a turn then a repeat - the dynasty born of a turn
  return `the kind's own trend (v0.976.39): the dynasty born of a turn - ${arc} - the dynasty's own birth (the echo prices the turn and the repeat one step at a time - the birth is the pair's own shape)`
}
