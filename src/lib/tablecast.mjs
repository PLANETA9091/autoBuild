//
// tablecast.mjs - THE TABLE GATE'S OWN CAST (v0.949.0)
//
// The v0.495.0 table gate book priced the spare-table bootstrap's own
// field anatomy (the terminals, the drought/rescue legs, the [upgrade]
// machinery's timeout tax) but its WHO axis never had a seat: the
// book's per-bot cells ride silent in the bots map and the decompose's
// block prints only the class totals ('gates: opened 1 / refused 0 |
// droughts 1 ...'). THE COUNT LAW (the book's own cells only, zero
// re-parsing - the count-seat family's own precedent: the v0.943.0
// camp build cast, the v0.945.0 sword due cast, the v0.946.0 map trip
// cast, the v0.947.0 shelter skip cast): each bot's own table gate
// line count is already the book's own cells - the line buckets sum to
// the bot's own vote, the measures (rungPlanks, stickHolds, timeoutMs)
// never vote: they price lines, they are not lines. THE DOUBLE-COUNT
// TRAP: otherAttempts is the attempts' own no-timeout sub-slice - the
// same attempt line already voted once through attempts; the slice
// never votes again. Each table gate line is one vote; a bot owns the
// cast only above half the book's own lines (a tie owns nothing - the
// strict-majority law's own family shape). Junk never invents a cast:
// a missing or empty book, a bot whose line buckets sum to nothing
// positive, or a minority top reads the honest silence (null).
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the table gate's
// own anatomy' lived only inside the v0.495.0 book's own comment (not
// a seat, not a row), 'the tool chain's own carpenter', 'the gate's
// own carpenter' and 'the carpenters' own crowd' lived nowhere - the
// keepers' own crowd is waterlock/sealcensus's own shape, the builders'
// crowd is campcast's own; the gate's own BOT axis is THIS lib (the
// book, the armory census, the upgrade census all untouched). The
// count-seat family's own sibling: the tool chain's zero-point priced
// at its own origin - WHOSE pocket keeps the spare table alive.
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// v0.495.0 book's own census-guard lane. Junk-safe end to end.
//

// (v0.949.0) THE LINE BUCKETS - the table gate book's own line-counting
// cells (each is bumped exactly once per matched emitter line; the
// measure cells - rungPlanks, stickHolds, timeoutMs - and the
// otherAttempts sub-slice are excluded: the measures price lines, they
// are not lines, and the sub-slice would double count the attempts'
// own lines). The cast's population = the book's own counted lines,
// byte-for-byte - no re-parsing, one truth.
export const TABLE_LINE_BUCKETS = [
  'ok', 'failed', 'droughts', 'rungs', 'sticks', 'attempts', 'allFails'
]

/**
 * tableBotLines(cell) - the count law's own sum: one bot's own table
 * gate line count off the book's own cells. Junk buckets (non-number,
 * non-finite, non-integer, negative) read zero - they never vote.
 * @param {Object|null} [cell] the table gate book's own per-bot cell
 * @returns {number} the bot's own line total (0 on junk - the honest zero)
 */
export function tableBotLines (cell) {
  if (!cell || typeof cell !== 'object' || Array.isArray(cell)) return 0
  let n = 0
  for (const k of TABLE_LINE_BUCKETS) {
    const v = cell[k]
    if (typeof v === 'number' && Number.isFinite(v) && Number.isInteger(v) && v > 0) n += v
  }
  return n
}

/**
 * tableCast(bots) - the table gate book's bot-level seat.
 * @param {Object<string, Object>|null} [bots] the table gate book's own
 *   bots map (tableGate's bots, the cells the class totals already read)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function tableCast (bots) {
  if (!bots || typeof bots !== 'object' || Array.isArray(bots)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(bots)) {
    const n = tableBotLines(cell)
    if (typeof bot === 'string' && bot && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.949.0) the cast's own row - THE TOOL CHAIN'S OWN CARPENTER: one
// bot's own pocket keeps the tool chain's zero-point. Junk never prints
// a seat (the honest silence's own row law).
export function tableCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the table gate's own cast (v0.949.0): ${bot} owns ${owns} of ${ofLines} table gate ${s} (${(share * 100).toFixed(1)}%) - THE TOOL CHAIN'S OWN CARPENTER: one bot's own pocket keeps the tool chain's zero-point - the v0.495.0 book priced the anatomy, the cast names its carpenter`
}

// (v0.949.0) THE TABLE GATE'S OWN RIDERS - the cast's silence's own
// companion (the riders precedent, zero re-parsing): a MEASURE, never a
// verdict-owner - the top two pockets' concentration prices the shape
// the solo law refused to name (the cast's owner case leaves the
// companion unprinted - the decompose's own branch law). The order is
// deterministic (count desc, then the name's own byte asc). Junk never
// invents a shape: a missing or empty book, fewer than two pockets, or
// a leader already holding the majority reads the honest silence (null).
export function tableRiders (bots) {
  if (tableCast(bots)) return null
  if (!bots || typeof bots !== 'object' || Array.isArray(bots)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(bots)) {
    const n = tableBotLines(cell)
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

// (v0.949.0) the riders' own row - THE CARPENTERS' OWN CROWD (the
// family's own tail): a measure of the shape, never a named owner.
// Junk never prints a shape (the honest silence's own row law).
export function tableRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the table gate's own riders (v0.949.0): no solo carpenter owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} table gate ${s} (${(share * 100).toFixed(1)}%) - THE CARPENTERS' OWN CROWD: the cast's tie law held, the gate's crowd is still real - the pair prices the gates the solo law refused to name`
}
