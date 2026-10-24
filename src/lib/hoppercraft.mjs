// (v0.976.439) Hopper craft decision for the bot fleet.
//
// THE PROBLEM: the railcraft word prices the iron's own TRACK
// (v0.976.437) and the minecartcraft word the track's own CARRIER
// (v0.976.438) - but the transport line's own CARGO MOUTH never
// priced: a bot iron-rich (>= 5 ingots) and chest-rich (>= 1) drops
// every load on the ground while the metal and the box it already
// carries ARE the mouth (5 iron ingots + 1 chest -> 1 hopper,
// vanilla). The hopper is the cargo lane's own word - the track
// priced, the cart priced, the load's own receiver the pocket
// already affords, the transport line priced three words deep. THE
// FIX: decideHopperCraft() prices the MOUTH POVERTY - one pocket map
// to ONE craft word with ONE reason:
//   'keep'   - a hopper already held (the cargo lane owns that story)
//   'craft'  - iron >= 5 AND chests >= 1 (the SHORTER leg prices the
//              yield, the leftover of BOTH legs named)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the
// toolcraft lane (the pick itself), the armorcraft lane (the armor
// economy v0.976.420), the shield lane (the defense leg v0.976.428),
// the shears lane (the shepherd leg v0.976.435), the bucket lane (the
// carry leg v0.976.436), the rail lane (the track leg v0.976.437),
// the minecart lane (the carrier leg v0.976.438), this word's cargo
// mouth leg - a bot holding spare iron it does not want still earns
// its hopper if the legs afford them, no other lane's face gates
// here. The chest consumers are separate lanes too - the storage lane
// the chestcraft chain's own story (v0.976.424), this word's mouth
// leg. THE HOPPER FAMILY LAW: the plain hopper IS the cargo lane's
// own story - the census rides exact 'hopper' and nothing else: the
// hopper_minecart rides the CARRIER lane's own census (the
// minecartcraft family law v0.976.438 prices every *_minecart), the
// lanes never cross, the census never splits a family and never
// adopts another lane's kin. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: a leg-rich pocket prices
// every hopper craft it affords, an honest longer yield never
// clamped. The pure read mutates nothing.

// the vanilla iron cost one hopper craft carries (5 iron -> 1 hopper)
export const HOPPERCRAFT_IRON_PER_CRAFT = 5
// the vanilla chest cost one hopper craft carries (1 chest feeds the mouth)
export const HOPPERCRAFT_CHESTS_PER_CRAFT = 1
// the vanilla hopper yield one hopper craft produces
export const HOPPERCRAFT_HOPPERS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a hopper craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.hopperCount=0]    hoppers already held (the plain
 *                                          hopper - the cargo lane's own
 *                                          census rides exact 'hopper',
 *                                          the carrier lane's family law
 *                                          owns every *_minecart)
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand
 * @param {number} [opts.chestCount=0]     chests on hand (the chestcraft
 *                                          chain's own output)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, hoppersYield: number, ironLeft: number, chestLeft: number, hoppers: number}}
 */
export function decideHopperCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['hopperCount', 'ironIngotCount', 'chestCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, hoppersYield: 0, ironLeft: 0, chestLeft: 0, hoppers: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const iron = floor0(opts.ironIngotCount)
  const chests = floor0(opts.chestCount)
  const held = floor0(opts.hopperCount)
  // a hopper already held: the cargo lane's own story - the mouth is
  // being fed, the hopper economy stays silent (the pieces-held law's
  // twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'hopper-held', ironLeft: iron, chestLeft: chests, hoppers: held, crafts: 0, hoppersYield: 0 }
  }
  // the pocket's own arithmetic: every five ingots plus their chest
  // price one hopper honestly, the SHORTER leg prices the crafts -
  // the word never rounds the yield into a lie and never caps the
  // pocket, the leftover of BOTH legs named.
  if (iron >= HOPPERCRAFT_IRON_PER_CRAFT && chests >= HOPPERCRAFT_CHESTS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(iron / HOPPERCRAFT_IRON_PER_CRAFT), Math.floor(chests / HOPPERCRAFT_CHESTS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'iron-chest-affordable',
      crafts,
      hoppersYield: crafts * HOPPERCRAFT_HOPPERS_PER_CRAFT,
      ironLeft: iron - crafts * HOPPERCRAFT_IRON_PER_CRAFT,
      chestLeft: chests - crafts * HOPPERCRAFT_CHESTS_PER_CRAFT,
      hoppers: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the iron
  // leg first (the word's own base metal - the mouth IS the iron around
  // the box, the smelt trip the furnacecraft chain re-tasks, never a
  // guessed craft), the chest leg second (the craft-made box the
  // chestcraft chain's own word v0.976.424 re-tasks)
  if (iron < HOPPERCRAFT_IRON_PER_CRAFT) {
    return { action: 'defer', reason: 'iron-short', ironLeft: iron, chestLeft: chests, hoppers: 0, crafts: 0, hoppersYield: 0 }
  }
  return { action: 'defer', reason: 'chest-short', ironLeft: iron, chestLeft: chests, hoppers: 0, crafts: 0, hoppersYield: 0 }
}
