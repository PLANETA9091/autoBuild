// (v0.976.429) Door craft decision for the bot fleet.
//
// THE PROBLEM: the shieldcraft word prices the mob-defense lane's body
// (1 iron_ingot + 6 planks -> 1 shield, v0.976.428), the chestcraft word
// the storage consumer (v0.976.424), the tablecraft word the seat itself
// (v0.976.426) - but the planks' own SHELTER consumer never priced: a bot
// plank-rich (>= 6 planks) and door-poor camps in the open while the
// planks it already carries ARE the door wall (6 planks -> 3 doors,
// vanilla). The night cycle deals the hits (the nightcare word's fence
// v0.976.407); the door is the shelter leg the pocket already affords.
// THE FIX: decideDoorCraft() prices the DOOR POVERTY - one pocket map to
// ONE craft word with ONE reason:
//   'keep'   - a door already held (the shelter lane owns that story)
//   'craft'  - planks >= 6 (the crafts the pocket affords, the honest yield)
//   'defer'  - planks short of one craft (the honest shortage)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the plank consumers are separate lanes - the chest
// lane (storage v0.976.424), the table lane (the seat itself v0.976.426),
// the shield lane (the defense leg v0.976.428), this word's shelter leg -
// a bot holding planks it does not want still earns its doors if the
// planks afford it, no other lane's face gates here. Junk inputs never
// throw: they return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative counts floor to
// zero (a lying census must not poison the arithmetic); they are read,
// not refused - the honesty lives in the clamp. No cap: a plank-rich
// pocket prices every door craft it affords, an honest longer yield list
// never clamped.

// the vanilla plank cost one door craft carries (6 planks -> 3 doors)
export const DOORCRAFT_PLANKS_PER_CRAFT = 6
// the vanilla door yield one door craft produces
export const DOORCRAFT_DOORS_PER_CRAFT = 3

/**
 * Decide whether one bot's pocket earns a door craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.doorCount=0]   doors already held (the shelter lane's
 *                                      own story rides the keep gate)
 * @param {number} [opts.planksCount=0] planks on hand (any wood, summed)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, doorsYield: number, planksSurplus: number, cost: number}}
 */
export function decideDoorCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['doorCount', 'planksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, doorsYield: 0, planksSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const doors = floor0(opts.doorCount)
  const planks = floor0(opts.planksCount)
  // a door already held: the shelter lane's own story - the night cycle
  // prices the wall walk, the door economy stays silent (the pieces-held
  // law's twin, the craft family's own keep gate).
  if (doors >= 1) {
    return { action: 'keep', reason: 'door-held', crafts: 0, doorsYield: 0, planksSurplus: planks, cost: 0 }
  }
  // the pocket's own arithmetic: every six planks price three doors
  // honestly, the caller picks how many door crafts the shelter needs -
  // the word never rounds the yield into a lie and never caps the pocket.
  if (planks >= DOORCRAFT_PLANKS_PER_CRAFT) {
    const crafts = Math.floor(planks / DOORCRAFT_PLANKS_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'planks-affordable',
      crafts,
      doorsYield: crafts * DOORCRAFT_DOORS_PER_CRAFT,
      planksSurplus: planks % DOORCRAFT_PLANKS_PER_CRAFT,
      cost: DOORCRAFT_PLANKS_PER_CRAFT
    }
  }
  // plank-poor and door-poor: the honest shortage names the one craft's
  // own floor price - the wood trip the caller re-tasks to, never a
  // guessed craft
  return { action: 'defer', reason: 'planks-short', crafts: 0, doorsYield: 0, planksSurplus: planks, cost: DOORCRAFT_PLANKS_PER_CRAFT }
}
