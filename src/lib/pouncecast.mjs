//
// pouncecast.mjs - THE POUNCE'S OWN CAST (v0.940.0)
//
// The v0.498.0 pounce book priced the well pounce's own field anatomy
// (the decline probe's signature classes, the guard declines, the stall
// verdicts, the landed voice) and its raw per-bot line has ridden beside
// it since that day ('bots heaviest-first: F19 4 F7 3 F6 3 ...' - face
// 206's read rode raw with no seat naming the prober). THE COUNT LAW
// (the book's own cells only, zero re-parsing - the cast's own
// precedent: the v0.935.0 firings, the v0.936.0 churn events, the
// v0.937.0 named firings, the v0.938.0 census lines, the v0.939.0
// approach verdicts): each bot's own probe total is already the book's
// own cell (pounceBook's bots map), each pounce event is one vote; a bot
// owns the cast only above half the pounce events (a tie owns nothing -
// the strict-majority law's own family shape). Junk never invents a
// cast: a missing or empty book, a cell without its own positive whole
// total, or a minority top reads the honest silence (null).
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the pounce's own
// cast' lived nowhere - the v0.498.0 book owns the anatomy, the v0.499.0
// assist ledger owns the handoff's aftermath; this cast is the book's
// own BOT axis (both untouched).
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// v0.498.0 book's own census-guard lane. Junk-safe end to end.
//

/**
 * pounceCast(botBook) - the pounce book's bot-level seat.
 * @param {Object<string, {total: number}>|null} [botBook] the pounce
 *   book's own bots cells (pounceBook's bots map, the totals the
 *   'bots heaviest-first' row already reads)
 * @returns {null|{bot: string, owns: number, ofProbes: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function pounceCast (botBook) {
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
  return { bot: top.bot, owns: top.owns, ofProbes: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.940.0) the cast's own row - THE WELL'S OWN PROBER: one bot's own
// pounce events keep the decline book's own voice. Junk never prints a
// seat (the honest silence's own row law).
export function pounceCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofProbes, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofProbes) || ofProbes <= 0 || owns > ofProbes || !Number.isFinite(share)) return null
  const s = ofProbes === 1 ? 'probe' : 'probes'
  return `the pounce's own cast (v0.940.0): ${bot} owns ${owns} of ${ofProbes} ${s} (${(share * 100).toFixed(1)}%) - THE WELL'S OWN PROBER: one bot's own pounce events keep the decline book's own voice - the v0.498.0 book priced the anatomy, the cast names its prober`
}

// (v0.940.0) THE POUNCE'S OWN RIDERS - the cast's silence's own companion
// (the riders precedent, zero re-parsing): a MEASURE, never a verdict-owner
// - the top two probers' concentration prices the shape the solo law
// refused to name (the cast's owner case leaves the companion unprinted -
// the decompose's own branch law). The order is deterministic (count desc,
// then the name's own - 'F16' < 'F6' byte-wise). Junk never invents a
// shape: a missing or empty book, fewer than two probers, or a leader
// already holding the majority reads the honest silence (null).
export function pounceRiders (botBook) {
  if (pounceCast(botBook)) return null
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
  return { leader: leader.bot, leaderOwns: leader.owns, runner: runner.bot, runnerOwns: runner.owns, ofProbes: total, pairOwns, share: +(pairOwns / total).toFixed(3) }
}

// (v0.940.0) the riders' own row - THE PROBERS' OWN CROWD (the family's
// own tail): a measure of the shape, never a named owner. Junk never
// prints a shape (the honest silence's own row law).
export function pounceRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofProbes, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofProbes) || ofProbes <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofProbes ||
      !Number.isFinite(share)) return null
  const s = ofProbes === 1 ? 'probe' : 'probes'
  return `the pounce's own riders (v0.940.0): no solo prober owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofProbes} ${s} (${(share * 100).toFixed(1)}%) - THE PROBERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the pounces the solo law refused to name`
}
