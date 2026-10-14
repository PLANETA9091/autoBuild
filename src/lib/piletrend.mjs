// (v0.976.55) THE BIGGEST PILE'S OWN TREND - the single worst death
// drop's own magnitude shape across three faces. The field priced every
// branch by hand eleven faces deep before the word existed (the
// biggest pile's own u - the strand census's own biggest cell, the
// single largest drop the face's deaths left sitting - face by face:
// 329 rode 225, 330 rode 148, 331 rode 72, 332 rode 55, 333 rode 324,
// 334 rode 265, 335 rode 81, 336 rode 145, 337 rode 149, 338 rode 249,
// 339 rode 158 - the PILE'S OWN FADE rode three times (225 -> 148 ->
// 72, 148 -> 72 -> 55, 324 -> 265 -> 81 - the storm's worst pile
// shrinking walk after walk, the twin drain 225 -> 148 -> 72 -> 55 the
// fade's own longest walk three faces deep), the PILE'S OWN SWING rode
// five times (72 -> 55 -> 324, 55 -> 324 -> 265, 265 -> 81 -> 145,
// 149 -> 249 -> 158 - the worst pile trading seats between the walks:
// the quiet face's worst collapse 55 -> 324 the field's own biggest
// jump, the storm's worst pile easing one walk later), the PILE'S OWN
// SWELL rode twice (81 -> 145 -> 149, 145 -> 149 -> 249 - the worst
// pile creeping back two walks straight), and the held step never rode
// the eleven faces the census priced - the law prices it, the bars
// never invent it.
//
// The seat law: the drain's own word (v0.976.53) prices the SUM's own
// shape - the total u the deaths scattered - and this word prices the
// MAX's own shape - the single worst pile (the sum can drain while the
// worst pile holds, the worst pile can jump while the sum eases:
// different books, one drop never a sum). The thirds' own word
// (v0.883.0) prices the split WITHIN one face. The big-pile count's
// own row (v0.476.0) prices the big class's own count within one face;
// the strand's own cast (v0.934.0) prices the WHO. The branch law: ONE
// SHAPE ONE WORD - rise then rise prices the PILE'S OWN SWELL, fall
// then fall prices the PILE'S OWN FADE, a traded direction prices the
// PILE'S OWN SWING, a held step (any unit-to-unit zero) prices the
// honest silence (a held pile is no direction - the bars never invent;
// the watertrend family's own held law). The byte-pin: the trend row
// never speaks the shape's own verdict words (no return, no repeat,
// no stay, no run) nor the cast's own verdict word (no owns) -
// co-existence by seat never by duplication; the seat-law tail names
// the neighbor seats (the drain's word, the thirds' word, the
// big-pile count's row, the strand's cast) - the names ride by law,
// the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50; the frozen ends' own, v0.976.52; the drain's own,
// v0.976.53). The fold receives the census's own biggest cell per face
// (strandedPiles owns the biggest - one-parser law: the same census
// runs over each face's own lines, never a fork; the SAME cell the
// strand row's wire already holds). A face with no massy pile prices
// no read (the sparse law - the census's own null biggest). No
// two-back face given -> no read (the carrier's own null pass).
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
 *   { back: {peak}, prev: {peak}, cur: {peak} }
 * @returns {boolean}
 */
export function pileTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.peak) && s.peak >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the biggest pile's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {peak}, prev: {peak}, cur: {peak} }
 * @returns {string|null} the row byte, or null
 */
export function pileTrendRow (e) {
  if (!pileTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.peak - back.peak
  const second = cur.peak - prev.peak
  const arc = `${back.peak} -> ${prev.peak} (${first >= 0 ? '+' : ''}${first}) -> ${cur.peak} (${second >= 0 ? '+' : ''}${second})u`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the drain\'s word prices the drops\' own sum, the thirds\' word prices the face\'s own split, the big-pile count prices the big class within one face, the strand\'s cast prices the WHO - this word prices the biggest single pile\'s own u, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the biggest pile's own trend (v0.976.55): the pile's rise ran two steps deep - ${arc} - the pile's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the biggest pile's own trend (v0.976.55): the pile's fall ran two steps deep - ${arc} - the pile's own fade ${tail}`
  }
  return `the biggest pile's own trend (v0.976.55): the pile's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
