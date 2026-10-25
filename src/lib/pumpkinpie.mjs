// (v0.976.479) Pumpkin pie craft decision for the bot fleet.
//
// THE PROBLEM: the crop lane priced its treat (the cookie word,
// v0.976.477) and its table (the bread word, v0.976.471) - but the
// PIE never priced: a bot pumpkin-rich sugar-rich egg-rich walks the
// oven's own dessert loose while the pie it smells IS the harvest's
// own gold (1 pumpkin + 1 sugar + 1 egg -> 4 pumpkin pies, vanilla -
// the shapeless bowl, no fuel - the fire never rides this lane).
// THE FOUR-YIELD LAW: one craft yields FOUR pies - the cookie word's
// own eight-form's half-batch cousin (2 wheat + 1 cocoa -> 8
// cookies vs 1 gourd + 1 sweetener + 1 egg -> 4 pies): the pie the
// feast food, the yield never inflated. THE THREE-LEG LAW: the min
// law binds THREE legs - the respawnanchor word's own two-legged
// reading grown one leg honest (every one-of-each prices its batch,
// the floor law prices the yield, the leftovers named, never
// capped). THE FIX: decidePumpkinPie() prices the PIE LANE - one
// pocket map to ONE word with ONE reason:
//   'keep'   - pies already held (the feast never doubles - the
//              cookie word's own keep law's sibling, the craft
//              family's own keep gate; the gourd and the sweetener
//              and the egg ride their lefts untouched)
//   'craft'  - pumpkin + sugar + egg affordable (the min law binds
//              ALL THREE legs, the floor law prices the yield, the
//              leftovers named, never capped)
//   'defer'  - the honest shortage names its starving leg
//              (pumpkin-short FIRST - the gourd the harvest's own
//              story, the farm trip's own cargo; sugar-short - the
//              cane's own mill, the sweetener the brewing lane's
//              own coin; egg-short - the coop's own coin, the
//              chicken's own morning named never priced here)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CENSUS LAW: exact 'pumpkin_pie' (the pie's own form); exact
// 'pumpkin' (the gourd the craft's own leg - the CARVED PUMPKIN the
// helmet's own form and the PUMPKIN SEEDS the replant lane's own
// form, never adopted); exact 'sugar' (the sweetener the mill's own
// coin - the SUGAR CANE the raw stalk, never adopted); exact 'egg'
// (the coop's own coin, vanilla's own name - no variant kin). Junk
// inputs never throw: they return a refuse with the junk-input
// reason so a caller bug degrades into a log line, not a crash
// loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a gourd-rich sugar-rich egg-rich
// pocket prices every feast it affords, an honest longer stack
// never clamped. The pure read mutates nothing.

// the vanilla pumpkin cost one pumpkin pie craft carries (the
// harvest's own leg)
export const PUMPKINPIE_PUMPKIN_PER_CRAFT = 1
// the vanilla sugar cost one pumpkin pie craft carries (the
// sweetener's own leg)
export const PUMPKINPIE_SUGAR_PER_CRAFT = 1
// the vanilla egg cost one pumpkin pie craft carries (the coop's
// own leg)
export const PUMPKINPIE_EGG_PER_CRAFT = 1
// the vanilla pumpkin pie yield one craft produces (the feast's
// own four)
export const PUMPKINPIE_PIES_PER_CRAFT = 4

/**
 * Decide whether one bot's pocket earns a pumpkin pie craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.pieCount=0]      pumpkin pies already held
 *                                        (the exact 'pumpkin_pie'
 *                                        name, the feast's own
 *                                        stock)
 * @param {number} [opts.pumpkinCount=0]  pumpkins on hand (the exact
 *                                        'pumpkin' name, the
 *                                        harvest's own gourd - the
 *                                        CARVED PUMPKIN and the
 *                                        PUMPKIN SEEDS never
 *                                        adopted)
 * @param {number} [opts.sugarCount=0]    sugar on hand (the exact
 *                                        'sugar' name, the mill's
 *                                        own coin - the SUGAR CANE
 *                                        never adopted)
 * @param {number} [opts.eggCount=0]      eggs on hand (the exact
 *                                        'egg' name, the coop's
 *                                        own coin)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, piesYield: number, pumpkinLeft: number, sugarLeft: number, eggLeft: number, pies: number}}
 */
export function decidePumpkinPie (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['pieCount', 'pumpkinCount', 'sugarCount', 'eggCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, piesYield: 0, pumpkinLeft: 0, sugarLeft: 0, eggLeft: 0, pies: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const pies = floor0(opts.pieCount)
  const pumpkin = floor0(opts.pumpkinCount)
  const sugar = floor0(opts.sugarCount)
  const egg = floor0(opts.eggCount)
  // a feast already held: the pocket's own dessert story - the pies
  // ride by item, the feast economy stays silent (the cookie word's
  // own keep law's sibling, the craft family's own keep gate), the
  // gourd and the sweetener and the egg ride their lefts untouched.
  if (pies >= 1) {
    return { action: 'keep', reason: 'pie-held', pumpkinLeft: pumpkin, sugarLeft: sugar, eggLeft: egg, pies, crafts: 0, piesYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds ALL THREE legs -
  // the respawnanchor word's own two-legged reading grown one leg
  // honest. Every one pumpkin and one sugar and one egg price their
  // feast honestly - the floor law prices the yield, the leftovers
  // named, never capped beyond the pocket.
  const crafts = Math.min(
    Math.floor(pumpkin / PUMPKINPIE_PUMPKIN_PER_CRAFT),
    Math.floor(sugar / PUMPKINPIE_SUGAR_PER_CRAFT),
    Math.floor(egg / PUMPKINPIE_EGG_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'pumpkin-sugar-egg-affordable',
      crafts,
      piesYield: crafts * PUMPKINPIE_PIES_PER_CRAFT,
      pumpkinLeft: pumpkin - crafts * PUMPKINPIE_PUMPKIN_PER_CRAFT,
      sugarLeft: sugar - crafts * PUMPKINPIE_SUGAR_PER_CRAFT,
      eggLeft: egg - crafts * PUMPKINPIE_EGG_PER_CRAFT,
      pies: 0
    }
  }
  // the honest shortage names its starving leg: the gourd priced
  // FIRST - the harvest's own story (the farm trip's own cargo),
  // never a guessed craft; the sweetener the cane's own mill (the
  // brewing lane's own coin), never a guessed craft; the egg the
  // coop's own coin (the chicken's own morning named never priced
  // here), never a guessed craft
  if (pumpkin < PUMPKINPIE_PUMPKIN_PER_CRAFT) {
    return { action: 'defer', reason: 'pumpkin-short', pumpkinLeft: pumpkin, sugarLeft: sugar, eggLeft: egg, pies: 0, crafts: 0, piesYield: 0 }
  }
  if (sugar < PUMPKINPIE_SUGAR_PER_CRAFT) {
    return { action: 'defer', reason: 'sugar-short', pumpkinLeft: pumpkin, sugarLeft: sugar, eggLeft: egg, pies: 0, crafts: 0, piesYield: 0 }
  }
  return { action: 'defer', reason: 'egg-short', pumpkinLeft: pumpkin, sugarLeft: sugar, eggLeft: egg, pies: 0, crafts: 0, piesYield: 0 }
}
