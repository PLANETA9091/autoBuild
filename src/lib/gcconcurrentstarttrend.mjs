// (v0.976.303) THE CONCURRENT START'S OWN PEAK MASS - the gc band's own
// 'Pause Young (Concurrent Start)' line's duration cell the word prices
// across the faces. THE EVIDENCE (the seat the JVM itself carries - the
// [gc] lane the .281/.289/.290/.298/.299/.300/.301/.302 words' own
// carrier): the JVM's own G1 collector prints '[48.648s][info][gc]
// GC(17) Pause Young (Concurrent Start) (CodeCache GC Threshold)
// (Evacuation Failure: Pinned) 730M->196M(1024M) 25.909ms' (F498's own
// face, run 39303149973) - the concurrent start's own peak price the
// millisecond cell carries - and no book owned the MASS the .289 merged
// cell buries: the .281 gcpausetrend word prices the ALL-KINDS merged
// maxPause cell (its kind list accepts the Concurrent Start line but
// its scalar never splits the kind), the .290 gcconcurrenttrend word
// prices the Concurrent Mark Cycle lane (the cycle's own stop - a
// different emitter), the .302 gcnormalpeaktrend word prices the Normal
// kind's own max (its grammar refuses the Concurrent Start body
// byte-exact), the start kind's own MAX rode unread (the REAL five-face
// arc the faces carry: F496's starts peaked at 22.336 ms, F497 at
// 21.960, F498 at 25.909, F499 at 15.947, F500 at 16.332 - the REAL
// windows the arc holds: W1 the swing 22.336 -> 21.960 (-0.376) ->
// 25.909 (+3.949), W2 the swing 21.960 -> 25.909 (+3.949) -> 15.947
// (-9.962), W3 the swing 25.909 -> 15.947 (-9.962) -> 16.332 (+0.385)
// - THREE REAL WINDOWS THREE SWINGS THE WORD BORN SPEAKING THREE DEEP
// zero helds, the start kind's own peak the faces trade - the .294
// ten-for-ten and the .299 four-for-four and the .302 four-for-four the
// speaking-grade births the precedent holds).
//
// GRAMMAR: the .302 word's own frame byte-exact (the same-lane
// different-cell precedent that birth holds) - the '[N.NNNs][info][gc]
// ' head, the 'GC(N) ' cell the proven integer no leading zero no sign
// (the .248 house law), the 'Pause Young (Concurrent Start) ' body (the
// kind anchored - the Normal/Prepare Mixed/Mixed siblings never ride),
// the cause parens the emitter's own prose (free, the .289 law - the
// Metadata GC Threshold and the CodeCache GC Threshold skins the faces
// carry both ride), plus the optional Pinned clause the .299 pinned
// skin rides (the census counts the pinned side-car - the max prices
// both skins), the heap trio cell 'NM->NM(NM)' the proven integers, the
// duration cell the proven decimal three-digit resolution the JVM
// prints, the 'ms' tail, LINE END tail boundary; the near-miss lanes
// never ride - the bot-tagged prefix, the Normal kind, the Prepare
// Mixed kind, the Mixed kind, the Remark sibling, the Cleanup sibling,
// the Concurrent Mark Cycle sibling, the float heap, the missing unit,
// the missing cause parens, the leading-zero GC num, the leading
// whitespace, the trailing junk, the CR tail. THE SCALAR THE PEAK
// PRICES: the census takes the MAX Concurrent Start duration the face's
// starts held (the .289 maxPause law's own precedent - the longest
// stop-the-world the kind rode, the .302 same-lane different-cell birth
// the seat extends). CENSUS GUARD: zero fleet wiring, zero new fleet
// log lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail the
// .278 contract extends, the .281/.289/.290/.292/.293/.294/.295/.296/
// .297/.298/.299/.300/.301/.302 folds the neighbours hold), the fleet's
// own console never changes.

const CSTART_PEAK_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Young \(Concurrent Start\) \([^)]*\)( \([^)]+\))? (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d{3})ms$/

/**
 * The concurrent start peak census - the longest stop-the-world the
 * face's start pauses rode (both reason skins and both pinned skins the
 * census prices; the .299 pinned side-car the count tracks).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxCStartMs: number, pinned: number}|null} the mass or null (non-array)
 */
export function gcConcurrentStartCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = 0
  let pinned = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = CSTART_PEAK_RE.exec(l)
    if (!m) continue
    const ms = Number(m[7])
    if (ms > max) max = ms // the peak the kind rode - the .289 maxPause law's own precedent
    if (m[3] !== undefined) pinned++ // the pinned side-car the .299 count tracks
  }
  return { maxCStartMs: max, pinned }
}

/**
 * The fence - every face the proven non-negative number (the float the
 * JVM's own resolution prints - the .289 maxPause law's own precedent)
 * and the proven non-negative integer side-car.
 *
 * @param {{back: {maxCStartMs: number, pinned: number}, prev: {maxCStartMs: number, pinned: number}, cur: {maxCStartMs: number, pinned: number}}} e
 * @returns {boolean}
 */
export function gcConcurrentStartConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n) && n >= 0
  const intOk = (n) => typeof n === 'number' && Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxCStartMs) && numOk(e.prev.maxCStartMs) && numOk(e.cur.maxCStartMs) &&
    intOk(e.back.pinned) && intOk(e.prev.pinned) && intOk(e.cur.pinned))
}

/**
 * The concurrent start peak weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {maxCStartMs: number, pinned: number}, prev: {maxCStartMs: number, pinned: number}, cur: {maxCStartMs: number, pinned: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function gcConcurrentStartTrendRow (e) {
  if (!gcConcurrentStartConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxCStartMs
  const p = prev.maxCStartMs
  const c = cur.maxCStartMs
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const fmt = (v) => v.toFixed(3) // the JVM's own three-digit resolution the arc prints (the float noise the format buries)
  const first = p - b
  const second = c - p
  const arc = `${fmt(b)} -> ${fmt(p)} (${first >= 0 ? '+' : '-'}${fmt(Math.abs(first))}) -> ${fmt(c)} (${second >= 0 ? '+' : '-'}${fmt(Math.abs(second))})`
  const ride = `(the pinned rode ${back.pinned} -> ${prev.pinned} -> ${cur.pinned})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the peak never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .281 gcpausetrend word keeps the all-kinds merged maxPause cell (its scalar never splits the kind), the .290 gcconcurrenttrend word keeps the Concurrent Mark Cycle lane (a different emitter), the .302 gcnormalpeaktrend word keeps the Normal kind's max seat (its grammar refuses the Concurrent Start body byte-exact), the .301 gcpausemixedtrend word keeps the Prepare Mixed kind's max seat, the .299 gcpausenormaltrend word keeps the Normal kind's count cell, the .298 remark and the .300 cleanup words keep the metadata cycle's own pauses' seats - the concurrent start peak's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server gc trend (v0.976.303): the concurrent start's own peak fade ran two steps deep - ${arc} ms - the start handoff's own relief ${ride}, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server gc trend (v0.976.303): the concurrent start's own peak swell ran two steps deep - ${arc} ms - the start handoff's own price climbed ${ride}, ${tail}`
  }
  return `the server gc trend (v0.976.303): the concurrent start's own peak swing - ${arc} ms - the start handoff's own price traded between the faces ${ride}, ${tail}`
}
