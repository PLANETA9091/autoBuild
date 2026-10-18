// (v0.976.245) THE CLIMB RUN-UP'S OWN GALLERY OPENING - the climb run-up
// lane's own gallery-opening mass the word prices across the faces.
// THE EVIDENCE (the F471 face's own read, the run 39152257685 the .242
// tree rode): the miner's own run-up walk prints 'F19 [F19] climb run-up:
// gallery opened toward 0,1 (digs 1) - the rise re-judges from the
// L-mouth' - src/bots/miner.mjs's climb run-up read (one call site, the
// walk-in proof the walkedIn gate holds) - and no book owned the mass:
// the climb family's own seats price the neighbours (the climb bridge's
// own placement trend prices the bridge mass, the climb diag's own trend
// prices the diagonal read, the climb wet escape's own trend prices the
// wet lane, the climb pounce probe's own trend prices the probe lane,
// the wet wall yield's own trend prices the yield mass) - the run-up's
// own gallery opening, the dig-through tax the rise's own L-mouth
// re-judge pays, rode unread (the F471 face held 3 openings, the digs
// 1/1/0).
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the miner's own template byte-exact - the frame, the toward cell, the
// digs cell, the 'the rise re-judges from the L-mouth' tail; the bot
// tags must agree - the climb lane's own backref law), the near-miss
// lanes never ride (the sibling climb bridge/diag/wet escape/pounce
// probe writes their own seats price, the truncated tail, the
// un-parenthesised digs cell, the altered tail prose, the wrong frame),
// the mass SUMS every opening the face carries (the opening a vote - no
// last-print-wins here, the gallery the fleet prices is a count).
//
// THE CELLS: openings (the gallery-opening count - the mass the face
// holds) and digs (the dig mass the openings paid - the sum) and
// lastDigs (the last print's own digs cell - the most recent read) and
// peakDigs (the high-water - the largest digs cell the face's prints
// hold). The trend reads the openings mass arc two steps deep (the
// family's own two-step shape, the .244 death spot memorize's own
// precedent): both steps down = the gallery's own fade (the rises come
// home cheaper - the dig-through tax's own drain), both steps up = the
// gallery's own swell (the rise front's own grip - the walls thicken), a
// trade = the swing. The dig mass and the peak ride the read's own
// side-cars (the paid mass beside the openings, the high-water beside
// both). A held step prices no direction - the honest silence (the
// family's own held law); a three-face zero mass prices nothing - the
// lane never fired (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .244 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const CLIMB_RUN_UP_RE = /^(F\d+) \[\1\] climb run-up: gallery opened toward -?\d+,-?\d+ \(digs (\d+)\) - the rise re-judges from the L-mouth$/

/**
 * The census - the family's own strict grammar, the face's own mass
 * (every gallery opening's own digs a vote, the sums the mass keeps;
 * the lastDigs cell the last print holds, the peakDigs the high-water
 * keeps).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{openings: number, digs: number, lastDigs: number, peakDigs: number}|null}
 *   the opening mass, or null when the lines themselves are junk (a
 *   face whose lines hold no run-up print is the LAWFUL ZERO - the lane
 *   never fired, the zeros speak)
 */
export function climbRunUpCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = CLIMB_RUN_UP_RE.exec(l)
    if (!m) continue
    mass.openings++
    const n = Number(m[2])
    mass.digs += n
    mass.lastDigs = n
    if (n > mass.peakDigs) mass.peakDigs = n
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all four
 * proven integer counts (the zero lawful - the lane never fired).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {openings,digs,lastDigs,peakDigs}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function climbRunUpTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.openings) && s.openings >= 0 &&
      Number.isInteger(s.digs) && s.digs >= 0 &&
      Number.isInteger(s.lastDigs) && s.lastDigs >= 0 &&
      Number.isInteger(s.peakDigs) && s.peakDigs >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the openings mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face mass is zero (the lane never fired - nothing to price), or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function climbRunUpTrendRow (e) {
  if (!climbRunUpTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.openings
  const p = prev.openings
  const c = cur.openings
  // the lane never fired across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const digsArc = `the dig mass rode ${back.digs} -> ${prev.digs} -> ${cur.digs}`
  const peakArc = `the peak rode ${back.peakDigs} -> ${prev.peakDigs} -> ${cur.peakDigs}`
  const tail = "(the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the diagonal's own read across the faces, the climb wet escape's own trend prices the wet lane's own mass across the faces, the climb pounce probe's own trend prices the probe lane's own mass across the faces, the wet wall yield's own trend prices the water's wall front's own yield mass across the faces - the climb run-up's mass row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the climb run-up trend (v0.976.245): the gallery's own fade ran two steps deep - ${arc} - the openings mass's own fade, ${digsArc}, ${peakArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the climb run-up trend (v0.976.245): the gallery's own swell ran two steps deep - ${arc} - the openings mass's own swell, ${digsArc}, ${peakArc} ${tail}`
  }
  return `the climb run-up trend (v0.976.245): the openings mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${digsArc}, ${peakArc} ${tail}`
}
