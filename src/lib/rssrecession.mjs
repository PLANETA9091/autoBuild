// (v0.976.28) THE RSS'S OWN RECESSION - the waterline's cross-face
// fall. The field priced it by hand two faces deep before the word
// existed: FACE 319's peak 433M (the creep's own second rise, 427 ->
// 428 -> 433M the climb), then FACE 320's 399M (-34M) and FACE 321's
// 391M (-8M) - TWO consecutive falls, the waterline giving back the
// climb and dipping BELOW the pre-climb floor (427M -> 391M) - while
// the creep's word priced both falls the honest null (its own header
// law: a held-or-fallen waterline prices the silence - the RISE is
// the creep's subject). The between-faces FALL rode unnamed: one
// face cannot read persistence (the v0.471.0 law), and the recession
// is the fall's own subject - the recovery the creep's own header
// named but never priced.
//
// The branch law: ONE DIRECTION ONE WORD - the creep's word (v0.976.21)
// owns the rise, this word owns the fall, a held waterline prices the
// honest silence both words ride (neither direction is the subject).
// The words never double-price a pair: a rise is the creep's seat, a
// fall is the recession's seat, co-existence by direction never by
// duplication.
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19).
// The fold receives the census's own images { peakM, valveClosures }
// per face (stormcensus owns the rss peak - one-parser law, never
// re-parsed here; the SAME images the creep's wire already holds).
// The valve's voice rides the row as context bytes (co-existence
// reported, causation never guessed - the v0.471.0 idiom): FACE
// 321's own fall rode the valve's RETURN (1 closure(s), the queue-
// pressure arm's strike 1) - the recession priced regardless.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the recession fold: { prev, cur } per-face
 *   waterline images { peakM, valveClosures }
 * @returns {boolean}
 */
export function rssRecessionConsistent (e) {
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
 * The word - one line, the waterline's cross-face fall. The honest
 * null when the fence fails, a face's peak never rode (no emitters),
 * or the waterline HELD OR ROSE (the hold is neither word's subject,
 * the rise belongs to the creep's word - the branch law).
 *
 * @param {object|null} [e] the recession fold
 *   { prev: {peakM, valveClosures}, cur: {peakM, valveClosures} }
 * @returns {string|null} the row byte, or null
 */
export function rssRecessionRow (e) {
  if (!rssRecessionConsistent(e)) return null
  const { prev, cur } = e
  // the honest silences: a peakless face prices no recession
  if (prev.peakM === null || prev.peakM === undefined) return null
  if (cur.peakM === null || cur.peakM === undefined) return null
  // the branch law: the recession is the FALL - a held-or-risen
  // waterline prices the honest silence (the hold is neither word's
  // subject, the rise is the creep's own seat, v0.976.21)
  if (cur.peakM >= prev.peakM) return null
  return `the rss's own recession (v0.976.28): this face's peak ${cur.peakM}M rode ${prev.peakM - cur.peakM}M below the prior face's ${prev.peakM}M peak - the waterline fell between the walks (the recovery is the fall's own name - the rise belongs to the creep's word; the valve's own voice: ${prev.valveClosures} closure(s) prior, ${cur.valveClosures} this face)`
}
