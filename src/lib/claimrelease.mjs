// (v0.976.501) Claim release decision for the bot fleet.
//
// THE PROBLEM: the release leg walked unpriced. The claims word
// (.489) prices the ledger's own HOLD lane - the take mints the
// claim, the CAP-HELD defer names 'the release the walk's own end'
// in its own prose - but the release itself never priced: the walk
// ends, the claim rides the ledger still, the slot the release
// owes stays held (the maptarget word's ALL-CLAIMED defer waits on
// a return nobody names, the free stock the maprotate word's ring
// rides never grows back). THE FIX: decideClaimRelease() prices
// the release lane - one walk's end to ONE word with ONE reason:
//   'release' - the walk's own end returns the claim (THE
//              FREE-RETURN LAW: the released slot re-enters the
//              free stock the maptarget word's own arithmetic
//              reads, the claimsLeft named, the ring the maprotate
//              word rides grows back)
//   'keep'    - the ledger empty (the release's own silence -
//              nothing held, nothing to release, never minted from
//              nothing)
//   'defer'   - the walk still in flight (THE MID-FLIGHT BRAKE:
//              the claim rides the walk it owns, the release the
//              walk's own end names - a mid-flight release is the
//              double-walk's own lie, the honest defer the wait
//              prices)
//   'refuse'  - junk input (never throws into the fleet loop)
// THE MIRROR LAW: one walk releases ONE claim - the assignment's
// own two legs (the maptarget word's BOTS_PER_TARGET = 1 the
// target's leg, this word's CLAIMS_PER_WALK = 1 the walk's leg;
// one target one bot, one walk one claim - the zero-clash law's
// own mirror the test pins). THE CENSUS LAW: the counts the
// CALLER'S OWN reads (the claims the fleet's own ledger rides when
// it lands - the claims word's own zero-read honest default, the
// walk's end the caller's own hook speaks - the word never reads
// the walk itself, the pure function stays pure). Junk inputs
// never throw: they return a refuse with the junk-input reason so
// a caller bug degrades into a log line, not a crash loop.
// Negative claims floor to zero (a lying census must not poison
// the arithmetic - the honesty lives in the clamp); a negative
// hold reads as the empty ledger's own keep. Fractional claims
// floor honestly (whole claims the ledger trades). The surplus
// hold rides named in the claimsLeft (the release mints its one,
// the rest stay held). The pure read mutates nothing.

// the walk's own release price (the MIRROR LAW's own leg - the
// maptarget word's BOTS_PER_TARGET = 1 the target's side, one
// walk one claim the walk's side)
export const CLAIMS_PER_WALK = 1

/**
 * Decide whether one walk's end earns a release word.
 *
 * @param {object} [opts]
 * @param {number} [opts.claimsCount=0]   the ledger's own hold (the
 *                                        caller's own census - the
 *                                        claims word's own reading)
 * @param {boolean} [opts.hasWalkEnded=false] the walk's own end (the
 *                                        caller's own hook - the
 *                                        release never mints
 *                                        mid-flight)
 * @returns {{action: 'release'|'keep'|'defer'|'refuse', reason: string, claims: number, released: number, claimsLeft: number}}
 */
export function decideClaimRelease (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean count rides the same
  // law (a true count is a flag, never a number); a non-boolean walk-end
  // flag rides the mirror law (a truthy non-boolean is a caller bug, the
  // flag's own lane never guessed).
  if (opts.claimsCount !== undefined && (!Number.isFinite(opts.claimsCount) || typeof opts.claimsCount === 'boolean')) {
    return { action: 'refuse', reason: 'junk-input', claims: 0, released: 0, claimsLeft: 0 }
  }
  if (opts.hasWalkEnded !== undefined && typeof opts.hasWalkEnded !== 'boolean') {
    return { action: 'refuse', reason: 'junk-input', claims: 0, released: 0, claimsLeft: 0 }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const claims = Math.floor(floor0(opts.claimsCount))
  const ended = opts.hasWalkEnded === true
  // the ledger empty: the release's own silence - nothing held,
  // nothing to release (the keep-gate-first law, the family's own
  // honest empty reading - the claim not owed, the walk's end
  // returns nothing).
  if (claims < 1) {
    return { action: 'keep', reason: 'ledger-empty', claims, released: 0, claimsLeft: claims }
  }
  // the walk still in flight: the MID-FLIGHT BRAKE - the claim rides
  // the walk it owns (the honest defer, the double-walk's own lie
  // never minted - the release the walk's own end names, the wait
  // the brake prices).
  if (!ended) {
    return { action: 'defer', reason: 'walk-in-flight', claims, released: 0, claimsLeft: claims }
  }
  // the walk's own end: the FREE-RETURN LAW - the release mints its
  // one claim back to the free stock (the MIRROR LAW's own price:
  // one walk one claim), the surplus hold rides named in the
  // claimsLeft (the rest stay held, the read mutates nothing).
  return {
    action: 'release',
    reason: 'claim-released',
    claims,
    released: CLAIMS_PER_WALK,
    claimsLeft: claims - CLAIMS_PER_WALK
  }
}
