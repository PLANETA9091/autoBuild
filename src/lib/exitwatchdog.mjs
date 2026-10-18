// (v0.976.233) THE EXIT WATCHDOG - the hard-exit backstop the F465 face
// priced. THE EVIDENCE (run 39122045949, the .231 tree's own dispatch): the
// Big fleet job started 11:23:42Z and died 45m00s later at the job's own
// 40-minute timeout - the fleet process outlived its 600s deadline by
// TWENTY-FIVE PLUS minutes INSIDE the launch step, the v0.246.0 stuck-fleet
// circuit breaker's own class ('the event loop was alive but the exit path
// starved') resurfacing whole: the runners' loops all gate their re-entry on
// `Date.now() < deadline`, but ONE in-flight await that never settles (a
// pathfinder promise, a chest open, a reconnect hand-off) parks its runner
// forever, `await Promise.all(runners)` never resolves, and the report the
// whole run dug for never prints. run36323193851 rode the same class before
// the breaker existed; the breaker capped the JOB damage (18-min step
// timeout, the slot frees) but the FACE still dies reportless - the mined
// counters, the bank books, the worldmap, every census the next fire reads,
// all lost to the hang. THE CURE: an independent setTimeout scheduled at the
// run's own arithmetic margin - the deadline plus the 420s the end-phase's
// own worst legitimate tail rides ('deadline + stagger 120s + 150s = 270s <
// the 420s margin, so the process finishes naturally' - the fleet19 margin
// comment, the design's own bound) - that when it fires prints the canonical
// line, runs the SAME printFinalReport the normal end rides (synchronous -
// the hang class cannot starve it) and hard-exits 12 (0 = the deadline end,
// 13 = the heap cliff, 14 = the login lane - 12 was free, the deaths stay
// tellable). The timers the event loop still serves make this fire where the
// Promise.all cannot resolve - the class's own aliveness is the cure's
// clock. A run that ends naturally kills the timer mid-flight (process.exit
// wins the race the design prices); the watchdog never fires on a live
// end-phase - 150s of headroom ride between the 270s worst legitimate end
// and the 420s mark.
//
// THE PURE HALF: the verdict arithmetic lives here (one parser, never a
// second - the census law), the fleet wire only reads it.

/** The grace the watchdog grants past the deadline: the fleet19 margin
 * comment's own 420s bound (the end-phase's worst legitimate tail is
 * deadline + stagger 120s + 150s = 270s - the 150s of headroom the design
 * prices ride between the last natural exit and this mark). */
export const EXIT_WATCHDOG_GRACE_MS = 420000

/** Pure: has the run outrun its own margin? Junk-safe - a disabled grace
 * (0/negative) never fires, an unknown clock never fires (the caller's own
 * Date.now() decides with live numbers); the boundary is the margin's own
 * closed edge: overdueMs = 0 (now == deadline + grace exactly) exits - the
 * same open-edge law the .825 last-mile gate prices, mirrored at the hard
 * side (a run AT the margin is a run the margin's headroom already left). */
export function exitWatchdogVerdict (opts = {}) {
  const { nowMs, deadlineMs, graceMs = EXIT_WATCHDOG_GRACE_MS } = opts || {}
  const g = Number(graceMs)
  if (!Number.isFinite(g) || g <= 0) return { exit: false } // the watchdog disabled - the legacy shape
  const n = Number(nowMs)
  const d = Number(deadlineMs)
  if (!Number.isFinite(n) || !Number.isFinite(d)) return { exit: false } // the caller's live clock decides
  const overdueMs = n - d - g
  if (overdueMs >= 0) return { exit: true, overdueMs } // the margin spent - the hard exit owns the process
  return { exit: false, remainingMs: -overdueMs } // the grace still rides
}
