//
// starveclock.mjs - THE STARVE'S OWN CLOCK (v0.913.0)
//
// The A* starvation's face-wide thirds verdict. Face 191 (38084058429)
// walked the bank lane 100 visit-lines deep and banked ZERO - the door
// leg rode decide-timeouts (36 of 100), the write-off's failed mass rode
// stalled-s0 (529u of 992u), and the crowded-sky row named the front
// (the pathfinder's starve owns 32 of 34 refusals, the A* starved 106
// times at ents median 1917). The sky's own bytes have sat split across
// THREE clock books since v0.413.0 - the walk-fail family's decide clock
// (ts span + burst), the bank lane's own clock (same law), and the hop
// lane's bracket thirds (the v0.441.0 census, the midpoint grain) - and
// NO row ever joined them on one timeline: the face's own question (do
// the starves crowd the deadline's own third, or the face's opening?)
// had no seat. Face 191's own neighbors all pointed late - the hop
// decide zeros 21 of 28 late, the fuel clips 3 of 3 late, the no-path
// class 2 of 2 late - but the whole sky never read its own clock.
//
// THE STAMP LAW (the decide clock's own anchor, the deathdrop stamp
// law): every starve rides the last heartbeat ts seen before its line -
// one truth, the same anchor walkfail/bankfail/decideweather already
// stamp with. The lanes join on the shared rail, never on the count
// (the v0.695.0 lanes-share-the-sky law): hop (the hop-zero lane's own
// decide-timeout zeros), walk (the tool lanes' chest-walk decide
// refusals), sweep (the smelt sweep's machine-unreachable-decide-timeout
// attempts - a pair's n attempts stamp n times, the cohort's currency),
// bank (the walk-backs' and zeros' chest-unreachable-decide-timeout).
// The house's A* starvation definition rides verbatim (the v0.410.0
// scope + the bank lane's own read): hop + walk-fail + sweep + bank =
// the GRAND TOTAL's own four lanes.
//
// THE THIRDS CUT (the v0.733.0 law, the point-stamp grain): thirdS =
// clockEnd / 3, t < thirdS is early, t < 2 * thirdS is mid, the rest is
// late - the boundary rides the later third. The hop lane's own
// bracket-midpoint thirds stay zeroclock's own read (the v0.441.0
// census prices the zeros by their anchors' midpoint - a finer grain
// than the stamp); this seat prices the WHOLE sky by the anchor law,
// one grain end to end, and never re-spells zeroclock's bracket math.
//
// THE SEAT LAW (the strict-majority precedents - the v0.774.0 cast, the
// v0.912.0 leg): a third owns the sky only above half (a tie owns
// nothing - the storm-has-no-seat precedent). The burst's own share
// rides beside the seat (the concentration's second eye): the densest
// 30s sliding window over the timed stamps (the DECIDE_BURST_WINDOW_S
// law imported from walkfail - the window never forked) against the
// timed mass.
//
// Fences (every one the honest fork):
//   - junk lines (non-string) and junk stamps (non-finite ts that is
//     not the null anchor) never price and never count
//   - zero timed stamps -> the verdict's silence (no starve ever rode)
//   - no heartbeat clock (clockEnd absent) -> the silence (no thirds
//     without a clock - the stamp never invents its rail)
//   - a starve before the first heartbeat rides unplaced (the decide
//     clock's own untimed law) - counted honestly, never placed
//   - no solo third above half -> the honest spread (no third owns the
//     sky - the crowd is the shape)
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.379/.../v0.912.0 precedent) - the fleet's own decide refusals
// are the filter-keys, they already ride.
//

import { parseHeartbeat } from './stormcensus.mjs'
import { parseWalkFail, parseSweepVerdict, classifySweepReason, DECIDE_BURST_WINDOW_S } from './walkfail.mjs'
import { parseHopZero } from './hopcensus.mjs'
import { parseBankWalkBack, parseBankZero } from './bankfail.mjs'

const LANE_HOP = 'hop'
const LANE_WALK = 'walk'
const LANE_SWEEP = 'sweep'
const LANE_BANK = 'bank'

export const STARVE_LANES = [LANE_HOP, LANE_WALK, LANE_SWEEP, LANE_BANK]

/**
 * starveClockBook(lines) - the whole sky's stamp book: every A* decide
 * starvation across the house's four lanes, each riding its line's own
 * heartbeat anchor (the decide clock's own stamp law).
 *
 * @param {string[]|string} [lines] the face log (array or raw blob)
 * @returns {{stamps: Array<{lane: string, ts: number|null}>,
 *   clockEnd: number|null, lanes: Record<string, number>, untimed: number}}
 */
export function starveClockBook (lines) {
  const rows = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : [])
  const stamps = []
  const lanes = {}
  let lastT = null
  let clockEnd = null
  for (const l of rows) {
    if (typeof l !== 'string') continue
    const hb = parseHeartbeat(l)
    if (hb) { lastT = hb.tsS; clockEnd = hb.tsS }
    const wf = parseWalkFail(l)
    if (wf) {
      if (wf.why === 'decide-timeout') { stamps.push({ lane: LANE_WALK, ts: lastT, bot: wf.bot }); lanes[LANE_WALK] = (lanes[LANE_WALK] || 0) + 1 }
      continue
    }
    const sv = parseSweepVerdict(l)
    if (sv) {
      for (const p of sv.pairs) {
        const cls = classifySweepReason(p.reason)
        if (cls && cls.why === 'machine-unreachable-decide-timeout') {
          for (let i = 0; i < p.n; i++) { stamps.push({ lane: LANE_SWEEP, ts: lastT, bot: sv.bot }); lanes[LANE_SWEEP] = (lanes[LANE_SWEEP] || 0) + 1 }
        }
      }
      continue
    }
    const hz = parseHopZero(l)
    if (hz && hz.klass && hz.klass.why === 'decide-timeout') {
      stamps.push({ lane: LANE_HOP, ts: lastT, bot: hz.bot }); lanes[LANE_HOP] = (lanes[LANE_HOP] || 0) + 1
      continue
    }
    const wb = parseBankWalkBack(l)
    if (wb) {
      if (wb.why === 'chest-unreachable-decide-timeout') { stamps.push({ lane: LANE_BANK, ts: lastT, bot: wb.bot }); lanes[LANE_BANK] = (lanes[LANE_BANK] || 0) + 1 }
      continue
    }
    const bz = parseBankZero(l)
    if (bz) {
      if (bz.why === 'chest-unreachable-decide-timeout') { stamps.push({ lane: LANE_BANK, ts: lastT, bot: bz.bot }); lanes[LANE_BANK] = (lanes[LANE_BANK] || 0) + 1 }
      continue
    }
  }
  return { stamps, clockEnd, lanes, untimed: stamps.filter(s => s.ts === null).length }
}

/**
 * starveClockVerdict(book) - the whole sky's thirds verdict: the face's
 * own thirds cut over the joined stamps (the v0.733.0 law), the
 * strict-majority seat, the burst's own share, the per-lane legs.
 * Junk never prices (the honest silence's own law).
 *
 * @param {unknown} [book] starveClockBook's own output
 * @returns {null|{timed: number, unplaced: number,
 *   thirds: {early: number, mid: number, late: number},
 *   seat: null|{cls: string, owns: number},
 *   perLane: Record<string, {early: number, mid: number, late: number}>,
 *   burst: number, burstShare: number,
 *   span: {first: number, last: number}|null,
 *   clockEnd: number, thirdS: number}}
 */
export function starveClockVerdict (book) {
  if (!book || typeof book !== 'object') return null
  const stamps = Array.isArray(book.stamps) ? book.stamps : null
  if (!stamps) return null
  const clockEnd = book.clockEnd
  if (!Number.isFinite(clockEnd) || clockEnd <= 0) return null // no thirds without a clock
  const timedTs = []
  let unplaced = 0
  for (const s of stamps) {
    if (!s || typeof s !== 'object') continue // junk stamps never price
    if (s.ts === null) { unplaced++; continue } // the decide clock's own untimed law
    if (!Number.isFinite(s.ts)) continue // junk ts never prices, never counts
    timedTs.push(s.ts)
  }
  if (timedTs.length <= 0) return null // the honest silence: no starve ever rode
  timedTs.sort((a, b) => a - b)
  const thirdS = clockEnd / 3
  const thirds = { early: 0, mid: 0, late: 0 }
  const perLane = {}
  for (const t of timedTs) {
    // the v0.733.0 point cut - the boundary rides the later third
    const cls = t < thirdS ? 'early' : t < 2 * thirdS ? 'mid' : 'late'
    thirds[cls]++
  }
  for (const s of stamps) {
    if (!s || typeof s !== 'object' || s.ts === null || !Number.isFinite(s.ts)) continue
    const cls = s.ts < thirdS ? 'early' : s.ts < 2 * thirdS ? 'mid' : 'late'
    const lane = typeof s.lane === 'string' && s.lane !== '' ? s.lane : 'unclassed'
    if (!perLane[lane]) perLane[lane] = { early: 0, mid: 0, late: 0 }
    perLane[lane][cls]++
  }
  const n = timedTs.length
  let topCls = null
  let topN = 0
  for (const cls of ['early', 'mid', 'late']) {
    if (thirds[cls] > topN) { topN = thirds[cls]; topCls = cls }
  }
  const seat = topCls !== null && topN > n - topN
    ? { cls: topCls, owns: topN }
    : null // a tie owns nothing - the storm-has-no-seat precedent
  // the burst's own share - the decide clock's own 30s window (imported,
  // never forked), the densest sliding window over the timed stamps
  let burst = 0
  for (let i = 0, j = 0; i < timedTs.length; i++) {
    while (timedTs[i] - timedTs[j] > DECIDE_BURST_WINDOW_S) j++
    const w = i - j + 1
    if (w > burst) burst = w
  }
  const burstShare = n > 0 ? +(burst / n).toFixed(3) : 0
  return {
    timed: n,
    unplaced,
    thirds,
    seat,
    perLane,
    burst,
    burstShare,
    span: { first: timedTs[0], last: timedTs[n - 1] },
    clockEnd,
    thirdS
  }
}

// The seats' own levers - one table, the v0.583.0 levers precedent.
export const STARVE_CLOCK_LEVERS = {
  early: 'THE OPENING SKY: the starves crowd the face\'s first third - the spawn\'s own geometry is the front',
  mid: 'THE NOON SKY: the starves crowd the face\'s middle third',
  late: 'THE CLOSING SKY: the starves crowd the deadline\'s own third - arm the walks before it'
}

/**
 * starveClockRow(verdict) - the verdict's own row: the face's own thirds
 * read, the seat (or the honest spread), the burst's own share. Junk
 * never prints a row (the honest silence's own row law).
 *
 * @param {unknown} [verdict] starveClockVerdict's own output
 * @returns {null|string}
 */
export function starveClockRow (verdict) {
  if (!verdict || typeof verdict !== 'object') return null
  const { timed, unplaced, thirds, seat, burst, burstShare } = verdict
  if (!Number.isFinite(timed) || timed <= 0) return null
  if (!thirds || !Number.isFinite(thirds.early) || !Number.isFinite(thirds.mid) || !Number.isFinite(thirds.late)) return null
  const unit = timed === 1 ? 'timed starve' : 'timed starves'
  const unplacedTail = unplaced > 0 ? ` (unplaced ${unplaced})` : ''
  const head = `the starve's own clock (v0.913.0): early ${thirds.early} / mid ${thirds.mid} / late ${thirds.late} of ${timed} ${unit}${unplacedTail}`
  const lever = seat ? STARVE_CLOCK_LEVERS[seat.cls] || 'the third\'s own detail is the front' : 'no third owns the sky - the starves spread across the clock'
  const seatBit = seat
    ? ` - ${seat.cls} owns ${seat.owns} of ${timed} (${Math.round((seat.owns / timed) * 100)}%) - ${lever}`
    : ` - ${lever}`
  const burstBit = ` - the burst's own share: ${burst} of ${timed} (${Math.round(burstShare * 100)}%)${burstShare >= 0.5 ? ' - one window priced the mass' : ''}`
  return `${head}${seatBit}${burstBit}`
}

//
// THE STARVE'S OWN BOT (v0.932.0) - the starve book's own WHO axis. The
// v0.913.0 clock seated the SKY axis (which third owns the starves) and
// the face 200 read named the mass as a sky note ('starves mid 71 of
// 133, 53%'), but no row ever said WHOSE A* starves own the book - the
// WHO axis rode raw since v0.913.0 (the v0.931.0 standdown bot seat's
// own sibling). THE BILL LAW (the book's own stamps verbatim - the
// stamp's own bot byte the atom, zero re-parsing, one book, the v0.926.0
// prey fold's own precedent; the book's fold now carries the bot byte
// additively - the {lane, ts} shape never moved, the verdict reads
// untouched): the bot axis is ts-independent - an untimed stamp still
// names its bot (the tail law's own honesty, the v0.931.0 own law); a
// stamp without a well-formed bot byte never seats (the real stamps
// still tally - the junk fences' own law).
//
// THE STRICT-MAJORITY LAW (the v0.931.0 own precedent): a bot owns the
// sky only above half the bot-keyed starves - a tie owns nothing (the
// storm-has-no-seat precedent). The riders measure beside the seat's
// silence (the top two under the byte law: count desc, the bot's own
// byte asc). THE BRANCH LAW FENCED IN THE LIB (the riders read null
// whenever the seat's owner exists - the v0.930.0 stakes' own fence
// shape). Junk never invents a seat: a non-object book without stamps,
// a non-array stamps leg, a zero-sum bot book - the honest silence.
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.913.0 own precedent).
//

const STARVE_BOT_RE = /^F\d+$/

// The bot-keyed tally over the book's own stamps (or a bare stamps
// array - the census-or-bare acceptance, the v0.930.0 own shape). The
// key IS the atom: a junk bot byte stakes nothing.
const starveBotTally = (book) => {
  const stamps = book && typeof book === 'object' && !Array.isArray(book)
    ? book.stamps
    : (Array.isArray(book) ? book : null)
  if (!Array.isArray(stamps)) return null
  const byBot = {}
  let total = 0
  for (const s of stamps) {
    if (!s || typeof s !== 'object' || Array.isArray(s)) continue
    if (typeof s.bot !== 'string' || !STARVE_BOT_RE.test(s.bot)) continue
    byBot[s.bot] = (byBot[s.bot] || 0) + 1
    total += 1
  }
  if (total <= 0) return null
  return { byBot, total }
}

// (v0.932.0) THE STARVE'S OWN BOT SEAT - the strict-majority law over
// the bot-keyed starve mass (a tie owns nothing).
export function starveBotSeat (book) {
  const t = starveBotTally(book)
  if (!t) return null
  const half = t.total / 2
  for (const [bot, owns] of Object.entries(t.byBot)) {
    if (owns > half) return { bot, owns, ofStarves: t.total, shareOfStarves: +(owns / t.total).toFixed(3) }
  }
  return null
}

// (v0.932.0) THE STARVE'S OWN RIDERS - the seat's silence's own
// companion (the byte law: count desc, the bot's own byte asc). A
// MEASURE, never a verdict-owner; the branch law fenced in the lib.
export function starveBotRiders (book) {
  const t = starveBotTally(book)
  if (!t) return null
  const ranked = Object.entries(t.byBot).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
  if (ranked.length < 2) return null
  const half = t.total / 2
  if (ranked[0][1] > half) return null // the branch law: the seat's owner exists - the mix never prints
  const [leader, leaderOwns] = ranked[0]
  const [runner, runnerOwns] = ranked[1]
  const pairOwns = leaderOwns + runnerOwns
  return { leader, leaderOwns, runner, runnerOwns, ofStarves: t.total, pairOwns, shareOfStarves: +(pairOwns / t.total).toFixed(3), duet: leaderOwns === runnerOwns }
}

// (v0.932.0) the starve's own bot row - THE STARVE'S OWN BOT: the seat
// names WHICH bot's own A* starves own the sky; the spawn's own geometry
// and the crowded entity sky price the front the thirds rode unnamed.
// Junk never prints a seat (the honest silence's own row law).
export function starveBotSeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { bot, owns, ofStarves, shareOfStarves } = seat
  if (typeof bot !== 'string' || !STARVE_BOT_RE.test(bot) ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofStarves) || ofStarves <= 0 || owns > ofStarves ||
      !Number.isFinite(shareOfStarves)) return null
  const unit = ofStarves === 1 ? 'starve' : 'starves'
  return `the starve's own bot (v0.932.0): ${bot} owns ${owns} of ${ofStarves} ${unit} (${(shareOfStarves * 100).toFixed(1)}%) - THE STARVE'S OWN BOT: one bot's own A* starves own the sky - the pathfinder's own WHO axis prices the crowd the thirds rode unnamed`
}

// (v0.932.0) the starve's own riders row - THE STARVE'S OWN MIX: a
// measure of the shape, never a named owner (the seat's tie law holds).
// Junk never prints a shape (the honest silence's own row law).
export function starveBotRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofStarves, pairOwns, shareOfStarves } = r
  if (typeof leader !== 'string' || !STARVE_BOT_RE.test(leader) ||
      typeof runner !== 'string' || !STARVE_BOT_RE.test(runner) ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 ||
      !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofStarves) || ofStarves <= 0 ||
      !Number.isFinite(pairOwns) || pairOwns > ofStarves ||
      !Number.isFinite(shareOfStarves)) return null
  const unit = ofStarves === 1 ? 'starve' : 'starves'
  return `the starve's own riders (v0.932.0): no solo bot owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofStarves} ${unit} (${(shareOfStarves * 100).toFixed(1)}%) - THE STARVE'S OWN MIX: the seat's tie law held, the mix is the shape - the starves' own spread prices the sky the solo law refused to seat`
}

//
// THE STARVE'S OWN LANE (v0.933.0) - the starve book's own LANE axis.
// The v0.913.0 clock seated the SKY axis (which third), the v0.932.0
// bot seat seated the WHO axis (which bot) - the lane axis rode raw
// since v0.913.0 (the face 201 read: the four lanes' starves spread
// across the sky with no row naming WHICH lane owns the book). THE
// BILL LAW (the book's own stamps verbatim - the stamp's own lane byte
// the atom, zero re-parsing, one book, zero fold changes - the lane
// byte has ridden the stamps since v0.913.0): the lane axis is
// ts-independent and bot-independent - an untimed stamp still names
// its lane (the tail law's own honesty, the v0.932.0 own law); a
// stamp without a well-formed lane byte never seats (the real stamps
// still tally - the junk fences' own law).
//
// THE STRICT-MAJORITY LAW (the v0.932.0 own precedent): a lane owns
// the sky only above half the lane-keyed starves - a tie owns nothing
// (the storm-has-no-seat precedent). The riders measure beside the
// seat's silence (the top two under the byte law: count desc, the
// lane's own byte asc). THE BRANCH LAW FENCED IN THE LIB (the riders
// read null whenever the seat's owner exists - the v0.930.0 stakes'
// own fence shape). Junk never invents a seat: a non-object book
// without stamps, a non-array stamps leg, a zero-sum lane book - the
// honest silence. Pure: reads, never mutates. Zero fleet wiring
// (mining-surface only, the v0.913.0 own precedent).
//

// The lane-keyed tally over the book's own stamps (or a bare stamps
// array - the census-or-bare acceptance, the v0.932.0 own shape). The
// key IS the atom: a junk lane byte stakes nothing.
const starveLaneTally = (book) => {
  const stamps = book && typeof book === 'object' && !Array.isArray(book)
    ? book.stamps
    : (Array.isArray(book) ? book : null)
  if (!Array.isArray(stamps)) return null
  const byLane = {}
  let total = 0
  for (const s of stamps) {
    if (!s || typeof s !== 'object' || Array.isArray(s)) continue
    if (typeof s.lane !== 'string' || s.lane === '') continue
    byLane[s.lane] = (byLane[s.lane] || 0) + 1
    total += 1
  }
  if (total <= 0) return null
  return { byLane, total }
}

// (v0.933.0) THE STARVE'S OWN LANE SEAT - the strict-majority law over
// the lane-keyed starve mass (a tie owns nothing).
export function starveLaneSeat (book) {
  const t = starveLaneTally(book)
  if (!t) return null
  const half = t.total / 2
  for (const [lane, owns] of Object.entries(t.byLane)) {
    if (owns > half) return { lane, owns, ofStarves: t.total, shareOfStarves: +(owns / t.total).toFixed(3) }
  }
  return null
}

// (v0.933.0) THE STARVE'S OWN LANE RIDERS - the seat's silence's own
// companion (the byte law: count desc, the lane's own byte asc). A
// MEASURE, never a verdict-owner; the branch law fenced in the lib.
export function starveLaneRiders (book) {
  const t = starveLaneTally(book)
  if (!t) return null
  const ranked = Object.entries(t.byLane).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
  if (ranked.length < 2) return null
  const half = t.total / 2
  if (ranked[0][1] > half) return null // the branch law: the seat's owner exists - the mix never prints
  const [leader, leaderOwns] = ranked[0]
  const [runner, runnerOwns] = ranked[1]
  const pairOwns = leaderOwns + runnerOwns
  return { leader, leaderOwns, runner, runnerOwns, ofStarves: t.total, pairOwns, shareOfStarves: +(pairOwns / t.total).toFixed(3), duet: leaderOwns === runnerOwns }
}

// (v0.933.0) the starve's own lane row - THE STARVE'S OWN LANE: the
// seat names WHICH lane's own decide-timeouts own the sky; the lane's
// own front aims the cure the thirds rode unnamed. Junk never prints
// a seat (the honest silence's own row law).
export function starveLaneSeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { lane, owns, ofStarves, shareOfStarves } = seat
  if (typeof lane !== 'string' || lane === '' ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofStarves) || ofStarves <= 0 || owns > ofStarves ||
      !Number.isFinite(shareOfStarves)) return null
  const unit = ofStarves === 1 ? 'starve' : 'starves'
  return `the starve's own lane (v0.933.0): ${lane} owns ${owns} of ${ofStarves} ${unit} (${(shareOfStarves * 100).toFixed(1)}%) - THE STARVE'S OWN LANE: one lane's own decide-timeouts own the sky - the lane's own front prices the cure the thirds rode unnamed`
}

// (v0.933.0) the starve's own lane-mix row - THE STARVE'S OWN LANE MIX:
// a measure of the shape, never a named owner (the seat's tie law
// holds). Junk never prints a shape (the honest silence's own row law).
export function starveLaneRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofStarves, pairOwns, shareOfStarves } = r
  if (typeof leader !== 'string' || leader === '' ||
      typeof runner !== 'string' || runner === '' ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 ||
      !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofStarves) || ofStarves <= 0 ||
      !Number.isFinite(pairOwns) || pairOwns > ofStarves ||
      !Number.isFinite(shareOfStarves)) return null
  const unit = ofStarves === 1 ? 'starve' : 'starves'
  return `the starve's own lane mix (v0.933.0): no solo lane owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofStarves} ${unit} (${(shareOfStarves * 100).toFixed(1)}%) - THE STARVE'S OWN LANE MIX: the seat's tie law held, the mix is the shape - the lanes' own spread prices the sky the solo law refused to seat`
}

//
// THE BURST'S OWN SEAT (v0.974.28) - the decide burst's own WHEN+WHO
// axes. The v0.913.0 clock priced the burst's SHARE (the densest 30s
// window over the timed stamps - the DECIDE_BURST_WINDOW_S law imported,
// never forked) and no row ever said WHEN the window rode or WHO rode
// it - the front stayed 'THE DECIDER'S CLOCK' unnamed since v0.769.0
// (the dry ask's verdict lever's own word). THE WINDOW LAW (the clock's
// own sliding window verbatim - the same two-pointer walk, the byte
// never forked): the earliest densest window owns (a width tie never
// re-rolls - the earliest start's own byte, the deterministic shape).
// The window's own sky rides the v0.733.0 point cut (thirdS =
// clockEnd / 3, the boundary rides the later third) and the
// strict-majority law at window level (a third owns the window only
// above half - a tie owns nothing, the storm-has-no-seat precedent).
// The window's own bots ride the v0.932.0 bill law (the well-formed bot
// byte the atom, junk bots never tally, the real stamps still do) with
// the branch law fenced inside (a solo bot above half owns the rush
// hour, the riders measure beside the seat's silence). Junk never
// invents a rush hour: a non-object book, a non-array stamps leg, a
// missing or non-finite clockEnd (no thirds without a clock - the
// verdict's own fence), a zero timed mass (the window never rides
// untimed stamps - the burst is a time window) - the honest silence.
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.913.0 own precedent) - the fleet's own decide refusals are the
// filter-keys, they already ride.
//

// The timed pair view over the book's own stamps - the clock's rail
// required (the burst is the clock's own shape: the bare stamps form
// rides no window, no clockEnd byte no burst). {ts, bot} pairs, junk
// cells and untimed stamps never price (the window is a time window).
// Returns null without a live clock (no thirds without a clock - the
// verdict's own fence).
const starveBurstView = (book) => {
  const stamps = book && typeof book === 'object' && !Array.isArray(book)
    ? book.stamps
    : (Array.isArray(book) ? book : null)
  if (!Array.isArray(stamps)) return null
  const clockEnd = book && typeof book === 'object' ? book.clockEnd : undefined
  if (!Number.isFinite(clockEnd) || clockEnd <= 0) return null
  const view = []
  for (const s of stamps) {
    if (!s || typeof s !== 'object' || Array.isArray(s)) continue
    if (!Number.isFinite(s.ts)) continue // junk ts + the untimed law (null rides no window)
    view.push({ ts: s.ts, bot: typeof s.bot === 'string' ? s.bot : null })
  }
  if (view.length <= 0) return null
  view.sort((a, b) => a.ts - b.ts)
  return { view, clockEnd }
}

// (v0.974.28) THE BURST'S OWN SEAT - the earliest densest
// DECIDE_BURST_WINDOW_S window, its own third seat (the v0.733.0 cut)
// and its own bot book (the v0.932.0 bill law, the branch law fenced
// inside: botSeat or riders, never both).
export function starveBurstSeat (book) {
  const v = starveBurstView(book)
  if (!v) return null
  const { view, clockEnd } = v
  const n = view.length
  let bestJ = 0
  let bestI = 0
  let bestW = 0
  for (let i = 0, j = 0; i < n; i++) {
    while (view[i].ts - view[j].ts > DECIDE_BURST_WINDOW_S) j++
    const w = i - j + 1
    if (w > bestW) { bestW = w; bestI = i; bestJ = j } // the earliest densest window owns
  }
  const win = view.slice(bestJ, bestI + 1)
  const thirdS = clockEnd / 3
  const thirds = { early: 0, mid: 0, late: 0 }
  for (const p of win) {
    const cls = p.ts < thirdS ? 'early' : p.ts < 2 * thirdS ? 'mid' : 'late'
    thirds[cls]++
  }
  let topCls = null
  let topN = 0
  for (const cls of ['early', 'mid', 'late']) {
    if (thirds[cls] > topN) { topN = thirds[cls]; topCls = cls }
  }
  const thirdSeat = topCls !== null && topN > win.length - topN
    ? { cls: topCls, owns: topN }
    : null // a tie owns nothing - the storm-has-no-seat precedent
  const byBot = {}
  let welled = 0
  for (const p of win) {
    if (typeof p.bot !== 'string' || !STARVE_BOT_RE.test(p.bot)) continue
    byBot[p.bot] = (byBot[p.bot] || 0) + 1
    welled += 1
  }
  let botSeat = null
  let riders = null
  if (welled > 0) {
    const half = welled / 2
    let seatBot = null
    for (const [bot, owns] of Object.entries(byBot)) {
      if (owns > half) { seatBot = bot; break } // a solo bot above half owns the rush hour
    }
    if (seatBot !== null) {
      botSeat = { bot: seatBot, owns: byBot[seatBot], ofWindow: welled }
    } else {
      const ranked = Object.entries(byBot).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
      if (ranked.length >= 2) {
        const [leader, leaderOwns] = ranked[0]
        const [runner, runnerOwns] = ranked[1]
        riders = { leader, leaderOwns, runner, runnerOwns, pairOwns: leaderOwns + runnerOwns, ofWindow: welled, duet: leaderOwns === runnerOwns }
      }
    }
  }
  return {
    window: { first: win[0].ts, last: win[win.length - 1].ts, n: win.length },
    ofTimed: n,
    shareOfTimed: +(win.length / n).toFixed(3),
    thirds,
    thirdSeat,
    botSeat,
    riders,
  }
}

// The burst's own third levers - one table, the v0.913.0 levers precedent.
export const STARVE_BURST_LEVERS = {
  early: 'THE OPENING RUSH: the decider\'s rush hour rode the face\'s first third - the spawn\'s own geometry prices the burst',
  mid: 'THE NOON RUSH: the decider\'s rush hour rode the face\'s middle third',
  late: 'THE CLOSING RUSH: the decider\'s rush hour rode the deadline\'s own third - arm the asks before it',
}

// (v0.974.28) the burst's own row - THE DECIDER'S OWN RUSH HOUR: the
// densest 30s window priced WHEN + WHO the share rode unnamed. Junk
// never prints a rush hour (the honest silence's own row law).
export function starveBurstSeatRow (s) {
  if (!s || typeof s !== 'object') return null
  const { window, ofTimed, shareOfTimed, thirds, thirdSeat, botSeat, riders } = s
  if (!window || typeof window !== 'object' ||
      !Number.isFinite(window.first) || !Number.isFinite(window.last) || window.last < window.first ||
      !Number.isFinite(window.n) || window.n <= 0 ||
      !Number.isFinite(ofTimed) || ofTimed <= 0 || window.n > ofTimed ||
      !Number.isFinite(shareOfTimed) || shareOfTimed <= 0 || shareOfTimed > 1 ||
      !thirds || !Number.isFinite(thirds.early) || !Number.isFinite(thirds.mid) || !Number.isFinite(thirds.late) ||
      thirds.early + thirds.mid + thirds.late !== window.n) return null
  if (botSeat && riders) return null // the branch law's row fence - never both
  if (botSeat && (typeof botSeat.bot !== 'string' || !STARVE_BOT_RE.test(botSeat.bot) ||
      !Number.isFinite(botSeat.owns) || botSeat.owns <= 0 ||
      !Number.isFinite(botSeat.ofWindow) || botSeat.ofWindow < botSeat.owns)) return null
  if (riders && (typeof riders.leader !== 'string' || riders.leader === '' ||
      typeof riders.runner !== 'string' || riders.runner === '' ||
      !Number.isFinite(riders.leaderOwns) || riders.leaderOwns <= 0 ||
      !Number.isFinite(riders.runnerOwns) || riders.runnerOwns <= 0 ||
      !Number.isFinite(riders.pairOwns) || riders.pairOwns !== riders.leaderOwns + riders.runnerOwns ||
      !Number.isFinite(riders.ofWindow) || riders.ofWindow < riders.pairOwns)) return null
  const head = `the burst's own seat (v0.974.28): the window rode ${window.n} of ${ofTimed} timed starves (${Math.round(shareOfTimed * 100)}%) ts ${window.first}..${window.last}s`
  const sky = `the window's own sky: early ${thirds.early} / mid ${thirds.mid} / late ${thirds.late}`
  const skyBit = thirdSeat
    ? `${sky} - ${thirdSeat.cls} owns ${thirdSeat.owns} of ${window.n} (${Math.round((thirdSeat.owns / window.n) * 100)}%) - ${STARVE_BURST_LEVERS[thirdSeat.cls] || 'the window\'s own detail is the front'}`
    : `${sky} - no third owns the window - the rush hour spread across the clock`
  let botBit = ' - the window\'s own bots rode unnamed'
  if (botSeat) botBit = ` - ${botSeat.bot} owns ${botSeat.owns} of ${botSeat.ofWindow} - THE BURST'S OWN BOT: one bot's own asks priced the rush hour`
  else if (riders) botBit = ` - ${riders.leader} x${riders.leaderOwns} + ${riders.runner} x${riders.runnerOwns} own ${riders.pairOwns} of ${riders.ofWindow} - THE BURST'S OWN MIX: the rush hour rode a crowd${riders.duet ? ' (the duet\'s own tie)' : ''}`
  return `${head} - ${skyBit}${botBit}`
}

// (v0.975.5) THE STARVATION'S OWN GRAND TOTAL - the three lanes' own
// mass joined (the hop zeros' own byte + the walk-fail lens' own byte +
// the bank door's own decide timeouts). The reads kept summing the
// three lanes by hand (face 296's 165 = hop 68 + walk-fail 74 + bank
// 23 named the biggest mass in the record; face 297's 37 named the
// collapse - the WHEN-lever's own runtime front priced face over face)
// - the sum becomes a field byte. The row names each lane's own byte
// and the total - the mass rides NO clock claim (the heartbeat rail's
// own n is a different grammar - the row invents no equality with the
// starve clock). The fence: all three legs must stand (any missing or
// junk leg reads the lanes never assembled - the honest silence; the
// near-miss's own fence law, v0.975.3), any negative refuses, and the
// all-zero face reads the silence too (no mass, no row). Mining
// surface only: zero fleet wiring, zero new log lines - CENSUS GUARD.
export function starveGrandTotal (hop, walkFail, bankDecide) {
  for (const x of [hop, walkFail, bankDecide]) {
    if (!Number.isFinite(x) || x < 0) return null
  }
  const total = hop + walkFail + bankDecide
  if (!(total > 0)) return null
  return { hop, walkFail, bankDecide, total }
}

// (v0.975.5) the grand total's own row - the three lanes' own mass, the
// decider's own front (the reads' own hand sum, owned). Junk never
// prints a total (the honest silence's own row law).
export function starveGrandTotalRow (g) {
  if (!g || typeof g !== 'object') return null
  const { hop, walkFail, bankDecide, total } = g
  for (const x of [hop, walkFail, bankDecide, total]) {
    if (!Number.isFinite(x) || x < 0) return null
  }
  if (hop + walkFail + bankDecide !== total) return null
  if (!(total > 0)) return null
  return `the A* starvation's own grand total (v0.975.5): ${total} starve(s) - hop ${hop} + walk-fail ${walkFail} + bank decide ${bankDecide} (the three lanes' own mass, the decider's own front)`
}

// (v0.975.7) THE GRAND TOTAL'S OWN FRONT - WHICH lane's own mass owns
// the grand total (the strict-majority seat, the v0.933.0 law applied
// to the sum's own fold: the lane owns when its byte rides over half
// the total - a tie or a spread owns nothing). The reads kept naming
// the front by hand (face 300's read named walk-fail 8 of 8; face
// 298's read named walk-fail 12 of 18; the mix faces 296/299 rode
// unnamed). The lanes ride the row's own words (hop / walk-fail /
// bank decide). Mining surface only: zero fleet wiring - CENSUS GUARD.
export function starveGrandTotalFront (g) {
  if (!g || typeof g !== 'object') return null
  const { hop, walkFail, bankDecide, total } = g
  for (const x of [hop, walkFail, bankDecide, total]) {
    if (!Number.isFinite(x) || x < 0) return null
  }
  if (hop + walkFail + bankDecide !== total) return null
  if (!(total > 0)) return null
  const half = total / 2
  const lanes = { hop, 'walk-fail': walkFail, 'bank decide': bankDecide }
  for (const [lane, owns] of Object.entries(lanes)) {
    if (owns > half) return { lane, owns, ofTotal: total, shareOfTotal: +(owns / total).toFixed(3) }
  }
  return null
}

// (v0.975.7) the front's own branch law - the mix companion (the
// v0.933.0 riders law verbatim: count desc, the lane's own byte asc):
// the seat's owner exists - the mix never prints. The duet flag rides
// (the tie's own word).
export function starveGrandTotalMix (g) {
  if (!g || typeof g !== 'object') return null
  const { hop, walkFail, bankDecide, total } = g
  for (const x of [hop, walkFail, bankDecide, total]) {
    if (!Number.isFinite(x) || x < 0) return null
  }
  if (hop + walkFail + bankDecide !== total) return null
  if (!(total > 0)) return null
  const ranked = [['hop', hop], ['walk-fail', walkFail], ['bank decide', bankDecide]]
    .sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
  const half = total / 2
  if (ranked[0][1] > half) return null // the branch law: the seat's owner exists - the mix never prints
  const [leader, leaderOwns] = ranked[0]
  const [runner, runnerOwns] = ranked[1]
  const pairOwns = leaderOwns + runnerOwns
  return { leader, leaderOwns, runner, runnerOwns, ofTotal: total, pairOwns, shareOfTotal: +(pairOwns / total).toFixed(3), duet: leaderOwns === runnerOwns }
}

// (v0.975.7) the front's own row - THE DECIDER'S OWN SEAT: one lane's
// own mass owns the grand total. Junk never prints a seat (the honest
// silence's own row law).
export function starveGrandTotalFrontRow (f) {
  if (!f || typeof f !== 'object') return null
  const { lane, owns, ofTotal, shareOfTotal } = f
  if (typeof lane !== 'string' || lane === '' ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofTotal) || ofTotal <= 0 || owns > ofTotal ||
      !Number.isFinite(shareOfTotal)) return null
  const unit = ofTotal === 1 ? 'starve' : 'starves'
  return `the grand total's own front (v0.975.7): ${lane} owns ${owns} of ${ofTotal} ${unit} (${(shareOfTotal * 100).toFixed(1)}%) - THE DECIDER'S OWN SEAT: one lane's own mass owns the grand total - the lane's own front prices the cure the sum rode unnamed`
}

// (v0.975.7) the mix's own row - THE MASS'S OWN CROWD: the grand
// total's lanes rode a mix, the spread is the shape (a measure of the
// shape, never a named owner - the seat's tie law holds). Junk never
// prints a shape (the honest silence's own row law).
export function starveGrandTotalMixRow (m) {
  if (!m || typeof m !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofTotal, pairOwns, shareOfTotal, duet } = m
  if (typeof leader !== 'string' || leader === '' ||
      typeof runner !== 'string' || runner === '' ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 ||
      !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofTotal) || ofTotal <= 0 ||
      !Number.isFinite(pairOwns) || pairOwns > ofTotal ||
      !Number.isFinite(shareOfTotal) || typeof duet !== 'boolean') return null
  const unit = ofTotal === 1 ? 'starve' : 'starves'
  return `the grand total's own mix (v0.975.7): no solo lane owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofTotal} ${unit} (${(shareOfTotal * 100).toFixed(1)}%) - THE MASS'S OWN CROWD: the seat's tie law held, the mix is the shape${duet ? ' (the duet\'s own tie)' : ''} - the lanes' own spread prices the sky the solo law refused to seat`
}
