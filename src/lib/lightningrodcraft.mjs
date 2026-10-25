// (v0.976.456) Lightning rod craft decision for the bot fleet.
//
// THE PROBLEM: the copper economy's supply side spoke (the smeltcopper
// word v0.976.455 - the raw's own consolidation, the smeltraw word's
// named future) and its CONSUMER LAW NAMED the demand - the LIGHTNING
// ROD (3 copper ingots, vanilla) the storm lane's own future - but the
// STORM never priced: a bot copper-rich walks by census alone (the
// roof the bots stand under is the sky's own temper, the thunderstorm
// the vanilla lightning's own trigger) while the metal it already
// carries IS the rod (3 copper ingots -> 1 lightning rod, vanilla).
// The rod reads the sky - a CRAFTED rod gives the storm lane its own
// instrument the way the compass gives the anchor and the clock the
// hour. THE FIX: decideLightningRodCraft() prices the ROD POVERTY -
// one pocket map to ONE craft word with ONE reason:
//   'keep'   - a rod already held (the storm lane's own instrument
//              never doubles - the pieces-held law's twin, the craft
//              family's own keep gate)
//   'craft'  - copper >= 3 (every three ingots price their rod
//              honestly - the floor law, the leftover named, never
//              capped)
//   'defer'  - copper-short (the honest shortage - the smeltcopper
//              word's own lane re-tasks the smelt trip, never a
//              guessed craft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW INVERTED: the smeltcopper word NAMED this lane and
// never priced it; this word PRICES what the CONSUMER LAW named - the
// naming chain the family's own (the clockcraft word named the
// compasscraft word, the smeltraw word named the smeltcopper word,
// the smeltcopper word names this one). The rod leg is the COPPER
// ECONOMY'S FIRST CONSUMER LEG (the smeltcopper word's consolidation
// the supply, this word the demand). A bot holding spare copper it
// does not want still earns its rod if the pocket affords it, no
// other lane's face gates here. THE ROD FAMILY LAW: the census rides
// exact 'lightning_rod' and nothing else - vanilla has no rod kin;
// the COPPER BLOCK, the CUT COPPER, the RAW COPPER are the storage
// and mining lanes' own forms, the census never splits and never
// adopts another lane's kin (the shearscraft law); the ingot census
// rides exact 'copper_ingot'. THE SPYGLASS LAW: the SPYGLASS (2
// copper ingots + 1 amethyst shard) remains the amethyst lane's own
// future - named never priced here (the smeltcopper word's own
// reading, the kin words' shared law). Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: a copper-rich
// pocket prices every rod it affords, an honest longer yield list
// never clamped. The pure read mutates nothing.

// the vanilla copper cost one rod craft carries (three ingots read
// the storm)
export const LIGHTNINGROD_COPPER_PER_CRAFT = 3
// the vanilla rod yield one lightning rod craft produces
export const LIGHTNINGROD_RODS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a lightning rod craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.rodCount=0]          lightning rods already
 *                                            held (the exact
 *                                            'lightning_rod' name)
 * @param {number} [opts.copperIngotCount=0]  copper ingots on hand
 *                                            (the exact 'copper_ingot'
 *                                            name, the smeltcopper
 *                                            word's own yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, rodsYield: number, copperLeft: number, rods: number}}
 */
export function decideLightningRodCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['rodCount', 'copperIngotCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, rodsYield: 0, copperLeft: 0, rods: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const rods = floor0(opts.rodCount)
  const copper = floor0(opts.copperIngotCount)
  // a rod already held: the storm lane's own story - the sky reads by
  // item, the rod economy stays silent (the pieces-held law's twin,
  // the craft family's own keep gate).
  if (rods >= 1) {
    return { action: 'keep', reason: 'rod-held', copperLeft: copper, rods, crafts: 0, rodsYield: 0 }
  }
  // the pocket's own arithmetic: every three ingots price their rod
  // honestly - the floor law prices the yield, the leftover named,
  // the caller picks how many rods the storm lane needs - the word
  // never rounds the yield into a lie and never caps the pocket.
  if (copper >= LIGHTNINGROD_COPPER_PER_CRAFT) {
    const crafts = Math.floor(copper / LIGHTNINGROD_COPPER_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'copper-affordable',
      crafts,
      rodsYield: crafts * LIGHTNINGROD_RODS_PER_CRAFT,
      copperLeft: copper - crafts * LIGHTNINGROD_COPPER_PER_CRAFT,
      rods: 0
    }
  }
  // copper-poor and rod-poor: the three-ingot leg's own floor price -
  // the smeltcopper word's own lane re-tasks the smelt trip, never a
  // guessed craft
  return { action: 'defer', reason: 'copper-short', copperLeft: copper, rods: 0, crafts: 0, rodsYield: 0 }
}
