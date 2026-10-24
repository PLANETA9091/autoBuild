// (v0.976.452) Stair craft decision for the bot fleet.
//
// THE PROBLEM: the slab word (.450) paved the gentle half-height step,
// but a full BLOCK rise still needs the jump the walk lane taxes - the
// stairs are the path lane's own stepped face, the climb the descent
// rides without the hop. The bots stay cobble-rich (the tithe rides
// the filter) and stair-poor: 6 cobblestone in the stair pattern -> 4
// stairs (vanilla - the six price the four, every block bought twice).
// THE FIX: decideStairCraft() prices the STAIR POVERTY - one pocket
// map to ONE craft word with ONE reason, the slabcraft word's own kin:
//   'keep'   - a stair already held (the climb owns that story)
//   'craft'  - cobblestone >= 6 (the crafts the pocket affords, the
//              honest yield)
//   'defer'  - cobblestone short of one craft (the honest shortage -
//              the quarry trip the caller re-tasks to, never a guessed
//              craft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE COBBLE FAMILY LAW: the cobble census rides exact 'cobblestone'
// and nothing else - cobbled_deepslate is the deepslate lane's own
// form, the census never splits and never adopts another lane's kin
// (the shearscraft law, the slab word's own reading). THE STAIR FAMILY
// LAW: the stair census rides exact 'cobblestone_stairs' and nothing
// else - the stone stairs, the mossy, the brick, the deepslate are
// other lanes' own forms, no variant kin adopted; the SLAB is the slab
// lane's own half-height story, never a stair - the kin words read
// their own names only. THE CONSUMER LAW: the cobble consumers are
// separate lanes - the slab lane (the paving's own word), the furnace
// lane (the station's own word), this word's climb leg - a bot holding
// cobble it does not want still earns its stairs if the cobble affords
// it, no other lane's face gates here. Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: a cobble-rich
// pocket prices every stair craft it affords, an honest longer yield
// list never clamped.

// the vanilla cobble cost one stair craft carries (6 cobble -> 4 stairs)
export const STAIRCRAFT_COBBLE_PER_CRAFT = 6
// the vanilla stair yield one stair craft produces
export const STAIRCRAFT_STAIRS_PER_CRAFT = 4

/**
 * Decide whether one bot's pocket earns a stair craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.stairCount=0]   cobblestone stairs already held (the
 *                                       climb lane's own story rides the
 *                                       keep gate)
 * @param {number} [opts.cobbleCount=0]  cobblestone on hand (the exact
 *                                       'cobblestone' name, the tithe)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, stairsYield: number, cobbleSurplus: number, cost: number}}
 */
export function decideStairCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['stairCount', 'cobbleCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, stairsYield: 0, cobbleSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const stairs = floor0(opts.stairCount)
  const cobble = floor0(opts.cobbleCount)
  // a stair already held: the climb lane's own story - the walk lane
  // prices the rise, the stair economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (stairs >= 1) {
    return { action: 'keep', reason: 'stair-held', crafts: 0, stairsYield: 0, cobbleSurplus: cobble, cost: 0 }
  }
  // the pocket's own arithmetic: every six cobble price four stairs
  // honestly, the caller picks how many stair crafts the climb needs -
  // the word never rounds the yield into a lie and never caps the
  // pocket.
  if (cobble >= STAIRCRAFT_COBBLE_PER_CRAFT) {
    const crafts = Math.floor(cobble / STAIRCRAFT_COBBLE_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'cobble-affordable',
      crafts,
      stairsYield: crafts * STAIRCRAFT_STAIRS_PER_CRAFT,
      cobbleSurplus: cobble % STAIRCRAFT_COBBLE_PER_CRAFT,
      cost: STAIRCRAFT_COBBLE_PER_CRAFT
    }
  }
  // cobble-poor and stair-poor: the honest shortage names the one
  // craft's own floor price - the quarry trip the caller re-tasks to,
  // never a guessed craft
  return { action: 'defer', reason: 'cobble-short', crafts: 0, stairsYield: 0, cobbleSurplus: cobble, cost: STAIRCRAFT_COBBLE_PER_CRAFT }
}
