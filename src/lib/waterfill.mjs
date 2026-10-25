// (v0.976.464) Water bottle fill decision for the bot fleet.
//
// THE PROBLEM: the brewing front's own chain priced one leg - the
// glassbottlecraft word (v0.976.447) prices what the GLASS becomes
// (the bottle) - but the FILL never priced: a bot bottle-rich stands
// while the brewing lane's own shelf starves for water bottles, and
// the water it walks past IS the fill (1 glass bottle + a water
// source -> 1 water bottle, vanilla - the world's own tap, the use
// key's own work, no craft grid, no fuel). THE FIX: decideWaterFill()
// prices the FILL LANE - one pocket map to ONE word with ONE reason:
//   'keep'   - the bottle lane empty (the fill lane's own silence -
//              the glassbottlecraft lane owns that story, the craft
//              mints the bottle the fill never guesses; the brewing
//              shelf's own stock rides the waterBottleLeft untouched)
//   'fill'   - the fill affordable (the one-leg law: the bottles the
//              only leg, the fill free - the water source the world's
//              own tap, no pocket leg, no fuel, no grid; the floor law
//              prices the count, the fractional remainder named, never
//              capped)
//   'refuse' - junk input (never throws into the fleet loop)
// THE ONE-LEG LAW: the fill is fuel-free and grid-free (the world's
// own tap) - no second leg exists, no honest shortage lives past the
// empty gate (the smeltgold word's fuel-short defer has no twin here;
// the empty pocket reads the honest keep - the fill word's own
// silence, the .461 heal's own lesson read FIRST: the test asserts
// the pocket's true action, the keep gate prices the EMPTY lane
// honestly). THE CHAIN LAW: the glassbottlecraft word prices what the
// GLASS becomes, this word prices what the BOTTLE becomes - the
// bottle -> water -> potion chain the brewing front's own three legs;
// the brewing stand, the blaze fuel and the nether wart stay the
// brewing lane's own futures named never priced here. THE WRAP NEVER
// CROSSES: the fill's own yield rides the waterYield field, NEVER
// silently merged into the held stock - the caller's census brings
// the water bottles, this word prices the fill only (the
// waterBottleLeft the held stock rides untouched, the nuggetcraft
// word's own law). THE SHELF LAW: the bottle census rides exact
// 'glass_bottle' - the bottle word's own yield; the honey_bottle the
// bee lane's own form and the dragon_breath the end lane's own form
// both named never adopted; the stock census rides exact 'potion' -
// THE BREWING SHELF'S OWN FORMS share the name (the water bottle the
// base form, the brewed the shelf's own stock), the shelf read whole,
// the water form's own nbt split the caller's own future refinement
// named never priced here. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: a bottle-rich pocket
// prices every fill it affords, an honest longer yield list never
// clamped. The pure read mutates nothing.

// the vanilla fill cost: one glass bottle rides one fill out
export const WATERFILL_BOTTLE_PER_FILL = 1
// the vanilla fill yield: one water bottle rides one fill in
export const WATERFILL_WATER_PER_FILL = 1

/**
 * Decide whether one bot's pocket earns a water fill word.
 *
 * @param {object} [opts]
 * @param {number} [opts.bottleCount=0]       empty glass bottles on
 *                                            hand (the exact
 *                                            'glass_bottle' name, the
 *                                            glassbottlecraft lane's
 *                                            own yield)
 * @param {number} [opts.waterBottleCount=0]  water bottles already
 *                                            held (the exact 'potion'
 *                                            name, the brewing shelf's
 *                                            own forms - rides the
 *                                            waterBottleLeft
 *                                            untouched, the yield
 *                                            never silently merged)
 * @returns {{action: 'fill'|'refuse'|'keep', reason: string, fills: number, waterYield: number, bottleLeft: number, waterBottleLeft: number}}
 */
export function decideWaterFill (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['bottleCount', 'waterBottleCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', fills: 0, waterYield: 0, bottleLeft: 0, waterBottleLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const bottle = floor0(opts.bottleCount)
  const waterBottle = floor0(opts.waterBottleCount)
  // the bottle lane empty: the fill lane's own silence - the
  // glassbottlecraft lane owns that story (the craft mints the bottle,
  // the fill never guesses), the brewing shelf's own stock rides
  // untouched (the keep-gate-first law, the fill word's own honest
  // empty reading - the family's own keep gate).
  if (bottle < 1) {
    return { action: 'keep', reason: 'bottle-empty', fills: 0, waterYield: 0, bottleLeft: 0, waterBottleLeft: waterBottle }
  }
  // the pocket's own arithmetic: the one-leg law - the bottles the
  // only leg, the fill free (the world's own tap, the fire never
  // rides, the grid never sees). The floor law prices the count (a
  // fractional census floors to the honest integer, the remainder
  // named in the bottleLeft), the yield never inflated, the
  // waterBottleLeft the held stock rides untouched - the yield never
  // silently merged (the caller merges; the pure read mutates
  // nothing), never capped beyond the pocket.
  const fills = Math.floor(bottle / WATERFILL_BOTTLE_PER_FILL)
  return {
    action: 'fill',
    reason: 'bottles-affordable',
    fills,
    waterYield: fills * WATERFILL_WATER_PER_FILL,
    bottleLeft: bottle - fills * WATERFILL_BOTTLE_PER_FILL,
    waterBottleLeft: waterBottle
  }
}
