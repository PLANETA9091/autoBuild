// (v0.976.509) Claimboard verdict decision for the bot fleet.
//
// THE PROBLEM: the claim board's own AGE never priced. The claims
// module prices the board's own MECHANICS - the record speaks when
// a trip TAKE mints the claim (the walk claims its target, the
// broadcast rides the PVB2 line, the receive re-mints the cell),
// the release hands the slot back (the claimrelease word priced
// the RETURN lane), the expiry prunes the dead lazily (a bot that
// dies mid-trip never cleans up - the TTL does), the cap keeps the
// board bounded - but the ANSWER never aged: a claim one second
// old and one hundred nineteen seconds old weigh the same, the
// RENT'S OWN shadow rides unnamed - the holder may be dead (the
// release never comes - the death-safe law's own reason the TTL
// exists), the trip may be done (the release already in flight),
// the record never re-verifies (a finished walk mints no byte, the
// re-claim only fires on the next take). The maptarget word priced
// the ASSIGNMENT, the claims word the HOLD lane, the claimrelease
// word the RETURN lane - this word prices the ANSWER's own age:
// the age family's EIGHTH leg and the first riding the fleet wire
// (the claims the bots' own chat line mints). THE FIX:
// decideClaimboardVerdict() prices the age lane - one claim read
// to ONE word with ONE reason:
//   'keep'   - the fresh half (THE FRESH LAW: age under the ttl's
//              own midpoint - the trip JUST took the target, the
//              occupancy's trust full)
//   'defer'  - the ageing half (THE SHADOW WINDOW: the rent's own
//              cure - the holder may be dead, the release may be
//              in flight, the record never re-verifies, the trust
//              halves, the honest defer the ambiguity prices)
//   'expire' - the bound bites (THE EXPIRY LAW: age past the ttl -
//              the v0.113.0 law's own shape, the board's own lazy
//              prune the read already runs, the re-claim the next
//              take mints)
//   'refuse' - junk input (never throws into the fleet loop)
// THE TENURE LAW: the family's own writes mint the ledger default
// ONLY (the board's own constructor dial - ttlMs defaults to the
// CLAIM_TTL_MS, the claim() take passes no custom ttl, no repeat
// half-life, no timeout split, the trips' one window) - the
// verdict's ttl the caller's own dial reads (the caller passes the
// entry's bound ?? the board default), the law stays the entry's
// own, the caller owns the dial. THE HALF LAW: the trust halves at
// the ttl's own midpoint - the fresh half the just-took owns, the
// ageing half the shadow prices, the expiry the bound names. THE
// TTL LAW: the default the ledger's own founding bound reads
// (CLAIM_TTL_MS - the claims module's own 120s window every take
// mints, never a second number to drift - the pin the test reads).
// THE CENSUS LAW: the ages the CALLER'S OWN reads (the entry's
// expiresAt the board's own cells carry, the now the caller's own
// clock speaks - the word never reads the board itself, the pure
// function stays pure). Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into
// a log line, not a crash loop. Negative ages floor to zero (a
// clock skew must not poison the arithmetic - the honesty lives in
// the clamp); a negative ttl floors to zero and the bound bites at
// once (the caller's own zero bound names the immediate expiry).
// Fractional ages floor honestly (whole milliseconds the clock
// trades). The pure read mutates nothing.

import { CLAIM_TTL_MS } from '../fleet/claims.mjs'

// the fresh half's own divisor (the HALF LAW's own unit - the trust
// halves at the ttl's own midpoint: age < ttl / 2 the fresh law
// keeps)
export const CLAIMBOARDVERDICT_FRESH_DIVISOR = 2

/**
 * Decide the board's own verdict for one claim read at an age.
 *
 * @param {object} [opts]
 * @param {number} [opts.ageMs=0] the claim's own age (the entry's
 *                                write vs the caller's own now - the
 *                                eldest live claim's age the consult
 *                                already reads)
 * @param {number} [opts.ttlMs=CLAIM_TTL_MS] the entry's own lifetime
 *                                (the writes mint the board default
 *                                ONLY - the family's one window - the
 *                                caller owns the dial)
 * @returns {{action: 'keep'|'defer'|'expire'|'refuse', reason: string, ageMs: number, ttlMs: number, freshMs: number}}
 */
export function decideClaimboardVerdict (opts = {}) {
  // the junk battery: a non-finite number is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true age is a flag, never a number).
  const KEYS = ['ageMs', 'ttlMs']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', ageMs: 0, ttlMs: 0, freshMs: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const ttl = Math.floor(floor0(opts.ttlMs !== undefined ? opts.ttlMs : CLAIM_TTL_MS))
  const age = Math.floor(floor0(opts.ageMs))
  // the bound bites: the EXPIRY LAW's own body - the record
  // leaves, it never immortalizes (the v0.113.0 law's own shape,
  // the board's own lazy prune the read already runs).
  if (age >= ttl) {
    return { action: 'expire', reason: 'claimboard-expired', ageMs: age, ttlMs: ttl, freshMs: 0 }
  }
  // the shadow window: the ageing half - the ttl's own midpoint
  // past, the bound not yet (the rent's own cure rides unnamed
  // until the midpoint prices it - the holder may be dead, the
  // release may be in flight, the record never re-verifies, the
  // trust halves, the honest defer the ambiguity prices).
  if (age >= ttl / CLAIMBOARDVERDICT_FRESH_DIVISOR) {
    return { action: 'defer', reason: 'claimboard-ageing', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
  }
  // the fresh half: the trip JUST took the target - the
  // occupancy's trust full (the freshMs rides the read - the
  // trust's own remaining budget).
  return { action: 'keep', reason: 'claimboard-fresh', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
}
