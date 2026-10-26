// (v0.976.492) Purpur block craft decision for the bot fleet.
//
// THE PROBLEM: the square itself walked unpriced. The chorus word
// (v0.976.490) prices the HARVEST that feeds the pop and keeps its
// STOCK LAW at FOUR popped - the purpur unit the pocket holds - and
// the endrod word (v0.976.491) prices the popped's own SIBLING
// consumer (the rod's own decor mint) - but the UNIT'S OWN MINT
// never priced: four popped -> one purpur block, vanilla (the
// block's own square, the end build's own stone) - the coin the
// chorus stock kept for prices its own mint nowhere, the unit held
// a lie nobody's word spent. THE FIX: decidePurpur() prices the
// SQUARE MINT - one pocket map to ONE word with ONE reason:
//   'keep'   - the unit's price unpaid (THE POP-SHORT GATE: the
//              endrod word's own POP-SHORT GATE's twin - fewer than
//              four popped = no mint; the chorus word's own walk
//              feeds the pop, the smelting word's own story owns the
//              pop, the keep never a defer - the word never demands
//              the furnace it did not mint)
//   'craft'  - the square affords (the block's own arithmetic - the
//              floor prices the count, the remainder named in the
//              poppedLeft, never rounded into a lie)
//   'refuse' - junk input (never throws into the fleet loop)
// NO DEFER EXISTS - the one-leg law's own reading (the blazefuel
// word's own NO-DEFER lesson: no honest shortage lives past the
// pop-short gate; the popped the pocket's own feed, the pop the
// smelting word's own priced story - the word never re-prices the
// furnace). THE SQUARE LAW: four popped mint one purpur block -
// vanilla's own deterministic craft arithmetic (the chorus word's
// own STOCK LAW's coin named at last: the unit the stock kept for
// prices its own mint here, the two words' coins agree - the
// CHORUS_PURPUR_POPPED and the PURPUR_POPPED_PER_BLOCK read the
// same four). No cap: the craft family's own no-cap law reads the
// YIELD - a square-rich pocket prices every block it affords (200
// popped -> 50 blocks), an honest longer census never clamped (the
// claims word's own twenty-four the LEDGER's own bound, never this
// lane's). THE CENSUS LAW: the count the CALLER'S OWN read - the
// popped the pocket's own item census (the word never reads the
// grid itself, the pure function stays pure). Junk inputs never
// throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in
// the clamp. Fractional counts floor honestly with the remainder
// named. The pure read mutates nothing.

// the vanilla purpur price one block mints (the square's own four -
// the chorus word's own STOCK LAW's coin, the two words' shared
// unit)
export const PURPUR_POPPED_PER_BLOCK = 4

/**
 * Decide whether one bot's pocket earns a purpur mint word.
 *
 * @param {object} [opts]
 * @param {number} [opts.poppedCount=0]  popped chorus on hand (the
 *                                       caller's pocket census - the
 *                                       square's own coin, the
 *                                       chorus word's own stock's
 *                                       child)
 * @returns {{action: 'craft'|'keep'|'refuse', reason: string, blocks: number, poppedLeft: number}}
 */
export function decidePurpur (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const v = opts.poppedCount
  if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
    return { action: 'refuse', reason: 'junk-input', blocks: 0, poppedLeft: 0 }
  }
  const popped = Math.floor(Number.isFinite(v) ? Math.max(0, v) : 0)
  // the pop-short gate reads first: fewer than four = no mint (the
  // ENDROD word's own POP-SHORT GATE's twin - the unit's own price
  // the pocket cannot pay, the keep never a defer).
  if (popped < PURPUR_POPPED_PER_BLOCK) {
    return { action: 'keep', reason: 'pop-short', blocks: 0, poppedLeft: popped }
  }
  // the square's own arithmetic: the floor prices the count - the
  // ROD LAW's own four the SQUARE's own reading (one block per four
  // popped, the grid's own even hand), the remainder named in the
  // poppedLeft (the word never rounds the census into a lie and
  // never caps the grid).
  const blocks = Math.floor(popped / PURPUR_POPPED_PER_BLOCK)
  return {
    action: 'craft',
    reason: 'square-affords',
    blocks,
    poppedLeft: popped - blocks * PURPUR_POPPED_PER_BLOCK
  }
}
