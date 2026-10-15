// (v0.976.85) THE DRY-SHORE KILL'S OWN TREND - the hound census's own
// dry-shore venue book's trend seat: the dry-shore kills - the
// hound's own victories dealt ashore (the drowned-kill context
// lines' dry-shore venue cell, the v0.262.0 arena split, the SAME
// cell the episode detail line already holds: "dry-shore N") - their
// magnitude shape across three faces.
//
// The field priced every branch by hand fourteen faces deep before
// the word existed (the dry-shore kill's own count face by face, the
// census's own arithmetic: 347 rode 0, 348 rode 0, 349 rode 0,
// 350 rode 6, 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 0,
// 355 rode 0, 356 rode 0, 357 rode 8, 358 rode 0, 359 rode 1,
// 360 rode 12 - the FACE 349 chain the clean trio 0 -> 0 -> 0, the
// FACE 350 chain the held first step 0 -> 0 -> 6 (the arrival rode
// unnamed - the re-verdict's own FACE 350 precedent), THE FACE 351
// CHAIN THE WORD'S OWN BIRTH RIDE the swing 0 -> 6 (+6) -> 0 (-6),
// the FACE 352 chain the held second step 6 -> 0 -> 0 (the storm's
// own exit - the win's own FACE 353 precedent), the FACE 353/354/
// 355/356 chains the clean trios, the FACE 357 chain the held first
// step 0 -> 0 -> 8 (the arrival rode unnamed again), the FACE 358
// chain the swing 0 -> 8 (+8) -> 0 (-8), the FACE 359 chain the
// swing 8 -> 0 (-8) -> 1 (+1), and THE FACE 360 CHAIN THE SWELL'S
// OWN RIDE 0 -> 1 (+1) -> 12 (+11) - THE FLEET'S OWN DRY-SHORE
// STORM twelve bots one kill each the word's own swell greeted -
// THE WORD BORN SPEAKING FOUR CHAINS DEEP (three swings + the
// swell, the other's own four-chain birth v0.976.83 and the fight's
// own swell birth v0.976.80 the precedents beside it); the fade
// never rode the fourteen priced faces - the dry-shore kills return
// in storms or not at all).
//
// The seat law: the kill's own word (v0.976.76) prices the hound's
// own kill mass ACROSS the walks, the arena's own word (v0.791.0)
// prices WHICH venue owns the kill book WITHIN one face, the water
// kill's own word (v0.976.84) prices the in-water class's own count
// ACROSS the walks, this word prices the DRY-SHORE class's own
// count ACROSS the walks - different books, the cells never merge
// (the venues' own masses are their own books, never the sum's
// skin; the waterline's own count never joins - its own trend seat
// the next fires price). The branch law: ONE SHAPE ONE WORD - rise
// then rise prices the dry-shore kill's own swell, fall then fall
// prices the dry-shore kill's own fade, a traded direction prices
// the dry-shore kill's own swing, a held step (any count-to-count
// zero) prices the honest silence (a held lane is no direction -
// the bars never invent; the watertrend family's own held law).
// The byte-pin: the trend row never speaks the shape's own verdict
// words (no return, no repeat, no stay, no run) nor the seats' own
// verdict word (no owns) nor the dynasty's own (no dynasty, no
// turn) - co-existence by seat never by duplication; the seat-law
// tail names the neighbor seats (the re-verdict's word, the verdict
// flip's word, the flee hop's word, the win's word, the kill's
// word, the presence's word, the wet flee's word, the fight's word,
// the dry flee's word, the shelter's word, the other's word, the
// water kill's word) - the names ride by law, the neighbor verdicts
// never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the water kill's own v0.976.84). The fold receives the
// census's own killsDryShore per face (houndCensus owns the
// dry-shore venue count - one-parser law: the same census runs over
// each face's own lines, never a fork; the SAME cell the episode
// detail line already holds: "dry-shore N"). No two-back face given
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
 *   { back: {dryShore}, prev: {dryShore}, cur: {dryShore} }
 * @returns {boolean}
 */
export function houndDryShoreKillTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.dryShore) && s.dryShore >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the dry-shore kill's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {dryShore}, prev: {dryShore}, cur: {dryShore} }
 * @returns {string|null} the row byte, or null
 */
export function houndDryShoreKillTrendRow (e) {
  if (!houndDryShoreKillTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.dryShore - back.dryShore
  const second = cur.dryShore - prev.dryShore
  const arc = `${back.dryShore} -> ${prev.dryShore} (${first >= 0 ? '+' : ''}${first}) -> ${cur.dryShore} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the wet retreats\' own mass, the fight\'s word prices the courage\'s own mass, the dry flee\'s word prices the dry retreats\' own mass, the shelter\'s word prices the seal answers\' own mass, the other\'s word prices the wake\'s own remainder, the water kill\'s word prices the water venue\'s own mass - the arena\'s word prices which venue the kill book holds within one face, this word prices the dry-shore venue\'s own count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the dry-shore kill's own trend (v0.976.85): the dry-shore kill's rise ran two steps deep - ${arc} - the dry-shore kill's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the dry-shore kill's own trend (v0.976.85): the dry-shore kill's fall ran two steps deep - ${arc} - the dry-shore kill's own fade ${tail}`
  }
  return `the dry-shore kill's own trend (v0.976.85): the dry-shore kill's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
