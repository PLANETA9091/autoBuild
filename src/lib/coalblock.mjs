// (v0.976.497) Coal block pack decision for the bot fleet.
//
// THE PROBLEM: the fuel's own storage walked unpriced. The smelt
// family's FUEL LAW prices the coal's own BURN (one coal smelts
// eight - the smeltglass word, the smeltchorus word, the smeltraw
// and smeltcopper words all read the same eight) - but the FUEL'S
// OWN PACK never priced: nine coal -> one coal block, vanilla, the
// storage lane's own compression (the unpack never burns the
// value - the block the ninefold bulk's own quiet form) - a
// coal-rich pocket hauls the ninefold bulk nowhere, the fire's own
// feed held a lie nobody's word spent. THE FIX: decideCoalBlock()
// prices the PACK - one pocket map to ONE word with ONE reason:
//   'keep'   - the coal lane empty (the pack's own silence - the
//              mining lane owns that story, nothing rides the grid)
//   'craft'  - the pack affords (the floor law prices the count -
//              the remainder named in the coalLeft, never rounded
//              into a lie)
//   'defer'  - coal held but short of the nine (the honest
//              shortage names its story - the smelt lanes' own
//              feed, the pack family's own tithe reading)
//   'refuse' - junk input (never throws into the fleet loop)
// THE PACK LAW: nine coal mint one coal block - vanilla's own
// storage compression (the goldblock, ironblock and copperblock
// words' own nine->one, the fourth pack the family's even hand).
// THE KIN LAW: the four pack words read their own names only - the
// gold, the iron, the copper, the coal this word's - the grid
// shared never the pocket split. THE CHAIN LAW: the smelt family's
// FUEL LAW prices what the COAL burns, this word prices what the
// COAL becomes when it waits - the burn the fire's own story, the
// pack the storage's own - the handover's own honesty the test
// pins. THE HELD LAW: the held blocks ride untouched through the
// read (the blocks field the caller merges, the pack never stops,
// the pure read mutates nothing). Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative counts
// floor to zero (a lying census must not poison the arithmetic);
// they are read, not refused - the honesty lives in the clamp.
// Fractional counts floor honestly with the remainder named. No
// cap: a coal-rich pocket packs every block it affords, an honest
// longer yield list never clamped.

// the vanilla pack price one block mints (the pack family's own
// nine->one - the fourth pack's own even hand)
export const COALBLOCK_COAL_PER_BLOCK = 9
// the vanilla pack yield one craft mints
export const COALBLOCK_BLOCKS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a coal pack word.
 *
 * @param {object} [opts]
 * @param {number} [opts.coalCount=0]    coal on hand (the exact
 *                                       'coal' name, the smelt
 *                                       family's own fuel unit)
 * @param {number} [opts.blocksCount=0]  coal blocks already held
 *                                       (rides untouched - the
 *                                       caller merges)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, blocksYield: number, coalLeft: number, blocks: number}}
 */
export function decideCoalBlock (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['coalCount', 'blocksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, blocksYield: 0, coalLeft: 0, blocks: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const coal = Math.floor(floor0(opts.coalCount))
  const coalRemainder = floor0(opts.coalCount) - coal
  const blocks = floor0(opts.blocksCount)
  // the coal lane empty: the pack's own silence - the mining lane
  // owns that story (the pick mints the coal, the pack never
  // guesses), nothing rides the grid (the keep-gate-first law, the
  // pack family's own honest empty reading).
  if (coal < 1) {
    return { action: 'keep', reason: 'coal-empty', crafts: 0, blocksYield: 0, coalLeft: coalRemainder, blocks }
  }
  // the pocket's own arithmetic: the one-leg law - the coal the
  // only leg, the pack free (the grid's own work, the fire never
  // rides). The floor law prices the count, the remainder named in
  // the coalLeft, the yield never inflated, never capped beyond
  // the pocket, the held blocks ride untouched.
  const crafts = Math.floor(coal / COALBLOCK_COAL_PER_BLOCK)
  // the pack short: the partial pack never spends - the honest
  // shortage names its story (the smelt lanes' own feed, the pack
  // family's own tithe reading). The one-to-eight coal ride
  // coalLeft named - the burn the caller's own re-task.
  if (crafts < 1) {
    return { action: 'defer', reason: 'coal-short', crafts: 0, blocksYield: 0, coalLeft: coal + coalRemainder, blocks }
  }
  return {
    action: 'craft',
    reason: 'coal-affordable',
    crafts,
    blocksYield: crafts * COALBLOCK_BLOCKS_PER_CRAFT,
    coalLeft: (coal - crafts * COALBLOCK_COAL_PER_BLOCK) + coalRemainder,
    blocks
  }
}
