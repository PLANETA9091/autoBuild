// Tests for the flintandsteelcraft word (src/lib/flintandsteelcraft.mjs).
// The fire lane's own word: the spark poverty priced - the iron
// economy's ninth leg (the pick, the armor, the shield, the shears,
// the bucket, the rail, the cart, the mouth, this word's spark). Pure
// arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideFlintAndSteelCraft, FLINTANDSTEELCRAFT_IRON_PER_CRAFT, FLINTANDSTEELCRAFT_FLINT_PER_CRAFT, FLINTANDSTEELCRAFT_TOOLS_PER_CRAFT } from '../../src/lib/flintandsteelcraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: Number.NaN, flintCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.toolsYield, 0)
})

test('junk: a boolean flint count is a flag, never a number (numeric lane law)', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: 1, flintCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string held count refuses', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: '1', ironIngotCount: 1, flintCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: -1, ironIngotCount: -1, flintCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironLeft, 0)
  assert.equal(v.flintLeft, 0)
})

test('keep gate first: a spark already held keeps, the fire lane owns that story', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 1, ironIngotCount: 10, flintCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'flint-and-steel-held')
  assert.equal(v.ironLeft, 10)
  assert.equal(v.flintLeft, 5)
  assert.equal(v.tools, 1)
})

test('exactly one iron and one flint: one honest craft, zero leftovers', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: 1, flintCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-flint-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.toolsYield, 1)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.flintLeft, 0)
})

test('the shorter leg prices the yield: ten iron but one flint -> one craft', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: 10, flintCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.toolsYield, 1)
  assert.equal(v.ironLeft, 9)
  assert.equal(v.flintLeft, 0)
})

test('seven iron and three flint: three crafts + the iron remainder named', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: 7, flintCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.toolsYield, 3)
  assert.equal(v.ironLeft, 4)
  assert.equal(v.flintLeft, 0)
})

test('no cap: sixty iron and ten flint price every craft the pocket affords', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: 60, flintCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.toolsYield, 10)
  assert.equal(v.ironLeft, 50)
  assert.equal(v.flintLeft, 0)
})

test('iron-short defers, the word\'s own base metal named first (the smelt trip)', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: 0, flintCount: 10 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('flint-short defers, the gravel trip\'s own stone named', () => {
  const v = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: 10, flintCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'flint-short')
})

test('empty pocket defers honestly (iron-short the first named leg)', () => {
  const v = decideFlintAndSteelCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(FLINTANDSTEELCRAFT_IRON_PER_CRAFT, 1)
  assert.equal(FLINTANDSTEELCRAFT_FLINT_PER_CRAFT, 1)
  assert.equal(FLINTANDSTEELCRAFT_TOOLS_PER_CRAFT, 1)
})

test('the consumer law: the spark leg never gates on another lane face', () => {
  // a spark-held pocket is the keep lane's story even leg-rich; a
  // spark-poor leg-rich pocket crafts regardless of any other lane's
  // census shape - and the arrow lane (the fletcher's own story, a word
  // not yet priced) never gates here
  const keep = decideFlintAndSteelCraft({ flintAndSteelCount: 2, ironIngotCount: 60, flintCount: 10 })
  assert.equal(keep.action, 'keep')
  const craft = decideFlintAndSteelCraft({ flintAndSteelCount: 0, ironIngotCount: 60, flintCount: 10 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { flintAndSteelCount: 0, ironIngotCount: 7, flintCount: 3 }
  decideFlintAndSteelCraft(opts)
  assert.deepEqual(opts, { flintAndSteelCount: 0, ironIngotCount: 7, flintCount: 3 })
})
