// (v0.976.386) Armor care decision for the bot fleet - the toolcare word's
// own sibling lane.
//
// THE PROBLEM: the fleet's bots fight drowned, hounds, creepers and skeletons
// with ZERO armor decisions - the death census prices the tolls (the mob and
// water classes ride their own ledgers), but no module decides the ARMOR
// word: a piece worn to the fraction floor, a dead piece with a spare in the
// pocket, a repair the material can pay. The hands re-deriving this by hand
// invites the same split-brain the toolcare word cured for picks: two arms
// pulling the same piece, or a bot deferring on armor already at zero.
//
// THE FIX: decideArmorAction() maps ONE armor piece's state to ONE action
// word with ONE reason - the same five-word vocabulary the toolcare word
// speaks ('replace'/'refuse'/'repair'/'defer'/'keep'), pure arithmetic, no
// mineflayer import, fully deterministic:
//   'replace' - the piece is dead (durability <= 0) and a spare exists
//   'refuse'  - the piece is dead and no spare (the honest dead end)
//   'repair'  - durability at/below the repair threshold AND enough material
//   'defer'   - at/below the threshold but the material is short (keep going)
//   'keep'    - healthy, above the threshold
// Junk inputs never throw: they return a refuse with the junk-input reason so
// a caller bug degrades into a log line, not a crash loop. durability above
// maxDurability clamps to max (an over-report must not hide a worn piece).

/**
 * Decide what one bot should do with one armor piece.
 *
 * @param {object} [opts]
 * @param {number} [opts.durability]   current durability (0..maxDurability)
 * @param {number} [opts.maxDurability] the piece's max durability (> 0)
 * @param {number} [opts.spareCount=0] spare pieces of the same kind on hand
 * @param {number} [opts.materialCount=0] repair material units on hand
 * @param {number} [opts.repairUnitCost=1] material units one repair consumes
 * @param {number} [opts.repairAt=0.15] repair when durability/max <= this
 * @returns {{action: 'repair'|'replace'|'defer'|'refuse'|'keep', reason: string, fraction: number}}
 */
export function decideArmorAction (opts = {}) {
  const durability = opts.durability
  const maxDurability = opts.maxDurability
  const spareCount = Number.isFinite(opts.spareCount) ? opts.spareCount : 0
  const materialCount = Number.isFinite(opts.materialCount) ? opts.materialCount : 0
  const repairUnitCost = Number.isFinite(opts.repairUnitCost) && opts.repairUnitCost > 0
    ? opts.repairUnitCost
    : 1
  const repairAt = Number.isFinite(opts.repairAt) && opts.repairAt >= 0 && opts.repairAt <= 1
    ? opts.repairAt
    : 0.15

  // The junk battery: a non-finite durability or a non-positive max is a
  // caller bug - refuse honestly instead of throwing into the fleet loop.
  if (!Number.isFinite(durability) || !Number.isFinite(maxDurability) || maxDurability <= 0) {
    return { action: 'refuse', reason: 'junk-input', fraction: 0 }
  }

  const clamped = Math.max(0, Math.min(durability, maxDurability))
  const fraction = clamped / maxDurability

  if (clamped <= 0) {
    return spareCount >= 1
      ? { action: 'replace', reason: 'broken-spare', fraction }
      : { action: 'refuse', reason: 'broken-no-spare', fraction }
  }

  if (fraction <= repairAt) {
    return materialCount >= repairUnitCost
      ? { action: 'repair', reason: 'worn-repairable', fraction }
      : { action: 'defer', reason: 'worn-no-material', fraction }
  }

  return { action: 'keep', reason: 'healthy', fraction }
}

// (v0.976.386) THE ARMOR BRIDGE - one bot's pockets become one armor state.
// THE PROBLEM: mineflayer keeps the worn pieces in the window's armor slots
// and the spares in the pockets; the armor word wants ONE honest reading of
// that shape so the log's armor story never splits brains. THE FIX:
// pickArmorStateFromInventory() reduces an items() array to the
// decideArmorAction() input - the WORST-FRACTION worn piece is the one the
// word prices (the piece closest to its own zero, the same fraction the
// decision vocabulary speaks), the same-name pocket copies are its spares,
// the piece's repair material sums by exact suffix match. No worn piece seen
// (or junk input) returns the BARE shape - the fleet wears nothing yet, the
// lane stays silent instead of spamming the face with junk-refuse noise the
// pockets cannot pay for, and the pocket-only story belongs to the equipping
// lane (a later seat), not the care word.
export const ARMORCARE_SLOTS = ['head', 'chest', 'legs', 'feet']
export const ARMORCARE_SLOT_IDS = { 5: 'head', 6: 'chest', 7: 'legs', 8: 'feet' }
export const ARMORCARE_MAXES = {
  leather_helmet: 55, leather_chestplate: 80, leather_leggings: 75, leather_boots: 65,
  golden_helmet: 77, golden_chestplate: 112, golden_leggings: 105, golden_boots: 91,
  chainmail_helmet: 165, chainmail_chestplate: 240, chainmail_leggings: 225, chainmail_boots: 195,
  iron_helmet: 165, iron_chestplate: 240, iron_leggings: 225, iron_boots: 195,
  diamond_helmet: 363, diamond_chestplate: 528, diamond_leggings: 495, diamond_boots: 429,
  netherite_helmet: 407, netherite_chestplate: 592, netherite_leggings: 555, netherite_boots: 481
}
const ARMORCARE_MATERIALS = {
  leather: ['leather'],
  golden: ['gold_ingot'],
  chainmail: ['iron_ingot'],
  iron: ['iron_ingot'],
  diamond: ['diamond'],
  netherite: ['netherite_ingot']
}

// (v0.976.387) THE ARMORCRAFT WORD - the armor economy's own consult.
// THE PROBLEM: the armorcare word prices WORN pieces, but the fleet holds
// NONE - no arm crafts armor, the pockets stay bare, the word never speaks
// and the lane reads dead. THE FIX: decideArmorCraft() prices the ARMOR
// POVERTY itself - one bot's iron ingots and held pieces map to ONE craft
// word (the vanilla costs, the armor-point order chest/legs/feet/head), so
// every face shows the armor-economy gap the craft seat will one day pay:
//   'craft'  - the next piece in the order is affordable (piece named)
//   'defer'  - ingots short of the cheapest piece (the honest shortage)
//   'keep'   - pieces already held (the care lane owns the worn story)
//   'refuse' - junk input (never throws into the fleet loop)
// Consult only - the word never crafts; the craft seat owns the hands later.

/**
 * Decide whether one bot's iron economy earns a craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand
 * @param {number} [opts.armorPiecesHeld=0] armor pieces already held (any slot)
 * @param {number} [opts.craftAt=4] minimum ingots the word prices at all
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, piece: string|null, cost: number}}
 */
export function decideArmorCraft (opts = {}) {
  const ingots = Number.isFinite(opts.ironIngotCount) ? Math.max(0, opts.ironIngotCount) : 0
  const pieces = Number.isFinite(opts.armorPiecesHeld) ? Math.max(0, opts.armorPiecesHeld) : 0
  const craftAt = Number.isFinite(opts.craftAt) && opts.craftAt >= 0 ? opts.craftAt : 4
  if (!Number.isFinite(opts.ironIngotCount) || !Number.isFinite(opts.armorPiecesHeld)) {
    return { action: 'refuse', reason: 'junk-input', piece: null, cost: 0 }
  }
  if (pieces >= 1) {
    return { action: 'keep', reason: 'pieces-held', piece: null, cost: 0 }
  }
  // the vanilla iron costs, the armor-point order the chest opens
  const ORDER = [
    { piece: 'iron_chestplate', cost: 8 },
    { piece: 'iron_leggings', cost: 7 },
    { piece: 'iron_boots', cost: 4 },
    { piece: 'iron_helmet', cost: 5 }
  ]
  for (const step of ORDER) {
    if (ingots >= step.cost) {
      return { action: 'craft', reason: 'ingots-affordable', piece: step.piece, cost: step.cost }
    }
  }
  return { action: 'defer', reason: 'ingots-short', piece: null, cost: craftAt }
}

/**
 * Reduce a mineflayer inventory items() array to a decideArmorAction() input.
 *
 * @param {Array<{name?: string, count?: number, slot?: number, durabilityUsed?: number}>|null} items
 * @param {object} [opts]
 * @param {object} [opts.maxes]      per-piece max durability (name -> max)
 * @param {object} [opts.materials]  per-material repair material name suffixes
 * @returns {{bare: boolean, piece: string|null, slotClass: string|null, durability: number, maxDurability: number, spareCount: number, materialCount: number}}
 */
export function pickArmorStateFromInventory (items, opts = {}) {
  const maxes = opts.maxes ?? ARMORCARE_MAXES
  const materials = opts.materials ?? ARMORCARE_MATERIALS
  const bare = { bare: true, piece: null, slotClass: null, durability: NaN, maxDurability: 0, spareCount: 0, materialCount: 0 }
  if (!Array.isArray(items)) return bare
  const worn = []
  const pocket = []
  for (const it of items) {
    if (!it || typeof it.name !== 'string') continue
    const max = Number.isFinite(maxes[it.name]) && maxes[it.name] > 0 ? maxes[it.name] : 0
    if (max <= 0) continue // not a known armor piece - the lane never guesses
    const used = Number.isFinite(it.durabilityUsed) ? it.durabilityUsed : 0
    const slot = Number.isFinite(it.slot) ? it.slot : null
    const rec = { piece: it.name, used, max, slot }
    if (slot !== null && ARMORCARE_SLOT_IDS[slot]) worn.push(rec)
    else pocket.push(rec)
  }
  if (worn.length === 0) return bare
  const frac = r => Math.max(0, Math.min(1, (r.max - r.used) / r.max))
  const worst = worn.reduce((a, b) => (frac(b) < frac(a) ? b : a))
  const wanted = materials[String(worst.piece).split('_')[0]] ?? []
  const materialCount = items.reduce((a, it) => {
    if (!it || typeof it.name !== 'string') return a
    if (!wanted.some(w => it.name.endsWith(w))) return a
    return a + (Number.isFinite(it.count) ? it.count : 0)
  }, 0)
  return {
    bare: false,
    piece: worst.piece,
    slotClass: ARMORCARE_SLOT_IDS[worst.slot],
    durability: Math.max(0, worst.max - worst.used),
    maxDurability: worst.max,
    spareCount: pocket.filter(p => p.piece === worst.piece).length,
    materialCount
  }
}
