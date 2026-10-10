//
// bareend.mjs - THE BARE END'S OWN JOIN (v0.910.0)
//
// The v0.909.0 seat split the '()' skins by the kicked client's own
// adjacency - and the face-187 read left the BARE cell nameless:
// 9 silent ends across the face whose seat held NO kicked client at
// all. THE JOIN asks the bare cell's own question: what ended those
// sessions, if no server kick ever rode? The v0.806.0 book already
// owns one candidate - the socket-loss certificate ('F1 [F1] error:
// EPIPE' and its 'socket error:' twin, the client-side death
// certificates): a session whose client died under it can end without
// the catch ever firing, the same silent shape the wire's own seam
// read priced. So the bare cell splits:
//   bareCert   - the bare end whose bot carried a certificate BEFORE
//                it (since the bot's previous retry line) - the socket
//                death's own shadow, the known class's own neighbor;
//   bareSilent - the bare end with NO certificate and NO kick in its
//                seat - the face's quietest ends, a lane nothing yet
//                names.
// The partition is the meter BY CONSTRUCTION: bareCert + bareSilent =
// the v0.909.0 seat's own bare cell on the same face (the reconcile
// the reads do by hand).
//
// The pending law mirrors the retimeter's cursor (one pass, per-bot):
// a kicked client or a certificate waits for the bot's NEXT retry
// line; ANY retry consumes the pendings (a whyed retry proves the
// catch ran; a skin prices the seat it rode). A kick in the seat
// outranks the certificate - the kick-adjacent skins belong to the
// v0.909.0 row, never to this seat. Junk-safe: a non-array reads the
// honest silence, non-string lines skip, the raw 'Error:' stacks (the
// unattributed bursts) never invent a bot (the v0.806.0 blind law).
// A face with zero bare skins reads the honest silence (null) - the
// join is the bare cell's own meter, a bare-free face is not its
// customer.
//

import { KICKED_ANCHOR_RE } from './kindlesskicks.mjs'
import { SOCK_LOSS_RE, SOCK_TWIN_RE } from './sockloss.mjs'
import { KICK_KIND_RE } from './kickkinds.mjs'

// the bot's own retry line - read ONLY for the why seat: empty is the skin.
const EMPTY_WHY_RETRY_RE = /^(F\d+) retry #\d+ in [0-9]+(?:\.[0-9]+)?s \((.*)\)$/

/**
 * bareEndJoin(lines) - the bare silent end's own join.
 * @param {string[]|null} [lines] the fleet19.log lines
 * @returns {null|{bare: number, bareCert: number, bareSilent: number,
 *   byBot: Object<string, number>}}
 *   the bare cell's own join (null on a bare-free face)
 */
export function bareEndJoin (lines) {
  if (!Array.isArray(lines)) return null
  const pending = {}
  let bare = 0
  let bareCert = 0
  let bareSilent = 0
  const byBot = {}
  for (let i = 0; i < lines.length; i++) {
    const s = typeof lines[i] === 'string' ? lines[i] : ''
    // the kicked client's own anchor (the same one kindlesskicks rides)
    const am = KICKED_ANCHOR_RE.exec(s)
    if (am) {
      const km = KICK_KIND_RE.exec(s)
      const st = pending[am[1]] || (pending[am[1]] = {})
      if (km && /duplicate_login/.test(km[2])) st.dup = true
      st.kick = true
      continue
    }
    // the socket-loss certificate's own anchor (the loss or its twin -
    // ONE death, one pending; the raw stack never invents a bot)
    if (SOCK_LOSS_RE.test(s) || SOCK_TWIN_RE.test(s)) {
      const bm = /^(F\d+) \[/.exec(s)
      if (bm) {
        const st = pending[bm[1]] || (pending[bm[1]] = {})
        st.cert = true
      }
      continue
    }
    const rm = EMPTY_WHY_RETRY_RE.exec(s)
    if (!rm) continue
    const st = pending[rm[1]]
    if (rm[2] !== '') {
      // a whyed retry proves the catch ran - the seat was taken
      if (st) { st.dup = false; st.kick = false; st.cert = false }
      continue
    }
    // the skin: a kick in the seat outranks the certificate (the
    // kick-adjacent skins belong to the v0.909.0 row) - READ the seat
    // first, THEN consume it
    const bot = rm[1]
    const hadKick = !!(st && st.kick)
    const hadCert = !!(st && st.cert)
    if (st) { st.dup = false; st.kick = false; st.cert = false }
    if (hadKick) continue
    bare++
    byBot[bot] = (byBot[bot] || 0) + 1
    if (hadCert) bareCert++
    else bareSilent++
  }
  if (!bare) return null
  return { bare, bareCert, bareSilent, byBot }
}
