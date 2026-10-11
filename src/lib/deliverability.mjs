// ---------------------------------------------------------------------------
// (v0.385.0) THE DELIVERABILITY ARM - the bank-flow whale's priced lever.
//
// The whale, priced across two censuses: v0.382.0 read face 19 (36802577873)
// closing 19/19 ALIVE with a 495u pocket unbanked (both stranded holders
// zero-delivered, 'the walk never delivered', the observed 2.1u/s flow
// needing 234s PAST the deadline); v0.384.0 read the same face's four budget
// lines and made the deficit STRUCTURAL - the end-phase grants 300s (the
// v0.41.0 kill-margin clamp) against needs the flow prices at 2433-2789s:
// an 11% granted share. No final clock covers that gap by construction, so
// the only lever is EARLIER delivery: a mid-run trip fired while the clock
// can still pay for the walk.
//
// THE GATE'S TWO TERMS (both from the field, none invented):
// - 'clamp': the pocket's flow-priced need outruns the clock the end-phase
//   would grant if its chain began NOW (the caller prices that with the SAME
//   finalBankBudgetMs call the chain entry makes - the sibling law). These
//   units can never ride the final bank; a mid-run trip is the only delivery
//   lane they will ever get.
// - 'clock': the need outruns the run's remaining time - pocket/rate vs
//   time left, the 1100 fire's exact lever words. Waiting strands the pocket
//   by arithmetic, not by luck.
//
// THE SIBLING-SHAPE LAW: this gate only COMPARES - it never prices a rate.
// The need arrives from flowPriceClock (the same samples, the same tail-
// burst guard, the same margin the end-phase clock and the gap row read);
// a gate that conjured its own pace would diverge from the row that judges
// it (the v0.348.0 lesson's own shape). Junk-safe: an unpriced need refuses
// (the dead-flow law - no budget covers what no rate prices), and a limit
// that is unreadable or exhausted cannot fire its term (a zero granted
// clock means no chain may run, not that every pocket is overdue).
//
// The strict-inequality law: a need that EXACTLY fits the limit is covered
// (need > limit fires, need == limit does not) - the priced need already
// carries the v0.334.0 4s cushion, so the boundary is honest without a
// second margin stacked on it.
//
// Pure arithmetic over plain numbers so CI tests every branch without a
// server (the pocketline.mjs shape).
// ---------------------------------------------------------------------------

/**
 * The mid-run deliverability gate.
 * @param {object} [p]
 * @param {number|null} [p.needS] the flow-priced seconds the pocket needs (from flowPriceClock's needS - the sibling law; junk/<=0 refuses)
 * @param {number|null} [p.grantedS] the clock the end-phase would grant a chain begun now, in seconds (the caller prices it with finalBankBudgetMs; junk/<=0 disarms the clamp term)
 * @param {number|null} [p.timeLeftS] the run's remaining seconds (junk/<=0 disarms the clock term)
 * @returns {{go: boolean, term: 'clamp'|'clock'|null, limitS: number|null, needS: number|null}} go=true arms the mid-run bank trip; term names the field term that fired ('clamp' wins when both fire - the structural one); limitS echoes the fired limit for the cause line
 */
export function deliverableNow ({ needS = null, grantedS = null, timeLeftS = null } = {}) {
  const need = Number(needS)
  if (!Number.isFinite(need) || need <= 0) return { go: false, term: null, limitS: null, needS: Number.isFinite(need) ? need : null }
  const grant = Number(grantedS)
  const left = Number(timeLeftS)
  const clampDue = Number.isFinite(grant) && grant > 0 && need > grant
  const clockDue = Number.isFinite(left) && left > 0 && need > left
  if (clampDue) return { go: true, term: 'clamp', limitS: grant, needS: need }
  if (clockDue) return { go: true, term: 'clock', limitS: left, needS: need }
  return { go: false, term: null, limitS: null, needS: need }
}

// (v0.935.0) THE EARLY TRIPS' OWN CAST - the deliverability arm's bot-level
// seat. The v0.385.0 arm priced the split (clamp vs clock - the structural
// vs temporal term) and the census prints every firing raw ('F3 clamp:
// pocket 495u at 0.3u/s needs 1470s vs 900s') - but no row ever said WHICH
// bot's own pocket keeps firing the early trips (the repeat offender the
// clamp's own cure should aim at). THE COUNT LAW (the census's own events
// cells only, zero re-parsing - the count-seat precedent): each firing is
// one vote; a bot owns the cast only above half the firings (a tie owns
// nothing - the storm-has-no-seat precedent). Junk never invents a cast: a
// missing or empty book, a cell without a well-formed bot byte, or a
// minority top reads the honest silence (null) - the true cells still tally.
export function deliverableCast (events) {
  const book = (Array.isArray(events) ? events : []).filter((e) => e && typeof e === 'object' &&
    typeof e.bot === 'string' && e.bot)
  if (!book.length) return null
  const byBot = new Map()
  for (const e of book) byBot.set(e.bot, (byBot.get(e.bot) || 0) + 1)
  const ranked = [...byBot.entries()].map(([bot, owns]) => ({ bot, owns }))
    .sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  const total = book.length
  const top = ranked[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofTrips: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.935.0) the cast's own row - THE POCKET'S OWN REPEAT OFFENDER: one bot's
// own pocket keeps firing the arm; the v0.385.0 arm priced the split, the
// cast names its repeater. Junk never prints a seat (the honest silence's
// own row law).
export function deliverableCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofTrips, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofTrips) || ofTrips <= 0 || owns > ofTrips || !Number.isFinite(share)) return null
  const s = ofTrips === 1 ? 'trip' : 'trips'
  return `the early trips' own cast (v0.935.0): ${bot} owns ${owns} of ${ofTrips} early ${s} (${(share * 100).toFixed(1)}%) - THE POCKET'S OWN REPEAT OFFENDER: one bot's own pocket keeps firing the arm - the v0.385.0 arm priced the split, the cast names its repeater`
}

// (v0.935.0) THE EARLY TRIPS' OWN RIDERS - the cast's silence's own companion
// (the riders precedent, zero re-parsing): a MEASURE, never a verdict-owner -
// the top two firers' concentration prices the shape the solo law refused to
// name (the cast's owner case leaves the companion unprinted - the
// decompose's own branch law). The order is deterministic (count desc, then
// the name's own - 'F16' < 'F6' byte-wise). Junk never invents a shape: a
// missing or empty book, fewer than two firers, or a leader already holding
// the majority reads the honest silence (null).
export function deliverableRiders (events) {
  const book = (Array.isArray(events) ? events : []).filter((e) => e && typeof e === 'object' &&
    typeof e.bot === 'string' && e.bot)
  if (book.length < 2) return null
  const byBot = new Map()
  for (const e of book) byBot.set(e.bot, (byBot.get(e.bot) || 0) + 1)
  const ranked = [...byBot.entries()].map(([bot, owns]) => ({ bot, owns }))
    .sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  const top = ranked[0]
  if (top.owns > book.length - top.owns) return null
  const leader = ranked[0]
  const runner = ranked[1]
  const pairOwns = leader.owns + runner.owns
  return { leader: leader.bot, leaderOwns: leader.owns, runner: runner.bot, runnerOwns: runner.owns, ofTrips: book.length, pairOwns, share: +(pairOwns / book.length).toFixed(3) }
}

// (v0.935.0) the riders' own row - THE REPEAT OFFENDERS' OWN CROWD (the
// family's own tail): a measure of the shape, never a named owner. Junk
// never prints a shape (the honest silence's own row law).
export function deliverableRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofTrips, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofTrips) || ofTrips <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofTrips ||
      !Number.isFinite(share)) return null
  return `the early trips' own riders (v0.935.0): no solo pocket owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofTrips} early trips (${(share * 100).toFixed(1)}%) - THE REPEAT OFFENDERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the pockets the solo law refused to name`
}
