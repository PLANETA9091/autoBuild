// (v0.976.302) THE NORMAL PAUSE'S OWN PEAK MASS - the gc band's own
// 'Pause Young (Normal)' line's duration cell the word prices across
// the faces. THE EVIDENCE (the seat the JVM itself carries - the [gc]
// lane the .281/.289/.290/.298/.299/.300/.301 words' own carrier): the
// JVM's own G1 collector prints '[32.053s][info][gc] GC(13) Pause
// Young (Normal) (G1 Evacuation Pause) 702M->154M(1024M) 65.071ms'
// (F498's own face, run 39303149973) - the Normal evacuation's own
// peak price the millisecond cell carries - and no book owned the MASS
// the .289 merged cell buries: the .281 gcheapreclaim and the .289
// gcpausetrend words price the heap-reclaim and the ALL-KINDS merged
// maxPause cells (their kind lists accept the Normal line but their
// scalars never split the kind), the .299 gcpausenormaltrend word
// prices the Normal kind's own COUNT cell (its census returns {normal,
// pinned} - the counts never a duration), the kind's own MAX rode
// unread (the REAL six-face arc the faces carry: F492's Normal pauses
// peaked at 32.390 ms, F493 at 45.357, F494 at 40.283, F495 at 30.474,
// F496 at 53.098, F498 at 65.071 - the REAL windows the arc holds: W1
// the swing 32.390 -> 45.357 (+12.967) -> 40.283 (-5.074), W2 the fade
// 45.357 -> 40.283 (-5.074) -> 30.474 (-9.809), W3 the swing 40.283 ->
// 30.474 (-9.809) -> 53.098 (+22.624), W4 the swell 30.474 -> 53.098
// (+22.624) -> 65.071 (+11.973) - FOUR REAL WINDOWS FOUR SPEAKS THE
// WORD BORN SPEAKING FOUR DEEP, the evacuation's own peak the faces
// trade).
//
// GRAMMAR: the .299 word's own frame byte-exact (the same-lane
// different-cell precedent that birth holds) - the '[N.NNNs][info][gc]
// ' head, the 'GC(N) ' cell the proven integer no leading zero no sign
// (the .248 house law), the 'Pause Young (Normal) ' body (the kind
// anchored - the Prepare Mixed/Concurrent Start/Mixed siblings never
// ride), the cause parens the emitter's own prose (free, the .289 law)
// plus the optional Pinned clause the .299 pinned skin rides (the
// census counts both skins - the max prices both), the heap trio cell
// 'NM->NM(NM)' the proven integers, the duration cell the proven
// decimal three-digit resolution the JVM prints, the 'ms' tail, LINE
// END tail boundary; the near-miss lanes never ride - the bot-tagged
// prefix, the Prepare Mixed kind, the Concurrent Start kind, the Mixed
// kind, the Remark sibling, the Cleanup sibling, the float heap, the
// missing unit, the missing cause parens, the leading-zero GC num, the
// leading whitespace, the trailing junk, the CR tail. THE SCALAR THE
// PEAK PRICES: the census takes the MAX Normal duration the face's
// Normal pauses held (the .289 maxPause law's own precedent - the
// longest stop-the-world the kind rode, the .301 same-lane
// different-cell birth the seat extends). CENSUS GUARD: zero fleet
// wiring, zero new fleet log lines - the word rides the reader's fold
// through the SECOND carrier lane the server-console faces ride (the
// argv[6..8] tail the .278 contract extends, the .281/.289/.290/.292/
// .293/.294/.295/.296/.297/.298/.299/.300/.301 folds the neighbours
// hold), the fleet's own console never changes.

const NORMAL_PEAK_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Young \(Normal\) \([^)]*\)(?: \([^)]+\))? (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d{3})ms$/

/**
 * The Normal peak census - the longest stop-the-world the face's
 * Normal pauses rode (both skins the .299 census counts).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxNormalMs: number}|null} the mass or null (non-array)
 */
export function gcNormalPeakCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = NORMAL_PEAK_RE.exec(l)
    if (!m) continue
    const ms = Number(m[6])
    if (ms > max) max = ms // the peak the kind rode - the .289 maxPause law's own precedent
  }
  return { maxNormalMs: max }
}

/**
 * The fence - every face the proven non-negative number (the float
 * the JVM's own resolution prints - the .289 maxPause law's own
 * precedent: the ms cell never an integer-only lane).
 *
 * @param {{back: {maxNormalMs: number}, prev: {maxNormalMs: number}, cur: {maxNormalMs: number}}} e
 * @returns {boolean}
 */
export function gcNormalPeakConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxNormalMs) && numOk(e.prev.maxNormalMs) && numOk(e.cur.maxNormalMs))
}

/**
 * The Normal peak weather's own two-step shape across three faces.
 *
 * @param {{back: {maxNormalMs: number}, prev: {maxNormalMs: number}, cur: {maxNormalMs: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function gcNormalPeakTrendRow (e) {
  if (!gcNormalPeakConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxNormalMs
  const p = prev.maxNormalMs
  const c = cur.maxNormalMs
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const fmt = (v) => v.toFixed(3) // the JVM's own three-digit resolution the arc prints (the float noise the format buries)
  const first = p - b
  const second = c - p
  const arc = `${fmt(b)} -> ${fmt(p)} (${first >= 0 ? '+' : '-'}${fmt(Math.abs(first))}) -> ${fmt(c)} (${second >= 0 ? '+' : '-'}${fmt(Math.abs(second))})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the peak never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .281 gcheapreclaim and the .289 gcpausetrend words keep the all-kinds merged cells' seats (their scalars never split the kind), the .299 gcpausenormaltrend word keeps the Normal kind's count cell (its census returns the counts never a duration), the .301 gcpausemixedtrend word keeps the Prepare Mixed kind's max seat (its grammar refuses the Normal body byte-exact), the .298 remark and the .300 cleanup words keep the metadata cycle's own pauses' seats - the Normal peak's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server gc trend (v0.976.302): the normal pause's own peak fade ran two steps deep - ${arc} ms - the evacuation's own relief, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server gc trend (v0.976.302): the normal pause's own peak swell ran two steps deep - ${arc} ms - the evacuation's own price climbed, ${tail}`
  }
  return `the server gc trend (v0.976.302): the normal pause's own peak swing - ${arc} ms - the evacuation's own price traded between the faces, ${tail}`
}
