//
// phasebook.mjs - THE PHASE BRACKET'S OWN SHARED LATTICE (v0.963.0)
//
// The v0.775.0 law's own home (the one-lattice law): the pulse rail's
// own bracket reads a line's WHEN - lo = the last anchor before the
// line, hi = the first after, the MIDPOINT classifies into the clock's
// thirds; a missing end reads 'unplaced' - counted, never assumed; a
// bracket wider than a third counts 'wide' - the sparse-anchor honesty
// the rows print so the reader judges it.
//
// The v0.962.0 clock clip's own clock shared the law with the v0.775.0
// fuel clip's own clock inside the smelt ledger's walk (the shared
// closure there); this module lifts the law out - ONE definition, every
// book's own seat rides the same court (the one-parser law by
// construction, the drift impossible). The v0.963.0 bank door's own
// clock is the second book on the shared court.
//
// Pure: reads, never mutates. Junk-safe: a non-array family or a
// non-array rail reads the honest empty book (nothing counted, nothing
// invented).
//

/**
 * phaseBookOf(idx, anchors, thirdS) - one clip family's own phase book
 * against the pulse rail.
 *
 * @param {number[]} idx the family's own line indexes (walk order)
 * @param {{i: number, ts: number}[]} anchors the pulse rail (walk order)
 * @param {number|null} thirdS the clock's own third (clockEnd / 3, null
 *   when the rail stood empty - every seat reads 'unplaced', the honest
 *   absence)
 * @returns {{byPhase: {early: number, mid: number, late: number, unplaced: number}, wide: number}}
 *   the family's own phase book (the seats' own reading, the wide count
 *   riding beside - the v0.775.0 shape byte for byte)
 */
export function phaseBookOf (idx, anchors, thirdS) {
  const byPhase = { early: 0, mid: 0, late: 0, unplaced: 0 }
  let wide = 0
  if (!Array.isArray(idx) || !Array.isArray(anchors)) return { byPhase, wide }
  for (const i of idx) {
    let lo = null; let hi = null
    for (const a of anchors) {
      if (a.i < i) lo = a.ts
      else { hi = a.ts; break }
    }
    const mid = lo !== null && hi !== null ? (lo + hi) / 2 : null
    let phase = 'unplaced'
    if (mid !== null && thirdS !== null) {
      if (mid <= thirdS) phase = 'early'
      else if (mid <= thirdS * 2) phase = 'mid'
      else phase = 'late'
      if (hi - lo > thirdS) wide++
    }
    byPhase[phase]++
  }
  return { byPhase, wide }
}
