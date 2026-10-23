// (v0.976.421) Stick craft decision for the bot fleet.
//
// THE PROBLEM: the toolcraft word's sticks-short defer names the shortage -
// every tool recipe carries 2 sticks and a pocket short of sticks defers.
// But the same pocket may be PLANK-RICH: 2 planks craft 4 sticks (vanilla),
// the exit the shortage face never priced. A bot re-tasks to mine logs it
// already owns the wood for - the walk rented on a pocket that held the
// answer. THE FIX: decideStickCraft() prices the STICK CHAIN's one craft -
// one pocket map to ONE craft word with ONE reason:
//   'craft'  - planks >= 2 (the crafts the pocket affords, the honest yield)
//   'defer'  - planks short of one craft (the honest shortage)
//   'keep'   - sticks already held (the toolcraft lane owns that story)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CHAIN LAW: this word prices ONE craft step (2 planks -> 4 sticks).
// The log leg (1 log -> 4 planks) is the plankcraft word's own seat - a
// later word, never guessed here: a pocket log-rich but plank-poor defers
// honestly, the caller sees WHICH leg is missing. Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused - the
// honesty lives in the clamp. No cap: a plank-rich pocket prices every
// craft it affords, an honest longer yield list never clamped.

// the vanilla plank cost one stick craft carries (2 planks -> 4 sticks)
export const STICKCRAFT_PLANKS_PER_CRAFT = 2
// the vanilla stick yield one stick craft produces
export const STICKCRAFT_STICKS_PER_CRAFT = 4

/**
 * Decide whether one bot's pocket earns a stick craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.stickCount=0]  sticks already held
 * @param {number} [opts.planksCount=0] planks on hand (any wood, summed)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, sticksYield: number, planksSurplus: number, cost: number}}
 */
export function decideStickCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['stickCount', 'planksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, sticksYield: 0, planksSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const sticks = floor0(opts.stickCount)
  const planks = floor0(opts.planksCount)
  // sticks already held: the toolcraft lane's own story - the swap lane
  // prices them, the stick economy stays silent (the pieces-held law's twin).
  if (sticks >= STICKCRAFT_PLANKS_PER_CRAFT) {
    return { action: 'keep', reason: 'sticks-held', crafts: 0, sticksYield: 0, planksSurplus: planks, cost: 0 }
  }
  // the pocket's own arithmetic: the crafts it affords, the honest yield,
  // the odd plank that never becomes a stick alone (the surplus priced,
  // never rounded into a lie).
  if (planks >= STICKCRAFT_PLANKS_PER_CRAFT) {
    const crafts = Math.floor(planks / STICKCRAFT_PLANKS_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'planks-affordable',
      crafts,
      sticksYield: crafts * STICKCRAFT_STICKS_PER_CRAFT,
      planksSurplus: planks % STICKCRAFT_PLANKS_PER_CRAFT,
      cost: STICKCRAFT_PLANKS_PER_CRAFT
    }
  }
  // plank-poor: the honest shortage names the one craft's own floor price
  return { action: 'defer', reason: 'planks-short', crafts: 0, sticksYield: 0, planksSurplus: planks, cost: STICKCRAFT_PLANKS_PER_CRAFT }
}
