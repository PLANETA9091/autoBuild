import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rescueUnclosedThinAir, rescueUnclosedThinAirConsistent, rescueUnclosedThinAirRow, rescueUnclosedOxygen } from '../../src/lib/rescue-ledger.mjs'
import { TRIGGER_O2_MAX } from '../../src/lib/o2trigger.mjs'

test("the unclosed starts' own thin air (v0.976.18) - the fold, the fence, the word", () => {
  // the FACE 312 = 38466304299 read's own shape byte-exact: the spread rode
  // oxygen 1..15 - the max named the full lungs, the min's own seat (F15
  // oxygen 1) fell inside the o2 band's own edge - the near-drown the max
  // hid, the fold prices it a record byte
  const face312 = [
    'F15 [F15] water: drowning rescue start (drowning, oxygen 1)',
    'F16 [F16] water: drowning rescue start (drowning, oxygen 13)',
    'F17 [F17] water: drowning rescue start (drowning, oxygen 15)'
  ]
  const e1 = rescueUnclosedThinAir(face312)
  assert.equal(e1.priced, 3)
  assert.equal(e1.thin, 1)
  assert.equal(e1.thinMin, 1)
  assert.equal(e1.thinMax, 1)
  assert.equal(e1.unpriced, 0)
  assert.equal(rescueUnclosedThinAirConsistent(e1), true)
  const row1 = rescueUnclosedThinAirRow(e1)
  assert.ok(row1.includes(`the unclosed starts' own thin air (v0.976.18): 1 unclosed start(s) rode air inside the o2 band's own edge <=${TRIGGER_O2_MAX} (oxygen 1..1) - the walk's own lateness priced the near-drown the spread's own max hides`))
  assert.ok(!row1.includes('rode the air unnamed'))
  // the honest silence: the airs rode above the band's edge - the word
  // prices nothing (the FACE 311 shape: oxygen 12..13, the band never rode)
  const face311 = [
    '[F10] water: drowning rescue start (drowning, oxygen 13)',
    '[F15] water: drowning rescue start (drowning, oxygen 12)'
  ]
  const e2 = rescueUnclosedThinAir(face311)
  assert.equal(e2.priced, 2)
  assert.equal(e2.thin, 0)
  assert.equal(e2.thinMin, null)
  assert.equal(e2.thinMax, null)
  assert.equal(rescueUnclosedThinAirConsistent(e2), true)
  assert.equal(rescueUnclosedThinAirRow(e2), null)
  // the band's own edge byte: the edge itself rides the band (o2 <= 10),
  // one above it stays outside - the census's own cell, never forked
  const edge = rescueUnclosedThinAir([
    'F9 [F9] water: drowning rescue start (drowning, oxygen 10)',
    'F1 [F1] water: drowning rescue start (drowning, oxygen 11)'
  ])
  assert.equal(edge.priced, 2)
  assert.equal(edge.thin, 1)
  assert.equal(edge.thinMin, TRIGGER_O2_MAX)
  assert.equal(edge.thinMax, TRIGGER_O2_MAX)
  const rowE = rescueUnclosedThinAirRow(edge)
  assert.ok(rowE.includes(`<=${TRIGGER_O2_MAX} (oxygen 10..10)`))
  // the thin spread's own image: two thin seats price min..max inside the band
  const spread = rescueUnclosedThinAir([
    'F9 [F9] water: drowning rescue start (drowning, oxygen 2)',
    'F1 [F1] water: drowning rescue start (drowning, oxygen 9)',
    'F5 [F5] water: drowning rescue start (drowning, oxygen 14)'
  ])
  assert.equal(spread.thin, 2)
  assert.equal(spread.thinMin, 2)
  assert.equal(spread.thinMax, 9)
  assert.equal(rescueUnclosedThinAirConsistent(spread), true)
  assert.ok(rescueUnclosedThinAirRow(spread).includes('(oxygen 2..9)'))
  // the honest unpriced seat: a start line without the air byte rides the
  // unpriced count (the one classifier's own law - the fold prices what
  // rode, never invents)
  const e3 = rescueUnclosedThinAir([
    'F15 [F15] water: drowning rescue start (drowning, oxygen 1)',
    '[F18] water: drowning rescue start (drowning, oxygen unknown)'
  ])
  assert.equal(e3.priced, 1)
  assert.equal(e3.thin, 1)
  assert.equal(e3.unpriced, 1)
  assert.equal(rescueUnclosedThinAirConsistent(e3), true)
  const row3 = rescueUnclosedThinAirRow(e3)
  assert.ok(row3.includes('1 start line(s) rode the air unnamed'))
  // the honest zeros: no unclosed starts - the empty book prices nothing
  const e4 = rescueUnclosedThinAir([])
  assert.equal(e4.priced, 0)
  assert.equal(e4.thin, 0)
  assert.equal(e4.unpriced, 0)
  assert.equal(rescueUnclosedThinAirConsistent(e4), true)
  assert.equal(rescueUnclosedThinAirRow(e4), null)
  // the one-classifier law: the fold reads the same literal the v0.976.14
  // oxygen fold reads - the two images agree on every priced seat
  const ox = rescueUnclosedOxygen(face312)
  assert.equal(ox.count, e1.priced)
  assert.equal(ox.min, 1)
  assert.equal(ox.max, 15)
  // the junk seats
  assert.equal(rescueUnclosedThinAir(null), null)
  assert.equal(rescueUnclosedThinAir('junk'), null)
  assert.equal(rescueUnclosedThinAir([42]), null)
  assert.equal(rescueUnclosedThinAirRow(null), null)
  assert.equal(rescueUnclosedThinAirRow('junk'), null)
  assert.equal(rescueUnclosedThinAirRow({ priced: 0, thin: 0, thinMin: null, thinMax: null, unpriced: 0 }), null)
})

test("the unclosed starts' own thin air fence (v0.976.18) - the image, the band's own edge, the lie", () => {
  const base = { priced: 3, thin: 1, thinMin: 1, thinMax: 1, unpriced: 0 }
  assert.equal(rescueUnclosedThinAirConsistent(base), true)
  // the honest nulls: a thinless fold prices null bookends
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 2, thin: 0, thinMin: null, thinMax: null, unpriced: 0 }), true)
  // a thinless fold with a priced bookend lies
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 2, thin: 0, thinMin: 3, thinMax: null, unpriced: 0 }), false, 'a thinless min lies')
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 2, thin: 0, thinMin: null, thinMax: 4, unpriced: 0 }), false, 'a thinless max lies')
  // the thin never outruns the priced
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 1, thin: 2, thinMin: 1, thinMax: 2, unpriced: 0 }), false, 'an over-thin lies')
  // the thin airs ride the band's own edge 1..10 - outside the band lies
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 1, thin: 1, thinMin: 0, thinMax: 5, unpriced: 0 }), false, 'air 0 lies the band image')
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 1, thin: 1, thinMin: 1, thinMax: 11, unpriced: 0 }), false, 'air past the edge lies')
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 1, thin: 1, thinMin: 1, thinMax: TRIGGER_O2_MAX, unpriced: 0 }), true, 'the edge itself rides')
  // the min never outruns the max
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 2, thin: 2, thinMin: 5, thinMax: 2, unpriced: 0 }), false, 'a regressed span lies')
  // the counts ride integers
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 1.5, thin: 1, thinMin: 1, thinMax: 1, unpriced: 0 }), false, 'a fractional priced lies')
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 1, thin: -1, thinMin: 1, thinMax: 1, unpriced: 0 }), false, 'a negative thin lies')
  assert.equal(rescueUnclosedThinAirConsistent({ priced: 1, thin: 1, thinMin: 1, thinMax: 1, unpriced: -1 }), false, 'a negative unpriced lies')
  // the junk folds
  assert.equal(rescueUnclosedThinAirConsistent(null), false)
  assert.equal(rescueUnclosedThinAirConsistent('junk'), false)
  assert.equal(rescueUnclosedThinAirConsistent([1]), false)
})
