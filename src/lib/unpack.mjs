// (v0.976.498) Unpack block decision for the bot fleet.
//
// THE PROBLEM: the storage lane's own mirror walked unpriced. The
// pack family priced the COMPRESSION: the goldblock word packs the
// GOLD (nine->one), the ironblock word (.495) packs the IRON, the
// copperblock word (.496) packs the COPPER, the coalblock word
// (.497) packs the FUEL'S OWN BURN - four words, the same nine->one
// - but the DECOMPRESSION the four never told: one block -> nine
// units, vanilla, the storage lane's own decompression (the
// coalblock word's own prose named it: 'the unpack never burns' -
// and the unpack never MINTED either). A pocket packed full but
// bare in loose units starves the fire beside its own packed fuel:
// the smelt family's FUEL LAW burns the LOOSE coal, the packed
// block sits through the hunger, the unpack leg held a lie nobody's
// word spent. THE FIX: decideUnpackBlock() prices the UNPACK - one
// pocket map to ONE word with ONE reason:
//   'keep'   - the block lane empty (the unpack's own silence -
//              the pack lane owns that story, nothing decompresses
//              from nothing) OR the hunger un-named (the blocks
//              ride packed, the need-empty keep the honest read)
//   'unpack' - the hunger affords (the ceil law prices the crafts
//              the need names - the surplus named in the unitsYield,
//              whole units mint, the pocket keeps the remainder)
//   'defer'  - the hunger outruns the blocks held (the honest
//              shortage names its story - the ceil crafts the need
//              prices, the pack trip or the mining trip the caller's
//              own re-task, the partial unpack never spends)
//   'refuse' - junk input (never throws into the fleet loop)
// THE UNPACK LAW: one block mints nine units - vanilla's own
// storage decompression, the pack family's own nine->one read in
// the mirror. THE CEIL LAW: the need names its own crafts
// (ceil(unitsNeeded / nine)) - a four-unit hunger unpacks ONE
// block (the surplus the pocket keeps), a nineteen-unit hunger on
// two blocks defers (the partial yield that still starves the
// named need is the caller's own re-task, the smeltchorus word's
// own fuel-short honesty). THE MIRROR LAW: the pack word prices
// what the UNITS become, this word prices what the BLOCK becomes
// - the storage lane's own two legs, the round-trip the test pins
// (pack nine -> one, unpack one -> nine, the lane's own closed
// loop). THE FIVE-SAME-NINE PIN: the four pack words and this
// word all read nine - the grid shared never the pocket split.
// THE HELD LAW: the unspent blocks ride named in the blocksLeft
// (the read mutates nothing - the pure read the caller merges).
// Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not
// a crash loop. Negative counts floor to zero (a lying census must
// not poison the arithmetic); they are read, not refused - the
// honesty lives in the clamp. Fractional need floors honestly
// (whole units the lane trades - the census's own fraction names
// no craft); fractional blocks ride fractional in the blocksLeft
// (the pack family's own held law). No cap: a hunger-rich pocket
// unpacks every block the need prices, an honest longer yield
// list never clamped.

// the vanilla unpack price one block mints (the pack family's own
// nine read in the mirror - the fifth word's own even hand)
export const UNPACK_UNITS_PER_BLOCK = 9
// the vanilla unpack spend one craft names
export const UNPACK_BLOCKS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns an unpack word.
 *
 * @param {object} [opts]
 * @param {number} [opts.unitsNeeded=0]  loose units the caller
 *                                       names (the fire's coal
 *                                       hunger, the craft's ingot
 *                                       hunger - the exact item
 *                                       name the caller speaks)
 * @param {number} [opts.blocksCount=0]  packed blocks held (the
 *                                       pack family's own child -
 *                                       the coalblock/goldblock/
 *                                       ironblock/copperblock
 *                                       words' own yield)
 * @returns {{action: 'unpack'|'defer'|'refuse'|'keep', reason: string, crafts: number, unitsYield: number, blocksSpent: number, blocksLeft: number, unitsNeeded: number}}
 */
export function decideUnpackBlock (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['unitsNeeded', 'blocksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, unitsYield: 0, blocksSpent: 0, blocksLeft: 0, unitsNeeded: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const need = Math.floor(floor0(opts.unitsNeeded))
  const blocks = floor0(opts.blocksCount)
  // the block lane empty: the unpack's own silence - the pack lane
  // owns that story (the pack mints the block, the unpack never
  // guesses), nothing rides the grid (the keep-gate-first law, the
  // pack family's own honest empty reading).
  if (blocks < 1) {
    return { action: 'keep', reason: 'block-empty', crafts: 0, unitsYield: 0, blocksSpent: 0, blocksLeft: blocks, unitsNeeded: need }
  }
  // the hunger un-named: the need-empty keep - the blocks ride
  // packed, the silence honest (no loose-unit hunger, no unpack
  // spent, the need-empty gate the mirror's own second read).
  if (need < 1) {
    return { action: 'keep', reason: 'need-empty', crafts: 0, unitsYield: 0, blocksSpent: 0, blocksLeft: blocks, unitsNeeded: need }
  }
  // the pocket's own arithmetic: the ceil law prices the crafts the
  // need names (a four-unit hunger unpacks one block - the surplus
  // the pocket keeps; the floor never lies the need short). The
  // unspent blocks ride named in the blocksLeft, the yield never
  // inflated, never capped beyond the need, the read mutates
  // nothing.
  const crafts = Math.ceil(need / UNPACK_UNITS_PER_BLOCK)
  // the hunger outruns the blocks: the partial unpack never spends
  // - the honest shortage names its story (the ceil crafts the need
  // prices, the shortfall the caller's own re-task - the pack trip
  // or the mining trip, the smeltchorus word's own fuel-short
  // honesty).
  if (crafts > blocks) {
    return { action: 'defer', reason: 'block-short', crafts: 0, unitsYield: 0, blocksSpent: 0, blocksLeft: blocks, unitsNeeded: need }
  }
  return {
    action: 'unpack',
    reason: 'need-affordable',
    crafts,
    unitsYield: crafts * UNPACK_UNITS_PER_BLOCK * UNPACK_BLOCKS_PER_CRAFT,
    blocksSpent: crafts * UNPACK_BLOCKS_PER_CRAFT,
    blocksLeft: blocks - crafts,
    unitsNeeded: need
  }
}
