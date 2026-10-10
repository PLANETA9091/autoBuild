//
// kindlesskicks.mjs - THE KINDLESS KICK'S OWN SEAT (v0.906.0)
//
// The kinds census (v0.730.0) reads the translate byte's own word or
// nothing - and 'nothing' VANISHES. Face 185 (run 38069268290) carried
// 4 kindless kicks beside its 5 duplicate_login kinds ('duplicate_login
// 5 of 5 kicks (100.0%), 11 relogs, 4 bare kicks' - the read counted
// them by hand). The v0.730.0 header priced this blind spot for KINDS
// ('a face could lose ten clients to timeouts and every lens would read
// silence') and cured it; the byte itself stayed blind - a face could
// lose ten clients to FORMLESS kicks (the transport shapes the JSON
// byte never rides) and the kinds row alone would still read its own
// count, the formless class unnamed.
//
// NOT the socket join's bare side (v0.812.0): there 'bare' reads the
// kick whose socket never died inside the window - a socket-loss lens.
// Here 'kindless' reads the kick whose line carries no parsable kind
// byte - the kinds census's own refusal. Two seats, two meters; the
// record's 'bare kicks' hand counts (faces 185, 48/49's era) priced
// THIS class.
//
// kindlessKickCensus(lines) counts the KICKED lines the kind census
// refuses: a line matching the bot's own anchor (F<digits> [same]
// 'KICKED: ') that KICK_KIND_RE cannot read. The partition is the
// meter BY CONSTRUCTION - every anchored line is either a kind or a
// kindless kick, so kinds.n + kindless.n = the face's total kicked
// clients (the reconcile the reads have been doing by hand; the sock
// join's kicks.n rides the same anchor and corroborates the total).
// Junk-safe: a non-array reads the honest silence, non-string lines
// skip, a malformed anchor (the name pair not matching) is the log's
// own corruption, not a kick - skipped like the census's own anchor
// law. A kick-free face and a face whose every kick carries a parsable
// kind both read the honest silence (null) - the seat only speaks
// when a kindless kick sits in it.
//
// WHY THE SEAT IS THE METER: a kindless kick is a client the server
// dropped with no reason the fleet's lenses can read - the class the
// duplicate floor (v0.904.0) and the kick kinds (v0.730.0) both defer
// on. The seat prices its size per face so the next formless storm
// reads its own row instead of a hand count.
//

import { KICK_KIND_RE } from './kickkinds.mjs'

// the bot's own anchor - the SAME head the kinds census's regex rides
// (F<digits> [<the same digits>] 'KICKED: '), without the byte tail.
export const KICKED_ANCHOR_RE = /^(F\d+) \[\1\] KICKED: /

/**
 * kindlessKickCensus(lines) - the KICKED lines the kind census refuses.
 * @param {string[]|null} [lines] the fleet19.log lines
 * @returns {null|{n: number, byBot: Object<string, number>}}
 *   the kindless seat (null on a kindless-free face)
 */
export function kindlessKickCensus (lines) {
  if (!Array.isArray(lines)) return null
  const byBot = {}
  let n = 0
  for (const l of lines) {
    const s = typeof l === 'string' ? l : ''
    const m = KICKED_ANCHOR_RE.exec(s)
    if (!m) continue
    if (KICK_KIND_RE.test(s)) continue // the kind byte owns this client - not the kindless seat's
    n++
    byBot[m[1]] = (byBot[m[1]] || 0) + 1
  }
  if (!n) return null
  return { n, byBot }
}
