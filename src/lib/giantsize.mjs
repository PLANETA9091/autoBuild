// (v0.976.33) THE GIANT'S OWN SIZE - the giant's own depth step across
// faces. The field priced it by hand two faces deep before the word
// existed: FACE 313 = 38480563295-era log's giant rode 57526ms, then
// FACE 314's giant rode 75368ms - the stall's own depth GREW 17842ms
// between the walks - and the record's own echo came home later still:
// FACE 323's 45012ms giant eased the depth, then FACE 325 = 38515694860's
// giant rode 75350ms - 18ms shy of FACE 314's 75368ms record - the
// giants' own book holds a 75k class the within-face rows price one face
// at a time and the CROSS-FACE depth step rode unnamed. The seat
// (v0.974.27) prices the stall's threshold-crossing and names the gauge's
// own address; the echo (v0.976.19) prices the seat's cross-face WHERE
// (the same address recurring); the when (v0.976.17) prices the lane; the
// tail (v0.976.20) prices the drain. The HOW DEEP across faces - the
// stall's own amplitude step - is this word's own subject.
//
// The branch law: ONE DIRECTION ONE BRANCH - a deeper giant prices the
// GROWTH, a shallower giant prices the EASE, a held size prices the
// honest silence (the hold is no step's subject). The sparse giant book
// prices the honest silence too: a face whose max mainLate rode under
// the ring's own threshold owns no giant - its max is no giant's size,
// and a giant against no giant steps nothing (the bars never invent).
// The freeze law rides the family's own seat: a face the ring dumped
// has no giant's seat (the freeze row owns the dumped face's story) -
// the size word prices nothing across a dumped face either side.
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19; the
// recession's carrier, v0.976.28; the crossing's carrier, v0.976.30;
// the pace's carrier, v0.976.32). The fold receives the census's own
// images { giantMs, freezes } per face (stormcensus owns the heartbeat
// bookends, mainFreezeCensus owns the ring's voice - one-parser law:
// the same censuses run over the prior face's lines, never a fork; the
// SAME cells the seat and echo words already hold). The threshold rides
// the code's own constant BLACKBOX_FREEZE_MS (imported whole, never a
// re-declared number - the floor fiction lesson).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

import { BLACKBOX_FREEZE_MS } from './blackbox.mjs' // (v0.976.20) the ring's own threshold - the size's own gate prices against the code's own constant, never a re-declared number (the floor fiction lesson)

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the size fold: { prev, cur } per-face
 *   giant images { giantMs, freezes }
 * @returns {boolean}
 */
export function giantSizeConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { giantMs, freezes } = s
    if (!Number.isInteger(giantMs) || giantMs < 0) return false
    if (!Number.isInteger(freezes) || freezes < 0) return false
    return true
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the giant's own depth step across faces. The
 * honest null when the fence fails, either face owns no giant (the
 * sparse giant book - a max under the ring's own threshold is no
 * giant's size), either face's ring dumped (the freeze row owns the
 * story), or the size HELD (the hold is no step's subject - the
 * branch law).
 *
 * @param {object|null} [e] the size fold
 *   { prev: {giantMs, freezes}, cur: {giantMs, freezes} }
 * @returns {string|null} the row byte, or null
 */
export function giantSizeRow (e) {
  if (!giantSizeConsistent(e)) return null
  const { prev, cur } = e
  // the family's own seat law: a face the ring dumped has no giant's
  // seat - the freeze row owns their story, the size rides nothing
  if (prev.freezes > 0 || cur.freezes > 0) return null
  // the sparse giant book: a max under the threshold is no giant's
  // size - a giant against no giant steps nothing
  if (prev.giantMs < BLACKBOX_FREEZE_MS || cur.giantMs < BLACKBOX_FREEZE_MS) return null
  // the branch law: the growth is the deeper giant, the ease is the
  // shallower giant, a held size prices the honest silence
  if (cur.giantMs > prev.giantMs) {
    return `the giant's own size (v0.976.33): this face's ${cur.giantMs}ms giant rode ${cur.giantMs - prev.giantMs}ms deeper than the prior face's ${prev.giantMs}ms giant - the giant's own depth grew between the walks (the seat's own where is the echo's word, the lane's own when is the when's word - the size is this word's subject)`
  }
  if (cur.giantMs < prev.giantMs) {
    return `the giant's own size (v0.976.33): this face's ${cur.giantMs}ms giant rode ${prev.giantMs - cur.giantMs}ms shallower than the prior face's ${prev.giantMs}ms giant - the giant's own depth eased between the walks (the seat's own where is the echo's word, the lane's own when is the when's word - the size is this word's subject)`
  }
  return null
}
