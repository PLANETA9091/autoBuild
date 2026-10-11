//
// waterlockbook.mjs - THE SEAL-AND-CROSS FRONTIER'S OWN CAST (v0.942.0)
//
// The water-lock preflight's field read has ridden the fleet log since
// v0.242.0 ('F9 tunnel: water-lock census: water at step 1, 0 sealable
// in pocket - the seal-and-cross frontier is bare') and no decompose
// book ever read it - face 206's nine lines (F9 x3 F19 x2 F17 x2 F16 x1
// F1 x1) rode raw with no book and no seat naming the keeper. THE BOOK:
// a pure census - every water-lock line classifies independently (no
// opener, no cross-line join - the pounce book's own honest scope law),
// one parser per emitter (the fleet19.mjs water-lock census line, zero
// other readers). THE COUNT LAW (the emitter's own cells only - the
// count-seat precedent: the v0.935.0 firings, the v0.936.0 churn events,
// the v0.937.0 named firings, the v0.938.0 census lines, the v0.939.0
// verdicts, the v0.940.0 pounce events, the v0.941.0 shaft locks): each
// water-lock census line is one vote; a bot owns the cast only above
// half the lines (a tie owns nothing - the strict-majority law's own
// family shape). Junk never invents a book or a cast: a missing or
// empty log, a non-string row, or a minority top reads the honest
// silence (null).
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the frontier's
// own' lived nowhere - the v0.242.0 preflight owns the emitter, the
// v0.244.0 arm census owns the stance verdicts; the lines' own BOOK and
// BOT axis is THIS census (both untouched).
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// pounce book's own census-guard lane. Junk-safe end to end.
//

// ---- the emitter's exact byte shape ----
// 'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare'
// 'F19 tunnel: water-lock census: water at step 1, 1 sealable in pocket (top dirt) - the seal-and-cross frontier is ARMED'
// 'F16 tunnel: water-lock census: water at step 1, 75 sealable in pocket (top cobblestone) - the seal-and-cross frontier is ARMED'
export const WATER_LOCK_RE =
  /^(\S+) tunnel: water-lock census: ([a-z0-9_]+|unclassified) at step (\d+), (\d+) sealable in pocket(?: \(top ([a-z0-9_]+)\))? - the seal-and-cross frontier is (bare|ARMED)$/

/**
 * waterLockBook(lines) - the seal-and-cross frontier's own field book.
 * @param {string[]|null} [lines] the fleet log's raw lines
 * @returns {{bots: Object<string, {total: number, bare: number, armed: number, blocks: number}>, totals: {total: number, bare: number, armed: number, blocks: number}}}
 *   the book (an honest zero on a lock-free face)
 */
export function waterLockBook (lines) {
  const bots = {}
  const zero = () => ({ total: 0, bare: 0, armed: 0, blocks: 0 })
  const totals = zero()
  if (!Array.isArray(lines)) return { bots, totals }
  for (const line of lines) {
    if (typeof line !== 'string') continue
    const m = WATER_LOCK_RE.exec(line)
    if (!m) continue
    const bot = m[1]
    const blocks = Number.parseInt(m[4], 10)
    const verdict = m[6] === 'ARMED' ? 'armed' : 'bare'
    const b = bots[bot] ?? (bots[bot] = zero())
    b.total++
    b[verdict]++
    if (Number.isFinite(blocks)) b.blocks += blocks
    totals.total++
    totals[verdict]++
    if (Number.isFinite(blocks)) totals.blocks += blocks
  }
  return { bots, totals }
}

/**
 * waterLockCast(botBook) - the frontier's bot-level seat.
 * @param {Object<string, {total: number}>|null} [botBook] the book's own
 *   bots cells (waterLockBook's bots map)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function waterLockCast (botBook) {
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

// (v0.942.0) the cast's own row - THE FRONTIER'S OWN KEEPER: one bot's
// own water-locks keep the seal census's own voice. Junk never prints a
// seat (the honest silence's own row law).
export function waterLockCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the seal-and-cross's own cast (v0.942.0): ${bot} owns ${owns} of ${ofLines} census ${s} (${(share * 100).toFixed(1)}%) - THE FRONTIER'S OWN KEEPER: one bot's own water-locks keep the seal census's own voice - the v0.244.0 arm priced the verdicts, the cast names its keeper`
}

// (v0.942.0) THE FRONTIER'S OWN RIDERS - the cast's silence's own
// companion (the riders precedent, zero re-parsing): a MEASURE, never a
// verdict-owner - the top two keepers' concentration prices the shape
// the solo law refused to name (the cast's owner case leaves the
// companion unprinted - the decompose's own branch law). The order is
// deterministic (count desc, then the name's own - 'F17' < 'F19'
// byte-wise). Junk never invents a shape: a missing or empty book,
// fewer than two keepers, or a leader already holding the majority
// reads the honest silence (null).
export function waterLockRiders (botBook) {
  if (waterLockCast(botBook)) return null
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

// (v0.942.0) the riders' own row - THE KEEPERS' OWN CROWD (the family's
// own tail): a measure of the shape, never a named owner. Junk never
// prints a shape (the honest silence's own row law).
export function waterLockRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the seal-and-cross's own riders (v0.942.0): no solo keeper owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} census ${s} (${(share * 100).toFixed(1)}%) - THE KEEPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the locks the solo law refused to name`
}
