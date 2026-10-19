// (v0.976.261) THE TORCHED CELL'S OWN NIGHT-LIGHT MASS - the counters
// line's own torched cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19
// recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313
// smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32
// pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3
// wt=2' (F479's own face, run 39178460638) - testbed/fleet19.mjs's
// counters line (fleet19.mjs:4682, one print per face, the fleet's own
// end body), the torched cell the per-bot stats.torched sums (the torches
// the fleet planted in the world - the night defense's own light, the
// ground the light owns) - and no book owned the cell's own mass across
// the faces: the torch.mjs module owns the torch lane's own runtime (the
// placement machinery, the stats cell's own producer), the fight
// ledger's own exit seat owns the fights' episode lane (the .782 word),
// the pounce book owns the pounce cells' own probe lane, the finalbody
// census owns the body cells it prices (the reboots/upgraded reads) -
// the torched mass itself rode unread (F479's 1 -> F480's 19, the
// nineteen-fold swell the night defense's own light painted and no row
// read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters line's
// own head chain byte-exact - the 'bots=' head the anchor rides whole
// through the planted -> torched -> fights cell band, the emitter's own
// template order, the three priced cells no leading zero no sign (the
// .248 house law), the anchor cells the emitter's own counts ride), the
// near-miss lanes never ride (the bare cell without the frame, the pretty
// spacing, the altered order, the leading zero, the negative count, the
// bot-tagged prefix, the drifted template, the truncated head, the wrong
// frame), the law LAST-PRINT-WINS - the counters line speaks once per
// face, the last print the freshest body the face held.
//
// THE CELLS: torched (the night light's own mass - the proven integer
// cell, the zero lawful - the unlit face keeps the healthy zero),
// planted (the other hand's own cell the side-car holds - the saplings
// the land took riding the same frame). The trend reads the torched
// mass's arc two steps deep (the family's own two-step shape): both
// steps down = the night light's own fade (the nights calm - the light
// rests), both steps up = the night light's own swell (the nights arm
// the light - F479's 1 -> F480's 19 the pair's own up-step), a trade =
// the swing. A held step prices no direction - the honest silence (the
// family's own held law); a three-face zero torched mass prices nothing
// - the night never armed the whole arc (the lawful silence the .255
// churn ceiling's own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const TORCHED_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(\d+) planted=(0|[1-9]\d*) torched=(0|[1-9]\d*) fights=(0|[1-9]\d*)/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own torched cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{planted: number, torched: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function torchedCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { planted: 0, torched: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = TORCHED_RE.exec(l)
    if (!m) continue
    mass.planted = Number(m[14]) // the head chain's own capture order: bots..smelted ride m[1..13], the priced cells ride m[14..16]
    mass.torched = Number(m[15])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the unlit face). Extra keys never
 * rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {planted,torched}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function torchedConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.planted) && numOk(s.torched)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the torched mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the night never armed -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {planted,torched}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function torchedTrendRow (e) {
  if (!torchedConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.torched
  const p = prev.torched
  const c = cur.torched
  // the night never armed across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const plantedArc = `the planted rode ${back.planted} -> ${prev.planted} -> ${cur.planted}`
  const tail = "(the counters line's own other cells keep their seats - the fights cell rides the fight ledger's own episode lane, the pounce book's own probe lane, the finalbody census's own body cells - the torched mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the torched trend (v0.976.261): the night light's own fade ran two steps deep - ${arc} - the torched mass's own fade, ${plantedArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the torched trend (v0.976.261): the night light's own swell ran two steps deep - ${arc} - the torched mass's own swell, ${plantedArc} ${tail}`
  }
  return `the torched trend (v0.976.261): the night light's own swing - ${arc} - the fade and the swell traded seats between the faces, ${plantedArc} ${tail}`
}
