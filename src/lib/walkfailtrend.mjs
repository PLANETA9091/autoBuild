// (v0.976.97) THE WALK-FAIL'S OWN TREND - the starvation's own walk
// lane's trend seat: the walk fails - the A* starvation's walk leg
// ('F6 fuel commons: chest walk failed after the nudge (No path to
// the goal!)' and its decide-tax skin 'Took to long to decide path
// to goal!') - their magnitude shape across three faces. The mass:
// the ledger's own walkFail count (one-parser law; the SAME cell the
// grand total's walk leg holds: the commons ledger's own walk-fail
// lens, the byte rides whether or not the sweeps printed).
//
// The field priced every branch by hand TWENTY-ONE faces deep before
// the word existed (the walk-fail's own count face by face, the
// ledger's own arithmetic: 348 rode 19, 349 rode 19, 350 rode 16,
// 351 rode 26, 352 rode 13, 353 rode 4, 354 rode 24, 355 rode 34,
// 356 rode 20, 357 rode 14, 358 rode 5, 359 rode 7, 360 rode 30,
// 361 rode 18, 362 rode 15, 363 rode 20, 364 rode 22, 365 rode 14,
// 366 rode 13, 367 rode 10, 368 rode 25 - the count never left the
// field's own range, the lane breathes every face) - THE WORD BORN
// SPEAKING EIGHTEEN CHAINS DEEP, ONE HONEST SILENCE BESIDE - the
// FACE 355 CHAIN THE SWELL 4 -> 24 (+20) -> 34 (+10) the lane's own
// build, the FACE 360 CHAIN THE SWELL 5 -> 7 (+2) -> 30 (+23) the
// storm's own build, the FACE 364 CHAIN THE SWELL 15 -> 20 (+5) ->
// 22 (+2) the quiet build, the FACE 353 CHAIN THE FADE 26 -> 13
// (-13) -> 4 (-9) the lane's own drain, the FACE 357 CHAIN THE FADE
// 34 -> 20 (-14) -> 14 (-6) and the FACE 358 CHAIN THE FADE 20 ->
// 14 (-6) -> 5 (-9) - THE LANE'S OWN FOUR-STEP RECESSION ACROSS THE
// TWO WINDOWS (34 -> 20 -> 14 -> 5, the only four-face slide the
// priced field holds), the FACE 362 CHAIN THE FADE 30 -> 18 (-12) ->
// 15 (-3), the FACE 366 CHAIN THE FADE 22 -> 14 (-8) -> 13 (-1) and
// the FACE 367 CHAIN THE FADE 14 -> 13 (-1) -> 10 (-3) the second
// two-window slide, and the nine swings the lane's own trades (the
// FACE 368 CHAIN THE SWING 13 -> 10 (-3) -> 25 (+15) the lane's own
// return) - the FACE 350 chain the held first step 19 -> 19 (0) ->
// 16 (-3) the honest silence (the held range is no direction - the
// bars never invent; the watertrend family's own held law) - THE
// FAMILY'S OWN FULL-SPECTRUM BIRTH (the budget's own v0.976.93 the
// precedent: every branch the word prices the field has ridden -
// three swells + six fades + nine swings beside the one held chain).
//
// The seat law: the starvation's own grand total (v0.975.5) prices
// the three lanes' own SUM (hop + walk-fail + bank decide), the
// grand total's own mix (v0.975.7) prices WHICH lane owns the
// majority WITHIN one face, the lane seat's own word (v0.933.0)
// prices WHICH lane's own decide-timeouts own the sky WITHIN one
// face, this word prices the WALK-FAIL'S OWN MASS ACROSS the faces -
// the walk lane's own book (the hop's own lane never joins - a
// different lane, a different book; the bank decide's own lane never
// joins either - the cells never merge). The branch law: ONE SHAPE
// ONE WORD - rise then rise prices the walk-fail's own swell, fall
// then fall prices the walk-fail's own fade, a traded direction
// prices the walk-fail's own swing, a held step (any count-to-count
// zero) prices the honest silence (a held lane is no direction - the
// bars never invent). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the seats' own verdict word (no owns) nor the dynasty's own
// (no dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats (the grand total's own
// seat, the lane seat's own word, the grand total's own mix, the
// commons book's own trend words) - the names ride by law, the
// neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the no chest's own v0.976.96). The fold receives the
// ledger's own walkFail per face (commonsLedger owns the walkFail
// count - one-parser law: the same ledger runs over each face's own
// lines, never a fork; the SAME cell the grand total's walk leg
// holds). No two-back face given -> no read (the carrier's own null
// pass); the walk-fail's own zero is no fence - a zero-walk-fail
// face rides a lawful count (the smelt lane's own zero precedent
// v0.976.90).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * walk-fail's own zero rides a lawful count).
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {walkFail}, prev: {walkFail}, cur: {walkFail} }
 * @returns {boolean}
 */
export function walkFailTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.walkFail) && s.walkFail >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the walk-fail's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {walkFail}, prev: {walkFail}, cur: {walkFail} }
 * @returns {string|null} the row byte, or null
 */
export function walkFailTrendRow (e) {
  if (!walkFailTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.walkFail - back.walkFail
  const second = cur.walkFail - prev.walkFail
  const arc = `${back.walkFail} -> ${prev.walkFail} (${first >= 0 ? '+' : ''}${first}) -> ${cur.walkFail} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the grand total's own seat prices the three lanes' own sum, the lane seat's own word prices which lane's own decide-timeouts own the sky within one face, the grand total's own mix prices the majority's own lane within one face, the hop's own lane never joins - a different lane, a different book, the bank decide's own lane never joins either - the cells never merge, this word prices the walk-fail's own mass across the faces, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the walk-fail's own trend (v0.976.97): the walk-fail's rise ran two steps deep - ${arc} - the walk-fail's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the walk-fail's own trend (v0.976.97): the walk-fail's fall ran two steps deep - ${arc} - the walk-fail's own fade ${tail}`
  }
  return `the walk-fail's own trend (v0.976.97): the walk-fail's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
