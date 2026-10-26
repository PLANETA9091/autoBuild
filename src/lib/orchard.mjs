// (v0.976.484) Orchard trip decision for the bot fleet.
//
// THE PROBLEM: the gold lane priced its fruit (the goldenapple word,
// v0.976.460: eight gold + one apple -> one golden apple) - but the
// APPLE'S OWN SUPPLY never priced: a bot holding eight ingots walks
// the gold table while the grove it crosses stands full of oak
// leaves - and the ORCHARD IS THE FRUIT'S OWN GROVE (one oak leaf
// breaks with a chance of one apple, vanilla - no craft grid, no
// fuel, the grove's own dice). THE NAMING CHAIN CLOSED: the
// goldenapple word crafts from a pocket apple while the apple's own
// supply story walked unpriced - this word prices the grove's own
// walk (the ingot's fruit the orchard's own child). THE FIX:
// decideOrchardTrip() prices the ORCHARD LANE - one pocket-and-
// grove map to ONE word with ONE reason:
//   'keep'   - the pocket apple already held (THE GROVE KEEP: the
//              goldenapple word's own apple leg already rides - the
//              orchard walk never doubles the pocket's own coin, the
//              coop word's own MORNING LAW's sibling, the
//              keep-gate-first law reads the held apple beats any
//              promise the grove makes) OR the grove stands bare of
//              oak leaves (THE GROVE LAW: the leaf-empty reads the
//              KEEP, never a defer - the coop word's own PEN LAW's
//              twin: the oak either stands in reach or the sapling
//              story owes it, the word never guesses which)
//   'break'  - oak leaves in reach and the pocket bare (one oak
//              leaf earns its own break pass - no cap, every pass
//              the grove affords priced)
//   'refuse' - junk input (never throws into the fleet loop)
// THE NO-DEFER LAW: the keep-two word - the coop word's own
// reading's third ride (the egg's lane, the gourd's lane, now the
// apple's lane): no honest shortage lives past the two keeps (the
// apple either rides the pocket or the grove's own walk faces the
// dice; the grove's dice the only coin the lane cannot price).
// THE CHANCE LAW: the apple yield rides the drop's own dice - the
// word prices the BREAK only, the drop's own half-percent the
// vanilla leaf's own chance named never guessed here (the coop
// word's own GATHER LAW's sibling - the egg the world's clock lays
// and the walk never mints, the apple the grove's dice drops and
// the walk never mints; the pick word's own deterministic even hand
// the honest opposite - the gourd the hand breaks into its own
// one-to-one, the leaf the dice decides). THE CENSUS LAW: exact
// 'apple' (the pocket's own fruit - the GOLDEN APPLE the ingot's
// own form never adopted, the enchanted never); the oak leaf the
// CALLER'S OWN BLOCK CENSUS over 'oak_leaves' (the grove's own
// stock the world holds - never a pocket item; the BIRCH and the
// SPRUCE and the JUNGLE the other groves' own stories, never
// adopted; the PERSISTENT flag the hedge's own form, the break's
// own dice the same). Junk inputs never throw: they return a
// refuse with the junk-input reason so a caller bug degrades into
// a log line, not a crash loop. Negative counts floor to zero (a
// lying census must not poison the arithmetic); they are read, not
// refused - the honesty lives in the clamp. No cap: a grove-rich
// bare-pocket read prices every pass it affords, an honest longer
// census never clamped. Fractional counts floor honestly with the
// remainder named. The pure read mutates nothing.

// the vanilla break-pass cost one orchard trip carries per oak leaf
// in reach (the grove's own unit - each leaf earns its own pass)
export const ORCHARD_PASSES_PER_LEAF = 1

/**
 * Decide whether one bot's pocket earns an orchard trip word.
 *
 * @param {object} [opts]
 * @param {number} [opts.applesCount=0]  apples on hand (the exact
 *                                       'apple' name - the GOLDEN
 *                                       APPLE the ingot's own form,
 *                                       never adopted)
 * @param {number} [opts.leavesCount=0]  oak leaves in reach (the
 *                                       caller's own block census -
 *                                       the grove's own stock the
 *                                       world holds, never a pocket
 *                                       item; the other leaves
 *                                       never adopted)
 * @returns {{action: 'break'|'keep'|'refuse', reason: string, passes: number, applesLeft: number, leavesLeft: number}}
 */
export function decideOrchardTrip (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['applesCount', 'leavesCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', passes: 0, applesLeft: 0, leavesLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const apples = floor0(opts.applesCount)
  const leaves = floor0(opts.leavesCount)
  // the pocket apple already held: the goldenapple word's own leg
  // already rides - the orchard walk never doubles the pocket's own
  // coin (the MINT-ON-DEMAND keep law's sibling; keep-gate-first:
  // the held apple beats any promise the grove makes).
  if (apples >= 1) {
    return { action: 'keep', reason: 'apple-held', passes: 0, applesLeft: apples, leavesLeft: leaves }
  }
  // the grove stands bare of oak leaves: the oak either stands in
  // reach or the sapling story owes it - the word never guesses
  // which (the PEN LAW's twin: the KEEP, never a defer - no honest
  // shortage lives past the empty gate).
  if (leaves < ORCHARD_PASSES_PER_LEAF) {
    return { action: 'keep', reason: 'grove-empty', passes: 0, applesLeft: apples, leavesLeft: leaves }
  }
  // the grove's own arithmetic: every oak leaf in reach earns its
  // own break pass honestly - the pass prices the BREAK only, the
  // apple yield rides the drop's own dice (named never guessed), the
  // word never rounds the census into a lie and never caps the
  // grove.
  const passes = Math.floor(leaves / ORCHARD_PASSES_PER_LEAF)
  return {
    action: 'break',
    reason: 'leaves-in-reach',
    passes,
    applesLeft: apples,
    leavesLeft: leaves - passes * ORCHARD_PASSES_PER_LEAF
  }
}
