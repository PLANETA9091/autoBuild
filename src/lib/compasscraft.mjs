// (v0.976.451) Compass craft decision for the bot fleet.
//
// THE PROBLEM: the craft family priced the time (the clockcraft word
// v0.976.449 - the gold economy's first leg AND the redstone economy's
// first leg) and named its kin - the COMPASS the navigation lane's own
// future - but the NAVIGATION never priced: a bot iron-rich and
// redstone-rich walks by census alone (the nearestK lane, the
// walk-intent lane, the chest ledger all navigate by remembered
// places) while the metal it already carries IS the needle (4 iron
// ingots + 1 redstone dust -> 1 compass, vanilla). The compass points
// the spawn - the fleet's own anchor (the bots spawn, the chests
// bank, the home the walks return to); a CRAFTED compass reads the
// anchor by item the way the clock reads the sky by item. THE FIX:
// decideCompassCraft() prices the NEEDLE POVERTY - one pocket map to
// ONE craft word with ONE reason:
//   'keep'   - a compass already held (the needle never doubles -
//              the pieces-held law's twin, the craft family's own
//              keep gate)
//   'craft'  - iron >= 4 AND redstone >= 1 (the shorter leg prices
//              the yield, the leftover of BOTH legs named, never
//              capped)
//   'defer'  - iron-short the mining trip re-tasks / redstone-short
//              the deep-mining trip's own yield, the honest shortage
//              named
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - this
// word's needle leg is the IRON ECONOMY'S FOURTEENTH PRICED LEG (the
// pick, the armor, the shield, the shears, the bucket, the rail, the
// minecart, the hopper, the spark, the cauldron, the crossbow's iron,
// the tripwire hook, the anvil, this word's needle); the redstone
// consumers separate - the dust leg the REDSTONE ECONOMY'S SECOND
// PRICED LEG (the clockcraft word's timepiece the first). A bot
// holding spare iron it does not want still earns its needle if the
// legs afford them, no other lane's face gates here. THE COMPASS
// FAMILY LAW: the compass IS a singleton needle - the census rides
// exact 'compass' and nothing else; the CLOCK is the time lane's own
// instrument (the clockcraft word's own story, never adopted here);
// the SPYGLASS the amethyst lane's own future, the LODESTONE the
// stone lane's own future, both named never adopted; the iron census
// rides exact 'iron_ingot' - the ore, the raw iron, the nugget ARE
// the smelt trip's own consolidation forms, never item kin; the
// redstone census rides exact 'redstone' - the dust's own name, the
// block, the torch, the repeater ARE the redstone lane's own kin,
// the census never splits a family and never adopts another lane's
// kin. Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not a
// crash loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: an iron-rich pocket prices every
// needle it affords, an honest longer yield never clamped. The pure
// read mutates nothing.

// the vanilla iron cost one compass craft carries (4 ingots bend the
// needle)
export const COMPASSCRAFT_IRON_PER_CRAFT = 4
// the vanilla redstone cost one compass craft carries (1 dust sets
// the pointing)
export const COMPASSCRAFT_REDSTONE_PER_CRAFT = 1
// the vanilla needle yield one compass craft produces
export const COMPASSCRAFT_COMPASSES_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a compass craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.compassCount=0]        compasses already held
 *                                              (the singleton census -
 *                                              exact 'compass')
 * @param {number} [opts.ironIngotCount=0]      iron ingots on hand
 * @param {number} [opts.redstoneDustCount=0]   redstone dust on hand
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, compassesYield: number, ironLeft: number, redstoneLeft: number, compasses: number}}
 */
export function decideCompassCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['compassCount', 'ironIngotCount', 'redstoneDustCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, compassesYield: 0, ironLeft: 0, redstoneLeft: 0, compasses: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const compasses = floor0(opts.compassCount)
  const iron = floor0(opts.ironIngotCount)
  const redstone = floor0(opts.redstoneDustCount)
  // a needle already held: the navigation lane's own story - the
  // anchor reads by item, the needle economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (compasses >= 1) {
    return { action: 'keep', reason: 'compass-held', ironLeft: iron, redstoneLeft: redstone, compasses, crafts: 0, compassesYield: 0 }
  }
  // the pocket's own arithmetic: every four ingots + one dust price
  // their needle honestly - the SHORTER leg prices the yield (the
  // bowcraft law), the leftover of both legs named, the caller picks
  // how many compasses the navigation lane needs - the word never
  // rounds the yield into a lie and never caps the pocket.
  if (iron >= COMPASSCRAFT_IRON_PER_CRAFT && redstone >= COMPASSCRAFT_REDSTONE_PER_CRAFT) {
    const crafts = Math.min(
      Math.floor(iron / COMPASSCRAFT_IRON_PER_CRAFT),
      Math.floor(redstone / COMPASSCRAFT_REDSTONE_PER_CRAFT)
    )
    return {
      action: 'craft',
      reason: 'iron-redstone-affordable',
      crafts,
      compassesYield: crafts * COMPASSCRAFT_COMPASSES_PER_CRAFT,
      ironLeft: iron - crafts * COMPASSCRAFT_IRON_PER_CRAFT,
      redstoneLeft: redstone - crafts * COMPASSCRAFT_REDSTONE_PER_CRAFT,
      compasses: 0
    }
  }
  // iron-poor: the honest shortage names the four-ingot leg's own
  // floor price - the mining trip the caller re-tasks, never a
  // guessed craft
  if (iron < COMPASSCRAFT_IRON_PER_CRAFT) {
    return { action: 'defer', reason: 'iron-short', ironLeft: iron, redstoneLeft: redstone, compasses: 0, crafts: 0, compassesYield: 0 }
  }
  // redstone-poor and needle-poor: the one-dust leg's own floor price
  // - the deep-mining trip's own yield re-tasks, never a guessed
  // craft
  return { action: 'defer', reason: 'redstone-short', ironLeft: iron, redstoneLeft: redstone, compasses: 0, crafts: 0, compassesYield: 0 }
}
