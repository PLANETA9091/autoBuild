// (v0.976.466) Blaze powder split decision for the bot fleet.
//
// THE PROBLEM: the brewing front priced three legs - the
// glassbottlecraft word's own bottle (the glass economy's own demand,
// v0.976.447), the waterfill word's own fill (the bottle -> water leg,
// v0.976.464), the brewstand word's own station (the brewing lane's
// own altar, v0.976.465) - but the FUEL never burned: the brewing
// stand's own fire eats the BLAZE POWDER (the brewstand word's ROD
// LAW named the powder the fuel form's own split "the powder the
// brewing fuel's own story, the fuel word the fire's own future" -
// named never priced twice over), the stand stands empty-handed. A
// bot rod-rich (the blaze crossing's own drops) rots the rod while
// the brewing lane's own fire starves: 1 blaze rod -> 2 blaze
// powder, vanilla (the shapeless split, the crafting grid's own
// work, no fuel - the fire never rides this lane). THE FIX:
// decideBlazeFuel() prices the FUEL LEG - one pocket map to ONE word
// with ONE reason:
//   'keep'   - the rod lane empty (the splitter's own silence - the
//              blaze crossing owns that story, the nether trip mints
//              the rod the split never guesses; nothing rides the
//              grid)
//   'craft'  - the split affordable (the ONE-LEG LAW: the rod the
//              only leg, the split free - no pocket leg, no fuel, no
//              grid cost; the floor law prices the count - the
//              fractional census floors to the honest integer, the
//              remainder named in the rodLeft, the yield never
//              inflated, never capped)
//   'refuse' - junk input (never throws into the fleet loop)
// NO DEFER EXISTS - the one-leg law's own reading, no honest
// shortage lives past the empty gate; the EMPTY POCKET reads the
// honest KEEP - the supply word's own silence, the .461 heal's own
// lesson read FIRST (the test asserts the pocket's true action, the
// keep gate prices the EMPTY lane honestly - the nuggetcraft and
// waterfill words' own one-leg reading, the family's third rider).
// THE SPLIT LAW: one rod mints two powders - the vanilla recipe's
// own honest form, the yield never inflated, the count never
// fractional. THE WRAP NEVER CROSSES: the split's own yield rides
// the powderYield field, NEVER silently merged into the held stock -
// the caller's census brings the powders, this word prices the split
// only (the powderLeft the held stock rides untouched, the
// nuggetcraft word's own law). THE FIRE LAW: the rod census rides
// exact 'blaze_rod' - the blaze crossing's own drop; the powder
// census rides exact 'blaze_powder' - the fuel form this word's own
// metal, the ender pearl's own eye-split (the eye of ender the end
// lane's own craft) named never adopted here. THE CHAIN LAW
// CONTINUED: the glassbottlecraft word prices what the GLASS
// becomes, the waterfill word prices what the BOTTLE becomes, the
// brewstand word prices WHERE the water stands, this word prices
// WHAT BURNS - the bottle -> water -> station -> fire chain the
// brewing front's own four legs, the NETHER WART the crop lane's own
// future named never priced. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: a rod-rich
// pocket prices every split it affords, an honest longer yield list
// never clamped. The pure read mutates nothing.

// the vanilla split ratio: one blaze rod mints two blaze powders
export const BLAZEFUEL_ROD_PER_SPLIT = 1
// the vanilla split yield: two powders ride one rod out
export const BLAZEFUEL_POWDER_PER_SPLIT = 2

/**
 * Decide whether one bot's pocket earns a blaze fuel split word.
 *
 * @param {object} [opts]
 * @param {number} [opts.rodCount=0]    blaze rods on hand (the exact
 *                                      'blaze_rod' name, the blaze
 *                                      crossing's own drop)
 * @param {number} [opts.powderCount=0] blaze powders already held
 *                                      (the exact 'blaze_powder'
 *                                      name, the fuel form's own
 *                                      metal - rides the powderLeft
 *                                      untouched, the yield never
 *                                      silently merged)
 * @returns {{action: 'craft'|'refuse'|'keep', reason: string, splits: number, powderYield: number, rodLeft: number, powderLeft: number}}
 */
export function decideBlazeFuel (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['rodCount', 'powderCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', splits: 0, powderYield: 0, rodLeft: 0, powderLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const rod = floor0(opts.rodCount)
  const powder = floor0(opts.powderCount)
  // the rod lane empty: the splitter's own silence - the blaze
  // crossing owns that story (the nether trip mints the rod, the
  // split never guesses), nothing rides the grid (the keep-gate-first
  // law, the supply word's own honest empty reading - the family's
  // own keep gate).
  if (rod < 1) {
    return { action: 'keep', reason: 'rod-empty', splits: 0, powderYield: 0, rodLeft: 0, powderLeft: powder }
  }
  // the pocket's own arithmetic: the one-leg law - the rod the only
  // leg, the split free (the grid's own work, the fire never rides).
  // The floor law prices the count (a fractional census floors to the
  // honest integer, the remainder named in the rodLeft), the yield
  // never inflated, the powderLeft the held powders ride untouched -
  // the yield never silently merged (the caller merges; the pure read
  // mutates nothing), never capped beyond the pocket.
  const splits = Math.floor(rod)
  return {
    action: 'craft',
    reason: 'rod-affordable',
    splits,
    powderYield: splits * BLAZEFUEL_POWDER_PER_SPLIT,
    rodLeft: rod - splits,
    powderLeft: powder
  }
}
