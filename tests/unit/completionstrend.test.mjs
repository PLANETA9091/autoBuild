import { test } from 'node:test'
import assert from 'node:assert/strict'
import { completionsTrendRow, completionsTrendConsistent, completionsOfLedger } from '../../src/lib/completionstrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the completions' own trend (v0.976.107) - the smelt ledger's completion book's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN FULL-SPECTRUM BIRTH AT THE UNITS' OWN YIELD
  // SCALE - twenty-four chains speak (eleven swings + six fades +
  // seven swells), two honest silences beside, the zero rode once
  // (the face 352 one-face drought the batch's own zero face the
  // SAME walk). THE FIELD'S OWN BIRTH RIDE byte-exact: the FACE
  // 350 CHAIN THE SWING (348 rode 14, 349 rode 20, 350 rode 5)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, this word prices the completions' own mass across the walks, co-existence by seat never by duplication)"
  const birth = completionsTrendRow({ back: { completions: 14 }, prev: { completions: 20 }, cur: { completions: 5 } })
  assert.equal(birth, "the completions' own trend (v0.976.107): the completions' own swing - 14 -> 20 (+6) -> 5 (-15) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN FADES - the FACE 351 chain 20 -> 5 -> 2, the
  // FACE 352 chain 5 -> 2 -> 0 (THE DROUGHT'S OWN FLOOR the zero a
  // lawful count), the FACE 357 chain 75 -> 38 -> 21 (the top's own
  // slide), the FACE 363 CHAIN 121 -> 11 (-110) -> 1 (-10) (THE
  // SLIDE'S OWN FLOOR the field's own biggest single step paying),
  // the FACE 367 chain 93 -> 64 -> 14, the FACE 370 chain 34 -> 26
  // -> 15
  const droughtFloor = completionsTrendRow({ back: { completions: 5 }, prev: { completions: 2 }, cur: { completions: 0 } })
  assert.equal(droughtFloor, "the completions' own trend (v0.976.107): the completions' fall ran two steps deep - 5 -> 2 (-3) -> 0 (-2) - the completions' own fade " + TAIL)
  const topSlide = completionsTrendRow({ back: { completions: 75 }, prev: { completions: 38 }, cur: { completions: 21 } })
  assert.equal(topSlide, "the completions' own trend (v0.976.107): the completions' fall ran two steps deep - 75 -> 38 (-37) -> 21 (-17) - the completions' own fade " + TAIL)
  const slideFloor = completionsTrendRow({ back: { completions: 121 }, prev: { completions: 11 }, cur: { completions: 1 } })
  assert.equal(slideFloor, "the completions' own trend (v0.976.107): the completions' fall ran two steps deep - 121 -> 11 (-110) -> 1 (-10) - the completions' own fade " + TAIL)
  // THE FIELD'S OWN SWINGS - the FACE 353 chain 2 -> 0 -> 24 (the
  // drought's own exit), the FACE 356 chain 29 -> 75 (+46) -> 38
  // (-37) (the top's own payback), the FACE 358 chain 38 -> 21 ->
  // 44, the FACE 362 chain 58 -> 121 (+63) -> 11 (-110) (THE TOP'S
  // OWN PAYBACK THE FIELD'S OWN BIGGEST SINGLE STEP), the FACE 364
  // chain 11 -> 1 -> 16, the FACE 366 chain 16 -> 93 (+77) -> 64,
  // the FACE 368 chain 64 -> 14 -> 34, the FACE 369 chain 14 -> 34
  // -> 26, the FACE 373 chain 15 -> 50 (+35) -> 15 (-35) (the
  // trade's own round trip), the FACE 374 chain 50 -> 15 -> 40
  const droughtExit = completionsTrendRow({ back: { completions: 2 }, prev: { completions: 0 }, cur: { completions: 24 } })
  assert.equal(droughtExit, "the completions' own trend (v0.976.107): the completions' own swing - 2 -> 0 (-2) -> 24 (+24) - the rise and the fall traded seats between the walks " + TAIL)
  const biggestStep = completionsTrendRow({ back: { completions: 58 }, prev: { completions: 121 }, cur: { completions: 11 } })
  assert.equal(biggestStep, "the completions' own trend (v0.976.107): the completions' own swing - 58 -> 121 (+63) -> 11 (-110) - the rise and the fall traded seats between the walks " + TAIL)
  const roundTrip = completionsTrendRow({ back: { completions: 15 }, prev: { completions: 50 }, cur: { completions: 15 } })
  assert.equal(roundTrip, "the completions' own trend (v0.976.107): the completions' own swing - 15 -> 50 (+35) -> 15 (-35) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWELLS - the FACE 354 chain 0 -> 24 -> 29, the
  // FACE 355 chain 24 -> 29 -> 75, the FACE 359/360/361 chains
  // THREE SWELLS STRAIGHT (21 -> 44 -> 54, 44 -> 54 -> 58, 54 ->
  // 58 -> 121 THE FIELD'S OWN TOP), the FACE 365 chain 1 -> 16 ->
  // 93 (the refill's own build), the FACE 375 chain 15 -> 40 -> 62
  // (the word's own live window)
  const build = completionsTrendRow({ back: { completions: 24 }, prev: { completions: 29 }, cur: { completions: 75 } })
  assert.equal(build, "the completions' own trend (v0.976.107): the completions' rise ran two steps deep - 24 -> 29 (+5) -> 75 (+46) - the completions' own swell " + TAIL)
  const top = completionsTrendRow({ back: { completions: 54 }, prev: { completions: 58 }, cur: { completions: 121 } })
  assert.equal(top, "the completions' own trend (v0.976.107): the completions' rise ran two steps deep - 54 -> 58 (+4) -> 121 (+63) - the completions' own swell " + TAIL)
  const refill = completionsTrendRow({ back: { completions: 1 }, prev: { completions: 16 }, cur: { completions: 93 } })
  assert.equal(refill, "the completions' own trend (v0.976.107): the completions' rise ran two steps deep - 1 -> 16 (+15) -> 93 (+77) - the completions' own swell " + TAIL)
  const live = completionsTrendRow({ back: { completions: 15 }, prev: { completions: 40 }, cur: { completions: 62 } })
  assert.equal(live, "the completions' own trend (v0.976.107): the completions' rise ran two steps deep - 15 -> 40 (+25) -> 62 (+22) - the completions' own swell " + TAIL)
  // THE HONEST SILENCES - the field rode them TWICE: the held
  // second (the FACE 371 chain 26 -> 15 -> 15) and the held first
  // (the FACE 372 chain 15 -> 15 -> 50 - the surge rides the
  // silence); the clean trio rides the same law
  assert.equal(completionsTrendRow({ back: { completions: 26 }, prev: { completions: 15 }, cur: { completions: 15 } }), null)
  assert.equal(completionsTrendRow({ back: { completions: 15 }, prev: { completions: 15 }, cur: { completions: 50 } }), null)
  assert.equal(completionsTrendRow({ back: { completions: 8 }, prev: { completions: 8 }, cur: { completions: 8 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, droughtFloor, topSlide, slideFloor, droughtExit, biggestStep, roundTrip, build, top, refill, live]) {
    assert.ok(!row.includes('return'))
    assert.ok(!row.includes('repeat'))
    assert.ok(!row.includes('stay'))
    assert.ok(!row.includes('run '))
    assert.ok(!row.includes('owns '))
    assert.ok(!row.includes('dynasty'))
    assert.ok(!row.includes('turn'))
    assert.ok(row.includes('co-existence by seat never by duplication'))
  }
  // THE FENCE BATTERY - a fold that cannot prove itself prices
  // nothing (the fence law: the word never rides a lie); the ZERO
  // count is lawful (the smelt lane's own zero precedent v0.976.90
  // - the field's own face 352 the proof)
  assert.equal(completionsTrendRow(null), null)
  assert.equal(completionsTrendRow(undefined), null)
  assert.equal(completionsTrendRow('completions'), null)
  assert.equal(completionsTrendRow([1, 2, 3]), null)
  assert.equal(completionsTrendRow({ back: { completions: 1.5 }, prev: { completions: 0 }, cur: { completions: 0 } }), null)
  assert.equal(completionsTrendRow({ back: { completions: -1 }, prev: { completions: 0 }, cur: { completions: 0 } }), null)
  assert.equal(completionsTrendRow({ back: { completions: 1 }, prev: { completions: '2' }, cur: { completions: 0 } }), null)
  assert.equal(completionsTrendRow({ back: { completions: 1 }, prev: { completions: 2 } }), null)
  assert.equal(completionsTrendRow({ back: null, prev: { completions: 2 }, cur: { completions: 0 } }), null)
  assert.equal(completionsTrendRow({ back: { completions: 0 }, prev: { completions: 0 }, cur: { completions: 0 } }), null)
  assert.equal(completionsTrendConsistent({ back: { completions: 0 }, prev: { completions: 0 }, cur: { completions: 0 } }), true)
  assert.equal(completionsTrendConsistent({ back: { completions: 0 }, prev: { completions: 0 }, cur: { completions: 0.5 } }), false)
  // THE BOOK'S OWN READ - the two classes one book's own mass (the
  // fuel side's own completions and the clock side's own
  // completions join - the SAME join law the clip's own word holds
  // on the loss side); unknown shapes read zero
  assert.equal(completionsOfLedger({ fuelClipCompleted: 48, clockClipCompleted: 14 }), 62)
  assert.equal(completionsOfLedger({ fuelClipCompleted: 0, clockClipCompleted: 0 }), 0)
  assert.equal(completionsOfLedger({}), 0)
  assert.equal(completionsOfLedger(null), 0)
  assert.equal(completionsOfLedger(undefined), 0)
  assert.equal(completionsOfLedger({ fuelClipCompleted: -1, clockClipCompleted: 5 }), 5)
  // ONE-PARSER RIDE - the SAME smeltLedger images the fleet reader
  // holds: the face 375 window's own ledger folds through the
  // book's own arithmetic (fuel clips 5 (48 of 94 completed), the
  // clock clips 3 (14 of 19) - 48 + 14 = 62)
  const led = smeltLedger([
    '[F5] fuel clips the batch: 2 x oak_log completes 3 of 8 x sand (the rest re-smelts on the next chain)',
    '[F5] the clock clips the batch: the 80s window completes ~4 of 5 x sand (the rest re-smelts on the next chain)'
  ])
  assert.equal(led.fuelClipCompleted, 3)
  assert.equal(led.clockClipCompleted, 4)
  assert.equal(completionsOfLedger(led), 7)
})
