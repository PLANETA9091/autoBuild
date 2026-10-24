// Tests for the signcraft word (src/lib/signcraft.mjs).
// The pocket's path-marking consumer: the sign poverty priced - the worldmap
// lane's first word the pocket itself prices. Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideSignCraft, SIGNCRAFT_PLANKS_PER_CRAFT, SIGNCRAFT_STICKS_PER_CRAFT, SIGNCRAFT_SIGNS_PER_CRAFT } from '../../src/lib/signcraft.mjs'

test('junk: a non-finite plank count refuses with junk-input', () => {
  const v = decideSignCraft({ signCount: 0, planksCount: Number.NaN, stickCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.signsYield, 0)
})

test('junk: a boolean stick count is a flag, never a number (numeric lane law)', () => {
  const v = decideSignCraft({ signCount: 0, planksCount: 6, stickCount: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string sign count refuses', () => {
  const v = decideSignCraft({ signCount: '1', planksCount: 6, stickCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideSignCraft({ signCount: -2, planksCount: -6, stickCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.plankLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('keep gate first: a sign already held keeps, the marker lane owns that story', () => {
  const v = decideSignCraft({ signCount: 1, planksCount: 30, stickCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'sign-held')
  assert.equal(v.plankLeft, 30)
  assert.equal(v.stickLeft, 5)
})

test('exactly six planks and one stick: one honest craft, zero leftovers', () => {
  const v = decideSignCraft({ signCount: 0, planksCount: 6, stickCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'stick-planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.signsYield, 3)
  assert.equal(v.plankLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('the shorter leg prices the yield: twelve planks but one stick -> one craft', () => {
  const v = decideSignCraft({ signCount: 0, planksCount: 12, stickCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.signsYield, 3)
  assert.equal(v.plankLeft, 6)
  assert.equal(v.stickLeft, 0)
})

test('thirteen planks and two sticks: two crafts + the plank remainder named', () => {
  const v = decideSignCraft({ signCount: 0, planksCount: 13, stickCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.signsYield, 6)
  assert.equal(v.plankLeft, 1)
  assert.equal(v.stickLeft, 0)
})

test('no cap: sixty planks and ten sticks price every craft the pocket affords', () => {
  const v = decideSignCraft({ signCount: 0, planksCount: 60, stickCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.signsYield, 30)
  assert.equal(v.plankLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('sticks-short defers, the stickcraft chain\'s own leg named first', () => {
  const v = decideSignCraft({ signCount: 0, planksCount: 60, stickCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('planks-short defers, the plankcraft chain\'s own leg named', () => {
  const v = decideSignCraft({ signCount: 0, planksCount: 5, stickCount: 10 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
})

test('empty pocket defers honestly (sticks-short the first named leg)', () => {
  const v = decideSignCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(SIGNCRAFT_PLANKS_PER_CRAFT, 6)
  assert.equal(SIGNCRAFT_STICKS_PER_CRAFT, 1)
  assert.equal(SIGNCRAFT_SIGNS_PER_CRAFT, 3)
})

test('the consumer law: the marker leg never gates on another lane face', () => {
  // a sign-held pocket is the keep lane's story even leg-rich; a
  // sign-poor leg-rich pocket crafts regardless of any other lane's
  // census shape
  const keep = decideSignCraft({ signCount: 4, planksCount: 60, stickCount: 10 })
  assert.equal(keep.action, 'keep')
  const craft = decideSignCraft({ signCount: 0, planksCount: 60, stickCount: 10 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { signCount: 0, planksCount: 13, stickCount: 2 }
  decideSignCraft(opts)
  assert.deepEqual(opts, { signCount: 0, planksCount: 13, stickCount: 2 })
})
