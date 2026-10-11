// (v0.647.0) THE DEATH-DROP CENSUS - the deathdrop class's own aggregate,
// the deathsweep family's next seat (the v0.389.0 honest-sweep and the
// v0.464.0 death-ground precedents: mining-surface only, zero fleet wiring,
// zero new log lines).
//
// (v0.663.0) THE SILENT STAKE'S OWN CLOCK - the stakes' clock leg, priced by
// faces 37271081497 (the v0.662.0 tree) and 37268334485 (the fire-1330
// queue): the silent class split open. Face 662's F6 died at ts=801 with 80s
// of face left - PRE-TAIL, the read had the window and never spoke (the
// wiring seat). Face 1330's five silent stakes split 2/3: F11 120u died at
// ts=741 with 180s left (PRE-TAIL - 180 seconds and not one reloot row; the
// bot's whole voice went quiet post-respawn) against F6/F17/F8 266u landing
// INSIDE the end phase (ts=861 of clockEnd 921 - the bank's loop outlived
// their reads, the pre-position lane's territory). The ARM LAG prices the
// wait: the walk's own window field (window = despawn - lag) reads lags of
// 63s..192s (median 179s on face 662) - the respawned bot's bootstrap and
// the loop's serialization price minutes before the walk arms, which is why
// a death inside the last ~240s cannot recover in-face even when the clock
// technically fits. THE SPLIT LAW: a silent stake whose death ts rides the
// end-phase window (ts >= clockEnd - DEATH_END_PHASE_WINDOW_S, the seal
// death clock's own law, one truth imported) is the END-PHASE class; every
// other timed silent stake is PRE-TAIL (the wiring seat); a stake with no
// heartbeat anchor (pre-first-hb, or a log with no clock) stays UNTIMED -
// the stamp never invents (the sealdeath clock's own junk law).
//
// (v0.757.0) THE SILENT CLASS'S OWN EXONERATION - the silent bucket's own
// WHY split, honestly named. The v0.663.0 clock split the silent stakes by
// WHEN (pre-tail vs end-phase); the class still conflates WHY. Face 64
// (37592942080) is the exoneration's own field read: the silent class held
// 3 stakes (219u: F4+F1+F19) and only ONE was a true miss - F19's drop rode
// the EMPTY form ('pocket read empty at death (0u)', the census's own
// kind:'empty' row): nothing to arm, the wiring is fine - THE HONEST
// SILENCE. F4's 121u died inside the end phase: the bank's loop outlived
// the read - THE DEADLINE'S OWN. Only F1's ~98u pre-tail stake was the real
// defect - THE WIRING SEAT (the read had the window, the stake had mass,
// the lane never spoke). The runtime's fix target is the seat, not the
// class - a silent-bucket headline that counts the honest silences as
// defects buys the wrong cure. THE SPLIT LAW (riding the v0.663.0 cells,
// zero re-parsing): a silent stake with u === 0 (the empty form, or a ~0u
// loss) is the honest silence - mass is the read; every massy silent stake
// keeps the clock's own classes (end-phase = the deadline's own, pre-tail
// = the wiring seat); a massy stake with no anchor stays unjudged - the
// stamp never invents. The field rides the census return additively (the
// v0.756.0 meter precedent) - the v0.663.0 cells keep their shapes.
//
// WHY: face 37239853197 (the v0.644.0 tree, the wet storm) priced the class
// again: 7 deaths, the v0.199.0 death-drop lines naming ~714u scattered at
// the corpse sites, the loot ledger reading unaccounted=469u - the death
// drops are the unaccounted's dominant NAMED carrier. The fleet's own
// recovery lane (the v0.201.0 re-loot walk) spoke for exactly ONE of the
// seven (F18 - the 0u empty-pocket read); the six mass piles (113/156/39/
// 218/34/154u) rode NO reloot row at all - 'the reloot lane: arms 1,
// arrivals 0 - the dropped mass sits where it fell' (the decompose read).
// The silence is uncounted: every held face prices the deaths and the
// stakes, none prices whether the lane SPOKE. This census makes the
// silence countable - the next cure's evidence seat (a wiring read needs
// its own face priced by this lens first).
//
// THE THREE SHAPES (face-pinned on 37239853197 / 37237898451 / 37235900235):
//   'F14 [F14] died - respawning (cause: server: drowned [kind=drown] | ...)'
//     - the death announce (the v0.389.0 double-tag anatomy, imported -
//     the sibling-shape law: the sweep and the census read one truth)
//   'F14 [F14] death drop: ~113u lost at [-141,60,394] (sand 29, ...)'
//   'F18 [F18] death drop: pocket read empty at death (0u)'  - the EMPTY
//     form: a counted death with no mass, its own sub-class, not a skip
//   'F14 reloot: walking to the own death spot [-141,60,394] (...)'  - the
//     lane's voice; every ladder row (no walk (unarmed|night|why), walking,
//     no-path retry, arrived, retry failed, write-off, rim dig, surface
//     retry) carries the same 'F<N> reloot: ' head - one prefix is the lane
//
// THE JOIN LAW: line order is time order (the emitter's own convention,
// the death-ground's law). A death's stake is the death-drop row that
// FOLLOWS it for the same bot (the announce and the drop ride the same
// event, the drop is the stake's only mass read). The lane's voice is the
// bot's reloot rows AFTER that drop row - an arm row from a PREVIOUS death
// (F18's earlier ladder) never counts for a later one. A mass stake with
// no lane row after it is the SILENT class - the census's own name. A 0u
// empty read joins as armed-by-shape only if the lane spoke; its mass is
// 0 either way (the empty reads are counted, never summed as losses).
//
// Mining-surface only: zero fleet wiring, zero new log lines (the
// v0.379.0 precedent). Junk-safe: non-string rows judge nothing (the
// FATAL-face truncation lesson); junk formats never match the anatomy.

import { RELOOT_DESPAWN_MS } from './reloot.mjs' // (v0.663.0) the despawn one-truth - the walk's own window field inverts into the arm lag
import { DEATH_END_PHASE_WINDOW_S } from './sealdeath.mjs' // (v0.663.0) the end-phase one-truth - the silent split rides the seal death clock's own window

// the ANNOUNCE form only - the census's death count reads the announce (the
// 'death: ' context lines are the same death's second voice, never a death:
// the v0.389.0 anatomy's own split, the count must not double-count it)
export const DEATH_ANNOUNCE_RE = /^F\d+ \[F\d+\] died - respawning/

// the death-drop line's own anatomy: the tag pair then the drop payload
// (the loss form with the coord bracket, or the pocket-read-empty form).
export const DEATH_DROP_RE = /^F\d+ \[F\d+\] death drop: /

// the loss form's mass + coord read: '~113u lost at [-141,60,394]'
export const DEATH_DROP_LOSS_RE = /^F(\d+) \[F\d+\] death drop: ~([\d,]+)u lost at \[(-?\d+),(-?\d+),(-?\d+)\]/

// the empty form: a counted death with no mass (the pocket read failed)
export const DEATH_DROP_EMPTY_RE = /^F(\d+) \[F\d+\] death drop: pocket read empty at death \(0u\)/

// the recovery lane's voice: every ladder row carries the same head
export const RELOOT_ROW_RE = /^F(\d+) reloot: /

// (v0.663.0) the walk row's own window read: 'reloot: walking to the own
// death spot [...] (49b, budget 17s, window 121s, ...)' - the window field
// prices the arm lag (despawn - window) without any clock anchor: the
// runner's own plan arithmetic testifies.
export const RELOOT_WALK_WINDOW_RE = /^F(\d+) reloot: walking to the own death spot .*\bwindow (\d+)s/

// (v0.663.0) the heartbeat anchor - the same clock the seal death clock
// rides (sealdeath.mjs's own HB_RE shape, redeclared privately: the anchor
// is the heartbeat's emitted form, no import needed for a regex)
const HB_RE = /\b\] n=\d+ ts=(\d+)s/

// True when the line IS a death-drop line (either form).
export function isDeathDropLine(l) {
  return typeof l === 'string' && DEATH_DROP_RE.test(l)
}

/**
 * The death-drop census: the stakes, the lane's voice, the silent-arm join,
 * and the stakes' own clock (v0.663.0) - the deathdrop class's own
 * aggregate, mined per face.
 * @param {string[]} [lines] the full fleet19.log lines
 * @returns {{
 *   drops: Array<{bot: string, u: number, pos: {x:number,y:number,z}|null, kind: 'loss'|'empty', line: number, ts: number|null}>,
 *   deaths: number,
 *   lostU: number,
 *   emptyReads: number,
 *   armed: {n: number, u: number, bots: string[]},
 *   silent: {n: number, u: number, bots: string[]},
 *   clock: {
 *     armLag: {n: number, medianS: number|null, maxS: number|null},
 *     silent: {preTail: {n: number, u: number, bots: string[]}, endPhase: {n: number, u: number, bots: string[]}, untimed: number}
 *   },
 *   silentVerdict: {honest: {n: number, u: number, bots: string[]}, deadline: {n: number, u: number, bots: string[]}, seat: {n: number, u: number, bots: string[]}, unjudged: number}
 * }} the drops in log order (line = the source index; ts = the last
 *    heartbeat ts at the drop line, null pre-first-hb - the stamp never
 *    invents); lostU sums the loss-form masses (the empty form is 0 by
 *    shape); armed/silent join each drop to the lane's voice after it (bots
 *    heaviest-first, the reader's own convention). The clock leg (v0.663.0):
 *    armLag reads the WALK row's own window field (lag = despawn - window,
 *    the bot's first walk row after the drop, bounded by the bot's next
 *    drop - a repeat death's walk never lags the earlier stake; a walk row
 *    without a window field, or a window past the despawn, lags nothing);
 *    the silent split rides the seal death clock's end-phase law (ts >=
 *    clockEnd - DEATH_END_PHASE_WINDOW_S = the end-phase class, the bank's
 *    loop outlived the read; every other timed silent stake = pre-tail, the
 *    wiring seat; no anchor = untimed, never judged).
 *    Junk-safe: a non-array or non-string rows read an empty census.
 */
export function deathDropCensus(lines) {
  const rows = Array.isArray(lines) ? lines.filter((l) => typeof l === 'string') : []
  const drops = []
  let deaths = 0
  let clockEnd = null
  // pass 1: the deaths and the stakes in log order (each drop rides the last
  // heartbeat ts seen - the seal death clock's own anchor pattern)
  let lastT = null
  for (let i = 0; i < rows.length; i++) {
    const l = rows[i]
    const hm = l.match(HB_RE)
    if (hm) { lastT = Number(hm[1]); clockEnd = lastT }
    if (DEATH_ANNOUNCE_RE.test(l)) deaths++
    if (!DEATH_DROP_RE.test(l)) continue
    const loss = l.match(DEATH_DROP_LOSS_RE)
    if (loss) {
      drops.push({
        bot: 'F' + loss[1],
        u: parseInt(loss[2].replace(/,/g, ''), 10) || 0,
        pos: { x: parseInt(loss[3], 10), y: parseInt(loss[4], 10), z: parseInt(loss[5], 10) },
        kind: 'loss',
        line: i,
        ts: lastT
      })
      continue
    }
    const empty = l.match(DEATH_DROP_EMPTY_RE)
    if (empty) {
      drops.push({ bot: 'F' + empty[1], u: 0, pos: null, kind: 'empty', line: i, ts: lastT })
    }
  }
  // pass 2: the lane's voice after each stake (line order = time order)
  const armRows = []
  for (let i = 0; i < rows.length; i++) {
    const m = rows[i].match(RELOOT_ROW_RE)
    if (m) armRows.push({ bot: 'F' + m[1], line: i })
  }
  // pass 3 (v0.663.0): the walks' own window read - the arm lag prices the
  // wait between the death and the walk's arm, straight from the walk row's
  // own arithmetic (window = despawn - lag at plan time)
  const walks = []
  for (let i = 0; i < rows.length; i++) {
    const w = rows[i].match(RELOOT_WALK_WINDOW_RE)
    if (w) walks.push({ bot: 'F' + w[1], line: i, windowS: parseInt(w[2], 10) })
  }
  let lostU = 0
  let emptyReads = 0
  const armedRows = []
  const silentRows = []
  for (const d of drops) {
    if (d.kind === 'empty') emptyReads++
    else lostU += d.u
    const spoke = armRows.some((a) => a.bot === d.bot && a.line > d.line)
    if (spoke) armedRows.push(d)
    else silentRows.push(d)
  }
  // (v0.663.0) the arm lag join: the bot's FIRST walk row after the drop,
  // bounded by the bot's own next drop (a repeat death's walk never lags the
  // earlier stake). A window past the despawn (or zero) lags nothing - junk
  // never arms a number.
  const despawnS = RELOOT_DESPAWN_MS / 1000
  const lags = []
  for (const d of drops) {
    const nextOwn = drops
      .filter((o) => o.bot === d.bot && o.line > d.line)
      .reduce((min, o) => Math.min(min, o.line), Infinity)
    const walk = walks.find((w) => w.bot === d.bot && w.line > d.line && w.line < nextOwn)
    if (walk && walk.windowS > 0 && walk.windowS <= despawnS) {
      lags.push(despawnS - walk.windowS)
    }
  }
  const lagSorted = lags.slice().sort((a, b) => a - b)
  const medianS = lagSorted.length === 0
    ? null
    : (lagSorted.length % 2 === 1
        ? lagSorted[(lagSorted.length - 1) / 2]
        : (lagSorted[lagSorted.length / 2 - 1] + lagSorted[lagSorted.length / 2]) / 2)
  // (v0.663.0) the silent split: the seal death clock's own end-phase law.
  // A silent stake landing inside the end phase (ts >= clockEnd - window)
  // is the END-PHASE class - the bank's loop outlived the read. Every other
  // timed silent stake is PRE-TAIL - the wiring seat (the read had the
  // window and never spoke). A stake with no anchor stays untimed.
  const preTail = []
  const endPhase = []
  let untimed = 0
  for (const d of silentRows) {
    if (d.ts === null || clockEnd === null) { untimed++; continue }
    if (d.ts >= clockEnd - DEATH_END_PHASE_WINDOW_S) endPhase.push(d)
    else preTail.push(d)
  }
  // (v0.757.0) the silent class's own exoneration: the honest silence (the
  // zero-mass stake - nothing to arm), the deadline's own (the massy
  // end-phase stake - the bank's loop outlived the read) and the wiring
  // seat (the massy pre-tail stake - the true miss). The massy untimed
  // stakes stay unjudged (the stamp never invents); the zero-mass stake is
  // exonerated by shape before the clock is ever asked.
  const honestSilent = silentRows.filter((d) => d.u === 0)
  const seatRows = preTail.filter((d) => d.u > 0)
  const deadlineRows = endPhase.filter((d) => d.u > 0)
  const unjudged = silentRows.filter((d) => d.u > 0 && (d.ts === null || clockEnd === null)).length
  const tally = (list) => ({
    n: list.length,
    u: list.reduce((s, d) => s + d.u, 0),
    bots: list.slice().sort((a, b) => b.u - a.u).map((d) => d.bot)
  })
  return {
    drops,
    deaths,
    lostU,
    emptyReads,
    armed: tally(armedRows),
    silent: tally(silentRows),
    clock: {
      armLag: {
        n: lagSorted.length,
        medianS,
        maxS: lagSorted.length ? lagSorted[lagSorted.length - 1] : null
      },
      silent: {
        preTail: tally(preTail),
        endPhase: tally(endPhase),
        untimed
      }
    },
    silentVerdict: {
      honest: tally(honestSilent),
      deadline: tally(deadlineRows),
      seat: tally(seatRows),
      unjudged
    }
  }
}

// (v0.930.0) THE STAKES' OWN SEAT - WHICH bot's own deaths own the stakes'
// own u. The drain thirds (v0.882.0) priced WHEN the drops' u died - the
// early/mid/late split - and the face 198 read named the spread ('early 0u
// / mid 325u / late 303u of 628u - NO third owns the drops' own u'), but no
// row ever said WHOSE deaths own the book: the WHO axis rode raw since
// v0.647.0. THE BILL LAW: the census's own drops rows verbatim - the key
// IS the atom ('F3', the row's own bot byte), the row's own u the mass -
// zero re-parsing, one census, the v0.926.0 prey fold's own precedent. The
// census-or-bare-array acceptance (the v0.928.0 magnet's own shape): the
// seat reads a deathDropCensus result's drops leg or the bare rows array.
// The empty form stakes nothing (u = 0 by shape - the empty-pocket read
// never joins the mass book) and a non-finite or non-positive cell is
// junk - skipped, the real rows still tally (the junk fences). THE
// STRICT-MAJORITY LAW: a bot owns the stakes' own book only above half the
// dropped u - a tie owns nothing (the storm-has-no-seat precedent). The
// riders measure beside the seat's silence (the top two under the byte
// law: u desc, the bot's own byte asc - the census's own insertion order
// never owns the ranking). THE BRANCH LAW (one row never both) lives in
// the lib: the riders read null whenever the seat's owner exists - the
// decompose's own branch never has to guess (the v0.928.0 magnet's own
// fence shape). Read-time tooling, zero fleet log lines - CENSUS GUARD.
const STAKE_BOT_RE = /^F\d+$/

const stakeTally = (drops) => {
  if (!Array.isArray(drops)) return null
  const byBot = {}
  let total = 0
  for (const d of drops) {
    if (!d || typeof d !== 'object' || Array.isArray(d)) continue
    if (typeof d.bot !== 'string' || !STAKE_BOT_RE.test(d.bot)) continue
    if (!Number.isFinite(d.u) || d.u <= 0) continue
    byBot[d.bot] = (byBot[d.bot] || 0) + d.u
    total += d.u
  }
  if (total <= 0) return null
  return { byBot, total }
}

const stakeDropsOf = (census) =>
  (census && typeof census === 'object' && !Array.isArray(census)) ? census.drops : census

export function stakeSeat (census) {
  const t = stakeTally(stakeDropsOf(census))
  if (!t) return null
  const half = t.total / 2
  for (const [bot, owns] of Object.entries(t.byBot)) {
    if (owns > half) return { bot, owns, ofU: t.total, shareOfU: +(owns / t.total).toFixed(3) }
  }
  return null
}

export function stakeRiders (census) {
  const t = stakeTally(stakeDropsOf(census))
  if (!t) return null
  const ranked = Object.entries(t.byBot).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
  if (ranked.length < 2) return null
  const half = t.total / 2
  if (ranked[0][1] > half) return null // the branch law: the seat's owner exists - the mix never prints
  const [leader, leaderOwns] = ranked[0]
  const [runner, runnerOwns] = ranked[1]
  const pairOwns = leaderOwns + runnerOwns
  return { leader, leaderOwns, runner, runnerOwns, ofU: t.total, pairOwns, shareOfU: +(pairOwns / t.total).toFixed(3), duet: leaderOwns === runnerOwns }
}

// (v0.930.0) the stakes' own seat row - THE STAKES' OWN SEAT: the seat
// names WHICH bot's own deaths own the drops' own u; the drain's own WHO
// axis prices the spread the thirds rode unnamed. Junk never prints a
// seat (the honest silence's own row law).
export function stakeSeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { bot, owns, ofU, shareOfU } = seat
  if (typeof bot !== 'string' || !STAKE_BOT_RE.test(bot) ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofU) || ofU <= 0 || owns > ofU ||
      !Number.isFinite(shareOfU)) return null
  return `the stakes' own bot (v0.930.0): ${bot} owns ${owns} of ${ofU} dropped u (${(shareOfU * 100).toFixed(1)}%) - THE STAKES' OWN SEAT: one bot's own deaths own the death drops' own u - the drain's WHO axis prices the spread the thirds rode unnamed`
}

// (v0.930.0) the stakes' own riders row - THE STAKES' OWN MIX: a measure
// of the shape, never a named owner (the seat's tie law holds). Junk never
// prints a shape (the honest silence's own row law).
export function stakeRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofU, pairOwns, shareOfU } = r
  if (typeof leader !== 'string' || !STAKE_BOT_RE.test(leader) ||
      typeof runner !== 'string' || !STAKE_BOT_RE.test(runner) ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 ||
      !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofU) || ofU <= 0 ||
      !Number.isFinite(pairOwns) || pairOwns > ofU ||
      !Number.isFinite(shareOfU)) return null
  return `the stakes' own riders (v0.930.0): no solo bot owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofU} dropped u (${(shareOfU * 100).toFixed(1)}%) - THE STAKES' OWN MIX: the seat's tie law held, the mix is the shape - the drops' own u spread the thirds priced, the WHO rode unnamed`
}
