// (v0.976.446) Anvil craft decision for the bot fleet.
//
// THE PROBLEM: the toolcare word prices the WORN tool (v0.976.373 the
// care lane's own) and the crossbowcraft word priced the piercer
// (v0.976.444) - but the REPAIR never priced: a bot iron-rich and
// block-rich owns no station while the metal it already carries IS the
// station (3 iron blocks + 4 iron ingots -> 1 anvil, vanilla). The
// anvil is the repair lane's own station - the toolcare word's honest
// answer: the wear priced, now the bench that mends it. THE FIX:
// decideAnvilCraft() prices the STATION POVERTY - one pocket map to
// ONE craft word with ONE reason:
//   'keep'   - an anvil already held (the station never doubles - the
//              pieces-held law's twin)
//   'craft'  - blocks >= 3 AND ingots >= 4 (the SHORTER leg prices the
//              yield, the leftover of BOTH legs named)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the
// toolcraft chain, the armor lane (v0.976.420), the shield lane
// (v0.976.428), the shears lane (v0.976.435), the bucket lane
// (v0.976.436), the rail lane (v0.976.437), the minecart lane
// (v0.976.438), the hopper lane (v0.976.439), the spark lane
// (v0.976.440), the cauldron lane (v0.976.443), the crossbow lane's
// limb-pin leg (v0.976.444), the tripwirehook lane's trigger leg
// (v0.976.445), this word's block leg AND ingot leg - the
// iron economy's THIRTEENTH leg priced, no other lane's face gates
// here.
// THE BLOCK FAMILY LAW: the iron block census rides exact 'iron_block'
// and nothing else - the block IS the smelt yield's own consolidation
// (9 ingots -> 1 block, vanilla), the block's own sub-craft the honest
// future named (the blocks-short bot re-tasks the smelt trip, never a
// guessed craft); the ingot census rides the exact 'iron_ingot' name
// (the shearscraft law). THE STATION FAMILY LAW: the anvil IS a
// singleton station - the census rides exact 'anvil' and nothing else,
// no variant kin (the vanilla anvil splits no kin); the repair word it
// serves is the honest future named, the census never splits and never
// adopts another lane's kin. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused -
// the honesty lives in the clamp. No cap: a leg-rich pocket prices
// every anvil craft it affords, an honest longer yield never clamped.
// The pure read mutates nothing.

// the vanilla block cost one station craft carries (3 blocks shape the body)
export const ANVILCRAFT_BLOCKS_PER_CRAFT = 3
// the vanilla ingot cost one station craft carries (4 ingots base the anvil)
export const ANVILCRAFT_INGOTS_PER_CRAFT = 4
// the vanilla station yield one anvil craft produces
export const ANVILCRAFT_ANVILS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a station craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.anvilCount=0]     anvils already held (the
 *                                          singleton census - exact
 *                                          'anvil')
 * @param {number} [opts.ironBlockCount=0] iron blocks on hand (the
 *                                          body leg, the smelt yield's
 *                                          own consolidation)
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand (the
 *                                          base leg, the furnacecraft
 *                                          chain's own yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, anvilsYield: number, blocksLeft: number, ingotsLeft: number, anvils: number}}
 */
export function decideAnvilCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['anvilCount', 'ironBlockCount', 'ironIngotCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, anvilsYield: 0, blocksLeft: 0, ingotsLeft: 0, anvils: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const blocks = floor0(opts.ironBlockCount)
  const ingots = floor0(opts.ironIngotCount)
  const held = floor0(opts.anvilCount)
  // a station already held: the repair lane's own story - the toolcare
  // word owns the wear, the station economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'anvil-held', blocksLeft: blocks, ingotsLeft: ingots, anvils: held, crafts: 0, anvilsYield: 0 }
  }
  // the pocket's own arithmetic: every block trio plus its ingot
  // quartet prices one station honestly, the SHORTER leg prices the
  // crafts - the word never rounds the yield into a lie and never caps
  // the pocket, the leftover of BOTH legs named.
  if (blocks >= ANVILCRAFT_BLOCKS_PER_CRAFT && ingots >= ANVILCRAFT_INGOTS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(blocks / ANVILCRAFT_BLOCKS_PER_CRAFT), Math.floor(ingots / ANVILCRAFT_INGOTS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'blocks-ingots-affordable',
      crafts,
      anvilsYield: crafts * ANVILCRAFT_ANVILS_PER_CRAFT,
      blocksLeft: blocks - crafts * ANVILCRAFT_BLOCKS_PER_CRAFT,
      ingotsLeft: ingots - crafts * ANVILCRAFT_INGOTS_PER_CRAFT,
      anvils: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the
  // block leg first (the word's own consolidation - 9 ingots -> 1
  // block, vanilla, the sub-craft the honest future named, the smelt
  // trip re-tasks never a guessed craft), the ingot leg second (the
  // raw base - the furnacecraft chain's own yield, the smelt trip the
  // chain re-tasks)
  if (blocks < ANVILCRAFT_BLOCKS_PER_CRAFT) {
    return { action: 'defer', reason: 'blocks-short', blocksLeft: blocks, ingotsLeft: ingots, anvils: 0, crafts: 0, anvilsYield: 0 }
  }
  return { action: 'defer', reason: 'ingots-short', blocksLeft: blocks, ingotsLeft: ingots, anvils: 0, crafts: 0, anvilsYield: 0 }
}
