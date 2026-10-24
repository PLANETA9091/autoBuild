// (v0.976.437) Rail craft decision for the bot fleet.
//
// THE PROBLEM: the bucketcraft word prices the iron's own carrier
// (v0.976.436), the shearscraft word the shepherd lane's own hands
// (v0.976.435) - but the iron's own TRACK consumer never priced: a bot
// iron-rich (>= 6 ingots) and stick-rich walks every length of ground on
// foot while the metal it already carries IS the track (6 iron ingots +
// 1 stick -> 16 rails, vanilla). The rail is the transport leg the
// pocket already affords - the minecart/rails front's first word, the
// ground the fleet walks priced into a ride. THE FIX: decideRailCraft()
// prices the TRACK POVERTY - one pocket map to ONE craft word with ONE
// reason:
//   'keep'   - rails already held (the transport lane owns that story)
//   'craft'  - iron >= 6 AND sticks >= 1 (the SHORTER leg prices the
//              yield, the leftover of BOTH legs named)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the toolcraft
// lane (the pick itself), the armorcraft lane (the armor economy
// v0.976.420), the shield lane (the defense leg v0.976.428), the shears
// lane (the shepherd leg v0.976.435), the bucket lane (the carry leg
// v0.976.436), this word's track leg - a bot holding spare iron it does
// not want still earns its rails if the legs afford them, no other
// lane's face gates here. The stick consumers are separate lanes too -
// the stickcraft chain (v0.976.421), the sign lane (the marker leg
// v0.976.433), this word's tie leg. THE RAIL FAMILY LAW: the plain rail
// and every rail variant (powered, detector, activator) ARE the track
// lane's own story - the census rides its own family (exact 'rail' +
// every *_rail), the census never splits. Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: a leg-rich pocket
// prices every rail craft it affords, an honest longer yield never
// clamped. The pure read mutates nothing.

// the vanilla iron cost one rail craft carries (6 iron -> 16 rails)
export const RAILCRAFT_IRON_PER_CRAFT = 6
// the vanilla stick cost one rail craft carries (1 stick ties the iron)
export const RAILCRAFT_STICKS_PER_CRAFT = 1
// the vanilla rail yield one rail craft produces
export const RAILCRAFT_RAILS_PER_CRAFT = 16

/**
 * Decide whether one bot's pocket earns a rail craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.railCount=0]    the rail family on hand (plain +
 *                                       every variant, the caller's
 *                                       census never splits)
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand
 * @param {number} [opts.stickCount=0]   sticks on hand
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, railsYield: number, ironLeft: number, stickLeft: number, rails: number}}
 */
export function decideRailCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['railCount', 'ironIngotCount', 'stickCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, railsYield: 0, ironLeft: 0, stickLeft: 0, rails: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const iron = floor0(opts.ironIngotCount)
  const sticks = floor0(opts.stickCount)
  const held = floor0(opts.railCount)
  // rails already held: the transport lane's own story - the track is
  // being laid, the rail economy stays silent (the pieces-held law's
  // twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'rail-held', ironLeft: iron, stickLeft: sticks, rails: held, crafts: 0, railsYield: 0 }
  }
  // the pocket's own arithmetic: every six ingots plus their stick
  // price sixteen rails honestly, the SHORTER leg prices the crafts -
  // the word never rounds the yield into a lie and never caps the
  // pocket, the leftover of BOTH legs named.
  if (iron >= RAILCRAFT_IRON_PER_CRAFT && sticks >= RAILCRAFT_STICKS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(iron / RAILCRAFT_IRON_PER_CRAFT), Math.floor(sticks / RAILCRAFT_STICKS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'iron-stick-affordable',
      crafts,
      railsYield: crafts * RAILCRAFT_RAILS_PER_CRAFT,
      ironLeft: iron - crafts * RAILCRAFT_IRON_PER_CRAFT,
      stickLeft: sticks - crafts * RAILCRAFT_STICKS_PER_CRAFT,
      rails: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the iron
  // leg first (the word's own base metal - the track IS the iron laid
  // down, the smelt trip the furnacecraft chain re-tasks, never a
  // guessed craft), the stick leg second (the craft-made tie the
  // stickcraft chain's own word v0.976.421 re-tasks)
  if (iron < RAILCRAFT_IRON_PER_CRAFT) {
    return { action: 'defer', reason: 'iron-short', ironLeft: iron, stickLeft: sticks, rails: 0, crafts: 0, railsYield: 0 }
  }
  return { action: 'defer', reason: 'sticks-short', ironLeft: iron, stickLeft: sticks, rails: 0, crafts: 0, railsYield: 0 }
}
