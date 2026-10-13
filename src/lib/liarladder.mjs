//
// liarladder.mjs - THE LIAR LADDER'S OWN REACH (v0.976.10)
//
// FACE 308 = 38446472656's decompose rode the raw split ('liar ladder
// ratchets: 6 per-bot: F13=4 F17=2' + 'liar ladder resets: 0') - but
// the ladder's own REACH rode unnamed: how deep the patience ladder
// climbed this face, what bar the next override now needs, whether
// the phantom class ever stood down. The sequence rode by hand: F17
// ratcheted #1..#2 and abandoned; F13 ratcheted #1..#2, abandoned,
// and KEPT COUNTING to #4 - the stand-down retires the uncorroborated
// lane, the confirmations keep pricing the class's own evidence.
//
// THE FOLD: every ratchet line carries its own page number (the
// streak's own rung - glitchConfirmed++ rides the line); the reach is
// the deepest page any bot rode this face, and the bar at the reach
// is the fleet's own formula (glitchStreakCap - the one-formula law by
// reuse, never a re-derivation). The abandon lines price the
// stand-down seat (the class retired at GLITCH_ABANDON_PAGES), the
// reset lines price the re-arms (wet contact / the kept record). A
// face with no ratchets prices nothing (the honest silence - the fold
// prices what rode, never invents).
//
// THE FENCE: the reach never outruns the ratchets (a page-#N ratchet
// needs N confirmations in its own streak), the bar at the reach must
// be the formula's own word, a stand-down pins the reach at
// GLITCH_ABANDON_PAGES+ (an abandon fires when a bot's count hits the
// page bound) and owns its pages (every abandon line carries its own
// confirmed-page count). A fold that cannot prove itself prices
// nothing - the fence law.
//
// Mining-surface only: zero fleet wiring, zero new log lines, zero
// census shape change - CENSUS GUARD. Pure: reads, never mutates.
// Junk-safe: non-string lines judge nothing; non-array/string input
// reads the empty book.

import { glitchStreakCap, GLITCH_ABANDON_PAGES } from './drowning.mjs'

const RATCHET_RE = /liar ladder ratchets - confirmed no-op glitch page #(\d+)/
const ABANDON_RE = /liar ladder abandons the glitch class - (\d+) confirmed no-op pages/

/**
 * The liar ladder's own reach fold: how deep the chronic-liar patience
 * ladder climbed this face and what the evidence bar now prices.
 *
 * @param {string[]|string|null} [lines] the fleet log's lines (or the whole log)
 * @returns {{ratchets: number, reach: number, capAtReach: number,
 *   abandons: number, abandonPages: number, resets: number}|null} null when
 *   the input prices nothing
 */
export function liarLadderReachBook (lines) {
  const rows = Array.isArray(lines) ? lines : (typeof lines === 'string' ? lines.split('\n') : null)
  if (!rows) return null
  const out = { ratchets: 0, reach: 0, capAtReach: 0, abandons: 0, abandonPages: 0, resets: 0 }
  for (const line of rows) {
    if (typeof line !== 'string') continue
    if (line.includes('liar ladder ratchets')) {
      out.ratchets++
      const m = line.match(RATCHET_RE)
      if (m) {
        const page = Number(m[1])
        if (Number.isInteger(page) && page > out.reach) out.reach = page
      }
      continue
    }
    const a = line.match(ABANDON_RE)
    if (a) {
      out.abandons++
      const pages = Number(a[1])
      if (Number.isInteger(pages) && pages > 0) out.abandonPages += pages
      continue
    }
    if (line.includes('liar ladder resets')) out.resets++
  }
  out.capAtReach = out.reach > 0 ? glitchStreakCap(out.reach) : 0
  return out
}

/**
 * The reach fold's own fence: the reach never outruns the ratchets,
 * the bar at the reach is the formula's own word, the stand-down pins
 * the reach and owns its pages. A fold that cannot prove itself
 * prices nothing.
 *
 * @param {object|null} [b] the liarLadderReachBook fold
 * @returns {boolean} true when the fold may price
 */
export function liarLadderReachConsistent (b) {
  if (!b || typeof b !== 'object' || Array.isArray(b)) return false
  for (const k of ['ratchets', 'reach', 'capAtReach', 'abandons', 'abandonPages', 'resets']) {
    if (!Number.isInteger(b[k]) || b[k] < 0) return false
  }
  if (b.ratchets === 0 && (b.reach !== 0 || b.capAtReach !== 0)) return false
  if (b.ratchets > 0 && b.reach < 1) return false
  if (b.reach > b.ratchets) return false
  if (b.reach > 0 && b.capAtReach !== glitchStreakCap(b.reach)) return false
  if (b.abandons > 0 && b.reach < GLITCH_ABANDON_PAGES) return false
  if (b.abandons > 0 && b.abandonPages < b.abandons * GLITCH_ABANDON_PAGES) return false
  return true
}

/**
 * The reach book's own row - one line, the chronic-liar patience's own
 * price. The honest null when the fold is absent or inconsistent (a
 * fold that cannot prove itself prices nothing - the fence law), and
 * the honest empty when no ratchet rode (the fold prices what rode,
 * never invents).
 *
 * @param {object|null} [b] the liarLadderReachBook fold
 * @returns {string|null} the row byte, or null
 */
export function liarLadderReachRow (b) {
  if (!liarLadderReachConsistent(b)) return null
  if (b.ratchets === 0) return null
  const standWord = b.abandons > 0
    ? `the class stood down ${b.abandons} time(s) (the confirmations kept pricing - the lane's own evidence bar), the re-arms ${b.resets}`
    : `the patience held, no stand-down, the re-arms ${b.resets}`
  return `(the liar ladder's own reach (v0.976.10): ${b.ratchets} ratchet(s), the deepest rung #${b.reach} - the next override's own bar ${b.capAtReach} fresh critical-on-dry read(s) - ${standWord})`
}
