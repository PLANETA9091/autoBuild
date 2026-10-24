// Tests for the compasscraft word (src/lib/compasscraft.mjs).
// The navigation lane's own word: the needle poverty priced - the
// iron economy's FOURTEENTH leg and the redstone economy's SECOND leg
// (the needle the pocket carries, the anchor the fleet's own spawn).
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideCompassCraft, COMPASSCRAFT_IRON_PER_CRAFT, COMPASSCRAFT_REDSTONE_PER_CRAFT, COMPASSCRAFT_COMPASSES_PER_CRAFT } from '../../src/lib/compasscraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideCompassCraft({ compassCount: 0, ironIngotCount: Number.NaN, redstoneDustCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.compassesYield, 0)
})

test('junk: a boolean redstone count is a flag, never a number (numeric lane law)', () => {
  const v = decideCompassCraft({ compassCount: 0, ironIngotCount: 8, redstoneDustCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string compass count refuses', () => {
  const v = decideCompassCraft({ compassCount: '1', ironIngotCount: 8, redstoneDustCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideCompassCraft({ compassCount: -1, ironIngotCount: -8, redstoneDustCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironLeft, 0)
  assert.equal(v.redstoneLeft, 0)
})

test('keep gate first: a compass already held keeps, the navigation lane owns that story', () => {
  const v = decideCompassCraft({ compassCount: 1, ironIngotCount: 40, redstoneDustCount: 10 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'compass-held')
  assert.equal(v.ironLeft, 40)
  assert.equal(v.compassesYield, 0)
})

test('exactly four iron and one dust: one honest craft, zero surplus both legs', () => {
  const v = decideCompassCraft({ compassCount: 0, ironIngotCount: 4, redstoneDustCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-redstone-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.compassesYield, 1)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.redstoneLeft, 0)
})

test('the shorter leg prices: nine iron and two dust bend two needles, one ingot rides', () => {
  const v = decideCompassCraft({ compassCount: 0, ironIngotCount: 9, redstoneDustCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.compassesYield, 2)
  assert.equal(v.ironLeft, 1)
  assert.equal(v.redstoneLeft, 0)
})

test('the dust leg short-side: eight iron and three dust bend two needles, one dust rides', () => {
  const v = decideCompassCraft({ compassCount: 0, ironIngotCount: 8, redstoneDustCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.redstoneLeft, 1)
})

test('no cap: forty iron and ten dust price every needle the pocket affords', () => {
  const v = decideCompassCraft({ compassCount: 0, ironIngotCount: 40, redstoneDustCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.compassesYield, 10)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.redstoneLeft, 0)
})

test('iron-short defers, the honest leg named (the mining trip)', () => {
  const v = decideCompassCraft({ compassCount: 0, ironIngotCount: 3, redstoneDustCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.crafts, 0)
})

test('redstone-short defers, the honest leg named (the deep-mining trip)', () => {
  const v = decideCompassCraft({ compassCount: 0, ironIngotCount: 8, redstoneDustCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'redstone-short')
  assert.equal(v.ironLeft, 8)
})

test('empty pocket defers honestly', () => {
  const v = decideCompassCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(COMPASSCRAFT_IRON_PER_CRAFT, 4)
  assert.equal(COMPASSCRAFT_REDSTONE_PER_CRAFT, 1)
  assert.equal(COMPASSCRAFT_COMPASSES_PER_CRAFT, 1)
})

test('the consumer law: the needle leg never gates on another lane face', () => {
  // a compass-held pocket is the keep lane's story even iron-rich; a
  // needle-poor iron-rich pocket crafts regardless of any other lane's
  // census shape - and the clock (the time lane's own instrument, the
  // clockcraft word's own story) never gates here
  const keep = decideCompassCraft({ compassCount: 2, ironIngotCount: 40, redstoneDustCount: 10 })
  assert.equal(keep.action, 'keep')
  const craft = decideCompassCraft({ compassCount: 0, ironIngotCount: 40, redstoneDustCount: 10 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('the compass family law: the needle is a singleton, no item kin split', () => {
  // the caller's census never rides the clock (the time lane's own
  // instrument) or the iron ore forms into the count - the word
  // prices exactly what the caller hands it, the same iron-rich
  // shape prices identically whatever the kin story
  const a = decideCompassCraft({ compassCount: 0, ironIngotCount: 8, redstoneDustCount: 2 })
  const b = decideCompassCraft({ compassCount: 0, ironIngotCount: 8, redstoneDustCount: 2 })
  assert.deepEqual(a, b)
  assert.equal(a.crafts, 2)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { compassCount: 0, ironIngotCount: 9, redstoneDustCount: 2 }
  decideCompassCraft(opts)
  assert.deepEqual(opts, { compassCount: 0, ironIngotCount: 9, redstoneDustCount: 2 })
})
