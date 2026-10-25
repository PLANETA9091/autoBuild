// (v0.976.476) Respawn anchor craft decision for the bot fleet.
//
// THE PROBLEM: the nether economy priced its fuel (the blazefuel
// word, v0.976.466), its sow (the netherwart word, v0.976.470) and
// its chain (the magmacream word, v0.976.468) - but the BED never
// priced: a bot crying-rich glowstone-rich hauls the nether's own
// bed loose while the anchor it walks past IS the bed (6 crying
// obsidian + 3 glowstone -> 1 respawn anchor, vanilla - the shaped
// rows, the crafting grid's own work, no fuel - the fire never rides
// this lane). THE NAMING CHAIN CLOSED: the enderchest word
// (v0.976.473) census law named "the CRYING OBSIDIAN the anchor's
// own form - the respawn anchor the nether's own bed story, never
// adopted" - the nether's own bed form named never adopted, priced
// at last. THE TWO OBSIDIAN FORMS OPPOSITE: the enderchest prices
// the PLAIN obsidian (the overworld portal's own eight-form), this
// word the CRYING (the nether bed's own six-form) - the census never
// bends (the enderchest still never adopts the crying form, this
// word never adopts the plain). THE FIX: decideRespawnAnchor()
// prices the BED LANE - one pocket map to ONE word with ONE reason:
//   'keep'   - an anchor already held (the nether bed never doubles
//              - the enderchest word's own keep law's twin, the
//              craft family's own keep gate; the crying and the
//              glowstone ride their lefts untouched)
//   'craft'  - crying + glowstone affordable (the min law binds BOTH
//              legs - the enderchest word's own two-legged reading,
//              the floor law prices the yield, the leftovers named,
//              never capped)
//   'defer'  - the honest shortage names its starving leg
//              (crying-short FIRST - the binding leg at six-per, the
//              ruined portal's own story, the piglin barter's own
//              mint: the gold ingot the barter's own coin, the
//              nuggetcraft word's own metal crossing; glowstone-short
//              - the nether crossing's own harvest, the witch's own
//              drop named never priced here)
//   'refuse' - junk input (never throws into the fleet loop)
// THE SIX-FORM LAW: six crying wrap three glowstone and yield ONE
// anchor - the vanilla recipe's own honest form, the goldenapple
// word's own eight-form's cousin grown into the nether's own metal,
// the yield never inflated. THE CHARGE NEVER PRICED: the anchor's
// own four charges ride the glowstone block's own use (the nether
// bed's own dial) - the word prices the CRAFT only, the charge the
// trip lane's own story named never guessed here; the OVERWORLD's
// own anger (the anchor explodes outside the nether - vanilla) the
// placement law the trip lane owns. THE CENSUS LAW: exact
// 'respawn_anchor' (the block the nether bed's own form); exact
// 'crying_obsidian' (the enderchest word's own never-adopted form,
// priced here - the PLAIN OBSIDIAN the portal's own form, never
// adopted here, the census never bends); exact 'glowstone' (the
// BLOCK the craft's own leg - the GLOWSTONE DUST the witch's own
// drop the brewing lane's own story, never adopted). Junk inputs
// never throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a crying-rich glowstone-rich pocket prices every
// anchor it affords, an honest longer stack never clamped. The pure
// read mutates nothing.

// the vanilla crying obsidian cost one respawn anchor craft carries
// (six wrap the glowstone)
export const RESPAWNANCHOR_CRYING_PER_ANCHOR = 6
// the vanilla glowstone cost one respawn anchor craft carries (the
// three-per leg)
export const RESPAWNANCHOR_GLOWSTONE_PER_ANCHOR = 3
// the vanilla respawn anchor yield one craft produces
export const RESPAWNANCHOR_ANCHORS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a respawn anchor craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.anchorCount=0]    respawn anchors already held
 *                                         (the exact 'respawn_anchor'
 *                                         name, the nether bed's own
 *                                         stock)
 * @param {number} [opts.cryingCount=0]    crying obsidian on hand (the
 *                                         exact 'crying_obsidian'
 *                                         name, the ruined portal's
 *                                         own story, the piglin
 *                                         barter's own mint - the
 *                                         PLAIN OBSIDIAN never
 *                                         adopted)
 * @param {number} [opts.glowstoneCount=0] glowstone blocks on hand
 *                                         (the exact 'glowstone'
 *                                         name, the nether
 *                                         crossing's own harvest -
 *                                         the GLOWSTONE DUST never
 *                                         adopted)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, anchorYield: number, cryingLeft: number, glowstoneLeft: number, anchors: number}}
 */
export function decideRespawnAnchor (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['anchorCount', 'cryingCount', 'glowstoneCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, anchorYield: 0, cryingLeft: 0, glowstoneLeft: 0, anchors: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const anchors = floor0(opts.anchorCount)
  const crying = floor0(opts.cryingCount)
  const glowstone = floor0(opts.glowstoneCount)
  // a bed already held: the pocket's own nether story - the anchor
  // rides by item, the bed economy stays silent (the enderchest
  // word's own keep law's twin, the craft family's own keep gate),
  // the crying and the glowstone ride their lefts untouched.
  if (anchors >= 1) {
    return { action: 'keep', reason: 'anchor-held', cryingLeft: crying, glowstoneLeft: glowstone, anchors, crafts: 0, anchorYield: 0 }
  }
  // the pocket's own arithmetic: the min law binds BOTH legs - the
  // enderchest word's own two-legged reading. Every six crying and
  // three glowstone price their bed honestly - the floor law prices
  // the yield, the leftovers named, never capped beyond the pocket.
  const crafts = Math.min(
    Math.floor(crying / RESPAWNANCHOR_CRYING_PER_ANCHOR),
    Math.floor(glowstone / RESPAWNANCHOR_GLOWSTONE_PER_ANCHOR)
  )
  if (crafts >= 1) {
    return {
      action: 'craft',
      reason: 'crying-glowstone-affordable',
      crafts,
      anchorYield: crafts * RESPAWNANCHOR_ANCHORS_PER_CRAFT,
      cryingLeft: crying - crafts * RESPAWNANCHOR_CRYING_PER_ANCHOR,
      glowstoneLeft: glowstone - crafts * RESPAWNANCHOR_GLOWSTONE_PER_ANCHOR,
      anchors: 0
    }
  }
  // the honest shortage names its starving leg: the crying priced
  // FIRST - the binding leg at six-per, the ruined portal's own
  // story, the piglin barter's own mint (the gold ingot the barter's
  // own coin, the nuggetcraft word's own metal crossing), never a
  // guessed craft; the glowstone leg the nether crossing's own
  // harvest (the witch's own drop named never priced here), never a
  // guessed craft
  if (crying < RESPAWNANCHOR_CRYING_PER_ANCHOR) {
    return { action: 'defer', reason: 'crying-short', cryingLeft: crying, glowstoneLeft: glowstone, anchors: 0, crafts: 0, anchorYield: 0 }
  }
  return { action: 'defer', reason: 'glowstone-short', cryingLeft: crying, glowstoneLeft: glowstone, anchors: 0, crafts: 0, anchorYield: 0 }
}
