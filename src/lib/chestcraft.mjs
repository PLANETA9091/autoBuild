// (v0.976.424) Chest craft decision for the bot fleet.
//
// THE PROBLEM: the plankcraft word prices the wood chain's first leg
// (logs -> planks), the stickcraft word the stick leg, the toolcraft word
// the tool leg - but the planks' own STORAGE consumer never priced: a bot
// plank-rich (>= 8 planks) and chest-poor re-tasks around the bank lane
// while the planks it already carries ARE the chest (8 planks -> 1 chest,
// vanilla). The task's own named lane - the chest logic - prices its craft
// seat here. THE FIX: decideChestCraft() prices the CHEST POVERTY - one
// pocket map to ONE craft word with ONE reason:
//   'keep'   - a chest already held (the storage lane owns that story)
//   'craft'  - planks >= 8 (the crafts the pocket affords, the honest yield)
//   'defer'  - planks short of one craft (the honest shortage)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the wood chain (toolcraft v0.976.419, stickcraft
// v0.976.421, plankcraft v0.976.422) prices the TOOL consumer's legs; this
// word prices the STORAGE consumer - a separate lane, never chained into
// the tool walk: a bot holding sticks it does not want still earns its
// chest if the planks afford it. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a log
// line, not a crash loop. Negative counts floor to zero (a lying census
// must not poison the arithmetic); they are read, not refused - the
// honesty lives in the clamp. No cap: a plank-rich pocket prices every
// chest it affords, an honest longer yield list never clamped.

// the vanilla plank cost one chest craft carries (8 planks -> 1 chest)
export const CHESTCRAFT_PLANKS_PER_CHEST = 8
// the vanilla chest yield one chest craft produces
export const CHESTCRAFT_CHESTS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a chest craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.chestCount=0]  chests already held (the storage lane's
 *                                      own story rides the keep gate)
 * @param {number} [opts.planksCount=0] planks on hand (any wood, summed)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, chestYield: number, planksSurplus: number, cost: number}}
 */
export function decideChestCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['chestCount', 'planksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, chestYield: 0, planksSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const chests = floor0(opts.chestCount)
  const planks = floor0(opts.planksCount)
  // a chest already held: the storage lane's own story - the bank walk
  // prices them, the chest economy stays silent (the pieces-held law's
  // twin, the craft family's own keep gate).
  if (chests >= 1) {
    return { action: 'keep', reason: 'chest-held', crafts: 0, chestYield: 0, planksSurplus: planks, cost: 0 }
  }
  // the pocket's own arithmetic: every eight planks price one chest
  // honestly, the caller picks how many chests the trip needs - the word
  // never rounds the yield into a lie and never caps the pocket.
  if (planks >= CHESTCRAFT_PLANKS_PER_CHEST) {
    const crafts = Math.floor(planks / CHESTCRAFT_PLANKS_PER_CHEST)
    return {
      action: 'craft',
      reason: 'planks-affordable',
      crafts,
      chestYield: crafts * CHESTCRAFT_CHESTS_PER_CRAFT,
      planksSurplus: planks % CHESTCRAFT_PLANKS_PER_CHEST,
      cost: CHESTCRAFT_PLANKS_PER_CHEST
    }
  }
  // plank-poor and chest-poor: the honest shortage names the one craft's
  // own floor price - the wood trip the caller re-tasks to, never a
  // guessed craft
  return { action: 'defer', reason: 'planks-short', crafts: 0, chestYield: 0, planksSurplus: planks, cost: CHESTCRAFT_PLANKS_PER_CHEST }
}
