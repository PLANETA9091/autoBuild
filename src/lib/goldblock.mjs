// (v0.976.474) Gold block pack decision for the bot fleet.
//
// THE PROBLEM: the gold economy priced five legs - the clockcraft
// word's own timepiece (v0.976.449) the time lane, the smeltgold word
// (v0.976.459) the melt, the goldenapple word (v0.976.460) the premium
// food, the goldencarrot word (v0.976.462) the brewing wrap, the
// nuggetcraft word (v0.976.463) the split - but the STORAGE never
// priced: an ingot-rich bot hauls the nine-hoard bulk loose while the
// block it walks past IS the gold (9 gold ingots -> 1 gold block,
// vanilla - the shaped square, the crafting grid's own work, no fuel
// - the fire never rides this lane). THE NAMING CHAIN CLOSED: the
// nuggetcraft word (v0.976.463) named "the gold block the storage
// lane's own form named never adopted" and the hayblock word
// (v0.976.472) priced the crop lane's own nine-form while naming "the
// gold block still named never priced - the smeltgold lane's own
// future" - the gold economy's own storage form named twice, priced
// at last. THE FIX: decideGoldBlock() prices the PACK LANE - one
// pocket map to ONE word with ONE reason:
//   'keep'   - the ingot lane empty (the pack's own silence - the
//              smeltgold lane owns that story, the melt mints the
//              ingot the pack never guesses; nothing rides the grid -
//              the hayblock word's own honest empty reading)
//   'craft'  - the pack affordable (the one-leg law: the ingot the
//              only leg, the craft free - the floor law prices the
//              count, the fractional remainder named, never capped)
//   'defer'  - the partial tithe never spends (the one-to-eight
//              ingots ride the honest shortage - the smeltgold lane's
//              own story names it, the hayblock word's own tithe
//              reading)
//   'refuse' - junk input (never throws into the fleet loop)
// THE NINE-TITHE LAW: nine ingots ride one block out - the vanilla
// recipe's own honest form, the yield never inflated, a partial tithe
// never spends: the ingotLeft rides the pocket's honest remainder
// named (the hayblock word's own ground-rides law - the short side
// never lies about what the pocket holds). THE PACK-NEVER-STOPS LAW:
// the gold already held never gates the pack - the storage never
// doubles a MEAL nor a WRAP (the goldenapple word's own keep law
// prices the ingot's demand face, the goldencarrot word the nugget's,
// the wrap reads by item), the pack prices the BULK: every tithe the
// pocket affords packs, the keep gate rides the INGOT's presence,
// never the block's (the held blocks ride the blocks field untouched,
// the caller merges - the pure read mutates nothing). THE ONE-LEG
// LAW: the pack is fuel-free (the crafting grid's own work) - the
// ingot the only leg, the empty gate and the short gate the two
// honest depths of the same silence (the hayblock word's own
// one-leg form - the family's fullest one-leg shape, the metal's own
// reading). THE NINE-FORMS-OPPOSITE LAW: the nuggetcraft word owns
// the split (1 ingot -> 9 nuggets, the demand lane's own mint), this
// word the storage (9 ingots -> 1 block, the bulk's own vault) - the
// two nine-forms opposite directions, the caller chains the lanes
// (the split mints the nuggets the wrap spends, the storage packs the
// bulk the pocket hauls), this word reads the pocket the caller
// brings. THE CENSUS LAW: exact 'gold_block' (the block the storage
// form's own metal); exact 'gold_ingot' (the smeltgold lane's own
// yield); the NUGGET never adopted (the goldencarrot word's own wrap
// form, the nuggetcraft word's own yield - the nugget lane's own
// story, the wrap never crosses). Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero
// (a lying census must not poison the arithmetic); they are read,
// not refused - the honesty lives in the clamp. No cap: an
// ingot-rich pocket packs every block it affords, an honest longer
// stack never clamped. The pure read mutates nothing.

// the vanilla ingot cost one gold block packs (the bulk's own
// nine-tithe)
export const GOLDBLOCK_INGOT_PER_BLOCK = 9
// the vanilla gold block yield one pack produces
export const GOLDBLOCK_BLOCKS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a gold block pack word.
 *
 * @param {object} [opts]
 * @param {number} [opts.ingotCount=0]  gold ingots on hand (the exact
 *                                      'gold_ingot' name, the
 *                                      smeltgold lane's own yield)
 * @param {number} [opts.blocksCount=0] gold blocks already held (the
 *                                      exact 'gold_block' name, the
 *                                      storage form's own metal -
 *                                      rides the blocks field
 *                                      untouched, the pack never
 *                                      stops)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, blocksYield: number, ingotLeft: number, blocks: number}}
 */
export function decideGoldBlock (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['ingotCount', 'blocksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, blocksYield: 0, ingotLeft: 0, blocks: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const ingot = floor0(opts.ingotCount)
  const blocks = floor0(opts.blocksCount)
  // the ingot lane empty: the pack's own silence - the smeltgold lane
  // owns that story (the melt mints the ingot, the pack never
  // guesses), nothing rides the grid (the keep-gate-first law, the
  // hayblock word's own honest empty reading - the family's own keep
  // gate).
  if (ingot < 1) {
    return { action: 'keep', reason: 'ingot-empty', crafts: 0, blocksYield: 0, ingotLeft: 0, blocks }
  }
  // the pocket's own arithmetic: the one-leg law - the ingot the only
  // leg, the pack free (the grid's own work, the fire never rides).
  // The floor law prices the count (a fractional census floors to the
  // honest integer, the remainder named in the ingotLeft), the yield
  // never inflated, never capped beyond the pocket, the held blocks
  // ride untouched (the pack never stops - the blocks field the
  // caller merges, the pure read mutates nothing).
  const crafts = Math.floor(ingot / GOLDBLOCK_INGOT_PER_BLOCK)
  // the tithe short: the partial tithe never spends - the honest
  // shortage names its story (the smeltgold lane's own, the hayblock
  // word's own tithe reading). The one-to-eight ingots ride ingotLeft
  // named (the short side never lies about what the pocket holds).
  if (crafts < 1) {
    return { action: 'defer', reason: 'ingot-short', crafts: 0, blocksYield: 0, ingotLeft: ingot, blocks }
  }
  return {
    action: 'craft',
    reason: 'ingot-affordable',
    crafts,
    blocksYield: crafts * GOLDBLOCK_BLOCKS_PER_CRAFT,
    ingotLeft: ingot - crafts * GOLDBLOCK_INGOT_PER_BLOCK,
    blocks
  }
}
