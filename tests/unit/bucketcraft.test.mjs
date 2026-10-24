// Tests for the bucketcraft word (src/lib/bucketcraft.mjs).
// The carry economy's word: the buckets the pocket could craft.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideBucketCraft, BUCKETCRAFT_IRON_PER_CRAFT, BUCKETCRAFT_BUCKETS_PER_CRAFT } from '../../src/lib/bucketcraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideBucketCraft({ ironIngotCount: Number.NaN, bucketCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.crafts, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideBucketCraft({ ironIngotCount: 3, bucketCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideBucketCraft({ ironIngotCount: '3', bucketCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideBucketCraft({ ironIngotCount: -3, bucketCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironSurplus, 0)
})

test('keep: a bucket already held is the carry lane story (the pieces-held twin)', () => {
  const v = decideBucketCraft({ ironIngotCount: 6, bucketCount: 1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bucket-held')
  assert.equal(v.crafts, 0)
})

test('keep gate first: one held bucket beats a rich pocket (the downstream lane owns the story)', () => {
  const v = decideBucketCraft({ ironIngotCount: 30, bucketCount: 1 })
  assert.equal(v.action, 'keep')
})

test('craft: three iron yield one bucket (the vanilla constant)', () => {
  const v = decideBucketCraft({ ironIngotCount: 3, bucketCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.bucketsYield, 1)
  assert.equal(v.ironSurplus, 0)
})

test('craft: seven iron yield two buckets with one surplus (the remainder named)', () => {
  const v = decideBucketCraft({ ironIngotCount: 7, bucketCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.bucketsYield, 2)
  assert.equal(v.ironSurplus, 1)
})

test('no cap: an iron-rich pocket prices every bucket craft it affords', () => {
  const v = decideBucketCraft({ ironIngotCount: 60, bucketCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 20)
  assert.equal(v.bucketsYield, 20)
})

test('defer: two iron is one short of the craft floor (the smelt trip named)', () => {
  const v = decideBucketCraft({ ironIngotCount: 2, bucketCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.cost, 3)
})

test('empty pocket: the honest defer (never a guessed craft)', () => {
  const v = decideBucketCraft({ ironIngotCount: 0, bucketCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('undefined default: a bare call defers honestly (no throw)', () => {
  const v = decideBucketCraft()
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('vanilla constants exported (3 iron per bucket, one bucket per craft)', () => {
  assert.equal(BUCKETCRAFT_IRON_PER_CRAFT, 3)
  assert.equal(BUCKETCRAFT_BUCKETS_PER_CRAFT, 1)
})

test('no mutation: the read never writes its input', () => {
  const opts = { ironIngotCount: 7, bucketCount: 0 }
  decideBucketCraft(opts)
  assert.deepEqual(opts, { ironIngotCount: 7, bucketCount: 0 })
})
