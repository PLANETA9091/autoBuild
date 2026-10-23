// (v0.976.414) THE FLEETSPLIT INSTRUMENT - the jobs lane's own storm
// signature, the fleetaudit sibling (the .413 audit prices the RUNS
// page; the autopsy's first question lives one level DEEPER - the JOBS
// read the fire performs on every red: 'F591 = 39913461886 @d742361a
// completed FAILURE (the fleet job only; unit shards + Integration
// SUCCESS)'). That read rode the agent's hands on the jobs API's own
// array; this word prices it so the red page speaks its own kind.
//
// THE STORM SIGNATURE the word owns: the fleet leg failed while the
// gates held - the unit shards and the integration job all reached
// their terminal successes while the Big fleet run alone carried the
// failure. Two autopsies priced the shape by hand (F589 the walk-home
// storm, F591 the wood-trip storm - both episodic, both re-sampled
// SUCCESS); the signature separates the EPISODIC red (the rerun
// lever's own seat - the same tree's green is the precedent's law)
// from the REAL red (the code broke its own gate - the fix lands
// first). A fleet failure with a failing shard is no storm face: the
// gates did not hold, the tree itself is red.
//
// THE LAWS the split keeps (the family's own, mirrored):
//   the lane ownership - the job's display name names its lane (the
//     workflow file's own names: 'Big fleet run' the fleet leg, 'Unit
//     tests' the shards, 'Integration' the gate); an unknown name
//     lands in the unknown lane - never guessed into a named one;
//   the terminal law - a job counts failed on conclusion 'failure',
//     succeeded on 'success'; cancelled and the in-flight shapes
//     count in the lane's total only - the rerun lever's own voice,
//     transparent (the fleetledger's own set);
//   the gate-spoke law - the storm face requires the gates to have
//     SPOKEN (at least one shard or integration terminal success): a
//     fleet failure against zero green gates is a red the data cannot
//     classify - the honest unknown, never a guessed storm face;
//   the failedIds naming - the log download queue (the autopsy walks
//     /actions/jobs/{id}/logs), the failed jobs' own ids per lane,
//     newest first in the caller's order;
//   the pure read - the jobs array is the caller's own, mutated
//     never; the junk battery - a non-array input is null; junk
//     entries skipped; the order law - the input order the caller's
//     own contract, never re-sorted.
// Pure arithmetic - no CI call, no bot read, no mutation; the fire
// feeds it the jobs array the API already returned.

// The lane names the workflow file itself speaks (the display names'
// own prefixes - the classifier reads the head, never guesses the tail).
const LANES = [
  { key: 'fleet', prefix: 'Big fleet run' },
  { key: 'shards', prefix: 'Unit tests' },
  { key: 'integration', prefix: 'Integration' }
]

function laneVerdict () {
  return { total: 0, failures: 0, successes: 0, failedIds: [] }
}

// The one-read jobs verdict:
//   fleet / shards / integration - the lanes' own counts
//     ({ total, failures, successes, failedIds })
//   unknown                      - the jobs no named lane owns ({ total })
//   stormFace                    - the episodic signature: the fleet lane
//                                  carried a failure while the gates held
//                                  (zero shard/integration failures AND at
//                                  least one gate that spoke success)
export function fleetJobSplit (jobs) {
  if (!Array.isArray(jobs)) return null
  const lanes = { fleet: laneVerdict(), shards: laneVerdict(), integration: laneVerdict(), unknown: { total: 0 } }
  for (const j of jobs) {
    if (!j || typeof j !== 'object') continue
    const name = typeof j.name === 'string' ? j.name : ''
    const lane = LANES.find(l => name.startsWith(l.prefix))
    const target = lane ? lanes[lane.key] : lanes.unknown
    target.total++
    if (j.conclusion === 'failure') {
      target.failures++
      if (lane) target.failedIds.push(j.id)
    } else if (j.conclusion === 'success') {
      target.successes++
    }
    // any other conclusion (queued, in_progress, cancelled, junk) is
    // transparent - counted in the lane's total only
  }
  const gatesHeld = lanes.shards.failures === 0 && lanes.integration.failures === 0
  const gatesSpoke = lanes.shards.successes + lanes.integration.successes > 0
  return {
    fleet: lanes.fleet,
    shards: lanes.shards,
    integration: lanes.integration,
    unknown: lanes.unknown,
    stormFace: lanes.fleet.failures > 0 && gatesHeld && gatesSpoke
  }
}
