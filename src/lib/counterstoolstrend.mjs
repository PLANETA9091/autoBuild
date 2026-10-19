// (v0.976.271) THE COUNTERS TOOLS CELL'S OWN REPAIR MASS - the
// counters line's own tools cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... kicks=0 tools=17 recovered=4 ...' (F478's own
// face, run 39174346168) and '... tools=19 recovered=0 ...' (F479, run
// 39178460638) and '... tools=18 recovered=2 ...' (F480, run
// 39184044983) and '... tools=16 recovered=3 ...' (F481, run
// 39188700500) and '... tools=18 recovered=2 ...' (F482, run
// 39193658512) and '... tools=17 recovered=3 ...' (F483, run
// 39200742905) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the tools cell the fleet's own tool-health tally
// (fleet19.mjs:180's toolsOk - the tools the fleet's own chain verified
// whole) and the recovered cell the repair hand beside it (fleet19.mjs:
// 192's toolsRecovered - the v0.6.9 'bare-handed forever' fix's own
// in-loop recoveries, the tool repair/replace front's own cure) - and no
// book owned the cells' own mass across the faces: the toolupgrade
// machinery owns the smith chain's own runtime, the upgradecensus module
// (the v0.465.0 word) prices the tool ladder's own delivered tools from
// its own emitter, the upgraded word (the .267 word) prices the upgraded
// cell beside, the reconnect word (the .268 word) prices the reconnects
// cell beside with the kicks side-car, the smelted word (the .269 word)
// prices the smelted cell beside, the climbs word (the .270 word) prices
// the climbs cell beside, the statcarry module owns the death's own stat
// carry lane (a different recovery - the stats the death preserved, not
// the tools the fix pulled back), the finalbody census prices the body's
// bots/alive cells only - the repair mass itself rode unread (17 -> 19
// -> 18 -> 16 -> 18 -> 17 the six-face arc no row read, the recovered
// hand 4 -> 0 -> 2 -> 3 -> 2 -> 3 the same silence). THIS WORD TAKES
// THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the kicks cell, the emitter's own template order, the
// priced cells no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: tools (the repair mass - the proven integer cell, the zero
// lawful - the tool-less face keeps the healthy zero), recovered (the
// cure hand the side-car holds - the in-loop recoveries the same chain
// rode, the tool repair/replace front's own lane: the cell rides the
// row as a number, never a second word). The trend reads the repair
// mass's arc two steps deep (the family's own two-step shape): both
// steps down = the repair weather's own fade (the tool chain wore
// down), both steps up = the repair weather's own swell (the re-forge
// surge), a trade = the swing. A held step prices no direction - the
// honest silence (the family's own held law); a three-face zero repair
// mass prices nothing - the fleet never rode a tool the whole arc (the
// lawful silence the .255 churn ceiling's own lawful-zero birth the
// precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const TOOLS_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(0|[1-9]\d*) recovered=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own tools cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{tools: number, recovered: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterToolsCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { tools: 0, recovered: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = TOOLS_RE.exec(l)
    if (!m) continue
    mass.tools = Number(m[5]) // the head chain's own capture order: bots/kicks ride m[1..4], the priced cell rides m[5], the side-car rides m[6]
    mass.recovered = Number(m[6])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the tool-less face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {tools,recovered}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterToolsConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.tools) && numOk(s.recovered)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the repair mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never rode a tool -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {tools,recovered}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterToolsTrendRow (e) {
  if (!counterToolsConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.tools
  const p = prev.tools
  const c = cur.tools
  // the fleet never rode a tool across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const recoveredArc = `the recovered rode ${back.recovered} -> ${prev.recovered} -> ${cur.recovered}`
  const tail = "(the toolupgrade machinery keeps the smith chain's own runtime seat, the upgradecensus module keeps the tool ladder's own harvest seat (the v0.465.0 word), the statcarry module keeps the death's own stat carry lane, the upgraded word's row keeps the upgraded cell's seat (the .267 word), the climbs word's row keeps the scaffold seat (the .270 word) - the repair mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters tools trend (v0.976.271): the repair weather's own fade ran two steps deep - ${arc} - the repair mass's own fade, ${recoveredArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters tools trend (v0.976.271): the repair weather's own swell ran two steps deep - ${arc} - the repair mass's own swell, ${recoveredArc} ${tail}`
  }
  return `the counters tools trend (v0.976.271): the repair weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${recoveredArc} ${tail}`
}
