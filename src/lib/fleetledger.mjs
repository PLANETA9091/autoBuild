// (v0.976.410) THE FLEETLEDGER INSTRUMENT - the reporting lane's own
// rate pricer (the task's own 'measure the rate' seat, the decode
// instrument the deepstrand precedent keeps: pure, unit-tested, ZERO
// fleet wiring - the bot loop never imports it, the cron fire feeds
// it the runs the CI API already returned and the verdict line rides
// the fire's own report). The care lane priced the body twenty words
// deep - the FLEET the words serve has its own ledger the agents
// read by hand every hour: the F-numbers, the conclusions, the
// streaks the worklog narrates ('the fleet NINE-streak F579-F588',
// 'the storm episodic not deterministic'). This instrument prices
// the ledger's own arithmetic - the RATE the runs carry, the STREAK
// the newest success rides, the REDS the storms dealt - so the
// report speaks the number instead of the narrative.
//
// THE LAWS the arithmetic keeps:
//   the terminal filter - only 'success'/'failure' count (the
//     queued and the in_progress stay OUT: the honest ledger never
//     counts the unborn); the non-terminal entries are TRANSPARENT
//     - skipped, never streak-breaking (the rerun's attempt rides
//     the same run id, the final conclusion the only voice)
//   the newest-first order - the runs arrive newest first (the CI
//     API's own order); the streak counts from the head, a reversed
//     array prices a reversed streak (the order is the caller's own
//     contract, the instrument never re-sorts - the honest read is
//     the read the caller brought)
//   the empty ledger - zero terminal runs, the rate is null (never
//     a verdict the data cannot carry - the leanness law)
//   the junk battery - a non-array input is null; junk entries
//     (the holes, the nulls, the shapeless) are skipped, never
//     guessed
// Pure arithmetic - no CI call, no bot read, no mutation; the runs
// array is the caller's own.

// The verdict: one read per ledger.
//   rate     - successes / terminal (0..1; null when no terminal run
//              lives - the empty ledger the verdict cannot ride)
//   streak   - the consecutive successes from the newest terminal run
//              (the first terminal failure stops it; the non-terminal
//              entries transparent - the rerun's in-flight attempt
//              never breaks the streak it will re-price)
//   reds     - the terminal failures the ledger carries
//   terminal - the terminal run count the rate rides
//   successes- the terminal successes the rate rides
export function fleetRate (runs) {
  if (!Array.isArray(runs)) return null
  let successes = 0
  let reds = 0
  let streak = 0
  let streakOpen = true
  for (const r of runs) {
    const c = r == null ? undefined : r.conclusion
    if (c === 'success') {
      successes++
      if (streakOpen) streak++
    } else if (c === 'failure') {
      reds++
      streakOpen = false
    }
    // any other conclusion (queued, in_progress, cancelled, junk) is
    // transparent - never counted, never streak-breaking
  }
  const terminal = successes + reds
  return {
    rate: terminal === 0 ? null : successes / terminal,
    streak,
    reds,
    terminal,
    successes
  }
}

// The streak alone: the calls' shortcut (the worklog's own noun -
// 'the fleet NINE-streak'). Null on the junk battery, the honest
// zero when every terminal run at the head is a failure.
export function fleetStreak (runs) {
  const verdict = fleetRate(runs)
  if (verdict == null) return null
  return verdict.streak
}
