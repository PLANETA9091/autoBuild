// (v0.425.0) THE RELOG WALK-OUT ENFORCER's tests - the frozen-after-relog
// detector. The shapes are the face-36864564525 F10 lane's own (three
// consecutive frozen-while-head-wet relogs on one water column, o2=20, the
// fresh client re-paged wet and froze again). The thresholds are NOT this
// file's inventions: the window is frozenReturnGate's laddered hold (the
// budget the relog line itself announces) and the progress bar is the walk
// layer's own STALL_MIN_PROGRESS - both pins ride the tests so the one-law
// identity can never silently drift.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  RELOG_WALKOUT_MIN_PROGRESS,
  walkoutWindowMs, walkoutDisplacement, walkoutVerdict, walkoutEscalation, walkoutStallLine,
  walkoutAimCell, walkoutDriveLine
} from '../../src/lib/relogwalkout.mjs'
import { frozenReturnGate } from '../../src/lib/drowning.mjs'
import { STALL_MIN_PROGRESS } from '../../src/lib/walkgovernor.mjs'

const minerSrc = readFileSync(new URL('../../src/bots/miner.mjs', import.meta.url), 'utf8')

test('relog walk-out: the window IS the frozen-return gate ladder (the code owns the budget)', () => {
  // the gate's own rungs: 10s / 20s / 40s, capped at 60s - the walk-out
  // witness reads the SAME numbers the relog line prints, never a new one
  assert.equal(walkoutWindowMs({ consecutiveRelogs: 0 }), 0)
  assert.equal(walkoutWindowMs({ consecutiveRelogs: 1 }), 10000)
  assert.equal(walkoutWindowMs({ consecutiveRelogs: 2 }), 20000)
  assert.equal(walkoutWindowMs({ consecutiveRelogs: 3 }), 40000)
  assert.equal(walkoutWindowMs({ consecutiveRelogs: 4 }), 60000)
  assert.equal(walkoutWindowMs({ consecutiveRelogs: 9 }), 60000)
  // the identity holds across the whole domain, junk included
  for (const n of [0, 1, 2, 3, 4, 5, 12, 'junk', NaN, null, undefined]) {
    assert.equal(walkoutWindowMs({ consecutiveRelogs: n }), frozenReturnGate({ consecutiveRelogs: n }))
  }
})

test('relog walk-out: the progress bar IS the walk layer stall bar (one law, one number)', () => {
  assert.equal(RELOG_WALKOUT_MIN_PROGRESS, STALL_MIN_PROGRESS)
  assert.equal(RELOG_WALKOUT_MIN_PROGRESS, 1.0)
})

test('relog walk-out: displacement is pure euclidean, junk reads unmeasured', () => {
  // the 3-4-5 triangle across the axes
  assert.equal(walkoutDisplacement({ x: 0, y: 0, z: 0 }, { x: 3, y: 4, z: 0 }), 5)
  // the F10 shape: the fresh client back into the same column - zero drift
  const col = { x: -131, y: 49.4, z: 414 }
  assert.equal(walkoutDisplacement(col, col), 0)
  assert.ok(walkoutDisplacement(col, { x: -131, y: 50.2, z: 414 }) > 0)
  assert.ok(walkoutDisplacement(col, { x: -131, y: 50.2, z: 414 }) < 1)
  // junk never judges: missing points, NaN axes, garbage shapes
  assert.equal(walkoutDisplacement(null, col), null)
  assert.equal(walkoutDisplacement(col, null), null)
  assert.equal(walkoutDisplacement(undefined, undefined), null)
  assert.equal(walkoutDisplacement({ x: NaN, y: 1, z: 1 }, col), null)
  assert.equal(walkoutDisplacement(col, { x: 1, y: undefined, z: 1 }), null)
  assert.equal(walkoutDisplacement('junk', 42), null)
})

test('relog walk-out: verdict classes - walked-out at the bar, stalled under, unmeasured on junk', () => {
  // the boundary rides >= : exactly the bar is real movement (the governor's
  // own progress law - a 1.0-block displacement clears its churn streak)
  assert.equal(walkoutVerdict({ displacement: RELOG_WALKOUT_MIN_PROGRESS }), 'walked-out')
  assert.equal(walkoutVerdict({ displacement: 1.5 }), 'walked-out')
  assert.equal(walkoutVerdict({ displacement: 24.7 }), 'walked-out')
  // the stalled class: the column held the bot
  assert.equal(walkoutVerdict({ displacement: 0 }), 'stalled')
  assert.equal(walkoutVerdict({ displacement: 0.2 }), 'stalled')
  assert.equal(walkoutVerdict({ displacement: 0.99 }), 'stalled')
  // the honest zero: a lost read escalates nothing
  assert.equal(walkoutVerdict({ displacement: null }), 'unmeasured')
  assert.equal(walkoutVerdict({ displacement: NaN }), 'unmeasured')
  assert.equal(walkoutVerdict({ displacement: 'junk' }), 'unmeasured')
  assert.equal(walkoutVerdict({}), 'unmeasured')
})

test('relog walk-out: the escalation ladder - rung 1 gates, rung 2 + goal, rung 3 names the shift exit', () => {
  const r1 = walkoutEscalation({ stage: 1 })
  assert.equal(r1.stage, 1)
  assert.equal(r1.resetGates, true)
  assert.equal(r1.releaseGoal, false)
  assert.equal(r1.shiftExitNamed, false)
  assert.ok(r1.why.includes('gates'))

  const r2 = walkoutEscalation({ stage: 2 })
  assert.equal(r2.stage, 2)
  assert.equal(r2.resetGates, true)
  assert.equal(r2.releaseGoal, true)
  assert.equal(r2.shiftExitNamed, false)
  assert.ok(r2.why.includes('goal slot'))

  const r3 = walkoutEscalation({ stage: 3 })
  assert.equal(r3.stage, 3)
  assert.equal(r3.resetGates, true)
  assert.equal(r3.releaseGoal, true)
  assert.equal(r3.shiftExitNamed, true)
  assert.ok(r3.why.includes('shift exit'))
  // the rung named (iii) is the ESCAPE HATCH: the session loop owns the call
  assert.ok(r3.why.includes('unwired'))

  // the ladder caps at the named exit - a fourth stalled window is still
  // rung 3 (the session loop's jurisdiction, not a new mechanism)
  const r4 = walkoutEscalation({ stage: 4 })
  assert.equal(r4.stage, 3)
  assert.equal(r4.shiftExitNamed, true)
  const r99 = walkoutEscalation({ stage: 99 })
  assert.equal(r99.stage, 3)
  assert.equal(r99.shiftExitNamed, true)
})

test('relog walk-out: junk stage never invents a deeper rung (the gates-decide convention)', () => {
  for (const s of [NaN, null, undefined, 'junk', -3, 0]) {
    const e = walkoutEscalation({ stage: s })
    assert.equal(e.stage, 1)
    assert.equal(e.resetGates, true)
    assert.equal(e.releaseGoal, false)
    assert.equal(e.shiftExitNamed, false)
  }
  assert.deepEqual(walkoutEscalation({}).stage, 1)
})

test('relog walk-out: the stall line carries the numbers and stays OUT of the relog counter lane', () => {
  const line = walkoutStallLine({
    tag: '[F10]',
    displacement: 0.2,
    windowMs: 10000,
    why: walkoutEscalation({ stage: 1 }).why
  })
  assert.equal(
    line,
    '[F10] water: relog walk-out stalled (window 10s, 0.2 blocks of the 1.0 progress bar) - rung 1: the walk gates and stalls reset, the funnel admits fresh walks'
  )
  // the decompose relog counter counts /frozen client relog/ - this line is
  // NOT one (the v0.361.0 loop-break line's wording law, one lane deeper)
  assert.ok(!/frozen client relog/.test(line))
  // the decompose gate-hold counter counts /frozen-return gate holds/ - not ours either
  assert.ok(!/frozen-return gate holds/.test(line))
})

test('relog walk-out: the stall line renders honest reads for unmeasured and junk windows', () => {
  const unmeasured = walkoutStallLine({
    tag: '[F12]',
    displacement: null,
    windowMs: 20000,
    why: walkoutEscalation({ stage: 2 }).why
  })
  assert.ok(unmeasured.includes('displacement unmeasured'))
  assert.ok(unmeasured.includes('window 20s'))
  assert.ok(unmeasured.startsWith('[F12] water: relog walk-out stalled'))

  // a junk window renders 0s - the shape never lies about what it read
  const junk = walkoutStallLine({ tag: '[F3]', displacement: 0, windowMs: 'junk', why: 'x' })
  assert.ok(junk.includes('window 0s, 0.0 blocks'))
})

test('relog walk-out: the F10 synthetic - three relog cycles ratchet the ladder, a real walk-out forgives', () => {
  // the F10 lane's pure shadow: same column every relog, zero displacement
  // every window - the ladder must climb rung by rung, never skip, never loop
  const col = { x: -131, y: 49.4, z: 414 }
  let stage = 0
  const rungs = []
  for (let cycle = 0; cycle < 3; cycle++) {
    const windowMs = walkoutWindowMs({ consecutiveRelogs: cycle + 1 })
    assert.ok(windowMs > 0) // the gate armed a real window each time
    const displacement = walkoutDisplacement(col, col) // the client froze in place
    const verdict = walkoutVerdict({ displacement })
    assert.equal(verdict, 'stalled')
    stage += 1
    const esc = walkoutEscalation({ stage })
    rungs.push(esc)
  }
  assert.deepEqual(rungs.map(r => r.stage), [1, 2, 3])
  assert.deepEqual(rungs.map(r => r.releaseGoal), [false, true, true])
  assert.equal(rungs[2].shiftExitNamed, true)

  // the relief shape: the work loop finally walks the bot out (>= the bar)
  // - the witness stands down and the honest completion resets the stage
  const walked = walkoutVerdict({ displacement: walkoutDisplacement(col, { x: -129, y: 49.9, z: 415 }) })
  assert.equal(walked, 'walked-out')
  assert.equal(walkoutDisplacement(col, { x: -129, y: 49.9, z: 415 }) >= RELOG_WALKOUT_MIN_PROGRESS, true)
})

// (v0.968.0) THE WALK-OUT'S OWN WALK - the drive's pure aim law. The field
// priced the hole (face 239: four windows, all stalled at 0.1-0.6 of the
// 1.0 bar): the hold's own line promises the walk and nothing aims it. The
// aim law's tests ride a synthetic world map (the wiring's bot.blockAt
// shape: {name, boundingBox} or null) - water's real boundingBox IS 'empty'
// in mineflayer, which is exactly why the dry law rides isWaterName on top
// of the standGoalNear shape (the bounding box alone would seat the bot in
// the flood).

test('walk-out drive: the aim finds the nearest dry standable ring seat (level first)', () => {
  // the bot relogged INTO the column at [0,50,0]; the east neighbor is dry:
  // ground stone at [1,49,0], air feet [1,50,0], air head [1,51,0]
  const world = new Map([
    ['1,49,0', { name: 'stone', boundingBox: 'block' }],
    ['1,50,0', { name: 'air', boundingBox: 'empty' }],
    ['1,51,0', { name: 'air', boundingBox: 'empty' }],
    // the bot's own column: water at the feet and the head
    ['0,50,0', { name: 'water', boundingBox: 'empty' }],
    ['0,51,0', { name: 'water', boundingBox: 'empty' }],
    ['0,49,0', { name: 'stone', boundingBox: 'block' }]
  ])
  const rc = (x, y, z) => world.get(`${x},${y},${z}`) ?? { name: 'air', boundingBox: 'empty' }
  const iw = (n) => n === 'water'
  const aim = walkoutAimCell({ x: 0, y: 50, z: 0 }, rc, iw)
  assert.deepEqual(aim, { x: 1, y: 50, z: 0 })
})

test('walk-out drive: the dry law - a water-named cell refuses even with an empty bounding box', () => {
  // THE TRAP the law exists for: water reads boundingBox 'empty', so the
  // standGoalNear shape alone would seat the aim inside the flood. The east
  // cell is water at the feet; the west cell is dry - the aim must skip east.
  const world = new Map([
    // east: water at the feet (boundingBox empty), stone below
    ['1,49,0', { name: 'stone', boundingBox: 'block' }],
    ['1,50,0', { name: 'water', boundingBox: 'empty' }],
    ['1,51,0', { name: 'air', boundingBox: 'empty' }],
    // west: dry and standable
    ['-1,49,0', { name: 'stone', boundingBox: 'block' }],
    ['-1,50,0', { name: 'air', boundingBox: 'empty' }],
    ['-1,51,0', { name: 'air', boundingBox: 'empty' }]
  ])
  const rc = (x, y, z) => world.get(`${x},${y},${z}`) ?? { name: 'air', boundingBox: 'empty' }
  const iw = (n) => n === 'water'
  assert.deepEqual(walkoutAimCell({ x: 0, y: 50, z: 0 }, rc, iw), { x: -1, y: 50, z: 0 })
  // the head-water variant: feet dry, head water - still refused
  const world2 = new Map([
    ['1,49,0', { name: 'stone', boundingBox: 'block' }],
    ['1,50,0', { name: 'air', boundingBox: 'empty' }],
    ['1,51,0', { name: 'water', boundingBox: 'empty' }],
    ['-1,49,0', { name: 'stone', boundingBox: 'block' }],
    ['-1,50,0', { name: 'air', boundingBox: 'empty' }],
    ['-1,51,0', { name: 'air', boundingBox: 'empty' }]
  ])
  const rc2 = (x, y, z) => world2.get(`${x},${y},${z}`) ?? { name: 'air', boundingBox: 'empty' }
  assert.deepEqual(walkoutAimCell({ x: 0, y: 50, z: 0 }, rc2, iw), { x: -1, y: 50, z: 0 })
})

test('walk-out drive: the dy order and the ring priority (level, rise, drop; r=1 before r=2)', () => {
  const iw = (n) => n === 'water'
  // the level seat sealed (water), the rise dry: dy=1 wins over dy=-1
  const world = new Map([
    ['1,49,0', { name: 'stone', boundingBox: 'block' }],
    ['1,50,0', { name: 'water', boundingBox: 'empty' }],
    ['1,51,0', { name: 'water', boundingBox: 'empty' }],
    ['1,52,0', { name: 'air', boundingBox: 'empty' }]
  ])
  const rc = (x, y, z) => world.get(`${x},${y},${z}`) ?? { name: 'air', boundingBox: 'empty' }
  // [1,50,0] water feet -> dy 0 refused; [1,51,0] water feet -> dy 1
  // refused (ground [1,50,0] is water=empty); dy -1: ground [1,48,0] air
  // refused; dy 2: ground [1,51,0] water refused... the scan falls through
  // to the next ring cell - give [0,51,1] (the z+ neighbor) a dry seat
  world.set('0,50,1', { name: 'water', boundingBox: 'empty' })
  world.set('-1,49,0', { name: 'stone', boundingBox: 'block' })
  world.set('-1,48,0', { name: 'stone', boundingBox: 'block' })
  world.set('-1,50,0', { name: 'air', boundingBox: 'empty' })
  world.set('-1,51,0', { name: 'air', boundingBox: 'empty' })
  assert.deepEqual(walkoutAimCell({ x: 0, y: 50, z: 0 }, rc, iw), { x: -1, y: 50, z: 0 })
  // the ring radius priority: seal ALL r=1 seats, the r=2 east seat wins
  const world2 = new Map([['2,49,0', { name: 'stone', boundingBox: 'block' }]])
  const rc2 = (x, y, z) => world2.get(`${x},${y},${z}`) ?? { name: 'air', boundingBox: 'empty' }
  // every r=1 candidate reads air feet on air ground (ground empty ->
  // refused) - the ground law seals the inner ring by construction
  assert.deepEqual(walkoutAimCell({ x: 0, y: 50, z: 0 }, rc2, iw), { x: 2, y: 50, z: 0 })
})

test('walk-out drive: the column ends (rise before drop) and the honest sealed null', () => {
  const iw = (n) => n === 'water'
  // ring: 0 - the horizontal scan skipped by the caller's own option (the
  // 1x1 sealed shaft shape); the shelf above the flood is the exit
  const world = new Map([
    ['0,52,0', { name: 'stone', boundingBox: 'block' }],
    ['0,53,0', { name: 'air', boundingBox: 'empty' }],
    ['0,54,0', { name: 'air', boundingBox: 'empty' }]
  ])
  const rc = (x, y, z) => world.get(`${x},${y},${z}`) ?? { name: 'air', boundingBox: 'empty' }
  assert.deepEqual(walkoutAimCell({ x: 0, y: 50, z: 0 }, rc, iw, { ring: 0 }), { x: 0, y: 53, z: 0 })
  // the drop tail: no shelf above, the tail below is dry (ground stone)
  const world2 = new Map([
    ['0,47,0', { name: 'stone', boundingBox: 'block' }],
    ['0,48,0', { name: 'air', boundingBox: 'empty' }],
    ['0,49,0', { name: 'air', boundingBox: 'empty' }]
  ])
  const rc2 = (x, y, z) => world2.get(`${x},${y},${z}`) ?? { name: 'air', boundingBox: 'empty' }
  assert.deepEqual(walkoutAimCell({ x: 0, y: 50, z: 0 }, rc2, iw, { ring: 0 }), { x: 0, y: 48, z: 0 })
  // sealed: the walls are solid everywhere, the column ends are solid
  const world3 = new Map([['0,49,0', { name: 'stone', boundingBox: 'block' }]])
  const rc3 = (x, y, z) => world3.get(`${x},${y},${z}`) ?? { name: 'stone', boundingBox: 'block' }
  assert.equal(walkoutAimCell({ x: 0, y: 50, z: 0 }, rc3, iw, { ring: 1, columnReach: 2 }), null)
})

test('walk-out drive: the aim junk battery - a lost read never aims', () => {
  const rc = () => ({ name: 'air', boundingBox: 'empty' })
  const iw = (n) => n === 'water'
  assert.equal(walkoutAimCell(null, rc, iw), null, 'no from - no aim')
  assert.equal(walkoutAimCell(undefined, rc, iw), null)
  assert.equal(walkoutAimCell({ x: NaN, y: 50, z: 0 }, rc, iw), null, 'a NaN axis never aims')
  assert.equal(walkoutAimCell({ x: 0, y: Infinity, z: 0 }, rc, iw), null)
  assert.equal(walkoutAimCell({ x: 0, y: 50, z: 0 }, null, iw), null, 'no reader - no aim')
  assert.equal(walkoutAimCell({ x: 0, y: 50, z: 0 }, rc, 'not a function'), null, 'a junk predicate never aims')
  assert.equal(walkoutAimCell({ x: 0, y: 50, z: 0 }, () => { throw new Error('chunk gone') }, iw), null, 'a throwing read refuses every cell, never crashes')
  assert.equal(walkoutAimCell({ x: 0, y: 50, z: 0 }, () => null, iw), null, 'null cells: the ground law seals every seat')
})

test('walk-out drive: the line rides the numbers byte-exact (the dy-instrument field style)', () => {
  assert.equal(
    walkoutDriveLine({ tag: 'F10 [F10]', aim: { x: -127, y: 50, z: 398 }, displacement: 0.4 }),
    "F10 [F10] water: walk-out drive aims the held page's walk (0.4 blocks from the relog cell, goal [-127,50,398]) - the promise's own walker, the window judges"
  )
  assert.equal(
    walkoutDriveLine({ tag: 'F1 [F1]', aim: null, displacement: 0.1 }),
    'F1 [F1] water: walk-out drive finds no dry aim (0.1 blocks from the relog cell, the bounded ring reads sealed) - the promise waits, the ladder keeps its rungs'
  )
  // the unmeasured class keeps its honest name (the wiring never fires
  // there - the pure law keeps the class for the field's own honesty)
  assert.match(
    walkoutDriveLine({ tag: 'F8 [F8]', aim: { x: 1, y: 50, z: 0 }, displacement: null }),
    /walk-out drive aims the held page's walk \(displacement unmeasured, goal \[1,50,0\]\)/
  )
  // a junk aim cell reads the sealed line (the aim never lies as a goal)
  assert.match(
    walkoutDriveLine({ tag: 'F8 [F8]', aim: { x: NaN, y: 50, z: 0 }, displacement: 0.3 }),
    /walk-out drive finds no dry aim/
  )
})

test('REGRESSION PIN: the drive wires the hold branch with its fences (the run195 dead-wire class)', () => {
  // the drive lives in miner.mjs's FROZEN-RETURN GATE hold branch - the
  // exact branch whose own line promises the walk. The pins name every
  // fence the call must carry: the one-walk latch, the bar gate, the aim,
  // the goal, and the line.
  assert.ok(minerSrc.includes("if (wo && !wo.done && !wo.driven) {"),
    'the drive gates on the witness armed, not done, not yet driven')
  assert.ok(minerSrc.includes('wo.driven = true // one aim attempt per witness (the one-walk law)'),
    'the driven latch rides the witness (one attempt per relog, the mouth\'s one-walk precedent)')
  assert.ok(minerSrc.includes('dNow !== null && dNow < RELOG_WALKOUT_MIN_PROGRESS'),
    'the bar gate: a bot already leaving (d >= the walk layer bar) needs no aim; an unmeasured read never fires')
  assert.ok(minerSrc.includes('walkoutAimCell(wo,'), 'the aim rides the witness\'s own relog position (the pure law, injected reads)')
  assert.ok(minerSrc.includes('releaseWalkGoal(bot)'), 'the stale-stop law clears the slot before the aim (the jobqueue\'s own order)')
  assert.ok(minerSrc.includes('pf.setGoal(new goals.GoalNear(aim.x, aim.y, aim.z, 1))'), 'the aim lands as a GoalNear (the pathfinder walks, the window judges)')
  assert.ok(minerSrc.includes('walkoutDriveLine({ tag, aim, displacement: dNow })'), 'the drive line rides the numbers')
  assert.ok(minerSrc.includes('walkoutDriveLine({ tag, aim: null, displacement: dNow })'), 'the sealed scan logs its own honest line')
  // the fence order: the drive sits INSIDE the hold branch (the bypass
  // keeps the rescue's clock - a critical page must never meet the drive)
  const holdBranch = minerSrc.slice(minerSrc.indexOf('if (frozenHoldLive && !frozenReturnBypass({ oxygen: o2raw, headWet, underHold: frozenHoldLive })) {'))
  const holdEnd = holdBranch.indexOf('// (v0.265.0) THE BYPASS ECHO')
  const branch = holdBranch.slice(0, holdEnd > 0 ? holdEnd : 2000)
  assert.ok(branch.includes('wo.driven = true'), 'the drive rides INSIDE the hold branch (before the return)')
  assert.ok(branch.includes('walkoutAimCell(wo,'), 'the aim is the hold branch\'s own walker')
  assert.ok(branch.includes('return'), 'the hold branch still returns - the drive never pages the rescue')
})
