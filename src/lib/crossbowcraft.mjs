// (v0.976.444) Crossbow craft decision for the bot fleet.
//
// THE PROBLEM: the bowcraft word priced the fletcher lane's own launcher
// (v0.976.442) and NAMED its future - "the crossbow a different lane's
// own word, the honest future named". The future is now: a bot
// stick-rich, iron-rich, string-rich and hook-rich shoots nothing while
// the wood, the metal, the cord and the trigger it already carries ARE
// the crossbow (3 sticks + 2 iron ingots + 1 string + 1 tripwire hook
// -> 1 crossbow, vanilla). The crossbow is the launcher family's own
// second word - the bow's named future priced, the piercer lane's own
// answer. THE FIX: decideCrossbowCraft() prices the PIERCER POVERTY -
// one pocket map to ONE craft word with ONE reason:
//   'keep'   - a crossbow already held (the launcher never doubles -
//              the pieces-held law's twin)
//   'craft'  - sticks >= 3 AND iron >= 2 AND string >= 1 AND hooks >= 1
//              (the SHORTER of FOUR legs prices the yield, the leftover
//              of ALL FOUR legs named - the family's first FOUR-LEG
//              word, the shorter-leg law extended a third time)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the
// toolcraft chain, the armor lane (v0.976.420), the shield lane
// (v0.976.428), the shears lane (v0.976.435), the bucket lane
// (v0.976.436), the rail lane (v0.976.437), the minecart lane
// (v0.976.438), the hopper lane (v0.976.439), the spark lane
// (v0.976.440), the cauldron lane (v0.976.443), this word's limb-pin
// leg - the iron economy's ELEVENTH leg priced, no other lane's face
// gates here. The stick consumers are separate lanes too - the
// stickcraft chain (v0.976.421), the sign lane (the marker leg
// v0.976.433), the rail lane (the tie leg v0.976.437), the fletcher
// lane's shaft leg (v0.976.441), the bow lane's limb leg (v0.976.442),
// this word's limb leg. The string consumers are separate lanes - the
// bow lane's cord leg (v0.976.442 the FIRST), this word's cord leg the
// SECOND. The tripwire hook: this word's trigger leg - THE FIRST
// TRIPWIRE-HOOK CONSUMER PRICED (the hunt lane's own yield finally
// priced, never a guessed craft); the hook itself is craftable (1 iron
// + 1 stick -> 1 tripwire hook, vanilla) - the trigger's own sub-craft
// the honest future named. No other lane's face gates here. THE
// LAUNCHER FAMILY LAW: the crossbow IS a singleton launcher - the
// census rides exact 'crossbow' and nothing else, no variant kin; the
// bow IS a different lane's own word (v0.976.442 priced it), the
// census never splits and never adopts another lane's kin. Junk inputs
// never throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the arithmetic);
// they are read, not refused - the honesty lives in the clamp. No cap:
// a leg-rich pocket prices every crossbow craft it affords, an honest
// longer yield never clamped. The pure read mutates nothing.

// the vanilla stick cost one piercer craft carries (3 sticks shape the limbs)
export const CROSSBOWCRAFT_STICKS_PER_CRAFT = 3
// the vanilla iron cost one piercer craft carries (2 irons pin the limbs)
export const CROSSBOWCRAFT_IRON_PER_CRAFT = 2
// the vanilla string cost one piercer craft carries (1 string makes the cord)
export const CROSSBOWCRAFT_STRING_PER_CRAFT = 1
// the vanilla hook cost one piercer craft carries (1 hook makes the trigger)
export const CROSSBOWCRAFT_HOOKS_PER_CRAFT = 1
// the vanilla piercer yield one crossbow craft produces
export const CROSSBOWCRAFT_CROSSBOWS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a piercer craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.crossbowCount=0]    crossbows already held (the
 *                                            singleton census - exact
 *                                            'crossbow')
 * @param {number} [opts.stickCount=0]       sticks on hand (the limb leg)
 * @param {number} [opts.ironIngotCount=0]   iron ingots on hand (the
 *                                            limb-pin leg, the iron
 *                                            economy's eleventh leg)
 * @param {number} [opts.stringCount=0]      string on hand (the cord leg)
 * @param {number} [opts.tripwireHookCount=0] tripwire hooks on hand (the
 *                                            trigger leg, the first hook
 *                                            consumer priced)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, crossbowsYield: number, sticksLeft: number, ironLeft: number, stringLeft: number, hooksLeft: number, crossbows: number}}
 */
export function decideCrossbowCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['crossbowCount', 'stickCount', 'ironIngotCount', 'stringCount', 'tripwireHookCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, crossbowsYield: 0, sticksLeft: 0, ironLeft: 0, stringLeft: 0, hooksLeft: 0, crossbows: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const sticks = floor0(opts.stickCount)
  const iron = floor0(opts.ironIngotCount)
  const string = floor0(opts.stringCount)
  const hooks = floor0(opts.tripwireHookCount)
  const held = floor0(opts.crossbowCount)
  // a launcher already held: the piercer lane's own story - the bow
  // lane owns its launcher, this lane owns its own, the launcher
  // economy stays silent (the pieces-held law's twin, the craft
  // family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'crossbow-held', sticksLeft: sticks, ironLeft: iron, stringLeft: string, hooksLeft: hooks, crossbows: held, crafts: 0, crossbowsYield: 0 }
  }
  // the pocket's own arithmetic: every stick trio plus its iron pair
  // plus its cord plus its trigger prices one piercer honestly, the
  // SHORTER of FOUR legs prices the crafts - the word never rounds the
  // yield into a lie and never caps the pocket, the leftover of ALL
  // FOUR legs named.
  if (sticks >= CROSSBOWCRAFT_STICKS_PER_CRAFT && iron >= CROSSBOWCRAFT_IRON_PER_CRAFT && string >= CROSSBOWCRAFT_STRING_PER_CRAFT && hooks >= CROSSBOWCRAFT_HOOKS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(sticks / CROSSBOWCRAFT_STICKS_PER_CRAFT), Math.floor(iron / CROSSBOWCRAFT_IRON_PER_CRAFT), Math.floor(string / CROSSBOWCRAFT_STRING_PER_CRAFT), Math.floor(hooks / CROSSBOWCRAFT_HOOKS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'sticks-iron-string-hook-affordable',
      crafts,
      crossbowsYield: crafts * CROSSBOWCRAFT_CROSSBOWS_PER_CRAFT,
      sticksLeft: sticks - crafts * CROSSBOWCRAFT_STICKS_PER_CRAFT,
      ironLeft: iron - crafts * CROSSBOWCRAFT_IRON_PER_CRAFT,
      stringLeft: string - crafts * CROSSBOWCRAFT_STRING_PER_CRAFT,
      hooksLeft: hooks - crafts * CROSSBOWCRAFT_HOOKS_PER_CRAFT,
      crossbows: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the
  // stick leg first (the word's own base wood - the limbs ARE the
  // stickcraft chain's re-task), the iron leg second (the limb pins -
  // the iron economy's eleventh leg, the smelt trip the furnacecraft
  // chain re-tasks), the string leg third (the cord - the hunt lane's
  // own yield, the spider trip), the hook leg fourth (the trigger -
  // the first hook consumer priced, the sub-craft the honest future
  // named)
  if (sticks < CROSSBOWCRAFT_STICKS_PER_CRAFT) {
    return { action: 'defer', reason: 'sticks-short', sticksLeft: sticks, ironLeft: iron, stringLeft: string, hooksLeft: hooks, crossbows: 0, crafts: 0, crossbowsYield: 0 }
  }
  if (iron < CROSSBOWCRAFT_IRON_PER_CRAFT) {
    return { action: 'defer', reason: 'iron-short', sticksLeft: sticks, ironLeft: iron, stringLeft: string, hooksLeft: hooks, crossbows: 0, crafts: 0, crossbowsYield: 0 }
  }
  if (string < CROSSBOWCRAFT_STRING_PER_CRAFT) {
    return { action: 'defer', reason: 'string-short', sticksLeft: sticks, ironLeft: iron, stringLeft: string, hooksLeft: hooks, crossbows: 0, crafts: 0, crossbowsYield: 0 }
  }
  return { action: 'defer', reason: 'hook-short', sticksLeft: sticks, ironLeft: iron, stringLeft: string, hooksLeft: hooks, crossbows: 0, crafts: 0, crossbowsYield: 0 }
}
