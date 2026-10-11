//
// blindarmwindow.test.mjs - THE BLIND ARM'S OWN WINDOW SEAT's own
// battery (v0.959.0)
//
// The live shapes ride first (the face-215 verbatim battery): F5's
// three blind arms (spoke / spoke / open-1) and F9's three (spoke /
// open-1 / spoke) - the arm's -1 byte PRECEDES its window's first
// blind read when the sensor died between the pass and the start.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

import { o2ArmBook } from '../../src/lib/o2arm.mjs'
import { o2Gap } from '../../src/lib/o2gap.mjs'
import { blindArmWindowBook, blindArmWindowConsistent, blindArmWindowRow, blindArmWindowRidersRow } from '../../src/lib/blindarmwindow.mjs'

// the pass line - the emitter's exact grammar (sentry's own)
const pass = (bot, n, o2) => `${bot} [${bot}] water: pass ${n} head=wet shore=none land=n/a y=48.0 o2=${o2} probes=0 at=[-122,48,398]`
// the start line - the arm book's own grammar
const start = (bot, o2) => `${bot} [${bot}] water: drowning rescue start (drowning, oxygen ${o2})`
// the death line - o2gap's own grammar
const ctx = (bot) => `${bot} [${bot}] death: drown context (o2 reset(-1), feet water, head water, rescue never, leg approach segment, wet 23s)`

test('THE FACE-215 VERBATIM BATTERY: F5 spoke, spoke, open-1 - the sensor died between the pass and the start', () => {
  // the stream's own words (line order): alive reads, then the blind
  // arms ride BETWEEN the last alive read and the window's first blind
  // read - the arm book's own blind byte, the window book's own run law
  const lines = [
    pass('F5', 0, 14),
    pass('F5', 7, 7),
    pass('F5', 0, 4),          // the last alive word before the first arm
    start('F5', '-1'),         // arm 1: the stream's last word alive -> spoke
    pass('F5', 0, 'reset(-1)'),// the window opens AFTER the start
    pass('F5', 5, 0),          // the window closes (the sensor spoke)
    start('F5', '-1'),         // arm 2: the last word alive (0) -> spoke
    pass('F5', 0, 'reset(-1)'),// the window opens
    start('F5', '-1'),         // arm 3: the window open, run 1 -> open depth 1
    pass('F5', 0, 'reset(-1)'),// the run grows (never joins the arm)
    ctx('F5')                  // the loss line: the latest arm (open-1) joins fatal
  ]
  const oab = o2ArmBook(o2Gap(lines), lines)
  assert.ok(oab, 'the arm book prices first')
  const b = blindArmWindowBook(oab, lines)
  assert.ok(b, 'the window seat prices')
  assert.equal(b.blindArms, 3)
  assert.deepEqual(b.classes, { open: 1, spoke: 2, unspoken: 0 })
  assert.deepEqual(b.depth, { count: 1, min: 1, max: 1, sum: 1 })
  assert.equal(b.arms[0].cls, 'spoke')
  assert.equal(b.arms[1].cls, 'spoke')
  assert.equal(b.arms[2].cls, 'open')
  assert.equal(b.arms[2].depth, 1)
  assert.equal(b.arms[2].fatal, true, 'the loss line joins the latest arm')
  assert.deepEqual(b.fatal, { open: 1, spoke: 0, unspoken: 0 })
  assert.equal(blindArmWindowConsistent(b), true)
})

test('THE FACE-215 VERBATIM BATTERY: F9 spoke, open-1, spoke - the window closes and reopens between arms', () => {
  const lines = [
    pass('F9', 0, 13),
    pass('F9', 6, 9),
    pass('F9', 14, 6),
    pass('F9', 0, 2),          // the last alive word
    start('F9', '-1'),         // arm 1: spoke
    pass('F9', 0, 'reset(-1)'),// window opens
    start('F9', '-1'),         // arm 2: open depth 1
    pass('F9', 0, 'reset(-1)'),// run grows
    pass('F9', 2, 0),          // closes
    pass('F9', 0, 0),          // alive again
    start('F9', '-1'),         // arm 3: spoke (the window closed)
    pass('F9', 0, 'reset(-1)'),
    ctx('F9')                  // the loss line joins the latest arm (spoke)
  ]
  const oab = o2ArmBook(o2Gap(lines), lines)
  const b = blindArmWindowBook(oab, lines)
  assert.deepEqual(b.classes, { open: 1, spoke: 2, unspoken: 0 })
  assert.deepEqual(b.perBot.F9, { open: 1, spoke: 2, unspoken: 0 })
  assert.equal(b.arms[2].cls, 'spoke', 'the numeric read closed the window - the third arm rode spoke again')
  assert.deepEqual(b.fatal, { open: 0, spoke: 1, unspoken: 0 })
})

test('THE UNSPOKEN CLASS: no pass read before the arm - the stream cannot judge', () => {
  const lines = [
    pass('F2', 0, 20),   // another bot's stream only
    start('F7', '-1'),   // F7 never spoke
    ctx('F2')            // another bot's loss (F7's arm stays non-fatal)
  ]
  const oab = o2ArmBook(o2Gap(lines), lines)
  const b = blindArmWindowBook(oab, lines)
  assert.equal(b.blindArms, 1)
  assert.deepEqual(b.classes, { open: 0, spoke: 0, unspoken: 1 })
  assert.equal(b.arms[0].cls, 'unspoken')
  assert.deepEqual(b.fatal, { open: 0, spoke: 0, unspoken: 0 })
})

test('THE RUN LAW INHERITED: two consecutive blind reads deepen the window; a reopen resets the depth', () => {
  const lines = [
    pass('F1', 0, 'reset(-1)'),
    pass('F1', 1, 'reset(-1)'),
    start('F1', '-1'),         // open depth 2
    pass('F1', 2, 9),          // closes
    pass('F1', 3, 'reset(-1)'),// a NEW window opens
    start('F1', '-1'),         // open depth 1 (the new window's own count)
    ctx('F2')                  // another bot's loss (the arms stay non-fatal)
  ]
  const oab = o2ArmBook(o2Gap(lines), lines)
  const b = blindArmWindowBook(oab, lines)
  assert.deepEqual(b.classes, { open: 2, spoke: 0, unspoken: 0 })
  assert.deepEqual(b.depth, { count: 2, min: 1, max: 2, sum: 3 })
  assert.deepEqual(b.fatal, { open: 0, spoke: 0, unspoken: 0 })
})

test('THE JOIN LAW: the latest arm joins the death; the death resets; the fatal mark rides the arm it joined', () => {
  const lines = [
    pass('F1', 0, 20),
    start('F1', '-1'),   // arm 1: spoke
    ctx('F1'),           // death 1: joins arm 1 (spoke, FATAL)
    ctx('F1'),           // death 2: no arm since the reset - unarmed (no fatal)
    pass('F1', 1, 'reset(-1)'),
    start('F1', '-1'),   // arm 2: open depth 1
    ctx('F1')            // death 3: joins arm 2 (open, FATAL)
  ]
  const oab = o2ArmBook(o2Gap(lines), lines)
  assert.equal(oab.verdicts.blind, 2, 'the arm book prices two fatal blind arms')
  const b = blindArmWindowBook(oab, lines)
  assert.deepEqual(b.fatal, { open: 1, spoke: 1, unspoken: 0 })
  assert.equal(b.arms[0].fatal, true, 'the first arm\'s own fate recorded at the join')
  assert.equal(b.arms[1].fatal, true)
  assert.equal(b.perDeath.F1.cls, 'open', 'the perDeath map stays last-wins (the house wart)')
  assert.equal(b.deaths, 3)
})

test('THE LATEST-START LAW: a witnessed arm resets a blind arm whole (a blind arm never survives a newer one)', () => {
  const lines = [
    pass('F3', 0, 'reset(-1)'),
    start('F3', '-1'),  // blind arm (open depth 1)
    start('F3', '8'),   // a numeric arm - the blind arm never joins
    ctx('F3')           // the death joins the NUMERIC arm - no fatal blind
  ]
  const oab = o2ArmBook(o2Gap(lines), lines)
  assert.equal(oab.verdicts.blind, 0)
  assert.equal(oab.verdicts.band, 1)
  const b = blindArmWindowBook(oab, lines)
  assert.equal(b.blindArms, 1)
  assert.deepEqual(b.fatal, { open: 0, spoke: 0, unspoken: 0 })
  assert.deepEqual(Object.keys(b.perDeath), [])
})

test('THE FENCE: the arm book must have priced; a walk that disagrees prices nothing', () => {
  const lines = [
    pass('F1', 0, 20),
    start('F1', '-1'),
    ctx('F1')
  ]
  const oab = o2ArmBook(o2Gap(lines), lines)
  // the honest book
  assert.ok(blindArmWindowBook(oab, lines))
  // no arm book - nothing prices
  assert.equal(blindArmWindowBook(null, lines), null)
  // no lines - nothing prices
  assert.equal(blindArmWindowBook(oab, 'not an array'), null)
  // zero deaths in the arm book - nothing prices (the v0.379.0 silence)
  const noDeath = ['junk line']
  assert.equal(blindArmWindowBook(o2ArmBook(o2Gap(noDeath), noDeath), noDeath), null)
  // a FORKED walk (the lines mutated after the arm book priced) - the
  // fence catches the disagreement
  const forked = [...lines, start('F2', '-1')]
  assert.equal(blindArmWindowBook(oab, forked), null, 'the starts disagree - a forked reader caught')
  // the death count disagrees
  const noCtxLines = [pass('F1', 0, 20), start('F1', '-1')]
  const noCtxOab = o2ArmBook(o2Gap(noCtxLines), noCtxLines)
  assert.equal(blindArmWindowBook(noCtxOab, lines), null, 'the arm book absent prices nothing')
  // a lying armImage prices nothing
  const b = blindArmWindowBook(oab, lines)
  assert.equal(blindArmWindowConsistent({ ...b, blindArms: 99 }), false)
  assert.equal(blindArmWindowConsistent({ ...b, armImage: { ...b.armImage, blindVerdicts: 5 } }), false)
  assert.equal(blindArmWindowConsistent({ ...b, classes: { open: 0, spoke: 2, unspoken: 0 } }), false)
  // the depth lie needs an open arm (an open-0 book's zero depth is the
  // honest zero): the open book's depth zeroed is the lie the fence catches
  const openLines = [pass('F1', 0, 'reset(-1)'), start('F1', '-1'), ctx('F1')]
  const openB = blindArmWindowBook(o2ArmBook(o2Gap(openLines), openLines), openLines)
  assert.equal(blindArmWindowConsistent({ ...openB, depth: { count: 0, min: null, max: null, sum: 0 } }), false)
  assert.equal(blindArmWindowConsistent({ ...b, fatal: { open: 0, spoke: 0, unspoken: 0 } }), false)
  assert.equal(blindArmWindowConsistent({ ...b, arms: [] }), false)
  assert.equal(blindArmWindowConsistent({ ...b, perDeath: {} }), false)
  assert.equal(blindArmWindowConsistent({ ...b, perBot: {} }), false)
  assert.equal(blindArmWindowConsistent(null), false)
  // an open arm with a non-positive depth is a lie
  assert.equal(blindArmWindowConsistent({ ...b, arms: [{ ...b.arms[0], cls: 'open', depth: 0 }] }), false)
  // a spoke arm carrying a depth is a lie
  assert.equal(blindArmWindowConsistent({ ...b, arms: [{ ...b.arms[0], depth: 2 }] }), false)
  // the DEATHS disagree (the walked lines own two deaths, the arm book one)
  const dOab = o2ArmBook(o2Gap(lines), lines)
  const dWalk = [...lines, ctx('F1')]
  assert.equal(blindArmWindowBook(dOab, dWalk), null, 'the deaths disagree')
})

test('THE ROW: the book byte reads the fold; the verdict rides the loss seat first', () => {
  // the fatal-spoke verdict (the cadence gap's own loss)
  const spokeLines = [
    pass('F1', 0, 20),
    start('F1', '-1'),
    ctx('F1')
  ]
  const spokeB = blindArmWindowBook(o2ArmBook(o2Gap(spokeLines), spokeLines), spokeLines)
  const spokeRow = blindArmWindowRow(spokeB)
  assert.ok(spokeRow.includes('the blind arm\'s own window book (v0.959.0)'), 'the lib byte rides the row')
  assert.ok(spokeRow.includes('open 0 / spoke 1 / unspoken 0'))
  assert.ok(spokeRow.includes('arm window seat: spoke owns 1 of 1 (100.0%)'))
  assert.ok(spokeRow.includes('the fatal blind arm: open 0 / spoke 1 / unspoken 0'))
  assert.ok(spokeRow.includes('the cadence gap\'s own loss'), 'the loss-first verdict')
  // the fatal-open verdict
  const openLines = [
    pass('F1', 0, 'reset(-1)'),
    start('F1', '-1'),
    ctx('F1')
  ]
  const openB = blindArmWindowBook(o2ArmBook(o2Gap(openLines), openLines), openLines)
  assert.ok(blindArmWindowRow(openB).includes('the window\'s own depth is the loss\'s own front'))
  // the no-fatal byte (the honest null; another bot's death lets the
  // arm book price - its own fence needs a death)
  const calmLines = [
    pass('F1', 0, 20),
    start('F1', '-1'),
    ctx('F2')
  ]
  const calmB = blindArmWindowBook(o2ArmBook(o2Gap(calmLines), calmLines), calmLines)
  assert.ok(blindArmWindowRow(calmB).includes('no fatal blind arm - the loss seat stayed witnessed'))
  // the spread seat (the tie owns nothing)
  const tieLines = [
    pass('F1', 0, 20),
    start('F1', '-1'),          // spoke
    pass('F1', 1, 'reset(-1)'),
    start('F1', '-1'),          // open
    ctx('F1')                   // one fatal (open)
  ]
  const tieB = blindArmWindowBook(o2ArmBook(o2Gap(tieLines), tieLines), tieLines)
  assert.ok(blindArmWindowRow(tieB).includes('arm window seat: the spread is the shape (no strict majority)'))
  // the inconsistent book prices nothing
  assert.equal(blindArmWindowRow(null), null)
  assert.equal(blindArmWindowRow({ ...spokeB, blindArms: 7 }), null)
  // the depth byte rides the open arms' own cells
  const depthRow = blindArmWindowRow(openB)
  assert.ok(depthRow.includes('the open arms\' own window depth 1..1 avg 1.0 read(s)'))
})

test('THE RIDERS ROW: the arms\' own brackets in line order, the FATAL mark rides the joined arm', () => {
  const lines = [
    pass('F1', 0, 20),
    start('F1', '-1'),          // arm 1: spoke
    pass('F1', 1, 'reset(-1)'),
    start('F1', '-1'),          // arm 2: open depth 1
    ctx('F1')                   // joins arm 2 (the latest arm wins)
  ]
  const b = blindArmWindowBook(o2ArmBook(o2Gap(lines), lines), lines)
  const row = blindArmWindowRidersRow(b)
  assert.equal(row, 'F1 [window spoke - the stream alive] F1 [window open - 1 read(s) - FATAL]')
  // the unspoken bracket (another bot's death lets the arm book price
  // - its own fence needs a death - while F4's arm stays non-fatal)
  const uLines = [start('F4', '-1'), ctx('F5')]
  const uB = blindArmWindowBook(o2ArmBook(o2Gap(uLines), uLines), uLines)
  assert.equal(blindArmWindowRidersRow(uB), 'F4 [window unspoken]')
  // the inconsistent book prices nothing
  assert.equal(blindArmWindowRidersRow(null), null)
  assert.equal(blindArmWindowRidersRow({ ...b, fatal: { open: 0, spoke: 0, unspoken: 0 } }), null)
})

test('THE PROSE STAYS IN THE LIB (the decompose rides the row, never the prose)', () => {
  const libSrc = readFileSync(new URL('../../src/lib/blindarmwindow.mjs', import.meta.url), 'utf8')
  assert.ok(libSrc.includes('THE CADENCE GAP\'S OWN ARM'), 'the cadence gap rides the lib')
  const decSrc = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(!decSrc.includes("THE CADENCE GAP'S OWN ARM - the sensor died between the pass"), 'the prose stays in the lib')
})

test('THE ONE-PARSER LAW: the grammars live once (the lib imports, never re-spells)', () => {
  const libSrc = readFileSync(new URL('../../src/lib/blindarmwindow.mjs', import.meta.url), 'utf8')
  assert.ok(libSrc.includes("import { ARM_O2_RE } from './o2arm.mjs'"), 'the arm grammar imports once')
  assert.ok(libSrc.includes("import { DROWN_CONTEXT_RE } from './o2gap.mjs'"), 'the death grammar imports once')
  assert.ok(libSrc.includes("import { parseSentryPass } from './sentry.mjs'"), 'the pass grammar imports once')
  assert.equal(/ARM_O2_RE\s*=/.test(libSrc), false, 'the arm RE never re-spells')
  assert.equal(/DROWN_CONTEXT_RE\s*=/.test(libSrc), false, 'the death RE never re-spells')
  assert.equal(/SENTRY_PASS_RE\s*=/.test(libSrc), false, 'the pass RE never re-spells')
})

test('WIRING: the decompose rides the window seat beside the arm book (the v0.959.0 block)', () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.equal(/import \{ blindArmWindowBook, blindArmWindowRow, blindArmWindowRidersRow \} from '\.\.\/\.\.\/src\/lib\/blindarmwindow\.mjs'/.test(src), true, 'the import band rides')
  assert.equal(/const baw = blindArmWindowBook\(oab, lines\)/.test(src), true, 'the fold rides the arm book')
  assert.equal(/console\.log\(`  \$\{blindArmWindowRow\(baw\)\}`\)/.test(src), true, 'the row rides')
  assert.equal(/const bwr = blindArmWindowRidersRow\(baw\)/.test(src), true, 'the riders ride')
  // the block rides AFTER the arm book's own block (the o2 windows meet here)
  const oabAt = src.indexOf('const oab = o2ArmBook(o2g, lines)')
  const bawAt = src.indexOf('const baw = blindArmWindowBook(oab, lines)')
  assert.ok(oabAt > -1 && bawAt > oabAt, 'the seat rides beside (after) the arm book')
})
