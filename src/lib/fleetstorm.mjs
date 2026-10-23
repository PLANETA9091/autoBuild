// (v0.976.417) THE FLEETSTORM INSTRUMENT - the storm CADENCE, the
// fleetledger sibling (the .410 ledger prices the RATE and the
// STREAK - the page's own fractions; this word prices the FAILURE
// dispatches' RECURRENCE - the beats between the storms, the
// episodic class's own arithmetic). The storm ledger's own faces
// name the class: F589 (the walk-home OOM @541s) and F591 (the
// wood-trip OOM @191s) - two materializations in twelve fleet runs,
// both re-sampled SUCCESS on the rerun lever's own fire (the
// episodic law: the storm passes, the tree holds). The lever's
// sibling (fleetrerun) prices the PER-RED decision; nobody prices
// the CLASS's cadence - how many beats ride between the storms, how
// many since the newest one spoke - the recurrence arithmetic the
// throttle lever's own dedicated-fire decision reads. The cadence
// prices BEATS, not hours (the fleetpulse sibling owns the clock):
// a beat is a workflow_dispatch run in the caller's order, whatever
// its status - a terminal dispatch is still a beat (the pulse law's
// own carrier rule); the push runs never carry the beat - a red
// push gate is the tree's own face, the dispatch lane's storm is
// the fleet leg's.
//
// THE LAWS the read keeps (the family's own, mirrored):
//   the storm face - the FAILURE conclusion exactly: the episodic
//     OOM class's materialization (the split sibling prices the
//     red's KIND, the cadence counts the face); a cancelled run is
//     the concurrency's own kill, a beat but never a storm; a
//     timed_out run rides the same rule;
//   the beat carrier - every dispatch run in the caller's order is
//     a beat (index 0 = the newest dispatch), the walk never
//     re-sorts (the order law); the push legs between are not beats
//     (the dispatch rhythm only, the pulse law's own shadow rule);
//   the junk battery - a non-array input is null; junk entries
//     skipped, never guessed; a run with no honest event/conclusion
//     is junk;
//   the unborn law - a lane that never stormed prices stormCount 0,
//     gaps [], sinceLast null (the unborn, not a guessed zero - the
//     pulse's found-false law's cousin);
//   the pure read - the runs array is the caller's own, mutated
//     never; no CI call, no bot read, no timestamp read - the
//     cadence is order arithmetic, the caller feeds it the runs the
//     API already returned.
//
// The read:
//   stormCount - the failure dispatch runs seen
//   gaps       - the dispatch-beat distances between consecutive
//                storms, in the walk's own order (newest to oldest,
//                never re-sorted): the recurrence numbers the class
//                prices - no cap, a wider ledger an honest longer
//                list
//   sinceLast  - the beat index of the newest storm (0 = the newest
//                dispatch IS the storm; the beats since the last
//                storm spoke; null when the lane never stormed)

export function fleetStormCadence (runs) {
  if (!Array.isArray(runs)) return null
  let beat = 0
  const stormBeats = []
  for (const r of runs) {
    if (!r || typeof r !== 'object') continue
    if (r.event !== 'workflow_dispatch') continue
    if (r.conclusion === 'failure') stormBeats.push(beat)
    beat++
  }
  const gaps = []
  for (let i = 1; i < stormBeats.length; i++) gaps.push(stormBeats[i] - stormBeats[i - 1])
  return {
    stormCount: stormBeats.length,
    gaps,
    sinceLast: stormBeats.length > 0 ? stormBeats[0] : null
  }
}
