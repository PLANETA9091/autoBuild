// (v0.976.493) Unit tests for the purpur slab spend word (src/lib/purpurslab.mjs).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decidePurpurSlab, PURPUR_BLOCKS_PER_SLAB_CRAFT, PURPUR_SLABS_PER_CRAFT } from '../../src/lib/purpurslab.mjs'
import { PURPUR_POPPED_PER_BLOCK } from '../../src/lib/purpur.mjs'

test('junk battery: string purpurBlockCount refuses, never throws', () => {
  const r = decidePurpurSlab({ purpurBlockCount: 'three' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.slabs, 0)
})

test('junk battery: NaN purpurBlockCount refuses', () => {
  const r = decidePurpurSlab({ purpurBlockCount: NaN })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk battery: boolean purpurBlockCount refuses (a flag is never a count)', () => {
  const r = decidePurpurSlab({ purpurBlockCount: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('empty call reads the honest default: no pocket read keeps block-short', () => {
  const r = decidePurpurSlab()
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'block-short')
})

test('floor law: negative blocks clamp to zero and keep block-short', () => {
  const r = decidePurpurSlab({ purpurBlockCount: -6 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'block-short')
  assert.equal(r.blocksLeft, 0)
})

test('block-short boundary: two blocks pay no masonry (the row one short)', () => {
  const r = decidePurpurSlab({ purpurBlockCount: 2 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'block-short')
})

test('slab law: the exact unit mints the exact six slabs', () => {
  const r = decidePurpurSlab({ purpurBlockCount: 3 })
  assert.equal(r.action, 'craft')
  assert.equal(r.reason, 'masonry-affords')
  assert.equal(r.slabs, 6)
  assert.equal(r.blocksLeft, 0)
})

test('slab law: six blocks mint twelve slabs clean', () => {
  const r = decidePurpurSlab({ purpurBlockCount: 6 })
  assert.equal(r.action, 'craft')
  assert.equal(r.slabs, 12)
  assert.equal(r.blocksLeft, 0)
})

test('remainder named: seven blocks mint twelve slabs and one block left', () => {
  const r = decidePurpurSlab({ purpurBlockCount: 7 })
  assert.equal(r.action, 'craft')
  assert.equal(r.slabs, 12)
  assert.equal(r.blocksLeft, 1)
})

test('no cap: a masonry-rich pocket prices every slab it affords (60 -> 120)', () => {
  const r = decidePurpurSlab({ purpurBlockCount: 60 })
  assert.equal(r.action, 'craft')
  assert.equal(r.slabs, 120)
  assert.equal(r.blocksLeft, 0)
})

test('fractional census floors honestly (3.5 blocks read the three)', () => {
  const r = decidePurpurSlab({ purpurBlockCount: 3.5 })
  assert.equal(r.action, 'craft')
  assert.equal(r.slabs, 6)
  assert.equal(r.blocksLeft, 0)
})

test('big remainder: twenty blocks mint thirty-six slabs and two left', () => {
  const r = decidePurpurSlab({ purpurBlockCount: 20 })
  assert.equal(r.action, 'craft')
  assert.equal(r.slabs, 36)
  assert.equal(r.blocksLeft, 2)
})

test('the three words\' coins chain: popped -> block -> slab handover pins', () => {
  // the chorus stock keeps four popped, the square mints one block
  // (4->1), this word spends three blocks into six slabs (3->6) -
  // the chain's own arithmetic the test pins end to end
  assert.equal(PURPUR_POPPED_PER_BLOCK, 4)
  assert.equal(PURPUR_BLOCKS_PER_SLAB_CRAFT, 3)
  assert.equal(PURPUR_SLABS_PER_CRAFT, 6)
  const square = 1 // block the purpur word mints from one square (4 popped)
  const slabs = decidePurpurSlab({ purpurBlockCount: square * 3 })
  assert.equal(slabs.slabs, 6)
})

test('no defer exists: the block-short keep is the only honest shortage', () => {
  // one block short of the row reads the KEEP never a defer (the
  // purpur word's own one-leg reading, the family's lesson)
  const r = decidePurpurSlab({ purpurBlockCount: 1 })
  assert.equal(r.action, 'keep')
  assert.notEqual(r.reason, 'defer')
})

test('the pure read mutates nothing', () => {
  const opts = { purpurBlockCount: 7 }
  const before = JSON.stringify(opts)
  decidePurpurSlab(opts)
  assert.equal(JSON.stringify(opts), before)
})
