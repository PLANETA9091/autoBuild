// (v0.976.415) THE FLEETRERUN INSTRUMENT - the rerun lever's own
// decision seat, the fleetsplit sibling (the .413 audit prices the
// page, the .414 split prices the red's KIND; the lever's decision
// between them still rode the agent's judgement every red page: the
// fire-1544 ledger names the precedent's law - 'THE RERUN-FAILED-JOBS
// LEVER -> HTTP 201, attempt 2 completed SUCCESS (the precedent's law
// repeats)'). This word prices the decision so the lever fires on
// arithmetic, not on vibes.
//
// THE EPISODIC LAW the word owns: the lever fires ONLY on the storm
// face - the red whose gates held (the .414 split's own signature:
// the fleet leg failed while the unit shards and the integration job
// all spoke success). The REAL red - the code broke its own gate -
// never reruns: the fix lands first, the lever firing on a broken
// tree would resample the same red and burn a runner for nothing.
// The precedent's precedent (F589, F591) priced both faces episodic;
// a real red has never fired the lever - the law was practiced, now
// it is priced.
//
// THE LAWS the decision keeps (the family's own, mirrored):
//   the honest no - junk audit or junk split prices null (the lever
//     never fires on data it cannot read); a clean page, a non-storm
//     red, a silent gate: wanted false, reason null - the lever's
//     failure mode is NOT firing, never firing blind;
//   the ids ride - the verdict carries the red run ids (the
//     rerun-failed-jobs POST walks /runs/{id}/rerun-failed-jobs) and
//     the failed fleet job ids (the log download walks
//     /actions/jobs/{id}/logs) - the levers' own addresses, whatever
//     the wanted boolean speaks;
//   the junk-id skip - a red entry with no integer id is skipped in
//     the naming (the POST an undefined id would fire is no POST);
//   the pure read - both inputs are the caller's own, mutated never;
//     the composition reads the siblings' verdicts, imports nothing,
//     duplicates nothing - the callers hold the verdicts already.
// Pure arithmetic - no CI call, no bot read, no mutation.

// The lever's decision verdict:
//   wanted  - the episodic law's own boolean (reds on the page AND
//             the split's stormFace signature)
//   reason  - 'storm-face' when wanted, null when not (the leanness
//             law - the reason the data carries, never a guess)
//   redIds  - the named red runs (the rerun POST's addresses)
//   jobIds  - the failed fleet jobs (the log download's addresses)
export function fleetRerunWanted (audit, split) {
  if (!audit || typeof audit !== 'object' || !Array.isArray(audit.reds)) return null
  if (!split || typeof split !== 'object') return null
  const redIds = []
  for (const r of audit.reds) {
    if (!r || typeof r !== 'object') continue
    if (!Number.isInteger(r.id)) continue
    redIds.push(r.id)
  }
  const jobIds = Array.isArray(split.fleet?.failedIds)
    ? split.fleet.failedIds.filter(id => Number.isInteger(id))
    : []
  const wanted = redIds.length > 0 && split.stormFace === true
  return {
    wanted,
    reason: wanted ? 'storm-face' : null,
    redIds,
    jobIds
  }
}
