// (v0.976.499) Charcoal mint decision for the bot fleet.
//
// THE PROBLEM: the renewable fuel's own leg walked unpriced. The
// smelt family's FUEL LAW prices what the COAL burns (one coal
// smelts eight - and the law's own twin already read charcoal:
// FUEL_YIELD.charcoal = 8, the smelting word's own map mints the
// charcoal as a SIDE, oak_log: 'charcoal'), the fuelbank word
// banks the surplus (coal AND charcoal, 'both burn 8') - but the
// MINT decision itself never priced: the fire eats its own coal
// while the pocket hauls logs it could burn into fuel. The
// fuelbank's own prose reserved the seat and never spent it:
// 'charcoal the renewable one (a future dedicated leg)'. THE FIX:
// decideCharcoal() prices the MINT - one pocket map to ONE word
// with ONE reason:
//   'keep'   - the log lane empty (the mint's own silence - the
//              wood trip owns that story, nothing mints from
//              nothing)
//   'defer'  - the fuel lane rich (the SLOT LAW: the pocket holds
//              the ceiling - one full burn slot of eight - the
//              mint never hoards, the honest defer the fire's own
//              brake)
//   'smelt'  - the fuel lane lean (the deficit the ceiling names:
//              the mint fills the burn slot the shortfall prices,
//              the log-short pocket mints what it affords - every
//              charcoal minted feeds the fire, the partial mint
//              never zero so never deferred)
//   'refuse' - junk input (never throws into the fleet loop)
// THE MINT LAW: one log mints one charcoal - vanilla's own 1:1
// (the smelting word's own map's child). THE SLOT LAW: the
// ceiling reads eight - the FUEL LAW's own burn per unit - the
// mint fills the deficit (ceiling minus the fuel held), never
// overshoots the eight, the surplus logs ride named in the
// logsLeft. THE RENEWABLE LAW: the charcoal the COAL's own twin
// (both burn eight - the FUEL_YIELD pin the test reads) - the
// wood-rich coal-poor pocket's own feed, the fire never starves
// beside its own logs. THE HELD LAW: the read mutates nothing -
// the pure read the caller merges. Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative counts
// floor to zero (a lying census must not poison the arithmetic);
// they are read, not refused - the honesty lives in the clamp.
// Fractional counts floor honestly (whole logs the furnace
// trades). No cap beyond the slot: the deficit the ceiling names
// is the law's own bound, never an artificial clamp.

// the vanilla mint price one log costs (the smelting word's own
// map's child - one log in, one charcoal out)
export const CHARCOAL_LOG_PER_CHARCOAL = 1
// the SLOT LAW's own ceiling: one full burn slot of fuel units -
// the FUEL LAW's own eight (the pocket holding eight never mints)
export const CHARCOAL_FUEL_CEILING = 8

/**
 * Decide whether one bot's pocket earns a charcoal mint word.
 *
 * @param {object} [opts]
 * @param {number} [opts.logCount=0]  logs on hand (the wood trip's
 *                                    own yield - any *_log the
 *                                    caller's census speaks)
 * @param {number} [opts.fuelCount=0] loose fuel units held (coal +
 *                                    charcoal combined - both burn
 *                                    eight, the caller's own
 *                                    census)
 * @returns {{action: 'smelt'|'defer'|'refuse'|'keep', reason: string, smelts: number, charcoalYield: number, logsLeft: number, fuelCount: number}}
 */
export function decideCharcoal (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['logCount', 'fuelCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', smelts: 0, charcoalYield: 0, logsLeft: 0, fuelCount: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const logs = Math.floor(floor0(opts.logCount))
  const fuel = Math.floor(floor0(opts.fuelCount))
  // the log lane empty: the mint's own silence - the wood trip owns
  // that story (the harvest mints the log, the charcoal never
  // guesses), nothing rides the grid (the keep-gate-first law, the
  // family's own honest empty reading).
  if (logs < 1) {
    return { action: 'keep', reason: 'log-empty', smelts: 0, charcoalYield: 0, logsLeft: logs, fuelCount: fuel }
  }
  // the fuel lane rich: the SLOT LAW's own brake - the pocket holds
  // the ceiling (one full burn slot of eight), the mint never
  // hoards (the honest defer, the fire's own feed full).
  if (fuel >= CHARCOAL_FUEL_CEILING) {
    return { action: 'defer', reason: 'fuel-rich', smelts: 0, charcoalYield: 0, logsLeft: logs, fuelCount: fuel }
  }
  // the pocket's own arithmetic: the deficit the ceiling names (the
  // slot's own shortfall), the mint fills it - the log-rich pocket
  // mints the full deficit, the log-short pocket mints what it
  // affords (every charcoal minted feeds the fire, the partial
  // mint never zero so never deferred - the MINT LAW's own 1:1 the
  // yield reads). The surplus logs ride named in the logsLeft, the
  // read mutates nothing.
  const deficit = CHARCOAL_FUEL_CEILING - fuel
  const smelts = Math.min(deficit, logs)
  return {
    action: 'smelt',
    reason: 'fuel-lean',
    smelts,
    charcoalYield: smelts * CHARCOAL_LOG_PER_CHARCOAL,
    logsLeft: logs - smelts,
    fuelCount: fuel
  }
}
