// (v0.976.423) Furnace craft decision for the bot fleet.
//
// THE PROBLEM: the smelting machinery (src/lib/smelting.mjs) walks the bot
// to the yard's furnaces (8 furnaces, 4 blast, 4 smokers in the smelting
// bay) - but nothing prices the FURNACE the pocket could craft itself
// (8 stone-tier pieces -> 1 furnace, vanilla). A cobble-rich furnace-less
// bot rents the yard walk while its own pockets already hold the answer.
// THE FIX: decideFurnaceCraft() prices the SMELT CHAIN's first leg - one
// pocket map to ONE word with ONE reason:
//   'keep'   - a furnace already held (the smelt lane owns that story)
//   'craft'  - the stone family affordable, the honest yield priced
//   'defer'  - stone-short (the honest dead end - the cobble trip)
//   'refuse' - junk input (never throws into the fleet loop)
// THE STONE FAMILY LAW: the furnace recipe takes the whole stone-tier
// family (vanilla #minecraft:stone_crafting_materials: cobblestone +
// cobbled_deepslate + blackstone) - the caller's census sums the family,
// the word never splits it. Junk inputs never throw: they return a refuse
// with the junk-input reason so a caller bug degrades into a log line,
// not a crash loop. Negative counts floor to zero (a lying census must
// not poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a stone-rich pocket prices every furnace it
// affords, an honest remainder (surplus) never rounded into a lie. The
// pure read mutates nothing.

// the vanilla furnace price: the ring is 8 stone-tier pieces
export const FURNACECRAFT_COBBLESTONE_PER_FURNACE = 8

/**
 * Decide whether one bot's pocket earns a furnace craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.stoneCount=0]    the stone-tier family on hand
 *                                        (cobblestone + cobbled_deepslate
 *                                        + blackstone, summed by the caller)
 * @param {number} [opts.furnaceCount=0]  furnaces already held
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, stone: number, furnaces: number, surplus: number, cost: number}}
 */
export function decideFurnaceCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['stoneCount', 'furnaceCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', stone: 0, furnaces: 0, surplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const stone = floor0(opts.stoneCount)
  const held = floor0(opts.furnaceCount)
  // a furnace already held: the smelt lane's own story - the raw-to-ingot
  // step is priced there, the furnace economy stays silent (the pieces-held
  // law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'furnace-held', stone, furnaces: 0, surplus: 0, cost: 0 }
  }
  // the pocket's own arithmetic: every eight stones price their furnace
  // honestly, the remainder is named not rounded away - the word never
  // caps the pocket and never lies about the surplus.
  if (stone >= FURNACECRAFT_COBBLESTONE_PER_FURNACE) {
    return {
      action: 'craft',
      reason: 'stone-affordable',
      stone,
      furnaces: Math.floor(stone / FURNACECRAFT_COBBLESTONE_PER_FURNACE),
      surplus: stone % FURNACECRAFT_COBBLESTONE_PER_FURNACE,
      cost: FURNACECRAFT_COBBLESTONE_PER_FURNACE
    }
  }
  // stone-poor and furnace-less: the honest dead end - the cobble trip the
  // caller re-tasks to, the shortage named, never a guessed craft
  return {
    action: 'defer',
    reason: 'stone-short',
    stone,
    furnaces: 0,
    surplus: 0,
    cost: FURNACECRAFT_COBBLESTONE_PER_FURNACE
  }
}
