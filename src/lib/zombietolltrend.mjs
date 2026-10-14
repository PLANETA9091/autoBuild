// (v0.976.64) THE ZOMBIE TOLL'S OWN TREND - the server-named killer
// Zombie's own magnitude shape across three faces, the mob book's
// FIRST class-toll word - the class-toll seat transplanted from the
// death census's kind book (the drown's own v0.976.61, the mob's own
// v0.976.62, the fall's own v0.976.63) to the census's own attacker
// book. The field priced every branch by hand twelve faces deep
// before the word existed (the zombie toll's own count - the census's
// own byAttacker.Zombie, the deaths the night's own levy took - face
// by face, the caches' own arithmetic: 334 rode 9, 335 rode 3, 336
// rode 3, 337 rode 1, 338 rode 3, 339 rode 4, 340 rode 0, 341 rode
// 0, 342 rode 1, 343 rode 0, 344 rode 0, 345 rode 0 - ten chains
// ride the arithmetic, and THE ZOMBIE TOLL'S OWN SWING rode three
// times (3 -> 1 -> 3 on the FACE 338 chain, 3 -> 4 -> 0 on the FACE
// 340 chain, 0 -> 1 -> 0 on the FACE 343 chain the toll trading
// seats between the walks), the ZOMBIE TOLL'S OWN SWELL rode once
// (1 -> 3 -> 4 on the FACE 339 chain the word's own birth window),
// and the held step rode six times (9 -> 3 -> 3 on the FACE 336
// chain the crowd's own crash riding unnamed behind a held second
// step, 3 -> 3 -> 1 on the FACE 337 chain, 4 -> 0 -> 0 on the FACE
// 341 chain, 0 -> 0 -> 1 on the FACE 342 chain, 1 -> 0 -> 0 on the
// FACE 344 chain, 0 -> 0 -> 0 on the FACE 345 chain the clean trio -
// the law prices them, the bars never invent them); the fade never
// rode - ONE SHAPE ONE WORD (the drown toll's own precedent).
//
// The seat law: the attacker seat's own word (v0.788.0) prices WHICH
// server-named killer owns the mob book under the strict-majority
// law; the riders' word prices the top killers' own concentration;
// and the CLASS TOLLS - each ONE FIXED killer's own count riding
// whether it owns the seat or not - rode unnamed (the ZOMBIE TOLL
// the first - a name can hold while the toll moves, the toll can
// climb while the seat turns over: different books, and one
// killer's book is never another killer's). The branch law: ONE
// SHAPE ONE WORD - rise then rise prices the zombie toll's own
// swell, fall then fall prices the zombie toll's own fade, a traded
// direction prices the zombie toll's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seat's own verdict words (no owns, no dynasty, no turn) -
// co-existence by seat never by duplication; the seat-law tail
// names the neighbor seats (the attacker seat's word, the riders'
// word) - the names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the fall toll's own v0.976.63). The fold
// receives the census's own byAttacker.Zombie per face
// (deathKindCensus owns the buckets - one-parser law: the same
// census runs over each face's own lines, never a fork; the SAME
// cells the attacker seat's and the riders' wires already hold). No
// two-back face given -> no read (the carrier's own null pass).
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
 *   { back: {zombie}, prev: {zombie}, cur: {zombie} }
 * @returns {boolean}
 */
export function zombieTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.zombie) && s.zombie >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the zombie toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {zombie}, prev: {zombie}, cur: {zombie} }
 * @returns {string|null} the row byte, or null
 */
export function zombieTollTrendRow (e) {
  if (!zombieTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.zombie - back.zombie
  const second = cur.zombie - prev.zombie
  const arc = `${back.zombie} -> ${prev.zombie} (${first >= 0 ? '+' : ''}${first}) -> ${cur.zombie} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the seat\'s word names the mob book\'s own killer, the riders\' word prices the crowd\'s own concentration - this word prices the zombie toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the zombie toll's own trend (v0.976.64): the zombie toll's rise ran two steps deep - ${arc} - the zombie toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the zombie toll's own trend (v0.976.64): the zombie toll's fall ran two steps deep - ${arc} - the zombie toll's own fade ${tail}`
  }
  return `the zombie toll's own trend (v0.976.64): the zombie toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
