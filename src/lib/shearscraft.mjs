// (v0.976.435) Shears craft decision for the bot fleet.
//
// THE PROBLEM: the bedcraft word prices the wool's night skip
// (v0.976.432, the bed lane's first word) but the wool's own arrival
// never priced - the sheep are never shorn, and shears ARE how the
// wool arrives (2 iron ingots -> 1 shears, vanilla). The spare-iron
// economy already has its own law: the tool-reserve owns the ingots
// until the bot's pick is iron (the armorcraft word v0.976.420) - the
// ingots past the reserve ARE the shepherd's hands. THE FIX:
// decideShearsCraft() prices the SHEARS POVERTY - one pocket map to
// ONE craft word with ONE reason:
//   'keep'   - shears already held (the shepherd lane owns that story)
//   'craft'  - iron >= 2 (the crafts the pocket affords, the honest yield)
//   'defer'  - iron short of one craft (the honest shortage)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the
// toolcraft lane (the pick itself), the armorcraft lane (the armor
// economy v0.976.420), the shield lane (the defense leg v0.976.428),
// this word's shepherd leg - a bot holding spare iron it does not
// want still earns its shears if the iron affords them, no other
// lane's face gates here. Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into a
// log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: an iron-rich pocket
// prices every shears craft it affords, an honest longer yield list
// never clamped.

// the vanilla iron cost one shears craft carries (2 iron -> 1 shears)
export const SHEARSCRAFT_IRON_PER_CRAFT = 2
// the vanilla shears yield one shears craft produces
export const SHEARSCRAFT_SHEARS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a shears craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.shearsCount=0]  shears already held (the shepherd
 *                                       lane's own story rides the keep gate)
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand (the spare
 *                                       pocket past the tool-reserve law)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, shearsYield: number, ironSurplus: number, cost: number}}
 */
export function decideShearsCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['shearsCount', 'ironIngotCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, shearsYield: 0, ironSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const shears = floor0(opts.shearsCount)
  const iron = floor0(opts.ironIngotCount)
  // shears already held: the shepherd lane's own story - the wool
  // economy prices the night skip, the shears economy stays silent
  // (the pieces-held law's twin, the craft family's own keep gate).
  if (shears >= 1) {
    return { action: 'keep', reason: 'shears-held', crafts: 0, shearsYield: 0, ironSurplus: iron, cost: 0 }
  }
  // the pocket's own arithmetic: every two iron price one shears
  // honestly, the caller picks how many shears crafts the flock needs
  // - the word never rounds the yield into a lie and never caps the
  // pocket.
  if (iron >= SHEARSCRAFT_IRON_PER_CRAFT) {
    const crafts = Math.floor(iron / SHEARSCRAFT_IRON_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'iron-affordable',
      crafts,
      shearsYield: crafts * SHEARSCRAFT_SHEARS_PER_CRAFT,
      ironSurplus: iron % SHEARSCRAFT_IRON_PER_CRAFT,
      cost: SHEARSCRAFT_IRON_PER_CRAFT
    }
  }
  // iron-poor and shears-poor: the honest shortage names the one
  // craft's own floor price - the smelt trip the caller re-tasks to,
  // never a guessed craft
  return { action: 'defer', reason: 'iron-short', crafts: 0, shearsYield: 0, ironSurplus: iron, cost: SHEARSCRAFT_IRON_PER_CRAFT }
}
