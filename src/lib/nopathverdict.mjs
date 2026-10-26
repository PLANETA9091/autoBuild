// (v0.976.504) No-path verdict decision for the bot fleet.
//
// THE PROBLEM: the no-path ledger's own AGE never priced. The
// nopath module (v0.62.0) prices the ledger's own MECHANICS - the
// record speaks on a /No path/ exit (the full synchronous A*
// exhaustion's own verdict), the near consult answers hit/miss, the
// cap keeps the newest entries, the v0.113.0 escalation prunes the
// dead - but the ANSWER never aged: any live entry skips, a refusal
// one second old and a refusal eighty-nine seconds old weigh the
// same, the RE-TERRAIN's own cure rides unnamed - the world moves
// (another bot dug the bridge, filled the shaft, opened the path
// the geometry refused) while the record never re-verifies (no
// re-scan lane exists - the re-refusal refreshes, nothing else
// does; the header's own prose prices the cure 'a genuinely
// re-routable chest is back inside two [minutes]' and the ledger
// never reads the inside of that window). The intentverdict word
// (.976.502) priced the intent board's own age, the hazardverdict
// word (.976.503) the hazard ledger's own - this word is that
// mirror for the no-path ledger, the age family's third leg. THE
// FIX: decideNopathVerdict() prices the age lane - one refusal read
// to ONE word with ONE reason (the ttl the entry's own bound
// names, the caller owns the dial):
//   'keep'   - the fresh half (THE FRESH LAW: age under the ttl's
//              own midpoint - the terrain JUST refused this walk,
//              the skip's trust full)
//   'defer'  - the ageing half (THE SHADOW WINDOW: the re-terrain's
//              own cure - the obstruction may have cleared, the
//              record never re-verifies, the trust halves, the
//              honest defer the ambiguity prices)
//   'expire' - the bound bites (THE ESCALATION LAW: age past the
//              ttl - the v0.113.0 law's own shape, the record
//              leaves, the re-refusal the next doomed walk mints)
//   'refuse' - junk input (never throws into the fleet loop)
// THE TENURE LAW: the no-path entries carry their OWN ttl (the
// v0.70.0 per-entry lifetime - the timeout verdict's 45s half
// window NOPATH_TIMEOUT_TTL_MS against the clean refusal's 90s) -
// the verdict's ttl the ENTRY'S OWN effective bound reads (the
// caller passes the entry's ttl ?? the ledger default), never a
// second number to drift - a timeout's weaker evidence buys a
// shorter fresh half, the same arithmetic the ledger's own
// alive-check runs. THE HALF LAW: the trust halves at the ttl's own
// midpoint - the fresh half the just-refused owns, the ageing half
// the shadow prices, the expiry the bound names. THE TTL LAW: the
// default the ledger's own bound reads (NOPATH_TTL_MS - the nopath
// module's own 90s window, never a second number to drift), the
// caller owns the dial. THE CENSUS LAW: the ages the CALLER'S OWN
// reads (the entry's at/ttl the ledger's own cells carry, the now
// the caller's own clock speaks - the word never reads the ledger
// itself, the pure function stays pure). Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative ages floor
// to zero (a clock skew must not poison the arithmetic - the
// honesty lives in the clamp); a negative ttl floors to zero and
// the bound bites at once (the caller's own zero bound names the
// immediate expiry). Fractional ages floor honestly (whole
// milliseconds the clock trades). The pure read mutates nothing.

import { NOPATH_TTL_MS } from './nopath.mjs'

// the fresh half's own divisor (the HALF LAW's own unit - the trust
// halves at the ttl's own midpoint: age < ttl / 2 the fresh law
// keeps)
export const NOPATHVERDICT_FRESH_DIVISOR = 2

/**
 * Decide the ledger's own verdict for one refusal read at an age.
 *
 * @param {object} [opts]
 * @param {number} [opts.ageMs=0] the refusal's own age (the entry's
 *                                at vs the caller's own now - the
 *                                eldest live entry's age the
 *                                consult already reads)
 * @param {number} [opts.ttlMs=NOPATH_TTL_MS] the entry's own
 *                                lifetime (the v0.70.0 per-entry
 *                                lifetime when it carries one - the
 *                                timeout verdict's 45s half window,
 *                                the ledger default otherwise - the
 *                                caller owns the dial)
 * @returns {{action: 'keep'|'defer'|'expire'|'refuse', reason: string, ageMs: number, ttlMs: number, freshMs: number}}
 */
export function decideNopathVerdict (opts = {}) {
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
  const ttl = Math.floor(floor0(opts.ttlMs !== undefined ? opts.ttlMs : NOPATH_TTL_MS))
  const age = Math.floor(floor0(opts.ageMs))
  // the bound bites: the ESCALATION LAW's own body - the record
  // leaves, it never immortalizes (the v0.113.0 law's own shape,
  // the re-refusal the next doomed walk mints).
  if (age >= ttl) {
    return { action: 'expire', reason: 'nopath-expired', ageMs: age, ttlMs: ttl, freshMs: 0 }
  }
  // the shadow window: the ageing half - the ttl's own midpoint
  // past, the bound not yet (the re-terrain's own cure rides
  // unnamed until the midpoint prices it - the obstruction may
  // have cleared, the record never re-verifies, the trust halves,
  // the honest defer the ambiguity prices).
  if (age >= ttl / NOPATHVERDICT_FRESH_DIVISOR) {
    return { action: 'defer', reason: 'nopath-ageing', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
  }
  // the fresh half: the terrain JUST refused this walk - the skip's
  // trust full (the freshMs rides the read - the trust's own
  // remaining budget).
  return { action: 'keep', reason: 'nopath-fresh', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
}
