// (v0.974.5, rebuilt v0.974.6) THE STORM DRIVER'S OWN JOIN - the socket loss ↔ the mainLate
// stall's own freshest-witness lens, pure, mining-surface only.
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
// reads its NEAREST PRECEDING pulse gauge line ('b] n=.. ts=..s rss=..M
// late=..ms mainLate=..ms', the heartbeat's own emitter shape) with NO
// line bound. The direction is the driver's own: the stall PRECEDES the
// loss it drives. A loss whose freshest preceding gauge reads mainLate
// >= STALL_ADJACENT_MS is stall-adjacent; one whose gauge reads under
// the fence is calm; one with no preceding gauge at all is ungauged.
//
// THE REACH LAW (the v0.974.6 rebuild - two lessons priced):
//   - v0.974.5's 20-line reach priced 14 of FACE 268's 15 losses
//     UNGAUGED (the gauge's ~77-line cadence outran the window);
//   - the 80-line cadence reach STILL priced 11 of 15 ungauged - and
//     the measurement named the structure: FACE 268's whole 15-loss
//     burst sat inside ONE 330-line gauge silence (gauge n=26 @ts=521
//     -> n=27 @ts=541) - the burst lived between two gauges, and every
//     loss's freshest preceding gauge read mainLate 784ms (CALM). In
//     PROCESS TIME a gauge is never more than one cadence (~15-20s)
//     back - the line distance is a noise proxy (the death clusters'
//     line-rate spikes), the TS distance is the honest anchor. The
//     reach is therefore UNBOUNDED in lines: the freshest preceding
//     gauge IS the loss's own stall witness, whatever the line gap.
//   - AND THE DIRECTION FORK FLIPPED on the same bytes: the 268 burst
//     rode ts 521-541 with the main CALM before (784) and after (205),
//     while the ~25s main freeze sat at ts=561 - TWENTY SECONDS AFTER
//     the burst ended. The hand hypothesis ('the stall drives the
//     storm') reads BACKWARDS on this face: the arrow candidate is
//     burst -> freeze (the reconnect herd's join storm, the v0.14.2
//     class) or a common network event driving both. The lens prices
//     the driver seat per face; the direction rides the ts cells.
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

/** mainLate (ms) a gauge must read at the loss's freshest witness to call
 * the loss stall-adjacent. */
export const STALL_ADJACENT_MS = 5000

/**
 * The storm driver's own join over a face log (pure, junk-safe).
 *
 * @param {string[]|null} [lines] the face log (array of lines; anything else -> null)
 * @param {object} [opts]
 * @param {number} [opts.stallMs] the stall fence (default STALL_ADJACENT_MS)
 * @returns {null|{n: number, stall: number, calm: number, ungauged: number,
 *   byKind: Object<string, number>, stallKinds: Object<string, number>,
 *   maxStallLate: number, stallMs: number, verdict: string|null}}
 */
export function stormDriverJoin (lines, { stallMs = STALL_ADJACENT_MS } = {}) {
  if (!Array.isArray(lines)) return null
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
  let gi = 0 // gauges ascend by i; one forward pointer serves every loss
  let freshest = -1
  for (const loss of losses) {
    byKind[loss.kind] = (byKind[loss.kind] || 0) + 1
    while (gi < gauges.length && gauges[gi].i < loss.i) { freshest = gi; gi++ }
    if (freshest < 0) { ungauged++; continue }
    const g = gauges[freshest]
    if (g.mainLate >= th) {
      stall++
      stallKinds[loss.kind] = (stallKinds[loss.kind] || 0) + 1
      if (g.mainLate > maxStallLate) maxStallLate = g.mainLate
    } else {
      calm++
    }
  }
  return { n: losses.length, stall, calm, ungauged, byKind, stallKinds, maxStallLate, stallMs: th, verdict: stormDriverSeat({ stall, calm, ungauged, n: losses.length, maxStallLate }) }
}

/**
 * The join's own seat (pure): the shape's words, never an owner's name.
 * A strict stall majority names the stall the storm's own rider; a zero
 * stall names the calm honestly; everything between is the mixed seat
 * (the tie law - a share never owns).
 * @param {object} [p]
 * @param {number} [p.stall] stall-adjacent losses
 * @param {number} [p.calm] losses whose freshest gauge read under the fence
 * @param {number} [p.ungauged] losses with no preceding gauge at all
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
  if (s === 0 && c === 0) return null // the join never saw a gauge (all losses pre-gauge) - no words are honest yet
  if (s === 0 && u > 0) return `the losses rode their freshest gauges calm where witnessed (calm ${c} / ungauged ${u}) - the driver seat stays empty` // (the v0.974.5 first-read lesson: the ungauged share rides named, never silently)
  if (s === 0) return 'the losses rode calm gauges - the driver seat stays empty'
  if (s * 2 > t) return `the stall rides the storm (peak mainLate ${peak}ms at the freshest gauge)`
  return 'the seat is mixed - the storm shares its drivers'
}
