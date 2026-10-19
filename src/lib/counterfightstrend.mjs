// (v0.976.273) THE COUNTERS FIGHTS CELL'S OWN COMBAT MASS - the
// counters line's own fights cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... torched=2 fights=9 kills=4 shelters=0 ...'
// (F478's own face, run 39174346168) and '... fights=3 ...' (F479, run
// 39178460638) and '... fights=2 ...' (F480, run 39184044983) and
// '... fights=23 ...' (F481, run 39188700500) and '... fights=19 ...'
// (F482, run 39193658512) and '... fights=2 ...' (F483, run
// 39200742905) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the fights cell the fleet's own combat tally (the
// fights the bots rode against the mobs and the night's own surges -
// the night/mob survivability front's own end-state mass) and the
// shelters cell the defense hand beside it (the shelters the same
// combat front built when the night pressed) - and no book owned the
// cell's own mass across the faces: the pounce book prices the pounce
// cells beside (the .264 word), the kills word prices the kills cell
// beside (the .265 word - the chain neighbor this grammar rides loose,
// the seat never duplicated), the rescues word prices the rescues cell
// beside (the .266 word), the upgraded word prices the upgraded cell
// beside (the .267 word), the reconnect word prices the reconnects cell
// beside (the .268 word), the smelted word prices the smelted cell
// beside (the .269 word), the climbs word prices the climbs cell beside
// (the .270 word), the tools word prices the tools cell beside (the
// .271 word), the wet word prices the wet cell beside (the .272 word),
// the doom ledger keeps the deaths' own prose lane (a different
// emitter), the surface module keeps the runtime combat hand - the
// combat mass itself rode unread (9 -> 3 -> 2 -> 23 -> 19 -> 2 the
// six-face arc no row read, the shelter hand 0 -> 0 -> 0 -> 0 -> 1 -> 0
// the same silence). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the torched cell, the emitter's own template order, the
// priced cells no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: fights (the combat mass - the proven integer cell, the
// zero lawful - the fight-less face keeps the healthy zero), shelters
// (the defense hand the side-car holds - the shelters the same night
// rode, the cell rides the row as a number, never a second word). The
// trend reads the combat mass's arc two steps deep (the family's own
// two-step shape): both steps down = the combat weather's own fade
// (the fights went quiet), both steps up = the combat weather's own
// swell (the mob surge), a trade = the swing. A held step prices no
// direction - the honest silence (the family's own held law); a
// three-face zero combat mass prices nothing - the fleet never fought
// the whole arc (the lawful silence the .255 churn ceiling's own
// lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const FIGHTS_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(\d+) planted=(\d+) torched=(\d+) fights=(0|[1-9]\d*) kills=(\d+) shelters=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own fights cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{fights: number, shelters: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterFightsCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { fights: 0, shelters: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = FIGHTS_RE.exec(l)
    if (!m) continue
    mass.fights = Number(m[16]) // the head chain's own capture order: the chain cells ride m[1..15], the priced cell rides m[16], the kills neighbor rides m[17], the side-car rides m[18]
    mass.shelters = Number(m[18])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the fight-less face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {fights,shelters}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterFightsConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.fights) && numOk(s.shelters)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the combat mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never fought -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {fights,shelters}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterFightsTrendRow (e) {
  if (!counterFightsConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.fights
  const p = prev.fights
  const c = cur.fights
  // the fleet never fought across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const shelterArc = `the shelters rode ${back.shelters} -> ${prev.shelters} -> ${cur.shelters}`
  const tail = "(the pounce book keeps the pounce cells' own combat seat (the .264 word), the kills word's row keeps the kill tally's own seat (the .265 word), the rescues word's row keeps the rescue lane (the .266 word), the smelted word's row keeps the furnace seat (the .269 word), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word) - the combat mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters fights trend (v0.976.273): the combat weather's own fade ran two steps deep - ${arc} - the combat mass's own fade, ${shelterArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters fights trend (v0.976.273): the combat weather's own swell ran two steps deep - ${arc} - the combat mass's own swell, ${shelterArc} ${tail}`
  }
  return `the counters fights trend (v0.976.273): the combat weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${shelterArc} ${tail}`
}
