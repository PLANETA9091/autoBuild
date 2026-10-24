// Tests for the slabcraft word (src/lib/slabcraft.mjs).
// The cobble paving consumer: the slab poverty priced - the path
// lane's first craft word the pocket already affords. Pure arithmetic -
// no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideSlabCraft, SLABCRAFT_COBBLE_PER_CRAFT, SLABCRAFT_SLABS_PER_CRAFT } from '../../src/lib/slabcraft.mjs'

test('junk: a non-finite cobble count refuses with junk-input', () => {
  const v = decideSlabCraft({ slabCount: 0, cobbleCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.slabsYield, 0)
})

test('junk: a non-finite slab count refuses (both legs policed)', () => {
  const v = decideSlabCraft({ slabCount: Number.POSITIVE_INFINITY, cobbleCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideSlabCraft({ slabCount: 1, cobbleCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideSlabCraft({ slabCount: '2', cobbleCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideSlabCraft({ slabCount: -2, cobbleCount: -12 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'cobble-short')
  assert.equal(v.cobbleSurplus, 0)
})

test('keep gate first: a slab already held keeps, the path lane owns that story', () => {
  const v = decideSlabCraft({ slabCount: 1, cobbleCount: 40 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'slab-held')
  assert.equal(v.cobbleSurplus, 40)
  assert.equal(v.crafts, 0)
})

test('keep gate outranks the craft even cobble-rich (keep-gate-first law)', () => {
  const v = decideSlabCraft({ slabCount: 2, cobbleCount: 99 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'slab-held')
})

test('exactly three cobble: one honest craft, zero surplus', () => {
  const v = decideSlabCraft({ slabCount: 0, cobbleCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'cobble-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.slabsYield, 6)
  assert.equal(v.cobbleSurplus, 0)
  assert.equal(v.cost, 3)
})

test('vanilla recipe pin: three cobble price six slabs (the row of three)', () => {
  assert.equal(SLABCRAFT_COBBLE_PER_CRAFT, 3)
  assert.equal(SLABCRAFT_SLABS_PER_CRAFT, 6)
})

test('five cobble: one craft + the two-cobble remainder named, never rounded into a lie', () => {
  const v = decideSlabCraft({ slabCount: 0, cobbleCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.slabsYield, 6)
  assert.equal(v.cobbleSurplus, 2)
})

test('no cap: nine cobble price every craft the pocket affords (three crafts)', () => {
  const v = decideSlabCraft({ slabCount: 0, cobbleCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.slabsYield, 18)
})

test('no cap: sixty cobble never clamped (twenty crafts, 120 slabs)', () => {
  const v = decideSlabCraft({ slabCount: 0, cobbleCount: 60 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 20)
  assert.equal(v.slabsYield, 120)
})

test('defer: cobble short of one craft names the honest shortage', () => {
  const v = decideSlabCraft({ slabCount: 0, cobbleCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'cobble-short')
  assert.equal(v.cobbleSurplus, 2)
  assert.equal(v.cost, 3)
})

test('empty pocket: slab-poor and cobble-poor defers with zero surplus', () => {
  const v = decideSlabCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'cobble-short')
  assert.equal(v.cobbleSurplus, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { slabCount: 0, cobbleCount: 6 }
  decideSlabCraft(input)
  assert.deepEqual(input, { slabCount: 0, cobbleCount: 6 })
})
