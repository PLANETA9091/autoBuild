// (v0.976.491) End rod craft decision for the bot fleet.
//
// THE PROBLEM: the blaze rod's own DUAL walked unpriced. The
// blazefuel word (v0.976.466) prices the FUEL split (one rod -> two
// powders, the brewing stand's own fire) and the chorus word
// (v0.976.490) prices the HARVEST that feeds the POP (the popped
// coin the purpur unit's own hold) - but the rod's own DECOR mint
// never priced: one popped chorus + one blaze rod -> FOUR end rods,
// vanilla (the light's own wand the end build's own crown) - the
// popped's own SIBLING consumer the chorus word's own stock now
// feeds, the blaze rod's own second story the fuel split never told.
// THE FIX: decideEndRod() prices the DECOR MINT - one pocket map to
// ONE word with ONE reason:
//   'keep'   - the pop leg empty (THE POP-SHORT GATE: the geode
//              word's own GEODE-EMPTY GATE's twin - no popped = no
//              mint regardless of the rod leg; the chorus word's own
//              walk feeds the pop, the smelting word's own story owns
//              the pop, the keep never a defer - the word never
//              demands the furnace it did not mint)
//   'defer'  - the rod leg starves (THE ROD-SHORT LAW: the defer
//              names the BLAZE CROSSING's own story - the nether trip
//              mints the rod the craft never guesses, the blazefuel
//              word's own reading's sibling; the popped waits
//              pocketed, never wasted)
//   'craft'  - both legs afford (THE PAIR LAW: the min binds BOTH
//              legs - one popped + one rod the mint's own unit, the
//              surplus leg named in the left fields, the maptarget
//              word's own MIN LAW's reading)
//   'refuse' - junk input (never throws into the fleet loop)
// THE ROD LAW: one popped + one rod mints FOUR end rods - vanilla's
// own deterministic craft multiplier (the geode word's CLUSTER
// LAW's craft-side sibling: the cluster the WORLD's own four, the
// rod the GRID's own four - the same honest even hand, the two
// lanes' own mouths). No cap: the craft family's own no-cap law
// reads the YIELD - a pair-rich pocket prices every mint it affords
// (200 pairs -> 800 rods, the goldblock word's own reading), an
// honest longer census never clamped (the claims word's own
// twenty-four the LEDGER's own bound, never this lane's). THE
// CENSUS LAW: the counts the CALLER'S OWN reads - the popped and
// the rod the pocket's own item census (the word never reads the
// grid itself, the pure function stays pure). Junk inputs never
// throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in
// the clamp. Fractional counts floor honestly with the surplus leg
// named. The pure read mutates nothing.

// the vanilla end rod yield one pair mints (the grid's own four -
// the deterministic craft hand, the geode word's CLUSTER LAW's
// craft-side sibling)
export const END_RODS_PER_CRAFT = 4
// the vanilla popped price one mint carries (the pair's own pop leg)
export const END_ROD_POPPED_PER_CRAFT = 1
// the vanilla rod price one mint carries (the pair's own rod leg)
export const END_ROD_BLAZEROD_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns an end rod mint word.
 *
 * @param {object} [opts]
 * @param {number} [opts.poppedCount=0]    popped chorus on hand (the
 *                                         caller's pocket census -
 *                                         the pair's own pop leg, the
 *                                         chorus word's own stock's
 *                                         child)
 * @param {number} [opts.blazeRodCount=0]  blaze rods on hand (the
 *                                         caller's pocket census -
 *                                         the pair's own rod leg, the
 *                                         fuel split's own dual)
 * @returns {{action: 'craft'|'defer'|'keep'|'refuse', reason: string, crafts: number, rodsYield: number, poppedLeft: number, blazeRodsLeft: number}}
 */
export function decideEndRod (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['poppedCount', 'blazeRodCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, rodsYield: 0, poppedLeft: 0, blazeRodsLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const popped = Math.floor(floor0(opts.poppedCount))
  const blazeRods = Math.floor(floor0(opts.blazeRodCount))
  // the pop-short gate reads first: no popped = no mint regardless of
  // the rod leg (the GEODE-EMPTY GATE's twin - the pop's own story
  // owns the feed, the word never guesses which the furnace owes).
  if (popped < END_ROD_POPPED_PER_CRAFT) {
    return { action: 'keep', reason: 'pop-short', crafts: 0, rodsYield: 0, poppedLeft: popped, blazeRodsLeft: blazeRods }
  }
  // the rod leg starves: the honest shortage names the BLAZE
  // CROSSING's own story (the nether trip mints the rod - the
  // blazefuel word's own reading's sibling; the popped waits
  // pocketed, never wasted).
  if (blazeRods < END_ROD_BLAZEROD_PER_CRAFT) {
    return { action: 'defer', reason: 'rod-short', crafts: 0, rodsYield: 0, poppedLeft: popped, blazeRodsLeft: blazeRods }
  }
  // the pair's own arithmetic: the min binds BOTH legs - one popped
  // + one rod the mint's own unit, the ROD LAW's own four per mint,
  // the surplus leg named in the left fields (the word never rounds
  // the census into a lie and never caps the grid).
  const crafts = Math.min(popped, blazeRods)
  return {
    action: 'craft',
    reason: 'pair-affords',
    crafts,
    rodsYield: crafts * END_RODS_PER_CRAFT,
    poppedLeft: popped - crafts * END_ROD_POPPED_PER_CRAFT,
    blazeRodsLeft: blazeRods - crafts * END_ROD_BLAZEROD_PER_CRAFT
  }
}
