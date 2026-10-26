// (v0.976.494) Smelt chorus fruit decision for the bot fleet.
//
// THE PROBLEM: the END CHAIN'S OWN FIRE never priced. The chorus
// word (v0.976.490) prices the HARVEST - the chorus fruit the trip
// picks - and keeps its STOCK LAW at FOUR popped; the purpur word
// (v0.976.492) prices the SQUARE - four popped -> one purpur block;
// the purpurslab word (v0.976.493) prices the MASONRY - three
// blocks -> six slabs. But the FRUIT and the POPPED never met: the
// pocket holds chorus fruit while the popped the stock law counts
// only the FURNACE mints - chorus fruit smelts into popped chorus
// fruit, vanilla, 1:1 - and a fruit-rich pocket carries the pop's
// own feed nowhere, the chain's own middle leg held a lie nobody's
// word spent. THE FIX: decideSmeltChorus() prices the MELT LEG -
// one pocket map to ONE word with ONE reason:
//   'keep'   - the fruit lane empty (the furnace's own silence -
//              the chorus trip owns that story, nothing rides the
//              fire)
//   'smelt'  - fruit + fuel affordable (the honest yield the min
//              law prices: the fruit AND the fuel both bound it,
//              the coal remainder the ceiling names)
//   'defer'  - fruit held but fuel short (the honest shortage -
//              the coal trip the caller re-tasks to, never a
//              guessed melt)
//   'refuse' - junk input (never throws into the fleet loop)
// THE FUEL LAW: one coal smelts EIGHT items (vanilla fuel value) -
// the fuelUnits the coal's own arithmetic (coal x 8), the smelts
// the min of the fruit and the fuelUnits, the coalLeft the ceiling
// burns honestly (a partial last burn still spends the whole
// coal's slot - the vanilla fire's own accounting). THE RATIO LAW:
// one chorus fruit -> one popped chorus fruit (vanilla smelting,
// 1:1 - the yield never inflated). THE FRUIT FAMILY LAW: the fruit
// census rides exact 'chorus_fruit' and nothing else - the popped
// census the purpur word's own coin (the square's own feed, named
// never re-read here); the popped this word mints rides the
// poppedYield field, NEVER silently merged into the held stock -
// the caller's census brings the popped, this word prices the
// melt only (the blazefuel word's own wrap law). THE KIN LAW: the
// smeltglass word (v0.976.454) prices the SAND's own melt, the
// smeltraw word the iron's own consolidation - this word the
// FRUIT's own melt - the fire shared never the pocket split (the
// kin words' own law). THE CHAIN LAW COMPLETED: the chorus word
// prices what the PLANT gives, this word prices what the FRUIT
// becomes, the purpur word prices what the POPPED becomes (four
// -> one), the purpurslab word prices what the BLOCK becomes
// (three->six) - the fruit -> popped -> block -> slab chain the
// end build's own four legs, the handover's own honesty the test
// pins end to end. Junk inputs never throw: they return a refuse
// with the junk-input reason so a caller bug degrades into a log
// line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. Fractional counts
// floor honestly with the remainder named in the fruitLeft. No
// cap: a fruit-rich fuel-rich pocket prices every melt it
// affords, an honest longer yield list never clamped. The pure
// read mutates nothing.

// the vanilla fuel value: one coal smelts eight items
export const SMELTCHORUS_COAL_SMELTS = 8
// the vanilla smelting ratio: one chorus fruit -> one popped chorus fruit
export const SMELTCHORUS_FRUIT_PER_POPPED = 1

/**
 * Decide whether one bot's pocket earns a chorus smelt word.
 *
 * @param {object} [opts]
 * @param {number} [opts.fruitCount=0] chorus fruit on hand (the
 *                                     exact 'chorus_fruit' name,
 *                                     the chorus trip's own pick)
 * @param {number} [opts.coalCount=0]  coal on hand (the exact
 *                                     'coal' name, the fuel law's
 *                                     own unit)
 * @returns {{action: 'smelt'|'defer'|'refuse'|'keep', reason: string, smelts: number, poppedYield: number, fruitLeft: number, coalLeft: number, cost: number}}
 */
export function decideSmeltChorus (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['fruitCount', 'coalCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', smelts: 0, poppedYield: 0, fruitLeft: 0, coalLeft: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const fruit = Math.floor(floor0(opts.fruitCount))
  const fruitRemainder = floor0(opts.fruitCount) - fruit
  const coal = floor0(opts.coalCount)
  // the fruit lane empty: the furnace's own silence - the chorus
  // trip owns that story, nothing rides the fire (the
  // keep-gate-first law, the smeltglass word's own gate - the fruit
  // IS this lane's story).
  if (fruit < 1) {
    return { action: 'keep', reason: 'chorus-empty', smelts: 0, poppedYield: 0, fruitLeft: fruitRemainder, coalLeft: coal, cost: 0 }
  }
  // the pocket's own arithmetic: the fuelUnits the coal's own math
  // (coal x 8, vanilla), the smelts the min of the fruit and the
  // fuel - both legs bound the yield honestly, the coalLeft the
  // ceiling burns (the partial last burn still spends the slot),
  // never capped beyond the pocket. The fractional census floors
  // honestly with the remainder named in the fruitLeft (the word
  // never rounds the census into a lie).
  const fuelUnits = coal * SMELTCHORUS_COAL_SMELTS
  if (fuelUnits >= 1) {
    const smelts = Math.min(fruit, fuelUnits)
    return {
      action: 'smelt',
      reason: 'fruit-fuel-affordable',
      smelts,
      poppedYield: smelts * SMELTCHORUS_FRUIT_PER_POPPED,
      fruitLeft: (fruit - smelts) + fruitRemainder,
      coalLeft: coal - Math.ceil(smelts / SMELTCHORUS_COAL_SMELTS),
      cost: SMELTCHORUS_FRUIT_PER_POPPED
    }
  }
  // fruit-rich in fuel only: the honest shortage names the one
  // coal's own floor price - the coal trip the caller re-tasks to,
  // never a guessed melt
  return { action: 'defer', reason: 'fuel-short', smelts: 0, poppedYield: 0, fruitLeft: fruit + fruitRemainder, coalLeft: coal, cost: 1 }
}
