// (v0.976.109) THE SHORE-NO-CELL'S OWN TREND - the hound census's own
// presence book's last class seat: the shore-no-cell answers - the
// cornered wet flees that bore the nearest shore without a verified
// cell (the aquatic flee's own corner, the SAME cell the presence
// fold already buckets and the presence line already holds:
// "shore-no-cell N") - their magnitude shape across three faces.
//
// The field priced every branch by hand THIRTY faces deep before the
// word existed (the shore-no-cell's own count face by face, the
// census's own arithmetic: 347 rode 0, 348 rode 0, 349 rode 0,
// 350 rode 0, 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 0,
// 355 rode 0, 356 rode 0, 357 rode 0, 358 rode 0, 359 rode 0,
// 360 rode 0, 361 rode 0, 362 rode 0, 363 rode 0, 364 rode 0,
// 365 rode 0, 366 rode 0, 367 rode 0, 368 rode 0, 369 rode 0,
// 370 rode 0, 371 rode 0, 372 rode 0, 373 rode 0, 374 rode 0,
// 375 rode 0, 376 rode 0) - EVERY CHAIN THE FIELD HAS EVER HELD RODE
// THE HONEST SILENCE - THE WORD BORN WHOLE AND SILENT (the family's
// own SECOND silent birth beside the waterline kill's own v0.976.87:
// thirty faces zero cornered flees, the shore cell always verified
// when the flee-shore lane asked - the wet flee's own v0.976.79 read
// the same field's answered side: the lane's own corner never came;
// the law prices what rode, the seat waits for what will). The
// field's own audit rode beside the pricing: the sibling classes'
// own bytes byte-checked against their words' own price lists (the
// other's own twelve faces, the shelter's own twelve - both lists
// byte-exact), the presence line cross-footed face by face (the six
// classes' own sum the presence's own word prices), and the live
// faces 359/375/376 byte-checked against the worklogs' own reads.
//
// The seat law: the presence's own word (v0.976.77) prices the six
// answer classes' own SUM across the walks, the answer's own word
// (v0.925.0) prices WHICH class owns the presence book WITHIN one
// face, the wet flee's own word (v0.976.79) prices the shore class's
// own count ACROSS the walks, the fight's own word (v0.976.80)
// prices the courage class's own count ACROSS them, the dry flee's
// own word (v0.976.81) prices the DRY class's own count ACROSS them,
// the shelter's own word (v0.976.82) prices the seal class's own
// count ACROSS them, the other's own word (v0.976.83) prices the
// residual class's own count ACROSS them, this word prices the
// SHORE-NO-CELL class's own count ACROSS the walks - the presence
// book's own six classes each their own word, the book's own class
// family closes whole (different books, the cells never merge; the
// venues' own trilogy the kill book's own side holds apart). The
// branch law: ONE SHAPE ONE WORD - rise then rise prices the
// shore-no-cell's own swell, fall then fall prices the
// shore-no-cell's own fade, a traded direction prices the
// shore-no-cell's own swing, a held step (any count-to-count zero)
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
// kill's word, the dry-shore kill's word, the waterline kill's
// word) - the names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the completions' own v0.976.107). The fold receives the
// census's own shoreNoCell per face (houndCensus owns the
// shore-no-cell count - one-parser law: the same census runs over
// each face's own lines, never a fork; the SAME cell the presence
// line already holds: "shore-no-cell N"). No two-back face given ->
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
 *   { back: {shoreNoCell}, prev: {shoreNoCell}, cur: {shoreNoCell} }
 * @returns {boolean}
 */
export function houndShoreNoCellTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.shoreNoCell) && s.shoreNoCell >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the shore-no-cell's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {shoreNoCell}, prev: {shoreNoCell}, cur: {shoreNoCell} }
 * @returns {string|null} the row byte, or null
 */
export function houndShoreNoCellTrendRow (e) {
  if (!houndShoreNoCellTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.shoreNoCell - back.shoreNoCell
  const second = cur.shoreNoCell - prev.shoreNoCell
  const arc = `${back.shoreNoCell} -> ${prev.shoreNoCell} (${first >= 0 ? '+' : ''}${first}) -> ${cur.shoreNoCell} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum, the wet flee\'s word prices the wet retreats\' own mass, the fight\'s word prices the courage\'s own mass, the dry flee\'s word prices the dry retreats\' own mass, the shelter\'s word prices the seal answers\' own mass, the other\'s word prices the wake\'s own remainder, the water kill\'s word prices the water venue\'s own mass, the dry-shore kill\'s word prices the dry-shore venue\'s own mass, the waterline kill\'s word prices the waterline venue\'s own mass - the answer\'s word prices which class the presence book holds within one face, this word prices the shore-no-cell class\'s own count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the shore-no-cell's own trend (v0.976.109): the shore-no-cell's rise ran two steps deep - ${arc} - the shore-no-cell's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the shore-no-cell's own trend (v0.976.109): the shore-no-cell's fall ran two steps deep - ${arc} - the shore-no-cell's own fade ${tail}`
  }
  return `the shore-no-cell's own trend (v0.976.109): the shore-no-cell's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
