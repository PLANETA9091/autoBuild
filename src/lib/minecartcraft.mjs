// (v0.976.438) Minecart craft decision for the bot fleet.
//
// THE PROBLEM: the railcraft word prices the iron's own TRACK
// (v0.976.437, 6 iron + 1 stick -> 16 rails) - but the track's own
// CARRIER never priced: a bot iron-rich (>= 5 ingots) rides no cart
// while the metal it already carries IS the cart (5 iron ingots -> 1
// minecart, vanilla). The minecart is the transport leg's own rider -
// the track priced, the cart the pocket already affords, the ground
// the fleet walks priced into a ride twice. THE FIX:
// decideMinecartCraft() prices the CART POVERTY - one pocket map to
// ONE craft word with ONE reason:
//   'keep'   - a minecart already held (the carrier lane owns that story)
//   'craft'  - iron >= 5 (the crafts the pocket affords, the honest yield)
//   'defer'  - iron short of one craft (the honest shortage)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the
// toolcraft lane (the pick itself), the armorcraft lane (the armor
// economy v0.976.420), the shield lane (the defense leg v0.976.428),
// the shears lane (the shepherd leg v0.976.435), the bucket lane (the
// carry leg v0.976.436), the rail lane (the track leg v0.976.437),
// this word's carrier leg - a bot holding spare iron it does not want
// still earns its cart if the iron affords it, no other lane's face
// gates here. THE MINECART FAMILY LAW: the plain minecart and every
// minecart variant (chest, furnace, hopper, tnt) ARE the carrier
// lane's own story - the census rides its own family (exact
// 'minecart' + every *_minecart), the census never splits. Junk
// inputs never throw: they return a refuse with the junk-input reason
// so a caller bug degrades into a log line, not a crash loop.
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: an iron-rich pocket prices every cart craft it
// affords, an honest longer yield never clamped. The pure read
// mutates nothing.

// the vanilla iron cost one minecart craft carries (5 iron -> 1 minecart)
export const MINECARTCRAFT_IRON_PER_CRAFT = 5
// the vanilla minecart yield one minecart craft produces
export const MINECARTCRAFT_MINECARTS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a minecart craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.minecartCount=0] minecarts already held, the family
 *                                        census (exact 'minecart' + every
 *                                        *_minecart - the carrier lane's
 *                                        own story rides the keep gate)
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand (the spare
 *                                        pocket past the tool-reserve law)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, minecartsYield: number, ironSurplus: number, cost: number}}
 */
export function decideMinecartCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['minecartCount', 'ironIngotCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, minecartsYield: 0, ironSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const minecarts = floor0(opts.minecartCount)
  const iron = floor0(opts.ironIngotCount)
  // a minecart already held: the carrier lane's own story - the track
  // word prices the road, the cart economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (minecarts >= 1) {
    return { action: 'keep', reason: 'minecart-held', crafts: 0, minecartsYield: 0, ironSurplus: iron, cost: 0 }
  }
  // the pocket's own arithmetic: every five iron price one cart
  // honestly, the caller picks how many cart crafts the ride needs -
  // the word never rounds the yield into a lie and never caps the
  // pocket.
  if (iron >= MINECARTCRAFT_IRON_PER_CRAFT) {
    const crafts = Math.floor(iron / MINECARTCRAFT_IRON_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'iron-affordable',
      crafts,
      minecartsYield: crafts * MINECARTCRAFT_MINECARTS_PER_CRAFT,
      ironSurplus: iron % MINECARTCRAFT_IRON_PER_CRAFT,
      cost: MINECARTCRAFT_IRON_PER_CRAFT
    }
  }
  // iron-poor and cart-poor: the honest shortage names the one craft's
  // own floor price - the smelt trip the caller re-tasks to, never a
  // guessed craft
  return { action: 'defer', reason: 'iron-short', crafts: 0, minecartsYield: 0, ironSurplus: iron, cost: MINECARTCRAFT_IRON_PER_CRAFT }
}
