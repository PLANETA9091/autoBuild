// (v0.976.281) THE JVM GC'S OWN PAUSE MASS - the garbage collector's
// own stop-the-world lines the word prices across the faces.
// THE EVIDENCE (the seat the JVM itself carries - the [gc] lane the
// seathunt's fleet-log scan never rode): the G1 collector's own log
// prints '[2.110s][info][gc] GC(0) Pause Young (Normal) (G1
// Evacuation Pause) 71M->16M(1026M) 6.981ms' (F478's own face, run
// 39174346168) - one print per young-generation pause the JVM takes,
// the server's own heartbeat beneath every event the console carries,
// and no book owned the mass across the faces: the advancement word
// (the .278) prices the server console's own broadcast lane (a
// different emitter - the [Server thread/INFO] frame, never the [gc]
// lane), the deathcause module's chat-exclusion list never mentions
// the gc lines (the JVM's own dialect the death classifier ignores by
// silence), the kickbill module's login churn cast prices the
// join/left the same console carries (a different emitter again), the
// counters family keeps the counters line's own seats (the .261-.277
// band), the bootstrap word (the .279) prices the launch line's own
// assignment mass (the fleet's own stdout, never the JVM's stderr) -
// the pause mass itself rode unread (90 -> 69 -> 83 -> 81 -> 77 -> 76
// -> 77 -> 86 -> 77 -> 87 -> 77 -> 69 -> 79 the thirteen-face arc no
// row read, the kinds hand Normal 86 / Concurrent Start 5 / Mixed 5 /
// Prepare Mixed 5 the run68 face's own breadth). THIS WORD TAKES THE
// SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the JVM's own
// frame byte-exact - the '[Ts][info][gc] GC(n) Pause Young (' head the
// anchor rides whole, the elapsed-seconds cell the proven
// digits-dot-three-digits shape, the GC number the proven integer
// cell, the kind cell the parenthesized words the JVM's own four
// kinds ride ('Normal', 'Concurrent Start', 'Mixed', 'Prepare
// Mixed'), the cause parens the emitter's own optional prose the
// anchor passes whole - the second cause paren the emitter's own
// optional byte carries ('(Evacuation Failure: Pinned)' the F489
// face's own pinned objects the grammar admits, the bootstrap word's
// own scout-tail precedent - the emitter's own optional byte the
// strict grammar rides, never a skin), the heap cells the
// NNNM->NNNM(NNNM) shape the
// three-sided byte holds, the pause cell the digits-dot-three-digits
// ms tail - the fused-tail skin the grammar refuses), the near-miss
// lanes never ride (the Pause Full line - the old collector's own
// dialect the young-pause grammar refuses, the leading-zero GC
// number, the pretty spacing, the bot-tagged prefix, the truncated
// head, the missing ms tail, the float heap, the negative heap, the
// altered order, the concurrent-cycle line - 'GC(n) Concurrent Mark
// Cycle' the young pause never prints), the census law the lane sums
// whole (the .232 sweepCollectedLaneCount precedent the family's
// census rides, the .278 advancement word's own law - one line one
// pause event, the face's own count the sum holds, no
// LAST-PRINT-WINS the JVM never reprints a pause).
//
// THE CELLS: pauses (the pause mass - the face's own sum, the proven
// integer cell, the zero lawful - the gc-quiet face keeps the healthy
// zero), kinds (the breadth hand the side-car holds - the distinct
// pause kinds the same face earned, the names precedent the near-flat
// rider rides), maxPause (the longest stop-the-world the face took,
// the pain peak the ms cell carries, the float the JVM's own
// microsecond resolution prints), maxGcNum (the GC counter's own
// watermark - the highest GC(n) the face saw, the JVM's own
// lifecycle tally). The trend reads the pause mass's arc two steps
// deep (the family's own two-step shape): both steps down = the gc
// weather's own fade (the heap breathes slower), both steps up = the
// swell (the allocation surge), a trade = the swing. A held step
// prices no direction - the honest silence (the family's own held
// law); a three-face zero mass prices nothing - the JVM never paused
// the whole arc (the lawful silence the .255 churn ceiling's own
// lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the JVM already emits
// (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold through the SECOND
// carrier lane the server-console faces ride, the argv[6..8] tail
// the .278 word's own contract extends, the fleet's own console never
// changes).

const GC_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Young \((Normal|Concurrent Start|Mixed|Prepare Mixed)\) \([^)]*\)(?: \([^)]+\))? (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d+)ms$/

/**
 * The census - the family's own strict grammar, the face's own sum
 * read (the JVM's own [gc] pause lines; the census law the lane sums
 * whole - one line one pause, the .232 census law and the .278
 * advancement precedent).
 *
 * @param {string[]|null} [lines] the face's own server console lines
 * @returns {{pauses: number, kinds: number, maxPause: number,
 *   maxGcNum: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no young-pause line is the LAWFUL ZERO -
 *   the gc-quiet face keeps the healthy-looking zeros), null when the
 *   input itself is not an array
 */
export function gcPauseCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 }
  const seen = new Set()
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = GC_RE.exec(l)
    if (!m) continue
    mass.pauses += 1 // the lane sums whole - one line one pause (the .232 census law)
    seen.add(m[3]) // the breadth hand: the distinct pause kinds the face earned
    const pause = Number(m[7])
    if (pause > mass.maxPause) mass.maxPause = pause // the pain peak the ms cell carries
    const num = Number(m[2])
    if (num > mass.maxGcNum) mass.maxGcNum = num // the counter's own watermark
  }
  mass.kinds = seen.size
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold the proven
 * integer cells (pauses, kinds, maxGcNum - the zero lawful) and the
 * non-negative maxPause number (the float the JVM's own resolution
 * prints). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {pauses,kinds,maxPause,maxGcNum}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function gcPauseConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const intOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return intOk(s.pauses) && intOk(s.kinds) &&
      typeof s.maxPause === 'number' && s.maxPause >= 0 &&
      intOk(s.maxGcNum)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the pause mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the JVM never paused -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {pauses,kinds,maxPause,maxGcNum}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function gcPauseTrendRow (e) {
  if (!gcPauseConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.pauses
  const p = prev.pauses
  const c = cur.pauses
  // the JVM never paused across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const fmt = (v) => v.toFixed(3)
  const pauseArc = `the longest stop-the-world rode ${fmt(prev.maxPause)}ms -> ${fmt(cur.maxPause)}ms`
  const kindArc = `the kinds rode ${back.kinds} -> ${prev.kinds} -> ${cur.kinds}`
  const tail = "(the .278 advancement word keeps the server console's own broadcast lane (a different emitter - the [Server thread/INFO] frame this [gc] lane never shares), the kickbill module keeps the login churn cast (the join/left the same console carries, a different emitter again), the deathcause module's chat-exclusion list keeps the gc lines its own silence, the bootstrap word keeps the launch line's own seat (the .279 word - the fleet's own stdout), the counterstrend family keeps the counters line's own seats (the .261-.277 band) - the pause mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the gc pauses trend (v0.976.281): the gc weather's own fade ran two steps deep - ${arc} - the pause mass's own fade, ${pauseArc}, ${kindArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the gc pauses trend (v0.976.281): the gc weather's own swell ran two steps deep - ${arc} - the pause mass's own swell, ${pauseArc}, ${kindArc} ${tail}`
  }
  return `the gc pauses trend (v0.976.281): the gc weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${pauseArc}, ${kindArc} ${tail}`
}
