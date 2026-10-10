//
// whalerent.mjs - THE LOOP'S OWN RENT (v0.911.0)
//
// The give-up's own arm: where the zero-gain swim loop should have stopped,
// and the launches it spent past that point. Face 189 (38078750669) is the
// rent's own face: F18 spent 115 launches across 4 seats, all 6 paired
// stalls gained 0.0 ground, the loop ledger (v0.692.0) named the whale, the
// rotation row (v0.754.0) named the disguise ("the loop changed seats and
// every seat was the same wall") - and the loop still ran to the face's own
// end, because NOTHING prices the stopping point. The aquifer's give-up
// classes (0 carousel, 0 floor) never fired: the transit lane has no
// give-up at all - it has stalls (per-swim) but no loop-level brake.
//
// The arm is mechanical off the existing rows' own bars (zero new regexes
// - the one-parser law by import, the v0.692.0 ledger's own fuel):
//   the first LAUNCH line where the bot's running totals cross
//     launches   >= LOOP_WHALE_LAUNCHES   (the whale bar, v0.692.0)
//     seats      >= WHALE_RENT_SEATS      (the rotation's own gate, v0.754.0)
//     paired     gains.n > 0              (the stalls exist to read)
//     zero-yield gains.max <= 0           (the whale's own law)
// Every launch after that line is RENT: the spend the give-up would have
// kept. The rescue starts the rent dragged ride with it (the whale's water
// bill v0.698.0 joins the WHOLE loop; the rent joins its own window - the
// dives the governor would have spared).
//
// The fences (every one inherited, the honest fork):
//   - a paying loop is never rent (any paired gain > 0 face-wide -> null;
//     the whale verdict's own law - the max-gain gate)
//   - a single-seat whale is the pinned seat's own subject (the v0.446
//     cadence + the v0.722 pinbill own that read) -> the seat gate
//   - the arm must cross ON a launch line: a bar the stalls completed
//     after the last launch never armed (the give-up is the launch lane's
//     own brake) -> null
//   - rent 0 (the arm fired at the loop's own end) saves nothing -> null
//   - no whale face-end, no row (the silence law, v0.692.0 inherited)
//   - junk-safe null on non-input; a launch-free face reads the honest
//     empty shape
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only, the
// v0.379/.../v0.754.0 precedent) - the fleet's own transit bytes are the
// filter-keys, they already ride.
//

import { parseTransitLaunch, parseTransitStall } from './transitcensus.mjs'
import { LOOP_WHALE_LAUNCHES } from './transitloop.mjs'
import { RESCUE_START_RE } from './rescue-ledger.mjs'

// THE RENT'S OWN SEAT GATE - a single-seat whale is the pinned seat's own
// subject (the v0.446 cadence + the v0.722 pinbill own it); the rent prices
// the ROTATION's spend past its own bar, and the rotation needs >= 2 seats
// before the seat-hopping exists to arm against (the v0.754.0 gate's own
// constant, restated here as the rent's own name).
export const WHALE_RENT_SEATS = 2

/**
 * whaleRentRow(lines) - the loop's own rent: the give-up's own arm and the
 * launches past it, with the rescue starts the rent dragged (null unless
 * every gate holds).
 *
 * @param {string[]|string} [lines] the face log (array or raw blob)
 * @returns {null|string} the rent row, or null (the honest fork)
 */
export function whaleRentRow (lines) {
  const src = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : null)
  if (!src) return null
  const bots = new Map()
  for (let i = 0; i < src.length; i++) {
    const line = src[i]
    if (typeof line !== 'string') continue
    const p = parseTransitLaunch(line)
    if (p) {
      const b = bots.get(p.bot) ||
        bots.set(p.bot, {
          launches: 0, seats: new Map(), gains: { n: 0, max: null },
          lastLaunchD: null, arm: null
        }).get(p.bot)
      b.launches++
      const key = `[${p.x},${p.z}]`
      b.seats.set(key, (b.seats.get(key) || 0) + 1)
      b.lastLaunchD = p.dist
      // THE ARM - the first launch past the loop's own bar (running totals;
      // a bar crossed between launches never armed - the fence above).
      if (b.arm === null &&
          b.launches >= LOOP_WHALE_LAUNCHES &&
          b.seats.size >= WHALE_RENT_SEATS &&
          b.gains.n > 0 && b.gains.max !== null && b.gains.max <= 0) {
        b.arm = { atLaunch: b.launches, seats: b.seats.size, lineIdx: i }
      }
      continue
    }
    const st = parseTransitStall(line)
    if (st) {
      const b = bots.get(st.bot)
      if (b && b.lastLaunchD !== null) {
        const gained = b.lastLaunchD - st.dist
        b.gains.n++
        if (b.gains.max === null || gained > b.gains.max) b.gains.max = gained
      }
    }
  }
  // the candidates: every bot passing the whale gate face-end with an armed
  // give-up and rent in hand, the winner picked by the rent's own sort
  // (rent desc, launches desc, bot asc - the prize owns the row)
  const candidates = []
  for (const [bot, b] of bots) {
    if (b.launches < LOOP_WHALE_LAUNCHES) continue
    if (!(b.gains.n > 0) || b.gains.max === null || b.gains.max > 0) continue
    if (b.seats.size < WHALE_RENT_SEATS) continue
    if (!b.arm) continue
    const rent = b.launches - b.arm.atLaunch
    if (rent <= 0) continue
    // THE RENT'S OWN TOW - the rescue starts riding the rent window (the
    // whale's water bill joins the whole loop; the rent joins its own)
    let tow = 0
    const tag = `${bot} [${bot}] `
    for (let i = b.arm.lineIdx + 1; i < src.length; i++) {
      const line = src[i]
      if (typeof line === 'string' && line.startsWith(tag) && RESCUE_START_RE.test(line)) tow++
    }
    candidates.push({ bot, b, rent, tow })
  }
  if (!candidates.length) return null
  candidates.sort((a, c) => c.rent - a.rent || c.b.launches - a.b.launches || a.bot.localeCompare(c.bot))
  const w = candidates[0]
  const pct = Math.round((w.rent / w.b.launches) * 100)
  return `the loop's own rent: ${w.bot}'s give-up armed at launch ${w.b.arm.atLaunch} of ${w.b.launches} (seat ${w.b.arm.seats}, gains zero) - ${w.rent} launch(es) rode past the arm (${pct}% of the loop, ${w.tow} rescue start(s) in tow) - the carousel's own prize`
}
