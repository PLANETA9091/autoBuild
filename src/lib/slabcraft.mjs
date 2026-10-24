// (v0.976.450) Slab craft decision for the bot fleet.
//
// THE PROBLEM: the bots are cobble-rich (the cobble tithe rides the
// filter, the quarry's own tithe) and slab-poor, while the WALK lane
// rides 1-block steps the jump taxes - the paving's own parts sit in
// the pocket and the path never paved. The bottom slab IS the
// walkable surface: the half-height step the climb takes without the
// jump, the gentler slope the walkOnce loop rides smoother. 3
// cobblestone in a row -> 6 slabs (vanilla - the row of three prices
// the six). THE FIX: decideSlabCraft() prices the SLAB POVERTY - one
// pocket map to ONE craft word with ONE reason:
//   'keep'   - a slab already held (the path lane owns that story)
//   'craft'  - cobblestone >= 3 (the crafts the pocket affords, the
//              honest yield)
//   'defer'  - cobblestone short of one craft (the honest shortage -
//              the quarry trip the caller re-tasks to, never a guessed
//              craft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE COBBLE FAMILY LAW: the cobble census rides exact 'cobblestone'
// and nothing else - cobbled_deepslate is the deepslate lane's own
// form, the census never splits and never adopts another lane's kin
// (the shearscraft law). THE SLAB FAMILY LAW: the slab census rides
// exact 'cobblestone_slab' and nothing else - the stone slab, the
// mossy, the brick, the deepslate are other lanes' own forms, the
// census never splits and never adopts another lane's kin. THE
// CONSUMER LAW: the cobble consumers are separate lanes - the furnace
// lane (the station's own word), this word's paving leg - a bot
// holding cobble it does not want still earns its slabs if the cobble
// affords it, no other lane's face gates here. Junk inputs never
// throw: they return a refuse with the junk-input reason so a caller
// bug degrades into a log line, not a crash loop. Negative counts
// floor to zero (a lying census must not poison the arithmetic); they
// are read, not refused - the honesty lives in the clamp. No cap: a
// cobble-rich pocket prices every slab craft it affords, an honest
// longer yield list never clamped.

// the vanilla cobble cost one slab craft carries (3 cobble -> 6 slabs)
export const SLABCRAFT_COBBLE_PER_CRAFT = 3
// the vanilla slab yield one slab craft produces
export const SLABCRAFT_SLABS_PER_CRAFT = 6

/**
 * Decide whether one bot's pocket earns a slab craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.slabCount=0]    cobblestone slabs already held (the
 *                                       path lane's own story rides the
 *                                       keep gate)
 * @param {number} [opts.cobbleCount=0]  cobblestone on hand (the exact
 *                                       'cobblestone' name, the tithe)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, slabsYield: number, cobbleSurplus: number, cost: number}}
 */
export function decideSlabCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['slabCount', 'cobbleCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, slabsYield: 0, cobbleSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const slabs = floor0(opts.slabCount)
  const cobble = floor0(opts.cobbleCount)
  // a slab already held: the path lane's own story - the walk lane
  // prices the steps, the paving economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (slabs >= 1) {
    return { action: 'keep', reason: 'slab-held', crafts: 0, slabsYield: 0, cobbleSurplus: cobble, cost: 0 }
  }
  // the pocket's own arithmetic: every three cobble price six slabs
  // honestly, the caller picks how many slab crafts the path needs -
  // the word never rounds the yield into a lie and never caps the
  // pocket.
  if (cobble >= SLABCRAFT_COBBLE_PER_CRAFT) {
    const crafts = Math.floor(cobble / SLABCRAFT_COBBLE_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'cobble-affordable',
      crafts,
      slabsYield: crafts * SLABCRAFT_SLABS_PER_CRAFT,
      cobbleSurplus: cobble % SLABCRAFT_COBBLE_PER_CRAFT,
      cost: SLABCRAFT_COBBLE_PER_CRAFT
    }
  }
  // cobble-poor and slab-poor: the honest shortage names the one
  // craft's own floor price - the quarry trip the caller re-tasks to,
  // never a guessed craft
  return { action: 'defer', reason: 'cobble-short', crafts: 0, slabsYield: 0, cobbleSurplus: cobble, cost: SLABCRAFT_COBBLE_PER_CRAFT }
}
