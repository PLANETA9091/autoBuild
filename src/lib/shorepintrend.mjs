// (v0.976.59) THE SHORE-PIN'S OWN TREND - the rescue lane's
// shore-pinned walks' own magnitude shape across three faces. The
// field priced every branch by hand seven faces deep before the word
// existed (the shore-pin's own count - the ledger's own
// midEvents.shorePin, the water: shore pinned holds - face by face,
// the caches' own arithmetic: 337 rode 27, 338 rode 15, 339 rode 22,
// 340 rode 18, 341 rode 42, 342 rode 7, 343 rode 25 - the
// SHORE-PIN'S OWN SWING rode five times (27 -> 15 -> 22, 15 -> 22 ->
// 18, 22 -> 18 -> 42, 18 -> 42 -> 7, 42 -> 7 -> 25 - the pin trading
// seats every walk straight, the face 341 pin storm's own 42 draining
// to the quiet face's 7 and refilling one walk later), the
// SHORE-PIN'S OWN SWELL never rode the seven faces the ledger priced,
// the SHORE-PIN'S OWN FADE never rode either, and the held step never
// rode (every step moved) - the law prices them, the bars never
// invent them.
//
// The seat law: the rescue mid seat's word (v0.790.0) prices WHICH
// mid-episode event owns the churn WITHIN one face - the seat and
// the riders, one row never both; the mid-episode riders row prices
// the face's own crowd (the events' own spread - blind-live x41 +
// shore-pin x25 owned 66 of 87 on FACE 343). The SHORE-PIN'S OWN
// MASS - the pair's own shape ACROSS the walks - rode unnamed (the
// seat's word never leaves the single face, and the crowd's own
// spread never prices a shape at all). The branch law: ONE SHAPE ONE
// WORD - rise then rise prices the shore-pin's own swell, fall then
// fall prices the shore-pin's own fade, a traded direction prices the
// shore-pin's own swing, a held step (any count-to-count zero)
// prices the honest silence (a held lane is no direction - the bars
// never invent; the watertrend family's own held law). The byte-pin:
// the trend row never speaks the shape's own verdict words (no
// return, no repeat, no stay, no run) nor the seat's own verdict
// word (no owns) - co-existence by seat never by duplication; the
// seat-law tail names the neighbor seats (the mid seat's word, the
// riders row) - the names ride by law, the neighbor verdicts never
// ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50; the frozen ends' own, v0.976.52; the drain's own,
// v0.976.53; the orphans' own, v0.976.54; the blind-live's own,
// v0.976.56; the no-ground-truth's own, v0.976.57; the shore-stall's
// own, v0.976.58). The fold receives the ledger's own midEvents
// .shorePin per face (rescueLedger owns the shore-pin count -
// one-parser law: the same ledger runs over each face's own lines,
// never a fork; the SAME cells the mid seat's wire and the riders
// row already hold). No two-back face given -> no read (the
// carrier's own null pass).
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
 *   { back: {pin}, prev: {pin}, cur: {pin} }
 * @returns {boolean}
 */
export function shorePinTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.pin) && s.pin >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the shore-pin's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {pin}, prev: {pin}, cur: {pin} }
 * @returns {string|null} the row byte, or null
 */
export function shorePinTrendRow (e) {
  if (!shorePinTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.pin - back.pin
  const second = cur.pin - prev.pin
  const arc = `${back.pin} -> ${prev.pin} (${first >= 0 ? '+' : ''}${first}) -> ${cur.pin} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the mid seat\'s word prices the face\'s own owner, the riders row prices the face\'s own crowd - this word prices the shore-pin\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the shore-pin's own trend (v0.976.59): the shore-pin's rise ran two steps deep - ${arc} - the shore-pin's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the shore-pin's own trend (v0.976.59): the shore-pin's fall ran two steps deep - ${arc} - the shore-pin's own fade ${tail}`
  }
  return `the shore-pin's own trend (v0.976.59): the shore-pin's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
