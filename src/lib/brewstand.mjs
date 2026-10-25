// (v0.976.465) Brewing stand decision for the bot fleet.
//
// THE PROBLEM: the brewing front priced two legs - the glassbottlecraft
// word's own bottle (the glass economy's own demand, v0.976.447) and
// the waterfill word's own fill (the bottle -> water leg, v0.976.464)
// - but the STATION never stood: the brewing stand the lane's own
// altar, the water bottle's own future reader, named never priced.
// A bot blaze-rod-rich cobble-rich (the nether roads the blaze
// crossings, the quarry the cobble tithe's own yield) rots the rod
// while the brewing chain starves for its station: 1 blaze rod +
// 3 cobblestone -> 1 brewing stand, vanilla (the rod the crown, the
// three the row). THE FIX: decideBrewStandCraft() prices the
// BREWING LANE'S OWN STATION - one pocket map to ONE word with ONE
// reason:
//   'keep'   - a brewing stand already held (the station never
//              doubles - the pieces-held law's twin, the craft
//              family's own keep gate)
//   'craft'  - rod + cobble affordable (the min law binds BOTH legs -
//              the goldenapple word's own two-legged reading, the
//              floor law prices the yield, the leftovers named,
//              never capped)
//   'defer'  - the honest shortage names its starving leg (rod-short
//              FIRST - the nether leg, the blaze crossing's own drop,
//              the fuel word's own future named never priced;
//              cobble-short - the quarry owns that story)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CROWN LAW: one rod crowns three cobble - the vanilla recipe's
// own honest form, the yield never inflated. THE STONE LAW: the
// cobble census rides exact 'cobblestone' - the STONE the smelt
// lane's own form, the COBBLED_DEEPSLATE the deepslate lane's own
// form, the BLACKSTONE the nether's own alternative shape, all named
// never adopted (the family reads its own name only). THE ROD LAW:
// the rod census rides exact 'blaze_rod' - the BLAZE POWDER the fuel
// form's own split (two powders ride one rod out, vanilla) named
// never adopted here; the powder the brewing fuel's own story, the
// fuel word the fire's own future. THE CHAIN LAW CONTINUED: the
// glassbottlecraft word prices what the GLASS becomes, the waterfill
// word prices what the BOTTLE becomes, this word prices WHERE the
// water stands - the bottle -> water -> station chain the brewing
// front's own three legs, the NETHER WART the crop lane's own future
// named never priced. THE CONSUMER LAW CONTINUED: the brewing lane's
// demand words are its own futures - the BOTTLE ALREADY PRICED (the
// glassbottlecraft word v0.976.447), the FILL ALREADY PRICED (the
// waterfill word v0.976.464), this word the STATION the brewing
// front's own altar NOW PRICED. Junk inputs never throw: they return
// a refuse with the junk-input reason so a caller bug degrades into
// a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: a rod-rich
// cobble-rich pocket prices every craft it affords, an honest longer
// yield list never clamped. The pure read mutates nothing.

// the vanilla rod cost one brewing stand craft carries (one crowns)
export const BREWSTAND_ROD_PER_CRAFT = 1
// the vanilla cobble cost one brewing stand craft carries (three row)
export const BREWSTAND_COBBLE_PER_CRAFT = 3
// the vanilla brewing stand yield one brewing stand craft produces
export const BREWSTAND_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a brewing stand craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.standCount=0]         brewing stands already
 *                                             held (the exact
 *                                             'brewing_stand' name,
 *                                             the station never
 *                                             doubles)
 * @param {number} [opts.blazeRodCount=0]      blaze rods on hand (the
 *                                             exact 'blaze_rod' name,
 *                                             the blaze crossing's
 *                                             own drop)
 * @param {number} [opts.cobblestoneCount=0]   cobblestone on hand (the
 *                                             exact 'cobblestone'
 *                                             name, the quarry's own
 *                                             tithe)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, standYield: number, rodLeft: number, cobbleLeft: number, stands: number}}
 */
export function decideBrewStandCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['standCount', 'blazeRodCount', 'cobblestoneCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, standYield: 0, rodLeft: 0, cobbleLeft: 0, stands: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const stand = floor0(opts.standCount)
  const rod = floor0(opts.blazeRodCount)
  const cobble = floor0(opts.cobblestoneCount)
  // a station already held: the brewing lane's own altar stands once -
  // the potion shelf rides by block, the station economy stays silent
  // (the pieces-held law's twin, the craft family's own keep gate).
  if (stand >= 1) {
    return { action: 'keep', reason: 'stand-held', rodLeft: rod, cobbleLeft: cobble, stands: stand, crafts: 0, standYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // goldenapple word's own two-legged reading. Every one rod and three
  // cobble price their form honestly - the floor law prices the
  // yield, the leftovers named, never capped beyond the pocket.
  const crafts = Math.min(
    Math.floor(rod / BREWSTAND_ROD_PER_CRAFT),
    Math.floor(cobble / BREWSTAND_COBBLE_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'rod-cobble-affordable',
      crafts,
      standYield: crafts * BREWSTAND_PER_CRAFT,
      rodLeft: rod - crafts * BREWSTAND_ROD_PER_CRAFT,
      cobbleLeft: cobble - crafts * BREWSTAND_COBBLE_PER_CRAFT,
      stands: 0
    }
  }
  // the honest shortage names its starving leg: the rod priced FIRST -
  // the nether leg, the blaze crossing's own drop (the fuel word's own
  // future re-tasks the blaze story, never a guessed craft); the
  // cobble leg re-tasks the quarry (the stone lane's own yield), never
  // a guessed craft
  if (rod < BREWSTAND_ROD_PER_CRAFT) {
    return { action: 'defer', reason: 'rod-short', rodLeft: rod, cobbleLeft: cobble, stands: 0, crafts: 0, standYield: 0 }
  }
  return { action: 'defer', reason: 'cobble-short', rodLeft: rod, cobbleLeft: cobble, stands: 0, crafts: 0, standYield: 0 }
}
