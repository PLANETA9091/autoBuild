import { test } from 'node:test'
import assert from 'node:assert/strict'
import { burstFreezeJoin, burstFreezeSeat, BURST_FREEZE_TAIL_MS } from '../../src/lib/burstfreeze.mjs'
import { PULSE_GAUGE_RE, STALL_ADJACENT_MS } from '../../src/lib/stormdriver.mjs'
import { SOCK_LOSS_RE } from '../../src/lib/sockloss.mjs'

const gauge = (n, ts, rss, late, mainLate) => `[F1] b] n=${n} ts=${ts}s rss=${rss}M late=${late}ms mainLate=${mainLate}ms`
const loss = (bot, kind) => `${bot} [${bot}] error: write ${kind}`

test('junk battery: non-array lines read null', () => {
  assert.equal(burstFreezeJoin(null), null)
  assert.equal(burstFreezeJoin(undefined), null)
  assert.equal(burstFreezeJoin(42), null)
  assert.equal(burstFreezeJoin('lines'), null)
  assert.equal(burstFreezeJoin({ length: 3 }), null)
})

test('the honest silence: a loss-free face reads null (the arrow needs a burst)', () => {
  assert.equal(burstFreezeJoin([gauge(1, 10, 200, 5, 120), gauge(2, 30, 210, 6, 9000)]), null)
  assert.equal(burstFreezeJoin([]), null)
})

test('a burst with no freeze behind it reads the alone-words (freezes 0)', () => {
  const lines = [gauge(1, 10, 200, 5, 120), loss('F3', 'ECONNRESET'), loss('F4', 'EPIPE'), gauge(2, 30, 210, 6, 900)]
  const r = burstFreezeJoin(lines)
  assert.equal(r.n, 2)
  assert.equal(r.freezes, 0)
  assert.equal(r.tail, 0)
  assert.equal(r.late, 0)
  assert.equal(r.alone, 0)
  assert.equal(r.minGap, null)
  assert.equal(r.verdict, 'the burst rode alone - no freeze followed it')
})

test('the FACE 268 REAL layout: every loss before the 541 gauge line anchors ts=521 - the gap reads 40s and the arrow stretches', () => {
  // the first-read lesson: the hand's 20s rode the burst's END bookend
  // (unprovable); the anchor law prices the freshest PRECEDING gauge.
  const lines = []
  lines.push(gauge(26, 521, 300, 9, 784))
  for (let k = 0; k < 15; k++) lines.push(loss(`F${k + 1}`, k % 4 === 0 ? 'EPIPE' : 'ECONNRESET'))
  lines.push(gauge(27, 541, 300, 9, 205))
  lines.push(gauge(28, 561, 300, 9, 24750))
  const r = burstFreezeJoin(lines)
  assert.equal(r.n, 15)
  assert.equal(r.freezes, 1)
  assert.equal(r.tail, 0)
  assert.equal(r.late, 1)
  assert.equal(r.alone, 0)
  assert.equal(r.minGap, 40)
  assert.equal(r.verdict, 'the freeze rode behind the burst but beyond the tail (gap 40s) - the arrow stretches')
})

test('the FACE 268 compact: the burst spanning both bookends, the freeze 20s after the last anchor rides the tail', () => {
  const lines = []
  lines.push(gauge(26, 521, 300, 9, 784)) // the calm bookend before
  for (let k = 0; k < 12; k++) lines.push(loss(`F${k + 1}`, k % 4 === 0 ? 'EPIPE' : 'ECONNRESET'))
  lines.push(gauge(27, 541, 300, 9, 205)) // the calm bookend after - the burst's TAIL losses anchor HERE
  lines.push(loss('F16', 'ECONNRESET'))
  lines.push(loss('F17', 'ECONNRESET'))
  lines.push(loss('F18', 'EPIPE'))
  lines.push(gauge(28, 561, 300, 9, 24750)) // the ~25s freeze, 20s after the last anchored ts
  const r = burstFreezeJoin(lines)
  assert.equal(r.n, 15)
  assert.equal(r.freezes, 1)
  assert.equal(r.tail, 1)
  assert.equal(r.late, 0)
  assert.equal(r.alone, 0)
  assert.equal(r.minGap, 20)
  assert.equal(r.maxGap, 20)
  assert.equal(r.verdict, 'the freeze rode behind the burst (gap 20s) - the arrow reads burst -> freeze')
})

test('a freeze with no preceding loss stands alone', () => {
  const lines = [gauge(1, 10, 200, 5, 9000), gauge(2, 30, 210, 6, 120), loss('F3', 'ECONNRESET'), gauge(3, 50, 220, 7, 100)]
  const r = burstFreezeJoin(lines)
  assert.equal(r.freezes, 1)
  assert.equal(r.tail, 0)
  assert.equal(r.late, 0)
  assert.equal(r.alone, 1)
  assert.equal(r.minGap, null)
  assert.equal(r.verdict, 'the freeze stood alone - no burst rode ahead of it (freeze(s) 1)')
})

test('a preceded freeze beyond the tail reads the stretch-words', () => {
  const lines = [gauge(1, 100, 200, 5, 100), loss('F3', 'ECONNRESET'), gauge(2, 180, 210, 6, 9000)]
  const r = burstFreezeJoin(lines)
  assert.equal(r.freezes, 1)
  assert.equal(r.tail, 0)
  assert.equal(r.late, 1)
  assert.equal(r.alone, 0)
  assert.equal(r.minGap, 80)
  assert.equal(r.verdict, 'the freeze rode behind the burst but beyond the tail (gap 80s) - the arrow stretches')
})

test('the arrow splits when the freezes take different seats', () => {
  const lines = [
    gauge(1, 10, 200, 5, 9000), // alone: no loss ahead of it
    loss('F3', 'ECONNRESET'),
    gauge(2, 30, 210, 6, 100),
    gauge(3, 50, 220, 7, 9000) // tail: anchor ts=10, gap 40... no - anchor is the FRESHEST gauge before the loss
  ]
  // F3's freshest preceding gauge is n=1 ts=10 (n=2 is AFTER the loss) -> gap 50-10=40 > 30 = late, not tail
  const r = burstFreezeJoin(lines)
  assert.equal(r.tail, 0)
  assert.equal(r.late, 1)
  assert.equal(r.alone, 1)
  assert.equal(r.verdict, 'the arrow splits - tail 0 / late 1 / alone 1')
})

test('the split rider: a second loss after the middle gauge re-anchors the second freeze', () => {
  const lines = [
    gauge(1, 10, 200, 5, 100),
    loss('F3', 'ECONNRESET'),
    gauge(2, 30, 210, 6, 100),
    loss('F4', 'EPIPE'),
    gauge(3, 45, 220, 7, 9000) // F4's anchor ts=30, gap 15 <= 30 -> tail
  ]
  const r = burstFreezeJoin(lines)
  assert.equal(r.freezes, 1)
  assert.equal(r.tail, 1)
  assert.equal(r.late, 0)
  assert.equal(r.minGap, 15)
})

test('the 5s fence: mainLate 4999 is no freeze, 5000 is', () => {
  const just = [gauge(1, 10, 200, 5, 120), loss('F3', 'ECONNRESET'), gauge(2, 25, 210, 6, 4999)]
  assert.equal(burstFreezeJoin(just).freezes, 0)
  const at = [gauge(1, 10, 200, 5, 120), loss('F3', 'ECONNRESET'), gauge(2, 25, 210, 6, 5000)]
  assert.equal(burstFreezeJoin(at).freezes, 1)
  assert.equal(burstFreezeJoin(at).tail, 1)
})

test('the tail fence: gap 30s rides the tail, gap 31s stretches', () => {
  const at = [gauge(1, 10, 200, 5, 120), loss('F3', 'ECONNRESET'), gauge(2, 40, 210, 6, 9000)]
  assert.equal(burstFreezeJoin(at).tail, 1)
  const past = [gauge(1, 10, 200, 5, 120), loss('F3', 'ECONNRESET'), gauge(2, 41, 210, 6, 9000)]
  assert.equal(burstFreezeJoin(past).late, 1)
})

test('junk fences fall back to the defaults', () => {
  const lines = [gauge(1, 10, 200, 5, 120), loss('F3', 'ECONNRESET'), gauge(2, 35, 210, 6, 9000)]
  const r = burstFreezeJoin(lines, { tailMs: NaN, stallMs: -5 })
  assert.equal(r.tailMs, BURST_FREEZE_TAIL_MS)
  assert.equal(r.stallMs, STALL_ADJACENT_MS)
  assert.equal(r.tail, 1) // gap 25s under the default 30s tail
})

test('junk clocks: a freeze ts behind its loss anchor clamps to gap 0 and keeps the tail', () => {
  const lines = [gauge(1, 50, 200, 5, 120), loss('F3', 'ECONNRESET'), gauge(2, 10, 210, 6, 9000)]
  const r = burstFreezeJoin(lines)
  assert.equal(r.tail, 1)
  assert.equal(r.minGap, 0)
})

test('ungauged bursts: losses before any gauge anchor null - a freeze after still prices by the last anchored loss', () => {
  const lines = [loss('F3', 'ECONNRESET'), loss('F4', 'EPIPE'), gauge(1, 20, 200, 5, 9000)]
  const r = burstFreezeJoin(lines)
  // F3 anchors null, F4 anchors null -> the freeze reads alone (no anchored loss ahead)
  assert.equal(r.alone, 1)
  assert.equal(r.verdict, 'the freeze stood alone - no burst rode ahead of it (freeze(s) 1)')
})

test('multiple freezes fold the gap spread into nearest/widest', () => {
  const lines = [
    gauge(1, 10, 200, 5, 120),
    loss('F3', 'ECONNRESET'),
    gauge(2, 25, 210, 6, 9000), // gap 15
    gauge(3, 50, 220, 7, 9000) // gap 40 -> late
  ]
  const r = burstFreezeJoin(lines)
  assert.equal(r.freezes, 2)
  assert.equal(r.tail, 1)
  assert.equal(r.late, 1)
  assert.equal(r.minGap, 15)
  assert.equal(r.maxGap, 40)
  assert.equal(r.verdict, 'the arrow splits - tail 1 / late 1 / alone 0')
})

test('the constants pin: the tail fence stays 30000 (the FACE 268 anatomy\'s own ruler)', () => {
  assert.equal(BURST_FREEZE_TAIL_MS, 30000)
})

test('one parser one truth: the gauge cells ride stormdriver\'s own regex, the losses sockloss\'s own', () => {
  assert.ok(PULSE_GAUGE_RE.test('[F7] b] n=9 ts=41s rss=300M late=8ms mainLate=24750ms'))
  assert.equal(PULSE_GAUGE_RE.exec('[F7] b] n=9 ts=41s rss=300M late=8ms mainLate=24750ms')[5], '24750')
  assert.ok(SOCK_LOSS_RE.test('F3 [F3] error: write ECONNRESET'))
})

test('the seat law: junk arithmetic reads null (the counts must fold)', () => {
  assert.equal(burstFreezeSeat({ freezes: 3, tail: 1, late: 1, alone: 0 }), null)
  assert.equal(burstFreezeSeat({ freezes: 0, tail: 0, late: 0, alone: 0 }), 'the burst rode alone - no freeze followed it')
  assert.equal(burstFreezeSeat({ freezes: 2, tail: 2, late: 0, alone: 0, minGap: 7, maxGap: 7 }),
    'the freeze rode behind the burst (gap 7s) - the arrow reads burst -> freeze')
  assert.equal(burstFreezeSeat({ freezes: 2, tail: 2, late: 0, alone: 0, minGap: 7, maxGap: 19 }),
    'the freeze rode behind the burst (nearest gap 7s / widest 19s) - the arrow reads burst -> freeze')
})
