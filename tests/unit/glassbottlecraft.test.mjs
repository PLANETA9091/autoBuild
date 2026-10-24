// Tests for the glassbottlecraft word (src/lib/glassbottlecraft.mjs).
// The glass container consumer: the bottle poverty priced - the potion
// lane's first craft word the pocket already affords. Pure arithmetic -
// no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideGlassBottleCraft, GLASSBOTTLECRAFT_GLASS_PER_CRAFT, GLASSBOTTLECRAFT_BOTTLES_PER_CRAFT } from '../../src/lib/glassbottlecraft.mjs'

test('junk: a non-finite glass count refuses with junk-input', () => {
  const v = decideGlassBottleCraft({ bottleCount: 0, glassCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.bottlesYield, 0)
})

test('junk: a non-finite bottle count refuses (both legs policed)', () => {
  const v = decideGlassBottleCraft({ bottleCount: Number.POSITIVE_INFINITY, glassCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideGlassBottleCraft({ bottleCount: 1, glassCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideGlassBottleCraft({ bottleCount: '2', glassCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideGlassBottleCraft({ bottleCount: -2, glassCount: -12 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'glass-short')
  assert.equal(v.glassSurplus, 0)
})

test('keep gate first: a bottle already held keeps, the potion lane owns that story', () => {
  const v = decideGlassBottleCraft({ bottleCount: 1, glassCount: 40 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bottle-held')
  assert.equal(v.glassSurplus, 40)
  assert.equal(v.crafts, 0)
})

test('keep gate outranks the craft even glass-rich (keep-gate-first law)', () => {
  const v = decideGlassBottleCraft({ bottleCount: 2, glassCount: 99 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bottle-held')
})

test('exactly three glass: one honest craft, zero surplus', () => {
  const v = decideGlassBottleCraft({ bottleCount: 0, glassCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'glass-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.bottlesYield, 3)
  assert.equal(v.glassSurplus, 0)
  assert.equal(v.cost, 3)
})

test('vanilla recipe pin: three glass price three bottles (the V shape)', () => {
  assert.equal(GLASSBOTTLECRAFT_GLASS_PER_CRAFT, 3)
  assert.equal(GLASSBOTTLECRAFT_BOTTLES_PER_CRAFT, 3)
})

test('five glass: one craft + the two-glass remainder named, never rounded into a lie', () => {
  const v = decideGlassBottleCraft({ bottleCount: 0, glassCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.bottlesYield, 3)
  assert.equal(v.glassSurplus, 2)
})

test('no cap: nine glass price every craft the pocket affords (three crafts)', () => {
  const v = decideGlassBottleCraft({ bottleCount: 0, glassCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.bottlesYield, 9)
})

test('no cap: sixty glass never clamped (twenty crafts, twenty bottles x3)', () => {
  const v = decideGlassBottleCraft({ bottleCount: 0, glassCount: 60 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 20)
  assert.equal(v.bottlesYield, 60)
})

test('defer: glass short of one craft names the honest shortage', () => {
  const v = decideGlassBottleCraft({ bottleCount: 0, glassCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'glass-short')
  assert.equal(v.glassSurplus, 2)
  assert.equal(v.cost, 3)
})

test('empty pocket: bottle-poor and glass-poor defers with zero surplus', () => {
  const v = decideGlassBottleCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'glass-short')
  assert.equal(v.glassSurplus, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { bottleCount: 0, glassCount: 6 }
  decideGlassBottleCraft(input)
  assert.deepEqual(input, { bottleCount: 0, glassCount: 6 })
})
