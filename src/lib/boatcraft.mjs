// (v0.976.430) Boat craft decision for the bot fleet.
//
// THE PROBLEM: the doorcraft word prices the shelter leg (6 planks -> 3
// doors, v0.976.429), the chestcraft word the storage consumer
// (v0.976.424), the tablecraft word the seat itself (v0.976.426), the
// shieldcraft word the defense leg (v0.976.428) - but the planks' own
// WATER consumer never priced: a bot plank-rich (>= 5 planks) and
// boat-poor walks the shore around every river and lake while the planks
// it already carries ARE the crossing (5 planks -> 1 boat, vanilla). The
// bots are ground mode (fly:false the game's own law); the boat is the
// water leg the pocket already affords. THE FIX: decideBoatCraft()
// prices the BOAT POVERTY - one pocket map to ONE craft word with ONE
// reason:
//   'keep'   - a boat already held (the water lane owns that story)
//   'craft'  - planks >= 5 (the crafts the pocket affords, the honest yield)
//   'defer'  - planks short of one craft (the honest shortage)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the plank consumers are separate lanes - the chest
// lane (storage v0.976.424), the table lane (the seat itself
// v0.976.426), the shield lane (the defense leg v0.976.428), the door
// lane (the shelter leg v0.976.429), this word's water leg - a bot
// holding planks it does not want still earns its boat if the planks
// afford it, no other lane's face gates here. Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative counts floor to
// zero (a lying census must not poison the arithmetic); they are read,
// not refused - the honesty lives in the clamp. No cap: a plank-rich
// pocket prices every boat craft it affords, an honest longer yield list
// never clamped.

// the vanilla plank cost one boat craft carries (5 planks -> 1 boat)
export const BOATCRAFT_PLANKS_PER_BOAT = 5
// the vanilla boat yield one boat craft produces
export const BOATCRAFT_BOATS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a boat craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.boatCount=0]   boats already held (the water lane's
 *                                      own story rides the keep gate)
 * @param {number} [opts.planksCount=0] planks on hand (any wood, summed)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, boatsYield: number, planksSurplus: number, cost: number}}
 */
export function decideBoatCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['boatCount', 'planksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, boatsYield: 0, planksSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const boats = floor0(opts.boatCount)
  const planks = floor0(opts.planksCount)
  // a boat already held: the water lane's own story - the shore walk
  // prices the crossing, the boat economy stays silent (the pieces-held
  // law's twin, the craft family's own keep gate).
  if (boats >= 1) {
    return { action: 'keep', reason: 'boat-held', crafts: 0, boatsYield: 0, planksSurplus: planks, cost: 0 }
  }
  // the pocket's own arithmetic: every five planks price one boat
  // honestly, the caller picks how many boat crafts the crossing needs -
  // the word never rounds the yield into a lie and never caps the pocket.
  if (planks >= BOATCRAFT_PLANKS_PER_BOAT) {
    const crafts = Math.floor(planks / BOATCRAFT_PLANKS_PER_BOAT)
    return {
      action: 'craft',
      reason: 'planks-affordable',
      crafts,
      boatsYield: crafts * BOATCRAFT_BOATS_PER_CRAFT,
      planksSurplus: planks % BOATCRAFT_PLANKS_PER_BOAT,
      cost: BOATCRAFT_PLANKS_PER_BOAT
    }
  }
  // plank-poor and boat-poor: the honest shortage names the one craft's
  // own floor price - the wood trip the caller re-tasks to, never a
  // guessed craft
  return { action: 'defer', reason: 'planks-short', crafts: 0, boatsYield: 0, planksSurplus: planks, cost: BOATCRAFT_PLANKS_PER_BOAT }
}
