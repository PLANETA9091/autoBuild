// (v0.976.277) THE COUNTERS SPAWNED CELL'S OWN BOOTSTRAP MASS - the
// counters line's own spawned cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints 'bots=19 spawned=19 reconnects=1 kicks=0 ...'
// (F478's own face, run 39174346168) and 'bots=19 spawned=19
// reconnects=20 kicks=12 ...' (F479, run 39178460638) and '... spawned=19
// reconnects=14 ...' (F480, run 39184044983) and '... spawned=19 ...'
// (F481, run 39188700500) and '... spawned=19 ...' (F482, run
// 39193658512) and '... spawned=19 ...' (F483, run 39200742905) and
// '... spawned=19 ...' (F484, run 39206031566) and '... spawned=19 ...'
// (F485, run 39208857636) - testbed/fleet19.mjs's counters line
// (fleet19.mjs:4682), one print per face, the spawned cell the fleet's
// own bootstrap end-state tally (the bots the fleet's own bootstrap
// spawned into the world - the fleet-configured body the bootstrap
// held whole) - and no book owned the cell's own mass across the
// faces: the finalbody census prices the BODY line's own bots/alive
// cells (a different emitter's lane - the final body line's own
// 'body 19/19' shape the face ends beside, never the counters line),
// the doom ledger keeps the deaths' own prose lane, the sockloss
// module keeps the disconnect lane, the reconnect word (the .268 word)
// prices the reconnects cell beside (its grammar anchors the spawned
// cell's bytes in the head chain, its census never prices them), the
// tools word (the .271), the wet word (the .272), the fights word
// (the .273), the planted word (the .274), the alive word (the .275)
// keep their lanes beside - the bootstrap mass itself rode unread
// (19 -> 19 -> 19 -> 19 -> 19 -> 19 -> 19 -> 19 the eight-face arc no
// row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole, the emitter's own template order, the priced cell no leading
// zero no sign (the .248 house law), the tail boundary the cell ends
// at whitespace or line end never mid-token - the fused-tail skin the
// grammar refuses), the near-miss lanes never ride (the bare cell
// without the frame, the pretty spacing, the altered order, the
// leading zero, the negative count, the bot-tagged prefix, the
// drifted template, the truncated head, the wrong frame), the law
// LAST-PRINT-WINS - the counters line speaks once per face, the last
// print the freshest body the face held. THE SIDE-CAR: the bots cell
// the head's own body tally the same bootstrap rode (the body the
// bootstrap spawned - the fleet's own total, the same front's own
// hand) the side-car holds - the cell rides the row as a number,
// never a second word (the co-existence by seat never by duplication;
// the reconnects cell the .268 word's own seat rides beside, never
// this row's).
//
// THE CELLS: spawned (the bootstrap mass - the proven integer cell,
// the zero lawful - the never-spawning face keeps the healthy zero),
// bots (the body tally the side-car holds). The trend reads the
// bootstrap mass's arc two steps deep (the family's own two-step
// shape): both steps down = the bootstrap weather's own fade (the
// spawn hand thinned - the bot the config asked for that never
// entered the world), both steps up = the bootstrap weather's own
// swell (the fleet the config grew into the world), a trade = the
// swing. A held step prices no direction - the honest silence (the
// family's own held law - the REAL eight faces' whole arc rode 19,
// every real window the word's birth prices held, the silences the
// word prices honest: the fleet's own bootstrap the healthiest shape
// the mass holds); a three-face zero bootstrap mass prices nothing -
// the family's own shape keeps the silence (the doom ledger's own
// prose lane prices the deaths' anatomy, the bars never invent). The
// synthetic arcs prove the speech machinery byte exact for the day a
// spawn fails (the 19 -> 18 the bootstrap weather's own first word
// will ride).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const SPAWNED_RE = /^bots=(\d+) spawned=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own spawned cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{spawned: number, bots: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterSpawnedCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { spawned: 0, bots: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SPAWNED_RE.exec(l)
    if (!m) continue
    mass.spawned = Number(m[2]) // the head chain's own capture order: the bots side-car rides m[1], the priced cell rides m[2]
    mass.bots = Number(m[1])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-spawning face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {spawned,bots}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterSpawnedConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.spawned) && numOk(s.bots)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the bootstrap mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass the family's own shape keeps
 * silent (the doom ledger's own prose lane prices the deaths'
 * anatomy), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {spawned,bots}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterSpawnedTrendRow (e) {
  if (!counterSpawnedConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.spawned
  const p = prev.spawned
  const c = cur.spawned
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
  const botsArc = `the bots rode ${back.bots} -> ${prev.bots} -> ${cur.bots}`
  const tail = "(the finalbody census's row keeps the body line's own bots/alive cells' seat - a different emitter's lane the face ends beside, the doom ledger's row keeps the deaths' own prose lane, the reconnect word's row keeps the churn seat (the .268 word - its grammar anchors the spawned cell's bytes in the head chain, its census never prices them), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word), the fights word's row keeps the combat seat (the .273 word), the planted word's row keeps the farm seat (the .274 word), the alive word's row keeps the survival seat (the .275 word) - the bootstrap mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters spawned trend (v0.976.277): the bootstrap weather's own fade ran two steps deep - ${arc} - the bootstrap mass's own fade, ${botsArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters spawned trend (v0.976.277): the bootstrap weather's own swell ran two steps deep - ${arc} - the bootstrap mass's own swell, ${botsArc} ${tail}`
  }
  return `the counters spawned trend (v0.976.277): the bootstrap weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${botsArc} ${tail}`
}
