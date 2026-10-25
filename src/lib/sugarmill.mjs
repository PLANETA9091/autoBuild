// (v0.976.480) Sugar mill decision for the bot fleet.
//
// THE PROBLEM: the sugar rides two priced words as a ready coin - the
// fermentedeye word (v0.976.469) reads exact 'sugar' for its three-leg
// craft and keeps its SUGAR LAW honest ("the sugar rides the cane's
// own peel - 1 sugar cane -> 1 sugar, vanilla - the peel priced NEVER
// here"), and the pumpkinpie word (v0.976.479) reads exact 'sugar' for
// its feast ("the sweetener the mill's own") and defers sugar-short
// naming the cane's own mill - but the MILL itself never priced: a
// cane-rich pocket buys no sweetener, the two words starve on a coin
// whose mint everybody names and nobody owns.
// THE FIX: decideSugarmill() prices the sweetener's own mint - the
// mill (1 sugar cane -> 1 sugar, vanilla; the shapeless peel, no
// fuel, the grid's own work) - one pocket map to ONE word with ONE
// reason:
//   'keep'   - sugar already held (the sweetener never doubles - the
//              mill mints on demand, the consume-then-remint cycle's
//              own gate)
//   'craft'  - the cane leg affordable, the honest one-per yield
//   'defer'  - cane-short (the waterline's own crop, the cane farm's
//              own stalk story - the trip the pocket owes)
//   'refuse' - junk input (never throws into the fleet loop)
// THE PEEL LAW: one cane peels into one sugar - the one-per law (the
// goldblock nine-form's own opposite, the bread word's own one-per
// table), the yield never inflated, the remainder never rounded into
// a lie. THE ONE-LEG LAW: the mill has ONE leg (the goldblock word's
// own one-leg reading - the storage's opposite direction, the split's
// opposite direction: nuggetcraft 1->9, goldblock 9->1, this word
// 1->1 the peel's own even hand). THE MINT NEVER CONSUMES THE STALK
// TWICE: the census reads exact 'sugar_cane' (the stalk's own form -
// no variant kin in vanilla's naming) and exact 'sugar' (the
// sweetener's own form - the cane never counts as sugar, the sugar
// never counts as cane). THE MINT-ON-DEMAND LAW: the keep gate reads
// the HELD SUGAR only - the held cane rides its own count (the stalk
// is the mill's own stock, never the sweetener's gate; the two words
// downstream read the sugar and never adopt the cane). Junk inputs
// never throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. A boolean
// rides the same law (a true count is a flag, never a number).
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a cane-rich pocket prices every sugar the
// arithmetic affords - the keep gate stops the actual milling at one
// held (the word prices, the fleet gates), the leftover named, never
// rounded into a lie. The pure read mutates nothing.

// the vanilla sugar recipe's cane price (one cane peels per sugar)
export const SUGARMILL_CANE_PER_CRAFT = 1
// one sugar per craft - the peel's own even hand (the one-per law)
export const SUGARS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a sugar mill word.
 *
 * @param {object} [opts]
 * @param {number} [opts.caneCount=0]  sugar cane on hand (exact
 *                                     'sugar_cane')
 * @param {number} [opts.sugarCount=0] sugar already held (exact
 *                                     'sugar')
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, cane: number, sugar: number, crafts: number, sugarsYield: number, caneLeft: number}}
 */
export function decideSugarmill (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['caneCount', 'sugarCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', cane: 0, sugar: 0, crafts: 0, sugarsYield: 0, caneLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const cane = floor0(opts.caneCount)
  const held = floor0(opts.sugarCount)
  // sugar already held: the sweetener's own story - the mill never
  // doubles it (mint-on-demand, the consume-then-remint cycle's own
  // gate), the craft family's own keep gate.
  if (held >= 1) {
    return { action: 'keep', reason: 'sugar-held', cane, sugar: held, crafts: 0, sugarsYield: 0, caneLeft: cane }
  }
  // the pocket's own arithmetic: every cane peels into one sugar
  // honestly - the ONE-LEG law (the mill has no second leg to bind),
  // the word never rounds the yield into a lie and never caps the
  // pocket.
  if (cane >= SUGARMILL_CANE_PER_CRAFT) {
    const crafts = Math.floor(cane / SUGARMILL_CANE_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'cane-affordable',
      crafts,
      sugarsYield: crafts * SUGARS_PER_CRAFT,
      caneLeft: cane - crafts * SUGARMILL_CANE_PER_CRAFT,
      cane,
      sugar: 0
    }
  }
  // the one leg short: the honest shortage names the missing leg -
  // cane-short names the waterline's own crop (the cane farm's own
  // stalk story - the trip the pocket owes, never a guessed craft)
  return { action: 'defer', reason: 'cane-short', cane, sugar: 0, crafts: 0, sugarsYield: 0, caneLeft: cane }
}
