// (v0.976.51) THE RELOG BOOK'S OWN ERA - the voice's own run recurrence,
// the relog book's own shape four faces deep. The field priced every
// branch by hand fifteen faces deep before the word existed (the voice,
// face by face, the frozen census's own arithmetic: 323 rode 6, 324
// rode 9, 325 rode 4, 326 rode 3, 327 rode 2, 328 rode 2, 329 rode 5,
// 330 rode 9, 331 rode 4, 332 rode 1, 333 rode 4, 334 rode 0, 335 rode
// 2, 336 rode 3, 337 rode 5 - the FADE'S OWN ERA rode once 324/325/326/
// 327 (9 -> 4 -> 3 -> 2, three falls three steps deep - the drain held
// three steps and no word named it), the SWELL'S OWN ERA rode once
// 334/335/336/337 (0 -> 2 -> 3 -> 5, three rises three steps deep - the
// voice's own birth window rode the era on FACE 337's own dispatched
// chain, the word's own birth face), and every other arc rode the
// honest silence ten times - the bars never invent the era the field
// never rode).
//
// The seat law: the relog's own bill (v0.715.0) prices the book WITHIN
// the face, the echo's word (v0.976.38) prices each recurrence one at
// a time, the trend's word (v0.976.42) prices the PAIR's own shape
// (the swell's own run, the fade's own run, the swing, the held
// silence) - and the voice's own RUN - the voice holding three steps
// of the same direction - rode unnamed. One face cannot read
// persistence (the v0.471.0 law), two faces cannot read a run, and
// three faces cannot read the run's own third step: this word prices
// the run's own recurrence.
//
// The branch law: ONE ERA ONE WORD - three rises three steps deep
// prices the SWELL'S OWN ERA, three falls three steps deep prices the
// FADE'S OWN ERA, and every arc a swing or a held step rode prices the
// honest silence (the voice never held the same direction three steps
// in the field's own arcs - the bars never invent the era the field
// never rode; the waterline's own era's own held law, v0.976.43).
//
// The carrier: decompose's deep-prior argv tail one seat deeper (the
// three-back face rides argv[6], nearest first - the grounddeep's own
// precedent, v0.976.26: the deep priors ride argv.slice(5), the era
// takes the second seat - the waterline's own era v0.976.43, the
// floor's own side era v0.976.48). The fold receives the census's own
// images per face (frozenCensus owns the relog count - one-parser law:
// the same census runs over each face's own lines, never a fork; the
// SAME images the echo's and the trend's wires already hold). No
// three-back face given -> no read (the carrier's own null pass).
//
// The co-existence law rides by seat: the bill prices the book within
// the face, the echo prices the voice's own recurrence one step at a
// time, the trend prices the PAIR's own shape, this word prices the
// RUN's own recurrence - never a second retelling of a single
// recurrence or a single pair. The byte-pin: the era row never speaks
// the trend's own words (no "own run", no swing) nor the echo's own
// words (no repeat, no return) - the seat-law tail names the neighbor
// seats, the names ride by law, the neighbor verdicts never ride.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold beside the trend's own wire.

import { relogTrendConsistent } from './relogtrend.mjs'

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The family's own fence composed
 * over both trios: all four faces must carry a non-negative integer
 * relog count.
 *
 * @param {object|null} [e] the era fold: { deep, back, prev, cur }
 *   per-face images { relogs }
 * @returns {boolean}
 */
export function relogEraConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const { deep, back, prev, cur } = e
  if (!deep || !back || !prev || !cur) return false
  return relogTrendConsistent({ back: deep, prev: back, cur: prev }) &&
    relogTrendConsistent({ back, prev, cur })
}

/**
 * The word - one line, the voice's own run recurrence. The honest null
 * when the fence fails, a step held (no direction - the family's own
 * held law), or the direction traded (the swing rode - the voice never
 * held the same direction three steps).
 *
 * @param {object|null} [e] the era fold { deep, back, prev, cur }
 *   per-face images { relogs }
 * @returns {string|null} the row byte, or null
 */
export function relogEraRow (e) {
  if (!relogEraConsistent(e)) return null
  const { deep, back, prev, cur } = e
  const first = back.relogs - deep.relogs
  const second = prev.relogs - back.relogs
  const third = cur.relogs - prev.relogs
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0 || third === 0) return null
  const arc = `${deep.relogs} -> ${back.relogs} (${first >= 0 ? '+' : ''}${first}) -> ${prev.relogs} (${second >= 0 ? '+' : ''}${second}) -> ${cur.relogs} (${third >= 0 ? '+' : ''}${third})`
  const tail = '(the trend prices each run one pair at a time, the echo prices each recurrence one at a time - the era is the run\'s own recurrence)'
  // three rises three steps deep - the voice held the same climb
  if (first > 0 && second > 0 && third > 0) {
    return `the relog book's own era (v0.976.51): the voice's rise ran three steps deep - ${arc} - the swell's own era ${tail}`
  }
  // three falls three steps deep - the drain held the same slide
  if (first < 0 && second < 0 && third < 0) {
    return `the relog book's own era (v0.976.51): the voice's fall ran three steps deep - ${arc} - the fade's own era ${tail}`
  }
  // the swing rode - the voice never held three steps (the bars never
  // invent the era the field never rode)
  return null
}
