// (v0.976.86) THE OTHER EXIT'S OWN TREND - the hound census's own
// courage book's ending seat: the fight's other exits - the fights
// that ended the other way (the census's own fightEndsOther cell:
// the deadline releases, the verdict ignores, the threat-gone walks
// away - every fight end that never spoke "mob down", the same cell
// the hound episode line already holds: "other fight exits: N") -
// their magnitude shape across three faces.
//
// The field priced every branch by hand FIFTEEN faces deep before
// the word existed (the other exit's own count face by face, the
// census's own arithmetic: 347 rode 0, 348 rode 0, 349 rode 0,
// 350 rode 1, 351 rode 1, 352 rode 0, 353 rode 0, 354 rode 0,
// 355 rode 0, 356 rode 1, 357 rode 4, 358 rode 1, 359 rode 0,
// 360 rode 3, 361 rode 0 - the FACE 349 chain the clean trio, the
// FACE 350 chain the held first step 0 -> 0 -> 1 (the arrival rode
// unnamed - the re-verdict's own FACE 350 precedent), the FACE 351
// chain the held second step 0 -> 1 -> 1, the FACE 352 chain the
// held second step 1 -> 1 -> 0, the FACE 353 chain the held first
// step 1 -> 0 -> 0, the FACE 354/355 chains the clean trios, the
// FACE 356 chain the held first step 0 -> 0 -> 1 (the arrival rode
// unnamed again), THE FACE 357 CHAIN THE WORD'S OWN BIRTH RIDE the
// swell 0 -> 1 (+1) -> 4 (+3) - the other exits built two steps
// deep, the FACE 358 chain the swing 1 -> 4 (+3) -> 1 (-3), THE
// FACE 359 CHAIN THE FADE'S OWN RIDE 4 -> 1 (-3) -> 0 (-1) - the
// other exits' own relief the word was born to price, the FACE 360
// chain the swing 1 -> 0 (-1) -> 3 (+3) (the hound's own return),
// and THE FACE 361 chain the swing 0 -> 3 (+3) -> 0 (-3) (the
// quiet's own exit) - THE WORD BORN SPEAKING FIVE CHAINS DEEP
// (three swings + the swell + the fade, the water context's own
// five-chain birth v0.976.78 and the dry-shore kill's own four-chain
// birth v0.976.85 the precedents beside it) - EVERY BRANCH THE LAW
// PRICES RODE THE FIFTEEN PRICED FACES).
//
// The seat law: the fight's own word (v0.976.80) prices the
// courage's own opening mass ACROSS the walks (the stand-and-fight
// answers), this word prices the courage's own OTHER endings ACROSS
// the walks (the fights that opened and never won) - different
// books, the cells never merge (the openings and the endings are
// their own books, never the sum's skin; the victories' own count
// never joins - the win's own word v0.976.75 prices it). The branch
// law: ONE SHAPE ONE WORD - rise then rise prices the other exit's
// own swell, fall then fall prices the other exit's own fade, a
// traded direction prices the other exit's own swing, a held step
// (any count-to-count zero) prices the honest silence (a held lane
// is no direction - the bars never invent; the watertrend family's
// own held law). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the seats' own verdict word (no owns) nor the dynasty's own
// (no dynasty, no turn) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the
// re-verdict's word, the verdict flip's word, the flee hop's word,
// the win's word, the kill's word, the presence's word, the wet
// flee's word, the fight's word, the dry flee's word, the shelter's
// word, the other's word, the water kill's word, the dry-shore
// kill's word) - the names ride by law, the neighbor verdicts never
// ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the dry-shore kill's own v0.976.85). The fold receives
// the census's own fightEndsOther per face (houndCensus owns the
// other-exit count - one-parser law: the same census runs over each
// face's own lines, never a fork; the SAME cell the hound episode
// line already holds: "other fight exits: N"). No two-back face
// given -> no read (the carrier's own null pass).
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
 *   { back: {ends}, prev: {ends}, cur: {ends} }
 * @returns {boolean}
 */
export function houndFightEndOtherTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.ends) && s.ends >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the other exit's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {ends}, prev: {ends}, cur: {ends} }
 * @returns {string|null} the row byte, or null
 */
export function houndFightEndOtherTrendRow (e) {
  if (!houndFightEndOtherTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.ends - back.ends
  const second = cur.ends - prev.ends
  const arc = `${back.ends} -> ${prev.ends} (${first >= 0 ? '+' : ''}${first}) -> ${cur.ends} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the wet retreats\' own mass, the fight\'s word prices the courage\'s own mass, the dry flee\'s word prices the dry retreats\' own mass, the shelter\'s word prices the seal answers\' own mass, the other\'s word prices the wake\'s own remainder, the water kill\'s word prices the water venue\'s own mass, the dry-shore kill\'s word prices the dry-shore venue\'s own mass - the fight\'s word prices the courage\'s own openings across the walks, this word prices the courage\'s own other endings across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the other exit's own trend (v0.976.86): the fight's other exit's rise ran two steps deep - ${arc} - the fight's other exit's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the other exit's own trend (v0.976.86): the fight's other exit's fall ran two steps deep - ${arc} - the fight's other exit's own fade ${tail}`
  }
  return `the other exit's own trend (v0.976.86): the fight's other exit's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
