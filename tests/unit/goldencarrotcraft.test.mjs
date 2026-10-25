// Tests for the goldencarrot word (src/lib/goldencarrotcraft.mjs).
// The brewing lane's own future: the gold economy's third demand leg
// priced - 8 gold nuggets + 1 carrot -> 1 golden carrot, vanilla
// (the nugget's own wrap, the ingot's split the caller's supply).
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideGoldenCarrotCraft, GOLDENCARROT_NUGGET_PER_CRAFT, GOLDENCARROT_CARROT_PER_CRAFT, GOLDENCARROT_PER_CRAFT } from '../../src/lib/goldencarrotcraft.mjs'

test('junk: a non-finite golden count refuses with junk-input', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: Number.NaN, goldNuggetCount: 8, carrotCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.goldenYield, 0)
})

test('junk: a non-finite nugget count refuses (all legs policed)', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: Number.POSITIVE_INFINITY, carrotCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: 8, carrotCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: '8', carrotCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - nugget-short defers, never poisons', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: -1, goldNuggetCount: -8, carrotCount: -2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'nugget-short')
  assert.equal(v.nuggetLeft, 0)
  assert.equal(v.carrotLeft, 0)
  assert.equal(v.golden, 0)
})

test('keep gate first: golden-held keeps even nugget-rich (the golden form never doubles)', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 1, goldNuggetCount: 72, carrotCount: 9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'golden-held')
  assert.equal(v.nuggetLeft, 72)
  assert.equal(v.carrotLeft, 9)
  assert.equal(v.crafts, 0)
})

test('vanilla pins: eight nuggets wrap one carrot, one golden rides out', () => {
  assert.equal(GOLDENCARROT_NUGGET_PER_CRAFT, 8)
  assert.equal(GOLDENCARROT_CARROT_PER_CRAFT, 1)
  assert.equal(GOLDENCARROT_PER_CRAFT, 1)
})

test('eight nuggets one carrot: one honest craft, the leftovers zero', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: 8, carrotCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'nugget-carrot-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.goldenYield, 1)
  assert.equal(v.nuggetLeft, 0)
  assert.equal(v.carrotLeft, 0)
})

test('sixteen nuggets two carrots: two crafts, the min law honest both legs', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: 16, carrotCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.goldenYield, 2)
  assert.equal(v.nuggetLeft, 0)
  assert.equal(v.carrotLeft, 0)
})

test('fifteen nuggets two carrots: the min law binds - the nugget leg starves the yield, leftovers named', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: 15, carrotCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.goldenYield, 1)
  assert.equal(v.nuggetLeft, 7)
  assert.equal(v.carrotLeft, 1)
})

test('no cap: eighty nuggets ten carrots never clamped (ten crafts, the wrap exact)', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: 80, carrotCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.goldenYield, 10)
  assert.equal(v.nuggetLeft, 0)
  assert.equal(v.carrotLeft, 0)
})

test('defer: nugget-short names the honest shortage (the ingot split re-tasks)', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: 7, carrotCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'nugget-short')
  assert.equal(v.nuggetLeft, 7)
  assert.equal(v.carrotLeft, 5)
  assert.equal(v.crafts, 0)
})

test('defer: carrot-short names the farm trip (the crop lane owns that story)', () => {
  const v = decideGoldenCarrotCraft({ goldenCarrotCount: 0, goldNuggetCount: 24, carrotCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'carrot-short')
  assert.equal(v.nuggetLeft, 24)
  assert.equal(v.crafts, 0)
})

test('empty pocket: golden-empty and legs empty defers the honest nugget-short, zero leftovers', () => {
  const v = decideGoldenCarrotCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'nugget-short')
  assert.equal(v.nuggetLeft, 0)
  assert.equal(v.carrotLeft, 0)
  assert.equal(v.golden, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { goldenCarrotCount: 0, goldNuggetCount: 16, carrotCount: 2 }
  decideGoldenCarrotCraft(input)
  assert.deepEqual(input, { goldenCarrotCount: 0, goldNuggetCount: 16, carrotCount: 2 })
})
