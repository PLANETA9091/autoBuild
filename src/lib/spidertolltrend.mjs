// (v0.976.68) THE SPIDER TOLL'S OWN TREND - the server-named killer
// Spider's own magnitude shape across three faces, the mob book's
// FOURTH class-toll word - the class-toll seat riding beside the
// zombie toll's own (v0.976.64, the attacker book's first seat), the
// skeleton toll's own (v0.976.66, the second) and the drowned toll's
// own (v0.976.67, the third). The field priced every branch by hand
// ten faces deep before the word existed (the spider toll's own count
// - the census's own byAttacker.Spider, the venoms the eight-legged
// killer took - face by face, the caches' own arithmetic: 338 rode 0,
// 339 rode 1, 340 rode 0, 341 rode 1, 342 rode 0, 343 rode 1, 344
// rode 1, 345 rode 0, 346 rode 0, 347 rode 0 - eight chains ride the
// arithmetic, and THE SPIDER TOLL'S OWN SWING rode four times (0 ->
// 1 -> 0 on the FACE 340 chain, 1 -> 0 -> 1 on the FACE 341 chain,
// 0 -> 1 -> 0 on the FACE 342 chain, 1 -> 0 -> 1 on the FACE 343
// chain - every directional ride the spider book's toll ever took
// was a trade, four of four, the arrows come in trades never in runs
// - the spider's own toll moves in single arrows between silent
// walks), and the held step rode four times (0 -> 1 -> 1 on the FACE
// 344 chain the climb riding unnamed behind a held second step, 1 ->
// 1 -> 0 on the FACE 345 chain, 1 -> 0 -> 0 on the FACE 346 chain,
// 0 -> 0 -> 0 on the FACE 347 chain the clean trio - the law prices
// them, the bars never invent them); the swell never rode and the
// fade never rode - ONE SHAPE ONE WORD (the drowned toll's own
// precedent).
//
// The seat law: the attacker seat's own word (v0.788.0) prices WHICH
// server-named killer owns the mob book under the strict-majority
// law; the riders' word prices the top killers' own concentration;
// and the CLASS TOLLS - each ONE FIXED killer's own count riding
// whether it owns the seat or not - the ZOMBIE TOLL the first, the
// SKELETON TOLL the second, the DROWNED TOLL the third, the SPIDER
// TOLL the fourth (a name can hold while the toll moves, the toll can
// climb while the seat turns over: different books, and one killer's
// book is never another killer's). THE NAME'S OWN FENCE: the SPIDER
// TOLL prices the KILLER's own count (the census's own
// byAttacker.Spider) - the mob toll's own word (v0.976.62) prices the
// MOB KIND's own count (the census's own byKind.mob) - a different
// book, the killer is not the death; the Spider killer's toll can
// climb while the mob death's toll holds still and the reverse rides
// the same law. The branch law: ONE SHAPE ONE WORD - rise then rise
// prices the spider toll's own swell, fall then fall prices the
// spider toll's own fade, a traded direction prices the spider toll's
// own swing, a held step (any count-to-count zero) prices the honest
// silence (a held lane is no direction - the bars never invent; the
// watertrend family's own held law). The byte-pin: the trend row
// never speaks the shape's own verdict words (no return, no repeat,
// no stay, no run) nor the seat's own verdict words (no owns, no
// dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats (the attacker seat's
// word, the riders' word, the mob toll's own word) - the names
// ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the drowned toll's own v0.976.67). The fold
// receives the census's own byAttacker.Spider per face
// (deathKindCensus owns the buckets - one-parser law: the same
// census runs over each face's own lines, never a fork; the SAME
// cells the attacker seat's, the riders', the zombie toll's, the
// skeleton toll's and the drowned toll's wires already hold). No
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
 *   { back: {spider}, prev: {spider}, cur: {spider} }
 * @returns {boolean}
 */
export function spiderTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.spider) && s.spider >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the spider toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {spider}, prev: {spider}, cur: {spider} }
 * @returns {string|null} the row byte, or null
 */
export function spiderTollTrendRow (e) {
  if (!spiderTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.spider - back.spider
  const second = cur.spider - prev.spider
  const arc = `${back.spider} -> ${prev.spider} (${first >= 0 ? '+' : ''}${first}) -> ${cur.spider} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the seat\'s word names the mob book\'s own killer, the riders\' word prices the crowd\'s own concentration, the mob toll\'s own word prices the mob kind\'s own mass - a different book, the killer is not the death - this word prices the spider toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the spider toll's own trend (v0.976.68): the spider toll's rise ran two steps deep - ${arc} - the spider toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the spider toll's own trend (v0.976.68): the spider toll's fall ran two steps deep - ${arc} - the spider toll's own fade ${tail}`
  }
  return `the spider toll's own trend (v0.976.68): the spider toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
