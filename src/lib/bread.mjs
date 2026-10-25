// (v0.976.471) Bread craft decision for the bot fleet.
//
// THE PROBLEM: the crop lane priced its first leg this very day - the
// netherwart word (v0.976.470) priced the SOW - but the crop lane's
// own TABLE never priced: a wheat-rich bot stands while the ration's
// own staple starves, and the grid it walks past IS the bake (3 wheat
// -> 1 bread, vanilla - the shaped row, the crafting grid's own work,
// no fuel - the fire never rides this lane). THE FIX: decideBread()
// prices the BAKE LANE - one pocket map to ONE word with ONE reason:
//   'keep'   - the bread already held (the staple never doubles - the
//              goldencarrot word's own keep law's twin, the craft
//              family's own keep gate; the wheat rides wheatLeft
//              untouched)
//   'craft'  - the bake affordable (the one-leg law: the wheat the
//              only leg, the craft free - the floor law prices the
//              count, the fractional remainder named, never capped)
//   'defer'  - the honest shortage names its starving leg (the wheat
//              the farm trip's own story)
//   'refuse' - junk input (never throws into the fleet loop)
// THE ONE-LEG LAW: the bake is fuel-free (the crafting grid's own
// work) - no second leg exists, no second defer lives here (the
// nuggetcraft word's own shape, the split law's own cousin). THE
// THREE-TITHE LAW: three wheat ride one loaf out - the vanilla
// recipe's own honest form, the yield never inflated, a partial tithe
// (one or two wheat) never spends: the wheatLeft rides the pocket's
// honest remainder named (the farm's own re-task reads it - the wart
// word's own ground-rides law, the short leg never lies about what
// the pocket holds). THE CROP LANE LAW: the netherwart word priced
// the seed's own sow, this word prices the wheat farm's own staple -
// the everyday loaf the ration's own base (the goldenapple word the
// premium food, the goldencarrot word the brewing food, this word
// the table's own bread). THE CENSUS LAW: exact 'bread'; exact
// 'wheat' (the WHEAT SEEDS the replant lane's own form, never
// adopted - the farm trip's own story; the HAY BLOCK the storage
// lane's own nine-form, never adopted - the wart word's own
// nine-form law). Junk inputs never throw: they return a refuse with
// the junk-input reason so a caller bug degrades into a log line,
// not a crash loop. Negative counts floor to zero (a lying census
// must not poison the arithmetic); they are read, not refused - the
// honesty lives in the clamp. No cap: a wheat-rich pocket prices
// every loaf it affords, an honest longer yield list never clamped.
// The pure read mutates nothing.

// the vanilla wheat cost one bread craft carries (the farm's own
// three-tithe)
export const BREAD_WHEAT_PER_CRAFT = 3
// the vanilla bread yield one bread craft produces
export const BREAD_BREADS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a bread craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.breadCount=0]  breads already held (the exact
 *                                      'bread' name, the staple's own
 *                                      stock)
 * @param {number} [opts.wheatCount=0]  wheat on hand (the exact
 *                                      'wheat' name, the farm trip's
 *                                      own yield - the seeds and the
 *                                      hay block never adopted)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, breadsYield: number, wheatLeft: number, breads: number}}
 */
export function decideBread (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['breadCount', 'wheatCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, breadsYield: 0, wheatLeft: 0, breads: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const breads = floor0(opts.breadCount)
  const wheat = floor0(opts.wheatCount)
  // a bread already held: the ration's own staple story - the loaf
  // reads by item, the bake economy stays silent (the goldencarrot
  // word's own keep law's twin, the craft family's own keep gate).
  if (breads >= 1) {
    return { action: 'keep', reason: 'bread-held', wheatLeft: wheat, breads, crafts: 0, breadsYield: 0 }
  }
  // the pocket's own arithmetic: the one-leg law - the wheat the only
  // leg, the bake free (the grid's own work, the fire never rides).
  // The floor law prices the count (a fractional census floors to the
  // honest integer, the remainder named in the wheatLeft), the yield
  // never inflated, never capped beyond the pocket.
  const crafts = Math.floor(wheat / BREAD_WHEAT_PER_CRAFT)
  // the tithe short: the honest shortage names its starving leg - the
  // farm trip's own story (the farm mints the wheat, the bake never
  // guesses the harvest). A partial tithe never spends: the one or
  // two wheat ride wheatLeft named (the wart word's own
  // ground-rides law - the short side never lies about the pocket).
  if (crafts < 1) {
    return { action: 'defer', reason: 'wheat-short', crafts: 0, breadsYield: 0, wheatLeft: wheat, breads }
  }
  return {
    action: 'craft',
    reason: 'wheat-affordable',
    crafts,
    breadsYield: crafts * BREAD_BREADS_PER_CRAFT,
    wheatLeft: wheat - crafts * BREAD_WHEAT_PER_CRAFT,
    breads
  }
}
