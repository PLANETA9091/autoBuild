// (v0.976.463) Gold nugget split decision for the bot fleet.
//
// THE PROBLEM: the gold economy's demand priced three legs - the
// clockcraft word's own timepiece (4 ingots + 1 redstone, v0.976.449)
// the time lane, the goldenapple word (8 ingots + 1 apple, v0.976.460)
// the premium food lane, the goldencarrot word (8 nuggets + 1 carrot,
// v0.976.462) the brewing lane - but the NUGGET never minted: the
// goldencarrot word's own honest shortage names the metal leg FIRST
// (nugget-short, the smeltgold lane's own downstream) and the split
// the caller re-tasks stayed NAMED NEVER PRICED. A bot ingot-rich
// nugget-poor rots the ingot while the brewing lane's own wrap
// starves for nuggets: 1 gold ingot -> 9 gold nuggets, vanilla
// (the shapeless split, the crafting grid's own work, no fuel - the
// fire never rides this lane). THE FIX: decideNuggetCraft() prices
// the SPLIT LANE - one pocket map to ONE word with ONE reason:
//   'keep'   - the ingot lane empty (the splitter's own silence - the
//              smeltgold lane owns that story, the melt mints the
//              ingot the split never guesses; nothing rides the grid)
//   'craft'  - the split affordable (the one-leg law: the ingot the
//              only leg, the craft free - the floor law prices the
//              count, the fractional remainder named, never capped)
//   'refuse' - junk input (never throws into the fleet loop)
// THE SPLIT LAW: one ingot mints nine nuggets - the vanilla recipe's
// own honest form, the yield never inflated, the count never
// fractional (a lying fractional census floors to the honest integer,
// the remainder named in the ingotLeft). THE ONE-LEG LAW: the split
// is fuel-free (the crafting grid's own work) - no second leg exists,
// no honest shortage lives past the empty gate (the smeltgold word's
// fuel-short defer has no twin here; the empty pocket reads the
// honest keep - the supply word's own silence, the .461 heal's own
// lesson read FIRST: the test asserts the pocket's true action, the
// keep gate prices the EMPTY lane honestly). THE METAL LAW: the ingot
// census rides exact 'gold_ingot' - the smeltgold lane's own yield;
// the nugget census rides exact 'gold_nugget' - the split form this
// word's own metal, the gold block the storage lane's own form named
// never adopted. THE WRAP NEVER CROSSES: the goldenapple word wraps
// the INGOT (8 per), the goldencarrot word wraps the NUGGET (8 per),
// this word mints the NUGGET the wrap never spends - the split's own
// yield rides the nuggetYield field, never silently merged into the
// held count (the caller's census brings the nuggets, this word
// prices the split only). THE SUPPLY WORD'S OWN SILENCE: a bot
// nugget-rich ingot-poor keeps - the nugget count rides the
// nuggetLeft untouched, the split never mints from hunger (no demand
// face gates here - the goldencarrot word owns the wrap's story, the
// caller re-tasks the split when the wrap defers nugget-short). Junk
// inputs never throw: they return a refuse with the junk-input reason
// so a caller bug degrades into a log line, not a crash loop.
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: an ingot-rich pocket prices every split it affords,
// an honest longer yield list never clamped. The pure read mutates
// nothing.

// the vanilla split ratio: one gold ingot mints nine gold nuggets
export const NUGGETCRAFT_INGOT_PER_SPLIT = 1
// the vanilla split yield: nine nuggets ride one ingot out
export const NUGGETCRAFT_NUGGET_PER_SPLIT = 9

/**
 * Decide whether one bot's pocket earns a nugget split word.
 *
 * @param {object} [opts]
 * @param {number} [opts.ingotCount=0]  gold ingots on hand (the exact
 *                                      'gold_ingot' name, the smeltgold
 *                                      lane's own yield)
 * @param {number} [opts.nuggetCount=0] gold nuggets already held (the
 *                                      exact 'gold_nugget' name, the
 *                                      split form's own metal - rides
 *                                      the nuggetLeft untouched, the
 *                                      yield never silently merged)
 * @returns {{action: 'craft'|'refuse'|'keep', reason: string, splits: number, nuggetYield: number, ingotLeft: number, nuggetLeft: number}}
 */
export function decideNuggetCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['ingotCount', 'nuggetCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', splits: 0, nuggetYield: 0, ingotLeft: 0, nuggetLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const ingot = floor0(opts.ingotCount)
  const nugget = floor0(opts.nuggetCount)
  // the ingot lane empty: the splitter's own silence - the smeltgold
  // lane owns that story (the melt mints the ingot, the split never
  // guesses), nothing rides the grid (the keep-gate-first law, the
  // supply word's own honest empty reading - the family's own keep
  // gate).
  if (ingot < 1) {
    return { action: 'keep', reason: 'ingot-empty', splits: 0, nuggetYield: 0, ingotLeft: 0, nuggetLeft: nugget }
  }
  // the pocket's own arithmetic: the one-leg law - the ingot the only
  // leg, the craft free (the grid's own work, the fire never rides).
  // The floor law prices the count (a fractional census floors to the
  // honest integer, the remainder named in the ingotLeft), the yield
  // never inflated, the nuggetLeft the held nuggets ride untouched -
  // the yield never silently merged (the caller merges; the pure read
  // mutates nothing), never capped beyond the pocket.
  const splits = Math.floor(ingot)
  return {
    action: 'craft',
    reason: 'ingot-affordable',
    splits,
    nuggetYield: splits * NUGGETCRAFT_NUGGET_PER_SPLIT,
    ingotLeft: ingot - splits,
    nuggetLeft: nugget
  }
}
