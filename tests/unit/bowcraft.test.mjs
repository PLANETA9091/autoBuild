// Tests for the bowcraft word (src/lib/bowcraft.mjs).
// The fletcher lane's own launcher: the launcher poverty priced - the
// volley priced (v0.976.441), now the bow that delivers it, the string
// consumers priced for the first time (the hunt lane's own yield).
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideBowCraft, BOWCRAFT_STICKS_PER_CRAFT, BOWCRAFT_STRING_PER_CRAFT, BOWCRAFT_BOWS_PER_CRAFT } from '../../src/lib/bowcraft.mjs'

test('junk: a non-finite stick count refuses with junk-input', () => {
  const v = decideBowCraft({ bowCount: 0, stickCount: Number.NaN, stringCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.bowsYield, 0)
})

test('junk: a boolean string count is a flag, never a number (numeric lane law)', () => {
  const v = decideBowCraft({ bowCount: 0, stickCount: 3, stringCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string held count refuses', () => {
  const v = decideBowCraft({ bowCount: '1', stickCount: 3, stringCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideBowCraft({ bowCount: -1, stickCount: -3, stringCount: -3 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.sticksLeft, 0)
  assert.equal(v.stringLeft, 0)
})

test('keep gate first: a launcher already held keeps, the fletcher lane owns that story', () => {
  const v = decideBowCraft({ bowCount: 1, stickCount: 30, stringCount: 30 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bow-held')
  assert.equal(v.sticksLeft, 30)
  assert.equal(v.stringLeft, 30)
  assert.equal(v.bows, 1)
})

test('exactly three sticks and three string: one honest craft, zero leftovers', () => {
  const v = decideBowCraft({ bowCount: 0, stickCount: 3, stringCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'sticks-string-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.bowsYield, 1)
  assert.equal(v.sticksLeft, 0)
  assert.equal(v.stringLeft, 0)
})

test('the shorter leg prices the yield: nine sticks but three string -> one craft', () => {
  const v = decideBowCraft({ bowCount: 0, stickCount: 9, stringCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.bowsYield, 1)
  assert.equal(v.sticksLeft, 6)
  assert.equal(v.stringLeft, 0)
})

test('ten sticks and nine string: three crafts + the stick remainder named', () => {
  const v = decideBowCraft({ bowCount: 0, stickCount: 10, stringCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.bowsYield, 3)
  assert.equal(v.sticksLeft, 1)
  assert.equal(v.stringLeft, 0)
})

test('no cap: thirty sticks and thirty string price every craft the pocket affords', () => {
  const v = decideBowCraft({ bowCount: 0, stickCount: 30, stringCount: 30 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.bowsYield, 10)
  assert.equal(v.sticksLeft, 0)
  assert.equal(v.stringLeft, 0)
})

test('sticks-short defers, the word\'s own base wood named first (the stickcraft chain)', () => {
  const v = decideBowCraft({ bowCount: 0, stickCount: 2, stringCount: 30 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('string-short defers, the hunt lane\'s own yield named', () => {
  const v = decideBowCraft({ bowCount: 0, stickCount: 30, stringCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'string-short')
})

test('empty pocket defers honestly (sticks-short the first named leg)', () => {
  const v = decideBowCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(BOWCRAFT_STICKS_PER_CRAFT, 3)
  assert.equal(BOWCRAFT_STRING_PER_CRAFT, 3)
  assert.equal(BOWCRAFT_BOWS_PER_CRAFT, 1)
})

test('the consumer law: the limb leg never gates on another lane face', () => {
  // a launcher-held pocket is the keep lane's story even leg-rich; a
  // launcher-poor leg-rich pocket crafts regardless of any other lane's
  // census shape - and the crossbow (a different lane's own word, the
  // honest future named) never gates here
  const keep = decideBowCraft({ bowCount: 2, stickCount: 30, stringCount: 30 })
  assert.equal(keep.action, 'keep')
  const craft = decideBowCraft({ bowCount: 0, stickCount: 30, stringCount: 30 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { bowCount: 0, stickCount: 10, stringCount: 9 }
  decideBowCraft(opts)
  assert.deepEqual(opts, { bowCount: 0, stickCount: 10, stringCount: 9 })
})
