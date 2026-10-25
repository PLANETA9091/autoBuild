// (v0.976.478) Hoe craft decision for the bot fleet.
//
// THE PROBLEM: the wheatsow word (v0.976.475) priced the replant and
// read the ground underfoot - but the GROUND LAW kept naming the tool
// it never priced: "the hoe mints the tilled tile, the hoe trip owns
// that story" (twice in the wheatsow's own census law - the
// farmland-empty reads the keep because the hoe trip OWES the tile).
// The sword's own form the arms word prices (2 material + 1 stick per
// tier), the pickaxe's own chain the toolupgrade word prices (2 sticks
// per tier) - but the HOE, vanilla's own ground tool, never priced:
// a plank-rich stick-rich pocket tills nothing, the farmland stays
// the wheatsow word's own honest debt, the crop lane's ground tool
// nobody mints.
// THE FIX: decideHoecraft() prices the crop lane's ground tool - the
// craft (2 planks + 2 sticks -> 1 wooden hoe, vanilla; the shaped
// head-and-shaft, no fuel, the grid's own work) - one pocket map to
// ONE word with ONE reason:
//   'keep'   - a hoe already held (the tool never doubles - one hoe
//              mints the whole farm)
//   'craft'  - the plank leg + the stick leg affordable, the honest
//              yield
//   'defer'  - one leg short, the missing leg NAMED (planks-short
//              names the plankcraft chain's own leg - the blade's own
//              board FIRST; sticks-short names the stickcraft chain's
//              own leg - the shaft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE TOOL KEEP LAW: any held hoe reads the keep - the five vanilla
// tiers (wooden/stone/iron/golden/diamond) the tool's own family
// ladder, summed by the CALLER (the tier never bends the keep: a hoe
// of any tier is still the farm's own minter). THE TIER LADDER NAMED
// NEVER PRICED: this word prices the WOODEN form only - the first
// mint; the stone/iron/golden/diamond hoes ride the toolupgrade
// chain's own reading (the pick chain's own law), named never guessed
// here. THE EQUAL-LEG LAW: two-per and two-per - the balanced tool,
// the min law binds BOTH legs (the cookie word's own two-legged
// reading's twin, the respawnanchor word's own min-law sibling). THE
// TILL NEVER PRICED: the tilled tile stays the wheatsow word's own
// ground story - this word prices the TOOL's mint only, never the
// tilling (the ground law's own twin, the world-reading never
// guessed here). THE PLANK FAMILY LAW: the hoe recipe takes any wood
// family (vanilla accepts the whole *_planks family mixed) - the
// caller's census sums the family (the bedcraft word's own plank
// law's twin), the word never splits it. The stick leg rides exact
// 'stick' - the stickcraft chain's own shaft (2 planks -> 4 sticks,
// the pocket's own mint). Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. A boolean rides the same law (a true
// count is a flag, never a number). Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: a plank-rich
// stick-rich pocket prices every hoe the arithmetic affords - the
// keep gate stops the actual crafting at one held (the word prices,
// the fleet gates), the leftover of BOTH legs named, never rounded
// into a lie. The pure read mutates nothing.

// the vanilla hoe recipe's plank-family price (two of any wood per hoe)
export const HOECRAFT_PLANKS_PER_CRAFT = 2
// the vanilla hoe recipe's stick price (two sticks per hoe)
export const HOECRAFT_STICKS_PER_CRAFT = 2
// one hoe per craft - the tool's own one-form (the pick chain's own
// one-per tier, the EIGHT-YIELD law's own opposite)
export const HOES_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a hoe craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.planksCount=0] the plank family on hand (any
 *                                      wood, summed by the caller)
 * @param {number} [opts.stickCount=0]  sticks on hand (exact 'stick')
 * @param {number} [opts.hoeCount=0]    hoes already held (any tier
 *                                      family, summed by the caller)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, planks: number, sticks: number, hoes: number, crafts: number, hoesYield: number, planksLeft: number, sticksLeft: number}}
 */
export function decideHoecraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['planksCount', 'stickCount', 'hoeCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', planks: 0, sticks: 0, hoes: 0, crafts: 0, hoesYield: 0, planksLeft: 0, sticksLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const planks = floor0(opts.planksCount)
  const sticks = floor0(opts.stickCount)
  const held = floor0(opts.hoeCount)
  // a hoe already held: the crop lane's own tool story - the tool
  // never doubles (one hoe mints the whole farm), the pieces-held
  // law's twin, the craft family's own keep gate.
  if (held >= 1) {
    return { action: 'keep', reason: 'hoe-held', planks, sticks, hoes: held, crafts: 0, hoesYield: 0, planksLeft: planks, sticksLeft: sticks }
  }
  // the pocket's own arithmetic: every two planks and their two sticks
  // price one hoe honestly - the min law binds BOTH legs (the balanced
  // tool), the word never rounds the yield into a lie and never caps
  // the pocket.
  if (planks >= HOECRAFT_PLANKS_PER_CRAFT && sticks >= HOECRAFT_STICKS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(planks / HOECRAFT_PLANKS_PER_CRAFT), Math.floor(sticks / HOECRAFT_STICKS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'planks-sticks-affordable',
      crafts,
      hoesYield: crafts * HOES_PER_CRAFT,
      planksLeft: planks - crafts * HOECRAFT_PLANKS_PER_CRAFT,
      sticksLeft: sticks - crafts * HOECRAFT_STICKS_PER_CRAFT,
      planks,
      sticks,
      hoes: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - planks-short
  // names the plankcraft chain's own leg (the blade's own board - the head
  // leads the shaft, never a guessed craft), sticks-short names the
  // stickcraft chain's own leg (the shaft's own story)
  if (planks < HOECRAFT_PLANKS_PER_CRAFT) {
    return { action: 'defer', reason: 'planks-short', planks, sticks, hoes: 0, crafts: 0, hoesYield: 0, planksLeft: planks, sticksLeft: sticks }
  }
  return { action: 'defer', reason: 'sticks-short', planks, sticks, hoes: 0, crafts: 0, hoesYield: 0, planksLeft: planks, sticksLeft: sticks }
}
