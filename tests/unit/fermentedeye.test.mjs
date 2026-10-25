// Tests for the fermentedeye word (src/lib/fermentedeye.mjs).
// The brewing front's own sixth leg: the corruption's own ingredient
// priced (1 spider eye + 1 brown mushroom + 1 sugar -> 1 fermented
// spider eye, vanilla). Pure arithmetic - no mineflayer import, no
// server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideFermentedEye, FERMENTEDEYE_SPIDER_PER_CRAFT, FERMENTEDEYE_MUSHROOM_PER_CRAFT, FERMENTEDEYE_SUGAR_PER_CRAFT, FERMENTEDEYE_FERMENTED_PER_CRAFT } from '../../src/lib/fermentedeye.mjs'

test('junk: a non-finite fermented count refuses with junk-input', () => {
  const v = decideFermentedEye({ fermentedCount: Number.NaN, spiderEyeCount: 1, brownMushroomCount: 1, sugarCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.fermentedYield, 0)
})

test('junk: a non-finite mushroom count refuses (all four legs policed)', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 1, brownMushroomCount: Number.POSITIVE_INFINITY, sugarCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: true, brownMushroomCount: 1, sugarCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 1, brownMushroomCount: 1, sugarCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - mushroom-short defers, never poisons', () => {
  const v = decideFermentedEye({ fermentedCount: -1, spiderEyeCount: -7, brownMushroomCount: -3, sugarCount: -5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'mushroom-short')
  assert.equal(v.spiderEyeLeft, 0)
  assert.equal(v.mushroomLeft, 0)
  assert.equal(v.sugarLeft, 0)
})

test('keep gate first: a fermented eye held keeps even a rich pocket (the golden form never doubles)', () => {
  const v = decideFermentedEye({ fermentedCount: 1, spiderEyeCount: 99, brownMushroomCount: 42, sugarCount: 60 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'fermented-held')
  assert.equal(v.spiderEyeLeft, 99)
  assert.equal(v.mushroomLeft, 42)
  assert.equal(v.sugarLeft, 60)
  assert.equal(v.crafts, 0)
  assert.equal(v.fermentedYield, 0)
})

test('vanilla pins: one spider eye, one brown mushroom and one sugar price the ferment, one fermented eye the craft yields', () => {
  assert.equal(FERMENTEDEYE_SPIDER_PER_CRAFT, 1)
  assert.equal(FERMENTEDEYE_MUSHROOM_PER_CRAFT, 1)
  assert.equal(FERMENTEDEYE_SUGAR_PER_CRAFT, 1)
  assert.equal(FERMENTEDEYE_FERMENTED_PER_CRAFT, 1)
})

test('exactly one of each leg: one honest craft, the leftovers zero', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 1, brownMushroomCount: 1, sugarCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'spider-mushroom-sugar-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.fermentedYield, 1)
  assert.equal(v.spiderEyeLeft, 0)
  assert.equal(v.mushroomLeft, 0)
  assert.equal(v.sugarLeft, 0)
  assert.equal(v.fermented, 0)
})

test('three-leg min law: 3/2/2 prices two ferments (the min binds ALL THREE legs)', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 3, brownMushroomCount: 2, sugarCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.fermentedYield, 2)
  assert.equal(v.spiderEyeLeft, 1)
  assert.equal(v.mushroomLeft, 0)
  assert.equal(v.sugarLeft, 0)
})

test('min law: five spiders two mushrooms nine sugars prices two ferments (the mushroom the ceiling leg)', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 5, brownMushroomCount: 2, sugarCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.spiderEyeLeft, 3)
  assert.equal(v.mushroomLeft, 0)
  assert.equal(v.sugarLeft, 7)
})

test('no cap: a rich pocket prices every ferment it affords', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 40, brownMushroomCount: 60, sugarCount: 80 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 40)
  assert.equal(v.fermentedYield, 40)
  assert.equal(v.sugarLeft, 40)
})

test('defer: mushroom-short names the rare leg first (the cave forage owns that story)', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 9, brownMushroomCount: 0, sugarCount: 9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'mushroom-short')
  assert.equal(v.spiderEyeLeft, 9)
  assert.equal(v.crafts, 0)
  assert.equal(v.fermentedYield, 0)
})

test('defer: spider-eye-short names the night crossing leg (the mushroom leg alive)', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 0, brownMushroomCount: 2, sugarCount: 9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'spider-eye-short')
  assert.equal(v.mushroomLeft, 2)
  assert.equal(v.sugarLeft, 9)
  assert.equal(v.crafts, 0)
})

test('defer: sugar-short names the cane farm leg (the mushroom and spider legs alive)', () => {
  const v = decideFermentedEye({ fermentedCount: 0, spiderEyeCount: 2, brownMushroomCount: 2, sugarCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sugar-short')
  assert.equal(v.spiderEyeLeft, 2)
  assert.equal(v.mushroomLeft, 2)
  assert.equal(v.crafts, 0)
})

test('empty pocket: all legs empty defers mushroom-short (the rarer leg priced first)', () => {
  const v = decideFermentedEye({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'mushroom-short')
  assert.equal(v.spiderEyeLeft, 0)
  assert.equal(v.mushroomLeft, 0)
  assert.equal(v.sugarLeft, 0)
  assert.equal(v.fermented, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { fermentedCount: 0, spiderEyeCount: 1, brownMushroomCount: 1, sugarCount: 1 }
  decideFermentedEye(input)
  assert.deepEqual(input, { fermentedCount: 0, spiderEyeCount: 1, brownMushroomCount: 1, sugarCount: 1 })
})
