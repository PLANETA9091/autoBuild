// (v0.976.48) THE FLOOR'S OWN SIDE ERA - the side's own run, the
// floor's own shape four faces deep. The field priced every branch by
// hand sixteen faces deep before the word existed (the valve side,
// face by face: 319 under 20, 320 under 50, 321 under 59, 322 under
// 23, 323 past 32, 324 under 3, 325 past 45, 326 under 45, 327 under
// 41, 328 under 33, 329 under 11, 330 past 74, 331 under 50, 332
// under 41, 333 under 34, 334 under 30 - the UNDER'S OWN ERA rode
// three times (the side held four faces deep: 319/320/321/322 the
// run's own first walk, 326/327/328/329 the word's own birth window,
// 331/332/333/334 the storm's under returning and holding - the
// freshest chain rode the era on the word's own birth face), the
// PAST'S OWN ERA never rode (the past's own persistence the field
// never held one walk, let alone three steps), and every mixed arc
// rode the honest silence ten times - the bars never invent the era
// the field never rode).
//
// The seat law: the crossing's word (v0.976.30) prices the STEP
// between the sides, the echo's word (v0.976.40) prices each step's
// own recurrence one at a time, the trend's word (v0.976.41) prices
// the PAIR's own shape (the hold, the settle, the leave, the bounce,
// the pass) - and the SIDE's own RUN - the side holding four faces
// deep, three steps of the same ground - rode unnamed. One face
// cannot read persistence (the v0.471.0 law), two faces cannot read
// a run, and three faces cannot read the run's own third step: this
// word prices the side's own run.
//
// The branch law: ONE ERA ONE WORD - three repeats three steps deep
// prices the UNDER'S OWN ERA, three rests three steps deep prices the
// PAST'S OWN ERA, and every arc a side change rode prices the honest
// silence (the run at most held within the pair's own seats - the
// bars never invent the era the field never rode).
//
// The carrier: decompose's deep-prior argv tail one seat deeper (the
// three-back face rides argv[6], nearest first - the grounddeep's own
// precedent, v0.976.26: the deep priors ride argv.slice(5), the era
// takes the second seat - the waterline's own era, v0.976.43). The
// fold receives the lens's own images { marginValveM, valveFloorM,
// valveClosures } per face (valveMarginJoin owns the margin -
// one-parser law: the same lens runs over each face's own lines,
// never a fork; the SAME images the crossing's, the echo's and the
// trend's wires already hold). No three-back face given -> no read
// (the carrier's own null pass); a gauge-less face prices no era (the
// sparse law - the bars never invent).
//
// The co-existence law rides by seat: the crossing prices the STEP,
// the echo prices the side's own recurrence one step at a time, the
// trend prices the PAIR's own shape, this word prices the SIDE's own
// RUN - never a second retelling of a single step or a single pair.
// The fence rides the family's own law imported whole (the floor
// trend's own fence composed over both trios - never a
// re-declaration, the floor fiction lesson; a moved floor prices
// nothing across the whole quartet). The byte-pin: the era row never
// speaks the trend's own verdict words (no hold, no settle, no leave,
// no bounce, no pass) nor the echo's own words (no return, no
// repeat, no release, no rest) - the seat-law tail names the neighbor
// seats, the names ride by law, the neighbor verdicts never ride.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold beside the trend's own wire.

import { floorTrendConsistent } from './floortrend.mjs'

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The family's own fence composed
 * over both trios: all four faces must carry integer margins, a
 * positive floor and a non-negative closure count, and the floor must
 * hold still across the whole quartet.
 *
 * @param {object|null} [e] the era fold: { deep, back, prev, cur }
 *   per-face floor images { marginValveM, valveFloorM, valveClosures }
 * @returns {boolean}
 */
export function floorEraConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const { deep, back, prev, cur } = e
  if (!deep || !back || !prev || !cur) return false
  return floorTrendConsistent({ back: deep, prev: back, cur: prev }) &&
    floorTrendConsistent({ back, prev, cur })
}

/**
 * The word - one line, the floor's own side run. The honest null when
 * the fence fails, or a side change rode (the mixed arc - the bars
 * never invent the era the field never rode).
 *
 * @param {object|null} [e] the era fold { deep, back, prev, cur }
 *   per-face floor images { marginValveM, valveFloorM, valveClosures }
 * @returns {string|null} the row byte, or null
 */
export function floorEraRow (e) {
  if (!floorEraConsistent(e)) return null
  const { deep, back, prev, cur } = e
  // the lens's own boundary law rides (the crossing's own predicates,
  // never a fork): under = margin > 0, past = margin <= 0 - a peak
  // exactly at the line is never under.
  const under = (m) => m > 0
  const side = (m) => under(m) ? `${m}M under` : `${Math.abs(m)}M past`
  const arc = `${side(deep.marginValveM)} -> ${side(back.marginValveM)} -> ${side(prev.marginValveM)} -> ${side(cur.marginValveM)}`
  const allUnder = [deep, back, prev, cur].every((f) => under(f.marginValveM))
  const allPast = [deep, back, prev, cur].every((f) => !under(f.marginValveM))
  const tail = '(the crossing prices the step, the echo prices the side\'s own recurrence, the trend prices the pair\'s own shape - this word prices the side\'s own run, co-existence by seat never by duplication)'
  // three repeats three steps deep - the under's own era
  if (allUnder) {
    return `the floor's own side era (v0.976.48): the under ran three steps deep - ${arc} - the under's own era ${tail}`
  }
  // three rests three steps deep - the past's own era
  if (allPast) {
    return `the floor's own side era (v0.976.48): the past ran three steps deep - ${arc} - the past's own era ${tail}`
  }
  // the side change rode - the era never held three steps (the bars
  // never invent the era the field never rode)
  return null
}
