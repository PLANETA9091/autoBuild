// (v0.976.441) Fletcher craft decision for the bot fleet.
//
// THE PROBLEM: the flintandsteelcraft word priced the fire lane's own
// spark (v0.976.440) and NAMED its future - "the arrow lane the
// fletcher's own story, a word not yet priced, the honest future
// named". The future is now: a bot flint-rich, stick-rich and
// feather-rich (>= 1 of each) shoots nothing while the stone, the wood
// and the plume it already carries ARE the volley (1 flint + 1 stick +
// 1 feather -> 4 arrows, vanilla). The arrow is the fletcher lane's
// own word - the spark's named future priced, the skeleton-ward the
// night word's own answer. THE FIX: decideFletcherCraft() prices the
// VOLLEY POVERTY - one pocket map to ONE craft word with ONE reason:
//   'keep'   - arrows already held (the fletcher lane owns that story)
//   'craft'  - flint >= 1 AND sticks >= 1 AND feathers >= 1 (the
//              SHORTER of THREE legs prices the yield, the leftover of
//              ALL THREE legs named - the family's first three-leg
//              word, the shorter-leg law extended)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the flint consumers are separate lanes - the fire
// lane's own spark (the flintandsteelcraft word v0.976.440), this
// word's arrowhead leg. The stick consumers are separate lanes too -
// the stickcraft chain (v0.976.421), the sign lane (the marker leg
// v0.976.433), the rail lane (the tie leg v0.976.437), this word's
// shaft leg. The feather consumers: this word's fletching leg - the
// FIRST feather consumer priced, the herd's own yield finally priced.
// No other lane's face gates here. THE ARROW FAMILY LAW: the plain
// arrow and every arrow variant (tipped, spectral) ARE the fletcher
// lane's own story - the census rides exact 'arrow' + every *_arrow,
// the census never splits. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: a leg-rich pocket prices
// every volley craft it affords, an honest longer yield never
// clamped. The pure read mutates nothing.

// the vanilla flint cost one volley craft carries (1 flint heads the arrow)
export const FLETCHERCRAFT_FLINT_PER_CRAFT = 1
// the vanilla stick cost one volley craft carries (1 stick shafts the arrow)
export const FLETCHERCRAFT_STICKS_PER_CRAFT = 1
// the vanilla feather cost one volley craft carries (1 feather fletches the arrow)
export const FLETCHERCRAFT_FEATHERS_PER_CRAFT = 1
// the vanilla arrow yield one volley craft produces
export const FLETCHERCRAFT_ARROWS_PER_CRAFT = 4

/**
 * Decide whether one bot's pocket earns a volley craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.arrowCount=0]   the arrow family on hand (plain +
 *                                        every variant, the caller's
 *                                        census never splits)
 * @param {number} [opts.flintCount=0]   flint on hand (the gravel trip's
 *                                        own yield, the arrowhead leg)
 * @param {number} [opts.stickCount=0]   sticks on hand (the shaft leg)
 * @param {number} [opts.featherCount=0] feathers on hand (the fletching
 *                                        leg, the herd's own yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, arrowsYield: number, flintLeft: number, stickLeft: number, featherLeft: number, arrows: number}}
 */
export function decideFletcherCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['arrowCount', 'flintCount', 'stickCount', 'featherCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, arrowsYield: 0, flintLeft: 0, stickLeft: 0, featherLeft: 0, arrows: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const flint = floor0(opts.flintCount)
  const sticks = floor0(opts.stickCount)
  const feathers = floor0(opts.featherCount)
  const held = floor0(opts.arrowCount)
  // arrows already held: the fletcher lane's own story - the quiver is
  // being filled, the volley economy stays silent (the pieces-held
  // law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'arrow-held', flintLeft: flint, stickLeft: sticks, featherLeft: feathers, arrows: held, crafts: 0, arrowsYield: 0 }
  }
  // the pocket's own arithmetic: every flint plus its stick plus its
  // feather price four arrows honestly, the SHORTER of THREE legs
  // prices the crafts - the word never rounds the yield into a lie and
  // never caps the pocket, the leftover of ALL THREE legs named.
  if (flint >= FLETCHERCRAFT_FLINT_PER_CRAFT && sticks >= FLETCHERCRAFT_STICKS_PER_CRAFT && feathers >= FLETCHERCRAFT_FEATHERS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(flint / FLETCHERCRAFT_FLINT_PER_CRAFT), Math.floor(sticks / FLETCHERCRAFT_STICKS_PER_CRAFT), Math.floor(feathers / FLETCHERCRAFT_FEATHERS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'flint-stick-feather-affordable',
      crafts,
      arrowsYield: crafts * FLETCHERCRAFT_ARROWS_PER_CRAFT,
      flintLeft: flint - crafts * FLETCHERCRAFT_FLINT_PER_CRAFT,
      stickLeft: sticks - crafts * FLETCHERCRAFT_STICKS_PER_CRAFT,
      featherLeft: feathers - crafts * FLETCHERCRAFT_FEATHERS_PER_CRAFT,
      arrows: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the
  // flint leg first (the word's own base stone - the arrow IS the
  // flint headed, the gravel trip the ground surrenders), the stick
  // leg second (the craft-made shaft the stickcraft chain's own word
  // v0.976.421 re-tasks), the feather leg third (the fletching the
  // herd's own yield - the chicken trip, never a guessed craft)
  if (flint < FLETCHERCRAFT_FLINT_PER_CRAFT) {
    return { action: 'defer', reason: 'flint-short', flintLeft: flint, stickLeft: sticks, featherLeft: feathers, arrows: 0, crafts: 0, arrowsYield: 0 }
  }
  if (sticks < FLETCHERCRAFT_STICKS_PER_CRAFT) {
    return { action: 'defer', reason: 'sticks-short', flintLeft: flint, stickLeft: sticks, featherLeft: feathers, arrows: 0, crafts: 0, arrowsYield: 0 }
  }
  return { action: 'defer', reason: 'feathers-short', flintLeft: flint, stickLeft: sticks, featherLeft: feathers, arrows: 0, crafts: 0, arrowsYield: 0 }
}
