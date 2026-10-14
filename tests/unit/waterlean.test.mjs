import { test } from 'node:test'
import assert from 'node:assert/strict'
import { waterLeanRow } from '../../src/lib/waterlean.mjs'
import { waterTrendConsistent } from '../../src/lib/watertrend.mjs'

test("the pair's own lean (v0.976.36) - the proportion, the fence, the word", () => {
  // THE DEEPENING byte-exact, the field's own arithmetic: FACE 326 =
  // 38521191638 rode the swing 449 -> 495 (+46) -> 405 (-90) - the
  // fall dug almost twice the rise's water (46 then 90)
  const deep1 = waterLeanRow({ back: { peakM: 449 }, prev: { peakM: 495 }, cur: { peakM: 405 } })
  assert.equal(deep1, "the waterline's own lean (v0.976.36): 46 then 90 - the second step dug the deeper water (the pair's own deepening - the trend's word prices the direction, the lean prices the size)")
  // the deepening rides inside the RUN too (shape-agnostic by law):
  // the climb's own run FACE 321 -> 322 -> 323 rode +35 then +54
  const deep2 = waterLeanRow({ back: { peakM: 391 }, prev: { peakM: 426 }, cur: { peakM: 480 } })
  assert.equal(deep2, "the waterline's own lean (v0.976.36): 35 then 54 - the second step dug the deeper water (the pair's own deepening - the trend's word prices the direction, the lean prices the size)")
  // THE EASING byte-exact: the slide's own run FACE 319 -> 320 -> 321
  // rode -34 then -8 - the second step softened (34 then 8)
  const ease1 = waterLeanRow({ back: { peakM: 433 }, prev: { peakM: 399 }, cur: { peakM: 391 } })
  assert.equal(ease1, "the waterline's own lean (v0.976.36): 34 then 8 - the second step eased (the pair's own easing - the trend's word prices the direction, the lean prices the size)")
  // the easing rides inside the SWING too: FACE 322 -> 323 -> 324 rode
  // +54 then -31 (54 then 31)
  const ease2 = waterLeanRow({ back: { peakM: 426 }, prev: { peakM: 480 }, cur: { peakM: 449 } })
  assert.equal(ease2, "the waterline's own lean (v0.976.36): 54 then 31 - the second step eased (the pair's own easing - the trend's word prices the direction, the lean prices the size)")
  // THE EVEN PAIR byte-exact: the balance's own seat (50 against 50)
  const even = waterLeanRow({ back: { peakM: 400 }, prev: { peakM: 450 }, cur: { peakM: 500 } })
  assert.equal(even, "the waterline's own lean (v0.976.36): 50 against 50 - the even pair (the balance's own seat - the size never leaned)")
  // the held pair's honest silence: any step zero is the trend's own
  // seat (the family's own held law - the bars never invent)
  assert.equal(waterLeanRow({ back: { peakM: 449 }, prev: { peakM: 449 }, cur: { peakM: 495 } }), null)
  assert.equal(waterLeanRow({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: 449 } }), null)
  assert.equal(waterLeanRow({ back: { peakM: 449 }, prev: { peakM: 449 }, cur: { peakM: 449 } }), null)
  // the fence rides the family's own law imported whole (never a
  // re-declaration): the sparse faces, the junk folds, the liars
  assert.equal(waterLeanRow({ back: { peakM: null }, prev: { peakM: 449 }, cur: { peakM: 495 } }), null)
  assert.equal(waterLeanRow({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: null } }), null)
  assert.equal(waterLeanRow({ back: { peakM: 480 }, prev: { peakM: 449.5 }, cur: { peakM: 495 } }), null)
  assert.equal(waterLeanRow({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: -1 } }), null)
  assert.equal(waterLeanRow({ back: { peakM: 480 }, prev: { peakM: 449 } }), null)
  assert.equal(waterLeanRow({ back: { peakM: '480' }, prev: { peakM: 449 }, cur: { peakM: 495 } }), null)
  assert.equal(waterLeanRow(null), null)
  assert.equal(waterTrendConsistent({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: 405 } }), true)
  // the seat law byte-pin: the lean never retells the direction's
  // shape (no 'swing', no 'run', no 'climb', no 'slide' in the row)
  for (const row of [deep1, deep2, ease1, ease2, even]) {
    assert.ok(!/swing|run|climb|slide/.test(row))
  }
})
