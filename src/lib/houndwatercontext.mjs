// (v0.976.78) THE WATER CONTEXT'S OWN TREND - the hound census's own
// water book's trend seat: the drown contexts - the deaths the water
// took (the "drown context" death anchors, the water's own side) -
// their magnitude shape across three faces. The mass: the census's
// own drownContexts count - the death lines the census anchors
// BEFORE the hound's counts (the census's own population law: a
// kill context is never a combat line, the o2-reset drown deaths
// stay OUT of the hound's counts - the water's own book rides the
// same census beside the hound's books, one parser, never a fork).
//
// The field priced every branch by hand nine faces deep before the
// word existed (the context's own count face by face, the census's
// own arithmetic: 347 rode 1, 348 rode 1, 349 rode 1, 350 rode 0,
// 351 rode 2, 352 rode 0, 353 rode 1, 354 rode 4, 355 rode 2 - the
// FACE 349 chain the held trio 1 -> 1 -> 1, the FACE 350 chain the
// held first step 1 -> 1 -> 0, the FACE 351 chain the swing
// 1 -> 0 (-1) -> 2 (+2), the FACE 352 chain the swing 0 -> 2 (+2)
// -> 0 (-2), the FACE 353 chain the swing 2 -> 0 (-2) -> 1 (+1),
// and THE FACE 354 CHAIN THE WORD'S OWN BIRTH RIDE the swell
// 0 -> 1 (+1) -> 4 (+3) - the water's own storm built two steps
// deep, the word greeted with an arrow the walk it arrived, and
// the FACE 355 chain the swing 1 -> 4 (+3) -> 2 (-2) the storm's
// own relief - THE WORD BORN SPEAKING FIVE CHAINS DEEP (four
// swings + the swell, the loudest birth ride the trend family ever
// priced beside the kill's own three-swing birth v0.976.76)). The
// fade never rode the nine priced faces - the water's own storms
// trade and build, the slow two-fall the field has not held; the
// bars never invent the shapes the field keeps, the law prices the
// branches, the field holds the silence.
//
// The seat law: the water's own unnamed seat - the hound census's
// own kill book priced WITHIN one face by the prey's word
// (v0.926.0) and the arena's word (v0.791.0), ACROSS the walks by
// the kill's own word (v0.976.76); the fleet's own side priced by
// the bane's word (v0.929.0) and the win's own word (v0.976.75);
// the death census's own server-kind drown cell priced by the
// drown toll's word (v0.976.61) - a different book (the server's
// own verdict, not the bot's own anatomy); the waterline's own
// rise priced by the waterline's word - a different cell (the
// lake's own level, not the deaths). The WATER'S OWN CONTEXT MASS
// - the deaths the water took, the sensor's own anchor lines -
// rode unnamed ACROSS the walks (two books may read one water:
// the server's verdict and the bot's own context, the cells never
// merge). The branch law: ONE SHAPE ONE WORD - rise then rise
// prices the context's own swell, fall then fall prices the
// context's own fade, a traded direction prices the context's own
// swing, a held step (any count-to-count zero) prices the honest
// silence (a held lane is no direction - the bars never invent;
// the watertrend family's own held law). The byte-pin: the trend
// row never speaks the shape's own verdict words (no return, no
// repeat, no stay, no run) nor the seats' own verdict word (no
// owns) nor the dynasty's own (no dynasty, no turn) - co-existence
// by seat never by duplication; the seat-law tail names the
// neighbor seats (the re-verdict's word, the verdict flip's word,
// the flee hop's word, the win's word, the kill's word) - the
// names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the kill's own v0.976.76). The fold receives the
// census's own drownContexts per face (houndCensus owns the
// context count - one-parser law: the same census runs over each
// face's own lines, never a fork; the SAME cell the episode
// detail line already holds: "drown contexts (the water did it)").
// No two-back face given -> no read (the carrier's own null pass).
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
 *   { back: {contexts}, prev: {contexts}, cur: {contexts} }
 * @returns {boolean}
 */
export function houndWaterContextTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.contexts) && s.contexts >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the water context's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {contexts}, prev: {contexts}, cur: {contexts} }
 * @returns {string|null} the row byte, or null
 */
export function houndWaterContextTrendRow (e) {
  if (!houndWaterContextTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.contexts - back.contexts
  const second = cur.contexts - prev.contexts
  const arc = `${back.contexts} -> ${prev.contexts} (${first >= 0 ? '+' : ''}${first}) -> ${cur.contexts} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the kill\'s word prices the hound\'s own side - the kind\'s word prices the server\'s own verdict, this word prices the water\'s own contexts the hound\'s counts exclude, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the water context's own trend (v0.976.78): the water context's rise ran two steps deep - ${arc} - the water context's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the water context's own trend (v0.976.78): the water context's fall ran two steps deep - ${arc} - the water context's own fade ${tail}`
  }
  return `the water context's own trend (v0.976.78): the water context's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
