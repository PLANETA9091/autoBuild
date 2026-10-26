// (v0.976.489) The claims word - the ledger the maptarget word's own
// ALL-CLAIMED defer named.
//
// THE PROBLEM: the maptarget word prices the assignment (v0.976.488:
// the zero-clash spread, the free stock the claims' own clamp reads)
// - but the CLAIMS LEDGER itself never priced: the ALL-CLAIMED defer
// names 'the claims' own hold - the walk the claim releases - while
// the hold itself walked unpriced (a claim the bot takes and never
// releases is a target the whole fleet walks around: the ledger's
// own ceiling nobody names, the hold the map's own stock drowns in).
// THE FIX: decideClaim() prices the ledger lane - one claims map to
// ONE word with ONE reason:
//   'take'   - the target free and the ledger under its cap (the
//              claim mints, the claimsLeft named)
//   'keep'   - nothing to claim (THE NO-TARGET KEEP: the claim's own
//              silence - the hold without the target is the empty
//              ledger's own lie, never minted)
//   'defer'  - the ledger full (THE CAP-HELD DEFER: the ledger's own
//              ceiling - THE FAMILY'S THIRD HARD CEILING, the
//              endportal word's SOCKET LAW's and the sleep word's
//              UNITS LAW's sibling; the release the walk's own end
//              the wait names, never a silent drown)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CAP LAW: the ledger holds TWENTY-FOUR - the family's own
// ledger law (the no-path and the full-chest ledgers cap at 24
// entries - the filter cannot flood; the claims ride the same honest
// bound, the cap the caller's own arithmetic may lift - the word
// prices the default, the caller owns the dial). THE CENSUS LAW: the
// counts the CALLER'S OWN reads (the claims the fleet's own ledger
// rides, the target the map's own stock - the word never reads the
// map itself, the pure function stays pure). Junk inputs never
// throw: they return a refuse with the junk-input reason so a caller
// bug degrades into a log line, not a crash loop. Negative counts
// floor to zero (a lying census must not poison the arithmetic); the
// honesty lives in the clamp. Fractional counts floor honestly with
// the remainder named. The pure read mutates nothing.

// the family's own ledger bound (the no-path/full-chest cap's own
// reading - the filter cannot flood, the claims cannot drown the map)
export const CLAIMS_LEDGER_CAP = 24

/**
 * Decide whether the fleet's ledger earns a claim word.
 *
 * @param {object} [opts]
 * @param {number} [opts.claimsCount=0] the ledger's own hold (the
 *                                      caller's own census)
 * @param {number} [opts.capCount=CLAIMS_LEDGER_CAP] the ledger's own
 *                                      ceiling (the default the family
 *                                      prices, the caller owns the dial)
 * @param {boolean} [opts.hasTarget=true] the target's own existence
 *                                        (the map's own stock)
 * @returns {{action: 'take'|'keep'|'defer'|'refuse', reason: string, claims: number, cap: number, claimsLeft: number}}
 */
export function decideClaim (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['claimsCount', 'capCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', claims: 0, cap: 0, claimsLeft: 0 }
    }
  }
  // the target's own flag rides its own battery: a non-boolean flag
  // is a caller bug (a string target is a lie, never guessed into truth)
  if (opts.hasTarget !== undefined && typeof opts.hasTarget !== 'boolean') {
    return { action: 'refuse', reason: 'junk-input', claims: 0, cap: 0, claimsLeft: 0 }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const claims = floor0(opts.claimsCount)
  const cap = floor0(opts.capCount === undefined ? CLAIMS_LEDGER_CAP : opts.capCount)
  // the claim's own silence: the hold without the target is the
  // empty ledger's own lie - the keep, never a defer (the sleep
  // word's own DAY GATE reading: the claim not owed).
  if (opts.hasTarget === false) {
    return { action: 'keep', reason: 'no-target', claims, cap, claimsLeft: 0 }
  }
  // the ledger's own ceiling: the cap-held defer names the release
  // the walk's own end (the CAP LAW - the family's third hard
  // ceiling, the hold never a silent drown).
  if (claims >= cap) {
    return { action: 'defer', reason: 'cap-held', claims, cap, claimsLeft: 0 }
  }
  // the claim's own arithmetic: the take names the room the ledger
  // still owns (the claimsLeft the honest margin) - the fractional
  // census floors into the hold honestly (the half-claim the clamp
  // never mints, the remainder the floor's own read names).
  const used = Math.floor(claims)
  return {
    action: 'take',
    reason: 'target-free',
    claims,
    cap,
    claimsLeft: cap - used - 1
  }
}
