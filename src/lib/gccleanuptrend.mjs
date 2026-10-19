// (v0.976.300) THE METADATA CLEANUP'S OWN STOP-THE-WORLD MASS - the gc
// band's own Pause Cleanup line the word prices across the faces. THE
// EVIDENCE (the seat the JVM itself carries - the [gc] lane the
// .281/.289/.290/.298 words' own carrier): the JVM's own concurrent
// mark cycle prints '[2.809s][info][gc] GC(2) Pause Cleanup 45M->45M(
// 1024M) 0.019ms' (F496's own face, run 39287423190) - the cleanup
// stop-the-world the same metadata cycle's second pause rides once per
// cycle, the millisecond cell the cycle's own wrap-up price - and no
// book owned the mass across the faces: the .281 gcheapreclaim and the
// .289 gcpausetrend words price the Pause Young kinds only (their kind
// lists refuse the Cleanup line by shape), the .290 gcconcurrenttrend
// word prices the Concurrent Mark Cycle lane (the background phase the
// cleanup's own cycle drives - a different line), the .298 gcremarktrend
// word prices the Remark pause only (the same cycle's first pause - its
// grammar refuses the Cleanup body byte-exact), the cleanup itself rode
// unread (the REAL six-face arc the faces carry: F492's cleanups peaked
// at 0.043 ms, F493 at 0.043, F494 at 0.047, F495 at 0.055, F496 at
// 0.050, F498 at 0.047 - the REAL windows the arc holds: W1 the held
// first step 0.043 -> 0.043 then the swell to 0.047 (+0.004), W2 the
// swell 0.043 -> 0.047 (+0.004) -> 0.055 (+0.008), W3 the swing
// 0.047 -> 0.055 (+0.008) -> 0.050 (-0.005), W4 the fade 0.055 ->
// 0.050 (-0.005) -> 0.047 (-0.003) - REAL WINDOWS REAL SPEAKS THE WORD
// BORN SPEAKING, the cycle's own wrap-up price the faces trade).
//
// GRAMMAR: the [gc] band's own frame byte-exact - the '[N.NNNs]
// [info][gc] ' head the .281/.289/.298 words' own frame convention
// holds, the 'GC(N) ' cell the proven integer no leading zero no sign
// (the .248 house law), the 'Pause Cleanup ' body, the heap trio cell
// 'NM->NM(NM)' the proven integers, the duration cell the proven
// decimal (the JVM's own %f prints any fraction width), the 'ms' tail,
// LINE END tail boundary (the .288 word's own precedent); the
// near-miss lanes never ride - the bot-tagged prefix, the Remark
// sibling (the same metadata cycle's first pause this word never
// prices), the Young kind, the float heap, the missing unit, the
// missing heap trio, the altered verb, the leading-zero GC num, the
// leading whitespace, the trailing junk, the CR tail. THE SCALAR THE
// PEAK PRICES: the census takes the MAX cleanup duration the face's
// cleanups held (the .289 maxPause law's own precedent - the longest
// stop-the-world the lane rode, the count the lawful side the
// deterministic cycle keeps). CENSUS GUARD: zero fleet wiring, zero
// new fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane the server-console faces ride (the argv[6..8]
// tail the .278 contract extends, the .281/.289/.290/.292/.293/.294/
// .295/.296/.297/.298 folds the neighbours hold), the fleet's own
// console never changes.

const CLEANUP_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Cleanup (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d+)ms$/

/**
 * The cleanup census - the longest stop-the-world the face's cleanups rode.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxCleanupMs: number}|null} the mass or null (non-array)
 */
export function gcCleanupCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = CLEANUP_RE.exec(l)
    if (!m) continue
    const ms = Number(m[6])
    if (ms > max) max = ms // the peak the lane rode - the .289 maxPause law's own precedent
  }
  return { maxCleanupMs: max }
}

/**
 * The fence - every face the proven non-negative number (the float
 * the JVM's own resolution prints - the .289 maxPause law's own
 * precedent: the ms cell never an integer-only lane).
 *
 * @param {{back: {maxCleanupMs: number}, prev: {maxCleanupMs: number}, cur: {maxCleanupMs: number}}} e
 * @returns {boolean}
 */
export function gcCleanupConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxCleanupMs) && numOk(e.prev.maxCleanupMs) && numOk(e.cur.maxCleanupMs))
}

/**
 * The cleanup weather's own two-step shape across three faces.
 *
 * @param {{back: {maxCleanupMs: number}, prev: {maxCleanupMs: number}, cur: {maxCleanupMs: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function gcCleanupTrendRow (e) {
  if (!gcCleanupConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxCleanupMs
  const p = prev.maxCleanupMs
  const c = cur.maxCleanupMs
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const fmt = (v) => v.toFixed(3) // the JVM's own three-digit resolution the arc prints (the float noise the format buries)
  const first = p - b
  const second = c - p
  const arc = `${fmt(b)} -> ${fmt(p)} (${first >= 0 ? '+' : '-'}${fmt(Math.abs(first))}) -> ${fmt(c)} (${second >= 0 ? '+' : '-'}${fmt(Math.abs(second))})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the cleanup never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .281 gcheapreclaim and the .289 gcpausetrend words keep the Pause Young kinds' seats (their kind lists refuse the Cleanup line by shape), the .290 gcconcurrenttrend word keeps the Concurrent Mark Cycle lane (the background phase the cleanup's own cycle drives), the .298 gcremarktrend word keeps the Remark pause's seat (the same metadata cycle's first pause this word never prices) - the cleanup mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server gc trend (v0.976.300): the metadata cleanup's own fade ran two steps deep - ${arc} ms - the cycle's own wrap-up relief, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server gc trend (v0.976.300): the metadata cleanup's own swell ran two steps deep - ${arc} ms - the cycle's own wrap-up price climbed, ${tail}`
  }
  return `the server gc trend (v0.976.300): the metadata cleanup's own swing - ${arc} ms - the cycle's own wrap-up price traded between the faces, ${tail}`
}
