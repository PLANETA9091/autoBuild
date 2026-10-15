// (v0.976.76) THE KILL'S OWN TREND - the hound book's own fifth trend
// seat: the hound's own kills - their magnitude shape across three
// faces. The mass: the census's own kills count - the "drowned-kill
// context" death lines (the log's own seat the kill book's wires
// already hold: the hound's own side of the war, the prey seats'
// census).
//
// The field priced every branch by hand eight faces deep before the
// word existed (the kill's own count face by face, the census's own
// arithmetic: 347 rode 0, 348 rode 1, 349 rode 0, 350 rode 10, 351
// rode 0, 352 rode 0, 353 rode 0, 354 rode 2 - THE FACE 349 CHAIN
// the swing 0 -> 1 (+1) -> 0 (-1), THE FACE 350 CHAIN the swing
// 1 -> 0 (-1) -> 10 (+10), and THE FACE 351 CHAIN THE WORD'S OWN
// BIRTH RIDE the swing 0 -> 10 (+10) -> 0 (-10) - THE WORD BORN
// SPEAKING THREE SWINGS DEEP, the storm's own arithmetic the field
// greeted with arrows on every priced chain (the loudest birth ride
// the trend family ever priced - the win's own v0.976.75 single
// swing the quiet precedent beside it)). The swell and the fade
// never rode the eight priced faces - the hound's own storms snap
// shut (a ten-kill face collapses to zero the walk after), the
// bars never invent the slow shapes the field has not held; the
// law prices the branches, the field holds the silence.
//
// The seat law: the hound book's own unnamed seat - the answer's
// word prices WHICH answer class owns the presence book (v0.925.0),
// the pressure's word WHICH bot owns the moments (v0.928.0), the
// prey's word WHICH bot owns the kill book WITHIN one face
// (v0.926.0), the arena's word WHERE the hound's own kills own
// (v0.791.0), the bane's word WHICH bot owns the fleet's own side
// (v0.929.0) - every hound seat prices WITHIN one face; the
// re-verdict's own word (v0.976.71) prices the re-engagements' own
// mass ACROSS the walks, the verdict flip's own word (v0.976.73)
// prices the trades' own shape, the flee hop's own word
// (v0.976.74) prices the flight's own shape, the win's own word
// (v0.976.75) prices the fleet's own victories, and the KILLS' OWN
// MASS - the hound's own side of the war, ACROSS the walks - rode
// unnamed (two sides, one war, different books: one hound seat's
// book is never another hound seat's). The branch law: ONE SHAPE
// ONE WORD - rise then rise prices the kill's own swell, fall then
// fall prices the kill's own fade, a traded direction prices the
// kill's own swing, a held step (any count-to-count zero) prices
// the honest silence (a held lane is no direction - the bars never
// invent; the watertrend family's own held law). The byte-pin: the
// trend row never speaks the shape's own verdict words (no return,
// no repeat, no stay, no run) nor the seats' own verdict word (no
// owns) nor the dynasty's own (no dynasty, no turn) - co-existence
// by seat never by duplication; the seat-law tail names the
// neighbor seats (the re-verdict's word, the verdict flip's word,
// the flee hop's word, the win's word, the prey's word) - the
// names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the win's own v0.976.75). The fold receives the
// census's own kills per face (houndCensus owns the kill count -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cell the episode detail line and the prey
// seats' wires already hold). No two-back face given -> no read
// (the carrier's own null pass).
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
 *   { back: {kills}, prev: {kills}, cur: {kills} }
 * @returns {boolean}
 */
export function houndKillTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.kills) && s.kills >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the kill's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {kills}, prev: {kills}, cur: {kills} }
 * @returns {string|null} the row byte, or null
 */
export function houndKillTrendRow (e) {
  if (!houndKillTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.kills - back.kills
  const second = cur.kills - prev.kills
  const arc = `${back.kills} -> ${prev.kills} (${first >= 0 ? '+' : ''}${first}) -> ${cur.kills} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the flee hop\'s word prices the flight\'s own mass, the win\'s word prices the fleet\'s own side of the war, the prey\'s word prices which bot the kill book holds within one face - the episode detail prints the face\'s own kills - this word prices the hound\'s own kill mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the kill's own trend (v0.976.76): the kill's rise ran two steps deep - ${arc} - the kill's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the kill's own trend (v0.976.76): the kill's fall ran two steps deep - ${arc} - the kill's own fade ${tail}`
  }
  return `the kill's own trend (v0.976.76): the kill's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
