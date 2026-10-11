//
// titheclock.mjs - THE TITHE'S OWN CLOCK (v0.927.0)
//
// The dry read's own clock (v0.924.0) priced the drought's WHEN and its
// first live face named the front in the house's own words: the early
// third owned 33 of 40 located dry reads (83%) - THE OPENING DROUGHT -
// and "the pump's own prime is the front". The demand side has its
// clock; the supply side never rode one. The tithe inflow's own line
// (fuelbank's emitter, the v0.598.0 ledger's census) prints every pump
// arm - attempted, delivered, dry, the open lens - and no row ever cut
// the pump's own thirds. This clock stamps every tithe inflow line on
// the heartbeat rail (the dry clock's own stamp law, one anchor walk)
// and cuts the thirds - the pump's WHEN beside the drought's WHEN.
//
// THE PARSER RIDES THE HOUSE, NEVER A FORK (the one-parser law):
//   - the inflow: parseTitheInflowTagged verbatim (titheledger.mjs -
//     the v0.927.0 additive tag reader: the house's own parseTitheInflow
//     grammar for the cells, the house's own optional-tag grammar for
//     the F-head - zero re-implementation)
//   - the anchor: parseHeartbeat verbatim (stormcensus.mjs - the same
//     walk waterclock/starveclock/standdownclock/dryclock ride)
//
// THE THIRDS CUT (the v0.733.0 law, the point-stamp grain): thirdS =
// clockEnd / 3, t < thirdS is early, t < 2 * thirdS is mid, the rest
// is late - the boundary rides the later third. The strict-majority
// seat (the v0.774.0 cast, the v0.913.0 sky, the v0.924.0 drought): a
// third owns the tithe only above half (a tie owns nothing - the
// storm-has-no-seat precedent). The burst's own share rides beside the
// seat (the DECIDE_BURST_WINDOW_S window imported from walkfail - the
// house's one window, never forked).
//
// THE PRIME'S OWN THIRD: the dry clock named the pump's prime the
// front - the clock names WHEN it rode. The first timed stamp with
// delivered > 0 owns the prime's third; a prime that rode before the
// rail rode untimed (the honest null third); a face whose pump never
// delivered reads the honest never. The prime is a fact of the whole
// book (placed or unplaced) - the tail's own honesty.
//
// THE TAIL LAW (the standdown/dry clocks' own honesty): the book's own
// mass - delivered units, dry opens, attempted opens - sums over EVERY
// priced stamp, placed or unplaced; the seat prices only the placed
// book.
//
// Fences (the honest fork, every one the clocks' own):
//   - junk lines (non-string) never price, never count
//   - a torn line (starts like a member, failed the grammar) rides the
//     ledger's own TITHE_TORN_RE sweep - counted, never priced
//   - an inflow without a bot tag names nobody - the cells still price
//     (the v0.600.0 prefix law: the tag is optional, the grammar strict)
//   - a stamp before the first heartbeat rides unplaced (counted
//     honestly, never placed)
//   - no heartbeat clock -> the silence (no thirds without a rail)
//   - zero timed stamps -> the silence
//   - no solo third above half -> the honest spread
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.379/.../v0.924.0 precedent).
//

import { parseHeartbeat } from './stormcensus.mjs'
import { parseTitheInflowTagged, parseFuelGrain, TITHE_TORN_RE } from './titheledger.mjs'
import { DECIDE_BURST_WINDOW_S } from './walkfail.mjs'

/**
 * titheClockBook(lines) - the tithe inflow's own stamp book: every
 * fuel tithe inflow line riding its line's own heartbeat anchor.
 *
 * @param {string[]|string} [lines] the face log (array or raw blob)
 * @returns {{stamps: Array<{bot: string|null, attempted: number,
 *   delivered: number, units: number, dry: number, open: string|null,
 *   ts: number|null}>, clockEnd: number|null, untimed: number,
 *   torn: number}}
 */
export function titheClockBook (lines) {
  const rows = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : [])
  const stamps = []
  let lastT = null
  let clockEnd = null
  let torn = 0
  for (const l of rows) {
    if (typeof l !== 'string') continue
    const hb = parseHeartbeat(l)
    if (hb) { lastT = hb.tsS; clockEnd = hb.tsS }
    const inf = parseTitheInflowTagged(l)
    if (inf) {
      stamps.push({
        bot: inf.bot,
        attempted: inf.attempted,
        delivered: inf.delivered,
        units: inf.units,
        dry: inf.dry,
        open: inf.open,
        ts: lastT
      })
      continue
    }
    if (parseFuelGrain(l)) continue // the grain lane's own member - another book's census, rides out untorn
    if (TITHE_TORN_RE.test(l)) torn++
  }
  return {
    stamps,
    clockEnd,
    untimed: stamps.filter(s => s.ts === null).length,
    torn
  }
}

/**
 * titheClockVerdict(book) - the pump's own thirds verdict: the
 * v0.733.0 cut, the strict-majority seat, the prime's own third, the
 * bots' own legs, the book's own mass (the tail law), the burst's own
 * share. Junk never prices.
 *
 * @param {unknown} [book] titheClockBook's own output
 * @returns {null|{timed: number, unplaced: number,
 *   thirds: {early: number, mid: number, late: number},
 *   seat: null|{cls: string, owns: number},
 *   prime: {rode: boolean, third: string|null, ts: number|null},
 *   perBot: Record<string, {early: number, mid: number, late: number}>,
 *   mass: {attempted: number, delivered: number, units: number,
 *     dry: number},
 *   torn: number, burst: number, burstShare: number,
 *   span: {first: number, last: number}|null,
 *   clockEnd: number, thirdS: number}}
 */
export function titheClockVerdict (book) {
  if (!book || typeof book !== 'object') return null
  const stamps = Array.isArray(book.stamps) ? book.stamps : null
  if (!stamps) return null
  const clockEnd = book.clockEnd
  if (!Number.isFinite(clockEnd) || clockEnd <= 0) return null // no thirds without a rail
  const timedTs = []
  let unplaced = 0
  const mass = { attempted: 0, delivered: 0, units: 0, dry: 0 }
  let prime = null // the first delivered>0 stamp - placed or unplaced (the tail's own fact)
  for (const s of stamps) {
    if (!s || typeof s !== 'object') continue // junk stamps never price
    mass.attempted += Number.isFinite(s.attempted) ? s.attempted : 0
    mass.delivered += Number.isFinite(s.delivered) ? s.delivered : 0
    mass.units += Number.isFinite(s.units) ? s.units : 0
    mass.dry += Number.isFinite(s.dry) ? s.dry : 0
    if (prime === null && s.delivered > 0) prime = s // the pump's own prime - the whole book's fact
    if (s.ts === null) { unplaced++; continue } // the arm before the rail rides unplaced
    if (!Number.isFinite(s.ts)) continue // junk ts never prices, never counts
    timedTs.push(s.ts)
  }
  if (timedTs.length <= 0) return null // the honest silence: no arm ever rode
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
  // the prime's own third: the first delivered arm's own placement
  const primeThird = prime
    ? (prime.ts !== null && Number.isFinite(prime.ts) ? clsOf(prime.ts) : null)
    : undefined // undefined = the pump never delivered; null = rode untimed
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
    prime: {
      rode: prime !== null,
      third: primeThird === undefined ? null : primeThird,
      ts: prime && prime.ts !== null && Number.isFinite(prime.ts) ? prime.ts : null
    },
    neverPrimed: prime === null,
    perBot,
    mass,
    torn: Number.isFinite(book.torn) ? book.torn : 0,
    burst,
    burstShare,
    span: { first: timedTs[0], last: timedTs[n - 1] },
    clockEnd,
    thirdS
  }
}

// The seats' own levers - one table, the v0.583.0 levers precedent.
export const TITHE_CLOCK_LEVERS = {
  early: 'THE OPENING TITHE: the pump\'s arms crowd the face\'s first third - the pump primes where the drought opens (the dry clock\'s own join)',
  mid: 'THE NOON TITHE: the pump\'s arms crowd the face\'s middle third - the prime rides behind the drought\'s own opening',
  late: 'THE CLOSING TITHE: the pump\'s arms crowd the deadline\'s own third - the pump primes where the drain lands'
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
 * titheClockRow(verdict) - the verdict's own row: the pump's thirds
 * read, the seat (or the honest spread), the prime's own third, the
 * top two bots' own legs, the book's own mass, the torn sweep. Junk
 * never prints (the honest silence's row law).
 *
 * @param {unknown} [verdict] titheClockVerdict's own output
 * @returns {null|string}
 */
export function titheClockRow (verdict) {
  if (!verdict || typeof verdict !== 'object') return null
  const { timed, unplaced, thirds, seat, prime, neverPrimed, perBot, mass, torn, burst, burstShare } = verdict
  if (!Number.isFinite(timed) || timed <= 0) return null
  if (!thirds || !Number.isFinite(thirds.early) || !Number.isFinite(thirds.mid) || !Number.isFinite(thirds.late)) return null
  const unit = timed === 1 ? 'tithe inflow line' : 'tithe inflow lines'
  const unplacedTail = unplaced > 0 ? ` (unplaced ${unplaced})` : ''
  const head = `the tithe's own clock (v0.927.0): early ${thirds.early} / mid ${thirds.mid} / late ${thirds.late} of ${timed} ${unit}${unplacedTail}`
  const lever = seat ? TITHE_CLOCK_LEVERS[seat.cls] || 'the third\'s own detail is the front' : 'no third owns the tithe - the pump\'s arms spread across the clock'
  const seatBit = seat
    ? ` - ${seat.cls} owns ${seat.owns} of ${timed} (${Math.round((seat.owns / timed) * 100)}%) - ${lever}`
    : ` - ${lever}`
  const primeBit = neverPrimed
    ? ' - the prime never rode (the pump never delivered)'
    : prime.third
      ? ` - the prime's own third: ${prime.third} (first delivery t=${prime.ts}s)`
      : ' - the prime rode untimed (before the rail)'
  const legs = topBots(perBot || {})
    .map(([bot, t]) => `${bot} ${t.early}/${t.mid}/${t.late}`)
    .join(' + ')
  const legsBit = legs ? ` - the bots' own legs: ${legs}` : ''
  const massBit = ` - the book's own mass: delivered ${mass.units}u, dry ${mass.dry} open(s) of ${mass.attempted} attempted`
  const tornBit = torn > 0 ? ` - the torn sweep: ${torn}` : ''
  const burstBit = ` - the burst's own share: ${burst} of ${timed} (${Math.round(burstShare * 100)}%)${burstShare >= 0.5 ? ' - one window priced the mass' : ''}`
  return `${head}${seatBit}${primeBit}${legsBit}${massBit}${tornBit}${burstBit}`
}
