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
// (v0.974.13) THE FOLD'S OWN REFUSAL - the shadow's silence's own word.
// The shadow's law rides the honest silence in three shapes and the reads
// hand-derived the word twice (face 274's contested spread, face 275's
// sticky tie - both reads assembled the blocking lane by hand). The
// refusal names the fold's own blocking class: THE TIE (a leaderless
// lane owns nothing - the tied pair named at the top count), THE
// CONTESTED SPREAD (the lanes led apart - each lane's own leader named),
// THE LONE LANE (no fold on one lane - the join fence's own word). The
// branch law holds both ways: a seated throne reads no refusal word (the
// owner's own rows own the face), a seated shadow reads none (the seat
// row owns the face it named) - the refusal speaks ONLY beside the
// fold's own silence. Read-time tooling, zero fleet wiring, zero new log
// lines, zero census shape change - CENSUS GUARD.
//

import { standdownBotTally } from './standdownclock.mjs' // (v0.931.0) the standdown book's own tally - the lib's own cells, never re-spelled

// The three lanes' own keys (the row's own words ride these).
const CHURN = 'churn'
const STANDDOWN = 'standdown'
const RELOG = 'relog'
// (v0.974.11) the shadow's fourth lane's own key (the sticky book's own).
const STICKY = 'sticky'

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

// (v0.974.11) THE THRONE'S OWN SHADOW - the plurality fold the faces kept
// assembling by hand beside the throne's silence. WHAT PRICED IT: face
// 272's own read - the throne row refused to seat (the churn lane rode
// spread: F14 x19 + F6 x15 of 62 - no strict majority) and the hand still
// named the face from the books' own plurality seats ('F14 also owns the
// sticky book 15/26, the standdown book 13/22, 19 rescue starts - THE
// CHURN THRONE'S OWN FACE') - a cross-lane read NO book owned. THE
// SHADOW'S LAW: the same three lanes the throne reads PLUS the sticky
// book's own lane (the v0.924.0 seat's own cells, imported never
// re-spelled via the sticky lane's own cells) - each lane seats its
// PLURALITY leader (the top count; a tie at the top leads nobody - the
// tie law's own byte), and the shadow seats only when ONE bot leads
// EVERY non-empty lane's plurality at once (non-empty >= 2 - the join
// fence byte for byte). The shadow is NOT the throne: the throne's
// strict-majority law stays byte-stable (the branch law - the shadow
// returns null beside a seated throne; the throne row owns the owner's
// face, the shadow never double-prints it). A partial lead (the leader
// missing any lane) rides the honest silence - the riders row's own
// words own the spread. Junk never invents a shadow: a missing or junky
// lane rides absent and votes never (an absent lane cannot block - the
// honest silence), a zero-lane fold is the silence itself. Pure,
// read-time tooling, zero fleet wiring, zero new log lines, zero census
// shape change - CENSUS GUARD.

/**
 * The one lane's own plurality leader (the shadow's own seat byte: the
 * top count owns the lead; a tie at the top leads nobody - the lane
 * still rides, leaderless, and blocks the unanimity).
 * @param {{byBot: Object<string, number>, total: number}} [lane] the lane's cells
 * @returns {{bot: string, owns: number}|null} the leader (null = leaderless/tie)
 */
const laneLeader = (lane) => {
  if (!lane) return null
  let topBot = null
  let topOwns = 0
  let tie = false
  for (const [bot, owns] of Object.entries(lane.byBot)) {
    const v = Number(owns)
    if (!Number.isFinite(v) || v <= 0) continue
    if (v > topOwns) { topOwns = v; topBot = bot; tie = false } else if (v === topOwns && bot !== topBot) tie = true
  }
  if (topBot === null || tie) return null
  return { bot: topBot, owns: topOwns }
}

/**
 * shadowLanes(cells) - the shadow's four lanes' own shared walk (the
 * seat's own inputs and the refusal's own word read the SAME walk -
 * one walk per fold, never re-spelled between the cells).
 * @param {Object} [cells] the books' own cells (churnShadow's own shape)
 * @returns {Array<{lane: string, cells: {byBot: Object<string, number>, total: number}, leader: {bot: string, owns: number}|null}>} the non-empty lanes (each with its plurality leader, or the tie's null)
 */
const shadowLanes = (cells) => {
  const c = cells && typeof cells === 'object' ? cells : {}
  // the same three lanes the throne reads (the same walks, zero re-parsing)
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
  const sdTally = standdownBotTally(c.standdownBook)
  const relogLane = laneCells(c.relogsByBot, c.relogsTotal)
  const churnLane = laneCells(churnByBot, churnTotal)
  // the shadow's fourth lane: the sticky book's own cells (v0.924.0's
  // own fold re-shaped, never re-spelled)
  const stickyLane = laneCells(c.stickyByBot, c.stickyTotal)

  const lanes = []
  if (churnLane) lanes.push({ lane: CHURN, cells: churnLane, leader: laneLeader(churnLane) })
  if (sdTally) lanes.push({ lane: STANDDOWN, cells: sdTally, leader: laneLeader(sdTally) })
  if (relogLane) lanes.push({ lane: RELOG, cells: relogLane, leader: laneLeader(relogLane) })
  if (stickyLane) lanes.push({ lane: STICKY, cells: stickyLane, leader: laneLeader(stickyLane) })
  return lanes
}

/**
 * churnShadow(cells) - the throne's own shadow: the four instability
 * lanes' plurality fold (churn / standdown / relog + the sticky lane).
 * @param {{rescuePerBot?: Object<string, {starts?: number}>|null,
 *          rescueTotals?: {starts?: number}|null,
 *          standdownBook?: Object|null,
 *          relogsByBot?: Object<string, number>|null,
 *          relogsTotal?: number|null,
 *          stickyByBot?: Object<string, number>|null,
 *          stickyTotal?: number|null}} [cells]
 *   the books' own cells (the throne's three + the sticky lane's own)
 * @returns {null|{bot: string, lanes: Array<{lane: string, owns: number, of: number}>, nonEmpty: number}}
 *   the unanimous shadow (null = the throne seated, a partial lead, a
 *   leaderless tie, a single-lane fold, or junk - the honest silences;
 *   the silence's own word lives in churnShadowRefusal, v0.974.13)
 */
export function churnShadow (cells) {
  if (churnThrone(cells)) return null // the branch law: the throne's own row owns the owner's face
  const lanes = shadowLanes(cells)
  // THE JOIN FENCE byte for byte: at least two non-empty lanes ride.
  if (lanes.length < 2) return null
  // THE UNANIMITY LAW: every non-empty lane has a leader AND one bot
  // leads them all - a leaderless tie or a partial lead reads the
  // honest silence (the riders row's own words own the spread).
  if (lanes.some((l) => !l.leader)) return null
  const first = lanes[0].leader.bot
  if (!lanes.every((l) => l.leader.bot === first)) return null

  const lanesOut = lanes.map((l) => ({ lane: l.lane, owns: l.leader.owns, of: l.cells.total }))
  return { bot: first, lanes: lanesOut, nonEmpty: lanesOut.length }
}

/**
 * churnShadowRow(s) - the shadow's own row (THE SHADOW'S OWN FACE).
 * Junk never prints a row (the honest silence's own row law): every
 * field is guarded before the template speaks.
 * @param {Object|null} [s] the churnShadow result
 * @returns {string|null} the row (null on junk)
 */
export function churnShadowRow (s) {
  if (!s || typeof s !== 'object' || Array.isArray(s)) return null
  const { bot, lanes, nonEmpty } = s
  if (typeof bot !== 'string' || !bot) return null
  if (!Array.isArray(lanes) || lanes.length < 2 || lanes.length !== nonEmpty) return null
  for (const l of lanes) {
    if (!l || typeof l !== 'object' || Array.isArray(l)) return null
    if (typeof l.lane !== 'string' || !l.lane) return null
    if (!Number.isFinite(l.owns) || l.owns <= 0 || !Number.isFinite(l.of) || l.of <= 0 || l.owns > l.of) return null
  }
  const laneBits = lanes.map((l) => `the ${l.lane} ${l.owns} of ${l.of}`).join(', ')
  return `the throne's own shadow (v0.974.11): ${bot} led every non-empty lane's own plurality at once - ${laneBits} (${nonEmpty} lane(s)) - THE SHADOW'S OWN FACE: the strict-majority law refused the throne, the pluralities' own fold named the face the throne refused - the sticky lane (v0.924.0's own book) joins the fold`
}

/**
 * churnShadowRefusal(cells) - the fold's own refusal: the shadow's
 * silence's own word (v0.974.13). When the fold refuses to seat (the
 * throne dark, the unanimity law's own refusal), the silence names its
 * own blocking class - the tie (a leaderless lane owns nothing), the
 * contested spread (the lanes led apart), the lone lane (no fold on one
 * lane). The branch law holds both ways: a seated throne or a seated
 * shadow reads NO refusal word (the owner's own row owns the face).
 * The law order byte for byte: the join fence's word rides before the
 * tie's own (a lone tied lane is the fence's own face), the zero-lane
 * join stays the silence itself (no word over nothing).
 * @param {{rescuePerBot?: Object<string, {starts?: number}>|null,
 *          rescueTotals?: {starts?: number}|null,
 *          standdownBook?: Object|null,
 *          relogsByBot?: Object<string, number>|null,
 *          relogsTotal?: number|null,
 *          stickyByBot?: Object<string, number>|null,
 *          stickyTotal?: number|null}} [cells]
 *   the books' own cells (churnShadow's own shape)
 * @returns {null|{kind: string, lanes: Array<Object>}}
 *   the refusal (null = the throne or the shadow seated, or the
 *   zero-lane join, or junk - the honest silences)
 */
export function churnShadowRefusal (cells) {
  if (churnThrone(cells)) return null // the branch law: the throne's own row owns the owner's face
  if (churnShadow(cells)) return null // the branch law: the seat's own row owns the face it named
  const lanes = shadowLanes(cells)
  if (!lanes.length) return null // the zero-lane join is the silence itself (no word over nothing)
  // the join fence's own word: the lone lane (one lane only - no fold).
  if (lanes.length < 2) {
    const l = lanes[0]
    const out = { kind: 'lone', lanes: [{ lane: l.lane, of: l.cells.total }] }
    if (l.leader) { out.lanes[0].bot = l.leader.bot; out.lanes[0].owns = l.leader.owns }
    return out
  }
  // the tie's own word: a leaderless lane owns nothing (the tied pair
  // named at the top count - the lane's own cells re-read, never re-walked).
  const tied = lanes.filter((l) => !l.leader)
  if (tied.length) {
    const ties = []
    for (const l of tied) {
      let top = 0
      for (const owns of Object.values(l.cells.byBot)) {
        const v = Number(owns)
        if (Number.isFinite(v) && v > top) top = v
      }
      const tiedBots = Object.keys(l.cells.byBot).filter((b) => Number(l.cells.byBot[b]) === top)
      ties.push({ lane: l.lane, of: l.cells.total, top, tiedBots })
    }
    return { kind: 'tie', lanes: ties }
  }
  // the contested spread's own word: every lane leads, the lanes lead apart.
  const led = lanes.map((l) => ({ lane: l.lane, bot: l.leader.bot, owns: l.leader.owns, of: l.cells.total }))
  return { kind: 'contested', lanes: led }
}

// (v0.974.25) THE PAIR'S OWN BOOK - the fold's own pair seat. WHAT PRICED
// IT: face 291's own hand-read - 'the noon freeze pair F11+F6 own 11 of
// 12 frozen standdowns - the deaths AND the freezes AND the dive join's
// closure - one pair's own book' - a cross-lane read at the PAIR level no
// fold ever owned: the throne asks for ONE bot holding every lane's
// strict majority, the shadow asks for ONE bot leading every lane's
// plurality, and both folds go silent the moment a SECOND bot shares the
// sessions - while the lanes keep riding TWO bots' own book together.
// THE PAIR'S LAW: the same four lanes the shadow reads (the shadowLanes
// walk reused verbatim - the one-walk law, zero re-parsing); the pair
// seats only when ONE unordered pair tops EVERY non-empty lane's own
// coverage at once (per lane, the pair's coverage = the two members' own
// counts summed; the lane's top pair must be unique - a tie leads
// nothing, the tie law's own byte at pair level); the join fence byte
// for byte (>= 2 non-empty lanes). The branch law holds: a seated throne
// or a seated shadow reads no pair row (the owner's own rows own the
// face - the shadow's own idiom); the refusal's word stays the fold's
// own last silence (the pair row and the refusal row never both - the
// call site's additive else-branch, the lib holds the fence either way).
// Read-time tooling, zero fleet wiring, zero new log lines, zero census
// shape change - CENSUS GUARD.

/**
 * The one lane's own top pair (the pair seat's own lane byte): the pair
 * of bots whose summed coverage is the lane's strict top - unique, or
 * the lane leads nothing (a tie at the top owns no pair).
 * @param {{byBot: Object<string, number>, total: number}} lane the lane's cells
 * @param {Array<[string, string]>} universe every unordered bot pair (byte-sorted members)
 * @returns {{pair: [string, string], owns: number}|null} the lane's top pair (null = tie/absent)
 */
const laneTopPair = (lane, universe) => {
  let top = null
  let topCovers = 0
  let tie = false
  for (const [a, b] of universe) {
    const covers = (Number(lane.byBot[a]) || 0) + (Number(lane.byBot[b]) || 0)
    if (covers > topCovers) { topCovers = covers; top = [a, b]; tie = false } else if (covers === topCovers && covers > 0) tie = true
  }
  if (top === null || tie || topCovers <= 0) return null
  return { pair: top, owns: topCovers }
}

/**
 * churnThronePair(cells) - the pair's own book: the four instability
 * lanes' pair fold (churn / standdown / relog + the sticky lane).
 * @param {{rescuePerBot?: Object<string, {starts?: number}>|null,
 *          rescueTotals?: {starts?: number}|null,
 *          standdownBook?: Object|null,
 *          relogsByBot?: Object<string, number>|null,
 *          relogsTotal?: number|null,
 *          stickyByBot?: Object<string, number>|null,
 *          stickyTotal?: number|null}} [cells]
 *   the books' own cells (churnShadow's own shape)
 * @returns {null|{pair: [string, string],
 *   lanes: Array<{lane: string, owns: number, of: number}>,
 *   owns: number, ofEvents: number, share: number}}
 *   the pair book (null = the throne or the shadow seated, a contested
 *   or tied lane, a single-lane fold, or junk - the honest silences)
 */
export function churnThronePair (cells) {
  if (churnThrone(cells)) return null // the branch law: the throne's own row owns the owner's face
  if (churnShadow(cells)) return null // the branch law: the seat's own row owns the face it named
  const lanes = shadowLanes(cells)
  // THE JOIN FENCE byte for byte: at least two non-empty lanes ride.
  if (lanes.length < 2) return null
  // the pair universe: every unordered pair of the bots the lanes ride
  // (byte-sorted members - the deterministic order's own key)
  const bots = [...new Set(lanes.flatMap((l) => Object.keys(l.cells.byBot)))].sort()
  if (bots.length < 2) return null
  const universe = []
  for (let i = 0; i < bots.length; i++) {
    for (let j = i + 1; j < bots.length; j++) universe.push([bots[i], bots[j]])
  }
  // THE UNANIMITY LAW at pair level: every non-empty lane's top pair is
  // THE SAME pair, uniquely (a tied lane leads nothing - the silence).
  let first = null
  const lanesOut = []
  for (const l of lanes) {
    const top = laneTopPair(l.cells, universe)
    if (!top) return null
    if (first === null) first = top.pair
    else if (top.pair[0] !== first[0] || top.pair[1] !== first[1]) return null
    lanesOut.push({ lane: l.lane, owns: top.owns, of: l.cells.total })
  }
  const owns = lanesOut.reduce((a, s) => a + s.owns, 0)
  const ofEvents = lanesOut.reduce((a, s) => a + s.of, 0)
  return { pair: first, lanes: lanesOut, owns, ofEvents, share: +(owns / ofEvents).toFixed(3) }
}

/**
 * churnThronePairRow(p) - the pair book's own row (THE PAIR'S OWN BOOK).
 * Junk never prints a row (the honest silence's own row law): every
 * field is guarded before the template speaks.
 * @param {Object|null} [p] the churnThronePair result
 * @returns {string|null} the row (null on junk)
 */
export function churnThronePairRow (p) {
  if (!p || typeof p !== 'object' || Array.isArray(p)) return null
  const { pair, lanes, owns, ofEvents, share } = p
  if (!Array.isArray(pair) || pair.length !== 2) return null
  const [a, b] = pair
  if (typeof a !== 'string' || !a || typeof b !== 'string' || !b || a === b) return null
  if (!Array.isArray(lanes) || lanes.length < 2) return null
  for (const l of lanes) {
    if (!l || typeof l !== 'object' || Array.isArray(l)) return null
    if (typeof l.lane !== 'string' || !l.lane) return null
    if (!Number.isFinite(l.owns) || l.owns <= 0 || !Number.isFinite(l.of) || l.of <= 0 || l.owns > l.of) return null
  }
  if (!Number.isFinite(owns) || owns <= 0 || !Number.isFinite(ofEvents) || ofEvents <= 0 || owns > ofEvents) return null
  if (!Number.isFinite(share)) return null
  const laneBits = lanes.map((l) => `the ${l.lane} ${l.owns} of ${l.of}`).join(', ')
  return `the pair's own book (v0.974.25): ${a}+${b} owned every non-empty lane together - ${laneBits} (${owns} of ${ofEvents} event(s), ${(share * 100).toFixed(1)}%) - THE PAIR'S OWN BOOK: the throne asked for one bot, the shadow asked for one leader - the pair's own join names the two sessions the lanes keep riding together`
}

/**
 * churnShadowRefusalRow(r) - the fold's own refusal's row (THE FOLD'S
 * OWN SILENCE). Junk never prints a row (the honest silence's own row
 * law): every field is guarded before the template speaks.
 * @param {Object|null} [r] the churnShadowRefusal result
 * @returns {string|null} the row (null on junk)
 */
export function churnShadowRefusalRow (r) {
  if (!r || typeof r !== 'object' || Array.isArray(r)) return null
  if (!Array.isArray(r.lanes) || !r.lanes.length || r.lanes.length > 4) return null
  if (r.kind === 'tie') {
    const bits = []
    for (const l of r.lanes) {
      if (!l || typeof l !== 'object' || Array.isArray(l)) return null
      if (typeof l.lane !== 'string' || !l.lane) return null
      if (!Number.isFinite(l.of) || l.of <= 0) return null
      if (!Number.isFinite(l.top) || l.top <= 0) return null
      if (!Array.isArray(l.tiedBots) || l.tiedBots.length < 2) return null
      if (!l.tiedBots.every((b) => typeof b === 'string' && b)) return null
      bits.push(`the ${l.lane} lane rode a tie (${l.tiedBots.map((b) => `${b} x${l.top}`).join(' + ')}, ${l.tiedBots.length * l.top} of ${l.of})`)
    }
    return `the fold's own refusal (v0.974.13): ${bits.join('; ')} - a tie owns nothing - THE TIE'S OWN SILENCE: the unanimity law refused the seat, the silence's own word named`
  }
  if (r.kind === 'contested') {
    const bits = []
    for (const l of r.lanes) {
      if (!l || typeof l !== 'object' || Array.isArray(l)) return null
      if (typeof l.lane !== 'string' || !l.lane || typeof l.bot !== 'string' || !l.bot) return null
      if (!Number.isFinite(l.owns) || l.owns <= 0 || !Number.isFinite(l.of) || l.of <= 0 || l.owns > l.of) return null
      bits.push(`the ${l.lane} ${l.bot}`)
    }
    const bots = new Set(r.lanes.map((l) => l.bot))
    return `the fold's own refusal (v0.974.13): the lanes led apart - ${bits.join(', ')} (${r.lanes.length} lane(s) led, ${bots.size} bot(s)) - THE CONTESTED SPREAD'S OWN SILENCE: the unanimity law refused the seat, the silence's own word named`
  }
  if (r.kind === 'lone') {
    if (r.lanes.length !== 1) return null
    const l = r.lanes[0]
    if (!l || typeof l !== 'object' || Array.isArray(l) || typeof l.lane !== 'string' || !l.lane) return null
    if (!Number.isFinite(l.of) || l.of <= 0) return null
    if (l.bot !== undefined) {
      if (typeof l.bot !== 'string' || !l.bot || !Number.isFinite(l.owns) || l.owns <= 0) return null
    }
    const lead = l.bot !== undefined ? `, the ${l.bot} lead ${l.owns} of ${l.of}` : ''
    return `the fold's own refusal (v0.974.13): the lone lane (the ${l.lane}${lead}) - no fold on one lane - THE LONE LANE'S OWN SILENCE: the join fence refused the seat, the silence's own word named`
  }
  return null
}
