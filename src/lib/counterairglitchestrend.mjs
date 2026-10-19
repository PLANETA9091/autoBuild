// (v0.976.286) THE COUNTERS AIRGLITCHES CELL'S OWN GLITCH MASS - the
// counters line's own airGlitches cell the word prices across the
// faces. THE EVIDENCE (the seat the fleet faces' own counters lines
// carry): the final report prints '... pounceLanded=0
// airGlitches=857 claims=33 ...' (F478's own face, run 39174346168)
// and '... airGlitches=0 ...' (F479, run 39178460638) and '...
// airGlitches=821 ...' (F482) and '... airGlitches=945 ...' (F485)
// and '... airGlitches=627 ...' (F488) - testbed/fleet19.mjs's
// counters line (fleet19.mjs:4682), one print per face, the
// airGlitches cell the physics-desync tally (the per-bot
// stats.airGlitches sum - the float-glitches and the position snaps
// the movement hand survived). The claims word (the .263 word) and
// the wet word ride the cell's bytes in their head chains (the
// anchors never the priced voice - their censuses price the claims
// band and the wet cells) and no book owned the cell's own mass
// across the faces - the glitch mass itself rode unread (857 -> 0 ->
// 0 -> 0 -> 821 -> 232 -> 0 -> 945 -> 0 -> 414 -> 627 -> 243 -> 274
// -> 0 the fourteen-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor
// rides whole through the spawned and the reconnects and the kicks
// and the tools and the recovered and the reboots and the upgraded
// and the swords and the alive and the climbs and the banked and the
// smelted and the planted and the torched and the fights and the
// kills and the shelters and the rescues and the pounces and the
// pounceLanded cells, the emitter's own template order, the priced
// cell no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the
// bot-tagged prefix, the drifted template, the truncated head, the
// wrong frame), the law LAST-PRINT-WINS - the counters line speaks
// once per face, the last print the freshest body the face held. THE
// CELLS: airGlitches (the glitch mass - the proven integer cell, the
// zero lawful - the clean-physics face keeps the healthy zero),
// pounceLanded (the landing hand the side-car holds - the .264
// word's own priced voice, the cell rides the row as a number never
// a second word). The glitch mass's own arc the row prices (the fade
// the glitches thinned, the swell the glitch storm surged, the swing
// the trade - the family's own two-step shape), the held step the
// honest silence (the REAL faces' own helds the W478-479-480 and
// W480-481-482 windows the silence prices); the three-face zero mass
// prices nothing - the physics never glitched the whole arc (the
// lawful silence the .284 word's own lawful-zero birth the precedent
// holds - the REAL W479-480-481 zero prairie the silence keeps).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold, the fleet's own
// console never changes).

const COUNTER_AIR_RE = /^bots=(0|[1-9]\d*) spawned=(0|[1-9]\d*) reconnects=(0|[1-9]\d*) kicks=(0|[1-9]\d*) tools=(0|[1-9]\d*) recovered=(0|[1-9]\d*) reboots=(0|[1-9]\d*) upgraded=(0|[1-9]\d*) swords=(0|[1-9]\d*) alive=(0|[1-9]\d*) climbs=(0|[1-9]\d*) banked=(0|[1-9]\d*) smelted=(0|[1-9]\d*) planted=(0|[1-9]\d*) torched=(0|[1-9]\d*) fights=(0|[1-9]\d*) kills=(0|[1-9]\d*) shelters=(0|[1-9]\d*) rescues=(0|[1-9]\d*) pounces=(0|[1-9]\d*) pounceLanded=(0|[1-9]\d*) airGlitches=(0|[1-9]\d*)(?: |$)/

/**
 * The census - the family's own strict grammar, the face's own glitch
 * read (the counters line's own airGlitches cell; LAST-PRINT-WINS -
 * the last strict line the face's own freshest body, the junk line
 * never poisons).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{airGlitches: number, pounceLanded: number}|null} the
 *   cells (the zeros lawful - the face whose lines hold no counters
 *   line), null when the input itself is not an array
 */
export function counterAirGlitchesCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { airGlitches: 0, pounceLanded: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = COUNTER_AIR_RE.exec(l)
    if (!m) continue
    mass.airGlitches = Number(m[22]) // the priced cell - the glitch mass
    mass.pounceLanded = Number(m[21]) // the side-car - the landing hand
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. Every face must hold both proven integer cells (the zero
 * lawful - the clean-physics face). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {airGlitches,pounceLanded}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterAirGlitchesConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.airGlitches) && numOk(s.pounceLanded)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the glitch mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass (the physics never glitched),
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {airGlitches,pounceLanded}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterAirGlitchesTrendRow (e) {
  if (!counterAirGlitchesConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.airGlitches
  const p = prev.airGlitches
  const c = cur.airGlitches
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent - the REAL faces' own helds
  // the W478-479-480 and W480-481-482 windows the silence prices)
  if (first === 0 || second === 0) return null
  const pounceArc = `the pounce hand rode ${back.pounceLanded} -> ${prev.pounceLanded} -> ${cur.pounceLanded}`
  const tail = "(the pounce word's row keeps the pounce seats (the .264 word - whose cells ride this same glitch hand as the side-car numbers, the rider never the priced voice), the claims word's row keeps the claims band (the .263 word - whose head chain anchors this cell's bytes), the swords cell the forge word prices (the .285 word), the kicks cell the exclusion word prices (the .284 word), the spawned/banked/smelted cells their words keep (the .277/.276/.269 words) - the glitch mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters airGlitches trend (v0.976.286): the glitch weather's own fade ran two steps deep - ${arc} - the glitches thinned, ${pounceArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters airGlitches trend (v0.976.286): the glitch weather's own swell ran two steps deep - ${arc} - the glitch storm surged, ${pounceArc} ${tail}`
  }
  return `the counters airGlitches trend (v0.976.286): the glitch weather's own swing - ${arc} - the glitch and the calm traded seats between the faces, ${pounceArc} ${tail}`
}
