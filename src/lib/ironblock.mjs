// (v0.976.495) Iron block pack decision for the bot fleet.
//
// THE PROBLEM: the iron pack walked unpriced. The smeltraw word
// (v0.976.453) prices the CONSOLIDATION the fire performs - the raw
// iron -> ingots - and the goldblock word prices the gold ingot's
// own pack (nine -> one block) - but the IRON ingot's own pack never
// priced: nine iron ingots -> one iron block, vanilla, the
// storage/lane's own compression - an ingot-rich pocket hauls the
// ninefold bulk nowhere, the raw word's own child held a lie
// nobody's word spent. THE FIX: decideIronBlock() prices the PACK -
// one pocket map to ONE word with ONE reason:
//   'keep'   - the ingot lane empty (the pack's own silence - the
//              smeltraw lane owns that story, nothing rides the
//              grid)
//   'craft'  - the pack affords (the floor law prices the count -
//              the remainder named in the ingotLeft, never rounded
//              into a lie)
//   'defer'  - ingots held but short of the nine (the honest
//              shortage names its story - the smeltraw lane's own,
//              the goldblock word's own tithe reading)
//   'refuse' - junk input (never throws into the fleet loop)
// THE PACK LAW: nine iron ingots mint one iron block - vanilla's
// own storage compression (the goldblock word's own nine->one
// reading, the sister metal's own even hand). THE KIN LAW: the
// goldblock word prices the GOLD's own pack, this word the IRON's
// own pack - the two words read their own names only, the grid
// shared never the pocket split (the kin words' own law). THE CHAIN
// LAW: the smeltraw word prices what the RAW becomes (the fire's
// own melt), this word prices what the INGOT becomes - the raw ->
// ingot -> block chain the storage front's own two legs, the
// handover's own honesty the test pins. THE HELD LAW: the held
// blocks ride untouched through the read (the blocks field the
// caller merges, the pack never stops, the pure read mutates
// nothing). Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not
// a crash loop. Negative counts floor to zero (a lying census must
// not poison the arithmetic); they are read, not refused - the
// honesty lives in the clamp. Fractional counts floor honestly
// with the remainder named. No cap: an ingot-rich pocket packs
// every block it affords, an honest longer yield list never
// clamped.

// the vanilla pack price one block mints (the goldblock word's own
// nine->one - the sister metal's own even hand)
export const IRONBLOCK_INGOT_PER_BLOCK = 9
// the vanilla pack yield one craft mints
export const IRONBLOCK_BLOCKS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns an iron pack word.
 *
 * @param {object} [opts]
 * @param {number} [opts.ingotCount=0]   iron ingots on hand (the
 *                                       exact 'iron_ingot' name,
 *                                       the smeltraw word's own
 *                                       mint's child)
 * @param {number} [opts.blocksCount=0]  iron blocks already held
 *                                       (rides untouched - the
 *                                       caller merges)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, blocksYield: number, ingotLeft: number, blocks: number}}
 */
export function decideIronBlock (opts = {}) {
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
  const ingot = Math.floor(floor0(opts.ingotCount))
  const ingotRemainder = floor0(opts.ingotCount) - ingot
  const blocks = floor0(opts.blocksCount)
  // the ingot lane empty: the pack's own silence - the smeltraw lane
  // owns that story (the melt mints the ingot, the pack never
  // guesses), nothing rides the grid (the keep-gate-first law, the
  // goldblock word's own honest empty reading).
  if (ingot < 1) {
    return { action: 'keep', reason: 'ingot-empty', crafts: 0, blocksYield: 0, ingotLeft: ingotRemainder, blocks }
  }
  // the pocket's own arithmetic: the one-leg law - the ingot the
  // only leg, the pack free (the grid's own work, the fire never
  // rides). The floor law prices the count (a fractional census
  // floors to the honest integer, the remainder named in the
  // ingotLeft), the yield never inflated, never capped beyond the
  // pocket, the held blocks ride untouched.
  const crafts = Math.floor(ingot / IRONBLOCK_INGOT_PER_BLOCK)
  // the pack short: the partial pack never spends - the honest
  // shortage names its story (the smeltraw lane's own, the
  // goldblock word's own tithe reading). The one-to-eight ingots
  // ride ingotLeft named (the short side never lies about what the
  // pocket holds).
  if (crafts < 1) {
    return { action: 'defer', reason: 'ingot-short', crafts: 0, blocksYield: 0, ingotLeft: ingot + ingotRemainder, blocks }
  }
  return {
    action: 'craft',
    reason: 'ingot-affordable',
    crafts,
    blocksYield: crafts * IRONBLOCK_BLOCKS_PER_CRAFT,
    ingotLeft: (ingot - crafts * IRONBLOCK_INGOT_PER_BLOCK) + ingotRemainder,
    blocks
  }
}
