// (v0.976.264) THE POUNCE CELL'S OWN AIR MASS - the counters line's own
// pounce cells the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... rescues=16 pounces=2 pounceLanded=0
// airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2' (F478's own face,
// run 39174346168) and '... pounces=6 pounceLanded=0 ...' (F479, run
// 39178460638) and '... pounces=1 pounceLanded=0 ...' (F480, run
// 39184044983) and '... pounces=0 pounceLanded=0 ...' (F481, run
// 39188700500) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the pounce cells the per-bot stats.pounces /
// stats.pounceLanded sums (the pounces the fleet fired at mobs from the
// climb lane, the landed ones the air mass actually paid - the climb
// book's own fired/landed split, the pounceLanded cell the side-car) -
// and no book owned the cells' own mass across the faces: the
// climb-pounce machinery owns the runtime (the pounce lane's own probe,
// tests/unit/climb-pounce.test.mjs pins the emitter template rides the
// RESULT line), the torched word (the .261 word) prices the counters
// frame's torched cell beside, the claims word (the .263 word) prices
// the claims -> claimedHolds band, the finalbody census owns the body's
// head cells it prices (the bots..climbs band) - the pounce mass itself
// rode unread (2 -> 6 -> 1 -> 0 the four-face arc no row read). THIS
// WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the rescues cell, the emitter's own template order, the
// two priced cells no leading zero no sign (the .248 house law), the
// tail boundary the cell ends at whitespace or line end never
// mid-token - the fused-tail skin the grammar refuses), the near-miss
// lanes never ride (the bare cell without the frame, the pretty
// spacing, the altered order, the leading zero, the negative count, the
// bot-tagged prefix, the drifted template, the truncated head, the
// wrong frame), the law LAST-PRINT-WINS - the counters line speaks once
// per face, the last print the freshest body the face held.
//
// THE CELLS: pounces (the air mass - the proven integer cell, the zero
// lawful - the never-pouncing face keeps the healthy zero), pounceLanded
// (the landed mass the side-car holds - the zero the ground fight keeps:
// the pounces fired but never landed the whole arc). The trend reads the
// pounce mass's arc two steps deep (the family's own two-step shape):
// both steps down = the air weather's own fade (the mobs gone still),
// both steps up = the air weather's own swell (the pounce surge), a
// trade = the swing. A held step prices no direction - the honest
// silence (the family's own held law); a three-face zero pounce mass
// prices nothing - the fleet never pounced the whole arc (the lawful
// silence the .255 churn ceiling's own lawful-zero birth the precedent
// holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const POUNCE_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(\d+) planted=(\d+) torched=(\d+) fights=(\d+) kills=(\d+) shelters=(\d+) rescues=(\d+) pounces=(0|[1-9]\d*) pounceLanded=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own pounce cells; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{pounces: number, pounceLanded: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function pounceCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { pounces: 0, pounceLanded: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = POUNCE_RE.exec(l)
    if (!m) continue
    mass.pounces = Number(m[20]) // the head chain's own capture order: bots..rescues ride m[1..19], the priced cells ride m[20..21]
    mass.pounceLanded = Number(m[21])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-pouncing face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {pounces,pounceLanded}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function pounceConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.pounces) && numOk(s.pounceLanded)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the pounce mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never pounced -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {pounces,pounceLanded}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function pounceTrendRow (e) {
  if (!pounceConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.pounces
  const p = prev.pounces
  const c = cur.pounces
  // the fleet never pounced across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const landedArc = `the pounceLanded rode ${back.pounceLanded} -> ${prev.pounceLanded} -> ${cur.pounceLanded}`
  const tail = "(the climb book's own pounce lane keeps the probe's seat, the torched word's own row keeps the counters frame's first cell seat (the .261 word), the claims band keeps its seat (the .263 word) - the pounce mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the pounce trend (v0.976.264): the air weather's own fade ran two steps deep - ${arc} - the pounce mass's own fade, ${landedArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the pounce trend (v0.976.264): the air weather's own swell ran two steps deep - ${arc} - the pounce mass's own swell, ${landedArc} ${tail}`
  }
  return `the pounce trend (v0.976.264): the air weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${landedArc} ${tail}`
}
