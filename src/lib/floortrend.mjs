// (v0.976.41) THE FLOOR'S OWN SIDE TREND - the floor's own side shape
// across three faces. The field priced every branch by hand eleven
// faces deep before the word existed (the valve side, face by face:
// 319 under 20, 320 under 50, 321 under 59, 322 under 23, 323 past
// 32, 324 under 3, 325 past 45, 326 under 45, 327 under 41, 328 under
// 33, 329 under 11): the UNDER'S OWN HOLD rode four times (a repeat
// then a repeat - the under held three faces deep: 319/320/321,
// 320/321/322, 326/327/328, 327/328/329 - the word's own birth face),
// the UNDER'S OWN BOUNCE rode twice (a release then a return - the
// under left and came back one walk later: 322/323/324, 324/325/326),
// the UNDER'S OWN SETTLE rode once (a return then a repeat - the
// under arrived and held: 325/326/327), the UNDER'S OWN LEAVE rode
// once (a repeat then a release - the under held, then left:
// 321/322/323), and the UNDER'S OWN PASS rode once (a return then a
// release - the under arrived and left, never held: 323/324/325).
// The echo's word (v0.976.40) prices ONE step (the return, the
// repeat; the release and the past's own rest the honest silence) -
// the PAIR's own shape (the hold, the settle, the leave, the bounce,
// the pass) rode unnamed: one face cannot read persistence (the
// v0.471.0 law), and two steps cannot be read from two faces.
//
// The branch law: ONE SHAPE ONE WORD - a repeat then a repeat prices
// the UNDER'S OWN HOLD, a return then a repeat prices the UNDER'S OWN
// SETTLE, a repeat then a release prices the UNDER'S OWN LEAVE, a
// release then a return prices the UNDER'S OWN BOUNCE, a return then
// a release prices the UNDER'S OWN PASS, and every trio a rest step
// rode (the past's own persistence the field never held one walk,
// let alone two) prices the honest silence - the past's own rest is
// the echo's own silence, the bars never invent the unpriced shapes.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26; the watertrend's own, v0.976.34; the rescue
// book's own, v0.976.36; the kind's own, v0.976.39 - the two-back
// face rides argv[5], nearest first). The fold receives the lens's
// own images { marginValveM, valveFloorM, valveClosures } per face
// (valveMarginJoin owns the margin - one-parser law: the same lens
// runs over each face's own lines, never a fork; the SAME images the
// crossing's and the echo's wires already hold). No two-back face
// given -> no read (the carrier's own null pass); a gauge-less face
// prices no trend (the sparse law - the bars never invent).
//
// The co-existence law rides by seat: the crossing prices the STEP
// between the sides, the echo prices each step's recurrence one at a
// time (its row already printed beside this wire), this word prices
// the PAIR's own shape - never a second retelling of a single step.
// The fence rides the family's own law imported whole (the
// floorcross's own fence composed over both step pairs - never a
// re-declaration, the floor fiction lesson; a moved floor prices
// nothing across the whole trio).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold beside the echo's own wire.

import { floorCrossConsistent } from './floorcross.mjs'

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The family's own fence composed
 * over both step pairs: all three faces must carry integer margins,
 * a positive floor and a non-negative closure count, and the floor
 * must hold still across the whole trio.
 *
 * @param {object|null} [e] the trend fold: { back, prev, cur }
 *   per-face floor images { marginValveM, valveFloorM, valveClosures }
 * @returns {boolean}
 */
export function floorTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const { back, prev, cur } = e
  if (!back || !prev || !cur) return false
  return floorCrossConsistent({ prev: back, cur: prev }) &&
    floorCrossConsistent({ prev, cur })
}

/**
 * The word - one line, the floor's own two-step side shape. The
 * honest null when the fence fails, or a rest step rode (the past's
 * own persistence is the echo's own silence - the bars never invent
 * the unpriced shapes).
 *
 * @param {object|null} [e] the trend fold { back, prev, cur }
 *   per-face floor images { marginValveM, valveFloorM, valveClosures }
 * @returns {string|null} the row byte, or null
 */
export function floorTrendRow (e) {
  if (!floorTrendConsistent(e)) return null
  const { back, prev, cur } = e
  // the lens's own boundary law rides (the crossing's own predicates):
  // under = margin > 0, past = margin <= 0 - a peak exactly at the
  // line is never under. The step names are the echo's own law (the
  // same boundary, never a fork): repeat (under -> under), return
  // (past -> under), release (under -> past), rest (past -> past).
  const under = (m) => m > 0
  const side = (m) => under(m) ? `${m}M under` : `${Math.abs(m)}M past`
  const step = (a, b) => {
    const au = under(a)
    const bu = under(b)
    if (au && bu) return 'repeat'
    if (!au && bu) return 'return'
    if (au && !bu) return 'release'
    return 'rest'
  }
  const s1 = step(back.marginValveM, prev.marginValveM)
  const s2 = step(prev.marginValveM, cur.marginValveM)
  const arc = `${side(back.marginValveM)} -> ${side(prev.marginValveM)} -> ${side(cur.marginValveM)}`
  // a repeat then a repeat - the under held three faces deep
  if (s1 === 'repeat' && s2 === 'repeat') {
    return `the floor's own side trend (v0.976.41): the under held three faces deep - ${arc} - the under's own hold (the echo prices each repeat one step at a time - the hold is the pair's own shape)`
  }
  // a return then a repeat - the under arrived and held
  if (s1 === 'return' && s2 === 'repeat') {
    return `the floor's own side trend (v0.976.41): the under arrived and held - ${arc} - the under's own settle (the echo prices the return and the repeat one step at a time - the settle is the pair's own shape)`
  }
  // a repeat then a release - the under held, then left
  if (s1 === 'repeat' && s2 === 'release') {
    return `the floor's own side trend (v0.976.41): the under held, then left - ${arc} - the under's own leave (the echo prices the repeat and the release one step at a time - the leave is the pair's own shape)`
  }
  // a release then a return - the under left and came back one walk later
  if (s1 === 'release' && s2 === 'return') {
    return `the floor's own side trend (v0.976.41): the under left and returned one walk later - ${arc} - the under's own bounce (the echo prices the release and the return one step at a time - the bounce is the pair's own shape)`
  }
  // a return then a release - the under arrived and left, never held
  if (s1 === 'return' && s2 === 'release') {
    return `the floor's own side trend (v0.976.41): the under arrived and left, never held - ${arc} - the under's own pass (the echo prices the return and the release one step at a time - the pass is the pair's own shape)`
  }
  // every trio a rest step rode (or the fence passed but the shape is
  // the field's own unborn) prices the honest silence - the bars never
  // invent
  return null
}
