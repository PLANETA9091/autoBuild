// Tests for the toolcraft word (src/lib/toolcraft.mjs).
// The armorcraft word's twin: the tool economy's own craft consult.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideToolCraft, TOOLCRAFT_STICK_COST, TOOLCRAFT_HEAD_COST, TOOLCRAFT_TIERS } from '../../src/lib/toolcraft.mjs'

test('junk: a non-finite count refuses with junk-input', () => {
  const v = decideToolCraft({ diamondCount: Number.NaN, stickCount: 2 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.tier, null)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideToolCraft({ stickCount: true, diamondCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideToolCraft({ ironIngotCount: '3', stickCount: 2 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the walk', () => {
  const v = decideToolCraft({ planksCount: -5, stickCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'head-short')
})

test('keep: a spare held is the toolcare lane story (the pieces-held twin)', () => {
  const v = decideToolCraft({ spareCount: 1, diamondCount: 3, stickCount: 2 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'spares-held')
  assert.equal(v.tier, null)
  assert.equal(v.cost, 0)
})

test('sticks gate first: sticks below 2 defer as sticks-short even with diamonds', () => {
  const v = decideToolCraft({ diamondCount: 3, stickCount: 1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.cost, TOOLCRAFT_STICK_COST)
})

test('sticks gate: zero sticks and planks 3 still sticks-short (never the wood walk)', () => {
  const v = decideToolCraft({ planksCount: 3, stickCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('craft: the diamond tier when diamonds and sticks afford it', () => {
  const v = decideToolCraft({ diamondCount: 3, stickCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.tier, 'diamond')
  assert.equal(v.head, 'diamond')
  assert.equal(v.cost, TOOLCRAFT_HEAD_COST)
  assert.equal(v.reason, 'head-affordable')
})

test('best-first law: diamonds beat iron - the walk never sorts, the table is the goal', () => {
  const v = decideToolCraft({ diamondCount: 3, ironIngotCount: 9, stickCount: 4 })
  assert.equal(v.action, 'craft')
  assert.equal(v.tier, 'diamond')
  assert.equal(v.head, 'diamond')
})

test('craft: the iron tier when only iron affords', () => {
  const v = decideToolCraft({ ironIngotCount: 3, stickCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.tier, 'iron')
  assert.equal(v.head, 'iron_ingot')
})

test('craft: the stone tier from cobblestone', () => {
  const v = decideToolCraft({ cobblestoneCount: 3, stickCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.tier, 'stone')
  assert.equal(v.head, 'cobblestone')
})

test('craft: the wood tier is the last resort (planks family key)', () => {
  const v = decideToolCraft({ planksCount: 3, stickCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.tier, 'wood')
  assert.equal(v.head, 'planks')
})

test('head-short: sticks ok but no head at 3 defers with the walk floor price', () => {
  const v = decideToolCraft({ ironIngotCount: 2, stickCount: 4 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'head-short')
  assert.equal(v.cost, TOOLCRAFT_HEAD_COST)
  assert.equal(v.tier, null)
})

test('empty pocket: no inputs at all is a sticks-short defer, never a guess', () => {
  const v = decideToolCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('no-mutation: the input object is read, never written', () => {
  const opts = { diamondCount: 3, stickCount: 2, spareCount: 0 }
  const before = JSON.stringify(opts)
  decideToolCraft(opts)
  assert.equal(JSON.stringify(opts), before)
})

test('the tier table is best-first and complete (diamond/iron/stone/wood)', () => {
  assert.deepEqual(TOOLCRAFT_TIERS.map(t => t.tier), ['diamond', 'iron', 'stone', 'wood'])
  assert.equal(TOOLCRAFT_TIERS.length, 4)
})
