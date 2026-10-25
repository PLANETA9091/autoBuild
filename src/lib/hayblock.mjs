// (v0.976.472) Hay block pack decision for the bot fleet.
//
// THE PROBLEM: the crop lane priced its sow (the netherwart word,
// v0.976.470) and its table (the bread word, v0.976.471) - but the
// STORAGE never priced: a wheat-rich bot hauls the nine-hoard bulk
// loose while the pack it walks past IS the block (9 wheat -> 1 hay
// block, vanilla - the shaped square, the crafting grid's own work,
// no fuel - the fire never rides this lane). THE NAMING CHAIN: the
// nuggetcraft word (v0.976.463) named "the gold block the storage
// lane's own form named never adopted" and the bread word (v0.976.471)
// named "the HAY BLOCK the storage lane's own nine-form, never
// adopted" - the crop lane's own storage form named twice, priced at
// last. THE FIX: decideHayBlock() prices the PACK LANE - one pocket
// map to ONE word with ONE reason:
//   'keep'   - the wheat lane empty (the pack's own silence - the
//              farm trip owns that story, the harvest mints the wheat
//              the pack never guesses; nothing rides the grid - the
//              nuggetcraft word's own honest empty reading)
//   'craft'  - the pack affordable (the one-leg law: the wheat the
//              only leg, the craft free - the floor law prices the
//              count, the fractional remainder named, never capped)
//   'defer'  - the partial tithe never spends (the one-to-eight wheat
//              ride the honest shortage - the farm trip's own story
//              names it, the bread word's own tithe reading)
//   'refuse' - junk input (never throws into the fleet loop)
// THE NINE-TITHE LAW: nine wheat ride one block out - the vanilla
// recipe's own honest form, the yield never inflated, a partial tithe
// never spends: the wheatLeft rides the pocket's honest remainder
// named (the bread word's own ground-rides law - the short side never
// lies about what the pocket holds). THE PACK-NEVER-STOPS LAW: the
// hay already held never gates the pack - the storage never doubles a
// MEAL (the bread word's own keep law prices the staple's demand, the
// loaf reads by item), the pack prices the BULK: every tithe the
// pocket affords packs, the keep gate rides the WHEAT's presence,
// never the block's (the held blocks ride the blocks field untouched,
// the caller merges - the pure read mutates nothing). THE ONE-LEG
// LAW: the pack is fuel-free (the crafting grid's own work) - the
// wheat the only leg, the empty gate and the short gate the two
// honest depths of the same silence (the nuggetcraft word's own
// empty-keep law and the bread word's own tithe-defer law united -
// the family's fullest one-leg form). THE TITHE-SHARING LAW: the
// bread word owns the staple's tithe (three per loaf), this word owns
// the bulk's tithe (nine per block) - the caller chains the lanes
// (the staple first, the bulk second), this word reads the pocket the
// caller brings. THE CENSUS LAW: exact 'hay_block' (the block the
// storage form's own metal); exact 'wheat' (the WHEAT SEEDS the
// replant lane's own form, never adopted - the farm trip's own
// story). Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not a
// crash loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a wheat-rich pocket packs every block
// it affords, an honest longer stack never clamped. The pure read
// mutates nothing.

// the vanilla wheat cost one hay block packs (the bulk's own
// nine-tithe)
export const HAYBLOCK_WHEAT_PER_BLOCK = 9
// the vanilla hay block yield one pack produces
export const HAYBLOCK_BLOCKS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a hay block pack word.
 *
 * @param {object} [opts]
 * @param {number} [opts.wheatCount=0]  wheat on hand (the exact
 *                                      'wheat' name, the farm trip's
 *                                      own yield - the seeds never
 *                                      adopted)
 * @param {number} [opts.blocksCount=0] hay blocks already held (the
 *                                      exact 'hay_block' name, the
 *                                      storage form's own metal -
 *                                      rides the blocks field
 *                                      untouched, the pack never
 *                                      stops)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, blocksYield: number, wheatLeft: number, blocks: number}}
 */
export function decideHayBlock (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['wheatCount', 'blocksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, blocksYield: 0, wheatLeft: 0, blocks: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const wheat = floor0(opts.wheatCount)
  const blocks = floor0(opts.blocksCount)
  // the wheat lane empty: the pack's own silence - the farm trip owns
  // that story (the harvest mints the wheat, the pack never guesses),
  // nothing rides the grid (the keep-gate-first law, the nuggetcraft
  // word's own honest empty reading - the family's own keep gate).
  if (wheat < 1) {
    return { action: 'keep', reason: 'wheat-empty', crafts: 0, blocksYield: 0, wheatLeft: 0, blocks }
  }
  // the pocket's own arithmetic: the one-leg law - the wheat the only
  // leg, the pack free (the grid's own work, the fire never rides).
  // The floor law prices the count (a fractional census floors to the
  // honest integer, the remainder named in the wheatLeft), the yield
  // never inflated, never capped beyond the pocket, the held blocks
  // ride untouched (the pack never stops - the blocks field the
  // caller merges, the pure read mutates nothing).
  const crafts = Math.floor(wheat / HAYBLOCK_WHEAT_PER_BLOCK)
  // the tithe short: the partial tithe never spends - the honest
  // shortage names its story (the farm trip's own, the bread word's
  // own tithe reading). The one-to-eight wheat ride wheatLeft named
  // (the short side never lies about what the pocket holds).
  if (crafts < 1) {
    return { action: 'defer', reason: 'wheat-short', crafts: 0, blocksYield: 0, wheatLeft: wheat, blocks }
  }
  return {
    action: 'craft',
    reason: 'wheat-affordable',
    crafts,
    blocksYield: crafts * HAYBLOCK_BLOCKS_PER_CRAFT,
    wheatLeft: wheat - crafts * HAYBLOCK_WHEAT_PER_BLOCK,
    blocks
  }
}
