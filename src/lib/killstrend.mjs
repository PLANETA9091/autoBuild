// (v0.976.265) THE KILLS CELL'S OWN TALLY MASS - the counters line's own
// kills cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... planted=10 torched=2 fights=9 kills=4
// shelters=0 rescues=16 ...' (F478's own face, run 39174346168) and
// '... fights=3 kills=2 ...' (F479, run 39178460638) and '... fights=2
// kills=1 ...' (F480, run 39184044983) and '... fights=23 kills=1 ...'
// (F481, run 39188700500) and '... fights=19 kills=5 shelters=1 ...'
// (F482, run 39193658512) - testbed/fleet19.mjs's counters line
// (fleet19.mjs:4682), one print per face, the kills cell the per-bot
// stats.kills sum (the mobs the fleet put down - the tally the fight
// itself paid) - and no book owned the cell's own mass across the
// faces: the fight ledger's episode lane owns the fights cell's seat
// (the episode data the ledger prices, the trend seat the lane keeps),
// the death census owns the death mass (the bots' own deaths - the
// other side of the fight), the torched word (the .261 word) prices
// the torched cell beside, the claims word (the .263 word) prices the
// claims -> claimedHolds band, the pounce word (the .264 word) prices
// the pounce cells, the finalbody census owns the body's head cells it
// prices (the bots..climbs band) - the kills mass itself rode unread
// (4 -> 2 -> 1 -> 1 -> 5 the five-face arc no row read). THIS WORD
// TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the fights cell, the emitter's own template order, the
// priced cell no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: kills (the tally mass - the proven integer cell, the zero
// lawful - the never-fighting face keeps the healthy zero), shelters
// (the side-car the next cell holds - the built shelter count, the
// hound shelter's own lane keeps the runtime seat: the cell rides the
// row as a number, never a second word). The trend reads the kills
// mass's arc two steps deep (the family's own two-step shape): both
// steps down = the tally weather's own fade (the night gone quiet),
// both steps up = the tally weather's own swell (the fight surge), a
// trade = the swing. A held step prices no direction - the honest
// silence (the family's own held law); a three-face zero kills mass
// prices nothing - the fleet never fought the whole arc (the lawful
// silence the .255 churn ceiling's own lawful-zero birth the precedent
// holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const KILLS_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(\d+) planted=(\d+) torched=(\d+) fights=(\d+) kills=(0|[1-9]\d*) shelters=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own kills cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{kills: number, shelters: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function killsCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { kills: 0, shelters: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = KILLS_RE.exec(l)
    if (!m) continue
    mass.kills = Number(m[17]) // the head chain's own capture order: bots..fights ride m[1..16], the priced cell rides m[17], the side-car rides m[18]
    mass.shelters = Number(m[18])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-fighting face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {kills,shelters}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function killsConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.kills) && numOk(s.shelters)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the kills mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never fought -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {kills,shelters}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function killsTrendRow (e) {
  if (!killsConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.kills
  const p = prev.kills
  const c = cur.kills
  // the fleet never fought across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const shelterArc = `the shelters rode ${back.shelters} -> ${prev.shelters} -> ${cur.shelters}`
  const tail = "(the fight ledger's episode lane keeps the fights cell's seat, the hound shelter's lane keeps the shelters cell's runtime seat, the death census keeps the death mass's own row, the torched word's row keeps the counters frame's torched cell seat (the .261 word), the claims band keeps its seat (the .263 word), the pounce cells keep their seat (the .264 word) - the kills mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the kills trend (v0.976.265): the tally weather's own fade ran two steps deep - ${arc} - the kills mass's own fade, ${shelterArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the kills trend (v0.976.265): the tally weather's own swell ran two steps deep - ${arc} - the kills mass's own swell, ${shelterArc} ${tail}`
  }
  return `the kills trend (v0.976.265): the tally weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${shelterArc} ${tail}`
}
