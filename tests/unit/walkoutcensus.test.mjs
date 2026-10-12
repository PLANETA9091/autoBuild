// (v0.437.0) THE WALK-OUT WITNESS LENS - unit pins. The enforcer's one
// line, parsed back through the fleet's own emitters (the ROUND-TRIP law:
// the test lines are BUILT by walkoutStallLine + walkoutEscalation - the
// parser can never drift from what the field actually prints).

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { walkoutStallLine, walkoutEscalation } from '../../src/lib/relogwalkout.mjs'
import { parseWalkoutStall, walkoutWitnessCensus } from '../../src/lib/walkoutcensus.mjs'

const line = (o) => walkoutStallLine({ tag: 'F10 [F10]', ...o })

test('walk-out witness: the round-trip law - rung 1 (the emitter builds the line, the parser reads it)', () => {
  const why = walkoutEscalation({ stage: 1 }).why
  const l = line({ displacement: 1.2, windowMs: 30000, why })
  assert.equal(l, 'F10 [F10] water: relog walk-out stalled (window 30s, 1.2 blocks of the 1.0 progress bar) - rung 1: the walk gates and stalls reset, the funnel admits fresh walks')
  assert.deepEqual(parseWalkoutStall(l), {
    bot: 'F10', windowS: 30, displacement: 1.2, progressBar: 1, rung: 1,
    why: 'the walk gates and stalls reset, the funnel admits fresh walks'
  })
})

test('walk-out witness: the unmeasured class rides null - never a zero lie', () => {
  const why = walkoutEscalation({ stage: 2 }).why
  const l = line({ displacement: null, windowMs: 30000, why })
  assert.match(l, /, displacement unmeasured\) - rung 2:/)
  const p = parseWalkoutStall(l)
  assert.equal(p.displacement, null)
  assert.equal(p.progressBar, null)
  assert.equal(p.rung, 2)
  assert.equal(p.windowS, 30)
})

test('walk-out witness: rung 3 - the shift exit named, the long prose tail consumed verbatim', () => {
  const why = walkoutEscalation({ stage: 3 }).why
  const l = line({ displacement: 0.4, windowMs: 45000, why })
  const p = parseWalkoutStall(l)
  assert.equal(p.rung, 3)
  assert.equal(p.why, 'the gates reset and the goal slot releases - the honest shift exit is named, the session loop owns the call (unwired: the relog loop-break and the attempt ceiling backstop it)')
})

test('walk-out witness: the junk battery - the neighbor lanes\' lines never parse', () => {
  const junk = [
    'F10 [F10] water: frozen client relog (the gate holds 30s; the fresh client walks the hazard-ledgered column out)', // the relog lane's own line
    'F10 [F10] walk: timeout after 8000ms',
    'F10 [F10] water: transit toward known land (oak_log) at [-134,413] d=3',
    'F10 water: relog walk-out stalled (window 30s, 1.2 blocks of the 3.0 progress bar) - rung 1: x', // no bracket tag
    'water: relog walk-out stalled (window 30s, 1.0 blocks of the 3.0 progress bar) - rung 1: x', // no tag at all
    'F10 [F10] water: relog walk-out verified (window 30s) - rung 1: x', // a different walk-out verdict shape
    null,
    7,
    undefined
  ]
  for (const j of junk) {
    assert.equal(parseWalkoutStall(j), null, `junk ${typeof j}`)
  }
})

test('walk-out witness: the hand-counted accumulation - the ladder reaching all three rungs', () => {
  const why1 = walkoutEscalation({ stage: 1 }).why
  const why2 = walkoutEscalation({ stage: 2 }).why
  const why3 = walkoutEscalation({ stage: 3 }).why
  const c = walkoutWitnessCensus([
    line({ tag: 'F10 [F10]', displacement: 1.2, windowMs: 30000, why: why1 }),
    line({ tag: 'F10 [F10]', displacement: 0.4, windowMs: 30000, why: why2 }),
    line({ tag: 'F10 [F10]', displacement: 0.4, windowMs: 45000, why: why3 }),
    line({ tag: 'F14 [F14]', displacement: 2.9, windowMs: 30000, why: why1 })
  ])
  assert.equal(c.windows.n, 4)
  assert.deepEqual(c.windows.byBot, { F10: 3, F14: 1 })
  assert.deepEqual(c.windows.byRung, { 1: 2, 2: 1, 3: 1 })
  assert.deepEqual(c.windows.windowS, { n: 4, min: 30, max: 45, sum: 135 })
  assert.deepEqual(c.windows.displacement, { n: 4, min: 0.4, max: 2.9, sum: 4.9, unmeasured: 0 })
  assert.equal(c.windows.barMax, 1)
  assert.equal(c.unparsed, 0)
})

test('walk-out witness: the unmeasured rows count separately and never enter the displacement series', () => {
  const why = walkoutEscalation({ stage: 1 }).why
  const c = walkoutWitnessCensus([
    line({ displacement: 0.8, windowMs: 30000, why }),
    line({ displacement: null, windowMs: 30000, why }),
    line({ displacement: null, windowMs: 30000, why })
  ])
  assert.equal(c.windows.n, 3)
  assert.equal(c.windows.displacement.unmeasured, 2)
  assert.deepEqual(c.windows.displacement, { n: 1, min: 0.8, max: 0.8, sum: 0.8, unmeasured: 2 })
})

test('walk-out witness: the escape hatch counts a walk-out-lane line the grammar refused', () => {
  const c = walkoutWitnessCensus(['F1 [F1] water: relog walk-out stalled (window junk, no numbers here)'])
  assert.equal(c.windows.n, 0)
  assert.equal(c.unparsed, 1)
})

test('walk-out witness: the honest zeros and the non-string input', () => {
  const c = walkoutWitnessCensus(['F1 [F1] heartbeat alive', 'nothing of ours'])
  assert.equal(c.windows.n, 0)
  assert.deepEqual(c.windows.byBot, {})
  assert.deepEqual(c.windows.byRung, {})
  assert.deepEqual(c.windows.windowS, { n: 0, min: null, max: null, sum: 0 })
  assert.deepEqual(c.windows.displacement, { n: 0, min: null, max: null, sum: 0, unmeasured: 0 })
  assert.equal(c.windows.barMax, null)
  assert.equal(c.unparsed, 0)
  const e = walkoutWitnessCensus('not an array')
  assert.equal(e.windows.n, 0)
  assert.equal(e.unparsed, 0)
})

test('walk-out witness: determinism - the same input reads the same census twice', () => {
  const why = walkoutEscalation({ stage: 1 }).why
  const rows = [line({ displacement: 1.2, windowMs: 30000, why })]
  const a = JSON.stringify(walkoutWitnessCensus(rows))
  const b = JSON.stringify(walkoutWitnessCensus(rows))
  assert.equal(a, b)
})

// (v0.968.0) THE DRIVE'S OWN LENS - the field instrument rides the same
// round-trip law: the lines are BUILT by walkoutDriveLine (the fleet's own
// emitter), parsed back by parseWalkoutDrive, folded by walkoutDriveCensus,
// and rendered by walkoutDriveRow. The lane isolation pins the vocabulary
// fence: the drive line must read FOREIGN to the witness stall lane (the
// witness's own census and its escape hatch), the relog counter, and the
// stall parser - one parser one truth, three lanes zero collisions.
import { walkoutDriveLine } from '../../src/lib/relogwalkout.mjs'
import { parseWalkoutDrive, walkoutDriveCensus, walkoutDriveRow } from '../../src/lib/walkoutcensus.mjs'

const dline = (o) => walkoutDriveLine({ tag: 'F10 [F10]', ...o })

test('walk-out drive lens: the round-trip law - the aimed line (the emitter builds, the parser reads)', () => {
  const l = dline({ aim: { x: -127, y: 50, z: 398 }, displacement: 0.4 })
  assert.equal(l, "F10 [F10] water: walk-out drive aims the held page's walk (0.4 blocks from the relog cell, goal [-127,50,398]) - the promise's own walker, the window judges")
  const p = parseWalkoutDrive(l)
  assert.equal(p.bot, 'F10')
  assert.equal(p.kind, 'aimed')
  assert.equal(p.displacement, 0.4)
  assert.deepEqual(p.goal, { x: -127, y: 50, z: 398 })
})

test('walk-out drive lens: the sealed line round-trips with goal null', () => {
  const l = dline({ aim: null, displacement: 0.6 })
  assert.equal(l, 'F10 [F10] water: walk-out drive finds no dry aim (0.6 blocks from the relog cell, the bounded ring reads sealed) - the promise waits, the ladder keeps its rungs')
  const p = parseWalkoutDrive(l)
  assert.equal(p.bot, 'F10')
  assert.equal(p.kind, 'sealed')
  assert.equal(p.displacement, 0.6)
  assert.equal(p.goal, null)
})

test('walk-out drive lens: the lane isolation - the drive line is foreign to every neighbor lane', () => {
  const l = dline({ aim: { x: 1, y: 50, z: 0 }, displacement: 0.2 })
  // the stall parser never claims the drive line
  assert.equal(parseWalkoutStall(l), null)
  // the witness census's escape hatch (its prefix gate demands 'relog
  // walk-out') never counts the drive line
  const c = walkoutWitnessCensus([l])
  assert.equal(c.windows.n, 0)
  assert.equal(c.unparsed, 0)
  // the drive census never claims the stall lines
  const stall = walkoutStallLine({ tag: 'F10 [F10]', displacement: 0.4, windowMs: 10000, why: walkoutEscalation({ stage: 1 }).why })
  assert.equal(parseWalkoutDrive(stall), null)
  const dc = walkoutDriveCensus([stall])
  assert.equal(dc, null)
})

test('walk-out drive lens: the census folds the mixed face (byBot, displacement, aimedGoals)', () => {
  const rows = [
    dline({ aim: { x: 1, y: 50, z: 0 }, displacement: 0.1 }),
    dline({ aim: null, displacement: 0.6 }),
    dline({ tag: 'F1 [F1]', aim: { x: -3, y: 51, z: 2 }, displacement: 0.4 })
  ]
  const c = walkoutDriveCensus(rows)
  assert.equal(c.drives.n, 3)
  assert.equal(c.drives.aimed, 2)
  assert.equal(c.drives.sealed, 1)
  assert.deepEqual(c.drives.byBot, { F10: 2, F1: 1 })
  assert.equal(c.displacement.n, 3)
  assert.equal(c.displacement.min, 0.1)
  assert.equal(c.displacement.max, 0.6)
  assert.equal(c.displacement.sum, 1.1)
  assert.equal(c.aimedGoals, 2)
})

test('walk-out drive lens: the row rides byte-exact, the honest silences hold', () => {
  const c = walkoutDriveCensus([
    dline({ aim: { x: 1, y: 50, z: 0 }, displacement: 0.1 }),
    dline({ aim: null, displacement: 0.6 })
  ])
  assert.equal(
    walkoutDriveRow(c),
    "the walk-out drive's own read (v0.968.0): 2 drive(s), 1 aimed / 1 sealed, the displacement at the drive 0.1..0.6 blocks; 1 sealed ring(s) - the aim never invents a walk it cannot see - the promise's first walker rode the hold; the stall rate prices the cure on the next read"
  )
  // the all-aimed face: no sealed clause
  const c2 = walkoutDriveCensus([dline({ aim: { x: 1, y: 50, z: 0 }, displacement: 0.2 })])
  assert.equal(
    walkoutDriveRow(c2),
    "the walk-out drive's own read (v0.968.0): 1 drive(s), 1 aimed / 0 sealed, the displacement at the drive 0.2..0.2 blocks - the promise's first walker rode the hold; the stall rate prices the cure on the next read"
  )
  // the honest silences: a drive-free face reads null, junk reads null
  assert.equal(walkoutDriveCensus(['F1 [F1] heartbeat alive']), null)
  assert.equal(walkoutDriveCensus('not an array'), null)
  assert.equal(walkoutDriveCensus(null), null)
  assert.equal(walkoutDriveRow(null), null)
  assert.equal(walkoutDriveRow({ drives: { n: 0, aimed: 0, sealed: 0 }, displacement: { n: 0 } }), null)
  assert.equal(walkoutDriveRow({ drives: 'junk', displacement: 'junk' }), null)
})

test('walk-out drive lens: determinism - the same input reads the same census twice', () => {
  const rows = [dline({ aim: { x: 1, y: 50, z: 0 }, displacement: 0.3 }), dline({ aim: null, displacement: 0.5 })]
  const a = JSON.stringify(walkoutDriveCensus(rows))
  const b = JSON.stringify(walkoutDriveCensus(rows))
  assert.equal(a, b)
})
