// (v0.976.283) THE COUNTERS RECOVERED CELL'S OWN CURE MASS - the
// counters line's own recovered cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... tools=18 recovered=2 reboots=1 ...' (F485's
// own face, run 39208857636) and '... recovered=3 ...' (F486, run
// 39211822338) and '... recovered=3 ...' (F487, run 39214842713) and
// '... recovered=1 ...' (F488, run 39222677292) and '... recovered=4
// ...' (F489, run 39230056077) and '... recovered=7 ...' (F490, run
// 39241011047) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the recovered cell the fleet's own cure tally
// (the in-loop recoveries the tool chain rode back - the bots the
// chain brought home) - and no book owned the cell's own mass across
// the faces: the tools word (the .271 word) prices the tools cell and
// rides the recovered tally as its side-car (the rider is not the
// pricing seat - the .269 furnace word's banked side-car the .276 bank
// word upgraded to its own seat the precedent holds), the upgraded
// word (the .267 word) anchors the recovered cell's bytes in its head
// chain and prices the upgraded cell beside, the climb word (the .270
// word) anchors the same bytes and prices the climbs cell beside, the
// recovery-narrative words price the 'tool recovery:' emitter's own
// lines (the toolrecoverytrend word's verdict lane, the
// recoverybraketrend word's brake lines, the climbouttoolrecoverytrend
// word's climb-out lane - the fleet19's own narrative prose, a
// different emitter the tally never rides), the kickbill module's
// login churn cast prices the console's join/left lane (a different
// emitter again), the counters family keeps the counters line's own
// seats (the .261-.277 band) - the cure mass itself rode unread (2 ->
// 3 -> 3 -> 1 -> 4 -> 7 the six-face arc no row read). THIS WORD TAKES
// THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the priced cell, the emitter's own template order, the
// priced cell no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: recovered (the cure mass - the proven integer cell, the
// zero lawful - the never-recovering face keeps the healthy zero),
// kicks (the boot hand the side-car holds - the server's own kick
// tally the same face carried, the tools word's recovered side-car and
// the upgraded word's reboots side-car and the .265/.266 words'
// shelters side-car keep their seats: the cell rides the row as a
// number, never a second word). The trend reads the cure mass's arc
// two steps deep (the family's own two-step shape): both steps down =
// the recovery weather's own fade (the cure hand went quiet), both
// steps up = the recovery weather's own swell (the cure surge), a
// trade = the swing. A held step prices no direction - the honest
// silence (the family's own held law); a three-face zero cure mass
// prices nothing - the fleet never recovered the whole arc (the
// lawful silence the .255 churn ceiling's own lawful-zero birth the
// precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const REC_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own recovered cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{recovered: number, kicks: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterRecoveredCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { recovered: 0, kicks: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = REC_RE.exec(l)
    if (!m) continue
    mass.kicks = Number(m[4]) // the head chain's own capture order: bots..tools ride m[1..5], the side-car rides m[4], the priced cell rides m[6]
    mass.recovered = Number(m[6])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-recovering face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {recovered,kicks}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterRecoveredConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.recovered) && numOk(s.kicks)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the cure mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never recovered -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {recovered,kicks}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterRecoveredTrendRow (e) {
  if (!counterRecoveredConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.recovered
  const p = prev.recovered
  const c = cur.recovered
  // the fleet never recovered across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  const kicksArc = `the kicks rode ${back.kicks} -> ${prev.kicks} -> ${cur.kicks}`
  const tail = "(the tools word's row keeps the tools cell's seat (the .271 word, the recovered arc its side-car - the rider keeps the ride, the seat the .283 word takes), the upgraded word's row keeps the upgraded cell's seat (the .267 word, the reboots arc its side-car), the climb word's row keeps the climbs cell's seat (the .270 word, the swords arc its side-car), the recovery-narrative words keep the 'tool recovery:' emitter's own verdict and brake and climb-out lanes (a different emitter the tally never rides), the kickbill module keeps the console's join/left churn cast (a different emitter again), the counters family keeps the counters line's own seats - the cure mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters recovered trend (v0.976.283): the recovery weather's own fade ran two steps deep - ${arc} - the cure mass's own fade, ${kicksArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters recovered trend (v0.976.283): the recovery weather's own swell ran two steps deep - ${arc} - the cure mass's own swell, ${kicksArc} ${tail}`
  }
  return `the counters recovered trend (v0.976.283): the recovery weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${kicksArc} ${tail}`
}
