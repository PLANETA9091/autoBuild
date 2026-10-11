//
// standdownclock.mjs - THE STANDDOWN'S OWN CLOCK (v0.921.0)
//
// Face 193's own read named the front: the rescue lane's arms arrive in
// the closing third (26 late starts) and the saves still don't hold -
// the ends' own bill rode released 38 / frozen standdown 16, and the
// frozen class's own WHEN never rode a clock. The house prices the
// standdown's COST (the durations, the v0.431.0 price leg) and its
// BLINDNESS (the v0.799.0 blind seat) - the freeze's own position on
// the face's clock had no seat. THE CLOCK stamps every frozen-standdown
// end on the heartbeat rail (the starve clock's own stamp law, one
// anchor walk) and cuts the face's own thirds.
//
// THE PARSERS RIDE THE HOUSE, NEVER A FORK (the one-parser law):
//   - the classifier: rescueEndClass verbatim (rescue-ledger.mjs - the
//     frozenStanddown class's own read, one classifier for every lane)
//   - the duration: rescueEndSeconds verbatim (the 'in Ns' tail)
//   - the blindness: parseRescueBlind verbatim (the bracket's own
//     counters - the v0.431.0 grammar)
//   - the anchor: parseHeartbeat verbatim (stormcensus.mjs - the same
//     walk waterclock/starveclock ride)
//
// THE THIRDS CUT (the v0.733.0 law, the point-stamp grain): thirdS =
// clockEnd / 3, t < thirdS is early, t < 2 * thirdS is mid, the rest
// is late - the boundary rides the later third. The strict-majority
// seat (the v0.774.0 cast, the v0.913.0 sky): a third owns the freeze
// only above half (a tie owns nothing - the storm-has-no-seat
// precedent). The burst's own share rides beside the seat (the
// DECIDE_BURST_WINDOW_S window imported from walkfail - the house's
// one window, never forked).
//
// THE TAIL LAW (the drain book's own honesty): the frozen seconds and
// the blind passes sum over EVERY priced stamp - placed or unplaced -
// the totals stay honest in the tail, the seat prices only the placed
// book. A bracketless standdown rides a null blind honestly (the
// bracket prints only when the rescue gathered the numbers - the
// rescue clock's own cell keeps that class).
//
// Fences (the honest fork, every one the water clock's own):
//   - junk lines (non-string) never price, never count
//   - a standdown without a bot tag names nobody - junk stays junk
//   - an end before the first heartbeat rides unplaced (counted
//     honestly, never placed)
//   - no heartbeat clock -> the silence (no thirds without a rail)
//   - zero timed ends -> the silence
//   - no solo third above half -> the honest spread
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.379/.../v0.918.0 precedent).
//

import { parseHeartbeat } from './stormcensus.mjs'
import { rescueEndClass, rescueEndSeconds } from './rescue-ledger.mjs'
import { parseRescueBlind } from './rescueclock.mjs'
import { DECIDE_BURST_WINDOW_S } from './walkfail.mjs'

/**
 * standdownClockBook(lines) - the frozen standdown's own stamp book:
 * every frozenStanddown end riding its line's own heartbeat anchor.
 *
 * @param {string[]|string} [lines] the face log (array or raw blob)
 * @returns {{stamps: Array<{bot: string, ts: number|null,
 *   durS: number|null, blind: {passes: number, shoreHits: number,
 *   probes: number}|null}>, clockEnd: number|null, untimed: number}}
 */
export function standdownClockBook (lines) {
  const rows = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : [])
  const stamps = []
  let lastT = null
  let clockEnd = null
  for (const l of rows) {
    if (typeof l !== 'string') continue
    const hb = parseHeartbeat(l)
    if (hb) { lastT = hb.tsS; clockEnd = hb.tsS }
    if (rescueEndClass(l) !== 'frozenStanddown') continue
    const b = l.match(/^F(\d+)\s/)
    if (!b) continue // a standdown without a tag names nobody - junk stays junk
    stamps.push({
      bot: 'F' + b[1],
      ts: lastT,
      durS: rescueEndSeconds(l),
      blind: parseRescueBlind(l),
    })
  }
  return { stamps, clockEnd, untimed: stamps.filter(s => s.ts === null).length }
}

/**
 * standdownClockVerdict(book) - the frozen standdown's own thirds
 * verdict: the v0.733.0 cut, the strict-majority seat, the burst's own
 * share, the per-bot legs (count desc, byte asc - the byte law), the
 * frozen seconds' own bill and the blind walks' own passes (the tail
 * law: placed or unplaced, the totals stay honest).
 * Junk never prices (the honest silence's own law).
 *
 * @param {unknown} [book] standdownClockBook's own output
 * @returns {null|{timed: number, unplaced: number,
 *   thirds: {early: number, mid: number, late: number},
 *   seat: null|{cls: string, owns: number},
 *   perBot: Record<string, {early: number, mid: number, late: number}>,
 *   burst: number, burstShare: number,
 *   frozenS: number, frozenN: number,
 *   blindPasses: number, blindLines: number,
 *   span: {first: number, last: number}|null,
 *   clockEnd: number, thirdS: number}}
 */
export function standdownClockVerdict (book) {
  if (!book || typeof book !== 'object') return null
  const stamps = Array.isArray(book.stamps) ? book.stamps : null
  if (!stamps) return null
  const clockEnd = book.clockEnd
  if (!Number.isFinite(clockEnd) || clockEnd <= 0) return null // no thirds without a rail
  const timedTs = []
  let unplaced = 0
  let frozenS = 0
  let frozenN = 0
  let blindPasses = 0
  let blindLines = 0
  for (const s of stamps) {
    if (!s || typeof s !== 'object') continue // junk stamps never price
    if (Number.isFinite(s.durS)) { frozenS += s.durS; frozenN++ } // the tail's own honesty: placed or not
    if (s.blind && typeof s.blind === 'object' && Number.isFinite(s.blind.passes)) {
      blindPasses += s.blind.passes
      blindLines++
    }
    if (s.ts === null) { unplaced++; continue } // the end before the rail rides unplaced
    if (!Number.isFinite(s.ts)) continue // junk ts never prices, never counts
    timedTs.push(s.ts)
  }
  if (timedTs.length <= 0) return null // the honest silence: no end ever rode
  timedTs.sort((a, b) => a - b)
  const thirdS = clockEnd / 3
  const clsOf = t => (t < thirdS ? 'early' : t < 2 * thirdS ? 'mid' : 'late')
  const thirds = { early: 0, mid: 0, late: 0 }
  const perBot = {}
  for (const s of stamps) {
    if (!s || typeof s !== 'object' || s.ts === null || !Number.isFinite(s.ts)) continue
    const cls = clsOf(s.ts)
    thirds[cls]++
    const bot = typeof s.bot === 'string' && s.bot !== '' ? s.bot : '?'
    if (!perBot[bot]) perBot[bot] = { early: 0, mid: 0, late: 0 }
    perBot[bot][cls]++
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
  // the burst's own share - the house's one 30s window (imported, never
  // forked), the densest sliding window over the timed stamps
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
    perBot,
    burst,
    burstShare,
    frozenS: +frozenS.toFixed(1),
    frozenN,
    blindPasses,
    blindLines,
    span: { first: timedTs[0], last: timedTs[n - 1] },
    clockEnd,
    thirdS
  }
}

// The seats' own levers - one table, the v0.583.0 levers precedent.
export const STANDDOWN_LEVERS = {
  early: 'THE OPENING FREEZE: the spawn\'s own water froze the first rescues',
  mid: 'THE NOON FREEZE: the freeze crowds the face\'s middle third',
  late: 'THE CLOSING FREEZE: the rescue froze inside the storm\'s own drain'
}

// The per-bot legs' own byte law (count desc, then the bot's own byte
// asc) - the v0.777.0 riders' own sort, two legs to the row.
const topBots = (perBot) => Object.entries(perBot)
  .sort((a, b) => {
    const ta = a[1].early + a[1].mid + a[1].late
    const tb = b[1].early + b[1].mid + b[1].late
    if (tb !== ta) return tb - ta
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
  })
  .slice(0, 2)

/**
 * standdownClockRow(verdict) - the verdict's own row: the frozen
 * thirds read, the seat (or the honest spread), the top two bots' own
 * legs, the frozen seconds' own bill, the blind walks' own passes.
 * Junk never prints (the honest silence's row law).
 *
 * @param {unknown} [verdict] standdownClockVerdict's own output
 * @returns {null|string}
 */
export function standdownClockRow (verdict) {
  if (!verdict || typeof verdict !== 'object') return null
  const { timed, unplaced, thirds, seat, perBot, burst, burstShare, frozenS, frozenN, blindPasses, blindLines } = verdict
  if (!Number.isFinite(timed) || timed <= 0) return null
  if (!thirds || !Number.isFinite(thirds.early) || !Number.isFinite(thirds.mid) || !Number.isFinite(thirds.late)) return null
  const unit = timed === 1 ? 'frozen standdown' : 'frozen standdowns'
  const unplacedTail = unplaced > 0 ? ` (unplaced ${unplaced})` : ''
  const head = `the standdown's own clock (v0.921.0): early ${thirds.early} / mid ${thirds.mid} / late ${thirds.late} of ${timed} ${unit}${unplacedTail}`
  const lever = seat ? STANDDOWN_LEVERS[seat.cls] || 'the third\'s own detail is the front' : 'no third owns the freeze - the standdowns spread across the clock'
  const seatBit = seat
    ? ` - ${seat.cls} owns ${seat.owns} of ${timed} (${Math.round((seat.owns / timed) * 100)}%) - ${lever}`
    : ` - ${lever}`
  const legs = topBots(perBot || {})
    .map(([bot, t]) => `${bot} ${t.early}/${t.mid}/${t.late}`)
    .join(' + ')
  const legsBit = legs ? ` - the bots' own legs: ${legs}` : ''
  const frozenBit = frozenN > 0
    ? ` - the frozen seconds' own bill: ${frozenS}s of ${frozenN}`
    : ''
  const blindBit = blindLines > 0
    ? ` - the blind walks' own passes: ${blindPasses} of ${blindLines}`
    : ''
  const burstBit = ` - the burst's own share: ${burst} of ${timed} (${Math.round(burstShare * 100)}%)${burstShare >= 0.5 ? ' - one window priced the mass' : ''}`
  return `${head}${seatBit}${legsBit}${frozenBit}${blindBit}${burstBit}`
}

// (v0.931.0) THE STANDDOWN'S OWN BOT - WHICH bot owns the frozen-standdown
// book. The v0.921.0 clock seated the THIRD axis (which slice of the clock
// owns the freeze) and priced the bots' own legs beside it, but the bot
// axis itself rode raw: the face 198 read named the shape as a membership
// note ('7 of 8 frozen standdowns mid, 88%, all F6+F16') - no row ever
// said WHOSE freezes own the book. THE BILL LAW: the book's own stamps
// verbatim - the key IS the atom ('F6', the stamp's own bot byte), the
// stamp the mass - zero re-parsing, one book, the v0.926.0 prey fold's
// own precedent. The bot axis is ts-independent: an untimed stamp still
// names its bot (the tail law's own honesty - the totals stay whole, the
// thirds' own placed-book law never leaks here). THE STRICT-MAJORITY LAW:
// a bot owns the freeze only above half the standdowns - a tie owns
// nothing (the storm-has-no-seat precedent). The riders measure beside
// the seat's silence (the top two under the byte law: count desc, the
// bot's own byte asc). THE BRANCH LAW (one row never both) lives in the
// lib: the riders read null whenever the seat's owner exists (the
// v0.930.0 stakes' own fence shape). The junk fences: a non-object book,
// a non-array stamps leg, a stamp without a well-formed bot byte - the
// real stamps still tally; a zero-sum book reads the honest silence.
// Read-time tooling, zero fleet log lines - CENSUS GUARD.
const STANDDOWN_BOT_RE = /^F\d+$/

// (v0.961.0) exported for the cross-lane joins (the churn throne's own
// join consumes the standdown book's own tally - the lib's own cells,
// never re-spelled; the one-parser law). The seat's own reading of the
// stamps, byte for byte - the export adds no behavior.
export const standdownBotTally = (book) => {
  const stamps = book && typeof book === 'object' && !Array.isArray(book) ? book.stamps : book
  if (!Array.isArray(stamps)) return null
  const byBot = {}
  let total = 0
  for (const s of stamps) {
    if (!s || typeof s !== 'object' || Array.isArray(s)) continue
    if (typeof s.bot !== 'string' || !STANDDOWN_BOT_RE.test(s.bot)) continue
    byBot[s.bot] = (byBot[s.bot] || 0) + 1
    total += 1
  }
  if (total <= 0) return null
  return { byBot, total }
}

const standdownBookOf = (book) =>
  (book && typeof book === 'object' && !Array.isArray(book)) ? book : null

export function standdownBotSeat (book) {
  const t = standdownBotTally(standdownBookOf(book) || book)
  if (!t) return null
  const half = t.total / 2
  for (const [bot, owns] of Object.entries(t.byBot)) {
    if (owns > half) return { bot, owns, ofStanddowns: t.total, shareOfStanddowns: +(owns / t.total).toFixed(3) }
  }
  return null
}

export function standdownBotRiders (book) {
  const t = standdownBotTally(standdownBookOf(book) || book)
  if (!t) return null
  const ranked = Object.entries(t.byBot).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
  if (ranked.length < 2) return null
  const half = t.total / 2
  if (ranked[0][1] > half) return null // the branch law: the seat's owner exists - the mix never prints
  const [leader, leaderOwns] = ranked[0]
  const [runner, runnerOwns] = ranked[1]
  const pairOwns = leaderOwns + runnerOwns
  return { leader, leaderOwns, runner, runnerOwns, ofStanddowns: t.total, pairOwns, shareOfStanddowns: +(pairOwns / t.total).toFixed(3), duet: leaderOwns === runnerOwns }
}

// (v0.931.0) the standdown's own bot row - THE STANDDOWN'S OWN BOT: the
// seat names WHICH bot's own freezes own the standdown book; the churn's
// own front prices the freeze the thirds rode unnamed. Junk never prints
// a seat (the honest silence's own row law).
export function standdownBotSeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { bot, owns, ofStanddowns, shareOfStanddowns } = seat
  if (typeof bot !== 'string' || !STANDDOWN_BOT_RE.test(bot) ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofStanddowns) || ofStanddowns <= 0 || owns > ofStanddowns ||
      !Number.isFinite(shareOfStanddowns)) return null
  const unit = ofStanddowns === 1 ? 'frozen standdown' : 'frozen standdowns'
  return `the freeze's own bot (v0.931.0): ${bot} owns ${owns} of ${ofStanddowns} ${unit} (${(shareOfStanddowns * 100).toFixed(1)}%) - THE STANDDOWN'S OWN BOT: one bot's own freezes own the standdown book - the churn's own front prices the freeze the thirds rode unnamed`
}

// (v0.931.0) the standdown's own riders row - THE STANDDOWN'S OWN MIX: a
// measure of the shape, never a named owner (the seat's tie law holds).
// Junk never prints a shape (the honest silence's own row law).
export function standdownBotRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofStanddowns, pairOwns, shareOfStanddowns } = r
  if (typeof leader !== 'string' || !STANDDOWN_BOT_RE.test(leader) ||
      typeof runner !== 'string' || !STANDDOWN_BOT_RE.test(runner) ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 ||
      !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofStanddowns) || ofStanddowns <= 0 ||
      !Number.isFinite(pairOwns) || pairOwns > ofStanddowns ||
      !Number.isFinite(shareOfStanddowns)) return null
  const unit = ofStanddowns === 1 ? 'frozen standdown' : 'frozen standdowns'
  return `the freeze's own riders (v0.931.0): no solo bot owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofStanddowns} ${unit} (${(shareOfStanddowns * 100).toFixed(1)}%) - THE STANDDOWN'S OWN MIX: the seat's tie law held, the mix is the shape - the freeze's own bots rode raw beside the thirds' own seat`
}
