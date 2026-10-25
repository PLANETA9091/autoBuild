// (v0.976.473) Ender chest craft decision for the bot fleet.
//
// THE PROBLEM: the end economy priced ONE leg only - the eyeofender
// word (v0.976.467, 1 ender pearl + 1 blaze powder -> 1 eye of ender)
// - while a bot eye-rich stands beside the grid with no demand face:
// the eye's own CONSUMER never priced. The ender chest IS the eye's
// first priced consumer (8 obsidian + 1 eye of ender -> 1 ender
// chest, vanilla - the shaped square, the eye the center, the
// crafting grid's own work, no fuel - the fire never rides this
// lane): the pocket-to-pocket portal the fleet's own shared chest,
// every placed chest reads ONE inventory across the world. THE FIX:
// decideEnderChest() prices the PORTAL LANE - one pocket map to ONE
// word with ONE reason:
//   'keep'   - an ender chest already held (the portal never doubles
//              - the goldenapple word's own keep law's twin, the
//              craft family's own keep gate; the obsidian and the
//              eye ride their lefts untouched)
//   'craft'  - obsidian + eye affordable (the min law binds BOTH
//              legs - the goldenapple word's own two-legged reading,
//              the floor law prices the yield, the leftovers named,
//              never capped)
//   'defer'  - the honest shortage names its starving leg
//              (obsidian-short FIRST - the binding leg at eight-per,
//              the water-lava crossing's own story the bucket word's
//              own form; eye-short - the eyeofender word's own craft
//              re-tasks)
//   'refuse' - junk input (never throws into the fleet loop)
// THE WRAP LAW: eight obsidian wrap one eye and yield ONE ender
// chest - the vanilla recipe's own honest form, the yield never
// inflated. THE EIGHT-FORM LAW: the goldenapple word's own reading
// (8 ingots + 1 apple -> 1 golden apple) grown into the end
// economy's own metal - the obsidian the eight-per leg, the eye the
// one-per core. THE CONSUMER LAW CONTINUED: the end economy's demand
// legs are its own futures - the EYE ALREADY PRICED (the eyeofender
// word's own craft v0.976.467), this word the ENDER CHEST the eye's
// first priced consumer NOW PRICED; the END PORTAL's own activation
// (the eyes the frame's own story) the end trip's own lane, named
// never priced here. THE CENSUS LAW: exact 'ender_chest' (the block
// the portal's own form); exact 'obsidian' (the CRYING OBSIDIAN the
// anchor's own form - the respawn anchor the nether's own bed
// story, never adopted); exact 'eye_of_ender' (the eye the
// eyeofender word's own yield). Junk inputs never throw: they return
// a refuse with the junk-input reason so a caller bug degrades into
// a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: an
// obsidian-rich eye-rich pocket prices every chest it affords, an
// honest longer yield list never clamped. The pure read mutates
// nothing.

// the vanilla obsidian cost one ender chest craft carries (eight wrap
// the eye)
export const ENDERCHEST_OBSIDIAN_PER_CHEST = 8
// the vanilla eye cost one ender chest craft carries (one core)
export const ENDERCHEST_EYE_PER_CHEST = 1
// the vanilla ender chest yield one ender chest craft produces
export const ENDERCHEST_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns an ender chest craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.chestCount=0]     ender chests already held
 *                                         (the exact 'ender_chest'
 *                                         name, the portal's own
 *                                         stock)
 * @param {number} [opts.obsidianCount=0]  obsidian blocks on hand
 *                                         (the exact 'obsidian'
 *                                         name, the water-lava
 *                                         crossing's own yield - the
 *                                         CRYING OBSIDIAN never
 *                                         adopted)
 * @param {number} [opts.eyeCount=0]       eyes of ender on hand (the
 *                                         exact 'eye_of_ender' name,
 *                                         the eyeofender word's own
 *                                         yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, chestYield: number, obsidianLeft: number, eyeLeft: number, chests: number}}
 */
export function decideEnderChest (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['chestCount', 'obsidianCount', 'eyeCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, chestYield: 0, obsidianLeft: 0, eyeLeft: 0, chests: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const chests = floor0(opts.chestCount)
  const obsidian = floor0(opts.obsidianCount)
  const eye = floor0(opts.eyeCount)
  // a portal already held: the pocket's own door story - the ender
  // chest rides by item, the portal economy stays silent (the
  // goldenapple word's own keep law's twin, the craft family's own
  // keep gate), the obsidian and the eye ride their lefts untouched.
  if (chests >= 1) {
    return { action: 'keep', reason: 'chest-held', obsidianLeft: obsidian, eyeLeft: eye, chests, crafts: 0, chestYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // goldenapple word's own two-legged reading. Every eight obsidian
  // and one eye price their portal honestly - the floor law prices
  // the yield, the leftovers named, never capped beyond the pocket.
  const crafts = Math.min(
    Math.floor(obsidian / ENDERCHEST_OBSIDIAN_PER_CHEST),
    Math.floor(eye / ENDERCHEST_EYE_PER_CHEST)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'obsidian-eye-affordable',
      crafts,
      chestYield: crafts * ENDERCHEST_PER_CRAFT,
      obsidianLeft: obsidian - crafts * ENDERCHEST_OBSIDIAN_PER_CHEST,
      eyeLeft: eye - crafts * ENDERCHEST_EYE_PER_CHEST,
      chests: 0
    }
  }
  // the honest shortage names its starving leg: the obsidian priced
  // FIRST - the binding leg at eight-per, the water-lava crossing's
  // own story (the bucket word's own form, the diamond pickaxe the
  // tool the trip lane owns), never a guessed craft; the eye leg
  // re-tasks the eyeofender word's own craft (the pearl the
  // enderman crossing's own story), never a guessed craft
  if (obsidian < ENDERCHEST_OBSIDIAN_PER_CHEST) {
    return { action: 'defer', reason: 'obsidian-short', obsidianLeft: obsidian, eyeLeft: eye, chests: 0, crafts: 0, chestYield: 0 }
  }
  return { action: 'defer', reason: 'eye-short', obsidianLeft: obsidian, eyeLeft: eye, chests: 0, crafts: 0, chestYield: 0 }
}
