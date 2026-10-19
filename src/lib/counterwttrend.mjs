// (v0.976.288) THE COUNTERS WT CELL'S OWN WATER TABLE MASS - the
// counters line's own wt cell the word prices across the faces. THE
// EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... wet=2 wt=2' (F478's own face, run
// 39174346168) and '... wet=3 wt=2' (F479, run 39178460638) and '...
// wet=7 wt=2' (F480) and '... wet=3 wt=1' (F482) and '... wet=12
// wt=2' (F485) and '... wet=11 wt=3' (F490) - testbed/fleet19.mjs's
// counters line (fleet19.mjs:4682), one print per face, the wt cell
// the water table board's own size (fleet19.mjs's waterTableBoard -
// the board the wet lanes index, the tail cell the line's own last
// byte holds). The wet word (the .272 word) rides the wt cell's bytes
// in its grammar and its row (the side-car the rider never the priced
// voice) - the seat-upgrade precedent the family holds (the .269
// word's banked side-car the .276 word upgraded, the .268 word's
// kicks side-car the .284 word took, the .270 word's swords side-car
// the .285 word took, the .271 word's recovered side-car the .283
// word upgraded) - and the wt cell's own mass across the faces rode
// unread (2 -> 2 -> 2 -> 2 -> 1 -> 2 -> 2 -> 2 -> 2 -> 2 -> 1 -> 1
// -> 1 -> 3 the fourteen-face arc no row read). THIS WORD TAKES THE
// SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor
// rides whole through the wet cell, the emitter's own template
// order, the priced cell no leading zero no sign (the .248 house
// law), the tail boundary the LINE END - the wt cell the line's own
// last byte holds, the trailing skin the anchor refuses), the
// near-miss lanes never ride (the bare cell without the frame, the
// pretty spacing, the altered order, the leading zero, the negative
// count, the bot-tagged prefix, the drifted template, the truncated
// head, the wrong frame, the trailing junk the line-end anchor
// refuses), the law LAST-PRINT-WINS - the counters line speaks once
// per face, the last print the freshest body the face held. THE
// CELLS: wt (the board mass - the proven integer cell, the zero
// lawful - the empty-board face keeps the healthy zero), wet (the
// still-wet hand the side-car holds - the .272 word's own priced
// voice, the cell rides the row as a number never a second word).
// The board mass's own arc the row prices (the fade the board
// thinned, the swell the board swelled, the swing the trade - the
// family's own two-step shape), the held step the honest silence -
// the REAL faces' own held prairie the W478-479-480 through
// W489-490-491 windows the silence prices (ELEVEN of the twelve REAL
// windows the held law keeps - the water table board's own quiet the
// REAL arc holds, the W481-482-483 swing 2 -> 1 -> 2 the one REAL
// voice); the three-face zero mass prices nothing - the board never
// emptied the whole arc (the lawful silence the .284 word's own
// lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold, the fleet's own
// console never changes).

const COUNTER_WT_RE = /^bots=(0|[1-9]\d*) spawned=(0|[1-9]\d*) reconnects=(0|[1-9]\d*) kicks=(0|[1-9]\d*) tools=(0|[1-9]\d*) recovered=(0|[1-9]\d*) reboots=(0|[1-9]\d*) upgraded=(0|[1-9]\d*) swords=(0|[1-9]\d*) alive=(0|[1-9]\d*) climbs=(0|[1-9]\d*) banked=(0|[1-9]\d*) smelted=(0|[1-9]\d*) planted=(0|[1-9]\d*) torched=(0|[1-9]\d*) fights=(0|[1-9]\d*) kills=(0|[1-9]\d*) shelters=(0|[1-9]\d*) rescues=(0|[1-9]\d*) pounces=(0|[1-9]\d*) pounceLanded=(0|[1-9]\d*) airGlitches=(0|[1-9]\d*) claims=(0|[1-9]\d*) claimedHolds=(0|[1-9]\d*) wet=(0|[1-9]\d*) wt=(0|[1-9]\d*)$/

/**
 * The census - the family's own strict grammar, the face's own board
 * read (the counters line's own wt cell; LAST-PRINT-WINS - the last
 * strict line the face's own freshest body, the junk line never
 * poisons).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{wt: number, wet: number}|null} the cells (the zeros
 *   lawful - the face whose lines hold no counters line), null when
 *   the input itself is not an array
 */
export function counterWtCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { wt: 0, wet: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = COUNTER_WT_RE.exec(l)
    if (!m) continue
    mass.wt = Number(m[26]) // the priced cell - the board mass
    mass.wet = Number(m[25]) // the side-car - the still-wet hand
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. Every face must hold both proven integer cells (the zero
 * lawful - the empty-board face). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {wt,wet}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterWtConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.wt) && numOk(s.wet)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the board mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass (the board never emptied),
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {wt,wet}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterWtTrendRow (e) {
  if (!counterWtConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.wt
  const p = prev.wt
  const c = cur.wt
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent - the REAL faces' own held
  // prairie the eleven windows the silence prices)
  if (first === 0 || second === 0) return null
  const wetArc = `the wet hand rode ${back.wet} -> ${prev.wet} -> ${cur.wet}`
  const tail = "(the wet word's row keeps the wet seat (the .272 word - whose side-car rides this same wt hand, the rider never the priced voice), the hazard ledger and the water table board keep their runtime seats (the wet= and wt= cells the same tail band holds), the reboots cell the rollback word prices (the .287 word), the swords cell the forge word prices (the .285 word), the kicks cell the exclusion word prices (the .284 word), the spawned/banked/smelted cells their words keep (the .277/.276/.269 words) - the board mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters wt trend (v0.976.288): the board weather's own fade ran two steps deep - ${arc} - the water table thinned, ${wetArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters wt trend (v0.976.288): the board weather's own swell ran two steps deep - ${arc} - the water table swelled, ${wetArc} ${tail}`
  }
  return `the counters wt trend (v0.976.288): the board weather's own swing - ${arc} - the board and the calm traded seats between the faces, ${wetArc} ${tail}`
}
