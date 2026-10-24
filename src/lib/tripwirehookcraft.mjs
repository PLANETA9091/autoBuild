// (v0.976.445) Tripwire hook craft decision for the bot fleet.
//
// THE PROBLEM: the crossbowcraft word priced the piercer (v0.976.444)
// and NAMED its future - the tripwire hook itself craftable, the
// trigger's own sub-craft, a word not yet priced. The future is now: a
// bot iron-rich stick-rich hangs no tripwire, rings no alarm, hooks no
// wire while the metal and the wood it already carries ARE the hook
// (1 iron ingot + 1 stick -> 1 tripwire hook, vanilla). The hook is
// the trigger lane's own word - the crossbow's trigger leg priced, the
// tripwire's own frame closes the chain. THE FIX:
// decideTripwireHookCraft() prices the TRIGGER POVERTY - one pocket
// map to ONE craft word with ONE reason:
//   'keep'   - a hook already held (the trigger lane owns that story
//              - the hook never doubles)
//   'craft'  - iron >= 1 AND sticks >= 1 (the SHORTER leg prices the
//              yield, the leftover of BOTH legs named)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the
// toolcraft lane, the armorcraft lane (v0.976.420), the shield lane
// (v0.976.428), the shears lane (v0.976.435), the bucket lane
// (v0.976.436), the rail lane (v0.976.437), the minecart lane
// (v0.976.438), the hopper lane (v0.976.439), the spark lane
// (v0.976.440), the cauldron lane (the boil leg v0.976.443), the
// crossbow lane (the limb pins v0.976.444), this word's trigger leg -
// the iron economy's TWELFTH leg priced, no other lane's face gates
// here. The stick consumers are separate lanes too - the stickcraft
// chain (v0.976.421), the sign lane (the marker leg v0.976.433), the
// rail lane (the tie leg v0.976.437), the fletcher lane's shaft leg
// (v0.976.441), the bow lane (the limb leg v0.976.442), the crossbow
// lane (the stock leg v0.976.444), this word's frame leg. THE HOOK
// FAMILY LAW: the tripwire hook IS a singleton trigger - the census
// rides exact 'tripwire_hook' and nothing else, no variant kin, the
// census never splits and never adopts another lane's kin. Junk
// inputs never throw: they return a refuse with the junk-input reason
// so a caller bug degrades into a log line, not a crash loop.
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a leg-rich pocket prices every hook craft it
// affords, an honest longer yield never clamped. The pure read
// mutates nothing.

// the vanilla iron cost one trigger craft carries (1 iron bends the hook)
export const TRIPWIREHOOKCRAFT_IRON_PER_CRAFT = 1
// the vanilla stick cost one trigger craft carries (1 stick holds the frame)
export const TRIPWIREHOOKCRAFT_STICKS_PER_CRAFT = 1
// the vanilla trigger yield one hook craft produces
export const TRIPWIREHOOKCRAFT_HOOKS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a trigger craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.tripwireHookCount=0] hooks already held (the
 *                                            singleton census - exact
 *                                            'tripwire_hook')
 * @param {number} [opts.ironIngotCount=0]    iron ingots on hand
 * @param {number} [opts.stickCount=0]        sticks on hand (the
 *                                            stickcraft chain's own
 *                                            yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, hooksYield: number, ironLeft: number, sticksLeft: number, hooks: number}}
 */
export function decideTripwireHookCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['tripwireHookCount', 'ironIngotCount', 'stickCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, hooksYield: 0, ironLeft: 0, sticksLeft: 0, hooks: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const iron = floor0(opts.ironIngotCount)
  const sticks = floor0(opts.stickCount)
  const held = floor0(opts.tripwireHookCount)
  // a hook already held: the trigger lane's own story - the tripwire's
  // own frame, the hook economy stays silent (the pieces-held law's
  // twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'tripwire-hook-held', ironLeft: iron, sticksLeft: sticks, hooks: held, crafts: 0, hooksYield: 0 }
  }
  // the pocket's own arithmetic: every ingot plus its stick price one
  // trigger honestly, the SHORTER leg prices the crafts - the word
  // never rounds the yield into a lie and never caps the pocket, the
  // leftover of BOTH legs named.
  if (iron >= TRIPWIREHOOKCRAFT_IRON_PER_CRAFT && sticks >= TRIPWIREHOOKCRAFT_STICKS_PER_CRAFT) {
    const crafts = Math.min(Math.floor(iron / TRIPWIREHOOKCRAFT_IRON_PER_CRAFT), Math.floor(sticks / TRIPWIREHOOKCRAFT_STICKS_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'iron-stick-affordable',
      crafts,
      hooksYield: crafts * TRIPWIREHOOKCRAFT_HOOKS_PER_CRAFT,
      ironLeft: iron - crafts * TRIPWIREHOOKCRAFT_IRON_PER_CRAFT,
      sticksLeft: sticks - crafts * TRIPWIREHOOKCRAFT_STICKS_PER_CRAFT,
      hooks: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the
  // iron leg first (the word's own base metal - the hook IS the iron
  // bent, the smelt trip the furnacecraft chain re-tasks, never a
  // guessed craft), the stick leg second (the craft-made frame the
  // stickcraft chain's own word v0.976.421 re-tasks, never a guessed
  // craft)
  if (iron < TRIPWIREHOOKCRAFT_IRON_PER_CRAFT) {
    return { action: 'defer', reason: 'iron-short', ironLeft: iron, sticksLeft: sticks, hooks: 0, crafts: 0, hooksYield: 0 }
  }
  return { action: 'defer', reason: 'sticks-short', ironLeft: iron, sticksLeft: sticks, hooks: 0, crafts: 0, hooksYield: 0 }
}
