// (v0.974.7) THE BURST'S OWN ARROW - the socket-loss burst -> main-freeze
// precedence lens, pure, mining-surface only.
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
// THE FIRST-READ LESSON (this lens's own live read on the same bytes,
// v0.974.7): the HAND'S 20s rode the burst's END bookend (the first gauge
// AFTER the last loss) - an unprovable assumption; the loss lines carry
// no ts, and the anchor law prices the loss at its FRESHEST PRECEDING
// gauge (ts=521 - every 268 loss sat before the 541 gauge line). The
// anchor gap reads 40s, NOT 20s: 'the freeze rode behind the burst but
// beyond the tail (gap 40s) - the arrow stretches'. The hand's
// burst -> freeze within one cadence reads WEAKER on the honest ruler -
// the fork (the join storm vs a common network event) stays open, now
// priced per face with a named, pinned fence.
//
// THE JOIN: every pulse gauge reading mainLate >= STALL_ADJACENT_MS (the
// 5s fence - the blackbox dump's own freeze threshold, mainfreeze.mjs's
// own constant) is a freeze seat with a ts. Every socket loss (the
// sockloss.mjs SOCK_LOSS_RE population - one parser one truth) anchors
// to its FRESHEST PRECEDING gauge's ts (the same cell the storm driver's
// own join prices - the log's only process-time clock; the loss lines
// carry no ts of their own). A freeze whose nearest preceding loss's
// anchor sits within BURST_FREEZE_TAIL_MS of the freeze's ts rode the
// burst's TAIL; one whose nearest loss rides beyond the tail is LATE;
// a freeze with no preceding loss at all stood ALONE.
//
// THE TAIL FENCE: BURST_FREEZE_TAIL_MS = 30000 - FACE 268's own anatomy
// is the anchor: the freeze landed 20s after the burst's last anchored
// ts, exactly one gauge cadence (the heartbeat's ~15-20s process-time
// spread). 30s gives the tail one and a half cadences of reach without
// swallowing the face's calm band; the fence is named and pinned so the
// next read prices against the same ruler.
//
// THE LAWS:
// - the honest silence: a face with no socket loss returns null - the
//   arrow needs a burst (the join family's own law; a freeze-only face
//   is the main freeze census's own subject, not this row's).
// - one parser one truth: the losses ride sockloss.mjs's own regex, the
//   gauges ride stormdriver.mjs's own (exported v0.974.7) regex - never
//   re-declared.
// - the measure-not-owner law: the verdict names the shape (tail / late
//   / alone counts and the gaps), never an owner's name.
// - the junk convention: a non-array reads null; junk fences fall back
//   to the defaults; a freeze ts behind its loss's anchor (junk clocks)
//   clamps the gap to 0s and keeps the tail class - the tightest tail
//   is still a tail.
// - zero fleet wiring, zero new log lines (the mining-surface precedent:
//   v0.379/.../v0.723.0/v0.826.0/v0.974.5/v0.974.6).

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
 *   alone: number, minGap: number|null, maxGap: number|null,
 *   tailMs: number, stallMs: number, verdict: string|null}}
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
  // forward-pointer walk the storm driver's own join rides)
  const anchors = new Array(losses.length).fill(null)
  let gi = 0
  let freshest = null
  for (let li = 0; li < losses.length; li++) {
    while (gi < gauges.length && gauges[gi].i < losses[li].i) { freshest = gauges[gi]; gi++ }
    anchors[li] = freshest ? freshest.ts : null
  }
  let nTail = 0
  let nLate = 0
  let nAlone = 0
  let minGap = null
  let maxGap = null
  let nFreezes = 0
  let li = 0
  let lastLossIdx = -1 // losses ascend by i; one forward pointer serves every freeze
  for (const g of gauges) {
    if (g.mainLate < fence) continue
    nFreezes++
    while (li < losses.length && losses[li].i < g.i) { lastLossIdx = li; li++ }
    if (lastLossIdx < 0 || anchors[lastLossIdx] == null) { nAlone++; continue }
    const raw = g.ts - anchors[lastLossIdx]
    const gapS = raw > 0 ? raw : 0 // junk clocks clamp - the tightest tail is still a tail
    const gapMs = gapS * 1000 // the gauge ts rides SECONDS, the fence rides ms - the fold is explicit
    if (minGap == null || gapS < minGap) minGap = gapS
    if (maxGap == null || gapS > maxGap) maxGap = gapS
    if (gapMs <= tail) nTail++
    else nLate++
  }
  return {
    n: losses.length,
    freezes: nFreezes,
    tail: nTail,
    late: nLate,
    alone: nAlone,
    minGap,
    maxGap,
    tailMs: tail,
    stallMs: fence,
    verdict: burstFreezeSeat({ freezes: nFreezes, tail: nTail, late: nLate, alone: nAlone, minGap, maxGap })
  }
}

/**
 * The arrow's own seat (pure): the shape's words, never an owner's name.
 * @param {object} [p]
 * @param {number} [p.freezes] gauges at/over the fence
 * @param {number} [p.tail] freezes within the tail of the nearest loss's anchor
 * @param {number} [p.late] freezes preceded but beyond the tail
 * @param {number} [p.alone] freezes with no preceding loss
 * @param {number|null} [p.minGap] the nearest preceded gap (s)
 * @param {number|null} [p.maxGap] the widest preceded gap (s)
 * @returns {string|null} the seat's words (null on junk arithmetic - the
 *   counts must fold: tail + late + alone === freezes whenever freezes > 0)
 */
export function burstFreezeSeat ({ freezes = 0, tail = 0, late = 0, alone = 0, minGap = null, maxGap = null } = {}) {
  const f = Number.isFinite(freezes) && freezes > 0 ? Math.floor(freezes) : 0
  const t = Number.isFinite(tail) && tail > 0 ? Math.floor(tail) : 0
  const l = Number.isFinite(late) && late > 0 ? Math.floor(late) : 0
  const a = Number.isFinite(alone) && alone > 0 ? Math.floor(alone) : 0
  if (f > 0 && t + l + a !== f) return null // the junk convention - the counts never fold
  const near = Number.isFinite(minGap) && minGap != null ? Math.max(0, Math.floor(minGap)) : null
  const wide = Number.isFinite(maxGap) && maxGap != null ? Math.max(0, Math.floor(maxGap)) : null
  const gaps = near == null
    ? ''
    : (wide != null && wide !== near ? ` (nearest gap ${near}s / widest ${wide}s)` : ` (gap ${near}s)`)
  if (f === 0) return 'the burst rode alone - no freeze followed it'
  if (t === f) return `the freeze rode behind the burst${gaps} - the arrow reads burst -> freeze`
  if (t === 0 && l === f) return `the freeze rode behind the burst but beyond the tail${gaps} - the arrow stretches`
  if (t === 0 && a === f) return `the freeze stood alone - no burst rode ahead of it (freeze(s) ${f})`
  return `the arrow splits - tail ${t} / late ${l} / alone ${a}`
}
