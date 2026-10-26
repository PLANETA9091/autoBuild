// (v0.976.492) Unit tests for the purpur mint word (src/lib/purpur.mjs).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decidePurpur, PURPUR_POPPED_PER_BLOCK } from '../../src/lib/purpur.mjs'

test('junk battery: string poppedCount refuses, never throws', () => {
  const r = decidePurpur({ poppedCount: 'four' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.blocks, 0)
})

test('junk battery: NaN poppedCount refuses', () => {
  const r = decidePurpur({ poppedCount: NaN })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk battery: boolean poppedCount refuses (a flag is never a count)', () => {
  const r = decidePurpur({ poppedCount: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('empty call reads the honest default: no pocket read keeps pop-short', () => {
  const r = decidePurpur()
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pop-short')
})

test('floor law: negative popped clamps to zero and keeps pop-short', () => {
  const r = decidePurpur({ poppedCount: -8 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pop-short')
  assert.equal(r.poppedLeft, 0)
})

test('pop-short boundary: three popped pay no square (the unit one short)', () => {
  const r = decidePurpur({ poppedCount: 3 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pop-short')
})

test('square law: the exact unit mints the exact one block', () => {
  const r = decidePurpur({ poppedCount: 4 })
  assert.equal(r.action, 'craft')
  assert.equal(r.reason, 'square-affords')
  assert.equal(r.blocks, 1)
  assert.equal(r.poppedLeft, 0)
})

test('square law: eight popped mint two blocks clean', () => {
  const r = decidePurpur({ poppedCount: 8 })
  assert.equal(r.action, 'craft')
  assert.equal(r.blocks, 2)
  assert.equal(r.poppedLeft, 0)
})

test('remainder named: nine popped mint two blocks and one popped left', () => {
  const r = decidePurpur({ poppedCount: 9 })
  assert.equal(r.action, 'craft')
  assert.equal(r.blocks, 2)
  assert.equal(r.poppedLeft, 1)
})

test('no cap: a square-rich pocket prices every block it affords (200 -> 50)', () => {
  const r = decidePurpur({ poppedCount: 200 })
  assert.equal(r.action, 'craft')
  assert.equal(r.blocks, 50)
  assert.equal(r.poppedLeft, 0)
})

test('fractional census floors honestly (4.5 popped read the four)', () => {
  const r = decidePurpur({ poppedCount: 4.5 })
  assert.equal(r.action, 'craft')
  assert.equal(r.blocks, 1)
  assert.equal(r.poppedLeft, 0)
})

test('big remainder: twenty-three popped mint five blocks and three left', () => {
  const r = decidePurpur({ poppedCount: 23 })
  assert.equal(r.action, 'craft')
  assert.equal(r.blocks, 5)
  assert.equal(r.poppedLeft, 3)
})

test('the two words\' coins agree: the chorus stock unit mints exactly one', () => {
  // the chorus word's own STOCK LAW keeps at CHORUS_PURPUR_POPPED -
  // the same four this word's square reads (the handover named)
  assert.equal(PURPUR_POPPED_PER_BLOCK, 4)
})

test('no defer exists: the pop-short keep is the only honest shortage', () => {
  // one popped short of the unit reads the KEEP never a defer (the
  // blazefuel word's own one-leg reading, the family's lesson)
  const r = decidePurpur({ poppedCount: 2 })
  assert.equal(r.action, 'keep')
  assert.notEqual(r.reason, 'defer')
})

test('the pure read mutates nothing', () => {
  const opts = { poppedCount: 7 }
  const before = JSON.stringify(opts)
  decidePurpur(opts)
  assert.equal(JSON.stringify(opts), before)
})
