// (v0.976.272) THE COUNTERS WET CELL'S OWN HAZARD MASS - the counters
// line's own wet cell the word prices across the faces. THE EVIDENCE
// (the seat the fleet faces' own counters lines carry): the final
// report prints '... claimedHolds=0 wet=2 wt=2' (F478's own face, run
// 39174346168) and '... wet=3 wt=2' (F479, run 39178460638) and
// '... wet=7 wt=2' (F480, run 39184044983) and '... wet=3 wt=2' (F481,
// run 39188700500) and '... wet=3 wt=1' (F482, run 39193658512) and
// '... wet=12 wt=2' (F483, run 39200742905) and '... wet=5 wt=2'
// (F484, run 39206031566) and '... wet=12 wt=2' (F485, run
// 39208857636) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the wet cell the hazard ledger's own size (the
// still-open hazard entries the face ends holding - the wet front's
// own end-state mass) and the wt cell the water-table board's own size
// beside it - and no book owned the cells' own mass across the faces:
// the samecellwettrend word (the v0.976.70 seat) prices the repeat-wet
// standdown's own mid-event mass (a different mass the 'water: repeat
// wet page at the same cell' lines price), the wetchurn module keeps
// the still-wet rescue lines' own lane (its census never anchors the
// counters cell), the watertable module keeps the water-table board's
// own lane, the storm verdict word keeps the storm row's own
// wetGlitches cell (the exclusion feed - a different emitter), the
// climbwetescapetrend and wetwallyieldtrend words keep their own
// lanes, the .266 counterrescue word prices the rescues cell beside,
// the smelted word (the .269 word) prices the smelted cell beside, the
// climbs word (the .270 word) prices the climbs cell beside, the tools
// word (the .271 word) prices the tools cell beside - the wet mass
// itself rode unread (2 -> 3 -> 7 -> 3 -> 3 -> 12 -> 5 -> 12 the
// eight-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the claimedHolds cell, the emitter's own template
// order, the priced cell no leading zero no sign (the .248 house law),
// the tail boundary the cell ends at whitespace or line end never
// mid-token - the fused-tail skin the grammar refuses), the near-miss
// lanes never ride (the bare cell without the frame, the pretty
// spacing, the altered order, the leading zero, the negative count,
// the bot-tagged prefix, the drifted template, the truncated head, the
// missing wt cell, the wrong frame), the law LAST-PRINT-WINS - the
// counters line speaks once per face, the last print the freshest body
// the face held.
//
// THE CELLS: wet (the hazard ledger's own size - the proven integer
// cell, the zero lawful - the dry face keeps the healthy zero), wt
// (the water-table board's own size the side-car holds - the same
// water front's other board, the cell rides the row as a number, never
// a second word). The trend reads the hazard mass's arc two steps deep
// (the family's own two-step shape): both steps down = the wet
// weather's own fade (the hazards drained), both steps up = the wet
// weather's own swell (the hazard surge), a trade = the swing. A held
// step prices no direction - the honest silence (the family's own held
// law); a three-face zero hazard mass prices nothing - the fleet never
// held a hazard the whole arc (the lawful silence the .255 churn
// ceiling's own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const WET_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(\d+) planted=(\d+) torched=(\d+) fights=(\d+) kills=(\d+) shelters=(\d+) rescues=(\d+) pounces=(\d+) pounceLanded=(\d+) airGlitches=(\d+) claims=(\d+) claimedHolds=(\d+) wet=(0|[1-9]\d*) wt=(\d+)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own wet cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{wet: number, wt: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterWetCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { wet: 0, wt: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = WET_RE.exec(l)
    if (!m) continue
    mass.wet = Number(m[25]) // the head chain's own capture order: bots..claimedHolds ride m[1..24], the priced cell rides m[25], the side-car rides m[26]
    mass.wt = Number(m[26])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the dry face). Extra keys never
 * rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {wet,wt}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterWetConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.wet) && numOk(s.wt)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the hazard mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never held a
 * hazard - nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {wet,wt}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterWetTrendRow (e) {
  if (!counterWetConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.wet
  const p = prev.wet
  const c = cur.wet
  // the fleet never held a hazard across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  const wtArc = `the wt rode ${back.wt} -> ${prev.wt} -> ${cur.wt}`
  const tail = "(the samecellwettrend word keeps the repeat-wet standdown's own lane (the v0.976.70 seat - a different mass the mid-event lines price), the wetchurn module keeps the still-wet rescue lines' own lane, the watertable module keeps the water-table board's own lane, the storm verdict word keeps the storm row's own wetGlitches cell (the exclusion feed - a different emitter), the climbwetescapetrend and wetwallyieldtrend words keep their own lanes, the .266 counterrescue word's row keeps the rescues cell's seat beside, the smelted word's row (the .269 word) and the climbs word's row (the .270 word) and the tools word's row (the .271 word) keep their cells - the wet mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters wet trend (v0.976.272): the wet weather's own fade ran two steps deep - ${arc} - the hazard mass's own fade, ${wtArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters wet trend (v0.976.272): the wet weather's own swell ran two steps deep - ${arc} - the hazard mass's own swell, ${wtArc} ${tail}`
  }
  return `the counters wet trend (v0.976.272): the wet weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${wtArc} ${tail}`
}
