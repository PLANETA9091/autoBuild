//
// relogclock.mjs - THE RELOG'S OWN CLOCK (v0.966.0)
//
// The throne's third lane's own WHEN (the shared lattice's fourth book).
// The instability court's own seats: the churn lane's WHEN rides the arm
// clock (v0.965.0 - the rescue starts' phase book), the freeze lane's
// WHEN rides the standdown's clock (v0.921.0 - the thirds' own cut), but
// the relog lane's own WHEN never rode a seat: whether the reconnects
// ride the opening (the entry window's own churn - the launch window's
// geometry is the front), the middle (the reconnect cadence is the
// front) or the closing thirds (the end-phase's own churn tax - the
// drain's late legs drop the sessions) stayed unpriced. The faces kept
// naming the relog lane's WHO (the throne's relog crown, the dive
// join's return-to-water F18+F3 60/71) - the WHEN rode raw.
//
// The clock rides the shared phase lattice (phasebook.mjs - the
// one-lattice law, the same court the smelt ledger's clips, the bank
// door's leg and the o2 arm's starts ride) at the pulse rail's own
// anchors (opendeaf's parsePulseAnchor - the one rail parser, never
// forked) with the relog grammar (frozencensus's parseFrozenRelog - the
// one relog parser, never forked, both tree eras ride): the relog
// lines' own indexes and the pulse anchors ride the SAME walk (one
// scan - the o2arm clock's own law, the bankdocket door clock's own
// structure), the midpoint classifies into the clock's thirds, a
// missing end reads 'unplaced' (counted, never assumed), a wide
// bracket counts wide.
//
// THE FENCE (the o2arm deaths-fence's own law): the book's own family
// count agrees with the census's own relogs.n two ways - two walks of
// one grammar must land the same family, a mismatch names a forked
// reader and prices nothing. THE VERDICT rides the 2:1 dominance law
// (a tie owns nothing - the honest silence: the storm has no seat).
// The verdict reads the fence at its own door (a lying book prices
// nothing - the fence law).
//
// Mining surface only: zero fleet wiring, zero new log lines, zero
// census shape change - CENSUS GUARD. Pure: reads, never mutates.
// Junk-safe end to end: a non-object census, a raw blob, a zero or
// missing relog family read null (the row stays silent - the v0.379.0
// precedent); non-string lines are skipped (the index still rides -
// the position is the truth).
//
import { parseFrozenRelog } from './frozencensus.mjs' // the one relog parser (frozencensus imports nothing - no cycle)
import { parsePulseAnchor } from './opendeaf.mjs' // the pulse rail's one anchor parser (opendeaf imports only hopcensus - no cycle)
import { phaseBookOf } from './phasebook.mjs' // the shared lattice - the relog's seats ride the same court (the one-lattice law, zero re-spelling)

/**
 * relogClockBook(census, lines) - the relog lane's own clock cells: the
 * census's own relog family re-walked against the pulse rail (the fence
 * counts two ways).
 *
 * @param {object|null} [census] frozenCensus's own fold (the fence
 *   count's own source - relogs.n is the grammar's own census)
 * @param {string[]} [lines] the face log (array - the caller splits;
 *   a raw blob reads null, the o2arm's own fence)
 * @returns {{anchors: number, clockEnd: number|null, thirdS: number|null,
 *   n: number, byPhase: {early: number, mid: number, late: number,
 *   unplaced: number}, wide: number}|null} the clock cells (null on a
 *   junky census, a raw blob, an empty family, or a forked count)
 */
export function relogClockBook (census, lines) {
  if (!census || typeof census !== 'object' || Array.isArray(census)) return null
  if (!Array.isArray(lines)) return null
  const cn = census.relogs && typeof census.relogs === 'object' && !Array.isArray(census.relogs)
    ? Number(census.relogs.n)
    : NaN
  if (!Number.isFinite(cn) || cn <= 0) return null
  // the rail and the family ride ONE walk (the o2arm clock's own law)
  const anchors = []
  const idx = []
  let n = 0
  let li = -1
  for (const l of lines) {
    li++
    if (typeof l !== 'string') continue
    const pa = parsePulseAnchor(l)
    if (pa) anchors.push({ i: li, ts: pa.ts })
    if (parseFrozenRelog(l)) {
      idx.push(li)
      n++
    }
  }
  // the fence: two walks of one grammar agree - a forked reader prices
  // nothing (the o2arm deaths-fence's own law)
  if (n !== cn) return null
  // the clock cells - the shared lattice's own law byte for byte
  // (phasebook.mjs the one definition; the o2arm clock's own shape)
  const clockEnd = anchors.length ? anchors[anchors.length - 1].ts : null
  const thirdS = clockEnd !== null ? clockEnd / 3 : null
  const book = phaseBookOf(idx, anchors, thirdS)
  return { anchors: anchors.length, clockEnd, thirdS, n, byPhase: book.byPhase, wide: book.wide }
}

/**
 * The fence: an inconsistent clock prices nothing (the fence law - a
 * fold that cannot prove itself is junk, not evidence). The laws: the
 * family count a positive integer; the phases sum to the family; the
 * wide rides within; the rail's own honesty (no anchors = every seat
 * unplaced and a null clock, an anchored rail = the third rides the
 * clock's own third - thirdS === clockEnd / 3).
 *
 * @param {object|null} [c] relogClockBook's own cells
 * @returns {boolean} true when the clock may price
 */
export function relogClockConsistent (c) {
  if (!c || typeof c !== 'object' || Array.isArray(c)) return false
  if (!Number.isInteger(c.n) || c.n <= 0) return false
  const bp = c.byPhase
  if (!bp || typeof bp !== 'object' || Array.isArray(bp)) return false
  const ph = [bp.early, bp.mid, bp.late, bp.unplaced]
  for (const x of ph) { if (!Number.isInteger(x) || x < 0) return false }
  if (ph.reduce((a, v) => a + v, 0) !== c.n) return false
  if (!Number.isInteger(c.wide) || c.wide < 0 || c.wide > c.n) return false
  if (!Number.isInteger(c.anchors) || c.anchors < 0) return false
  if (c.anchors === 0) {
    if (bp.unplaced !== c.n) return false
    if (c.clockEnd !== null || c.thirdS !== null) return false
  } else {
    if (!Number.isFinite(c.clockEnd) || c.clockEnd < 0) return false
    if (c.thirdS === null || !(c.thirdS === c.clockEnd / 3)) return false
  }
  return true
}

// (v0.966.0) THE RELOG'S OWN CLOCK - the verdict. The book priced the
// relog lane's own family (the census's own cells, the fence's two
// ways) - the WHEN seats against the clock's thirds on the 2:1
// dominance law (a tie owns nothing - the honest silence): LATE = the
// closing thirds own the reconnects (the end-phase's own churn tax is
// the front - the drain's late legs drop the sessions); MID = the
// mid-run churn's pace prices the lane (the reconnect cadence is the
// front); EARLY = the entry window's own churn owns the opening (the
// launch window's geometry is the front). No dominance (the mixed
// spread), an empty family, or a lying book -> the honest silence
// (null - the storm has no seat, the 2:1 law).
export function relogClockVerdict (c) {
  if (!relogClockConsistent(c)) return null
  const p = c.byPhase
  if (p.late * 2 > c.n) return { verdict: 'late', n: c.n, byPhase: p, anchors: c.anchors, wide: c.wide, thirdS: c.thirdS }
  if (p.mid * 2 > c.n) return { verdict: 'mid', n: c.n, byPhase: p, anchors: c.anchors, wide: c.wide, thirdS: c.thirdS }
  if (p.early * 2 > c.n) return { verdict: 'early', n: c.n, byPhase: p, anchors: c.anchors, wide: c.wide, thirdS: c.thirdS }
  return null
}

// (v0.966.0) the relog's own row - the lever's own clause names the
// front's own reading; the anchor density rides so the reader judges
// the midpoint law (the zeroclock's own honesty). Junk never prints a
// clock (the honest silence's own row law).
export function relogClockRow (v) {
  if (!v || typeof v !== 'object') return null
  const { verdict, n, byPhase, anchors, wide } = v
  if ((verdict !== 'late' && verdict !== 'mid' && verdict !== 'early') ||
      !Number.isFinite(n) || n <= 0 || !byPhase || typeof byPhase !== 'object' ||
      !Number.isFinite(anchors) || anchors < 0 || !Number.isFinite(wide) || wide < 0) return null
  const { early, mid, late, unplaced } = byPhase
  for (const x of [early, mid, late, unplaced]) if (!Number.isFinite(x) || x < 0) return null
  const book = `early ${early} / mid ${mid} / late ${late} / unplaced ${unplaced}, ${wide} wide of ${anchors} anchor(s)`
  if (verdict === 'late') return `the relog's own clock (v0.966.0): the frozen relogs rode LATE-dominant (${late} of ${n}; ${book}) - the closing thirds own the reconnects: the drain's late legs drop the sessions - the end-phase's own churn tax is the front`
  if (verdict === 'mid') return `the relog's own clock (v0.966.0): the frozen relogs rode MID-dominant (${mid} of ${n}; ${book}) - the mid-run churn's pace prices the reconnects - the reconnect cadence is the front`
  return `the relog's own clock (v0.966.0): the frozen relogs rode EARLY-dominant (${early} of ${n}; ${book}) - the entry window's own churn owns the opening: the launch window's geometry is the front`
}
