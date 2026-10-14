// (v0.976.54) THE ORPHANS' OWN TREND - the rescue lane's orphan ends'
// own magnitude shape across three faces. The field priced every
// branch by hand six faces deep before the word existed (the orphans'
// own count - the ledger's own orphanEnds, the end lines with no open
// episode for their bot, the lane's own truncated ends - face by
// face, the caches' own arithmetic: 334 rode 0, 335 rode 0, 336 rode
// 0, 337 rode 1, 338 rode 3, 339 rode 1 - the ORPHANS' OWN SWING rode
// once (1 -> 3 -> 1 - the orphan pair the face 338 swell raised
// draining back to a clean face one walk later), the ORPHANS' OWN
// SWELL rode once (0 -> 1 -> 3 - the word's own birth window, the
// orphan ends arriving two walks straight after three clean faces),
// the ORPHANS' OWN FADE never rode the six faces the ledger priced,
// and the held step priced the honest silence twice (0 -> 0 -> 0 and
// 0 -> 0 -> 1's own first step) - the law prices them, the bars never
// invent them.
//
// The seat law: the orphan owner's word (v0.679.0, the seat's own
// v0.802.0) prices the SPLIT WITHIN one face - the per-bot majority
// among the face's own orphan ends; the scar's word (v0.976.46)
// prices the UNCLOSED depth - the starts with no end line at EOF.
// The ORPHANS' OWN MASS - the end lines that arrived with no open
// episode, the lane's own truncation mark - rode unnamed across the
// faces (the owner's word never leaves the single face, the scar's
// word prices a different book entirely: the ends that never came
// against the ends that came unannounced). The branch law: ONE SHAPE
// ONE WORD - rise then rise prices the orphans' own swell, fall then
// fall prices the orphans' own fade, a traded direction prices the
// orphans' own swing, a held step (any count-to-count zero) prices
// the honest silence (a held lane is no direction - the bars never
// invent; the watertrend family's own held law). The byte-pin: the
// trend row never speaks the shape's own verdict words (no return,
// no repeat, no stay, no run) nor the owner's own verdict word (no
// owns) - co-existence by seat never by duplication; the seat-law
// tail names the neighbor seats (the owner's word, the scar's word)
// - the names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50; the frozen ends' own, v0.976.52; the drain's own,
// v0.976.53). The fold receives the ledger's own orphanEnds per face
// (rescueLedger owns the orphan count - one-parser law: the same
// ledger runs over each face's own lines, never a fork; the SAME
// cells the owner's word's, the scar's word's and the starts' wire
// already hold). No two-back face given -> no read (the carrier's
// own null pass).
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
 *   { back: {orphans}, prev: {orphans}, cur: {orphans} }
 * @returns {boolean}
 */
export function orphanTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.orphans) && s.orphans >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the orphans' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {orphans}, prev: {orphans}, cur: {orphans} }
 * @returns {string|null} the row byte, or null
 */
export function orphanTrendRow (e) {
  if (!orphanTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.orphans - back.orphans
  const second = cur.orphans - prev.orphans
  const arc = `${back.orphans} -> ${prev.orphans} (${first >= 0 ? '+' : ''}${first}) -> ${cur.orphans} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the owner\'s word prices the face\'s own seat, the scar\'s word prices the unclosed depth - this word prices the orphans\' own count, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the orphans' own trend (v0.976.54): the orphans' rise ran two steps deep - ${arc} - the orphans' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the orphans' own trend (v0.976.54): the orphans' fall ran two steps deep - ${arc} - the orphans' own fade ${tail}`
  }
  return `the orphans' own trend (v0.976.54): the orphans' own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
