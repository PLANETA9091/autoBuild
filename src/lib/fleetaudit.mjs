// (v0.976.413) THE FLEETAUDIT INSTRUMENT - the point-4 audit priced as
// ONE read, the fleetledger/fleetlane/fleetgate trio's own combinator.
// The fire performs the same audit every hour on the runs array the CI
// API already returned: the rate line ('the fleet NINE-streak rate 1
// reds 0'), the lane read ('THE LANE NOT EMPTY - the parallel dispatch
// in flight'), the hygiene read ('zero zombies'), the red page ('zero
// reds'). Four instruments price the parts - the COMPOSITION still rode
// the agent's hands: the verdict line was assembled by prose. This word
// prices the assembly so the fire's report speaks one audit verdict.
//
// THE NEW ARITHMETIC the word owns: the NAMED reds. The fleetRate
// verdict COUNTS the terminal failures (reds: 1); the autopsy needs
// their NAMES - the run ids the log download walks, newest first, the
// queue the fire's point-4 hygiene serves. A red the rate counts and
// the queue cannot name is a verdict without a lever - the naming is
// the honest gap the combinator closes.
//
// THE LAWS the assembly keeps (the family's own, mirrored):
//   the delegation law - the parts are the siblings' own reads
//     (fleetRate, fleetLaneBusy, fleetZombies), imported never
//     duplicated; the word owns ONLY the composition and the naming;
//   the pure read - the runs array is the caller's own, mutated never;
//   the junk battery - a non-array input is null (the honest read the
//     data cannot carry); junk entries are skipped by every sibling
//     and by the naming walk, never guessed;
//   the terminal law - a red is a run whose conclusion IS 'failure'
//     (the fleetledger's own set); cancelled is completed but NOT a
//     red - the rerun lever's own voice, transparent everywhere: not
//     counted, not named, not clean-breaking;
//   the order law - the reds arrive in the caller's own order (the CI
//     API's newest-first); the autopsy queue walks the youngest red
//     first - the instrument never re-sorts;
//   the clean law - the audit's own boolean: zero named reds, zero
//     zombie candidates, the dispatch lane open. The F-number's own
//     terminal read stays the caller's (fleetRunById's seat) - the
//     audit prices the PAGE, not the ladder's first condition.
// Pure arithmetic - no CI call, no bot read, no mutation; the fire
// feeds it the runs the API already returned.

import { fleetRate } from './fleetledger.mjs'
import { fleetLaneBusy, fleetZombies } from './fleetlane.mjs'

// The one-read audit verdict:
//   rate    - the fleetRate verdict (rate/streak/reds/terminal/successes)
//   lane    - the fleetLaneBusy verdict (busy + the riders)
//   zombies - the fleetZombies candidates (the cancel lever's ids)
//   fenceMs - the fence the zombie read rode (the caller's or the default)
//   reds    - the NAMED terminal failures ([{ id, headSha, conclusion }])
//             - the autopsy queue, newest first
//   clean   - zero reds, zero zombies, the lane open (the page's own boolean)
export function fleetAudit (runs, opts = {}) {
  if (!Array.isArray(runs)) return null
  const o = opts && typeof opts === 'object' ? opts : {}
  const rate = fleetRate(runs)
  const lane = fleetLaneBusy(runs)
  const zom = fleetZombies(runs, o)
  const reds = []
  for (const r of runs) {
    if (!r || typeof r !== 'object') continue
    if (r.conclusion !== 'failure') continue
    reds.push({ id: r.id, headSha: r.head_sha, conclusion: r.conclusion })
  }
  return {
    rate,
    lane,
    zombies: zom.zombies,
    fenceMs: zom.fenceMs,
    reds,
    clean: reds.length === 0 && zom.zombies.length === 0 && !lane.busy
  }
}
