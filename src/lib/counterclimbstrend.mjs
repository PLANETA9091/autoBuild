// (v0.976.270) THE COUNTERS CLIMB CELL'S OWN SCAFFOLD MASS - the
// counters line's own climbs cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... alive=19 climbs=34 banked=1104 ...' (F478's
// own face, run 39174346168) and '... climbs=24 ...' (F479, run
// 39178460638) and '... climbs=34 ...' (F480, run 39184044983) and
// '... climbs=34 ...' (F481, run 39188700500) and '... climbs=14 ...'
// (F482, run 39193658512) and '... climbs=32 ...' (F483, run
// 39200742905) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the climbs cell the fleet's own climb tally (the
// ladders and the scaffold steps the bots rode - the crater's own walls
// the climb hand served) - and no book owned the cell's own mass across
// the faces: the smelted word (the .269 word) prices the smelted cell
// beside (its grammar anchors the climbs cell's bytes in the head chain,
// its census never prices them), the upgraded word (the .267 word)
// prices the upgraded cell beside, the reconnect word (the .268 word)
// prices the reconnects cell beside, the finalbody census anchors the
// 'climbs=' closing anchor byte-exact and prices the body's bots/alive
// cells only, the bankcensus module prices the loot line's own
// banked/smelted cells (a different emitter's lane), the doom ledger
// keeps the failed climb cycles' own prose lane (the final bank's own
// verdict, a different emitter), the surface module keeps the runtime
// climb hand - the climb mass itself rode unread (34 -> 24 -> 34 -> 34
// -> 14 -> 32 the six-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the alive cell, the emitter's own template order, the
// priced cell no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: climbs (the scaffold mass - the proven integer cell, the
// zero lawful - the never-climbing face keeps the healthy zero), swords
// (the forge's blades the side-car holds - the smith chain's other
// product the re-forges rode, the upgraded word's reboots side-car and
// the .265/.266 words' shelters side-car keep their seats: the cell
// rides the row as a number, never a second word). The trend reads the
// scaffold mass's arc two steps deep (the family's own two-step shape):
// both steps down = the climb weather's own fade (the scaffold went
// quiet), both steps up = the climb weather's own swell (the climb
// surge), a trade = the swing. A held step prices no direction - the
// honest silence (the family's own held law); a three-face zero climb
// mass prices nothing - the fleet never climbed the whole arc (the
// lawful silence the .255 churn ceiling's own lawful-zero birth the
// precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const CLIMB_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own climbs cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{climbs: number, swords: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterClimbCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { climbs: 0, swords: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = CLIMB_RE.exec(l)
    if (!m) continue
    mass.swords = Number(m[9]) // the head chain's own capture order: bots..alive ride m[1..10], the side-car rides m[9], the priced cell rides m[11]
    mass.climbs = Number(m[11])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-climbing face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {climbs,swords}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterClimbConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.climbs) && numOk(s.swords)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the scaffold mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never climbed -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {climbs,swords}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterClimbTrendRow (e) {
  if (!counterClimbConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.climbs
  const p = prev.climbs
  const c = cur.climbs
  // the fleet never climbed across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  const swordsArc = `the swords rode ${back.swords} -> ${prev.swords} -> ${cur.swords}`
  const tail = "(the smelted word's row keeps the smelted cell's seat (the .269 word, the banked arc its side-car), the upgraded word's row keeps the upgraded cell's seat (the .267 word, the reboots arc its side-car), the reconnect word's row keeps the reconnects cell's seat (the .268 word), the finalbody census keeps the body's bots/alive seat (its grammar anchors the climbs cell's bytes, its census never prices them), the bankcensus module keeps the loot line's own banked/smelted seats, the doom ledger keeps the failed climb cycles' own prose lane (the final bank's own verdict, a different emitter), the surface module keeps the runtime climb hand - the climb mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters climb trend (v0.976.270): the climb weather's own fade ran two steps deep - ${arc} - the climb mass's own fade, ${swordsArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters climb trend (v0.976.270): the climb weather's own swell ran two steps deep - ${arc} - the climb mass's own swell, ${swordsArc} ${tail}`
  }
  return `the counters climb trend (v0.976.270): the climb weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${swordsArc} ${tail}`
}
