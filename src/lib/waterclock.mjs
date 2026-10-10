//
// waterclock.mjs - THE WATER LANE'S OWN CLOCK (v0.918.0)
//
// Face 192 (38087218197) TRIPLED the rescue lane - 45 starts (face 191
// rode 15) and 36 transit launches, one bot's own re-arms (F6 owns 36
// of 36, the v0.783.0 bill) - and STILL lost 4 bots to the water while
// the deaths' own third book drained the closing third (late 452u of
// 671u, 7 of 10 timed deaths). The lane's own arms never rode a clock:
// the deaths have their thirds (the v0.883.0 drain book), the starves
// have theirs (the v0.913.0 starve clock) - the water lane's own WHEN
// had no seat. THE CLOCK joins the water lane's two arm books on the
// heartbeat rail (the starve clock's own stamp law, one anchor walk):
// start (the drowning rescue start - RESCUE_START_RE verbatim, the
// one-parser law) and launch (the transit swim's re-arms - the
// transit census's own parser verbatim). The lanes join on the shared
// rail, never on the count (the v0.695.0 lanes-share-the-sky law).
//
// THE THIRDS CUT (the v0.733.0 law, the point-stamp grain): thirdS =
// clockEnd / 3, t < thirdS is early, t < 2 * thirdS is mid, the rest
// is late - the boundary rides the later third. The strict-majority
// seat (the v0.774.0 cast, the v0.912.0 leg, the v0.913.0 sky): a
// third owns the water only above half (a tie owns nothing - the
// storm-has-no-seat precedent). The burst's own share rides beside the
// seat (the DECIDE_BURST_WINDOW_S window imported from walkfail - the
// house's one window, never forked).
//
// THE LIVE READ ON THE ROW'S OWN FIRST FACE (face 192, decomposed from
// the current tree): early 51 / mid 25 / late 5 of 81 timed arms -
// early owns 51 of 81 (63%) - THE OPENING WATER: the spawn's own
// geometry arms the lane while the deaths' own drain rides the closing
// third - the lanes' own legs: start 20/20/5 (the tie's own silence),
// launch 31/5/0 - the burst's own share: 18 of 81 (22%).
//
// Fences (the honest fork, every one the starve clock's own):
//   - junk lines (non-string) never price, never count
//   - a start without a bot tag names nobody - junk stays junk (the
//     rescue ledger's own law)
//   - an arm before the first heartbeat rides unplaced (counted
//     honestly, never placed)
//   - no heartbeat clock -> the silence (no thirds without a rail)
//   - zero timed arms -> the silence
//   - no solo third above half -> the honest spread
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.379/.../v0.916.0 precedent).
//

import { parseHeartbeat } from './stormcensus.mjs'
import { parseTransitLaunch } from './transitcensus.mjs'
import { RESCUE_START_RE } from './rescue-ledger.mjs'
import { DECIDE_BURST_WINDOW_S } from './walkfail.mjs'

const LANE_START = 'start'
const LANE_LAUNCH = 'launch'

export const WATER_LANES = [LANE_START, LANE_LAUNCH]

/**
 * waterClockBook(lines) - the water lane's own stamp book: every rescue
 * start and every transit launch, each riding its line's own heartbeat
 * anchor (the starve clock's own stamp law).
 *
 * @param {string[]|string} [lines] the face log (array or raw blob)
 * @returns {{stamps: Array<{lane: string, bot: string, ts: number|null}>,
 *   clockEnd: number|null, lanes: Record<string, number>, untimed: number}}
 */
export function waterClockBook (lines) {
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
    if (RESCUE_START_RE.test(l)) {
      const b = l.match(/^F(\d+)\s/)
      if (!b) continue // a start without a tag names nobody - junk stays junk
      stamps.push({ lane: LANE_START, bot: 'F' + b[1], ts: lastT })
      lanes[LANE_START] = (lanes[LANE_START] || 0) + 1
      continue
    }
    const tl = parseTransitLaunch(l)
    if (tl) {
      stamps.push({ lane: LANE_LAUNCH, bot: tl.bot, ts: lastT })
      lanes[LANE_LAUNCH] = (lanes[LANE_LAUNCH] || 0) + 1
    }
  }
  return { stamps, clockEnd, lanes, untimed: stamps.filter(s => s.ts === null).length }
}

/**
 * waterClockVerdict(book) - the water lane's own thirds verdict: the
 * joined arms' own thirds cut (the v0.733.0 law), the strict-majority
 * seat, the burst's own share, the per-lane legs, the per-bot legs.
 * Junk never prices (the honest silence's own law).
 *
 * @param {unknown} [book] waterClockBook's own output
 * @returns {null|{timed: number, unplaced: number,
 *   thirds: {early: number, mid: number, late: number},
 *   seat: null|{cls: string, owns: number},
 *   perLane: Record<string, {early: number, mid: number, late: number}>,
 *   perBot: Record<string, {early: number, mid: number, late: number}>,
 *   burst: number, burstShare: number,
 *   span: {first: number, last: number}|null,
 *   clockEnd: number, thirdS: number}}
 */
export function waterClockVerdict (book) {
  if (!book || typeof book !== 'object') return null
  const stamps = Array.isArray(book.stamps) ? book.stamps : null
  if (!stamps) return null
  const clockEnd = book.clockEnd
  if (!Number.isFinite(clockEnd) || clockEnd <= 0) return null // no thirds without a rail
  const timedTs = []
  let unplaced = 0
  for (const s of stamps) {
    if (!s || typeof s !== 'object') continue // junk stamps never price
    if (s.ts === null) { unplaced++; continue } // the arm before the rail rides unplaced
    if (!Number.isFinite(s.ts)) continue // junk ts never prices, never counts
    timedTs.push(s.ts)
  }
  if (timedTs.length <= 0) return null // the honest silence: no arm ever rode
  timedTs.sort((a, b) => a - b)
  const thirdS = clockEnd / 3
  const clsOf = t => (t < thirdS ? 'early' : t < 2 * thirdS ? 'mid' : 'late')
  const thirds = { early: 0, mid: 0, late: 0 }
  const perLane = {}
  const perBot = {}
  for (const s of stamps) {
    if (!s || typeof s !== 'object' || s.ts === null || !Number.isFinite(s.ts)) continue
    const cls = clsOf(s.ts)
    thirds[cls]++
    const lane = typeof s.lane === 'string' && s.lane !== '' ? s.lane : 'unclassed'
    if (!perLane[lane]) perLane[lane] = { early: 0, mid: 0, late: 0 }
    perLane[lane][cls]++
    const bot = typeof s.bot === 'string' && s.bot !== '' ? s.bot : '?'
    const key = lane + ':' + bot
    if (!perBot[key]) perBot[key] = { early: 0, mid: 0, late: 0 }
    perBot[key][cls]++
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
    perLane,
    perBot,
    burst,
    burstShare,
    span: { first: timedTs[0], last: timedTs[n - 1] },
    clockEnd,
    thirdS
  }
}

// The seats' own levers - one table, the v0.583.0 levers precedent.
export const WATER_CLOCK_LEVERS = {
  early: 'THE OPENING WATER: the spawn\'s own geometry arms the lane - the closing third rides thin',
  mid: 'THE NOON WATER: the arms crowd the face\'s middle third',
  late: 'THE CLOSING WATER: the arms chase the storm\'s own drain'
}

/**
 * waterClockRow(verdict) - the verdict's own row: the joined thirds
 * read, the seat (or the honest spread), the lanes' own legs, the
 * burst's own share. Junk never prints (the honest silence's row law).
 *
 * @param {unknown} [verdict] waterClockVerdict's own output
 * @returns {null|string}
 */
export function waterClockRow (verdict) {
  if (!verdict || typeof verdict !== 'object') return null
  const { timed, unplaced, thirds, seat, perLane, burst, burstShare } = verdict
  if (!Number.isFinite(timed) || timed <= 0) return null
  if (!thirds || !Number.isFinite(thirds.early) || !Number.isFinite(thirds.mid) || !Number.isFinite(thirds.late)) return null
  const unit = timed === 1 ? 'timed arm' : 'timed arms'
  const unplacedTail = unplaced > 0 ? ` (unplaced ${unplaced})` : ''
  const head = `the water lane's own clock (v0.918.0): early ${thirds.early} / mid ${thirds.mid} / late ${thirds.late} of ${timed} ${unit}${unplacedTail}`
  const lever = seat ? WATER_CLOCK_LEVERS[seat.cls] || 'the third\'s own detail is the front' : 'no third owns the water - the arms spread across the clock'
  const seatBit = seat
    ? ` - ${seat.cls} owns ${seat.owns} of ${timed} (${Math.round((seat.owns / timed) * 100)}%) - ${lever}`
    : ` - ${lever}`
  const legs = WATER_LANES
    .filter(lane => perLane && perLane[lane])
    .map(lane => {
      const t = perLane[lane]
      return `${lane} ${t.early}/${t.mid}/${t.late}`
    })
    .join(', ')
  const legsBit = legs ? ` - the lanes' own legs: ${legs}` : ''
  const burstBit = ` - the burst's own share: ${burst} of ${timed} (${Math.round(burstShare * 100)}%)${burstShare >= 0.5 ? ' - one window priced the mass' : ''}`
  return `${head}${seatBit}${legsBit}${burstBit}`
}
