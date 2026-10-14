// (v0.976.51) THE RESCUE FROZEN ENDS' OWN TREND - the rescue lane's
// frozen-physics standdowns' own magnitude shape across three faces.
// The field priced every branch by hand twelve faces deep before the
// word existed (the frozen class's own count - the 'water: rescue
// standing down (frozen physics' ends, the lane's own held walks -
// face by face, the ledger's own arithmetic: 325 rode 14, 326 rode 6,
// 327 rode 2, 328 rode 4, 329 rode 5, 330 rode 15, 331 rode 9, 332
// rode 4, 334 rode 0, 335 rode 6, 336 rode 8, 337 rode 7 - the FROZEN
// ENDS' OWN SWING rode four times (6 -> 2 -> 4, 4 -> 5 -> 15,
// 5 -> 15 -> 9, 6 -> 8 -> 7 - the held walk trading seats between the
// walks: the freeze draining and the freeze returning one walk later,
// the storm's own relief and the storm's own return), the FROZEN
// ENDS' OWN FADE rode twice (14 -> 6 -> 2 the storm's relief draining
// three walks straight down to a doubled clean, 15 -> 9 -> 4 the
// second storm draining the same way), the FROZEN ENDS' OWN SWELL
// rode twice (2 -> 4 -> 5 the freeze creeping back, 0 -> 6 -> 8 the
// word's own birth window the held walks returning from a clean face
// two steps deep), and the held step priced the silence never in the
// twelve faces the ledger priced - the law prices it, the bars never
// invent it.
//
// The seat law: the arms' word (v0.976.45) prices the BEGINS' own
// mass - the dives the lane began - the release's word (v0.976.47)
// prices the EXITS' own mass - the surface-safe exits the lane
// granted - the landings' word (v0.976.49) prices the DELIVERED
// ENDS' own mass - the rescues that closed the dive - the dead ends'
// word (v0.976.50) prices the DEAD ENDS' own mass - the aborted-dead
// walks, the lane's own fallen - and the FROZEN ENDS' own mass - the
// frozen-physics standdowns, the lane's own held walks - rode
// unnamed. The begins, the exits, the landings, the dead and the
// frozen are different books: the ends' own bill (v0.780.0) prices
// only the single face's argmax class - one face's own seat, never
// the pair's own shape across the walks (a face whose argmax rides
// complete names no frozen shape even when the frozen moved
// underneath). This word prices the frozen ends' own mass.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// FROZEN ENDS' OWN SWELL, fall then fall prices the FROZEN ENDS' OWN
// FADE, a traded direction prices the FROZEN ENDS' OWN SWING, a held
// step (any count-to-count zero) prices the honest silence (a held
// lane is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the bill's own verdict word (no owns) - co-existence by
// seat never by duplication; the seat-law tail names the neighbor
// seats (the arms' word, the release's word, the landings' word, the
// dead ends' word, the ends' bill) - the names ride by law, the
// neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50). The fold receives the ledger's own totals per face
// (rescueLedger owns the frozen count - one-parser law: the same
// ledger runs over each face's own lines, never a fork; the SAME
// cells the ends' bill's, the arms', the release's, the landings' and
// the dead ends' wires already hold). No two-back face given -> no
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
 *   { back: {frozen}, prev: {frozen}, cur: {frozen} }
 * @returns {boolean}
 */
export function frozenTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.frozen) && s.frozen >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the frozen ends' own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {frozen}, prev: {frozen}, cur: {frozen} }
 * @returns {string|null} the row byte, or null
 */
export function frozenTrendRow (e) {
  if (!frozenTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.frozen - back.frozen
  const second = cur.frozen - prev.frozen
  const arc = `${back.frozen} -> ${prev.frozen} (${first >= 0 ? '+' : ''}${first}) -> ${cur.frozen} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the arms\' word prices the begins\' own mass, the release\'s word prices the exits\' own mass, the landings\' word prices the delivered ends\' own mass, the dead ends\' word prices the dead ends\' own mass, the ends\' bill prices the class\'s own closes - this word prices the frozen ends\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the rescue frozen ends' own trend (v0.976.51): the frozen ends' rise ran two steps deep - ${arc} - the frozen ends' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the rescue frozen ends' own trend (v0.976.51): the frozen ends' fall ran two steps deep - ${arc} - the frozen ends' own fade ${tail}`
  }
  return `the rescue frozen ends' own trend (v0.976.51): the frozen ends' own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
