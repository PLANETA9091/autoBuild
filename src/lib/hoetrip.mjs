// (v0.976.483) Hoe trip till decision for the bot fleet.
//
// THE PROBLEM: the crop lane priced its ground tool (the hoecraft
// word, v0.976.478) and its replant (the wheatsow word, v0.976.475)
// - but the TILL never priced: the wheatsow word's own ground law
// reads "the hoe mints the tilled tile, the hoe trip owns that
// story" while the hoe trip itself walked unpriced - and the TILL IS
// THE GROUND'S OWN MINT (one hoe-swing on one tillable block mints
// one farmland, vanilla - the durability's own toll, no craft grid,
// no fuel, the tool's own even exchange). THE NAMING CHAIN CLOSED:
// the hoecraft word minted the wooden hoe and named the ground law
// "TILL NEVER PRICED: the tilled tile stays the wheatsow ground
// story" - this word prices the trip that mints the tile the
// wheatsow word sows on (the sow's farmland the till's own child).
// THE FIX: decideHoeTrip() prices the TILL LANE - one pocket-and-
// field map to ONE word with ONE reason:
//   'keep'   - no tillable ground in reach (THE GROUND GATE: the
//              wheatsow word's own GROUND LAW's mirror - the ground
//              gate reads first, no ground = no trip regardless of
//              the pocket; the tilled tile either stands or the
//              terraform story owns it, the word never guesses
//              which)
//   'defer'  - the hoe leg starves (THE HOE-SHORT LAW: the defer
//              names the hoecraft word's own mint - the wooden hoe
//              the pocket's own coin, two planks-family + two sticks
//              the mint's own price; the trip the mint's own child)
//   'till'   - both legs afford (the min law binds BOTH legs - the
//              durability leg and the ground leg - the wheatsow
//              word's own sow reading's twin: seeds + farmland ->
//              planted here hoe-uses + tillable -> farmland, no
//              cap, every till both legs afford priced)
//   'refuse' - junk input (never throws into the fleet loop)
// THE DURABILITY LAW: the wooden hoe's own fifty-nine - one wooden
// hoe carries fifty-nine till swings (vanilla's own durability, the
// pocket census's own multiplier); the hoe leg reads uses = hoes x
// 59, never one-item-per-one-till (the tool's own even exchange
// prices the uses, the item never burns). THE CENSUS LAW: exact
// 'wooden_hoe' (the hoecraft word's own mint's own form - the
// STONE/IRON/GOLDEN/DIAMOND hoe the tier ladder's future named
// never priced here, never adopted into the wooden count, the
// golden's own thirty-two never guessed into a lie); the tillable
// ground the CALLER'S OWN BLOCK CENSUS over the three safe forms -
// 'dirt', 'grass_block', 'coarse_dirt' (the farmland mint's own
// vanilla set; the PODZOL and the MYCELIUM the biome story's own,
// named never priced here; the FARMLAND itself the minted form,
// never counted as its own mother). THE ONE-TO-ONE LAW: one till
// mints one farmland (vanilla's own deterministic ground exchange -
// the pick word's own even hand's ground twin). Junk inputs never
// throw: they return a refuse with the junk-input reason so a
// caller bug degrades into a log line, not a crash loop. Negative
// counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in
// the clamp. No cap: a ground-rich tool-rich read prices every till
// both legs afford, an honest longer census never clamped.
// Fractional counts floor honestly with the remainder named. The
// pure read mutates nothing.

// the vanilla wooden hoe durability one pocket hoe carries (the
// tool's own fifty-nine till swings - the durability leg's own
// multiplier)
export const HOETRIP_TILLS_PER_HOE = 59
// the vanilla farmland yield one till mints (the ground's own
// deterministic one-to-one exchange)
export const HOETRIP_FARMLAND_PER_TILL = 1

/**
 * Decide whether one bot's pocket earns a hoe trip till word.
 *
 * @param {object} [opts]
 * @param {number} [opts.hoesCount=0]       wooden hoes on hand (the
 *                                          exact 'wooden_hoe' name -
 *                                          the hoecraft word's own
 *                                          mint's own form; the
 *                                          exotic tiers never
 *                                          adopted)
 * @param {number} [opts.tillableCount=0]   tillable blocks in reach
 *                                          (the caller's own block
 *                                          census over dirt /
 *                                          grass_block /
 *                                          coarse_dirt - the
 *                                          ground's own stock the
 *                                          world holds, never a
 *                                          pocket item; the FARMLAND
 *                                          itself never counted as
 *                                          its own mother)
 * @returns {{action: 'till'|'defer'|'keep'|'refuse', reason: string, tills: number, farmlandYield: number, usesLeft: number, tillableLeft: number}}
 */
export function decideHoeTrip (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['hoesCount', 'tillableCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', tills: 0, farmlandYield: 0, usesLeft: 0, tillableLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const hoes = floor0(opts.hoesCount)
  const tillable = floor0(opts.tillableCount)
  // the ground gate reads first: no tillable ground = no trip
  // regardless of the pocket (the GROUND LAW's mirror - the word
  // never guesses which the terraform story owes).
  if (tillable < HOETRIP_FARMLAND_PER_TILL) {
    return { action: 'keep', reason: 'no-tillable-ground', tills: 0, farmlandYield: 0, usesLeft: hoes * HOETRIP_TILLS_PER_HOE, tillableLeft: tillable }
  }
  // the hoe leg starves: the honest shortage names the hoecraft
  // word's own mint (the wooden hoe the pocket's own coin - two
  // planks-family + two sticks the mint's own price; the trip the
  // mint's own child).
  const uses = hoes * HOETRIP_TILLS_PER_HOE
  if (uses < HOETRIP_FARMLAND_PER_TILL) {
    return { action: 'defer', reason: 'hoe-short', tills: 0, farmlandYield: 0, usesLeft: 0, tillableLeft: tillable }
  }
  // the field's own arithmetic: the min law binds BOTH legs (the
  // durability leg and the ground leg) - every till both legs afford
  // priced honestly, the word never rounds the census into a lie
  // and never caps the field.
  const tills = Math.floor(Math.min(uses, tillable))
  return {
    action: 'till',
    reason: 'ground-and-hoe-afford',
    tills,
    farmlandYield: tills * HOETRIP_FARMLAND_PER_TILL,
    usesLeft: uses - tills,
    tillableLeft: tillable - tills
  }
}
