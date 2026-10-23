// Tests for the laddercraft word (src/lib/laddercraft.mjs).
// The sticks' third consumer: the shaft lane's return priced - the climb
// the block-stack rents the pocket already affords in ladders. Pure
// arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideLadderCraft, LADDERCRAFT_STICKS_PER_CRAFT, LADDERCRAFT_LADDERS_PER_CRAFT } from '../../src/lib/laddercraft.mjs'

test('junk: a non-finite stick count refuses with junk-input', () => {
  const v = decideLadderCraft({ ladderCount: 0, stickCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.laddersYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideLadderCraft({ ladderCount: 1, stickCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideLadderCraft({ ladderCount: '2', stickCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideLadderCraft({ ladderCount: -1, stickCount: -9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.sticksSurplus, 0)
})

test('keep: ladders already held is the shaft lane story (the pieces-held twin)', () => {
  const v = decideLadderCraft({ ladderCount: 2, stickCount: 4 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ladders-held')
  assert.equal(v.laddersYield, 0)
  assert.equal(v.cost, 0)
})

test('keep gate first: one ladder beats forty sticks (the downstream lane owns the story)', () => {
  const v = decideLadderCraft({ ladderCount: 1, stickCount: 40 })
  assert.equal(v.action, 'keep')
})

test('craft: seven sticks yield three ladders (the vanilla constant)', () => {
  const v = decideLadderCraft({ ladderCount: 0, stickCount: 7 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'sticks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.laddersYield, 3)
  assert.equal(v.sticksSurplus, 0)
  assert.equal(v.cost, 7)
})

test('craft: the surplus priced, never rounded into a lie (9 sticks -> 1 craft + 2 sticks)', () => {
  const v = decideLadderCraft({ ladderCount: 0, stickCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.laddersYield, 3)
  assert.equal(v.sticksSurplus, 2)
})

test('no cap: a stick-rich pocket prices every craft it affords (28 sticks -> 4 crafts)', () => {
  const v = decideLadderCraft({ ladderCount: 0, stickCount: 28 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 4)
  assert.equal(v.laddersYield, 12)
  assert.equal(v.sticksSurplus, 0)
})

test('defer: six sticks is one stick short of one craft (the floor price named)', () => {
  const v = decideLadderCraft({ ladderCount: 0, stickCount: 6 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.sticksSurplus, 6)
  assert.equal(v.cost, 7)
})

test('defer: the empty pocket defers honestly (never a guessed craft)', () => {
  const v = decideLadderCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.laddersYield, 0)
})

test('the vanilla constants exported', () => {
  assert.equal(LADDERCRAFT_STICKS_PER_CRAFT, 7)
  assert.equal(LADDERCRAFT_LADDERS_PER_CRAFT, 3)
})

test('the consumer law: tool and torch legs never gate here (separate lanes)', () => {
  // the tool legs (2 sticks) and the light leg (1 stick + coal) never gate
  // the shaft consumer: the pocket's sticks price the ladder directly
  const v = decideLadderCraft({ ladderCount: 0, stickCount: 14 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
})

test('no mutation: the caller\'s pocket object rides unchanged', () => {
  const opts = { ladderCount: 0, stickCount: 11 }
  const before = { ...opts }
  decideLadderCraft(opts)
  assert.deepEqual(opts, before)
})
