// (v0.397.0) THE SEAL-RESERVE CENSUS - the deposit-side keep families'
// field read. The v0.396.0 SEAL RESERVE gave the shelter family a carried
// seal floor (SEAL_RESERVE_BOUND, SEAL_PRIORITY-filled) and named its
// firings in the fleet log; three OLDER families name theirs in the same
// bounded shape (the v0.101.0 tithe naming): fuel tithe, cobble tithe,
// smelt tithe. Until now NO census read any of them (the blind-tool
// lesson, the v0.371.0 shape) - the field could not say how often the
// deposit keeps fired, what they banked, or what floors they held.
//
// THE BOUNDED SELF-NAMING (all four families, verified verbatim in
// src/lib/deposit.mjs): per depositToChest call the first 2 firings print
//   F1 [F1] seal reserve: banked 6 x dirt (pocket keeps 8 seal units)
//   F2 [F2] cobble tithe: banked 8 x cobblestone (pocket keeps 4)
//   F3 [F3] fuel tithe: banked 3 x coal (pocket keeps 4)
//   F4 [F4] smelt tithe: banked 5 x raw_iron (pocket keeps 3)
// the 3rd firing prints the rider
//   F1 [F1] seal reserve: more firings ride the banked total
// and every firing past the 3rd prints NOTHING. The DOUBLE-TAG anatomy
// (F7 [F7] ...) is deposit.mjs's own log shape on the field - verified
// against the held fleet19.log (run84a: 'F19 [F19] direct deposit: 27
// chest slots derived from the 63-slot view', the same emitter) - the
// fleet's line emitter prefixes the bot tag; the death sweep keys the
// same anatomy. So the census reads what
// the fleet chose to name: `banked` rows are exact (units, item, kept
// floor); a `rider` row proves a 3rd firing happened and that at least one
// more was silent - the count past the rider is UNKNOWABLE from the log
// and the census never invents it (the honest-sweep law). The seal
// reserve's kept clause carries the ' seal units' suffix - the tithes read
// bare numbers; both parse, the suffix is the family's own signature.
//
// Pure parser, unit-pinned (the rescue-ledger v0.368.0 shape); decompose
// is its field read. Mining-surface only: zero fleet wiring, zero new log
// lines - the v0.379.0 precedent. Junk-safe end to end: non-string rows
// are skipped, absent families read the honest zero.
//
// (v0.405.0) THE KEEP ARM JOINS THE LEDGER: the reserve's keep branch
// (a pocket at or under the bound keeps whole stacks home) was silent
// through v0.404.0 - the census read 'seal-reserve: 0 firings' on faces
// 23/24 while the roster showed bots HOLDING 2/8 and 6/8 seals: the keep
// evidence was unmineable. deposit.mjs now names it under the tithe's own
// bounded shape, and the census reads both forms:
//   F14 [F14] seal reserve: kept 6 x cobblestone (the family floor holds)
//   F3 [F3] seal reserve: more keeps ride the family floor
// fields: keeps (named keep firings), keepUnits (units HELD home - the
// stock death never touched), keepRiders, keepByItem. A family that never
// kept reads the honest zero.

const num = (s) => Number(s)

// The four bounded self-namers (family order pinned most-specific-last:
// the literals never collide - each name is its own alternation arm).
export const SEAL_FAMILIES = ['fuel-tithe', 'cobble-tithe', 'smelt-tithe', 'seal-reserve']

// 'F1 [F1] seal reserve: banked 6 x dirt (pocket keeps 8 seal units)'
// 'F2 [F2] fuel tithe: banked 3 x coal (pocket keeps 4)' -> the 'seal units'
// suffix is optional and family-owned.
export const SEAL_BANKED_RE = /^(F\d+) \[F\d+\] (fuel tithe|cobble tithe|smelt tithe|seal reserve): banked (\d+) x ([a-z0-9_]+) \(pocket keeps (\d+)( seal units)?\)$/

// 'F1 [F1] seal reserve: more firings ride the banked total'
export const SEAL_RIDER_RE = /^(F\d+) \[F\d+\] (fuel tithe|cobble tithe|smelt tithe|seal reserve): more firings ride the banked total$/

// (v0.405.0) THE KEEP ARM's two forms (deposit.mjs's keep branch, the
// banking arm's bounded shape byte-adjacent). ANCHORED TO THE REAL
// EMITTER: only the seal reserve HAS a keep arm (the tithes bank their
// overage unconditionally) - a tithe-named keep line is junk by
// construction, and the census must never read one.
//   'F14 [F14] seal reserve: kept 6 x cobblestone (the family floor holds)'
//   'F3 [F3] seal reserve: more keeps ride the family floor'
export const SEAL_KEPT_RE = /^(F\d+) \[F\d+\] seal reserve: kept (\d+) x ([a-z0-9_]+) \(the family floor holds\)$/

export const SEAL_KEEP_RIDER_RE = /^(F\d+) \[F\d+\] seal reserve: more keeps ride the family floor$/

const famKey = (s) => s === 'fuel tithe' ? 'fuel-tithe'
  : s === 'cobble tithe' ? 'cobble-tithe'
    : s === 'smelt tithe' ? 'smelt-tithe' : 'seal-reserve'

// 'F1 [F1] seal reserve: banked 6 x dirt (pocket keeps 8 seal units)'
//   -> { bot: 'F1', family: 'seal-reserve', moved: 6, name: 'dirt', kept: 8 }
// or null (a non-string, or any other line - the anchored shapes make a
// cross-family collision impossible: a tithe line never parses as a seal
// firing and vice versa).
export function parseSealBanked (s) {
  const m = typeof s === 'string' ? s.match(SEAL_BANKED_RE) : null
  return m ? {
    bot: m[1], family: famKey(m[2]), moved: num(m[3]), name: m[4], kept: num(m[5]),
  } : null
}

// '[F1] seal reserve: more firings ride the banked total'
//   -> { bot: 'F1', family: 'seal-reserve' } or null
export function parseSealRider (s) {
  const m = typeof s === 'string' ? s.match(SEAL_RIDER_RE) : null
  return m ? { bot: m[1], family: famKey(m[2]) } : null
}

// 'F14 [F14] seal reserve: kept 6 x cobblestone (the family floor holds)'
//   -> { bot: 'F14', family: 'seal-reserve', held: 6, name: 'cobblestone' }
// or null. The keep firing: the pocket held the WHOLE stack home (the
// reserve's keep branch - the units the deposit never touched).
export function parseSealKept (s) {
  const m = typeof s === 'string' ? s.match(SEAL_KEPT_RE) : null
  return m ? {
    bot: m[1], family: 'seal-reserve', held: num(m[2]), name: m[3],
  } : null
}

// 'F3 [F3] seal reserve: more keeps ride the family floor'
//   -> { bot: 'F3', family: 'seal-reserve' } or null
export function parseSealKeepRider (s) {
  const m = typeof s === 'string' ? s.match(SEAL_KEEP_RIDER_RE) : null
  return m ? { bot: m[1], family: 'seal-reserve' } : null
}

// The census: feed the full fleet19.log lines. Every family reads the
// honest zero when its lines are absent (a face where the keeps never
// fired is a REAL result - the v0.358.0 lesson: the reader must survive
// the missing block). Per family:
//   banked   - named firings (exact, capped at 2 per deposit call)
//   units    - units those firings moved into the chest
//   riders   - rider rows (each proves a 3rd firing + at least one silent)
//   bots     - every bot that fired or rode
//   byItem   - units by item name (the cobble tithe's map is cobblestone's)
//   kept     - kept-floor distribution (the floor value -> named-firing count)
//   events   - the named firings in log order (bot, moved, name, kept)
//   keeps    - (v0.405.0) named keep firings (the pocket held the whole stack)
//   keepUnits - units those firings HELD home (the stock death never touched)
//   keepRiders - keep rider rows (each proves a 3rd keep + at least one silent)
//   keepByItem - held units by item name
export function sealCensus (lines) {
  const rows = Array.isArray(lines) ? lines.filter((l) => typeof l === 'string') : []
  const fam = () => ({ banked: 0, units: 0, riders: 0, bots: [], byItem: {}, kept: {}, events: [], keeps: 0, keepUnits: 0, keepRiders: 0, keepByItem: {} })
  const out = {
    'fuel-tithe': fam(), 'cobble-tithe': fam(), 'smelt-tithe': fam(), 'seal-reserve': fam(),
  }
  const seen = {}
  for (const l of rows) {
    const b = l.match(SEAL_BANKED_RE)
    if (b) {
      const key = famKey(b[2])
      const f = out[key]
      const bot = b[1]
      const moved = num(b[3])
      const name = b[4]
      const kept = num(b[5])
      f.banked++
      f.units += moved
      f.byItem[name] = (f.byItem[name] || 0) + moved
      f.kept[kept] = (f.kept[kept] || 0) + 1
      if (!seen[key + ':' + bot]) { seen[key + ':' + bot] = true; f.bots.push(bot) }
      f.events.push({ bot, family: key, moved, name, kept })
      continue
    }
    const r = l.match(SEAL_RIDER_RE)
    if (r) {
      const key = famKey(r[2])
      const f = out[key]
      f.riders++
      if (!seen[key + ':' + r[1]]) { seen[key + ':' + r[1]] = true; f.bots.push(r[1]) }
      continue
    }
    // (v0.405.0) the keep arm's two forms: a named keep (the pocket held
    // the whole stack home) and the keep rider (the 3rd keep printed the
    // count line - at least one more rode silent). Seal-reserve-only:
    // the tithes have no keep arm (the famKey branch stays for symmetry
    // with the banked/rider arms).
    const k = l.match(SEAL_KEPT_RE)
    if (k) {
      const key = 'seal-reserve'
      const f = out[key]
      const held = num(k[2])
      const name = k[3]
      f.keeps++
      f.keepUnits += held
      f.keepByItem[name] = (f.keepByItem[name] || 0) + held
      if (!seen[key + ':' + k[1]]) { seen[key + ':' + k[1]] = true; f.bots.push(k[1]) }
      continue
    }
    const kr = l.match(SEAL_KEEP_RIDER_RE)
    if (kr) {
      const key = 'seal-reserve'
      const f = out[key]
      f.keepRiders++
      if (!seen[key + ':' + kr[1]]) { seen[key + ':' + kr[1]] = true; f.bots.push(kr[1]) }
    }
  }
  return out
}

// (v0.937.0) THE DEPOSIT'S OWN CAST - the deposit family's own WHO axis.
// The v0.827.0 titheFamilySeat priced the LANE axis (WHICH lane owns the
// family's voice: fuel vs cobble vs smelt vs reserve) but no row ever
// said WHICH BOT's own pocket keeps paying the family's own tithe -
// face 204's read rode raw beside the census ('cobble-tithe: named
// firings 7, units 304, riders 0, bots F4,F3,F11,F14,F18') with no seat
// naming the keeper. sealcensus.mjs extends pure-additive (THE BILL LAW:
// the census's own events cells only - sealCensus's own named firings,
// bot-family-moved-name-kept, zero re-parsing, one book; THE COUNT LAW:
// each named firing one vote - the event-seating precedent, the v0.935.0
// firings and the v0.936.0 churn events; the atom is the bot's own
// firing COUNT, never the moved mass - the mass rode the census's own
// units column since v0.397.0; THE STRICT-MAJORITY LAW - a bot owns the
// cast only above half the named firings, a tie owns nothing; the duo
// beside the seat's silence, byte law count desc + bot byte asc; THE
// BRANCH LAW FENCED IN THE LIB - a leader already holding the majority
// reads the honest null; the junk fences - a bad cell is skipped, a
// good cell still tallies; the honest silences - the firing-free family
// stays the census's own subject). The family label rides the wiring's
// own map (the dash key's space form - the census's own lane names):
// junk labels read the honest null row, never an invented name.
// ROWS: the seat 'the <family>'s own cast (v0.937.0)' - THE DEPOSIT'S
// OWN REPEAT KEEPER; the duo 'the <family>'s own duo (v0.937.0)' - THE
// KEEPERS' OWN CROWD. Both after the family's own raw row, never
// before it (the order law). Zero fleet log lines - CENSUS GUARD.

/**
 * depositCast(events) - the family's own bot-level seat (the count law
 * on the named firings).
 * @param {Array<{bot: string}>} [events] sealCensus's own events cells (one family's)
 * @returns {null|{bot: string, owns: number, ofFirings: number, share: number}}
 *   the seat (null on junk, an empty book, or an under-half leader)
 */
export function depositCast (events) {
  if (!Array.isArray(events)) return null
  const byBot = new Map()
  for (const e of events) {
    if (!e || typeof e !== 'object' || Array.isArray(e)) continue
    if (typeof e.bot !== 'string' || !e.bot) continue
    byBot.set(e.bot, (byBot.get(e.bot) || 0) + 1)
  }
  if (!byBot.size) return null
  const book = [...byBot.entries()].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
  const total = book.reduce((s, [, v]) => s + v, 0)
  const [top, topOwns] = book[0]
  if (topOwns <= total - topOwns) return null
  return { bot: top, owns: topOwns, ofFirings: total, share: +((topOwns / total) * 100).toFixed(3) }
}

/**
 * depositCastRow(cast, family) - the seat's own row (the prose lives
 * only in the lib; the family label is the wiring's own space form).
 * @param {null|{bot: string, owns: number, ofFirings: number, share: number}} [cast] depositCast's own read
 * @param {string} [family] the census's own lane name ('cobble tithe')
 * @returns {null|string} the row (null on junk)
 */
export function depositCastRow (cast, family) {
  if (!cast || typeof cast !== 'object' || Array.isArray(cast)) return null
  if (typeof family !== 'string' || !family) return null
  const { bot, owns, ofFirings, share } = cast
  if (typeof bot !== 'string' || !bot) return null
  if (!Number.isFinite(owns) || owns <= 0 || !Number.isFinite(ofFirings) || ofFirings <= 0 || owns > ofFirings) return null
  if (!Number.isFinite(share)) return null
  const firingsWord = ofFirings === 1 ? 'firing' : 'firings'
  return `the ${family}'s own cast (v0.937.0): ${bot} owns ${owns} of ${ofFirings} named ${firingsWord} (${share}%) - THE DEPOSIT'S OWN REPEAT KEEPER: one bot's own pocket keeps paying the family's own voice - the v0.827.0 seat priced the lane, the cast names the lane's own keeper`
}

/**
 * depositDuo(events) - the duo beside the seat's silence (book >= 2,
 * byte law count desc + bot byte asc).
 * @param {Array<{bot: string}>} [events] sealCensus's own events cells (one family's)
 * @returns {null|{leader: string, leaderOwns: number, runner: string, runnerOwns: number, ofFirings: number, pairOwns: number, share: number}}
 *   the duo (null on junk, a thin book, or a leader the seat's law owns)
 */
export function depositDuo (events) {
  if (!Array.isArray(events)) return null
  const byBot = new Map()
  for (const e of events) {
    if (!e || typeof e !== 'object' || Array.isArray(e)) continue
    if (typeof e.bot !== 'string' || !e.bot) continue
    byBot.set(e.bot, (byBot.get(e.bot) || 0) + 1)
  }
  if (byBot.size < 2) return null
  const book = [...byBot.entries()].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
  const total = book.reduce((s, [, v]) => s + v, 0)
  const [leader, leaderOwns] = book[0]
  if (leaderOwns > total - leaderOwns) return null
  const [runner, runnerOwns] = book[1]
  const pairOwns = leaderOwns + runnerOwns
  return { leader, leaderOwns, runner, runnerOwns, ofFirings: total, pairOwns, share: +((pairOwns / total) * 100).toFixed(3) }
}

/**
 * depositDuoRow(duo, family) - the duo's own row (the prose lives only
 * in the lib).
 * @param {null|{leader: string, leaderOwns: number, runner: string, runnerOwns: number, ofFirings: number, pairOwns: number, share: number}} [duo] depositDuo's own read
 * @param {string} [family] the census's own lane name ('cobble tithe')
 * @returns {null|string} the row (null on junk)
 */
export function depositDuoRow (duo, family) {
  if (!duo || typeof duo !== 'object' || Array.isArray(duo)) return null
  if (typeof family !== 'string' || !family) return null
  const { leader, leaderOwns, runner, runnerOwns, ofFirings, pairOwns, share } = duo
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner) return null
  if (!Number.isFinite(leaderOwns) || leaderOwns <= 0 || !Number.isFinite(runnerOwns) || runnerOwns <= 0) return null
  if (!Number.isFinite(ofFirings) || ofFirings <= 0 || !Number.isFinite(pairOwns) || pairOwns > ofFirings) return null
  if (!Number.isFinite(share)) return null
  const firingsWord = ofFirings === 1 ? 'firing' : 'firings'
  return `the ${family}'s own duo (v0.937.0): no solo keeper owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofFirings} named ${firingsWord} (${share}%) - THE KEEPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the duo prices the pockets the solo law refused to name`
}
