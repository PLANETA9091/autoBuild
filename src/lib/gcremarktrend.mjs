// (v0.976.298) THE METADATA REMARK'S OWN STOP-THE-WORLD MASS - the gc
// band's own Pause Remark line the word prices across the faces. THE
// EVIDENCE (the seat the JVM itself carries - the [gc] lane the
// .281/.289/.290 words' own carrier): the JVM's own concurrent mark
// cycle prints '[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M)
// 2.607ms' (F496's own face, run 39287423190) - the remark
// stop-the-world the metadata cycle rides once per cycle, the
// millisecond cell the class-loading's own pause price - and no book
// owned the mass across the faces: the .281 gcheapreclaim and the
// .289 gcpausetrend words price the Pause Young kinds only (their
// kind lists refuse the Remark line by shape), the .290
// gcconcurrenttrend word prices the Concurrent Mark Cycle lane (the
// background phase the remark's own cycle drives - a different line),
// the remark itself rode unread (the REAL five-face arc the faces
// carry: F492's remarks peaked at 18.769 ms, F493 at 24.999, F494 at
// 30.663, F495 at 29.774, F496 at 37.890 - the three REAL windows the
// arc holds: W1 the swell 18.769 -> 24.999 (+6.230) -> 30.663
// (+5.664), W2 the swing 24.999 -> 30.663 (+5.664) -> 29.774 (-0.889),
// W3 the swing 30.663 -> 29.774 (-0.889) -> 37.890 (+8.116) - THREE
// REAL WINDOWS THREE SPEAKS THE WORD BORN SPEAKING THREE DEEP, the
// class-loading's own price the faces trade).
//
// GRAMMAR: the [gc] band's own frame byte-exact - the '[N.NNNs]
// [info][gc] ' head the .281/.289 words' own frame convention holds,
// the 'GC(N) ' cell the proven integer no leading zero no sign (the
// .248 house law), the 'Pause Remark ' body, the heap trio cell
// 'NM->NM(NM)' the proven integers, the duration cell the proven
// decimal (the JVM's own %f prints any fraction width), the 'ms' tail,
// LINE END tail boundary (the .288 word's own precedent); the
// near-miss lanes never ride - the bot-tagged prefix, the Cleanup
// sibling (the same metadata cycle's second pause this word never
// prices), the Young kind, the float heap, the missing unit, the
// missing heap trio, the altered verb, the leading-zero GC num, the
// leading whitespace, the trailing junk, the CR tail. THE SCALAR THE
// PEAK PRICES: the census takes the MAX remark duration the face's
// remarks held (the .289 maxPause law's own precedent - the longest
// stop-the-world the lane rode, the count the lawful side the
// deterministic cycle keeps). CENSUS GUARD: zero fleet wiring, zero
// new fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane the server-console faces ride (the argv[6..8]
// tail the .278 contract extends, the .281/.289/.290/.292/.293/.294/
// .295/.296/.297 folds the neighbours hold), the fleet's own console
// never changes.

const REMARK_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Remark (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d+)ms$/

/**
 * The remark census - the longest stop-the-world the face's remarks rode.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxRemarkMs: number}|null} the mass or null (non-array)
 */
export function gcRemarkCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = REMARK_RE.exec(l)
    if (!m) continue
    const ms = Number(m[6])
    if (ms > max) max = ms // the peak the lane rode - the .289 maxPause law's own precedent
  }
  return { maxRemarkMs: max }
}

/**
 * The fence - every face the proven non-negative number (the float
 * the JVM's own resolution prints - the .289 maxPause law's own
 * precedent: the ms cell never an integer-only lane).
 *
 * @param {{back: {maxRemarkMs: number}, prev: {maxRemarkMs: number}, cur: {maxRemarkMs: number}}} e
 * @returns {boolean}
 */
export function gcRemarkConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxRemarkMs) && numOk(e.prev.maxRemarkMs) && numOk(e.cur.maxRemarkMs))
}

/**
 * The remark weather's own two-step shape across three faces.
 *
 * @param {{back: {maxRemarkMs: number}, prev: {maxRemarkMs: number}, cur: {maxRemarkMs: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function gcRemarkTrendRow (e) {
  if (!gcRemarkConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxRemarkMs
  const p = prev.maxRemarkMs
  const c = cur.maxRemarkMs
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const fmt = (v) => v.toFixed(3) // the JVM's own three-digit resolution the arc prints (the float noise the format buries)
  const first = p - b
  const second = c - p
  const arc = `${fmt(b)} -> ${fmt(p)} (${first >= 0 ? '+' : '-'}${fmt(Math.abs(first))}) -> ${fmt(c)} (${second >= 0 ? '+' : '-'}${fmt(Math.abs(second))})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the remark never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .281 gcheapreclaim and the .289 gcpausetrend words keep the Pause Young kinds' seats (their kind lists refuse the Remark line by shape), the .290 gcconcurrenttrend word keeps the Concurrent Mark Cycle lane (the background phase the remark's own cycle drives), the 'Pause Cleanup' line keeps its own row beside (the same metadata cycle's second pause this word never prices) - the remark mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server gc trend (v0.976.298): the metadata remark's own fade ran two steps deep - ${arc} ms - the class-loading's own relief, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server gc trend (v0.976.298): the metadata remark's own swell ran two steps deep - ${arc} ms - the class-loading's own price climbed, ${tail}`
  }
  return `the server gc trend (v0.976.298): the metadata remark's own swing - ${arc} ms - the class-loading's own price traded between the faces, ${tail}`
}
