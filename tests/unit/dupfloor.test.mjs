// (v0.904.0) THE DUPLICATE'S OWN FLOOR - reconnectDelayMs's kick-kind-aware
// lower bound. The kick bill priced the front: duplicate_login owned 10 of 10
// kicks (100%) and 5 bots with 2+ events own 94% of the churn - the relog IS
// the loop's food, because the generic floor's prompt retry (750ms) races the
// OLD session's server-side death. The floor gives the old session its grace
// (6000ms); every other kick and every junk kind keeps the legacy shape byte
// for byte. All pure arithmetic: rand injected, every assertion exact.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { reconnectDelayMs } from '../../src/lib/backoff.mjs'

const DUP = 'multiplayer.disconnect.duplicate_login'
const DUP_SHORT = 'disconnect.duplicate_login'

test('a duplicate_login kick lifts a below-floor retry to the 6000ms grace', () => {
  // attempt 0, rand=0 -> the legacy arithmetic reads 1500 (inside the jitter band)
  assert.equal(reconnectDelayMs({ attempt: 0, index: 0, rand: () => 0 }), 1500)
  // the same shape with the duplicate kind rides the floor
  assert.equal(reconnectDelayMs({ attempt: 0, index: 0, rand: () => 0, kickKind: DUP }), 6000)
  // the short translate vocabulary rides the same floor
  assert.equal(reconnectDelayMs({ attempt: 0, index: 0, rand: () => 0, kickKind: DUP_SHORT }), 6000)
  // a mid-band delay still lifts (rand=0.5 -> exactly 2000 legacy, floor wins)
  assert.equal(reconnectDelayMs({ attempt: 0, index: 0, rand: () => 0.5, kickKind: DUP }), 6000)
})

test('the per-bot phase spreads the herd ABOVE the floor (the span rides after)', () => {
  // index 3: phase = (3*golden % 1)*4000 ~= 7416.4 - floor + phase, no jitter drift at rand=0
  const d = reconnectDelayMs({ attempt: 0, index: 3, rand: () => 0, kickKind: DUP })
  assert.equal(d, 6000 + Math.round(((3 * 0.6180339887498949) % 1) * 4000))
  assert.ok(d > 6000, 'the phase must lift the delay past the floor')
})

test('a duplicate kick above the floor keeps the legacy arithmetic untouched', () => {
  // attempt 4 legacy (rand=0.5) = 32000 -> capped to 30000 (+0 span at index 0); the floor 6000 never cuts it
  assert.equal(reconnectDelayMs({ attempt: 4, index: 0, rand: () => 0.5 }), 30000)
  assert.equal(reconnectDelayMs({ attempt: 4, index: 0, rand: () => 0.5, kickKind: DUP }), 30000)
})

test('every non-duplicate kick keeps the legacy shape byte for byte', () => {
  for (const kind of ['disconnect.timeout', 'multiplayer.disconnect.kicked_by_player', 'end', '']) {
    for (let n = 0; n <= 3; n++) {
      assert.equal(
        reconnectDelayMs({ attempt: n, index: 2, rand: () => 0.25, kickKind: kind }),
        reconnectDelayMs({ attempt: n, index: 2, rand: () => 0.25 }),
        `kind=${kind} attempt=${n}`
      )
    }
  }
})

test('junk kinds never invent a floor (null / number / object / array / undefined)', () => {
  for (const kind of [null, undefined, 42, {}, ['multiplayer.disconnect.duplicate_login'], true]) {
    assert.equal(
      reconnectDelayMs({ attempt: 1, index: 0, rand: () => 0, kickKind: kind }),
      reconnectDelayMs({ attempt: 1, index: 0, rand: () => 0 }),
      `kind=${JSON.stringify(kind)}`
    )
  }
})

test('junk dupFloorMs falls back to the legacy floor (0 / NaN / negative)', () => {
  for (const bad of [0, NaN, -6000, '6000']) {
    assert.equal(
      reconnectDelayMs({ attempt: 0, index: 0, rand: () => 0, kickKind: DUP, dupFloorMs: bad }),
      1500,
      `dupFloorMs=${String(bad)}`
    )
  }
})

test('a custom dupFloorMs rides the caller\'s number', () => {
  assert.equal(reconnectDelayMs({ attempt: 0, index: 0, rand: () => 0, kickKind: DUP, dupFloorMs: 9000 }), 9000)
  // below the legacy arithmetic it still binds (2500 > 1500)
  assert.equal(reconnectDelayMs({ attempt: 0, index: 0, rand: () => 0, kickKind: DUP, dupFloorMs: 2500 }), 2500)
})

test('THE CENSUS GUARD - zero new log lines: the floor lives in the delay arithmetic only', () => {
  // the retry line's verb/timing vocabulary is owned by fleet19.mjs's existing
  // `retry #N in Xs (...)` shape; this law pins that the floor NEVER changes
  // the retry COUNT - it only moves WHEN the next attempt fires. A delay that
  // stays inside the legacy band proves the non-duplicate path unchanged.
  const legacy = [0, 1, 2, 3].map(n => reconnectDelayMs({ attempt: n, index: 7, rand: () => 0.5 }))
  const withKind = [0, 1, 2, 3].map(n => reconnectDelayMs({ attempt: n, index: 7, rand: () => 0.5, kickKind: 'disconnect.timeout' }))
  assert.deepEqual(withKind, legacy)
})
