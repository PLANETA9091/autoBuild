//
// combatcast.mjs - THE COMBAT BOOK'S OWN BOT SEAT (v0.954.0)
//
// The v0.390.0 shooter census priced the combat band's own field
// anatomy (the total, the verbs, the dists, the ranged band, the
// verdict flips, the shelter split) and the v0.792.0 attacker bill
// named the encounter's own WHAT (which mob owns the pressure), but
// the book's own WHO axis never had a seat: the per-bot cells ride
// silent in the byBot map and the decompose prints only the raw
// per-bot row plus the whale lenses (the top-two verb splits) with no
// law-priced verdict. The v0.393.0 whale lens prices WHAT the top two
// were doing; THIS names WHO owns the book.
//
// THE COUNT LAW (the book's own cells only, zero re-parsing - the
// count-seat family's own precedent: the v0.943.0 camp build cast,
// the v0.945.0 sword due cast, the v0.946.0 map trip cast, the
// v0.947.0 shelter skip cast, the v0.949.0 table gate cast, the
// v0.950.0 torch cast, the v0.952.0 vein cast): each emitter combat
// line is bumped exactly once per bot in the census's own byBot map -
// the map's own cells ARE the book's own lines, byte-for-byte. The
// measure cells never vote - they price lines, they are not lines:
// byAttacker (the v0.792.0 bill's own pool), byBotVerb and byVerb
// (the verbs' own splits), the sessions (the whale feed's own clock),
// the dists, the ranged band, the verdict flips, the shelter split.
// Each combat line is one vote; a bot owns the seat only above half
// the book's own lines (a tie owns nothing - the strict-majority
// law's own family shape). Junk never invents a seat: a missing or
// empty map, a bot whose cell is not a positive integer, or a
// minority top reads the honest silence (null).
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the combat
// book's own seat' lived nowhere (the v0.792.0 seat is the ATTACKER
// bill's own row - 'the encounter book's own attacker', a different
// axis), 'the gladiator' and 'the gladiators' own crowd' lived
// nowhere - the harvester/lamplighter/prospector/swimmer crowds are
// the other books' own; the combat book's own BOT axis is THIS lib
// (the census, the attacker bill, the whale lenses all untouched).
// The count-seat family's own sibling: the combat band priced at its
// own origin - WHOSE touches keep the encounter's own voice.
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// v0.390.0 census's own census-guard lane. Junk-safe end to end.
//

/**
 * combatCast(byBot) - the combat book's bot-level seat.
 * @param {Object<string, number>|null} [byBot] the shooter census's
 *   own per-bot map (the cells the per-bot row already reads)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function combatCast (byBot) {
  if (!byBot || typeof byBot !== 'object' || Array.isArray(byBot)) return null
  const rows = []
  for (const [bot, n] of Object.entries(byBot)) {
    if (typeof bot === 'string' && bot &&
        typeof n === 'number' && Number.isFinite(n) && Number.isInteger(n) && n > 0) {
      rows.push({ bot, owns: n })
    }
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.954.0) the cast's own row - THE ENCOUNTER'S OWN GLADIATOR: one
// bot's own touches keep the combat book's voice. Junk never prints a
// seat (the honest silence's own row law).
export function combatCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the combat book's own cast (v0.954.0): ${bot} owns ${owns} of ${ofLines} combat ${s} (${(share * 100).toFixed(1)}%) - THE ENCOUNTER'S OWN GLADIATOR: one bot's own touches keep the combat book's voice - the v0.792.0 attacker seat priced the WHAT, the cast names its WHO`
}

// (v0.954.0) THE COMBAT BOOK'S OWN RIDERS - the cast's silence's own
// companion (the riders precedent, zero re-parsing): a MEASURE, never
// a verdict-owner - the top two pockets' concentration prices the
// shape the solo law refused to name (the cast's owner case leaves
// the companion unprinted - the decompose's own branch law). The
// order is deterministic (count desc, then the name's own byte asc).
// Junk never invents a shape: a missing or empty map, fewer than two
// pockets, or a leader already holding the majority reads the honest
// silence (null).
export function combatRiders (byBot) {
  if (combatCast(byBot)) return null
  if (!byBot || typeof byBot !== 'object' || Array.isArray(byBot)) return null
  const rows = []
  for (const [bot, n] of Object.entries(byBot)) {
    if (typeof bot === 'string' && bot &&
        typeof n === 'number' && Number.isFinite(n) && Number.isInteger(n) && n > 0) {
      rows.push({ bot, owns: n })
    }
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (rows.length < 2) return null
  const leader = rows[0]
  const runner = rows[1]
  const pairOwns = leader.owns + runner.owns
  const total = rows.reduce((a, r) => a + r.owns, 0)
  return { leader: leader.bot, leaderOwns: leader.owns, runner: runner.bot, runnerOwns: runner.owns, ofLines: total, pairOwns, share: +(pairOwns / total).toFixed(3) }
}

// (v0.954.0) the riders' own row - THE GLADIATORS' OWN CROWD (the
// family's own tail): a measure of the shape, never a named owner.
// Junk never prints a shape (the honest silence's own row law).
export function combatRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the combat book's own riders (v0.954.0): no solo gladiator owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} combat ${s} (${(share * 100).toFixed(1)}%) - THE GLADIATORS' OWN CROWD: the cast's tie law held, the arena's crowd is still real - the pair prices the fights the solo law refused to name`
}
