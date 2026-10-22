// (v0.976.386) armorcare suite - the toolcare word's sibling lane priced.
// The decide core re-speaks the five-word vocabulary (replace/refuse/repair/
// defer/keep); the bridge reduces one bot's pockets to the worst-fraction
// worn piece. 12 precise tests, no mineflayer import - node --test single
// file, the full unit leg the CI speaks.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideArmorAction, pickArmorStateFromInventory, ARMORCARE_MAXES, ARMORCARE_SLOTS } from '../../src/lib/armorcare.mjs'

test('dead piece with a spare replaces', () => {
  const r = decideArmorAction({ durability: 0, maxDurability: 240, spareCount: 1 })
  assert.equal(r.action, 'replace')
  assert.equal(r.reason, 'broken-spare')
  assert.equal(r.fraction, 0)
})

test('dead piece without a spare refuses honestly', () => {
  const r = decideArmorAction({ durability: 0, maxDurability: 165, spareCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'broken-no-spare')
})

test('worn piece with material repairs', () => {
  // iron_chestplate 240 max, 12 left = 5% <= 0.15, 2 iron_ingot >= 1 unit
  const r = decideArmorAction({ durability: 12, maxDurability: 240, materialCount: 2 })
  assert.equal(r.action, 'repair')
  assert.equal(r.reason, 'worn-repairable')
})

test('worn piece without material defers (keeps going)', () => {
  const r = decideArmorAction({ durability: 10, maxDurability: 195, materialCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'worn-no-material')
})

test('healthy piece keeps silent', () => {
  const r = decideArmorAction({ durability: 400, maxDurability: 528 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'healthy')
})

test('junk inputs refuse without throwing', () => {
  assert.equal(decideArmorAction({ durability: NaN, maxDurability: 240 }).reason, 'junk-input')
  assert.equal(decideArmorAction({ durability: 100, maxDurability: 0 }).action, 'refuse')
  assert.equal(decideArmorAction({}).action, 'refuse')
})

test('over-reported durability clamps to max', () => {
  const r = decideArmorAction({ durability: 999, maxDurability: 55 })
  assert.equal(r.action, 'keep')
  assert.equal(r.fraction, 1)
})

test('bridge: non-array input is bare', () => {
  assert.equal(pickArmorStateFromInventory(null).bare, true)
  assert.equal(pickArmorStateFromInventory('junk').bare, true)
})

test('bridge: pockets without worn pieces stay bare (silent lane)', () => {
  const items = [
    { name: 'iron_helmet', count: 1, durabilityUsed: 0, slot: 9 },
    { name: 'cobblestone', count: 64, slot: 10 }
  ]
  const st = pickArmorStateFromInventory(items)
  assert.equal(st.bare, true)
  assert.equal(st.piece, null)
})

test('bridge: worst-fraction worn piece drives the state', () => {
  const items = [
    { name: 'iron_helmet', count: 1, durabilityUsed: 150, slot: 5 },  // 15/165 = 9.1%
    { name: 'iron_chestplate', count: 1, durabilityUsed: 100, slot: 6 } // 140/240 = 58.3%
  ]
  const st = pickArmorStateFromInventory(items)
  assert.equal(st.bare, false)
  assert.equal(st.piece, 'iron_helmet')
  assert.equal(st.slotClass, 'head')
  assert.equal(st.durability, 15)
  assert.equal(st.maxDurability, 165)
})

test('bridge: same-name pocket copies are spares, others are not', () => {
  const items = [
    { name: 'iron_boots', count: 1, durabilityUsed: 190, slot: 8 }, // 5/195
    { name: 'iron_boots', count: 1, durabilityUsed: 0, slot: 9 },   // spare
    { name: 'diamond_helmet', count: 1, durabilityUsed: 0, slot: 10 } // other piece
  ]
  const st = pickArmorStateFromInventory(items)
  assert.equal(st.piece, 'iron_boots')
  assert.equal(st.slotClass, 'feet')
  assert.equal(st.spareCount, 1)
})

test('bridge: repair material sums by the piece prefix', () => {
  const items = [
    { name: 'iron_leggings', count: 1, durabilityUsed: 220, slot: 7 }, // 5/225
    { name: 'iron_ingot', count: 3, slot: 9 },
    { name: 'iron_ingot', count: 2, slot: 10 },
    { name: 'gold_ingot', count: 7, slot: 11 }
  ]
  const st = pickArmorStateFromInventory(items)
  assert.equal(st.piece, 'iron_leggings')
  assert.equal(st.materialCount, 5)
})

test('the armor table is honest: every slot class holds all six materials', () => {
  const mats = ['leather', 'golden', 'chainmail', 'iron', 'diamond', 'netherite']
  const suffix = { head: 'helmet', chest: 'chestplate', legs: 'leggings', feet: 'boots' }
  for (const cls of ARMORCARE_SLOTS) {
    for (const m of mats) {
      const piece = `${m}_${suffix[cls]}`
      assert.ok(Number.isFinite(ARMORCARE_MAXES[piece]) && ARMORCARE_MAXES[piece] > 0, piece)
    }
  }
})
