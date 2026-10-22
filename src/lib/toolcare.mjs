// (v0.976.377) Tool care decision for the bot fleet.
//
// THE PROBLEM: a mining bot swings until the tool dies mid-action - the pick
// snaps with a full inventory and no plan, the bot idles on a dead hand while
// the fleet's lease burns. The fleet already tracks durability counts, but
// nothing decides BETWEEN the four honest moves: repair now (if material is
// on hand), swap to a spare (if one exists), defer (worn but no material -
// keep mining carefully), or refuse (dead with no spare - the caller must
// report and re-task). Each caller re-deriving this by hand invites the
// classic split-brain: two bots repair the same last ingot, or a bot defers
// on a tool that is already at zero.
//
// THE FIX: decideToolAction() maps ONE tool's state to ONE action word with
// ONE reason - pure arithmetic, no mineflayer import, fully deterministic:
//   'replace' - the tool is dead (durability <= 0) and a spare exists
//   'refuse'  - the tool is dead and no spare (the honest dead end)
//   'repair'  - durability at/below the repair threshold AND enough material
//   'defer'   - at/below the threshold but the material is short (keep going)
//   'keep'    - healthy, above the threshold
// Junk inputs never throw: they return a refuse with the junk-input reason so
// a caller bug degrades into a log line, not a crash loop. durability above
// maxDurability clamps to max (an over-report must not hide a worn tool).

/**
 * Decide what one bot should do with one tool.
 *
 * @param {object} [opts]
 * @param {number} [opts.durability]   current durability (0..maxDurability)
 * @param {number} [opts.maxDurability] the tool's max durability (> 0)
 * @param {number} [opts.spareCount=0] spare tools of the same kind on hand
 * @param {number} [opts.materialCount=0] repair material units on hand
 * @param {number} [opts.repairUnitCost=1] material units one repair consumes
 * @param {number} [opts.repairAt=0.15] repair when durability/max <= this
 * @returns {{action: 'repair'|'replace'|'defer'|'refuse'|'keep', reason: string, fraction: number}}
 */
export function decideToolAction (opts = {}) {
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

// (v0.976.380) THE INVENTORY BRIDGE - one bot's pockets become one tool state.
// THE PROBLEM: the fleet's tool arms (upgrade/spare/recovery) each re-derive
// the pick's worn-ness from raw inventory shapes; the toolcare word wants ONE
// honest reading of the SAME state so the log's tool story never splits
// brains. THE FIX: pickStateFromInventory() reduces an items() array to the
// decideToolAction() input - the BEST tier held is the working tool, the
// LEAST-worn copy of it is the one the hands keep, the rest are spares, the
// tier's repair material sums by exact name match. No pickaxe held (or junk
// input) returns the junk shape - the caller's recovery arm owns the pickless
// story, the word refuses without throwing, the loop never dies.
export const TOOLCARE_TIERS = ['wooden_pickaxe', 'stone_pickaxe', 'iron_pickaxe']
export const TOOLCARE_MAXES = { wooden_pickaxe: 59, stone_pickaxe: 131, iron_pickaxe: 250 }
const TOOLCARE_MATERIALS = {
  wooden_pickaxe: ['_planks'],
  stone_pickaxe: ['cobblestone', 'cobbled_deepslate'],
  iron_pickaxe: ['iron_ingot']
}

/**
 * Reduce a mineflayer inventory items() array to a decideToolAction() input.
 *
 * @param {Array<{name?: string, count?: number, durabilityUsed?: number}>|null} items
 * @param {object} [opts]
 * @param {string[]} [opts.tiers]    pickaxe tier names, worst to best
 * @param {object} [opts.maxes]      per-tier max durability
 * @param {object} [opts.materials]  per-tier repair material name suffixes
 * @returns {{durability: number, maxDurability: number, spareCount: number, materialCount: number}}
 */
export function pickStateFromInventory (items, opts = {}) {
  const tiers = opts.tiers ?? TOOLCARE_TIERS
  const maxes = opts.maxes ?? TOOLCARE_MAXES
  const materials = opts.materials ?? TOOLCARE_MATERIALS
  const junk = { durability: NaN, maxDurability: 0, spareCount: 0, materialCount: 0 }
  if (!Array.isArray(items)) return junk
  const held = new Map()
  for (const it of items) {
    if (!it || typeof it.name !== 'string') continue
    if (!tiers.includes(it.name)) continue
    const used = Number.isFinite(it.durabilityUsed) ? it.durabilityUsed : 0
    const list = held.get(it.name) ?? []
    list.push(used)
    held.set(it.name, list)
  }
  const best = [...tiers].reverse().find(t => held.has(t))
  if (!best) return junk
  const max = Number.isFinite(maxes[best]) && maxes[best] > 0 ? maxes[best] : 1
  const used = held.get(best)
  const active = Math.min(...used) // the least-worn copy is the one the hands keep
  const wanted = materials[best] ?? []
  const materialCount = items.reduce((a, it) => {
    if (!it || typeof it.name !== 'string') return a
    if (!wanted.some(w => it.name.endsWith(w))) return a
    return a + (Number.isFinite(it.count) ? it.count : 0)
  }, 0)
  return {
    durability: Math.max(0, max - active),
    maxDurability: max,
    spareCount: Math.max(0, used.length - 1),
    materialCount
  }
}
