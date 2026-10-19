// (v0.976.269) THE COUNTERS SMELTED CELL'S OWN FURNACE MASS - the
// counters line's own smelted cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... climbs=34 banked=1104 smelted=25 planted=10
// ...' (F478's own face, run 39174346168) and '... banked=313 smelted=4
// ...' (F479, run 39178460638) and '... banked=1588 smelted=37 ...'
// (F480, run 39184044983) and '... banked=1511 smelted=58 ...' (F481,
// run 39188700500) and '... banked=14 smelted=2 ...' (F482, run
// 39193658512) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the smelted cell the fleet's own smelt tally (the
// items the furnaces turned - sand->glass, ore->ingot, food->cooked -
// fleet19.mjs:196's own ledger hand) - and no book owned the cell's own
// mass across the faces: the bankcensus module prices the loot line's
// own banked/smelted cells (a different emitter's lane), the maptrip
// module prices the trip lane's own banked+smelted parse, the pocketline
// census prices the WITHIN-FACE seat (the per-bot holders' local/spread
// split), the fuelbank module owns the fuel lane, the sweeptrend word
// prices the smelt sweep's own verdict lane, the upgraded word (the
// .267 word) prices the upgraded cell beside, the reconnect word (the
// .268 word) prices the reconnects cell beside - the furnace mass itself
// rode unread (25 -> 4 -> 37 -> 58 -> 2 the five-face arc no row read).
// THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the banked cell, the emitter's own template order, the
// priced cell no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: smelted (the furnace mass - the proven integer cell, the
// zero lawful - the never-smelting face keeps the healthy zero), banked
// (the deposit hand the side-car holds - the items the bots rode into
// the yard's chests the same economy rode, the bankcensus loot line's
// own cells keep their loot-lane seats: the cell rides the row as a
// number, never a second word). The trend reads the furnace mass's arc
// two steps deep (the family's own two-step shape): both steps down =
// the furnace weather's own fade (the furnaces went quiet), both steps
// up = the furnace weather's own swell (the smelt surge), a trade = the
// swing. A held step prices no direction - the honest silence (the
// family's own held law); a three-face zero furnace mass prices
// nothing - the fleet never smelted the whole arc (the lawful silence
// the .255 churn ceiling's own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const SMELT_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own smelted cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{smelted: number, banked: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterSmeltedCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { smelted: 0, banked: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SMELT_RE.exec(l)
    if (!m) continue
    mass.banked = Number(m[12]) // the head chain's own capture order: bots..climbs ride m[1..11], the side-car rides m[12], the priced cell rides m[13]
    mass.smelted = Number(m[13])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-smelting face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {smelted,banked}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterSmeltedConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.smelted) && numOk(s.banked)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the furnace mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never smelted -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {smelted,banked}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterSmeltedTrendRow (e) {
  if (!counterSmeltedConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.smelted
  const p = prev.smelted
  const c = cur.smelted
  // the fleet never smelted across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const bankedArc = `the banked rode ${back.banked} -> ${prev.banked} -> ${cur.banked}`
  const tail = "(the bankcensus module keeps the loot line's own banked/smelted seats, the maptrip module keeps the trip lane's own parse, the pocketline census keeps the within-face seat, the fuelbank module keeps the fuel lane, the reconnect word's row keeps the kicks side-car's seat (the .268 word) - the furnace mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters smelt trend (v0.976.269): the furnace weather's own fade ran two steps deep - ${arc} - the furnace mass's own fade, ${bankedArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters smelt trend (v0.976.269): the furnace weather's own swell ran two steps deep - ${arc} - the furnace mass's own swell, ${bankedArc} ${tail}`
  }
  return `the counters smelt trend (v0.976.269): the furnace weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${bankedArc} ${tail}`
}
