//
// sweepcast.mjs - THE SWEEP'S OWN CAST (v0.938.0)
//
// The v0.228.0 sweep census priced the harvest's classes (harvests,
// zero-histograms, unreachables, defers, busy, idle-empty) and its raw
// per-bot line has ridden beside them since v0.139.0 - but no row ever
// said WHICH bot's own sweeps own the census (face 205's read: 'census
// lines: 174 per-bot: F13=30 F18=26 F8=24 ...' rode raw with no seat
// naming the watcher). THE COUNT LAW (the census's own cells only, zero
// re-parsing - the cast's own precedent): the per-bot census lines are
// already the census's own cells (the decompose's perBot read), each
// census line is one vote; a bot owns the cast only above half the
// census lines (a tie owns nothing - the storm-has-no-seat precedent).
// Junk never invents a cast: a missing or empty book, or a minority
// top, reads the honest silence (null).
//
// THE NAME'S OWN DEDUP (recorded not rewritten): v0.800.0's sweep book
// owns 'THE SWEEP'S OWN SEAT' (the close-class's own seat) - this cast
// is the census line's own BOT axis (the class seat untouched).
//

/**
 * sweepCast(cells) - the sweep census's bot-level seat.
 * @param {Object<string, number>|null} [cells] the census's own per-bot
 *   sweep census-line counts (the decompose perBot(/ sweep: /) read)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function sweepCast (cells) {
  if (!cells || typeof cells !== 'object' || Array.isArray(cells)) return null
  const rows = []
  for (const [bot, n] of Object.entries(cells)) {
    if (typeof bot === 'string' && bot && Number.isInteger(n) && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.938.0) the cast's own row - THE HARVEST'S OWN WATCHER: one bot's own
// sweeps keep the census's own voice. Junk never prints a seat (the honest
// silence's own row law).
export function sweepCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the sweep's own cast (v0.938.0): ${bot} owns ${owns} of ${ofLines} census ${s} (${(share * 100).toFixed(1)}%) - THE HARVEST'S OWN WATCHER: one bot's own sweeps keep the census's own voice - the v0.228.0 census priced the classes, the cast names its watcher`
}

// (v0.938.0) THE SWEEP'S OWN RIDERS - the cast's silence's own companion
// (the riders precedent, zero re-parsing): a MEASURE, never a verdict-owner
// - the top two sweepers' concentration prices the shape the solo law
// refused to name (the cast's owner case leaves the companion unprinted -
// the decompose's own branch law). The order is deterministic (count desc,
// then the name's own - 'F16' < 'F6' byte-wise). Junk never invents a
// shape: a missing or empty book, fewer than two sweepers, or a leader
// already holding the majority reads the honest silence (null).
export function sweepRiders (cells) {
  if (sweepCast(cells)) return null
  if (!cells || typeof cells !== 'object' || Array.isArray(cells)) return null
  const rows = []
  for (const [bot, n] of Object.entries(cells)) {
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

// (v0.938.0) the riders' own row - THE HARVESTERS' OWN CROWD (the family's
// own tail): a measure of the shape, never a named owner. Junk never prints
// a shape (the honest silence's own row law).
export function sweepRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  return `the sweep's own riders (v0.938.0): no solo harvester owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} census lines (${(share * 100).toFixed(1)}%) - THE HARVESTERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the watches the solo law refused to name`
}
