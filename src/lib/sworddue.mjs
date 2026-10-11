//
// sworddue.mjs - THE SWORD DUE'S OWN BOOK + CAST (v0.945.0)
//
// The v0.67.0 sword lane (src/lib/arms.mjs swordCheck + craftSword,
// testbed/fleet19.mjs's cooldown gate) is the tool replace front's own
// emitter: '2 planks + 1 stick buy a wooden sword - the v0.66.0 fleet
// fist-fighted its way to 15 deaths with ZERO sword lines'. The lane's
// field voice rode unread ever since: the due ask ('F9 sword due: planks
// available' - face 208's eighteen, one per bot), the craft verdict
// ('sword: OK (wooden_sword)' + 'sword: OK (wooden_sword, holds 1)' -
// the emitter's own double speak), the table rung's side voice ('sword:
// table crafted from planks (7 planks of one type)' + 'sword: planks
// converted for the table rung (converted)'), the honest exits ('sword:
// failed (no table)', 'sword: skip (...)'). No book, no bot axis, no
// seat - the armory census (v0.494.0) owns the SPARE-PICK lane, the
// sword lane's own WHO axis is this book's.
//
// THE BILL LAW: the emitter's exact byte shapes, one parser per emitter,
// zero other readers. THE LANE'S OWN POOL (the count law's own
// precedent: the v0.942.0 bare/ARMED pool, the v0.943.0 both-skins
// pool): each sword lane line one vote - the due ask, the craft verdict,
// the rung's side voice, the bare exits, one pool. THE STRICT-MAJORITY
// LAW: a bot owns the cast only above half the lane's lines, a tie owns
// nothing. The riders beside the seat's silence (byte law count desc +
// bot byte asc), the branch law fenced in the lib, the junk fences, the
// honest silences - the sword-free face stays silent.
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the sword due's
// own', 'the forge's own armorer' and 'the armorers' own crowd' lived
// nowhere - the v0.494.0 armory census owns the weapon supply's armed/
// failed verdicts (the sword's YIELD side), the v0.67.0 emitter's own
// BOOK and BOT axis is THIS lane (both untouched). The legacy list's
// own front (tool repair/replace) priced at its replace lane's origin:
// WHICH bot's own pocket keeps the sword coming.
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// census-guard lane. Junk-safe end to end.
//

// ---- the due ask (the lane's whole WHY) ----
// 'F9 sword due: planks available' (the three due skins the emitter
// speaks - iron/cobble/planks, the tier rides the skin)
export const SWORD_DUE_RE = /^(F\d+) sword due: (iron|cobble|planks) available$/

// ---- the craft verdict (the lane's whole ANSWER) ----
// 'F9 sword: OK (wooden_sword)' (the fleet19 result line)
// 'F9 sword: OK (wooden_sword, holds 1)' (the craftSword step line)
// 'F9 sword: craft did not land (wooden_sword, holds 0)'
// 'F9 sword: failed (no table)' / 'F9 sword: skip (holds 1 sword(s))'
export const SWORD_VERDICT_RE = /^(F\d+) sword: (OK|craft did not land|failed|skip) \((.+)\)$/

// ---- the table rung's side voice ----
// 'F9 sword: table crafted from planks (7 planks of one type)'
// 'F9 sword: planks converted for the table rung (converted)'
export const SWORD_TABLE_CRAFTED_RE = /^(F\d+) sword: table crafted from planks \((.+)\)$/
export const SWORD_CONVERTED_RE = /^(F\d+) sword: planks converted for the table rung \((.+)\)$/

// ---- the bare exits ----
// 'F9 sword: stick craft did not land'
// 'F9 sword: no table reachable or placeable'
export const SWORD_STICK_MISS_RE = /^(F\d+) sword: stick craft did not land$/
export const SWORD_NO_TABLE_RE = /^(F\d+) sword: no table reachable or placeable$/

function zeroBot () {
  return {
    due: 0, iron: 0, cobble: 0, planks: 0,
    ok: 0, didNotLand: 0, failed: 0, skip: 0,
    tableCrafted: 0, converted: 0,
    stickMiss: 0, noTable: 0, total: 0
  }
}

/**
 * swordDueBook(lines) - the sword replace lane's own field book.
 * Pure census: every sword lane line classifies independently (no
 * opener, no cross-line join). @param {string[]} lines one fleet-log
 * @returns {null|{bots: Object<string,object>, totals: object}}
 */
export function swordDueBook (lines) {
  if (!Array.isArray(lines)) return null
  const bots = {}
  const totals = zeroBot()
  totals.totalBots = {}
  const bump = (bot, fn) => {
    const b = bots[bot] || (bots[bot] = zeroBot())
    fn(b)
    b.total++
    totals.total++
    totals.totalBots[bot] = (totals.totalBots[bot] || 0) + 1
  }
  for (const line of lines) {
    if (typeof line !== 'string') continue
    let m = SWORD_DUE_RE.exec(line)
    if (m) {
      const tier = m[2]
      bump(m[1], b => { b.due++; if (tier === 'iron') b.iron++; else if (tier === 'cobble') b.cobble++; else b.planks++ })
      totals.due++
      if (tier === 'iron') totals.iron++; else if (tier === 'cobble') totals.cobble++; else totals.planks++
      continue
    }
    m = SWORD_VERDICT_RE.exec(line)
    if (m) {
      const v = m[2]
      bump(m[1], b => { if (v === 'OK') b.ok++; else if (v === 'craft did not land') b.didNotLand++; else if (v === 'failed') b.failed++; else b.skip++ })
      if (v === 'OK') totals.ok++; else if (v === 'craft did not land') totals.didNotLand++; else if (v === 'failed') totals.failed++; else totals.skip++
      continue
    }
    m = SWORD_TABLE_CRAFTED_RE.exec(line)
    if (m) {
      bump(m[1], b => { b.tableCrafted++ })
      totals.tableCrafted++
      continue
    }
    m = SWORD_CONVERTED_RE.exec(line)
    if (m) {
      bump(m[1], b => { b.converted++ })
      totals.converted++
      continue
    }
    m = SWORD_STICK_MISS_RE.exec(line)
    if (m) {
      bump(m[1], b => { b.stickMiss++ })
      totals.stickMiss++
      continue
    }
    m = SWORD_NO_TABLE_RE.exec(line)
    if (m) {
      bump(m[1], b => { b.noTable++ })
      totals.noTable++
      continue
    }
  }
  return { bots, totals }
}

/**
 * swordCast(botBook) - the sword lane's bot-level seat.
 * @param {Object<string, {total: number}>|null} [botBook] the book's
 *   own bots cells (swordDueBook's bots map, the totals the book's raw
 *   row already reads)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function swordCast (botBook) {
  if (!botBook || typeof botBook !== 'object' || Array.isArray(botBook)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(botBook)) {
    const n = cell && typeof cell === 'object' && !Array.isArray(cell) ? cell.total : null
    if (typeof bot === 'string' && bot && Number.isInteger(n) && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.945.0) the cast's own row - THE FORGE'S OWN ARMORER: one bot's own
// lane keeps the sword supply's own voice. Junk never prints a seat.
export function swordCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the sword due's own cast (v0.945.0): ${bot} owns ${owns} of ${ofLines} sword lane ${s} (${(share * 100).toFixed(1)}%) - THE FORGE'S OWN ARMORER: one bot's own lane keeps the sword supply's own voice - the v0.67.0 emitter priced the ask, the cast names its armorer`
}

// (v0.945.0) THE SWORD DUE'S OWN RIDERS - the cast's silence's own
// companion: a MEASURE, never a verdict-owner - the top two armorers'
// concentration prices the shape the solo law refused to name (the
// cast's owner case leaves the companion unprinted - the decompose's
// own branch law). The order is deterministic (count desc, then the
// name's own - 'F1' < 'F18' byte-wise). Junk never invents a shape.
export function swordRiders (botBook) {
  if (swordCast(botBook)) return null
  if (!botBook || typeof botBook !== 'object' || Array.isArray(botBook)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(botBook)) {
    const n = cell && typeof cell === 'object' && !Array.isArray(cell) ? cell.total : null
    if (typeof bot === 'string' && bot && Number.isInteger(n) && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (rows.length < 2) return null
  const leader = rows[0]
  const runner = rows[1]
  const pairOwns = leader.owns + runner.owns
  const total = rows.reduce((a, r) => a + r.owns, 0)
  return { leader: leader.bot, leaderOwns: leader.owns, runner: runner.bot, runnerOwns: runner.owns, ofLines: total, pairOwns, share: +(pairOwns / total).toFixed(3) }
}

// (v0.945.0) the riders' own row - THE ARMORERS' OWN CROWD (the family's
// own tail): a measure of the shape, never a named owner. Junk never
// prints a shape.
export function swordRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the sword due's own riders (v0.945.0): no solo armorer owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} sword lane ${s} (${(share * 100).toFixed(1)}%) - THE ARMORERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the lane the solo law refused to name`
}
