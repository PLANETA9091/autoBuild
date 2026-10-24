// Tests for the tripwirehookcraft word (src/lib/tripwirehookcraft.mjs).
// The trigger lane's own word: the trigger poverty priced - the
// crossbowcraft word named the hook sub-craft the honest future
// (v0.976.444), the future is now, the iron economy's twelfth leg.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideTripwireHookCraft, TRIPWIREHOOKCRAFT_IRON_PER_CRAFT, TRIPWIREHOOKCRAFT_STICKS_PER_CRAFT, TRIPWIREHOOKCRAFT_HOOKS_PER_CRAFT } from '../../src/lib/tripwirehookcraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: Number.NaN, stickCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.hooksYield, 0)
})

test('junk: a boolean stick count is a flag, never a number (numeric lane law)', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: 1, stickCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string held count refuses', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: '1', ironIngotCount: 1, stickCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: -1, ironIngotCount: -1, stickCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironLeft, 0)
  assert.equal(v.sticksLeft, 0)
})

test('keep gate first: a hook already held keeps, the trigger lane owns that story', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 1, ironIngotCount: 10, stickCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'tripwire-hook-held')
  assert.equal(v.ironLeft, 10)
  assert.equal(v.sticksLeft, 5)
  assert.equal(v.hooks, 1)
})

test('exactly one iron and one stick: one honest craft, zero leftovers', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: 1, stickCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-stick-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.hooksYield, 1)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.sticksLeft, 0)
})

test('the shorter leg prices the yield: ten iron but one stick -> one craft', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: 10, stickCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.hooksYield, 1)
  assert.equal(v.ironLeft, 9)
  assert.equal(v.sticksLeft, 0)
})

test('seven iron and three sticks: three crafts + the iron remainder named', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: 7, stickCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.hooksYield, 3)
  assert.equal(v.ironLeft, 4)
  assert.equal(v.sticksLeft, 0)
})

test('no cap: sixty iron and ten sticks price every craft the pocket affords', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: 60, stickCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.hooksYield, 10)
  assert.equal(v.ironLeft, 50)
  assert.equal(v.sticksLeft, 0)
})

test('iron-short defers, the word\'s own base metal named first (the smelt trip)', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: 0, stickCount: 10 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('sticks-short defers, the craft-made frame the stickcraft chain re-tasks', () => {
  const v = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: 10, stickCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('empty pocket defers honestly (iron-short the first named leg)', () => {
  const v = decideTripwireHookCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(TRIPWIREHOOKCRAFT_IRON_PER_CRAFT, 1)
  assert.equal(TRIPWIREHOOKCRAFT_STICKS_PER_CRAFT, 1)
  assert.equal(TRIPWIREHOOKCRAFT_HOOKS_PER_CRAFT, 1)
})

test('the consumer law: the trigger leg never gates on another lane face', () => {
  // a hook-held pocket is the keep lane's story even leg-rich; a
  // hook-poor leg-rich pocket crafts regardless of any other lane's
  // census shape - and the tripwire trap (its own redstone story, the
  // honest word not yet priced) never gates here
  const keep = decideTripwireHookCraft({ tripwireHookCount: 2, ironIngotCount: 60, stickCount: 10 })
  assert.equal(keep.action, 'keep')
  const craft = decideTripwireHookCraft({ tripwireHookCount: 0, ironIngotCount: 60, stickCount: 10 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { tripwireHookCount: 0, ironIngotCount: 7, stickCount: 3 }
  decideTripwireHookCraft(opts)
  assert.deepEqual(opts, { tripwireHookCount: 0, ironIngotCount: 7, stickCount: 3 })
})
