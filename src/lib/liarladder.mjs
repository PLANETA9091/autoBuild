//
// liarladder.mjs - THE LIAR LADDER'S OWN REACH (v0.976.10)
//               + THE REACH'S OWN STREAK (v0.976.16)
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
// THE REACH'S OWN STREAK (v0.976.16): the FACE 312 = 38466304299 read
// priced the owner byte by hand - the deepest rung #92 rode F9's own
// streak (92 of 157 ratchets, F1 64 to #58, F17 1 to #1) - but the
// reach word priced only the page, never WHO rode it. The fold grows
// the per-bot pages and the unattributed share (the ratchet lines
// carry their own bot prefix - the census's own attribution, zero
// re-parsing); the row prices the owner's seat: one bot's streak owns
// the deepest climb, or the tie's own law held, or the unattributed
// share rode (the honest unpriced seat). The fold prices what rode,
// never invents.
//
// Mining-surface only: zero fleet wiring, zero new log lines, zero
// census shape change - CENSUS GUARD. Pure: reads, never mutates.
// Junk-safe: non-string lines judge nothing; non-array/string input
// reads the empty book.

import { glitchStreakCap, GLITCH_ABANDON_PAGES } from './drowning.mjs'

const RATCHET_RE = /liar ladder ratchets - confirmed no-op glitch page #(\d+)/
const ABANDON_RE = /liar ladder abandons the glitch class - (\d+) confirmed no-op pages/
// (v0.976.16) the ratchet lines carry their own bot prefix - the fleet
// log's own skin ('F9 [F9] water: ...'), the census's own attribution
// (the per-bot split rode line 891 since v0.376.0); the bracket-only
// skin ('[F9] water: ...') prices the same seat
const BOT_PREFIX_RE = /^(F\d+)\s|^\[(F\d+)\]/

function ratchetBot (line) {
  const m = line.match(BOT_PREFIX_RE)
  if (!m) return null
  return m[1] || m[2]
}

/**
 * The liar ladder's own reach fold: how deep the chronic-liar patience
 * ladder climbed this face and what the evidence bar now prices.
 *
 * @param {string[]|string|null} [lines] the fleet log's lines (or the whole log)
 * @returns {{ratchets: number, reach: number, capAtReach: number,
 *   abandons: number, abandonPages: number, resets: number,
 *   unattributed: number, perBot: Object<string, {pages: number,
 *   deepest: number}>}|null} null when the input prices nothing
 */
export function liarLadderReachBook (lines) {
  const rows = Array.isArray(lines) ? lines : (typeof lines === 'string' ? lines.split('\n') : null)
  if (!rows) return null
  const out = { ratchets: 0, reach: 0, capAtReach: 0, abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: {} }
  for (const line of rows) {
    if (typeof line !== 'string') continue
    if (line.includes('liar ladder ratchets')) {
      out.ratchets++
      const m = line.match(RATCHET_RE)
      const page = m ? Number(m[1]) : 0
      if (Number.isInteger(page) && page > out.reach) out.reach = page
      // (v0.976.16) the streak's own attribution: the bot prefix prices
      // the per-bot pages and the per-bot deepest; a ratchet line
      // without a prefix prices the honest unattributed share
      const bot = ratchetBot(line)
      if (bot) {
        if (!out.perBot[bot]) out.perBot[bot] = { pages: 0, deepest: 0 }
        out.perBot[bot].pages++
        if (Number.isInteger(page) && page > out.perBot[bot].deepest) out.perBot[bot].deepest = page
      } else {
        out.unattributed++
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
  for (const k of ['ratchets', 'reach', 'capAtReach', 'abandons', 'abandonPages', 'resets', 'unattributed']) {
    if (!Number.isInteger(b[k]) || b[k] < 0) return false
  }
  if (b.ratchets === 0 && (b.reach !== 0 || b.capAtReach !== 0)) return false
  if (b.ratchets > 0 && b.reach < 1) return false
  if (b.reach > b.ratchets) return false
  if (b.reach > 0 && b.capAtReach !== glitchStreakCap(b.reach)) return false
  if (b.abandons > 0 && b.reach < GLITCH_ABANDON_PAGES) return false
  if (b.abandons > 0 && b.abandonPages < b.abandons * GLITCH_ABANDON_PAGES) return false
  // (v0.976.16) the streak's own fence: the per-bot image, the deepest
  // never outruns the reach, the image law - every ratchet accounted
  // (the attributed pages + the unattributed share)
  if (!b.perBot || typeof b.perBot !== 'object' || Array.isArray(b.perBot)) return false
  let attributed = 0
  let ownedReach = false
  for (const [bot, st] of Object.entries(b.perBot)) {
    if (!/^F\d+$/.test(bot)) return false
    if (!st || typeof st !== 'object' || Array.isArray(st)) return false
    if (!Number.isInteger(st.pages) || st.pages < 1) return false
    if (!Number.isInteger(st.deepest) || st.deepest < 0) return false
    if (st.deepest > b.reach) return false
    attributed += st.pages
    if (st.deepest === b.reach) ownedReach = true
  }
  if (attributed + b.unattributed !== b.ratchets) return false
  if (b.ratchets > 0 && b.unattributed === 0 && !ownedReach) return false
  return true
}

/**
 * The reach's own streak row (v0.976.16) - WHO rode the deepest rung:
 * one bot's own streak owns the deepest climb, or the tie's own law
 * held (no solo streak owns the reach), or the unattributed share rode
 * (the honest unpriced seat). The honest null when the fold is absent
 * or inconsistent, and the honest null when no ratchet rode (the fold
 * prices what rode, never invents).
 *
 * @param {object|null} [b] the liarLadderReachBook fold
 * @returns {string|null} the row byte, or null
 */
export function liarLadderReachOwnerRow (b) {
  if (!liarLadderReachConsistent(b)) return null
  if (b.ratchets === 0) return null
  const owners = Object.entries(b.perBot).filter(([, st]) => st.deepest === b.reach)
  if (owners.length === 1) {
    const [bot, st] = owners[0]
    const share = (st.pages * 100 / b.ratchets).toFixed(1)
    return `(the reach's own streak (v0.976.16): ${bot} owns the deepest rung #${b.reach} - ${st.pages} of ${b.ratchets} ratchet(s) (${share}%) - THE REACH'S OWN SEAT: one bot's own patience owns the deepest climb - the streak's own front prices the page the raw split rode unnamed)`
  }
  if (owners.length > 1) {
    return `(the reach's own streak (v0.976.16): the tie's own law held - no solo streak owns the deepest rung #${b.reach} (${owners.length} bot(s) tied) - the tie's own silence)`
  }
  return `(the reach's own streak (v0.976.16): the deepest rung's own streak rode unnamed - ${b.unattributed} unattributed page(s) (the honest unpriced seat))`
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
