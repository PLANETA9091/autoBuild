// Tests for the plankcraft word (src/lib/plankcraft.mjs).
// The stickcraft word's log-leg completion: the wood chain's first leg priced.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decidePlankCraft, PLANKCRAFT_PLANKS_PER_LOG } from '../../src/lib/plankcraft.mjs'

test('junk: a non-finite log count refuses with junk-input', () => {
  const v = decidePlankCraft({ logCount: Number.NaN, planksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.planksYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decidePlankCraft({ logCount: 3, planksCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decidePlankCraft({ logCount: '5', planksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decidePlankCraft({ logCount: -3, planksCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'logs-short')
  assert.equal(v.logs, 0)
})

test('keep: planks already held is the stickcraft lane story (the pieces-held twin)', () => {
  const v = decidePlankCraft({ planksCount: 2, logCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'planks-held')
  assert.equal(v.planksYield, 0)
  assert.equal(v.cost, 0)
})

test('keep gate first: planks 2 beats five logs (the downstream lane owns the story)', () => {
  const v = decidePlankCraft({ planksCount: 2, logCount: 5 })
  assert.equal(v.action, 'keep')
})

test('craft: one log yields four planks (the vanilla constant)', () => {
  const v = decidePlankCraft({ logCount: 1, planksCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'logs-affordable')
  assert.equal(v.logs, 1)
  assert.equal(v.planksYield, PLANKCRAFT_PLANKS_PER_LOG)
  assert.equal(v.cost, 1)
})

test('craft: a log-rich pocket prices every plank it affords (5 logs -> 20)', () => {
  const v = decidePlankCraft({ logCount: 5, planksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.logs, 5)
  assert.equal(v.planksYield, 20)
})

test('no cap: a rich pocket prices every plank, never clamped', () => {
  const v = decidePlankCraft({ logCount: 1000, planksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.planksYield, 4000)
})

test('defer: log-poor plank-poor is the honest dead end (the wood trip named)', () => {
  const v = decidePlankCraft({ logCount: 0, planksCount: 1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'logs-short')
  assert.equal(v.planksYield, 0)
  assert.equal(v.cost, 1)
})

test('defer: an empty pocket defers, never a guessed craft', () => {
  const v = decidePlankCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'logs-short')
})

test('chain law: the word takes NO stick input - three legs three words, never one mega-word', () => {
  // the stick step is the stickcraft seat; this word prices logs -> planks only
  const v = decidePlankCraft({ logCount: 3, planksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.ok(!('sticksYield' in v))
})

test('no-mutation: the input object is read, never written', () => {
  const opts = { logCount: 4, planksCount: 1 }
  const before = JSON.stringify(opts)
  decidePlankCraft(opts)
  assert.equal(JSON.stringify(opts), before)
})
