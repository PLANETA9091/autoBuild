//
// campcast.mjs - THE CAMP BUILD'S OWN CAST (v0.943.0)
//
// The v0.497.0 camp build book priced the furnace supply's own field
// anatomy (the builds, the reuse, the resource floors, the plank-craft
// deaths, the leg-clock skips, the craft storms) but its WHO axis never
// had a seat: the book's per-bot cells ride silent in the bots map and
// the decompose's block prints only the class totals ('supply: built 3
// vs reused 8 - the foundry is already built'). THE COUNT LAW (the
// book's own cells only, zero re-parsing - the cast's own precedent:
// the v0.935.0 firings, the v0.936.0 churn events, the v0.937.0 named
// firings, the v0.938.0 census lines, the v0.939.0 approach verdicts,
// the v0.940.0 pounce events, the v0.941.0 shaft locks, the v0.942.0
// water-lock census lines): each bot's own camp furnace line count is
// already the book's own cells - the fourteen line buckets sum to the
// bot's own vote (the measures - buildSecs, planksLogs, timeoutMs,
// stormCooldownMs - and the sameTypeShort flag never vote: they price
// lines, they are not lines); each camp furnace line is one vote; a bot
// owns the cast only above half the book's own lines (a tie owns
// nothing - the strict-majority law's own family shape). Junk never
// invents a cast: a missing or empty book, a bot whose line buckets
// sum to nothing positive, or a minority top reads the honest silence
// (null).
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the camp build's
// own cast', 'the foundry's own builder' and 'the builders' own crowd'
// lived nowhere - the v0.497.0 book owns the build anatomy, the v0.494.0
// armory census owns the weapon supply, the smelt chain's yield side is
// priced elsewhere; this cast is the build book's own BOT axis (both
// untouched). The legacy list's own front (the furnace/smelt chain)
// priced at its supply's origin: where furnaces come from, WHOSE
// pockets come them from.
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// v0.497.0 book's own census-guard lane. Junk-safe end to end.
//

// (v0.943.0) THE LINE BUCKETS - the camp book's own line-counting cells
// (each is bumped exactly once per matched emitter line; the measure
// cells and the sameTypeShort flag are excluded - they price lines,
// they are not lines). The cast's population = the book's own counted
// lines, byte-for-byte - no re-parsing, one truth.
export const CAMP_LINE_BUCKETS = [
  'built', 'reuse', 'cobbleFloor', 'plankDeath', 'nothingToSmelt',
  'otherRefusals', 'tableFirst', 'planksDecisions', 'skipped',
  'attempts', 'otherAttempts', 'allFails', 'storms', 'grid'
]

/**
 * campBotLines(cell) - the count law's own sum: one bot's own camp
 * furnace line count off the book's own cells. Junk buckets (non-number,
 * non-finite, non-integer, negative) read zero - they never vote.
 * @param {Object|null} [cell] the camp book's own per-bot cell
 * @returns {number} the bot's own line total (0 on junk - the honest zero)
 */
export function campBotLines (cell) {
  if (!cell || typeof cell !== 'object' || Array.isArray(cell)) return 0
  let n = 0
  for (const k of CAMP_LINE_BUCKETS) {
    const v = cell[k]
    if (typeof v === 'number' && Number.isFinite(v) && Number.isInteger(v) && v > 0) n += v
  }
  return n
}

/**
 * campCast(bots) - the camp build book's bot-level seat.
 * @param {Object<string, Object>|null} [bots] the camp book's own bots
 *   map (campBuild's bots, the cells the class totals already read)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function campCast (bots) {
  if (!bots || typeof bots !== 'object' || Array.isArray(bots)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(bots)) {
    const n = campBotLines(cell)
    if (typeof bot === 'string' && bot && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.943.0) the cast's own row - THE FOUNDRY'S OWN BUILDER: one bot's
// own pockets keep the build book's own voice. Junk never prints a seat
// (the honest silence's own row law).
export function campCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the camp build's own cast (v0.943.0): ${bot} owns ${owns} of ${ofLines} camp furnace ${s} (${(share * 100).toFixed(1)}%) - THE FOUNDRY'S OWN BUILDER: one bot's own pockets keep the build book's own voice - the v0.497.0 book priced the anatomy, the cast names its builder`
}

// (v0.943.0) THE CAMP BUILD'S OWN RIDERS - the cast's silence's own
// companion (the riders precedent, zero re-parsing): a MEASURE, never a
// verdict-owner - the top two builders' concentration prices the shape
// the solo law refused to name (the cast's owner case leaves the
// companion unprinted - the decompose's own branch law). The order is
// deterministic (count desc, then the name's own - 'F12' < 'F4'
// byte-wise). Junk never invents a shape: a missing or empty book,
// fewer than two builders, or a leader already holding the majority
// reads the honest silence (null).
export function campRiders (bots) {
  if (campCast(bots)) return null
  if (!bots || typeof bots !== 'object' || Array.isArray(bots)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(bots)) {
    const n = campBotLines(cell)
    if (typeof bot === 'string' && bot && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (rows.length < 2) return null
  const leader = rows[0]
  const runner = rows[1]
  const pairOwns = leader.owns + runner.owns
  const total = rows.reduce((a, r) => a + r.owns, 0)
  return { leader: leader.bot, leaderOwns: leader.owns, runner: runner.bot, runnerOwns: runner.owns, ofLines: total, pairOwns, share: +(pairOwns / total).toFixed(3) }
}

// (v0.943.0) the riders' own row - THE BUILDERS' OWN CROWD (the family's
// own tail): a measure of the shape, never a named owner. Junk never
// prints a shape (the honest silence's own row law).
export function campRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the camp build's own riders (v0.943.0): no solo builder owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} camp furnace ${s} (${(share * 100).toFixed(1)}%) - THE BUILDERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the builds the solo law refused to name`
}
