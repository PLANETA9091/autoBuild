//
// reentryseat.test.mjs - THE RE-ENTRY'S OWN LEG (v0.912.0)
//
// Face 189 (38078750669) is the row's own face: F4's death read
// 'rescue 72s ago, leg next column alt' - the lane completed its save,
// the bot went back in, and the context line named the leg that held
// the return. The v0.746.0 gap rows capture that leg on every stale
// row - captured-but-unread: no row ever SEATS it. This meter seats it.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { reentryLegName, reentryLegBill, reentryLegRow } from '../../src/lib/reentryseat.mjs'

test('the face-189 shape: F4 leg next column alt owns 1 of 1 stale re-entries (the row byte-exact)', () => {
  const bill = reentryLegBill({ immediate: [], delayed: [{ bot: 'F4', ago: 72, leg: 'next column alt' }] })
  assert.ok(bill)
  assert.equal(bill.n, 1)
  assert.equal(bill.named, 1)
  assert.equal(bill.unread, 0)
  assert.deepEqual(bill.owner, { name: 'next column alt', owns: 1 })
  assert.equal(
    reentryLegRow(bill),
    "the re-entry's own leg (v0.912.0): leg next column alt owns 1 of 1 stale re-entry (100%) - the walk's own water is the lever"
  )
})

test('THE SEAT\u2019S OWN NAME LAW: the v0.270.0 @coords stamp never fragments the class', () => {
  assert.equal(reentryLegName('fuel commons walk @-145,391'), 'fuel commons walk')
  assert.equal(reentryLegName('next column alt'), 'next column alt')
  const bill = reentryLegBill([
    { bot: 'F13', ago: 42, leg: 'fuel commons walk @-145,391' },
    { bot: 'F1', ago: 166, leg: 'fuel commons walk @-122,46' }
  ])
  assert.equal(bill.named, 2)
  assert.deepEqual(bill.owner, { name: 'fuel commons walk', owns: 2 })
  assert.equal(
    reentryLegRow(bill),
    "the re-entry's own leg (v0.912.0): leg fuel commons walk owns 2 of 2 stale re-entries (100%) - the walk's own water is the lever"
  )
})

test('THE MAJORITY LAW: the solo seat only above half (3 of 4 owns, the byte exact)', () => {
  const bill = reentryLegBill([
    { bot: 'F1', ago: 20, leg: 'next column alt' },
    { bot: 'F2', ago: 30, leg: 'next column alt' },
    { bot: 'F3', ago: 40, leg: 'next column alt' },
    { bot: 'F4', ago: 50, leg: 'wood trip' }
  ])
  assert.deepEqual(bill.owner, { name: 'next column alt', owns: 3 })
  assert.equal(
    reentryLegRow(bill),
    "the re-entry's own leg (v0.912.0): leg next column alt owns 3 of 4 stale re-entries (75%) - the walk's own water is the lever"
  )
})

test('THE TIE LAW: a tie owns nothing - the riders form, count desc then the name\u2019s own byte asc', () => {
  const bill = reentryLegBill([
    { bot: 'F1', ago: 20, leg: 'wood trip' },
    { bot: 'F2', ago: 30, leg: 'wood trip' },
    { bot: 'F3', ago: 40, leg: 'next column alt' },
    { bot: 'F4', ago: 50, leg: 'next column alt' }
  ])
  assert.equal(bill.owner, null)
  assert.equal(
    reentryLegRow(bill),
    "the re-entry's own leg (v0.912.0): no solo leg owns the majority - next column alt x2 + wood trip x2 own 4 of 4 stale re-entries (100%)"
  )
})

test('THE BELOW-HALF FENCE: a spread of solo walks reads the riders, never an invented owner', () => {
  const bill = reentryLegBill([
    { bot: 'F1', ago: 20, leg: 'wood trip' },
    { bot: 'F2', ago: 30, leg: 'next column alt' },
    { bot: 'F3', ago: 40, leg: 'fuel commons walk' }
  ])
  assert.equal(bill.owner, null)
  const row = reentryLegRow(bill)
  assert.ok(row.includes('no solo leg owns the majority'))
  assert.ok(row.includes('fuel commons walk x1 + next column alt x1 own 2 of 3 stale re-entries (67%)')) // all x1 - the byte asc owns the order
})

test('THE UNREAD FENCE: unknown/null/empty legs never join the seat; the honest unread row when all ride unread', () => {
  assert.equal(reentryLegName('unknown'), null)
  assert.equal(reentryLegName('  '), null)
  assert.equal(reentryLegName(null), null)
  assert.equal(reentryLegName(42), null)
  const all = reentryLegBill([
    { bot: 'F1', ago: 2, leg: 'unknown' },
    { bot: 'F2', ago: 5, leg: null }
  ])
  assert.equal(all.named, 0)
  assert.equal(all.unread, 2)
  assert.equal(
    reentryLegRow(all),
    "the re-entry's own leg (v0.912.0): 2 stale re-entries, every leg unread - the stamp's own gap names itself"
  )
  const mixed = reentryLegBill([
    { bot: 'F1', ago: 2, leg: 'unknown' },
    { bot: 'F4', ago: 72, leg: 'next column alt' }
  ])
  assert.equal(mixed.owner, null) // 1 of 2 = exactly half - the tie law holds
  assert.equal(
    reentryLegRow(mixed),
    "the re-entry's own leg (v0.912.0): no solo leg owns the majority - next column alt x1 own 1 of 2 stale re-entries (50%) (1 leg unread)"
  )
})

test('THE FLAT-ARRAY LAW: the rows array reads the same seat as the gaps shape', () => {
  const flat = reentryLegBill([{ bot: 'F4', ago: 72, leg: 'next column alt' }])
  const gaps = reentryLegBill({ immediate: [{ bot: 'F4', ago: 72, leg: 'next column alt' }], delayed: [] })
  assert.deepEqual(flat, gaps)
})

test('THE HONEST SILENCES: the empty class, the junk battery', () => {
  assert.equal(reentryLegBill({ immediate: [], delayed: [] }), null) // no stale rows - the v0.746.0 row's own silence
  assert.equal(reentryLegBill([]), null)
  assert.equal(reentryLegBill(), null)
  assert.equal(reentryLegBill(null), null)
  assert.equal(reentryLegBill(42), null)
  assert.equal(reentryLegBill('nope'), null)
  assert.equal(reentryLegBill({ immediate: 'nope', delayed: 7 }), null) // non-array fields read empty -> n 0 -> null
  assert.equal(reentryLegRow(null), null)
  assert.equal(reentryLegRow('junk'), null)
  assert.equal(reentryLegRow({ n: 0, named: 0, unread: 0, legs: [], owner: null }), null)
  // junk rows inside the array never price - the population is the priced
  const junkMixed = reentryLegBill([null, 'x', 42, { leg: 7 }])
  assert.equal(junkMixed.n, 1) // only the object row prices
  assert.equal(junkMixed.unread, 1)
  assert.equal(
    reentryLegRow(junkMixed),
    "the re-entry's own leg (v0.912.0): 1 stale re-entry, every leg unread - the stamp's own gap names itself"
  )
  assert.equal(reentryLegBill([null, 'x', 42]), null)
})

test('THE LIVE MINE: face 189\u2019s own read through the v0.746.0 row\u2019s own grammar', () => {
  // the face-189 drown-context byte, verbatim, through o2gap's own regex
  // (the one-parser law) - F4's re-entry seats its own walk
  const line = 'F4 [F4] death: drown context (o2 reset(-1), feet water, head water, rescue 72s ago, leg next column alt, wet 4s@last)'
  const m = line.match(/^F\d+ \[[^\]]+\] death: drown context \(o2 .*, rescue (\d+s ago|active|never), leg (.*), wet .*\)$/)
  assert.ok(m, 'the face-189 byte parses')
  assert.equal(m[1], '72s ago')
  const bill = reentryLegBill([{ bot: 'F4', ago: 72, leg: m[2] }])
  assert.equal(
    reentryLegRow(bill),
    "the re-entry's own leg (v0.912.0): leg next column alt owns 1 of 1 stale re-entry (100%) - the walk's own water is the lever"
  )
})

test('THE CENSUS GUARD: the row rides the decompose mine beside the v0.746.0 gap (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { reentryLegBill, reentryLegRow } from '../../src/lib/reentryseat.mjs'")) // the import
  assert.ok(src.includes('const relb = reentryLegBill(rg)')) // the ledger's own cells, zero re-parsing
  const gap = src.indexOf("console.log(`  the re-entry's own gap (v0.746.0)")
  const seat = src.indexOf('const relb = reentryLegBill(rg)')
  assert.ok(gap > 0 && seat > gap) // the branch rides beside the gap row, never before it
})
