// Tests for the railcraft word (src/lib/railcraft.mjs).
// The transport lane's own word: the track poverty priced - the
// minecart/rails front's first word the pocket itself prices. Pure
// arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideRailCraft, RAILCRAFT_IRON_PER_CRAFT, RAILCRAFT_STICKS_PER_CRAFT, RAILCRAFT_RAILS_PER_CRAFT } from '../../src/lib/railcraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideRailCraft({ railCount: 0, ironIngotCount: Number.NaN, stickCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.railsYield, 0)
})

test('junk: a boolean stick count is a flag, never a number (numeric lane law)', () => {
  const v = decideRailCraft({ railCount: 0, ironIngotCount: 6, stickCount: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string rail count refuses', () => {
  const v = decideRailCraft({ railCount: '1', ironIngotCount: 6, stickCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideRailCraft({ railCount: -1, ironIngotCount: -6, stickCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('keep gate first: rails already held keep, the transport lane owns that story', () => {
  const v = decideRailCraft({ railCount: 16, ironIngotCount: 30, stickCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'rail-held')
  assert.equal(v.ironLeft, 30)
  assert.equal(v.stickLeft, 5)
  assert.equal(v.rails, 16)
})

test('exactly six iron and one stick: one honest craft, zero leftovers', () => {
  const v = decideRailCraft({ railCount: 0, ironIngotCount: 6, stickCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-stick-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.railsYield, 16)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('the shorter leg prices the yield: twelve iron but one stick -> one craft', () => {
  const v = decideRailCraft({ railCount: 0, ironIngotCount: 12, stickCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.railsYield, 16)
  assert.equal(v.ironLeft, 6)
  assert.equal(v.stickLeft, 0)
})

test('thirteen iron and two sticks: two crafts + the iron remainder named', () => {
  const v = decideRailCraft({ railCount: 0, ironIngotCount: 13, stickCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.railsYield, 32)
  assert.equal(v.ironLeft, 1)
  assert.equal(v.stickLeft, 0)
})

test('no cap: sixty iron and ten sticks price every craft the pocket affords', () => {
  const v = decideRailCraft({ railCount: 0, ironIngotCount: 60, stickCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.railsYield, 160)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('iron-short defers, the word\'s own base metal named first (the smelt trip)', () => {
  const v = decideRailCraft({ railCount: 0, ironIngotCount: 5, stickCount: 10 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('sticks-short defers, the stickcraft chain\'s own tie named', () => {
  const v = decideRailCraft({ railCount: 0, ironIngotCount: 60, stickCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('empty pocket defers honestly (iron-short the first named leg)', () => {
  const v = decideRailCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(RAILCRAFT_IRON_PER_CRAFT, 6)
  assert.equal(RAILCRAFT_STICKS_PER_CRAFT, 1)
  assert.equal(RAILCRAFT_RAILS_PER_CRAFT, 16)
})

test('the consumer law: the track leg never gates on another lane face', () => {
  // a rail-held pocket is the keep lane's story even leg-rich; a
  // rail-poor leg-rich pocket crafts regardless of any other lane's
  // census shape
  const keep = decideRailCraft({ railCount: 32, ironIngotCount: 60, stickCount: 10 })
  assert.equal(keep.action, 'keep')
  const craft = decideRailCraft({ railCount: 0, ironIngotCount: 60, stickCount: 10 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { railCount: 0, ironIngotCount: 13, stickCount: 2 }
  decideRailCraft(opts)
  assert.deepEqual(opts, { railCount: 0, ironIngotCount: 13, stickCount: 2 })
})
