// THE RELOG WALK-OUT ENFORCER (v0.425.0) - the frozen-after-relog detector.
//
// WHAT MEASURED (face 36864564525, run artifact fleet19.log, the F10 lane):
// F10 ran THREE consecutive frozen-while-head-wet relogs on ONE water column
// [-131,49,414] (o2=20 every time - full lungs, this is not a drowning), each
// cycle byte-identical: the deep-pocket ascend dug the same ceiling stone at
// [-131,51,413], the client wedged ticking-flat at y=49.4 ('physicsTick 0ms
// ago yet the position holds'), the wet first-verdict relog ended the session
// (streaks 1/2/3 - all under FROZEN_RELOG_LOOP_CAP, so every saver fired),
// and the reconnect lane dropped the fresh client back into the SAME column.
//
// THE HOLE THE THREE RELOGS FELL THROUGH: the relog line PROMISES a cure -
// 'the fresh client walks the hazard-ledgered column out' - and nothing ever
// verifies the walk-out. The fresh client inherits a wedged work loop (the
// climb-out chain re-issues stalled walks: 'climb out (trip): failed -
// timeout', 'map trip skipped: cannot leave the shaft'), the walk gates hold
// their churn state against it, and when the gate's hold expires the next wet
// page re-fires the rescue ladder that re-freezes and re-logs. The relog lane
// was feeding the loop it exists to break - the v0.361.0 lesson one rung
// deeper (that break refused the RELOG; nothing enforced the WALK-OUT the
// relog grants its replacement client).
//
// THE CURE: give the promise a witness. The walk-out window is ALREADY in the
// code - frozenReturnGate's laddered hold (10s/20s/40s, capped 60s) is the
// exact budget the relog line announces - and the progress bar is ALREADY in
// the code - the walk layer's own STALL_MIN_PROGRESS (1.0 block, the same bar
// the stall governor judges churn with). When the window expires, judge the
// displacement from the relog position against that bar: below it the
// walk-out stalled and the escalation ladder runs -
//   (i)   the walk gates/stalls reset (the funnel admits fresh walks again),
//   (ii)  the wedged goal slot releases (setGoal(null) - the v0.65.0
//         zombie-goal kill's mechanics), the plan re-decides on the next pass,
//   (iii) the honest shift exit is NAMED for the terminal rung (the escape
//         hatch stays visible; the session loop owns the call - the relog
//         loop-break at FROZEN_RELOG_LOOP_CAP and the runBot attempt ceiling
//         are the existing backstops, so (iii) is logged, not wired).
//
// Pure core, zero mineflayer imports: the wiring (miner.mjs's sentry tick)
// owns the bot map and the clocks; everything here runs on injected numbers.
// Junk stays harmless - a lost read never manufactures an escalation (the
// gates-decide convention).

import { STALL_MIN_PROGRESS } from './walkgovernor.mjs'
import { frozenReturnGate } from './drowning.mjs'

// The progress bar is the walk layer's own (one law, one number): a bot that
// settled the window having moved less than this never left the column.
export const RELOG_WALKOUT_MIN_PROGRESS = STALL_MIN_PROGRESS

/** The walk-out window the relog line announces for this bot's relog streak
 * (pure, junk-safe) - the code's own budget, never a new constant: the
 * frozen-return gate's laddered hold IS the walk-out window (0 relogs -> 0 =
 * no window, no witness duty; junk streaks read 0 the same way the gate
 * reads them - a wiring sickness must never arm an enforcement). */
export function walkoutWindowMs ({ consecutiveRelogs = 0 } = {}) {
  return frozenReturnGate({ consecutiveRelogs })
}

/** Pure displacement (blocks) between two position-like points {x,y,z}.
 * Junk-safe: any missing/non-finite axis reads null (a NaN axis poisons the
 * subtraction the same way) - an unmeasurable window must never feed the
 * escalation (the governor's own unmeasured rule, mirrored). */
export function walkoutDisplacement (from, to) {
  if (!from || !to) return null
  const dx = Number(to.x) - Number(from.x)
  const dy = Number(to.y) - Number(from.y)
  const dz = Number(to.z) - Number(from.z)
  if (!Number.isFinite(dx) || !Number.isFinite(dy) || !Number.isFinite(dz)) return null
  return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

/** Pure verdict at the window's end (junk-safe).
 * @returns {'unmeasured'|'walked-out'|'stalled'} unmeasured -> the wiring
 *   logs nothing and escalates nothing (a lost position read cannot spend
 *   an escalation); walked-out -> the promise held, the witness stands down;
 *   stalled -> the walk-out failed, the ladder owns the next move. */
export function walkoutVerdict ({ displacement } = {}) {
  // the Number(null) lesson again: null coerces to 0 and a LOST read would
  // read as a stalled window - null/undefined are the unmeasured class
  const d = displacement === null || displacement === undefined ? NaN : Number(displacement)
  if (!Number.isFinite(d)) return 'unmeasured'
  return d >= RELOG_WALKOUT_MIN_PROGRESS ? 'walked-out' : 'stalled'
}

/** Pure: the escalation ladder rung for the Nth consecutive stalled window
 * (junk-safe; the stage rides the per-bot walk-out state across relogs, so
 * the rungs ratchet exactly like the gate hold does). The rungs:
 *   stage 1 -> (i) alone: one stalled window is a stuck funnel - reset the
 *             walk gates/stalls and let the work loop walk again.
 *   stage 2 -> (i)+(ii): the SECOND stalled window proves the funnel was not
 *             the only wedge - the goal slot releases too and the plan
 *             re-decides (the unfreeze sweep's mechanics, keyed to the
 *             relog window instead of a main-thread freeze).
 *   stage >= 3 -> (i)+(ii) with the shift exit NAMED: three windows is the
 *             F10 shape itself - the honest escape hatch prints, the wiring
 *             stays out of the session loop's jurisdiction (documented, not
 *             wired: the relog loop-break + the attempt ceiling backstop it).
 * A stalled window NEVER arms alone on junk: stage junk reads 0, so the
 * first verdict is always rung (i) - a lost counter never invents a deeper
 * rung (the gates-decide convention).
 *
 * @param {object} [p]
 * @param {number} [p.stage] consecutive stalled walk-out windows so far,
 *   INCLUDING the one just witnessed (junk -> 0 -> rung one)
 * @returns {{stage: number, resetGates: boolean, releaseGoal: boolean, shiftExitNamed: boolean, why: string}}
 */
export function walkoutEscalation ({ stage = 0 } = {}) {
  const n = Number.isFinite(Number(stage)) && Number(stage) > 0 ? Math.floor(Number(stage)) : 0
  const rung = n <= 0 ? 1 : Math.min(n, 3)
  if (rung === 1) {
    return {
      stage: 1,
      resetGates: true,
      releaseGoal: false,
      shiftExitNamed: false,
      why: 'rung 1: the walk gates and stalls reset, the funnel admits fresh walks'
    }
  }
  if (rung === 2) {
    return {
      stage: 2,
      resetGates: true,
      releaseGoal: true,
      shiftExitNamed: false,
      why: 'rung 2: the gates reset AND the wedged goal slot releases, the plan re-decides'
    }
  }
  return {
    stage: 3,
    resetGates: true,
    releaseGoal: true,
    shiftExitNamed: true,
    why: 'rung 3: the gates reset and the goal slot releases - the honest shift exit is named, the session loop owns the call (unwired: the relog loop-break and the attempt ceiling backstop it)'
  }
}

/** Pure: the sentry's stall line (the one log the enforcement prints per
 * window - worded to stay OUT of the decompose relog counter's lane, which
 * counts /frozen client relog/; this line names the WALK-OUT, not the
 * relog). Double-quoted vocabulary, the dy-instrument's field style: the
 * measured displacement and the window ride the line so the artifact
 * carries the numbers, not just the verdict.
 *
 * @param {object} [p]
 * @param {string} [p.tag] the bot tag ('[F10]')
 * @param {number} [p.displacement] blocks moved across the window (null = unmeasured)
 * @param {number} [p.windowMs] the walk-out window that expired
 * @param {string} [p.why] the escalation rung's why (from walkoutEscalation)
 * @returns {string}
 */
export function walkoutStallLine ({ tag = '', displacement = null, windowMs = 0, why = '' } = {}) {
  const w = Number.isFinite(Number(windowMs)) && Number(windowMs) > 0 ? Math.round(Number(windowMs) / 1000) : 0
  // the Number(null) lesson (fifth strike, the project's own): null coerces
  // to 0 and a null displacement would LIE as '0.0 blocks' - null/undefined
  // are the UNMEASURED class, only a real finite number renders as blocks
  const raw = displacement
  const d = raw === null || raw === undefined ? NaN : Number(raw)
  const read = Number.isFinite(d) ? `${d.toFixed(1)} blocks of the ${RELOG_WALKOUT_MIN_PROGRESS.toFixed(1)} progress bar` : 'displacement unmeasured'
  return `${tag} water: relog walk-out stalled (window ${w}s, ${read}) - ${why}`
}

// (v0.968.0) THE WALK-OUT'S OWN WALK - the drive's pure aim law. The field
// priced the promise's hole live (face 239 = 38192522229, all four windows
// stalled at 0.1-0.6 blocks of the 1.0 bar): the hold's own line promises
// 'the fresh client walks the hazard-ledgered column out' and nothing ever
// aims the walk - the escalation rungs reset gates and release goal slots
// (the funnel admits, the plan re-decides) but the plan re-decides THE SAME
// wedged action (F10's second window: relog #2, rung 2, still 0.4 blocks).
// The drive is the promise's first walker: at a HELD page (never the bypass
// - the drowning clock outranks the hold and the rescue owns it), while the
// witness is armed and the bot has not left the column, the wiring aims ONE
// walk at the nearest DRY standable cell this scan finds. One attempt per
// witness (the driven latch - the one-walk law, the mouth's precedent); the
// window still judges (walked-out deletes the witness, stalled runs the
// ladder's rungs - the v0.425.0 backstop unchanged); a sealed scan aims
// nothing (the aim never invents a walk it cannot see).
//
// THE DRY LAW (the aim never points INTO the water): a candidate cell needs
// a solid ground below (boundingBox !== 'empty'), empty-or-missing feet and
// head (the standGoalNear shape - water blocks read 'empty' bounding boxes,
// so the water check rides isWaterName on top, injected by the wiring), and
// isWaterName false at the feet and the head. The scan order prices the
// exit's own direction: the horizontal ring first (OUT of the column,
// nearest ring radius first, level seat before rise before drop), then the
// column's own ends (rise - the surface is the natural head-wet exit - then
// drop), then the honest null (sealed).
export const WALKOUT_AIM_RING = 3
export const WALKOUT_AIM_DY_SCAN = [0, 1, -1, 2, -2]
export const WALKOUT_AIM_COLUMN_REACH = 4

/**
 * The drive's pure aim: the nearest dry standable cell around the relog
 * position, or null (sealed - the wiring logs the sealed line and aims
 * nothing). Junk-safe: a non-finite axis, a missing reader or a junk
 * predicate read null (a lost read never aims - the gates-decide
 * convention); a readCell throw reads as a refused cell, never a crash.
 * @param {{x?: number, y?: number, z?: number}|null} [from] the witness's relog position
 * @param {(x: number, y: number, z: number) => {name?: string, boundingBox?: string}|null} [readCell] the wiring's block read
 * @param {(name: string) => boolean} [isWater] the water-name predicate (injected - the pure core never forks the water law)
 * @param {{ring?: number, dyScan?: number[], columnReach?: number}} [opts]
 * @returns {null|{x: number, y: number, z: number}}
 */
export function walkoutAimCell (from, readCell, isWater, { ring = WALKOUT_AIM_RING, dyScan = WALKOUT_AIM_DY_SCAN, columnReach = WALKOUT_AIM_COLUMN_REACH } = {}) {
  if (!from || typeof readCell !== 'function' || typeof isWater !== 'function') return null
  const px = Math.floor(Number(from.x))
  const py = Math.floor(Number(from.y))
  const pz = Math.floor(Number(from.z))
  if (!Number.isFinite(px) || !Number.isFinite(py) || !Number.isFinite(pz)) return null
  const dys = Array.isArray(dyScan) ? dyScan.filter(d => Number.isInteger(d)).slice(0, 9) : WALKOUT_AIM_DY_SCAN
  const dryStandable = (cx, cy, cz) => {
    let ground = null
    let feet = null
    let head = null
    try {
      ground = readCell(cx, cy - 1, cz)
      feet = readCell(cx, cy, cz)
      head = readCell(cx, cy + 1, cz)
    } catch { return false }
    if (!ground || ground.boundingBox === 'empty') return false
    if (feet && feet.boundingBox !== 'empty') return false
    if (head && head.boundingBox !== 'empty') return false
    if (feet && isWater(feet.name)) return false
    if (head && isWater(head.name)) return false
    return true
  }
  // the horizontal ring first - OUT is the exit's own direction
  const ring8 = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
  for (let r = 1; r <= ring; r++) {
    for (const [ox, oz] of ring8) {
      const cx = px + ox * r
      const cz = pz + oz * r
      for (const dy of dys) {
        if (dryStandable(cx, py + dy, cz)) return { x: cx, y: py + dy, z: cz }
      }
    }
  }
  // the column's own ends: the surface (the head-wet exit) then the tail
  for (let d = 1; d <= columnReach; d++) {
    if (dryStandable(px, py + d, pz)) return { x: px, y: py + d, z: pz }
  }
  for (let d = 1; d <= columnReach; d++) {
    if (dryStandable(px, py - d, pz)) return { x: px, y: py - d, z: pz }
  }
  return null
}

/**
 * The drive's own line (one per witness - the driven latch bounds it in the
 * field). Worded OUT of every existing lane: not 'relog walk-out' (the
 * witness census's own prefix - its stall RE and its escape hatch must read
 * this line as foreign), not 'frozen client relog' (the relog counter's
 * lane), not the hazard board's shapes. The aim cell and the displacement
 * ride the line (the dy-instrument's field style - the artifact carries the
 * numbers, not just the verdict).
 * @param {object} [p]
 * @param {string} [p.tag] the bot tag ('[F10]')
 * @param {null|{x: number, y: number, z: number}} [p.aim] the aimed cell (null = sealed)
 * @param {number} [p.displacement] blocks moved at the drive's instant (null = unmeasured - the wiring never fires there, the pure law keeps the honest class)
 * @returns {string}
 */
export function walkoutDriveLine ({ tag = '', aim = null, displacement = null } = {}) {
  const raw = displacement
  const d = raw === null || raw === undefined ? NaN : Number(raw)
  const dRead = Number.isFinite(d) ? `${d.toFixed(1)} blocks from the relog cell` : 'displacement unmeasured'
  const ax = aim && Number.isFinite(Number(aim.x)) ? Math.floor(Number(aim.x)) : null
  const ay = aim && Number.isFinite(Number(aim.y)) ? Math.floor(Number(aim.y)) : null
  const az = aim && Number.isFinite(Number(aim.z)) ? Math.floor(Number(aim.z)) : null
  if (ax !== null && ay !== null && az !== null) {
    return `${tag} water: walk-out drive aims the held page's walk (${dRead}, goal [${ax},${ay},${az}]) - the promise's own walker, the window judges`
  }
  return `${tag} water: walk-out drive finds no dry aim (${dRead}, the bounded ring reads sealed) - the promise waits, the ladder keeps its rungs`
}
