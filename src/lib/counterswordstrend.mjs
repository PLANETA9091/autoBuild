// (v0.976.285) THE COUNTERS SWORDS CELL'S OWN FORGE MASS - the
// counters line's own swords cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry):
// the final report prints '... reboots=0 upgraded=19 swords=20
// alive=19 ...' (F478's own face, run 39174346168) and '...
// upgraded=14 swords=18 ...' (F479, run 39178460638) and '...
// swords=19 ...' (F480) and '... swords=19 ...' (F481) and '...
// swords=17 ...' (F482) and '... swords=17 ...' (F483) and '...
// swords=16 ...' (F484, run 39206031566) and '... swords=16 ...'
// (F485, run 39208857636) and '... swords=20 ...' (F486, run
// 39211822338) and '... swords=15 ...' (F487, run 39214842713) and
// '... swords=12 ...' (F488, run 39222677292) and '... swords=18 ...'
// (F489, run 39230056077) and '... swords=12 ...' (F490, run
// 39241011047) and '... reboots=1 upgraded=13 swords=16 alive=19 ...'
// (F491, run 39250996033) - testbed/fleet19.mjs's counters line
// (fleet19.mjs:4682), one print per face, the swords cell the forge's
// own blade tally (the smith chain's other product the .270 word's
// own header names). The .270 climb word's row rides the swords hand
// as its own side-car (the rider never the priced voice) - the .269
// word's own precedent the family holds (whose row rides the banked
// hand while the .276 word prices the banked cell, the .271 word's
// recovered side-car the .283 word upgraded, the .268 word's kicks
// side-car the .284 word took) - and the sword's own raw docket lane
// (the .162 word) keeps its separate emitter (the 'F<n> sword:' lines
// the fleet19's own craft lane prints, a different emitter never the
// counters cell), the counters cell itself rode unread (20 -> 18 ->
// 19 -> 19 -> 17 -> 17 -> 16 -> 16 -> 20 -> 15 -> 12 -> 18 -> 12 ->
// 16 the fourteen-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor
// rides whole through the spawned and the reconnects and the kicks
// and the tools and the recovered and the reboots and the upgraded
// cells, the emitter's own template order, the priced cell no leading
// zero no sign (the .248 house law), the tail boundary the cell ends
// at whitespace or line end never mid-token - the fused-tail skin the
// grammar refuses), the near-miss lanes never ride (the bare cell
// without the frame, the pretty spacing, the altered order, the
// leading zero, the negative count, the bot-tagged prefix, the
// drifted template, the truncated head, the wrong frame), the law
// LAST-PRINT-WINS - the counters line speaks once per face, the last
// print the freshest body the face held. THE CELLS: swords (the forge
// mass - the proven integer cell, the zero lawful - the bladeless
// face keeps the healthy zero), upgraded (the craft hand the side-car
// holds - the .267 word's own priced voice, the cell rides the row as
// a number never a second word). The forge mass's own arc the row
// prices (the fade the forge quieted, the swell the blade storm, the
// swing the trade - the family's own two-step shape), the held step
// the honest silence (the REAL faces' own helds the W479-480-481
// through W484-485-486 windows the silence prices - six honest
// silences the long prairie rides); the three-face zero mass prices
// nothing - the forge never shaped a blade the whole arc (the lawful
// silence the .255 churn ceiling's own lawful-zero birth the
// precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold, the fleet's own
// console never changes).

const COUNTER_SWORDS_RE = /^bots=(0|[1-9]\d*) spawned=(0|[1-9]\d*) reconnects=(0|[1-9]\d*) kicks=(0|[1-9]\d*) tools=(0|[1-9]\d*) recovered=(0|[1-9]\d*) reboots=(0|[1-9]\d*) upgraded=(0|[1-9]\d*) swords=(0|[1-9]\d*)(?: |$)/

/**
 * The census - the family's own strict grammar, the face's own sword
 * read (the counters line's own swords cell; LAST-PRINT-WINS - the
 * last strict line the face's own freshest body, the junk line never
 * poisons).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{swords: number, upgraded: number}|null} the cells (the
 *   zeros lawful - the face whose lines hold no counters line), null
 *   when the input itself is not an array
 */
export function counterSwordsCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { swords: 0, upgraded: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = COUNTER_SWORDS_RE.exec(l)
    if (!m) continue
    mass.swords = Number(m[9]) // the priced cell - the forge mass
    mass.upgraded = Number(m[8]) // the side-car - the craft hand
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. Every face must hold both proven integer cells (the zero
 * lawful - the bladeless face). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {swords,upgraded}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterSwordsConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.swords) && numOk(s.upgraded)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the forge mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass (the forge never shaped),
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {swords,upgraded}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterSwordsTrendRow (e) {
  if (!counterSwordsConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.swords
  const p = prev.swords
  const c = cur.swords
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent - the REAL faces' own helds
  // the W479-480-481 through W484-485-486 windows the silence prices)
  if (first === 0 || second === 0) return null
  const upArc = `the upgrades rode ${back.upgraded} -> ${prev.upgraded} -> ${cur.upgraded}`
  const tail = "(the climb word's row keeps the scaffold seat (the .270 word - whose side-car rides this same swords hand, the rider never the priced voice), the sword's own raw docket lane keeps the sword data's separate emitter (the .162 word - the 'F<n> sword:' lines, a different lane never the counters cell), the upgrade cell the upgraded word prices (the .267 word), the recovered and the kicks cells the cure and the exclusion words price (the .283 and the .284 words) - the forge mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters swords trend (v0.976.285): the sword weather's own fade ran two steps deep - ${arc} - the forge's blades thinned, ${upArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters swords trend (v0.976.285): the sword weather's own swell ran two steps deep - ${arc} - the blade storm surged, ${upArc} ${tail}`
  }
  return `the counters swords trend (v0.976.285): the sword weather's own swing - ${arc} - the forge's output and the quiet traded seats between the faces, ${upArc} ${tail}`
}
