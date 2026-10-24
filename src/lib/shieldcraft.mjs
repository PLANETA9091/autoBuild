// (v0.976.428) Shield craft decision for the bot fleet.
//
// THE PROBLEM: the bots dig deep and climb home (the ratchet books' rung
// faces, the shaft lane's own return the laddercraft word prices,
// v0.976.427), the surface walks ride dark ground - and the MOB lane's
// own defense never priced: a shield (1 iron_ingot + 6 planks -> 1
// shield, vanilla) blocks the hits the night and the caves deal, while
// iron-rich plank-rich pockets walk bare-armed - the iron leg the armor
// word's own lane prices (armorcraft v0.976.420), the plank leg the
// plankcraft chain prices (v0.976.422), the shield itself nobody names.
// THE FIX: decideShieldCraft() prices the MOB-DEFENSE economy's first
// word - one pocket map to ONE word with ONE reason:
//   'keep'   - shield already held (the defense lane owns that story)
//   'craft'  - the iron leg + the plank leg affordable, the honest yield
//   'defer'  - one leg short, the missing leg NAMED (iron-short names the
//              smelt chain's own leg, planks-short names the plankcraft
//              chain's own leg - the caller sees WHICH leg the pocket misses)
//   'refuse' - junk input (never throws into the fleet loop)
// THE DEFENSE LANE LAW: the iron consumers are separate lanes - the
// armor lane (armorcraft), the tool lane (toolcraft), this word's
// offhand-defense leg - a bot holding iron it does not want still earns
// its shield if the iron affords it, no other lane's face gates here.
// THE PLANK FAMILY LAW: the shield recipe takes any wood family (vanilla
// accepts the whole *_planks family mixed) - the caller's census sums
// the family, the word never splits it. Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: an iron-rich
// plank-rich pocket prices every shield it affords, the leftover of
// BOTH legs named, never rounded into a lie. The pure read mutates
// nothing.

// the vanilla shield recipe's iron price (one ingot per shield)
export const SHIELDCRAFT_IRON_PER_SHIELD = 1
// the vanilla shield recipe's plank-family price (six planks per shield)
export const SHIELDCRAFT_PLANKS_PER_SHIELD = 6

/**
 * Decide whether one bot's pocket earns a shield craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand (the smelt
 *                                      chain's own product)
 * @param {number} [opts.planksCount=0] the plank family on hand (any wood,
 *                                      summed by the caller)
 * @param {number} [opts.shieldCount=0] shields already held
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, iron: number, planks: number, shields: number, crafts: number, shieldsYield: number, ironLeft: number, plankLeft: number}}
 */
export function decideShieldCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['ironIngotCount', 'planksCount', 'shieldCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', iron: 0, planks: 0, shields: 0, crafts: 0, shieldsYield: 0, ironLeft: 0, plankLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const iron = floor0(opts.ironIngotCount)
  const planks = floor0(opts.planksCount)
  const held = floor0(opts.shieldCount)
  // shield already held: the defense lane's own story - the offhand
  // prices the blocking, the shield economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'shield-held', iron, planks, shields: held, crafts: 0, shieldsYield: 0, ironLeft: iron, plankLeft: planks }
  }
  // the pocket's own arithmetic: every iron ingot plus its six planks
  // price one shield honestly, the caller picks how many crafts the
  // defense needs - the word never rounds the yield into a lie and never
  // caps the pocket.
  if (iron >= SHIELDCRAFT_IRON_PER_SHIELD && planks >= SHIELDCRAFT_PLANKS_PER_SHIELD) {
    const crafts = Math.min(iron, Math.floor(planks / SHIELDCRAFT_PLANKS_PER_SHIELD))
    return {
      action: 'craft',
      reason: 'iron-planks-affordable',
      crafts,
      shieldsYield: crafts,
      ironLeft: iron - crafts,
      plankLeft: planks - crafts * SHIELDCRAFT_PLANKS_PER_SHIELD,
      iron,
      planks,
      shields: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - iron-short
  // names the smelt chain's own seat, planks-short names the plankcraft
  // chain's own leg (the iron leg first: the rarer leg the pocket mines,
  // never a guessed craft)
  if (iron < SHIELDCRAFT_IRON_PER_SHIELD) {
    return { action: 'defer', reason: 'iron-short', iron, planks, shields: 0, crafts: 0, shieldsYield: 0, ironLeft: iron, plankLeft: planks }
  }
  return { action: 'defer', reason: 'planks-short', iron, planks, shields: 0, crafts: 0, shieldsYield: 0, ironLeft: iron, plankLeft: planks }
}
