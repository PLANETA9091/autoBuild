// (v0.976.431) Fence craft decision for the bot fleet.
//
// THE PROBLEM: the doorcraft word prices the shelter wall (6 planks -> 3
// doors, v0.976.429), the boatcraft word the water crossing (5 planks ->
// 1 boat, v0.976.430), the shieldcraft word the body's own block
// (v0.976.428) - but the pocket's own PEN consumer never priced: a bot
// plank-rich, stick-rich and fence-poor camps unfenced while the wood it
// already carries IS the yard wall (4 planks + 2 sticks -> 3 fences,
// vanilla). The yard is the fleet's own word (the yardcheck family
// prices the ground the camp stands on); the fence prices the wall the
// pocket already affords. THE FIX: decideFenceCraft() prices the FENCE
// POVERTY - one pocket map to ONE craft word with ONE reason:
//   'keep'   - a fence already held (the pen lane owns that story)
//   'craft'  - planks >= 4 AND sticks >= 2 (the SHORTER leg prices the
//              yield, the leftover of BOTH legs named)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the plank and stick consumers are separate lanes -
// the chest lane (storage v0.976.424), the table lane (the seat itself
// v0.976.426), the shield lane (the defense leg v0.976.428), the door
// lane (the shelter leg v0.976.429), the boat lane (the water leg
// v0.976.430), this word's pen leg - a bot holding planks and sticks it
// does not want still earns its fences if the legs afford them, no other
// lane's face gates here. Junk inputs never throw: they return a refuse
// with the junk-input reason so a caller bug degrades into a log line,
// not a crash loop. Negative counts floor to zero (a lying census must
// not poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a leg-rich pocket prices every fence
// craft it affords, an honest longer yield list never clamped.

// the vanilla plank cost one fence craft carries (4 planks -> 3 fences)
export const FENCECRAFT_PLANKS_PER_CRAFT = 4
// the vanilla stick cost one fence craft carries (2 sticks join the planks)
export const FENCECRAFT_STICKS_PER_CRAFT = 2
// the vanilla fence yield one fence craft produces
export const FENCECRAFT_FENCES_PER_CRAFT = 3

/**
 * Decide whether one bot's pocket earns a fence craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.fenceCount=0]  fences already held (the pen lane's
 *                                      own story rides the keep gate)
 * @param {number} [opts.planksCount=0] planks on hand (any wood, summed)
 * @param {number} [opts.stickCount=0]  sticks on hand
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, fencesYield: number, stickLeft: number, plankLeft: number}}
 */
export function decideFenceCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['fenceCount', 'planksCount', 'stickCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', planks: 0, sticks: 0, fences: 0, crafts: 0, fencesYield: 0, stickLeft: 0, plankLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const planks = floor0(opts.planksCount)
  const sticks = floor0(opts.stickCount)
  const held = floor0(opts.fenceCount)
  // a fence already held: the pen lane's own story - the yard walk
  // prices the wall, the fence economy stays silent (the pieces-held
  // law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'fence-held', planks, sticks, fences: held, crafts: 0, fencesYield: 0, stickLeft: sticks, plankLeft: planks }
  }
  // the pocket's own arithmetic: every four planks plus their two sticks
  // price three fences honestly, the SHORTER leg prices the crafts - the
  // word never rounds the yield into a lie and never caps the pocket,
  // the leftover of BOTH legs named.
  if (planks >= FENCECRAFT_PLANKS_PER_CRAFT && sticks >= FENCECRAFT_STICKS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(planks / FENCECRAFT_PLANKS_PER_CRAFT), Math.floor(sticks / FENCECRAFT_STICKS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'stick-planks-affordable',
      crafts,
      fencesYield: crafts * FENCECRAFT_FENCES_PER_CRAFT,
      stickLeft: sticks - crafts * FENCECRAFT_STICKS_PER_CRAFT,
      plankLeft: planks - crafts * FENCECRAFT_PLANKS_PER_CRAFT,
      planks,
      sticks,
      fences: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the
  // stick leg first (the craft-made leg the stickcraft chain's own word
  // v0.976.421 re-tasks, never a guessed craft), the plank leg second
  // (the base wood leg the plankcraft chain's own word v0.976.422
  // re-tasks)
  if (sticks < FENCECRAFT_STICKS_PER_CRAFT) {
    return { action: 'defer', reason: 'sticks-short', planks, sticks, fences: 0, crafts: 0, fencesYield: 0, stickLeft: sticks, plankLeft: planks }
  }
  return { action: 'defer', reason: 'planks-short', planks, sticks, fences: 0, crafts: 0, fencesYield: 0, stickLeft: sticks, plankLeft: planks }
}
