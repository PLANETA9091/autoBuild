// (v0.976.505) Full-chest verdict decision for the bot fleet.
//
// THE PROBLEM: the full-chest ledger's own AGE never priced. The
// deposit module (v0.65.0) prices the ledger's own MECHANICS - the
// record speaks when a chest proves full (the deposit's own
// capacity verdict), the near consult skips the paid walk, the cap
// keeps the newest entries, the 180s window prunes the dead - but
// the ANSWER never aged: a full verdict one second old and one
// hundred seventy-nine seconds old weigh the same, the CHEST'S OWN
// shadow rides unnamed - the world moves (the smelt lane pulls the
// fuel chest, the pack's craft feeds, a bot's short deposit left
// the cell one stack shy of full) while the record never
// re-verifies (no re-scan lane exists - the re-fulling is the only
// refresh, nothing else does). The nopathverdict word (.976.504)
// priced the no-path ledger's own age, the intentverdict word
// (.976.502) the board's own, the hazardverdict word (.976.503)
// the hazard ledger's own - this word is that mirror for the
// full-chest ledger, the age family's FOURTH leg - and the purest:
// the family's own founding law mints NO second bound (no
// escalation, no timeout split - chests do not empty mid-run, the
// v0.65.0 prose names the 180s a MAJORITY bound), so one ttl, one
// midpoint, one bite. THE FIX: decideFullchestVerdict() prices the
// age lane - one full read to ONE word with ONE reason:
//   'keep'   - the fresh half (THE FRESH LAW: age under the ttl's
//              own midpoint - the chest JUST proved full, the
//              skip's trust full)
//   'defer'  - the ageing half (THE SHADOW WINDOW: the chest's own
//              cure - the fleet's own lanes drain, the room may
//              have opened, the record never re-verifies, the
//              trust halves, the honest defer the ambiguity
//              prices)
//   'expire' - the bound bites (THE EXPIRY LAW: age past the ttl -
//              the v0.113.0 law's own shape, the record leaves,
//              the re-fulling the next doomed deposit mints)
//   'refuse' - junk input (never throws into the fleet loop)
// THE TENURE LAW: the entries carry their OWN ttl (the v0.70.0
// per-entry lifetime the recordNoPath shape gives every entry) -
// the verdict's ttl the ENTRY'S OWN effective bound reads (the
// caller passes the entry's ttl ?? the ledger default), never a
// second number to drift - though the family's own writes mint
// the ledger default ONLY (no repeat half-life, no timeout split),
// the law stays the entry's own - the caller owns the dial. THE
// HALF LAW: the trust halves at the ttl's own midpoint - the fresh
// half the just-full owns, the ageing half the shadow prices, the
// expiry the bound names. THE TTL LAW: the default the ledger's
// own bound reads (FULL_CHEST_TTL_MS - the deposit module's own
// 180s window, never a second number to drift - the pin the test
// reads). THE CENSUS LAW: the ages the CALLER'S OWN reads (the
// entry's at/ttl the ledger's own cells carry, the now the
// caller's own clock speaks - the word never reads the ledger
// itself, the pure function stays pure). Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative ages floor
// to zero (a clock skew must not poison the arithmetic - the
// honesty lives in the clamp); a negative ttl floors to zero and
// the bound bites at once (the caller's own zero bound names the
// immediate expiry). Fractional ages floor honestly (whole
// milliseconds the clock trades). The pure read mutates nothing.

import { FULL_CHEST_TTL_MS } from './deposit.mjs'

// the fresh half's own divisor (the HALF LAW's own unit - the trust
// halves at the ttl's own midpoint: age < ttl / 2 the fresh law
// keeps)
export const FULLCHESTVERDICT_FRESH_DIVISOR = 2

/**
 * Decide the ledger's own verdict for one full read at an age.
 *
 * @param {object} [opts]
 * @param {number} [opts.ageMs=0] the full verdict's own age (the
 *                                entry's at vs the caller's own now
 *                                - the eldest live entry's age the
 *                                consult already reads)
 * @param {number} [opts.ttlMs=FULL_CHEST_TTL_MS] the entry's own
 *                                lifetime (the v0.70.0 per-entry
 *                                cell when it carries one - the
 *                                ledger default otherwise - the
 *                                caller owns the dial)
 * @returns {{action: 'keep'|'defer'|'expire'|'refuse', reason: string, ageMs: number, ttlMs: number, freshMs: number}}
 */
export function decideFullchestVerdict (opts = {}) {
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
  const ttl = Math.floor(floor0(opts.ttlMs !== undefined ? opts.ttlMs : FULL_CHEST_TTL_MS))
  const age = Math.floor(floor0(opts.ageMs))
  // the bound bites: the EXPIRY LAW's own body - the record
  // leaves, it never immortalizes (the v0.113.0 law's own shape,
  // the re-fulling the next doomed deposit mints).
  if (age >= ttl) {
    return { action: 'expire', reason: 'fullchest-expired', ageMs: age, ttlMs: ttl, freshMs: 0 }
  }
  // the shadow window: the ageing half - the ttl's own midpoint
  // past, the bound not yet (the chest's own cure rides unnamed
  // until the midpoint prices it - the fleet's own lanes drain,
  // the room may have opened, the record never re-verifies, the
  // trust halves, the honest defer the ambiguity prices).
  if (age >= ttl / FULLCHESTVERDICT_FRESH_DIVISOR) {
    return { action: 'defer', reason: 'fullchest-ageing', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
  }
  // the fresh half: the chest JUST proved full - the skip's
  // trust full (the freshMs rides the read - the trust's own
  // remaining budget).
  return { action: 'keep', reason: 'fullchest-fresh', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
}
