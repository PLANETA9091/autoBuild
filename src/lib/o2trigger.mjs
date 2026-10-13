//
// o2trigger.mjs - THE O2-LOW TRIGGER'S OWN WINDOW (v0.884.0)
//
// The o2-low trigger front's own pricing byte (the front the page
// lead's own row named twice on face 145: the page arrives too late
// for the typical save - fits 0 / misses 2 - so the trigger must fire
// at o2 LOW, not at the reset). The arm book (v0.880.0) prices the
// rescue STARTS' own oxygen; the page lead prices the page-vs-save
// window; the census prices the passes - NOBODY prices the WINDOW the
// o2-low trigger would have owned: the span from the bot's last
// re-crossing into the rescue band to the death line itself.
//
// THE CROSSING LAW (the descent's own entry): a crossing is the first
// numeric pass read at-or-below the band edge that follows a read
// above it (or opens the bot's stream - the descent began before the
// stream's sight). Surfacing above the edge re-arms the crossing (the
// next descent re-crosses); the LAST crossing before the death wins
// whole (the line-order law, the latest-start-wins idiom). The blind
// skins (reset(-1) / ?) judge nothing and clear nothing - the sensor's
// own death never unpins the crossing (the o2 kind 'reset' is the
// parser's own word, the reuse law).
//
// THE BAND EDGE: the sentry census's own rescueBand cell
// (rescueBand(<=10) - the decompose row's own byte; o2arm's headroom
// seat rides o2 >= 10, the census's own complement). The threshold is
// the census's own word, never invented here.
//
// THE CLOCK: the log's own adjacency (HB_RE, the one-parser law by
// reuse - the same clock sealdeath's thirds and drainthird's drops
// ride). A death before the first heartbeat stays untimed: the
// crossing's existence still prices, the window reads the honest null.
// The death resets the bot's own state (the v0.880.0 death-reset law's
// own idiom: an arm never survives the death it joined).
//
// THE SILENT LIFE'S OWN COVERAGE SEAT (v0.975.4): the blind skin
// 'silent' names the stream's own gap - no pass line rode the life at
// all. The gap's own WIDTH is the sight-span front's own price: the
// heartbeat clock is the stream's own pulse (the one-parser law's own
// global tick), so a silent life that RODE a birth (the previous
// death's own reset) prices two cells - the life's own span in
// seconds (the birth's clock to the death's clock) and the life's own
// heartbeat count (the pulses the stream sent while the pass line
// slept). A life with no previous death rides the honest unborn - the
// fold's own start owns the birth, the seat never invents one.
//
// THE SILENT GAP'S OWN SEAT SPLIT (v0.975.5): a born silent life names
// its own owner by the fleet's own sight - the pass lines the grammar
// parsed FLEET-WIDE during the life (the global passTotal's own
// counter). Pass lines rode while this bot's pass line slept = the gap
// is bot-local (the bot's own stream owns the seat); the whole
// stream slept = the gap is the stream's own (the server's own gap
// owns the seat); both shapes in one fold = the two seats compete (the
// split idiom's own third word).
//
// THE UNBORN LIVES' OWN WHEN WORD (v0.975.7): the unborn silent lives
// (the fold's own start owns the birth) price the WHEN seat - the
// death's own clock (the ts byte the death already rode). The unborn
// share rode the field twice (all 3 unborn on the face-297-shaped
// log, all 1 unborn on FACE 299) and the sight-span front's own fix
// names its lane by WHEN: the deaths riding the face's own opening =
// the spawn/walk-out lane's own byte, the deaths riding late = the
// stream's own cadence. The unborn lives with no clock rode the
// honest null - the WHEN fold prices what rode, never invents.
//
// Pure: reads, never mutates. Junk-safe: non-string rows judge
// nothing; non-array/string input reads the empty book.

import { HB_RE } from './sealdeath.mjs'
import { SENTRY_PASS_RE, parseSentryPass } from './sentry.mjs'
import { ARM_HEADROOM_MIN } from './o2arm.mjs'
import { parseDeathKind } from './deathkinds.mjs'

// The death announce's own anchored token (deathkinds.mjs's family
// shape - the bot rides the line's own prefix; the cause stays the
// server's verdict, never re-adjudicated here).
const DEATH_RE = /^(F\d+) \[F\d+\] died - respawning/

// The census's own rescueBand edge: the trigger's own threshold
// (o2 <= 10 rides the band; the census's own cell, never forked).
export const TRIGGER_O2_MAX = ARM_HEADROOM_MIN

const emptyBook = () => ({
  deaths: 0,
  crossed: 0,
  noCrossing: 0,
  untimed: 0,
  window: { count: 0, min: null, max: null, sum: 0 },
  perDeath: []
})

/**
 * Fold the pass streams into the o2-low trigger's own per-death
 * windows. Returns the totals book (perDeath riding the bot, the ts,
 * the window in seconds or null) - never null, never invented.
 */
export function o2TriggerBook (lines) {
  const book = emptyBook()
  if (!Array.isArray(lines)) return book
  const state = {} // per bot: { crossingTs, hasCrossing, inBand, lastO2, lastO2At, prevO2At, lastPassHead, minO2, lastBlindKind, sawPass, birthTs, hbAtBirth, passAtBirth }
  let lastTs = null
  let hbTotal = 0 // the stream's own pulse count (the v0.975.4 seat's own clock)
  let passTotal = 0 // the fleet's own pass lines the grammar parsed (the v0.975.5 split's own counter)
  const seatFor = (bot) => {
    if (!state[bot]) state[bot] = { crossingTs: null, hasCrossing: false, inBand: false, lastO2: null, lastO2At: null, prevO2At: null, lastPassHead: null, minO2: null, lastBlindKind: null, sawPass: false, birthTs: null, hbAtBirth: null, passAtBirth: null }
    return state[bot]
  }
  let li = -1 // the log's own adjacency: the fold's own line index (every element counts)
  for (const line of lines) {
    li++
    if (typeof line !== 'string') continue
    const hm = line.match(HB_RE)
    if (hm) { lastTs = Number(hm[1]); hbTotal++; continue }
    if (SENTRY_PASS_RE.test(line)) {
      const p = parseSentryPass(line)
      if (!p) continue
      const seat = seatFor(p.bot)
      passTotal++ // the fleet's own sight rode (the v0.975.5 split's own counter)
      // the sight's own witness byte (the v0.975.2 byte): the pass line's
      // own existence rides the seat - the silent life (no pass at all)
      // and the blind-skinned life judge differently (the sensor's own
      // death vs the stream's own gap)
      seat.sawPass = true
      if (p.o2.kind !== 'value') {
        // the blind skin's own word (the v0.975.2 byte): the last blind
        // skin rides the seat - the blind skins judge nothing and clear
        // nothing (the crossing law stands); this is the passive
        // observer's own byte, the crossing state untouched
        seat.lastBlindKind = p.o2.kind
      }
      if (p.o2.kind === 'value') {
        // the miss seat's own proximity (the v0.892.0 byte): the last
        // numeric o2 read rides the seat - the parse's own field,
        // never re-computed (the reuse law); the read's own position
        // rides beside it (the v0.893.0 gap's own seat)
        seat.lastO2 = p.o2.value
        // the life's own floor (the v0.975.0 byte): the lowest numeric
        // read of the current life - the no-crossing deaths' own lever
        // price (the band edge's own seat: a floor above the edge is the
        // o2-units a raised edge would have bought)
        seat.minO2 = seat.minO2 === null ? p.o2.value : Math.min(seat.minO2, p.o2.value)
        // the read cadence's own seat (the v0.895.0 byte): the read's
        // own position hands its post to the previous-read slot - the
        // last TWO reads' own distance is the cadence's own cell
        seat.prevO2At = seat.lastO2At
        seat.lastO2At = li
        // the last read's own head (the v0.896.0 byte): the read line's
        // own shore state rides beside the air (the parse's own field,
        // never re-judged - the chain stays one seat)
        seat.lastPassHead = p.head
        if (p.o2.value <= TRIGGER_O2_MAX) {
          if (!seat.inBand) { seat.crossingTs = lastTs; seat.hasCrossing = true; seat.inBand = true }
        } else {
          seat.inBand = false
        }
      }
      continue
    }
    const dm = line.match(DEATH_RE)
    if (dm) {
      const bot = dm[1]
      const seat = seatFor(bot)
      book.deaths++
      const crossed = seat.hasCrossing
      const window = crossed && seat.crossingTs !== null && lastTs !== null ? Math.max(0, lastTs - seat.crossingTs) : null
      if (!crossed) book.noCrossing++
      else if (window === null) book.untimed++
      else {
        book.crossed++
        book.window.count++
        book.window.sum += window
        if (book.window.min === null || window < book.window.min) book.window.min = window
        if (book.window.max === null || window > book.window.max) book.window.max = window
      }
      // the read gap's own seat (the v0.893.0 byte): the death's own
      // distance from the bot's last numeric read - the sensor's own
      // sight span (the readless seat rides the honest null)
      const lastO2Gap = seat.lastO2 !== null && seat.lastO2At !== null ? li - seat.lastO2At : null
      // the cadence's own cell (the v0.895.0 byte): the last TWO
      // reads' own distance (the one-read seat rides the honest null)
      const lastO2Span = seat.lastO2At !== null && seat.prevO2At !== null ? seat.lastO2At - seat.prevO2At : null
      // the silent life's own coverage seat (the v0.975.4 byte): the
      // life's own span rides the birth's own clock (the previous
      // death's own ts) to this death's clock, and the life's own
      // heartbeat count rides the stream's own pulse between the two
      // lines - the unborn seat (no previous death) prices the honest
      // nulls (the fold's own start owns the birth, never invented)
      const lifeHb = seat.hbAtBirth === null ? null : hbTotal - seat.hbAtBirth
      const lifeSpan = seat.birthTs !== null && lastTs !== null ? Math.max(0, lastTs - seat.birthTs) : null
      // the silent gap's own seat split (the v0.975.5 byte): the fleet's
      // own pass lines during the life - the unborn seat prices the
      // honest null beside its siblings (one birth, three cells)
      const lifeFleetPasses = seat.passAtBirth === null ? null : passTotal - seat.passAtBirth
      book.perDeath.push({ bot, ts: lastTs, crossed, window, lastO2: seat.lastO2, lastO2Gap, lastO2Span, lastPassHead: seat.lastPassHead, minO2: seat.minO2, blindKind: seat.minO2 === null ? (seat.lastBlindKind || (seat.sawPass ? null : 'silent')) : null, lifeSpan, lifeHb, lifeFleetPasses })
      // the death reset's own law: the state never survives the death
      seat.crossingTs = null
      seat.hasCrossing = false
      seat.inBand = false
      seat.lastO2 = null
      seat.lastO2At = null
      seat.prevO2At = null
      seat.lastPassHead = null
      seat.minO2 = null
      seat.lastBlindKind = null
      seat.sawPass = false
      // the silent life's own birth re-pin (the v0.975.4 law): the new
      // life's birth rides THIS death's own clock and THIS death's own
      // pulse position - the life the reset opens prices from here
      seat.birthTs = lastTs
      seat.hbAtBirth = hbTotal
      seat.passAtBirth = passTotal
      continue
    }
  }
  return book
}

/**
 * The fence law: the sums must agree. The totals must be exactly the
 * perDeath fold's own image; the windows' sum must be the per-death
 * windows' own sum. An inconsistent book prices nothing.
 */
export function o2TriggerConsistent (book) {
  if (!book || typeof book !== 'object' || !Array.isArray(book.perDeath)) return false
  const nonNeg = (v) => Number.isInteger(v) && v >= 0
  if (![book.deaths, book.crossed, book.noCrossing, book.untimed].every(nonNeg)) return false
  if (!nonNeg(book.window.count) || !nonNeg(book.window.sum)) return false
  if (book.window.count > 0 && (book.window.min === null || book.window.max === null)) return false
  if (book.window.count === 0 && (book.window.min !== null || book.window.max !== null || book.window.sum !== 0)) return false
  let deaths = 0, crossed = 0, noCrossing = 0, untimed = 0, sum = 0, count = 0
  let min = null, max = null
  for (const d of book.perDeath) {
    if (!d || typeof d !== 'object' || typeof d.bot !== 'string') return false
    if (d.lastO2 !== null && d.lastO2 !== undefined && !Number.isInteger(d.lastO2)) return false
    // the read gap's own shape (the v0.893.0 byte): the gap must be
    // the fold's own non-negative line count, and a gap without its
    // own read lies (the value and the position share one seat)
    if (d.lastO2Gap !== null && d.lastO2Gap !== undefined) {
      if (!Number.isInteger(d.lastO2Gap) || d.lastO2Gap < 0) return false
      if (d.lastO2 === null || d.lastO2 === undefined) return false
    }
    // the cadence's own shape (the v0.895.0 byte): the span must be
    // the fold's own non-negative line count, and the chain is the
    // value's own - the span without its gap lies
    if (d.lastO2Span !== null && d.lastO2Span !== undefined) {
      if (!Number.isInteger(d.lastO2Span) || d.lastO2Span < 0) return false
      if (d.lastO2Gap === null || d.lastO2Gap === undefined) return false
    }
    // the last read's own head shape (the v0.896.0 byte): the head must
    // be the parse's own word, and the pair shares one seat - the head
    // without its own read lies, the read without its own head lies
    // (the read line's own fields ride together)
    if (d.lastPassHead !== null && d.lastPassHead !== undefined) {
      if (d.lastPassHead !== 'wet' && d.lastPassHead !== 'dry') return false
      if (d.lastO2 === null || d.lastO2 === undefined) return false
    } else if (d.lastO2 !== null && d.lastO2 !== undefined) {
      return false
    }
    // the life's own floor shape (the v0.975.0 byte): the floor shares
    // the last read's own seat - both ride or neither does, the floor
    // never rides above the last read (the lowest read's own law); the
    // undefined seat stays legal (the legacy book shape - never forged)
    if (d.minO2 !== null && d.minO2 !== undefined) {
      if (!Number.isInteger(d.minO2) || d.minO2 < 0) return false
      if (d.lastO2 === null || d.lastO2 === undefined) return false
      if (d.minO2 > d.lastO2) return false
      // the blind byte shares the no-numeric seat's own law: a numeric
      // life's blindKind is moot - only null may ride
      if (d.blindKind !== null && d.blindKind !== undefined) return false
    } else if (d.lastO2 !== null && d.lastO2 !== undefined) {
      return false
    }
    // the blind byte's own shape (the v0.975.2 byte): the legal words
    // are the parse's own skins + the stream's own gap word; the
    // undefined seat stays legal (the legacy book shape - never forged)
    if (d.blindKind !== null && d.blindKind !== undefined) {
      if (d.blindKind !== 'reset' && d.blindKind !== 'unknown' && d.blindKind !== 'silent') return false
      if (d.minO2 !== null && d.minO2 !== undefined) return false
    }
    // the silent life's own coverage shape (the v0.975.4 byte): the
    // heartbeat count is the fold's own non-negative integer, the span
    // shares the birth's own seat - the span without its own pulse
    // count lies (a span prices a birth, the birth counts the pulses);
    // the undefined seat stays legal (the legacy book shape)
    if (d.lifeHb !== null && d.lifeHb !== undefined) {
      if (!Number.isInteger(d.lifeHb) || d.lifeHb < 0) return false
    }
    if (d.lifeSpan !== null && d.lifeSpan !== undefined) {
      if (!Number.isInteger(d.lifeSpan) || d.lifeSpan < 0) return false
      if (d.lifeHb === null || d.lifeHb === undefined) return false
    }
    // the silent gap's own seat split shape (the v0.975.5 byte): the
    // fleet pass count is the fold's own non-negative integer sharing
    // the birth's own seat - the count without its own pulse count lies
    // (the split prices a birth); the undefined seat stays legal (the
    // legacy book shape)
    if (d.lifeFleetPasses !== null && d.lifeFleetPasses !== undefined) {
      if (!Number.isInteger(d.lifeFleetPasses) || d.lifeFleetPasses < 0) return false
      if (d.lifeHb === null || d.lifeHb === undefined) return false
    }
    deaths++
    if (!d.crossed) noCrossing++
    else if (d.window === null) untimed++
    else {
      if (!Number.isInteger(d.window) || d.window < 0) return false
      crossed++; count++; sum += d.window
      if (min === null || d.window < min) min = d.window
      if (max === null || d.window > max) max = d.window
    }
  }
  return deaths === book.deaths && crossed === book.crossed && noCrossing === book.noCrossing &&
    untimed === book.untimed && count === book.window.count && sum === book.window.sum &&
    min === book.window.min && max === book.window.max
}

/**
 * The single-seat row (the v0.881.0 idiom): the windows' own spread,
 * the honest classes ride their own counts. An inconsistent book
 * prices nothing; a book with no deaths reads the honest silence.
 */
export function o2TriggerRow (book) {
  if (!o2TriggerConsistent(book)) return null
  if (book.deaths === 0) return null
  const parts = [`deaths ${book.deaths}`]
  if (book.window.count > 0) {
    const avg = Math.round(book.window.sum / book.window.count)
    parts.push(`crossed ${book.window.count}, window ${book.window.min}..${book.window.max}s (avg ${avg}s)`)
  }
  if (book.noCrossing > 0) parts.push(`no-crossing ${book.noCrossing}`)
  if (book.untimed > 0) parts.push(`untimed ${book.untimed}`)
  return `the o2-low trigger's own window (v0.884.0): ${parts.join(', ')} - the span the trigger would have owned from the census's own band edge (<=${TRIGGER_O2_MAX})`
}

// (v0.885.0) THE TRIGGER'S OWN KIND JOIN - the false-positive split the
// fire-0000 fold's own row named (the trigger's own NEXT BYTE): the
// windows priced WHOSE deaths owned a crossing - the kind join prices
// WHAT the trigger would have paid for. A crossing whose death rode a
// non-o2 kind is THE FALSE-POSITIVE PRICE (the trigger would have fired
// the rescue for a death the oxygen never owned - face 145's suffocate
// rode a real band crossing, the cost seat the window book left
// unnamed); a no-crossing death's kind names THE MISSES' OWN FAMILIES
// (the trigger's own kind here = the blind spot's loudest read). The
// trigger's own death word is the server's own kind= vocabulary
// (deathcause.mjs parseDeathMessage: the oxygen death = drown) - never
// re-adjudicated here, the server verdict stays the authority (the
// v0.117.0 doctrine). THE JOIN LAW: the kind ride comes from
// deathkinds.mjs's own parseDeathKind (the one-parser law - the census's
// own RE re-used by export, never re-spelled); the rows that carry no
// server verdict (the inferred-only family) stay UNKINDED - the honest
// null counts in its own class, never judged. The alignment law: the
// kind walk tests the SAME anchored death token in the SAME line order
// the window fold walked - the seats join index for index (both walks
// count exactly the DEATH_RE matches; the junk between rides nothing).
// The fence law: the kind seats must be exactly the perDeath fold's own
// image - every crossed death lands in o2 / falsePositive /
// crossedUnknown, every no-crossing kind rides its own named map cell,
// the unkinded ones count unkinded. An inconsistent book prices nothing
// (the row stays silent).
//
// (v0.887.0) THE FALSE-POSITIVE'S OWN ANATOMY - the cost seat's own
// split (the kind join's own NEXT BYTE the four faces' mass named:
// crossed non-o2 rode 3 of 11 crossings across faces 145/146/147/148
// and the class was not one animal). The attacker's own word -
// parseDeathKind's own attacker field (the one-parser law: the same
// parse's group, never re-spelled) - splits the price:
//   drowned-melee = the attacker IS a Drowned (face 148: F9's 'mob by
//     Drowned' rode a real crossing) - the band's own predator
//     finishing the job; the rescue raced a genuine water emergency
//     and lost the race - the near-miss seat, not a wrong door.
//   wrong-door = everything else (face 145's suffocate, face 147's F8
//     'mob by Zombie' at window 240s) - the rescue would have fired
//     for a death the water never owned - the true false positive.
// Both seats live in the mass; the row names only the live ones (the
// zero-class silence idiom). THE ANATOMY'S OWN FENCE: melee +
// wrong-door must equal the falsePositive seat exactly, and a seat's
// fpClass never leaks onto a death the price did not own. The server
// verdict stays the authority - the attacker's word is READ, never
// re-adjudicated (the v0.117.0 doctrine).
//
// (v0.889.0) THE MELEE SEAT'S OWN WINDOW JOIN - the anatomy's own
// next byte (the face-148 read named it: F9's melee seat rode window
// 20s while the o2 seats rode 40/60s - THE PREDATOR'S RACE IS
// FASTER). The melee seats join their own window (the perDeath fold's
// own seconds - never re-computed, the same reuse law): the rescue
// racing the Drowned's melee must arrive inside the melee seat's own
// span - HALF the drowning race's own clock. The aggregate rides the
// window row's own idiom (count/min/max/sum, the same cells); the
// untimed melee seat (a crossing before the first heartbeat) counts
// in the seat and rides the honest silence on the clock (the
// v0.884.0 blind-skin idiom). THE WRONG-DOOR WINDOWS STAY UNJOINED -
// their pricing question is the wasted rent, not the winnable race;
// the second split waits for the mass (the honest defer).
// THE WINDOW JOIN'S OWN FENCE: meleeWindow must be exactly the melee
// seats' own timed fold - count + the untimed melee seats = the
// melee seat itself, the cells agree with the perDeath image; a lying
// cell prices nothing.
//
// (v0.890.0) THE MISS SEAT'S OWN PREDATOR - the misses' own anatomy
// (the face-148 read named it: F17's 'mob by Drowned' OUTSIDE the band
// = the no-crossing miss - THE PREDATOR WAS PRESENT, THE TRIGGER NEVER
// SAW THE CROSSING). The no-crossing mob seats join the attacker's own
// word (parseDeathKind's own attacker field - the one-parser law: the
// same parse's group, never re-spelled): miss.drowned = the band's own
// predator killed a bot whose o2 never read at-or-below the band edge -
// the trigger's own blind spot named by the predator's own word (the
// band edge's own blindness: the race can be lost BEFORE the band
// opens, or the reads were too sparse to see the descent). The other
// attackers (the Zombie's own family) stay unnamed - the second split
// waits for the mass (the honest defer). The row names only the live
// seats (the zero-class silence idiom). THE PREDATOR'S OWN FENCE:
// miss.drowned must be exactly the no-crossing mob seats' own Drowned
// fold - every such seat carries the marker, no marker ever leaks onto
// a fall/o2/crossed seat, and the omission lies like the leak; a lying
// seat prices nothing. The server verdict stays the authority - the
// attacker's word is READ, never re-adjudicated (the v0.117.0
// doctrine).
//
// (v0.891.0) THE ARRIVAL BUDGET - the window join's own next byte
// (the faces' own mass named it: the melee clock rode 20s on face 148
// AND face 149 - the STABLE race clock prices the lever's own
// number). The rescue must arrive inside the melee seat's own span -
// the tightest observed race IS the budget: the fold's own floor
// (meleeWindow's own min) prices the arrival budget. THE REUSE LAW AT
// ITS PUREST: the budget is a READ of the fold's own min cell - never
// a new computation, no new book cells, no new fence cells (the fence
// already pins the min against the perDeath image); a lying min
// prices nothing the same way it already did. The zero-window
// silence holds: no timed melee seats -> the budget clause stays
// silent beside the clock (the blind-skin idiom); the wrong-door
// windows stay unjoined (the honest defer stands - their question is
// the wasted rent, not the winnable race).
//
// (v0.892.0) THE MISS SEAT'S OWN PROXIMITY - the predator seat's own
// air (the faces' own reads named it: face 148's F17 died to the
// Drowned with the LAST water pass reading o2=20 head=dry shore=hit,
// 178 log lines before the death - the bot was DRY AT FULL AIR at its
// last read; face 149's F17 rode NO water pass at all). The no-crossing
// predator seats join their own last o2 read (the perDeath fold's own
// cell - seat.lastO2, the sentry parse's own field, never
// re-computed): kinds.miss.predatorO2 {count, min, max} - the band
// edge's own innocence or its own guilt named by the seat's own air (a
// seat dying at o2 near the edge prices the threshold's own lever; a
// seat dying at o2=20 or readless prices the READ cadence + the grab
// speed - the band edge innocent, the trigger's own blind spot is the
// sensor's own sight, not the threshold's height). The readless seats
// count in miss.drowned and ride the honest silence on the clock (the
// blind-skin idiom); the other misses' proximity stays unjoined - the
// second split waits for the mass (the honest defer). THE PROXIMITY'S
// OWN FENCE: predatorO2 must be exactly the predator seats' own
// last-o2 fold - count + the readless seats = the predator seat
// itself, min/max byte-verified against the perDeath image; a lying
// cell prices nothing.
//
// (v0.893.0) THE READ GAP'S OWN SEAT - the proximity's own next byte
// (the face-148 read named it: the bot's last read rode 178 log lines
// before the death - the sensor's own SIGHT SPAN is the blind spot's
// own price, the pass cadence's own lever, not the band edge). The
// predator seats join their own read distance (the fold's own
// position: seat.lastO2At, the read line's own index riding beside
// seat.lastO2 - never re-computed, the reuse law): perDeath.lastO2Gap
// is the death line's own distance from the seat's last numeric read
// (the readless seats ride the honest null - the blind-skin idiom);
// kinds.miss.predatorO2 grows gapMin/gapMax - a WIDE gap prices the
// read cadence (a denser sight had room to see the descent), a TIGHT
// gap prices the grab speed (the race was lost inside the sight); the
// band edge's own innocence prices on both. The gap's own fence: the
// cells must be exactly the predator seats' own gap fold - the gap
// without its own read lies (the window fence prices it), min/max
// byte-verified against the perDeath image; a lying cell prices
// nothing. Zero fleet wiring, zero new log lines (the clause grows
// in place).
//
// (v0.895.0) THE READ CADENCE'S OWN SEAT - the gap's own next byte
// (the sight spans' own mass named it: 197 and 87 lines - but the GAP
// alone cannot split the two levers: a UNIFORM slow cadence and a
// cadence that STOPPED near the death both read huge gaps). The
// predator seats join their own cadence (the fold's own position
// again: seat.prevO2At riding beside seat.lastO2At - the last TWO
// numeric reads' own distance, perDeath.lastO2Span, never
// re-computed): kinds.miss.predatorO2 grows spanMin/spanMax - a span
// NEAR the gap prices the uniform slow cadence (the sensor never saw
// the descent because it reads too rarely - the cadence lever); a
// span FAR BELOW the gap prices the stopped sentry (the reads went
// quiet before the death - a different lever entirely). The
// one-read seats ride the honest null (the blind-skin idiom). THE
// SPAN'S OWN FENCE: the cells must be exactly the predator seats'
// own span fold - the chain is the value's own (the span without its
// gap lies, the gap without its read lies, the window fence prices
// the chain), min/max byte-verified against the perDeath image; a
// lying cell prices nothing. Zero fleet wiring, zero new log lines
// (the clause grows in place).
//
// (v0.896.0) THE LAST READ'S OWN HEAD - the cadence's own next byte
// (the stopped sentry's own mass named it: BOTH live predator seats
// rode a stopped stream - gap 197/cadence 11 and gap 87/cadence 5 -
// and the face-148 read's own shape named the shore's own question:
// 'o2=20 head=dry shore=hit' - the bot was DRY at its last read, then
// the water-pass stream went quiet). The predator seats join their
// own last read's head state (the sentry parse's own head field -
// the one-parser law: the same parse's group, never re-judged):
// perDeath.lastPassHead rides beside the air (the value <- the gap <-
// the span <- the head chain - one seat, the read line's own fields);
// kinds.miss.predatorO2 grows dry/wet - a DRY last read prices the
// shore's own quiet (the water-pass stream went quiet ON SHORE - the
// sentry's own liveness is the dry-side lever), a WET last read
// prices the in-water quiet (the stream stopped while the bot still
// rode the water). The headless seats ride the honest silence (the
// blind-skin idiom: the head rides the NUMERIC read's own line - the
// blind skins judge nothing). THE HEAD'S OWN FENCE: dry + wet must be
// exactly the reads' own count (the head is grammatically total on
// every numeric pass line - a missing head lies through the sum), the
// pair shares one seat (the head without its read lies, the read
// without its head lies), min/max byte-verified against the perDeath
// image; a lying cell prices nothing. Zero fleet wiring, zero new log
// lines (the clause grows in place).

// The trigger's own death word - the server's own kind= vocabulary's
// oxygen death (deathcause.mjs's own bucket, never invented here).
export const O2_DEATH_KIND = 'drown'

const emptyKindJoin = () => ({
  o2: 0,
  falsePositive: 0,
  crossedUnknown: 0,
  fp: { melee: 0, wrongDoor: 0, meleeWindow: { count: 0, min: null, max: null, sum: 0 } },
  miss: { drowned: 0, predatorO2: { count: 0, min: null, max: null, gapMin: null, gapMax: null, spanMin: null, spanMax: null, dry: 0, wet: 0 } },
  noCrossing: {},
  noCrossingUnknown: 0
})

// The drowned-melee seat's own word - the attacker's own name that
// makes the crossed non-o2 death the band's own predator's kill (the
// server's own verdict names the killer; the anatomy only reads it).
const DROWNED_ATTACKER = 'Drowned'

/**
 * The window book's own kind join: the same fold's deaths, each seat
 * named by the server's own kind word. Returns the enriched book (the
 * window cells byte-stable, the kinds riding their own cells) - never
 * null, never invented.
 */
export function o2TriggerKindBook (lines) {
  const book = o2TriggerBook(lines)
  book.kinds = emptyKindJoin()
  if (!Array.isArray(lines)) return book
  let di = 0
  for (const line of lines) {
    if (typeof line !== 'string') continue
    if (!DEATH_RE.test(line)) continue
    const seat = book.perDeath[di]
    di++
    if (!seat) break // the fence catches the misalignment - never invent
    const parsed = parseDeathKind(line)
    seat.kind = parsed ? parsed.kind : null
    seat.attacker = parsed ? parsed.attacker : null // the parse's own group - the one-parser law
    seat.fpClass = null // the price's own seat - only the falsePositive owns a class (never leaks)
    seat.missClass = null // the miss's own seat - only the predator miss owns a class (never leaks)
    if (!seat.crossed) {
      if (seat.kind === null) book.kinds.noCrossingUnknown++
      else book.kinds.noCrossing[seat.kind] = (book.kinds.noCrossing[seat.kind] || 0) + 1
      if (seat.kind === 'mob' && seat.attacker === DROWNED_ATTACKER) {
        // the miss seat's own predator (the v0.890.0 anatomy): the
        // Drowned's own word on the no-crossing seat - the trigger's
        // own blind spot, the predator's own read
        seat.missClass = 'drowned'
        book.kinds.miss.drowned++
        // the miss seat's own proximity (the v0.892.0 byte): the
        // predator seats' own last o2 read (the perDeath fold's own
        // cell, never re-computed) - the band edge's own innocence or
        // its own guilt named by the seat's own air
        if (typeof seat.lastO2 === 'number') {
          const po = book.kinds.miss.predatorO2
          po.count++
          if (po.min === null || seat.lastO2 < po.min) po.min = seat.lastO2
          if (po.max === null || seat.lastO2 > po.max) po.max = seat.lastO2
          // the read gap's own fold (the v0.893.0 byte): the seat's own
          // sight span - the cadence's own price
          if (typeof seat.lastO2Gap === 'number') {
            if (po.gapMin === null || seat.lastO2Gap < po.gapMin) po.gapMin = seat.lastO2Gap
            if (po.gapMax === null || seat.lastO2Gap > po.gapMax) po.gapMax = seat.lastO2Gap
          }
          // the cadence's own fold (the v0.895.0 byte): the seat's own
          // read-to-read span - the uniform-vs-stopped split
          if (typeof seat.lastO2Span === 'number') {
            if (po.spanMin === null || seat.lastO2Span < po.spanMin) po.spanMin = seat.lastO2Span
            if (po.spanMax === null || seat.lastO2Span > po.spanMax) po.spanMax = seat.lastO2Span
          }
          // the head's own fold (the v0.896.0 byte): the seat's own
          // shore state at its last read - the dry-side quiet's own price
          if (seat.lastPassHead === 'dry') po.dry++
          else if (seat.lastPassHead === 'wet') po.wet++
        }
      }
    } else if (seat.kind === null) book.kinds.crossedUnknown++
    else if (seat.kind === O2_DEATH_KIND) book.kinds.o2++
    else {
      book.kinds.falsePositive++
      // the anatomy: the attacker's own word splits the price (the
      // Drowned's own melee = the near-miss; everything else = the
      // true wrong door)
      seat.fpClass = parsed && parsed.attacker === DROWNED_ATTACKER ? 'melee' : 'wrongDoor'
      book.kinds.fp[seat.fpClass]++
      if (seat.fpClass === 'melee' && typeof seat.window === 'number') {
        // the melee seat's own clock (the perDeath fold's own
        // seconds, never re-computed) - the race's own price
        const mw = book.kinds.fp.meleeWindow
        mw.count++
        mw.sum += seat.window
        if (mw.min === null || seat.window < mw.min) mw.min = seat.window
        if (mw.max === null || seat.window > mw.max) mw.max = seat.window
      }
    }
  }
  return book
}

/**
 * The kind join's own fence: the window fence rides whole (the same
 * sums), the kind seats must be exactly the perDeath fold's own image.
 */
export function o2TriggerKindConsistent (book) {
  if (!o2TriggerConsistent(book)) return false
  const k = book && book.kinds
  if (!k || typeof k !== 'object' || Array.isArray(k)) return false
  if (![k.o2, k.falsePositive, k.crossedUnknown, k.noCrossingUnknown]
    .every((v) => Number.isInteger(v) && v >= 0)) return false
  // the anatomy's own cells: the price's own split must be integers
  // and sum to the price itself (the sub-seats' own agreement)
  if (!k.fp || typeof k.fp !== 'object' || Array.isArray(k.fp)) return false
  if (![k.fp.melee, k.fp.wrongDoor].every((v) => Number.isInteger(v) && v >= 0)) return false
  if (k.fp.melee + k.fp.wrongDoor !== k.falsePositive) return false
  // the melee window join's own cells: the melee seats' own timed
  // fold (count 0 rides the empty cell, the blind-skin idiom)
  const mw = k.fp.meleeWindow
  if (!mw || typeof mw !== 'object' || Array.isArray(mw)) return false
  if (!Number.isInteger(mw.count) || mw.count < 0 || !Number.isInteger(mw.sum) || mw.sum < 0) return false
  if (mw.count > 0 && (mw.min === null || mw.max === null)) return false
  if (mw.count === 0 && (mw.min !== null || mw.max !== null || mw.sum !== 0)) return false
  // the miss predator's own cells: the no-crossing mob seats' own
  // Drowned fold (the v0.890.0 anatomy's own shape)
  if (!k.miss || typeof k.miss !== 'object' || Array.isArray(k.miss)) return false
  if (!Number.isInteger(k.miss.drowned) || k.miss.drowned < 0) return false
  // the proximity's own cells (the v0.892.0 byte): the predator
  // seats' own last-o2 fold (count 0 rides the empty cell - the
  // readless seats' honest silence)
  const po = k.miss.predatorO2
  if (!po || typeof po !== 'object' || Array.isArray(po)) return false
  if (!Number.isInteger(po.count) || po.count < 0) return false
  if (po.count > 0 && (po.min === null || po.max === null)) return false
  if (po.count === 0 && (po.min !== null || po.max !== null)) return false
  // the gap's own cells (the v0.893.0 byte): null-or-nonnegative, the
  // pair rides together (the count-0 silence holds on both)
  if (![po.gapMin, po.gapMax].every((v) => v === null || (Number.isInteger(v) && v >= 0))) return false
  if ((po.gapMin === null) !== (po.gapMax === null)) return false
  // the span's own cells (the v0.895.0 byte): null-or-nonnegative,
  // the pair rides together (the one-read silence holds on both)
  if (![po.spanMin, po.spanMax].every((v) => v === null || (Number.isInteger(v) && v >= 0))) return false
  if ((po.spanMin === null) !== (po.spanMax === null)) return false
  // the head's own cells (the v0.896.0 byte): non-negative, and the
  // pair must sum to the reads' own count (the head is grammatically
  // total on every numeric pass line - a missing head lies through
  // the sum)
  if (![po.dry, po.wet].every((v) => Number.isInteger(v) && v >= 0)) return false
  if (po.dry + po.wet !== po.count) return false
  if (!k.noCrossing || typeof k.noCrossing !== 'object' || Array.isArray(k.noCrossing)) return false
  let ncSum = 0
  for (const key of Object.keys(k.noCrossing)) {
    const v = k.noCrossing[key]
    if (typeof key !== 'string' || !key.length || !Number.isInteger(v) || v <= 0) return false
    ncSum += v
  }
  if (ncSum + k.noCrossingUnknown !== book.noCrossing) return false
  let o2 = 0, fp = 0, cu = 0, ncu = 0, melee = 0, wrongDoor = 0, missedDrowned = 0
  let mwc = 0, mws = 0, mwm = null, mwM = null
  let poCount = 0, poMin = null, poMax = null, poGapMin = null, poGapMax = null, poSpanMin = null, poSpanMax = null
  let poDry = 0, poWet = 0
  for (const d of book.perDeath) {
    if (!d || typeof d !== 'object') return false
    if (d.kind !== null && typeof d.kind !== 'string') return false
    if (d.attacker !== null && d.attacker !== undefined && typeof d.attacker !== 'string') return false
    const fc = d.fpClass === undefined ? null : d.fpClass
    if (fc !== null && fc !== 'melee' && fc !== 'wrongDoor') return false
    const mc = d.missClass === undefined ? null : d.missClass
    if (mc !== null && mc !== 'drowned') return false
    const predatorMiss = !d.crossed && d.kind === 'mob' && d.attacker === DROWNED_ATTACKER
    if (mc === 'drowned' && !predatorMiss) return false // the marker never leaks off the predator's own seat
    if (predatorMiss && mc !== 'drowned') return false // the omission lies like the leak
    if (predatorMiss) {
      missedDrowned++
      // the proximity's own fold: the seats' own last-o2 cells (the
      // readless seats ride the honest silence)
      if (d.lastO2 !== null && d.lastO2 !== undefined) {
        if (!Number.isInteger(d.lastO2)) return false
        poCount++
        if (poMin === null || d.lastO2 < poMin) poMin = d.lastO2
        if (poMax === null || d.lastO2 > poMax) poMax = d.lastO2
        // the gap's own fold (the v0.893.0 byte): the seat's own sight
        // span - the readless seat rides the honest silence
        if (d.lastO2Gap !== null && d.lastO2Gap !== undefined) {
          if (poGapMin === null || d.lastO2Gap < poGapMin) poGapMin = d.lastO2Gap
          if (poGapMax === null || d.lastO2Gap > poGapMax) poGapMax = d.lastO2Gap
        }
        // the span's own fold (the v0.895.0 byte): the seat's own
        // cadence - the one-read seat rides the honest silence
        if (d.lastO2Span !== null && d.lastO2Span !== undefined) {
          if (poSpanMin === null || d.lastO2Span < poSpanMin) poSpanMin = d.lastO2Span
          if (poSpanMax === null || d.lastO2Span > poSpanMax) poSpanMax = d.lastO2Span
        }
        // the head's own fold (the v0.896.0 byte): the seat's own shore
        // state rides beside the air (the parse's own word - the pair
        // coherence is the window fence's own law, the word check too)
        if (d.lastPassHead === 'dry') poDry++
        else if (d.lastPassHead === 'wet') poWet++
        else return false
      }
    }
    if (!d.crossed) {
      if (fc !== null) return false // the price's class never leaks off the price
      if (d.kind === null) { ncu++; continue }
      if (!(Object.prototype.hasOwnProperty.call(k.noCrossing, d.kind))) return false
      continue
    }
    if (d.kind === null) {
      if (fc !== null) return false
      cu++
    } else if (d.kind === O2_DEATH_KIND) {
      if (fc !== null) return false
      o2++
    } else {
      if (fc === 'melee') {
        melee++
        if (d.window !== null && d.window !== undefined) {
          if (!Number.isInteger(d.window) || d.window < 0) return false
          mwc++; mws += d.window
          if (mwm === null || d.window < mwm) mwm = d.window
          if (mwM === null || d.window > mwM) mwM = d.window
        }
      } else if (fc === 'wrongDoor') wrongDoor++
      else return false // every falsePositive owns exactly one anatomy seat
      fp++
    }
  }
  return o2 === k.o2 && fp === k.falsePositive && cu === k.crossedUnknown && ncu === k.noCrossingUnknown &&
    melee === k.fp.melee && wrongDoor === k.fp.wrongDoor && missedDrowned === k.miss.drowned &&
    poCount === po.count && poMin === po.min && poMax === po.max &&
    poGapMin === po.gapMin && poGapMax === po.gapMax &&
    poSpanMin === po.spanMin && poSpanMax === po.spanMax &&
    poDry === po.dry && poWet === po.wet &&
    mwc === mw.count && mws === mw.sum && mwm === mw.min && mwM === mw.max
}

/**
 * The kind join's own row: the false-positive split named by its own
 * seats. An inconsistent book prices nothing; a book with no deaths
 * reads the honest silence; a join with no kind cells (all unkinded)
 * names the honest unkinded seat.
 */
export function o2TriggerKindRow (book) {
  if (!o2TriggerKindConsistent(book)) return null
  if (!book || book.deaths === 0) return null
  const parts = []
  if (book.kinds.o2 > 0) parts.push(`crossed ${O2_DEATH_KIND} ${book.kinds.o2} (the trigger's own)`)
  if (book.kinds.falsePositive > 0) {
    // the anatomy's own clause: only the live seats ride (the
    // zero-class silence idiom); the melee seat's own clock joins the
    // race's own price (the v0.889.0 window join)
    const anatomy = []
    if (book.kinds.fp.melee > 0) {
      const mw = book.kinds.fp.meleeWindow
      let seat = `drowned-melee ${book.kinds.fp.melee}`
      if (mw.count > 0) {
        // the arrival budget = the fold's own floor (the tightest
        // observed race) - a READ of the min cell, never re-computed
        seat += ` (window ${mw.min}..${mw.max}s avg ${Math.round(mw.sum / mw.count)}s - the rescue's arrival budget: beat ${mw.min}s)`
      }
      anatomy.push(seat)
    }
    if (book.kinds.fp.wrongDoor > 0) anatomy.push(`wrong-door ${book.kinds.fp.wrongDoor}`)
    parts.push(`crossed non-o2 ${book.kinds.falsePositive} (the false-positive price: ${anatomy.join(' / ')})`)
  }
  if (book.kinds.crossedUnknown > 0) parts.push(`crossed unkinded ${book.kinds.crossedUnknown}`)
  const nc = Object.keys(book.kinds.noCrossing)
  if (nc.length) parts.push(`no-crossing ${nc.map((key) => `${key} ${book.kinds.noCrossing[key]}`).join('/')}`)
  // the miss's own anatomy: only the live predator seat rides (the
  // zero-class silence idiom); the proximity joins the seat's own air
  // (the v0.892.0 byte - the readless seats ride the honest silence)
  if (book.kinds.miss.drowned > 0) {
    const po = book.kinds.miss.predatorO2
    let seat = `the miss's own predator: drowned ${book.kinds.miss.drowned}`
    if (po.count > 0) {
      seat += ` (last o2 ${po.min}..${po.max}`
      // the read gap's own clause (the v0.893.0 byte): the sight
      // span's own price rides the seat's own air (the zero-gap
      // silence: no gap cells - the bare air clause)
      if (po.gapMin !== null) seat += `, read gap ${po.gapMin}..${po.gapMax} lines`
      // the cadence's own clause (the v0.895.0 byte): the read-to-read
      // span's own price rides the seat's own air (the one-read
      // silence: no span cells - the bare gap clause)
      if (po.spanMin !== null) seat += `, cadence ${po.spanMin}..${po.spanMax} lines`
      // the head's own clause (the v0.896.0 byte): the last reads' own
      // shore state (the zero-class silence: only the live classes ride)
      const heads = []
      if (po.dry > 0) heads.push(`dry ${po.dry}`)
      if (po.wet > 0) heads.push(`wet ${po.wet}`)
      if (heads.length) seat += `, head ${heads.join('/')}`
      seat += ')'
    }
    parts.push(seat)
  }
  if (book.kinds.noCrossingUnknown > 0) parts.push(`no-crossing unkinded ${book.kinds.noCrossingUnknown}`)
  if (!parts.length) return null
  return `the o2-low trigger's own kind join (v0.896.0): ${parts.join(', ')} - the kind join prices the trigger's own cost`
}

// (v0.975.0) THE NO-CROSSING DEATHS' OWN FLOOR - the band edge's own
// lever price (the front five faces named and never priced: 'the o2-low
// band edge - v0.975.0's named seat'). The window book (v0.884.0)
// prices the RUNWAY after the crossing; the field's own word (deaths 7,
// crossed 1, no-crossing 6) names the band edge <=10's own miss seat -
// NOBODY priced HOW MUCH a raised edge would have bought. The floor is
// the lever's own arithmetic: the life's own lowest numeric read
// (minO2 - the v0.975.0 fold byte). A no-crossing life's every numeric
// read rode ABOVE the edge (the crossing law's own contrapositive: any
// read at-or-below the edge crosses), so the floor above the edge IS
// the miss seat's own depth: depth = minO2 - TRIGGER_O2_MAX - the
// minimal raise that would have put the life's own floor at-or-below
// the raised edge (the crossing would then ride the raised edge's own
// law). The idiom is o2arm's fatalDepth's own mirror (the edge minus
// the firing point there, the floor minus the edge here - one lever,
// two ends). The honest exclusions: the blind/unread seat (no numeric
// read rode - the sensor's own death prices the edge nothing); the
// crossed death prices nothing (the edge already caught it). The lie
// seat (a no-crossing death with a floor at-or-below the edge) prices
// nothing (the fence law - the fold's own contrapositive is absolute).
// Mining-surface only: zero fleet wiring, zero new log lines, zero
// census shape change - CENSUS GUARD. Pure: reads, never mutates.

/** The edge book's own fold: the no-crossing deaths' own floors against
 * the census's own rescueBand edge - the raised edge's own price.
 *
 * @param {object|null} [book] the o2TriggerBook fold
 * @returns {{deaths: number, noCrossing: number, blind: number,
 *   catchable: {count: number, min: number|null, max: number|null, sum: number},
 *   raiseYield: {caught: number, rest: {count: number, min: number|null,
 *   max: number|null, sum: number}}, lies: number}|null} null when the
 *   source book prices nothing
 */
export function o2TriggerEdgeBook (book) {
  if (!book || typeof book !== 'object' || !Array.isArray(book.perDeath)) return null
  if (!Number.isInteger(book.deaths) || book.deaths <= 0) return null
  const emptyFold = () => ({ count: 0, min: null, max: null, sum: 0 })
  const out = { deaths: book.deaths, noCrossing: 0, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: emptyFold(), hb: emptyFold(), fp: emptyFold() }, silentUnborn: 0, silentUnbornTs: emptyFold(), catchable: { count: 0, min: null, max: null, sum: 0 }, raiseYield: { caught: 0, rest: emptyFold() }, lies: 0 }
  for (const d of book.perDeath) {
    if (!d || typeof d !== 'object') return null
    if (d.crossed) continue // the edge caught it - the lever prices nothing
    out.noCrossing++
    // the legacy seat (no floor byte rode) reads the honest blind - the
    // older book shape prices the edge nothing, never forged
    if (d.minO2 === null || d.minO2 === undefined) {
      out.blind++
      // (v0.975.2) the blind seat's own skin: the sensor's own death
      // (reset) vs the parse's own unknown (?) vs the stream's own gap
      // (silent - no pass line rode the life) vs the legacy shape (the
      // byte absent - priced, never forged)
      if (d.blindKind === 'reset') out.blindSplit.reset++
      else if (d.blindKind === 'unknown') out.blindSplit.unknown++
      else if (d.blindKind === 'silent') out.blindSplit.silent++
      else out.blindSplit.legacy++
      // (v0.975.4) the silent life's own coverage fold: the born silent
      // lives price the stream's own pulse (the heartbeat count) and
      // the life's own span (the clock); the unborn lives (no previous
      // death - the fold's own start owns the birth) ride their own
      // honest count; the legacy shape (no lifeHb byte at all) prices
      // neither - the image law breaks and the fence holds the row
      if (d.blindKind === 'silent') {
        if (d.lifeHb === null) {
          out.silentUnborn++
          // (v0.975.7) the unborn lives' own WHEN seat: the death's own
          // clock prices when the stream's gap rode - the untimed
          // unborn life prices nothing (the clock's own honesty)
          if (d.ts !== null && d.ts !== undefined && Number.isInteger(d.ts)) {
            const u = out.silentUnbornTs
            u.count++
            u.sum += d.ts
            if (u.min === null || d.ts < u.min) u.min = d.ts
            if (u.max === null || d.ts > u.max) u.max = d.ts
          }
        } else if (Number.isInteger(d.lifeHb)) {
          const s = out.silentSpan
          s.born++
          s.hb.count++
          s.hb.sum += d.lifeHb
          if (s.hb.min === null || d.lifeHb < s.hb.min) s.hb.min = d.lifeHb
          if (s.hb.max === null || d.lifeHb > s.hb.max) s.hb.max = d.lifeHb
          if (d.lifeSpan !== null && d.lifeSpan !== undefined && Number.isInteger(d.lifeSpan)) {
            s.ts.count++
            s.ts.sum += d.lifeSpan
            if (s.ts.min === null || d.lifeSpan < s.ts.min) s.ts.min = d.lifeSpan
            if (s.ts.max === null || d.lifeSpan > s.ts.max) s.ts.max = d.lifeSpan
          }
          // (v0.975.5) the silent gap's own seat split: the fleet's own
          // pass lines during the life - the owner's own fold (the
          // bot-local seat vs the stream's own seat)
          if (d.lifeFleetPasses !== null && d.lifeFleetPasses !== undefined && Number.isInteger(d.lifeFleetPasses)) {
            s.fp.count++
            s.fp.sum += d.lifeFleetPasses
            if (s.fp.min === null || d.lifeFleetPasses < s.fp.min) s.fp.min = d.lifeFleetPasses
            if (s.fp.max === null || d.lifeFleetPasses > s.fp.max) s.fp.max = d.lifeFleetPasses
          }
        }
      }
      continue
    }
    if (d.minO2 <= TRIGGER_O2_MAX) { out.lies++; continue }
    const depth = d.minO2 - TRIGGER_O2_MAX
    out.catchable.count++
    out.catchable.sum += depth
    if (out.catchable.min === null || depth < out.catchable.min) out.catchable.min = depth
    if (out.catchable.max === null || depth > out.catchable.max) out.catchable.max = depth
    // (v0.975.9) the raise's own first rung: the minimal raise (the
    // edge +1) owns depth exactly 1 - the yield's own seat (the wire
    // decision's own byte: the floor's three words rode 6.0/1.0/7.0,
    // the raise-to-11's own yield was named by hand in the reads - the
    // front becomes a field byte); the deeper lives ride the rest fold
    // (the ladder's own next rungs' price)
    if (depth === 1) out.raiseYield.caught++
    else {
      const rf = out.raiseYield.rest
      rf.count++
      rf.sum += depth
      if (rf.min === null || depth < rf.min) rf.min = depth
      if (rf.max === null || depth > rf.max) rf.max = depth
    }
  }
  return out
}

/**
 * The fence: the edge fold must be the window book's own image. The
 * deaths agree, the no-crossing walk's seats sum to the fold's own
 * noCrossing (blind + catchable + lies), every depth rides the fold's
 * own bounds (1..the floor's own height above the edge), a lie prices
 * nothing.
 *
 * @param {object|null} [e] the o2TriggerEdgeBook fold
 * @returns {boolean} true when the fold may price
 */
export function o2TriggerEdgeConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  if (!Number.isInteger(e.deaths) || e.deaths <= 0) return false
  if (!Number.isInteger(e.noCrossing) || e.noCrossing < 0) return false
  if (!Number.isInteger(e.blind) || e.blind < 0) return false
  if (!Number.isInteger(e.lies) || e.lies < 0) return false
  // (v0.975.2) the blind split's own image: the four skins sum to the
  // blind total (the two-ways law - the walk's own recount must agree)
  const bs = e.blindSplit
  if (!bs || typeof bs !== 'object' || Array.isArray(bs)) return false
  for (const k of ['reset', 'unknown', 'silent', 'legacy']) {
    if (!Number.isInteger(bs[k]) || bs[k] < 0) return false
  }
  if (bs.reset + bs.unknown + bs.silent + bs.legacy !== e.blind) return false
  // (v0.975.4) the silent life's own coverage fold: the born lives plus
  // the unborn lives must be exactly the silent skin's own total (the
  // image law - the walk's own recount), each sub-fold rides the
  // standard shape (the count, the bounds, the sum agree)
  const s = e.silentSpan
  if (!s || typeof s !== 'object' || Array.isArray(s)) return false
  if (!Number.isInteger(s.born) || s.born < 0) return false
  if (!Number.isInteger(e.silentUnborn) || e.silentUnborn < 0) return false
  if (s.born + e.silentUnborn !== bs.silent) return false
  // (v0.975.7) the unborn lives' own WHEN fold: the standard shape, the
  // count never exceeding the unborn total (the image law's own walk)
  const u = e.silentUnbornTs
  if (!u || typeof u !== 'object' || Array.isArray(u)) return false
  if (!Number.isInteger(u.count) || u.count < 0 || !Number.isInteger(u.sum) || u.sum < 0) return false
  if (u.count > 0 && (u.min === null || u.max === null)) return false
  if (u.count === 0 && (u.min !== null || u.max !== null || u.sum !== 0)) return false
  if (u.count > e.silentUnborn) return false
  for (const f of [s.ts, s.hb, s.fp]) {
    if (!f || typeof f !== 'object' || Array.isArray(f)) return false
    if (!Number.isInteger(f.count) || f.count < 0 || !Number.isInteger(f.sum) || f.sum < 0) return false
    if (f.count > 0 && (f.min === null || f.max === null)) return false
    if (f.count === 0 && (f.min !== null || f.max !== null || f.sum !== 0)) return false
  }
  if (s.hb.count > s.born || s.ts.count > s.born || s.fp.count > s.born) return false
  const c = e.catchable
  if (!c || typeof c !== 'object' || Array.isArray(c)) return false
  if (!Number.isInteger(c.count) || c.count < 0 || !Number.isInteger(c.sum) || c.sum < 0) return false
  if (c.count > 0 && (c.min === null || c.max === null)) return false
  if (c.count === 0 && (c.min !== null || c.max !== null || c.sum !== 0)) return false
  // (v0.975.9) the raise's own first rung: the yield fold's own image
  // (the caught lives plus the rest's own fold must be exactly the
  // catchable total - the walk's own recount), the rest rides the
  // standard shape, and the rung law: the first rung owns depth
  // exactly 1 - everything it misses rides depth >= 2 (a rest life at
  // depth 1 is the fold's own lie - the yield miscounted)
  const r = e.raiseYield
  if (!r || typeof r !== 'object' || Array.isArray(r)) return false
  if (!Number.isInteger(r.caught) || r.caught < 0) return false
  if (!r.rest || typeof r.rest !== 'object' || Array.isArray(r.rest)) return false
  if (!Number.isInteger(r.rest.count) || r.rest.count < 0 || !Number.isInteger(r.rest.sum) || r.rest.sum < 0) return false
  if (r.rest.count > 0 && (r.rest.min === null || r.rest.max === null)) return false
  if (r.rest.count === 0 && (r.rest.min !== null || r.rest.max !== null || r.rest.sum !== 0)) return false
  if (r.caught + r.rest.count !== c.count) return false
  if (r.rest.count > 0 && r.rest.min < 2) return false
  if (e.blind + c.count + e.lies !== e.noCrossing) return false
  if (e.lies > 0) return false // the lie seat: the fold's own contrapositive is absolute
  if (c.count > 0 && (c.min < 1 || c.max < c.min)) return false
  return true
}

/**
 * The edge book's own row - one line, the band edge's own lever price.
 * The honest null when the fold is absent or inconsistent (a fold that
 * cannot prove itself prices nothing - the fence law).
 *
 * @param {object|null} [e] the o2TriggerEdgeBook fold
 * @returns {string|null} the row byte, or null
 */
export function o2TriggerEdgeRow (e) {
  if (!o2TriggerEdgeConsistent(e)) return null
  const c = e.catchable
  // (v0.975.2) the blind split's own word - the sensor's own death vs
  // the stream's own gap name the lane's own competing front (the
  // field's own two words: the lever real when the floor rode, the
  // sensor's sight owning the miss seat when the skins rode blind)
  let blindWord = ''
  if (e.blind > 0) {
    const bs = e.blindSplit
    const splitByte = `the blind split: reset ${bs.reset} / unknown ${bs.unknown} / silent ${bs.silent}` + (bs.legacy > 0 ? ` / legacy ${bs.legacy}` : '')
    let frontByte
    if (bs.reset > 0 && bs.silent === 0) frontByte = "the sensor's own death owns the blind share - the sensor-health front"
    else if (bs.silent > 0 && bs.reset === 0) frontByte = "the stream's own gap owns the blind share - the sight-span front"
    else if (bs.reset > 0 && bs.silent > 0) frontByte = "the blind share is split (the sensor's own death vs the stream's own gap) - the two fronts compete"
    else frontByte = 'the blind share judges nothing'
    blindWord = ` (${splitByte} - ${frontByte})`
    // (v0.975.4) the silent lives' own coverage word: the gap's own
    // width prices the sight-span front's own seat - the stream's own
    // pulse (heartbeats) and the life's own span rode while the pass
    // line slept; the unborn lives own the fold's own start
    if (bs.silent > 0) {
      const s = e.silentSpan
      if (s.born === 0) {
        blindWord += ` (the silent lives' own span (v0.975.4): all ${e.silentUnborn} unborn - the fold's own start owns the birth)`
      } else {
        const parts = []
        if (s.ts.count > 0) parts.push(`the clock ${s.ts.min}..${s.ts.max}s avg ${(s.ts.sum / s.ts.count).toFixed(1)}`)
        if (s.hb.count > 0) parts.push(`the pulse ${s.hb.min}..${s.hb.max} heartbeat(s) avg ${(s.hb.sum / s.hb.count).toFixed(1)}`)
        if (parts.length === 0) parts.push('the births rode, the cells price nothing')
        blindWord += ` (the silent lives' own span (v0.975.4): ${s.born} born life(s) - ${parts.join(', ')}` + (e.silentUnborn > 0 ? `; ${e.silentUnborn} unborn` : '') + ')'
        // (v0.975.5) the silent gap's own seat split - the born lives
        // name their own owner by the fleet's own sight (the shape's
        // own three words, never a threshold)
        if (s.fp.count > 0) {
          const fpByte = s.fp.min > 0
            ? `the fleet's own sight lived (min ${s.fp.min}..max ${s.fp.max} pass line(s) rode) - the bot's own stream owns the gap seat`
            : (s.fp.max === 0
              ? 'the whole stream slept - the server\'s own gap owns the seat'
              : 'the gap seat is split (the bot\'s own stream vs the whole stream\'s sleep) - the two seats compete')
          blindWord += ` (the silent gap's own seat split (v0.975.5): ${s.fp.count} priced life(s) - ${fpByte})`
        }
      }
      // (v0.975.7) the unborn lives' own WHEN word - the sight-span
      // front's own fix names its lane by WHEN (the face's own opening
      // = the spawn lane's byte, the late deaths = the stream's own
      // cadence); the untimed unborn ride the honest silence
      const u = e.silentUnbornTs
      if (e.silentUnborn > 0 && u.count > 0) {
        blindWord += ` (the unborn lives' own when (v0.975.7): ${u.count} of ${e.silentUnborn} priced the clock - the deaths rode ts ${u.min}..${u.max})`
      }
    }
  }
  if (c.count === 0) {
    return `the no-crossing deaths' own floor (v0.975.0): ${e.noCrossing} no-crossing death(s), no numeric floor above the edge (${e.blind} blind) - the sensor's own sight prices the edge nothing${blindWord}`
  }
  // (v0.975.9) the raise's own first rung - the wire decision's own
  // word (the shape's own three words, never a threshold): the
  // minimal raise's own yield prices the raise real / the deeper
  // rungs' own price / the split rides
  const r = e.raiseYield
  const avg = r.rest.count > 0 ? ` avg ${(r.rest.sum / r.rest.count).toFixed(1)}` : ''
  let raiseWord
  if (r.caught === c.count) {
    raiseWord = `the minimal raise (edge ${TRIGGER_O2_MAX} -> ${TRIGGER_O2_MAX + 1}) owns the whole share - ${r.caught} of ${c.count} life(s) rode depth 1 - THE MINIMAL RAISE'S OWN SEAT: the wire's own word prices the raise real`
  } else if (r.caught === 0) {
    raiseWord = `the minimal raise prices nothing - the rest rode depth ${r.rest.min}..${r.rest.max}${avg} - THE LADDER'S OWN PRICE: the deeper rungs' own word`
  } else {
    raiseWord = `the minimal raise prices ${r.caught} of ${c.count} life(s) - the rest rode depth ${r.rest.min}..${r.rest.max}${avg} - THE LADDER'S OWN SPLIT: the first rung's yield rides beside the deeper rungs' price`
  }
  return `the no-crossing deaths' own floor (v0.975.0): ${c.count} of ${e.noCrossing} no-crossing death(s) rode a numeric floor ${c.min}..${c.max} avg ${(c.sum / c.count).toFixed(1)} o2-unit(s) above the rescueBand's edge (${TRIGGER_O2_MAX}) - the minimal raise the raised edge would have bought (the lever's own price)${blindWord} (the raise's own first rung (v0.975.9): ${raiseWord})`
}
