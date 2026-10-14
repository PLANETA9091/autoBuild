// (v0.976.34) THE WATERLINE'S OWN TREND - the waterline's own two-step
// shape across three faces. The field priced every branch by hand
// seven faces deep before the word existed: the slide's own run rode
// FACE 319 -> 320 -> 321 (433 -> 399 -> 391M - two consecutive falls,
// -34 then -8), the climb's own run rode FACE 321 -> 322 -> 323 (391 ->
// 426 -> 480M - two consecutive rises, +35 then +54), and the swing
// rode twice - FACE 322 -> 323 -> 324 (426 -> 480 -> 449M, the rise
// traded seats with the fall) and FACE 323 -> 324 -> 325 (480 -> 449 ->
// 495M, the fall traded seats with the rise). The creep's word
// (v0.976.21) owns ONE rise step, the recession's word (v0.976.28)
// owns ONE fall step - the PAIR's own shape (the run, the swing) rode
// unnamed: one face cannot read persistence (the v0.471.0 law), and
// two steps cannot be read from two faces.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// CLIMB'S OWN RUN, fall then fall prices the SLIDE'S OWN RUN, a traded
// direction prices the SWING, a held step (any peak-to-peak zero)
// prices the honest silence (a held waterline is no direction - the
// bars never invent; the creep and recession family's own held law).
// The co-existence law rides by seat: the one-step words price each
// step one at a time (the creep's row and the recession's row already
// printed beside this wire), this word prices the PAIR's own shape -
// never a third retelling of a single step.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first). The fold receives the census's own images per face
// (stormcensus owns the rss peak - one-parser law: the same census
// runs over each face's own lines, never a fork; the SAME image the
// creep's and recession's wires already hold). No two-back face given
// -> no read (the carrier's own null pass); a peakless face (the
// gauge-less lens) prices no trend (the sparse law - the bars never
// invent).
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
 *   { back: {peakM}, prev: {peakM}, cur: {peakM} }
 * @returns {boolean}
 */
export function waterTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.peakM) && s.peakM >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the waterline's own two-step shape. The honest
 * null when the carrier rode no two-back face, a face's peak never
 * rode (the sparse lens), or a step held (no direction - the held
 * step is the family's own silence).
 *
 * @param {object|null} [e] the trend fold
 *   { back: {peakM}, prev: {peakM}, cur: {peakM} }
 * @returns {string|null} the row byte, or null
 */
export function waterTrendRow (e) {
  if (!waterTrendConsistent(e)) return null
  const { back, prev, cur } = e
  // the honest silences: a peakless face prices no trend (the sparse
  // law - the gauge-less lens owns no waterline)
  if (back.peakM === null || back.peakM === undefined) return null
  if (prev.peakM === null || prev.peakM === undefined) return null
  if (cur.peakM === null || cur.peakM === undefined) return null
  const first = prev.peakM - back.peakM
  const second = cur.peakM - prev.peakM
  const arc = `${back.peakM}M -> ${prev.peakM}M (${first >= 0 ? '+' : ''}${first}) -> ${cur.peakM}M (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  if (first > 0 && second > 0) {
    return `the waterline's own trend (v0.976.34): the rise ran two steps deep - ${arc} - the climb's own run (the creep's word prices each rise one step at a time - the run is the pair's own shape)`
  }
  if (first < 0 && second < 0) {
    return `the waterline's own trend (v0.976.34): the fall ran two steps deep - ${arc} - the slide's own run (the recession's word prices each fall one step at a time - the run is the pair's own shape)`
  }
  return `the waterline's own trend (v0.976.34): the waterline's own swing - ${arc} - the rise and the fall traded seats between the walks (the one-step words price each seat one at a time - the alternation is the pair's own shape)`
}
