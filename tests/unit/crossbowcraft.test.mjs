// Tests for the crossbowcraft word (src/lib/crossbowcraft.mjs).
// The launcher family's own second word: the bow's named future priced -
// 3 sticks + 2 iron + 1 string + 1 tripwire hook -> 1 crossbow (vanilla),
// the family's first FOUR-LEG word, the first tripwire-hook consumer.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideCrossbowCraft, CROSSBOWCRAFT_STICKS_PER_CRAFT, CROSSBOWCRAFT_IRON_PER_CRAFT, CROSSBOWCRAFT_STRING_PER_CRAFT, CROSSBOWCRAFT_HOOKS_PER_CRAFT, CROSSBOWCRAFT_CROSSBOWS_PER_CRAFT } from '../../src/lib/crossbowcraft.mjs'

test('junk: a non-finite stick count refuses with junk-input', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: Number.NaN, ironIngotCount: 2, stringCount: 1, tripwireHookCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.crossbowsYield, 0)
})

test('junk: a boolean iron count is a flag, never a number (numeric lane law)', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 3, ironIngotCount: true, stringCount: 1, tripwireHookCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string-held count refuses', () => {
  const v = decideCrossbowCraft({ crossbowCount: '1', stickCount: 3, ironIngotCount: 2, stringCount: 1, tripwireHookCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean hook count refuses (the trigger leg rides the same law)', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 3, ironIngotCount: 2, stringCount: 1, tripwireHookCount: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideCrossbowCraft({ crossbowCount: -1, stickCount: -3, ironIngotCount: -2, stringCount: -1, tripwireHookCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.sticksLeft, 0)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.stringLeft, 0)
  assert.equal(v.hooksLeft, 0)
})

test('keep gate first: a piercer already held keeps, the launcher never doubles', () => {
  const v = decideCrossbowCraft({ crossbowCount: 1, stickCount: 30, ironIngotCount: 30, stringCount: 30, tripwireHookCount: 30 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'crossbow-held')
  assert.equal(v.sticksLeft, 30)
  assert.equal(v.ironLeft, 30)
  assert.equal(v.stringLeft, 30)
  assert.equal(v.hooksLeft, 30)
  assert.equal(v.crossbows, 1)
})

test('exactly affordable: the vanilla quartet prices one honest craft, zero leftovers', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 3, ironIngotCount: 2, stringCount: 1, tripwireHookCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'sticks-iron-string-hook-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.crossbowsYield, 1)
  assert.equal(v.sticksLeft, 0)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.stringLeft, 0)
  assert.equal(v.hooksLeft, 0)
})

test('the stick leg binds the yield: nine sticks but one iron pair -> one craft', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 9, ironIngotCount: 2, stringCount: 2, tripwireHookCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.crossbowsYield, 1)
  assert.equal(v.sticksLeft, 6)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.stringLeft, 1)
  assert.equal(v.hooksLeft, 1)
})

test('the iron leg binds the yield: three irons but six sticks -> one craft', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 6, ironIngotCount: 3, stringCount: 2, tripwireHookCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.crossbowsYield, 1)
  assert.equal(v.sticksLeft, 3)
  assert.equal(v.ironLeft, 1)
  assert.equal(v.stringLeft, 1)
  assert.equal(v.hooksLeft, 1)
})

test('no cap: a leg-rich pocket prices every craft it affords, never clamped', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 30, ironIngotCount: 30, stringCount: 30, tripwireHookCount: 30 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.crossbowsYield, 10)
  assert.equal(v.sticksLeft, 0)
  assert.equal(v.ironLeft, 10)
  assert.equal(v.stringLeft, 20)
  assert.equal(v.hooksLeft, 20)
})

test('sticks-short defers, the word\'s own base wood named first (the stickcraft chain)', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 2, ironIngotCount: 30, stringCount: 30, tripwireHookCount: 30 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('iron-short defers, the iron economy\'s eleventh leg named (the smelt trip)', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 30, ironIngotCount: 1, stringCount: 30, tripwireHookCount: 30 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('string-short defers, the hunt lane\'s own yield named', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 30, ironIngotCount: 30, stringCount: 0, tripwireHookCount: 30 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'string-short')
})

test('hook-short defers, the trigger leg named last (the first hook consumer priced)', () => {
  const v = decideCrossbowCraft({ crossbowCount: 0, stickCount: 30, ironIngotCount: 30, stringCount: 30, tripwireHookCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'hook-short')
})

test('empty pocket defers honestly (sticks-short the first named leg)', () => {
  const v = decideCrossbowCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(CROSSBOWCRAFT_STICKS_PER_CRAFT, 3)
  assert.equal(CROSSBOWCRAFT_IRON_PER_CRAFT, 2)
  assert.equal(CROSSBOWCRAFT_STRING_PER_CRAFT, 1)
  assert.equal(CROSSBOWCRAFT_HOOKS_PER_CRAFT, 1)
  assert.equal(CROSSBOWCRAFT_CROSSBOWS_PER_CRAFT, 1)
})

test('the consumer law: the limb-pin leg never gates on another lane face', () => {
  // a piercer-held pocket is the keep lane's story even leg-rich; a
  // piercer-poor leg-rich pocket crafts regardless of any other lane's
  // census shape - and the bow (a different lane's own word,
  // v0.976.442 priced it) never gates here
  const keep = decideCrossbowCraft({ crossbowCount: 2, stickCount: 30, ironIngotCount: 30, stringCount: 30, tripwireHookCount: 30 })
  assert.equal(keep.action, 'keep')
  const craft = decideCrossbowCraft({ crossbowCount: 0, stickCount: 30, ironIngotCount: 30, stringCount: 30, tripwireHookCount: 30 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { crossbowCount: 0, stickCount: 6, ironIngotCount: 3, stringCount: 2, tripwireHookCount: 2 }
  decideCrossbowCraft(opts)
  assert.deepEqual(opts, { crossbowCount: 0, stickCount: 6, ironIngotCount: 3, stringCount: 2, tripwireHookCount: 2 })
})
