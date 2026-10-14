// (v0.976.72) THE WITCH TOLL'S OWN TREND - the server-named killer
// Witch's own magnitude shape across three faces, the mob book's
// FIFTH class-toll word - the class-toll seat beside the zombie
// toll's own (v0.976.64), the skeleton toll's own (v0.976.66), the
// drowned toll's own (v0.976.67) and the spider toll's own
// (v0.976.68). The field priced every branch by hand seventeen faces
// deep before the word existed (the witch toll's own count - the
// census's own byAttacker.Witch, the swamp's own levy the night
// brews - face by face, the caches' own arithmetic: 334 rode 1, 335
// rode 0, 336 rode 0, 337 rode 0, 338 rode 0, 339 rode 0, 340 rode
// 0, 341 rode 0, 342 rode 0, 343 rode 0, 344 rode 0, 345 rode 0, 346
// rode 0, 347 rode 0, 348 rode 0, 349 rode 0, 350 rode 0 - sixteen
// chains ride the arithmetic and THE WORD BORN ON A SINGLE LONE RIDE
// the chains never price: every chain through the one non-zero face
// rides the held step (1 -> 0 -> 0 on the FACE 336 chain the lone
// ride draining unnamed behind a held second step), every other
// chain the clean silence 0 -> 0 -> 0 - the swell never rode, the
// fade never rode, the swing never rode the sixteen chains the
// census priced - the arrows come when the swamp's own levy returns,
// the law prices them, the bars never invent them; the zombie
// toll's own first-fold precedent the word's own birthright).
//
// The seat law: the attacker seat's own word (v0.788.0) prices WHICH
// server-named killer owns the mob book under the strict-majority
// law; the riders' word prices the top killers' own concentration;
// and the CLASS TOLLS - each ONE FIXED killer's own count riding
// whether it owns the seat or not - rode unnamed (the WITCH TOLL the
// fifth - a name can hold while the toll moves, the toll can climb
// while the seat turns over: different books, and one killer's book
// is never another killer's). The branch law: ONE SHAPE ONE WORD -
// rise then rise prices the witch toll's own swell, fall then fall
// prices the witch toll's own fade, a traded direction prices the
// witch toll's own swing, a held step (any count-to-count zero)
// prices the honest silence (a held lane is no direction - the bars
// never invent; the watertrend family's own held law). The
// byte-pin: the trend row never speaks the shape's own verdict words
// (no return, no repeat, no stay, no run) nor the seat's own verdict
// words (no owns, no dynasty, no turn) - co-existence by seat never
// by duplication; the seat-law tail names the neighbor seats (the
// attacker seat's word, the riders' word) - the names ride by law,
// the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the spider toll's own v0.976.68). The fold
// receives the census's own byAttacker.Witch per face
// (deathKindCensus owns the buckets - one-parser law: the same
// census runs over each face's own lines, never a fork; the SAME
// cells the attacker seat's, the riders' and the sibling tolls'
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
 *   { back: {witch}, prev: {witch}, cur: {witch} }
 * @returns {boolean}
 */
export function witchTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.witch) && s.witch >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the witch toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {witch}, prev: {witch}, cur: {witch} }
 * @returns {string|null} the row byte, or null
 */
export function witchTollTrendRow (e) {
  if (!witchTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.witch - back.witch
  const second = cur.witch - prev.witch
  const arc = `${back.witch} -> ${prev.witch} (${first >= 0 ? '+' : ''}${first}) -> ${cur.witch} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the seat\'s word names the mob book\'s own killer, the riders\' word prices the crowd\'s own concentration, the spider toll\'s own word prices the eight-legged killer\'s own mass - a different book, the killer is not the death - this word prices the witch toll\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the witch toll's own trend (v0.976.72): the witch toll's rise ran two steps deep - ${arc} - the witch toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the witch toll's own trend (v0.976.72): the witch toll's fall ran two steps deep - ${arc} - the witch toll's own fade ${tail}`
  }
  return `the witch toll's own trend (v0.976.72): the witch toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
