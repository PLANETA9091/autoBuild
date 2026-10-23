// (v0.976.419) Tool craft decision for the bot fleet.
//
// THE PROBLEM: the toolcare word prices WORN tools - repair, swap, defer,
// refuse - but its 'refuse' face (a dead tool, no spare, no material) is a
// dead end: the caller reports and re-tasks while the POCKET may already
// hold the full recipe. The armorcraft word priced the same poverty for
// armor (v0.976.387); the tool economy had no such word. THE FIX:
// decideToolCraft() prices the TOOL POVERTY itself - one bot's pocket
// materials map to ONE craft word with ONE reason (the vanilla costs, the
// best tier the pocket affords):
//   'craft'  - the best affordable tier is named (head + sticks on hand)
//   'defer'  - sticks short or no head material at 3 (the honest shortage)
//   'keep'   - a spare is already held (the toolcare swap lane owns that)
//   'refuse' - junk input (never throws into the fleet loop)
// The tier order is the fleet's own mining goal, best-first: a bot with
// diamonds crafts the diamond pick, never the wooden one - the cheapest
// reachable tier is a poverty the word names only when nothing better
// fits. Consult only - the word never crafts; the craft seat owns the
// hands later. Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not a crash
// loop. Negative counts floor to zero (a lying census must not poison the
// walk); they are read, not refused - the honesty lives in the clamp.

// the vanilla stick cost every tool recipe carries (2 sticks)
export const TOOLCRAFT_STICK_COST = 2
// the vanilla head cost every tool recipe carries (3 head units)
export const TOOLCRAFT_HEAD_COST = 3

// the tier table, best-first: diamond > iron > stone > wood (the vanilla
// mining tier law). 'planks' is the FAMILY key - the caller's census sums
// the *_planks variants (oak, birch, ...) into one count.
export const TOOLCRAFT_TIERS = [
  { tier: 'diamond', head: 'diamond' },
  { tier: 'iron', head: 'iron_ingot' },
  { tier: 'stone', head: 'cobblestone' },
  { tier: 'wood', head: 'planks' }
]

/**
 * Decide what one bot's tool economy should craft.
 *
 * @param {object} [opts]
 * @param {number} [opts.spareCount=0]       spares of the working tool on hand
 * @param {number} [opts.diamondCount=0]     diamonds on hand
 * @param {number} [opts.ironIngotCount=0]   iron ingots on hand
 * @param {number} [opts.cobblestoneCount=0] cobblestone on hand
 * @param {number} [opts.planksCount=0]      planks on hand (any wood, summed)
 * @param {number} [opts.stickCount=0]       sticks on hand
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, tier: string|null, head: string|null, cost: number}}
 */
export function decideToolCraft (opts = {}) {
  // the junk battery: any non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. The boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['spareCount', 'diamondCount', 'ironIngotCount', 'cobblestoneCount', 'planksCount', 'stickCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', tier: null, head: null, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const spares = floor0(opts.spareCount)
  const sticks = floor0(opts.stickCount)
  // a spare held is the toolcare word's own story - the swap lane prices it,
  // the craft economy stays silent (the armorcraft pieces-held law's twin).
  if (spares >= 1) {
    return { action: 'keep', reason: 'spares-held', tier: null, head: null, cost: 0 }
  }
  // the sticks gate walks first: every tier carries the same 2 sticks, a
  // pocket short of sticks prices the stick shortage, never the head walk.
  if (sticks < TOOLCRAFT_STICK_COST) {
    return { action: 'defer', reason: 'sticks-short', tier: null, head: null, cost: TOOLCRAFT_STICK_COST }
  }
  const heads = {
    diamond: floor0(opts.diamondCount),
    iron_ingot: floor0(opts.ironIngotCount),
    cobblestone: floor0(opts.cobblestoneCount),
    planks: floor0(opts.planksCount)
  }
  // the best tier the pocket affords - the walk never sorts, the table's
  // own order is the fleet's mining goal (diamond first, wood the last resort).
  for (const step of TOOLCRAFT_TIERS) {
    if (heads[step.head] >= TOOLCRAFT_HEAD_COST) {
      return { action: 'craft', reason: 'head-affordable', tier: step.tier, head: step.head, cost: TOOLCRAFT_HEAD_COST }
    }
  }
  // no head at 3: the honest shortage names the walk's own floor price
  return { action: 'defer', reason: 'head-short', tier: null, head: null, cost: TOOLCRAFT_HEAD_COST }
}
