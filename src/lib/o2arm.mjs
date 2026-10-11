//
// o2arm.mjs - THE ARM-O2'S OWN BOOK (v0.880.0)
//
// The rescue lane's own arm depth. The start line carries the emitter's
// oxygen byte - 'F1 [F1] water: drowning rescue start (drowning,
// oxygen N)' - unread since the rescue-ledger shipped (v0.368.0 counted
// the start CLASSES; the o2 census (v0.422.0) counted the PASSES' o2 -
// the starts' own air never rode a book). The o2-low threshold front's
// own price read (the v0.473.0 law: price before any wire): the arm's
// own band names the trigger's seat, the fatal arm names the lane's
// own loss.
//
// THE BANDS (the sentry census's own edges, never forked): blind (the
// oxygen byte rode -1 - the sensor died before the arm, the o2 census's
// own reset skin) / critical (o2 <= 4 - the census's critical band's
// own edge) / band (5..9 - the inside of the census's rescueBand) /
// headroom (o2 >= 10 - at-or-past the rescueBand's own edge).
//
// THE JOIN LAW (o2gap's own shape): the LATEST start at-or-before the
// death's line index joins (line order is the truth; a later life's
// arm never joins an earlier death; a newer start resets the older arm
// whole - the latest start wins). THE DEATH RESET: an arm never
// survives the death it joined - a later death with no new start rides
// unarmed (the lane's own reset owns the gap, the honest null).
//
// THE COUNTS RIDE THE DEATH LINE (the pagelead law): a bot that drowns
// twice owns two deaths; the perDeath map stays last-wins (o2gap's own
// house wart) - the riders row reads the map, the counts never do.
//
// THE VERDICT SEATS (per death): blind (the arm rode the sensor's own
// death - the trigger's constant is moot while the arm rides blind, the
// sensor's health is the front) / critical (the lane armed at the
// damage window - the constant must ride higher, the o2-low front's own
// lever) / band (the constant has the seat - the lane's own execution
// prices the loss) / headroom (the arm rode with air - the execution
// owns the loss, the constant is not the lever) / unarmed (no arm since
// the last death - the trigger itself never fired for this drowning).
//
// (v0.894.0) THE FATAL ARM'S OWN DEPTH - the lever's own price (the
// face-151 read named it: F1's fatal arm rode o2 0 - the lane armed at
// the floor, and the row said 'the trigger's constant must ride
// higher' without pricing HOW MUCH the higher constant buys). The
// in-band fatal arms join their own depth: depth = ARM_HEADROOM_MIN -
// o2 (the rescueBand's own edge minus the arm's own firing point) -
// the o2-units a higher constant would have bought ABOVE the lane's
// own trigger. The reuse law at its purest: the depth is a READ of the
// fatal arm's own o2 cell (the join's own seat, never re-computed);
// the census's own edges name the arithmetic (ARM_HEADROOM_MIN, never
// forked). The honest exclusions: the headroom fatal arm (o2 >= 10)
// rides NO depth - the edge was already satisfied when the arm fired,
// the constant is not the lever for that seat; the blind fatal arm
// rides no depth (the sensor's own death prices nothing); the unarmed
// death rides no arm at all. The aggregate rides the window row's own
// idiom (count/min/max/sum, the same cells). THE DEPTH FENCE: the
// fold must be exactly the perDeath seats' own in-band walk - every
// critical/band fatal seat folds exactly once, the count agrees with
// the verdict census two ways, a lying cell prices nothing; every
// depth rides the census's own bounds (1..ARM_HEADROOM_MIN - the o2
// byte's own floor to the band's own edge).
//
// (v0.965.0) THE O2 ARM'S OWN CLOCK - the arms' own WHEN (the shared
// lattice's third book). The v0.880.0 book priced the arm's own o2 (the
// VALUE at the firing point) and the v0.894.0 depth priced HOW MUCH a
// higher constant buys, but the arms' own clock never rode a seat:
// whether the rescue starts ride the opening (the water's own geography
// - the launch window's geometry is the front), the middle (the churn's
// own pace) or the closing thirds (the end-phase's own water tax - the
// drain's late legs strike the water) stayed unpriced. The clock rides
// the shared phase lattice (phasebook.mjs - the one-lattice law, the
// same court the smelt ledger's clips and the bank door's leg ride) at
// the pulse rail's own anchors (opendeaf's parsePulseAnchor - the one
// rail parser, never forked): the start lines' own indexes and the
// pulse anchors ride the SAME walk (one scan - the bankdocket door
// clock's own law, the smelt ledger's two-phase structure), the
// midpoint classifies into the clock's thirds, a missing end reads
// 'unplaced' (counted, never assumed), a wide bracket counts wide. The
// verdict rides the 2:1 dominance law (a tie owns nothing - the honest
// silence: the storm has no seat). The fold's own fence grows the
// clock's cells (the v0.894.0 precedent: the new cells mandatory - a
// fold that cannot prove its own clock prices nothing): the family's
// count agrees two ways (armClock.n === starts), the phases sum to the
// family, the wide rides within, the rail's own honesty (no anchors =
// every seat unplaced, the third rides the clock's own third -
// thirdS === clockEnd / 3). Mining-surface only: zero fleet wiring,
// zero new log lines, zero census shape change - CENSUS GUARD.
//
// Reuse law: the death grammar is o2gap's DROWN_CONTEXT_RE (one parser
// per emitter - never forked); the ONLY new byte is ARM_O2_RE - the
// start line's own oxygen, read whole-anchored (junk-safe: a caller
// prefix or a caller suffix never rides it). Mining-surface only: zero
// fleet wiring, zero new log lines. Junk-safe end to end: non-object
// o2g / non-array lines / zero deaths read null (the row stays silent -
// the v0.379.0 precedent); non-string lines are skipped; an
// inconsistent book prices nothing (the fence law). Pure: reads, never
// mutates.
//
import { DROWN_CONTEXT_RE } from './o2gap.mjs'
import { parsePulseAnchor } from './opendeaf.mjs' // (v0.965.0) the pulse rail's own anchor - the arms' clock brackets against it (opendeaf imports only hopcensus - no cycle)
import { phaseBookOf } from './phasebook.mjs' // (v0.965.0) the shared lattice - the arms' seats ride the same court the smelt ledger's clips and the bank door's leg ride (the one-lattice law, zero re-spelling)

/** The rescue start's own oxygen byte - the emitter's exact line, read
 * whole-anchored. The blind skin rides -1 (the sensor's own death
 * before the arm). */
export const ARM_O2_RE = /^(F\d+) \[\1\] water: drowning rescue start \(drowning, oxygen (-1|\d+)\)$/

/** The sentry census's own critical edge (o2 <= 4). */
export const ARM_CRITICAL_MAX = 4

/** The sentry census's own rescueBand edge (o2 >= 10 = headroom). */
export const ARM_HEADROOM_MIN = 10

/**
 * The arm's own band - the sentry census's own edges, never forked.
 *
 * @param {number|null} o2 the start's oxygen (null = the blind -1 byte)
 * @returns {'blind'|'critical'|'band'|'headroom'}
 */
export function armBand (o2) {
  if (o2 === null) return 'blind'
  if (o2 <= ARM_CRITICAL_MAX) return 'critical'
  if (o2 < ARM_HEADROOM_MIN) return 'band'
  return 'headroom'
}

/**
 * The arm-o2's own book: every rescue start's oxygen folded into the
 * band census (the trigger's own arm depth), every drown death joined
 * with the latest start's own arm (the fatal arm).
 *
 * @param {object|null} o2g o2Gap's own fold (the death join's grammar -
 *   one parser, never forked)
 * @param {string[]} lines the face log (array - entrywindow's own fence;
 *   a raw blob reads null, the caller splits first)
 * @returns {{starts: number, blindArms: number,
 *   bands: {blind: number, critical: number, band: number, headroom: number},
 *   spread: {min: number, max: number, avg: number, count: number}|null,
 *   perBot: Object<string, number>,
 *   seat: {band: string, n: number, total: number}|null,
 *   deaths: number,
 *   verdicts: {blind: number, critical: number, band: number,
 *   headroom: number, unarmed: number},
 *   fatalDepth: {count: number, min: number|null, max: number|null, sum: number},
 *   armClock: {anchors: number, clockEnd: number|null, thirdS: number|null,
 *   n: number, byPhase: {early: number, mid: number, late: number,
 *   unplaced: number}, wide: number},
 *   perDeath: Object<string, {o2: number|null, band: string}>}|null}
 */
export function o2ArmBook (o2g, lines) {
  if (!o2g || typeof o2g !== 'object') return null
  if (!Array.isArray(lines)) return null
  if (!Number.isFinite(o2g.deaths) || o2g.deaths <= 0) return null
  // the arm side: the latest start wins whole (line order is the truth)
  const armByBot = {}
  const perBot = {}
  const bands = { blind: 0, critical: 0, band: 0, headroom: 0 }
  const o2Vals = []
  let starts = 0
  let blindArms = 0
  // the death side: the counts ride the death line (the pagelead law)
  const perDeath = {}
  const verdicts = { blind: 0, critical: 0, band: 0, headroom: 0, unarmed: 0 }
  // the fatal arms' own depth (the v0.894.0 lever's own price): the
  // in-band fatal arms' own o2 fold - depth = the rescueBand's own edge
  // minus the arm's own firing point (the o2-units a higher constant
  // would have bought)
  const fatalDepth = { count: 0, min: null, max: null, sum: 0 }
  // (v0.965.0) THE O2 ARM'S OWN CLOCK's rail: the pulse anchors and the
  // start lines' own indexes ride the SAME walk (one scan - the
  // bankdocket door clock's own law, the smelt ledger's two-phase
  // structure)
  const anchors = []
  const startIdx = []
  let deaths = 0
  let li = -1
  for (const l of lines) {
    li++
    if (typeof l !== 'string') continue
    const pa = parsePulseAnchor(l)
    if (pa) anchors.push({ i: li, ts: pa.ts })
    const sm = ARM_O2_RE.exec(l)
    if (sm) {
      const bot = sm[1]
      const blind = sm[2] === '-1'
      const o2 = blind ? null : Number(sm[2])
      const band = armBand(o2)
      armByBot[bot] = { o2, band }
      perBot[bot] = (perBot[bot] || 0) + 1
      starts++
      bands[band]++
      if (o2 !== null) o2Vals.push(o2)
      if (blind) blindArms++
      // the arm joins its own line index (the v0.965.0 clock's family -
      // the same rail the smelt ledger's clips ride)
      startIdx.push(li)
      continue
    }
    const dm = DROWN_CONTEXT_RE.exec(l)
    if (!dm) continue
    deaths++
    const bot = dm[1]
    // the join law: the latest start at-or-before the death (line
    // order); THE DEATH RESET: the arm never survives the death it
    // joined - a later death with no new start rides unarmed
    const arm = armByBot[bot] || null
    const band = arm ? arm.band : 'unarmed'
    verdicts[band]++
    perDeath[bot] = { o2: arm ? arm.o2 : null, band }
    if (arm && arm.o2 !== null && arm.o2 < ARM_HEADROOM_MIN) {
      // the in-band fatal arm's own depth (the fold's own edge
      // arithmetic - a READ of the seat's own o2, never re-computed)
      const depth = ARM_HEADROOM_MIN - arm.o2
      fatalDepth.count++
      fatalDepth.sum += depth
      if (fatalDepth.min === null || depth < fatalDepth.min) fatalDepth.min = depth
      if (fatalDepth.max === null || depth > fatalDepth.max) fatalDepth.max = depth
    }
    delete armByBot[bot]
  }
  // the one-grammar law: two walks of one grammar must agree - a
  // mismatch names a forked reader and prices nothing (the fence law)
  if (deaths !== o2g.deaths) return null
  // (v0.965.0) the clock cells - the shared lattice's own law byte for
  // byte (phasebook.mjs the one definition; the bankdocket door clock's
  // own shape)
  const clockEnd = anchors.length ? anchors[anchors.length - 1].ts : null
  const thirdS = clockEnd !== null ? clockEnd / 3 : null
  const acBook = phaseBookOf(startIdx, anchors, thirdS)
  const armClock = { anchors: anchors.length, clockEnd, thirdS, n: startIdx.length, byPhase: acBook.byPhase, wide: acBook.wide }
  const spread = o2Vals.length
    ? {
        min: Math.min(...o2Vals),
        max: Math.max(...o2Vals),
        avg: o2Vals.reduce((a, b) => a + b, 0) / o2Vals.length,
        count: o2Vals.length
      }
    : null
  // the arm seat: the strict-majority law (the tie reads the spread)
  let seat = null
  const seatEntries = Object.entries(bands).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
  if (seatEntries.length && starts > 0 && seatEntries[0][1] * 2 > starts) {
    seat = { band: seatEntries[0][0], n: seatEntries[0][1], total: starts }
  }
  return {
    starts,
    blindArms,
    bands,
    spread,
    perBot,
    seat,
    deaths,
    verdicts,
    fatalDepth,
    armClock,
    perDeath
  }
}

/**
 * The fence: an inconsistent book prices nothing (the fence law - a
 * fold that cannot prove itself is junk, not evidence). The laws: one
 * death or more; the bands sum to the starts; the blind census agrees
 * two ways; the verdicts sum to the deaths; the spread band honest;
 * every rider's band a legal verdict band.
 *
 * @param {object|null} [b] the o2ArmBook fold
 * @returns {boolean} true when the book may price
 */
export function o2ArmBookConsistent (b) {
  if (!b || typeof b !== 'object') return false
  if (!Number.isInteger(b.deaths) || b.deaths <= 0) return false
  if (!Number.isInteger(b.starts) || b.starts < 0) return false
  if (!Number.isInteger(b.blindArms) || b.blindArms < 0) return false
  const bandSum = Object.values(b.bands || {}).reduce((a, v) => a + v, 0)
  if (bandSum !== b.starts) return false
  if ((b.bands || {}).blind !== b.blindArms) return false
  const verdictSum = Object.values(b.verdicts || {}).reduce((a, v) => a + v, 0)
  if (verdictSum !== b.deaths) return false
  if (b.spread !== null) {
    if (!(b.spread.min <= b.spread.max)) return false
    if (!Number.isFinite(b.spread.avg)) return false
  }
  for (const v of Object.values(b.perDeath || {})) {
    if (!v || typeof v !== 'object') return false
    if (!(v.band in b.verdicts)) return false
  }
  // the depth fold's own image (the v0.894.0 fence): the in-band fatal
  // seats' own walk - every critical/band fatal seat folds exactly
  // once, the count agrees with the verdict census (a critical/band
  // seat with no numeric o2 is a lie the walk catches), the cells ride
  // the census's own bounds (1..ARM_HEADROOM_MIN)
  const fd = b.fatalDepth
  if (!fd || typeof fd !== 'object' || Array.isArray(fd)) return false
  if (!Number.isInteger(fd.count) || fd.count < 0 || !Number.isInteger(fd.sum) || fd.sum < 0) return false
  if (fd.count > 0 && (fd.min === null || fd.max === null)) return false
  if (fd.count === 0 && (fd.min !== null || fd.max !== null || fd.sum !== 0)) return false
  let dc = 0, ds = 0, dmin = null, dmax = null
  for (const v of Object.values(b.perDeath || {})) {
    if ((v.band === 'critical' || v.band === 'band') && v.o2 !== null) {
      if (!Number.isInteger(v.o2) || v.o2 < 0 || v.o2 >= ARM_HEADROOM_MIN) return false
      const depth = ARM_HEADROOM_MIN - v.o2
      dc++
      ds += depth
      if (dmin === null || depth < dmin) dmin = depth
      if (dmax === null || depth > dmax) dmax = depth
    }
  }
  if (dc !== b.verdicts.critical + b.verdicts.band) return false
  if (dc !== fd.count || ds !== fd.sum || dmin !== fd.min || dmax !== fd.max) return false
  if (fd.count > 0 && (fd.min < 1 || fd.max > ARM_HEADROOM_MIN)) return false
  // (v0.965.0) the arm clock's own cells: the family's own count agrees
  // two ways (armClock.n === starts), the phases sum to the family, the
  // wide rides within, the rail's own honesty (no anchors = every seat
  // unplaced, the third rides the clock's own third)
  const ac = b.armClock
  if (!ac || typeof ac !== 'object' || Array.isArray(ac)) return false
  if (!Number.isInteger(ac.n) || ac.n !== b.starts) return false
  const bp = ac.byPhase
  if (!bp || typeof bp !== 'object') return false
  const ph = [bp.early, bp.mid, bp.late, bp.unplaced]
  for (const x of ph) { if (!Number.isInteger(x) || x < 0) return false }
  if (ph.reduce((a, v) => a + v, 0) !== ac.n) return false
  if (!Number.isInteger(ac.wide) || ac.wide < 0 || ac.wide > ac.n) return false
  if (!Number.isInteger(ac.anchors) || ac.anchors < 0) return false
  if (ac.anchors === 0) {
    if (bp.unplaced !== ac.n) return false
    if (ac.clockEnd !== null || ac.thirdS !== null) return false
  } else {
    if (!Number.isFinite(ac.clockEnd) || ac.clockEnd < 0) return false
    if (ac.thirdS === null || !(ac.thirdS === ac.clockEnd / 3)) return false
  }
  return true
}

/**
 * The book's own row - one line, the fold's field read. The honest null
 * when the book is absent or inconsistent (a fold that cannot prove
 * itself prices nothing - the fence law).
 *
 * @param {object|null} [b] the o2ArmBook fold
 * @returns {string|null} the row byte, or null
 */
export function o2ArmBookRow (b) {
  if (!o2ArmBookConsistent(b)) return null
  const seatByte = b.seat
    ? `arm seat: ${b.seat.band} owns ${b.seat.n} of ${b.seat.total} (${((b.seat.n / b.seat.total) * 100).toFixed(1)}%)`
    : 'arm seat: the spread is the shape (no strict majority)'
  let spreadByte
  if (b.spread === null) {
    spreadByte = 'no numeric arm rode' + (b.blindArms > 0 ? ` (blind arms ${b.blindArms})` : '')
  } else {
    spreadByte = `o2 ${b.spread.min}..${b.spread.max} avg ${b.spread.avg.toFixed(1)} (${b.spread.count} numeric arm(s)${b.blindArms > 0 ? `, blind ${b.blindArms}` : ''})`
  }
  const v = b.verdicts
  let verdictByte
  if (v.unarmed > 0) verdictByte = 'a death rode with no arm since the last death - the lane\'s own reset owns the gap'
  else if (v.blind > 0) verdictByte = 'the blind arm prices nothing - the sensor\'s own seat owns the lane (the sensor\'s health is the front, the trigger\'s constant is moot while the arm rides blind)'
  else if (v.critical > 0) verdictByte = 'the lane armed at the damage window - the trigger\'s constant must ride higher (the o2-low front\'s own lever)'
  else if (v.band > 0) verdictByte = 'the lane armed inside the band - the constant has the seat, the lane\'s own execution prices the loss'
  else verdictByte = 'the arms rode with headroom - the lane\'s own execution owns the losses (the constant is not the lever)'
  // the fatal arms' own depth (the v0.894.0 lever's own price): the
  // in-band fatal arms' own o2-units a higher constant would have
  // bought - a READ of the fold's own cells, never re-computed
  let fatalByte = `the fatal arm(s): blind ${v.blind} / critical ${v.critical} / band ${v.band} / headroom ${v.headroom} / unarmed ${v.unarmed}`
  const fd = b.fatalDepth
  if (fd.count > 0) {
    fatalByte += ` (the in-band fatal arms' own depth below the rescueBand's edge: ${fd.min}..${fd.max} avg ${(fd.sum / fd.count).toFixed(1)} o2-unit(s) - the lever's own price)`
  }
  return `the rescue arm's own o2 book (v0.894.0): ${b.starts} arm(s) - ${spreadByte} - ${seatByte} - ${fatalByte} - ${verdictByte}`
}

/**
 * The riders row - the per-death bracket line (the house bill idiom):
 * the arm that joined and the band it rode, or the honest no-arm. Bots
 * ride line order (the truth); the map stays last-wins (o2gap's own
 * house wart - the counts never fold from it).
 *
 * @param {object|null} [b] the o2ArmBook fold
 * @returns {string|null} the riders byte, or null
 */
export function o2ArmBookRidersRow (b) {
  if (!o2ArmBookConsistent(b)) return null
  const bits = Object.entries(b.perDeath).map(([bot, v]) => {
    if (v.band === 'unarmed') return `${bot} [no arm - unarmed]`
    return `${bot} [arm o2 ${v.o2 === null ? -1 : v.o2} - ${v.band}]`
  })
  return bits.length ? bits.join(' ') : null
}

// (v0.965.0) THE O2 ARM'S OWN CLOCK - the verdict. The v0.880.0 book
// priced the arms' own o2 (the VALUE at the firing point), the v0.894.0
// depth priced HOW MUCH a higher constant buys - the WHEN never rode a
// seat. The verdict reads the fold's own armClock cells (the same
// walk's own readings - zero re-parsing, zero new regexes, the
// one-parser law) and seats the lane's own arming spread against the
// clock's thirds: LATE dominance = the closing thirds own the lane's
// arming (the drain's late legs strike the water - the end-phase's own
// tax is the front); MID = the mid-run churn's pace prices the lane
// (the middle's own storm is the front); EARLY = the water's own
// geography owns the opening (the launch window's geometry is the
// front). No dominance (the mixed spread) or an empty book -> the
// honest silence (null - the storm has no seat, the 2:1 law).
export function o2ArmClockVerdict (b) {
  const c = b && b.armClock ? b.armClock : null
  if (!c || !c.n) return null
  const p = c.byPhase
  if (!p || typeof p !== 'object') return null
  if (p.late * 2 > c.n) return { verdict: 'late', n: c.n, byPhase: p, anchors: c.anchors, wide: c.wide, thirdS: c.thirdS }
  if (p.mid * 2 > c.n) return { verdict: 'mid', n: c.n, byPhase: p, anchors: c.anchors, wide: c.wide, thirdS: c.thirdS }
  if (p.early * 2 > c.n) return { verdict: 'early', n: c.n, byPhase: p, anchors: c.anchors, wide: c.wide, thirdS: c.thirdS }
  return null
}

// (v0.965.0) the arms' own row - the lever's own clause names the
// front's own reading; the anchor density rides so the reader judges
// the midpoint law (the zeroclock's own honesty). Junk never prints a
// clock (the honest silence's own row law).
export function o2ArmClockRow (v) {
  if (!v || typeof v !== 'object') return null
  const { verdict, n, byPhase, anchors, wide } = v
  if ((verdict !== 'late' && verdict !== 'mid' && verdict !== 'early') ||
      !Number.isFinite(n) || n <= 0 || !byPhase || typeof byPhase !== 'object' ||
      !Number.isFinite(anchors) || anchors < 0 || !Number.isFinite(wide) || wide < 0) return null
  const { early, mid, late, unplaced } = byPhase
  for (const x of [early, mid, late, unplaced]) if (!Number.isFinite(x) || x < 0) return null
  const book = `early ${early} / mid ${mid} / late ${late} / unplaced ${unplaced}, ${wide} wide of ${anchors} anchor(s)`
  if (verdict === 'late') return `the o2 arm's own clock (v0.965.0): the rescue starts rode LATE-dominant (${late} of ${n}; ${book}) - the closing thirds own the lane's arming: the drain's late legs strike the water - the end-phase's own tax is the front`
  if (verdict === 'mid') return `the o2 arm's own clock (v0.965.0): the rescue starts rode MID-dominant (${mid} of ${n}; ${book}) - the mid-run churn's pace prices the lane - the middle's own storm is the front`
  return `the o2 arm's own clock (v0.965.0): the rescue starts rode EARLY-dominant (${early} of ${n}; ${book}) - the water's own geography owns the opening: the launch window's geometry is the front`
}
