// (v0.976.420) THE ARMORCRAFT HANDS - the .387 word's craft seat, the
// toolupgrade spare-pick lane's sibling. THE GAP THE .387 WORD NAMED
// ITSELF: 'Consult only - the word never crafts; the craft seat owns
// the hands later.' The armorcraft consult has spoken the armor
// poverty every face since (the demand the iron count prices) while
// no arm crafted a single piece - the pockets stayed bare, the lane
// read dead by its own honest design. This word owns the hands: the
// verdict the .387 word prices becomes a table craft, the same
// mechanism stack the spare-pick lane rides (placeTable, craftUntil,
// the settle-then-count verify) - the policy stays the word's, the
// mechanism stays tools.mjs's.
//
// THE RESERVE LAW the check prices FIRST: the fleet's iron economy
// runs a reserve (the fleet19 deposit law) - until the bot's OWN
// pickaxe is iron, ingots are TOOL MATERIALS, not armor stock. A bot
// that spent its first 8 ingots on a chestplate while swinging a
// wooden pick would trade the fleet's whole yield ladder for one
// armor point. So the check stands down below the iron floor
// ('defer' 'tool-reserve') no matter what the pockets hold; the
// floor passes only when bestPickTier reads iron (tier 2). The
// word's own verdict then prices the poverty exactly as the .387
// word priced it - the hands never re-price the decision, they
// delegate (the fleetrerun delegation law's own mirror).
//
// THE LAWS the hands keep (the family's own, mirrored):
//   never fires blind - a non-craft verdict (keep/defer/refuse) is a
//     skip, not a craft: the hands' failure mode is NOT firing, the
//     episodic law's own cousin;
//   never throws into the fleet loop - a junk bot, a throwing
//     inventory, an aborted craft: the catch prices the error into
//     the verdict (the spare-pick lane's own junk-safe law), the
//     caller's loop rides on;
//   the settle-then-count verify - the craft is 'done' only when the
//     piece's count ROSE (the craftUntil want gate plus the before/
//     after read - a resolved click dance with no landing is not a
//     craft, the CI 3fd2e8a law's own);
//   the honest skip reasons - 'no table' the placeTable null, 'craft
//     did not land' the verify's own face (the .761 craft's-own-why
//     law: every exit names its why);
//   the deps seam - the test seam the spare-pick lane rides
//     (craftUntil, placeTable, the check itself, the counter); the
//     real helpers by default.
// Consult + hands, no CI call, no bot read beyond the inventory the
// caller's own bot carries.

import { countItem, placeTable, craftUntil } from '../bots/tools.mjs'
import { bestPickTier } from './toolupgrade.mjs'
import { decideArmorCraft, ARMORCARE_MAXES } from './armorcare.mjs'

// The reserve law's own floor: the tool lane owns the ingots until the
// bot's own pickaxe is iron (PICK_TIERS index 2 - the upgrade economy's
// own ceiling). Below it the pockets' ingots are TOOL MATERIALS.
export const ARMORCRAFT_PICK_FLOOR = 2

// The REFUSE shape the junk law speaks (the census the data cannot carry).
const UNREADABLE = () => ({
  action: 'refuse', reason: 'inventory-unreadable', piece: null, cost: 0,
  ingots: 0, pieces: 0, pickTier: -1
})

// The check the wiring polls: one bot's census + the reserve gate + the
// .387 word's own verdict, one shape out:
//   { action, reason, piece, cost, ingots, pieces, pickTier }
// The census reads the pocket AND the worn slots (the ARMORCARE_MAXES
// table names the pieces, any slot holds one); junk entries are skipped,
// never guessed. A junk bot prices the refuse - never throws.
export function armorCraftCheck (bot, opts = {}) {
  if (!bot || typeof bot !== 'object' || !bot.inventory || typeof bot.inventory.items !== 'function') {
    return UNREADABLE()
  }
  let items = []
  try { items = bot.inventory.items() ?? [] } catch { return UNREADABLE() }
  if (!Array.isArray(items)) return UNREADABLE()
  let ingots = 0
  let pieces = 0
  for (const it of items) {
    if (!it || typeof it.name !== 'string' || !Number.isFinite(it.count)) continue
    if (it.name === 'iron_ingot') ingots += it.count
    if (ARMORCARE_MAXES[it.name]) pieces += it.count
  }
  const pickTier = bestPickTier(bot)
  // THE RESERVE GATE - the fleet's iron-reserve law's own seat. Below the
  // iron floor the craft defers whatever the pockets hold: the ingots are
  // the tool lane's, the armor economy waits its turn.
  if (pickTier < ARMORCRAFT_PICK_FLOOR) {
    return { action: 'defer', reason: 'tool-reserve', piece: null, cost: 0, ingots, pieces, pickTier }
  }
  const v = decideArmorCraft({ ironIngotCount: ingots, armorPiecesHeld: pieces })
  return { ...v, ingots, pieces, pickTier }
}

// The hands: the check's 'craft' verdict becomes one table craft of the
// named piece, verified by the count rising. Never throws. The deps seam
// is the spare-pick lane's own law ({ check, placeTable, craftUntil,
// countItem } - the real helpers by default).
//   ok true            - the piece landed (count rose)
//   ok false           - the skip names its why: the verdict's own reason,
//                        'no table', 'craft did not land', 'error: ...'
export async function craftArmorPiece (bot, opts = {}) {
  const step = (opts && typeof opts.log === 'function') ? opts.log : (() => {})
  const d = (opts && typeof opts.deps === 'object' && opts.deps) || {}
  const check = d.check ?? armorCraftCheck
  const tableOf = d.placeTable ?? placeTable
  const craftFn = d.craftUntil ?? craftUntil
  const count = d.countItem ?? countItem
  try {
    const chk = check(bot)
    const shapeless = !chk || chk.action !== 'craft' || typeof chk.piece !== 'string' || chk.piece === ''
    if (shapeless) {
      // the why: an honest non-craft verdict carries its own reason; a
      // 'craft' word without a piece is a BROKEN shape - 'no verdict' is
      // the shape's own face (the verdict's reason must not dress it)
      const why = (!chk || chk.action === 'craft') ? 'no verdict' : (chk.reason || 'no verdict')
      step(`armorcraft: skip (${why})`)
      return { ok: false, piece: (chk && chk.piece) || null, reason: why }
    }
    const table = await tableOf(bot)
    if (!table) {
      step('armorcraft: no table reachable or placeable')
      return { ok: false, piece: chk.piece, reason: 'no table' }
    }
    const before = count(bot, chk.piece)
    const ok = await craftFn(bot, chk.piece, { times: 1, want: 1, table, tries: 2, log: step })
    const after = count(bot, chk.piece)
    const done = ok === true && after > before
    step(`armorcraft: ${done ? 'OK' : 'craft did not land'} (${chk.piece}, holds ${after})`)
    return done
      ? { ok: true, piece: chk.piece, count: after }
      : { ok: false, piece: chk.piece, count: after, reason: 'craft did not land' }
  } catch (e) {
    return { ok: false, piece: null, reason: `error: ${e && e.message ? e.message : 'unknown'}` }
  }
}
