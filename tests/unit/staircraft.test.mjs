// Tests for the staircraft word (src/lib/staircraft.mjs).
// The cobble climb consumer: the stair poverty priced - the slab
// word's own kin leg (6 cobble -> 4 stairs, vanilla). Pure arithmetic -
// no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideStairCraft, STAIRCRAFT_COBBLE_PER_CRAFT, STAIRCRAFT_STAIRS_PER_CRAFT } from '../../src/lib/staircraft.mjs'

test('junk: a non-finite cobble count refuses with junk-input', () => {
  const v = decideStairCraft({ stairCount: 0, cobbleCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.stairsYield, 0)
})

test('junk: a non-finite stair count refuses (both legs policed)', () => {
  const v = decideStairCraft({ stairCount: Number.POSITIVE_INFINITY, cobbleCount: 6 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideStairCraft({ stairCount: 1, cobbleCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideStairCraft({ stairCount: '2', cobbleCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideStairCraft({ stairCount: -2, cobbleCount: -12 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'cobble-short')
  assert.equal(v.cobbleSurplus, 0)
})

test('keep gate first: a stair already held keeps, the climb owns that story', () => {
  const v = decideStairCraft({ stairCount: 1, cobbleCount: 40 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'stair-held')
  assert.equal(v.cobbleSurplus, 40)
  assert.equal(v.crafts, 0)
})

test('keep gate outranks the craft even cobble-rich (keep-gate-first law)', () => {
  const v = decideStairCraft({ stairCount: 2, cobbleCount: 99 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'stair-held')
})

test('exactly six cobble: one honest craft, zero surplus', () => {
  const v = decideStairCraft({ stairCount: 0, cobbleCount: 6 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'cobble-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.stairsYield, 4)
  assert.equal(v.cobbleSurplus, 0)
  assert.equal(v.cost, 6)
})

test('vanilla recipe pin: six cobble price four stairs (the stair pattern)', () => {
  assert.equal(STAIRCRAFT_COBBLE_PER_CRAFT, 6)
  assert.equal(STAIRCRAFT_STAIRS_PER_CRAFT, 4)
})

test('nine cobble: one craft + the three-cobble remainder named, never rounded into a lie', () => {
  const v = decideStairCraft({ stairCount: 0, cobbleCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.stairsYield, 4)
  assert.equal(v.cobbleSurplus, 3)
})

test('no cap: twelve cobble price every craft the pocket affords (two crafts)', () => {
  const v = decideStairCraft({ stairCount: 0, cobbleCount: 12 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.stairsYield, 8)
})

test('no cap: sixty cobble never clamped (ten crafts, 40 stairs)', () => {
  const v = decideStairCraft({ stairCount: 0, cobbleCount: 60 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.stairsYield, 40)
})

test('defer: cobble short of one craft names the honest shortage', () => {
  const v = decideStairCraft({ stairCount: 0, cobbleCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'cobble-short')
  assert.equal(v.cobbleSurplus, 5)
  assert.equal(v.cost, 6)
})

test('empty pocket: stair-poor and cobble-poor defers with zero surplus', () => {
  const v = decideStairCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'cobble-short')
  assert.equal(v.cobbleSurplus, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { stairCount: 0, cobbleCount: 6 }
  decideStairCraft(input)
  assert.deepEqual(input, { stairCount: 0, cobbleCount: 6 })
})
