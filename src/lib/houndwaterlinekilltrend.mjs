// (v0.976.87) THE WATERLINE KILL'S OWN TREND - the hound census's own
// waterline venue book's trend seat: the waterline kills - the
// hound's own victories dealt at the water's own edge (the
// drowned-kill context lines' waterline venue cell, the v0.262.0
// arena split, the SAME cell the episode detail line already holds:
// "waterline N") - their magnitude shape across three faces.
//
// The field priced every branch by hand SIXTEEN faces deep before
// the word existed (the waterline kill's own count face by face, the
// census's own arithmetic: 347 rode 0, 348 rode 0, 349 rode 0,
// 350 rode 0, 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 0,
// 355 rode 0, 356 rode 0, 357 rode 1, 358 rode 1, 359 rode 0,
// 360 rode 0, 361 rode 0, 362 rode 0 - the FACE 349..356 chains the
// clean trios and the helds, the FACE 357 chain the held first step
// 0 -> 0 -> 1 (the arrival rode unnamed - the re-verdict's own FACE
// 350 precedent), the FACE 358 chain the held second step 0 -> 1 -> 1,
// the FACE 359 chain the held second step 1 -> 1 -> 0, the FACE 360
// chain the held first step 1 -> 0 -> 0, and the FACE 361/362 chains
// the clean trios - ALL THIRTEEN CHAINS THE FIELD HAS HELD RODE THE
// HONEST SILENCE - THE WORD BORN WHOLE AND SILENT (the family's own
// first silent birth: sixteen faces one kill, every chain the field
// has ever held spoke nothing; the seat ships whole because the
// waterline's own storm has not come yet - the dry-shore kill's own
// precedent v0.976.85 read the same field before its own FACE 360
// twelve-kill storm arrived: the dry-shore kills return in storms or
// not at all, and the waterline's own storms are rarer still; the
// law prices what rode, the seat waits for what will).
//
// The seat law: the kill's own word (v0.976.76) prices the hound's
// own kill mass ACROSS the walks, the arena's own word (v0.791.0)
// prices WHICH venue owns the kill book WITHIN one face, the water
// kill's own word (v0.976.84) prices the in-water class's own count
// ACROSS the walks, the dry-shore kill's own word (v0.976.85) prices
// the dry-shore class's own count ACROSS the walks, this word prices
// the WATERLINE class's own count ACROSS the walks - different
// books, the cells never merge (the venues' own masses are their own
// books, never the sum's skin; the trilogy closes whole - the wet
// arena, the dry shore, the water's own edge, each its own word
// never the sum). The branch law: ONE SHAPE ONE WORD - rise then
// rise prices the waterline kill's own swell, fall then fall prices
// the waterline kill's own fade, a traded direction prices the
// waterline kill's own swing, a held step (any count-to-count zero)
// prices the honest silence (a held lane is no direction - the bars
// never invent; the watertrend family's own held law). The
// byte-pin: the trend row never speaks the shape's own verdict words
// (no return, no repeat, no stay, no run) nor the seats' own verdict
// word (no owns) nor the dynasty's own (no dynasty, no turn) -
// co-existence by seat never by duplication; the seat-law tail names
// the neighbor seats (the re-verdict's word, the verdict flip's
// word, the flee hop's word, the win's word, the kill's word, the
// presence's word, the wet flee's word, the fight's word, the dry
// flee's word, the shelter's word, the other's word, the water
// kill's word, the dry-shore kill's word) - the names ride by law,
// the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the other exit's own v0.976.86). The fold receives the
// census's own killsWaterline per face (houndCensus owns the
// waterline venue count - one-parser law: the same census runs over
// each face's own lines, never a fork; the SAME cell the episode
// detail line already holds: "waterline N"). No two-back face given
// -> no read (the carrier's own null pass).
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
 *   { back: {waterline}, prev: {waterline}, cur: {waterline} }
 * @returns {boolean}
 */
export function houndWaterlineKillTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.waterline) && s.waterline >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the waterline kill's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {waterline}, prev: {waterline}, cur: {waterline} }
 * @returns {string|null} the row byte, or null
 */
export function houndWaterlineKillTrendRow (e) {
  if (!houndWaterlineKillTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.waterline - back.waterline
  const second = cur.waterline - prev.waterline
  const arc = `${back.waterline} -> ${prev.waterline} (${first >= 0 ? '+' : ''}${first}) -> ${cur.waterline} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the wet retreats\' own mass, the fight\'s word prices the courage\'s own mass, the dry flee\'s word prices the dry retreats\' own mass, the shelter\'s word prices the seal answers\' own mass, the other\'s word prices the wake\'s own remainder, the water kill\'s word prices the water venue\'s own mass, the dry-shore kill\'s word prices the dry-shore venue\'s own mass - the arena\'s word prices which venue the kill book holds within one face, this word prices the waterline venue\'s own count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the waterline kill's own trend (v0.976.87): the waterline kill's rise ran two steps deep - ${arc} - the waterline kill's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the waterline kill's own trend (v0.976.87): the waterline kill's fall ran two steps deep - ${arc} - the waterline kill's own fade ${tail}`
  }
  return `the waterline kill's own trend (v0.976.87): the waterline kill's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
