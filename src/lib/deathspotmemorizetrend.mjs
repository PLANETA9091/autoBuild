// (v0.976.244) THE DEATH SPOT MEMORIZE'S OWN TREND - the water hazard
// ledger's own death-spot memorize mass the word prices across the faces.
// THE EVIDENCE (the fleet window 457..469 the artifact fetches re-spoke,
// the runs 39097587957..39143233533): the miner's own death read prints
// 'F18 [F18] water: death spot memorized as a hazard at [-122,45,397]
// (9 live, fleet-wide)' - src/bots/miner.mjs's death-spot memorize (the
// v0.201.0 record read the emitter's own note names, one call site) -
// and no book owned the mass: the hazard memorize trend's own seat
// RESERVED the lane by name ('DEATH-SPOT memorize's own lines never
// ride' - the exclusion note the sibling holds, the test pin 'the
// DEATH-SPOT memorize never rides - the water hazard board own lane'
// the reservation prices twice), the water rescue lane's own census
// prices the rescue mass, the reloot arm's own seat prices the own
// death spot's walk - the memorize census itself, the fleet's own
// death geography the ledger keeps, rode unread.
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the miner's own template byte-exact - the frame, the bracket cell,
// the live count, the 'fleet-wide' tail; the bot tags must agree - the
// wrl lane's own backref law), the near-miss lanes never ride (the
// sibling 'hazard memorized at' write the hazardmemorizetrend seat
// prices, the reloot arm's 'walking to the own death spot' line, the
// doom book's own death prose, the truncated tail, the un-parenthesised
// live cell), the mass SUMS every memorize the face carries (the
// memorize a vote - no last-print-wins here, the death the fleet
// prices is a count).
//
// THE CELLS: memorizes (the death-spot count - the mass the face holds)
// and live (the ledger's own size at the LAST memorize - the most
// recent read) and peak (the ledger's own high-water - the largest live
// cell the face's prints hold). The trend reads the memorize mass arc
// two steps deep (the family's own two-step shape, the .240 wet shift
// tunnel's own precedent): both steps down = the memorize's own fade
// (the runs come home safer - the hazards' own drain), both steps up =
// the memorize's own swell (the drowning front's own grip), a trade =
// the swing. The live ledger and the peak ride the read's own
// side-cars (the board's own size beside the mass, the high-water
// beside both). A held step prices no direction - the honest silence
// (the family's own held law); a three-face zero mass prices nothing -
// the lane never fired (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .240 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const DEATH_SPOT_MEMORIZE_RE = /^(F\d+) \[\1\] water: death spot memorized as a hazard at \[-?\d+,-?\d+,-?\d+\] \((\d+) live, fleet-wide\)$/

/**
 * The census - the family's own strict grammar, the face's own mass
 * (every memorize's own death a vote, the sum the mass keeps; the live
 * cell the last print holds, the peak the high-water keeps).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{memorizes: number, live: number, peak: number}|null}
 *   the memorize mass, or null when the lines themselves are junk (a
 *   face whose lines hold no death-spot print is the LAWFUL ZERO -
 *   the lane never fired, the zeros speak)
 */
export function deathSpotMemorizeCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { memorizes: 0, live: 0, peak: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = DEATH_SPOT_MEMORIZE_RE.exec(l)
    if (!m) continue
    mass.memorizes++
    const n = Number(m[2])
    mass.live = n
    if (n > mass.peak) mass.peak = n
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all three
 * proven integer counts (the zero lawful - the lane never fired).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {memorizes,live,peak}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function deathSpotMemorizeTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.memorizes) && s.memorizes >= 0 &&
      Number.isInteger(s.live) && s.live >= 0 &&
      Number.isInteger(s.peak) && s.peak >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the memorize mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face mass is zero (the lane never fired - nothing to price), or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function deathSpotMemorizeTrendRow (e) {
  if (!deathSpotMemorizeTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.memorizes
  const p = prev.memorizes
  const c = cur.memorizes
  // the lane never fired across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const liveArc = `the live ledger rode ${back.live} -> ${prev.live} -> ${cur.live}`
  const peakArc = `the peak rode ${back.peak} -> ${prev.peak} -> ${cur.peak}`
  const tail = "(the hazard memorize's own seat prices the hazard board's own write, the water rescue lane's own seat prices the rescue's own mass, the reloot arm's own seat prices the own death spot's walk - the death spot memorize's mass row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the death spot memorize trend (v0.976.244): the memorize's own fade ran two steps deep - ${arc} - the memorize mass's own fade, ${liveArc}, ${peakArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the death spot memorize trend (v0.976.244): the memorize's own swell ran two steps deep - ${arc} - the memorize mass's own swell, ${liveArc}, ${peakArc} ${tail}`
  }
  return `the death spot memorize trend (v0.976.244): the memorize mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${liveArc}, ${peakArc} ${tail}`
}
