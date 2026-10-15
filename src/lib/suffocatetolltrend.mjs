// (v0.976.117) THE SUFFOCATE TOLL'S OWN TREND - the suffocate kind's
// own magnitude shape across three faces, the death census's FIFTH
// class-toll word. The field priced every branch by hand thirty-six
// faces deep before the word existed (the suffocate kind's own count
// - the census's own byKind.suffocate, the deaths the wall took -
// face by face, the caches' own arithmetic: 348 rode 0, 349 rode 0,
// 350 rode 0, 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 0, 355
// rode 0, 356 rode 0, 357 rode 0, 358 rode 0, 359 rode 0, 360 rode
// 0, 361 rode 0, 362 rode 0, 363 rode 0, 364 rode 0, 365 rode 0,
// 366 rode 0, 367 rode 0, 368 rode 0, 369 rode 0, 370 rode 0 - THE
// DROUGHT'S OWN LONG SILENCE twenty-three faces deep - 371 rode 1
// THE FIELD'S OWN FIRST SUFFOCATE DEATH, 372 rode 0, 373 rode 0,
// 374 rode 1, 375 rode 0, 376 rode 0, 377 rode 0, 378 rode 0, 379
// rode 0, 380 rode 1, 381 rode 0, 382 rode 0, 383 rode 1 - the
// count left zero TWENTY-NINE of thirty-six faces, the wall's own
// rare toll one ride at a time; thirty-four windows ride the
// arithmetic, and THE SUFFOCATE TOLL'S OWN SWING rode three times
// (0 -> 1 -> 0 on the FACE 372 chain, 0 -> 1 -> 0 on the FACE 375
// chain, 0 -> 1 -> 0 on the FACE 381 chain - THE SAME TRADE THREE
// TIMES: the wall's one death traded back the very next walk, the
// swing owns this book's every directional ride, three of three),
// and the held step rode thirty-one times (the drought's own clean
// trios across the faces 348..370 windows, the record's own
// arrivals riding unnamed behind a held first step - 0 -> 0 -> 1 on
// the FACE 371 chain, the FACE 374 chain, the FACE 380 chain and
// the FACE 383 chain - the wall's own four rides each named only by
// the next window's trade, and the held exits 1 -> 0 -> 0 on the
// FACE 373 chain, the FACE 376 chain and the FACE 382 chain - the
// law prices them, the bars never invent them); the swell never
// rode and the fade never rode - the wall's own book moves in
// trades, never in runs (ONE SHAPE ONE WORD, the explosion toll's
// own never-rode precedent on both seats).
//
// The seat law: the kind's word (v0.976.39) prices the HEAD's own
// identity - WHICH class owns the churn, the dynasty's own sequence;
// the siege's word (v0.976.44) prices the book's own TOTAL - every
// kind's mass summed; and the CLASS TOLLS - each ONE FIXED CLASS's
// own count riding whether it leads or not - rode unnamed (the
// drown's own, v0.976.61; the mob's own, v0.976.62; the fall's own,
// v0.976.63; the explosion's own, v0.976.65; the ZOMBIE TOLL,
// v0.976.64, crossed to the attacker book; the SUFFOCATE TOLL the
// kind book's fifth seat - a name can hold while the toll moves,
// the toll can climb while the head turns: different books, and one
// class's book is never another class's). The branch law: ONE SHAPE
// ONE WORD - rise then rise prices the suffocate toll's own swell,
// fall then fall prices the suffocate toll's own fade, a traded
// direction prices the suffocate toll's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// head's own verdict words (no dynasty, no turn) - co-existence by
// seat never by duplication; the seat-law tail names the neighbor
// seats (the kind's word, the siege's word) - the names ride by
// law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the explosion toll's own v0.976.65). The fold
// receives the census's own byKind.suffocate per face
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
 *   { back: {suffocate}, prev: {suffocate}, cur: {suffocate} }
 * @returns {boolean}
 */
export function suffocateTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.suffocate) && s.suffocate >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the suffocate toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {suffocate}, prev: {suffocate}, cur: {suffocate} }
 * @returns {string|null} the row byte, or null
 */
export function suffocateTollTrendRow (e) {
  if (!suffocateTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.suffocate - back.suffocate
  const second = cur.suffocate - prev.suffocate
  const arc = `${back.suffocate} -> ${prev.suffocate} (${first >= 0 ? '+' : ''}${first}) -> ${cur.suffocate} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the kind\'s word prices the head\'s own identity, the siege\'s word prices the book\'s own total - this word prices the suffocate toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the suffocate toll's own trend (v0.976.117): the suffocate toll's rise ran two steps deep - ${arc} - the suffocate toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the suffocate toll's own trend (v0.976.117): the suffocate toll's fall ran two steps deep - ${arc} - the suffocate toll's own fade ${tail}`
  }
  return `the suffocate toll's own trend (v0.976.117): the suffocate toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
