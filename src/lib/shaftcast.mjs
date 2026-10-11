//
// shaftcast.mjs - (v0.941.0) THE SHAFT LOCK'S OWN CAST
//
// THE SHAFT LOCK's own WHO axis. The trip voice roster (v0.450.0) prints
// the shaft-lock cast raw ('shaft-lock cast: F10 F12 F13 F14 F16 F19 (6
// bot(s) the shaft gate held)' - face 207's six-bot roster rode unseated):
// nobody ever said WHICH bot's own trips the gate keeps underground. The
// gate's own WHY seat is priced (maptrip.mjs: the v0.801.0 trip ask's own
// seat - 'shaft-locked owns 11 of 19 trip ask(s) (57.9%)'), the plan-side
// cure's fuel is the roster's own shape - this book is the READ-TIME lens:
// the locks' own bot-level seat.
//
// THE BILL LAW: one book - the shaft skips' own lines, zero re-parsing
// (shaftLockBook parses its own grammar once:
//   'F7 map trip skipped: cannot leave the shaft'
// the emitter's exact byte shape - the bot is the line's own first token,
// the reason is the climb-owner gate's own verdict; the unreachable skip
// and the launch never enter the book - the target list is READ BUT NEVER
// FENCED, the atom is the lock COUNT, never the starved target or the
// bot's own pocket, the v0.939.0 count-law precedent).
//
// THE COUNT LAW: each shaft-locked skip one vote (the event-seating
// precedent - the v0.935.0 firings, the v0.936.0 churn events, the
// v0.937.0 named firings, the v0.939.0 verdicts).
// THE STRICT-MAJORITY LAW: a bot owns the cast only above half the
// locks, a tie owns nothing.
// THE DUO beside the seat's silence, byte law count desc + bot byte asc.
// THE BRANCH LAW FENCED IN THE LIB: a leader already holding the
// majority reads the honest null duo.
// THE JUNK FENCES: a botless or malformed line never enters the book,
// a good line still tallies; the honest silences - a lock-free face
// stays the roster's own raw row's subject (no seat row at all).
//
// Zero fleet log lines - CENSUS GUARD (read-time tooling only).
//

/** The shaft lock's own line grammar (the emitter's exact byte shape:
 *  the bot is the first token, the gate's own verdict is the whole
 *  reason - the unreachable skip embeds a target list and never rides). */
export const SHAFT_LOCK_RE = /^(F\d+) map trip skipped: cannot leave the shaft\s*$/

/**
 * shaftLockBook(lines) - the shaft skips' own book.
 * @param {string[]|string} [lines] one fleet-log, all lines
 * @returns {null|{events: Array<{bot: string}>, total: number}}
 *   the book (null on junk input; a lock-free face reads {events: [], total: 0})
 */
export function shaftLockBook (lines) {
  const src = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : null)
  if (!src) return null
  const events = []
  for (const line of src) {
    if (typeof line !== 'string') continue
    const m = SHAFT_LOCK_RE.exec(line)
    if (m) events.push({ bot: m[1] })
  }
  return { events, total: events.length }
}

/**
 * shaftCast(events) - the locks' own bot-level seat (the count law).
 * @param {Array<{bot: string}>} [events] shaftLockBook's own cells
 * @returns {null|{bot: string, owns: number, ofLocks: number, share: number}}
 *   the seat (null on junk, an empty book, or an under-half leader)
 */
export function shaftCast (events) {
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
  return { bot: top, owns: topOwns, ofLocks: total, share: +((topOwns / total) * 100).toFixed(3) }
}

/**
 * shaftCastRow(cast) - the seat's own row (the prose lives only in the lib).
 * @param {null|{bot: string, owns: number, ofLocks: number, share: number}} [cast] shaftCast's own read
 * @returns {null|string} the row (null on junk)
 */
export function shaftCastRow (cast) {
  if (!cast || typeof cast !== 'object' || Array.isArray(cast)) return null
  const { bot, owns, ofLocks, share } = cast
  if (typeof bot !== 'string' || !bot) return null
  if (!Number.isFinite(owns) || owns <= 0 || !Number.isFinite(ofLocks) || ofLocks <= 0 || owns > ofLocks) return null
  if (!Number.isFinite(share)) return null
  const s = ofLocks === 1 ? 'lock' : 'locks'
  return `the shaft lock's own cast (v0.941.0): ${bot} owns ${owns} of ${ofLocks} ${s} (${share}%) - THE GATE'S OWN REPEAT HOSTAGE: one bot's own trips the shaft gate keeps underground - the v0.450.0 roster priced the cast, the cast prices the gate's own repeater`
}

/**
 * shaftDuo(events) - the duo beside the seat's silence (book >= 2 bots,
 * byte law count desc + bot byte asc).
 * @param {Array<{bot: string}>} [events] shaftLockBook's own cells
 * @returns {null|{leader: string, leaderOwns: number, runner: string, runnerOwns: number, ofLocks: number, pairOwns: number, share: number}}
 *   the duo (null on junk, a thin book, or a leader the seat's law owns)
 */
export function shaftDuo (events) {
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
  return { leader, leaderOwns, runner, runnerOwns, ofLocks: total, pairOwns, share: +((pairOwns / total) * 100).toFixed(3) }
}

/**
 * shaftDuoRow(duo) - the duo's own row (the prose lives only in the lib).
 * @param {null|{leader: string, leaderOwns: number, runner: string, runnerOwns: number, ofLocks: number, pairOwns: number, share: number}} [duo] shaftDuo's own read
 * @returns {null|string} the row (null on junk)
 */
export function shaftDuoRow (duo) {
  if (!duo || typeof duo !== 'object' || Array.isArray(duo)) return null
  const { leader, leaderOwns, runner, runnerOwns, ofLocks, pairOwns, share } = duo
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner) return null
  if (!Number.isFinite(leaderOwns) || leaderOwns <= 0 || !Number.isFinite(runnerOwns) || runnerOwns <= 0) return null
  if (!Number.isFinite(ofLocks) || ofLocks <= 0 || !Number.isFinite(pairOwns) || pairOwns > ofLocks) return null
  if (!Number.isFinite(share)) return null
  const s = ofLocks === 1 ? 'lock' : 'locks'
  return `the shaft lock's own duo (v0.941.0): no solo hostage owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLocks} ${s} (${share}%) - THE HOSTAGES' OWN CROWD: the cast's tie law held, the underground economy's tax is still real - the duo prices the trips the solo law refused to name`
}
