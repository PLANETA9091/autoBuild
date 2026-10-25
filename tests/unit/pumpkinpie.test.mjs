// (v0.976.479) Unit tests for the pumpkinpie word - the feast lane's
// own craft decision (1 pumpkin + 1 sugar + 1 egg -> 4 pumpkin pies,
// vanilla - the shapeless bowl).
import test from 'node:test'
import assert from 'node:assert/strict'
import {
  decidePumpkinPie,
  PUMPKINPIE_PUMPKIN_PER_CRAFT,
  PUMPKINPIE_SUGAR_PER_CRAFT,
  PUMPKINPIE_EGG_PER_CRAFT,
  PUMPKINPIE_PIES_PER_CRAFT
} from '../../src/lib/pumpkinpie.mjs'

test('junk pieCount refuses honest', () => {
  const r = decidePumpkinPie({ pieCount: NaN, pumpkinCount: 2, sugarCount: 2, eggCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.crafts, 0)
})

test('junk pumpkinCount (string) refuses honest', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: '2', sugarCount: 2, eggCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk sugarCount (boolean) refuses honest', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: 2, sugarCount: true, eggCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk eggCount (Infinity) refuses honest', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: 2, sugarCount: 2, eggCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('negative counts floor to zero and defer, never throw', () => {
  const r = decidePumpkinPie({ pieCount: -1, pumpkinCount: -2, sugarCount: -1, eggCount: -1 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'pumpkin-short')
  assert.equal(r.pumpkinLeft, 0)
  assert.equal(r.sugarLeft, 0)
  assert.equal(r.eggLeft, 0)
})

test('keep-gate-first: pies held keep, legs ride their lefts untouched', () => {
  const r = decidePumpkinPie({ pieCount: 4, pumpkinCount: 3, sugarCount: 2, eggCount: 1 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pie-held')
  assert.equal(r.pumpkinLeft, 3)
  assert.equal(r.sugarLeft, 2)
  assert.equal(r.eggLeft, 1)
  assert.equal(r.pies, 4)
  assert.equal(r.crafts, 0)
})

test('keep-gate-first wins over empty legs (held beats shortage)', () => {
  const r = decidePumpkinPie({ pieCount: 1, pumpkinCount: 0, sugarCount: 0, eggCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pie-held')
})

test('vanilla pin: exact 1 pumpkin + 1 sugar + 1 egg -> 4 pies', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: 1, sugarCount: 1, eggCount: 1 })
  assert.equal(r.action, 'craft')
  assert.equal(r.reason, 'pumpkin-sugar-egg-affordable')
  assert.equal(r.crafts, 1)
  assert.equal(r.piesYield, 4)
  assert.equal(r.pumpkinLeft, 0)
  assert.equal(r.sugarLeft, 0)
  assert.equal(r.eggLeft, 0)
})

test('vanilla constants pin the shapeless bowl (1/1/1/4)', () => {
  assert.equal(PUMPKINPIE_PUMPKIN_PER_CRAFT, 1)
  assert.equal(PUMPKINPIE_SUGAR_PER_CRAFT, 1)
  assert.equal(PUMPKINPIE_EGG_PER_CRAFT, 1)
  assert.equal(PUMPKINPIE_PIES_PER_CRAFT, 4)
})

test('min law binds all three legs: egg-poor caps the feast', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: 5, sugarCount: 4, eggCount: 2 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 2)
  assert.equal(r.piesYield, 8)
  assert.equal(r.pumpkinLeft, 3)
  assert.equal(r.sugarLeft, 2)
  assert.equal(r.eggLeft, 0)
})

test('min law binds all three legs: pumpkin-poor caps the feast', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: 2, sugarCount: 5, eggCount: 5 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 2)
  assert.equal(r.piesYield, 8)
  assert.equal(r.pumpkinLeft, 0)
  assert.equal(r.sugarLeft, 3)
  assert.equal(r.eggLeft, 3)
})

test('no cap: a rich pocket prices every feast it affords', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: 64, sugarCount: 64, eggCount: 64 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 64)
  assert.equal(r.piesYield, 256)
})

test('defer pumpkin-short names the harvest gourd first', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: 0, sugarCount: 3, eggCount: 3 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'pumpkin-short')
  assert.equal(r.sugarLeft, 3)
  assert.equal(r.eggLeft, 3)
})

test('defer sugar-short and egg-short name their starving legs', () => {
  const s = decidePumpkinPie({ pieCount: 0, pumpkinCount: 3, sugarCount: 0, eggCount: 3 })
  assert.equal(s.action, 'defer')
  assert.equal(s.reason, 'sugar-short')
  assert.equal(s.pumpkinLeft, 3)
  const e = decidePumpkinPie({ pieCount: 0, pumpkinCount: 3, sugarCount: 3, eggCount: 0 })
  assert.equal(e.action, 'defer')
  assert.equal(e.reason, 'egg-short')
  assert.equal(e.eggLeft, 0)
})

test('fractional counts floor honestly (0.5 the binary-exact remainder)', () => {
  const r = decidePumpkinPie({ pieCount: 0, pumpkinCount: 1.5, sugarCount: 1.5, eggCount: 1.5 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 1)
  assert.equal(r.piesYield, 4)
  assert.equal(r.pumpkinLeft, 0.5)
  assert.equal(r.sugarLeft, 0.5)
  assert.equal(r.eggLeft, 0.5)
})

test('empty pocket defers pumpkin-short, never throws', () => {
  const r = decidePumpkinPie({})
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'pumpkin-short')
  assert.equal(r.pumpkinLeft, 0)
})

test('pure read mutates nothing', () => {
  const opts = { pieCount: 0, pumpkinCount: 3, sugarCount: 3, eggCount: 3 }
  const snapshot = JSON.stringify(opts)
  decidePumpkinPie(opts)
  assert.equal(JSON.stringify(opts), snapshot)
})
