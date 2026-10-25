// (v0.976.470) Nether wart sow decision for the bot fleet.
//
// THE PROBLEM: the crop lane never priced a leg of its own. The chain
// named it twice and never priced it: the magmacream word (v0.976.468)
// read "the wart the crop lane's own future, named never priced, stays
// the crop lane's own story" and the fermentedeye word (v0.976.469)
// let the naming stand. Meanwhile a wart-rich bot stands while the
// farm's own plot starves for seed - and the GROUND it walks past IS
// the sow (1 nether wart planted on 1 soul sand -> 1 planted wart,
// vanilla - no craft grid, no fuel, the world's own soil). THE FIX:
// decideNetherWart() prices the SOW LANE - one pocket map to ONE word
// with ONE reason:
//   'keep'   - the ground lane empty (the sand-empty reads the KEEP -
//              the waterfill word's own honest empty law: the crossing
//              mints the sand, the trip lane owns that story, the sow
//              never guesses the ground; the warts ride wartLeft
//              untouched)
//   'sow'    - the sow affordable (the min law binds BOTH legs: the
//              floor law prices the count, the leftovers named, never
//              capped)
//   'defer'  - the honest shortage names its starving leg (the seed
//              the fortress farm's own story)
//   'refuse' - junk input (never throws into the fleet loop)
// THE GROUND LAW: the soul sand the sow's own ground - the sand-empty
// reads the KEEP, never a defer (the waterfill word's own law - no
// honest shortage lives past the empty gate: the ground either stands
// underfoot or the trip lane owes it, the word never guesses which).
// THE SEED LAW: the wart the fortress farm's own seed - the wart-short
// reads the DEFER (the nether crossing mints the first, the farm's own
// harvest re-mints the rest, the defer names the crossing). THE MIN
// LAW binds both legs (the eyeofender word's own two-legged reading).
// THE CENSUS LAW: exact 'nether_wart' (the NETHER WART BLOCK the
// storage lane's own nine-form, never adopted); exact 'soul_sand' (the
// SOUL SOIL the different ground - the wart REFUSES it, vanilla - the
// farming law the census never bends, never adopted). THE GROWTH NEVER
// PRICED: the planted wart's own yield (two to four at maturity) rides
// the world's own clock - the word prices the SOW only, the harvest
// the farm trip's own story named never guessed here. Junk inputs
// never throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a wart-rich sand-rich pocket prices every sow it
// affords, an honest longer plot list never clamped. The pure read
// mutates nothing.

// the vanilla wart cost one sow carries (the fortress farm's own
// seed tithe)
export const NETHERWART_WART_PER_SOW = 1
// the vanilla ground cost one sow carries (the crossing's own sand)
export const NETHERWART_SOULSAND_PER_SOW = 1

/**
 * Decide whether one bot's pocket earns a nether wart sow word.
 *
 * @param {object} [opts]
 * @param {number} [opts.wartCount=0]       nether warts on hand (the
 *                                          exact 'nether_wart' name,
 *                                          the fortress farm's own
 *                                          seed stock)
 * @param {number} [opts.soulsandCount=0]   soul sand blocks on hand
 *                                          (the exact 'soul_sand'
 *                                          name, the crossing's own
 *                                          ground - the SOUL SOIL
 *                                          never adopted)
 * @returns {{action: 'sow'|'defer'|'refuse'|'keep', reason: string, sows: number, wartLeft: number, soulsandLeft: number}}
 */
export function decideNetherWart (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['wartCount', 'soulsandCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', sows: 0, wartLeft: 0, soulsandLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const warts = floor0(opts.wartCount)
  const sand = floor0(opts.soulsandCount)
  // the ground lane empty: the sand-empty reads the KEEP - the
  // waterfill word's own honest empty law (the crossing mints the
  // sand, the trip lane owns that story, the sow never guesses the
  // ground), the warts ride wartLeft untouched (the keep-gate-first
  // law, the sow word's own honest empty reading - the family's own
  // keep gate).
  if (sand < 1) {
    return { action: 'keep', reason: 'soulsand-empty', sows: 0, wartLeft: warts, soulsandLeft: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // eyeofender word's own two-legged reading. Every wart and one sand
  // price their plot honestly - the floor law prices the count (a
  // fractional census floors to the honest integer, the remainder
  // named in the wartLeft), the yield never inflated, never capped
  // beyond the pocket.
  const sows = Math.min(
    Math.floor(warts / NETHERWART_WART_PER_SOW),
    Math.floor(sand / NETHERWART_SOULSAND_PER_SOW)
  )
  // the seed lane short: the honest shortage names its starving leg -
  // the fortress farm's own story (the nether crossing mints the
  // first wart, the farm's own harvest re-mints the rest; the sand
  // stands ready, the soulsandLeft rides untouched - the ground the
  // word never spends on a guessed sow).
  if (sows < 1) {
    return { action: 'defer', reason: 'wart-short', sows: 0, wartLeft: 0, soulsandLeft: sand }
  }
  return {
    action: 'sow',
    reason: 'wart-soulsand-affordable',
    sows,
    wartLeft: warts - sows * NETHERWART_WART_PER_SOW,
    soulsandLeft: sand - sows * NETHERWART_SOULSAND_PER_SOW
  }
}
