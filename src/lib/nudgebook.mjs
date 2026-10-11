//
// nudgebook.mjs - (v0.939.0) THE NUDGE APPROACH'S OWN CAST
//
// THE NUDGE APPROACH's own WHO axis. The nudge family's field legs
// (decompose's NUDGE FAMILY FIELD LEGS block) print the approach
// verdicts raw ('nudge approach verdicts: 34 per-bot: F8=5 F6=4
// F1=3 ...' - seventeen bots, no seat): nobody ever said WHICH bot's
// own stalls keep asking the nudge. The approach itself is priced
// (approach.mjs: the v0.147.0 path-geometry error class, the v0.157.0
// close shot, the bounded approachWalk) - the WALK's own lens. This
// book is the READ-TIME lens: the verdicts' own bot-level seat.
//
// THE BILL LAW: one book - the approach verdicts' own lines, zero
// re-parsing (nudgeApproachBook parses its own grammar once:
//   'F2 fuel commons: path nudge approach: 1 segment(s) walked in
//    12.8s, goal now d=9.9 (inside the direct envelope)'
// the fleet emitter's single-tag anatomy - the bot is the line's own
// first token, the lane word follows, the verdict tail is the walk's
// own score and is READ BUT NEVER FENCED - the atom is the verdict
// COUNT, never the walked distance or the seconds, the v0.935.0
// count-law precedent).
//
// THE COUNT LAW: each approach verdict one vote (the event-seating
// precedent - the v0.935.0 firings, the v0.936.0 churn events, the
// v0.937.0 named firings).
// THE STRICT-MAJORITY LAW: a bot owns the cast only above half the
// verdicts, a tie owns nothing.
// THE DUO beside the seat's silence, byte law count desc + bot byte asc.
// THE BRANCH LAW FENCED IN THE LIB: a leader already holding the
// majority reads the honest null duo.
// THE JUNK FENCES: a botless or malformed line never enters the book,
// a good line still tallies; the honest silences - an approach-free
// face stays the family's own raw row's subject (no seat row at all).
//
// Zero fleet log lines - CENSUS GUARD (read-time tooling only).
//

/** The approach verdict's own line grammar (the bot is the first token;
 *  the lane word may double - the iron commune's own nudge skin rides
 *  'F2 iron commune: iron commune: path nudge approach: ...' - and the
 *  double-tag emitter skin joins the fold; the verdict phrase rides
 *  anywhere after the tag). */
export const NUDGE_APPROACH_RE = /^(F\d+)\b.*path nudge approach:/

/**
 * nudgeApproachBook(lines) - the approach verdicts' own book.
 * @param {string[]|string} [lines] one fleet-log, all lines
 * @returns {null|{events: Array<{bot: string}>, total: number}}
 *   the book (null on junk input; an approach-free face reads {events: [], total: 0})
 */
export function nudgeApproachBook (lines) {
  const src = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : null)
  if (!src) return null
  const events = []
  for (const line of src) {
    if (typeof line !== 'string') continue
    const m = NUDGE_APPROACH_RE.exec(line)
    if (m) events.push({ bot: m[1] })
  }
  return { events, total: events.length }
}

/**
 * nudgeCast(events) - the verdicts' own bot-level seat (the count law).
 * @param {Array<{bot: string}>} [events] nudgeApproachBook's own cells
 * @returns {null|{bot: string, owns: number, ofApproaches: number, share: number}}
 *   the seat (null on junk, an empty book, or an under-half leader)
 */
export function nudgeCast (events) {
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
  return { bot: top, owns: topOwns, ofApproaches: total, share: +((topOwns / total) * 100).toFixed(3) }
}

/**
 * nudgeCastRow(cast) - the seat's own row (the prose lives only in the lib).
 * @param {null|{bot: string, owns: number, ofApproaches: number, share: number}} [cast] nudgeCast's own read
 * @returns {null|string} the row (null on junk)
 */
export function nudgeCastRow (cast) {
  if (!cast || typeof cast !== 'object' || Array.isArray(cast)) return null
  const { bot, owns, ofApproaches, share } = cast
  if (typeof bot !== 'string' || !bot) return null
  if (!Number.isFinite(owns) || owns <= 0 || !Number.isFinite(ofApproaches) || ofApproaches <= 0 || owns > ofApproaches) return null
  if (!Number.isFinite(share)) return null
  const s = ofApproaches === 1 ? 'approach' : 'approaches'
  return `the nudge approach's own cast (v0.939.0): ${bot} owns ${owns} of ${ofApproaches} ${s} (${share}%) - THE ENVELOPE'S OWN REPEAT APPROACHER: one bot's own stalls keep asking the nudge - the v0.147.0 approach priced the walk, the cast names its repeater`
}

/**
 * nudgeDuo(events) - the duo beside the seat's silence (book >= 2 bots,
 * byte law count desc + bot byte asc).
 * @param {Array<{bot: string}>} [events] nudgeApproachBook's own cells
 * @returns {null|{leader: string, leaderOwns: number, runner: string, runnerOwns: number, ofApproaches: number, pairOwns: number, share: number}}
 *   the duo (null on junk, a thin book, or a leader the seat's law owns)
 */
export function nudgeDuo (events) {
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
  return { leader, leaderOwns, runner, runnerOwns, ofApproaches: total, pairOwns, share: +((pairOwns / total) * 100).toFixed(3) }
}

/**
 * nudgeDuoRow(duo) - the duo's own row (the prose lives only in the lib).
 * @param {null|{leader: string, leaderOwns: number, runner: string, runnerOwns: number, ofApproaches: number, pairOwns: number, share: number}} [duo] nudgeDuo's own read
 * @returns {null|string} the row (null on junk)
 */
export function nudgeDuoRow (duo) {
  if (!duo || typeof duo !== 'object' || Array.isArray(duo)) return null
  const { leader, leaderOwns, runner, runnerOwns, ofApproaches, pairOwns, share } = duo
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner) return null
  if (!Number.isFinite(leaderOwns) || leaderOwns <= 0 || !Number.isFinite(runnerOwns) || runnerOwns <= 0) return null
  if (!Number.isFinite(ofApproaches) || ofApproaches <= 0 || !Number.isFinite(pairOwns) || pairOwns > ofApproaches) return null
  if (!Number.isFinite(share)) return null
  const s = ofApproaches === 1 ? 'approach' : 'approaches'
  return `the nudge approach's own duo (v0.939.0): no solo approacher owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofApproaches} ${s} (${share}%) - THE APPROACHERS' OWN CROWD: the cast's tie law held, the crowd is still real - the duo prices the stalls the solo law refused to name`
}
