//
// kickbill.mjs - THE KICK'S OWN CHURN (v0.717.0)
//
// The frozen census (v0.426.0) already counts the duplicate-login kick
// (the kicked-lane emitter, byBot) beside the frozen client relogs it
// sits next to - but no fold ever read the TWO churn lanes TOGETHER:
// the relog is the saver's own churn (the client ending its session,
// the v0.715.0 bill's subject), the kick is the lane's own collision
// (the server refusing the login because the old session still holds -
// the reconnect lane's price, not its choice). The 42nd face made the
// split impossible to ignore: 30 kicks against 7 relogs, and the
// populations barely overlap - F17 (11 kicks) and F9 (9) never relogged,
// while F5 and F14 relogged and were never kicked. Two churns, two
// owners, one fleet.
//
// kickBill(frozen) folds the census's EXISTING cells (the
// doorstepStormCensus signature law - the parsed cells in, one shape
// out, zero new regexes): kicks and relogs side by side, the PAIRED
// bots (both lanes' customers - the double churn), the SPLIT (kick-only
// vs relog-only - whose churn is whose), the churn total, and the
// REPEATS (the bots riding 2+ churn events of either kind - the
// v0.715.0 repeats law extended to both lanes; a single event is the
// lane doing its job, the second is the churn reproducing). A
// kick-free face reads the honest silence (null - the bill opens on
// the kick lane only; a relog-only face stays its own bill's).
//
// WHY THE PAIRING IS THE METER: the paired bot churns from BOTH sides
// (its session fights the server on every reconnect - the cure's own
// friction), the kick-only whale churns without ever freezing (the
// stale session or the duplicate spawn the fleet never closed), the
// relog-only bot is the wet family's pure customer. The bill prices
// the split per face so the churn's cure reads its own evidence.
//

/**
 * kickBill(frozen) - the duplicate-login kick's own churn bill.
 * @param {{dupKicks?: {n?: number, byBot?: Object<string, number>},
 *          relogs?: {n?: number, byBot?: Object<string, number>}}|null} [frozen]
 *   the frozenCensus result
 * @returns {null|{kicks: number, kickBots: Object<string, number>,
 *   relogs: number, churn: number, paired: {n: number, byBot: Object<string, {kicks: number, relogs: number}>},
 *   kickOnly: {n: number, bots: Object<string, number>},
 *   relogOnly: {n: number, bots: Object<string, number>},
 *   repeats: {n: number, byBot: Object<string, number>, owned: number, share: number}}}
 *   the bill (null on a kick-free face - the honest silence)
 */
export function kickBill (frozen) {
  const kN = Number(frozen && frozen.dupKicks && frozen.dupKicks.n) || 0
  if (!(kN > 0)) return null
  const kBots = (frozen && frozen.dupKicks && frozen.dupKicks.byBot) || {}
  const rN = Number(frozen && frozen.relogs && frozen.relogs.n) || 0
  const rBots = (frozen && frozen.relogs && frozen.relogs.byBot) || {}
  const churnByBot = {}
  for (const [b, k] of Object.entries(kBots)) churnByBot[b] = (churnByBot[b] || 0) + k
  for (const [b, r] of Object.entries(rBots)) churnByBot[b] = (churnByBot[b] || 0) + r
  const paired = {}
  const kickOnly = {}
  for (const [b, k] of Object.entries(kBots)) {
    if (rBots[b]) paired[b] = { kicks: k, relogs: rBots[b] }
    else kickOnly[b] = k
  }
  const relogOnly = {}
  for (const [b, r] of Object.entries(rBots)) if (!kBots[b]) relogOnly[b] = r
  const repeats = {}
  let owned = 0
  for (const [b, c] of Object.entries(churnByBot)) {
    if (c >= 2) { repeats[b] = c; owned += c }
  }
  const churnN = kN + rN
  return {
    kicks: kN,
    kickBots: { ...kBots },
    relogs: rN,
    churn: churnN,
    paired: { n: Object.keys(paired).length, byBot: paired },
    kickOnly: { n: Object.keys(kickOnly).length, bots: kickOnly },
    relogOnly: { n: Object.keys(relogOnly).length, bots: relogOnly },
    repeats: { n: Object.keys(repeats).length, byBot: repeats, owned, share: churnN > 0 ? owned / churnN : 0 }
  }
}

// (v0.936.0) THE LOGIN CHURN'S OWN CAST - the kick bill's bot-level seat.
// The v0.717.0 bill priced the JOIN (kicks + relogs, the paired bots, the
// split, the repeats) - but no row ever said WHICH bot's own logins own the
// churn (face 200's read: '19 dup kicks (F14 x8) + 1 relog (F10) = 20
// events' rode raw beside the bill with no seat naming the whale). THE
// COUNT LAW (the bill's own cells only, zero re-parsing - the cast's own
// precedent): the per-bot churn counts rebuild from the bill's OWN lanes
// (the kicks ride kickBots, the relogs ride paired.byBot + relogOnly.bots -
// paired and the two only-lanes partition both books, the bill's own
// construction law); each churn event is one vote; a bot owns the cast only
// above half the churn events (a tie owns nothing - the storm-has-no-seat
// precedent). Junk never invents a cast: a missing or empty book, or a
// minority top, reads the honest silence (null).
export function loginChurnCast (kb) {
  if (!kb || typeof kb !== 'object') return null
  const churnByBot = {}
  for (const [b, k] of Object.entries(kb.kickBots || {})) {
    if (typeof b === 'string' && b && Number.isFinite(k) && k > 0) churnByBot[b] = (churnByBot[b] || 0) + k
  }
  for (const [b, v] of Object.entries((kb.paired && kb.paired.byBot) || {})) {
    const r = v && typeof v === 'object' ? v.relogs : null
    if (typeof b === 'string' && b && Number.isFinite(r) && r > 0) churnByBot[b] = (churnByBot[b] || 0) + r
  }
  for (const [b, r] of Object.entries((kb.relogOnly && kb.relogOnly.bots) || {})) {
    if (typeof b === 'string' && b && Number.isFinite(r) && r > 0) churnByBot[b] = (churnByBot[b] || 0) + r
  }
  const cells = Object.entries(churnByBot).map(([bot, owns]) => ({ bot, owns }))
    .sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!cells.length) return null
  const total = cells.reduce((a, c) => a + c.owns, 0)
  const top = cells[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofEvents: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.936.0) the cast's own row - THE SESSION'S OWN REPEAT CUSTOMER: one
// bot's own logins keep colliding the lane; the v0.717.0 bill priced the
// split, the cast names its repeater. Junk never prints a seat (the honest
// silence's own row law).
export function loginChurnCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofEvents, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofEvents) || ofEvents <= 0 || owns > ofEvents || !Number.isFinite(share)) return null
  const s = ofEvents === 1 ? 'event' : 'events'
  return `the login churn's own cast (v0.936.0): ${bot} owns ${owns} of ${ofEvents} churn ${s} (${(share * 100).toFixed(1)}%) - THE SESSION'S OWN REPEAT CUSTOMER: one bot's own logins keep colliding the lane - the v0.717.0 bill priced the split, the cast names its repeater`
}

// (v0.936.0) THE LOGIN CHURN'S OWN RIDERS - the cast's silence's own
// companion (the riders precedent, zero re-parsing): a MEASURE, never a
// verdict-owner - the top two churners' concentration prices the shape the
// solo law refused to name (the cast's owner case leaves the companion
// unprinted - the decompose's own branch law). The order is deterministic
// (count desc, then the name's own - 'F14' < 'F8' byte-wise). Junk never
// invents a shape: a missing or empty book, fewer than two churners, or a
// leader already holding the majority reads the honest silence (null).
export function loginChurnRiders (kb) {
  const cast = loginChurnCast(kb)
  if (cast) return null
  if (!kb || typeof kb !== 'object') return null
  const churnByBot = {}
  for (const [b, k] of Object.entries(kb.kickBots || {})) {
    if (typeof b === 'string' && b && Number.isFinite(k) && k > 0) churnByBot[b] = (churnByBot[b] || 0) + k
  }
  for (const [b, v] of Object.entries((kb.paired && kb.paired.byBot) || {})) {
    const r = v && typeof v === 'object' ? v.relogs : null
    if (typeof b === 'string' && b && Number.isFinite(r) && r > 0) churnByBot[b] = (churnByBot[b] || 0) + r
  }
  for (const [b, r] of Object.entries((kb.relogOnly && kb.relogOnly.bots) || {})) {
    if (typeof b === 'string' && b && Number.isFinite(r) && r > 0) churnByBot[b] = (churnByBot[b] || 0) + r
  }
  const cells = Object.entries(churnByBot).map(([bot, owns]) => ({ bot, owns }))
    .sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (cells.length < 2) return null
  const leader = cells[0]
  const runner = cells[1]
  const pairOwns = leader.owns + runner.owns
  const total = cells.reduce((a, c) => a + c.owns, 0)
  return { leader: leader.bot, leaderOwns: leader.owns, runner: runner.bot, runnerOwns: runner.owns, ofEvents: total, pairOwns, share: +(pairOwns / total).toFixed(3) }
}

// (v0.936.0) the riders' own row - THE REPEAT CUSTOMERS' OWN CROWD (the
// family's own tail): a measure of the shape, never a named owner. Junk
// never prints a shape (the honest silence's own row law).
export function loginChurnRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofEvents, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofEvents) || ofEvents <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofEvents ||
      !Number.isFinite(share)) return null
  return `the login churn's own riders (v0.936.0): no solo session owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofEvents} churn events (${(share * 100).toFixed(1)}%) - THE REPEAT CUSTOMERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the sessions the solo law refused to name`
}
