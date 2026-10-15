// (v0.976.84) THE IN-WATER KILL'S OWN TREND - the hound census's own
// water arena book's trend seat: the in-water kills - the hound's own
// wet victories beside the drowned's own waters - their magnitude
// shape across three faces. The mass: the census's own killsInWater
// count - the anchored kill lines the census buckets as the water
// arena's own class (the KILL_IN_WATER_RE anatomy, the v0.262.0 arena
// split, the SAME cell the presence fold already buckets and the
// episode detail line already holds: "in-water N").
//
// The field priced every branch by hand fourteen faces deep before
// the word existed (the in-water kill's own count face by face, the
// census's own arithmetic: 347 rode 0, 348 rode 1, 349 rode 0,
// 350 rode 4, 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 2,
// 355 rode 0, 356 rode 0, 357 rode 1, 358 rode 5, 359 rode 1,
// 360 rode 0 - the FACE 349 chain the swing 0 -> 1 (+1) -> 0 (-1),
// the FACE 350 chain the swing 1 -> 0 (-1) -> 4 (+4), the FACE 351
// chain the swing 0 -> 4 (+4) -> 0 (-4) - THE WORD BORN SPEAKING
// THREE SWINGS DEEP, the kill's own three-swing birth the precedent
// beside it (v0.976.76), the FACE 352 chain the held second step
// 4 -> 0 -> 0 (the storm's own exit - the win's own FACE 353
// precedent), the FACE 353 chain the clean trio, the FACE 354 chain
// the held first step 0 -> 0 -> 2 (the arrival rode unnamed - the
// re-verdict's own FACE 350 precedent), the FACE 355 chain the swing
// 0 -> 2 (+2) -> 0 (-2), the FACE 356 chain the held second step
// 2 -> 0 -> 0, the FACE 357 chain the held first step 0 -> 0 -> 1,
// THE FACE 358 CHAIN THE WATER ARENA'S OWN SWELL 0 -> 1 (+1) -> 5
// (+4) - the wet victories built two steps deep, the FACE 359 chain
// the swing 1 -> 5 (+4) -> 1 (-4), and THE FACE 360 CHAIN THE WATER
// ARENA'S OWN FADE 5 -> 1 (-4) -> 0 (-1) - the wet arena's own
// relief the dry-shore's own twelve-kill storm rode beside - SEVEN
// BIRTH CHAINS, EVERY BRANCH THE LAW PRICES RODE THE FOURTEEN PRICED
// FACES (the swell, the swing, the fade - the fullest branch
// coverage beside the other's own eight-chain birth v0.976.83)). The
// bars never invent the shapes the field keeps, the law prices the
// branches, the field holds the silence.
//
// The seat law: the kill's own word (v0.976.76) prices the kill
// SUM across the walks, the prey's own word (v0.926.0) prices WHICH
// bot owns the kill book WITHIN one face, the arena's own word
// (v0.791.0) prices WHICH arena owns the kill book WITHIN one face,
// this word prices the WATER ARENA class's own count ACROSS the
// walks - different books, the cells never merge (the wet victories
// and the dry victories never share a word; the sum's own arithmetic
// never rides one arena). The
// branch law: ONE SHAPE ONE WORD - rise then rise prices the
// in-water kill's own swell, fall then fall prices the in-water
// kill's own fade, a traded direction prices the in-water kill's own
// swing, a held step (any count-to-count zero) prices the honest
// silence (a held lane is no direction - the bars never invent; the
// watertrend family's own held law). The byte-pin: the trend row
// never speaks the shape's own verdict words (no return, no repeat,
// no stay, no run) nor the seats' own verdict word (no owns) nor the
// dynasty's own (no dynasty, no turn) - co-existence by seat never
// by duplication; the seat-law tail names the neighbor seats (the
// re-verdict's word, the verdict flip's word, the flee hop's word,
// the win's word, the kill's word, the prey's word, the arena's
// word, the presence's word, the wet flee's word, the fight's word,
// the dry flee's word, the shelter's word, the other's word) - the
// names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the other's own v0.976.83). The fold receives the
// census's own killsInWater per face (houndCensus owns the water
// arena count - one-parser law: the same census runs over each
// face's own lines, never a fork; the SAME cell the episode detail
// line already holds: "in-water N"). No two-back face given -> no
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
 *   { back: {inWater}, prev: {inWater}, cur: {inWater} }
 * @returns {boolean}
 */
export function houndInWaterTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.inWater) && s.inWater >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the in-water kill's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {inWater}, prev: {inWater}, cur: {inWater} }
 * @returns {string|null} the row byte, or null
 */
export function houndInWaterTrendRow (e) {
  if (!houndInWaterTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.inWater - back.inWater
  const second = cur.inWater - prev.inWater
  const arc = `${back.inWater} -> ${prev.inWater} (${first >= 0 ? '+' : ''}${first}) -> ${cur.inWater} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own kill mass across the walks, the prey\'s word prices which bot the kill book holds within one face, the arena\'s word prices which arena the kill book holds within one face, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the wet retreats\' own mass, the fight\'s word prices the courage\'s own mass, the dry flee\'s word prices the dry retreats\' own mass, the shelter\'s word prices the seal answers\' own mass, the other\'s word prices the residual class\'s own mass - this word prices the in-water arena\'s own class count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the in-water kill's own trend (v0.976.84): the in-water kill's rise ran two steps deep - ${arc} - the in-water kill's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the in-water kill's own trend (v0.976.84): the in-water kill's fall ran two steps deep - ${arc} - the in-water kill's own fade ${tail}`
  }
  return `the in-water kill's own trend (v0.976.84): the in-water kill's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
