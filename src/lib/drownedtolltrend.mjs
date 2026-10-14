// (v0.976.67) THE DROWNED TOLL'S OWN TREND - the server-named killer
// Drowned's own magnitude shape across three faces, the mob book's
// THIRD class-toll word - the class-toll seat riding beside the
// zombie toll's own (v0.976.64, the attacker book's first seat) and
// the skeleton toll's own (v0.976.66, the second). The field priced
// every branch by hand eight faces deep before the word existed (the
// drowned toll's own count - the census's own byAttacker.Drowned,
// the drags the wet killer took - face by face, the caches' own
// arithmetic: 340 rode 3, 341 rode 0, 342 rode 0, 343 rode 0, 344
// rode 2, 345 rode 1, 346 rode 0, 347 rode 0 - six chains ride the
// arithmetic, and THE DROWNED TOLL'S OWN FADE rode once (2 -> 1 -> 0
// on the FACE 346 chain the branch's own birth - the first fade the
// attacker book's class tolls ever rode, the zombie toll's own fade
// never rode and the skeleton toll's own fade never rode), the
// DROWNED TOLL'S OWN SWING rode once (0 -> 2 -> 1 on the FACE 345
// chain the drag trading seats between the walks), and the held step
// rode four times (3 -> 0 -> 0 on the FACE 342 chain the crowd's own
// crash riding unnamed behind a held second step, 0 -> 0 -> 0 on the
// FACE 343 chain the clean trio, 0 -> 0 -> 2 on the FACE 344 chain
// the climb riding unnamed behind a held first step, 1 -> 0 -> 0 on
// the FACE 347 chain - the law prices them, the bars never invent
// them); the swell never rode - ONE SHAPE ONE WORD (the skeleton
// toll's own precedent).
//
// The seat law: the attacker seat's own word (v0.788.0) prices WHICH
// server-named killer owns the mob book under the strict-majority
// law; the riders' word prices the top killers' own concentration;
// and the CLASS TOLLS - each ONE FIXED killer's own count riding
// whether it owns the seat or not - the ZOMBIE TOLL the first, the
// SKELETON TOLL the second, the DROWNED TOLL the third (a name can
// hold while the toll moves, the toll can climb while the seat turns
// over: different books, and one killer's book is never another
// killer's). THE NAME'S OWN FENCE: the DROWNED TOLL prices the
// KILLER's own count (the census's own byAttacker.Drowned) - the
// drown toll's own word (v0.976.61) prices the WATER DEATH's own
// count (the census's own byKind.drown) - a different book, the
// killer is not the death; the Drowned killer's toll can climb while
// the drown death's toll holds still and the reverse rides the same
// law. The branch law: ONE SHAPE ONE WORD - rise then rise prices
// the drowned toll's own swell, fall then fall prices the drowned
// toll's own fade, a traded direction prices the drowned toll's own
// swing, a held step (any count-to-count zero) prices the honest
// silence (a held lane is no direction - the bars never invent; the
// watertrend family's own held law). The byte-pin: the trend row
// never speaks the shape's own verdict words (no return, no repeat,
// no stay, no run) nor the seat's own verdict words (no owns, no
// dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats (the attacker seat's
// word, the riders' word, the drown toll's own word) - the names
// ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the skeleton toll's own v0.976.66). The fold
// receives the census's own byAttacker.Drowned per face
// (deathKindCensus owns the buckets - one-parser law: the same
// census runs over each face's own lines, never a fork; the SAME
// cells the attacker seat's, the riders', the zombie toll's and the
// skeleton toll's wires already hold). No two-back face given -> no
// read (the carrier's own null pass).
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
 *   { back: {drowned}, prev: {drowned}, cur: {drowned} }
 * @returns {boolean}
 */
export function drownedTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.drowned) && s.drowned >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the drowned toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {drowned}, prev: {drowned}, cur: {drowned} }
 * @returns {string|null} the row byte, or null
 */
export function drownedTollTrendRow (e) {
  if (!drownedTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.drowned - back.drowned
  const second = cur.drowned - prev.drowned
  const arc = `${back.drowned} -> ${prev.drowned} (${first >= 0 ? '+' : ''}${first}) -> ${cur.drowned} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the seat\'s word names the mob book\'s own killer, the riders\' word prices the crowd\'s own concentration, the drown toll\'s own word prices the water kind\'s own mass - a different book, the killer is not the death - this word prices the drowned toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the drowned toll's own trend (v0.976.67): the drowned toll's rise ran two steps deep - ${arc} - the drowned toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the drowned toll's own trend (v0.976.67): the drowned toll's fall ran two steps deep - ${arc} - the drowned toll's own fade ${tail}`
  }
  return `the drowned toll's own trend (v0.976.67): the drowned toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
