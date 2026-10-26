// (v0.976.493) Purpur slab craft decision for the bot fleet.
//
// THE PROBLEM: the masonry walked unpriced. The purpur word
// (v0.976.492) prices the SQUARE MINT - four popped -> one purpur
// block, vanilla - so the end build's own stone exists as a pocket
// coin; but the BLOCK'S OWN SPEND never priced: three purpur blocks
// -> six purpur slabs, vanilla (the 1x3 row's own even hand, the
// end build's own step and ledge) - a block-rich pocket carries the
// masonry it could mint nowhere, the square's own child held a lie
// nobody's word spent. THE FIX: decidePurpurSlab() prices the SLAB
// SPEND - one pocket map to ONE word with ONE reason:
//   'keep'   - the masonry's price unpaid (THE BLOCK-SHORT GATE:
//              fewer than three blocks = no spend; the purpur
//              word's own square mints the block, this word never
//              re-prices the popped - the keep never a defer)
//   'craft'  - the masonry affords (the slab's own arithmetic -
//              the floor prices the count, the remainder named in
//              the blocksLeft, never rounded into a lie)
//   'refuse' - junk input (never throws into the fleet loop)
// NO DEFER EXISTS - the one-leg law's own reading (the purpur
// word's own NO-DEFER lesson: no honest shortage lives past the
// block-short gate; the block the square's own mint, the popped
// the chorus word's own stock's coin - the word never re-prices
// the square). THE SLAB LAW: three purpur blocks mint six purpur
// slabs - vanilla's own universal slab arithmetic (the 1x3 row the
// whole stone family reads the same three->six, the stair word's
// own stair lane's sibling: the stair the SIX->four's own step,
// the slab the three->six's own half-step). No cap: the craft
// family's own no-cap law reads the YIELD (60 blocks -> 20 crafts
// -> 120 slabs). THE CHAIN LAW: the two words' coins chain - the
// chorus word's own stock keeps the popped, the square mints the
// block (four->one), this word spends the block into the masonry
// (three->six); the handover's own honesty the test pins. THE
// CENSUS LAW: the count the CALLER'S OWN read - the purpur blocks
// the pocket's own item census (the word never reads the grid
// itself, the pure function stays pure). Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative counts
// floor to zero (a lying census must not poison the arithmetic);
// they are read, not refused - the honesty lives in the clamp.
// Fractional counts floor honestly with the remainder named. The
// pure read mutates nothing.

// the vanilla slab price one craft mints (the universal slab law's
// own three->six - the whole stone family's even hand)
export const PURPUR_BLOCKS_PER_SLAB_CRAFT = 3
export const PURPUR_SLABS_PER_CRAFT = 6

/**
 * Decide whether one bot's pocket earns a purpur slab spend word.
 *
 * @param {object} [opts]
 * @param {number} [opts.purpurBlockCount=0]  purpur blocks on hand
 *                                            (the caller's pocket
 *                                            census - the square
 *                                            word's own mint's
 *                                            child)
 * @returns {{action: 'craft'|'keep'|'refuse', reason: string, slabs: number, blocksLeft: number}}
 */
export function decidePurpurSlab (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const v = opts.purpurBlockCount
  if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
    return { action: 'refuse', reason: 'junk-input', slabs: 0, blocksLeft: 0 }
  }
  const blocks = Math.floor(Number.isFinite(v) ? Math.max(0, v) : 0)
  // the block-short gate reads first: fewer than three = no spend
  // (the PURPUR word's own POP-SHORT GATE's twin - the masonry's
  // own price the pocket cannot pay, the keep never a defer).
  if (blocks < PURPUR_BLOCKS_PER_SLAB_CRAFT) {
    return { action: 'keep', reason: 'block-short', slabs: 0, blocksLeft: blocks }
  }
  // the slab's own arithmetic: the floor prices the count - the
  // universal slab law's own three->six (the 1x3 row's own even
  // hand), the remainder named in the blocksLeft (the word never
  // rounds the census into a lie and never caps the grid).
  const crafts = Math.floor(blocks / PURPUR_BLOCKS_PER_SLAB_CRAFT)
  return {
    action: 'craft',
    reason: 'masonry-affords',
    slabs: crafts * PURPUR_SLABS_PER_CRAFT,
    blocksLeft: blocks - crafts * PURPUR_BLOCKS_PER_SLAB_CRAFT
  }
}
