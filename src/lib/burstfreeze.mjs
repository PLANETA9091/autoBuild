// (v0.974.7, window-honest v0.974.8) THE BURST'S OWN ARROW - the
// socket-loss burst -> main-freeze precedence lens, pure, mining-surface
// only.
//
// WHAT PRICED IT (the v0.974.6 fire's direction fork, on FACE 268 =
// 38284845691's own bytes): the 15-loss burst rode ts 521-541 with the
// main CALM at BOTH bookends (gauge n=26 @ts=521 mainLate=784 -> n=27
// @ts=541 mainLate=205), while the ~25s main freeze sat at ts=561 -
// TWENTY SECONDS AFTER the burst's last anchored ts. The hand hypothesis
// ('the stall drives the storm') read BACKWARDS on that face; the arrow
// candidate flipped to burst -> freeze (the reconnect herd's join storm,
// the v0.14.2 class) or a common network event driving both. The flip
// rode BY HAND - no row prices the arrow, so no face can say whether its
// freeze rode behind a burst or stood alone.
//
// THE FIRST-READ LESSON (v0.974.7's live read on the same bytes): the
// HAND'S 20s rode the burst's END bookend (the first gauge AFTER the
// last loss) - an unprovable assumption; the loss lines carry no ts, and
// the anchor law prices the loss at its FRESHEST PRECEDING gauge (ts=521
// - every 268 loss sat before the 541 gauge line), so the anchor gap
// read 40s, NOT 20s: 'the arrow stretches'.
//
// THE GAP WINDOW (the v0.974.8 rebuild - the two hands reconciled): the
// anchor gap is the gap's UPPER bound (the loss sits somewhere AFTER its
// anchor gauge), and the first gauge AFTER the loss - the end bookend
// the hand rode - is the gap's LOWER bound (the loss sits somewhere
// BEFORE it), valid only when that bookend precedes the freeze line.
// The honest cell is the WINDOW [lower..upper], and the tail question
// splits three ways:
//   - the whole window at/under the tail fence -> TAIL (the freeze rode
//     behind the burst at every provable reach);
//   - the whole window beyond the fence -> LATE (the arrow stretches);
//   - the window STRADDLING the fence -> EDGE (the tail reads
//     INDETERMINATE - neither hand's number is provable, the fork stays
//     open). FACE 268's own read at the window: [20s..40s] across the
//     30s fence - EDGE, the honest word the two fires argued past.
//
// THE JOIN: every pulse gauge reading mainLate >= STALL_ADJACENT_MS (the
// 5s fence - the blackbox dump's own freeze threshold, mainfreeze.mjs's
// own constant) is a freeze seat with a ts. Every socket loss (the
// sockloss.mjs SOCK_LOSS_RE population - one parser one truth) anchors
// to its FRESHEST PRECEDING gauge's ts (the same cell the storm driver's
// own join prices - the log's only process-time clock; the loss lines
// carry no ts of their own) and bounds to its FIRST FOLLOWING gauge's ts
// (the end bookend, valid only before the freeze line).
//
// THE TAIL FENCE: BURST_FREEZE_TAIL_MS = 30000 - FACE 268's own anatomy
// is the anchor: the freeze landed one gauge cadence (~20s) after the
// burst's bookends. 30s gives the tail one and a half cadences of reach
// without swallowing the face's calm band; the fence is named and pinned
// so the next read prices against the same ruler.
//
// THE LAWS:
// - the honest silence: a face with no socket loss returns null - the
//   arrow needs a burst (the join family's own law; a freeze-only face
//   is the main freeze census's own subject, not this row's).
// - one parser one truth: the losses ride sockloss.mjs's own regex, the
//   gauges ride stormdriver.mjs's own (exported v0.974.7) regex - never
//   re-declared.
// - the measure-not-owner law: the verdict names the shape (tail / late
//   / edge / alone counts and the gap windows), never an owner's name.
// - the junk convention: a non-array reads null; junk fences fall back
//   to the defaults; junk clocks clamp to 0 (the tightest tail is still
//   a tail); a seat whose counts do not fold reads null.
// - zero fleet wiring, zero new log lines (the mining-surface precedent:
//   v0.379/.../v0.723.0/v0.826.0/v0.974.5/v0.974.6/v0.974.7).

import { SOCK_LOSS_RE } from './sockloss.mjs'
import { PULSE_GAUGE_RE, STALL_ADJACENT_MS } from './stormdriver.mjs'

/** How far (ms) behind the burst's last anchored ts a freeze may sit and
 * still read as riding the burst's tail (the FACE 268 anatomy's own
 * ruler: the freeze landed 20s after the burst - one gauge cadence). */
export const BURST_FREEZE_TAIL_MS = 30000

/**
 * The burst's own arrow over a face log (pure, junk-safe).
 *
 * @param {string[]|null} [lines] the face log (array of lines; anything else -> null)
 * @param {object} [opts]
 * @param {number} [opts.tailMs] the tail fence (default BURST_FREEZE_TAIL_MS)
 * @param {number} [opts.stallMs] the freeze fence (default STALL_ADJACENT_MS)
 * @returns {null|{n: number, freezes: number, tail: number, late: number,
 *   edge: number, alone: number, minGap: number|null, maxGap: number|null,
 *   minLower: number|null, maxUpper: number|null,
 *   tailMs: number, stallMs: number, verdict: string|null}}
 *   minGap/maxGap ride the anchor (upper) gaps in seconds;
 *   minLower/maxUpper ride the window's edges (the nearest lower bound,
 *   the widest upper bound) across the edge freezes' seats.
 */
export function burstFreezeJoin (lines, { tailMs = BURST_FREEZE_TAIL_MS, stallMs = STALL_ADJACENT_MS } = {}) {
  if (!Array.isArray(lines)) return null
  const tail = Number.isFinite(tailMs) && tailMs >= 0 ? Math.floor(tailMs) : BURST_FREEZE_TAIL_MS
  const fence = Number.isFinite(stallMs) && stallMs >= 0 ? Math.floor(stallMs) : STALL_ADJACENT_MS
  const losses = []
  const gauges = []
  for (let i = 0; i < lines.length; i++) {
    const line = typeof lines[i] === 'string' ? lines[i] : ''
    const m = SOCK_LOSS_RE.exec(line)
    if (m) { losses.push({ i, bot: m[1], kind: m[2] }); continue }
    const g = PULSE_GAUGE_RE.exec(line)
    if (g) gauges.push({ i, ts: Number(g[2]), mainLate: Number(g[5]) })
  }
  if (!losses.length) return null // the arrow needs a burst - the honest silence
  // each loss's freshest preceding gauge ts (the anchor cell - the same
  // forward-pointer walk the storm driver's own join rides) and its
  // first following gauge (the end bookend - the gap's lower bound,
  // valid only when it precedes the freeze line)
  const anchors = new Array(losses.length).fill(null)
  const endBooks = new Array(losses.length).fill(null)
  let gi = 0
  let freshest = null
  for (let li = 0; li < losses.length; li++) {
    while (gi < gauges.length && gauges[gi].i < losses[li].i) { freshest = gauges[gi]; gi++ }
    anchors[li] = freshest ? freshest.ts : null
    endBooks[li] = gi < gauges.length ? gauges[gi] : null // the first gauge at/after the loss line
  }
  let nTail = 0
  let nLate = 0
  let nEdge = 0
  let nAlone = 0
  let minGap = null
  let maxGap = null
  let minLower = null
  let maxUpper = null
  let nFreezes = 0
  let li = 0
  let lastLossIdx = -1 // losses ascend by i; one forward pointer serves every freeze
  for (const g of gauges) {
    if (g.mainLate < fence) continue
    nFreezes++
    while (li < losses.length && losses[li].i < g.i) { lastLossIdx = li; li++ }
    if (lastLossIdx < 0 || anchors[lastLossIdx] == null) { nAlone++; continue }
    const raw = g.ts - anchors[lastLossIdx]
    const upper = raw > 0 ? raw : 0 // junk clocks clamp - the tightest tail is still a tail
    const book = endBooks[lastLossIdx]
    const lower = book && book.i < g.i ? Math.max(0, g.ts - book.ts) : 0 // no bookend before the freeze -> the gap's floor is unknown -> 0
    if (minGap == null || upper < minGap) minGap = upper
    if (maxGap == null || upper > maxGap) maxGap = upper
    // the window's own spread rides every bounded freeze (tail/late/edge alike)
    if (minLower == null || lower < minLower) minLower = lower
    if (maxUpper == null || upper > maxUpper) maxUpper = upper
    const upperMs = upper * 1000 // the gauge ts rides SECONDS, the fence rides ms - the fold is explicit
    const lowerMs = lower * 1000
    if (upperMs <= tail) nTail++ // the whole window inside the tail
    else if (lowerMs > tail) nLate++ // the whole window beyond the tail
    else nEdge++ // the window straddles the fence - the honest indeterminate
  }
  return {
    n: losses.length,
    freezes: nFreezes,
    tail: nTail,
    late: nLate,
    edge: nEdge,
    alone: nAlone,
    minGap,
    maxGap,
    minLower,
    maxUpper,
    tailMs: tail,
    stallMs: fence,
    verdict: burstFreezeSeat({ freezes: nFreezes, tail: nTail, late: nLate, edge: nEdge, alone: nAlone, minGap, maxGap, minLower, maxUpper })
  }
}

/**
 * The arrow's own seat (pure): the shape's words, never an owner's name.
 * @param {object} [p]
 * @param {number} [p.freezes] gauges at/over the fence
 * @param {number} [p.tail] freezes whose whole gap window sits at/under the tail
 * @param {number} [p.late] freezes whose whole gap window rides beyond the tail
 * @param {number} [p.edge] freezes whose gap window straddles the tail (indeterminate)
 * @param {number} [p.alone] freezes with no preceding loss
 * @param {number|null} [p.minGap] the nearest anchor (upper) gap (s)
 * @param {number|null} [p.maxGap] the widest anchor (upper) gap (s)
 * @param {number|null} [p.minLower] the window's nearest lower bound (s)
 * @param {number|null} [p.maxUpper] the window's widest upper bound (s)
 * @returns {string|null} the seat's words (null on junk arithmetic - the
 *   counts must fold: tail + late + edge + alone === freezes whenever freezes > 0)
 */
export function burstFreezeSeat ({ freezes = 0, tail = 0, late = 0, edge = 0, alone = 0, minGap = null, maxGap = null, minLower = null, maxUpper = null } = {}) {
  const f = Number.isFinite(freezes) && freezes > 0 ? Math.floor(freezes) : 0
  const t = Number.isFinite(tail) && tail > 0 ? Math.floor(tail) : 0
  const l = Number.isFinite(late) && late > 0 ? Math.floor(late) : 0
  const e = Number.isFinite(edge) && edge > 0 ? Math.floor(edge) : 0
  const a = Number.isFinite(alone) && alone > 0 ? Math.floor(alone) : 0
  if (f > 0 && t + l + e + a !== f) return null // the junk convention - the counts never fold
  const near = Number.isFinite(minGap) && minGap != null ? Math.max(0, Math.floor(minGap)) : null
  const wide = Number.isFinite(maxGap) && maxGap != null ? Math.max(0, Math.floor(maxGap)) : null
  const gaps = near == null
    ? ''
    : (wide != null && wide !== near ? ` (nearest gap ${near}s / widest ${wide}s)` : ` (gap ${near}s)`)
  const lo = Number.isFinite(minLower) && minLower != null ? Math.max(0, Math.floor(minLower)) : null
  const hi = Number.isFinite(maxUpper) && maxUpper != null ? Math.max(0, Math.floor(maxUpper)) : null
  const window = lo != null && hi != null ? ` - the gap rides ${lo}s..${hi}s across the fence` : ''
  if (f === 0) return 'the burst rode alone - no freeze followed it'
  if (t === f) return `the freeze rode behind the burst${gaps} - the arrow reads burst -> freeze`
  if (l === f) return `the freeze rode behind the burst but beyond the tail${gaps} - the arrow stretches`
  if (e === f) return `the tail reads indeterminate${window} - the fork stays open`
  if (t === 0 && a === f) return `the freeze stood alone - no burst rode ahead of it (freeze(s) ${f})`
  return `the arrow splits - tail ${t} / late ${l} / edge ${e} / alone ${a}`
}
