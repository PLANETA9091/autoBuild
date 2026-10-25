// (v0.976.475) Wheat seed sow decision for the bot fleet.
//
// THE PROBLEM: the crop lane priced its table (the bread word,
// v0.976.471) and its storage (the hayblock word, v0.976.472) - but
// the REPLANT never priced: a seed-rich bot walks the farm while the
// plot it crosses starves for seed - and the GROUND underfoot IS the
// sow (1 wheat seed planted on 1 farmland -> 1 planted wheat,
// vanilla - no craft grid, no fuel, the world's own soil). THE
// NAMING CHAIN CLOSED: the bread word (v0.976.471) and the hayblock
// word (v0.976.472) both census "exact 'wheat' (the WHEAT SEEDS the
// replant lane's own form, never adopted - the farm trip's own
// story)" - the crop lane's own replant named twice, priced at last
// (the netherwart word, v0.976.470, priced the wart's own sow; this
// word prices the wheat's). THE FIX: decideWheatSow() prices the SOW
// LANE - one pocket map to ONE word with ONE reason:
//   'keep'   - the ground lane empty (the farmland-empty reads the
//              KEEP - the netherwart word's own ground law: the hoe
//              mints the tilled tile, the hoe trip owns that story,
//              the sow never guesses the ground; the seeds ride
//              seedsLeft untouched)
//   'sow'    - the sow affordable (the min law binds BOTH legs: the
//              floor law prices the count, the leftovers named, never
//              capped)
//   'defer'  - the honest shortage names its starving leg (the seed
//              the harvest's own remint)
//   'refuse' - junk input (never throws into the fleet loop)
// THE GROUND LAW: the farmland the sow's own ground - the
// farmland-empty reads the KEEP, never a defer (the waterfill word's
// own law, the netherwart word's own ground law - no honest shortage
// lives past the empty gate: the tilled tile either stands underfoot
// or the hoe trip owes it, the word never guesses which). THE SEED
// LAW: the seed the harvest's own remint - the seeds-short reads the
// DEFER (the replant cycle self-feeds: the defer names the harvest
// that mints the next seed). THE MIN LAW binds both legs (the
// netherwart word's own sow reading, the eyeofender word's
// two-legged law). THE REPLANT LAW: one wheat breaks into one wheat
// plus one-to-four seeds - the plot replants itself from its own
// harvest, the first seed the only outside coin the lane ever spends.
// THE CENSUS LAW: exact 'wheat_seeds' (the seeds the replant lane's
// own form; the WHEAT the staple's own form - the bread word's own
// tithe and the hayblock word's own pack, never adopted here; the
// PUMPKIN and MELON SEEDS the other crops' own forms, never
// adopted); the farmland the CALLER'S OWN TILE COUNT (the hoed
// ground the world holds - never a pocket item; the DIRT and GRASS
// BLOCK the unhoed forms, never adopted). THE GROWTH NEVER PRICED:
// the planted wheat's own yield rides the world's own clock - the
// word prices the SOW only, the harvest the farm trip's own story
// named never guessed here. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: a seed-rich tile-rich
// read prices every sow it affords, an honest longer plot list never
// clamped. The pure read mutates nothing.

// the vanilla seed cost one sow carries (the farm trip's own seed
// tithe)
export const WHEATSOW_SEEDS_PER_SOW = 1
// the vanilla ground cost one sow carries (the farm's own tile)
export const WHEATSOW_FARMLAND_PER_SOW = 1

/**
 * Decide whether one bot's pocket earns a wheat seed sow word.
 *
 * @param {object} [opts]
 * @param {number} [opts.seedsCount=0]    wheat seeds on hand (the
 *                                        exact 'wheat_seeds' name,
 *                                        the replant lane's own
 *                                        form - the WHEAT never
 *                                        adopted)
 * @param {number} [opts.farmlandCount=0] farmland tiles in reach (the
 *                                        caller's own tile count -
 *                                        the hoed ground the world
 *                                        holds, never a pocket item)
 * @returns {{action: 'sow'|'defer'|'refuse'|'keep', reason: string, sows: number, seedsLeft: number, farmlandLeft: number}}
 */
export function decideWheatSow (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['seedsCount', 'farmlandCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', sows: 0, seedsLeft: 0, farmlandLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const seeds = floor0(opts.seedsCount)
  const farmland = floor0(opts.farmlandCount)
  // the ground lane empty: the farmland-empty reads the KEEP - the
  // netherwart word's own ground law (the hoe mints the tilled tile,
  // the hoe trip owns that story, the sow never guesses the ground),
  // the seeds ride seedsLeft untouched (the keep-gate-first law, the
  // sow word's own honest empty reading - the family's own keep
  // gate).
  if (farmland < 1) {
    return { action: 'keep', reason: 'farmland-empty', sows: 0, seedsLeft: seeds, farmlandLeft: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // netherwart word's own sow reading. Every seed and one tile price
  // their plot honestly - the floor law prices the count (a
  // fractional census floors to the honest integer, the remainder
  // named in the seedsLeft), the yield never inflated, never capped
  // beyond the read.
  const sows = Math.min(
    Math.floor(seeds / WHEATSOW_SEEDS_PER_SOW),
    Math.floor(farmland / WHEATSOW_FARMLAND_PER_SOW)
  )
  // the seed lane short: the honest shortage names its starving leg -
  // the harvest's own remint (the replant cycle self-feeds: the first
  // break mints the seed, every harvest after re-mints the plot; the
  // tile stands ready, the farmlandLeft rides untouched - the ground
  // the word never spends on a guessed sow).
  if (sows < 1) {
    return { action: 'defer', reason: 'seeds-short', sows: 0, seedsLeft: 0, farmlandLeft: farmland }
  }
  return {
    action: 'sow',
    reason: 'seeds-farmland-affordable',
    sows,
    seedsLeft: seeds - sows * WHEATSOW_SEEDS_PER_SOW,
    farmlandLeft: farmland - sows * WHEATSOW_FARMLAND_PER_SOW
  }
}
