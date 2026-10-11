//
// sheltercast.mjs - THE SHELTER SKIP'S OWN CAST (v0.947.0)
//
// The shelter skip lane (src/bots/miner.mjs's combat gate: the gate skin
// 'shelter skip (night=true armed=true hp=... attackers=... threat=...)',
// the 'no seal material' skins, the open-field skins) is the night/mob
// survivability front's own refuser voice: the bot SEES the threat and
// REFUSES the shelter walk - the night's own churn tax priced per bot.
// The lane's field voice rode read from the attempt's side: the shield
// ladder (v0.489.0) owns the skip-class grammar (gateskip/nostock/
// incomplete/stepin/other) and the episode book (tries / ringed /
// laneLost), the shooter census owns the combat verb grammar
// (parseCombatLine, the 'shelter-skip' verb token), the outcome ledger
// (v0.457.0) joins the deaths - no book, no BOT axis, no seat for the
// skips' own WHO. THIS is that axis: WHICH bot's own nights keep
// refusing the shelter.
//
// THE BILL LAW: one parser per emitter, zero re-parsing - the combat
// verb grammar rides by import (parseCombatLine, shootercensus.mjs; the
// shelter-skip/shelter-wall-miss prefixes never collide - the family
// reading order's own fence), the skip-class grammar stays
// shieldledger's own subject (THIS lib never re-classifies a why: all
// skins one vote). THE LANE'S OWN POOL (the count law's own precedent:
// the v0.942.0 bare/ARMED pool, the v0.945.0 lane pool, the v0.946.0
// map-trip pool): each shelter skip line one vote. THE STRICT-MAJORITY
// LAW: a bot owns the cast only above half the lane's lines, a tie owns
// nothing. The riders beside the seat's silence (byte law count desc +
// bot byte asc), the branch law fenced in the lib, the junk fences, the
// honest silences - the skip-free face stays silent.
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the shelter skip's
// own' lived only inside criticalprelude's test prose (the prelude join's
// own lane note - not a seat, not a book), 'the skippers' own crowd' and
// 'the night's own skipper' lived nowhere - shieldledger.mjs owns the
// skip-class grammar and the episode book, shootercensus.mjs owns the
// verb grammar, the lane's own BOT axis is THIS lib (all untouched).
// The legacy list's own front (night/mob survivability) priced at its
// refuser lane's origin.
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// census-guard lane. Junk-safe end to end.
//
import { parseCombatLine } from './shootercensus.mjs'

function zeroBot () {
  return { total: 0 }
}

/**
 * shelterSkipBook(lines) - the shelter skip lane's own field book.
 * Pure census: every combat line classifies independently (no opener,
 * no cross-line join); a skip with no readable bot is counted in
 * totals.ownerless (the honest orphan, never a vote).
 * @param {string[]} lines one fleet-log
 * @returns {null|{bots: Object<string,{total: number}>, totals: object}}
 */
export function shelterSkipBook (lines) {
  if (!Array.isArray(lines)) return null
  const bots = {}
  const totals = zeroBot()
  totals.totalBots = {}
  totals.ownerless = 0
  for (const line of lines) {
    if (typeof line !== 'string') continue
    const cm = parseCombatLine(line)
    if (!cm || cm.verb !== 'shelter-skip') continue
    if (typeof cm.bot === 'string' && cm.bot) {
      const b = bots[cm.bot] || (bots[cm.bot] = zeroBot())
      b.total++
      totals.total++
      totals.totalBots[cm.bot] = (totals.totalBots[cm.bot] || 0) + 1
    } else {
      totals.ownerless++
    }
  }
  return { bots, totals }
}

/**
 * shelterSkipCast(botBook) - the shelter skip lane's bot-level seat.
 * @param {Object<string, {total: number}>|null} [botBook] the book's
 *   own bots cells (shelterSkipBook's bots map)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function shelterSkipCast (botBook) {
  if (!botBook || typeof botBook !== 'object' || Array.isArray(botBook)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(botBook)) {
    const n = cell && typeof cell === 'object' && !Array.isArray(cell) ? cell.total : null
    if (typeof bot === 'string' && bot && Number.isInteger(n) && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.947.0) the cast's own row - THE NIGHT'S OWN SKIPPER: one bot's own
// refusals keep the shelter's own voice. Junk never prints a seat.
export function shelterSkipCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'refusal' : 'refusals'
  return `the shelter skip's own cast (v0.947.0): ${bot} owns ${owns} of ${ofLines} shelter skip ${s} (${(share * 100).toFixed(1)}%) - THE NIGHT'S OWN SKIPPER: one bot's own refusals keep the shelter's own voice - the shield ladder priced the attempts, the cast names its refuser`
}

// (v0.947.0) THE SHELTER SKIP'S OWN RIDERS - the cast's silence's own
// companion: a MEASURE, never a verdict-owner - the top two refusers'
// concentration prices the shape the solo law refused to name (the
// cast's owner case leaves the companion unprinted - the decompose's
// own branch law). The order is deterministic (count desc, then the
// name's own - 'F16' < 'F4' byte-wise). Junk never invents a shape.
export function shelterSkipRiders (botBook) {
  if (shelterSkipCast(botBook)) return null
  if (!botBook || typeof botBook !== 'object' || Array.isArray(botBook)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(botBook)) {
    const n = cell && typeof cell === 'object' && !Array.isArray(cell) ? cell.total : null
    if (typeof bot === 'string' && bot && Number.isInteger(n) && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (rows.length < 2) return null
  const leader = rows[0]
  const runner = rows[1]
  const pairOwns = leader.owns + runner.owns
  const total = rows.reduce((a, r) => a + r.owns, 0)
  return { leader: leader.bot, leaderOwns: leader.owns, runner: runner.bot, runnerOwns: runner.owns, ofLines: total, pairOwns, share: +(pairOwns / total).toFixed(3) }
}

// (v0.947.0) the riders' own row - THE SKIPPERS' OWN CROWD (the family's
// own tail): a measure of the shape, never a named owner. Junk never
// prints a shape.
export function shelterSkipRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'refusal' : 'refusals'
  return `the shelter skip's own riders (v0.947.0): no solo refuser owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} shelter skip ${s} (${(share * 100).toFixed(1)}%) - THE SKIPPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the nights the solo law refused to name`
}
