// (v0.976.79) THE WET FLEE'S OWN TREND - the hound census's own
// shore book's trend seat: the flee-shore answers - the wet flees,
// the hound's own water retreats vs the drowned - their magnitude
// shape across three faces. The mass: the census's own fleeShore
// count - the anchored combat lines the census buckets as the
// shore's own answer class (the FLEE_SHORE_RE anatomy, the SAME
// cell the episode detail line already holds: "flee-shore N").
//
// The field priced every branch by hand ten faces deep before the
// word existed (the shore's own count face by face, the census's
// own arithmetic: 347 rode 0, 348 rode 5, 349 rode 0, 350 rode 7,
// 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 6, 355 rode 0,
// 356 rode 0 - the FACE 349 chain the swing 0 -> 5 (+5) -> 0 (-5),
// the FACE 350 chain the swing 5 -> 0 (-5) -> 7 (+7), the FACE 351
// chain the swing 0 -> 7 (+7) -> 0 (-7), the FACE 352 chain the
// held exit 7 -> 0 -> 0, the FACE 353 chain the clean trio
// 0 -> 0 -> 0, the FACE 354 chain the held first step 0 -> 0 -> 6
// (the arrival rode unnamed - the re-verdict's own FACE 350
// precedent), the FACE 355 chain the swing 0 -> 6 (+6) -> 0 (-6),
// and the FACE 356 chain the held exit 6 -> 0 -> 0 - THE WORD BORN
// SPEAKING FOUR SWINGS DEEP, the loudest birth ride beside the
// water context's five-chain birth (v0.976.78) and the kill's own
// three-swing birth (v0.976.76)). The swell and the fade never rode
// the ten priced faces - the wet flee's own storms trade every
// walk (the shore's own answer arrives and exits the same span,
// the trade's own rhythm); the bars never invent the shapes the
// field keeps, the law prices the branches, the field holds the
// silence.
//
// The seat law: the presence's own word (v0.976.77) prices the six
// answer classes' own SUM across the walks, the answer's own word
// (v0.925.0) prices WHICH class owns the presence book WITHIN one
// face, this word prices ONE class's own count ACROSS the walks -
// different books, the cells never merge. fleeShorePlain never
// joins (the legacy-plain subset - this same book's skin detail,
// the census's own law). The branch law: ONE SHAPE ONE WORD - rise
// then rise prices the wet flee's own swell, fall then fall prices
// the wet flee's own fade, a traded direction prices the wet
// flee's own swing, a held step (any count-to-count zero) prices
// the honest silence (a held lane is no direction - the bars never
// invent; the watertrend family's own held law). The byte-pin: the
// trend row never speaks the shape's own verdict words (no return,
// no repeat, no stay, no run) nor the seats' own verdict word (no
// owns) nor the dynasty's own (no dynasty, no turn) - co-existence
// by seat never by duplication; the seat-law tail names the
// neighbor seats (the re-verdict's word, the verdict flip's word,
// the flee hop's word, the win's word, the kill's word, the
// presence's word) - the names ride by law, the neighbor verdicts
// never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the water context's own v0.976.78). The fold receives
// the census's own fleeShore per face (houndCensus owns the shore
// count - one-parser law: the same census runs over each face's
// own lines, never a fork; the SAME cell the episode detail line
// already holds: "flee-shore N"). No two-back face given -> no
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
 *   { back: {shore}, prev: {shore}, cur: {shore} }
 * @returns {boolean}
 */
export function houndFleeShoreTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.shore) && s.shore >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the wet flee's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {shore}, prev: {shore}, cur: {shore} }
 * @returns {string|null} the row byte, or null
 */
export function houndFleeShoreTrendRow (e) {
  if (!houndFleeShoreTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.shore - back.shore
  const second = cur.shore - prev.shore
  const arc = `${back.shore} -> ${prev.shore} (${first >= 0 ? '+' : ''}${first}) -> ${cur.shore} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side, the presence\'s word prices the wake\'s own sum - the answer\'s word prices which class the presence book holds within one face, this word prices the wet flee\'s own class count across the walks, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the wet flee's own trend (v0.976.79): the wet flee's rise ran two steps deep - ${arc} - the wet flee's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the wet flee's own trend (v0.976.79): the wet flee's fall ran two steps deep - ${arc} - the wet flee's own fade ${tail}`
  }
  return `the wet flee's own trend (v0.976.79): the wet flee's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
