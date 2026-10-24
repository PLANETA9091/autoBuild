// (v0.976.440) Flint and steel craft decision for the bot fleet.
//
// THE PROBLEM: the iron economy priced eight legs deep - the toolcraft
// lane (the pick itself), the armorcraft economy (v0.976.420), the
// shield leg (v0.976.428), the shears leg (v0.976.435), the bucket leg
// (v0.976.436), the rail leg (v0.976.437), the minecart leg
// (v0.976.438), the hopper leg (v0.976.439) - but the FIRE never
// priced: a bot iron-rich (>= 1 ingot) and flint-rich (>= 1) carries
// no spark while the metal and the stone it already carries ARE the
// spark (1 iron ingot + 1 flint -> 1 flint and steel, vanilla). The
// flint and steel is the fire lane's own word - the furnacecraft chain
// smelts the metal, this word's spark lights the fires, the portal
// frame the night word's own door. THE FIX: decideFlintAndSteelCraft()
// prices the SPARK POVERTY - one pocket map to ONE craft word with ONE
// reason:
//   'keep'   - a flint and steel already held (the fire lane owns that
//              story - the spark never doubles)
//   'craft'  - iron >= 1 AND flint >= 1 (the SHORTER leg prices the
//              yield, the leftover of BOTH legs named)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the
// toolcraft lane, the armorcraft lane (the armor economy v0.976.420),
// the shield lane (the defense leg v0.976.428), the shears lane (the
// shepherd leg v0.976.435), the bucket lane (the carry leg
// v0.976.436), the rail lane (the track leg v0.976.437), the minecart
// lane (the carrier leg v0.976.438), the hopper lane (the cargo mouth
// leg v0.976.439), this word's spark leg - a bot holding spare iron it
// does not want still earns its spark if the legs afford them, no
// other lane's face gates here. The flint consumers are separate lanes
// too - the arrow lane the fletcher's own story (a word not yet
// priced, the honest future named), this word's spark leg. THE SPARK
// FAMILY LAW: the flint and steel IS a singleton tool - the census
// rides exact 'flint_and_steel' and nothing else, no variant kin, the
// census never splits and never adopts another lane's kin. Junk inputs
// never throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a leg-rich pocket prices every spark craft it
// affords, an honest longer yield never clamped. The pure read
// mutates nothing.

// the vanilla iron cost one spark craft carries (1 iron -> 1 flint and steel)
export const FLINTANDSTEELCRAFT_IRON_PER_CRAFT = 1
// the vanilla flint cost one spark craft carries (1 flint strikes the iron)
export const FLINTANDSTEELCRAFT_FLINT_PER_CRAFT = 1
// the vanilla tool yield one spark craft produces
export const FLINTANDSTEELCRAFT_TOOLS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a spark craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.flintAndSteelCount=0] flint and steels already
 *                                              held (the singleton census
 *                                              - exact 'flint_and_steel')
 * @param {number} [opts.ironIngotCount=0]     iron ingots on hand
 * @param {number} [opts.flintCount=0]         flint on hand (the gravel
 *                                              trip's own yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, toolsYield: number, ironLeft: number, flintLeft: number, tools: number}}
 */
export function decideFlintAndSteelCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['flintAndSteelCount', 'ironIngotCount', 'flintCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, toolsYield: 0, ironLeft: 0, flintLeft: 0, tools: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const iron = floor0(opts.ironIngotCount)
  const flint = floor0(opts.flintCount)
  const held = floor0(opts.flintAndSteelCount)
  // a spark already held: the fire lane's own story - the furnacecraft
  // chain owns the smelting, the spark economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'flint-and-steel-held', ironLeft: iron, flintLeft: flint, tools: held, crafts: 0, toolsYield: 0 }
  }
  // the pocket's own arithmetic: every ingot plus its flint price one
  // spark honestly, the SHORTER leg prices the crafts - the word never
  // rounds the yield into a lie and never caps the pocket, the leftover
  // of BOTH legs named.
  if (iron >= FLINTANDSTEELCRAFT_IRON_PER_CRAFT && flint >= FLINTANDSTEELCRAFT_FLINT_PER_CRAFT) {
    const crafts = Math.min(Math.floor(iron / FLINTANDSTEELCRAFT_IRON_PER_CRAFT), Math.floor(flint / FLINTANDSTEELCRAFT_FLINT_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'iron-flint-affordable',
      crafts,
      toolsYield: crafts * FLINTANDSTEELCRAFT_TOOLS_PER_CRAFT,
      ironLeft: iron - crafts * FLINTANDSTEELCRAFT_IRON_PER_CRAFT,
      flintLeft: flint - crafts * FLINTANDSTEELCRAFT_FLINT_PER_CRAFT,
      tools: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the iron
  // leg first (the word's own base metal - the spark IS the iron struck,
  // the smelt trip the furnacecraft chain re-tasks, never a guessed
  // craft), the flint leg second (the gravel trip's own yield - the
  // ground surrenders the stone, never a guessed craft)
  if (iron < FLINTANDSTEELCRAFT_IRON_PER_CRAFT) {
    return { action: 'defer', reason: 'iron-short', ironLeft: iron, flintLeft: flint, tools: 0, crafts: 0, toolsYield: 0 }
  }
  return { action: 'defer', reason: 'flint-short', ironLeft: iron, flintLeft: flint, tools: 0, crafts: 0, toolsYield: 0 }
}
