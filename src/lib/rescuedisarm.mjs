//
// rescuedisarm.mjs - THE RESCUE'S OWN DISARM GATE (v0.974.17)
//
// The drowning rescue's own pathfinder disarm sweep. The arm edge clears the
// pathfinder goal ONCE (miner.mjs's `setGoal(null)` at arm, the v0.62.0
// lesson: "pathfinder goals that fight every manual control state" - the
// goal's own movement writes and the swim's manual control states pull the
// bot in two directions every physics tick). FACE 285 (fleet run
// 38346885175, the word's tenth face) priced the gap the one clear leaves:
// the o2 book's own class read `rescue active owns 3 of 3 o2-reset drown(s)
// (100.0%) - the rescue armed and lost the trade` - and two of the three
// death contexts carried a LIVE leg walk at death (F15 `rescue active, leg
// fuel commons walk, wet 2s`; F2 `rescue active, leg walk to furnace, wet
// 17s`) - a walk goal the arm-edge clear had already emptied or never saw.
//
// THE GAP'S OWN SHAPE: the consult gate (jobqueue's `water rescue in
// progress` refusal) and the arm-edge clear both read the flag at an
// INSTANT. The leg's own re-issue rides the windows between the instants -
// the release->re-arm race (the gate consults the instant before the flag
// re-arms, the walk is admitted, the rescue takes the bot back), the nudge
// retry ladder's re-issue after a mid-walk clear. A goal admitted in such a
// window stays LIVE for the whole rescue - the tug-of-war the arm edge
// meant to end rides on, and the trade's loser is the bot (the water kept
// what the arm reached).
//
// THE CURE'S OWN LAW: the rescue loop re-asserts the disarm EVERY pass -
// conditional on a LIVE goal only, so the swim's own control writes are
// never cleared out from under it (a goal-less pass touches nothing). The
// sweep is silent (zero new log lines - the drown contexts' own
// rescueActive + leg fields are the field's own read; the census judges the
// cure by the class's next face, not by a line's bytes).
//
// THE GATE (the house's pure-gate shape - the climbOwnerGate law): the
// decision reads ONE cell. `hasGoal === true` clears; everything else
// (false, null, undefined, junk - a pathfinder stub without the getter, a
// throw, a mock) reads NO goal and clears NOTHING - the sweep errs toward
// the swim's own hands, never against them (the v0.16.0 law's own err
// side: a wasted clear costs a physics tick of drift, a wrong clear costs
// the swim its steering).
//

/**
 * Decide whether the rescue's disarm sweep must clear a live pathfinder goal.
 *
 * @param {object} [s] the sweep's own read
 * @param {boolean} [s.hasGoal] whether the pathfinder currently holds a goal
 *   (the caller folds `getGoal()`'s own truth through `!= null`; junk and
 *   throws never reach the gate as true)
 * @returns {{ clear: boolean }} the pass's own verdict - `clear` lifts the
 *   goal and the held control states (the arm edge's own pair, re-asserted)
 */
export function rescueDisarmGate (s = {}) {
  if (s && s.hasGoal === true) return { clear: true }
  return { clear: false }
}
