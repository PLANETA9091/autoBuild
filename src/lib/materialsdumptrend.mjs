// (v0.976.248) THE MATERIALS DUMP'S OWN STOCKPILE MASS - the final
// report's own materials byName dump the word prices across the faces.
// THE EVIDENCE (the F473 face's own read, the run 39156167132 the
// 505daabe tree rode): the report block prints 'materials: {"oak_log":
// 159,"grass_block":93,"dirt":289,"stone":778,...}' - testbed/fleet19.mjs's
// own console.log(`materials: ${JSON.stringify(s.byName)}`) (one call
// site, the final report's own line 4952, the byName histogram the run's
// stats keep) - and no book owned the mass: the plan progress trend's
// own seat prices the plan's completion fraction ('plan progress: N/NN
// resources complete'), the materials plan header prose the deficit
// row's own lane rejects, the plan top the plantoptrend's own lane
// prices, the map trip the maptrip's own seat prices - the byName dump
// itself, the stockpile's own bottom ledger the plan's need side rides
// against, rode unread (the F473 face held 20 kinds, 1860u, the top
// stone=778).
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (JSON.stringify's own compact form byte-exact - no spaces after the
// colons or the commas, the keys the MC item ids hold ([a-z_]+), the
// values the inventory counts (no leading zero, no sign), the whole
// line anchored head and tail; the empty-object skin the emitter's own
// zero prints is the LAWFUL ZERO - the kinds and the units stay zero,
// the row never lies), the near-miss lanes never ride (the materials
// plan header, the plan progress row, the pretty-printed JSON the
// spaces betray, the truncated tail, the array skin, the quoted or
// upper-case keys, the negative or dotted values), the mass SUMS every
// dump the face carries (the dump a vote - no last-print-wins here,
// the stockpile the fleet prices is a sum; the empty skin votes zero).
//
// THE CELLS: units (the stockpile's own mass - the sum of the counts
// the byName pairs hold) and kinds (the stockpile's own width - the
// resource count) and topUnits (the high-water - the largest single
// count the dump holds). The trend reads the units mass arc two steps
// deep (the family's own two-step shape, the .245 climb run-up's own
// precedent): both steps down = the stockpile's own fade (the runs
// bank heavier than they mine - the drain wins), both steps up = the
// stockpile's own swell (the mining front's own grip - the pocket
// thickens), a trade = the swing. The kinds width and the top
// high-water ride the read's own side-cars (the width beside the mass,
// the peak beside both). A held step prices no direction - the honest
// silence (the family's own held law); a three-face zero mass prices
// nothing - the lane never fired (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .245 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const MATERIALS_DUMP_RE = /^materials: (\{"[a-z_]+":(?:0|[1-9]\d*)(?:,"[a-z_]+":(?:0|[1-9]\d*))*\})$/
const MATERIALS_DUMP_EMPTY_RE = /^materials: \{\}$/

/**
 * The census - the family's own strict grammar, the face's own mass
 * (every dump's own pairs a vote, the sums the mass keeps; the topUnits
 * the high-water keeps; the empty-object skin the lawful zero holds).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{kinds: number, units: number, topUnits: number}|null}
 *   the stockpile mass, or null when the lines themselves are junk (a
 *   face whose lines hold no materials print is the LAWFUL ZERO - the
 *   dump never rode, the zeros speak)
 */
export function materialsDumpCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { kinds: 0, units: 0, topUnits: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = MATERIALS_DUMP_RE.exec(l)
    if (!m) continue // the empty skin and every near-miss stay unread
    let units = 0
    let topUnits = 0
    let kinds = 0
    for (const pair of m[1].slice(1, -1).split(',')) {
      const i = pair.indexOf(':')
      const v = Number(pair.slice(i + 1))
      kinds++
      units += v
      if (v > topUnits) topUnits = v
    }
    mass.kinds += kinds
    mass.units += units
    if (topUnits > mass.topUnits) mass.topUnits = topUnits
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all three
 * proven integer counts (the zero lawful - the dump never rode).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {kinds,units,topUnits}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function materialsDumpTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.kinds) && s.kinds >= 0 &&
      Number.isInteger(s.units) && s.units >= 0 &&
      Number.isInteger(s.topUnits) && s.topUnits >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the units mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face mass is zero (the dump never rode - nothing to price), or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function materialsDumpTrendRow (e) {
  if (!materialsDumpTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.units
  const p = prev.units
  const c = cur.units
  // the dump never rode across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const kindsArc = `the width rode ${back.kinds} -> ${prev.kinds} -> ${cur.kinds}`
  const topArc = `the peak rode ${back.topUnits} -> ${prev.topUnits} -> ${cur.topUnits}`
  const tail = "(the plan progress trend prices the plan's own completion fraction across the faces, the materials plan header the deficit row's own lane prices, the plan top the plantoptrend's own lane prices, the map trip the maptrip's own seat prices, the loot ledger the final report's own banked read prices - the materials dump's mass row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the materials dump trend (v0.976.248): the stockpile's own fade ran two steps deep - ${arc} - the units mass's own fade, ${kindsArc}, ${topArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the materials dump trend (v0.976.248): the stockpile's own swell ran two steps deep - ${arc} - the units mass's own swell, ${kindsArc}, ${topArc} ${tail}`
  }
  return `the materials dump trend (v0.976.248): the units mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${kindsArc}, ${topArc} ${tail}`
}
