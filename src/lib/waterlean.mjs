// (v0.976.36) THE PAIR'S OWN LEAN - the waterline's own proportion
// between the two steps the trend's word already prices. The field
// priced the gap by hand before the word existed: FACE 326 = 38521191638
// rode the swing 449 -> 495 (+46) -> 405 (-90) - the fall dug almost
// twice the rise's water, and the trend's own row (v0.976.34) named
// the direction's shape and held its silence on the size. The lean
// prices the SIZE: |second| against |first| - the pair's own deepening
// (the second step dug the deeper water), the pair's own easing (the
// second step softened), or the even pair (the balance's own seat).
// The lean is shape-agnostic by law: the run and the swing ride the
// same proportion (the climb's own run 321 -> 323 rode +35 then +54 -
// the deepening inside the run; the slide's own run 319 -> 321 rode
// -34 then -8 - the easing inside the slide).
//
// The seat law: the trend's word prices the DIRECTION, the lean prices
// the SIZE - co-existence by seat never by duplication (the one-step
// words price each step one at a time, the trend prices the pair's
// own shape, the lean prices the pair's own proportion - four seats,
// one waterline).
//
// The fence rides the family's own law imported whole
// (waterTrendConsistent - never a re-declaration, the floor fiction
// lesson). The fold receives the census's own images per face (the
// SAME fold the trend's wire already builds - one-parser law, never a
// fork). A held pair (any step zero) prices no lean - the trend's own
// silence owns that seat (a zero step has no size worth naming - the
// bars never invent).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold beside the trend's own wire.

import { waterTrendConsistent } from './watertrend.mjs'

/**
 * The word - one line, the pair's own proportion. The honest null when
 * the fold fails the family's fence, or a step held (the trend's own
 * silence owns the held seat).
 *
 * @param {object|null} [e] the trend fold
 *   { back: {peakM}, prev: {peakM}, cur: {peakM} }
 * @returns {string|null} the row byte, or null
 */
export function waterLeanRow (e) {
  if (!waterTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.peakM - back.peakM
  const second = cur.peakM - prev.peakM
  // a held pair is the trend's own silence - the lean prices no zero
  // step (the family's own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const a = Math.abs(first)
  const b = Math.abs(second)
  const deep = b - a
  if (deep > 0) {
    return `the waterline's own lean (v0.976.36): ${a} then ${b} - the second step dug the deeper water (the pair's own deepening - the trend's word prices the direction, the lean prices the size)`
  }
  if (deep < 0) {
    return `the waterline's own lean (v0.976.36): ${a} then ${b} - the second step eased (the pair's own easing - the trend's word prices the direction, the lean prices the size)`
  }
  return `the waterline's own lean (v0.976.36): ${a} against ${a} - the even pair (the balance's own seat - the size never leaned)`
}
