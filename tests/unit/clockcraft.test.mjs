// Tests for the clockcraft word (src/lib/clockcraft.mjs).
// The time lane's own word: the time poverty priced - the gold
// economy's FIRST priced leg and the redstone economy's FIRST priced
// leg (the timepiece the pocket carries, the sky's shadow the
// nightcare word's own story). Pure arithmetic - no mineflayer
// import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideClockCraft, CLOCKCRAFT_GOLD_PER_CRAFT, CLOCKCRAFT_REDSTONE_PER_CRAFT, CLOCKCRAFT_CLOCKS_PER_CRAFT } from '../../src/lib/clockcraft.mjs'

test('junk: a non-finite gold count refuses with junk-input', () => {
  const v = decideClockCraft({ clockCount: 0, goldIngotCount: Number.NaN, redstoneDustCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.clocksYield, 0)
})

test('junk: a boolean redstone count is a flag, never a number (numeric lane law)', () => {
  const v = decideClockCraft({ clockCount: 0, goldIngotCount: 8, redstoneDustCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string clock count refuses', () => {
  const v = decideClockCraft({ clockCount: '1', goldIngotCount: 8, redstoneDustCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideClockCraft({ clockCount: -1, goldIngotCount: -8, redstoneDustCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'gold-short')
  assert.equal(v.goldLeft, 0)
  assert.equal(v.redstoneLeft, 0)
})

test('keep gate first: a clock already held keeps, the time lane owns that story', () => {
  const v = decideClockCraft({ clockCount: 1, goldIngotCount: 40, redstoneDustCount: 10 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'clock-held')
  assert.equal(v.goldLeft, 40)
  assert.equal(v.clocksYield, 0)
})

test('exactly four gold and one dust: one honest craft, zero surplus both legs', () => {
  const v = decideClockCraft({ clockCount: 0, goldIngotCount: 4, redstoneDustCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'gold-redstone-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.clocksYield, 1)
  assert.equal(v.goldLeft, 0)
  assert.equal(v.redstoneLeft, 0)
})

test('the shorter leg prices: nine gold and two dust bend two clocks, one ingot rides', () => {
  const v = decideClockCraft({ clockCount: 0, goldIngotCount: 9, redstoneDustCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.clocksYield, 2)
  assert.equal(v.goldLeft, 1)
  assert.equal(v.redstoneLeft, 0)
})

test('the dust leg short-side: eight gold and three dust bend two clocks, one dust rides', () => {
  const v = decideClockCraft({ clockCount: 0, goldIngotCount: 8, redstoneDustCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.goldLeft, 0)
  assert.equal(v.redstoneLeft, 1)
})

test('no cap: forty gold and ten dust price every clock the pocket affords', () => {
  const v = decideClockCraft({ clockCount: 0, goldIngotCount: 40, redstoneDustCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.clocksYield, 10)
  assert.equal(v.goldLeft, 0)
  assert.equal(v.redstoneLeft, 0)
})

test('gold-short defers, the honest leg named (the mining trip)', () => {
  const v = decideClockCraft({ clockCount: 0, goldIngotCount: 3, redstoneDustCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'gold-short')
  assert.equal(v.crafts, 0)
})

test('redstone-short defers, the honest leg named (the deep-mining trip)', () => {
  const v = decideClockCraft({ clockCount: 0, goldIngotCount: 8, redstoneDustCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'redstone-short')
  assert.equal(v.goldLeft, 8)
})

test('empty pocket defers honestly', () => {
  const v = decideClockCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'gold-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(CLOCKCRAFT_GOLD_PER_CRAFT, 4)
  assert.equal(CLOCKCRAFT_REDSTONE_PER_CRAFT, 1)
  assert.equal(CLOCKCRAFT_CLOCKS_PER_CRAFT, 1)
})

test('the consumer law: the timepiece leg never gates on another lane face', () => {
  // a clock-held pocket is the keep lane's story even gold-rich; a
  // clock-poor gold-rich pocket crafts regardless of any other lane's
  // census shape - and the compass (the navigation lane's own future,
  // the honest word not yet priced) never gates here
  const keep = decideClockCraft({ clockCount: 2, goldIngotCount: 40, redstoneDustCount: 10 })
  assert.equal(keep.action, 'keep')
  const craft = decideClockCraft({ clockCount: 0, goldIngotCount: 40, redstoneDustCount: 10 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('the clock family law: the timepiece is a singleton, no item kin split', () => {
  // the caller's census never rides the compass (the navigation
  // lane's own future) or the gold ore forms into the count - the
  // word prices exactly what the caller hands it, the same
  // gold-rich shape prices identically whatever the kin story
  const a = decideClockCraft({ clockCount: 0, goldIngotCount: 8, redstoneDustCount: 2 })
  const b = decideClockCraft({ clockCount: 0, goldIngotCount: 8, redstoneDustCount: 2 })
  assert.deepEqual(a, b)
  assert.equal(a.crafts, 2)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { clockCount: 0, goldIngotCount: 9, redstoneDustCount: 2 }
  decideClockCraft(opts)
  assert.deepEqual(opts, { clockCount: 0, goldIngotCount: 9, redstoneDustCount: 2 })
})
