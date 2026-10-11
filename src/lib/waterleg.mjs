//
// waterleg.mjs - THE WATER'S OWN LEG (v0.957.0)
//
// The drown context's own leg axis, priced across EVERY rescue relation.
// The v0.912.0 re-entry's own leg seats the walk that owns the RETURNS
// (the stale class alone - reentryGaps filters rescueKind !== 'stale');
// the live lane's walk and the trigger-blind's walk ride unnamed, and
// no row ever draws the whole map. THE WATER'S OWN MAP is this lib:
// every drown context line's leg field - the live lane's walk, the
// never-armed's walk, the returns' walk - one book, one split, one
// seat, with each named walk's own class join (live/never/stale) as
// the cell the stale-only seat never saw.
//
// THE BOOK LAW (the v0.898.0 / v0.956.0 book-only precedent - zero
// census shape change): the rows read the LOG LINES directly off
// DROWN_CONTEXT_RE (the one-parser law - the grammar lives in
// o2gap.mjs once, this lib imports it and never re-spells it). The
// direct read is the only honest shape: o2Gap's perBot fold is
// LAST-WINS per bot, so a twice-drowned bot's first leg (face 215's
// F9: 'rescue never, leg approach segment' under 'rescue active, leg
// unknown') never reaches any perBot cell - the map would lose rows
// the water actually kept.
//
// THE NAME LAW (one truth): the leg names ride reentryLegName
// (reentryseat.mjs, v0.912.0) imported - the v0.270.0 '@coords' stamp
// splits before the seat ('fuel commons walk @-145,391' and '...
// @-150,393' are ONE walk's own churn), 'unknown'/junk never joins
// the seat and rides the honest unread class.
//
// THE SEAT LAW (the re-entry seat's own shape, byte-true): the
// strict-majority law over ALL context rows - a named walk owns the
// water only above half of the contexts (a tie owns nothing); the
// unread class counts in the book and the denominator and judges
// nothing (the v0.897.0 blind-skin idiom). The byte law: count desc,
// then the name's own asc (the v0.912.0 order).
//
// Fences (every one the honest fork):
//   - junk lines, the suffocate/void context shapes, death rows and
//     chat never vote (the drown context grammar alone is the subject)
//   - a context-less face prices nothing (null - the honest silence)
//   - an inconsistent book prices nothing (the fence rides the print,
//     the v0.898.0 fence family byte-true)
//   - junk never prints a row (the row law, one branch never both)
// Pure: reads, never mutates. Read-time tooling only - zero fleet log
// lines, zero runtime machinery - CENSUS GUARD.
//

import { DROWN_CONTEXT_RE } from './o2gap.mjs'
import { reentryLegName } from './reentryseat.mjs'

// the row's own rescue relation - the same fold o2Gap rides (the RE's
// own capture group 5 vocabulary is closed: 'active' | 'Ns ago' |
// 'never'), derived per ROW here because the per-bot fold collapses
// the twice-drowned bot's first leg (the book law above).
function rescueKindOf (token) {
  const t = String(token || '').toLowerCase()
  if (t === 'active') return 'live'
  if (t === 'never') return 'never'
  return 'stale'
}

function waterLegRows (lines) {
  const rows = Array.isArray(lines) ? lines : []
  const out = []
  for (const l of rows) {
    if (typeof l !== 'string' || !l.length) continue // junk-safe: the FATAL face truncates (the v0.358.0 lesson)
    const m = DROWN_CONTEXT_RE.exec(l)
    if (!m) continue // the suffocate/void contexts, the death rows and the chat stay OUTSIDE (the grammar's own fence)
    out.push({
      bot: m[1] || null,
      rescue: rescueKindOf(m[5]),
      leg: m[6],
      name: reentryLegName(m[6])
    })
  }
  return out
}

/**
 * waterLegBook(lines) - the water's own map: every drown context line's
 * leg field folded into the split, the class join and the seat.
 * @param {unknown} [lines] the fleet log's own lines
 * @returns {null|{contexts: number, named: number, unread: number,
 *   legs: Array<{name: string, n: number, live: number, never: number,
 *   stale: number}>, owner: null|{name: string, owns: number, live:
 *   number, never: number, stale: number}, rows: Array}}>}
 */
export function waterLegBook (lines) {
  const rows = waterLegRows(lines)
  if (!rows.length) return null
  const map = new Map()
  let named = 0
  let unread = 0
  for (const r of rows) {
    if (r.name === null) { unread++; continue } // the blind skin counts and judges nothing (the v0.897.0 law)
    named++
    let e = map.get(r.name)
    if (!e) { e = { n: 0, live: 0, never: 0, stale: 0 }; map.set(r.name, e) }
    e.n++
    e[r.rescue]++
  }
  const legs = [...map.entries()]
    .map(([name, e]) => ({ name, n: e.n, live: e.live, never: e.never, stale: e.stale }))
    .sort((a, b) => b.n - a.n || a.name.localeCompare(b.name))
  let owner = null
  if (legs.length && legs[0].n * 2 > rows.length) {
    const t = legs[0]
    owner = { name: t.name, owns: t.n, live: t.live, never: t.never, stale: t.stale }
  }
  return { contexts: rows.length, named, unread, legs, owner, rows }
}

/** The water map's own fence - the v0.898.0 fence family byte-true: the
 * cells recount against the book's own rows (the parse's own image),
 * the legs' own class sums ride each walk, the seat law recounts
 * byte-true, and the legs' own order rides the byte law. An
 * inconsistent book prices nothing. */
export function waterLegConsistent (book) {
  if (!book || typeof book !== 'object' || Array.isArray(book)) return false
  const rows = Array.isArray(book.rows) ? book.rows : []
  for (const r of rows) {
    if (!r || typeof r !== 'object' || Array.isArray(r)) return false
    if (r.bot !== null && typeof r.bot !== 'string') return false
    if (r.rescue !== 'live' && r.rescue !== 'never' && r.rescue !== 'stale') return false
    if (typeof r.leg !== 'string' || !r.leg.length) return false
    if (r.name !== null && typeof r.name !== 'string') return false
    if (r.name !== reentryLegName(r.leg)) return false // the name law's own recount
  }
  if (!rows.length) return false
  const cells = [book.contexts, book.named, book.unread]
  if (!cells.every((v) => Number.isInteger(v) && v >= 0)) return false
  if (book.contexts !== rows.length) return false
  if (book.named + book.unread !== book.contexts) return false
  // the parse's own image: the legs' own recount
  const map = new Map()
  let named = 0
  let unread = 0
  for (const r of rows) {
    if (r.name === null) { unread++; continue }
    named++
    let e = map.get(r.name)
    if (!e) { e = { n: 0, live: 0, never: 0, stale: 0 }; map.set(r.name, e) }
    e.n++
    e[r.rescue]++
  }
  if (book.named !== named || book.unread !== unread) return false
  if (!Array.isArray(book.legs)) return false
  if (book.legs.length !== map.size) return false
  let prev = null
  for (const leg of book.legs) {
    if (!leg || typeof leg !== 'object' || Array.isArray(leg)) return false
    if (typeof leg.name !== 'string' || !leg.name.length) return false
    const e = map.get(leg.name)
    if (!e) return false // a walk the rows never rode
    if (leg.n !== e.n || leg.live !== e.live || leg.never !== e.never || leg.stale !== e.stale) return false
    if (![leg.n, leg.live, leg.never, leg.stale].every((v) => Number.isInteger(v) && v >= 0)) return false
    if (leg.live + leg.never + leg.stale !== leg.n) return false
    if (prev && !(prev.n > leg.n || (prev.n === leg.n && prev.name.localeCompare(leg.name) < 0))) return false // the byte law
    prev = leg
  }
  let namedSum = 0
  for (const leg of book.legs) namedSum += leg.n
  if (namedSum !== book.named) return false
  // the seat law's own recount
  if (book.owner === null) {
    if (book.legs.length && book.legs[0].n * 2 > book.contexts) return false
  } else {
    const o = book.owner
    if (!o || typeof o !== 'object' || Array.isArray(o)) return false
    const e = map.get(o.name)
    if (!e) return false
    if (o.owns !== e.n || o.live !== e.live || o.never !== e.never || o.stale !== e.stale) return false
    if (o.owns * 2 <= book.contexts) return false // the strict-majority law
  }
  return true
}

// (v0.957.0) the water map's own row - THE WATER'S OWN MAP: every lane
// the water kept, priced by the walk that held it. The zero-class
// silence: only the live classes ride; the unread class sits the
// split's own tail (the blind skin's own placement). The branch law:
// one row never both - the seat's row or the spread's row, never the
// pair. Junk never prints a row.
export function waterLegRow (book) {
  if (!book || typeof book !== 'object' || Array.isArray(book)) return null
  const { contexts, named, unread, legs, owner } = book
  if (![contexts, named, unread].every((v) => Number.isInteger(v) && v >= 0)) return null
  if (contexts <= 0 || named + unread !== contexts) return null
  if (!Array.isArray(legs)) return null
  let namedSum = 0
  let prev = null
  for (const leg of legs) {
    if (!leg || typeof leg !== 'object' || Array.isArray(leg)) return null
    if (typeof leg.name !== 'string' || !leg.name.length) return null
    if (![leg.n, leg.live, leg.never, leg.stale].every((v) => Number.isInteger(v) && v >= 0)) return null
    if (!leg.n || leg.live + leg.never + leg.stale !== leg.n) return null
    if (prev && !(prev.n > leg.n || (prev.n === leg.n && prev.name.localeCompare(leg.name) < 0))) return null
    prev = leg
    namedSum += leg.n
  }
  if (namedSum !== named) return null
  if ((named > 0) !== (legs.length > 0)) return null
  if (owner !== null) {
    if (!owner || typeof owner !== 'object' || Array.isArray(owner)) return null
    const top = legs[0]
    if (!top || owner.name !== top.name || owner.owns !== top.n) return null
    if (![owner.owns, owner.live, owner.never, owner.stale].every((v) => Number.isInteger(v) && v >= 0)) return null
    if (owner.live !== top.live || owner.never !== top.never || owner.stale !== top.stale) return null
    if (owner.owns * 2 <= contexts) return null // the strict-majority law
  } else if (legs.length && legs[0].n * 2 > contexts) {
    return null // the spread row cannot print under a live majority (the branch law)
  }
  if (named === 0) {
    return `the water's own leg (v0.957.0): contexts ${contexts}, every leg unread - the water's own map never drew, the stamps stayed dark`
  }
  const splitBits = legs.map((l) => `${l.name} ${l.n}`)
  if (unread > 0) splitBits.push(`unread ${unread}`)
  const split = splitBits.join(', ')
  if (owner) {
    const pct = ((owner.owns / contexts) * 100).toFixed(1)
    const lanes = ['live', 'never', 'stale']
      .filter((k) => owner[k] > 0)
      .map((k) => `${k} ${owner[k]}`)
      .join(', ')
    return `the water's own leg (v0.957.0): contexts ${contexts} - ${split} - leg ${owner.name} owns ${owner.owns} of ${contexts} (${pct}%) (the lanes: ${lanes}) - THE WATER'S OWN MAP: one walk prices the lanes the water kept - the walk's own levy`
  }
  return `the water's own leg (v0.957.0): contexts ${contexts} - ${split} - the legs' own spread: no walk owns half the water's own book - THE AMBIENT WALK'S OWN SPREAD, the lanes rode their own legs`
}
