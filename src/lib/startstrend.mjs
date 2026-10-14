// (v0.976.45) THE STARTS' OWN TREND - the rescue starts' own magnitude
// shape across three faces. The field priced every branch by hand
// seven faces deep before the word existed (the arms' own count, face
// by face, the ledger's own arithmetic: 325 rode 44, 326 rode 63, 327
// rode 34, 328 rode 38, 329 rode 29, 330 rode 42, 331 rode 82 - the
// SWING rode four times (44 -> 63 -> 34, 63 -> 34 -> 38, 34 -> 38 ->
// 29, 38 -> 29 -> 42 - the calm era's arms trading seats between the
// walks), the SWELL'S OWN RUN rode once (29 -> 42 -> 82 - two
// consecutive rises, the arms doubling, the word's own birth face),
// and the FADE'S OWN RUN and the held step never rode the seven faces
// the ledger priced - the law prices them, the bars never invent
// them.
//
// The seat law: the scar's words (v0.976.25, v0.976.36) price the
// book's own SCAR (the unclosed starts' own presence - the return,
// the repeat, the run, the stay), the clock's word (v0.918.0) prices
// the face's own THIRDS, and the starts' own MASS - the arms' own
// count rising, falling, and trading across three faces - rode
// unnamed. The dives' own volume is the water lane's own pressure:
// the calm era's arms (29..38) and the storm's arms (82) are
// different weathers the scar's presence cannot price.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// ARMS' OWN SWELL, fall then fall prices the ARMS' OWN FADE, a traded
// direction prices the STARTS' OWN SWING, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the scar's own
// verdict words (no return, no repeat, no stay) - co-existence by
// seat never by duplication; the seat-law tail names the neighbor
// seats (the scar's word, the clock's thirds) - the names ride by
// law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44). The
// fold receives the ledger's own totals per face (rescueLedger owns
// the starts - one-parser law: the same ledger runs over each face's
// own lines, never a fork; the SAME cells the scar trend's wire
// already holds). No two-back face given -> no read (the carrier's
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
 *   { back: {starts}, prev: {starts}, cur: {starts} }
 * @returns {boolean}
 */
export function startsTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.starts) && s.starts >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the starts' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {starts}, prev: {starts}, cur: {starts} }
 * @returns {string|null} the row byte, or null
 */
export function startsTrendRow (e) {
  if (!startsTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.starts - back.starts
  const second = cur.starts - prev.starts
  const arc = `${back.starts} -> ${prev.starts} (${first >= 0 ? '+' : ''}${first}) -> ${cur.starts} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the scar\'s word prices the book\'s own scar, the clock prices the face\'s own thirds - this word prices the starts\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the rescue starts' own trend (v0.976.45): the arms' rise ran two steps deep - ${arc} - the arms' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the rescue starts' own trend (v0.976.45): the arms' fall ran two steps deep - ${arc} - the arms' own fade ${tail}`
  }
  return `the rescue starts' own trend (v0.976.45): the starts' own swing - ${arc} - the rise and the fall traded seats between the walks (the scar's word prices the book's own scar, the clock prices the face's own thirds - this word prices the starts' own mass, co-existence by seat never by duplication)`
}
