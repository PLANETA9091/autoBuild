// (v0.976.447) Glass bottle craft decision for the bot fleet.
//
// THE PROBLEM: the potioncare word prices the effects shelf (v0.976.401,
// the care lane's twelfth sibling) but the shelf's own CONTAINER never
// priced - the potion lane's first craft word. The bots glass-rich
// (>= 3 glass) and bottle-poor carry the container's own parts while
// the glass they already hold IS the bottle (3 glass -> 3 bottles,
// vanilla - the V shape three glass price). The bottle is the pocket's
// own door to the brewed economy: water bottles first, the potion
// shelf's own stories pour into it. THE FIX: decideGlassBottleCraft()
// prices the BOTTLE POVERTY - one pocket map to ONE craft word with
// ONE reason:
//   'keep'   - a bottle already held (the potion lane owns that story)
//   'craft'  - glass >= 3 (the crafts the pocket affords, the honest yield)
//   'defer'  - glass short of one craft (the honest shortage - the sand
//              trip the caller re-tasks to, the furnacecraft chain's own
//              yield the honest future named: sand smelted is glass)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the glass consumers are separate lanes - this word's
// bottle leg IS the glass economy's first priced leg (no glasscraft word
// rode before it), and the bottle consumers that follow (the water
// bottle, the brewed potion) are their own lanes' stories - a bot
// holding glass it does not want still earns its bottles if the glass
// affords it, no other lane's face gates here. Junk inputs never
// throw: they return a refuse with the junk-input reason so a caller
// bug degrades into a log line, not a crash loop. Negative counts
// floor to zero (a lying census must not poison the arithmetic); they
// are read, not refused - the honesty lives in the clamp. No cap: a
// glass-rich pocket prices every bottle craft it affords, an honest
// longer yield list never clamped.
// THE BOTTLE FAMILY LAW: the bottle census rides exact 'glass_bottle'
// and nothing else - the brewed potion, the splash, the lingering are
// the potion lane's own forms, not bottles; the census never splits
// and never adopts another lane's kin. The glass census rides the
// exact 'glass' name - the sand's smelt yield's own consolidation;
// the sand itself is the smelt trip's own input, never adopted here.

// the vanilla glass cost one bottle craft carries (3 glass -> 3 bottles)
export const GLASSBOTTLECRAFT_GLASS_PER_CRAFT = 3
// the vanilla bottle yield one bottle craft produces
export const GLASSBOTTLECRAFT_BOTTLES_PER_CRAFT = 3

/**
 * Decide whether one bot's pocket earns a glass bottle craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.bottleCount=0]  glass bottles already held (the
 *                                       potion lane's own story rides the
 *                                       keep gate)
 * @param {number} [opts.glassCount=0]   glass blocks on hand (the exact
 *                                       'glass' name, the smelt yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, bottlesYield: number, glassSurplus: number, cost: number}}
 */
export function decideGlassBottleCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['bottleCount', 'glassCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, bottlesYield: 0, glassSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const bottles = floor0(opts.bottleCount)
  const glass = floor0(opts.glassCount)
  // a bottle already held: the potion lane's own story - the potioncare
  // word prices the effects shelf, the bottle economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (bottles >= 1) {
    return { action: 'keep', reason: 'bottle-held', crafts: 0, bottlesYield: 0, glassSurplus: glass, cost: 0 }
  }
  // the pocket's own arithmetic: every three glass price three bottles
  // honestly, the caller picks how many bottle crafts the container
  // needs - the word never rounds the yield into a lie and never caps
  // the pocket.
  if (glass >= GLASSBOTTLECRAFT_GLASS_PER_CRAFT) {
    const crafts = Math.floor(glass / GLASSBOTTLECRAFT_GLASS_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'glass-affordable',
      crafts,
      bottlesYield: crafts * GLASSBOTTLECRAFT_BOTTLES_PER_CRAFT,
      glassSurplus: glass % GLASSBOTTLECRAFT_GLASS_PER_CRAFT,
      cost: GLASSBOTTLECRAFT_GLASS_PER_CRAFT
    }
  }
  // glass-poor and bottle-poor: the honest shortage names the one
  // craft's own floor price - the sand trip the caller re-tasks to,
  // the furnacecraft chain's own yield, never a guessed craft
  return { action: 'defer', reason: 'glass-short', crafts: 0, bottlesYield: 0, glassSurplus: glass, cost: GLASSBOTTLECRAFT_GLASS_PER_CRAFT }
}
