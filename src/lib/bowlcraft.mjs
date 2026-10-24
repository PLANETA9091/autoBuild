// (v0.976.434) Bowl craft decision for the bot fleet.
//
// THE PROBLEM: the foodcare word prices the hunger bar (v0.976.391,
// the care lane's third sibling) but the EATING act's own dish never
// priced - the food lane's first craft word. The bots plank-rich
// (>= 3 planks) and bowl-poor carry the dish's own parts while the
// planks they already hold ARE the dish (3 planks -> 4 bowls,
// vanilla - the V shape three planks price). The bowl is the pocket's
// own door to the cooked-food economy: mushroom stew (bowl + the
// mushrooms the dark deals), the survival food no animal kill asks.
// THE FIX: decideBowlCraft() prices the BOWL POVERTY - one pocket map
// to ONE craft word with ONE reason:
//   'keep'   - a bowl already held (the dish lane owns that story)
//   'craft'  - planks >= 3 (the crafts the pocket affords, the honest yield)
//   'defer'  - planks short of one craft (the honest shortage)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the plank consumers are separate lanes - the chest
// lane (storage v0.976.424), the table lane (the seat itself
// v0.976.426), the shield lane (the defense leg v0.976.428), the door
// lane (the shelter leg v0.976.429), the boat lane (the water leg
// v0.976.430), the fence lane (the pen leg v0.976.431), the bed lane
// (the night skip v0.976.432), the sign lane (the marker leg
// v0.976.433), this word's dish leg - a bot holding planks it does
// not want still earns its bowls if the planks afford it, no other
// lane's face gates here. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: a plank-rich pocket
// prices every bowl craft it affords, an honest longer yield list
// never clamped.

// the vanilla plank cost one bowl craft carries (3 planks -> 4 bowls)
export const BOWLCRAFT_PLANKS_PER_CRAFT = 3
// the vanilla bowl yield one bowl craft produces
export const BOWLCRAFT_BOWLS_PER_CRAFT = 4

/**
 * Decide whether one bot's pocket earns a bowl craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.bowlCount=0]    bowls already held (the dish lane's
 *                                       own story rides the keep gate)
 * @param {number} [opts.planksCount=0]  planks on hand (any wood, summed)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, bowlsYield: number, planksSurplus: number, cost: number}}
 */
export function decideBowlCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['bowlCount', 'planksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, bowlsYield: 0, planksSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const bowls = floor0(opts.bowlCount)
  const planks = floor0(opts.planksCount)
  // a bowl already held: the dish lane's own story - the foodcare word
  // prices the hunger bar, the bowl economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (bowls >= 1) {
    return { action: 'keep', reason: 'bowl-held', crafts: 0, bowlsYield: 0, planksSurplus: planks, cost: 0 }
  }
  // the pocket's own arithmetic: every three planks price four bowls
  // honestly, the caller picks how many bowl crafts the dish needs -
  // the word never rounds the yield into a lie and never caps the
  // pocket.
  if (planks >= BOWLCRAFT_PLANKS_PER_CRAFT) {
    const crafts = Math.floor(planks / BOWLCRAFT_PLANKS_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'planks-affordable',
      crafts,
      bowlsYield: crafts * BOWLCRAFT_BOWLS_PER_CRAFT,
      planksSurplus: planks % BOWLCRAFT_PLANKS_PER_CRAFT,
      cost: BOWLCRAFT_PLANKS_PER_CRAFT
    }
  }
  // plank-poor and bowl-poor: the honest shortage names the one craft's
  // own floor price - the wood trip the caller re-tasks to, never a
  // guessed craft
  return { action: 'defer', reason: 'planks-short', crafts: 0, bowlsYield: 0, planksSurplus: planks, cost: BOWLCRAFT_PLANKS_PER_CRAFT }
}
