// (v0.976.290) THE GC CONCURRENT CYCLE'S OWN BACKGROUND MASS - the
// garbage collector's own background lines the word prices across the
// faces.
// THE EVIDENCE (the seat the JVM itself carries - the [gc] lane's own
// concurrent cycle the .289 heap word's own grammar refused): the G1
// collector's own log prints the pair '[3.176s][info][gc] GC(2)
// Concurrent Mark Cycle' (the cycle begins) and '[3.200s][info][gc]
// GC(2) Concurrent Mark Cycle 24.305ms' (the cycle completes, the ms
// tail the mass rides) (F478's own face, run 39174346168) - one pair
// per background mark cycle the JVM takes, the collector's own
// off-stop-the-world work the mutator never feels, and no book owned
// the mass across the faces: the pause word (the .281) prices the
// stop-the-world lane's own count and breadth and pain peak and
// watermark (its grammar refuses the concurrent cycle line by name),
// the heap word (the .289) prices the same pause lines' own
// from->to(cap) reclaim cells (its grammar refuses the concurrent
// cycle line by name too - 'the concurrent cycle line the other lanes
// the grammar refuses' the .289 word's own law), the advancement word
// (the .278) prices the server console's own broadcast lane (a
// different emitter - the [Server thread/INFO] frame), the bootstrap
// word (the .279) prices the launch line's own assignment mass (the
// fleet's own stdout), the counters family keeps the counters line's
// own seats (the .261-.288 band) - the background mass itself rode
// unread (278.052 -> 286.618 -> 299.443 -> 383.957 -> 545.355 ->
// 480.71 -> 624.111 -> 855.236 -> 659.255 -> 607.517 -> 737.98 ->
// 605.636 -> 665.843 -> 484.958 -> 341.536 -> 546.388 -> 580.477 the
// seventeen-face arc no row read, the cycle-count hand 4 -> 4 -> 4 ->
// 4 -> 4 -> 4 -> 4 -> 4 -> 4 -> 4 -> 4 -> 5 -> 4 -> 4 -> 4 -> 4 -> 4
// the F489 face's own five-cycle face the lone beat rode). THIS WORD
// TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the JVM's own
// frame byte-exact - the '[Ts][info][gc] GC(n) Concurrent Mark Cycle'
// head the anchor rides whole, the elapsed-seconds cell the proven
// digits-dot-three-digits shape, the GC number the proven integer
// cell no leading zero no sign (the .248 house law), the completed
// cycle's ms tail the digits-dot-digits shape the JVM's own
// microsecond resolution prints - the fused-tail skin the grammar
// refuses), the near-miss lanes never ride (the bare start line - the
// begun-but-uncompleted cycle the completed mass never prices - the
// census counts the completion, the tail the mass carries, the
// double-count skin the start line the grammar refuses to price), the
// Pause Young line (the .281 lane), the Pause Full line (the old
// collector's own dialect), the Concurrent Mark Sweep line (the CMS
// dialect), the leading-zero GC number, the pretty spacing, the
// bot-tagged prefix, the truncated head, the missing ms tail, the
// integer ms tail, the negative ms, the altered order, the trailing
// junk; the census law the face's own peak holds (the .281 maxPause
// precedent - the pain peak the ms cell carries, the max never sums,
// the float the JVM's own resolution prints) while the completed
// cycle count the lane sums whole (the .232 census law and the .278
// precedent - one pair one completed cycle, no LAST-PRINT-WINS the
// JVM never reprints a completion).
//
// THE CELLS: peak (the background mass - the longest completed mark
// cycle the face rode, the pain peak the ms tail carries, the zero
// lawful - the concurrent-quiet face keeps the healthy zero), cycles
// (the count hand the side-car holds - the completed mark cycles the
// same face earned, the .281 count precedent the near-flat rider
// rides - a completed cycle carries its duration, a peak without a
// completed cycle the fence refuses). The trend reads the peak's arc
// two steps deep (the family's own two-step shape): both steps down =
// the concurrent weather's own fade (the background churn calmed),
// both steps up = the swell (the old-gen marking surged), a trade =
// the swing. A held step prices no direction - the honest silence
// (the family's own held law); a three-face zero mass prices nothing
// - the JVM never ran a background cycle the whole arc (the lawful
// silence the .255 churn ceiling's own lawful-zero birth the
// precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the JVM already emits
// (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold through the SECOND
// carrier lane the server-console faces ride, the argv[6..8] tail
// the .278 word's own contract extends, the fleet's own console never
// changes).

const GCC_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Concurrent Mark Cycle (\d+\.\d+)ms$/

/**
 * The census - the family's own strict grammar, the face's own peak
 * read (the JVM's own [gc] concurrent cycle lines; the peak the
 * .281 maxPause precedent holds, the count the lane sums whole - one
 * pair one completed cycle, the .232 census law).
 *
 * @param {string[]|null} [lines] the face's own server console lines
 * @returns {{peak: number, cycles: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no completed cycle line is the LAWFUL
 *   ZERO - the concurrent-quiet face keeps the healthy-looking zeros),
 *   null when the input itself is not an array
 */
export function gcConcurrentCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { peak: 0, cycles: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = GCC_RE.exec(l)
    if (!m) continue
    mass.cycles += 1 // the count hand sums whole - one pair one completed cycle (the .232 census law)
    const ms = Number(m[3])
    if (ms > mass.peak) mass.peak = ms // the pain peak the ms tail carries (the .281 maxPause precedent)
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold the proven
 * integer cycles cell (the zero lawful) and the non-negative peak
 * number (the float the JVM's own resolution prints), and the pair
 * must agree - a completed cycle carries its duration, so the zero
 * cycles face holds the zero peak and the positive peak rides at
 * least one completed cycle. Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {peak, cycles}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function gcConcurrentConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const peakOk = typeof s.peak === 'number' && s.peak >= 0
    const cycOk = Number.isInteger(s.cycles) && s.cycles >= 0
    return peakOk && cycOk && (s.cycles === 0) === (s.peak === 0)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the peak's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the JVM never ran a
 * background cycle - nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {peak, cycles}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function gcConcurrentTrendRow (e) {
  if (!gcConcurrentConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.peak
  const p = prev.peak
  const c = cur.peak
  // the JVM never ran a background cycle across the three faces - the
  // lawful silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const fmt = (v) => `${v.toFixed(3)}ms`
  const dlt = (d) => `(${d >= 0 ? '+' : ''}${d.toFixed(3)})`
  const arc = `${fmt(b)} -> ${fmt(p)} ${dlt(p - b)} -> ${fmt(c)} ${dlt(c - p)}`
  const first = p - b
  const second = c - p
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const peakArc = `the longest mark cycle rode ${fmt(p)} -> ${fmt(c)}`
  const cycleArc = `the cycles rode ${back.cycles} -> ${prev.cycles} -> ${cur.cycles}`
  const tail = "(the .281 pause word keeps the stop-the-world lane's own seat (the [gc] pause lines this concurrent lane never shares), the .289 heap word keeps the same pause lines' own reclaim mass (a different cell the pause lines ride), the .278 advancement word keeps the server console's own broadcast lane (a different emitter), the kickbill module keeps the login churn cast (the join/left the same console carries, a different emitter again), the bootstrap word keeps the launch line's own seat (the .279 word - the fleet's own stdout), the counterstrend family keeps the counters line's own seats (the .261-.288 band) - the concurrent mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the gc concurrent trend (v0.976.290): the concurrent weather's own fade ran two steps deep - ${arc} - the concurrent mass's own fade, ${peakArc}, ${cycleArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the gc concurrent trend (v0.976.290): the concurrent weather's own swell ran two steps deep - ${arc} - the concurrent mass's own swell, ${peakArc}, ${cycleArc} ${tail}`
  }
  return `the gc concurrent trend (v0.976.290): the concurrent weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${peakArc}, ${cycleArc} ${tail}`
}
