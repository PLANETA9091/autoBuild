//
// blindarmwindow.mjs - THE BLIND ARM'S OWN WINDOW SEAT (v0.959.0)
//
// The two books' own join - the byte the lane named and nobody priced.
// The arm book (v0.880.0) prices the rescue start's own oxygen and
// folds the fatal arm's verdict; its own blind verdict byte reads
// 'the blind arm prices nothing - the sensor's own seat owns the lane
// (the sensor's health is the front, the trigger's constant is moot
// while the arm rides blind)'. The window book (v0.881.0) prices the
// blind reads' own windows ('the toll owns the rides, the windows own
// the DURATION') but the run internals never ride its book and the
// windows join nothing. Face 222's own read named the front whole:
// the fatal arms rode blind 1 / critical 1 / band 0 - the blind arm
// prices nothing. THE MISSING BYTE: WHERE in the bot's own pass
// stream did the -1 byte fire?
//
// THE THREE CLASSES (the stream's own words at the start line):
//   open     - the bot's pass stream owned an OPEN blind window at the
//              start line (the last pass read before the start was
//              blind): the window already owned the sensor's death.
//              The seat price is the run's read count at the arm -
//              how deep into the window the arm fired.
//   spoke    - the bot's last pass read before the start was numeric
//              or unknown (the window closed - the sensor spoke
//              again, the window law's own word): the emitter's -1
//              rode UNWITNESSED. THE CADENCE GAP'S OWN ARM - the
//              sensor died between the pass and the start; the start
//              line is the death's first witness (face 215's own
//              shapes: F5's arm fired with the stream's last word
//              o2=4, F9's with o2=2 and o2=0 - all alive).
//   unspoken - the bot had no pass read before the start line: the
//              stream cannot judge (the honest blind class - the
//              v0.897.0 blind-skin idiom: it counts in the book and
//              the denominator and judges nothing).
//
// THE RUN LAW (the window book's own law, followed byte-true): a
// maximal run of consecutive blind reads in one bot's line-order
// stream; any numeric or unknown read ends the window; a new blind
// read opens the next window. The state at a start line is the run
// the bot's LAST pass read at-or-before that line carried.
//
// THE JOIN LAW (o2arm's own shape, byte-true): the LATEST start
// at-or-before the death joins (line order is the truth; a later
// life's arm never joins an earlier death; a newer start resets the
// older arm whole). THE DEATH RESET: an arm never survives the death
// it joined - a later death with no new start rides unarmed (the
// lane's own reset owns the gap, the honest null). The fatal blind
// classes ride the DEATH LINE (the pagelead law - a bot that drowns
// twice owns two deaths); the perDeath map stays o2arm's own
// last-wins shape (the house wart); the per-arm FATAL mark is
// recorded at the join moment - every arm's own fate survives (the
// riders row reads the arms, the counts never do).
//
// THE FENCE (the two-walks-agree law at its purest): the arm book's
// own fold is the fence's second witness - my walk of the SAME lines
// with the SAME grammars must agree with it starts-for-starts,
// blind-arm-for-blind-arm, death-for-death, and the fatal blind
// split must cover the arm book's own blind verdicts exactly
// (fatal.open + fatal.spoke + fatal.unspoken === verdicts.blind),
// the blind perDeath seats must agree key-for-key. A mismatch names
// a forked reader and prices nothing.
//
// Reuse law: the arm grammar is o2arm's ARM_O2_RE (one parser, never
// re-spelled); the death grammar is o2gap's DROWN_CONTEXT_RE; the
// pass stream's grammar is sentry's parseSentryPass - all imported.
// Mining-surface only: zero fleet wiring, zero new log lines, zero
// census shape change. Junk-safe end to end: non-object oab /
// non-array lines read null (the row stays silent - the v0.379.0
// precedent); non-string lines are skipped; an inconsistent book
// prices nothing (the fence law). Pure: reads, never mutates.
//
import { ARM_O2_RE } from './o2arm.mjs'
import { DROWN_CONTEXT_RE } from './o2gap.mjs'
import { parseSentryPass } from './sentry.mjs'

/**
 * The blind arm's own window book: every blind rescue start's own
 * window class folded from the bot's pass stream, with the fatal
 * blind arm's own split (the loss seat).
 *
 * @param {object|null} oab o2ArmBook's own fold (the fence's second
 *   witness - the arm book must have priced first)
 * @param {string[]} lines the face log (array - entrywindow's own
 *   fence; a raw blob reads null, the caller splits first)
 * @returns {{blindArms: number, classes: {open: number, spoke: number,
 *   unspoken: number}, depth: {count: number, min: number|null,
 *   max: number|null, sum: number}, deaths: number,
 *   fatal: {open: number, spoke: number, unspoken: number},
 *   perDeath: Object<string, {cls: string, depth: number|null}>,
 *   perBot: Object<string, {open: number, spoke: number, unspoken: number}>,
 *   arms: Array<{bot: string, cls: string, depth: number|null, fatal: boolean}>,
 *   armImage: {starts: number, blindArms: number, deaths: number,
 *   blindVerdicts: number, blindPerDeathBots: string[]}}|null}
 */
export function blindArmWindowBook (oab, lines) {
  if (!oab || typeof oab !== 'object') return null
  if (!Array.isArray(lines)) return null
  if (!Number.isInteger(oab.starts) || !Number.isInteger(oab.deaths) || oab.deaths <= 0) return null
  // the stream state: the run law's own counter (the window book's own
  // shape) + the spoke witness (the bot has spoken at least once)
  const stream = {}
  // the arm state: the latest start wins whole (line order); the death
  // resets (o2arm's own law)
  const armByBot = {}
  const classes = { open: 0, spoke: 0, unspoken: 0 }
  const perBot = {}
  const fatal = { open: 0, spoke: 0, unspoken: 0 }
  const arms = []
  const perDeath = {}
  const depth = { count: 0, min: null, max: null, sum: 0 }
  let starts = 0
  let blindArms = 0
  let deaths = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    // the pass stream first: the run law rides the line order
    const p = parseSentryPass(l)
    if (p && p.bot) {
      const s = stream[p.bot] || (stream[p.bot] = { run: 0, seen: false })
      if (p.o2 && p.o2.kind === 'reset') {
        s.run++
      } else {
        // numeric or unknown - the sensor spoke again (the window
        // closes; the unknown word closes too - the window law)
        s.run = 0
      }
      s.seen = true
      continue
    }
    const sm = ARM_O2_RE.exec(l)
    if (sm) {
      const bot = sm[1]
      const blind = sm[2] === '-1'
      starts++
      if (!blind) {
        // a numeric arm resets the bot's arm whole (the latest start
        // wins - a blind arm never survives a newer witnessed one)
        delete armByBot[bot]
        continue
      }
      blindArms++
      const s = stream[bot] || (stream[bot] = { run: 0, seen: false })
      let cls
      let d = null
      if (s.run >= 1) {
        cls = 'open'
        d = s.run
      } else if (s.seen) {
        cls = 'spoke'
      } else {
        cls = 'unspoken'
      }
      classes[cls]++
      perBot[bot] = perBot[bot] || { open: 0, spoke: 0, unspoken: 0 }
      perBot[bot][cls]++
      if (cls === 'open') {
        depth.count++
        depth.sum += d
        if (depth.min === null || d < depth.min) depth.min = d
        if (depth.max === null || d > depth.max) depth.max = d
      }
      const arm = { bot, cls, depth: d, fatal: false }
      arms.push(arm)
      armByBot[bot] = arm
      continue
    }
    const dm = DROWN_CONTEXT_RE.exec(l)
    if (!dm) continue
    deaths++
    const bot = dm[1]
    const arm = armByBot[bot] || null
    if (arm) {
      // the fatal blind seat: the arm's own fate recorded at the join
      // moment (the riders row reads the arms, the counts never do)
      arm.fatal = true
      fatal[arm.cls]++
      perDeath[bot] = { cls: arm.cls, depth: arm.depth }
      delete armByBot[bot]
    }
  }
  // the one-grammar law: two walks of one grammar must agree - a
  // mismatch names a forked reader and prices nothing (the fence law;
  // the arm book's own fold is the second witness)
  if (starts !== oab.starts) return null
  if (blindArms !== oab.blindArms) return null
  if (deaths !== oab.deaths) return null
  const blindVerdicts = (oab.verdicts && typeof oab.verdicts === 'object')
    ? oab.verdicts.blind
    : undefined
  if (!Number.isInteger(blindVerdicts)) return null
  if (fatal.open + fatal.spoke + fatal.unspoken !== blindVerdicts) return null
  const blindPerDeathBots = Object.keys(oab.perDeath || {})
    .filter((bot) => oab.perDeath[bot] && oab.perDeath[bot].band === 'blind')
    .sort()
  if (JSON.stringify(Object.keys(perDeath).sort()) !== JSON.stringify(blindPerDeathBots)) return null
  const cleanPerBot = {}
  for (const bot of Object.keys(perBot).sort()) cleanPerBot[bot] = perBot[bot]
  return {
    blindArms,
    classes,
    depth,
    deaths,
    fatal,
    perDeath,
    perBot: cleanPerBot,
    arms,
    armImage: {
      starts: oab.starts,
      blindArms: oab.blindArms,
      deaths: oab.deaths,
      blindVerdicts,
      blindPerDeathBots
    }
  }
}

/**
 * The fence: an inconsistent book prices nothing (the fence law). The
 * laws: the arm image agrees with the walk's own cells; the classes
 * sum to the blind arms; the perBot sums agree; the depth fold's own
 * image (the open arms' own re-fold - every open arm folds exactly
 * once, the cells ride the run's own bounds 1..N); the fatal marks'
 * count agrees with the fatal census; the perDeath keys agree with
 * the arm image's own blind bots.
 *
 * @param {object|null} [b] the blindArmWindowBook fold
 * @returns {boolean} true when the book may price
 */
export function blindArmWindowConsistent (b) {
  if (!b || typeof b !== 'object') return false
  if (!b.armImage || typeof b.armImage !== 'object') return false
  const img = b.armImage
  if (!Number.isInteger(img.starts) || !Number.isInteger(img.blindArms) ||
    !Number.isInteger(img.deaths) || !Number.isInteger(img.blindVerdicts)) return false
  if (b.blindArms !== img.blindArms) return false
  if (b.deaths !== img.deaths) return false
  if (!b.classes || typeof b.classes !== 'object') return false
  const clsSum = b.classes.open + b.classes.spoke + b.classes.unspoken
  if (clsSum !== b.blindArms) return false
  // the perBot sums agree (three ways)
  if (!b.perBot || typeof b.perBot !== 'object') return false
  let po = 0; let ps = 0; let pu = 0
  for (const v of Object.values(b.perBot)) {
    if (!v || typeof v !== 'object') return false
    po += v.open || 0; ps += v.spoke || 0; pu += v.unspoken || 0
  }
  if (po !== b.classes.open || ps !== b.classes.spoke || pu !== b.classes.unspoken) return false
  // the arms' own image: every blind arm rides once, the classes agree,
  // the fatal marks agree, the open arms' re-fold is the depth's own cell
  if (!Array.isArray(b.arms) || b.arms.length !== b.blindArms) return false
  const fd = { count: 0, min: null, max: null, sum: 0 }
  let marks = 0
  for (const a of b.arms) {
    if (!a || typeof a !== 'object') return false
    if (!(a.cls in b.classes)) return false
    if (a.cls === 'open') {
      if (!Number.isInteger(a.depth) || a.depth < 1) return false
      fd.count++
      fd.sum += a.depth
      if (fd.min === null || a.depth < fd.min) fd.min = a.depth
      if (fd.max === null || a.depth > fd.max) fd.max = a.depth
    } else if (a.depth !== null) return false
    if (a.fatal === true) marks++
  }
  if (marks !== b.fatal.open + b.fatal.spoke + b.fatal.unspoken) return false
  if (fd.count !== b.classes.open) return false
  if (b.classes.open > 0) {
    if (!b.depth || fd.count !== b.depth.count || fd.sum !== b.depth.sum ||
      fd.min !== b.depth.min || fd.max !== b.depth.max) return false
  } else {
    if (!b.depth || b.depth.count !== 0 || b.depth.sum !== 0 ||
      b.depth.min !== null || b.depth.max !== null) return false
  }
  // the fatal census: the counts sum to the arm book's own blind verdicts
  if (!b.fatal || typeof b.fatal !== 'object') return false
  if (b.fatal.open + b.fatal.spoke + b.fatal.unspoken !== img.blindVerdicts) return false
  // the perDeath keys agree with the arm image's own blind bots
  if (!b.perDeath || typeof b.perDeath !== 'object') return false
  if (JSON.stringify(Object.keys(b.perDeath).sort()) !== JSON.stringify(img.blindPerDeathBots)) return false
  return true
}

/**
 * The book's own row - one line, the fold's field read. The honest
 * null when the book is absent or inconsistent (a fold that cannot
 * prove itself prices nothing - the fence law).
 *
 * @param {object|null} [b] the blindArmWindowBook fold
 * @returns {string|null} the row byte, or null
 */
export function blindArmWindowRow (b) {
  if (!blindArmWindowConsistent(b)) return null
  const c = b.classes
  let depthByte
  if (c.open > 0) {
    depthByte = `the open arms' own window depth ${b.depth.min}..${b.depth.max} avg ${(b.depth.sum / b.depth.count).toFixed(1)} read(s)`
  } else {
    depthByte = 'no open arm rode'
  }
  // the strict-majority seat (the tie reads the spread)
  const seatEntries = Object.entries(c).sort((a, b2) => b2[1] - a[1] || (a[0] < b2[0] ? -1 : 1))
  const seatByte = seatEntries[0][1] * 2 > b.blindArms
    ? `arm window seat: ${seatEntries[0][0]} owns ${seatEntries[0][1]} of ${b.blindArms} (${((seatEntries[0][1] / b.blindArms) * 100).toFixed(1)}%)`
    : 'arm window seat: the spread is the shape (no strict majority)'
  const f = b.fatal
  const fatalByte = `the fatal blind arm: open ${f.open} / spoke ${f.spoke} / unspoken ${f.unspoken}`
  // the loss-first verdict (the fatal seat prices first)
  const fTotal = f.open + f.spoke + f.unspoken
  let verdictByte
  if (fTotal === 0) {
    verdictByte = 'no fatal blind arm - the loss seat stayed witnessed (the sensor\'s health held at the loss)'
  } else if (f.spoke > 0) {
    verdictByte = 'the fatal blind arm rode the stream\'s alive word - the cadence gap\'s own loss (the start is the death\'s first witness)'
  } else if (f.open > 0) {
    verdictByte = 'the fatal blind arm fired inside an open window - the window\'s own depth is the loss\'s own front'
  } else {
    verdictByte = 'the fatal blind arm rode unspoken - the stream cannot judge the loss'
  }
  return `the blind arm's own window book (v0.959.0): ${b.blindArms} blind arm(s) - open ${c.open} / spoke ${c.spoke} / unspoken ${c.unspoken} - ${depthByte} - ${seatByte} - ${fatalByte} - ${verdictByte}`
}

/**
 * The riders row - the blind arms' own window brackets (the house
 * bill idiom), line order (the truth); the fatal join's own mark
 * rides the arm it joined (the arm's own fate, recorded at the join
 * moment). The honest null when the book is absent or inconsistent.
 *
 * @param {object|null} [b] the blindArmWindowBook fold
 * @returns {string|null} the riders byte, or null
 */
export function blindArmWindowRidersRow (b) {
  if (!blindArmWindowConsistent(b)) return null
  const bits = b.arms.map((a) => {
    let byte
    if (a.cls === 'open') byte = `${a.bot} [window open - ${a.depth} read(s)${a.fatal ? ' - FATAL' : ''}]`
    else if (a.cls === 'spoke') byte = `${a.bot} [window spoke - the stream alive${a.fatal ? ' - FATAL' : ''}]`
    else byte = `${a.bot} [window unspoken${a.fatal ? ' - FATAL' : ''}]`
    return byte
  })
  return bits.length ? bits.join(' ') : null
}
