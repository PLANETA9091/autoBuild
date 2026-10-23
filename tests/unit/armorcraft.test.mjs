import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.420) THE ARMORCRAFT HANDS - the .387 word's craft seat's pins.
import { armorCraftCheck, craftArmorPiece, ARMORCRAFT_PICK_FLOOR } from '../../src/lib/armorcraft.mjs'

// the fake bot the inventory shape carries (the tools.mjs inventoryItems law)
const fakeBot = (items) => ({ inventory: { items: () => items } })
const it = (name, count = 1) => ({ name, count })
const ingots = (n) => [it('iron_ingot', n)]

test('the junk bot battery prices the refuse (the census the data cannot carry, never a throw)', () => {
  for (const junk of [null, undefined, 42, 'bot', {}, { inventory: null }, { inventory: {} }, { inventory: { items: 'no' } }]) {
    const v = armorCraftCheck(junk)
    assert.equal(v.action, 'refuse')
    assert.equal(v.reason, 'inventory-unreadable')
    assert.equal(v.piece, null)
  }
})

test('the throwing inventory prices the refuse (the catch the loop rides on)', () => {
  const bot = { inventory: { items: () => { throw new Error('detached') } } }
  const v = armorCraftCheck(bot)
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'inventory-unreadable')
})

test('the reserve law stands down below the iron floor (the ingots are the tool lane\'s)', () => {
  for (const pick of ['wooden_pickaxe', 'stone_pickaxe']) {
    const v = armorCraftCheck(fakeBot([...ingots(8), it(pick)]))
    assert.equal(v.action, 'defer')
    assert.equal(v.reason, 'tool-reserve')
    assert.equal(v.piece, null)
    assert.equal(v.ingots, 8)
    assert.equal(v.pickTier, pick === 'wooden_pickaxe' ? 0 : 1)
  }
})

test('the iron pick opens the craft gate (the word\'s own verdict delegated: chestplate first)', () => {
  const v = armorCraftCheck(fakeBot([...ingots(9), it('iron_pickaxe')]))
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'ingots-affordable')
  assert.equal(v.piece, 'iron_chestplate')
  assert.equal(v.cost, 8)
  assert.equal(v.pickTier, 2)
  assert.equal(v.ingots, 9)
})

test('pieces held keep the word seated (the care lane owns the worn story)', () => {
  const v = armorCraftCheck(fakeBot([...ingots(9), it('iron_pickaxe'), it('iron_helmet', 1)]))
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'pieces-held')
  assert.equal(v.pieces, 1)
})

test('ingots short defer honestly (the iron pick, the pockets lean)', () => {
  const v = armorCraftCheck(fakeBot([...ingots(3), it('iron_pickaxe')]))
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'ingots-short')
})

test('the census honesty: junk entries skipped, stacks summed, non-armor transparent', () => {
  const v = armorCraftCheck(fakeBot([
    null, undefined, 42, it('no-count-iron_ingot'),
    it('iron_ingot', 2), it('iron_ingot', 3),
    it('iron_boots', 2), it('cobblestone', 64), it('oak_planks', 12),
    it('iron_pickaxe')
  ]))
  assert.equal(v.ingots, 5)
  assert.equal(v.pieces, 2)
  // the pieces held gate rides REAL census data - any piece keeps the word
  // seated (the care lane owns the worn story, the .387 law's own)
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'pieces-held')
})

test('the boots named at five ingots (the word\'s own order law: chest, legs, boots, head)', () => {
  // 5 ingots + zero pieces + the iron pick: chestplate 8 no, leggings 7 no,
  // boots 4 YES - the cheapest piece the pocket affords, never a guess
  const v = armorCraftCheck(fakeBot([...ingots(5), it('iron_pickaxe')]))
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'ingots-affordable')
  assert.equal(v.piece, 'iron_boots')
  assert.equal(v.cost, 4)
})

test('the floor rides the PICK_TIERS ceiling (iron is the index the reserve names)', () => {
  assert.equal(ARMORCRAFT_PICK_FLOOR, 2)
})

test('the pure read mutates nothing (the inventory is the caller\'s own)', () => {
  const items = [...ingots(9), it('iron_pickaxe'), it('diamond_helmet')]
  const before = JSON.stringify(items)
  armorCraftCheck(fakeBot(items))
  assert.equal(JSON.stringify(items), before)
})

// ---- the hands ----

test('the hands never fire blind (a non-craft verdict is a skip, no table walked)', async () => {
  let tableWalked = false
  const r = await craftArmorPiece(fakeBot([]), {
    deps: {
      check: () => ({ action: 'defer', reason: 'tool-reserve', piece: null }),
      placeTable: async () => { tableWalked = true; return {} }
    }
  })
  assert.equal(r.ok, false)
  assert.equal(r.reason, 'tool-reserve')
  assert.equal(r.piece, null)
  assert.equal(tableWalked, false)
})

test('the hands craft the named piece and verify the count rose (the settle-then-count law)', async () => {
  const holds = { iron_chestplate: 0 }
  const r = await craftArmorPiece(fakeBot(ingots(9)), {
    log: () => {},
    deps: {
      check: () => ({ action: 'craft', reason: 'ingots-affordable', piece: 'iron_chestplate', cost: 8 }),
      placeTable: async () => ({ type: 'minecraft:crafting_table' }),
      craftUntil: async (bot, name, o) => { holds[name] += o.want; return true },
      countItem: (bot, name) => holds[name]
    }
  })
  assert.equal(r.ok, true)
  assert.equal(r.piece, 'iron_chestplate')
  assert.equal(r.count, 1)
})

test('the hands name the no-table skip (the honest exit the placeTable null prices)', async () => {
  const r = await craftArmorPiece(fakeBot(ingots(9)), {
    deps: {
      check: () => ({ action: 'craft', reason: 'ingots-affordable', piece: 'iron_leggings', cost: 7 }),
      placeTable: async () => null
    }
  })
  assert.equal(r.ok, false)
  assert.equal(r.piece, 'iron_leggings')
  assert.equal(r.reason, 'no table')
})

test('the hands name the non-landing (a resolved click dance with no landing is not a craft)', async () => {
  const r = await craftArmorPiece(fakeBot(ingots(9)), {
    deps: {
      check: () => ({ action: 'craft', reason: 'ingots-affordable', piece: 'iron_boots', cost: 4 }),
      placeTable: async () => ({}),
      craftUntil: async () => false,
      countItem: () => 0
    }
  })
  assert.equal(r.ok, false)
  assert.equal(r.reason, 'craft did not land')
})

test('the hands degrade a throwing check into the verdict (never throws into the loop)', async () => {
  const r = await craftArmorPiece(fakeBot(ingots(9)), {
    deps: { check: () => { throw new Error('census exploded') } }
  })
  assert.equal(r.ok, false)
  assert.match(r.reason, /^error: census exploded$/)
  assert.equal(r.piece, null)
})

test('the hands refuse a shapeless verdict (a craft word without a piece names no craft)', async () => {
  const r = await craftArmorPiece(fakeBot(ingots(9)), {
    deps: { check: () => ({ action: 'craft', reason: 'ingots-affordable', piece: '' }) }
  })
  assert.equal(r.ok, false)
  assert.equal(r.reason, 'no verdict')
})
