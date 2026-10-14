// (v0.976.49) THE RESCUE LANDINGS' OWN TREND - the rescue landings'
// own magnitude shape across three faces. The field priced every
// branch by hand ten faces deep before the word existed (the lane's
// own delivered ends - the complete class's own count, face by face,
// the ledger's own arithmetic: 325 rode 14, 326 rode 5, 327 rode 11,
// 328 rode 7, 329 rode 7, 330 rode 5, 331 rode 4, 332 rode 11, 333
// rode 5, 334 rode 3, 335 rode 1 - the LANDINGS' OWN SWING rode four
// times (14 -> 5 -> 11, 5 -> 11 -> 7, 5 -> 4 -> 11, 4 -> 11 -> 5 -
// the calm's landings trading seats between the walks), the
// LANDINGS' OWN FADE rode three times (7 -> 5 -> 4, 11 -> 5 -> 3,
// 5 -> 3 -> 1 - the branch's own birth face, the storm's landings
// draining three walks straight down to a single delivered end), the
// held step priced the silence twice (11 -> 7 -> 7, 7 -> 7 -> 5 - a
// held lane is no direction), and the LANDINGS' OWN SWELL never rode
// the ten faces the ledger priced - the law prices it, the bars never
// invent it.
//
// The seat law: the arms' word (v0.976.45) prices the BEGINS' own
// mass - the dives the lane began - the release's word (v0.976.47)
// prices the EXITS' own mass - the surface-safe exits the lane
// granted - and the LANDINGS' own mass - the delivered ends, the
// rescues that closed the dive - rode unnamed. The begins, the exits
// and the landings are three different books: the arms can swell
// while the landings fade (the storm's own drain), and the ends' own
// bill (v0.780.0) prices only the single face's argmax class - one
// face's own seat, never the pair's own shape across the walks. This
// word prices the landings' own mass.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// LANDINGS' OWN SWELL, fall then fall prices the LANDINGS' OWN FADE,
// a traded direction prices the LANDINGS' OWN SWING, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own held
// law). The byte-pin: the trend row never speaks the shape's own
// verdict words (no return, no repeat, no stay, no run) nor the
// bill's own verdict word (no owns) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the arms'
// word, the release's word, the ends' bill, the echo) - the names
// ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47). The fold receives the ledger's own totals per face
// (rescueLedger owns the complete count - one-parser law: the same
// ledger runs over each face's own lines, never a fork; the SAME
// cells the ends' bill's, the arms' and the release's wires already
// hold). No two-back face given -> no read (the carrier's own null
// pass).
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
 *   { back: {complete}, prev: {complete}, cur: {complete} }
 * @returns {boolean}
 */
export function landingsTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.complete) && s.complete >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the landings' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {complete}, prev: {complete}, cur: {complete} }
 * @returns {string|null} the row byte, or null
 */
export function landingsTrendRow (e) {
  if (!landingsTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.complete - back.complete
  const second = cur.complete - prev.complete
  const arc = `${back.complete} -> ${prev.complete} (${first >= 0 ? '+' : ''}${first}) -> ${cur.complete} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the arms\' word prices the begins\' own mass, the release\'s word prices the exits\' own mass, the ends\' bill prices the class\'s own closes - this word prices the landings\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the rescue landings' own trend (v0.976.49): the landings' rise ran two steps deep - ${arc} - the landings' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the rescue landings' own trend (v0.976.49): the landings' fall ran two steps deep - ${arc} - the landings' own fade ${tail}`
  }
  return `the rescue landings' own trend (v0.976.49): the landings' own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
