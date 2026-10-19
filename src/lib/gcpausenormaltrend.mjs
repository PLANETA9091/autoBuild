// (v0.976.299) THE GC PAUSE YOUNG NORMAL'S OWN KIND MASS - the Pause
// Young (Normal) kind count the word prices across the faces. THE
// EVIDENCE (the seat the JVM's own [gc] lines carry): the G1
// collector's own log prints '[0.713s][info][gc] GC(0) Pause Young
// (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 5.709ms' (F492's own
// face, run 39255972997) - the young collections the allocation
// pressure provokes, one line per pause the JVM rode - and no book
// owned the KIND cell across the faces: the .281 pause word prices the
// same lines' own duration mass (its grammar CAPTURES the kind -
// '(Normal|Concurrent Start|Mixed|Prepare Mixed)' - and its census
// never prices it, the kind rides its grammar unread), the .289 heap
// word prices the same lines' own heap cells, the .290 concurrent word
// prices the Concurrent Mark Cycle lane - the kind count itself rode
// unread (the fire-2243 seat preview named the kind-frequency seat,
// the fire-0043 audit refused the Mixed cell CONSTANT 4 - the Normal
// cell the variation carries). The REAL six-face arc the faces carry:
// F492 voiced 77 Normal pauses, F493 69, F494 82, F495 63, F496 69,
// F497 56 - the FOUR REAL windows the arc holds: W1 the swing 77 ->
// 69 (-8) -> 82 (+13), W2 the swing 69 -> 82 (+13) -> 63 (-19), W3
// the swing 82 -> 63 (-19) -> 69 (+6), W4 the swing 63 -> 69 (+6) ->
// 56 (-13) - FOUR REAL WINDOWS FOUR SPEAKS THE WORD BORN SPEAKING
// FOUR DEEP zero helds (the .294 word's own ten-for-ten and the .290
// word's own fifteen-for-fifteen the precedent holds). The pinned
// side-car rides (the .270 swords and the .290 cycles side-car
// precedent holds): the '(Evacuation Failure: Pinned)' suffix the
// same Normal lines wear - the REAL six-face pinned arc 3/1/1/1/4/0,
// the ride named in the row's own tail whenever the row speaks.
//
// GRAMMAR: the .281 word's own frame byte-exact - the
// '[(S.sss)][info][gc] ' head the [gc] band's own skin, the 'GC(N) '
// cell the proven integer no leading zero no sign (the .248 house
// law), the 'Pause Young (Normal) ' body the kind cell byte-exact
// (the OTHER kinds never ride - Concurrent Start and Mixed and
// Prepare Mixed keep their own cells), the '(reason)' group the JVM's
// own '(G1 Evacuation Pause)' and '(Metadata GC Threshold)' skins,
// the optional ' (Evacuation Failure: Pinned)' suffix group the
// pinned side-car reads, the heap cells NM->NM(NM) the proven
// integers, the duration cell the S.sss ms tail the JVM's own %.3f
// resolution prints (the exactly-three fractional digits the .294
// word's own law holds - the four hundred sixteen REAL lines the six
// faces carry three-decimal whole); the near-miss lanes
// never ride - the bot-tagged prefix, the [Server thread/INFO]
// console frame (a different lane the .278 words hold), the pretty
// spacing, the missing duration, the two-decimal ms, the leading-zero
// GC number, the negative heap, the missing M unit, the altered
// 'Pause Full' verb, the altered 'Young' body, the CR tail. CENSUS
// GUARD: zero fleet wiring, zero new fleet log lines - the word rides
// the reader's fold through the SECOND carrier lane the server-
// console faces ride (the argv[6..8] tail the .278 contract extends,
// the .281/.289/.290/.292/.293/.294/.295/.296/.297 folds the
// neighbours hold), the fleet's own console never changes.

const PY_NORMAL_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Young \(Normal\) \([^)]*\)(?: \([^)]+\))? (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d{3})ms$/
const PY_PINNED_RE = /^\[(\d+\.\d{3}s)\]\[info\]\[gc\] GC\((0|[1-9]\d*)\) Pause Young \(Normal\) \([^)]*\) \(Evacuation Failure: Pinned\) (\d+)M->(\d+)M\((\d+)M\) (\d+\.\d{3})ms$/

/**
 * The pause young normal census - the kind count the face's JVM voiced.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{normal: number, pinned: number}|null} the masses or null (non-array)
 */
export function gcPauseNormalCensus (lines) {
  if (!Array.isArray(lines)) return null
  let normal = 0
  let pinned = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (PY_NORMAL_RE.test(l)) normal++ // the lane counts whole (the .232 census law - the count never caps)
    if (PY_PINNED_RE.test(l)) pinned++ // the side-car reads its own suffix skin
  }
  return { normal, pinned }
}

/**
 * The fence - every face the proven non-negative integer cells.
 *
 * @param {{back: {normal: number, pinned: number}, prev: {normal: number, pinned: number}, cur: {normal: number, pinned: number}}} e
 * @returns {boolean}
 */
export function gcPauseNormalConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.normal) && numOk(e.back.pinned) &&
    numOk(e.prev.normal) && numOk(e.prev.pinned) &&
    numOk(e.cur.normal) && numOk(e.cur.pinned))
}

/**
 * The pause young normal weather's own two-step shape across three faces.
 *
 * @param {{back: {normal: number, pinned: number}, prev: {normal: number, pinned: number}, cur: {normal: number, pinned: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function gcPauseNormalTrendRow (e) {
  if (!gcPauseNormalConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.normal
  const p = prev.normal
  const c = cur.normal
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  const ride = `(the pinned rode ${back.pinned} -> ${prev.pinned} -> ${cur.pinned})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the kind count never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .281 pause word keeps the same lines' own duration mass (the kind cell rides its grammar unread), the .289 heap word keeps the same lines' own heap cells, the .290 concurrent word keeps the Concurrent Mark Cycle lane, the .278 advancement word and the .292-.297 console words keep the server console's own lanes, the deathcause module keeps the join/leave/death lines - the kind count's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the gc pause normal trend (v0.976.299): the pause young normal's own fade ran two steps deep - ${arc} - the allocation pressure eased ${ride}, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the gc pause normal trend (v0.976.299): the pause young normal's own swell ran two steps deep - ${arc} - the allocation pressure grew ${ride}, ${tail}`
  }
  return `the gc pause normal trend (v0.976.299): the pause young normal's own swing - ${arc} - the young cadence traded between the faces ${ride}, ${tail}`
}
