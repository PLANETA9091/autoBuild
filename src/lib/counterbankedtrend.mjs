// (v0.976.276) THE COUNTERS BANKED CELL'S OWN BANK MASS - the
// counters line's own banked cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... climbs=34 banked=1104 smelted=25 planted=10
// ...' (F478's own face, run 39174346168) and '... banked=313 ...'
// (F479, run 39178460638) and '... banked=1588 ...' (F480, run
// 39184044983) and '... banked=1511 ...' (F481, run 39188700500) and
// '... banked=14 ...' (F482, run 39193658512) and '... banked=1038 ...'
// (F483, run 39200742905) and '... banked=455 ...' (F484, run
// 39206031566) and '... banked=470 ...' (F485, run 39208857636) and
// '... banked=399 ...' (F486, run 39211822338) and '... banked=0 ...'
// (F487, run 39214842713) - testbed/fleet19.mjs's counters line
// (fleet19.mjs:4682), one print per face, the banked cell the fleet's
// own bank balance (the scalar the bank ledger holds at the face's end
// - the units the fleet's bank still carries - the bank front's own
// end-state mass) - and no book owned the cell's own mass across the
// faces: the bankcensus module prices the loot line's own
// banked/smelted cells (a different emitter's lane), the maptrip
// module prices the trip lane's own banked+smelted parse, the
// pocketline census prices the WITHIN-FACE seat, the fuelbank module
// owns the fuel lane, the bankedreceipttrend word prices the deposit
// receipt's own lane (the v0.976.223 seat), the bankdocket and
// bankdrain modules keep the final bank's own lane, the smelted word
// prices the smelted cell beside (the .269 word - whose row rides the
// banked hand as its own side-car, the rider never the priced voice),
// the planted word prices the planted cell beside (the .274 word - its
// grammar anchors the banked cell's bytes in the head chain, its
// census never prices them), the climbs word prices the climbs cell
// beside (the .270 word) - the bank mass itself rode unread (1104 ->
// 313 -> 1588 -> 1511 -> 14 -> 1038 -> 455 -> 470 -> 399 -> 0 the
// ten-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the climbs cell, the emitter's own template order, the
// priced cells no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: banked (the bank mass - the proven integer cell, the zero
// lawful - the emptied bank keeps the healthy zero). NO SIDE-CAR - the
// free neighbours are none: the climbs cell the .270 word's seat, the
// smelted cell the .269 word's seat (whose row rides the banked hand as
// its own side-car - the rider never a second word), the .274 farm
// word's precedent holds: the farm mass's row rides the priced cell
// alone, the bank mass's row rides its own cell alone. The trend reads
// the bank mass's arc two steps deep (the family's own two-step
// shape): both steps down = the bank weather's own fade (the bank
// drained), both steps up = the bank weather's own swell (the deposit
// surge), a trade = the swing. A held step prices no direction - the
// honest silence (the family's own held law); a three-face zero bank
// mass prices nothing - the fleet never held a bank the whole arc (the
// lawful silence the .255 churn ceiling's own lawful-zero birth the
// precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const BANKED_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own banked cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{banked: number}|null}
 *   the cell, or the zero when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-banked face keeps the healthy-looking zero), null
 *   when the input itself is not an array
 */
export function counterBankedCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { banked: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = BANKED_RE.exec(l)
    if (!m) continue
    mass.banked = Number(m[12]) // the head chain's own capture order: bots..climbs ride m[1..11], the priced cell rides m[12]
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold the proven
 * integer cell (the zero lawful - the emptied bank). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {banked}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterBankedConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.banked)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the bank mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never held a bank -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {banked}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterBankedTrendRow (e) {
  if (!counterBankedConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.banked
  const p = prev.banked
  const c = cur.banked
  // the fleet never held a bank across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the smelted word's row keeps the furnace seat and rides the banked hand as its own side-car (the .269 word - the deposit hand the furnace row holds, the rider never the priced voice), the planted word's row keeps the farm seat (the .274 word - its grammar anchors the banked cell's bytes in the head chain, its census never prices them), the alive word's row keeps the survival seat (the .275 word - the finalbody census's own beside lane the face ends beside), the climbs word's row keeps the scaffold seat (the .270 word), the torched word's row keeps the torch seat (the .261 word), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word), the fights word's row keeps the combat seat (the .273 word), the bankcensus module keeps the loot line's own banked/smelted seats, the bankedreceipttrend word keeps the deposit receipt's own lane (the v0.976.223 seat), the bankdocket and bankdrain modules keep the final bank's own lane, the maptrip module keeps the trip lane's own parse, the pocketline census keeps the within-face seat, the fuelbank module keeps the fuel lane - the bank mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters banked trend (v0.976.276): the bank weather's own fade ran two steps deep - ${arc} - the bank mass's own fade ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters banked trend (v0.976.276): the bank weather's own swell ran two steps deep - ${arc} - the bank mass's own swell ${tail}`
  }
  return `the counters banked trend (v0.976.276): the bank weather's own swing - ${arc} - the fade and the swell traded seats between the faces ${tail}`
}
