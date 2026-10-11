//
// churnthrone.mjs - THE CHURN BOT'S THRONE (v0.961.0)
//
// Three instability lanes already own their per-bot seats: the rescue
// starts' own cast (v0.774.0 - THE CHURN'S OWN SOLO SPENDER), the frozen
// standdown's own bot (v0.931.0 - THE STANDDOWN'S OWN BOT), and the relog
// census's own per-bot cells (the v0.715.0 bill's subject, the v0.936.0
// cast's login seat when the kick lane rides). Every seat prices ONE lane.
// The faces kept assembling the CROSS-lane read by hand: face 226's own
// read - 'F5 owns 9 of 14 churn events + 10 of 17 frozen standdowns + 7 of
// 8 relogs - THE CHURN BOT'S THRONE'; face 210's own shape stopped one
// vote short (F18 held the cast 8/14 AND the standdown 7/8, the relog lane
// sat at 1/1 - a tie owns nothing). No book ever priced the join.
//
// THE THRONE LAW: the join consumes the three lanes' OWN cells verbatim
// (the rescue ledger's perBot/totals - the cast's own inputs; the
// standdown clock's own tally - the seat's own book, imported never
// re-spelled; the frozen census's relogs.n/byBot - the census's own walk),
// seats each non-empty lane under the books' own strict-majority law (a
// bot owns the lane only ABOVE half - a tie owns nothing, the
// storm-has-no-seat precedent), and seats the throne only when ONE bot
// holds EVERY non-empty lane's seat at once. THE JOIN FENCE: at least two
// non-empty lanes must ride - a single non-empty lane stays the existing
// seats' own verdict (the throne never double-prints the cast's or the
// standdown seat's own row). A contested lane (tie or spread) or two
// different owners reads no throne - the riders measure beside the
// silence (the branch law: one row never both). Junk never invents a
// throne: a missing or junky lane rides absent and votes never (an absent
// lane cannot block - the honest silence), a zero-lane join is the
// silence itself. Read-time tooling, zero fleet wiring, zero new log
// lines, zero census shape change - CENSUS GUARD.
//

import { standdownBotTally } from './standdownclock.mjs' // (v0.931.0) the standdown book's own tally - the lib's own cells, never re-spelled

// The three lanes' own keys (the row's own words ride these).
const CHURN = 'churn'
const STANDDOWN = 'standdown'
const RELOG = 'relog'

/**
 * Build one lane's cells from the book's own per-bot map + total.
 * The keys are the books' own bot bytes; a non-empty string key with a
 * finite positive count votes once. The total is the book's own
 * fleet-wide byte - a junky total leaves the lane silent (the honest
 * absence; no re-derivation - the census's n and byBot ship together).
 * @param {Object<string, number>|null|undefined} [byBot] the book's own per-bot counts
 * @param {number|null|undefined} [total] the book's own fleet-wide total
 * @returns {{byBot: Object<string, number>, total: number}|null} the lane's cells (null = the lane rides absent)
 */
const laneCells = (byBot, total) => {
  if (!byBot || typeof byBot !== 'object' || Array.isArray(byBot)) return null
  const t = Number(total)
  if (!Number.isFinite(t) || t <= 0) return null
  const cells = {}
  for (const [bot, n] of Object.entries(byBot)) {
    if (typeof bot !== 'string' || !bot) continue
    const c = Number(n)
    if (!Number.isFinite(c) || c <= 0) continue
    cells[bot] = c
  }
  if (!Object.keys(cells).length) return null
  return { byBot: cells, total: t }
}

/**
 * One lane's own strict-majority seat (the books' own law byte for byte:
 * the rescueStartBill's `topUnits <= starts - topUnits` refusal, the
 * standdownBotSeat's `owns > half` grant). The top bot owns the lane only
 * above half its events; a tie owns nothing.
 * @param {{byBot: Object<string, number>, total: number}} [lane] the lane's cells
 * @returns {{bot: string, owns: number, of: number}|null} the seat (null = contested/spread)
 */
const laneSeat = (lane) => {
  if (!lane) return null
  let topBot = null
  let topOwns = 0
  for (const [bot, owns] of Object.entries(lane.byBot)) {
    if (owns > topOwns) { topOwns = owns; topBot = bot }
  }
  if (topBot === null || topOwns * 2 <= lane.total) return null
  return { bot: topBot, owns: topOwns, of: lane.total }
}

/**
 * churnThrone(cells) - the three instability lanes' own join.
 * @param {{rescuePerBot?: Object<string, {starts?: number}>|null,
 *          rescueTotals?: {starts?: number}|null,
 *          standdownBook?: Object|null,
 *          relogsByBot?: Object<string, number>|null,
 *          relogsTotal?: number|null}} [cells]
 *   the three books' own cells: the rescue ledger's perBot/totals (the
 *   v0.774.0 cast's own inputs), the standdown clock's book (the v0.931.0
 *   seat's own input), the frozen census's relogs.n/byBot.
 * @returns {null|{bot: string,
 *   lanes: Array<{lane: string, owns: number, of: number}>,
 *   owns: number, ofEvents: number, share: number}}
 *   the throne (null = no join priced - a junky or single-lane or
 *   contested join reads the honest silence)
 */
export function churnThrone (cells) {
  const c = cells && typeof cells === 'object' ? cells : {}
  // the churn lane: the rescue ledger's own perBot rows (the row's own
  // .starts byte - the cast's own reading of the same cells)
  const churnByBot = {}
  if (c.rescuePerBot && typeof c.rescuePerBot === 'object' && !Array.isArray(c.rescuePerBot)) {
    for (const [bot, row] of Object.entries(c.rescuePerBot)) {
      const s = row && typeof row === 'object' && !Array.isArray(row) ? Number(row.starts) : NaN
      if (typeof bot === 'string' && bot && Number.isFinite(s) && s > 0) churnByBot[bot] = s
    }
  }
  const churnTotal = c.rescueTotals && typeof c.rescueTotals === 'object' && !Array.isArray(c.rescueTotals)
    ? Number(c.rescueTotals.starts)
    : NaN
  // the standdown lane: the clock book's own tally (imported, never re-spelled)
  const sdTally = standdownBotTally(c.standdownBook)
  // the relog lane: the census's own walk (n + byBot ship together)
  const relogLane = laneCells(c.relogsByBot, c.relogsTotal)

  const seats = []
  const churnLane = laneCells(churnByBot, churnTotal)
  if (churnLane) seats.push({ lane: CHURN, seat: laneSeat(churnLane), total: churnLane.total })
  if (sdTally) seats.push({ lane: STANDDOWN, seat: laneSeat(sdTally), total: sdTally.total })
  if (relogLane) seats.push({ lane: RELOG, seat: laneSeat(relogLane), total: relogLane.total })

  // THE JOIN FENCE: the throne prices the JOIN - a single non-empty lane
  // stays the existing seats' own verdict (the cast / the standdown bot /
  // the login cast already own their lanes' rows).
  if (seats.length < 2) return null
  // A contested lane owns nothing - the storm-has-no-seat precedent.
  if (seats.some((s) => !s.seat)) return null
  // One bot holds every non-empty lane's seat at once - or no throne.
  const first = seats[0].seat
  if (!seats.every((s) => s.seat.bot === first.bot)) return null

  const lanes = seats.map((s) => ({ lane: s.lane, owns: s.seat.owns, of: s.total }))
  const owns = seats.reduce((a, s) => a + s.seat.owns, 0)
  const ofEvents = seats.reduce((a, s) => a + s.total, 0)
  return { bot: first.bot, lanes, owns, ofEvents, share: +(owns / ofEvents).toFixed(3) }
}

/**
 * churnThroneRow(t) - the throne's own row (THE CHURN BOT'S THRONE).
 * Junk never prints a seat (the honest silence's own row law): a missing
 * or junky byte in any cell renders nothing.
 * @param {Object|null} [t] the churnThrone result
 * @returns {string|null} the row (null on junk)
 */
export function churnThroneRow (t) {
  if (!t || typeof t !== 'object' || Array.isArray(t)) return null
  const { bot, lanes, owns, ofEvents, share } = t
  if (typeof bot !== 'string' || !bot) return null
  if (!Array.isArray(lanes) || lanes.length < 2) return null
  for (const l of lanes) {
    if (!l || typeof l !== 'object' || Array.isArray(l)) return null
    if (typeof l.lane !== 'string' || !l.lane) return null
    if (!Number.isFinite(l.owns) || l.owns <= 0 || !Number.isFinite(l.of) || l.of <= 0 || l.owns > l.of) return null
  }
  if (!Number.isFinite(owns) || owns <= 0 || !Number.isFinite(ofEvents) || ofEvents <= 0 || owns > ofEvents) return null
  if (!Number.isFinite(share)) return null
  const laneBits = lanes.map((l) => `the ${l.lane} ${l.owns} of ${l.of}`).join(', ')
  return `the churn bot's own throne (v0.961.0): ${bot} owns the strict majority of every instability lane at once - ${laneBits} (${owns} of ${ofEvents} event(s), ${(share * 100).toFixed(1)}%) - THE CHURN BOT'S THRONE: one bot's own sessions churn the lanes together - the starts' cast (v0.774.0) priced the water lane, the standdown's bot (v0.931.0) named the freeze, nobody priced the lanes' own join`
}

/**
 * churnThroneRiders(cells) - the throne's silence's own companion (the
 * riders precedent, zero re-parsing): a MEASURE, never a verdict-owner -
 * the top two instability bots' concentration across the summed lanes
 * prices the shape the throne's law refused to name (the throne's owner
 * case leaves the companion unprinted - the branch law, fenced here like
 * loginChurnRiders). The order is deterministic (count desc, then the
 * name's own byte asc). Junk never invents a shape: a missing or empty
 * join, fewer than two bots riding events, or a zero-sum reads the
 * honest silence (null).
 * @param {Object|null} [cells] the same cells churnThrone reads
 * @returns {null|{leader: string, leaderOwns: number, runner: string,
 *   runnerOwns: number, ofEvents: number, pairOwns: number, share: number}}
 *   the riders (null beside a throne or on junk)
 */
export function churnThroneRiders (cells) {
  if (churnThrone(cells)) return null
  const c = cells && typeof cells === 'object' ? cells : {}
  const sums = {}
  const add = (bot, n) => {
    if (typeof bot !== 'string' || !bot) return
    const v = Number(n)
    if (!Number.isFinite(v) || v <= 0) return
    sums[bot] = (sums[bot] || 0) + v
  }
  if (c.rescuePerBot && typeof c.rescuePerBot === 'object' && !Array.isArray(c.rescuePerBot)) {
    for (const [bot, row] of Object.entries(c.rescuePerBot)) {
      if (row && typeof row === 'object' && !Array.isArray(row)) add(bot, row.starts)
    }
  }
  const sdTally = standdownBotTally(c.standdownBook)
  if (sdTally) for (const [bot, owns] of Object.entries(sdTally.byBot)) add(bot, owns)
  if (c.relogsByBot && typeof c.relogsByBot === 'object' && !Array.isArray(c.relogsByBot)) {
    for (const [bot, owns] of Object.entries(c.relogsByBot)) add(bot, owns)
  }
  const ranked = Object.entries(sums).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
  if (ranked.length < 2) return null
  const ofEvents = ranked.reduce((a, [, n]) => a + n, 0)
  if (ofEvents <= 0) return null
  const [leader, leaderOwns] = ranked[0]
  const [runner, runnerOwns] = ranked[1]
  const pairOwns = leaderOwns + runnerOwns
  return { leader, leaderOwns, runner, runnerOwns, ofEvents, pairOwns, share: +(pairOwns / ofEvents).toFixed(3) }
}

/**
 * churnThroneRidersRow(r) - the riders' own row (THE INSTABILITY'S OWN
 * CROWD): a measure of the shape, never a named owner. Junk never prints
 * a shape (the honest silence's own row law).
 * @param {Object|null} [r] the churnThroneRiders result
 * @returns {string|null} the row (null on junk)
 */
export function churnThroneRidersRow (r) {
  if (!r || typeof r !== 'object' || Array.isArray(r)) return null
  const { leader, leaderOwns, runner, runnerOwns, ofEvents, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isFinite(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofEvents) || ofEvents <= 0 || !Number.isFinite(pairOwns) || pairOwns > ofEvents ||
      !Number.isFinite(share)) return null
  return `the throne's own riders (v0.961.0): no bot owns every lane's majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofEvents} event(s) (${(share * 100).toFixed(1)}%) - THE INSTABILITY'S OWN CROWD: the throne's law held, the concentration is still real - the pair prices the sessions the throne refused to name`
}
