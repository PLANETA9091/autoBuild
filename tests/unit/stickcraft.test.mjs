// Tests for the stickcraft word (src/lib/stickcraft.mjs).
// The toolcraft word's stick-chain completion: the sticks-short exit priced.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideStickCraft, STICKCRAFT_PLANKS_PER_CRAFT, STICKCRAFT_STICKS_PER_CRAFT } from '../../src/lib/stickcraft.mjs'

test('junk: a non-finite planks count refuses with junk-input', () => {
  const v = decideStickCraft({ planksCount: Number.NaN, stickCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.crafts, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideStickCraft({ planksCount: true, stickCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string stick count refuses', () => {
  const v = decideStickCraft({ planksCount: 4, stickCount: '2' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideStickCraft({ planksCount: -8, stickCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.crafts, 0)
})

test('keep: sticks already held is the toolcraft lane story (the pieces-held twin)', () => {
  const v = decideStickCraft({ stickCount: 2, planksCount: 9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'sticks-held')
  assert.equal(v.crafts, 0)
  assert.equal(v.planksSurplus, 9)
  assert.equal(v.cost, 0)
})

test('craft: one craft from exactly two planks (yield 4, surplus 0)', () => {
  const v = decideStickCraft({ planksCount: 2, stickCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.sticksYield, STICKCRAFT_STICKS_PER_CRAFT)
  assert.equal(v.planksSurplus, 0)
  assert.equal(v.cost, STICKCRAFT_PLANKS_PER_CRAFT)
})

test('craft: a plank-rich pocket prices every craft it affords (9 planks)', () => {
  const v = decideStickCraft({ planksCount: 9, stickCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 4)
  assert.equal(v.sticksYield, 16)
  assert.equal(v.planksSurplus, 1)
})

test('no cap: a rich pocket prices every craft, never clamped', () => {
  const v = decideStickCraft({ planksCount: 2000, stickCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1000)
  assert.equal(v.sticksYield, 4000)
  assert.equal(v.planksSurplus, 0)
})

test('defer: one lone plank is planks-short (the surplus never rounded into a lie)', () => {
  const v = decideStickCraft({ planksCount: 1, stickCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.crafts, 0)
  assert.equal(v.planksSurplus, 1)
  assert.equal(v.cost, STICKCRAFT_PLANKS_PER_CRAFT)
})

test('defer: an empty pocket is planks-short, never a guessed craft', () => {
  const v = decideStickCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.sticksYield, 0)
})

test('chain law: log-rich plank-poor still defers (the plankcraft seat never guessed)', () => {
  // the word takes NO log input - a caller passing logs sees the honest
  // planks-short defer and knows WHICH leg of the chain is missing
  const v = decideStickCraft({ planksCount: 0, stickCount: 1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
})

test('no-mutation: the input object is read, never written', () => {
  const opts = { planksCount: 6, stickCount: 1 }
  const before = JSON.stringify(opts)
  decideStickCraft(opts)
  assert.equal(JSON.stringify(opts), before)
})

test('the vanilla constants ride the export (2 planks -> 4 sticks)', () => {
  assert.equal(STICKCRAFT_PLANKS_PER_CRAFT, 2)
  assert.equal(STICKCRAFT_STICKS_PER_CRAFT, 4)
})
