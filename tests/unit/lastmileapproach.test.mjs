// (v0.976.231) THE LAST MILE'S OWN APPROACH GUARD - the circling breaker's
// battery. THE EVIDENCE (face 463 = 39115203963): F10's last-mile hop burned
// 3538ms CIRCLING at d=7.1 - movement every tick, bestD frozen at the start
// distance - the seat's own clock died with it, the re-segment's 2000ms floor
// starved, the ask went dry (the grain: asked 8, delivered 0, dry 8). The
// guard: at the guard mark a hop short of its approach floor aborts NOW and
// the seconds ride home to the ladder. The pins: the pure verdict every
// branch byte-exact, the walker's guard block (circling aborts fast with its
// own message, the approaching walker never punished, the legacy shape byte
// for byte with the guard off), the seat's wiring pin, and the message
// grammar pins (the classification rides the refused line's own skin).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { walkRawToward } from '../../src/lib/deposit.mjs'
import { lastMileApproachVerdict, LAST_MILE_APPROACH_GUARD_MS, LAST_MILE_APPROACH_FLOOR_BLOCKS } from '../../src/lib/fuelbank.mjs'

const fuelSrc = readFileSync(new URL('../../src/lib/fuelbank.mjs', import.meta.url), 'utf8')
const depositSrc = readFileSync(new URL('../../src/lib/deposit.mjs', import.meta.url), 'utf8')

/** A mock bot whose position advances one step on every look() - the walker's
 * own tick. `step(from)` returns the next {x,y,z}. The chest sits at
 * [0,64,0]; the bot starts d0 = startDist away on the +z line. */
function mockBot ({ startDist = 7, step } = {}) {
  const target = { x: 0, y: 64, z: 0 }
  const pos = { x: 0, y: 64, z: startDist }
  const entity = {
    position: {
      get x () { return pos.x },
      get y () { return pos.y },
      get z () { return pos.z },
      distanceTo (t) { return Math.hypot(pos.x - t.x, pos.y - t.y, pos.z - t.z) }
    }
  }
  return {
    entity,
    look: async () => { const n = step(pos); Object.assign(pos, n) },
    setControlState: () => {}
  }
}

test('the constants: the guard mark and the approach floor ride their priced numbers', () => {
  assert.equal(LAST_MILE_APPROACH_GUARD_MS, 2000)
  assert.equal(LAST_MILE_APPROACH_FLOOR_BLOCKS, 1)
})

test('the pure verdict: the circling hop at the mark is guarded (the F463 shape)', () => {
  const v = lastMileApproachVerdict({ d0: 7.0, d: 7.1, elapsedMs: 3538 })
  assert.equal(v.guarded, true)
  assert.equal(v.why, 'no approach')
  assert.ok(Math.abs(v.gained - (-0.1)) < 1e-9) // the hop walked AWAY - the gain reads negative
})

test('the pure verdict: every honest branch rides', () => {
  // the mark not reached - the hop is young, the guard silent
  assert.equal(lastMileApproachVerdict({ d0: 7, d: 7.1, elapsedMs: 1999 }).guarded, false)
  // the floor bought - the walk rides to the net-progress floor and the timeout
  const ride = lastMileApproachVerdict({ d0: 7, d: 6.0, elapsedMs: 3538 })
  assert.equal(ride.guarded, false)
  assert.equal(ride.gained, 1)
  // the boundary is the floor's own open edge: gained = floor exactly rides
  assert.equal(lastMileApproachVerdict({ d0: 7, d: 6, elapsedMs: 2000, floorBlocks: 1 }).guarded, false)
  assert.equal(lastMileApproachVerdict({ d0: 7, d: 6.001, elapsedMs: 2000, floorBlocks: 1 }).guarded, true)
  // the disabled guard - the legacy shape
  assert.equal(lastMileApproachVerdict({ d0: 7, d: 7.1, elapsedMs: 9999, guardMs: 0 }).guarded, false)
  assert.equal(lastMileApproachVerdict({ d0: 7, d: 7.1, elapsedMs: 9999, guardMs: -1 }).guarded, false)
  // junk-safe: the unknown distances and the junk clock never fire
  assert.equal(lastMileApproachVerdict({ d0: null, d: 7, elapsedMs: 5000 }).guarded, false)
  assert.equal(lastMileApproachVerdict({ d0: 7, d: NaN, elapsedMs: 5000 }).guarded, false)
  assert.equal(lastMileApproachVerdict({ d0: 7, d: 7, elapsedMs: NaN }).guarded, false)
  assert.equal(lastMileApproachVerdict({}).guarded, false)
  assert.equal(lastMileApproachVerdict({ d0: 7, d: 7, elapsedMs: 5000, floorBlocks: NaN }).guarded, false)
})

test('the walker: the circling hop aborts at the guard mark with its own message', async () => {
  const bot = mockBot({ step: p => ({ x: p.x + 0.5, y: p.y, z: p.z }) }) // sideways every tick - movement, no approach
  const t0 = Date.now()
  await assert.rejects(
    () => walkRawToward(bot, { x: 0, y: 64, z: 0 }, { timeoutMs: 10000, tickMs: 50, approachGuardMs: 300 }),
    e => {
      assert.match(e.message, /^raw walk: no approach for \d+ms \(d=[0-9.]+, gained -?[0-9.]+\)$/)
      return true
    }
  )
  const spent = Date.now() - t0
  assert.ok(spent < 2500, `the guard must abort fast, spent ${spent}ms`)
})

test('the walker: the approaching walker is never punished (it lands)', async () => {
  const bot = mockBot({ step: p => ({ x: p.x, y: p.y, z: p.z - 0.6 }) }) // 0.6 home every tick
  const r = await walkRawToward(bot, { x: 0, y: 64, z: 0 }, { timeoutMs: 10000, tickMs: 50, approachGuardMs: 300 })
  assert.equal(r.walked, true)
  assert.ok(r.d <= 3.2)
})

test('the walker: the legacy shape (guard off) rides byte for byte - the timeout owns the circling hop', async () => {
  const bot = mockBot({ step: p => ({ x: p.x + 0.5, y: p.y, z: p.z }) })
  await assert.rejects(
    () => walkRawToward(bot, { x: 0, y: 64, z: 0 }, { timeoutMs: 700, tickMs: 50 }), // no approachGuardMs - the default 0
    e => {
      assert.match(e.message, /^raw walk timeout after \d+ms \(d=[0-9.]+\)$/) // the OLD skin, byte for byte
      return true
    }
  )
})

test('the walker: the guard evaluates ONCE - a passing walker never re-pays the mark', async () => {
  // buys its floor by the mark (0.21 x 6 ticks = 1.26 >= 1.0), then CIRCLES
  // forever: the once-law hands the walk to the net-progress floor and the
  // timeout - the guard must never fire again (the death reads the TIMEOUT
  // skin, not the guard's own message).
  let n = 0
  const bot = mockBot({ step: p => { n++; return n <= 6 ? { x: p.x, y: p.y, z: p.z - 0.21 } : { x: p.x + 0.5, y: p.y, z: p.z } } })
  await assert.rejects(
    () => walkRawToward(bot, { x: 0, y: 64, z: 0 }, { timeoutMs: 1200, tickMs: 50, approachGuardMs: 300 }),
    e => {
      assert.match(e.message, /^raw walk timeout after \d+ms \(d=[0-9.]+\)$/) // the hand-off held
      return true
    }
  )
})

test('the seat wiring: the last mile leases the guard to the walker', () => {
  assert.match(fuelSrc, /approachGuardMs: LAST_MILE_APPROACH_GUARD_MS/)
  assert.match(fuelSrc, /export const LAST_MILE_APPROACH_GUARD_MS = 2000/)
  assert.match(fuelSrc, /export const LAST_MILE_APPROACH_FLOOR_BLOCKS = 1/)
})

test('the walker wiring: the guard block rides the deposit walker (the once-law, the legacy default)', () => {
  assert.match(depositSrc, /approachGuardMs = 0, approachFloorBlocks = 1/)
  assert.match(depositSrc, /let d0 = null/)
  assert.match(depositSrc, /let approachChecked = false/)
  assert.match(depositSrc, /raw walk: no approach for \$\{now - started\}ms \(d=\$\{Number\(d\)\.toFixed\(1\)\}, gained \$\{\(d0 - d\)\.toFixed\(1\)\}\)/)
})

test('the message grammar: the classification rides the refused line (the deliberate-miss law)', () => {
  // the guard's message must match NEITHER walkRetryPlan's /timeout after/i
  // class NOR the stall skin - the re-issue doctrine's own law
  const msg = 'raw walk: no approach for 2000ms (d=7.1, gained 0.0)'
  assert.doesNotMatch(msg, /timeout after/)
  assert.doesNotMatch(msg, /stalled after/)
  assert.doesNotMatch(msg, /no net progress/)
})
