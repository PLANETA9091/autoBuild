// (v0.976.488) The maptarget word - the WorldMap target assignment.
//
// THE PROBLEM: the WorldMap holds the fleet's shared stock (the
// nearest/nearestK/take infrastructure the fleet walks, the maptrip
// lens prices the LAUNCH lines since v0.415.0) - but the ASSIGNMENT
// itself never priced: two bots ask the map the same question and the
// nearestK answer hands BOTH the same record (the double-claim walk
// the rent the fleet rents - the second bot's walk bought a target
// the first bot already owns). THE FIX: decideMapTarget() prices the
// assignment lane - one bots-and-targets map to ONE word with ONE
// reason:
//   'assign' - free targets afford the walk (THE ZERO-CLASH LAW: each
//              target at most one bot, assigned never exceeds the
//              free stock, the spread the min law binds)
//   'keep'   - no bots ask (the map's own silence - nobody to assign,
//              the keep, never a defer)
//   'defer'  - the map dry (THE MAP-EMPTY DEFER: targets zero names
//              the maptrip word's own scan - the walk that fills the
//              map; THE ALL-CLAIMED DEFER: targets held but the
//              claims' own stock eats the free margin - the walk the
//              claim releases, the word names which dryness owes the
//              wait)
//   'refuse' - junk input (never throws into the fleet loop)
// THE FREE-STOCK LAW: free = targets - claims, floored at zero (a
// lying claim census must not poison the arithmetic - the honesty
// lives in the clamp, never a negative assignment). THE MIN LAW: the
// spread binds BOTH legs (assigned = min(bots, free) - the hoetrip
// word's own two-leg reading grown: the surplus bots named, the
// surplus targets named, never rounded into a lie). THE CENSUS LAW:
// the counts the CALLER'S OWN reads (the map's own total, the claims
// the fleet's own ledger - the word never reads the map itself, the
// pure function stays pure). Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero; they
// are read, not refused. Fractional counts floor honestly with the
// remainder named. The pure read mutates nothing.

// the assignment's own pin: one target one bot (the zero-clash law's
// own unit - the fleet's walks never share a target)
export const MAPTARGET_BOTS_PER_TARGET = 1

/**
 * Decide whether the fleet's map earns an assignment word.
 *
 * @param {object} [opts]
 * @param {number} [opts.botsCount=0]    bots asking for a target
 * @param {number} [opts.targetsCount=0] the map's own records (the
 *                                       caller's own census)
 * @param {number} [opts.claimsCount=0]  targets already claimed by the
 *                                       fleet's own ledger
 * @returns {{action: 'assign'|'keep'|'defer'|'refuse', reason: string, bots: number, targets: number, claims: number, assigned: number, botsLeft: number, targetsLeft: number}}
 */
export function decideMapTarget (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['botsCount', 'targetsCount', 'claimsCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', bots: 0, targets: 0, claims: 0, assigned: 0, botsLeft: 0, targetsLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const bots = floor0(opts.botsCount)
  const targets = floor0(opts.targetsCount)
  const claims = floor0(opts.claimsCount)
  // the map's own silence: nobody asks - nobody assigned (the keep,
  // never a defer: no honest shortage lives past the empty ask).
  if (bots < 1) {
    return { action: 'keep', reason: 'no-bots', bots, targets, claims, assigned: 0, botsLeft: 0, targetsLeft: 0 }
  }
  // the free stock: targets minus the claims' own hold, floored at
  // zero (the honesty lives in the clamp).
  const free = Math.max(0, targets - claims)
  // the map dry: the two honest drynesses named apart - the empty map
  // names the maptrip word's own scan, the claimed-out stock names the
  // claims' own hold.
  if (targets < 1) {
    return { action: 'defer', reason: 'map-empty', bots, targets, claims, assigned: 0, botsLeft: bots, targetsLeft: 0 }
  }
  if (free < 1) {
    return { action: 'defer', reason: 'all-claimed', bots, targets, claims, assigned: 0, botsLeft: bots, targetsLeft: 0 }
  }
  // the spread's own arithmetic: the min law binds BOTH legs - the
  // assigned never exceeds the free stock (the ZERO-CLASH LAW's own
  // ceiling), the surplus bots and the surplus targets both named.
  const assigned = Math.min(bots, free)
  return {
    action: 'assign',
    reason: 'targets-afford',
    bots,
    targets,
    claims,
    assigned,
    botsLeft: bots - assigned,
    targetsLeft: free - assigned
  }
}
