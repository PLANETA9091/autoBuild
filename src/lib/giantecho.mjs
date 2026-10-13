// (v0.976.19) THE GIANT'S OWN ECHO - the seat's cross-face repeat. The
// seat (v0.974.27) prices the stall's gauge address per face and the
// when (v0.976.17) names its lane - but the seat's own recurrence rode
// unnamed: FACE 313's giant (57526ms, the mid third) and FACE 314's
// giant (75368ms, the late third) BOTH rode the same gauge address
// ts=501s - back-to-back faces, the same seat. One face cannot read
// persistence (the v0.471.0 law): the echo fold prices the repeat the
// reader hand-priced, over the two faces' own census images.
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0). The fold receives the census's own hb
// images - { giantTsS, maxMainLateMs, freezes } per face - never
// re-parses a line (the one-parser law: stormcensus owns the hb
// grammar, mainfreeze owns the ring's voice). The threshold stays in
// the wiring where it already lives for the current face's seat
// (BLACKBOX_FREEZE_MS imported whole, never forked - the floor fiction
// lesson); the fold prices the echo of the giants AS GIVEN.
//
// The silences: a dumped face prices no echo (the freeze row owns the
// story - either face), a seatless face prices no echo (the pair law:
// the address and the size are set by the same branch - one without
// the other lies), a mismatched address prices the honest silence (no
// echo - the seat rode once).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the echo fold: { prev, cur } per-face giant
 *   images { giantTsS, maxMainLateMs, freezes }
 * @returns {boolean}
 */
export function giantEchoConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { giantTsS, maxMainLateMs, freezes } = s
    const intOrNull = (v) => v === null || v === undefined || (Number.isInteger(v) && v >= 0)
    if (!intOrNull(giantTsS) || !intOrNull(maxMainLateMs)) return false
    // the pair rides together: the address and the size are set by the
    // same branch of the census - one without the other lies
    if ((giantTsS === null || giantTsS === undefined) !== (maxMainLateMs === null || maxMainLateMs === undefined)) return false
    // the freeze count rides a non-negative integer
    if (!Number.isInteger(freezes) || freezes < 0) return false
    return true
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the seat's cross-face repeat. The honest null
 * when either face's ring dumped (the freeze row owns the story),
 * either face's seat never rode, or the addresses mismatched (no echo
 * - the seat rode once).
 *
 * @param {object|null} [e] the echo fold
 *   { prev: {giantTsS, maxMainLateMs, freezes},
 *     cur: {giantTsS, maxMainLateMs, freezes} }
 * @returns {string|null} the row byte, or null
 */
export function giantEchoRow (e) {
  if (!giantEchoConsistent(e)) return null
  const { prev, cur } = e
  // the freeze row owns the dumped faces' story - a dumped face prices
  // no echo (either face, the same law the when word rode)
  if (prev.freezes > 0 || cur.freezes > 0) return null
  // the giant's seat must have ridden on BOTH faces (the pair law -
  // the census sets the pair by one branch, the wiring vets the
  // threshold; the fold prices the giants as given)
  if (prev.giantTsS === null || prev.giantTsS === undefined) return null
  if (cur.giantTsS === null || cur.giantTsS === undefined) return null
  // the echo: the same gauge address rode twice back-to-back - else
  // the honest silence (the seat rode once, no echo to price)
  if (prev.giantTsS !== cur.giantTsS) return null
  return `the giant's own echo (v0.976.19): the ts=${cur.giantTsS}s seat rode twice back-to-back - the prior face's ${prev.maxMainLateMs}ms giant and this face's ${cur.maxMainLateMs}ms giant share the same gauge address (the stall's own seat recurring across the walks)`
}
