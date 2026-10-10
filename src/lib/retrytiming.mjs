//
// retrytiming.mjs - THE FLOOR'S OWN RETIMETER (v0.907.0)
//
// The duplicate floor (v0.904.0) lifts every duplicate_login relog's
// pre-phase delay to its 6000ms grace - and the reconnect lane has
// printed the ride all along ('F2 retry #1 in 6.4s (kick/disconnect)',
// the v0.16.3 shape). No fold ever joined the TWO lines: the KICKED
// line (the kind byte - the kick's own class) and the bot's NEXT retry
// line (the delay the loop actually rode). The face-187 read priced the
// gap: the kick kinds' row owned 10 duplicate_login kicks (100.0%),
// and the floor's own field effect - did the rides lift ABOVE the
// grace? - rode unread, because the timing lived in a line no kick
// lens parsed.
//
// duplicateRetryRides(lines, opts) joins them (one pass, per-bot
// ordering): every duplicate_login KICKED line rides the bot's NEXT
// 'retry #N in X.Xs' line - its delay is THE RIDE. rides >= the floor
// = the lift's own proof (above); rides < the floor = THE MISS (the
// floor did not lift this ride - the kind never reached the loop, the
// vocabulary gap or the reset's own class); a dup kick with no next
// retry line (the face's own end) reads unpriced. The MISS's own bots
// ride byBotMiss (the alarm's own seats). Junk-safe: a non-array reads
// the honest silence, non-string lines skip, a malformed delay never
// prices a ride (unpriced). A face with zero duplicate kicks reads the
// honest silence (null) - the retimeter is the floor's own meter, a
// dup-free face is not its customer.
//
// WHY THE JOIN IS THE METER: the census rows price the churn's SIZE
// (the kinds' share, the repeats) - only the ride prices the floor's
// OWN behavior. above = the grace held; below = the class the floor
// was built for slipping through unbowed; unpriced = the face's own
// window. The next faces' cadence reads the retimeter's rows directly.
//

import { KICK_KIND_RE } from './kickkinds.mjs'

// the bot's own retry line - the v0.16.3 reconnect lane's own print
// ('F2 retry #1 in 6.4s (kick/disconnect)'): attempt, the delay, the why.
const RETRY_RE = /^(F\d+) retry #\d+ in ([0-9]+(?:\.[0-9]+)?)s \((.*)\)$/

/**
 * duplicateRetryRides(lines, opts) - the duplicate floor's own ride meter.
 * @param {string[]|null} [lines] the fleet19.log lines
 * @param {{dupFloorMs?: number}} [opts] the floor (default 6000, the v0.904.0 grace)
 * @returns {null|{kicks: number, rides: number, above: number, below: number,
 *   unpriced: number, minMs: number|null, maxMs: number|null,
 *   byBotMiss: Object<string, number>}}
 *   the retimeter (null on a dup-kick-free face)
 */
export function duplicateRetryRides (lines, { dupFloorMs = 6000 } = {}) {
  if (!Array.isArray(lines)) return null
  const floor = Number.isFinite(dupFloorMs) && dupFloorMs > 0 ? dupFloorMs : 6000
  // pass 1: per-bot ordered seats - the dup kicks and the retry lines
  const kicksByBot = {}
  const retryByBot = {}
  let kicks = 0
  for (let i = 0; i < lines.length; i++) {
    const s = typeof lines[i] === 'string' ? lines[i] : ''
    const km = KICK_KIND_RE.exec(s)
    if (km) {
      if (/duplicate_login/.test(km[2])) {
        kicks++
        ;(kicksByBot[km[1]] = kicksByBot[km[1]] || []).push(i)
      }
      continue
    }
    const rm = RETRY_RE.exec(s)
    if (rm) (retryByBot[rm[1]] = retryByBot[rm[1]] || []).push([i, rm])
  }
  if (!kicks) return null
  // pass 2: each dup kick rides the bot's NEXT retry line (line order)
  let rides = 0
  let above = 0
  let below = 0
  let unpriced = 0
  let minMs = null
  let maxMs = null
  const byBotMiss = {}
  for (const [bot, idxs] of Object.entries(kicksByBot)) {
    const retries = retryByBot[bot] || []
    let cursor = 0
    for (const ki of idxs) {
      while (cursor < retries.length && retries[cursor][0] < ki) cursor++
      if (cursor >= retries.length) { unpriced++; continue }
      const secs = Number.parseFloat(retries[cursor][1][2])
      if (!Number.isFinite(secs) || secs < 0) { unpriced++; cursor++; continue }
      const ms = Math.round(secs * 1000)
      rides++
      if (ms >= floor) above++
      else {
        below++
        byBotMiss[bot] = (byBotMiss[bot] || 0) + 1
      }
      if (minMs === null || ms < minMs) minMs = ms
      if (maxMs === null || ms > maxMs) maxMs = ms
      cursor++
    }
  }
  return { kicks, rides, above, below, unpriced, minMs, maxMs, byBotMiss }
}
