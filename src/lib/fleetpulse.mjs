// (v0.976.416) THE FLEETPULSE INSTRUMENT - the lane's own heartbeat,
// the fleetlane sibling (the .411 hygiene prices a run's LIFETIME -
// the zombie fence; this word prices the LANE's RHYTHM - the age of
// the newest dispatch, the beat the hourly cadence keeps). The audit
// page reads the in-flight shapes; the class the page cannot name is
// the ABSENT one: the fire's own cron dead for hours, no dispatch
// riding, nothing in flight, no red to autopsy - the lane silently
// pulseless. The 05:00 ledger-skip lesson's own face (an absent line
// class is indistinguishable from a blind spot): this word prices the
// newest dispatch's age so the silence speaks 'stale' instead of
// speaking nothing.
//
// THE LAWS the read keeps (the family's own, mirrored):
//   the pulse carrier - the NEWEST workflow_dispatch run in the
//     caller's order, whatever its status: a terminal dispatch is
//     still the lane's last beat (the pulse reads WHEN the lane last
//     fired, not whether something rides); the push runs never carry
//     the pulse - the fire's own shadow legs ride hourly too, the
//     pulse prices the DISPATCH rhythm only;
//   the delegation law - the age read is fleetAgeMs's own (the
//     fleetlane sibling's export, imported never duplicated); a run
//     with no honest timestamp carries no beat - skipped, the walk
//     continues to the older dispatches;
//   the fresh law - the beat is fresh while the age rides under the
//     fence; the fence is the caller's own or FLEETPULSE_STALE_MS
//     stands (the lane's own 2h restatement - the zombie fence's own
//     number, restated so the seat stands alone, the statcarry law);
//     a run with no age at all prices found WITHOUT a verdict - the
//     honest unknown, never a guessed fresh;
//   the junk battery - a non-array input is null; junk entries
//     skipped, never guessed; a lane with no dispatch at all prices
//     found false (the unborn pulse, not a null verdict - the empty
//     lane the gate law keeps);
//   the pure read - the runs array is the caller's own, mutated
//     never; the order law - the first dispatch in the caller's order
//     wins, never re-sorted.
// Pure arithmetic - no CI call, no bot read, no mutation; the fire
// feeds it the runs the API already returned.

import { fleetAgeMs } from './fleetlane.mjs'

// The lane's own stale fence: the hourly cadence doubled and rounded
// (the zombie fence's own number restated - a lane whose newest
// dispatch is 2h+ old has lost its pulse, no honest hourly fire
// leaves a beat that old).
export const FLEETPULSE_STALE_MS = 2 * 60 * 60 * 1000

// The pulse read:
//   found  - the lane carries at least one dispatch run with an honest
//            age (the unborn lane prices false)
//   runId  - the newest dispatch's own id (the beat's carrier)
//   ageMs  - the beat's age (null when the newest dispatch carries no
//            honest timestamp - found true, the verdict the data
//            cannot carry stays null, the leanness law)
//   fresh  - the beat rides under the fence (null on the no-age read)
//   staleMs- the fence the verdict rode (the caller's or the default)
export function fleetPulse (runs, opts = {}) {
  if (!Array.isArray(runs)) return null
  const o = opts && typeof opts === 'object' ? opts : {}
  const staleMs = Number.isFinite(o.staleMs) && o.staleMs > 0 ? o.staleMs : FLEETPULSE_STALE_MS
  for (const r of runs) {
    if (!r || typeof r !== 'object') continue
    if (r.event !== 'workflow_dispatch') continue
    const age = fleetAgeMs(r, o.nowMs)
    if (age == null) return { found: true, runId: r.id, ageMs: null, fresh: null, staleMs }
    return { found: true, runId: r.id, ageMs: age, fresh: age < staleMs, staleMs }
  }
  return { found: false, runId: null, ageMs: null, fresh: null, staleMs }
}
