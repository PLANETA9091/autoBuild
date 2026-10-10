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
      if (wf.why === 'decide-timeout') { stamps.push({ lane: LANE_WALK, ts: lastT }); lanes[LANE_WALK] = (lanes[LANE_WALK] || 0) + 1 }
      continue
    }
    const sv = parseSweepVerdict(l)
    if (sv) {
      for (const p of sv.pairs) {
        const cls = classifySweepReason(p.reason)
        if (cls && cls.why === 'machine-unreachable-decide-timeout') {
          for (let i = 0; i < p.n; i++) { stamps.push({ lane: LANE_SWEEP, ts: lastT }); lanes[LANE_SWEEP] = (lanes[LANE_SWEEP] || 0) + 1 }
        }
      }
      continue
    }
    const hz = parseHopZero(l)
    if (hz && hz.klass && hz.klass.why === 'decide-timeout') {
      stamps.push({ lane: LANE_HOP, ts: lastT }); lanes[LANE_HOP] = (lanes[LANE_HOP] || 0) + 1
      continue
    }
    const wb = parseBankWalkBack(l)
    if (wb) {
      if (wb.why === 'chest-unreachable-decide-timeout') { stamps.push({ lane: LANE_BANK, ts: lastT }); lanes[LANE_BANK] = (lanes[LANE_BANK] || 0) + 1 }
      continue
    }
    const bz = parseBankZero(l)
    if (bz) {
      if (bz.why === 'chest-unreachable-decide-timeout') { stamps.push({ lane: LANE_BANK, ts: lastT }); lanes[LANE_BANK] = (lanes[LANE_BANK] || 0) + 1 }
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
