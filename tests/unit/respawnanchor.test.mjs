// Tests for the respawn anchor word (src/lib/respawnanchor.mjs).
// The nether's own bed: the anchor priced (6 crying obsidian +
// 3 glowstone -> 1 respawn anchor, vanilla). Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideRespawnAnchor, RESPAWNANCHOR_CRYING_PER_ANCHOR, RESPAWNANCHOR_GLOWSTONE_PER_ANCHOR, RESPAWNANCHOR_ANCHORS_PER_CRAFT } from '../../src/lib/respawnanchor.mjs'

test('junk: a non-finite glowstone count refuses with junk-input', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: 6, glowstoneCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.anchorYield, 0)
})

test('junk: a non-finite crying count refuses (all legs policed)', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: Number.POSITIVE_INFINITY, glowstoneCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideRespawnAnchor({ anchorCount: false, cryingCount: 6, glowstoneCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: 6, glowstoneCount: '3' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - crying-short defers, never poisons', () => {
  const v = decideRespawnAnchor({ anchorCount: -1, cryingCount: -6, glowstoneCount: -3 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'crying-short')
  assert.equal(v.cryingLeft, 0)
  assert.equal(v.anchors, 0)
})

test('keep-gate-first: the anchor held keeps even a rich pocket (the nether bed never doubles)', () => {
  const v = decideRespawnAnchor({ anchorCount: 1, cryingCount: 12, glowstoneCount: 6 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'anchor-held')
  assert.equal(v.crafts, 0)
  assert.equal(v.cryingLeft, 12, 'the crying rides cryingLeft untouched')
  assert.equal(v.glowstoneLeft, 6, 'the glowstone rides glowstoneLeft untouched')
  assert.equal(v.anchors, 1)
})

test('vanilla pin: the crying obsidian cost one anchor carries is exactly 6', () => {
  assert.equal(RESPAWNANCHOR_CRYING_PER_ANCHOR, 6)
})

test('vanilla pin: the glowstone cost and anchor yield are exactly 3 and 1', () => {
  assert.equal(RESPAWNANCHOR_GLOWSTONE_PER_ANCHOR, 3)
  assert.equal(RESPAWNANCHOR_ANCHORS_PER_CRAFT, 1)
})

test('exact vanilla craft: six crying and three glowstone price one bed', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: 6, glowstoneCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'crying-glowstone-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.anchorYield, 1)
  assert.equal(v.cryingLeft, 0)
  assert.equal(v.glowstoneLeft, 0)
  assert.equal(v.anchors, 0)
})

test('the min law: 12 crying + 6 glowstone -> 2 anchors, both leftovers zero', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: 12, glowstoneCount: 6 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.anchorYield, 2)
  assert.equal(v.cryingLeft, 0)
  assert.equal(v.glowstoneLeft, 0)
})

test('no cap: a rich pocket prices every anchor it affords', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: 18, glowstoneCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.anchorYield, 3)
  assert.equal(v.cryingLeft, 0)
})

test('defer: crying-short names the binding leg first (five crying the barter re-tasks)', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: 5, glowstoneCount: 3 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'crying-short')
  assert.equal(v.crafts, 0)
  assert.equal(v.cryingLeft, 5, 'the short side never lies about the pocket')
  assert.equal(v.glowstoneLeft, 3, 'the glowstone rides untouched')
})

test('defer: glowstone-short names the crossing harvest re-task (the crying rides named)', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: 6, glowstoneCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'glowstone-short')
  assert.equal(v.cryingLeft, 6)
  assert.equal(v.glowstoneLeft, 2)
})

test('floor law: a fractional census floors to the honest integer (the remainder named)', () => {
  const v = decideRespawnAnchor({ anchorCount: 0, cryingCount: 6.5, glowstoneCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.cryingLeft, 0.5, 'the half crying the binary-exact leftover')
})

test('pure read: the word mutates nothing - two calls read the same pocket', () => {
  const pocket = { anchorCount: 0, cryingCount: 12, glowstoneCount: 3 }
  const a = decideRespawnAnchor(pocket)
  const b = decideRespawnAnchor(pocket)
  assert.deepEqual(a, b)
  assert.equal(pocket.cryingCount, 12)
  assert.equal(pocket.glowstoneCount, 3)
})
