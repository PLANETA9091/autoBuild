// (v0.976.449) Clock craft decision for the bot fleet.
//
// THE PROBLEM: the craft family priced the wood economy, the glass
// economy's first leg (v0.976.447) and the iron economy THIRTEEN legs
// deep (the toolcraft lane, the armorcraft economy v0.976.420, the
// shield v0.976.428, the shears v0.976.435, the bucket v0.976.436,
// the rail v0.976.437, the minecart v0.976.438, the hopper
// v0.976.439, the spark v0.976.440, the cauldron v0.976.443, the
// tripwire hook v0.976.445, the anvil v0.976.446) - but the TIME
// never priced: a bot gold-rich (the mining trips price the ore)
// brews no time while the metal it already carries IS the timepiece
// (4 gold ingots + 1 redstone dust -> 1 clock, vanilla). The
// nightcare word (v0.976.407) prices the sky's own shadow - the
// cycle rules the fleet, the bot reads it by census alone; a CRAFTED
// clock reads it by item, the pocket's own timepiece. THE FIX:
// decideClockCraft() prices the TIME POVERTY - one pocket map to ONE
// craft word with ONE reason:
//   'keep'   - a clock already held (the timepiece never doubles -
//              the pieces-held law's twin, the craft family's own
//              keep gate)
//   'craft'  - gold >= 4 AND redstone >= 1 (the shorter leg prices
//              the yield, the leftover of BOTH legs named, never
//              capped)
//   'defer'  - gold-short the mining trip re-tasks / redstone-short
//              the deep-mining trip's own yield, the honest shortage
//              named
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the gold consumers are separate lanes - this
// word's timepiece leg is the GOLD ECONOMY'S FIRST PRICED LEG (no
// goldcraft word rode before it); the redstone consumers separate -
// the dust leg the REDSTONE ECONOMY'S FIRST PRICED LEG. A bot
// holding spare gold it does not want still earns its clock if the
// legs afford them, no other lane's face gates here. THE CLOCK
// FAMILY LAW: the clock IS a singleton timepiece - the census rides
// exact 'clock' and nothing else; the COMPASS is the navigation
// lane's own future (the other word's honest future named, never
// adopted here); the gold census rides exact 'gold_ingot' - the
// ore, the raw gold, the nugget ARE the smelt trip's own
// consolidation forms, never item kin; the redstone census rides
// exact 'redstone' - the dust's own name, the block, the torch, the
// repeater ARE the redstone lane's own kin, the census never splits
// a family and never adopts another lane's kin. Junk inputs never
// throw: they return a refuse with the junk-input reason so a caller
// bug degrades into a log line, not a crash loop. Negative counts
// floor to zero (a lying census must not poison the arithmetic);
// they are read, not refused - the honesty lives in the clamp. No
// cap: a gold-rich pocket prices every clock it affords, an honest
// longer yield never clamped. The pure read mutates nothing.

// the vanilla gold cost one clock craft carries (4 ingots ring the
// timepiece)
export const CLOCKCRAFT_GOLD_PER_CRAFT = 4
// the vanilla redstone cost one clock craft carries (1 dust sets the
// hands)
export const CLOCKCRAFT_REDSTONE_PER_CRAFT = 1
// the vanilla timepiece yield one clock craft produces
export const CLOCKCRAFT_CLOCKS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a clock craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.clockCount=0]          clocks already held (the
 *                                              singleton census - exact
 *                                              'clock')
 * @param {number} [opts.goldIngotCount=0]      gold ingots on hand
 * @param {number} [opts.redstoneDustCount=0]   redstone dust on hand
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, clocksYield: number, goldLeft: number, redstoneLeft: number, clocks: number}}
 */
export function decideClockCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['clockCount', 'goldIngotCount', 'redstoneDustCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, clocksYield: 0, goldLeft: 0, redstoneLeft: 0, clocks: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const clocks = floor0(opts.clockCount)
  const gold = floor0(opts.goldIngotCount)
  const redstone = floor0(opts.redstoneDustCount)
  // a timepiece already held: the pocket's own clock is the time
  // lane's story - the cycle reads by item, the timepiece economy
  // stays silent (the pieces-held law's twin, the craft family's own
  // keep gate).
  if (clocks >= 1) {
    return { action: 'keep', reason: 'clock-held', goldLeft: gold, redstoneLeft: redstone, clocks, crafts: 0, clocksYield: 0 }
  }
  // the pocket's own arithmetic: every four ingots + one dust price
  // their timepiece honestly - the SHORTER leg prices the yield (the
  // bowcraft law), the leftover of both legs named, the caller picks
  // how many clocks the time lane needs - the word never rounds the
  // yield into a lie and never caps the pocket.
  if (gold >= CLOCKCRAFT_GOLD_PER_CRAFT && redstone >= CLOCKCRAFT_REDSTONE_PER_CRAFT) {
    const crafts = Math.min(
      Math.floor(gold / CLOCKCRAFT_GOLD_PER_CRAFT),
      Math.floor(redstone / CLOCKCRAFT_REDSTONE_PER_CRAFT)
    )
    return {
      action: 'craft',
      reason: 'gold-redstone-affordable',
      crafts,
      clocksYield: crafts * CLOCKCRAFT_CLOCKS_PER_CRAFT,
      goldLeft: gold - crafts * CLOCKCRAFT_GOLD_PER_CRAFT,
      redstoneLeft: redstone - crafts * CLOCKCRAFT_REDSTONE_PER_CRAFT,
      clocks: 0
    }
  }
  // gold-poor: the honest shortage names the four-ingot leg's own
  // floor price - the mining trip the caller re-tasks, never a
  // guessed craft
  if (gold < CLOCKCRAFT_GOLD_PER_CRAFT) {
    return { action: 'defer', reason: 'gold-short', goldLeft: gold, redstoneLeft: redstone, clocks: 0, crafts: 0, clocksYield: 0 }
  }
  // redstone-poor and clock-poor: the one-dust leg's own floor price
  // - the deep-mining trip's own yield re-tasks, never a guessed
  // craft
  return { action: 'defer', reason: 'redstone-short', goldLeft: gold, redstoneLeft: redstone, clocks: 0, crafts: 0, clocksYield: 0 }
}
