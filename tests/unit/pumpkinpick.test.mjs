// (v0.976.482) The pumpkinpick word's own test battery - the pick
// lane's honest forms: the junk battery, the floor law, the two
// keeps (the GOURD KEEP and the FIELD LAW), the keep-gate-first
// order, the pick's own arithmetic, the no-cap law, the fractional
// remainder, the even-hand yield, the no-mutation purity, the
// vanilla pins.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decidePumpkinPick, PUMPKINPICK_PICKS_PER_GOURD, PUMPKINPICK_PUMPKINS_PER_PICK } from '../../src/lib/pumpkinpick.mjs'

test('vanilla pin: one grown gourd earns its own pick pass', () => {
  assert.equal(PUMPKINPICK_PICKS_PER_GOURD, 1)
})

test('vanilla pin: one pick mints one pocket pumpkin (the even hand)', () => {
  assert.equal(PUMPKINPICK_PUMPKINS_PER_PICK, 1)
})

test('junk: NaN pumpkins refuse', () => {
  const r = decidePumpkinPick({ pumpkinsCount: NaN, gourdsCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.picks, 0)
})

test('junk: Infinity gourds refuse', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 0, gourdsCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean pumpkins refuse (a true count is a flag, never a number)', () => {
  const r = decidePumpkinPick({ pumpkinsCount: true, gourdsCount: 1 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: string gourds refuse', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 0, gourdsCount: '3' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative pumpkins read as zero (the pick stands)', () => {
  const r = decidePumpkinPick({ pumpkinsCount: -2, gourdsCount: 3 })
  assert.equal(r.action, 'pick')
  assert.equal(r.picks, 3)
})

test('floor law: negative gourds read as zero (the field-empty keep)', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 0, gourdsCount: -5 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'field-empty')
})

test('GOURD KEEP: the pocket pumpkin held reads the keep (the honest action)', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 1, gourdsCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pumpkin-held')
  assert.equal(r.pumpkinsLeft, 1)
})

test('keep-gate-first: the held gourd beats the field\'s own promise', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 2, gourdsCount: 4 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pumpkin-held')
  assert.equal(r.picks, 0)
  assert.equal(r.gourdsLeft, 4)
})

test('FIELD LAW: the bare field reads the keep, never a defer', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 0, gourdsCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'field-empty')
  assert.equal(r.picks, 0)
})

test('pick: the stocked field and the bare pocket earn the walk', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 0, gourdsCount: 3 })
  assert.equal(r.action, 'pick')
  assert.equal(r.reason, 'gourds-in-reach')
  assert.equal(r.picks, 3)
  assert.equal(r.gourdsLeft, 0)
  assert.equal(r.pumpkinsYield, 3)
})

test('no cap: a field-rich census prices every pass it affords', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 0, gourdsCount: 200 })
  assert.equal(r.action, 'pick')
  assert.equal(r.picks, 200)
  assert.equal(r.pumpkinsYield, 200)
})

test('fractional census floors honestly with the remainder named', () => {
  const r = decidePumpkinPick({ pumpkinsCount: 0, gourdsCount: 2.5 })
  assert.equal(r.action, 'pick')
  assert.equal(r.picks, 2)
  assert.equal(r.gourdsLeft, 0.5)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { pumpkinsCount: 0, gourdsCount: 2 }
  const snapshot = JSON.stringify(input)
  decidePumpkinPick(input)
  assert.equal(JSON.stringify(input), snapshot)
})

test('empty pocket, one grown gourd: the honest pick read stands', () => {
  const r = decidePumpkinPick({})
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'field-empty')
  const s = decidePumpkinPick({ gourdsCount: 1 })
  assert.equal(s.action, 'pick')
  assert.equal(s.picks, 1)
  assert.equal(s.pumpkinsYield, 1)
})
