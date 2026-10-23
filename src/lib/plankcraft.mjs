// (v0.976.422) Plank craft decision for the bot fleet.
//
// THE PROBLEM: the stickcraft word's planks-short defer names the missing
// leg - nothing prices the LOG step (1 log -> 4 planks, vanilla). A pocket
// log-rich but plank-poor defers BOTH words and the caller never sees the
// wood chain's own exit: the logs it already carries ARE the planks. THE
// FIX: decidePlankCraft() prices the WOOD CHAIN's first leg - one pocket
// map to ONE craft word with ONE reason:
//   'keep'   - planks already held (the stickcraft lane owns that story)
//   'craft'  - logs on hand, the honest yield priced (each log -> 4 planks)
//   'defer'  - no logs, no planks (the honest dead end - the wood trip)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CHAIN LAW: one craft step per word - this word prices logs -> planks
// ONLY. The stick step (2 planks -> 4 sticks) is the stickcraft word's own
// seat (v0.976.421); the tool step is the toolcraft word's (v0.976.419).
// Three words, three legs, each face names WHICH leg the pocket misses -
// never one mega-word guessing the whole chain. Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: a log-rich pocket prices every
// plank it affords, an honest longer yield never clamped.

// the vanilla plank yield one log crafts (1 log -> 4 planks)
export const PLANKCRAFT_PLANKS_PER_LOG = 4

/**
 * Decide whether one bot's pocket earns a plank craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.logCount=0]    logs on hand (any wood, the caller's
 *                                      census sums the *_log family - the
 *                                      stripped logs vanilla-craft planks too)
 * @param {number} [opts.planksCount=0] planks already held (any wood, summed)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, logs: number, planksYield: number, cost: number}}
 */
export function decidePlankCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['logCount', 'planksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', logs: 0, planksYield: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const logs = floor0(opts.logCount)
  const planks = floor0(opts.planksCount)
  // planks already held: the stickcraft lane's own story - the stick chain's
  // next leg is priced there, the plank economy stays silent (the pieces-held
  // law's twin, the craft family's own keep gate).
  if (planks >= 2) {
    return { action: 'keep', reason: 'planks-held', logs, planksYield: 0, cost: 0 }
  }
  // the pocket's own arithmetic: every log prices its four planks honestly,
  // the caller picks how many logs the trip needs - the word never rounds
  // the yield into a lie and never caps the pocket.
  if (logs >= 1) {
    return {
      action: 'craft',
      reason: 'logs-affordable',
      logs,
      planksYield: logs * PLANKCRAFT_PLANKS_PER_LOG,
      cost: 1
    }
  }
  // log-poor and plank-poor: the honest dead end - the wood trip the caller
  // re-tasks to, the shortage named, never a guessed craft
  return { action: 'defer', reason: 'logs-short', logs: 0, planksYield: 0, cost: 1 }
}
