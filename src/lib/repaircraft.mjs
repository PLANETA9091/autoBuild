// (v0.976.448) Repair craft decision for the bot fleet - the station gate.
//
// THE PROBLEM: the toolcare word prices the WEAR (v0.976.377, the care
// lane's own) and speaks 'repair' when the material rides the pocket -
// but the ACT never asked for its own STATION, and before the anvilcraft
// word (v0.976.446) no bot could even hold one. The vanilla repair act
// runs at the anvil: the ingot unit trades 25% of the bar back, the
// station itself is never consumed. The toolcare word's 'repair' with
// anvil zero is the split-brain the family hates - the intent priced,
// the act impossible, the loop idles on a worn hand. THE FIX:
// decideRepairCraft() is the GATE between the toolcare word's intent and
// the anvil act - one pocket map to ONE word with ONE reason:
//   'keep'   - no worn tool (the toolcare word owns the healthy story)
//   'repair' - worn >= 1 AND the anvil station held AND the material
//              affordable (the repairs the pocket affords - min(worn,
//              floor(material/cost)), the leftover of BOTH legs named
//              never rounded never capped)
//   'defer'  - 'anvil-short' the station leg (the anvilcraft word
//              re-tasks, its own chain) / 'material-short' the ingot
//              leg (the smelt chain re-tasks, the furnacecraft yield)
//   'refuse' - junk input (never throws into the fleet loop)
// THE STATION LAW: the anvil IS a singleton station - the census rides
// exact 'anvil' and nothing else (the anvilcraft word's own law), the
// station is REQUIRED but NEVER consumed: every return shape carries
// the anvil count through untouched, a repair spends ingots not
// benches. THE WEAR LAW: the worn census rides the toolcare bridge's
// own reading (pickStateFromInventory -> the fraction at/below the
// repair threshold = one worn tool), the word never re-derives the
// tier table - the care lane owns the wear's own story, this word owns
// the act's own gate. Junk inputs never throw: they return a refuse
// with the junk-input reason so a caller bug degrades into a log line,
// not a crash loop. Negative counts floor to zero (a lying census must
// not poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a worn-rich pocket prices every repair
// its material affords, an honest longer list never clamped.

// the singleton station one repair act requires (held, never consumed)
export const REPAIRCRAFT_ANVILS_REQUIRED = 1
// the vanilla anvil unit one repair consumes (1 unit = 25% of the bar)
export const REPAIRCRAFT_MATERIAL_PER_REPAIR = 1

/**
 * Decide whether one bot's pocket earns the repair act at its station.
 *
 * @param {object} [opts]
 * @param {number} [opts.wornCount=0]      worn tools at/below the repair
 *                                         threshold (the toolcare bridge's
 *                                         own reading)
 * @param {number} [opts.anvilCount=0]     anvil stations held (the exact
 *                                         'anvil' name, the singleton law)
 * @param {number} [opts.materialCount=0]  repair material units on hand
 *                                         (the tier's own material name)
 * @param {number} [opts.materialPerRepair] material units one repair
 *                                         consumes (default the vanilla 1)
 * @returns {{action: 'repair'|'defer'|'refuse'|'keep', reason: string, repairs: number, materialLeft: number, anvilsLeft: number, wornLeft: number}}
 */
export function decideRepairCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['wornCount', 'anvilCount', 'materialCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', repairs: 0, materialLeft: 0, anvilsLeft: 0, wornLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const worn = floor0(opts.wornCount)
  const anvils = floor0(opts.anvilCount)
  const material = floor0(opts.materialCount)
  const cost = Number.isFinite(opts.materialPerRepair) && opts.materialPerRepair > 0
    ? opts.materialPerRepair
    : REPAIRCRAFT_MATERIAL_PER_REPAIR
  // no worn tool: the toolcare word owns the healthy story - the gate
  // stays silent (the pieces-held law's twin, the keep gate).
  if (worn < 1) {
    return { action: 'keep', reason: 'tool-healthy', repairs: 0, materialLeft: material, anvilsLeft: anvils, wornLeft: worn }
  }
  // the act's own arithmetic: the station first, the material second -
  // every repair spends one material unit at the bench, the anvil rides
  // through untouched (the station never consumed), the word never
  // rounds the list into a lie and never caps the pocket.
  if (anvils >= REPAIRCRAFT_ANVILS_REQUIRED && material >= cost) {
    const repairs = Math.min(worn, Math.floor(material / cost))
    return {
      action: 'repair',
      reason: 'anvil-material-affordable',
      repairs,
      materialLeft: material - repairs * cost,
      anvilsLeft: anvils,
      wornLeft: worn - repairs
    }
  }
  // the honest shortage names the leg it lacks: the station leg first
  // (the anvilcraft word's own chain re-tasks), the material leg second
  // (the smelt chain's own yield re-tasks) - never a guessed repair
  if (anvils < REPAIRCRAFT_ANVILS_REQUIRED) {
    return { action: 'defer', reason: 'anvil-short', repairs: 0, materialLeft: material, anvilsLeft: anvils, wornLeft: worn }
  }
  return { action: 'defer', reason: 'material-short', repairs: 0, materialLeft: material, anvilsLeft: anvils, wornLeft: worn }
}
