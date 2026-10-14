// (v0.976.41) THE FLOOR'S OWN SIDE TREND - the word's own pin battery.
// One pin: every field branch byte-exact (the nine trios the field
// priced by hand eleven faces deep: 319/320/321 through 327/328/329),
// the honest silences (the rest step the field never held, the
// no-carrier null pass), and the fence battery through the family's
// own law (the moved floor, the fractional, the negative closures,
// the missing, the null, the string, the gauge-less face).

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { floorTrendConsistent, floorTrendRow } from '../../src/lib/floortrend.mjs'

// the field's own side images (valveMarginJoin's own margins, face by
// face: 319 under 20, 320 under 50, 321 under 59, 322 under 23, 323
// past -32, 324 under 3, 325 past -45, 326 under 45, 327 under 41,
// 328 under 33, 329 under 11; the valve's own 450M floor, the voice
// silent every face)
const face = (margin) => ({ marginValveM: margin, valveFloorM: 450, valveClosures: 0 })
const F = {
  319: face(20), 320: face(50), 321: face(59), 322: face(23),
  323: face(-32), 324: face(3), 325: face(-45), 326: face(45),
  327: face(41), 328: face(33), 329: face(11)
}

test('the floor\'s own side trend - the field\'s nine trios byte-exact + the silences + the fence battery', () => {
  // --- the field's own nine trios, byte-exact ---
  // the under's own hold rode four times (a repeat then a repeat)
  assert.equal(
    floorTrendRow({ back: F[319], prev: F[320], cur: F[321] }),
    'the floor\'s own side trend (v0.976.41): the under held three faces deep - 20M under -> 50M under -> 59M under - the under\'s own hold (the echo prices each repeat one step at a time - the hold is the pair\'s own shape)'
  )
  assert.equal(
    floorTrendRow({ back: F[320], prev: F[321], cur: F[322] }),
    'the floor\'s own side trend (v0.976.41): the under held three faces deep - 50M under -> 59M under -> 23M under - the under\'s own hold (the echo prices each repeat one step at a time - the hold is the pair\'s own shape)'
  )
  assert.equal(
    floorTrendRow({ back: F[326], prev: F[327], cur: F[328] }),
    'the floor\'s own side trend (v0.976.41): the under held three faces deep - 45M under -> 41M under -> 33M under - the under\'s own hold (the echo prices each repeat one step at a time - the hold is the pair\'s own shape)'
  )
  assert.equal(
    floorTrendRow({ back: F[327], prev: F[328], cur: F[329] }),
    'the floor\'s own side trend (v0.976.41): the under held three faces deep - 41M under -> 33M under -> 11M under - the under\'s own hold (the echo prices each repeat one step at a time - the hold is the pair\'s own shape)'
  )
  // the under's own bounce rode twice (a release then a return)
  assert.equal(
    floorTrendRow({ back: F[322], prev: F[323], cur: F[324] }),
    'the floor\'s own side trend (v0.976.41): the under left and returned one walk later - 23M under -> 32M past -> 3M under - the under\'s own bounce (the echo prices the release and the return one step at a time - the bounce is the pair\'s own shape)'
  )
  assert.equal(
    floorTrendRow({ back: F[324], prev: F[325], cur: F[326] }),
    'the floor\'s own side trend (v0.976.41): the under left and returned one walk later - 3M under -> 45M past -> 45M under - the under\'s own bounce (the echo prices the release and the return one step at a time - the bounce is the pair\'s own shape)'
  )
  // the under's own settle rode once (a return then a repeat)
  assert.equal(
    floorTrendRow({ back: F[325], prev: F[326], cur: F[327] }),
    'the floor\'s own side trend (v0.976.41): the under arrived and held - 45M past -> 45M under -> 41M under - the under\'s own settle (the echo prices the return and the repeat one step at a time - the settle is the pair\'s own shape)'
  )
  // the under's own leave rode once (a repeat then a release)
  assert.equal(
    floorTrendRow({ back: F[321], prev: F[322], cur: F[323] }),
    'the floor\'s own side trend (v0.976.41): the under held, then left - 59M under -> 23M under -> 32M past - the under\'s own leave (the echo prices the repeat and the release one step at a time - the leave is the pair\'s own shape)'
  )
  // the under's own pass rode once (a return then a release)
  assert.equal(
    floorTrendRow({ back: F[323], prev: F[324], cur: F[325] }),
    'the floor\'s own side trend (v0.976.41): the under arrived and left, never held - 32M past -> 3M under -> 45M past - the under\'s own pass (the echo prices the return and the release one step at a time - the pass is the pair\'s own shape)'
  )

  // --- the honest silences: every trio a rest step rode (the past's
  // own persistence the field never held one walk, let alone two) ---
  assert.equal(floorTrendRow({ back: face(-32), prev: face(-45), cur: face(-45 + 11) }), null) // rest+return
  assert.equal(floorTrendRow({ back: face(-45), prev: face(-32), cur: face(3) }), null) // rest+return (the unborn past's own shapes)
  assert.equal(floorTrendRow({ back: face(-45), prev: face(-45), cur: face(-45) }), null) // rest+rest - the past held (never rode)
  assert.equal(floorTrendRow({ back: face(20), prev: face(-32), cur: face(-45) }), null) // release+rest

  // the boundary law rides: a peak exactly at the line is never under
  // (margin <= 0 the past side) - the release's own boundary byte
  assert.equal(floorTrendRow({ back: face(1), prev: face(1), cur: face(0) }),
    'the floor\'s own side trend (v0.976.41): the under held, then left - 1M under -> 1M under -> 0M past - the under\'s own leave (the echo prices the repeat and the release one step at a time - the leave is the pair\'s own shape)')

  // --- the fence battery through the family's own law ---
  // the no-carrier null pass
  assert.equal(floorTrendRow(null), null)
  assert.equal(floorTrendRow(undefined), null)
  // the missing face
  assert.equal(floorTrendRow({ back: F[327], prev: F[328] }), null)
  assert.equal(floorTrendRow({ back: F[327], cur: F[329] }), null)
  assert.equal(floorTrendRow({ prev: F[328], cur: F[329] }), null)
  // the array is not a fold
  assert.equal(floorTrendRow([F[327], F[328], F[329]]), null)
  // the gauge-less face (the sparse lens)
  assert.equal(floorTrendRow({ back: null, prev: F[328], cur: F[329] }), null)
  assert.equal(floorTrendRow({ back: F[327], prev: null, cur: F[329] }), null)
  assert.equal(floorTrendRow({ back: F[327], prev: F[328], cur: null }), null)
  // the fractional margin
  assert.equal(floorTrendRow({ back: face(20.5), prev: F[328], cur: F[329] }), null)
  assert.equal(floorTrendRow({ back: F[327], prev: face(33.5), cur: F[329] }), null)
  // the fractional floor and the non-positive floor
  assert.equal(floorTrendRow({ back: { marginValveM: 41, valveFloorM: 450.5, valveClosures: 0 }, prev: F[328], cur: F[329] }), null)
  assert.equal(floorTrendRow({ back: { marginValveM: 41, valveFloorM: 0, valveClosures: 0 }, prev: F[328], cur: F[329] }), null)
  // the negative closures
  assert.equal(floorTrendRow({ back: { marginValveM: 41, valveFloorM: 450, valveClosures: -1 }, prev: F[328], cur: F[329] }), null)
  // the string margin
  assert.equal(floorTrendRow({ back: { marginValveM: '41', valveFloorM: 450, valveClosures: 0 }, prev: F[328], cur: F[329] }), null)
  // the moved floor prices nothing across the whole trio (the config's
  // own story, the fence's own law)
  assert.equal(floorTrendRow({ back: { marginValveM: 41, valveFloorM: 460, valveClosures: 0 }, prev: F[328], cur: F[329] }), null)
  assert.equal(floorTrendRow({ back: F[327], prev: { marginValveM: 33, valveFloorM: 470, valveClosures: 0 }, cur: F[329] }), null)

  // --- the fence's own boolean face ---
  assert.equal(floorTrendConsistent({ back: F[327], prev: F[328], cur: F[329] }), true)
  assert.equal(floorTrendConsistent(null), false)
  assert.equal(floorTrendConsistent('no'), false)
  assert.equal(floorTrendConsistent([F[327]]), false)
  assert.equal(floorTrendConsistent({ back: { marginValveM: 41, valveFloorM: 450, valveClosures: 0 }, prev: F[328], cur: F[329] }), true)
})
