// (v0.974.9, shape v0.974.10) THE VALVE MARGIN LENS - the rss book's own
// floor read, pure, mining-surface only.
//
// WHAT PRICED IT: the worklogs priced THREE fires of 'closest approach'
// against the valve's 600M floor - 'rss peak 592M - 8M under the valve's
// 600M floor' (faces 270/271). The 600M number is a STALE DOC COMMENT: the
// live valve floor is ALLOC_VALVE_FLOOR_MB_DEFAULT = 450 - the v0.115.0
// floor drop 600 -> 450 priced by run101 (the 600M floor armed the valve
// only after the burst had mostly landed). 592M is not 8M under a 600M
// floor - it rides 142M PAST the live 450M arm: the storm faces were IN
// the valve's jurisdiction, not approaching it. THE FLOOR FICTION LESSON:
// a margin priced against a comment is a fiction; the floors ride the
// code's own constants - imported here, never re-declared, never re-read
// from the docs.
//
// THE ARM RIDE'S OWN SHAPE (v0.974.10 - priced by FACE 272 =
// 38303617184's own bytes, the valve margin row's first live speaking
// face): the row's first read caught 28 of 54 gauges AT/over the arm -
// and the raw trajectory shows the ride is a PLATEAU, not stripes: the
// pre-arm band peaked 444M (6M under the arm - the band was already
// thin), gauge 27 stepped to 457M, and the face NEVER came back below
// (the tail pinned 451-459M). A plateau means the arm is the face's
// normal operating band from the step on - a different storm class from
// scattered stripes. The shape rides line-order runs (the sensorwindow
// book's own maximal-run law): overArmRuns = the maximal consecutive
// over-arm runs, stepIndex = the first over-arm gauge's 1-based address,
// preArmPeak = the deepest rss BEFORE the step (null when the face
// starts over the arm). The shape is a CELL, never grafted into the
// verdict words - the v0.974.9 verdict strings stay byte-stable.
//
// THE JOIN (one read per emitter - the mem-hb lens owns the ceilings/
// eviction slice v0.408.0, the gc pool lens the old/ext/ab split v0.421.0,
// opendeaf the valve's own spans v0.438.0; THIS lens prices the peak's own
// margin against the two LIVE floors):
//   - the allocvalve floor (450M): the storm-cure arm - rss past it rides
//     the valve's own span (the funnel's fuel cut, the walk outage);
//   - the stormguard floor (1200M): the SIGTERM euthanasia floor - rss
//     past it is the OOM-cliff's own class (heartbeat.mjs mirrors it,
//     FLEET_STORM_FLOOR_MB may override in the field - the defaults are
//     the book's ruler, the env override rides honest in the field logs).
//
// THE POPULATION: the mem heartbeat gauge lines ride memhb.mjs's own
// MEM_HB_RE (one parser one truth - never re-spelled). MEM_HB_RE's cells
// are \d+ - a -1 sentinel line (the honest unknown, gcpool's own wider
// RE) does not match, so this lens's gauges are real readings only; a
// face with no MEM_HB_RE line returns null (the honest silence - no
// gauges, no margin read).
//
// THE LAWS:
// - the honest silence: no mem gauges -> null (the join family's own law).
// - one parser one truth: the gauges ride MEM_HB_RE (imported), the
//   floors ride ALLOC_VALVE_FLOOR_MB_DEFAULT and STORM_FLOOR_MB_DEFAULT
//   (imported) - the lens declares NO number of its own except the thin
//   tier fence.
// - the measure-not-owner law: the verdict names the margin's shape
//   (holds / holds thin / the arm is ridden / the euthanasia floor is
//   breached) never the storm's owner - the valve's own spans are
//   opendeaf's read, the storm's anatomy is the mem-hb lens's own.
//
// THE TIER FENCE: VALVE_MARGIN_THIN_M = 50 - the healthy band's own
// width is the anchor (run53 rss 367M, run92 375-383M: the healthy faces
// ride 70-80M of margin under the live 450M arm), so 50M of headroom is
// the thin line between the healthy band and the arm.
import { MEM_HB_RE } from './memhb.mjs'
import { ALLOC_VALVE_FLOOR_MB_DEFAULT } from './allocvalve.mjs'
import { STORM_FLOOR_MB_DEFAULT } from './stormguard.mjs'

export const VALVE_MARGIN_THIN_M = 50

/**
 * Price the face's rss peak against the two LIVE floors.
 * Junk-safe: non-array input, non-string lines and every non-gauge shape
 * judge NOTHING; a face with zero MEM_HB_RE gauges returns null.
 * @param {string[]} [lines] fleet-log lines
 * @param {{valveFloorM?: number, stormFloorM?: number, thinM?: number}} [opts]
 * @returns {null|{n: number, peak: number, valveFloorM: number, stormFloorM: number,
 *   marginValve: number, marginStorm: number, overValve: number,
 *   overValveCells: number, overArmRuns: number, overArmLongest: number,
 *   stepIndex: number|null, preArmPeak: number|null, thinM: number,
 *   verdict: string, shape: string}}
 */
export function valveMarginJoin (lines, { valveFloorM = ALLOC_VALVE_FLOOR_MB_DEFAULT, stormFloorM = STORM_FLOOR_MB_DEFAULT, thinM = VALVE_MARGIN_THIN_M } = {}) {
  if (!Array.isArray(lines)) return null
  let n = 0
  let peak = null
  let overValveCells = 0
  const rssCells = []
  for (const line of lines) {
    if (typeof line !== 'string') continue
    const m = line.match(MEM_HB_RE)
    if (!m) continue
    const rss = Number(m[6])
    if (!Number.isFinite(rss) || rss < 0) continue // the -1 sentinel is the honest unknown (never a reading)
    rssCells.push(rss)
    n++
    if (peak === null || rss > peak) peak = rss
    if (rss >= valveFloorM) overValveCells++
  }
  if (n === 0 || peak === null) return null
  const marginValve = valveFloorM - peak // negative = the peak is past the arm
  const marginStorm = stormFloorM - peak
  const overValve = Math.max(0, peak - valveFloorM)
  // THE ARM RIDE'S OWN SHAPE - line-order maximal runs over the arm.
  let overArmRuns = 0
  let overArmLongest = 0
  let runLen = 0
  let stepIndex = null
  let preArmPeak = null
  for (let i = 0; i < rssCells.length; i++) {
    const over = rssCells[i] >= valveFloorM
    if (over) {
      if (runLen === 0) {
        overArmRuns++
        if (stepIndex === null) stepIndex = i + 1
      }
      runLen++
      if (runLen > overArmLongest) overArmLongest = runLen
    } else {
      runLen = 0
      if (stepIndex === null) preArmPeak = preArmPeak === null ? rssCells[i] : Math.max(preArmPeak, rssCells[i])
    }
  }
  let shape = ''
  if (stepIndex === null) preArmPeak = null // the pre-arm peak is a property OF the step - no step, no pre-arm (the honest silence)
  if (overValveCells > 0 && stepIndex !== null) {
    const rodeToTheEnd = rssCells[rssCells.length - 1] >= valveFloorM || runLen > 0
    if (overArmRuns === 1 && rodeToTheEnd) {
      shape = `the ride is a PLATEAU - one run of ${overArmLongest} gauge(s) from gauge ${stepIndex} of ${n}, never below the arm again${preArmPeak !== null ? ` (the pre-arm band peaked at ${preArmPeak}M)` : ''}`
    } else if (overArmRuns === 1) {
      shape = `the ride is one run of ${overArmLongest} gauge(s) from gauge ${stepIndex} of ${n} (returned below the arm at the tail)`
    } else {
      shape = `the ride rides ${overArmRuns} run(s), longest ${overArmLongest} gauge(s) (stripes, not a plateau)`
    }
  }
  let verdict
  if (peak >= stormFloorM) {
    verdict = `the euthanasia floor is BREACHED - rss peak ${peak}M rides ${peak - stormFloorM}M past the ${stormFloorM}M storm floor - the OOM cliff's own class`
  } else if (peak >= valveFloorM) {
    verdict = `the valve arm is RIDDEN - rss peak ${peak}M rides ${overValve}M past the ${valveFloorM}M valve floor (residency ${overValveCells} gauge(s)) - the valve's own span owns the storm, the closest-approach book rode the wrong floor`
  } else if (marginValve <= thinM) {
    verdict = `the valve floor holds thin - rss peak ${peak}M, ${marginValve}M under the ${valveFloorM}M valve floor - the thin-approach class`
  } else {
    verdict = `the valve floor holds - rss peak ${peak}M, ${marginValve}M under the ${valveFloorM}M valve floor`
  }
  return { n, peak, valveFloorM, stormFloorM, marginValve, marginStorm, overValve, overValveCells, overArmRuns, overArmLongest, stepIndex, preArmPeak, thinM, verdict, shape }
}
