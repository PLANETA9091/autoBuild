// (v0.976.111) THE CREEPER TOLL'S OWN TREND - the death census's own
// explosion book's first kinded class-toll word: the server-named
// killer Creeper's own magnitude shape across three faces - the
// census's own byAttackerByKind.explosion.Creeper count (the
// kinded attacker tally's own cell, the v0.974.12 grammar the FACE
// 273 creeper x4 built: the mob book's own byAttacker cell stays
// byte-true for the mob family, this cell the grammar's own group
// every kind that carries the ' by ' tail tallied under its own
// kind byte - the creeper's grammar home is the explosion book, the
// kind the creeper's own blast rides).
//
// The field priced every branch by hand FORTY-FOUR faces deep before
// the word existed (the creeper toll's own count face by face, the
// census's own arithmetic: 334 rode 1, 335 rode 0, 336 rode 0,
// 337 rode 1, 338 rode 0, 339 rode 0, 340 rode 0, 341 rode 0,
// 342 rode 2, 343 rode 0, 344 rode 1, 345 rode 0, 346 rode 0,
// 347 rode 0, 348 rode 1, 349 rode 0, 350 rode 1, 351 rode 0,
// 352 rode 2, 353 rode 0, 354 rode 1, 355 rode 0, 356 rode 0,
// 357 rode 0, 358 rode 0, 359 rode 0, 360 rode 0, 361 rode 0,
// 362 rode 0, 363 rode 0, 364 rode 0, 365 rode 1, 366 rode 0,
// 367 rode 2, 368 rode 2, 369 rode 1, 370 rode 0, 371 rode 0,
// 372 rode 0, 373 rode 0, 374 rode 0, 375 rode 4, 376 rode 0,
// 377 rode 1 - the FACE 377 byte the read's own cross-check
// byte-exact, the FACE 375 storm the field's own top the four-kill
// face the storm's own levy, the face 363 the zero-death face the
// empty book rides the lawful zero) - THE WORD BORN SPEAKING
// SIXTEEN CHAINS DEEP (fifteen swings + one fade) with TWENTY-SIX
// honest silences beside - THE SWELL NEVER RODE the forty-two
// windows the census priced (the creeper's own tolls trade every
// walk: the blast strikes one face and the next face pays it back,
// the build the swell prices never came - the zombie toll's own
// fade the family's own never-rode precedent v0.976.64, the
// drowned toll's own fade the once-rode mirror v0.976.67). THE
// FACE 370 CHAIN THE WORD'S OWN FADE 2 -> 1 (-1) -> 0 (-1) - the
// drowned toll's own fade arc the field's own echo; THE FACE 376
// CHAIN THE SWING THE STORM'S OWN EXIT 0 -> 4 (+4) -> 0 (-4); THE
// FACE 377 CHAIN THE WORD'S OWN LIVE WINDOW 4 -> 0 (-4) -> 1 (+1)
// - the word born speaking on its own first dispatched face's
// window (the shelter's own v0.976.82 precedent the proof's own
// spoke). The field's own audit rode beside the pricing: the
// sibling bytes byte-checked against the worklogs' own reads (the
// FACE 375 creeper x4 the storm the fire-2242 read named, the
// FACE 376 the explosion-free face the read named, the dynasty
// chain's mob bytes 13/9/2 the FACES 357/358/359, the siege
// chain's totals 3/1/6 the FACES 372/373/374 - all byte-exact).
//
// The seat law: the explosion toll's own word (v0.976.65) prices
// the explosion kind's own mass ACROSS the walks, the mob book's
// own class tolls price their own killers' own counts ACROSS them
// (the zombie toll's own v0.976.64, the skeleton toll's own
// v0.976.66, the drowned toll's own v0.976.67, the spider toll's
// own v0.976.68, the witch toll's own v0.976.72), the kind's word
// (v0.976.39) prices the head's own identity, the siege's word
// (v0.976.44) prices the book's own total, the attacker seat's
// word (v0.788.0) prices WHICH killer owns the MOB book WITHIN one
// face - this word prices the EXPLOSION book's own Creeper class
// ACROSS the walks (a different book, the killer is not the death;
// the blast's own levy is the creeper's own count riding whether
// the explosion toll's own mass moves or not). The branch law: ONE
// SHAPE ONE WORD - rise then rise prices the creeper toll's own
// swell, fall then fall prices the creeper toll's own fade, a
// traded direction prices the creeper toll's own swing, a held
// step (any count-to-count zero) prices the honest silence (a held
// lane is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the seats' own verdict words (no owns, no dynasty, no
// turn) - co-existence by seat never by duplication; the seat-law
// tail names the neighbor seats - the names ride by law, the
// neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first - the grounddeep's own precedent
// v0.976.26 through the witch toll's own v0.976.72). The fold
// receives the census's own byAttackerByKind.explosion.Creeper per
// face (deathKindCensus owns the buckets - one-parser law: the
// same census runs over each face's own lines, never a fork; the
// SAME cells the kindecho's own tally and the explosion toll's own
// wire already hold; the empty book rides the lawful zero - the
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
 *   { back: {creeper}, prev: {creeper}, cur: {creeper} }
 * @returns {boolean}
 */
export function creeperTollTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.creeper) && s.creeper >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the creeper toll's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {creeper}, prev: {creeper}, cur: {creeper} }
 * @returns {string|null} the row byte, or null
 */
export function creeperTollTrendRow (e) {
  if (!creeperTollTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.creeper - back.creeper
  const second = cur.creeper - prev.creeper
  const arc = `${back.creeper} -> ${prev.creeper} (${first >= 0 ? '+' : ''}${first}) -> ${cur.creeper} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the explosion toll\'s own word prices the explosion kind\'s own mass across the walks, the zombie toll\'s, the skeleton toll\'s, the drowned toll\'s, the spider toll\'s and the witch toll\'s own words price the mob book\'s own class tolls across them, the kind\'s word prices the head\'s own identity, the siege\'s word prices the book\'s own total - a different book, the killer is not the death - this word prices the explosion book\'s own Creeper class across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the creeper toll's own trend (v0.976.111): the creeper toll's rise ran two steps deep - ${arc} - the creeper toll's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the creeper toll's own trend (v0.976.111): the creeper toll's fall ran two steps deep - ${arc} - the creeper toll's own fade ${tail}`
  }
  return `the creeper toll's own trend (v0.976.111): the creeper toll's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
