//
// entrylung.mjs - THE ENTRY-LUNG CELL (v0.974.18)
//
// FACE 287's own front, priced as a measurement. The face's three drown
// deaths rode fast wet windows (F19 wet 10s, F10 wet 5s) beside F1's 49s
// flee - and the decode's honest read was that the fast drowns rode EMPTY
// LUNGS at entry (the bot walked into the water with most of its air
// already gone - the refill/entry gate the contexts could not price: the
// death context carried the o2 bar AT DEATH, never the o2 bar AT ENTRY).
// Telemetry before cure (the canon): this lib owns the missing cell.
//
// THE CELL (the tracker side, miner.mjs rides wetEntryLungCell): when the
// sentry's tick first sees the head wet after a dry spell (the wet
// episode's own start, the headWetSince 0 -> ts transition), the o2 bar is
// snapshotted beside the tracker. The snapshot rides the same admission
// law the falling-bar history rides (historyAdmissible - the caller passes
// the verdict): an in-domain live read is the cell ('14'); a refused read
// (-1 reset sentinel, NaN, the glitch classes) falls back to the history's
// last honest tail and renders '@last' (the v0.279.0 vocabulary - the
// previous measurement, never the live read); nothing known reads null
// ('?'). A dry sample clears the cell with the tracker (the episode's own
// end - the next wetting re-measures).
//
// THE BOOK (the reader side, decompose rides it): the log lines read
// DIRECTLY off DROWN_CONTEXT_RE (the one-parser law - the grammar lives
// in o2gap.mjs once, this lib imports it and never re-spells it; the
// book-only precedent - o2Gap's perBot fold is last-wins per bot, a
// twice-drowned bot's first entry never reaches any cell). The cell
// splits by the lung class the air-time arithmetic owns (the vanilla bar:
// o2 20 = 300 ticks = 15s of air, 1 unit = 1.5s):
//   empty  (o2 <= 6)  - under ~4.5s of air: the ENTRY-LUNG FRONT'S OWN
//                       CLASS (the bot entered with under a third of the
//                       bar - the refill/entry gate's own population)
//   low    (7..13)    - the middle air
//   full   (o2 >= 14) - over ~10.5s of air: the front REFUTED for these
//                       deaths (the lungs were full, the drain/rescue
//                       lane owns the death)
// and the FAST cross (the LIVE wet window <= 10s - FACE 287's own fast
// class): the '@last' form is the PREVIOUS wetting (the v0.279.0 honesty),
// never the death's own exposure - it never joins the cross by guessing,
// and 'wet unknown' never pretends to have read. The verdict seats the
// front off the fast rows' own strict majority (a tie owns nothing - the
// v0.806.0 no-owner law; the unread class counts and judges nothing - the
// v0.897.0 blind-skin idiom).
//
// Fences (every one the honest fork): junk lines never vote (the drown
// context grammar alone is the subject); a cell-less face prices nothing
// (the row rides the honest unknown count); an inconsistent book prices
// nothing (the fence rides the print, the v0.898.0 fence family).
// Read-time tooling + one passive tracker cell: zero fleet behavior, zero
// new log line families (the cell rides the drown context's own tail slot
// - the census keeps its rows) - CENSUS GUARD. Pure: reads, never mutates.
//
import { DROWN_CONTEXT_RE } from './o2gap.mjs'

/** The lung class's own bounds (the vanilla air-time arithmetic: 1 o2 unit = 1.5s). */
export const ENTRY_EMPTY_MAX = 6
export const ENTRY_FULL_MIN = 14
/** The fast class's own wet window (FACE 287's fast drowns: wet 5s / 10s). */
export const FAST_WET_MAX_S = 10

/**
 * wetEntryLungCell - the tracker's own cell at the wet episode's start.
 * @param {object} [r]
 * @param {number|null} [r.o2] the live o2 bar read at the entry tick
 * @param {boolean} [r.admissible] the history admission verdict for that read
 * @param {number|null} [r.lastKnown] the history's last honest tail (in-domain)
 * @returns {{o2: number, atLast: boolean}|null} the cell (null = nothing known)
 */
export function wetEntryLungCell (r = {}) {
  const { o2 = null, admissible = false, lastKnown = null } = r || {}
  if (admissible === true && Number.isFinite(o2) && o2 >= 0) return { o2, atLast: false }
  if (Number.isFinite(lastKnown) && lastKnown >= 0) return { o2: lastKnown, atLast: true }
  return null
}

/**
 * entryLungLabel - the cell's own render (the drown context tail's token).
 * @param {{o2: number, atLast: boolean}|null|undefined} [cell] the tracker cell
 * @returns {string} 'N' | 'N@last' | '?'
 */
export function entryLungLabel (cell) {
  if (!cell || !Number.isFinite(cell.o2)) return '?'
  return `${cell.o2}${cell.atLast ? '@last' : ''}`
}

/** The lung class of one cell's o2 value (junk stays out - null). */
function lungClass (o2) {
  if (!Number.isFinite(o2)) return null
  if (o2 <= ENTRY_EMPTY_MAX) return 'empty'
  if (o2 >= ENTRY_FULL_MIN) return 'full'
  return 'low'
}

/** The entry token's own parse (the RE's group 8 vocabulary: '?', 'N', 'N@last'). */
function parseEntryToken (token) {
  if (typeof token !== 'string') return null
  if (token === '?') return null
  const m = /^(\d+)(@last)?$/.exec(token)
  if (!m) return null
  return { o2: Number(m[1]), atLast: m[2] === '@last' }
}

/**
 * entryLungBook - the entry cell's own book, read off the log lines.
 * @param {string[]} lines the fleet log lines
 * @returns {null|{contexts: number, withCell: number, unknown: number,
 *   empty: number, low: number, full: number, atLast: number,
 *   fast: {n: number, empty: number, low: number, full: number, unknown: number},
 *   rows: Array<{bot: string, o2: number, atLast: boolean, wetS: number|null, wetLive: boolean, cls: string|null}>}}
 *   the book (null on a context-less face)
 */
export function entryLungBook (lines) {
  if (!Array.isArray(lines)) return null
  const rows = []
  let contexts = 0
  let unknown = 0
  let atLast = 0
  const empty = { n: 0 }
  const low = { n: 0 }
  const full = { n: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = DROWN_CONTEXT_RE.exec(l)
    if (!m) continue
    contexts++
    const bot = m[1]
    // the wet token's own kind (the o2gap fold's own law): only a LIVE
    // window is the death's own exposure - '@last' is the previous
    // wetting, 'unknown' never read; neither joins the fast cross
    const wetToken = m[7].toLowerCase()
    const wetLive = !/@last$/.test(wetToken) && wetToken !== 'wet unknown'
    const wetSMatch = /wet (\d+)s/.exec(m[7])
    const wetS = wetSMatch ? Number(wetSMatch[1]) : null
    const cell = parseEntryToken(m[8])
    if (!cell) { unknown++; rows.push({ bot, o2: null, atLast: false, wetS, wetLive, cls: null }); continue }
    const cls = lungClass(cell.o2)
    if (cell.atLast) atLast++
    if (cls === 'empty') empty.n++
    else if (cls === 'full') full.n++
    else if (cls === 'low') low.n++
    rows.push({ bot, o2: cell.o2, atLast: cell.atLast, wetS, wetLive, cls })
  }
  if (!contexts) return null
  const withCell = empty.n + low.n + full.n
  // the FAST cross - FACE 287's own class (the LIVE wet window <=
  // FAST_WET_MAX_S), the @last/unknown windows ride out (the previous
  // wetting and the never-read never guess), a cell-less live row rides
  // the fast.unknown bucket (the exposure read but the lung never did)
  const fast = { n: 0, empty: 0, low: 0, full: 0, unknown: 0 }
  for (const r of rows) {
    if (!r.wetLive || r.wetS === null || r.wetS > FAST_WET_MAX_S) continue
    fast.n++
    if (r.cls === 'empty') fast.empty++
    else if (r.cls === 'full') fast.full++
    else if (r.cls === 'low') fast.low++
    else fast.unknown++
  }
  return { contexts, withCell, unknown, empty: empty.n, low: low.n, full: full.n, atLast, fast, rows }
}

/**
 * entryLungConsistent - the book's own fence (the split's sum must hold).
 * @param {object|null} [book] the entryLungBook shape
 * @returns {boolean} true when the book's own arithmetic holds
 */
export function entryLungConsistent (book) {
  if (!book || typeof book !== 'object') return false
  if (!Number.isFinite(book.contexts) || book.contexts <= 0) return false
  if (book.empty + book.low + book.full !== book.withCell) return false
  if (book.withCell + book.unknown !== book.contexts) return false
  if (book.fast.empty + book.fast.low + book.fast.full + book.fast.unknown !== book.fast.n) return false
  return true
}

/**
 * entryLungVerdict - the front's own seat off the fast rows (strict majority).
 * @param {object|null} [book] the entryLungBook shape
 * @returns {null|string} the verdict word (null on a fast-less face)
 */
export function entryLungVerdict (book) {
  if (!book || typeof book !== 'object' || !book.fast || book.fast.n <= 0) return null
  const f = book.fast
  if (f.empty * 2 > f.n) return `the empty lung owns the fast class (${f.empty} of ${f.n} rode under a third of the bar at entry) - the entry/refill front HOLDS`
  if (f.full * 2 > f.n) return `the full lung refutes the front on this face (${f.full} of ${f.n} rode full bars at entry) - the drain/rescue lane owns the fast deaths`
  return `the fast class rode no solo lung class (${f.empty} empty / ${f.low} low / ${f.full} full of ${f.n}) - the split owns no majority`
}

/**
 * entryLungRow - the book's own row (the prose lives only in the lib).
 * @param {object|null} [book] the entryLungBook shape
 * @returns {null|string} the row (null on junk/silence)
 */
export function entryLungRow (book) {
  if (!book || typeof book !== 'object' || !entryLungConsistent(book)) return null
  const verdict = entryLungVerdict(book)
  const cellBits = book.withCell
    ? `empty<=${ENTRY_EMPTY_MAX} ${book.empty} / low ${book.low} / full>=${ENTRY_FULL_MIN} ${book.full}${book.atLast ? `, @last ${book.atLast}` : ''}`
    : 'no cell read'
  const fastBits = book.fast.n
    ? `fast (wet<=${FAST_WET_MAX_S}s) ${book.fast.n}: ${verdict}`
    : `fast (wet<=${FAST_WET_MAX_S}s) 0 - the fast class silent`
  return `the entry-lung cell (v0.974.18): ${book.withCell} of ${book.contexts} drown context(s) carry an entry o2 (${cellBits}), unknown ${book.unknown} - ${fastBits}`
}
