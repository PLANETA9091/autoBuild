// Tests for the ender chest word (src/lib/enderchest.mjs).
// The end economy's second leg: the eye's own consumer priced
// (8 obsidian + 1 eye of ender -> 1 ender chest, vanilla). Pure
// arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideEnderChest, ENDERCHEST_OBSIDIAN_PER_CHEST, ENDERCHEST_EYE_PER_CHEST, ENDERCHEST_PER_CRAFT } from '../../src/lib/enderchest.mjs'

test('junk: a non-finite eye count refuses with junk-input', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: 8, eyeCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.chestYield, 0)
})

test('junk: a non-finite obsidian count refuses (all legs policed)', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: Number.POSITIVE_INFINITY, eyeCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideEnderChest({ chestCount: false, obsidianCount: 8, eyeCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: 8, eyeCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - obsidian-short defers, never poisons', () => {
  const v = decideEnderChest({ chestCount: -1, obsidianCount: -8, eyeCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'obsidian-short')
  assert.equal(v.obsidianLeft, 0)
  assert.equal(v.chests, 0)
})

test('keep-gate-first: the chest held keeps even a rich pocket (the portal never doubles)', () => {
  const v = decideEnderChest({ chestCount: 1, obsidianCount: 16, eyeCount: 2 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'chest-held')
  assert.equal(v.crafts, 0)
  assert.equal(v.obsidianLeft, 16, 'the obsidian rides obsidianLeft untouched')
  assert.equal(v.eyeLeft, 2, 'the eye rides eyeLeft untouched')
  assert.equal(v.chests, 1)
})

test('vanilla pin: the obsidian cost one chest carries is exactly 8', () => {
  assert.equal(ENDERCHEST_OBSIDIAN_PER_CHEST, 8)
})

test('vanilla pin: the eye cost and chest yield are exactly 1 and 1', () => {
  assert.equal(ENDERCHEST_EYE_PER_CHEST, 1)
  assert.equal(ENDERCHEST_PER_CRAFT, 1)
})

test('exact vanilla craft: eight obsidian and one eye price one portal', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: 8, eyeCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'obsidian-eye-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.chestYield, 1)
  assert.equal(v.obsidianLeft, 0)
  assert.equal(v.eyeLeft, 0)
  assert.equal(v.chests, 0)
})

test('the min law: 16 obsidian + 2 eyes -> 2 chests, both leftovers zero', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: 16, eyeCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.chestYield, 2)
  assert.equal(v.obsidianLeft, 0)
  assert.equal(v.eyeLeft, 0)
})

test('no cap: a rich pocket prices every chest it affords', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: 24, eyeCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.chestYield, 3)
  assert.equal(v.obsidianLeft, 0)
})

test('defer: obsidian-short names the binding leg first (seven obsidian the crossing re-tasks)', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: 7, eyeCount: 1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'obsidian-short')
  assert.equal(v.crafts, 0)
  assert.equal(v.obsidianLeft, 7, 'the short side never lies about the pocket')
  assert.equal(v.eyeLeft, 1, 'the eye rides untouched')
})

test('defer: eye-short names the eyeofender craft re-task (the obsidian rides named)', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: 8, eyeCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'eye-short')
  assert.equal(v.obsidianLeft, 8)
  assert.equal(v.eyeLeft, 0)
})

test('floor law: a fractional census floors to the honest integer (the remainder named)', () => {
  const v = decideEnderChest({ chestCount: 0, obsidianCount: 8.5, eyeCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.obsidianLeft, 0.5, 'the half obsidian the binary-exact leftover')
})

test('pure read: the word mutates nothing - two calls read the same pocket', () => {
  const pocket = { chestCount: 0, obsidianCount: 16, eyeCount: 1 }
  const a = decideEnderChest(pocket)
  const b = decideEnderChest(pocket)
  assert.deepEqual(a, b)
  assert.equal(pocket.obsidianCount, 16)
  assert.equal(pocket.eyeCount, 1)
})
