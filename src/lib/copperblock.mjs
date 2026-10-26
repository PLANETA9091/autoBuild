// (v0.976.496) Copper block pack decision for the bot fleet.
//
// THE PROBLEM: the copper pack walked unpriced. The smeltcopper word
// prices the CONSOLIDATION the fire performs - the raw copper ->
// ingots - and the pack family priced TWO of the three metals: the
// goldblock word packs the GOLD (nine->one), the ironblock word
// (.495) packs the IRON (nine->one) - but the COPPER ingot's own
// pack never priced: nine copper ingots -> one copper block,
// vanilla, the storage lane's own compression - a copper-rich
// pocket hauls the ninefold bulk nowhere, the third metal's own
// pack held a lie nobody's word spent. THE FIX: decideCopperBlock()
// prices the PACK - one pocket map to ONE word with ONE reason:
//   'keep'   - the ingot lane empty (the pack's own silence - the
//              smeltcopper lane owns that story, nothing rides the
//              grid)
//   'craft'  - the pack affords (the floor law prices the count -
//              the remainder named in the ingotLeft, never rounded
//              into a lie)
//   'defer'  - ingots held but short of the nine (the honest
//              shortage names its story - the smeltcopper lane's
//              own, the pack family's own tithe reading)
//   'refuse' - junk input (never throws into the fleet loop)
// THE PACK LAW: nine copper ingots mint one copper block -
// vanilla's own storage compression (the goldblock and ironblock
// words' own nine->one, the third metal's own even hand). THE KIN
// LAW: the three pack words read their own names only - the gold
// the goldblock word's, the iron the ironblock word's, the copper
// this word's - the grid shared never the pocket split (the kin
// words' own law). THE CHAIN LAW: the smeltcopper word prices what
// the RAW becomes, this word prices what the INGOT becomes - the
// raw -> ingot -> block chain the copper front's own two legs, the
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

// the vanilla pack price one block mints (the pack family's own
// nine->one - the third metal's own even hand)
export const COPPERBLOCK_INGOT_PER_BLOCK = 9
// the vanilla pack yield one craft mints
export const COPPERBLOCK_BLOCKS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a copper pack word.
 *
 * @param {object} [opts]
 * @param {number} [opts.ingotCount=0]   copper ingots on hand (the
 *                                       exact 'copper_ingot' name,
 *                                       the smeltcopper word's own
 *                                       mint's child)
 * @param {number} [opts.blocksCount=0]  copper blocks already held
 *                                       (rides untouched - the
 *                                       caller merges)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, blocksYield: number, ingotLeft: number, blocks: number}}
 */
export function decideCopperBlock (opts = {}) {
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
  // the ingot lane empty: the pack's own silence - the smeltcopper
  // lane owns that story (the melt mints the ingot, the pack never
  // guesses), nothing rides the grid (the keep-gate-first law, the
  // pack family's own honest empty reading).
  if (ingot < 1) {
    return { action: 'keep', reason: 'ingot-empty', crafts: 0, blocksYield: 0, ingotLeft: ingotRemainder, blocks }
  }
  // the pocket's own arithmetic: the one-leg law - the ingot the
  // only leg, the pack free (the grid's own work, the fire never
  // rides). The floor law prices the count, the remainder named in
  // the ingotLeft, the yield never inflated, never capped beyond
  // the pocket, the held blocks ride untouched.
  const crafts = Math.floor(ingot / COPPERBLOCK_INGOT_PER_BLOCK)
  // the pack short: the partial pack never spends - the honest
  // shortage names its story (the smeltcopper lane's own, the pack
  // family's own tithe reading). The one-to-eight ingots ride
  // ingotLeft named.
  if (crafts < 1) {
    return { action: 'defer', reason: 'ingot-short', crafts: 0, blocksYield: 0, ingotLeft: ingot + ingotRemainder, blocks }
  }
  return {
    action: 'craft',
    reason: 'ingot-affordable',
    crafts,
    blocksYield: crafts * COPPERBLOCK_BLOCKS_PER_CRAFT,
    ingotLeft: (ingot - crafts * COPPERBLOCK_INGOT_PER_BLOCK) + ingotRemainder,
    blocks
  }
}
