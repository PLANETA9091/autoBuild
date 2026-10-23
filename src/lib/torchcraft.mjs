// (v0.976.425) Torch craft decision for the bot fleet.
//
// THE PROBLEM: the torch placement machinery (src/lib/torch.mjs,
// torchbook.mjs, torchcast.mjs) walks and plants the light, but nothing
// prices the TORCHES the pocket could craft itself (1 coal + 1 stick ->
// 4 torches, vanilla). A coal-and-stick-rich torch-less bot walks dark
// ground while its own pockets already hold the light - the coal leg the
// charcoal rung owns (smelting.mjs), the stick leg the stickcraft word's
// own chain leg (v0.976.421). THE FIX: decideTorchCraft() prices the
// LIGHT economy's first word - one pocket map to ONE word with ONE reason:
//   'keep'   - torches already held (the light lane owns that story)
//   'craft'  - the coal family + sticks affordable, the honest yield priced
//   'defer'  - one leg short, the missing leg NAMED (coal-short names the
//              charcoal rung's seat, sticks-short names the stickcraft
//              chain's own leg - the caller sees WHICH leg the pocket misses)
//   'refuse' - junk input (never throws into the fleet loop)
// THE COAL FAMILY LAW: the torch recipe burns the whole coal family
// (coal + charcoal, vanilla both craft torches) - the caller's census sums
// the family, the word never splits it. Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug degrades
// into a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not refused
// - the honesty lives in the clamp. No cap: a fuel-rich pocket prices
// every torch it affords, the leftover of BOTH legs named, never rounded
// into a lie. The pure read mutates nothing.

// the vanilla torch yield one coal prices (1 coal + 1 stick -> 4 torches)
export const TORCHCRAFT_TORCHES_PER_CRAFT = 4
// the vanilla torch recipe's coal-family price (one piece per craft)
export const TORCHCRAFT_COAL_PER_CRAFT = 1
// the vanilla torch recipe's stick price (one stick per craft)
export const TORCHCRAFT_STICK_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a torch craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.coalCount=0]   the coal family on hand (coal +
 *                                      charcoal, summed by the caller)
 * @param {number} [opts.stickCount=0]  sticks on hand
 * @param {number} [opts.torchCount=0]  torches already held
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, coal: number, sticks: number, torches: number, crafts: number, torchesYield: number, coalLeft: number, stickLeft: number}}
 */
export function decideTorchCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['coalCount', 'stickCount', 'torchCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', coal: 0, sticks: 0, torches: 0, crafts: 0, torchesYield: 0, coalLeft: 0, stickLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const coal = floor0(opts.coalCount)
  const sticks = floor0(opts.stickCount)
  const held = floor0(opts.torchCount)
  // torches already held: the light lane's own story - the placement
  // machinery prices the planting, the torch economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'torches-held', coal, sticks, torches: held, crafts: 0, torchesYield: 0, coalLeft: 0, stickLeft: 0 }
  }
  // the pocket's own arithmetic: every coal-and-stick pair prices its four
  // torches honestly, the crafts the SHORTER leg affords - the leftover of
  // both legs named, never rounded away, never capped.
  if (coal >= TORCHCRAFT_COAL_PER_CRAFT && sticks >= TORCHCRAFT_STICK_PER_CRAFT) {
    const crafts = Math.min(coal, sticks)
    return {
      action: 'craft',
      reason: 'coal-stick-affordable',
      coal,
      sticks,
      torches: held,
      crafts,
      torchesYield: crafts * TORCHCRAFT_TORCHES_PER_CRAFT,
      coalLeft: coal - crafts,
      stickLeft: sticks - crafts
    }
  }
  // one leg short: the honest dead end - the missing leg NAMED, never a
  // guessed craft. sticks-short names the stickcraft chain's own leg
  // (v0.976.421); coal-short names the charcoal rung's own seat
  // (smelting.mjs the log-burned-into-charcoal face).
  if (coal < TORCHCRAFT_COAL_PER_CRAFT) {
    return { action: 'defer', reason: 'coal-short', coal, sticks, torches: held, crafts: 0, torchesYield: 0, coalLeft: 0, stickLeft: 0 }
  }
  return { action: 'defer', reason: 'sticks-short', coal, sticks, torches: held, crafts: 0, torchesYield: 0, coalLeft: 0, stickLeft: 0 }
}
