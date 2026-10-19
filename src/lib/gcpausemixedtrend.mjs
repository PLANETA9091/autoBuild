// (v0.976.301) THE PREPARE MIXED PAUSE'S OWN PRICE MASS - the gc band's
// own 'Pause Young (Prepare Mixed)' line the word prices across the
// faces. THE EVIDENCE (the seat the JVM itself carries - the [gc] lane
// the .281/.289/.290/.298/.299/.300 words' own carrier): the JVM's own
// G1 collector prints '[13.700s][info][gc] GC(7) Pause Young (Prepare
// Mixed) (Metadata GC Threshold) 476M->86M(1024M) 47.796ms' (F498's own
// face, run 39303149973) - the Prepare Mixed pause the evacuation's own
// pre-mixed cycle rides, the millisecond cell the old-gen preparation's
// own price - and no book owned the MASS the .289 word leaves: the .281
// gcheapreclaim and the .289 gcpausetrend words price the heap-reclaim
// and the ALL-KINDS merged maxPause cells (their kind lists accept the
// Prepare Mixed line but their scalars never split the kind), the .299
// gcpausenormaltrend word prices the Normal kind's own count cell (its
// grammar refuses the Prepare Mixed body byte-exact), the count of
// Prepare Mixed pauses the faces hold constant (four per face - the
// fire-0043 flat-prairie refusal stands, the count prices nothing), the
// kind's own MAX the .289 merged cell buries rode unread (the REAL
// six-face arc the faces carry: F492's Prepare Mixed pauses peaked at
// 31.401 ms, F493 at 38.346, F494 at 47.508, F495 at 39.874, F496 at
// 53.468, F498 at 47.796 - the REAL windows the arc holds: W1 the swell
// 31.401 -> 38.346 (+6.945) -> 47.508 (+9.162), W2 the swing 38.346 ->
// 47.508 (+9.162) -> 39.874 (-7.634), W3 the swing 47.508 -> 39.874
// (-7.634) -> 53.468 (+13.594), W4 the swing 39.874 -> 53.468 (+13.594)
// -> 47.796 (-5.672) - FOUR REAL WINDOWS FOUR SPEAKS THE WORD BORN
// SPEAKING FOUR DEEP, the old-gen preparation's own price the faces
// trade).
//
// GRAMMAR: the .289 word's own frame byte-exact (the same-lane
// different-cell precedent the .299 birth holds) - the '[N.NNNs]
// [info][gc] ' head, the 'GC(N) ' cell the proven integer no leading
// zero no sign (the .248 house law), the 'Pause Young (Prepare Mixed) '
// body (the kind anchored - the Normal/Concurrent Start/Mixed siblings
// never ride), the cause parens the emitter's own prose (optional, the
// .289 law), the heap trio cell 'NM->NM(NM)' the proven integers, the
// duration cell the proven decimal (the JVM's own %f prints any
// fraction width), the 'ms' tail, LINE END tail boundary; the
// near-miss lanes never ride - the bot-tagged prefix, the Normal kind,
// the Concurrent Start kind, the Mixed kind, the Remark sibling, the
// Cleanup sibling, the float heap, the missing unit, the missing heap
// trio, the altered verb, the leading-zero GC num, the leading
// whitespace, the trailing junk, the CR tail. THE SCALAR THE PEAK
// PRICES: the census takes the MAX Prepare Mixed duration the face's
// pre-mixed pauses held (the .289 maxPause law's own precedent - the
// longest stop-the-world the kind rode, the .299 same-lane
// different-cell birth the seat extends). CENSUS GUARD: zero fleet
// wiring, zero new fleet log lines - the word rides the reader's fold
// through the SECOND carrier lane the server-console faces ride (the
// argv[6..8] tail the .278 contract extends, the .281/.289/.290/.292/
// .293/.294/.295/.296/.297/.298/.299/.300 folds the neighbours hold),
// the fleet's own console never changes.

const MIXED_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Young \(Prepare Mixed\) \([^)]*\)(?: \([^)]+\))? (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d+)ms$/

/**
 * The Prepare Mixed census - the longest stop-the-world the face's
 * pre-mixed pauses rode.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxMixedMs: number}|null} the mass or null (non-array)
 */
export function gcPauseMixedCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = MIXED_RE.exec(l)
    if (!m) continue
    const ms = Number(m[6])
    if (ms > max) max = ms // the peak the kind rode - the .289 maxPause law's own precedent
  }
  return { maxMixedMs: max }
}

/**
 * The fence - every face the proven non-negative number (the float
 * the JVM's own resolution prints - the .289 maxPause law's own
 * precedent: the ms cell never an integer-only lane).
 *
 * @param {{back: {maxMixedMs: number}, prev: {maxMixedMs: number}, cur: {maxMixedMs: number}}} e
 * @returns {boolean}
 */
export function gcPauseMixedConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxMixedMs) && numOk(e.prev.maxMixedMs) && numOk(e.cur.maxMixedMs))
}

/**
 * The Prepare Mixed weather's own two-step shape across three faces.
 *
 * @param {{back: {maxMixedMs: number}, prev: {maxMixedMs: number}, cur: {maxMixedMs: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function gcPauseMixedTrendRow (e) {
  if (!gcPauseMixedConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxMixedMs
  const p = prev.maxMixedMs
  const c = cur.maxMixedMs
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const fmt = (v) => v.toFixed(3) // the JVM's own three-digit resolution the arc prints (the float noise the format buries)
  const first = p - b
  const second = c - p
  const arc = `${fmt(b)} -> ${fmt(p)} (${first >= 0 ? '+' : '-'}${fmt(Math.abs(first))}) -> ${fmt(c)} (${second >= 0 ? '+' : '-'}${fmt(Math.abs(second))})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the kind never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .281 gcheapreclaim and the .289 gcpausetrend words keep the all-kinds merged cells' seats (their scalars never split the kind), the .299 gcpausenormaltrend word keeps the Normal kind's count cell (its grammar refuses the Prepare Mixed body byte-exact), the .298 remark and the .300 cleanup words keep the metadata cycle's own pauses' seats - the Prepare Mixed mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server gc trend (v0.976.301): the prepare mixed pause's own fade ran two steps deep - ${arc} ms - the old-gen preparation's own relief, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server gc trend (v0.976.301): the prepare mixed pause's own swell ran two steps deep - ${arc} ms - the old-gen preparation's own price climbed, ${tail}`
  }
  return `the server gc trend (v0.976.301): the prepare mixed pause's own swing - ${arc} ms - the old-gen preparation's own price traded between the faces, ${tail}`
}
