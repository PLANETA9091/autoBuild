import { test } from 'node:test'
import assert from 'node:assert/strict'
import { waterTrendRow, waterTrendConsistent } from '../../src/lib/watertrend.mjs'

test("the waterline's own trend (v0.976.34) - the fold, the fence, the word", () => {
  // the SWING's own shape byte-exact, the field's own arithmetic two
  // ways: FACE 323 -> 324 -> 325 rode 480 -> 449 -> 495M (the fall
  // traded seats with the rise, -31 then +46) and FACE 322 -> 323 ->
  // 324 rode 426 -> 480 -> 449M (the rise traded seats with the fall,
  // +54 then -31)
  const swing1 = waterTrendRow({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: 495 } })
  assert.ok(swing1.includes("the waterline's own trend (v0.976.34): the waterline's own swing - 480M -> 449M (-31) -> 495M (+46)"))
  assert.ok(swing1.includes('- the rise and the fall traded seats between the walks'))
  const swing2 = waterTrendRow({ back: { peakM: 426 }, prev: { peakM: 480 }, cur: { peakM: 449 } })
  assert.ok(swing2.includes("the waterline's own trend (v0.976.34): the waterline's own swing - 426M -> 480M (+54) -> 449M (-31)"))
  // the SLIDE'S OWN RUN byte-exact: the field's own history FACE 319
  // -> 320 -> 321 rode 433 -> 399 -> 391M - two consecutive falls
  // (-34 then -8) the recession's word priced one at a time
  const slide = waterTrendRow({ back: { peakM: 433 }, prev: { peakM: 399 }, cur: { peakM: 391 } })
  assert.ok(slide.includes("the waterline's own trend (v0.976.34): the fall ran two steps deep - 433M -> 399M (-34) -> 391M (-8)"))
  assert.ok(slide.includes("- the slide's own run (the recession's word prices each fall one step at a time"))
  // the CLIMB'S OWN RUN byte-exact: FACE 321 -> 322 -> 323 rode 391 ->
  // 426 -> 480M - two consecutive rises (+35 then +54) the creep's
  // word priced one at a time
  const climb = waterTrendRow({ back: { peakM: 391 }, prev: { peakM: 426 }, cur: { peakM: 480 } })
  assert.ok(climb.includes("the waterline's own trend (v0.976.34): the rise ran two steps deep - 391M -> 426M (+35) -> 480M (+54)"))
  assert.ok(climb.includes("- the climb's own run (the creep's word prices each rise one step at a time"))
  // the held step's honest silences: any peak-to-peak zero is no
  // direction (the family's own held law - the bars never invent)
  assert.equal(waterTrendRow({ back: { peakM: 449 }, prev: { peakM: 449 }, cur: { peakM: 495 } }), null)
  assert.equal(waterTrendRow({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: 449 } }), null)
  assert.equal(waterTrendRow({ back: { peakM: 449 }, prev: { peakM: 449 }, cur: { peakM: 449 } }), null)
  // the sparse faces price no trend (the gauge-less lens owns no
  // waterline - the sparse law)
  assert.equal(waterTrendRow({ back: { peakM: null }, prev: { peakM: 449 }, cur: { peakM: 495 } }), null)
  assert.equal(waterTrendRow({ back: { peakM: 480 }, prev: { peakM: null }, cur: { peakM: 495 } }), null)
  assert.equal(waterTrendRow({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: null } }), null)
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string peaks lie
  assert.equal(waterTrendConsistent({ back: { peakM: 480 }, prev: { peakM: 449.5 }, cur: { peakM: 495 } }), false)
  assert.equal(waterTrendConsistent({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: -1 } }), false)
  assert.equal(waterTrendConsistent({ back: { peakM: 480 }, prev: { peakM: 449 } }), false)
  assert.equal(waterTrendConsistent({ back: { peakM: '480' }, prev: { peakM: 449 }, cur: { peakM: 495 } }), false)
  assert.equal(waterTrendConsistent(null), false)
  assert.equal(waterTrendConsistent({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: 495 } }), true)
  // the one-parser law's own ride through the census's own images:
  // the field's own three-face fold FACE 323/324/325 hand-priced from
  // the real logs (stormcensus owns the peak - the same image the
  // creep's and recession's wires hold): 480 / 449 / 495 - the real
  // fold rides the swing byte-exact (the field proof rode decompose
  // itself on the real logs)
  const fieldRow = waterTrendRow({ back: { peakM: 480 }, prev: { peakM: 449 }, cur: { peakM: 495 } })
  assert.ok(fieldRow === swing1)
})
