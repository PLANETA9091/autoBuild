//
// veincast.mjs - THE VEIN BOOK'S OWN CAST (v0.951.0)
//
// The v0.501.0 vein ledger priced the vein sweep's own field anatomy
// (the terminals, the walk yields, the gallery digs, the dig refusals,
// the spares, the tier guard) but its WHO axis never had a seat: the
// book's per-bot cells ride silent in the bots map and the decompose's
// block prints only the raw top-6 ('bots heaviest-first') with no
// law-priced verdict. The v0.938.0 sweep cast prices the SWEEP CENSUS
// lines (the watches, a different pool) - the vein book's own cells
// stayed unnamed. THIS prices them: the fleet's core mining engine's
// own pockets.
//
// THE COUNT LAW (the book's own cells only, zero re-parsing - the
// count-seat family's own precedent: the v0.943.0 camp build cast,
// the v0.945.0 sword due cast, the v0.946.0 map trip cast, the
// v0.947.0 shelter skip cast, the v0.949.0 table gate cast, the
// v0.950.0 torch cast): each bot's own vein line count is already the
// book's own cells - the line buckets sum to the bot's own vote, the
// measures never vote: they price lines, they are not lines. THE
// MEASURE CELLS: the drops/dug counters ride the terminal, the u/dug
// ride the walk yield, the ore count rides the gallery, the seal
// keeps ride the support refusal, the spare drops ride the spares,
// the refused drops ride the goal refusal, the walks ride the
// above/below triage, the delta and the failed walks ride the
// picked-nothing, the ore units ride the tier guard, the drops and
// the support/lip split ride the dig-down, the walked u rides the
// stance. THE DOUBLE-COUNT TRAP: the sub-slices (the gallery's own
// floor-lock/ore-detour classes, the dig-down's own support/lip
// classes) are the SAME lines' own splits - each gallery line bumped
// gallery++ AND exactly one sub-slice, each dig-down line bumped
// digDowns++ AND exactly one sub-slice; the sub-slices never vote
// again. Each vein line is one vote; a bot owns the cast only above
// half the book's own lines (a tie owns nothing - the strict-majority
// law's own family shape). Junk never invents a cast: a missing or
// empty book, a bot whose line buckets sum to nothing positive, or a
// minority top reads the honest silence (null).
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the vein sweep's
// own book' lived only inside the v0.501.0 block's own comment (not a
// seat, not a row), 'the prospector' and 'the prospectors' own crowd'
// lived nowhere - the harvesters' crowd is the v0.938.0 sweep cast's
// own (a different pool), the lamplighters' crowd is torchcast's own;
// the vein book's own BOT axis is THIS lib (the book, the sweep cast,
// the tier guard bill all untouched). The count-seat family's own
// sibling: the mining engine priced at its own origin - WHOSE pocket
// keeps the gallery's own voice.
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// v0.501.0 book's own census-guard lane. Junk-safe end to end.
//

// (v0.951.0) THE LINE BUCKETS - the vein book's own line-counting
// cells (each is bumped exactly once per matched emitter line; the
// measure cells and the sub-slices are excluded: the measures price
// lines, they are not lines, and the sub-slices are the same lines'
// own splits). The cast's population = the book's own counted lines,
// byte-for-byte - no re-parsing, one truth.
export const VEIN_LINE_BUCKETS = [
  'terminals', 'yields', 'gallery', 'lipRefusals', 'supportRefusals',
  'ledgeRefusals', 'deepSkips', 'spared', 'goalRefusals',
  'aboveTimeouts', 'belowFails', 'pickedNothings', 'tierGuards',
  'digDowns', 'stanceArmed', 'stanceLanded'
]

/**
 * veinBotLines(cell) - the count law's own sum: one bot's own vein
 * line count off the book's own cells. Junk buckets (non-number,
 * non-finite, non-integer, negative) read zero - they never vote.
 * @param {Object|null} [cell] the vein book's own per-bot cell
 * @returns {number} the bot's own line total (0 on junk - the honest zero)
 */
export function veinBotLines (cell) {
  if (!cell || typeof cell !== 'object' || Array.isArray(cell)) return 0
  let n = 0
  for (const k of VEIN_LINE_BUCKETS) {
    const v = cell[k]
    if (typeof v === 'number' && Number.isFinite(v) && Number.isInteger(v) && v > 0) n += v
  }
  return n
}

/**
 * veinCast(bots) - the vein book's bot-level seat.
 * @param {Object<string, Object>|null} [bots] the vein book's own
 *   bots map (veinLedger's bots, the cells the top-6 line already reads)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function veinCast (bots) {
  if (!bots || typeof bots !== 'object' || Array.isArray(bots)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(bots)) {
    const n = veinBotLines(cell)
    if (typeof bot === 'string' && bot && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.951.0) the cast's own row - THE VEIN'S OWN PROSPECTOR: one bot's
// own sweep keeps the mining engine's voice. Junk never prints a seat
// (the honest silence's own row law).
export function veinCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the vein book's own cast (v0.951.0): ${bot} owns ${owns} of ${ofLines} vein lane ${s} (${(share * 100).toFixed(1)}%) - THE VEIN'S OWN PROSPECTOR: one bot's own sweep keeps the mining engine's voice - the v0.501.0 book priced the anatomy, the cast names its prospector`
}

// (v0.951.0) THE VEIN BOOK'S OWN RIDERS - the cast's silence's own
// companion (the riders precedent, zero re-parsing): a MEASURE, never
// a verdict-owner - the top two pockets' concentration prices the
// shape the solo law refused to name (the cast's owner case leaves the
// companion unprinted - the decompose's own branch law). The order is
// deterministic (count desc, then the name's own byte asc). Junk never
// invents a shape: a missing or empty book, fewer than two pockets, or
// a leader already holding the majority reads the honest silence (null).
export function veinRiders (bots) {
  if (veinCast(bots)) return null
  if (!bots || typeof bots !== 'object' || Array.isArray(bots)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(bots)) {
    const n = veinBotLines(cell)
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

// (v0.951.0) the riders' own row - THE PROSPECTORS' OWN CROWD (the
// family's own tail): a measure of the shape, never a named owner.
// Junk never prints a shape (the honest silence's own row law).
export function veinRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the vein book's own riders (v0.951.0): no solo prospector owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} vein lane ${s} (${(share * 100).toFixed(1)}%) - THE PROSPECTORS' OWN CROWD: the cast's tie law held, the vein's crowd is still real - the pair prices the gallery the solo law refused to name`
}
