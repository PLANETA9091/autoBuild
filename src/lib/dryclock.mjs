//
// dryclock.mjs - THE DRY READ'S OWN CLOCK (v0.923.0)
//
// Face 196's own read named the front in the house's own words: the
// dry read's own side row (v0.816.0) split the drought's book on the
// first bank's own binary (before 33 / after 7 of 40) and named the
// next byte itself - "the tithe's own clock is the front (the dry
// reads queued before the first bank)". The drought's DEMAND side has
// its column (the v0.737.0 per-chest map), its side (the v0.816.0
// before/after split), its ask's size (the v0.824.0 answer) and its
// geography (the v0.831.0 receipts) - the drought's own WHEN never
// rode the face's own thirds cut. This clock stamps every located dry
// read on the heartbeat rail (the starve clock's own stamp law, one
// anchor walk) and cuts the thirds.
//
// THE PARSER RIDES THE HOUSE, NEVER A FORK (the one-parser law):
//   - the dry read: COMMONS_EMPTY_RE verbatim (commonsledger.mjs - the
//     located form only, the position group present; the bare form is
//     the old faces' shape and rides out - the timeline's own
//     population discipline, the v0.738.0 law: the raw stream's own
//     population, no sweep gate, no re-parse)
//   - the anchor: parseHeartbeat verbatim (stormcensus.mjs - the same
//     walk waterclock/starveclock/standdownclock ride)
//
// THE THIRDS CUT (the v0.733.0 law, the point-stamp grain): thirdS =
// clockEnd / 3, t < thirdS is early, t < 2 * thirdS is mid, the rest
// is late - the boundary rides the later third. The strict-majority
// seat (the v0.774.0 cast, the v0.913.0 sky, the v0.921.0 freeze): a
// third owns the drought only above half (a tie owns nothing - the
// storm-has-no-seat precedent). The burst's own share rides beside the
// seat (the DECIDE_BURST_WINDOW_S window imported from walkfail - the
// house's one window, never forked).
//
// THE TAIL LAW (the standdown clock's own honesty): the chests' own
// spread counts every located read's chest - placed or unplaced - the
// yard's own geography stays honest in the tail; the bots' own legs
// price only the placed book.
//
// Fences (the honest fork, every one the clocks' own):
//   - junk lines (non-string) never price, never count
//   - the bare form (no position) rides out - the located population
//     is the clock's own census (the timeline's own law)
//   - a dry read without a bot tag names nobody - junk stays junk
//   - a read before the first heartbeat rides unplaced (counted
//     honestly, never placed)
//   - no heartbeat clock -> the silence (no thirds without a rail)
//   - zero timed reads -> the silence
//   - no solo third above half -> the honest spread
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.379/.../v0.922.0 precedent).
//

import { parseHeartbeat } from './stormcensus.mjs'
import { COMMONS_EMPTY_RE } from './commonsledger.mjs'
import { DECIDE_BURST_WINDOW_S } from './walkfail.mjs'

/**
 * dryClockBook(lines) - the located dry read's own stamp book: every
 * located chest-drought read riding its line's own heartbeat anchor.
 *
 * @param {string[]|string} [lines] the face log (array or raw blob)
 * @returns {{stamps: Array<{bot: string, chest: string,
 *   ts: number|null}>, clockEnd: number|null, untimed: number,
 *   bareForm: number}}
 */
export function dryClockBook (lines) {
  const rows = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : [])
  const stamps = []
  let lastT = null
  let clockEnd = null
  let bareForm = 0
  for (const l of rows) {
    if (typeof l !== 'string') continue
    const hb = parseHeartbeat(l)
    if (hb) { lastT = hb.tsS; clockEnd = hb.tsS }
    const m = COMMONS_EMPTY_RE.exec(l)
    if (!m) continue
    if (!m[2]) { bareForm++; continue } // the bare form rides out - the old faces' shape
    if (!m[1]) continue // a read without a bot tag names nobody - junk stays junk
    stamps.push({ bot: m[1], chest: m[2], ts: lastT })
  }
  return {
    stamps,
    clockEnd,
    untimed: stamps.filter(s => s.ts === null).length,
    bareForm
  }
}

/**
 * dryClockVerdict(book) - the drought's own thirds verdict: the
 * v0.733.0 cut, the strict-majority seat, the burst's own share, the
 * per-bot legs (count desc, byte asc - the byte law), the chests' own
 * spread (the tail law: placed or unplaced). Junk never prices.
 *
 * @param {unknown} [book] dryClockBook's own output
 * @returns {null|{timed: number, unplaced: number,
 *   thirds: {early: number, mid: number, late: number},
 *   seat: null|{cls: string, owns: number},
 *   perBot: Record<string, {early: number, mid: number, late: number}>,
 *   chests: number, bareForm: number,
 *   burst: number, burstShare: number,
 *   span: {first: number, last: number}|null,
 *   clockEnd: number, thirdS: number}}
 */
export function dryClockVerdict (book) {
  if (!book || typeof book !== 'object') return null
  const stamps = Array.isArray(book.stamps) ? book.stamps : null
  if (!stamps) return null
  const clockEnd = book.clockEnd
  if (!Number.isFinite(clockEnd) || clockEnd <= 0) return null // no thirds without a rail
  const timedTs = []
  let unplaced = 0
  const chests = new Set()
  for (const s of stamps) {
    if (!s || typeof s !== 'object') continue // junk stamps never price
    if (typeof s.chest === 'string' && s.chest !== '') chests.add(s.chest) // the tail's own honesty: placed or not
    if (s.ts === null) { unplaced++; continue } // the read before the rail rides unplaced
    if (!Number.isFinite(s.ts)) continue // junk ts never prices, never counts
    timedTs.push(s.ts)
  }
  if (timedTs.length <= 0) return null // the honest silence: no read ever rode
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
    chests: chests.size,
    bareForm: Number.isFinite(book.bareForm) ? book.bareForm : 0,
    burst,
    burstShare,
    span: { first: timedTs[0], last: timedTs[n - 1] },
    clockEnd,
    thirdS
  }
}

// The seats' own levers - one table, the v0.583.0 levers precedent.
export const DRY_CLOCK_LEVERS = {
  early: 'THE OPENING DROUGHT: the dry reads crowd the face\'s first third - the pump\'s own prime is the front',
  mid: 'THE NOON DROUGHT: the dry reads crowd the face\'s middle third',
  late: 'THE CLOSING DROUGHT: the dry reads crowd the deadline\'s own third - the sweeps starve where the stock lands'
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
 * dryClockRow(verdict) - the verdict's own row: the drought's thirds
 * read, the seat (or the honest spread), the top two bots' own legs,
 * the chests' own spread. Junk never prints (the honest silence's row
 * law).
 *
 * @param {unknown} [verdict] dryClockVerdict's own output
 * @returns {null|string}
 */
export function dryClockRow (verdict) {
  if (!verdict || typeof verdict !== 'object') return null
  const { timed, unplaced, thirds, seat, perBot, chests, bareForm, burst, burstShare } = verdict
  if (!Number.isFinite(timed) || timed <= 0) return null
  if (!thirds || !Number.isFinite(thirds.early) || !Number.isFinite(thirds.mid) || !Number.isFinite(thirds.late)) return null
  const unit = timed === 1 ? 'located dry read' : 'located dry reads'
  const unplacedTail = unplaced > 0 ? ` (unplaced ${unplaced})` : ''
  const bareBit = bareForm > 0 ? ` - the bare form's own rides: ${bareForm}` : ''
  const head = `the dry read's own clock (v0.923.0): early ${thirds.early} / mid ${thirds.mid} / late ${thirds.late} of ${timed} ${unit}${unplacedTail}`
  const lever = seat ? DRY_CLOCK_LEVERS[seat.cls] || 'the third\'s own detail is the front' : 'no third owns the drought - the dry reads spread across the clock'
  const seatBit = seat
    ? ` - ${seat.cls} owns ${seat.owns} of ${timed} (${Math.round((seat.owns / timed) * 100)}%) - ${lever}`
    : ` - ${lever}`
  const legs = topBots(perBot || {})
    .map(([bot, t]) => `${bot} ${t.early}/${t.mid}/${t.late}`)
    .join(' + ')
  const legsBit = legs ? ` - the bots' own legs: ${legs}` : ''
  const chestBit = ` - the chests' own spread: ${chests} chest(s)`
  const burstBit = ` - the burst's own share: ${burst} of ${timed} (${Math.round(burstShare * 100)}%)${burstShare >= 0.5 ? ' - one window priced the mass' : ''}`
  return `${head}${seatBit}${legsBit}${chestBit}${bareBit}${burstBit}`
}
