// (v0.974.18) THE ENTRY-LUNG CELL pins - FACE 287's own front priced as a
// measurement. The face's decode named the front honestly: the fast drowns
// (F19 wet 10s, F10 wet 5s) rode EMPTY LUNGS at entry - inferred from the
// wet window's own speed, because the death context carried the o2 bar AT
// DEATH and never AT ENTRY. The cell (wetEntryLungCell) snapshots the bar
// at the wet episode's own start; the book (entryLungBook) reads the lines
// off DROWN_CONTEXT_RE (the one-parser law), splits the lung classes and
// seats the verdict off the FAST cross (wet <= 10s) strict majority.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  wetEntryLungCell, entryLungLabel, entryLungBook, entryLungConsistent,
  entryLungVerdict, entryLungRow, ENTRY_EMPTY_MAX, ENTRY_FULL_MIN, FAST_WET_MAX_S
} from '../../src/lib/entrylung.mjs'
import { DROWN_CONTEXT_RE } from '../../src/lib/o2gap.mjs'
import { drownContextLine } from '../../src/lib/statcarry.mjs'

// FACE 287's own shape, byte-verbatim (the entry tail is the cell's own
// grammar): F1's 49s flee (low lungs), F19's 10s deploy + F10's 5s fuel
// commons walk (the fast class, the empty lung the decode inferred).
const face287Mini = [
  'F1 [F1] death: drown context (o2 reset(-1), feet water, head water, rescue 63s ago, leg combat flee, wet 49s, entry o2 12)',
  'F19 [F19] death: drown context (o2 reset(-1), feet water, head water, rescue active, leg deploy, wet 10s, entry o2 4)',
  'F10 [F10] death: drown context (o2 reset(-1), feet water, head water, rescue active, leg fuel commons walk, wet 5s, entry o2 2)'
]

test('the constants hold the air-time arithmetic (1 o2 unit = 1.5s of vanilla air)', () => {
  assert.equal(ENTRY_EMPTY_MAX, 6, 'o2 6 = ~4.5s of air - the empty lung')
  assert.equal(ENTRY_FULL_MIN, 14, 'o2 14 = ~10.5s of air - the full lung')
  assert.equal(FAST_WET_MAX_S, 10, 'FACE 287\'s fast drowns: wet 10s and 5s')
})

test('wetEntryLungCell: the live read rides when it admits, the history tail rides @last, nothing reads null', () => {
  assert.deepEqual(wetEntryLungCell({ o2: 14, admissible: true }), { o2: 14, atLast: false })
  assert.deepEqual(wetEntryLungCell({ o2: 20, admissible: true }), { o2: 20, atLast: false })
  // the reset sentinel / glitch read refuses - the history's last honest tail
  // rides LABELED (@last, the v0.279.0 vocabulary: a previous measurement,
  // never the live read)
  assert.deepEqual(wetEntryLungCell({ o2: -1, admissible: false, lastKnown: 18 }), { o2: 18, atLast: true })
  assert.deepEqual(wetEntryLungCell({ o2: NaN, admissible: false, lastKnown: 9 }), { o2: 9, atLast: true })
  // an admissible VERDICT with a junk number never masquerades as live
  assert.deepEqual(wetEntryLungCell({ o2: NaN, admissible: true, lastKnown: 7 }), { o2: 7, atLast: true })
  // nothing known: no history tail (the sensor never read in-domain)
  assert.equal(wetEntryLungCell({ o2: -1, admissible: false, lastKnown: null }), null)
  assert.equal(wetEntryLungCell({}), null)
  assert.equal(wetEntryLungCell(null), null)
  // junk refusals: a negative lastKnown is the sentinel's own class, never a bar
  assert.equal(wetEntryLungCell({ o2: -1, admissible: false, lastKnown: -1 }), null)
  assert.deepEqual(wetEntryLungCell({ o2: 'junk', admissible: true, lastKnown: 5 }), { o2: 5, atLast: true })
})

test('entryLungLabel: the three token forms (the emitter\'s own words, byte for byte)', () => {
  assert.equal(entryLungLabel(null), '?')
  assert.equal(entryLungLabel(undefined), '?')
  assert.equal(entryLungLabel({}), '?')
  assert.equal(entryLungLabel({ o2: NaN }), '?')
  assert.equal(entryLungLabel({ o2: 14 }), '14')
  assert.equal(entryLungLabel({ o2: 0 }), '0')
  assert.equal(entryLungLabel({ o2: 18, atLast: true }), '18@last')
})

test('drownContextLine renders the entry tail UNCONDITIONALLY (the v0.270.0 law) and byte-true', () => {
  // a cell-less call reads '?' - a missing cell never masquerades as a
  // deliberate omission
  assert.equal(
    drownContextLine({ tag: 'F15', oxygen: 0, feet: 'water', head: 'water', now: 5000 }),
    'F15 death: drown context (o2 0, feet water, head water, rescue never, leg unknown, wet unknown, entry o2 ?)'
  )
  // the live cell rides the tail's own end
  assert.equal(
    drownContextLine({ tag: 'F19', oxygen: -1, feet: 'water', head: 'water', rescueActive: true, now: 5000, entryLung: { o2: 4 } }),
    'F19 death: drown context (o2 reset(-1), feet water, head water, rescue active, leg unknown, wet unknown, entry o2 4)'
  )
  // the @last cell rides labeled
  assert.equal(
    drownContextLine({ tag: 'F10', oxygen: -1, feet: 'water', head: 'water', rescueActive: true, now: 5000, entryLung: { o2: 2, atLast: true } }),
    'F10 death: drown context (o2 reset(-1), feet water, head water, rescue active, leg unknown, wet unknown, entry o2 2@last)'
  )
})

test('the one-parser law: DROWN_CONTEXT_RE accepts the legacy lines AND the entry tail, refuses junk tokens', () => {
  // the legacy shapes (every pre-0.974.18 face's bytes) still parse
  assert.ok(DROWN_CONTEXT_RE.test('F13 [F13] death: drown context (o2 reset(-1), feet water, head water, rescue 42s ago, leg fuel commons walk @-145,391, wet 3s@last)'))
  assert.ok(DROWN_CONTEXT_RE.test('F5 [F5] death: drown context (o2 3, feet water wl, head water, rescue active, leg unknown, wet 12s)'))
  // the new tail parses (all three token forms)
  assert.ok(DROWN_CONTEXT_RE.test('F1 [F1] death: drown context (o2 reset(-1), feet water, head water, rescue 63s ago, leg combat flee, wet 49s, entry o2 12)'))
  assert.ok(DROWN_CONTEXT_RE.test('F2 [F2] death: drown context (o2 9, feet water, head water, rescue never, leg unknown, wet unknown, entry o2 ?)'))
  assert.ok(DROWN_CONTEXT_RE.test('F3 [F3] death: drown context (o2 0, feet water, head water, rescue never, leg wood trip, wet 8s, entry o2 7@last)'))
  // junk entry tokens refuse (the reader is byte-tight to the emitter)
  assert.ok(!DROWN_CONTEXT_RE.test('F3 [F3] death: drown context (o2 0, feet water, head water, rescue never, leg x, wet 8s, entry o2 full)'))
  assert.ok(!DROWN_CONTEXT_RE.test('F3 [F3] death: drown context (o2 0, feet water, head water, rescue never, leg x, wet 8s, entry o2 reset(-1))'))
  assert.ok(!DROWN_CONTEXT_RE.test('F3 [F3] death: drown context (o2 0, feet water, head water, rescue never, leg x, wet 8s, entry o2)'))
})

test('the book reads FACE 287\'s shape: the fast class is 2 of 2 empty - the entry/refill front HOLDS', () => {
  const b = entryLungBook(face287Mini)
  assert.equal(b.contexts, 3)
  assert.equal(b.withCell, 3)
  assert.equal(b.unknown, 0)
  assert.equal(b.empty, 2)
  assert.equal(b.low, 1)
  assert.equal(b.full, 0)
  assert.deepEqual(b.fast, { n: 2, empty: 2, low: 0, full: 0, unknown: 0 })
  assert.equal(entryLungConsistent(b), true)
  assert.equal(entryLungVerdict(b), 'the empty lung owns the fast class (2 of 2 rode under a third of the bar at entry) - the entry/refill front HOLDS')
  assert.equal(
    entryLungRow(b),
    'the entry-lung cell (v0.974.18): 3 of 3 drown context(s) carry an entry o2 (empty<=6 2 / low 1 / full>=14 0), unknown 0 - fast (wet<=10s) 2: the empty lung owns the fast class (2 of 2 rode under a third of the bar at entry) - the entry/refill front HOLDS'
  )
})

test('the refutation word: fast drowns on FULL lungs refute the front (the drain/rescue lane owns them)', () => {
  const b = entryLungBook([
    'F4 [F4] death: drown context (o2 0, feet water, head water, rescue active, leg unknown, wet 7s, entry o2 19)',
    'F5 [F5] death: drown context (o2 0, feet water, head water, rescue active, leg wood trip, wet 9s, entry o2 16)'
  ])
  assert.deepEqual(b.fast, { n: 2, empty: 0, low: 0, full: 2, unknown: 0 })
  assert.equal(entryLungVerdict(b), 'the full lung refutes the front on this face (2 of 2 rode full bars at entry) - the drain/rescue lane owns the fast deaths')
})

test('the tie owns nothing (the v0.806.0 law): a 1-1 fast split reads the no-majority word', () => {
  const b = entryLungBook([
    'F6 [F6] death: drown context (o2 0, feet water, head water, rescue active, leg unknown, wet 3s, entry o2 2)',
    'F7 [F7] death: drown context (o2 0, feet water, head water, rescue active, leg wood trip, wet 6s, entry o2 18)'
  ])
  assert.equal(entryLungVerdict(b), 'the fast class rode no solo lung class (1 empty / 0 low / 1 full of 2) - the split owns no majority')
})

test('the boundary classes ride the arithmetic byte-true (6 empty, 7 low, 13 low, 14 full)', () => {
  const b = entryLungBook([
    'F1 [F1] death: drown context (o2 0, feet water, head water, rescue never, leg x, wet 30s, entry o2 6)',
    'F2 [F2] death: drown context (o2 0, feet water, head water, rescue never, leg x, wet 30s, entry o2 7)',
    'F3 [F3] death: drown context (o2 0, feet water, head water, rescue never, leg x, wet 30s, entry o2 13)',
    'F4 [F4] death: drown context (o2 0, feet water, head water, rescue never, leg x, wet 30s, entry o2 14)'
  ])
  assert.equal(b.empty, 1)
  assert.equal(b.low, 2)
  assert.equal(b.full, 1)
  assert.equal(b.fast.n, 0, 'wet 30s rides past the fast bar - the fast class silent')
  assert.equal(entryLungVerdict(b), null)
  assert.equal(
    entryLungRow(b),
    'the entry-lung cell (v0.974.18): 4 of 4 drown context(s) carry an entry o2 (empty<=6 1 / low 2 / full>=14 1), unknown 0 - fast (wet<=10s) 0 - the fast class silent'
  )
})

test('the @last cells ride the atLast count AND their lung class (a previous measurement is still a measurement)', () => {
  const b = entryLungBook([
    'F8 [F8] death: drown context (o2 0, feet water, head water, rescue active, leg unknown, wet 4s, entry o2 3@last)',
    'F9 [F9] death: drown context (o2 0, feet water, head water, rescue active, leg unknown, wet 5s, entry o2 5)'
  ])
  assert.equal(b.atLast, 1)
  assert.equal(b.empty, 2)
  assert.equal(entryLungVerdict(b), 'the empty lung owns the fast class (2 of 2 rode under a third of the bar at entry) - the entry/refill front HOLDS')
})

test('the legacy lines (no entry tail) ride the unknown bucket and judge nothing (the v0.897.0 blind-skin idiom)', () => {
  const b = entryLungBook([
    'F13 [F13] death: drown context (o2 reset(-1), feet water, head water, rescue 42s ago, leg fuel commons walk @-145,391, wet 3s@last)',
    'F1 [F1] death: drown context (o2 reset(-1), feet water, head water, rescue 166s ago, leg approach segment, wet 26s)',
    'F5 [F5] death: drown context (o2 3, feet water wl, head water, rescue active, leg unknown, wet 12s, entry o2 ?)'
  ])
  assert.equal(b.contexts, 3)
  assert.equal(b.withCell, 0)
  assert.equal(b.unknown, 3)
  assert.equal(b.atLast, 0)
  assert.equal(b.fast.n, 0, 'the @last/unknown wet windows never join the fast cross by guessing')
  assert.equal(entryLungConsistent(b), true)
  assert.equal(
    entryLungRow(b),
    'the entry-lung cell (v0.974.18): 0 of 3 drown context(s) carry an entry o2 (no cell read), unknown 3 - fast (wet<=10s) 0 - the fast class silent'
  )
})

test('the book is junk-safe and nulls on a context-less face (the fences)', () => {
  assert.equal(entryLungBook(null), null)
  assert.equal(entryLungBook('x'), null)
  assert.equal(entryLungBook([]), null)
  assert.equal(entryLungBook(['F13 [F13] water: rescue complete in 1.2s', null, 7]), null, 'a face without drown contexts prices nothing')
  // junk lines are skipped, never counted
  const b = entryLungBook([...face287Mini, 'garbage', null, 42])
  assert.equal(b.contexts, 3)
})

test('the consistency fence refuses a broken book (the row stays silent, the v0.898.0 family)', () => {
  assert.equal(entryLungConsistent(null), false)
  assert.equal(entryLungConsistent('x'), false)
  assert.equal(entryLungConsistent({ contexts: 0 }), false)
  assert.equal(entryLungConsistent({ contexts: 3, withCell: 2, unknown: 1, empty: 2, low: 1, full: 0, atLast: 0, fast: { n: 0, empty: 0, low: 0, full: 0, unknown: 0 } }), false, 'empty+low+full != withCell')
  assert.equal(entryLungConsistent({ contexts: 3, withCell: 2, unknown: 2, empty: 2, low: 0, full: 0, atLast: 0, fast: { n: 0, empty: 0, low: 0, full: 0, unknown: 0 } }), false, 'withCell+unknown != contexts')
  assert.equal(entryLungRow({ contexts: 3, withCell: 2, unknown: 1, empty: 2, low: 1, full: 0, atLast: 0, fast: { n: 0, empty: 0, low: 0, full: 0, unknown: 0 } }), null)
})
