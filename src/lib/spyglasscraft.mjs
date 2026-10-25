// (v0.976.457) Spyglass craft decision for the bot fleet.
//
// THE PROBLEM: the copper economy's demand side spoke twice (the
// lightningrod word v0.976.456 - the storm lane's first consumer leg)
// and its SPYGLASS LAW NAMED the amethyst lane's own future - the
// SPYGLASS (2 copper ingots + 1 amethyst shard, vanilla) - but the
// LOOKING never priced: a bot copper-rich walks by census alone while
// the metal it already carries IS half the spyglass, and the shard the
// geode trip drops completes the tube (2 copper ingots + 1 amethyst
// shard -> 1 spyglass, vanilla). The spyglass reads the horizon - a
// CRAFTED spyglass gives the watch lane its own instrument the way the
// compass gives the anchor, the clock the hour and the rod the storm.
// THE FIX: decideSpyglassCraft() prices the SPYGLASS POVERTY - one
// pocket map to ONE craft word with ONE reason:
//   'keep'   - a spyglass already held (the watch lane's own
//              instrument never doubles - the pieces-held law's twin,
//              the craft family's own keep gate)
//   'craft'  - copper >= 2 AND shard >= 1 (the min law binds BOTH
//              legs - the clockcraft word's own two-legged reading:
//              every two ingots and one shard price their tube
//              honestly - the floor law, the leftovers named, never
//              capped)
//   'defer'  - shard-short OR copper-short (the honest shortage names
//              its starving leg - the shard priced FIRST, the rarer
//              leg: the amethyst trip owns that story; the copper leg
//              re-tasks the smeltcopper lane's own smelt trip, never a
//              guessed craft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW CONTINUED: the lightningrod word's SPYGLASS LAW
// NAMED this lane and never priced it; this word PRICES what the law
// named - the naming chain the family's own (the clockcraft word named
// the compasscraft word, the smeltraw word named the smeltcopper word,
// the smeltcopper word named the lightningrod word, the lightningrod
// word names this one). The spyglass leg is the COPPER ECONOMY'S
// SECOND CONSUMER LEG (the consolidation the supply, the rod the
// storm's demand, the spyglass the watch's demand) and the AMETHYST
// ECONOMY'S FIRST PRICED LEG (the shard's own demand word). A bot
// holding spare copper it does not want still earns its spyglass if
// the pocket affords it, no other lane's face gates here. THE
// SPYGLASS FAMILY LAW: the census rides exact 'spyglass' and nothing
// else - vanilla has no spyglass kin; the ingot census rides exact
// 'copper_ingot' (the copper family law the kin words share - the
// COPPER BLOCK, the CUT COPPER, the RAW COPPER are the storage and
// mining lanes' own forms, never adopted); the shard census rides
// exact 'amethyst_shard' - the AMETHYST BLOCK and the BUDDING
// AMETHYST are the storage and mining lanes' own placement forms, the
// census never splits and never adopts another lane's kin (the
// shearscraft law). Junk inputs never throw: they return a refuse with
// the junk-input reason so a caller bug degrades into a log line, not
// a crash loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a copper-rich shard-rich pocket prices
// every spyglass it affords, an honest longer yield list never
// clamped - the min law's own ceiling is the RARER leg's, the word
// never rounds the yield into a lie. The pure read mutates nothing.

// the vanilla copper cost one spyglass craft carries (two ingots read
// the tube)
export const SPYGLASS_COPPER_PER_CRAFT = 2
// the vanilla shard cost one spyglass craft carries (the geode's own
// tithe)
export const SPYGLASS_SHARD_PER_CRAFT = 1
// the vanilla spyglass yield one spyglass craft produces
export const SPYGLASS_SPYGLASSES_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a spyglass craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.spyglassCount=0]     spyglasses already held
 *                                            (the exact 'spyglass'
 *                                            name)
 * @param {number} [opts.copperIngotCount=0]  copper ingots on hand
 *                                            (the exact 'copper_ingot'
 *                                            name, the smeltcopper
 *                                            word's own yield)
 * @param {number} [opts.shardCount=0]        amethyst shards on hand
 *                                            (the exact
 *                                            'amethyst_shard' name,
 *                                            the geode trip's own
 *                                            drop)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, spyglassesYield: number, copperLeft: number, shardLeft: number, spyglasses: number}}
 */
export function decideSpyglassCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['spyglassCount', 'copperIngotCount', 'shardCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, spyglassesYield: 0, copperLeft: 0, shardLeft: 0, spyglasses: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const spyglasses = floor0(opts.spyglassCount)
  const copper = floor0(opts.copperIngotCount)
  const shard = floor0(opts.shardCount)
  // a spyglass already held: the watch lane's own story - the horizon
  // reads by item, the spyglass economy stays silent (the pieces-held
  // law's twin, the craft family's own keep gate).
  if (spyglasses >= 1) {
    return { action: 'keep', reason: 'spyglass-held', copperLeft: copper, shardLeft: shard, spyglasses, crafts: 0, spyglassesYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // clockcraft word's own two-legged reading. Every two ingots and one
  // shard price their tube honestly - the floor law prices the yield,
  // the leftovers named, the caller picks how many spyglasses the
  // watch lane needs - the word never rounds the yield into a lie and
  // never caps the pocket.
  const crafts = Math.min(
    Math.floor(copper / SPYGLASS_COPPER_PER_CRAFT),
    Math.floor(shard / SPYGLASS_SHARD_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'copper-shard-affordable',
      crafts,
      spyglassesYield: crafts * SPYGLASS_SPYGLASSES_PER_CRAFT,
      copperLeft: copper - crafts * SPYGLASS_COPPER_PER_CRAFT,
      shardLeft: shard - crafts * SPYGLASS_SHARD_PER_CRAFT,
      spyglasses: 0
    }
  }
  // the honest shortage names its starving leg: the shard priced
  // FIRST - the rarer leg, the amethyst trip owns that story; the
  // copper leg re-tasks the smeltcopper lane's own smelt trip, never a
  // guessed craft
  if (shard < SPYGLASS_SHARD_PER_CRAFT) {
    return { action: 'defer', reason: 'shard-short', copperLeft: copper, shardLeft: shard, spyglasses: 0, crafts: 0, spyglassesYield: 0 }
  }
  return { action: 'defer', reason: 'copper-short', copperLeft: copper, shardLeft: shard, spyglasses: 0, crafts: 0, spyglassesYield: 0 }
}
