// (v0.976.63) THE FALL TOLL'S OWN TREND - the fall kind's own
// magnitude shape across three faces, the death census's third
// class-toll word. The field priced every branch by hand eleven
// faces deep before the word existed (the fall kind's own count -
// the census's own byKind.fall, the deaths the drop took - face by
// face, the caches' own arithmetic: 334 rode 0, 335 rode 0, 336 rode
// 0, 337 rode 0, 338 rode 3, 339 rode 1, 340 rode 0, 341 rode 1, 342
// rode 2, 343 rode 0, 344 rode 0 - the FALL TOLL'S OWN SWING rode
// three times (0 -> 3 -> 1 on the FACE 339 chain, 1 -> 0 -> 1 on the
// FACE 341 chain, 1 -> 2 -> 0 on the FACE 343 chain the toll trading
// seats between the walks), the FALL TOLL'S OWN FADE rode once (3 ->
// 1 -> 0 on the FACE 340 chain the branch's own birth - the branch
// the drown toll never rode, born in the fall's own book), the FALL
// TOLL'S OWN SWELL rode once (0 -> 1 -> 2 on the FACE 342 chain the
// word's own birth window), and the held step rode three times (0 ->
// 0 -> 3 on the FACE 338 chain the storm's own arrival riding
// unnamed behind a held first step, 2 -> 0 -> 0 on the FACE 344
// chain, 0 -> 0 -> 0 on the FACE 337 chain - the law prices it, the
// bars never invent it).
//
// The seat law: the kind's word (v0.976.39) prices the HEAD's own
// identity - WHICH class owns the churn, the dynasty's own sequence;
// the siege's word (v0.976.44) prices the book's own TOTAL - every
// kind's mass summed; and the CLASS TOLLS - each ONE FIXED CLASS's
// own count riding whether it leads or not - rode unnamed (the
// drown's own, v0.976.61, and the mob's own, v0.976.62, took the
// first two seats; the FALL TOLL the third - a name can hold while
// the toll moves, the toll can climb while the head turns: different
// books, and one class's book is never another class's). The branch
// law: ONE SHAPE ONE WORD - rise then rise prices the fall toll's
// own swell, fall then fall prices the fall toll's own fade, a
// traded direction prices the fall toll's own swing, a held step
// (any count-to-count zero) prices the honest silence (a held lane
// is no direction - the bars never invent; the watertrend family's
// own held law). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the head's own verdict words (no dynasty, no turn) -
// co-existence by seat never by duplication; the seat-law tail
// names the neighbor seats (the kind's word, the siege's word) - the
// names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50; the frozen ends' own, v0.976.52; the drain's own,
// v0.976.53; the orphans' own, v0.976.54; the blind-live's own,
// v0.976.56; the no-ground-truth's own, v0.976.57; the shore-stall's
// own, v0.976.58; the shore-pin's own, v0.976.59; the transit-stall's
// own, v0.976.60; the drown toll's own, v0.976.61; the mob toll's
// own, v0.976.62). The fold receives the census's own byKind.fall
// per face (deathKindCensus owns the buckets - one-parser law: the
// same census runs over each face's own lines, never a fork; the
// SAME cells the kind trend's, the siege's and the class tolls'
// wires already hold). No two-back face given -> no read (the
// carrier's own null pass).
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
 *   { back: {fall}, prev: {fall}, cur: {fall} }
 * @returns {boolean}
 */
export function fallTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.fall) && s.fall >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the fall toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {fall}, prev: {fall}, cur: {fall} }
 * @returns {string|null} the row byte, or null
 */
export function fallTollTrendRow (e) {
  if (!fallTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.fall - back.fall
  const second = cur.fall - prev.fall
  const arc = `${back.fall} -> ${prev.fall} (${first >= 0 ? '+' : ''}${first}) -> ${cur.fall} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the kind\'s word prices the head\'s own identity, the siege\'s word prices the book\'s own total - this word prices the fall toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the fall toll's own trend (v0.976.63): the fall toll's rise ran two steps deep - ${arc} - the fall toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the fall toll's own trend (v0.976.63): the fall toll's fall ran two steps deep - ${arc} - the fall toll's own fade ${tail}`
  }
  return `the fall toll's own trend (v0.976.63): the fall toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
