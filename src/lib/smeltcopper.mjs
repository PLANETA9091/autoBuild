// (v0.976.455) Smelt raw copper decision for the bot fleet.
//
// THE PROBLEM: the bots mine through the copper veins the quarry and
// the deep roads cross - the ore drops RAW COPPER the modern way - and
// the raw rots in the pocket: the iron's consolidation spoke (the
// smeltraw word .453) but the copper's never did, and the smeltraw
// word's own RAW KIN LAW named this lane THE COPPER ECONOMY'S OWN
// CONSOLIDATION FUTURE. The future lands: 1 raw copper + fuel -> 1
// copper ingot (vanilla), one coal smelts EIGHT. THE FIX:
// decideSmeltCopper() prices the COPPER CONSOLIDATION - one pocket map
// to ONE word with ONE reason:
//   'keep'   - the raw lane empty (the smelter's own silence - the
//              mining trip owns that story, nothing rides the fire)
//   'smelt'  - raw + fuel affordable (the honest yield the min law
//              prices: the raw AND the fuel both bound it, the coal
//              remainder the ceiling names)
//   'defer'  - raw held but fuel short (the honest shortage - the
//              coal trip the caller re-tasks to, never a guessed
//              smelt)
//   'refuse' - junk input (never throws into the fleet loop)
// THE FUEL LAW: one coal smelts EIGHT items (vanilla fuel value) - the
// fuelUnits the coal's own arithmetic (coal x 8), the smelts the min of
// the raw and the fuelUnits, the coalLeft the ceiling burns honestly
// (a partial last burn still spends the whole coal's slot - the
// vanilla fire's own accounting). THE RATIO LAW: one raw copper -> one
// copper ingot (vanilla smelting, 1:1 - the yield never inflated). THE
// COPPER FAMILY LAW: the raw census rides exact 'raw_copper' and
// nothing else - the copper_ore block, the deepslate_copper_ore are
// the mining lane's own placement forms, the census never splits and
// never adopts another lane's kin (the shearscraft law); the ingot
// census rides exact 'copper_ingot'; the coal census rides exact
// 'coal' - the CHARCOAL the wood lane's own fuel form, named never
// adopted (the smeltraw word's own reading, the kin words' shared
// law). THE RAW KIN LAW: the smeltraw word (.453) prices the iron's
// own consolidation, this word the copper's own - the kin words read
// their own names only, the fire shared never the pocket split. THE
// CONSUMER LAW: the copper economy's demand words are its own futures
// - the LIGHTNING ROD (3 copper ingots, vanilla) the storm lane's own
// future, the SPYGLASS (2 copper ingots + 1 amethyst shard) the
// amethyst lane's own future - both named never priced here; a bot
// holding copper it does not want still earns its smelts if the raw
// and the fire afford them, no other lane's face gates here. Junk
// inputs never throw: they return a refuse with the junk-input reason
// so a caller bug degrades into a log line, not a crash loop.
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a raw-rich fuel-rich pocket prices every smelt it
// affords, an honest longer yield list never clamped. The pure read
// mutates nothing.

// the vanilla fuel value: one coal smelts eight items
export const SMELTCOPPER_COAL_SMELTS = 8
// the vanilla smelting ratio: one raw copper -> one copper ingot
export const SMELTCOPPER_RAW_PER_INGOT = 1

/**
 * Decide whether one bot's pocket earns a copper smelt word.
 *
 * @param {object} [opts]
 * @param {number} [opts.rawCopperCount=0] raw copper on hand (the exact
 *                                         'raw_copper' name, the
 *                                         mining lane's own drop)
 * @param {number} [opts.coalCount=0]      coal on hand (the exact
 *                                         'coal' name, the fuel law's
 *                                         own unit)
 * @returns {{action: 'smelt'|'defer'|'refuse'|'keep', reason: string, smelts: number, ingotYield: number, rawLeft: number, coalLeft: number, cost: number}}
 */
export function decideSmeltCopper (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['rawCopperCount', 'coalCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', smelts: 0, ingotYield: 0, rawLeft: 0, coalLeft: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const raw = floor0(opts.rawCopperCount)
  const coal = floor0(opts.coalCount)
  // the raw lane empty: the smelter's own silence - the mining trip
  // owns that story, nothing rides the fire (the keep-gate-first law,
  // the craft family's own keep gate - the raw IS this lane's story).
  if (raw < 1) {
    return { action: 'keep', reason: 'raw-empty', smelts: 0, ingotYield: 0, rawLeft: 0, coalLeft: coal, cost: 0 }
  }
  // the pocket's own arithmetic: the fuelUnits the coal's own math
  // (coal x 8, vanilla), the smelts the min of the raw and the fuel -
  // both legs bound the yield honestly, the coalLeft the ceiling
  // burns (the partial last burn still spends the slot), never capped
  // beyond the pocket.
  const fuelUnits = coal * SMELTCOPPER_COAL_SMELTS
  if (fuelUnits >= 1) {
    const smelts = Math.min(raw, fuelUnits)
    return {
      action: 'smelt',
      reason: 'raw-fuel-affordable',
      smelts,
      ingotYield: smelts * SMELTCOPPER_RAW_PER_INGOT,
      rawLeft: raw - smelts,
      coalLeft: coal - Math.ceil(smelts / SMELTCOPPER_COAL_SMELTS),
      cost: SMELTCOPPER_RAW_PER_INGOT
    }
  }
  // raw-poor in fuel only: the honest shortage names the one coal's
  // own floor price - the coal trip the caller re-tasks to, never a
  // guessed smelt
  return { action: 'defer', reason: 'fuel-short', smelts: 0, ingotYield: 0, rawLeft: raw, coalLeft: coal, cost: 1 }
}
