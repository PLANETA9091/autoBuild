// (v0.976.36) THE RESCUE BOOK'S OWN TREND - the scar's own two-step
// shape across three faces. The field priced every branch by hand
// twelve faces deep before the word existed (the rescue book's own
// totals, unclosed of starts, one face at a time): the SWING rode
// eight times - FACE 315 -> 316 -> 317 (0/33 -> 4/116 -> 0/11), FACE
// 316 -> 317 -> 318 (4/116 -> 0/11 -> 1/29), FACE 317 -> 318 -> 319
// (0 -> 1 -> 0), FACE 318 -> 319 -> 320 (1 -> 0 -> 1), FACE 319 ->
// 320 -> 321 (0 -> 1 -> 0), FACE 320 -> 321 -> 322 (1 -> 0 -> 1),
// FACE 321 -> 322 -> 323 (0 -> 1 -> 0), FACE 322 -> 323 -> 324 (1/43
// -> 0/20 -> 3/55) - the clean and the scar traded seats between the
// walks the whole churn era long; the STAY rode once - FACE 323 ->
// 324 -> 325 (0/20 -> 3/55 -> 2/44, the scar arrived on the return
// and held); and the RUN rode once - FACE 324 -> 325 -> 326 (3/55 ->
// 2/44 -> 1/63, the scar held three faces deep - the word's own birth
// face). The echo's word (v0.976.25) prices ONE step (the clean ->
// scarred RETURN, the scarred -> scarred REPEAT, a clean face the
// honest silence) - the PAIR's own shape (the run, the stay, the
// swing) rode unnamed: one face cannot read persistence (the
// v0.471.0 law), and two steps cannot be read from two faces.
//
// The branch law: ONE SHAPE ONE WORD - a repeat then a repeat prices
// the SCAR'S OWN RUN (the hold three faces deep), a return then a
// repeat prices the SCAR'S OWN STAY (the arrival and the hold), a
// traded seat prices the SCAR'S OWN SWING either way (the scar at the
// bookends or the scar in the middle - the alternation is one shape),
// and every trio a held-clean step rode (the clean book twice in a
// row, or the release into a held clean, or the hold's own release
// the field never rode) prices the honest silence (the family's own
// held law - the bars never invent; the unriden shapes wait for
// their first ride).
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26; the watertrend's own, v0.976.34 - the
// two-back face rides argv[5], nearest first). The fold receives the
// ledger's own totals { unclosed, starts } per face (rescueLedger
// owns the book - one-parser law: the same parser runs over each
// face's own lines, never a fork; the SAME cells the echo's wire
// already holds). No two-back face given -> no read (the carrier's
// own null pass).
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
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {unclosed, starts}, prev: {unclosed, starts}, cur: {unclosed, starts} }
 * @returns {boolean}
 */
export function rescueTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    if (!Number.isInteger(s.unclosed) || s.unclosed < 0) return false
    if (!Number.isInteger(s.starts) || s.starts < 0) return false
    return true
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the rescue book's own two-step shape. The
 * honest null when the carrier rode no two-back face, or no pair
 * shape rode (the held law - the bars never invent).
 *
 * @param {object|null} [e] the trend fold
 *   { back: {unclosed, starts}, prev: {unclosed, starts}, cur: {unclosed, starts} }
 * @returns {string|null} the row byte, or null
 */
export function rescueTrendRow (e) {
  if (!rescueTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const arc = `${back.unclosed} unclosed of ${back.starts} start(s), then ${prev.unclosed} of ${prev.starts}, then ${cur.unclosed} of ${cur.starts}`
  const backScar = back.unclosed > 0
  const prevScar = prev.unclosed > 0
  const curScar = cur.unclosed > 0
  // the run: a repeat then a repeat - the hold three faces deep
  if (backScar && prevScar && curScar) {
    return `the rescue book's own trend (v0.976.36): the scar held three faces deep - ${arc} - the scar's own run (the echo prices each repeat one step at a time - the run is the pair's own shape)`
  }
  // the stay: a return then a repeat - the arrival and the hold
  if (!backScar && prevScar && curScar) {
    return `the rescue book's own trend (v0.976.36): the scar arrived on the return and held - ${arc} - the scar's own stay (the echo prices the return and the repeat one step at a time - the stay is the pair's own shape)`
  }
  // the swing: a traded seat either way - the scar at the bookends or
  // the scar in the middle (the alternation is one shape)
  if (backScar && !prevScar && curScar) {
    return `the rescue book's own trend (v0.976.36): the clean and the scar traded seats between the walks - ${arc} - the scar's own swing (the echo prices each step one at a time - the alternation is the pair's own shape)`
  }
  if (!backScar && prevScar && !curScar) {
    return `the rescue book's own trend (v0.976.36): the clean and the scar traded seats between the walks - ${arc} - the scar's own swing (the echo prices each step one at a time - the alternation is the pair's own shape)`
  }
  // every other trio rode no pair shape (the held law - the bars
  // never invent): the held clean, the held-then-return, the
  // release-into-held, the hold's own release the field never rode
  return null
}
