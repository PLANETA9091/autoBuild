//
// retrywhy.mjs - THE EMPTY WHY'S OWN SEAT (v0.909.0)
//
// The reconnect lane prints every retry's why seat ('F1 retry #1 in
// 6.4s (kick/disconnect)', the v0.16.3 shape) - and the face-187 read
// hand-priced a retry that rode with NOTHING in the seat ('F1 retry #1
// in 4.5s ()') on a DUPLICATE kick. THE SEAM READ (this fire, fleet19
// 3793-3832): the why seat is written ONLY by the catch ('kick/disconnect'
// on the kick branch, e.message on the other) and RESET after every print
// - so '()' reads strictly NO catch assignment: the session ended SILENT,
// and the kick's own kind never reached the catch's own if. The vocabulary
// regex was never the hole - THE SEAM WAS. The cure candidate (the chain's
// own): read the kind off the mineflayer kicked-event side (miner.mjs
// 346 prints the very byte the catch never sees) - the wire's own
// before/after meter is THIS seat.
//
// emptyWhyRetries(lines) prices the skin per face (one pass, per-bot
// pending law mirroring the retimeter's cursor: a kick's ride is the
// bot's NEXT retry line, and ANY retry consumes the pending kick - a
// whyed retry proves the catch ran):
//   dupAdjacent   - the skin riding a duplicate_login kick (THE MISS's
//                   own subclass: the floor never lifted because the
//                   kind never arrived);
//   otherAdjacent - the skin riding any other kicked client (the silent
//                   end's other kick lane);
//   bare          - the silent end with NO kicked client in the seat
//                   (the session's own quiet deaths);
//   byBot         - the skin's own seats per bot.
// Junk-safe: a non-array reads the honest silence, non-string lines
// skip, the kindless kicks (the v0.906.0 seat) ride adjacent as others
// - the anchor is the same one kindlesskicks rides. A face with zero
// empty-why retries reads the honest silence (null) - the seat is the
// skin's own meter, a skin-free face is not its customer.
//

import { KICK_KIND_RE } from './kickkinds.mjs'

// the bot's own retry line - the v0.16.3 reconnect lane's own print,
// read ONLY for the why seat: empty is the skin.
const EMPTY_WHY_RETRY_RE = /^(F\d+) retry #\d+ in [0-9]+(?:\.[0-9]+)?s \((.*)\)$/

// the kicked client's own anchor - the SAME anchor kindlesskicks.mjs
// rides (v0.906.0): every kicked client counts, the byte only names it.
const KICKED_ANCHOR_RE = /^(F\d+) \[\1\] KICKED: /

/**
 * emptyWhyRetries(lines) - the empty why's own seat (the '()' skin).
 * @param {string[]|null} [lines] the fleet19.log lines
 * @returns {null|{total: number, dupAdjacent: number, otherAdjacent: number,
 *   bare: number, byBot: Object<string, number>}}
 *   the skin's own seat (null on a skin-free face)
 */
export function emptyWhyRetries (lines) {
  if (!Array.isArray(lines)) return null
  // per-bot pending seats: a kicked client waits for the bot's NEXT
  // retry line; any retry consumes it (the whyed retry proves the catch).
  const pending = {}
  let total = 0
  let dupAdjacent = 0
  let otherAdjacent = 0
  let bare = 0
  const byBot = {}
  for (let i = 0; i < lines.length; i++) {
    const s = typeof lines[i] === 'string' ? lines[i] : ''
    const am = KICKED_ANCHOR_RE.exec(s)
    if (am) {
      const km = KICK_KIND_RE.exec(s)
      const st = pending[am[1]] || (pending[am[1]] = {})
      if (km && /duplicate_login/.test(km[2])) st.dup = true
      st.kick = true
      continue
    }
    const rm = EMPTY_WHY_RETRY_RE.exec(s)
    if (!rm) continue
    const st = pending[rm[1]]
    if (rm[2] !== '') {
      // a whyed retry proves the catch ran - the kick's ride was taken
      // (the cursor law's own consume)
      if (st) { st.dup = false; st.kick = false }
      continue
    }
    const bot = rm[1]
    total++
    byBot[bot] = (byBot[bot] || 0) + 1
    if (st && st.dup) dupAdjacent++
    else if (st && st.kick) otherAdjacent++
    else bare++
    if (st) { st.dup = false; st.kick = false }
  }
  if (!total) return null
  return { total, dupAdjacent, otherAdjacent, bare, byBot }
}
