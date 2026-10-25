// (v0.976.481) Coop egg-gather decision for the bot fleet.
//
// THE PROBLEM: the crop lane priced its feast (the pumpkinpie word,
// v0.976.479) and its sweetener (the sugarmill word, v0.976.480) -
// but the PIE'S THIRD LEG never priced: the pumpkinpie word defers
// egg-short naming "the coop's own coin, the chicken's own morning
// named never priced here" - and the EGG'S MORNING IS THE COOP (the
// chicken lays on the world's own clock, the walk only collects -
// vanilla: no craft grid, no fuel, the pen's own yard). THE NAMING
// CHAIN CLOSED: the sugarmill word (v0.976.480) minted the
// sugar-short mill twin - this word mints the egg-short coop twin;
// the pumpkin leg rides the farm trip's own story named never priced
// here (the gourd the harvest's own cargo). THE FIX: decideCoopRun()
// prices the EGG LANE - one pocket-and-yard map to ONE word with ONE
// reason:
//   'keep'   - the egg already held (THE MORNING LAW: the egg held
//              is the pie's leg already riding - the coop walk never
//              doubles the morning's own coin, the sugarmill word's
//              own MINT-ON-DEMAND keep law's sibling, the
//              keep-gate-first law reads the held egg beats any
//              promise the pen makes) OR the pen stands empty (THE
//              PEN LAW: the chicken-empty reads the KEEP, never a
//              defer - the wheatsow word's own GROUND LAW's twin:
//              the chicken either stands in reach or the hatchery
//              trip owes it, the word never guesses which)
//   'gather' - the pen stands stocked and the pocket empty (one
//              chicken in reach earns its own collect pass - the
//              run prices the WALK only, no cap, every pass the pen
//              affords priced)
//   'refuse' - junk input (never throws into the fleet loop)
// THE NO-DEFER LAW: the keep-two word - no honest shortage lives
// past the two keeps (the egg either rides the pocket or the pen's
// own walk mints the morning; the world's clock the only coin the
// lane cannot price, THE GATHER LAW's own reading). THE GATHER LAW:
// the egg yield rides the world's own clock - the word prices the
// WALK only, the clock lays it, the walk only collects, the yield
// named never guessed here (the wheatsow word's own GROWTH NEVER
// PRICED reading's twin). THE CENSUS LAW: exact 'egg' (the coop's
// own coin, vanilla's own name - no variant kin); the chicken the
// CALLER'S OWN ENTITY CENSUS (the pen's own stock the world holds -
// never a pocket item; the FEATHER and the RAW CHICKEN the drop's
// own forms, never adopted; the EGG the pocket's own form). Junk
// inputs never throw: they return a refuse with the junk-input
// reason so a caller bug degrades into a log line, not a crash
// loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a pen-rich empty-pocket read prices
// every pass it affords, an honest longer census never clamped.
// Fractional counts floor honestly with the remainder named. The
// pure read mutates nothing.

// the vanilla collect-pass cost one coop run carries per chicken in
// reach (the morning's own unit - each chicken earns its own pass)
export const COOP_RUNS_PER_CHICKEN = 1

/**
 * Decide whether one bot's pocket earns a coop egg-gather word.
 *
 * @param {object} [opts]
 * @param {number} [opts.eggsCount=0]     eggs on hand (the exact
 *                                        'egg' name, the coop's own
 *                                        coin - no variant kin)
 * @param {number} [opts.chickenCount=0]  chickens in reach (the
 *                                        caller's own entity census -
 *                                        the pen's own stock the
 *                                        world holds, never a pocket
 *                                        item)
 * @returns {{action: 'gather'|'keep'|'refuse', reason: string, runs: number, eggsLeft: number, chickensLeft: number}}
 */
export function decideCoopRun (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['eggsCount', 'chickenCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', runs: 0, eggsLeft: 0, chickensLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const eggs = floor0(opts.eggsCount)
  const chickens = floor0(opts.chickenCount)
  // the egg already held: the pie's leg already rides - the coop
  // walk never doubles the morning's own coin (the MINT-ON-DEMAND
  // keep law's sibling; keep-gate-first: the held egg beats any
  // promise the pen makes).
  if (eggs >= 1) {
    return { action: 'keep', reason: 'egg-held', runs: 0, eggsLeft: eggs, chickensLeft: chickens }
  }
  // the pen stands empty: the chicken either stands in reach or the
  // hatchery trip owes it - the word never guesses which (the
  // GROUND LAW's twin: the KEEP, never a defer - no honest shortage
  // lives past the empty gate).
  if (chickens < COOP_RUNS_PER_CHICKEN) {
    return { action: 'keep', reason: 'pen-empty', runs: 0, eggsLeft: eggs, chickensLeft: chickens }
  }
  // the pen's own arithmetic: every chicken in reach earns its own
  // collect pass honestly - the run prices the WALK only, the egg
  // yield rides the world's own clock (named never guessed), the
  // word never rounds the census into a lie and never caps the pen.
  const runs = Math.floor(chickens / COOP_RUNS_PER_CHICKEN)
  return {
    action: 'gather',
    reason: 'chickens-in-reach',
    runs,
    eggsLeft: eggs,
    chickensLeft: chickens - runs * COOP_RUNS_PER_CHICKEN
  }
}
