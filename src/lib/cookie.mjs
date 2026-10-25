// (v0.976.477) Cookie craft decision for the bot fleet.
//
// THE PROBLEM: the crop lane priced its sow (the netherwart word,
// v0.976.470), its table (the bread word, v0.976.471), its nine-form
// (the hayblock word, v0.976.472) and its replant (the wheatsow word,
// v0.976.475) - but the TREAT never priced: a bot wheat-rich
// cocoa-rich bakes the lunch it already holds bread for while the
// cookie IS the pocket's own smallcake (2 wheat + 1 cocoa beans ->
// 8 cookies, vanilla - the shaped row wheat/cocoa/wheat, no fuel -
// the fire never rides this lane). THE EIGHT-YIELD LAW: one craft
// yields EIGHT cookies - the bread word's own one-per-craft opposite
// (3 wheat -> 1 bread vs 2 wheat + 1 cocoa -> 8 cookies): the treat
// is the batch food, the yield never inflated, every eight-count
// honest. THE SHARED-LEG LAW: the wheat the bread word's own grain -
// the two words share the leg, never the pocket (the caller merges
// the tables, each word prices its own craft from the same census -
// the wheat rides its own left in both, the fold never doubles the
// grain). THE FIX: decideCookie() prices the TREAT LANE - one pocket
// map to ONE word with ONE reason:
//   'keep'   - cookies already held (the treat never doubles - the
//              bread word's own keep law's twin, the goldencarrot
//              word's own held-gate sibling; the wheat and the cocoa
//              ride their lefts untouched)
//   'craft'  - wheat + cocoa affordable (the min law binds BOTH legs
//              - the respawnanchor word's own two-legged reading,
//              the floor law prices the yield, the leftovers named,
//              never capped)
//   'defer'  - the honest shortage names its starving leg
//              (wheat-short FIRST - the binding leg at two-per, the
//              dough's own story, the bread word's own grain; the
//              cocoa-short - the jungle's own pod, the farm trip's
//              own story named never priced here)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CENSUS LAW: exact 'cookie' (the treat's own form - the BREAD
// the staple's own loaf, never adopted here); exact 'wheat' (the
// bread word's own grain, the shared leg - the WHEAT SEEDS the
// wheatsow word's own replant form and the HAY BLOCK the hayblock
// word's own nine-form, never adopted); exact 'cocoa_beans' (the
// jungle's own pod, vanilla's own name - no variant kin). Junk
// inputs never throw: they return a refuse with the junk-input
// reason so a caller bug degrades into a log line, not a crash
// loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a wheat-rich cocoa-rich pocket prices
// every batch it affords, an honest longer stack never clamped. The
// pure read mutates nothing.

// the vanilla wheat cost one cookie craft carries (the two-per leg,
// the dough's own share)
export const COOKIE_WHEAT_PER_CRAFT = 2
// the vanilla cocoa cost one cookie craft carries (the one-per leg,
// the jungle's own pod)
export const COOKIE_COCOA_PER_CRAFT = 1
// the vanilla cookie yield one craft produces (the batch's own eight)
export const COOKIE_COOKIES_PER_CRAFT = 8

/**
 * Decide whether one bot's pocket earns a cookie craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.cookieCount=0]  cookies already held (the
 *                                       exact 'cookie' name, the
 *                                       treat's own stock)
 * @param {number} [opts.wheatCount=0]   wheat on hand (the exact
 *                                       'wheat' name, the bread
 *                                       word's own grain - the
 *                                       WHEAT SEEDS and the HAY
 *                                       BLOCK never adopted)
 * @param {number} [opts.cocoaCount=0]   cocoa beans on hand (the
 *                                       exact 'cocoa_beans' name,
 *                                       the jungle's own pod)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, cookiesYield: number, wheatLeft: number, cocoaLeft: number, cookies: number}}
 */
export function decideCookie (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['cookieCount', 'wheatCount', 'cocoaCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, cookiesYield: 0, wheatLeft: 0, cocoaLeft: 0, cookies: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const cookies = floor0(opts.cookieCount)
  const wheat = floor0(opts.wheatCount)
  const cocoa = floor0(opts.cocoaCount)
  // a treat already held: the pocket's own smallcake story - the
  // cookies ride by item, the treat economy stays silent (the bread
  // word's own keep law's twin, the goldencarrot word's own held-gate
  // sibling), the wheat and the cocoa ride their lefts untouched.
  if (cookies >= 1) {
    return { action: 'keep', reason: 'cookie-held', wheatLeft: wheat, cocoaLeft: cocoa, cookies, crafts: 0, cookiesYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // respawnanchor word's own two-legged reading. Every two wheat and
  // one cocoa price their batch honestly - the floor law prices the
  // yield, the leftovers named, never capped beyond the pocket.
  const crafts = Math.min(
    Math.floor(wheat / COOKIE_WHEAT_PER_CRAFT),
    Math.floor(cocoa / COOKIE_COCOA_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'wheat-cocoa-affordable',
      crafts,
      cookiesYield: crafts * COOKIE_COOKIES_PER_CRAFT,
      wheatLeft: wheat - crafts * COOKIE_WHEAT_PER_CRAFT,
      cocoaLeft: cocoa - crafts * COOKIE_COCOA_PER_CRAFT,
      cookies: 0
    }
  }
  // the honest shortage names its starving leg: the wheat priced
  // FIRST - the binding leg at two-per, the dough's own story (the
  // bread word's own grain), never a guessed craft; the cocoa leg
  // the jungle's own pod (the farm trip's own story named never
  // priced here), never a guessed craft
  if (wheat < COOKIE_WHEAT_PER_CRAFT) {
    return { action: 'defer', reason: 'wheat-short', wheatLeft: wheat, cocoaLeft: cocoa, cookies: 0, crafts: 0, cookiesYield: 0 }
  }
  return { action: 'defer', reason: 'cocoa-short', wheatLeft: wheat, cocoaLeft: cocoa, cookies: 0, crafts: 0, cookiesYield: 0 }
}
