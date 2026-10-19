// (v0.976.274) THE COUNTERS PLANTED CELL'S OWN FARM MASS - the
// counters line's own planted cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... smelted=25 planted=10 torched=2 ...'
// (F478's own face, run 39174346168) and '... planted=11 ...' (F479,
// run 39178460638) and '... planted=11 ...' (F480, run 39184044983)
// and '... planted=13 ...' (F481, run 39188700500) and '... planted=13
// ...' (F482, run 39193658512) and '... planted=9 ...' (F483, run
// 39200742905) and '... planted=10 ...' (F484, run 39206031566) and
// '... planted=7 ...' (F485, run 39208857636) - testbed/fleet19.mjs's
// counters line (fleet19.mjs:4682), one print per face, the planted
// cell the fleet's own farm tally (the seeds the bots planted - the
// replant hand's own end-state mass, the farm front's own ledger) -
// and no book owned the cell's own mass across the faces: the smelted
// word (the .269 word) prices the smelted cell beside (its grammar
// anchors the planted cell's bytes after its priced cell, its census
// never prices them), the torched word prices the torched cell beside
// (the .261 word), the fights word prices the fights cell beside (the
// .273 word - its grammar anchors the planted cell's bytes in the head
// chain, its census never prices them), the climbs word (the .270
// word), the tools word (the .271 word), the wet word (the .272 word)
// keep their lanes beside, the surface module keeps the runtime farm
// hand - the farm mass itself rode unread (10 -> 11 -> 11 -> 13 -> 13
// -> 9 -> 10 -> 7 the eight-face arc no row read). THIS WORD TAKES
// THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the smelted cell, the emitter's own template order,
// the priced cell no leading zero no sign (the .248 house law), the
// tail boundary the cell ends at whitespace or line end never
// mid-token - the fused-tail skin the grammar refuses), the near-miss
// lanes never ride (the bare cell without the frame, the pretty
// spacing, the altered order, the leading zero, the negative count,
// the bot-tagged prefix, the drifted template, the truncated head,
// the wrong frame), the law LAST-PRINT-WINS - the counters line
// speaks once per face, the last print the freshest body the face
// held. NO SIDE-CAR: the free neighbours are none - the torched cell
// the .261 word's seat, the fights cell the .273 word's seat - the
// farm mass's row rides the priced cell alone (the co-existence by
// seat never by duplication).
//
// THE CELL: planted (the farm mass - the proven integer cell, the
// zero lawful - the seed-less face keeps the healthy zero). The trend
// reads the farm mass's arc two steps deep (the family's own
// two-step shape): both steps down = the farm weather's own fade
// (the replant hand went quiet), both steps up = the farm weather's
// own swell (the seed surge), a trade = the swing. A held step
// prices no direction - the honest silence (the family's own held
// law - the arc's first four windows rode held, the silences the
// word prices honest); a three-face zero farm mass prices nothing -
// the fleet never planted the whole arc (the lawful silence the
// .255 churn ceiling's own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const PLANTED_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(\d+) planted=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own planted cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{planted: number}|null}
 *   the cell, or the zero when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zero), null
 *   when the input itself is not an array
 */
export function counterPlantedCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { planted: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = PLANTED_RE.exec(l)
    if (!m) continue
    mass.planted = Number(m[14]) // the head chain's own capture order: the chain cells ride m[1..13], the priced cell rides m[14]
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold the proven
 * integer cell (the zero lawful - the seed-less face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {planted}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterPlantedConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.planted)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the farm mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never planted -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {planted}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterPlantedTrendRow (e) {
  if (!counterPlantedConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.planted
  const p = prev.planted
  const c = cur.planted
  // the fleet never planted across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the smelted word's row keeps the furnace seat (the .269 word - its grammar anchors the planted cell's bytes after its priced cell, its census never prices them), the torched word's row keeps the torch seat (the .261 word), the climbs word's row keeps the scaffold seat (the .270 word), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word), the fights word's row keeps the combat seat (the .273 word - its grammar anchors the planted cell's bytes in the head chain, its census never prices them) - the farm mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters planted trend (v0.976.274): the farm weather's own fade ran two steps deep - ${arc} - the farm mass's own fade ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters planted trend (v0.976.274): the farm weather's own swell ran two steps deep - ${arc} - the farm mass's own swell ${tail}`
  }
  return `the counters planted trend (v0.976.274): the farm weather's own swing - ${arc} - the fade and the swell traded seats between the faces ${tail}`
}
