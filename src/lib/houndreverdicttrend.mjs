// (v0.976.71) THE HOUND RE-VERDICT'S OWN TREND - the hound book's own
// first trend seat: the drowned hound's re-engagements' own magnitude
// shape across three faces. The mass: the census's own reVerdicts
// count - the answer moments the hound re-engaged (the log's own
// signature suffix "(proximity|sentry) re-verdict)" beside a drowned
// mention - the same cell the episode detail line already prints).
//
// The field priced every branch by hand five faces deep before the
// word existed (the re-verdict's own count face by face, the census's
// own arithmetic: 347 rode 0, 348 rode 0, 349 rode 0, 350 rode 3,
// 351 rode 3 - the FACE 349 chain the clean trio 0 -> 0 -> 0, the
// FACE 350 chain the arrival riding unnamed behind a held first step
// 0 -> 0 -> 3, the FACE 351 chain the held step 0 -> 3 -> 3 - every
// priced chain the honest silence). THE WORD BORN SILENT - the zombie
// toll's own first-fold precedent the word's own birthright, the
// same-cell wet's own v0.976.70 birth the family's own law (the
// honest silence is a read; the fold never invents a zero and never
// invents an arrow either). The swell never rode the five priced
// faces, the fade never rode, the swing never rode - the arrows come
// when the hound re-engages differently, the bars never invent them;
// the law prices the branches, the field holds the silence.
//
// The seat law: the hound book's own unnamed seat - the answer's word
// prices WHICH answer class owns the presence book (v0.925.0), the
// pressure's word WHICH bot owns the moments (v0.928.0), the prey's
// word WHOSE deaths own the kill book (v0.926.0), the bane's word
// WHOSE wins own the defeat book (v0.929.0), the arena's word WHERE
// the hound won (v0.791.0) - every hound seat prices WITHIN one face.
// The RE-VERDICTS' OWN MASS - the re-engagements' own shape ACROSS
// the walks - rode unnamed (a seat can hold while the count moves:
// different books, and one hound seat's book is never another hound
// seat's). The branch law: ONE SHAPE ONE WORD - rise then rise prices
// the re-verdict's own swell, fall then fall prices the re-verdict's
// own fade, a traded direction prices the re-verdict's own swing, a
// held step (any count-to-count zero) prices the honest silence (a
// held lane is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the seats' own verdict word (no owns) nor the dynasty's
// own (no dynasty, no turn) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the
// answer's word, the pressure's word, the bane's word, the episode
// detail) - the names ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the trend family's own carrier chain v0.976.34 through the
// same-cell wet's own v0.976.70). The fold receives the census's own
// reVerdicts per face (houndCensus owns the re-engagement count -
// one-parser law: the same census runs over each face's own lines,
// never a fork; the SAME cell the episode detail line and the hound
// seats' wires already hold). No two-back face given -> no read (the
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
 *   { back: {verdicts}, prev: {verdicts}, cur: {verdicts} }
 * @returns {boolean}
 */
export function houndReverdictTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.verdicts) && s.verdicts >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the hound re-verdict's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {verdicts}, prev: {verdicts}, cur: {verdicts} }
 * @returns {string|null} the row byte, or null
 */
export function houndReverdictTrendRow (e) {
  if (!houndReverdictTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.verdicts - back.verdicts
  const second = cur.verdicts - prev.verdicts
  const arc = `${back.verdicts} -> ${prev.verdicts} (${first >= 0 ? '+' : ''}${first}) -> ${cur.verdicts} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the answer\'s word prices the presence book\'s own classes, the pressure\'s word prices the magnets\' own mix, the bane\'s word prices the defeats\' own wins, the episode detail prices the face\'s own hops and flips - this word prices the hound re-verdicts\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the hound re-verdict's own trend (v0.976.71): the hound re-verdict's rise ran two steps deep - ${arc} - the hound re-verdict's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the hound re-verdict's own trend (v0.976.71): the hound re-verdict's fall ran two steps deep - ${arc} - the hound re-verdict's own fade ${tail}`
  }
  return `the hound re-verdict's own trend (v0.976.71): the hound re-verdict's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
