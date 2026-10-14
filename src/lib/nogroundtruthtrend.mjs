// (v0.976.57) THE NO-GROUND-TRUTH'S OWN TREND - the rescue lane's
// survey-blind walks' own magnitude shape across three faces. The
// field priced every branch by hand five faces deep before the word
// existed (the no-ground-truth's own count - the ledger's own
// midEvents.noGroundTruth, the walks that ended never having gathered
// ground truth - face by face, the caches' own arithmetic: 337 rode
// 9, 338 rode 16, 339 rode 18, 340 rode 22, 341 rode 8 - the
// NO-GROUND-TRUTH'S OWN SWELL rode twice (9 -> 16 -> 18, 16 -> 18 ->
// 22 - the survey-blind walks swelling four walks straight), the
// NO-GROUND-TRUTH'S OWN SWING rode once (18 -> 22 -> 8 - the field's
// own biggest drop, the survey-blind mass draining fourteen seats one
// walk after its own peak), the NO-GROUND-TRUTH'S OWN FADE never rode
// the five faces the ledger priced, and the held step never rode
// either (every step moved) - the law prices them, the bars never
// invent them.
//
// The seat law: the rescue mid seat's word (v0.790.0) prices WHICH
// mid-episode event owns the churn WITHIN one face - the seat and
// the riders, one row never both; the mid-episode bill prices each
// face's own five counters as bare bytes. The NO-GROUND-TRUTH'S OWN
// MASS - the pair's own shape ACROSS the walks - rode unnamed (the
// seat's word never leaves the single face, and the bill's bytes
// never price a shape at all). The branch law: ONE SHAPE ONE WORD -
// rise then rise prices the no-ground-truth's own swell, fall then
// fall prices the no-ground-truth's own fade, a traded direction
// prices the no-ground-truth's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seat's own verdict word (no owns) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the mid
// seat's word, the mid-episode bill) - the names ride by law, the
// neighbor verdicts never ride.
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
// v0.976.56). The fold receives the ledger's own midEvents
// .noGroundTruth per face (rescueLedger owns the no-ground-truth
// count - one-parser law: the same ledger runs over each face's own
// lines, never a fork; the SAME cells the mid seat's wire and the
// bill's bytes already hold). No two-back face given -> no read (the
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
 *   { back: {nogt}, prev: {nogt}, cur: {nogt} }
 * @returns {boolean}
 */
export function noGroundTruthTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.nogt) && s.nogt >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the no-ground-truth's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {nogt}, prev: {nogt}, cur: {nogt} }
 * @returns {string|null} the row byte, or null
 */
export function noGroundTruthTrendRow (e) {
  if (!noGroundTruthTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.nogt - back.nogt
  const second = cur.nogt - prev.nogt
  const arc = `${back.nogt} -> ${prev.nogt} (${first >= 0 ? '+' : ''}${first}) -> ${cur.nogt} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the mid seat\'s word prices the face\'s own owner, the mid-episode bill prices the face\'s own five counters - this word prices the no-ground-truth\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the no-ground-truth's own trend (v0.976.57): the no-ground-truth's rise ran two steps deep - ${arc} - the no-ground-truth's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the no-ground-truth's own trend (v0.976.57): the no-ground-truth's fall ran two steps deep - ${arc} - the no-ground-truth's own fade ${tail}`
  }
  return `the no-ground-truth's own trend (v0.976.57): the no-ground-truth's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
