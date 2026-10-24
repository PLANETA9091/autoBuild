// (v0.976.433) Sign craft decision for the bot fleet.
//
// THE PROBLEM: the bedcraft word prices the night skip (v0.976.432), the
// doorcraft word the shelter wall (v0.976.429), the boatcraft word the
// water crossing (v0.976.430) - but the pocket's own PATH-MARKING
// consumer never priced: a bot plank-rich, stick-rich and sign-poor
// walks the same ground the scout maps while the wood it already carries
// IS the marker (6 planks + 1 stick -> 3 signs, vanilla). The worldmap
// lane (the task's own named scout->miner integration) prices where the
// bots have been; the sign is the marker leg the pocket already affords
// - the worldmap's first word the pocket itself prices. THE FIX:
// decideSignCraft() prices the SIGN POVERTY - one pocket map to ONE
// craft word with ONE reason:
//   'keep'   - a sign already held (the marker lane owns that story)
//   'craft'  - planks >= 6 AND sticks >= 1 (the SHORTER leg prices the
//              yield, the leftover of BOTH legs named)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the plank and stick consumers are separate lanes -
// the chest lane (storage v0.976.424), the table lane (the seat itself
// v0.976.426), the shield lane (the defense leg v0.976.428), the door
// lane (the shelter leg v0.976.429), the boat lane (the water leg
// v0.976.430), the fence lane (the pen leg v0.976.431), the bed lane
// (the night skip v0.976.432), this word's marker leg - a bot holding
// planks and sticks it does not want still earns its signs if the legs
// afford them, no other lane's face gates here. Junk inputs never
// throw: they return a refuse with the junk-input reason so a caller
// bug degrades into a log line, not a crash loop. Negative counts floor
// to zero (a lying census must not poison the arithmetic); they are
// read, not refused - the honesty lives in the clamp. No cap: a
// leg-rich pocket prices every sign craft it affords, an honest longer
// yield list never clamped.

// the vanilla plank cost one sign craft carries (6 planks -> 3 signs)
export const SIGNCRAFT_PLANKS_PER_CRAFT = 6
// the vanilla stick cost one sign craft carries (1 stick joins the planks)
export const SIGNCRAFT_STICKS_PER_CRAFT = 1
// the vanilla sign yield one sign craft produces
export const SIGNCRAFT_SIGNS_PER_CRAFT = 3

/**
 * Decide whether one bot's pocket earns a sign craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.signCount=0]   signs already held (the marker lane's
 *                                      own story rides the keep gate)
 * @param {number} [opts.planksCount=0] planks on hand (any wood, summed)
 * @param {number} [opts.stickCount=0]  sticks on hand
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, signsYield: number, stickLeft: number, plankLeft: number}}
 */
export function decideSignCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['signCount', 'planksCount', 'stickCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', planks: 0, sticks: 0, signs: 0, crafts: 0, signsYield: 0, stickLeft: 0, plankLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const planks = floor0(opts.planksCount)
  const sticks = floor0(opts.stickCount)
  const held = floor0(opts.signCount)
  // a sign already held: the marker lane's own story - the worldmap
  // prices where the bots have been, the sign economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'sign-held', planks, sticks, signs: held, crafts: 0, signsYield: 0, stickLeft: sticks, plankLeft: planks }
  }
  // the pocket's own arithmetic: every six planks plus their stick
  // price three signs honestly, the SHORTER leg prices the crafts - the
  // word never rounds the yield into a lie and never caps the pocket,
  // the leftover of BOTH legs named.
  if (planks >= SIGNCRAFT_PLANKS_PER_CRAFT && sticks >= SIGNCRAFT_STICKS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(planks / SIGNCRAFT_PLANKS_PER_CRAFT), Math.floor(sticks / SIGNCRAFT_STICKS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'stick-planks-affordable',
      crafts,
      signsYield: crafts * SIGNCRAFT_SIGNS_PER_CRAFT,
      stickLeft: sticks - crafts * SIGNCRAFT_STICKS_PER_CRAFT,
      plankLeft: planks - crafts * SIGNCRAFT_PLANKS_PER_CRAFT,
      planks,
      sticks,
      signs: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the
  // stick leg first (the craft-made leg the stickcraft chain's own word
  // v0.976.421 re-tasks, never a guessed craft), the plank leg second
  // (the base wood leg the plankcraft chain's own word v0.976.422
  // re-tasks)
  if (sticks < SIGNCRAFT_STICKS_PER_CRAFT) {
    return { action: 'defer', reason: 'sticks-short', planks, sticks, signs: 0, crafts: 0, signsYield: 0, stickLeft: sticks, plankLeft: planks }
  }
  return { action: 'defer', reason: 'planks-short', planks, sticks, signs: 0, crafts: 0, signsYield: 0, stickLeft: sticks, plankLeft: planks }
}
