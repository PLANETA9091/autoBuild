// (v0.976.507) Empty-chest verdict decision for the bot fleet.
//
// THE PROBLEM: the empty-chest commons ledger's own AGE never priced.
// The fuelbank module (v0.99.0) prices the ledger's own MECHANICS -
// the record speaks when a commons chest proves empty (the dry ask
// mints the cell), the live-empty consult skips the paid re-walk,
// the 90s window prunes the dead, the tithe's own tidings clear the
// near records (the forgetEmptyNear lane) - but the ANSWER never
// aged: an empty verdict one second old and eighty-nine seconds old
// weigh the same, the CHEST'S OWN shadow rides unnamed - the
// fleet's own tithe lands beyond the re-arm radius, a furnace's
// output restocks the chest, another bot's drop refills it, while
// the record never re-verifies (the clear frees only the records
// the radius names, a natural restock mints no byte). The
// fullchestverdict word (.976.505) priced the full-chest ledger's
// own age - this word is that TWIN: the full chest's shadow is the
// room that may open, the empty chest's shadow is the tithe that
// may land - the two chests' two shadows, one word apart, the age
// family's SIXTH leg and the first beyond the ledger legs (the ask
// path's own record, the fuelbank's own lane). THE FIX:
// decideEmptychestVerdict() prices the age lane - one empty read to
// ONE word with ONE reason:
//   'keep'   - the fresh half (THE FRESH LAW: age under the ttl's
//              own midpoint - the chest JUST proved empty, the
//              skip's trust full)
//   'defer'  - the ageing half (THE SHADOW WINDOW: the empty's own
//              cure - the tithe may have landed beyond the radius,
//              the record never re-verifies, the trust halves, the
//              honest defer the ambiguity prices)
//   'expire' - the bound bites (THE EXPIRY LAW: age past the ttl -
//              the v0.113.0 law's own shape, the record leaves, the
//              re-empty the next dry ask mints)
//   'refuse' - junk input (never throws into the fleet loop)
// THE TENURE LAW: the family's own writes mint the ledger default
// ONLY (the ask path's single call site passes no custom ttl - no
// repeat half-life, no timeout split, the empties' one window) -
// the verdict's ttl the caller's own dial reads (the caller passes
// the entry's bound ?? the ledger default), the law stays the
// entry's own, the caller owns the dial. THE HALF LAW: the trust
// halves at the ttl's own midpoint - the fresh half the just-empty
// owns, the ageing half the shadow prices, the expiry the bound
// names. THE TTL LAW: the default the ledger's own founding bound
// reads (COMMONS_EMPTY_TTL_MS - the fuelbank module's own 90s
// window every empty ask mints, never a second number to drift -
// the pin the test reads). THE CENSUS LAW: the ages the CALLER'S
// OWN reads (the entry's expiry the ledger's own cells carry, the
// now the caller's own clock speaks - the word never reads the
// ledger itself, the pure function stays pure). Junk inputs never
// throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// ages floor to zero (a clock skew must not poison the arithmetic
// - the honesty lives in the clamp); a negative ttl floors to zero
// and the bound bites at once (the caller's own zero bound names
// the immediate expiry). Fractional ages floor honestly (whole
// milliseconds the clock trades). The pure read mutates nothing.

import { COMMONS_EMPTY_TTL_MS } from './fuelbank.mjs'

// the fresh half's own divisor (the HALF LAW's own unit - the trust
// halves at the ttl's own midpoint: age < ttl / 2 the fresh law
// keeps)
export const EMPTYCHESTVERDICT_FRESH_DIVISOR = 2

/**
 * Decide the ledger's own verdict for one empty read at an age.
 *
 * @param {object} [opts]
 * @param {number} [opts.ageMs=0] the empty verdict's own age (the
 *                                entry's write vs the caller's own
 *                                now - the eldest live entry's age
 *                                the consult already reads)
 * @param {number} [opts.ttlMs=COMMONS_EMPTY_TTL_MS] the entry's own
 *                                lifetime (the writes mint the
 *                                ledger default ONLY - the family's
 *                                one window - the caller owns the
 *                                dial)
 * @returns {{action: 'keep'|'defer'|'expire'|'refuse', reason: string, ageMs: number, ttlMs: number, freshMs: number}}
 */
export function decideEmptychestVerdict (opts = {}) {
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
  const ttl = Math.floor(floor0(opts.ttlMs !== undefined ? opts.ttlMs : COMMONS_EMPTY_TTL_MS))
  const age = Math.floor(floor0(opts.ageMs))
  // the bound bites: the EXPIRY LAW's own body - the record
  // leaves, it never immortalizes (the v0.113.0 law's own shape,
  // the re-empty the next dry ask mints).
  if (age >= ttl) {
    return { action: 'expire', reason: 'emptychest-expired', ageMs: age, ttlMs: ttl, freshMs: 0 }
  }
  // the shadow window: the ageing half - the ttl's own midpoint
  // past, the bound not yet (the empty's own cure rides unnamed
  // until the midpoint prices it - the tithe may have landed
  // beyond the radius, the record never re-verifies, the trust
  // halves, the honest defer the ambiguity prices).
  if (age >= ttl / EMPTYCHESTVERDICT_FRESH_DIVISOR) {
    return { action: 'defer', reason: 'emptychest-ageing', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
  }
  // the fresh half: the chest JUST proved empty - the skip's trust
  // full (the freshMs rides the read - the trust's own remaining
  // budget).
  return { action: 'keep', reason: 'emptychest-fresh', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
}
