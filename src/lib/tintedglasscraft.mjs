// (v0.976.458) Tinted glass craft decision for the bot fleet.
//
// THE PROBLEM: the amethyst economy's first leg spoke (the spyglass
// word v0.976.457 - the watch lane's own instrument, the shard's own
// demand word) and the OPEN FRONTS priced the shard's own next - but
// the LIGHT-BLOCKING never priced: a bot shard-rich (the geode trip
// the spyglass word's defer names) melts no glass in the dark (the
// plain glass the smeltglass word's own melt rides) while the pocket's
// own shards and glass ARE the tinted form (4 amethyst shards + 1
// glass -> 2 tinted glass, vanilla). The tinted glass blocks the
// light and keeps the view - a CRAFTED form gives the build lane its
// own window the way the bottle gives the drink. THE FIX:
// decideTintedGlassCraft() prices the TINTED POVERTY - one pocket map
// to ONE craft word with ONE reason:
//   'keep'   - a tinted glass already held (the build lane's own form
//              never doubles - the pieces-held law's twin, the craft
//              family's own keep gate)
//   'craft'  - shard >= 4 AND glass >= 1 (the min law binds BOTH legs
//              - the clockcraft word's own two-legged reading: every
//              four shards and one glass price their form honestly -
//              the floor law, the leftovers named, never capped)
//   'defer'  - shard-short OR glass-short (the honest shortage names
//              its starving leg - the shard priced FIRST, the rarer
//              leg: the geode trip owns that story; the glass leg
//              re-tasks the smeltglass lane's own melt trip, never a
//              guessed craft)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW CONTINUED: the spyglass word priced the amethyst
// economy's FIRST leg; this word the SECOND - the shard's own demand
// deepens (the geode trip's own yield the spyglass reads, this word
// the light's own block rides). The glass leg is the GLASS ECONOMY'S
// OWN DEMAND LEG (the smeltglass word's melt the supply - the
// sand->glass->bottle chain the pocket's own three legs; the
// glassbottle word the bottle's own ride, this word the window's own
// form). A bot holding spare shards it does not want still earns its
// tinted form if the pocket affords it, no other lane's face gates
// here. THE TINTED FAMILY LAW: the census rides exact 'tinted_glass'
// and nothing else - the STAINED GLASSES are the dye lanes' own
// forms, the GLASS PANE the pane lane's own thin form, both named
// never adopted (the shearscraft law); the glass census rides exact
// 'glass' - the plain melt the smeltglass lane's own yield (the
// input's own name), the bottle the glassbottle word's own form never
// adopted as the input. THE SHARD FAMILY LAW: the census rides exact
// 'amethyst_shard' - the AMETHYST BLOCK the storage lane's own
// compaction, the BUDDING AMETHYST the geode lane's own living stone,
// both named never adopted (the spyglass word's own reading). THE
// LIGHT LAW: four shards around one glass yield TWO - the vanilla
// recipe's own honest doubling, the yield never inflated. Junk inputs
// never throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a shard-rich glass-rich pocket prices every form it
// affords, an honest longer yield list never clamped - the min law's
// own ceiling is the RARER leg's, the word never rounds the yield
// into a lie. The pure read mutates nothing.

// the vanilla shard cost one tinted glass craft carries (four shards
// block the light)
export const TINTEDGLASS_SHARD_PER_CRAFT = 4
// the vanilla glass cost one tinted glass craft carries (the melt's
// own core)
export const TINTEDGLASS_GLASS_PER_CRAFT = 1
// the vanilla tinted glass yield one tinted glass craft produces
export const TINTEDGLASS_TINTED_PER_CRAFT = 2

/**
 * Decide whether one bot's pocket earns a tinted glass craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.tintedCount=0] tinted glass already held (the
 *                                      exact 'tinted_glass' name)
 * @param {number} [opts.shardCount=0]  amethyst shards on hand (the
 *                                      exact 'amethyst_shard' name,
 *                                      the geode trip's own drop)
 * @param {number} [opts.glassCount=0]  glass on hand (the exact
 *                                      'glass' name, the smeltglass
 *                                      word's own yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, tintedYield: number, shardLeft: number, glassLeft: number, tinted: number}}
 */
export function decideTintedGlassCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['tintedCount', 'shardCount', 'glassCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, tintedYield: 0, shardLeft: 0, glassLeft: 0, tinted: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const tinted = floor0(opts.tintedCount)
  const shard = floor0(opts.shardCount)
  const glass = floor0(opts.glassCount)
  // a tinted form already held: the build lane's own story - the
  // window rides by item, the tinted economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (tinted >= 1) {
    return { action: 'keep', reason: 'tinted-held', shardLeft: shard, glassLeft: glass, tinted, crafts: 0, tintedYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // clockcraft word's own two-legged reading. Every four shards and
  // one glass price their form honestly - the floor law prices the
  // yield, the leftovers named, the caller picks how many forms the
  // build lane needs - the word never rounds the yield into a lie and
  // never caps the pocket.
  const crafts = Math.min(
    Math.floor(shard / TINTEDGLASS_SHARD_PER_CRAFT),
    Math.floor(glass / TINTEDGLASS_GLASS_PER_CRAFT)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'shard-glass-affordable',
      crafts,
      tintedYield: crafts * TINTEDGLASS_TINTED_PER_CRAFT,
      shardLeft: shard - crafts * TINTEDGLASS_SHARD_PER_CRAFT,
      glassLeft: glass - crafts * TINTEDGLASS_GLASS_PER_CRAFT,
      tinted: 0
    }
  }
  // the honest shortage names its starving leg: the shard priced
  // FIRST - the rarer leg, the geode trip owns that story; the glass
  // leg re-tasks the smeltglass lane's own melt trip, never a guessed
  // craft
  if (shard < TINTEDGLASS_SHARD_PER_CRAFT) {
    return { action: 'defer', reason: 'shard-short', shardLeft: shard, glassLeft: glass, tinted: 0, crafts: 0, tintedYield: 0 }
  }
  return { action: 'defer', reason: 'glass-short', shardLeft: shard, glassLeft: glass, tinted: 0, crafts: 0, tintedYield: 0 }
}
