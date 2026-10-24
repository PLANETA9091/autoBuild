// (v0.976.432) Bed craft decision for the bot fleet.
//
// THE PROBLEM: the nightcare word prices the sky clock (v0.976.407 - the
// fence the nightsafety law's own, the wrap the cyclical clock's honest
// law), the mobs deal the hits the shieldcraft word's offhand blocks
// (v0.976.428) - but the NIGHT itself never priced: a bed (3 wool + 3
// planks -> 1 bed, vanilla) SKIPS the night the fleet endures every
// cycle, while wool-rich plank-rich pockets sleep on the ground - the
// wool leg the sheep lane owns (the flock's own drop), the plank leg the
// plankcraft chain prices (v0.976.422), the bed itself nobody names.
// THE FIX: decideBedCraft() prices the NIGHT lane's first word - one
// pocket map to ONE word with ONE reason:
//   'keep'   - bed already held (the night lane owns that story)
//   'craft'  - the wool leg + the plank leg affordable, the honest yield
//   'defer'  - one leg short, the missing leg NAMED (wool-short names the
//              sheep lane's own leg, planks-short names the plankcraft
//              chain's own leg - the caller sees WHICH leg the pocket misses)
//   'refuse' - junk input (never throws into the fleet loop)
// THE WOOL COLOR LAW: vanilla prices three wool of ONE color - the
// census reads the LARGEST single-color wool stack, the word never sums
// across colors (a red-blue-white pocket is not a bed, never rounded
// into a lie). THE PLANK FAMILY LAW: the bed recipe takes any wood
// family (vanilla accepts the whole *_planks family mixed) - the
// caller's census sums the family, the word never splits it. Junk
// inputs never throw: they return a refuse with the junk-input reason
// so a caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the arithmetic);
// they are read, not refused - the honesty lives in the clamp. No cap:
// a wool-rich plank-rich pocket prices every bed it affords, the
// leftover of BOTH legs named, never rounded into a lie. The pure read
// mutates nothing.

// the vanilla bed recipe's wool price (three of one color per bed)
export const BEDCRAFT_WOOL_PER_BED = 3
// the vanilla bed recipe's plank-family price (three planks per bed)
export const BEDCRAFT_PLANKS_PER_BED = 3

/**
 * Decide whether one bot's pocket earns a bed craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.woolCount=0]   the largest single-color wool stack
 *                                      on hand (the caller's census never
 *                                      sums across colors)
 * @param {number} [opts.planksCount=0] the plank family on hand (any wood,
 *                                      summed by the caller)
 * @param {number} [opts.bedCount=0]    beds already held (any color family)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, wool: number, planks: number, beds: number, crafts: number, bedsYield: number, woolLeft: number, plankLeft: number}}
 */
export function decideBedCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['woolCount', 'planksCount', 'bedCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', wool: 0, planks: 0, beds: 0, crafts: 0, bedsYield: 0, woolLeft: 0, plankLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const wool = floor0(opts.woolCount)
  const planks = floor0(opts.planksCount)
  const held = floor0(opts.bedCount)
  // bed already held: the night lane's own story - the sleep prices the
  // skip, the bed economy stays silent (the pieces-held law's twin, the
  // craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'bed-held', wool, planks, beds: held, crafts: 0, bedsYield: 0, woolLeft: wool, plankLeft: planks }
  }
  // the pocket's own arithmetic: every three same-color wool and their
  // three planks price one bed honestly, the caller picks how many beds
  // the night needs - the word never rounds the yield into a lie and
  // never caps the pocket.
  if (wool >= BEDCRAFT_WOOL_PER_BED && planks >= BEDCRAFT_PLANKS_PER_BED) {
    const crafts = Math.min(Math.floor(wool / BEDCRAFT_WOOL_PER_BED), Math.floor(planks / BEDCRAFT_PLANKS_PER_BED))
    return {
      action: 'craft',
      reason: 'wool-planks-affordable',
      crafts,
      bedsYield: crafts,
      woolLeft: wool - crafts * BEDCRAFT_WOOL_PER_BED,
      plankLeft: planks - crafts * BEDCRAFT_PLANKS_PER_BED,
      wool,
      planks,
      beds: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - wool-short
  // names the sheep lane's own leg, planks-short names the plankcraft
  // chain's own leg (the wool leg first: the fleet's first wool consumer,
  // never a guessed craft)
  if (wool < BEDCRAFT_WOOL_PER_BED) {
    return { action: 'defer', reason: 'wool-short', wool, planks, beds: 0, crafts: 0, bedsYield: 0, woolLeft: wool, plankLeft: planks }
  }
  return { action: 'defer', reason: 'planks-short', wool, planks, beds: 0, crafts: 0, bedsYield: 0, woolLeft: wool, plankLeft: planks }
}
