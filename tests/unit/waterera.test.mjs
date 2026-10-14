// (v0.976.43) THE WATERLINE'S OWN ERA - the word's own pin battery.
// One pin: the field's two era arcs byte-exact (326/327/328/329 the
// birth arc, 327/328/329/330 the second walk), the slide's own era
// priced by the law the field never rode, the mixed-arc silences (the
// nine field arcs the swing interrupted), the held step, the sparse
// lens, and the fence battery through the family's own law.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { waterEraConsistent, waterEraRow } from '../../src/lib/waterera.mjs'

// the field's own peak images (stormcensus's own rss peaks, face by
// face: 319 433M, 320 399M, 321 391M, 322 426M, 323 480M, 324 449M,
// 325 495M, 326 405M, 327 409M, 328 417M, 329 439M, 330 525M)
const face = (peak) => ({ peakM: peak })
const F = {
  319: face(433), 320: face(399), 321: face(391), 322: face(426),
  323: face(480), 324: face(449), 325: face(495), 326: face(405),
  327: face(409), 328: face(417), 329: face(439), 330: face(525)
}

test('the waterline\'s own era - the field\'s two arcs byte-exact + the silences + the fence battery', () => {
  // --- the field's own two era arcs, byte-exact ---
  assert.equal(
    waterEraRow({ deep: F[326], back: F[327], prev: F[328], cur: F[329] }),
    'the waterline\'s own era (v0.976.43): the rise ran three steps deep - 405M -> 409M (+4) -> 417M (+8) -> 439M (+22) - the climb\'s own era (the trend prices each run one pair at a time - the era is the run\'s own shape)'
  )
  assert.equal(
    waterEraRow({ deep: F[327], back: F[328], prev: F[329], cur: F[330] }),
    'the waterline\'s own era (v0.976.43): the rise ran three steps deep - 409M -> 417M (+8) -> 439M (+22) -> 525M (+86) - the climb\'s own era (the trend prices each run one pair at a time - the era is the run\'s own shape)'
  )
  // --- the slide's own era priced by the law (the field never rode
  // it - the bars never invent the RIDE, the law still prices the
  // shape) ---
  assert.equal(
    waterEraRow({ deep: face(500), back: face(460), prev: face(420), cur: face(380) }),
    'the waterline\'s own era (v0.976.43): the fall ran three steps deep - 500M -> 460M (-40) -> 420M (-40) -> 380M (-40) - the slide\'s own era (the trend prices each run one pair at a time - the era is the run\'s own shape)'
  )

  // --- the mixed-arc silences: the nine field arcs the swing
  // interrupted (the run at most once per arc) ---
  assert.equal(waterEraRow({ deep: F[319], back: F[320], prev: F[321], cur: F[322] }), null) // -34, -8, +35
  assert.equal(waterEraRow({ deep: F[320], back: F[321], prev: F[322], cur: F[323] }), null) // -8, +35, +54
  assert.equal(waterEraRow({ deep: F[321], back: F[322], prev: F[323], cur: F[324] }), null) // +35, +54, -23
  assert.equal(waterEraRow({ deep: F[322], back: F[323], prev: F[324], cur: F[325] }), null) // +54, -23, +46
  assert.equal(waterEraRow({ deep: F[323], back: F[324], prev: F[325], cur: F[326] }), null) // -23, +46, -90
  assert.equal(waterEraRow({ deep: F[324], back: F[325], prev: F[326], cur: F[327] }), null) // +46, -90, +4
  assert.equal(waterEraRow({ deep: F[325], back: F[326], prev: F[327], cur: F[328] }), null) // -90, +4, +8
  // the swing in the middle
  assert.equal(waterEraRow({ deep: face(400), back: face(440), prev: face(400), cur: face(440) }), null) // +40, -40, +40
  // the run then the held step (the held law)
  assert.equal(waterEraRow({ deep: face(400), back: face(410), prev: face(420), cur: face(420) }), null)

  // --- the sparse lens: a peakless face prices no era ---
  assert.equal(waterEraRow({ deep: face(null), back: F[328], prev: F[329], cur: F[330] }), null)
  assert.equal(waterEraRow({ deep: F[327], back: face(null), prev: F[329], cur: F[330] }), null)
  assert.equal(waterEraRow({ deep: F[327], back: F[328], prev: face(undefined), cur: F[330] }), null)

  // --- the fence battery through the family's own law ---
  // the no-carrier null pass
  assert.equal(waterEraRow(null), null)
  assert.equal(waterEraRow(undefined), null)
  // the missing face
  assert.equal(waterEraRow({ back: F[328], prev: F[329], cur: F[330] }), null)
  assert.equal(waterEraRow({ deep: F[327], prev: F[329], cur: F[330] }), null)
  assert.equal(waterEraRow({ deep: F[327], back: F[328], cur: F[330] }), null)
  assert.equal(waterEraRow({ deep: F[327], back: F[328], prev: F[329] }), null)
  // the array is not a fold
  assert.equal(waterEraRow([F[327], F[328], F[329], F[330]]), null)
  // the fractional peak
  assert.equal(waterEraRow({ deep: face(405.5), back: F[328], prev: F[329], cur: F[330] }), null)
  assert.equal(waterEraRow({ deep: F[327], back: face(417.5), prev: F[329], cur: F[330] }), null)
  // the negative peak
  assert.equal(waterEraRow({ deep: face(-405), back: F[328], prev: F[329], cur: F[330] }), null)
  // the string peak
  assert.equal(waterEraRow({ deep: { peakM: '439' }, back: F[328], prev: F[329], cur: F[330] }), null)

  // --- the fence's own boolean face ---
  assert.equal(waterEraConsistent({ deep: F[327], back: F[328], prev: F[329], cur: F[330] }), true)
  assert.equal(waterEraConsistent(null), false)
  assert.equal(waterEraConsistent('no'), false)
  assert.equal(waterEraConsistent([F[327]]), false)
  assert.equal(waterEraConsistent({ deep: face(1), back: face(2), prev: face(3), cur: face(4) }), true)
})
