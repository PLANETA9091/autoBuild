// (v0.976.503) Hazard verdict decision for the bot fleet.
//
// THE PROBLEM: the hazard ledger's own AGE never priced. The
// drowning module (v0.62.0) prices the ledger's own MECHANICS - the
// record speaks at rescue/death, the near consult answers hit/miss,
// the zones cluster the wide pit, the expiry prunes the dead - but
// the ANSWER never aged: any live hit vetoes, a rescue one second
// old and a rescue one-hundred-nineteen seconds old weigh the same
// (the ledger's own 120s tenure), the CURED hazard's own shadow
// rides unnamed - the world moves (a bot bridges the pocket, blocks
// fill the column, the lake drains) while the record never
// re-verifies (no re-scan lane exists - the record ages out only,
// the v0.382.0 refresh renews a LIVING cell and never asks whether
// the water still stands). The intentverdict word (.976.502) priced
// the intent board's own age - this word is that mirror for the
// hazard ledger. THE FIX: decideHazardVerdict() prices the age lane
// - one hazard read to ONE word with ONE reason (the ttl the
// entry's own bound names, the caller owns the dial):
//   'keep'   - the fresh half (THE FRESH LAW: age under the ttl's
//              own midpoint - the water is there NOW, the veto's
//              trust full)
//   'defer'  - the ageing half (THE SHADOW WINDOW: the cured
//              hazard's own shadow - the record never re-verifies,
//              the trust halves, the honest defer the ambiguity
//              prices)
//   'expire' - the bound bites (THE EXPIRY LAW: age past the ttl -
//              the waterHazardAlive law's own shape, the record
//              leaves, the slot the next rescue mints again)
//   'refuse' - junk input (never throws into the fleet loop)
// THE TENURE LAW: the hazard records carry their OWN ttl (the death
// spot's v0.209.0 tenure - recordTtlMs) - the verdict's ttl the
// ENTRY'S OWN effective bound reads (the caller passes the record's
// ttl ?? the ledger default), never a second number to drift - a
// death spot's longer tenure buys a longer fresh half, the same
// arithmetic the ledger's own alive-check runs. THE HALF LAW: the
// trust halves at the ttl's own midpoint - the fresh half the
// water-now owns, the ageing half the shadow prices, the expiry the
// bound names. THE TTL LAW: the default the ledger's own bound
// reads (WATER_HAZARD_TTL_MS - the drowning module's own 120s
// tenure, never a second number to drift), the caller owns the
// dial. THE CENSUS LAW: the ages the CALLER'S OWN reads (the
// record's at the ledger's own cells carry, the now the caller's
// own clock speaks - the word never reads the ledger itself, the
// pure function stays pure). Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative ages floor to zero (a clock
// skew must not poison the arithmetic - the honesty lives in the
// clamp); a negative ttl floors to zero and the bound bites at once
// (the caller's own zero bound names the immediate expiry).
// Fractional ages floor honestly (whole milliseconds the clock
// trades). The pure read mutates nothing.

import { WATER_HAZARD_TTL_MS } from './drowning.mjs'

// the fresh half's own divisor (the HALF LAW's own unit - the trust
// halves at the ttl's own midpoint: age < ttl / 2 the fresh law
// keeps)
export const HAZARDVERDICT_FRESH_DIVISOR = 2

/**
 * Decide the ledger's own verdict for one hazard read at an age.
 *
 * @param {object} [opts]
 * @param {number} [opts.ageMs=0] the hazard's own age (the record's
 *                                at vs the caller's own now - the
 *                                eldest live record's age the
 *                                consult already reads)
 * @param {number} [opts.ttlMs=WATER_HAZARD_TTL_MS] the entry's own
 *                                lifetime (the record's v0.209.0
 *                                tenure when it carries one, the
 *                                ledger's own bound otherwise - the
 *                                caller owns the dial)
 * @returns {{action: 'keep'|'defer'|'expire'|'refuse', reason: string, ageMs: number, ttlMs: number, freshMs: number}}
 */
export function decideHazardVerdict (opts = {}) {
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
  const ttl = Math.floor(floor0(opts.ttlMs !== undefined ? opts.ttlMs : WATER_HAZARD_TTL_MS))
  const age = Math.floor(floor0(opts.ageMs))
  // the bound bites: the EXPIRY LAW's own body - the record leaves,
  // it never immortalizes (the waterHazardAlive law's own shape,
  // the slot the next rescue mints again).
  if (age >= ttl) {
    return { action: 'expire', reason: 'hazard-expired', ageMs: age, ttlMs: ttl, freshMs: 0 }
  }
  // the shadow window: the ageing half - the ttl's own midpoint
  // past, the bound not yet (the cured hazard's own shadow rides
  // unnamed until the midpoint prices it - the record never
  // re-verifies, the trust halves, the honest defer the ambiguity
  // prices).
  if (age >= ttl / HAZARDVERDICT_FRESH_DIVISOR) {
    return { action: 'defer', reason: 'hazard-ageing', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
  }
  // the fresh half: the water is there NOW - the veto's trust full
  // (the freshMs rides the read - the trust's own remaining budget).
  return { action: 'keep', reason: 'hazard-fresh', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
}
