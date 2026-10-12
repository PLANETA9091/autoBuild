// (v0.974.5) THE STORM DRIVER'S OWN JOIN - the socket loss ↔ the mainLate
// stall's own line-window lens, pure, mining-surface only.
//
// WHAT PRICED IT (FACE 268 = 38284845691, the v0.974.4 tree, read by the
// 0200 fire): 15 socket losses (ECONNRESET 12 / EPIPE 3, one per bot, the
// thirds mid 7 / late 8) rode the same face as THE MAIN FREEZE FRONT'S
// RETURN - max mainLate 24750ms, one ~25s freeze at ts=561s named
// 'pf:done walk' - and the 0200 fire's own verdict named the stall "the
// socket storm's own candidate driver" BY HAND. The hypothesis rode
// unpriced: no row joins the losses to the pulse gauges' mainLate
// readings around them, so no face can say whether its storm rode a
// stall or calm gauges.
//
// THE JOIN: every socket-loss certificate (the sockloss.mjs SOCK_LOSS_RE
// population - the same lines the book row reads, one parser one truth)
// reads the pulse gauge lines ('b] n=.. ts=..s rss=..M late=..ms
// mainLate=..ms', the heartbeat's own emitter shape) in the W lines
// BEFORE it. The direction is the driver's own: the stall PRECEDES the
// loss it drives, so the window looks back only. A loss whose window
// holds a gauge with mainLate >= STALL_ADJACENT_MS is stall-adjacent;
// one whose window holds gauges but none past the threshold is calm;
// one with no gauge in the window is ungauged (the gauge's 15s cadence
// can miss a short window - the honest third cell, never a guessed
// reading).
//
// THE LAWS:
// - one parser one truth: the loss population is sockloss.mjs's own
//   regex (imported, never re-declared); the gauge line's ts + mainLate
//   cells ride the join's own regex (the stormcensus HB_RE anatomy -
//   the cell the join prices is the JOIN's own cell: nearest preceding
//   stall per loss, which no existing row claims).
// - the threshold: STALL_ADJACENT_MS = 5000 - the blackbox dump's own
//   freeze threshold (mainfreeze.mjs: "~0s is not a freeze (the dump's
//   own threshold is 5s)"); the same 5s fence separates a stall worth
//   blaming from the known 2-3s CPU-starvation band (allocvalve.mjs's
//   own measurement).
// - the window: 20 lines - the churn join's own precedent
//   (sockloss.mjs SOCK_JOIN_WINDOW = 20); junk window/threshold fall
//   back to the defaults (the fence law), a negative window reads 0
//   (the clamp law).
// - the honest zero: a face with no socket loss returns null (the
//   healthy-silence inverted is the BOOK row's own law - the join adds
//   no second silence); a non-array reads null (the junk convention).
// - the seat law: the verdict names the shape, never the owner - the
//   measure-not-owner precedent (the seat's own words ride the row).
//
// Zero fleet wiring, zero new log lines (the mining-surface precedent:
// v0.379/.../v0.723.0/v0.826.0).

import { SOCK_LOSS_RE } from './sockloss.mjs'

// The pulse gauge line's own anatomy (heartbeat.mjs's emitter template:
// `b] n=${n} ts=${tsSec}s rss=${rssMb}M late=${lateMs}ms mainLate=${mainLateMs}ms`).
const PULSE_GAUGE_RE = /b\] n=(\d+) ts=(\d+)s rss=(\d+)M late=(\d+)ms mainLate=(\d+)ms/

/** mainLate (ms) a gauge must read inside the window to call the loss stall-adjacent. */
export const STALL_ADJACENT_MS = 5000

/** How many lines back from a loss the join reads the gauges (the churn join's own 20). */
export const STORM_DRIVER_WINDOW = 20

/**
 * The storm driver's own join over a face log (pure, junk-safe).
 *
 * @param {string[]|null} [lines] the face log (array of lines; anything else -> null)
 * @param {object} [opts]
 * @param {number} [opts.window] lines back from a loss (default STORM_DRIVER_WINDOW)
 * @param {number} [opts.stallMs] the stall fence (default STALL_ADJACENT_MS)
 * @returns {null|{n: number, stall: number, calm: number, ungauged: number,
 *   byKind: Object<string, number>, stallKinds: Object<string, number>,
 *   maxStallLate: number, window: number, stallMs: number, verdict: string|null}}
 */
export function stormDriverJoin (lines, { window = STORM_DRIVER_WINDOW, stallMs = STALL_ADJACENT_MS } = {}) {
  if (!Array.isArray(lines)) return null
  const win = Number.isFinite(window) && window >= 0 ? Math.floor(window) : STORM_DRIVER_WINDOW
  const th = Number.isFinite(stallMs) && stallMs >= 0 ? Math.floor(stallMs) : STALL_ADJACENT_MS
  const losses = []
  const gauges = []
  for (let i = 0; i < lines.length; i++) {
    const line = typeof lines[i] === 'string' ? lines[i] : ''
    const m = SOCK_LOSS_RE.exec(line)
    if (m) { losses.push({ i, bot: m[1], kind: m[2] }); continue }
    const g = PULSE_GAUGE_RE.exec(line)
    if (g) gauges.push({ i, ts: Number(g[2]), mainLate: Number(g[5]) })
  }
  if (!losses.length) return null
  let stall = 0
  let calm = 0
  let ungauged = 0
  let maxStallLate = 0
  const byKind = {}
  const stallKinds = {}
  for (const loss of losses) {
    byKind[loss.kind] = (byKind[loss.kind] || 0) + 1
    // the gauges in the window BEFORE the loss (gauges ascend by i, so the
    // backward scan may stop at the first line-gap past the window)
    let saw = false
    let peak = 0
    for (let gi = gauges.length - 1; gi >= 0; gi--) {
      const g = gauges[gi]
      if (g.i >= loss.i) continue
      if (loss.i - g.i > win) break
      saw = true
      if (g.mainLate > peak) peak = g.mainLate
    }
    if (!saw) { ungauged++; continue }
    if (peak >= th) {
      stall++
      stallKinds[loss.kind] = (stallKinds[loss.kind] || 0) + 1
      if (peak > maxStallLate) maxStallLate = peak
    } else {
      calm++
    }
  }
  return { n: losses.length, stall, calm, ungauged, byKind, stallKinds, maxStallLate, window: win, stallMs: th, verdict: stormDriverSeat({ stall, calm, ungauged, n: losses.length, maxStallLate }) }
}

/**
 * The join's own seat (pure): the shape's words, never an owner's name.
 * A strict stall majority names the stall the storm's own rider; a zero
 * stall names the calm honestly; everything between is the mixed seat
 * (the tie law - a share never owns).
 * @param {object} [p]
 * @param {number} [p.stall] stall-adjacent losses
 * @param {number} [p.calm] calm-window losses
 * @param {number} [p.ungauged] losses with no gauge in the window
 * @param {number} [p.n] total losses
 * @param {number} [p.maxStallLate] the peak mainLate the stall class rode
 * @returns {string|null} the seat's words (null on junk arithmetic)
 */
export function stormDriverSeat ({ stall = 0, calm = 0, ungauged = 0, n = 0, maxStallLate = 0 } = {}) {
  const s = Number.isFinite(stall) && stall > 0 ? Math.floor(stall) : 0
  const c = Number.isFinite(calm) && calm > 0 ? Math.floor(calm) : 0
  const u = Number.isFinite(ungauged) && ungauged > 0 ? Math.floor(ungauged) : 0
  const t = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0
  const peak = Number.isFinite(maxStallLate) && maxStallLate > 0 ? Math.floor(maxStallLate) : 0
  if (!t || s + c + u > t) return null
  if (s === 0 && c === 0) return null // the window never saw a gauge (all ungauged) - no words are honest yet
  if (s === 0 && u > c) return `the gauges ride beyond the window's reach (ungauged ${u} of ${t}) - the driver stays unpriced` // (v0.974.5 first-read lesson: FACE 268 priced 14 of 15 ungauged - the calm words would overclaim; a stall > 0 keeps its own words)
  if (s === 0) return 'the losses rode calm gauges - the driver seat stays empty'
  if (s * 2 > t) return `the stall rides the storm (peak mainLate ${peak}ms in the window)`
  return 'the seat is mixed - the storm shares its drivers'
}
