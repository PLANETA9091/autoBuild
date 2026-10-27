// (v0.976.508) Low-chest verdict decision for the bot fleet.
//
// THE PROBLEM: the low-chest registry's own AGE never priced. The
// fuelbank module (v0.507.0) prices the registry's own MECHANICS -
// the record speaks when a chest is SEEN at digger depth (the
// doom band's own floor below the yard - discovery-confirmed only:
// a cell enters from a chest actually OPENED or SCANNED), the
// tithe's delivery PREFERENCES the remembered cells (the fuel
// moves to where the asks come from), the cap keeps the newest
// sixteen, the 600s window prunes the dead - but the ANSWER never
// aged: a depth confirmation one second old and five hundred
// ninety-nine seconds old weigh the same, the BAND'S OWN shadow
// rides unnamed - the fleet's own fuel moves (the preference did
// its work - the chest may already be funded), the diggers'
// depth shifts (the band's membership churns), while the record
// never re-verifies (a funded chest mints no byte, the re-remember
// only fires on the next open or scan). The emptychestverdict word
// (.976.507) priced the empty-chest commons ledger's own age, the
// fullchestverdict (.976.505) the full-chest ledger's own - this
// word is that mirror for the low-chest registry: the chest's
// three states the fuel lanes keep - full, empty, low - all speak
// their age, the age family's SEVENTH leg. THE FIX:
// decideLowchestVerdict() prices the age lane - one depth read to
// ONE word with ONE reason:
//   'keep'   - the fresh half (THE FRESH LAW: age under the ttl's
//              own midpoint - the chest JUST confirmed at depth,
//              the preference's trust full)
//   'defer'  - the ageing half (THE SHADOW WINDOW: the band's own
//              cure - the fuel may have already moved there, the
//              depth may have shifted, the record never
//              re-verifies, the trust halves, the honest defer the
//              ambiguity prices)
//   'expire' - the bound bites (THE EXPIRY LAW: age past the ttl -
//              the v0.113.0 law's own shape, the record leaves, the
//              re-seen the next scan or open mints)
//   'refuse' - junk input (never throws into the fleet loop)
// THE TENURE LAW: the family's own writes mint the ledger default
// ONLY (both call sites - the sweep's opened-chest path and the
// tithe's own scan - pass no custom ttl, no repeat half-life, no
// timeout split, the depth confirmations' one window) - the
// verdict's ttl the caller's own dial reads (the caller passes the
// entry's bound ?? the ledger default), the law stays the entry's
// own, the caller owns the dial. THE HALF LAW: the trust halves at
// the ttl's own midpoint - the fresh half the just-seen owns, the
// ageing half the shadow prices, the expiry the bound names. THE
// TTL LAW: the default the ledger's own founding bound reads
// (LOW_CHEST_TTL_MS - the fuelbank module's own 600s window every
// depth confirmation mints, never a second number to drift - the
// pin the test reads). THE CENSUS LAW: the ages the CALLER'S OWN
// reads (the entry's expiry the registry's own cells carry, the
// now the caller's own clock speaks - the word never reads the
// registry itself, the pure function stays pure). Junk inputs
// never throw: they return a refuse with the junk-input reason so
// a caller bug degrades into a log line, not a crash loop.
// Negative ages floor to zero (a clock skew must not poison the
// arithmetic - the honesty lives in the clamp); a negative ttl
// floors to zero and the bound bites at once (the caller's own
// zero bound names the immediate expiry). Fractional ages floor
// honestly (whole milliseconds the clock trades). The pure read
// mutates nothing.

import { LOW_CHEST_TTL_MS } from './fuelbank.mjs'

// the fresh half's own divisor (the HALF LAW's own unit - the trust
// halves at the ttl's own midpoint: age < ttl / 2 the fresh law
// keeps)
export const LOWCHESTVERDICT_FRESH_DIVISOR = 2

/**
 * Decide the registry's own verdict for one depth read at an age.
 *
 * @param {object} [opts]
 * @param {number} [opts.ageMs=0] the depth confirmation's own age
 *                                (the entry's write vs the caller's
 *                                own now - the eldest live entry's
 *                                age the consult already reads)
 * @param {number} [opts.ttlMs=LOW_CHEST_TTL_MS] the entry's own
 *                                lifetime (the writes mint the
 *                                ledger default ONLY - the family's
 *                                one window - the caller owns the
 *                                dial)
 * @returns {{action: 'keep'|'defer'|'expire'|'refuse', reason: string, ageMs: number, ttlMs: number, freshMs: number}}
 */
export function decideLowchestVerdict (opts = {}) {
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
  const ttl = Math.floor(floor0(opts.ttlMs !== undefined ? opts.ttlMs : LOW_CHEST_TTL_MS))
  const age = Math.floor(floor0(opts.ageMs))
  // the bound bites: the EXPIRY LAW's own body - the record
  // leaves, it never immortalizes (the v0.113.0 law's own shape,
  // the re-seen the next scan or open mints).
  if (age >= ttl) {
    return { action: 'expire', reason: 'lowchest-expired', ageMs: age, ttlMs: ttl, freshMs: 0 }
  }
  // the shadow window: the ageing half - the ttl's own midpoint
  // past, the bound not yet (the band's own cure rides unnamed
  // until the midpoint prices it - the fuel may have already moved
  // there, the depth may have shifted, the record never
  // re-verifies, the trust halves, the honest defer the ambiguity
  // prices).
  if (age >= ttl / LOWCHESTVERDICT_FRESH_DIVISOR) {
    return { action: 'defer', reason: 'lowchest-ageing', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
  }
  // the fresh half: the chest JUST confirmed at depth - the
  // preference's trust full (the freshMs rides the read - the
  // trust's own remaining budget).
  return { action: 'keep', reason: 'lowchest-fresh', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
}
