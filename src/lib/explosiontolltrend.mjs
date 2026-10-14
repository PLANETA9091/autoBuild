// (v0.976.65) THE EXPLOSION TOLL'S OWN TREND - the explosion kind's
// own magnitude shape across three faces, the death census's FOURTH
// class-toll word. The field priced every branch by hand thirteen
// faces deep before the word existed (the explosion kind's own count
// - the census's own byKind.explosion, the deaths the blast took -
// face by face, the caches' own arithmetic: 334 rode 1, 335 rode 0,
// 336 rode 0, 337 rode 1, 338 rode 0, 339 rode 0, 340 rode 0, 341
// rode 0, 342 rode 2, 343 rode 0, 344 rode 1, 345 rode 0, 346 rode 0
// the storm face's own zero - the fleet died to the freeze-storm
// euthanasia before the first death landed - eleven chains ride the
// arithmetic, and THE EXPLOSION TOLL'S OWN SWING rode four times
// (0 -> 1 -> 0 on the FACE 338 chain, 0 -> 2 -> 0 on the FACE 343
// chain, 2 -> 0 -> 1 on the FACE 344 chain, 0 -> 1 -> 0 on the FACE
// 345 chain the toll trading seats between the walks - the swing
// owns this book's every ride, four of four), and the held step rode
// seven times (1 -> 0 -> 0 on the FACE 336 chain, 0 -> 0 -> 1 on the
// FACE 337 chain, 1 -> 0 -> 0 on the FACE 339 chain, 0 -> 0 -> 0 on
// the FACE 340 chain and the FACE 341 chain the clean trios, 0 -> 0
// -> 2 on the FACE 342 chain the record's own arrival riding unnamed
// behind a held first step, 1 -> 0 -> 0 on the FACE 346 chain the
// storm face's own held exit - the law prices them, the bars never
// invent them); the swell never rode and the fade never rode - the
// blast's own book moves in trades, never in runs (ONE SHAPE ONE
// WORD, the drown toll's own never-rode precedent on the fade's
// seat).
//
// The seat law: the kind's word (v0.976.39) prices the HEAD's own
// identity - WHICH class owns the churn, the dynasty's own sequence;
// the siege's word (v0.976.44) prices the book's own TOTAL - every
// kind's mass summed; and the CLASS TOLLS - each ONE FIXED CLASS's
// own count riding whether it leads or not - rode unnamed (the
// drown's own, v0.976.61; the mob's own, v0.976.62; the fall's own,
// v0.976.63, took three seats; the ZOMBIE TOLL, v0.976.64, crossed
// to the attacker book; the EXPLOSION TOLL the kind book's fourth
// seat - a name can hold while the toll moves, the toll can climb
// while the head turns: different books, and one class's book is
// never another class's). The branch law: ONE SHAPE ONE WORD - rise
// then rise prices the explosion toll's own swell, fall then fall
// prices the explosion toll's own fade, a traded direction prices
// the explosion toll's own swing, a held step (any count-to-count
// zero) prices the honest silence (a held lane is no direction -
// the bars never invent; the watertrend family's own held law). The
// byte-pin: the trend row never speaks the shape's own verdict words
// (no return, no repeat, no stay, no run) nor the head's own verdict
// words (no dynasty, no turn) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the
// kind's word, the siege's word) - the names ride by law, the
// neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the zombie toll's own v0.976.64). The fold
// receives the census's own byKind.explosion per face
// (deathKindCensus owns the buckets - one-parser law: the same
// census runs over each face's own lines, never a fork; the SAME
// cells the kind trend's, the siege's, the echo's and the class
// tolls' wires already hold). No two-back face given -> no read
// (the carrier's own null pass).
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
 *   { back: {explosion}, prev: {explosion}, cur: {explosion} }
 * @returns {boolean}
 */
export function explosionTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.explosion) && s.explosion >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the explosion toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {explosion}, prev: {explosion}, cur: {explosion} }
 * @returns {string|null} the row byte, or null
 */
export function explosionTollTrendRow (e) {
  if (!explosionTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.explosion - back.explosion
  const second = cur.explosion - prev.explosion
  const arc = `${back.explosion} -> ${prev.explosion} (${first >= 0 ? '+' : ''}${first}) -> ${cur.explosion} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the kind\'s word prices the head\'s own identity, the siege\'s word prices the book\'s own total - this word prices the explosion toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the explosion toll's own trend (v0.976.65): the explosion toll's rise ran two steps deep - ${arc} - the explosion toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the explosion toll's own trend (v0.976.65): the explosion toll's fall ran two steps deep - ${arc} - the explosion toll's own fade ${tail}`
  }
  return `the explosion toll's own trend (v0.976.65): the explosion toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
