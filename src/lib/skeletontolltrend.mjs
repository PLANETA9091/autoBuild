// (v0.976.66) THE SKELETON TOLL'S OWN TREND - the server-named killer
// Skeleton's own magnitude shape across three faces, the mob book's
// SECOND class-toll word - the class-toll seat riding beside the
// zombie toll's own (v0.976.64, the attacker book's first seat).
// The field priced every branch by hand seven faces deep before the
// word existed (the skeleton toll's own count - the census's own
// byAttacker.Skeleton, the arrows the night's own levy took - face
// by face, the caches' own arithmetic: 340 rode 0, 341 rode 0, 342
// rode 5 the record's own ride, 343 rode 0, 344 rode 1, 345 rode 0,
// 346 rode 0 the storm face's own zero - five chains ride the
// arithmetic, and THE SKELETON TOLL'S OWN SWING rode three times
// (0 -> 5 -> 0 on the FACE 343 chain the record trading both seats
// back, 5 -> 0 -> 1 on the FACE 344 chain the crash then the single
// arrow, 0 -> 1 -> 0 on the FACE 345 chain), and the held step rode
// twice (0 -> 0 -> 5 on the FACE 342 chain the record's own arrival
// riding unnamed behind a held first step, 1 -> 0 -> 0 on the FACE
// 346 chain the storm face's own held exit - the law prices them,
// the bars never invent them); the swell never rode and the fade
// never rode - the arrows come in trades, never in runs - ONE SHAPE
// ONE WORD (the zombie toll's own precedent).
//
// The seat law: the attacker seat's own word (v0.788.0) prices WHICH
// server-named killer owns the mob book under the strict-majority
// law; the riders' word prices the top killers' own concentration;
// and the CLASS TOLLS - each ONE FIXED killer's own count riding
// whether it owns the seat or not - the ZOMBIE TOLL the first, the
// SKELETON TOLL the second (a name can hold while the toll moves,
// the toll can climb while the seat turns over: different books,
// and one killer's book is never another killer's). The branch law:
// ONE SHAPE ONE WORD - rise then rise prices the skeleton toll's
// own swell, fall then fall prices the skeleton toll's own fade, a
// traded direction prices the skeleton toll's own swing, a held
// step (any count-to-count zero) prices the honest silence (a held
// lane is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the seat's own verdict words (no owns, no dynasty, no
// turn) - co-existence by seat never by duplication; the seat-law
// tail names the neighbor seats (the attacker seat's word, the
// riders' word) - the names ride by law, the neighbor verdicts
// never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the zombie toll's own v0.976.64). The fold
// receives the census's own byAttacker.Skeleton per face
// (deathKindCensus owns the buckets - one-parser law: the same
// census runs over each face's own lines, never a fork; the SAME
// cells the attacker seat's, the riders' and the zombie toll's
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
 *   { back: {skeleton}, prev: {skeleton}, cur: {skeleton} }
 * @returns {boolean}
 */
export function skeletonTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.skeleton) && s.skeleton >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the skeleton toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {skeleton}, prev: {skeleton}, cur: {skeleton} }
 * @returns {string|null} the row byte, or null
 */
export function skeletonTollTrendRow (e) {
  if (!skeletonTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.skeleton - back.skeleton
  const second = cur.skeleton - prev.skeleton
  const arc = `${back.skeleton} -> ${prev.skeleton} (${first >= 0 ? '+' : ''}${first}) -> ${cur.skeleton} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the seat\'s word names the mob book\'s own killer, the riders\' word prices the crowd\'s own concentration - this word prices the skeleton toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the skeleton toll's own trend (v0.976.66): the skeleton toll's rise ran two steps deep - ${arc} - the skeleton toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the skeleton toll's own trend (v0.976.66): the skeleton toll's fall ran two steps deep - ${arc} - the skeleton toll's own fade ${tail}`
  }
  return `the skeleton toll's own trend (v0.976.66): the skeleton toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
