// (v0.976.74) THE FLEE HOP'S OWN TREND - the hound book's own
// third trend seat: the drowned hound's flee hops' own magnitude
// shape across three faces. The mass: the census's own fleeHops
// count - the hops the hound's own flee took (the log's own seat
// the episode detail line already prints: "flee hops N").
//
// The field priced every branch by hand six faces deep before the
// word existed (the hop's own count face by face, the census's own
// arithmetic: 347 rode 0, 348 rode 1, 349 rode 0, 350 rode 4, 351
// rode 3, 352 rode 0 - the FACE 349 chain the swing 0 -> 1 (+1) ->
// 0 (-1), the FACE 350 chain the swing 1 -> 0 (-1) -> 4 (+4), the
// FACE 351 chain the swing 0 -> 4 (+4) -> 3 (-1), and THE FACE 352
// CHAIN THE WORD'S OWN BIRTH RIDE the fade 4 -> 3 (-1) -> 0 (-3) -
// THE WORD BORN SPEAKING, the second hound word the field greeted
// with an arrow (the verdict flip's own v0.976.73 birth the swell
// precedent beside it - two births, one vocabulary)). The swell
// never rode the six priced faces - the arrows come when the
// hound's own flee moves differently, the bars never invent them;
// the law prices the branches, the field holds the silence.
//
// The seat law: the hound book's own unnamed seat - the answer's
// word prices WHICH answer class owns the presence book (v0.925.0),
// the pressure's word WHICH bot owns the moments (v0.928.0), the
// prey's word WHOSE deaths own the kill book (v0.926.0), the bane's
// word WHOSE wins own the defeat book (v0.929.0), the arena's word
// WHERE the hound won (v0.791.0) - every hound seat prices WITHIN
// one face; the re-verdict's own word (v0.976.71) prices the
// re-engagements' own mass ACROSS the walks, the verdict flip's own
// word (v0.976.73) prices the trades' own shape ACROSS them, and
// the FLEE HOPS' OWN MASS - the flight's own shape ACROSS the walks
// - rode unnamed (a seat can hold while the count moves: different
// books, and one hound seat's book is never another hound seat's).
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// hop's own swell, fall then fall prices the hop's own fade, a
// traded direction prices the hop's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats (the re-verdict's
// word, the verdict flip's word, the answer's word) - the names
// ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the verdict flip's own v0.976.73). The fold receives the
// census's own fleeHops per face (houndCensus owns the hop count -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cell the episode detail line and the hound
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
 *   { back: {hops}, prev: {hops}, cur: {hops} }
 * @returns {boolean}
 */
export function houndFleeHopTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.hops) && s.hops >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the flee hop's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {hops}, prev: {hops}, cur: {hops} }
 * @returns {string|null} the row byte, or null
 */
export function houndFleeHopTrendRow (e) {
  if (!houndFleeHopTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.hops - back.hops
  const second = cur.hops - prev.hops
  const arc = `${back.hops} -> ${prev.hops} (${first >= 0 ? '+' : ''}${first}) -> ${cur.hops} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the re-verdict\'s word prices the re-engagements\' own mass, the verdict flip\'s word prices the trades\' own shape, the answer\'s word prices the presence book\'s own classes - the episode detail prints the face\'s own hops - this word prices the flee hops\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the flee hop's own trend (v0.976.74): the flee hop's rise ran two steps deep - ${arc} - the flee hop's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the flee hop's own trend (v0.976.74): the flee hop's fall ran two steps deep - ${arc} - the flee hop's own fade ${tail}`
  }
  return `the flee hop's own trend (v0.976.74): the flee hop's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
