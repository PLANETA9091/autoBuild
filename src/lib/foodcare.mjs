// (v0.976.391) THE FOODCARE WORD - the care lane's third sibling.
// toolcare prices the worn hands, armorcare prices the worn arms, this word
// prices the HUNGER bar. Pure arithmetic over vanilla 26.2 hunger points -
// consult only, the word never eats; the eating act belongs to a future
// equip-style lane. Honest refusal on junk input (no throw), honest silence
// is the caller's business (the satisfied bot never speaks).

// Vanilla hunger points restored per item (the 26.2 food table's own numbers,
// saturation deliberately unpriced - the survival floor is the hunger bar).
export const FOODCARE_FOODS = {
  apple: 4,
  bread: 5,
  cooked_beef: 8,
  cooked_porkchop: 8,
  cooked_chicken: 6,
  cooked_mutton: 6,
  cooked_rabbit: 5,
  cooked_cod: 5,
  cooked_salmon: 6,
  baked_potato: 5,
  carrot: 3,
  potato: 1,
  beetroot: 1,
  melon_slice: 2,
  cookie: 2,
  pumpkin_pie: 8,
  golden_apple: 4,
  golden_carrot: 6,
  sweet_berries: 2,
  glow_berries: 2,
  dried_kelp: 1,
  tropical_fish: 1,
  mushroom_stew: 6,
  rabbit_stew: 10,
  beetroot_soup: 6,
  suspicious_stew: 6,
  honey_bottle: 6,
  rotten_flesh: 4,
  spider_eye: 2,
  poisonous_potato: 2,
  pufferfish: 1,
  chorus_fruit: 2
}

// The word: one decision per state read.
//   refuse/junk-input  - hunger non-finite or eatAt not a sane threshold
//   eat/hungry-eatable - hunger at/below the threshold AND the pockets pay
//   defer/hungry-no-food - hunger at/below the threshold, the pockets empty
//   keep/satisfied     - hunger above the threshold (the caller stays silent)
// hunger clamps to [0, 20] (the bar's own bounds), foodCount floors to >= 0.
export function decideFoodAction (opts = {}) {
  const { hunger, eatAt = 14 } = opts
  const foodCount = Number.isFinite(opts.foodCount) ? Math.max(0, Math.floor(opts.foodCount)) : 0
  if (!Number.isFinite(hunger) || !Number.isFinite(eatAt) || eatAt < 0 || eatAt > 20) {
    return { action: 'refuse', reason: 'junk-input', hunger: 0, foodCount }
  }
  const h = Math.max(0, Math.min(20, hunger))
  if (h <= eatAt && foodCount >= 1) return { action: 'eat', reason: 'hungry-eatable', hunger: h, foodCount }
  if (h <= eatAt) return { action: 'defer', reason: 'hungry-no-food', hunger: h, foodCount }
  return { action: 'keep', reason: 'satisfied', hunger: h, foodCount }
}

// The bridge: inventory items -> the food state the word prices.
// Accepts an items array or a zero-arg function returning one (the mineflayer
// shape); anything else reads as the honest empty. Non-food items never count.
// bestFood = the most nourishing edible the pockets hold (ties: first seen).
export function pickFoodStateFromInventory (items) {
  let list = []
  try {
    if (typeof items === 'function') list = items() ?? []
    else if (Array.isArray(items)) list = items
  } catch { list = [] }
  let foodCount = 0
  let bestFood = null
  let bestNutrition = 0
  for (const it of list) {
    if (!it || typeof it.name !== 'string') continue
    const nut = FOODCARE_FOODS[it.name]
    if (!Number.isFinite(nut)) continue
    const c = Number.isFinite(it.count) ? Math.max(0, Math.floor(it.count)) : 1
    foodCount += c
    if (c > 0 && nut > bestNutrition) { bestNutrition = nut; bestFood = it.name }
  }
  return { foodCount, bestFood, bestNutrition }
}
