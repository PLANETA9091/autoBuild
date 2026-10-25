// (v0.976.462) Golden carrot decision for the bot fleet.
//
// THE PROBLEM: the gold economy's demand priced two legs only - the
// clockcraft word's own timepiece (4 ingots + 1 redstone, v0.976.449)
// the time lane, the goldenapple word (8 ingots + 1 apple,
// v0.976.460) the premium food lane - while the BREWING lane's own
// ingredient starves: the night vision potion wraps the golden carrot
// (1 golden carrot + awkward potion), the horse lane's own staple,
// the food lane's own best saturation per stack. The pocket holds
// carrots from the farm trip and gold from the nether roads, but the
// NUGGETS never split: 8 gold nuggets + 1 carrot -> 1 golden carrot,
// vanilla. THE FIX: decideGoldenCarrotCraft() prices the BREWING
// LANE'S OWN INGREDIENT - one pocket map to ONE word with ONE reason:
//   'keep'   - a golden carrot already held (the golden form never
//              doubles - the pieces-held law's twin, the craft
//              family's own keep gate)
//   'craft'  - nugget + carrot affordable (the min law binds BOTH
//              legs - the goldenapple word's own two-legged reading,
//              the floor law prices the yield, the leftovers named,
//              never capped)
//   'defer'  - the honest shortage names its starving leg
//              (nugget-short FIRST - the metal leg, the smeltgold
//              lane's own downstream; carrot-short - the farm trip
//              owns that story)
//   'refuse' - junk input (never throws into the fleet loop)
// THE NUGGET LAW: eight nuggets wrap one carrot - the vanilla
// recipe's own honest form, the yield never inflated. The nuggets
// ride the INGOT'S OWN SPLIT (1 gold ingot -> 9 gold nuggets,
// vanilla) - the split priced NEVER here: the nuggetcraft word stays
// the split lane's own future, named never priced (the caller's
// census brings the nuggets, this word prices the wrap only).
// THE GOLDEN FAMILY LAW: the census rides exact 'golden_carrot' -
// vanilla has no golden carrot kin; the nugget census rides exact
// 'gold_nugget' - the GOLD INGOT the smeltgold lane's own yield and
// the gold block the storage lane's own form, both named never
// adopted here (the split form is this word's own metal); the carrot
// census rides exact 'carrot' - the CARROT ON A STICK the pig-riding
// lane's own form, named never adopted. THE TWO-WRAP LAW: the gold
// economy's two food forms wrap in DIFFERENT metals - the golden
// apple the INGOT's own wrap (8 ingots, the goldenapple word's own
// reading), the golden carrot the NUGGET's own wrap (8 nuggets, this
// word's own) - the family reads each word's own name only, the wrap
// never crosses. THE CONSUMER LAW CONTINUED: the gold economy's
// demand words are its own futures - the CLOCK ALREADY PRICED (the
// clockcraft word's own timepiece v0.976.449), the GOLDEN APPLE
// ALREADY PRICED (the goldenapple word v0.976.460), this word the
// GOLDEN CARROT the brewing lane's own future NOW PRICED; the BELL
// the village lane's own relic NAMED NEVER PRICED FOREVER - the
// vanilla voice killed the craft (bells cannot be crafted: found in
// villages, bought from villagers, the loot/trade class the
// enchanted golden apple's own). Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative counts floor
// to zero (a lying census must not poison the arithmetic); they are
// read, not refused - the honesty lives in the clamp. No cap: a
// nugget-rich carrot-rich pocket prices every craft it affords, an
// honest longer yield list never clamped. The pure read mutates
// nothing.

// the vanilla nugget cost one golden carrot craft carries (eight
// wrap the root)
export const GOLDENCARROT_NUGGET_PER_CRAFT = 8
// the vanilla carrot cost one golden carrot craft carries (one root)
export const GOLDENCARROT_CARROT_PER_CRAFT = 1
// the vanilla golden carrot yield one golden carrot craft produces
export const GOLDENCARROT_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a golden carrot craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.goldenCarrotCount=0] golden carrots already
 *                                            held (the exact
 *                                            'golden_carrot' name)
 * @param {number} [opts.goldNuggetCount=0]   gold nuggets on hand (the
 *                                            exact 'gold_nugget'
 *                                            name, the ingot's own
 *                                            split form)
 * @param {number} [opts.carrotCount=0]       carrots on hand (the
 *                                            exact 'carrot' name, the
 *                                            farm trip's own drop)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, goldenYield: number, nuggetLeft: number, carrotLeft: number, golden: number}}
 */
export function decideGoldenCarrotCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['goldenCarrotCount', 'goldNuggetCount', 'carrotCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, goldenYield: 0, nuggetLeft: 0, carrotLeft: 0, golden: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const golden = floor0(opts.goldenCarrotCount)
  const nugget = floor0(opts.goldNuggetCount)
  const carrot = floor0(opts.carrotCount)
  // a golden form already held: the brewing lane's own story - the
  // potion ingredient rides by item, the golden economy stays silent
  // (the pieces-held law's twin, the craft family's own keep gate).
  if (golden >= 1) {
    return { action: 'keep', reason: 'golden-held', nuggetLeft: nugget, carrotLeft: carrot, golden, crafts: 0, goldenYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // goldenapple word's own two-legged reading. Every eight nuggets
  // and one carrot price their form honestly - the floor law prices
  // the yield, the leftovers named, never capped beyond the pocket.
  const crafts = Math.min(
    Math.floor(nugget / GOLDENCARROT_NUGGET_PER_CRAFT),
    Math.floor(carrot / GOLDENCARROT_CARROT_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'nugget-carrot-affordable',
      crafts,
      goldenYield: crafts * GOLDENCARROT_PER_CRAFT,
      nuggetLeft: nugget - crafts * GOLDENCARROT_NUGGET_PER_CRAFT,
      carrotLeft: carrot - crafts * GOLDENCARROT_CARROT_PER_CRAFT,
      golden: 0
    }
  }
  // the honest shortage names its starving leg: the nugget priced
  // FIRST - the metal leg, the smeltgold lane's own downstream (the
  // ingot's own split the caller re-tasks), never a guessed craft;
  // the carrot leg re-tasks the farm trip (the crop lane's own
  // yield), never a guessed craft
  if (nugget < GOLDENCARROT_NUGGET_PER_CRAFT) {
    return { action: 'defer', reason: 'nugget-short', nuggetLeft: nugget, carrotLeft: carrot, golden: 0, crafts: 0, goldenYield: 0 }
  }
  return { action: 'defer', reason: 'carrot-short', nuggetLeft: nugget, carrotLeft: carrot, golden: 0, crafts: 0, goldenYield: 0 }
}
