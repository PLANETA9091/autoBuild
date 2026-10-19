// (v0.976.266) THE COUNTERS RESCUE CELL'S OWN TREADMILL MASS - the
// counters line's own rescues cell the word prices across the faces.
// THE NAME: the rescue book's own trend word (the v0.976.36 seat)
// prices the rescueLedger's own unclosed/starts totals per face - the
// scar's own two-step shape across three faces; this word prices a
// DIFFERENT cell on the SAME counters line - the fleet-wide rescues
// tally the per-bot stats.rescues sums - the names keep their lanes,
// co-existence by seat never by duplication.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... fights=9 kills=4 shelters=0 rescues=16
// pounces=2 pounceLanded=0 ...' (F478's own face, run 39174346168) and
// '... kills=2 shelters=0 rescues=32 ...' (F479, run 39178460638) and
// '... kills=1 shelters=0 rescues=28 ...' (F480, run 39184044983) and
// '... kills=1 shelters=0 rescues=37 ...' (F481, run 39188700500) and
// '... fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0
// airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1' (F482, run
// 39193658512) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per
// face, the rescues cell the per-bot stats.rescues sums (the rescue
// treadmill's own tally - the drownings and the starvings the fleet
// pulled back, the still-wet lane the watertable and wetchurn words
// price beside, the v0.218/v0.219 runs' own rescues=74/88 pile-up
// lesson the wetchurn book holds) - and no book owned the cell's own
// mass across the faces: the rescue book's own trend word (the
// v0.976.36 seat) prices the ledger's own unclosed/starts cells, the
// watertable.mjs and wetchurn.mjs modules own the still-wet rescue
// lines' own lanes (their comments quote the rescues= tallies as
// context, their censuses never anchor the counters cell), the
// calmrescue.mjs module owns the calm rescue's own runtime, the
// shelter.mjs module owns the shelter machinery's own runtime, the
// houndsheltertrend word prices the hound shelter's own line beside,
// the finalbody census owns the body's head cells - the rescue tally
// itself rode unread (16 -> 32 -> 28 -> 37 -> 30 the five-face arc no
// row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the shelters cell, the emitter's own template order,
// the priced cell no leading zero no sign (the .248 house law), the
// tail boundary the cell ends at whitespace or line end never
// mid-token - the fused-tail skin the grammar refuses), the near-miss
// lanes never ride (the bare cell without the frame, the pretty
// spacing, the altered order, the leading zero, the negative count,
// the bot-tagged prefix, the drifted template, the truncated head, the
// wrong frame), the law LAST-PRINT-WINS - the counters line speaks
// once per face, the last print the freshest body the face held.
//
// THE CELLS: rescues (the treadmill's own mass - the proven integer
// cell, the zero lawful - the never-rescuing face keeps the healthy
// zero), shelters (the shelter tally the side-car holds - the F482
// face's own first non-zero ride the storm night paid: the five faces'
// own 0 -> 0 -> 0 -> 0 -> 1 arc). The trend
// reads the rescue mass's arc two steps deep (the family's own
// two-step shape): both steps down = the rescue weather's own fade
// (the fleet walked safer ground), both steps up = the rescue
// weather's own swell (the treadmill rebounded), a trade = the swing.
// A held step prices no direction - the honest silence (the family's
// own held law); a three-face zero rescue mass prices nothing - the
// fleet never rescued the whole arc (the lawful silence the .255
// churn ceiling's own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const COUNTERS_RESCUE_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(\d+) planted=(\d+) torched=(\d+) fights=(\d+) kills=(\d+) shelters=(\d+) rescues=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own rescues cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{rescues: number, shelters: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterRescueCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { rescues: 0, shelters: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = COUNTERS_RESCUE_RE.exec(l)
    if (!m) continue
    mass.shelters = Number(m[18]) // the head chain's own capture order: bots..kills ride m[1..17], the side-car rides m[18], the priced cell rides m[19]
    mass.rescues = Number(m[19])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-rescuing face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {rescues,shelters}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterRescueConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.rescues) && numOk(s.shelters)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the rescue mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never rescued -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {rescues,shelters}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterRescueTrendRow (e) {
  if (!counterRescueConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rescues
  const p = prev.rescues
  const c = cur.rescues
  // the fleet never rescued across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const sheltersArc = `the shelters rode ${back.shelters} -> ${prev.shelters} -> ${cur.shelters}`
  const tail = "(the rescue book's own trend keeps the ledger's unclosed/starts seat (the v0.976.36 word), the still-wet lanes keep their seats (the watertable and wetchurn words price the rescue lines beside), the hound shelter's own lane keeps its seat, the calm rescue's own runtime keeps its seat - the rescue tally's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters rescue trend (v0.976.266): the rescue weather's own fade ran two steps deep - ${arc} - the rescue mass's own fade, ${sheltersArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters rescue trend (v0.976.266): the rescue weather's own swell ran two steps deep - ${arc} - the rescue mass's own swell, ${sheltersArc} ${tail}`
  }
  return `the counters rescue trend (v0.976.266): the rescue weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${sheltersArc} ${tail}`
}
