// Tests for the shieldcraft word (src/lib/shieldcraft.mjs).
// The mob-defense economy's first word: the shields the pocket could craft.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideShieldCraft, SHIELDCRAFT_IRON_PER_SHIELD, SHIELDCRAFT_PLANKS_PER_SHIELD } from '../../src/lib/shieldcraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideShieldCraft({ ironIngotCount: Number.NaN, planksCount: 6, shieldCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.crafts, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideShieldCraft({ ironIngotCount: 1, planksCount: true, shieldCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideShieldCraft({ ironIngotCount: '3', planksCount: 6, shieldCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideShieldCraft({ ironIngotCount: -2, planksCount: -12, shieldCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.iron, 0)
  assert.equal(v.planks, 0)
})

test('keep: shield already held is the defense lane story (the pieces-held twin)', () => {
  const v = decideShieldCraft({ ironIngotCount: 4, planksCount: 20, shieldCount: 1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'shield-held')
  assert.equal(v.shields, 1)
  assert.equal(v.crafts, 0)
})

test('keep gate first: one held shield beats a rich pocket (the downstream lane owns the story)', () => {
  const v = decideShieldCraft({ ironIngotCount: 30, planksCount: 60, shieldCount: 1 })
  assert.equal(v.action, 'keep')
})

test('craft: one iron and six planks yield one shield (the vanilla constant)', () => {
  const v = decideShieldCraft({ ironIngotCount: 1, planksCount: 6, shieldCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.shieldsYield, 1)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.plankLeft, 0)
})

test('craft: the shorter leg prices the yield (two iron, thirteen planks -> two shields, one plank left)', () => {
  const v = decideShieldCraft({ ironIngotCount: 2, planksCount: 13, shieldCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.shieldsYield, 2)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.plankLeft, 1)
})

test('no cap: an iron-plank-rich pocket prices every shield it affords', () => {
  const v = decideShieldCraft({ ironIngotCount: 10, planksCount: 60, shieldCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.shieldsYield, 10)
})

test('defer: iron-short names the smelt chain leg (planks rich, iron missing)', () => {
  const v = decideShieldCraft({ ironIngotCount: 0, planksCount: 12, shieldCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.planks, 12)
})

test('defer: planks-short names the plankcraft chain leg (iron held, planks short)', () => {
  const v = decideShieldCraft({ ironIngotCount: 1, planksCount: 5, shieldCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.iron, 1)
})

test('empty pocket: the rarer leg named first (iron-short, never a guessed craft)', () => {
  const v = decideShieldCraft({ ironIngotCount: 0, planksCount: 0, shieldCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('undefined default: a bare call defers honestly (no throw)', () => {
  const v = decideShieldCraft()
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('vanilla constants exported (1 iron + 6 planks per shield)', () => {
  assert.equal(SHIELDCRAFT_IRON_PER_SHIELD, 1)
  assert.equal(SHIELDCRAFT_PLANKS_PER_SHIELD, 6)
})

test('no mutation: the read never writes its input', () => {
  const opts = { ironIngotCount: 2, planksCount: 13, shieldCount: 0 }
  decideShieldCraft(opts)
  assert.deepEqual(opts, { ironIngotCount: 2, planksCount: 13, shieldCount: 0 })
})
