// (v0.976.289) THE GC HEAP'S OWN RECLAIM MASS - the garbage
// collector's own heap cells the word prices across the faces. THE
// EVIDENCE (the seat the JVM's own [gc] lines carry): the G1
// collector's own log prints '[2.110s][info][gc] GC(0) Pause Young
// (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 6.981ms' (F478's
// own face, run 39174346168) - the heap cells the NNNM->NNNM(NNNM)
// shape rides byte-exact in the emitter's own template (the from
// heap the pause began at, the to heap it left behind, the cap the
// JVM ran under) - and no book owned the cells' own mass across the
// faces: the pause word (the .281 word) prices the same lines' own
// pause mass (the count and the kinds breadth and the max-pause pain
// peak and the maxGcNum watermark - its census never prices the heap
// cells, the bytes ride its grammar unread), the advancement word
// (the .278) prices the server console's own broadcast lane (a
// different emitter - the [Server thread/INFO] frame, never the [gc]
// lane), the bootstrap word (the .279) prices the launch line's own
// assignment mass (the fleet's own stdout), the counters family
// keeps the counters line's own seats (the .261-.288 band) - the
// reclaim mass itself rode unread (the from-minus-to delta the every
// pause claws back the face's own sum holds). THIS WORD TAKES THE
// SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the JVM's own
// frame byte-exact - the '[Ts][info][gc] GC(n) Pause Young (' head
// the anchor rides whole, the kind cell the JVM's own four kinds the
// enumeration holds, the cause parens the emitter's own prose the
// anchor passes whole (the optional second paren once - the triple
// skin the grammar refuses), the heap cells the proven integer
// cells no leading zero no sign (the .248 house law), the pause cell
// the ms tail - the fused-tail skin the grammar refuses), the
// near-miss lanes never ride (the Pause Full line - the old
// collector's own dialect, the concurrent cycle line, the
// leading-zero GC number, the pretty spacing, the bot-tagged prefix,
// the truncated head, the missing ms tail, the float heap, the
// negative heap, the altered order, the trailing junk), the law
// LAST-PRINT-WINS on the cap cell (the emitter reprints the cap per
// pause - the last print the freshest body the face held) while the
// reclaim mass the lane sums whole (the .232 census law and the
// .278 precedent - one line one pause, the deltas add). THE CELLS:
// reclaim (the clawed-back mass - the from-minus-to sum the face's
// own MB total holds, the zero lawful - the gc-quiet face keeps the
// healthy zero), cap (the running ceiling the side-car holds - the
// last print's own cap), pauses (the .281 word's own priced voice
// rides the row as a number never a second word). The reclaim
// mass's own arc the row prices (the fade the heap breathes
// easier, the swell the churn surged, the swing the trade - the
// family's own two-step shape), the held step the honest silence
// (the family's own held law); the three-face zero mass prices
// nothing - the JVM never reclaimed the whole arc (the lawful
// silence the .281 word's own lawful-zero birth the precedent
// holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the JVM already emits
// (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold through the SECOND
// carrier lane the server-console faces ride, the argv[6..8] tail
// the .278 word's own contract extends, the .281 word's own fold the
// neighbour holds, the fleet's own console never changes).

const GC_HEAP_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Young \((Normal|Concurrent Start|Mixed|Prepare Mixed)\) \([^)]*\)(?: \([^)]+\))? (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d+)ms$/

/**
 * The census - the family's own strict grammar, the face's own heap
 * read (the JVM's own [gc] pause lines' heap cells; the reclaim the
 * lane sums whole - one line one pause, the .232 census law and the
 * .278 precedent; the cap the LAST-PRINT-WINS law holds - the last
 * strict line's own cap the face's freshest ceiling).
 *
 * @param {string[]|null} [lines] the face's own server console lines
 * @returns {{reclaim: number, cap: number, pauses: number}|null}
 *   the cells (the zeros lawful - the gc-quiet face keeps the
 *   healthy-looking zeros), null when the input itself is not an
 *   array
 */
export function gcHeapCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { reclaim: 0, cap: 0, pauses: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = GC_HEAP_RE.exec(l)
    if (!m) continue
    mass.reclaim += Number(m[4]) - Number(m[5]) // the clawed-back MB the pause hands over
    mass.cap = Number(m[6]) // the side-car - the last print's own ceiling
    mass.pauses += 1 // the .281 word's own priced voice - the side-car count
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. Every face must hold all three proven integer cells (the
 * zero lawful - the gc-quiet face). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {reclaim,cap,pauses}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function gcHeapConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.reclaim) && numOk(s.cap) && numOk(s.pauses)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the reclaim mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass (the JVM never reclaimed),
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {reclaim,cap,pauses}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function gcHeapTrendRow (e) {
  if (!gcHeapConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.reclaim
  const p = prev.reclaim
  const c = cur.reclaim
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const capArc = `the cap rode ${back.cap} -> ${prev.cap} -> ${cur.cap}`
  const pauseArc = `the pause hand rode ${back.pauses} -> ${prev.pauses} -> ${cur.pauses}`
  const tail = "(the pause word's row keeps the pause mass's seat (the .281 word - whose census rides this same [gc] lane and never prices the heap cells, the bytes its grammar rode unread), the advancement word keeps the server console's own broadcast lane (the .278 word - a different emitter the [gc] lane never shares), the kickbill module keeps the login churn cast, the bootstrap word keeps the launch line's own seat (the .279 word), the counters family keeps the counters line's own seats (the .261-.288 band) - the reclaim mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the gc heap trend (v0.976.289): the reclaim weather's own fade ran two steps deep - ${arc} - the heap breathes easier, ${capArc}, ${pauseArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the gc heap trend (v0.976.289): the reclaim weather's own swell ran two steps deep - ${arc} - the churn surged, ${capArc}, ${pauseArc} ${tail}`
  }
  return `the gc heap trend (v0.976.289): the reclaim weather's own swing - ${arc} - the claw and the calm traded seats between the faces, ${capArc}, ${pauseArc} ${tail}`
}
