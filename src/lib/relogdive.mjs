//
// relogdive.mjs - THE RELOG'S OWN DIVE JOIN (v0.916.0)
//
// The v0.715.0 loop bill's founding warning priced the relogs' own
// stalls ('the relog lane was feeding the loop it exists to break')
// - but the loop's own CLOSURE rode unread: the relog bots and the
// rescue lane's own spenders never joined. Face 191 (38084058429) is
// the row's own face: 5 relogs (head-wet saver 4) rode F11 x3 + F15
// x2 (100% of the relog mass), and the SAME bots own 9 of 15 rescue
// starts (60.0%) - the reconnect loop's own shape: the head-wet saver
// walks out, returns, dives again, freezes blind, relogs. THE JOIN
// reads the two books' own cells (the bill law, zero re-parsing:
// frozenCensus's relogs.byBot verbatim + the rescue ledger's own
// perBot starts) and seats the dive lane's mass the relog bots own.
//
// THE SEAT LAW (the v0.774.0/v0.780.0/v0.912.0 law): the joined bots'
// own share of the rescue starts - above half owns (THE RECONNECT
// LOOP'S OWN CLOSURE), at or below half the crowd rides measured,
// not owned (the relog lane's reach is the measure - the v0.812.0
// riders voice).
//
// Fences (the honest fork):
//   - junk input (non-object maps, non-finite counts) judges nothing
//   - zero joined bots (no bot both relogged and dove) -> null - the
//     honest silence: the two books never met
//   - the join sorts starts desc then the bot's own byte asc (the
//     v0.790.0 byte law), capped at the top two (the riders cap - a
//     many-bot join cannot balloon the row)
//
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.379/.../v0.754.0 precedent).
//

/**
 * relogDiveJoin(relogByBot, startsByBot) - the relog bots joined to
 * the rescue lane's own spenders (null unless a bot rode both books).
 *
 * @param {unknown} [relogByBot] frozenCensus's relogs.byBot cell
 *   ({ F11: 3, ... }) or null
 * @param {unknown} [startsByBot] the rescue ledger's per-bot starts
 *   cell ({ F11: 5, ... }) or null
 * @returns {null|{joined: Array<{bot: string, relogs: number, starts: number}>,
 *   joinedStarts: number, startTotal: number}}
 */
export function relogDiveJoin (relogByBot, startsByBot) {
  if (!relogByBot || typeof relogByBot !== 'object' || Array.isArray(relogByBot)) return null
  if (!startsByBot || typeof startsByBot !== 'object' || Array.isArray(startsByBot)) return null
  let startTotal = 0
  for (const n of Object.values(startsByBot)) {
    if (typeof n !== 'number' || !Number.isFinite(n) || n < 0) continue
    startTotal += n
  }
  const joined = []
  for (const [bot, n] of Object.entries(relogByBot)) {
    if (typeof bot !== 'string' || !bot) continue
    if (typeof n !== 'number' || !Number.isFinite(n) || n <= 0) continue
    const s = startsByBot[bot]
    if (typeof s !== 'number' || !Number.isFinite(s) || s <= 0) continue
    joined.push({ bot, relogs: n, starts: s })
  }
  if (!joined.length) return null
  joined.sort((a, b) => b.starts - a.starts || a.bot.localeCompare(b.bot))
  return { joined, joinedStarts: joined.reduce((s, j) => s + j.starts, 0), startTotal }
}

/**
 * relogDiveJoinRow(j) - the join's own row: the joined bots (top two,
 * the byte law), their share of the rescue starts, the seat (above
 * half owns - the reconnect loop's own closure; else the riders).
 * Junk never prints (the honest silence's row law).
 *
 * @param {unknown} [j]
 * @returns {null|string}
 */
export function relogDiveJoinRow (j) {
  if (!j || typeof j !== 'object') return null
  const { joined, joinedStarts, startTotal } = j
  if (!Array.isArray(joined) || !joined.length) return null
  if (!Number.isFinite(joinedStarts) || joinedStarts <= 0) return null
  if (!Number.isFinite(startTotal) || startTotal <= 0) return null
  const top = joined.slice(0, 2).map(e => `${e.bot} (relog ${e.relogs}, start ${e.starts})`).join(' + ')
  const share = joinedStarts / startTotal
  const pct = (share * 100).toFixed(1)
  const seat = share > 0.5
    ? ` - THE RECONNECT LOOP'S OWN CLOSURE: the head-wet saver returns to the water`
    : ` - the dive lane's own crowd rides measured, not owned (the relog lane's reach is the measure)`
  return `the relog's own dive join (v0.916.0): ${joined.length} bot(s) relogged AND started a rescue - ${top} own ${joinedStarts} of ${startTotal} start(s) (${pct}%)${seat}`
}
