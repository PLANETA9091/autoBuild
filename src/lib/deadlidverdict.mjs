// (v0.976.506) Dead-lid verdict decision for the bot fleet.
//
// THE PROBLEM: the dead-lid ledger's own AGE never priced. The
// deposit module (v0.976.131) prices the ledger's own MECHANICS -
// the record speaks when an open call dies twice (the open timeout
// IS the death - the family's founding prose), the near consult
// skips the paid walk, the cap keeps the newest entries, the
// repeat's own half-life escalates the twice-dead cell - but the
// ANSWER never aged: a death verdict one second old and fourteen
// seconds old weigh the same, the LID'S OWN shadow rides unnamed -
// the world moves (a bot's fresh attempt opens the stuck lid, the
// server's own lag lifts, the blockage churns) while the record
// never re-verifies (no clear lane exists - the cure rides
// unnamed, a successful open mints no byte). The fullchestverdict
// word (.976.505) priced the full-chest ledger's own age, the
// nopathverdict word (.976.504) the no-path ledger's own - this
// word is that mirror for the dead-lid ledger, the age family's
// FIFTH leg and the ledger legs' LAST (no-path, full-chest,
// dead-lid - the book's three chest verdicts now all speak their
// age). THE FIX: decideDeadlidVerdict() prices the age lane - one
// death read to ONE word with ONE reason:
//   'keep'   - the fresh half (THE FRESH LAW: age under the ttl's
//              own midpoint - the lid JUST died, the skip's trust
//              full)
//   'defer'  - the ageing half (THE SHADOW WINDOW: the lid's own
//              cure - a fresh attempt may open what the stale
//              attempt lost, the record never re-verifies, the
//              trust halves, the honest defer the ambiguity
//              prices)
//   'expire' - the bound bites (THE EXPIRY LAW: age past the ttl -
//              the v0.113.0 law's own shape, the record leaves,
//              the re-death the next doomed open mints)
//   'refuse' - junk input (never throws into the fleet loop)
// THE TENURE LAW: the entries carry their OWN ttl (the v0.70.0
// per-entry lifetime the recordNoPath shape gives every entry -
// the family's own half-life law the no-path family holds: a
// FIRST death rides the machine bound CHEST_DOOM_TTL_MS, a REPEAT
// death - a cell whose prior verdict expired and died AGAIN -
// rides the 90s half-life NOPATH_REPEAT_TTL_MS, the weaker the
// evidence the longer the trust) - the verdict's ttl the ENTRY'S
// OWN effective bound reads (the caller passes the entry's ttl ??
// the ledger default), never a second number to drift. THE HALF
// LAW: the trust halves at the ttl's own midpoint - the fresh half
// the just-dead owns, the ageing half the shadow prices, the
// expiry the bound names. THE TTL LAW: the default the ledger's
// own founding bound reads (CHEST_DOOM_TTL_MS - the deposit
// module's own 15s machine window every first death mints, never
// a second number to drift - the pin the test reads). THE CENSUS
// LAW: the ages the CALLER'S OWN reads (the entry's at/ttl the
// ledger's own cells carry, the now the caller's own clock speaks
// - the word never reads the ledger itself, the pure function
// stays pure). Junk inputs never throw: they return a refuse with
// the junk-input reason so a caller bug degrades into a log line,
// not a crash loop. Negative ages floor to zero (a clock skew
// must not poison the arithmetic - the honesty lives in the
// clamp); a negative ttl floors to zero and the bound bites at
// once (the caller's own zero bound names the immediate expiry).
// Fractional ages floor honestly (whole milliseconds the clock
// trades). The pure read mutates nothing.

import { CHEST_DOOM_TTL_MS } from './deposit.mjs'

// the fresh half's own divisor (the HALF LAW's own unit - the trust
// halves at the ttl's own midpoint: age < ttl / 2 the fresh law
// keeps)
export const DEADLIDVERDICT_FRESH_DIVISOR = 2

/**
 * Decide the ledger's own verdict for one death read at an age.
 *
 * @param {object} [opts]
 * @param {number} [opts.ageMs=0] the death verdict's own age (the
 *                                entry's at vs the caller's own now
 *                                - the eldest live entry's age the
 *                                consult already reads)
 * @param {number} [opts.ttlMs=CHEST_DOOM_TTL_MS] the entry's own
 *                                lifetime (the v0.70.0 per-entry
 *                                cell when it carries one - the
 *                                repeat's 90s half-life the TENURE
 *                                LAW reads, the ledger default
 *                                otherwise - the caller owns the
 *                                dial)
 * @returns {{action: 'keep'|'defer'|'expire'|'refuse', reason: string, ageMs: number, ttlMs: number, freshMs: number}}
 */
export function decideDeadlidVerdict (opts = {}) {
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
  const ttl = Math.floor(floor0(opts.ttlMs !== undefined ? opts.ttlMs : CHEST_DOOM_TTL_MS))
  const age = Math.floor(floor0(opts.ageMs))
  // the bound bites: the EXPIRY LAW's own body - the record
  // leaves, it never immortalizes (the v0.113.0 law's own shape,
  // the re-death the next doomed open mints).
  if (age >= ttl) {
    return { action: 'expire', reason: 'deadlid-expired', ageMs: age, ttlMs: ttl, freshMs: 0 }
  }
  // the shadow window: the ageing half - the ttl's own midpoint
  // past, the bound not yet (the lid's own cure rides unnamed
  // until the midpoint prices it - a fresh attempt may open what
  // the stale attempt lost, the record never re-verifies, the
  // trust halves, the honest defer the ambiguity prices).
  if (age >= ttl / DEADLIDVERDICT_FRESH_DIVISOR) {
    return { action: 'defer', reason: 'deadlid-ageing', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
  }
  // the fresh half: the lid JUST died - the skip's trust full
  // (the freshMs rides the read - the trust's own remaining
  // budget).
  return { action: 'keep', reason: 'deadlid-fresh', ageMs: age, ttlMs: ttl, freshMs: ttl - age }
}
