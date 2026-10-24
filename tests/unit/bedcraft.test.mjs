// Tests for the bedcraft word (src/lib/bedcraft.mjs).
// The night lane's first word: the beds the pocket could craft.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideBedCraft, BEDCRAFT_WOOL_PER_BED, BEDCRAFT_PLANKS_PER_BED } from '../../src/lib/bedcraft.mjs'

test('junk: a non-finite wool count refuses with junk-input', () => {
  const v = decideBedCraft({ woolCount: Number.NaN, planksCount: 3, bedCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.crafts, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideBedCraft({ woolCount: 3, planksCount: true, bedCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideBedCraft({ woolCount: '3', planksCount: 3, bedCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideBedCraft({ woolCount: -3, planksCount: -3, bedCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wool-short')
  assert.equal(v.wool, 0)
  assert.equal(v.planks, 0)
})

test('keep: bed already held is the night lane story (the pieces-held twin)', () => {
  const v = decideBedCraft({ woolCount: 6, planksCount: 9, bedCount: 1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bed-held')
  assert.equal(v.beds, 1)
  assert.equal(v.crafts, 0)
})

test('keep gate first: one held bed beats a rich pocket (the downstream lane owns the story)', () => {
  const v = decideBedCraft({ woolCount: 30, planksCount: 30, bedCount: 1 })
  assert.equal(v.action, 'keep')
})

test('craft: three wool and three planks yield one bed (the vanilla constant)', () => {
  const v = decideBedCraft({ woolCount: 3, planksCount: 3, bedCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'wool-planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.bedsYield, 1)
  assert.equal(v.woolLeft, 0)
  assert.equal(v.plankLeft, 0)
})

test('craft: the shorter leg prices the yield (six wool, nine planks -> two beds)', () => {
  const v = decideBedCraft({ woolCount: 6, planksCount: 9, bedCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.bedsYield, 2)
  assert.equal(v.woolLeft, 0)
  assert.equal(v.plankLeft, 3)
})

test('no cap: a wool-plank-rich pocket prices every bed it affords', () => {
  const v = decideBedCraft({ woolCount: 30, planksCount: 30, bedCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.bedsYield, 10)
})

test('defer: wool-short names the sheep lane leg (planks rich, wool missing)', () => {
  const v = decideBedCraft({ woolCount: 0, planksCount: 9, bedCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wool-short')
  assert.equal(v.planks, 9)
})

test('defer: planks-short names the plankcraft chain leg (wool held, planks short)', () => {
  const v = decideBedCraft({ woolCount: 3, planksCount: 2, bedCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.wool, 3)
})

test('empty pocket: the wool leg named first (the fleet\'s first wool consumer)', () => {
  const v = decideBedCraft({ woolCount: 0, planksCount: 0, bedCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wool-short')
})

test('undefined default: a bare call defers honestly (no throw)', () => {
  const v = decideBedCraft()
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wool-short')
})

test('vanilla constants exported (3 wool + 3 planks per bed)', () => {
  assert.equal(BEDCRAFT_WOOL_PER_BED, 3)
  assert.equal(BEDCRAFT_PLANKS_PER_BED, 3)
})

test('no mutation: the read never writes its input', () => {
  const opts = { woolCount: 6, planksCount: 9, bedCount: 0 }
  decideBedCraft(opts)
  assert.deepEqual(opts, { woolCount: 6, planksCount: 9, bedCount: 0 })
})
