// (v0.976.412) THE FLEETGATE INSTRUMENT - the dispatch gate's own two
// conditions priced, the fleetlane sibling (the .410 fleetledger prices
// the VERDICT, the .411 fleetlane prices the LANE and the HYGIENE; the
// three-condition audit the fire performs every hour still reads its
// two gate conditions BY HAND):
//
//   1. THE F-NUMBER READ - the first condition ('the F-run terminal
//      SUCCESS'). The fire's ladder read names it every hour: 'F596 =
//      39941381072 @803a8210 SUCCESS terminal (MY dispatch)'. The read
//      rode the agent's eyes; this word prices the lookup so the gate
//      speaks the run's own verdict.
//
//   2. THE LANDING GATE READ - the second condition ('the .x landing
//      gate read'). The word's own push leg: the push run at the
//      landing sha, newest first. The fire's ladder names it: 'the
//      .411 landing gate 39942138085 @cdc35de2 SUCCESS'. This word
//      prices the sha lookup so the condition reads the same shape
//      the F-number read returns.
//
// THE LAWS the read keeps (the family's own, mirrored):
//   the pure read - the runs array is the caller's own, mutated never;
//   the junk battery - a non-array input is null; a junk id or sha is
//     null (the honest read the data cannot carry, never a guessed
//     verdict); junk entries (the holes, the nulls, the shapeless) are
//     skipped, never guessed;
//   the unknown read - an id no run carries, a sha no head carries:
//     null (the gate that has not spoken speaks nothing - never a
//     verdict the data cannot carry, the leanness law);
//   the order law - the FIRST match in the input order wins (the CI
//     API's own newest-first order); the instrument never re-sorts -
//     the honest read is the read the caller brought;
//   the prefix law - the sha matches by prefix (the fire's ladder
//     speaks the short 8-char form, the API returns the full head);
//     an empty string prefix would match every head - refused (the
//     liar read the empty verdict would carry);
//   the terminal law - a run is terminal when its conclusion is
//     success or failure (the fleetledger's own set); cancelled is
//     completed but NOT terminal - the rerun lever's own voice, never
//     a verdict the rate would count;
//   the gate law - the landing gate prices the PUSH event only. A
//     workflow_dispatch run rides the same head (the F-number
//     dispatches on origin head before the word lands); the gate is
//     the word's own push leg - the newest-first read skips the
//     dispatch shapes, the sha it lands on keeps the gate honest.
// Pure arithmetic - no CI call, no bot read, no mutation; the fire
// feeds it the runs the API already returned.

// The conclusions the terminal law counts (the fleetledger's own set
// restated so the gate stands alone).
const TERMINAL_CONCLUSIONS = ['success', 'failure']

// The verdict shape both reads return: the run's own voice, the two
// booleans the gate arithmetic rides (success - the conclusion IS
// success; terminal - the conclusion the rate would count).
function verdictOf (r) {
  return {
    id: r.id,
    event: r.event,
    status: r.status,
    conclusion: r.conclusion,
    headSha: r.head_sha,
    success: r.conclusion === 'success',
    terminal: r.conclusion === 'success' || r.conclusion === 'failure'
  }
}

// The F-number read: the run whose id matches, first match in the
// caller's order. Junk runs array prices null; junk id (non-number)
// prices null - the API returns numeric ids, the string form the
// report speaks is NOT the id the array carries (the strictness the
// guessed match would lie past).
export function fleetRunById (runs, id) {
  if (!Array.isArray(runs)) return null
  if (!Number.isInteger(id)) return null
  for (const r of runs) {
    if (!r || typeof r !== 'object') continue
    if (r.id !== id) continue
    return verdictOf(r)
  }
  return null
}

// The landing gate read: the newest PUSH run at the sha (prefix
// match), first match in the caller's order. Junk sha (non-string,
// empty) prices null - the empty prefix would match every head. A
// dispatch-only sha prices null: no push leg, no gate spoke.
export function fleetGateAt (runs, sha) {
  if (!Array.isArray(runs)) return null
  if (typeof sha !== 'string' || sha === '') return null
  for (const r of runs) {
    if (!r || typeof r !== 'object') continue
    if (r.event !== 'push') continue
    const head = r.head_sha
    if (typeof head !== 'string' || !head.startsWith(sha)) continue
    return verdictOf(r)
  }
  return null
}
