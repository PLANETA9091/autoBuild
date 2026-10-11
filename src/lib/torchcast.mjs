//
// torchcast.mjs - THE TORCH LANE'S OWN CAST (v0.950.0)
//
// The v0.500.0 torch book priced the light supply chain's own field
// anatomy (the coal floor, the stick floors, the two rescue rungs, the
// resupply asks, the yield, the streak) but its WHO axis never had a
// seat: the book's per-bot cells ride silent in the bots map and the
// decompose's block prints only the raw top-6 ('bots heaviest-first')
// with no law-priced verdict. The v0.711.0 stick bill names the torch
// lane the stick chain's own biggest spender (60 of 64 stick voices)
// - WHOSE pocket keeps the light stayed unnamed. THIS prices it.
//
// THE COUNT LAW (the book's own cells only, zero re-parsing - the
// count-seat family's own precedent: the v0.943.0 camp build cast,
// the v0.945.0 sword due cast, the v0.946.0 map trip cast, the
// v0.947.0 shelter skip cast, the v0.949.0 table gate cast): each
// bot's own torch line count is already the book's own cells - the
// line buckets sum to the bot's own vote, the measures never vote:
// they price lines, they are not lines. THE MEASURE CELLS: the sticks/
// coals counters ride their skip lines, the planks ride the plank
// rung, the ask-coal rides the resupply ask, the batches/torches/metal
// ride the terminal, the held torches ride the no-land, and the xN
// multiplier rides the streak - one line, many units, ONE vote.
// THE DOUBLE-COUNT TRAP: every measure cell is the same line's own
// count - it never votes again. Each torch line is one vote; a bot
// owns the cast only above half the book's own lines (a tie owns
// nothing - the strict-majority law's own family shape). Junk never
// invents a cast: a missing or empty book, a bot whose line buckets
// sum to nothing positive, or a minority top reads the honest silence
// (null).
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the light
// supply's own book' lived only inside the v0.500.0 book's own comment
// (not a seat, not a row), 'the lamplighter' and 'the lamplighters'
// own crowd' lived nowhere - the keepers' crowd is sealcensus's own
// shape, the builders' crowd is campcast's own, the skippers' crowd is
// sheltercast's own; the torch book's own BOT axis is THIS lib (the
// book, the stick bill, the sweep's own riders all untouched). The
// count-seat family's own sibling: the light supply priced at its own
// origin - WHOSE pocket keeps the dark lit.
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// v0.500.0 book's own census-guard lane. Junk-safe end to end.
//

// (v0.950.0) THE LINE BUCKETS - the torch book's own line-counting
// cells (each is bumped exactly once per matched emitter line; the
// measure cells - the sticks/coals counters, the planks, the ask-coal,
// the batches/torches/metal, the held torches, the xN multiplier - are
// excluded: the measures price lines, they are not lines). The cast's
// population = the book's own counted lines, byte-for-byte - no
// re-parsing, one truth.
export const TORCH_LINE_BUCKETS = [
  'coalSkips', 'stickSkips', 'capDeclines', 'reserveDeclines',
  'logsRungs', 'plankRungs', 'resupplyAsks', 'terminals',
  'noLands', 'errors', 'streaks'
]

/**
 * torchBotLines(cell) - the count law's own sum: one bot's own torch
 * line count off the book's own cells. Junk buckets (non-number,
 * non-finite, non-integer, negative) read zero - they never vote.
 * @param {Object|null} [cell] the torch book's own per-bot cell
 * @returns {number} the bot's own line total (0 on junk - the honest zero)
 */
export function torchBotLines (cell) {
  if (!cell || typeof cell !== 'object' || Array.isArray(cell)) return 0
  let n = 0
  for (const k of TORCH_LINE_BUCKETS) {
    const v = cell[k]
    if (typeof v === 'number' && Number.isFinite(v) && Number.isInteger(v) && v > 0) n += v
  }
  return n
}

/**
 * torchCast(bots) - the torch book's bot-level seat.
 * @param {Object<string, Object>|null} [bots] the torch book's own
 *   bots map (torchBook's bots, the cells the top-6 line already reads)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function torchCast (bots) {
  if (!bots || typeof bots !== 'object' || Array.isArray(bots)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(bots)) {
    const n = torchBotLines(cell)
    if (typeof bot === 'string' && bot && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.950.0) the cast's own row - THE LIGHT'S OWN LAMPLIGHTER: one
// bot's own pocket keeps the light supply's voice. Junk never prints
// a seat (the honest silence's own row law).
export function torchCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the torch lane's own cast (v0.950.0): ${bot} owns ${owns} of ${ofLines} torch lane ${s} (${(share * 100).toFixed(1)}%) - THE LIGHT'S OWN LAMPLIGHTER: one bot's own pocket keeps the light supply's voice - the v0.500.0 book priced the chain, the cast names its lamplighter`
}

// (v0.950.0) THE TORCH LANE'S OWN RIDERS - the cast's silence's own
// companion (the riders precedent, zero re-parsing): a MEASURE, never
// a verdict-owner - the top two pockets' concentration prices the
// shape the solo law refused to name (the cast's owner case leaves the
// companion unprinted - the decompose's own branch law). The order is
// deterministic (count desc, then the name's own byte asc). Junk never
// invents a shape: a missing or empty book, fewer than two pockets, or
// a leader already holding the majority reads the honest silence (null).
export function torchRiders (bots) {
  if (torchCast(bots)) return null
  if (!bots || typeof bots !== 'object' || Array.isArray(bots)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(bots)) {
    const n = torchBotLines(cell)
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

// (v0.950.0) the riders' own row - THE LAMPLIGHTERS' OWN CROWD (the
// family's own tail): a measure of the shape, never a named owner.
// Junk never prints a shape (the honest silence's own row law).
export function torchRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the torch lane's own riders (v0.950.0): no solo lamplighter owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} torch lane ${s} (${(share * 100).toFixed(1)}%) - THE LAMPLIGHTERS' OWN CROWD: the cast's tie law held, the light's crowd is still real - the pair prices the dark the solo law refused to name`
}
