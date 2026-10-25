// (v0.976.467) Eye of ender craft decision for the bot fleet.
//
// THE PROBLEM: the blaze economy priced its supply leg - the blazefuel
// word v0.976.466 (1 blaze rod -> 2 blaze powders, the shapeless
// split) - and its POWDER LAW NAMED the end lane's own future - the
// EYE OF ENDER (1 ender pearl + 1 blaze powder, vanilla) - but the
// END never priced: a bot powder-rich rots the split's yield while
// the end lane's own key never mints, and the pearl the enderman
// crossing drops completes the eye (1 ender pearl + 1 blaze powder ->
// 1 eye of ender, vanilla). The eye reads the END - a CRAFTED eye
// gives the end lane its own instrument the way the compass gives the
// anchor, the clock the hour, the rod the storm and the spyglass the
// horizon. THE FIX: decideEyeOfEnder() prices the EYE POVERTY - one
// pocket map to ONE craft word with ONE reason:
//   'keep'   - an eye already held (the end lane's own instrument
//              never doubles - the spyglass word's own keep law's
//              twin, the craft family's own keep gate)
//   'craft'  - pearl >= 1 AND powder >= 1 (the min law binds BOTH
//              legs - the clockcraft word's own two-legged reading,
//              the spyglass word's own min shape: every pearl and one
//              powder price their eye honestly - the floor law, the
//              leftovers named, never capped)
//   'defer'  - pearl-short OR powder-short (the honest shortage names
//              its starving leg - the pearl priced FIRST, the rarer
//              leg: the enderman crossing owns that story, the nether
//              trip mints the pearl the word never guesses; the
//              powder leg re-tasks the blazefuel word's own split,
//              never a guessed craft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW CONTINUED: the blazefuel word's POWDER LAW NAMED
// this lane and never priced it; this word PRICES what the law
// named - the naming chain the family's own (the clockcraft word
// named the compasscraft word, the smeltraw word named the
// smeltcopper word, the smeltcopper word named the lightningrod word,
// the lightningrod word named the spyglass word, the brewstand word
// named the blazefuel word, the blazefuel word names this one). The
// eye leg is the BLAZE ECONOMY'S SECOND CONSUMER LEG (the split the
// supply, the brewing fire the first demand, the eye the end's
// demand) and the END ECONOMY'S FIRST PRICED LEG (the pearl's own
// demand word). A bot holding spare powder it does not want still
// earns its eye if the pocket affords it, no other lane's face gates
// here. THE EYE FAMILY LAW: the census rides exact 'eye_of_ender'
// and nothing else - vanilla has no eye kin; the pearl census rides
// exact 'ender_pearl' - vanilla has no pearl kin, the census never
// splits; the powder census rides exact 'blaze_powder' (the blaze
// family law the kin words share - the BLAZE ROD is the supply word's
// own metal, the split's own story, never adopted here). Junk inputs
// never throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a pearl-rich powder-rich pocket prices every eye it
// affords, an honest longer yield list never clamped - the min law's
// own ceiling is the RARER leg's, the word never rounds the yield
// into a lie. The pure read mutates nothing.

// the vanilla pearl cost one eye craft carries (the enderman's own
// tithe)
export const EYEOFENDER_PEARL_PER_CRAFT = 1
// the vanilla powder cost one eye craft carries (the split's own
// yield, the blazefuel word's own metal)
export const EYEOFENDER_POWDER_PER_CRAFT = 1
// the vanilla eye yield one eye craft produces
export const EYEOFENDER_EYES_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns an eye-of-ender craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.eyeCount=0]     eyes of ender already held
 *                                       (the exact 'eye_of_ender' name)
 * @param {number} [opts.pearlCount=0]   ender pearls on hand (the exact
 *                                       'ender_pearl' name, the
 *                                       enderman crossing's own drop)
 * @param {number} [opts.powderCount=0]  blaze powders on hand (the
 *                                       exact 'blaze_powder' name, the
 *                                       blazefuel word's own yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, eyesYield: number, pearlsLeft: number, powderLeft: number, eyes: number}}
 */
export function decideEyeOfEnder (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['eyeCount', 'pearlCount', 'powderCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, eyesYield: 0, pearlsLeft: 0, powderLeft: 0, eyes: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const eyes = floor0(opts.eyeCount)
  const pearls = floor0(opts.pearlCount)
  const powder = floor0(opts.powderCount)
  // an eye already held: the end lane's own story - the END reads by
  // item, the eye economy stays silent (the spyglass word's own keep
  // law's twin, the craft family's own keep gate).
  if (eyes >= 1) {
    return { action: 'keep', reason: 'eye-held', pearlsLeft: pearls, powderLeft: powder, eyes, crafts: 0, eyesYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // clockcraft word's own two-legged reading, the spyglass word's own
  // min shape. Every pearl and one powder price their eye honestly -
  // the floor law prices the yield, the leftovers named, the caller
  // picks how many eyes the end lane needs - the word never rounds
  // the yield into a lie and never caps the pocket.
  const crafts = Math.min(
    Math.floor(pearls / EYEOFENDER_PEARL_PER_CRAFT),
    Math.floor(powder / EYEOFENDER_POWDER_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'pearl-powder-affordable',
      crafts,
      eyesYield: crafts * EYEOFENDER_EYES_PER_CRAFT,
      pearlsLeft: pearls - crafts * EYEOFENDER_PEARL_PER_CRAFT,
      powderLeft: powder - crafts * EYEOFENDER_POWDER_PER_CRAFT,
      eyes: 0
    }
  }
  // the honest shortage names its starving leg: the pearl priced
  // FIRST - the rarer leg, the enderman crossing owns that story, the
  // nether trip mints the pearl the word never guesses; the powder
  // leg re-tasks the blazefuel word's own split, never a guessed
  // craft
  if (pearls < EYEOFENDER_PEARL_PER_CRAFT) {
    return { action: 'defer', reason: 'pearl-short', pearlsLeft: pearls, powderLeft: powder, eyes: 0, crafts: 0, eyesYield: 0 }
  }
  return { action: 'defer', reason: 'powder-short', pearlsLeft: pearls, powderLeft: powder, eyes: 0, crafts: 0, eyesYield: 0 }
}
