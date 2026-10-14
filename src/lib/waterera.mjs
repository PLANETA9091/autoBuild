// (v0.976.43) THE WATERLINE'S OWN ERA - the run's own recurrence, the
// waterline's own shape four faces deep. The field priced every
// branch by hand twelve faces deep before the word existed (the rss
// peaks, face by face: 319 433M, 320 399M, 321 391M, 322 426M, 323
// 480M, 324 449M, 325 495M, 326 405M, 327 409M, 328 417M, 329 439M,
// 330 525M): the CLIMB'S OWN ERA rode twice - three rises three steps
// deep (the run riding the trend's own row two faces straight:
// 326/327/328/329 the era's own birth arc 405 -> 409 -> 417 -> 439M,
// then 327/328/329/330 the era's own second walk 409 -> 417 -> 439 ->
// 525M - the swing era died at three and the climb ran away); the
// SLIDE'S OWN ERA never rode (the slide's run rode once, 319/320/321
// 433 -> 399 -> 391M, and the swing took the walk after); every mixed
// arc rode nine times (319/320/321/322 through 325/326/327/328 - the
// run at most once per arc, the swing interrupting). The trend's word
// (v0.976.34) prices ONE pair (two steps, the run or the swing) - the
// RUN's own persistence (a run riding two faces straight, three steps
// deep) rode unnamed: one face cannot read persistence (the v0.471.0
// law), two faces cannot read a run, and two steps cannot be read
// from two faces.
//
// The branch law: ONE ERA ONE WORD - three rises three steps deep
// prices the CLIMB'S OWN ERA, three falls three steps deep prices the
// SLIDE'S OWN ERA, and every arc a swing or a held step rode (the run
// at most once, the direction never held three steps) prices the
// honest silence - the bars never invent the era the field never
// rode.
//
// The carrier: decompose's deep-prior argv tail one seat deeper (the
// three-back face rides argv[6], nearest first - the grounddeep's own
// precedent, v0.976.26: the deep priors ride argv.slice(5), the era
// takes the second seat). The fold receives the census's own peak
// images per face (stormcensus owns the rss peak - one-parser law:
// the same census runs over each face's own lines, never a fork; the
// SAME images the trend's and the lean's wires already hold). No
// three-back face given -> no read (the carrier's own null pass); a
// peakless face prices no era (the sparse law - the bars never
// invent).
//
// The co-existence law rides by seat: the creep prices ONE rise, the
// recession prices ONE fall, the trend prices the PAIR's own shape
// (the run, the swing), the lean prices the pair's own size, this
// word prices the RUN's own recurrence - never a second retelling of
// a single step or a single pair. The fence rides the family's own
// law imported whole (the watertrend's own fence composed over both
// trios - never a re-declaration; a peakless face prices nothing
// across the whole arc).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold beside the trend's own wire.

import { waterTrendConsistent } from './watertrend.mjs'

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The family's own fence composed
 * over both trios: all four faces must carry a non-negative integer
 * peak.
 *
 * @param {object|null} [e] the era fold: { deep, back, prev, cur }
 *   per-face images { peakM }
 * @returns {boolean}
 */
export function waterEraConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const { deep, back, prev, cur } = e
  if (!deep || !back || !prev || !cur) return false
  return waterTrendConsistent({ back: deep, prev: back, cur: prev }) &&
    waterTrendConsistent({ back, prev, cur })
}

/**
 * The word - one line, the waterline's own run recurrence. The honest
 * null when the fence fails, a face's peak never rode (the sparse
 * lens), a step held (no direction), or the direction traded (the
 * swing rode - the run never held three steps).
 *
 * @param {object|null} [e] the era fold { deep, back, prev, cur }
 *   per-face images { peakM }
 * @returns {string|null} the row byte, or null
 */
export function waterEraRow (e) {
  if (!waterEraConsistent(e)) return null
  const { deep, back, prev, cur } = e
  // the honest silences: a peakless face prices no era (the sparse
  // law - the gauge-less lens owns no waterline)
  for (const f of [deep, back, prev, cur]) {
    if (f.peakM === null || f.peakM === undefined) return null
  }
  const first = back.peakM - deep.peakM
  const second = prev.peakM - back.peakM
  const third = cur.peakM - prev.peakM
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0 || third === 0) return null
  const arc = `${deep.peakM}M -> ${back.peakM}M (${first >= 0 ? '+' : ''}${first}) -> ${prev.peakM}M (${second >= 0 ? '+' : ''}${second}) -> ${cur.peakM}M (${third >= 0 ? '+' : ''}${third})`
  // three rises three steps deep - the run rode two faces straight
  if (first > 0 && second > 0 && third > 0) {
    return `the waterline's own era (v0.976.43): the rise ran three steps deep - ${arc} - the climb's own era (the trend prices each run one pair at a time - the era is the run's own shape)`
  }
  // three falls three steps deep - the slide's own era
  if (first < 0 && second < 0 && third < 0) {
    return `the waterline's own era (v0.976.43): the fall ran three steps deep - ${arc} - the slide's own era (the trend prices each run one pair at a time - the era is the run's own shape)`
  }
  // the swing rode - the run never held three steps (the bars never
  // invent the era the field never rode)
  return null
}
