// (v0.976.427) Ladder craft decision for the bot fleet.
//
// THE PROBLEM: the sticks the stickcraft word prices (v0.976.421) have TWO
// priced consumers - the toolcraft word's tool legs (every tool carries 2
// sticks, v0.976.419) and the torchcraft word's light leg (1 stick + 1 coal
// -> 4 torches, v0.976.425) - but the SHAFT lane's own consumer never
// priced: the bots dig deep (the ratchet books' rung #92 face), the climb
// out block-stacks ('the hop ladder is pre-funded' - the field's own name
// for the climb), while 7 sticks -> 3 ladders (vanilla) ARE the honest
// return the pocket already affords. THE FIX: decideLadderCraft() prices
// the SHAFT economy's word - one pocket map to ONE word with ONE reason:
//   'keep'   - ladders already held (the shaft lane owns that story)
//   'craft'  - sticks >= 7 (the crafts the pocket affords, the honest yield)
//   'defer'  - sticks short of one craft (the honest shortage)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the stick consumers are separate lanes - the tool legs
// (toolcraft), the light leg (torchcraft), this word's shaft leg - a bot
// holding sticks it does not want still earns its ladder if the sticks
// afford it, no other lane's face gates here. Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: a stick-rich pocket prices
// every ladder craft it affords, the leftover named, never rounded into a
// lie. The pure read mutates nothing.

// the vanilla stick cost one ladder craft carries (7 sticks -> 3 ladders)
export const LADDERCRAFT_STICKS_PER_CRAFT = 7
// the vanilla ladder yield one ladder craft produces
export const LADDERCRAFT_LADDERS_PER_CRAFT = 3

/**
 * Decide whether one bot's pocket earns a ladder craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.ladderCount=0] ladders already held (the shaft lane's
 *                                      own story rides the keep gate)
 * @param {number} [opts.stickCount=0]  sticks on hand (the caller's census
 *                                      reads the pocket's stick stack)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, laddersYield: number, sticksSurplus: number, cost: number}}
 */
export function decideLadderCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['ladderCount', 'stickCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, laddersYield: 0, sticksSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const ladders = floor0(opts.ladderCount)
  const sticks = floor0(opts.stickCount)
  // ladders already held: the shaft lane's own story - the climb prices
  // them, the ladder economy stays silent (the pieces-held law's twin,
  // the craft family's own keep gate).
  if (ladders >= 1) {
    return { action: 'keep', reason: 'ladders-held', crafts: 0, laddersYield: 0, sticksSurplus: sticks, cost: 0 }
  }
  // the pocket's own arithmetic: every seven sticks price their three
  // ladders honestly, the caller picks how many crafts the shaft needs -
  // the word never rounds the yield into a lie and never caps the pocket.
  if (sticks >= LADDERCRAFT_STICKS_PER_CRAFT) {
    const crafts = Math.floor(sticks / LADDERCRAFT_STICKS_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'sticks-affordable',
      crafts,
      laddersYield: crafts * LADDERCRAFT_LADDERS_PER_CRAFT,
      sticksSurplus: sticks % LADDERCRAFT_STICKS_PER_CRAFT,
      cost: LADDERCRAFT_STICKS_PER_CRAFT
    }
  }
  // stick-poor and ladder-poor: the honest shortage names the one craft's
  // own floor price - the wood trip the caller re-tasks to, never a
  // guessed craft
  return { action: 'defer', reason: 'sticks-short', crafts: 0, laddersYield: 0, sticksSurplus: sticks, cost: LADDERCRAFT_STICKS_PER_CRAFT }
}
