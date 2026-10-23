// (v0.976.411) THE FLEETLANE INSTRUMENT - the audit lane's own hygiene
// pricer, the fleetledger sibling (the .410 decode instrument priced the
// verdict; the two reads this word prices are the ones the fire still
// does BY HAND every hour):
//
//   1. THE LANE-WAIT READ - the dispatch gate's third condition. The
//      fire-1744 ledger names it in the books: 'THE LANE NOT EMPTY - the
//      parallel agent's F594 workflow_dispatch in flight - THE LANE WAIT
//      the three-condition law keeps' (no second dispatch while a
//      parallel workflow_dispatch rides - two fleet legs on one runner
//      share the storm's own OOM face). The read rode the agent's eyes;
//      this word prices the arithmetic so the gate speaks the boolean.
//
//   2. THE ZOMBIE READ - the task's own hygiene law ('job вечно
//      in_progress, логи BlobNotFound - отменять'). A fleet leg's
//      observed wall time tops out near the half hour; a run still
//      in flight an hour later holds a runner hostage with logs the
//      artifact store can never serve. The cancel lever needs the ids -
//      this word prices the fence so the lever fires on arithmetic,
//      not on vibes.
//
// THE LAWS the read keeps (the fleetledger's own, mirrored):
//   the pure read - the runs array is the caller's own, mutated never;
//   the junk battery - a non-array input is null (the honest read the
//     data cannot carry, never a guessed verdict); junk entries (the
//     holes, the nulls, the shapeless) are skipped, never guessed;
//   the in-flight set - only the KNOWN non-terminal statuses count
//     (queued / in_progress / pending); an unknown status string is
//     transparent - never counted, never guessed (the terminal filter's
//     own mirror: the verdict counts only conclusions, the lane counts
//     only statuses it can name);
//   the lane-wait polarity - only the workflow_dispatch event closes
//     the lane. A push gate in flight is the fire's own shadow (the
//     word's landing leg rides the same poll); the dispatch gate's law
//     prices the FLEET riders only;
//   the zombie timestamp - a run with no created_at, or a timestamp
//     the Date parser refuses, carries no age and therefore no verdict:
//     transparent, skipped (the leanness law - the read speaks only
//     what the data carries);
//   the order law - the input order is the caller's own contract
//     (newest-first, the CI API's own order); the instrument never
//     re-sorts.
// Pure arithmetic - no CI call, no bot read, no mutation; the fire
// feeds it the runs the API already returned.

// The statuses the lane can name as in-flight (the GitHub runs API's
// own non-terminal set plus the legacy 'pending').
export const FLEETLANE_INFLIGHT_STATUSES = ['queued', 'in_progress', 'pending']

// The zombie fence: a healthy fleet leg (smoke, big fleet, the storm's
// own rate-kill) ends inside the half hour; the observed long tail (the
// queue stall class, faces 42..44) rides under the hour. Double it and
// round - a run two hours in flight is dead weight holding a runner
// hostage. The caller may pass fenceMs to price a tighter fence.
export const FLEETLANE_ZOMBIE_FENCE_MS = 2 * 60 * 60 * 1000

// The one-run age read both verdicts ride. Returns milliseconds since
// created_at, or null when the data cannot carry an age (junk run, junk
// or missing created_at, an unparseable timestamp). Junk nowMs is
// Date.now() (the caller who brings no clock brings the wall's own).
export function fleetAgeMs (run, nowMs) {
  if (!run || typeof run !== 'object') return null
  const raw = run.created_at
  if (typeof raw !== 'string' || raw === '') return null
  const born = Date.parse(raw)
  if (!Number.isFinite(born)) return null
  const now = Number.isFinite(nowMs) ? nowMs : Date.now()
  return Math.max(0, now - born)
}

// The lane-wait read: is a fleet dispatch already riding the lane?
//   busy   - true when at least one workflow_dispatch run sits in flight
//   riders - the rides the verdict counts ([{ id, headSha, status }])
// Junk input prices null (the fleetledger law); the empty lane prices
// { busy: false, riders: [] } - an open gate, not a verdict the data
// cannot carry.
export function fleetLaneBusy (runs) {
  if (!Array.isArray(runs)) return null
  const riders = []
  for (const r of runs) {
    if (!r || typeof r !== 'object') continue
    if (r.event !== 'workflow_dispatch') continue
    if (!FLEETLANE_INFLIGHT_STATUSES.includes(r.status)) continue
    riders.push({ id: r.id, headSha: r.head_sha, status: r.status })
  }
  return { busy: riders.length > 0, riders }
}

// The zombie read: which in-flight runs crossed the fence?
//   fenceMs  - the fence the verdict rode (the caller's or the default)
//   zombies  - the candidates ([{ id, headSha, status, ageMs, createdAt }])
// Junk input prices null; the fence must be a finite positive number or
// the default stands. The in-flight statuses gate first (a completed run
// is never a zombie no matter how ancient), then the age read - a run
// with no honest timestamp is transparent, never a candidate.
export function fleetZombies (runs, opts = {}) {
  if (!Array.isArray(runs)) return null
  const o = opts && typeof opts === 'object' ? opts : {}
  const fence = Number.isFinite(o.fenceMs) && o.fenceMs > 0
    ? o.fenceMs
    : FLEETLANE_ZOMBIE_FENCE_MS
  const now = Number.isFinite(o.nowMs) ? o.nowMs : Date.now()
  const zombies = []
  for (const r of runs) {
    if (!r || typeof r !== 'object') continue
    if (!FLEETLANE_INFLIGHT_STATUSES.includes(r.status)) continue
    const age = fleetAgeMs(r, now)
    if (age == null || age < fence) continue
    zombies.push({ id: r.id, headSha: r.head_sha, status: r.status, ageMs: age, createdAt: r.created_at })
  }
  return { fenceMs: fence, zombies }
}
