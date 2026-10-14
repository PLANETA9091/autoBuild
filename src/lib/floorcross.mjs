// (v0.976.30) THE FLOOR'S OWN CROSSING - the valve margin's own
// cross-face step. The field priced it by hand two faces deep before
// the word existed: FACE 322 = 38504523787's lens rode the
// thin-approach class (rss peak 427M, 23M UNDER the 450M valve floor,
// the arm never touched), then FACE 323 = 38507508101's lens rode the
// silent cross (rss peak 482M, 32M PAST the floor, the arm ridden 31
// gauges and the valve never spoke) - the waterline STEPPED OVER the
// valve's own line between the walks while the valve's own voice
// stayed silent. The within-face lens prices the peak's own seat
// (holds / holds thin / the arm is ridden); the creep and recession
// words price the heartbeat-lens waterline's own step; the CROSS-FACE
// story of the floor relation itself - under became past - rode
// unnamed: one face cannot read persistence (the v0.471.0 law), and
// the crossing is the floor's own subject.
//
// The branch law: ONE SIDE ONE STEP - under -> past prices the
// CROSSING, past -> under prices the RETREAT, a held side prices the
// honest silence (neither step is the subject). The lens's own
// boundary law rides: past = margin <= 0 (the lens counts peak >=
// floor as the arm's own seat - a peak exactly at the line is never
// under), under = margin > 0. The word never double-prices: the
// silent cross (v0.976.3) owns the RIDE (within-face, residency +
// silence), this word owns the STEP (cross-face, the sign's own
// flip) - co-existence by seat, never by duplication.
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19;
// the recession's carrier, v0.976.28). The fold receives the lens's
// own images { marginValveM, valveFloorM, valveClosures } per face
// (valveMarginJoin owns the margin - one-parser law: the same lens
// runs over the prior face's lines, never a fork; the SAME images
// the margin row already holds). The floors must HOLD STILL across
// the pair - a moved floor is the config's own story, never the
// waterline's step (the fence's own law). The valve's voice rides
// the row as context bytes (co-existence reported, causation never
// guessed - the v0.471.0 idiom).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the crossing fold: { prev, cur } per-face
 *   floor images { marginValveM, valveFloorM, valveClosures }
 * @returns {boolean}
 */
export function floorCrossConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { marginValveM, valveFloorM, valveClosures } = s
    if (!Number.isInteger(marginValveM)) return false // any sign - the past side rides negative
    if (!Number.isInteger(valveFloorM) || valveFloorM <= 0) return false
    if (!Number.isInteger(valveClosures) || valveClosures < 0) return false
    return true
  }
  if (!faceOk(e.prev) || !faceOk(e.cur)) return false
  // the floors must hold still - a moved floor is the config's own
  // story, never the waterline's own step
  if (e.prev.valveFloorM !== e.cur.valveFloorM) return false
  return true
}

/**
 * The word - one line, the valve floor's cross-face step. The honest
 * null when the fence fails, a face's margin never rode (a
 * gauge-less lens), or the margin HELD ITS SIDE (the hold is no
 * step's subject - the branch law). The lens's own boundary law
 * rides: past = margin <= 0, under = margin > 0.
 *
 * @param {object|null} [e] the crossing fold
 *   { prev: {marginValveM, valveFloorM, valveClosures},
 *     cur: {marginValveM, valveFloorM, valveClosures} }
 * @returns {string|null} the row byte, or null
 */
export function floorCrossRow (e) {
  if (!floorCrossConsistent(e)) return null
  const { prev, cur } = e
  const under = (m) => m > 0
  const past = (m) => m <= 0
  // the branch law: the crossing is under -> past, the retreat is
  // past -> under, a held side prices the honest silence
  if (under(prev.marginValveM) && past(cur.marginValveM)) {
    return `the floor's own crossing (v0.976.30): the margin's own step crossed the valve's own floor between the walks - this face's ${Math.abs(cur.marginValveM)}M past rode against the prior face's ${prev.marginValveM}M under - the waterline stepped over the valve's own ${cur.valveFloorM}M line (the valve's own voice: ${prev.valveClosures} closure(s) prior, ${cur.valveClosures} this face)`
  }
  if (past(prev.marginValveM) && under(cur.marginValveM)) {
    return `the floor's own crossing (v0.976.30): the margin's own step retreated behind the valve's own floor between the walks - this face's ${cur.marginValveM}M under rode against the prior face's ${Math.abs(prev.marginValveM)}M past - the waterline stepped back behind the valve's own ${cur.valveFloorM}M line (the valve's own voice: ${prev.valveClosures} closure(s) prior, ${cur.valveClosures} this face)`
  }
  return null
}
