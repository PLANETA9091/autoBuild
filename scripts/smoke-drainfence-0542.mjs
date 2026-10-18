#!/usr/bin/env node
// (v0.976.253, fire-0542) smoke-drainfence: the pure half's own light
// arithmetic check (the local law: no server, no fleet, no tests - the
// node -e class the task book prices). Exercises the verdict branches,
// both emitters, the census grammar and the row shapes on synthetic
// inputs, then simulates the fence race's promise mechanics: a
// never-settling runner seat fenced at the mark lets Promise.all resolve.
import { drainFenceVerdict, DRAIN_FENCE_MARGIN_MS, drainFenceLine, drainFenceReason, drainFenceCensus, drainFenceConsistent, drainFenceRow } from '../src/lib/drainfence.mjs'
import assert from 'node:assert/strict'

let fails = 0
const ok = (name) => console.log(`  ok ${name}`)
const bad = (name, e) => { fails++; console.log(`  FAIL ${name}: ${e?.message ?? e}`) }
const t = (name, fn) => { try { fn(); ok(name) } catch (e) { bad(name, e) } }

console.log('--- the constants ---')
t('the margin rides 360000 inside the 420000 grace', () => {
  assert.equal(DRAIN_FENCE_MARGIN_MS, 360000)
})
console.log('--- the verdict branches ---')
t('inside the mark', () => {
  assert.deepEqual(drainFenceVerdict({ nowMs: 600000 + 359999, deadlineMs: 600000 }), { fire: false, remainingMs: 1 })
})
t('the closed edge fires', () => {
  assert.deepEqual(drainFenceVerdict({ nowMs: 600000 + 360000, deadlineMs: 600000 }), { fire: true, remainingMs: 0 })
})
t('past the mark fires', () => {
  assert.equal(drainFenceVerdict({ nowMs: 600000 + 400000, deadlineMs: 600000 }).fire, true)
})
t('the disabled margin never fires', () => {
  assert.equal(drainFenceVerdict({ nowMs: 999999999, deadlineMs: 0, marginMs: 0 }).fire, false)
  assert.equal(drainFenceVerdict({ nowMs: 999999999, deadlineMs: 0, marginMs: -1 }).fire, false)
})
t('the junk clocks never fire', () => {
  assert.equal(drainFenceVerdict({}).fire, false)
  assert.equal(drainFenceVerdict({ nowMs: NaN, deadlineMs: 600000 }).fire, false)
  assert.equal(drainFenceVerdict({ nowMs: 700000, deadlineMs: NaN }).fire, false)
})
console.log('--- the emitters ---')
t('the line byte-exact', () => {
  assert.equal(drainFenceLine({ labels: ['F5'], marginSec: 360 }), '[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end')
  assert.equal(drainFenceLine({ labels: ['F4', 'F5', 'F19'], marginSec: 360 }), '[fleet] drain fence: 3 runner(s) fenced at 360s past the deadline (F4, F5, F19) - the drain bounded, the report and the natural exit own the end')
  assert.equal(drainFenceLine({ labels: [] }), null)
  assert.equal(drainFenceLine({ labels: ['F5'], marginSec: 0 }), null)
})
t('the reason byte-exact', () => {
  assert.equal(drainFenceReason({ labels: ['F5'], marginSec: 360 }), 'deadline end - the drain fenced (F5 parked past the 360s margin)')
  assert.equal(drainFenceReason({ labels: ['F4', 'F5'], marginSec: 360 }), 'deadline end - the drain fenced (F4, F5 parked past the 360s margin)')
  assert.equal(drainFenceReason({ labels: [] }), null)
})
console.log('--- the census ---')
t('the emitter line rides whole', () => {
  assert.deepEqual(drainFenceCensus(['[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end']), { fenced: 1, marginSec: 360, labels: 'F5' })
  assert.deepEqual(drainFenceCensus(['[fleet] drain fence: 3 runner(s) fenced at 360s past the deadline (F4, F5, F19) - the drain bounded, the report and the natural exit own the end']), { fenced: 3, marginSec: 360, labels: 'F4, F5, F19' })
})
t('the forged meter refuses (the list must name the count)', () => {
  assert.deepEqual(drainFenceCensus(['[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F4, F5) - the drain bounded, the report and the natural exit own the end']), { fenced: 0, marginSec: 0, labels: '' })
})
t('the near-miss lanes refuse', () => {
  assert.deepEqual(drainFenceCensus(["[fleet] runner settle: 18/19 settled, 1 parked (F5 414s) - the drain's own per-runner read"]), { fenced: 0, marginSec: 0, labels: '' })
  assert.deepEqual(drainFenceCensus(['exit watchdog: the margin spent (420s past the deadline+420s grace, the runners never drained) - the hard exit owns the process']), { fenced: 0, marginSec: 0, labels: '' })
  assert.deepEqual(drainFenceCensus(['================ FLEET RESULT (deadline end - the drain fenced (F5 parked past the 360s margin)) ================']), { fenced: 0, marginSec: 0, labels: '' })
})
t('the junk laws', () => {
  assert.deepEqual(drainFenceCensus([]), { fenced: 0, marginSec: 0, labels: '' })
  assert.equal(drainFenceCensus(null), null)
  assert.equal(drainFenceCensus('junk'), null)
  assert.deepEqual(drainFenceCensus([42, {}]), { fenced: 0, marginSec: 0, labels: '' })
})
console.log('--- the fence + the row ---')
t('the fence branches', () => {
  const face = { fenced: 1, marginSec: 360, labels: 'F5' }
  const zero = { fenced: 0, marginSec: 0, labels: '' }
  assert.equal(drainFenceConsistent({ back: face, prev: face, cur: face }), true)
  assert.equal(drainFenceConsistent({ back: zero, prev: zero, cur: zero }), true)
  assert.equal(drainFenceConsistent(null), false)
  assert.equal(drainFenceConsistent([face, face, face]), false)
  assert.equal(drainFenceConsistent({ back: { fenced: -1, marginSec: 360, labels: 'F5' }, prev: face, cur: face }), false)
})
t('the row shapes', () => {
  const zero = { fenced: 0, marginSec: 0, labels: '' }
  const one = { fenced: 1, marginSec: 360, labels: 'F5' }
  const two = { fenced: 2, marginSec: 360, labels: 'F4, F5' }
  assert.ok(drainFenceRow({ back: zero, prev: one, cur: two }).startsWith("the drain fence trend (v0.976.253): the fenced mass's own swell ran two steps deep - 0 -> 1 (+1) -> 2 (+1)"))
  assert.ok(drainFenceRow({ back: two, prev: one, cur: zero }).startsWith("the drain fence trend (v0.976.253): the fenced mass's own fade ran two steps deep - 2 -> 1 (-1) -> 0 (-1)"))
  assert.ok(drainFenceRow({ back: one, prev: two, cur: one }).startsWith("the drain fence trend (v0.976.253): the fenced mass's own swing - 1 -> 2 (+1) -> 1 (-1)"))
  assert.equal(drainFenceRow({ back: zero, prev: zero, cur: zero }), null)
  assert.equal(drainFenceRow({ back: zero, prev: one, cur: one }), null)
  assert.equal(drainFenceRow(null), null)
})
console.log('--- the promise mechanics: the fence race ---')
const fenceRace = (p, delayMs) => Promise.race([p, new Promise(resolve => setTimeout(resolve, delayMs))])
t('a never-settling runner parks until the fence resolves Promise.all', async () => {
  const never = new Promise(() => {}) // the parked seat - the F5 class
  const healthy = Promise.resolve('home')
  const t0 = Date.now()
  await Promise.all([healthy, fenceRace(never, 30)])
  const dt = Date.now() - t0
  assert.ok(dt >= 25 && dt < 2000, `the fence bounded the drain at ~30ms (rode ${dt}ms)`)
})
t('a rejection before the mark rides the same unhandled fate (the race passes it)', async () => {
  const dying = new Promise((_, rej) => setTimeout(() => rej(new Error('the bot died')), 5))
  await fenceRace(dying, 5000).then(() => { throw new Error('the rejection was swallowed') }, (e) => {
    assert.equal(e.message, 'the bot died')
  })
})
t('a late rejection after the mark is absorbed (the report and the exit own the end)', async () => {
  const late = new Promise((_, rej) => setTimeout(() => rej(new Error('late')), 30))
  await fenceRace(late, 5) // the fence resolved first
})
console.log(fails === 0 ? 'SMOKE PASS: the drain fence rides' : `SMOKE FAIL: ${fails} failure(s)`)
process.exit(fails === 0 ? 0 : 1)
