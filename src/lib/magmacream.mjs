// (v0.976.468) Magma cream craft decision for the bot fleet.
//
// THE PROBLEM: the blaze economy priced two demand legs - the brewing
// fire (the brewstand word's ROD LAW, v0.976.465, the stand's own
// fuel) and the end eye (the eyeofender word, v0.976.467, the end
// lane's own key) - while the BREWING LANE'S OWN INGREDIENT starves:
// the fire resistance potion wraps the MAGMA CREAM (1 magma cream +
// awkward potion), the lava road's own armor, the nether lane's own
// survival staple. The pocket holds powder from the blazefuel word's
// own split, but the CREAM never mints: 1 slime ball + 1 blaze powder
// -> 1 magma cream, vanilla (the shapeless mix, the crafting grid's
// own work). THE FIX: decideMagmaCream() prices the RESISTANCE'S OWN
// INGREDIENT - one pocket map to ONE craft word with ONE reason:
//   'keep'   - a magma cream already held (the golden form never
//              doubles - the goldencarrot word's own keep law's twin,
//              the craft family's own keep gate)
//   'craft'  - slime ball + powder affordable (the min law binds BOTH
//              legs - the eyeofender word's own two-legged reading,
//              the floor law prices the yield, the leftovers named,
//              never capped)
//   'defer'  - slime-short OR powder-short (the honest shortage names
//              its starving leg - the slime priced FIRST, the rarer
//              leg: the slime crossing owns that story, the swamp
//              moon trip mints the ball the word never guesses; the
//              powder leg re-tasks the blazefuel word's own split,
//              never a guessed craft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW CONTINUED: the blaze economy's demand legs are its
// own futures - the BREWING FIRE ALREADY PRICED (the brewstand word's
// ROD LAW v0.976.465), the END EYE ALREADY PRICED (the eyeofender
// word v0.976.467), this word the MAGMA CREAM the brewing
// ingredient's own demand NOW PRICED - the BLAZE ECONOMY'S THIRD
// CONSUMER LEG (the blazefuel split the supply, the fire the first
// demand, the eye the second, the cream the third). THE BREWING FRONT
// LAW CONTINUED: the glassbottlecraft word prices what the GLASS
// becomes, the waterfill word prices what the BOTTLE becomes, the
// brewstand word prices WHERE the water stands, the blazefuel word
// prices WHAT BURNS, this word prices the RESISTANCE'S OWN
// INGREDIENT - the brewing front's own FIFTH leg (the wart the crop
// lane's own future, named never priced, stays the crop lane's own
// story). THE CREAM FAMILY LAW: the census rides exact 'magma_cream'
// - vanilla has no magma cream kin; the slime census rides exact
// 'slime_ball' - the SLIME BLOCK the storage lane's own form and the
// slime ball's own bounces, named never adopted (the ball is this
// word's own metal); the powder census rides exact 'blaze_powder'
// (the blaze family law the kin words share - the BLAZE ROD the
// supply word's own metal, the split's own story, never adopted
// here). Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not a
// crash loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a slime-rich powder-rich pocket prices
// every cream it affords, an honest longer yield list never clamped -
// the min law's own ceiling is the RARER leg's, the word never rounds
// the yield into a lie. The pure read mutates nothing.

// the vanilla slime cost one magma cream craft carries (the slime
// crossing's own tithe)
export const MAGMACREAM_SLIME_PER_CRAFT = 1
// the vanilla powder cost one magma cream craft carries (the split's
// own yield, the blazefuel word's own metal)
export const MAGMACREAM_POWDER_PER_CRAFT = 1
// the vanilla cream yield one magma cream craft produces
export const MAGMACREAM_CREAMS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a magma cream craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.creamCount=0]      magma creams already held
 *                                          (the exact 'magma_cream'
 *                                          name)
 * @param {number} [opts.slimeBallCount=0]  slime balls on hand (the
 *                                          exact 'slime_ball' name,
 *                                          the slime crossing's own
 *                                          drop)
 * @param {number} [opts.powderCount=0]     blaze powders on hand (the
 *                                          exact 'blaze_powder' name,
 *                                          the blazefuel word's own
 *                                          yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, creamsYield: number, slimeLeft: number, powderLeft: number, creams: number}}
 */
export function decideMagmaCream (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['creamCount', 'slimeBallCount', 'powderCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, creamsYield: 0, slimeLeft: 0, powderLeft: 0, creams: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const creams = floor0(opts.creamCount)
  const slime = floor0(opts.slimeBallCount)
  const powder = floor0(opts.powderCount)
  // a magma cream already held: the brewing ingredient's own story -
  // the resistance reads by item, the cream economy stays silent (the
  // goldencarrot word's own keep law's twin, the craft family's own
  // keep gate).
  if (creams >= 1) {
    return { action: 'keep', reason: 'cream-held', slimeLeft: slime, powderLeft: powder, creams, crafts: 0, creamsYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // eyeofender word's own two-legged reading. Every slime ball and one
  // powder price their cream honestly - the floor law prices the
  // yield, the leftovers named, the caller picks how many creams the
  // brewing lane needs - the word never rounds the yield into a lie
  // and never caps the pocket.
  const crafts = Math.min(
    Math.floor(slime / MAGMACREAM_SLIME_PER_CRAFT),
    Math.floor(powder / MAGMACREAM_POWDER_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'slime-powder-affordable',
      crafts,
      creamsYield: crafts * MAGMACREAM_CREAMS_PER_CRAFT,
      slimeLeft: slime - crafts * MAGMACREAM_SLIME_PER_CRAFT,
      powderLeft: powder - crafts * MAGMACREAM_POWDER_PER_CRAFT,
      creams: 0
    }
  }
  // the honest shortage names its starving leg: the slime priced
  // FIRST - the rarer leg, the slime crossing owns that story, the
  // swamp moon trip mints the ball the word never guesses; the powder
  // leg re-tasks the blazefuel word's own split, never a guessed
  // craft
  if (slime < MAGMACREAM_SLIME_PER_CRAFT) {
    return { action: 'defer', reason: 'slime-short', slimeLeft: slime, powderLeft: powder, creams: 0, crafts: 0, creamsYield: 0 }
  }
  return { action: 'defer', reason: 'powder-short', slimeLeft: slime, powderLeft: powder, creams: 0, crafts: 0, creamsYield: 0 }
}
