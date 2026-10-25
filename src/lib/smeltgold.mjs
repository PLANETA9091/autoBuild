// (v0.976.459) Smelt raw gold decision for the bot fleet.
//
// THE PROBLEM: the fire lane's consolidations spoke twice - the iron's
// own (the smeltraw word v0.976.453) and the copper's own (the
// smeltcopper word v0.976.455) - and BOTH words' RAW KIN LAW NAMED the
// gold's own future (the raw_gold the kin words read their own names
// only, named never adopted twice over), but the GOLD never melted: a
// bot raw-gold-rich (the nether roads the quartz-and-gold crossings,
// the badlands veins the quarry crosses) rots the raw in the pocket
// while the clockcraft word's own timepiece starves for ingots (1 raw
// gold + fuel -> 1 gold ingot, vanilla; one coal smelts EIGHT). THE
// FIX: decideSmeltGold() prices the GOLD CONSOLIDATION - one pocket
// map to ONE word with ONE reason:
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
// vanilla fire's own accounting). THE RATIO LAW: one raw gold -> one
// gold ingot (vanilla smelting, 1:1 - the yield never inflated). THE
// GOLD FAMILY LAW: the raw census rides exact 'raw_gold' and nothing
// else - the gold_ore block, the deepslate_gold_ore, the NETHER GOLD
// ORE are the mining lanes' own placement forms, the census never
// splits and never adopts another lane's kin (the shearscraft law);
// the ingot census rides exact 'gold_ingot'; the coal census rides
// exact 'coal' - the CHARCOAL the wood lane's own fuel form, named
// never adopted (the kin words' shared law). THE RAW KIN LAW: the
// smeltraw word prices the iron's own consolidation, the smeltcopper
// word the copper's own, this word the gold's own - the kin words read
// their own names only, the fire shared never the pocket split. THE
// CONSUMER LAW: the gold economy's demand words are its own futures -
// the CLOCK (4 ingots + 1 redstone) the time lane's own future ALREADY
// PRICED (the clockcraft word's own timepiece v0.976.449), the GOLDEN
// APPLE (8 ingots + 1 apple) the food lane's own future, the BELL the
// village lane's own future, both named never priced here; a bot
// holding raw gold it does not want still earns its smelts if the raw
// and the fire afford them, no other lane's face gates here. Junk
// inputs never throw: they return a refuse with the junk-input reason
// so a caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a raw-rich fuel-rich pocket prices every smelt it
// affords, an honest longer yield list never clamped. The pure read
// mutates nothing.

// the vanilla fuel value: one coal smelts eight items
export const SMELTGOLD_COAL_SMELTS = 8
// the vanilla smelting ratio: one raw gold -> one gold ingot
export const SMELTGOLD_RAW_PER_INGOT = 1

/**
 * Decide whether one bot's pocket earns a gold smelt word.
 *
 * @param {object} [opts]
 * @param {number} [opts.rawGoldCount=0] raw gold on hand (the exact
 *                                       'raw_gold' name, the mining
 *                                       lane's own drop)
 * @param {number} [opts.coalCount=0]    coal on hand (the exact 'coal'
 *                                       name, the fuel law's own unit)
 * @returns {{action: 'smelt'|'defer'|'refuse'|'keep', reason: string, smelts: number, ingotYield: number, rawLeft: number, coalLeft: number, cost: number}}
 */
export function decideSmeltGold (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['rawGoldCount', 'coalCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', smelts: 0, ingotYield: 0, rawLeft: 0, coalLeft: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const raw = floor0(opts.rawGoldCount)
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
  const fuelUnits = coal * SMELTGOLD_COAL_SMELTS
  if (fuelUnits >= 1) {
    const smelts = Math.min(raw, fuelUnits)
    return {
      action: 'smelt',
      reason: 'raw-fuel-affordable',
      smelts,
      ingotYield: smelts * SMELTGOLD_RAW_PER_INGOT,
      rawLeft: raw - smelts,
      coalLeft: coal - Math.ceil(smelts / SMELTGOLD_COAL_SMELTS),
      cost: SMELTGOLD_RAW_PER_INGOT
    }
  }
  // raw-poor in fuel only: the honest shortage names the one coal's
  // own floor price - the coal trip the caller re-tasks to, never a
  // guessed smelt
  return { action: 'defer', reason: 'fuel-short', smelts: 0, ingotYield: 0, rawLeft: raw, coalLeft: coal, cost: 1 }
}
