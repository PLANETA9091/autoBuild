// (v0.976.287) THE COUNTERS REBOOTS CELL'S OWN ROLLBACK MASS - the
// counters line's own reboots cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry):
// the final report prints '... reboots=0 upgraded=19 swords=20 ...'
// (F478's own face, run 39174346168) and '... reboots=1 ...' (F480)
// and '... reboots=3 ...' (F487, run 39214842713) and '... reboots=1
// upgraded=13 swords=16 ...' (F491, run 39250996033) and '...
// reboots=1 upgraded=16 ...' (F492, the fleet19-log artifact of run
// 39255972997) - testbed/fleet19.mjs's counters line (fleet19.mjs:
// 4682), one print per face, the reboots cell the tool chain's own
// rollback tally (the JVM reboots the smith chain spent to keep the
// tables alive - the resurrect budget's own field tally the same run
// carried) - and no book owned the cell's own mass across the faces:
// the upgraded word (the .267 word) rides the reboots hand as its own
// side-car (the rider is not the pricing seat - the .269 furnace
// word's banked side-car the .276 bank word upgraded to its own seat,
// the .271 word's recovered side-car the .283 word took, the .268
// word's kicks side-car the .284 word took, the .270 word's swords
// side-car the .285 word took - THE SIDE-CAR UPGRADE THE FIFTH TIME
// THE SEAT TAKES), the swords word (the .285 word) anchors the same
// reboots bytes in its head chain and prices the swords cell beside,
// the resurrect budget prices the JVM restart economics lane (the
// v0.56.0 word's own runway book - the 'SERVER DEATH WATCHDOG' prose
// a different emitter the tally never rides), the counters family
// keeps the counters line's own seats (the .261-.286 band) - the
// rollback mass itself rode unread (0 -> 0 -> 1 -> 0 -> 1 -> 0 -> 0
// -> 1 -> 0 -> 3 -> 0 -> 0 -> 1 -> 1 -> 1 the fifteen-face arc no row
// read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor
// rides whole through the priced cell, the emitter's own template
// order, every cell the no-leading-zero no-sign shape the .248 house
// law and the .285 word's own all-cells strictness hold, the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: reboots (the rollback mass - the proven integer cell,
// the zero lawful - the never-rebooting face keeps the healthy zero),
// upgraded (the forge hand the side-car holds - the .267 word's own
// priced voice the same face carried, the swords word's upgraded
// side-car and the recovered word's kicks side-car keep their seats:
// the cell rides the row as a number, never a second word). The trend
// reads the rollback mass's arc two steps deep (the family's own
// two-step shape): both steps down = the rollback weather's own fade
// (the reboots quieted), both steps up = the rollback weather's own
// swell (the reboot storm), a trade = the swing (the REAL faces' own
// flip-flop the six swings price - the JVM reboots never walked two
// steps one way on the REAL arc). A held step prices no direction -
// the honest silence (the family's own held law); a three-face zero
// rollback mass prices nothing - the fleet never rebooted the whole
// arc (the lawful silence the .255 churn ceiling's own lawful-zero
// birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold, the fleet's own console
// never changes).

const COUNTER_REBOOTS_RE = /^bots=(0|[1-9]\d*) spawned=(0|[1-9]\d*) reconnects=(0|[1-9]\d*) kicks=(0|[1-9]\d*) tools=(0|[1-9]\d*) recovered=(0|[1-9]\d*) reboots=(0|[1-9]\d*) upgraded=(0|[1-9]\d*)(?: |$)/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own reboots cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{reboots: number, upgraded: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterRebootsCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { reboots: 0, upgraded: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = COUNTER_REBOOTS_RE.exec(l)
    if (!m) continue
    mass.reboots = Number(m[7]) // the head chain's own capture order: bots..recovered ride m[1..6], the priced cell rides m[7], the side-car rides m[8]
    mass.upgraded = Number(m[8])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-rebooting face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {reboots,upgraded}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterRebootsConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.reboots) && numOk(s.upgraded)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the rollback mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never rebooted -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {reboots,upgraded}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterRebootsTrendRow (e) {
  if (!counterRebootsConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.reboots
  const p = prev.reboots
  const c = cur.reboots
  // the fleet never rebooted across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  const upgradesArc = `the upgrades rode ${back.upgraded} -> ${prev.upgraded} -> ${cur.upgraded}`
  const tail = "(the upgraded word's row keeps the upgraded cell's seat (the .267 word - whose side-car rides this same reboots hand, the rider keeps the ride, the seat the .287 word takes), the swords word's row keeps the swords cell's seat (the .285 word - whose head chain anchors these same reboots bytes, the forge cells the family keeps), the resurrect budget keeps the JVM restart economics lane (the v0.56.0 word's own runway book - the 'SERVER DEATH WATCHDOG' prose a different emitter the tally never rides), the counters family keeps the counters line's own seats - the rollback mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters reboots trend (v0.976.287): the rollback weather's own fade ran two steps deep - ${arc} - the rollback mass's own fade, ${upgradesArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters reboots trend (v0.976.287): the rollback weather's own swell ran two steps deep - ${arc} - the rollback mass's own swell, ${upgradesArc} ${tail}`
  }
  return `the counters reboots trend (v0.976.287): the rollback weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${upgradesArc} ${tail}`
}
