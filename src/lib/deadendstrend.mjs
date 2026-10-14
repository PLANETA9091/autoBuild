// (v0.976.50) THE RESCUE DEAD ENDS' OWN TREND - the rescue lane's
// aborted-dead walks' own magnitude shape across three faces. The
// field priced every branch by hand seven faces deep before the word
// existed (the dead class's own count - the 'water: rescue aborted
// (dead ...)' ends, the lane's own fallen walks - face by face, the
// ledger's own arithmetic: 330 rode 2, 331 rode 1, 332 rode 1, 333
// rode 0, 334 rode 1, 335 rode 0, 336 rode 0 - the DEAD ENDS' OWN
// SWING rode twice (1 -> 0 -> 1, 0 -> 1 -> 0 - the fallen walk
// trading seats between the walks: the dead draining to a clean
// face, the walk returning one step later, then draining again), the
// held step priced the silence three times (2 -> 1 -> 1, 1 -> 1 -> 0,
// 1 -> 0 -> 0 - a held lane is no direction), and the DEAD ENDS' OWN
// SWELL and the DEAD ENDS' OWN FADE never rode the seven faces the
// ledger priced - the law prices them, the bars never invent them.
//
// The seat law: the arms' word (v0.976.45) prices the BEGINS' own
// mass - the dives the lane began - the release's word (v0.976.47)
// prices the EXITS' own mass - the surface-safe exits the lane
// granted - the landings' word (v0.976.49) prices the DELIVERED
// ENDS' own mass - the rescues that closed the dive - and the DEAD
// ENDS' own mass - the aborted-dead walks, the lane's own fallen -
// rode unnamed. The begins, the exits, the landings and the dead are
// different books: the ends' own bill (v0.780.0) prices only the
// single face's argmax class - one face's own seat, never the pair's
// own shape across the walks (a face whose argmax rides complete
// names no dead shape even when the dead moved underneath). This
// word prices the dead ends' own mass.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// DEAD ENDS' OWN SWELL, fall then fall prices the DEAD ENDS' OWN
// FADE, a traded direction prices the DEAD ENDS' OWN SWING, a held
// step (any count-to-count zero) prices the honest silence (a held
// lane is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the bill's own verdict word (no owns) - co-existence by
// seat never by duplication; the seat-law tail names the neighbor
// seats (the arms' word, the release's word, the landings' word, the
// ends' bill) - the names ride by law, the neighbor verdicts never
// ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49). The fold receives
// the ledger's own totals per face (rescueLedger owns the dead count
// - one-parser law: the same ledger runs over each face's own lines,
// never a fork; the SAME cells the ends' bill's, the arms', the
// release's and the landings' wires already hold). No two-back face
// given -> no read (the carrier's own null pass).
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
 *   { back: {dead}, prev: {dead}, cur: {dead} }
 * @returns {boolean}
 */
export function deadEndsTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.dead) && s.dead >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the dead ends' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {dead}, prev: {dead}, cur: {dead} }
 * @returns {string|null} the row byte, or null
 */
export function deadEndsTrendRow (e) {
  if (!deadEndsTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.dead - back.dead
  const second = cur.dead - prev.dead
  const arc = `${back.dead} -> ${prev.dead} (${first >= 0 ? '+' : ''}${first}) -> ${cur.dead} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the arms\' word prices the begins\' own mass, the release\'s word prices the exits\' own mass, the landings\' word prices the delivered ends\' own mass, the ends\' bill prices the class\'s own closes - this word prices the dead ends\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the rescue dead ends' own trend (v0.976.50): the dead ends' rise ran two steps deep - ${arc} - the dead ends' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the rescue dead ends' own trend (v0.976.50): the dead ends' fall ran two steps deep - ${arc} - the dead ends' own fade ${tail}`
  }
  return `the rescue dead ends' own trend (v0.976.50): the dead ends' own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
