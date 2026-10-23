// (v0.976.418) THE FLEETCANCEL INSTRUMENT - the cancel lever's own
// decision seat, the fleetrerun sibling (the .415 word prices the
// rerun lever's decision - the episodic red's /rerun-failed-jobs
// POST; the task's own hygiene law names the SECOND lever every
// hour and nobody prices it: 'Зомби-прогоны (job вечно in_progress,
// логи BlobNotFound) отменять: POST /actions/runs/{id}/cancel').
// The pair completes: the rerun lever fires on the storm face (the
// resample), the cancel lever fires on the zombie fence (the
// hostage-free). The fence's own arithmetic rides the fleetlane
// sibling (the .411 word prices fleetZombies - the in-flight run
// two hours past the half-hour wall, holding a runner with logs
// the artifact store can never serve); the DECISION between the
// fence's verdict and the cancel POST still rode the agent's
// judgement every page. This word prices the decision so the
// lever fires on arithmetic, not on vibes.
//
// THE ZOMBIE LAW the word owns: the cancel is UNCONDITIONAL - the
// rerun lever's episodic gate has no cousin here. A storm face may
// be resampled or fixed-first (the .415 word's own fork); a zombie
// has no fix branch - there is no code to fix, the runner is a
// hostage, the cancel IS the fix. The event kind is the caller's
// own ledger's business (a dispatch zombie and a push zombie hold
// runners the same way; the POST walks one address for both).
//
// THE LAWS the decision keeps (the family's own, mirrored):
//   the honest no - junk verdict (a non-object, an object without
//     the zombies array) prices null (the lever never fires on
//     data it cannot read); an empty fence prices wanted false,
//     reason null, runIds [] - the lever's failure mode is NOT
//     firing, never firing blind;
//   the ids ride - the verdict carries the zombie run ids (the
//     cancel POST walks /runs/{id}/cancel) whatever the wanted
//     boolean speaks (the fleetrerun law's own mirror: the
//     addresses ride, the autopsy queue keeps them);
//   the wanted gate - wanted is the honest arithmetic: a zombie
//     class with NO integer id names no POST (the POST an
//     undefined id would fire is no POST) - wanted rides the
//     named ids, not the raw class;
//   the junk-id skip - a zombie entry with no integer id is
//     skipped in the naming, never guessed (the digital channel's
//     own law - a string id, a float id, the shapeless);
//   the delegation law - the composition reads the sibling's
//     verdict, imports nothing, duplicates nothing (the fence is
//     the fleetlane sibling's own arithmetic; the caller holds
//     the verdict already);
//   the pure read - the verdict is the caller's own, mutated
//     never; the order law - the ids ride in the caller's order,
//     the walk never re-sorts.
// Pure arithmetic - no CI call, no bot read, no mutation; the
// fire feeds it the verdict the runs API already priced.

// The lever's decision verdict:
//   wanted  - the zombie law's own boolean (named zombie ids on
//             the verdict)
//   reason  - 'zombie-fence' when wanted, null when not (the
//             leanness law - the reason the data carries, never
//             a guess)
//   runIds  - the named zombie runs (the cancel POST's addresses)
export function fleetCancelWanted (verdict) {
  if (!verdict || typeof verdict !== 'object' || !Array.isArray(verdict.zombies)) return null
  const runIds = []
  for (const z of verdict.zombies) {
    if (!z || typeof z !== 'object') continue
    if (!Number.isInteger(z.id)) continue
    runIds.push(z.id)
  }
  const wanted = runIds.length > 0
  return {
    wanted,
    reason: wanted ? 'zombie-fence' : null,
    runIds
  }
}
