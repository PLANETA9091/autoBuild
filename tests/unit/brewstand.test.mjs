// Tests for the brewstand word (src/lib/brewstand.mjs).
// The brewing lane's own station: the chain law's own next priced -
// 1 blaze rod + 3 cobblestone -> 1 brewing stand, vanilla (the rod
// the crown, the three the row). Pure arithmetic - no mineflayer
// import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideBrewStandCraft, BREWSTAND_ROD_PER_CRAFT, BREWSTAND_COBBLE_PER_CRAFT, BREWSTAND_PER_CRAFT } from '../../src/lib/brewstand.mjs'

test('junk: a non-finite stand count refuses with junk-input', () => {
  const v = decideBrewStandCraft({ standCount: Number.NaN, blazeRodCount: 1, cobblestoneCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.standYield, 0)
})

test('junk: a non-finite rod count refuses (all legs policed)', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: Number.POSITIVE_INFINITY, cobblestoneCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: 1, cobblestoneCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: '1', cobblestoneCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - rod-short defers, never poisons', () => {
  const v = decideBrewStandCraft({ standCount: -1, blazeRodCount: -1, cobblestoneCount: -3 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'rod-short')
  assert.equal(v.rodLeft, 0)
  assert.equal(v.cobbleLeft, 0)
  assert.equal(v.stands, 0)
})

test('keep gate first: stand-held keeps even rod-rich (the station never doubles)', () => {
  const v = decideBrewStandCraft({ standCount: 1, blazeRodCount: 9, cobblestoneCount: 30 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'stand-held')
  assert.equal(v.rodLeft, 9)
  assert.equal(v.cobbleLeft, 30)
  assert.equal(v.crafts, 0)
})

test('vanilla pins: one rod crowns three cobble, one stand rides out', () => {
  assert.equal(BREWSTAND_ROD_PER_CRAFT, 1)
  assert.equal(BREWSTAND_COBBLE_PER_CRAFT, 3)
  assert.equal(BREWSTAND_PER_CRAFT, 1)
})

test('one rod three cobble: one honest craft, the leftovers zero', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: 1, cobblestoneCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'rod-cobble-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.standYield, 1)
  assert.equal(v.rodLeft, 0)
  assert.equal(v.cobbleLeft, 0)
})

test('one rod nine cobble: the min law binds - the rod leg starves the yield, cobble named', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: 1, cobblestoneCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.standYield, 1)
  assert.equal(v.rodLeft, 0)
  assert.equal(v.cobbleLeft, 6)
})

test('two rods three cobble: the cobble leg starves the yield, the rod remainder named', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: 2, cobblestoneCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.rodLeft, 1)
  assert.equal(v.cobbleLeft, 0)
})

test('no cap: ten rods thirty cobble never clamped (ten crafts, the crown exact)', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: 10, cobblestoneCount: 30 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.standYield, 10)
  assert.equal(v.rodLeft, 0)
  assert.equal(v.cobbleLeft, 0)
})

test('defer: rod-short names the honest shortage (the nether leg re-tasks)', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: 0, cobblestoneCount: 12 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'rod-short')
  assert.equal(v.rodLeft, 0)
  assert.equal(v.cobbleLeft, 12)
  assert.equal(v.crafts, 0)
})

test('defer: cobble-short names the quarry (the stone lane owns that story)', () => {
  const v = decideBrewStandCraft({ standCount: 0, blazeRodCount: 4, cobblestoneCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'cobble-short')
  assert.equal(v.rodLeft, 4)
  assert.equal(v.cobbleLeft, 2)
  assert.equal(v.crafts, 0)
})

test('empty pocket: stand-empty and legs empty defers the honest rod-short, zero leftovers', () => {
  const v = decideBrewStandCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'rod-short')
  assert.equal(v.rodLeft, 0)
  assert.equal(v.cobbleLeft, 0)
  assert.equal(v.stands, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { standCount: 0, blazeRodCount: 2, cobblestoneCount: 6 }
  decideBrewStandCraft(input)
  assert.deepEqual(input, { standCount: 0, blazeRodCount: 2, cobblestoneCount: 6 })
})
