// (v0.976.275) THE COUNTERS ALIVE CELL'S OWN SURVIVAL MASS - the
// counters line's own alive cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... upgraded=19 swords=20 alive=19 climbs=34 ...'
// (F478's own face, run 39174346168) and '... swords=18 alive=19
// climbs=24 ...' (F479, run 39178460638) and '... swords=19 alive=19
// climbs=34 ...' (F480, run 39184044983) and '... alive=19 ...' (F481,
// run 39188700500) and '... alive=19 ...' (F482, run 39193658512) and
// '... alive=19 ...' (F483, run 39200742905) and '... alive=19 ...'
// (F484, run 39206031566) and '... alive=19 ...' (F485, run
// 39208857636) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the alive cell the fleet's own survival end-state
// tally (the bots the report ends holding - the night/mob survivability
// front's own end-state mass) - and no book owned the cell's own mass
// across the faces: the finalbody census prices the BODY line's own
// bots/alive cells (a different emitter's lane - the final body line's
// own 'body 19/19' shape the face ends beside, never the counters
// line), the doom ledger keeps the deaths' own prose lane (the death
// anatomy's own words), the sockloss module keeps the disconnect lane,
// the fight ledger's own exit seat keeps the fights' episode lane, the
// climbs word (the .270 word) prices the climbs cell beside (its
// grammar anchors the alive cell's bytes in the head chain, its census
// never prices them), the tools word (the .271 word), the wet word
// (the .272 word), the fights word (the .273 word), the planted word
// (the .274 word) keep their lanes beside - the survival mass itself
// rode unread (19 -> 19 -> 19 -> 19 -> 19 -> 19 -> 19 -> 19 the
// eight-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the swords cell, the emitter's own template order, the
// priced cell no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held. NO SIDE-CAR: the
// free neighbours are none - the swords cell the .270 word's side-car
// seat, the reboots cell the .267 word's side-car seat, the climbs
// cell the .270 word's own seat - the survival mass's row rides the
// priced cell alone (the co-existence by seat never by duplication).
//
// THE CELL: alive (the survival mass - the proven integer cell, the
// zero lawful - the whole-death face the grammar prices, the doom
// ledger's own prose lane keeping the deaths' anatomy beside). The
// trend reads the survival mass's arc two steps deep (the family's own
// two-step shape): both steps down = the survival weather's own fade
// (the fleet bled - the nights armed, the hazards bit), both steps up
// = the survival weather's own swell (the respawn wave the bootstrap
// rode home), a trade = the swing. A held step prices no direction -
// the honest silence (the family's own held law - the REAL eight
// faces' whole arc rode 19, every real window the word's birth prices
// held, the silences the word prices honest: the fleet's own survival
// the healthiest shape the mass holds); a three-face zero survival
// mass prices nothing - the family's own shape keeps the silence (the
// doom ledger's own prose lane prices the deaths' anatomy, the bars
// never invent). The synthetic arcs prove the speech machinery byte
// exact for the day a bot dies (the 19 -> 18 the survival weather's
// own first word will ride).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const ALIVE_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own alive cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{alive: number}|null}
 *   the cell, or the zero when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zero), null
 *   when the input itself is not an array
 */
export function counterAliveCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { alive: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = ALIVE_RE.exec(l)
    if (!m) continue
    mass.alive = Number(m[10]) // the head chain's own capture order: the chain cells ride m[1..9], the priced cell rides m[10]
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold the proven
 * integer cell (the zero lawful - the whole-death face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {alive}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterAliveConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.alive)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the survival mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass the family's own shape keeps
 * silent (the doom ledger's own prose lane prices the deaths'
 * anatomy), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {alive}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterAliveTrendRow (e) {
  if (!counterAliveConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.alive
  const p = prev.alive
  const c = cur.alive
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend, the doom ledger's own
  // prose lane prices the deaths' anatomy)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the finalbody census's row keeps the body line's own bots/alive cells' seat - a different emitter's lane the face ends beside, the doom ledger's row keeps the deaths' own prose lane, the climbs word's row keeps the scaffold seat (the .270 word - its grammar anchors the alive cell's bytes in the head chain, its census never prices them), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word), the fights word's row keeps the combat seat (the .273 word), the planted word's row keeps the farm seat (the .274 word) - the survival mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters alive trend (v0.976.275): the survival weather's own fade ran two steps deep - ${arc} - the survival mass's own fade ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters alive trend (v0.976.275): the survival weather's own swell ran two steps deep - ${arc} - the survival mass's own swell ${tail}`
  }
  return `the counters alive trend (v0.976.275): the survival weather's own swing - ${arc} - the fade and the swell traded seats between the faces ${tail}`
}
