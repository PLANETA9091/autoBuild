import { test } from 'node:test'
import assert from 'node:assert/strict'
import { RESCUE_UNKNOWN_RE, rescueUnclosedUnknown, rescueUnclosedUnknownConsistent, rescueUnclosedUnknownRow } from '../../src/lib/rescueunknown.mjs'

test("the unclosed starts' own unknown air (v0.976.26) - the fold, the fence, the word", () => {
  // the FACE 320 = 38498739267 read's own shape byte-exact: F5's
  // unclosed start rode 'oxygen ?' - the emitter's own sentinel
  // (bot.oxygenLevel ?? '?') names the sensor's own silence: the air
  // the start line never held (not a band byte - the arm's blind skin
  // is -1; not an air reading - the airs' own spread would lie)
  const face320Book = [
    'F5 [F5] water: drowning rescue start (drowning, oxygen ?)',
    'F1 [F1] water: drowning rescue start (drowning, oxygen 12)',
    'F19 [F19] water: drowning rescue start (drowning, oxygen 15)'
  ]
  assert.ok(RESCUE_UNKNOWN_RE.test(face320Book[0]), 'the lens reads the sentinel byte whole')
  const f320 = rescueUnclosedUnknown(face320Book)
  assert.equal(rescueUnclosedUnknownConsistent(f320), true)
  assert.equal(f320.unknown, 1)
  // the airs belong to the airs' own words - this lens defers them
  assert.equal(f320.unpriced, 2)
  const row1 = rescueUnclosedUnknownRow(f320)
  assert.ok(row1.includes("the unclosed starts' own unknown air (v0.976.26): 1 unclosed start(s) rode the '?' byte"))
  assert.ok(row1.includes("the emitter's own sentinel names the sensor's own silence: the air the start line never held"))
  // the byte's own field history: the verbatim riders from the cached
  // faces (face33's F7, face294's F12, face308's F6) match the lens -
  // the byte's shape stable across the walks (each start's next line
  // rode 'pass 0 ... o2=20' - the sensor's first word rode the next
  // line, the row never guesses the pairing)
  assert.ok(RESCUE_UNKNOWN_RE.test('F7 [F7] water: drowning rescue start (drowning, oxygen ?)'), 'face33 rider')
  assert.ok(RESCUE_UNKNOWN_RE.test('F12 [F12] water: drowning rescue start (drowning, oxygen ?)'), 'face294 rider')
  assert.ok(RESCUE_UNKNOWN_RE.test('F6 [F6] water: drowning rescue start (drowning, oxygen ?)'), 'face308 rider')
  const allUnknown = rescueUnclosedUnknown([
    'F7 [F7] water: drowning rescue start (drowning, oxygen ?)',
    'F12 [F12] water: drowning rescue start (drowning, oxygen ?)'
  ])
  assert.equal(allUnknown.unknown, 2)
  assert.equal(allUnknown.unpriced, 0)
  assert.ok(rescueUnclosedUnknownRow(allUnknown).includes('2 unclosed start(s) rode the \'?\' byte'))
  // the blind byte belongs to the blind seat's own word - this lens
  // defers it (the -1 line rides the honest unpriced count here)
  const withBlind = rescueUnclosedUnknown([
    'F17 [F17] water: drowning rescue start (drowning, oxygen -1)',
    'F5 [F5] water: drowning rescue start (drowning, oxygen ?)'
  ])
  assert.equal(withBlind.unknown, 1)
  assert.equal(withBlind.unpriced, 1)
  // the honest zero: a sentinelless book prices the honest silence
  const noUnknown = rescueUnclosedUnknown([
    'F15 [F15] water: drowning rescue start (drowning, oxygen 4)',
    'F17 [F17] water: drowning rescue start (drowning, oxygen -1)'
  ])
  assert.equal(noUnknown.unknown, 0)
  assert.equal(noUnknown.unpriced, 2)
  assert.equal(rescueUnclosedUnknownRow(noUnknown), null)
  // the fallback line the lens cannot read rides the unpriced count
  // (the honest junk - the fold refuses to name it)
  const withJunk = rescueUnclosedUnknown(face320Book.concat(['(start line unavailable)', 'junk line']))
  assert.equal(withJunk.unknown, 1)
  assert.equal(withJunk.unpriced, 4)
  // the junk seats
  assert.equal(rescueUnclosedUnknown(null), null)
  assert.equal(rescueUnclosedUnknown('not an array'), null)
  assert.equal(rescueUnclosedUnknown([42, null, {}]), null)
  assert.equal(rescueUnclosedUnknownRow(null), null)
  assert.equal(rescueUnclosedUnknownRow('junk'), null)
  assert.equal(rescueUnclosedUnknownRow(undefined), null)
})

test("the unknown air's own fence - the word never rides a lie", () => {
  // the fence battery: the fractional/negative/missing counts lie
  assert.equal(rescueUnclosedUnknownConsistent({ unknown: 1.5, unpriced: 0 }), false)
  assert.equal(rescueUnclosedUnknownConsistent({ unknown: -1, unpriced: 0 }), false)
  assert.equal(rescueUnclosedUnknownConsistent({ unknown: 1, unpriced: -2 }), false)
  assert.equal(rescueUnclosedUnknownConsistent({ unknown: 1.5, unpriced: 2.5 }), false)
  assert.equal(rescueUnclosedUnknownConsistent({ unknown: 1 }), false)
  assert.equal(rescueUnclosedUnknownConsistent({ unpriced: 1 }), false)
  assert.equal(rescueUnclosedUnknownConsistent({}), false)
  assert.equal(rescueUnclosedUnknownConsistent(null), false)
  assert.equal(rescueUnclosedUnknownConsistent(undefined), false)
  assert.equal(rescueUnclosedUnknownConsistent('junk'), false)
  assert.equal(rescueUnclosedUnknownConsistent([1, 2]), false)
  // the honest zeros prove themselves
  assert.equal(rescueUnclosedUnknownConsistent({ unknown: 0, unpriced: 0 }), true)
  assert.equal(rescueUnclosedUnknownConsistent({ unknown: 3, unpriced: 7 }), true)
  // a fold that cannot prove itself prices no word
  assert.equal(rescueUnclosedUnknownRow({ unknown: 1.5, unpriced: 0 }), null)
  assert.equal(rescueUnclosedUnknownRow({ unknown: -1, unpriced: 0 }), null)
  // the lens never leaks past the sentinel byte: a near-miss line the
  // emitter's grammar writes differently (the numeric air with the
  // same shape) prices the deferral, never the unknown
  const nearMiss = rescueUnclosedUnknown([
    'F5 [F5] water: drowning rescue start (drowning, oxygen 20)',
    'F5 [F5] water: drowning rescue start (drowning, oxygen -1)',
    'F5 [F5] water: drowning rescue start (drowning, oxygen ?)'
  ])
  assert.equal(nearMiss.unknown, 1)
  assert.equal(nearMiss.unpriced, 2)
})
