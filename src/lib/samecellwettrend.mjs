// (v0.976.70) THE SAME-CELL WET'S OWN TREND - the rescue lane's
// repeat wet page standdowns' own magnitude shape across three
// faces. The mass: the ledger's own midEvents.repeatWetStanddown
// count - the walks that paged wet AGAIN at the same cell and stood
// down (the log's own signature line: "water: repeat wet page at the
// same cell" - the census's own byte the mid-episode bill already
// prints). The name law: the word names the mass by the log's own
// seat phrase "at the same cell" - the census label's own token
// never rides the row (the byte-pin battery is the name's own
// fence); the bill prints the census name beside the word's row -
// co-existence by seat never by duplication.
//
// The field priced every branch by hand sixteen faces deep before
// the word existed (the same-cell wet's own count - the ledger's own
// midEvents.repeatWetStanddown, the walks that stood down on the
// repeat wet page - face by face, the caches' own arithmetic: 334
// rode 0, 335 rode 0, 336 rode 0, 337 rode 0, 338 rode 0, 339 rode
// 0, 340 rode 0, 341 rode 0, 342 rode 0, 343 rode 0, 344 rode 0, 345
// rode 0, 346 rode 0, 347 rode 0, 348 rode 0, 349 rode 0 - every
// chain the honest silence 0 -> 0 -> 0). THE WORD BORN SILENT - the
// zombie toll's own first-fold precedent the word's own birthright
// (the honest silence is a read; the fold never invents a zero and
// never invents an arrow either). The swell never rode the sixteen
// faces the ledger priced, the fade never rode, the swing never rode
// - the arrows come when the wet returns to the same cell, the bars
// never invent them; the law prices the branches, the field holds
// the silence.
//
// The seat law: the rescue mid seat's word (v0.790.0) prices WHICH
// mid-episode event owns the churn WITHIN one face - the seat and
// the riders, one row never both; the mid-episode bill prices each
// face's own five counters as bare bytes (shore-stall, transit-stall,
// blind-live, no-ground-truth, repeat-wet standdown). The SAME-CELL
// WET'S OWN MASS - the pair's own shape ACROSS the walks - rode
// unnamed (the seat's word never leaves the single face, and the
// bill's bytes never price a shape at all). The branch law: ONE
// SHAPE ONE WORD - rise then rise prices the same-cell wet's own
// swell, fall then fall prices the same-cell wet's own fade, a
// traded direction prices the same-cell wet's own swing, a held step
// (any count-to-count zero) prices the honest silence (a held lane
// is no direction - the bars never invent; the watertrend family's
// own held law). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the seat's own verdict word (no owns) - co-existence by seat
// never by duplication; the seat-law tail names the neighbor seats
// (the mid seat's word, the mid-episode bill) - the names ride by
// law, the neighbor verdicts never ride.
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
// own, v0.976.58; the shore-pin's own, v0.976.59; the transit-stall's
// own, v0.976.60; the timeout ends' own, v0.976.69). The fold
// receives the ledger's own midEvents.repeatWetStanddown per face
// (rescueLedger owns the repeat wet page standdown count - one-parser
// law: the same ledger runs over each face's own lines, never a
// fork; the SAME cells the mid seat's wire and the bill's bytes
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
 *   { back: {cell}, prev: {cell}, cur: {cell} }
 * @returns {boolean}
 */
export function sameCellWetTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.cell) && s.cell >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the same-cell wet's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {cell}, prev: {cell}, cur: {cell} }
 * @returns {string|null} the row byte, or null
 */
export function sameCellWetTrendRow (e) {
  if (!sameCellWetTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.cell - back.cell
  const second = cur.cell - prev.cell
  const arc = `${back.cell} -> ${prev.cell} (${first >= 0 ? '+' : ''}${first}) -> ${cur.cell} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the mid seat\'s word prices the face\'s own owner, the mid-episode bill prices the face\'s own five counters - this word prices the same-cell wet\'s own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the same-cell wet's own trend (v0.976.70): the same-cell wet's rise ran two steps deep - ${arc} - the same-cell wet's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the same-cell wet's own trend (v0.976.70): the same-cell wet's fall ran two steps deep - ${arc} - the same-cell wet's own fade ${tail}`
  }
  return `the same-cell wet's own trend (v0.976.70): the same-cell wet's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
