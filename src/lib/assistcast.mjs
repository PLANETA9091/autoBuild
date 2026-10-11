//
// assistcast.mjs - (v0.943.0) THE RISE ASSIST'S OWN CAST
//
// THE CLIMB RISE ASSIST's own WHO axis. The FACE-14 legs' raw rows
// ('climb rise assist lines: N per-bot: ...' + 'assist timeouts (the
// 4.5s class): M') rode unseated - nobody ever said WHICH bot's own
// climbs keep asking for the assist lane. The handoff's own fate is
// priced (assistledger.mjs: the v0.499.0 claim), the lane's own rider
// seat never was - this book is the READ-TIME lens: the assists' own
// bot-level seat.
//
// THE BILL LAW: one book - the rise assist lines' own census, zero
// re-parsing (riseAssistBook parses its own grammar once:
//   'F3 [F3] climb rise assist: assist did not complete (goto: climb
//    rise assist: timeout after 4500ms)'
//   'F15 [F15] climb rise assist: repositioned to -129,64,416 - the
//    loop re-judges'
// the emitter's exact byte shapes - the bot is the line's own first
// token pair, the two skins are the lane's whole voice: the
// did-not-complete BILL and the repositioned VOICE. The goto payload
// and the coordinates are READ BUT NEVER FENCED, the atom is the
// assist COUNT, never the verdict mix or the bot's own climb, the
// v0.942.0 bare/ARMED one-pool precedent).
//
// THE COUNT LAW: each rise assist line one vote - both skins ride the
// same pool (the event-seating precedent - the v0.935.0 firings, the
// v0.936.0 churn events, the v0.937.0 named firings, the v0.939.0
// verdicts, the v0.942.0 census lines).
// THE STRICT-MAJORITY LAW: a bot owns the cast only above half the
// assists, a tie owns nothing.
// THE DUO beside the seat's silence, byte law count desc + bot byte asc.
// THE BRANCH LAW FENCED IN THE LIB: a leader already holding the
// majority reads the honest null duo.
// THE JUNK FENCES: a botless or malformed line never enters the book,
// a good line still tallies; the honest silences - an assist-free face
// stays the raw rows' own subject (no cast row at all).
//
// Zero fleet log lines - CENSUS GUARD (read-time tooling only).
//

/** The rise assist's own line grammar (the emitter's exact byte shapes:
 *  the bot tag pair is the line's own head, the goto payload and the
 *  repositioned coordinates ride read-but-never-fenced). */
export const RISE_ASSIST_RE = /^(F\d+) \[F\d+\] climb rise assist: (?:assist did not complete \(goto: .*\)|repositioned to -?\d+,-?\d+,-?\d+ - the loop re-judges)\s*$/

/** The bill skin's own grammar (the did-not-complete verdict). */
export const RISE_ASSIST_BILL_RE = /^(F\d+) \[F\d+\] climb rise assist: assist did not complete \(goto: .*\)\s*$/

/**
 * riseAssistBook(lines) - the rise assist lines' own book.
 * @param {string[]|string} [lines] one fleet-log, all lines
 * @returns {null|{events: Array<{bot: string, kind: string}>, total: number, bills: number, voices: number}}
 *   the book (null on junk input; an assist-free face reads
 *   {events: [], total: 0, bills: 0, voices: 0})
 */
export function riseAssistBook (lines) {
  const src = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : null)
  if (!src) return null
  const events = []
  for (const line of src) {
    if (typeof line !== 'string') continue
    const m = RISE_ASSIST_RE.exec(line)
    if (m) events.push({ bot: m[1], kind: RISE_ASSIST_BILL_RE.test(line) ? 'bill' : 'voice' })
  }
  const bills = events.filter(e => e.kind === 'bill').length
  return { events, total: events.length, bills, voices: events.length - bills }
}

/**
 * riseAssistCast(events) - the assists' own bot-level seat (the count law).
 * @param {Array<{bot: string, kind?: string}>} [events] riseAssistBook's own cells
 * @returns {null|{bot: string, owns: number, ofAssists: number, share: number}}
 *   the seat (null on junk, an empty book, or an under-half leader)
 */
export function riseAssistCast (events) {
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
  return { bot: top, owns: topOwns, ofAssists: total, share: +((topOwns / total) * 100).toFixed(3) }
}

/**
 * riseAssistCastRow(cast) - the seat's own row (the prose lives only in the lib).
 * @param {null|{bot: string, owns: number, ofAssists: number, share: number}} [cast] riseAssistCast's own read
 * @returns {null|string} the row (null on junk)
 */
export function riseAssistCastRow (cast) {
  if (!cast || typeof cast !== 'object' || Array.isArray(cast)) return null
  const { bot, owns, ofAssists, share } = cast
  if (typeof bot !== 'string' || !bot) return null
  if (!Number.isFinite(owns) || owns <= 0 || !Number.isFinite(ofAssists) || ofAssists <= 0 || owns > ofAssists) return null
  if (!Number.isFinite(share)) return null
  const s = ofAssists === 1 ? 'assist' : 'assists'
  return `the rise assist's own cast (v0.943.0): ${bot} owns ${owns} of ${ofAssists} ${s} (${share}%) - THE CLIMB'S OWN REPEAT RIDER: one bot's own climbs keep asking for the assist lane - the raw per-bot row priced the split, the cast names the lane's own repeater`
}

/**
 * riseAssistDuo(events) - the duo beside the seat's silence (book >= 2 bots,
 * byte law count desc + bot byte asc).
 * @param {Array<{bot: string, kind?: string}>} [events] riseAssistBook's own cells
 * @returns {null|{leader: string, leaderOwns: number, runner: string, runnerOwns: number, ofAssists: number, pairOwns: number, share: number}}
 *   the duo (null on junk, a thin book, or a leader the seat's law owns)
 */
export function riseAssistDuo (events) {
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
  return { leader, leaderOwns, runner, runnerOwns, ofAssists: total, pairOwns, share: +((pairOwns / total) * 100).toFixed(3) }
}

/**
 * riseAssistDuoRow(duo) - the duo's own row (the prose lives only in the lib).
 * @param {null|{leader: string, leaderOwns: number, runner: string, runnerOwns: number, ofAssists: number, pairOwns: number, share: number}} [duo] riseAssistDuo's own read
 * @returns {null|string} the row (null on junk)
 */
export function riseAssistDuoRow (duo) {
  if (!duo || typeof duo !== 'object' || Array.isArray(duo)) return null
  const { leader, leaderOwns, runner, runnerOwns, ofAssists, pairOwns, share } = duo
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner) return null
  if (!Number.isFinite(leaderOwns) || leaderOwns <= 0 || !Number.isFinite(runnerOwns) || runnerOwns <= 0) return null
  if (!Number.isFinite(ofAssists) || ofAssists <= 0 || !Number.isFinite(pairOwns) || pairOwns > ofAssists) return null
  if (!Number.isFinite(share)) return null
  const s = ofAssists === 1 ? 'assist' : 'assists'
  return `the rise assist's own riders (v0.943.0): no solo assistant owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofAssists} ${s} (${share}%) - THE ASSISTANTS' OWN CROWD: the cast's tie law held, the lane's spread is still real - the duo prices the assists the solo law refused to name`
}
