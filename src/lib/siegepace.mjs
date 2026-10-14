// (v0.976.32) THE SIEGE'S OWN PACE - the deaths' own rate step across
// faces. The field priced it by hand two faces deep before the word
// existed: FACE 323 = 38507508101's clock rode 0.58 deaths/min over
// 12.0 min of timed span (7 deaths), then FACE 324 = 38512359636's
// clock rode 1.22 deaths/min over 9.0 min (11 deaths) - the siege's
// own pressure MORE THAN DOUBLED between the walks while the max
// burst alone (2 -> 5 in 30s) underpriced the sustained strike. The
// within-face siege pace row (v0.680.0) prices the sustained pressure
// the max burst misses; the pace's own CROSS-FACE step - the pressure
// growing or easing between the walks - rode unnamed: one face cannot
// read persistence (the v0.471.0 law), and the pace step is the
// pressure's own subject.
//
// The branch law: ONE DIRECTION ONE BRANCH - a risen pace prices the
// SURGE, a fallen pace prices the EBB, a held pace prices the honest
// silence (the hold is no step's subject). The sparse face prices the
// honest silence too: a pace the clock cannot own (fewer than two
// timed deaths - no span, no density) steps nothing (the bars never
// invent). The word never double-prices: the death clock prices the
// span and the burst, the siege pace row prices the within-face
// density, this word prices the STEP (cross-face) - co-existence by
// seat, never by duplication.
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19;
// the recession's carrier, v0.976.28; the crossing's carrier,
// v0.976.30). The fold receives the census's own images
// { deaths, spanS, pace } per face (sealDeathCensus owns the clock -
// one-parser law: the same census runs over the prior face's lines,
// never a fork; the SAME cells the siege pace row already prints).
// The pace rides its own cells' law: the density must be the deaths'
// own arithmetic over the span (the pair law - a pace that disagrees
// with its own cells lies, and the word never rides a lie).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the pace fold: { prev, cur } per-face
 *   clock images { deaths, spanS, pace }
 * @returns {boolean}
 */
export function siegePaceConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { deaths, spanS, pace } = s
    if (!Number.isInteger(deaths) || deaths < 0) return false
    if (!Number.isInteger(spanS) || spanS < 0) return false
    if (pace !== null && (typeof pace !== 'number' || !Number.isFinite(pace) || pace < 0)) return false
    // the pair law: the pace is the deaths' own density over the span -
    // null exactly when the span cannot price (no two timed deaths),
    // the cells' own arithmetic when it can
    if (pace === null && spanS !== 0) return false
    if (pace !== null) {
      if (spanS === 0) return false
      if (pace !== Number((deaths / (spanS / 60)).toFixed(2))) return false
    }
    return true
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the deaths' own rate step across faces. The
 * honest null when the fence fails, a face's pace never rode (the
 * sparse clock), or the pace HELD (the hold is no step's subject -
 * the branch law).
 *
 * @param {object|null} [e] the pace fold
 *   { prev: {deaths, spanS, pace}, cur: {deaths, spanS, pace} }
 * @returns {string|null} the row byte, or null
 */
export function siegePaceRow (e) {
  if (!siegePaceConsistent(e)) return null
  const { prev, cur } = e
  // the honest silences: a sparse clock prices no step (the bars
  // never invent)
  if (prev.pace === null || cur.pace === null) return null
  // the branch law: the surge is the risen pace, the ebb is the
  // fallen pace, a held pace prices the honest silence
  if (cur.pace > prev.pace) {
    return `the siege's own pace (v0.976.32): this face's ${cur.pace} deaths/min rode above the prior face's ${prev.pace} - the siege's own pressure grew between the walks (${cur.deaths} death(s) over ${cur.spanS}s vs ${prev.deaths} over ${prev.spanS}s - the sustained siege the max burst misses)`
  }
  if (cur.pace < prev.pace) {
    return `the siege's own pace (v0.976.32): this face's ${cur.pace} deaths/min rode below the prior face's ${prev.pace} - the siege's own pressure eased between the walks (${cur.deaths} death(s) over ${cur.spanS}s vs ${prev.deaths} over ${prev.spanS}s - the sustained siege the max burst misses)`
  }
  return null
}
