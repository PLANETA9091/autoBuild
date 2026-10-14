// (v0.976.40) THE UNDER'S OWN ECHO - the floor's own side recurrence.
// The field priced the side's persistence by hand three pairs deep
// before the word existed: FACE 325 = 38515694860's waterline rode
// 45M PAST the valve's own 450M floor (the peak 495M), then FACE 326
// = 38521191638 rode 45M UNDER (the peak 405M) - the under's own
// RETURN - and the under HELD: FACE 327 = 38524422893 rode 41M under
// (the peak 409M), FACE 328 = 38527778083 rode 33M under (the peak
// 417M) - the under's own REPEAT twice (45 -> 41, 41 -> 33). The
// crossing's word (v0.976.30) prices the STEP between the sides
// (under -> past the crossing, past -> under the retreat) and prices
// a held side the honest silence - the HELD SIDE's own recurrence
// rode unnamed: the under's own persistence is not a step's subject,
// it is the echo's own subject (the rescueecho's own precedent: the
// echo prices the state's recurrence, the step words price the
// transitions).
//
// The branch law: ONE SIDE ONE VOICE - a past prior face then an
// under face prices the UNDER'S OWN RETURN, an under prior face then
// an under face prices the UNDER'S OWN REPEAT; the release (under ->
// past) and the past's own rest (past -> past) price the honest
// silence (the release is not the subject - the under is; the
// rescueecho's own family law, v0.976.25). The under is the
// thin-approach class's own seat - the waterline below the valve's
// own floor, the arm never touched.
//
// The seat law: the crossing's word prices the STEP between the
// sides, the echo prices the SIDE's own recurrence - co-existence by
// seat never by duplication. The lens's own boundary law rides whole
// (the fence imported - never a re-declaration, the floor fiction
// lesson): past = margin <= 0, under = margin > 0, a moved floor
// prices nothing (the config's own story).
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0). The fold is the SAME fold the crossing's
// wire already builds (one-parser law: the same lens over each face's
// own lines, never a fork; the SAME images the crossing's row holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold beside the crossing's own wire.

import { floorCrossConsistent } from './floorcross.mjs'

/**
 * The word - one line, the under's own recurrence. The honest null
 * when the fold fails the family's fence, the release rode (the
 * under's own subject left), or the past's own rest rode.
 *
 * @param {object|null} [e] the crossing fold
 *   { prev: {marginValveM, valveFloorM, valveClosures},
 *     cur: {marginValveM, valveFloorM, valveClosures} }
 * @returns {string|null} the row byte, or null
 */
export function floorEchoRow (e) {
  if (!floorCrossConsistent(e)) return null
  const { prev, cur } = e
  const under = (m) => m > 0
  const past = (m) => m <= 0
  const tail = '(the crossing\'s word prices the step between the sides - the echo prices the side\'s own recurrence, co-existence by seat never by duplication)'
  if (past(prev.marginValveM) && under(cur.marginValveM)) {
    return `the floor's own side echo (v0.976.40): the prior face rode ${Math.abs(prev.marginValveM)}M past, this face rode ${cur.marginValveM}M under - the under's own return ${tail}`
  }
  if (under(prev.marginValveM) && under(cur.marginValveM)) {
    return `the floor's own side echo (v0.976.40): ${prev.marginValveM}M under rode the prior face, ${cur.marginValveM}M under this face - the under's own repeat ${tail}`
  }
  return null
}
