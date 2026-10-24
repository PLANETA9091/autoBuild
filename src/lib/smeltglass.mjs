// (v0.976.454) Smelt glass decision for the bot fleet.
//
// THE PROBLEM: the glassbottlecraft word (.447) prices the BOTTLE the
// pocket could craft (3 glass -> 3 bottles, vanilla) and its honest
// defer names the SAND TRIP the glass needs - but nothing prices the
// smelt between the sand and the bottle: the pocket holds sand and
// coal while the bottles wait on glass that never melted. The furnace
// lane rides the fire; this word prices the MELT - 1 sand + fuel -> 1
// glass (vanilla), one coal smelts EIGHT. THE FIX: decideSmeltGlass()
// prices the GLASS ECONOMY'S MIDDLE LEG - one pocket map to ONE word
// with ONE reason:
//   'keep'   - the sand lane empty (the furnace's own silence - the
//              sand trip owns that story, nothing rides the fire)
//   'smelt'  - sand + fuel affordable (the honest yield the min law
//              prices: the sand AND the fuel both bound it, the coal
//              remainder the ceiling names)
//   'defer'  - sand held but fuel short (the honest shortage - the
//              coal trip the caller re-tasks to, never a guessed
//              melt)
//   'refuse' - junk input (never throws into the fleet loop)
// THE FUEL LAW: one coal smelts EIGHT items (vanilla fuel value) - the
// fuelUnits the coal's own arithmetic (coal x 8), the smelts the min of
// the sand and the fuelUnits, the coalLeft the ceiling burns honestly
// (a partial last burn still spends the whole coal's slot - the
// vanilla fire's own accounting). THE RATIO LAW: one sand -> one glass
// (vanilla smelting, 1:1 - the yield never inflated). THE SAND FAMILY
// LAW: the sand census rides exact 'sand' and nothing else - the
// RED_SAND the badlands lane's own form, named never adopted (the
// shearscraft law: the census never splits, and the desert's white
// sand is the glass trip's own stock); the glass census rides exact
// 'glass' - the stained glasses are the dye lanes' own forms, never
// adopted. THE CHAIN LAW: the glassbottlecraft word prices what the
// GLASS becomes (3 glass -> 3 bottles), this word prices what the SAND
// becomes - a bot holding glass it does not want still earns its
// melts if the sand and the fire afford them, no other lane's face
// gates here. THE RAW KIN LAW: the smeltraw word (.453) prices the
// iron's own consolidation, this word the sand's own melt - the two
// words read their own names only, the fire shared never the pocket
// split (the kin words' own law). Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: a sand-rich
// fuel-rich pocket prices every melt it affords, an honest longer
// yield list never clamped. The pure read mutates nothing.

// the vanilla fuel value: one coal smelts eight items
export const SMELTGLASS_COAL_SMELTS = 8
// the vanilla smelting ratio: one sand -> one glass
export const SMELTGLASS_SAND_PER_GLASS = 1

/**
 * Decide whether one bot's pocket earns a glass smelt word.
 *
 * @param {object} [opts]
 * @param {number} [opts.sandCount=0] sand on hand (the exact 'sand'
 *                                    name, the desert's own stock)
 * @param {number} [opts.coalCount=0] coal on hand (the exact 'coal'
 *                                    name, the fuel law's own unit)
 * @returns {{action: 'smelt'|'defer'|'refuse'|'keep', reason: string, smelts: number, glassYield: number, sandLeft: number, coalLeft: number, cost: number}}
 */
export function decideSmeltGlass (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['sandCount', 'coalCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', smelts: 0, glassYield: 0, sandLeft: 0, coalLeft: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const sand = floor0(opts.sandCount)
  const coal = floor0(opts.coalCount)
  // the sand lane empty: the furnace's own silence - the sand trip
  // owns that story, nothing rides the fire (the keep-gate-first law,
  // the craft family's own keep gate - the sand IS this lane's story).
  if (sand < 1) {
    return { action: 'keep', reason: 'sand-empty', smelts: 0, glassYield: 0, sandLeft: 0, coalLeft: coal, cost: 0 }
  }
  // the pocket's own arithmetic: the fuelUnits the coal's own math
  // (coal x 8, vanilla), the smelts the min of the sand and the fuel -
  // both legs bound the yield honestly, the coalLeft the ceiling
  // burns (the partial last burn still spends the slot), never capped
  // beyond the pocket.
  const fuelUnits = coal * SMELTGLASS_COAL_SMELTS
  if (fuelUnits >= 1) {
    const smelts = Math.min(sand, fuelUnits)
    return {
      action: 'smelt',
      reason: 'sand-fuel-affordable',
      smelts,
      glassYield: smelts * SMELTGLASS_SAND_PER_GLASS,
      sandLeft: sand - smelts,
      coalLeft: coal - Math.ceil(smelts / SMELTGLASS_COAL_SMELTS),
      cost: SMELTGLASS_SAND_PER_GLASS
    }
  }
  // sand-poor in fuel only: the honest shortage names the one coal's
  // own floor price - the coal trip the caller re-tasks to, never a
  // guessed melt
  return { action: 'defer', reason: 'fuel-short', smelts: 0, glassYield: 0, sandLeft: sand, coalLeft: coal, cost: 1 }
}
