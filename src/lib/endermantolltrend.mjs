// (v0.976.113) THE ENDERMAN TOLL'S OWN TREND - the server-named
// killer Enderman's own magnitude shape across three faces, the mob
// book's SIXTH class-toll word - the class-toll seat beside the
// zombie toll's own (v0.976.64), the skeleton toll's own
// (v0.976.66), the drowned toll's own (v0.976.67), the spider
// toll's own (v0.976.68) and the witch toll's own (v0.976.72). The
// field priced every branch by hand SIXTY-ONE faces deep before the
// word existed (the enderman toll's own count - the census's own
// byAttacker.Enderman, the teleporter's own levy the night's own
// glance buys - face by face, the cache's own shelf 319 through 379:
// every face rode 0 - 319, 320, 321, 322, 323, 324, 325, 326, 327,
// 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340,
// 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353,
// 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366,
// 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377 - until THE
// FACE 378 THE FIELD'S OWN FIRST ENDERMAN KILL rode 1 (F7 slain by
// Enderman at [-173,65,430], the inference's enderman@1.8 the
// server verdict's own corroborator) and the FACE 379 paid it back
// riding 0 - the deep past's own rides (the run536 era's Enderman
// NEW, the run91 era's enderman x2) rode before the grammar's own
// byAttacker book existed - the worklogs' own witness, the cache's
// own shelf the pricing). THE WORD BORN SPEAKING ON ITS OWN FIRST
// READ'S WINDOW: the FACE 379 chain 0 -> 1 (+1) -> 0 (-1) THE
// SWING - the lone kill traded back the very next walk (the
// creeper's own v0.976.111 birth the word's own birthright, the
// shelter's own v0.976.82 the proof's own spoke); the chains
// through the lone face the field's own shapes: the FACE 378 chain
// 0 -> 0 -> 1 the record's own arrival riding unnamed behind a held
// first step, the FACE 380 chain the held exit's own wait (1 -> 0
// -> ? - a zero the honest silence, a rise the trade's own return
// unnamed); the swell and the fade never rode the sixty-one faces
// the census priced - the teleporter's own tolls trade one kill at
// a time, the law prices them, the bars never invent them).
//
// The seat law: the attacker seat's own word (v0.788.0) prices WHICH
// server-named killer owns the mob book under the strict-majority
// law; the riders' word prices the top killers' own concentration;
// and the CLASS TOLLS - each ONE FIXED killer's own count riding
// whether it owns the seat or not - the ENDERMAN TOLL the sixth (a
// name can hold while the toll moves, the toll can climb while the
// seat turns over: different books, and one killer's book is never
// another killer's). The branch law: ONE SHAPE ONE WORD - rise then
// rise prices the enderman toll's own swell, fall then fall prices
// the enderman toll's own fade, a traded direction prices the
// enderman toll's own swing, a held step (any count-to-count zero)
// prices the honest silence (a held lane is no direction - the bars
// never invent; the watertrend family's own held law). The
// byte-pin: the trend row never speaks the shape's own verdict words
// (no return, no repeat, no stay, no run) nor the seat's own verdict
// words (no owns, no dynasty, no turn) - co-existence by seat never
// by duplication; the seat-law tail names the neighbor seats (the
// attacker seat's word, the riders' word, the witch toll's own) -
// the names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the witch toll's own v0.976.72). The fold
// receives the census's own byAttacker.Enderman per face
// (deathKindCensus owns the buckets - one-parser law: the same
// census runs over each face's own lines, never a fork; the SAME
// cells the attacker seat's, the riders' and the sibling tolls'
// wires already hold; the empty book rides the lawful zero - the
// face 363 the field's own precedent). No two-back face given ->
// no read (the carrier's own null pass).
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
 *   { back: {enderman}, prev: {enderman}, cur: {enderman} }
 * @returns {boolean}
 */
export function endermanTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.enderman) && s.enderman >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the enderman toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {enderman}, prev: {enderman}, cur: {enderman} }
 * @returns {string|null} the row byte, or null
 */
export function endermanTollTrendRow (e) {
  if (!endermanTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.enderman - back.enderman
  const second = cur.enderman - prev.enderman
  const arc = `${back.enderman} -> ${prev.enderman} (${first >= 0 ? '+' : ''}${first}) -> ${cur.enderman} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the seat\'s word names the mob book\'s own killer, the riders\' word prices the crowd\'s own concentration, the witch toll\'s own word prices the fifth class toll\'s own mass - a different book, the killer is not the death - this word prices the enderman toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the enderman toll's own trend (v0.976.113): the enderman toll's rise ran two steps deep - ${arc} - the enderman toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the enderman toll's own trend (v0.976.113): the enderman toll's fall ran two steps deep - ${arc} - the enderman toll's own fade ${tail}`
  }
  return `the enderman toll's own trend (v0.976.113): the enderman toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
