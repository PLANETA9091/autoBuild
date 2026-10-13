//
// rescuedisarm.test.mjs - THE RESCUE'S OWN DISARM GATE'S OWN TESTS (v0.974.17)
//
// The gate reads ONE cell and errs toward the swim's own hands: a LIVE goal
// clears, everything else (absent, null, false, undefined, junk) clears
// nothing. The wiring pin rides the airbar law (readFileSync + contains):
// the sweep must live INSIDE the rescue's while loop, AFTER the death
// latch's break, BEFORE the pass's own control writes - the pass order is
// the cure's own body.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { rescueDisarmGate } from '../../src/lib/rescuedisarm.mjs'

test('the live goal clears - the sweep\'s own seat', () => {
  assert.deepEqual(rescueDisarmGate({ hasGoal: true }), { clear: true })
})

test('the goal-less pass touches nothing - the swim keeps its writes', () => {
  assert.deepEqual(rescueDisarmGate({ hasGoal: false }), { clear: false })
  assert.deepEqual(rescueDisarmGate({ hasGoal: null }), { clear: false })
})

test('the junk cells never clear - the err side is the swim\'s own hands', () => {
  assert.deepEqual(rescueDisarmGate({}), { clear: false })
  assert.deepEqual(rescueDisarmGate(undefined), { clear: false })
  assert.deepEqual(rescueDisarmGate(null), { clear: false })
  assert.deepEqual(rescueDisarmGate({ hasGoal: 'goal' }), { clear: false })
  assert.deepEqual(rescueDisarmGate({ hasGoal: 1 }), { clear: false })
})

test('the wiring pin - the sweep rides the rescue loop\'s own pass order', () => {
  const src = readFileSync(new URL('../../src/bots/miner.mjs', import.meta.url), 'utf8')
  const sweepAt = src.indexOf('rescueDisarmGate({ hasGoal: liveGoal != null }).clear')
  assert.ok(sweepAt > 0, 'the sweep call lives in miner.mjs')
  // AFTER the death latch (a dead bot exits before the sweep reads anything)
  const deathLatchAt = src.indexOf('if (diedMidRescue || (bot.health ?? 20) <= 0) break')
  assert.ok(deathLatchAt > 0 && deathLatchAt < sweepAt, 'the death latch precedes the sweep')
  // BEFORE the pass's own water read (the controls re-write below it)
  const waterReadAt = src.indexOf('const read = waterRead()', sweepAt)
  assert.ok(waterReadAt > sweepAt, 'the sweep precedes the pass\'s own read')
  // the import rides the lib
  assert.ok(src.includes("from '../lib/rescuedisarm.mjs'"), 'the import lands')
  // the arm edge's own pair, re-asserted: setGoal(null) + clearControlStates
  const sweepBody = src.slice(sweepAt, waterReadAt)
  assert.ok(sweepBody.includes('bot.pathfinder.setGoal(null)'), 'the sweep lifts the goal')
  assert.ok(sweepBody.includes('bot.clearControlStates()'), 'the sweep drops held controls')
})
