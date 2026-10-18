// (v0.976.253) THE DRAIN FENCE - the parked runner's own bound, the green
// exit the F476 face priced. THE EVIDENCE (run 39166656131, the .251 tree's
// own dispatch, the fire-0430 face): the face was the fleet's own best shape
// - alive 19/19, banked 1382, mined 2383 (3.97 b/s), storm CALM, the report
// block whole - and the job rode RED: F5's runner parked past the deadline
// and never came home (the settle telemetry's own witness - 18/19 settled,
// 1 parked (F5 414s) at the last print, the pocket frozen at 94u from the
// 23rd second past the deadline to the watchdog's own mark), the exit
// watchdog (the .233 backstop) fired at the margin and hard-exited 12 - the
// workflow's pipefail read the 12 and the job FAILED on the fleet's own
// best face. The class the .233 doctrine named ('ONE in-flight await that
// never settles - a pathfinder promise, a chest open, a reconnect
// hand-off') is real and recurring (F469, F476); the watchdog was the
// honest ACCOUNT of the hang, never its CURE. THE CURE: a per-runner fence
// at the deadline plus THIS margin - 360s, inside the watchdog's own 420s
// grace with 60s of headroom, and 90s past the end-phase's worst legitimate
// natural end (the fleet19 margin comment's own 270s bound) - so a runner
// the drain never sees still leaves the drain BOUNDED: the fence's own
// race resolves the parked promise's seat at the mark, the natural end
// proceeds (the SAME printFinalReport the clean end rides, the report's
// own reason cell naming the fenced runners), and the process exits 0 -
// the face's evidence lands green. The watchdog keeps its seat unmet: the
// fence is a promise-side bound, the watchdog's timer owns the class where
// the EVENT LOOP itself starves (the promise race cannot fire where the
// loop cannot serve timers) - a run the fence cannot settle still rides
// the watchdog's 12 and the honest red. THE FENCE'S OWN ACCOUNT: the fence
// past its mark prints '[fleet] drain fence: N runner(s) fenced at 360s
// past the deadline (F5) - the drain bounded, the report and the natural
// exit own the end' (one print per face, the fenced runners named), and
// the report's own reason cell reads 'deadline end - the drain fenced (F5
// parked past the 360s margin)' - the facefate seat reads 'result' either
// way, the fenced face's own class the reason cell names forever. A clean
// drain (every runner home before the mark) prints NOTHING and keeps the
// byte-identical 'normal end - deadline Ns reached' the family knows - the
// fence is invisible on the healthy shape.
//
// THE PURE HALF: the verdict arithmetic and both emitters live here (one
// parser, never a second - the census law), the fleet wire only reads them.
// THE READER HALF: the census the analysis side folds over the faces (the
// .246 word's own wiring precedent - the emitter and the pricing seat ride
// the same commit, the word prices the class from the first fenced face on).

/** The margin the fence grants past the deadline: 90s past the end-phase's
 * worst legitimate natural end (the fleet19 margin comment's own 270s bound
 * - deadline + stagger 120s + 150s), 60s inside the watchdog's own 420s
 * grace - the fence fires first, the watchdog keeps the true-hang class. */
export const DRAIN_FENCE_MARGIN_MS = 360000

/** Pure: when does the fence fire? Junk-safe - a disabled margin (0/negative)
 * never fires, an unknown clock never fires (the caller's own Date.now()
 * decides with live numbers); the boundary is the mark's own closed edge:
 * remainingMs = 0 (now == deadline + margin exactly) fires - the same
 * closed-edge law the exit watchdog's verdict prices, mirrored at the
 * fence's own mark. */
export function drainFenceVerdict (opts = {}) {
  const { nowMs, deadlineMs, marginMs = DRAIN_FENCE_MARGIN_MS } = opts || {}
  const m = Number(marginMs)
  if (!Number.isFinite(m) || m <= 0) return { fire: false } // the fence disabled - the legacy shape
  const n = Number(nowMs)
  const d = Number(deadlineMs)
  if (!Number.isFinite(n) || !Number.isFinite(d)) return { fire: false } // the caller's live clock decides
  const remainingMs = d + m - n
  if (remainingMs <= 0) return { fire: true, remainingMs: 0 } // the mark spent - the fence owns the promise seat
  return { fire: false, remainingMs } // the mark still rides
}

/** The fence's own console line - the emitter the census parses. The
 * fenced runners named (the settle telemetry's own witness already spoke
 * them per print; the fence line is the mark's own closing word). One
 * print per face; a clean drain never calls. Null on junk (the emitter
 * never invents a fence). */
export function drainFenceLine (opts = {}) {
  const { labels, marginSec = Math.round(DRAIN_FENCE_MARGIN_MS / 1000) } = opts || {}
  if (!Array.isArray(labels) || labels.length === 0) return null
  const names = labels.map(l => String(l)).filter(s => s.length > 0)
  if (names.length === 0) return null
  const m = Number(marginSec)
  if (!Number.isFinite(m) || m <= 0) return null
  return `[fleet] drain fence: ${names.length} runner(s) fenced at ${m}s past the deadline (${names.join(', ')}) - the drain bounded, the report and the natural exit own the end`
}

/** The report's own reason cell for the fenced end - the facefate seat
 * reads 'result' either way, the fenced class the cell names forever.
 * Null on junk (the reason never invents a fence). */
export function drainFenceReason (opts = {}) {
  const { labels, marginSec = Math.round(DRAIN_FENCE_MARGIN_MS / 1000) } = opts || {}
  if (!Array.isArray(labels) || labels.length === 0) return null
  const names = labels.map(l => String(l)).filter(s => s.length > 0)
  if (names.length === 0) return null
  const m = Number(marginSec)
  if (!Number.isFinite(m) || m <= 0) return null
  return `deadline end - the drain fenced (${names.join(', ')} parked past the ${m}s margin)`
}

// ---- the reader half: the census the analysis side folds ----

const DRAIN_FENCE_RE = /^\[fleet\] drain fence: (\d+) runner\(s\) fenced at (\d+)s past the deadline \(([^)]*)\) - the drain bounded, the report and the natural exit own the end$/

/**
 * The census - the family's own strict grammar, the face's own fence
 * verdict (LAST-PRINT-WINS - the fence speaks once per face, the last
 * print the face's own closing word).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{fenced: number, marginSec: number, labels: string}|null}
 *   the fence snapshot, or null when the lines themselves are junk (a
 *   face whose lines hold no fence print is the LAWFUL ZERO - the drain
 *   ran clean or the tree predated the fence, the zeros speak)
 */
export function drainFenceCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { fenced: 0, marginSec: 0, labels: '' }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = DRAIN_FENCE_RE.exec(l)
    if (!m) continue
    const fenced = Number(m[1])
    const marginSec = Number(m[2])
    // the emitter's own silence law the census holds: the fence never
    // prints a zero-fence line (the clean drain keeps its silence) - the
    // zero-fenced skin is a near-miss the grammar refuses
    if (fenced < 1) continue
    if (marginSec < 1) continue
    // the emitter's own arithmetic the census holds: the parenthesised
    // list names exactly the fenced count the cell holds - a forged
    // meter never rides
    const names = m[3].split(',').map(s => s.trim()).filter(s => s.length > 0)
    if (names.length !== fenced) continue
    mass.fenced = fenced
    mass.marginSec = marginSec
    mass.labels = m[3]
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. Every face must hold the proven integer cells (the zero lawful
 * - the drain ran clean). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {fenced,marginSec,labels}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function drainFenceConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.fenced) && s.fenced >= 0 &&
      Number.isInteger(s.marginSec) && s.marginSec >= 0 &&
      typeof s.labels === 'string'
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the fenced mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face fenced mass is zero (the drains ran clean the whole arc -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function drainFenceRow (e) {
  if (!drainFenceConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.fenced
  const p = prev.fenced
  const c = cur.fenced
  // the drains ran clean across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const marginArc = `the mark rode ${back.marginSec}s -> ${prev.marginSec}s -> ${cur.marginSec}s`
  const tail = "(the exit watchdog's own hard-exit backstop keeps the .233 seat, the settle telemetry's own per-runner read keeps the .246 seat, the facefate seat prices the report's own reason cell - the drain fence's own row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the drain fence trend (v0.976.253): the fenced mass's own fade ran two steps deep - ${arc} - the parked class's own heal, ${marginArc}, the cur face's own fenced list: ${cur.labels || 'none'} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the drain fence trend (v0.976.253): the fenced mass's own swell ran two steps deep - ${arc} - the never-drain front's own grip on the promise seat, ${marginArc}, the cur face's own fenced list: ${cur.labels || 'none'} ${tail}`
  }
  return `the drain fence trend (v0.976.253): the fenced mass's own swing - ${arc} - the heal and the swell traded seats between the faces, ${marginArc}, the cur face's own fenced list: ${cur.labels || 'none'} ${tail}`
}
