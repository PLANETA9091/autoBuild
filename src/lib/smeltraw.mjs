// (v0.976.453) Smelt raw iron decision for the bot fleet.
//
// THE PROBLEM: the bots mine iron the modern way - the ore drops RAW
// IRON, not ingots - while the iron economy's demand words (the
// armorcraft word, the compasscraft word) price only the INGOT the
// pocket carries. The raw sits in the pocket while the yard's furnaces
// (the smelting bay's own 8) idle: the consolidation the fire prices
// never spoke. The furnacecraft word (.423) crafts the STATION; this
// word rides the FIRE the station holds. THE FIX: decideSmeltRaw()
// prices the RAW CONSOLIDATION - one pocket map to ONE word with ONE
// reason:
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
// vanilla fire's own accounting). THE RATIO LAW: one raw iron -> one
// iron ingot (vanilla smelting, 1:1 - the yield never inflated). THE
// IRON FAMILY LAW: the raw census rides exact 'raw_iron' and nothing
// else - the iron_ore block, the deepslate_iron_ore are the mining
// lane's own placement forms, the census never splits and never
// adopts another lane's kin (the shearscraft law); the coal census
// rides exact 'coal' - the CHARCOAL the wood lane's own fuel form,
// named never adopted; the ingot census rides exact 'iron_ingot'.
// THE RAW KIN LAW: the raw_copper, the raw_gold are the copper and
// gold economies' own consolidation futures - both named, never
// adopted here (the gold's clock word and the copper's own lane price
// their ingots their own way). THE CONSUMER LAW: the iron economy's
// demand words (the armorcraft word, the compasscraft word) price
// what the INGOT buys; this word prices what the RAW becomes - a bot
// holding ingots it does not want still earns its smelts if the raw
// and the fire afford them, no other lane's face gates here. Junk
// inputs never throw: they return a refuse with the junk-input reason
// so a caller bug degrades into a log line, not a crash loop.
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a raw-rich fuel-rich pocket prices every smelt it
// affords, an honest longer yield list never clamped. The pure read
// mutates nothing.

// the vanilla fuel value: one coal smelts eight items
export const SMELTRAW_COAL_SMELTS = 8
// the vanilla smelting ratio: one raw iron -> one iron ingot
export const SMELTRAW_RAW_PER_INGOT = 1

/**
 * Decide whether one bot's pocket earns a smelt word.
 *
 * @param {object} [opts]
 * @param {number} [opts.rawIronCount=0] raw iron on hand (the exact
 *                                       'raw_iron' name, the mining
 *                                       lane's own drop)
 * @param {number} [opts.coalCount=0]    coal on hand (the exact 'coal'
 *                                       name, the fuel law's own unit)
 * @returns {{action: 'smelt'|'defer'|'refuse'|'keep', reason: string, smelts: number, ingotYield: number, rawLeft: number, coalLeft: number, cost: number}}
 */
export function decideSmeltRaw (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['rawIronCount', 'coalCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', smelts: 0, ingotYield: 0, rawLeft: 0, coalLeft: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const raw = floor0(opts.rawIronCount)
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
  const fuelUnits = coal * SMELTRAW_COAL_SMELTS
  if (fuelUnits >= 1) {
    const smelts = Math.min(raw, fuelUnits)
    return {
      action: 'smelt',
      reason: 'raw-fuel-affordable',
      smelts,
      ingotYield: smelts * SMELTRAW_RAW_PER_INGOT,
      rawLeft: raw - smelts,
      coalLeft: coal - Math.ceil(smelts / SMELTRAW_COAL_SMELTS),
      cost: SMELTRAW_RAW_PER_INGOT
    }
  }
  // raw-poor in fuel only: the honest shortage names the one coal's
  // own floor price - the coal trip the caller re-tasks to, never a
  // guessed smelt
  return { action: 'defer', reason: 'fuel-short', smelts: 0, ingotYield: 0, rawLeft: raw, coalLeft: coal, cost: 1 }
}
