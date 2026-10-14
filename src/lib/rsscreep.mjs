// (v0.976.21) THE RSS'S OWN CREEP - the waterline's cross-face step.
// The field priced it by hand three faces deep before the word existed:
// FACE 312's silent cross rode 500M, FACE 313's 511M, FACE 314's 546M -
// the fleet's own waterline ROSE across the walks while the allocvalve
// never spoke (0 CLOSED 0 OPEN, the allocvalve lines 0 - the creep the
// valve's own silence hid; the silent cross prices the peak against the
// floors within the face, the BETWEEN-faces step rode unnamed). The
// census's own rss.peakM already holds every face's waterline - the
// step prices the cross-face read the single face's lens cannot see
// (one face cannot read persistence, the v0.471.0 law).
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19).
// The fold receives the census's own images - { peakM, valveClosures }
// per face (stormcensus owns the rss peak, one-parser law: never
// re-parsed here) - and prices the step the valve's voice cannot name.
//
// The silences: a peakless face prices no creep (no emitters rode the
// face), a held-or-fallen waterline prices the honest silence (the
// creep is the RISE - the fleet's own floor rose between the walks;
// a fall is the waterline's own recovery, the honest null). The
// valve's voice rides the row as context bytes - the creep priced
// regardless, the silences named (the row never guesses causation:
// co-existence reported, the v0.471.0 idiom).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the creep fold: { prev, cur } per-face
 *   waterline images { peakM, valveClosures }
 * @returns {boolean}
 */
export function rssCreepConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { peakM, valveClosures } = s
    if (!Number.isInteger(peakM) || peakM < 0) return false
    if (!Number.isInteger(valveClosures) || valveClosures < 0) return false
    return true
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the waterline's cross-face rise. The honest
 * null when either face's peak never rode (no emitters), or the
 * waterline held or fell (no creep - the rise is the subject).
 *
 * @param {object|null} [e] the creep fold
 *   { prev: {peakM, valveClosures}, cur: {peakM, valveClosures} }
 * @returns {string|null} the row byte, or null
 */
export function rssCreepRow (e) {
  if (!rssCreepConsistent(e)) return null
  const { prev, cur } = e
  // the honest silences: a peakless face prices no creep
  if (prev.peakM === null || prev.peakM === undefined) return null
  if (cur.peakM === null || cur.peakM === undefined) return null
  // the creep is the RISE: a held-or-fallen waterline prices the
  // honest silence (the fall is the waterline's own recovery)
  if (cur.peakM <= prev.peakM) return null
  return `the rss's own creep (v0.976.21): this face's peak ${cur.peakM}M rode ${cur.peakM - prev.peakM}M above the prior face's ${prev.peakM}M peak - the waterline rose between the walks (the valve's own voice: ${prev.valveClosures} closure(s) prior, ${cur.valveClosures} this face)`
}
