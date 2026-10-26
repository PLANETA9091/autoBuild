// (v0.976.502) Intent verdict decision for the bot fleet.
//
// THE PROBLEM: the intent board's own AGE never priced. The
// walkintent module (.974.0) prices the board's own MECHANICS - the
// record speaks before the walk, the near consult answers hit/miss,
// the clear returns on resolve - but the ANSWER never aged: any live
// hit skips, the walker's own freshness invisible to the scan (a
// hit one second old and a hit eighty-nine seconds old weigh the
// same, the lost clear's own shadow rides unnamed). The rentshadow
// word priced the LOG classes (the shadow/expired/blind census) -
// the board's own read-time verdict walked unpriced. THE FIX:
// decideIntentVerdict() prices the age lane - one intent read to
// ONE word with ONE reason (the ttl the board's own bound names,
// the caller owns the dial):
//   'keep'   - the fresh half (THE FRESH LAW: age under the ttl's
//              own midpoint - the walk mid-flight, the DURING the
//              board's own cure owes, the consult's trust full)
//   'defer'  - the ageing half (THE SHADOW WINDOW: the lost clear's
//              own shadow - the walker may have fallen silently,
//              the ttl only bounds a lost clear it never
//              immortalizes - the trust ages out, the re-record the
//              walker's own retry mints, the honest defer the
//              ambiguity prices)
//   'expire' - the bound bites (THE CRASH-SAFETY LAW: age past the
//              ttl - the v0.96.0 law's own shape, the lost clear
//              expires, the board releases the entry, the slot the
//              record mints again)
//   'refuse' - junk input (never throws into the fleet loop)
// THE HALF LAW: the trust halves at the ttl's own midpoint - the
// fresh half the walk mid-flight owns, the ageing half the shadow
// prices, the expiry the bound names. THE TTL LAW: the default the
// board's own bound reads (WALK_INTENT_TTL_MS - the walkintent
// module's own 90s crash-safety window, never a second number to
// drift), the caller owns the dial. THE CENSUS LAW: the ages the
// CALLER'S OWN reads (the entry's at/ttl the board's own cells
// carry, the now the caller's own clock speaks - the word never
// reads the board itself, the pure function stays pure). Junk
// inputs never throw: they return a refuse with the junk-input
// reason so a caller bug degrades into a log line, not a crash
// loop. Negative ages floor to zero (a clock skew must not poison
// the arithmetic - the honesty lives in the clamp); a negative ttl
// floors to zero and the bound bites at once (the caller's own
// zero bound names the immediate expiry). Fractional ages floor
// honestly (whole milliseconds the clock trades). The pure read
// mutates nothing.

import { WALK_INTENT_TTL_MS } from './walkintent.mjs'

// the fresh half's own divisor (the HALF LAW's own unit - the trust
// halves at the ttl's own midpoint: age < ttl / 2 the fresh law
// keeps)
export const INTENTVERDICT_FRESH_DIVISOR = 2

/**
 * Decide the board's own verdict for one intent read at an age.
 *
 * @param {object} [opts]
 * @param {number} [opts.ageMs=0] the intent's own age (the entry's
 *                                at vs the caller's own now - the
 *                                freshest hit's age the near consult
 *                                already returns)
 * @param {number} [opts.ttlMs=WALK_INTENT_TTL_MS] the entry's own
 *                                lifetime (the board's own bound by
 *                                default - the caller owns the dial)
 * @returns {{action: 'keep'|'defer'|'expire'|'refuse', reason: string, ageMs: number, ttlMs: number, freshMs: number}}
 */
export function decideIntentVerdict (opts = {}) {
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
  const ttl = Math.floor(floor0(opts.ttlMs !== undefined ? opts.ttlMs : WALK_INTENT_TTL_MS))
  const age = Math.floor(floor0(opts.ageMs))
  // the bound bites: the CRASH-SAFETY LAW's own body - the lost clear
  // expires, it never immortalizes (the v0.96.0 law's own shape, the
  // board releases the entry the record mints again).
  if (age >= ttl) {
    return { action: 'expire', reason: 'intent-expired', ageMs: age, ttlMs: ttl, freshMs: 0 }
  }
  // the shadow window: the ageing half - the ttl's own midpoint past,
  // the bound not yet (the lost clear's own shadow rides unnamed
  // until the midpoint prices it - the trust ages out, the re-record
  // the walker's own retry mints, the honest defer the ambiguity
  // prices).
  if (age >= ttl / INTENTVERDICT_FRESH_DIVISOR) {
    return { action: 'defer', reason: 'intent-ageing', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
  }
  // the fresh half: the walk mid-flight - the DURING the board's own
  // cure owes (the consult's trust full, the freshMs rides the read -
  // the trust's own remaining budget).
  return { action: 'keep', reason: 'intent-fresh', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
}
