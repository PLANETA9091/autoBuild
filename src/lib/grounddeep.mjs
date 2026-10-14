// (v0.976.26) THE GROUND'S OWN DEEP ECHO - the nest's own repeat past
// the adjacent face. The one-face echo (v0.976.23) prices the nest's
// ground recurring across BACK-TO-BACK faces - and the field priced
// its honest silences three faces running on the shore the census
// kept re-reading: FACE 317's drowned grounds ([-143,395] x5,
// [-148,410] x3, [-168,410] x1, [-128,397] x1 - the Drowned's own
// shore), then FACE 318's single [-102,363] (dx 35 from the nearest
// 317 ground), FACE 319's single [-127,436] (dz 45), and FACE 320's
// [-137,391] x1 (Drowned:1) - which MISSED the adjacent face and the
// two-back face both, yet rode FACE 317's own [-143,395] x5 at dx
// 6 / dz 4: the SAME Drowned shore taking the drowners across three
// walks, the nest's own ground recurring across the SKIPPED walks.
// The one-face carrier cannot see past the gap face (the v0.471.0
// one-face law) - the deep ride rode unnamed.
//
// The carrier: decompose's prior-face argument EXTENDED - the deep
// priors ride the argv tail (each an older face's log, nearest
// first: argv[5] is the two-back face, argv[6] the three-back face,
// ...). The fold receives the census's own images per face ({ 
// combatDeaths, blind, grounds }, the grounds the census's own +-12
// join already priced - deathGrounds owns the died-line grammar, the
// same parser runs over every prior face's lines, never a fork).
//
// The branch law: a ground that rides the ADJACENT face's ground
// belongs to the one-face echo (v0.976.23) - never re-priced here
// (one row never both, the seat/riders law's own idiom). This word
// prices only the DEEP rides: grounds that missed the adjacent face
// yet rode an older face's ground, the nearest older face first (the
// census's own greedy first-fit law across the deep priors' own
// order). The radius is the census's own DEATH_GROUND_RADIUS
// imported whole - never forked; the ground is a REGION, not a
// resource.
//
// The silences: no deep priors given prices no read (the carrier's
// own null pass - the dispatched faces ride two argv logs and the
// deep echo stays silent until a fire carries the deeper faces), a
// single prior prices no read (the deep echo needs the adjacent face
// AND at least one older face - the branch law needs its other
// branch), a groundless this-face prices no echo, a no-match fold
// prices the honest silence (the fresh ground is the shape).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

import { DEATH_GROUND_RADIUS } from './deathground.mjs'

// the killer voice - the census's own tally byte ('Killer:n', count
// desc then the name's own byte - the lib's own sort law, verbatim
// with the one-face echo's display)
function killerVoice (killers) {
  return Object.entries(killers || {})
    .sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
    .map(([k, n]) => `${k}:${n}`)
    .join(' ')
}

// the ground's own display - the census's own face-row byte verbatim
function groundVoice (g) {
  return `[${g.x},${g.z}] x${g.n} (${killerVoice(g.killers)})`
}

/**
 * The fence - the fold's own images must prove themselves before the
 * word rides. The fold carries THIS face's image and the priors
 * array (the adjacent face first, then the older faces nearest
 * first); every image proves itself by the one-face echo's own laws.
 *
 * @param {object|null} [e] the deep fold: { cur: image,
 *   priors: [image, ...] } per-face death ground images
 *   { combatDeaths, blind, grounds }
 * @returns {boolean}
 */
export function groundDeepConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { combatDeaths, blind, grounds } = s
    const intOk = (v) => Number.isInteger(v) && v >= 0
    if (!intOk(combatDeaths) || !intOk(blind)) return false
    if (!Array.isArray(grounds)) return false
    for (const g of grounds) {
      if (!g || typeof g !== 'object' || Array.isArray(g)) return false
      if (!Number.isInteger(g.x) || !Number.isInteger(g.z)) return false
      if (!Number.isInteger(g.n) || g.n <= 0) return false
      if (!g.killers || typeof g.killers !== 'object' || Array.isArray(g.killers)) return false
      for (const n of Object.values(g.killers)) {
        if (!Number.isInteger(n) || n <= 0) return false
      }
    }
    return true
  }
  if (!faceOk(e.cur)) return false
  if (!Array.isArray(e.priors)) return false
  if (e.priors.length < 1) return false
  for (const p of e.priors) {
    if (!faceOk(p)) return false
  }
  return true
}

/**
 * The fold - this face's grounds against the OLDER faces' grounds
 * past the adjacent face, the census's own radius and first-fit law
 * across the deep priors' own order. A ground the ADJACENT face
 * already carries belongs to the one-face echo (the branch law -
 * never re-priced here); the deep ride needs the adjacent miss and
 * an older face's hit, the nearest older face first. The ground is a
 * region: an older ground may carry several of this face's grounds
 * (the relation never consumes).
 *
 * @param {object|null} [e] the deep fold
 *   { cur: {combatDeaths, blind, grounds},
 *     priors: [{combatDeaths, blind, grounds}, ...] }
 * @returns {null|{pairs: Array<{cur: object, prev: object, back: number, gaps: number}>, ofGrounds: number}}
 */
export function groundDeep (e) {
  if (!groundDeepConsistent(e)) return null
  const { cur, priors } = e
  // the deep echo needs the adjacent face AND at least one older
  // face (the branch law needs its other branch)
  if (priors.length < 2) return null
  // a groundless this-face prices no echo (the repeat is the subject)
  if (cur.grounds.length === 0) return null
  const pairs = []
  for (const cg of cur.grounds) {
    // the branch law: the adjacent face's own match belongs to the
    // one-face echo (v0.976.23) - never re-priced here
    const adjHit = priors[0].grounds.some((pg) => Math.abs(pg.x - cg.x) <= DEATH_GROUND_RADIUS && Math.abs(pg.z - cg.z) <= DEATH_GROUND_RADIUS)
    if (adjHit) continue
    // the census's own greedy first-fit law across the deep priors'
    // own order: the nearest older face first, the first ground
    // inside the radius wins
    for (let i = 1; i < priors.length; i++) {
      const pg = priors[i].grounds.find((g) => Math.abs(g.x - cg.x) <= DEATH_GROUND_RADIUS && Math.abs(g.z - cg.z) <= DEATH_GROUND_RADIUS)
      if (pg) {
        pairs.push({ cur: cg, prev: pg, back: i + 1, gaps: i })
        break
      }
    }
  }
  if (pairs.length === 0) return null
  return { pairs, ofGrounds: cur.grounds.length }
}

/**
 * The word - one line, the nest's own repeat past the gap. The honest
 * null when the fold prices nothing (the fence, the missing deep
 * carrier, the groundless face, the no-match fold - the fresh ground
 * is the shape).
 *
 * @param {object|null} [e] the deep fold
 * @returns {string|null} the row byte, or null
 */
export function groundDeepRow (e) {
  const g = groundDeep(e)
  if (!g) return null
  const voice = g.pairs
    .map((p) => `this face's ${groundVoice(p.cur)} rode the ${p.back}-back face's ${groundVoice(p.prev)} across ${p.gaps} gap face(s)`)
    .join('; ')
  return `the ground's own deep echo (v0.976.26): ${g.pairs.length} of this face's ${g.ofGrounds} ground(s) rode the older faces' ground(s) past the gap - ${voice} - the nest's own ground recurring across the skipped walks (the adjacent face's own miss priced the honest silence, the deep ride is the subject)`
}
