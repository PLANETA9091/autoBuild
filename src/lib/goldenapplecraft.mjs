// (v0.976.460) Golden apple decision for the bot fleet.
//
// THE PROBLEM: the gold economy's supply spoke (the smeltgold word
// v0.976.459 melted the raw into ingots) but its DEMAND still prices
// one leg only - the clockcraft word's own timepiece (4 ingots + 1
// redstone, v0.976.449) - while the smeltgold word's CONSUMER LAW
// NAMED the food lane's own future (8 ingots + 1 apple) and the BELL
// the village lane's own, both named never priced. A bot ingot-rich
// from the nether roads starves the premium ration: the golden apple
// heals AND feeds (the foodcare word's own lane the premium half), 8
// gold ingots + 1 apple -> 1 golden apple, vanilla. THE FIX:
// decideGoldenAppleCraft() prices the FOOD LANE'S OWN FUTURE - one
// pocket map to ONE word with ONE reason:
//   'keep'   - a golden apple already held (the food form never
//              doubles - the pieces-held law's twin, the craft
//              family's own keep gate)
//   'craft'  - gold + apple affordable (the min law binds BOTH legs -
//              the tintedglass word's own two-legged reading, the
//              floor law prices the yield, the leftovers named, never
//              capped)
//   'defer'  - the honest shortage names its starving leg (gold-short
//              FIRST - the binding leg at eight-per, the smeltgold
//              lane re-tasks the melt; apple-short - the orchard trip
//              owns that story)
//   'refuse' - junk input (never throws into the fleet loop)
// THE WRAP LAW: eight ingots wrap one apple and yield ONE golden
// apple - the vanilla recipe's own honest form, the yield never
// inflated. THE GOLDEN FAMILY LAW: the census rides exact
// 'golden_apple' - the ENCHANTED GOLDEN APPLE the loot lane's own
// relic (no crafting recipe in vanilla, the /give and the bastion
// chest's own story), named never adopted; the golden_carrot the
// carrot lane's own form (the NUGGET economy's own split - nuggets
// not ingots, a different pocket), named never adopted; the ingot
// census rides exact 'gold_ingot' (the smeltgold word's own
// reading); the apple census rides exact 'apple' - the oak leaves'
// own drop (the orchard trip's own yield, the sapling decay lane's
// own story), named never adopted elsewhere. THE CONSUMER LAW
// CONTINUED: the gold economy's demand words are its own futures -
// the CLOCK ALREADY PRICED (the clockcraft word's own timepiece
// v0.976.449), this word the GOLDEN APPLE the food lane's own future
// NOW PRICED, the BELL the village lane's own future, named never
// priced here; a bot holding golden apples it does not want stays
// silent, no other lane's face gates here. Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative counts floor
// to zero (a lying census must not poison the arithmetic); they are
// read, not refused - the honesty lives in the clamp. No cap: an
// ingot-rich apple-rich pocket prices every craft it affords, an
// honest longer yield list never clamped. The pure read mutates
// nothing.

// the vanilla ingot cost one golden apple craft carries (eight wrap
// the fruit)
export const GOLDENAPPLE_GOLD_PER_CRAFT = 8
// the vanilla apple cost one golden apple craft carries (one core)
export const GOLDENAPPLE_APPLE_PER_CRAFT = 1
// the vanilla golden apple yield one golden apple craft produces
export const GOLDENAPPLE_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a golden apple craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.goldenAppleCount=0] golden apples already held
 *                                           (the exact 'golden_apple'
 *                                           name)
 * @param {number} [opts.goldIngotCount=0]   gold ingots on hand (the
 *                                           exact 'gold_ingot' name,
 *                                           the smeltgold word's own
 *                                           yield)
 * @param {number} [opts.appleCount=0]       apples on hand (the exact
 *                                           'apple' name, the orchard
 *                                           trip's own drop)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, goldenYield: number, goldLeft: number, appleLeft: number, golden: number}}
 */
export function decideGoldenAppleCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['goldenAppleCount', 'goldIngotCount', 'appleCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, goldenYield: 0, goldLeft: 0, appleLeft: 0, golden: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const golden = floor0(opts.goldenAppleCount)
  const gold = floor0(opts.goldIngotCount)
  const apple = floor0(opts.appleCount)
  // a golden form already held: the food lane's own story - the
  // premium ration rides by item, the golden economy stays silent
  // (the pieces-held law's twin, the craft family's own keep gate).
  if (golden >= 1) {
    return { action: 'keep', reason: 'golden-held', goldLeft: gold, appleLeft: apple, golden, crafts: 0, goldenYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // tintedglass word's own two-legged reading. Every eight ingots and
  // one apple price their form honestly - the floor law prices the
  // yield, the leftovers named, never capped beyond the pocket.
  const crafts = Math.min(
    Math.floor(gold / GOLDENAPPLE_GOLD_PER_CRAFT),
    Math.floor(apple / GOLDENAPPLE_APPLE_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'gold-apple-affordable',
      crafts,
      goldenYield: crafts * GOLDENAPPLE_PER_CRAFT,
      goldLeft: gold - crafts * GOLDENAPPLE_GOLD_PER_CRAFT,
      appleLeft: apple - crafts * GOLDENAPPLE_APPLE_PER_CRAFT,
      golden: 0
    }
  }
  // the honest shortage names its starving leg: the gold priced
  // FIRST - the binding leg at eight-per, the smeltgold lane
  // re-tasks the melt (the ingots this word wraps are the smeltgold
  // word's own yield), never a guessed craft; the apple leg re-tasks
  // the orchard trip (the oak leaves' own drop), never a guessed
  // craft
  if (gold < GOLDENAPPLE_GOLD_PER_CRAFT) {
    return { action: 'defer', reason: 'gold-short', goldLeft: gold, appleLeft: apple, golden: 0, crafts: 0, goldenYield: 0 }
  }
  return { action: 'defer', reason: 'apple-short', goldLeft: gold, appleLeft: apple, golden: 0, crafts: 0, goldenYield: 0 }
}
