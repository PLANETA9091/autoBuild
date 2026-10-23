// (v0.976.426) Crafting-table decision for the bot fleet.
//
// THE PROBLEM: every craft word in the family prices a recipe the CRAFT
// SEAT works - but nothing prices the SEAT ITSELF the pocket could craft
// (4 planks -> 1 crafting_table, vanilla). A plank-rich table-less pocket
// re-tasks around every craft lane while the planks it carries ARE the
// seat: the placed-table story the arms.mjs machine prices (craftUntilFn),
// the pocket spare nobody names. THE FIX: decideTableCraft() prices the
// CRAFT ECONOMY's base word - one pocket map to ONE word with ONE reason:
//   'keep'   - a table already in the pocket (the craft seat owns the story)
//   'craft'  - planks affordable, the honest yield priced
//   'defer'  - planks-short (the honest dead end - the wood trip)
//   'refuse' - junk input (never throws into the fleet loop)
// THE PLANK FAMILY LAW: the crafting-table recipe takes any wood family
// (vanilla accepts the whole *_planks family mixed) - the caller's census
// sums the family, the word never splits it. Junk inputs never throw: they
// return a refuse with the junk-input reason so a caller bug degrades into
// a log line, not a crash loop. Negative counts floor to zero (a lying
// census must not poison the arithmetic); they are read, not refused - the
// honesty lives in the clamp. No cap: a plank-rich pocket prices every
// table it affords, the remainder (surplus) named, never rounded into a
// lie. The pure read mutates nothing.

// the vanilla crafting-table price: the square is 4 planks
export const TABLECRAFT_PLANKS_PER_TABLE = 4

/**
 * Decide whether one bot's pocket earns a crafting-table word.
 *
 * @param {object} [opts]
 * @param {number} [opts.planksCount=0] planks on hand (any wood family, summed)
 * @param {number} [opts.tableCount=0]  crafting_table items already held
 *                                      (the pocket spare; the PLACED table
 *                                      is the craft seat's own story)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, planks: number, tables: number, surplus: number, cost: number}}
 */
export function decideTableCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['planksCount', 'tableCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', planks: 0, tables: 0, surplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const planks = floor0(opts.planksCount)
  const held = floor0(opts.tableCount)
  // a table already in the pocket: the craft seat's own story - the arms
  // machine prices the placed table and the crafting itself, the pocket
  // economy stays silent (the pieces-held law's twin, the family keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'table-held', planks, tables: 0, surplus: 0, cost: 0 }
  }
  // the pocket's own arithmetic: every four planks price their table
  // honestly, the remainder is named not rounded away - the word never
  // caps the pocket and never lies about the surplus.
  if (planks >= TABLECRAFT_PLANKS_PER_TABLE) {
    return {
      action: 'craft',
      reason: 'planks-affordable',
      planks,
      tables: Math.floor(planks / TABLECRAFT_PLANKS_PER_TABLE),
      surplus: planks % TABLECRAFT_PLANKS_PER_TABLE,
      cost: TABLECRAFT_PLANKS_PER_TABLE
    }
  }
  // plank-poor and table-less: the honest dead end - the wood trip the
  // caller re-tasks to, the shortage named, never a guessed craft
  return {
    action: 'defer',
    reason: 'planks-short',
    planks,
    tables: 0,
    surplus: 0,
    cost: TABLECRAFT_PLANKS_PER_TABLE
  }
}
