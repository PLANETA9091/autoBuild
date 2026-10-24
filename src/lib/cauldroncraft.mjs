// (v0.976.443) Cauldron craft decision for the bot fleet.
//
// THE PROBLEM: the iron economy priced nine legs deep - the toolcraft
// lane (the pick itself), the armorcraft economy (v0.976.420), the
// shield leg (v0.976.428), the shears leg (v0.976.435), the bucket leg
// (v0.976.436), the rail leg (v0.976.437), the minecart leg
// (v0.976.438), the hopper leg (v0.976.439), the spark leg
// (v0.976.440) - but the BOIL never priced: a bot iron-rich (>= 7
// ingots) brews nothing, washes nothing, douses nothing while the
// metal it already carries IS the cauldron (7 iron ingots -> 1
// cauldron, vanilla). The cauldron is the boil lane's own word - the
// water holds, the bottles dip, the potion lane's future its own
// story. THE FIX: decideCauldronCraft() prices the BOIL POVERTY - one
// pocket map to ONE craft word with ONE reason:
//   'keep'   - a cauldron already held (the boil lane owns that story
//              - the pot never doubles)
//   'craft'  - iron >= 7 (the pocket's own arithmetic, the remainder
//              named, never capped)
//   'defer'  - iron-short, the honest shortage named
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the
// toolcraft lane, the armorcraft lane (v0.976.420), the shield lane
// (v0.976.428), the shears lane (v0.976.435), the bucket lane
// (v0.976.436), the rail lane (v0.976.437), the minecart lane
// (v0.976.438), the hopper lane (v0.976.439), the spark lane
// (v0.976.440), this word's boil leg - a bot holding spare iron it
// does not want still earns its pot if the legs afford them, no other
// lane's face gates here. THE CAULDRON FAMILY LAW: the cauldron IS a
// singleton pot - the census rides exact 'cauldron' and nothing else;
// the water, the lava, the powder snow inside ARE the cauldron's own
// contents (block states, never item kin), the census never splits a
// family and never adopts another lane's kin. Junk inputs never
// throw: they return a refuse with the junk-input reason so a caller
// bug degrades into a log line, not a crash loop. Negative counts
// floor to zero (a lying census must not poison the arithmetic); they
// are read, not refused - the honesty lives in the clamp. No cap: an
// iron-rich pocket prices every pot it affords, an honest longer
// yield never clamped. The pure read mutates nothing.

// the vanilla iron cost one pot craft carries (7 ingots bend the pot)
export const CAULDRONCRAFT_IRON_PER_CRAFT = 7
// the vanilla pot yield one cauldron craft produces
export const CAULDRONCRAFT_CAULDRONS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a pot craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.cauldronCount=0] cauldrons already held (the
 *                                        singleton census - exact
 *                                        'cauldron')
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, cauldronsYield: number, ironSurplus: number, cost: number}}
 */
export function decideCauldronCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['cauldronCount', 'ironIngotCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, cauldronsYield: 0, ironSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const cauldrons = floor0(opts.cauldronCount)
  const iron = floor0(opts.ironIngotCount)
  // a pot already held: the boil lane's own story - the water holds,
  // the potion lane's future rides its own word, the pot economy stays
  // silent (the pieces-held law's twin, the craft family's own keep
  // gate).
  if (cauldrons >= 1) {
    return { action: 'keep', reason: 'cauldron-held', crafts: 0, cauldronsYield: 0, ironSurplus: iron, cost: 0 }
  }
  // the pocket's own arithmetic: every seven ingots price their pot
  // honestly, the caller picks how many pots the boil lane needs - the
  // word never rounds the yield into a lie and never caps the pocket.
  if (iron >= CAULDRONCRAFT_IRON_PER_CRAFT) {
    const crafts = Math.floor(iron / CAULDRONCRAFT_IRON_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'iron-affordable',
      crafts,
      cauldronsYield: crafts * CAULDRONCRAFT_CAULDRONS_PER_CRAFT,
      ironSurplus: iron % CAULDRONCRAFT_IRON_PER_CRAFT,
      cost: CAULDRONCRAFT_IRON_PER_CRAFT
    }
  }
  // iron-poor and pot-poor: the honest shortage names the one craft's
  // own floor price - the smelt trip the furnacecraft chain re-tasks,
  // never a guessed craft
  return { action: 'defer', reason: 'iron-short', crafts: 0, cauldronsYield: 0, ironSurplus: iron, cost: CAULDRONCRAFT_IRON_PER_CRAFT }
}
