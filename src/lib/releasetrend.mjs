// (v0.976.47) THE RELEASE'S OWN TREND - the rescue releases' own
// magnitude shape across three faces. The field priced every branch by
// hand nine faces deep before the word existed (the lane's own
// surface-safe exits, face by face, the ledger's own arithmetic: 325
// rode 12, 326 rode 50, 327 rode 21, 328 rode 26, 329 rode 17, 330
// rode 17, 331 rode 67, 332 rode 48, 333 rode 23 - the RELEASE'S OWN
// SWING rode four times (12 -> 50 -> 21, 50 -> 21 -> 26, 21 -> 26 ->
// 17, 17 -> 67 -> 48 - the calm era's relief trading seats between
// the walks), the RELEASE'S OWN FADE rode once (67 -> 48 -> 23 - the
// branch's own birth face, the storm's relief draining two steps
// deep), the held step priced the silence twice (26 -> 17 -> 17, 17
// -> 17 -> 67 - a held lane is no direction), and the RELEASE'S OWN
// SWELL never rode the nine faces the ledger priced - the law prices
// it, the bars never invent it.
//
// The seat law: the arms' word (v0.976.45) prices the STARTS' own
// mass - the dives the lane began - and the RELEASES' own mass - the
// surface-safe exits the lane granted - rode unnamed. The begins and
// the exits are different books: the arms can swell while the relief
// fades (the lane's own tempo), and the ends' own bill (v0.780.0)
// prices only the single face's argmax class - one face's own seat,
// never the pair's own shape across the walks. This word prices the
// releases' own mass.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// RELEASE'S OWN SWELL, fall then fall prices the RELEASE'S OWN FADE,
// a traded direction prices the RELEASE'S OWN SWING, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own held
// law). The byte-pin: the trend row never speaks the shape's own
// verdict words (no return, no repeat, no stay, no run) nor the
// bill's own verdict word (no owns) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the arms'
// word, the ends' bill, the echo) - the names ride by law, the
// neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46). The fold
// receives the ledger's own totals per face (rescueLedger owns the
// released count - one-parser law: the same ledger runs over each
// face's own lines, never a fork; the SAME cells the ends' bill's and
// the arms' wires already hold). No two-back face given -> no read
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
 *   { back: {released}, prev: {released}, cur: {released} }
 * @returns {boolean}
 */
export function releaseTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.released) && s.released >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the releases' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {released}, prev: {released}, cur: {released} }
 * @returns {string|null} the row byte, or null
 */
export function releaseTrendRow (e) {
  if (!releaseTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.released - back.released
  const second = cur.released - prev.released
  const arc = `${back.released} -> ${prev.released} (${first >= 0 ? '+' : ''}${first}) -> ${cur.released} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the arms\' word prices the starts\' own mass, the ends\' bill prices the class\'s own closes, the echo prices each step one at a time - this word prices the releases\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the rescue release's own trend (v0.976.47): the release's rise ran two steps deep - ${arc} - the release's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the rescue release's own trend (v0.976.47): the release's fall ran two steps deep - ${arc} - the release's own fade ${tail}`
  }
  return `the rescue release's own trend (v0.976.47): the release's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
