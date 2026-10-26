// (v0.976.490) Chorus trip decision for the bot fleet.
//
// THE PROBLEM: the end lane's own garden walked unpriced. The
// smelting word prices the POP (chorus_fruit -> popped_chorus, the
// furnace's own even hand, one-to-one) and the ration word BANS the
// fruit as food (the teleport the mouth never plans - RATION_BANNED)
// - but the HARVEST itself, the walk into the end garden that turns
// the world's own plant into the pop's own feed, never priced: the
// purpur block's own square (4 popped -> 1 purpur) starts in a
// garden nobody's word owns. THE FIX: decideChorusTrip() prices the
// SUPPLY LANE - one pocket-and-garden map to ONE word with ONE
// reason:
//   'keep'   - the garden gate reads first (THE GARDEN-EMPTY GATE:
//              the geode word's own GEODE-EMPTY GATE's twin, the
//              endportal word's own walk owns the portal story - no
//              plant in reach = no trip regardless of the pocket;
//              the garden either stands in reach or the portal story
//              owes it, the word never guesses which) - or the purpur
//              unit already held (THE STOCK LAW: four POPPED the
//              block's own square, the raw fruit the pop's own feed
//              never the unit's own coin - the pocket holds the unit,
//              nothing owed, the keep never a defer)
//   'defer'  - the pop is owed (THE POP-OWED LAW: raw fruit rides the
//              pocket while the popped coin runs short - the furnace's
//              own even hand turns the raw BEFORE the world pays more,
//              the smelting word's own story owns the pop, the word
//              never prices the furnace it did not mint)
//   'break'  - the garden affords and the pocket holds no raw (every
//              plant in reach earns its own chop - no cap, the
//              orchard word's own reading's supply twin; the bottom
//              block's own chop brings the stalk down, vanilla's own
//              cascade)
//   'refuse' - junk input (never throws into the fleet loop)
// THE COIN LAW: each chorus plant block carries a FIFTY-PERCENT
// chance to drop ONE chorus fruit - vanilla's own coin, fortune
// named never priced (the geode word's CLUSTER LAW's honest
// opposite: the cluster the HAND's own deterministic four, the plant
// the COIN's own half - the word prices the CEILING never the
// promise, fruitMax counts the coin's own upper face, fruitMin reads
// the zero the coin's own tails; the expected the AVERAGE's own lie
// never adopted - the spread named, never averaged into a promise).
// THE FLOWER LAW: the chorus flower the growth's own crown named
// never adopted - the census reads the PLANT the fruit's own bearer
// (the flower the chop's own cascade does not drop, the geode word's
// own bud reading's sibling). THE CENSUS LAW: the counts the
// CALLER'S OWN reads - the plants the block census over
// 'chorus_plant', the fruit and the popped the pocket's own item
// census (the word never reads the garden itself, the pure function
// stays pure). Junk inputs never throw: they return a refuse with
// the junk-input reason so a caller bug degrades into a log line,
// not a crash loop. Negative counts floor to zero (a lying census
// must not poison the arithmetic); they are read, not refused - the
// honesty lives in the clamp. No cap: a garden-rich census prices
// every chop it affords, an honest longer census never clamped (the
// claims word's own twenty-four the LEDGER's own bound, never this
// lane's - the pocket feeds the furnace, the smelt the caller's own
// story). Fractional counts floor honestly. The pure read mutates
// nothing.

// the vanilla fruit ceiling one plant block's chop carries (the
// coin's own upper face - AT MOST one fruit per block, the world's
// own dice decides which faces land)
export const CHORUS_FRUIT_MAX_PER_PLANT = 1
// the vanilla drop chance one plant block's coin carries (the coin's
// own even split - named never promised, the word prices the ceiling
// above, never the expected the average's own lie)
export const CHORUS_FRUIT_DROP_CHANCE = 0.5
// the vanilla purpur unit four popped mint (the block's own square -
// the stock law's own coin, the raw fruit the feed never the unit)
export const CHORUS_PURPUR_POPPED = 4

/**
 * Decide whether one bot's pocket earns a chorus trip word.
 *
 * @param {object} [opts]
 * @param {number} [opts.plantsCount=0]   chorus plants in reach (the
 *                                        caller's own block census
 *                                        over 'chorus_plant' - the
 *                                        fruit's own bearer; the
 *                                        flower the crown never
 *                                        adopted)
 * @param {number} [opts.fruitsCount=0]   raw chorus fruit on hand (the
 *                                        caller's pocket census - the
 *                                        pop's own feed, never the
 *                                        unit's own coin)
 * @param {number} [opts.poppedCount=0]   popped chorus on hand (the
 *                                        caller's pocket census - the
 *                                        purpur unit's own coin)
 * @returns {{action: 'break'|'defer'|'keep'|'refuse', reason: string, plantsToBreak: number, fruitMin: number, fruitMax: number, plantsLeft: number}}
 */
export function decideChorusTrip (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['plantsCount', 'fruitsCount', 'poppedCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', plantsToBreak: 0, fruitMin: 0, fruitMax: 0, plantsLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const plants = Math.floor(floor0(opts.plantsCount))
  const fruits = Math.floor(floor0(opts.fruitsCount))
  const popped = Math.floor(floor0(opts.poppedCount))
  // the garden gate reads first: no plant = no trip regardless of the
  // pocket (the GEODE-EMPTY GATE's twin - the portal story owns the
  // walk, the word never guesses which the end owes).
  if (plants < 1) {
    return { action: 'keep', reason: 'garden-empty', plantsToBreak: 0, fruitMin: 0, fruitMax: 0, plantsLeft: plants }
  }
  // the stock law: the purpur unit the popped coin's own hold - four
  // POPPED the block's own square, the raw fruit the feed never the
  // unit (the pocket holds the unit, nothing owed, the keep never a
  // defer).
  if (popped >= CHORUS_PURPUR_POPPED) {
    return { action: 'keep', reason: 'stock-full', plantsToBreak: 0, fruitMin: 0, fruitMax: 0, plantsLeft: plants }
  }
  // the pop is owed: raw fruit rides the pocket while the popped coin
  // runs short - the furnace's own even hand turns the raw before the
  // world pays more (the smelting word's own story owns the pop, the
  // word never prices the furnace it did not mint).
  if (fruits >= 1) {
    return { action: 'defer', reason: 'pop-owed', plantsToBreak: 0, fruitMin: 0, fruitMax: 0, plantsLeft: plants }
  }
  // the garden's own arithmetic: every plant in reach earns its own
  // chop honestly - no cap (the orchard word's own reading's supply
  // twin), the COIN LAW's own ceiling the upper face counts (at most
  // one fruit per block, the world's own dice decides), the zero the
  // tails own - the spread named, never averaged into a promise.
  const plantsToBreak = plants
  return {
    action: 'break',
    reason: 'plants-afford',
    plantsToBreak,
    fruitMin: 0,
    fruitMax: plantsToBreak * CHORUS_FRUIT_MAX_PER_PLANT,
    plantsLeft: plants - plantsToBreak
  }
}
