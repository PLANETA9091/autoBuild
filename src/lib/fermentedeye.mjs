// (v0.976.469) Fermented spider eye craft decision for the bot fleet.
//
// THE PROBLEM: the brewing front priced five legs - the
// glassbottlecraft word's own bottle (v0.976.447), the waterfill
// word's own fill (v0.976.464), the brewstand word's own station
// (v0.976.465), the blazefuel word's own fire (v0.976.466), the
// magmacream word's own resistance ingredient (v0.976.468) - while
// the CORRUPTION never priced: the night vision potion turns
// invisible, the sugar potion turns slow, the healing potion turns
// harm - all through the FERMENTED SPIDER EYE (1 spider eye + 1 brown
// mushroom + 1 sugar -> 1 fermented spider eye, vanilla, the
// shapeless mix), the brewing lane's own corruptor. The pocket holds
// spider drops and cave forage, but the EYE never ferments. THE FIX:
// decideFermentedEye() prices the CORRUPTION'S OWN INGREDIENT - one
// pocket map to ONE craft word with ONE reason:
//   'keep'   - a fermented eye already held (the golden form never
//              doubles - the magmacream word's own keep law's twin,
//              the craft family's own keep gate)
//   'craft'  - spider eye + mushroom + sugar affordable (THE
//              THREE-LEG LAW: the min binds ALL THREE legs - the
//              two-legged reading's own extension, the floor law
//              prices the yield, the leftovers named, never capped)
//   'defer'  - mushroom-short OR spider-eye-short OR sugar-short
//              (the honest shortage names its starving leg - the
//              mushroom priced FIRST, the rarer leg: the cave forage
//              owns that story; the spider eye next, the night
//              crossing's own drop; the sugar last, the cane farm
//              re-tasks its own lane, never a guessed craft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW CONTINUED: the brewing front's ingredient legs are
// its own futures - the resistance ALREADY PRICED (the magmacream
// word v0.976.468), this word the CORRUPTION'S OWN INGREDIENT NOW
// PRICED - the brewing front's SIXTH leg (the wart the crop lane's
// own future, named never priced, stays the crop lane's own story).
// THE SUGAR LAW: the sugar rides the cane's own peel (1 sugar cane ->
// 1 sugar, vanilla) - the peel priced NEVER here: the cane is the
// crop lane's own metal, the farm trip owns that story, named never
// priced (the caller's census brings the sugar, this word prices the
// mix only). THE EYE FAMILY LAW: the census rides exact
// 'fermented_spider_eye' - vanilla has no fermented kin; the spider
// census rides exact 'spider_eye' (the cave spider shares the drop's
// own name, the census rides the name and nothing else); the
// mushroom census rides exact 'brown_mushroom' - the RED MUSHROOM the
// different metal, the stew and the blocks the food and storage
// lanes' own forms, named never adopted; the sugar census rides exact
// 'sugar' - the SUGAR CANE the crop lane's own form, named never
// adopted (the peel is this word's own metal, the cane the crop's).
// Junk inputs never throw: they return a refuse with the junk-input
// reason so a caller bug degrades into a log line, not a crash loop.
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a rich pocket prices every fermented eye it affords,
// an honest longer yield list never clamped - the min law's own
// ceiling is the RAREST leg's, the word never rounds the yield into a
// lie. The pure read mutates nothing.

// the vanilla spider eye cost one fermented eye craft carries (the
// night crossing's own tithe)
export const FERMENTEDEYE_SPIDER_PER_CRAFT = 1
// the vanilla mushroom cost one fermented eye craft carries (the cave
// forage's own tithe)
export const FERMENTEDEYE_MUSHROOM_PER_CRAFT = 1
// the vanilla sugar cost one fermented eye craft carries (the cane's
// own peel)
export const FERMENTEDEYE_SUGAR_PER_CRAFT = 1
// the vanilla fermented eye yield one fermented eye craft produces
export const FERMENTEDEYE_FERMENTED_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a fermented-spider-eye craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.fermentedCount=0]        fermented spider eyes
 *                                                already held (the exact
 *                                                'fermented_spider_eye'
 *                                                name)
 * @param {number} [opts.spiderEyeCount=0]        spider eyes on hand
 *                                                (the exact 'spider_eye'
 *                                                name, the night
 *                                                crossing's own drop)
 * @param {number} [opts.brownMushroomCount=0]    brown mushrooms on hand
 *                                                (the exact
 *                                                'brown_mushroom' name,
 *                                                the cave forage's own
 *                                                find)
 * @param {number} [opts.sugarCount=0]            sugar on hand (the
 *                                                exact 'sugar' name, the
 *                                                cane's own peel)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, fermentedYield: number, spiderEyeLeft: number, mushroomLeft: number, sugarLeft: number, fermented: number}}
 */
export function decideFermentedEye (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['fermentedCount', 'spiderEyeCount', 'brownMushroomCount', 'sugarCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, fermentedYield: 0, spiderEyeLeft: 0, mushroomLeft: 0, sugarLeft: 0, fermented: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const fermented = floor0(opts.fermentedCount)
  const spiderEye = floor0(opts.spiderEyeCount)
  const mushroom = floor0(opts.brownMushroomCount)
  const sugar = floor0(opts.sugarCount)
  // a fermented eye already held: the corruption's own story - the
  // potion shelf reads by item, the fermented economy stays silent
  // (the magmacream word's own keep law's twin, the craft family's
  // own keep gate).
  if (fermented >= 1) {
    return { action: 'keep', reason: 'fermented-held', spiderEyeLeft: spiderEye, mushroomLeft: mushroom, sugarLeft: sugar, fermented, crafts: 0, fermentedYield: 0 }
  }
  // the pocket's own arithmetic: the THREE-LEG LAW - the min binds
  // ALL THREE legs, the two-legged reading's own extension. Every
  // spider eye, one brown mushroom and one sugar price their
  // ferment honestly - the floor law prices the yield, the leftovers
  // named, the caller picks how many ferments the potion shelf needs
  // - the word never rounds the yield into a lie and never caps the
  // pocket.
  const crafts = Math.min(
    Math.floor(spiderEye / FERMENTEDEYE_SPIDER_PER_CRAFT),
    Math.floor(mushroom / FERMENTEDEYE_MUSHROOM_PER_CRAFT),
    Math.floor(sugar / FERMENTEDEYE_SUGAR_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'spider-mushroom-sugar-affordable',
      crafts,
      fermentedYield: crafts * FERMENTEDEYE_FERMENTED_PER_CRAFT,
      spiderEyeLeft: spiderEye - crafts * FERMENTEDEYE_SPIDER_PER_CRAFT,
      mushroomLeft: mushroom - crafts * FERMENTEDEYE_MUSHROOM_PER_CRAFT,
      sugarLeft: sugar - crafts * FERMENTEDEYE_SUGAR_PER_CRAFT,
      fermented: 0
    }
  }
  // the honest shortage names its starving leg: the mushroom priced
  // FIRST - the rarer leg, the cave forage owns that story; the
  // spider eye next, the night crossing's own drop; the sugar last -
  // the cane farm re-tasks its own lane, never a guessed craft
  if (mushroom < FERMENTEDEYE_MUSHROOM_PER_CRAFT) {
    return { action: 'defer', reason: 'mushroom-short', spiderEyeLeft: spiderEye, mushroomLeft: mushroom, sugarLeft: sugar, fermented: 0, crafts: 0, fermentedYield: 0 }
  }
  if (spiderEye < FERMENTEDEYE_SPIDER_PER_CRAFT) {
    return { action: 'defer', reason: 'spider-eye-short', spiderEyeLeft: spiderEye, mushroomLeft: mushroom, sugarLeft: sugar, fermented: 0, crafts: 0, fermentedYield: 0 }
  }
  return { action: 'defer', reason: 'sugar-short', spiderEyeLeft: spiderEye, mushroomLeft: mushroom, sugarLeft: sugar, fermented: 0, crafts: 0, fermentedYield: 0 }
}
