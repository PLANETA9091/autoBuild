// (v0.976.23) THE GROUND'S OWN ECHO - the nest's cross-face repeat. The
// ground census (v0.464.0) prices WHERE the combat deaths landed within
// one face and the seat (v0.793.0) names WHICH ground owns the book -
// but the nest's own persistence rode unnamed: FACE 316's ground
// [-135,397] (a zombie's own kill, x1) and FACE 317's grounds [-143,395]
// (Drowned x5) + [-128,397] (Drowned x1) BOTH rode the same shore's
// radius - back-to-back faces, the same ground taking six of the later
// face's ten combat deaths. One face cannot read persistence (the
// v0.471.0 law): the echo fold prices the repeat over the two faces'
// own census images.
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19; the
// rss creep's carrier, v0.976.21). The fold receives the census's own
// images - { combatDeaths, blind, grounds } per face, the grounds the
// census's own +-12 join already priced - never re-parses a line (the
// one-parser law: deathground owns the died-line grammar, the fold
// adds the one join it owns: the ACROSS-face match). The radius is the
// census's own DEATH_GROUND_RADIUS imported whole - never forked (the
// floor fiction lesson); the across-face match walks the census's own
// greedy first-fit law (the prior census's own order, the first ground
// inside the radius wins; the ground is a REGION, not a resource - a
// prior ground may carry several of this face's grounds, the relation
// is spatial and never consumes).
//
// The silences: a groundless face either side prices no echo (a
// combatless or all-blind book owns no ground - the echo needs a
// ground on both sides), a face the census never read prices no echo
// (the wiring's own null pass), a no-match pair prices the honest
// silence (the fresh ground is the shape, not the echo - the
// FACE 315 -> 316 pair's own read: four singles against six, every
// ground fresh).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

import { DEATH_GROUND_RADIUS } from './deathground.mjs'

// the killer voice - the census's own tally byte ('Killer:n', count
// desc then the name's own byte - the lib's own sort law, verbatim)
function killerVoice (killers) {
  return Object.entries(killers || {})
    .sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
    .map(([k, n]) => `${k}:${n}`)
    .join(' ')
}

// the ground's own display - the census's own face-row byte verbatim
// ('[x,z] xN (Killers:n)'; an empty tally rides the census's own empty
// parens - the display never invents a voice)
function groundVoice (g) {
  return `[${g.x},${g.z}] x${g.n} (${killerVoice(g.killers)})`
}

/**
 * The fence - the fold's own images must prove themselves before the
 * word rides. A fold that cannot prove itself prices nothing (the
 * fence law: the word never rides a lie).
 *
 * @param {object|null} [e] the echo fold: { prev, cur } per-face death
 *   ground images { combatDeaths, blind, grounds }
 * @returns {boolean}
 */
export function deathGroundEchoConsistent (e) {
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
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The fold - this face's grounds against the prior face's grounds, the
 * census's own radius and first-fit law across the faces. The ground
 * is a region: a prior ground may carry several of this face's grounds
 * (the relation never consumes).
 *
 * @param {object|null} [e] the echo fold
 *   { prev: {combatDeaths, blind, grounds},
 *     cur: {combatDeaths, blind, grounds} }
 * @returns {null|{pairs: Array<{cur: object, prev: object}>, ofGrounds: number}}
 */
export function deathGroundEcho (e) {
  if (!deathGroundEchoConsistent(e)) return null
  const { prev, cur } = e
  // a groundless face either side prices no echo (the echo needs a
  // ground on both sides - the repeat is the subject)
  if (prev.grounds.length === 0 || cur.grounds.length === 0) return null
  const pairs = []
  for (const cg of cur.grounds) {
    // the census's own greedy first-fit law across the faces: the
    // prior census's own order, the first ground inside the radius
    for (const pg of prev.grounds) {
      if (Math.abs(pg.x - cg.x) <= DEATH_GROUND_RADIUS && Math.abs(pg.z - cg.z) <= DEATH_GROUND_RADIUS) {
        pairs.push({ cur: cg, prev: pg })
        break
      }
    }
  }
  if (pairs.length === 0) return null
  return { pairs, ofGrounds: cur.grounds.length }
}

/**
 * The word - one line, the nest's cross-face repeat. The honest null
 * when either face's book owns no ground or no pair matched (the fresh
 * ground is the shape).
 *
 * @param {object|null} [e] the echo fold
 * @returns {string|null} the row byte, or null
 */
export function deathGroundEchoRow (e) {
  const dge = deathGroundEcho(e)
  if (!dge) return null
  const voice = dge.pairs
    .map((p) => `this face's ${groundVoice(p.cur)} rode the prior face's ${groundVoice(p.prev)}`)
    .join('; ')
  return `the ground's own echo (v0.976.23): ${dge.pairs.length} of this face's ${dge.ofGrounds} ground(s) rode the prior face's ground(s) - ${voice} - the nest's own ground recurring across the walks (the killers' own voices may swap - the ground is the subject)`
}
