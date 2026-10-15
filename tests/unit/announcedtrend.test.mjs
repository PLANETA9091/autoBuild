import { test } from 'node:test'
import assert from 'node:assert/strict'
import { announcedTrendRow, announcedTrendConsistent, announcedOfLedger } from '../../src/lib/announcedtrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the announced's own trend (v0.976.110) - the smelt ledger's batch book's own size seat, the fence, the word", () => {
  // THE FAMILY'S OWN FULL-SPECTRUM BIRTH - twenty-six chains speak
  // (fourteen swings + seven fades + five swells) with the TWO
  // honest silences beside (the FACE 360/361 held pair). THE FIELD'S
  // OWN BIRTH RIDE byte-exact: the FACE 350 CHAIN THE FADE (348 rode
  // 19, 349 rode 15, 350 rode 6 - the size's own slide)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, this word prices the announced's own size across the walks, co-existence by seat never by duplication)"
  const birth = announcedTrendRow({ back: { announced: 19 }, prev: { announced: 15 }, cur: { announced: 6 } })
  assert.equal(birth, "the announced's own trend (v0.976.110): the announced's fall ran two steps deep - 19 -> 15 (-4) -> 6 (-9)u - the announced's own fade " + TAIL)
  // THE FIELD'S OWN FADES - the FACE 351/352 chains (15 -> 6 (-9) ->
  // 3 (-3), 6 -> 3 (-3) -> 0 (-3) THE DROUGHT'S OWN FLOOR the zero a
  // lawful size), the FACE 357/358 chains (52 -> 47 (-5) -> 26 (-21),
  // 47 -> 26 (-21) -> 14 (-12) the top's own slide), the FACE 363
  // chain 38 -> 4 (-34) -> 2 (-2), the FACE 377 chain 74 -> 67 (-7)
  // -> 18 (-49) THE WORD'S OWN LIVE WINDOW (the field's own biggest
  // single step the top's own payback)
  const secondSlide = announcedTrendRow({ back: { announced: 15 }, prev: { announced: 6 }, cur: { announced: 3 } })
  assert.equal(secondSlide, "the announced's own trend (v0.976.110): the announced's fall ran two steps deep - 15 -> 6 (-9) -> 3 (-3)u - the announced's own fade " + TAIL)
  const droughtFloor = announcedTrendRow({ back: { announced: 6 }, prev: { announced: 3 }, cur: { announced: 0 } })
  assert.equal(droughtFloor, "the announced's own trend (v0.976.110): the announced's fall ran two steps deep - 6 -> 3 (-3) -> 0 (-3)u - the announced's own fade " + TAIL)
  const topSlide = announcedTrendRow({ back: { announced: 52 }, prev: { announced: 47 }, cur: { announced: 26 } })
  assert.equal(topSlide, "the announced's own trend (v0.976.110): the announced's fall ran two steps deep - 52 -> 47 (-5) -> 26 (-21)u - the announced's own fade " + TAIL)
  const slideFloor = announcedTrendRow({ back: { announced: 47 }, prev: { announced: 26 }, cur: { announced: 14 } })
  assert.equal(slideFloor, "the announced's own trend (v0.976.110): the announced's fall ran two steps deep - 47 -> 26 (-21) -> 14 (-12)u - the announced's own fade " + TAIL)
  const buildExit = announcedTrendRow({ back: { announced: 38 }, prev: { announced: 4 }, cur: { announced: 2 } })
  assert.equal(buildExit, "the announced's own trend (v0.976.110): the announced's fall ran two steps deep - 38 -> 4 (-34) -> 2 (-2)u - the announced's own fade " + TAIL)
  const live = announcedTrendRow({ back: { announced: 74 }, prev: { announced: 67 }, cur: { announced: 18 } })
  assert.equal(live, "the announced's own trend (v0.976.110): the announced's fall ran two steps deep - 74 -> 67 (-7) -> 18 (-49)u - the announced's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS - the FACE 353 CHAIN 3 -> 0 (-3) -> 20
  // (+20) (THE DROUGHT'S OWN EXIT), the FACE 354/355/356 chains (0
  // -> 20 (+20) -> 17 (-3), 20 -> 17 (-3) -> 52 (+35), 17 -> 52
  // (+35) -> 47 (-5)), the FACE 359 chain 26 -> 14 (-12) -> 24
  // (+10), the FACE 362 chain 24 -> 38 (+14) -> 4 (-34) (the
  // build's own payback), the FACE 364 chain 4 -> 2 (-2) -> 11
  // (+9), the FACE 367..370 chains (21 -> 31 (+10) -> 14 (-17),
  // 31 -> 14 (-17) -> 31 (+17) THE FURNACE'S OWN FLICKER, 14 -> 31
  // (+17) -> 8 (-23), 31 -> 8 (-23) -> 10 (+2)), the FACE 373/374
  // chains (20 -> 23 (+3) -> 10 (-13), 23 -> 10 (-13) -> 38 (+28)),
  // the FACE 376 chain 38 -> 74 (+36) -> 67 (-7)
  const droughtExit = announcedTrendRow({ back: { announced: 3 }, prev: { announced: 0 }, cur: { announced: 20 } })
  assert.equal(droughtExit, "the announced's own trend (v0.976.110): the announced's own swing - 3 -> 0 (-3) -> 20 (+20)u - the rise and the fall traded seats between the walks " + TAIL)
  const exitSettle = announcedTrendRow({ back: { announced: 0 }, prev: { announced: 20 }, cur: { announced: 17 } })
  assert.equal(exitSettle, "the announced's own trend (v0.976.110): the announced's own swing - 0 -> 20 (+20) -> 17 (-3)u - the rise and the fall traded seats between the walks " + TAIL)
  const spike = announcedTrendRow({ back: { announced: 20 }, prev: { announced: 17 }, cur: { announced: 52 } })
  assert.equal(spike, "the announced's own trend (v0.976.110): the announced's own swing - 20 -> 17 (-3) -> 52 (+35)u - the rise and the fall traded seats between the walks " + TAIL)
  const spikeSettle = announcedTrendRow({ back: { announced: 17 }, prev: { announced: 52 }, cur: { announced: 47 } })
  assert.equal(spikeSettle, "the announced's own trend (v0.976.110): the announced's own swing - 17 -> 52 (+35) -> 47 (-5)u - the rise and the fall traded seats between the walks " + TAIL)
  const slideLift = announcedTrendRow({ back: { announced: 26 }, prev: { announced: 14 }, cur: { announced: 24 } })
  assert.equal(slideLift, "the announced's own trend (v0.976.110): the announced's own swing - 26 -> 14 (-12) -> 24 (+10)u - the rise and the fall traded seats between the walks " + TAIL)
  const buildPayback = announcedTrendRow({ back: { announced: 24 }, prev: { announced: 38 }, cur: { announced: 4 } })
  assert.equal(buildPayback, "the announced's own trend (v0.976.110): the announced's own swing - 24 -> 38 (+14) -> 4 (-34)u - the rise and the fall traded seats between the walks " + TAIL)
  const floorLift = announcedTrendRow({ back: { announced: 4 }, prev: { announced: 2 }, cur: { announced: 11 } })
  assert.equal(floorLift, "the announced's own trend (v0.976.110): the announced's own swing - 4 -> 2 (-2) -> 11 (+9)u - the rise and the fall traded seats between the walks " + TAIL)
  const buildExitTwo = announcedTrendRow({ back: { announced: 21 }, prev: { announced: 31 }, cur: { announced: 14 } })
  assert.equal(buildExitTwo, "the announced's own trend (v0.976.110): the announced's own swing - 21 -> 31 (+10) -> 14 (-17)u - the rise and the fall traded seats between the walks " + TAIL)
  const flicker = announcedTrendRow({ back: { announced: 31 }, prev: { announced: 14 }, cur: { announced: 31 } })
  assert.equal(flicker, "the announced's own trend (v0.976.110): the announced's own swing - 31 -> 14 (-17) -> 31 (+17)u - the rise and the fall traded seats between the walks " + TAIL)
  const flickerExit = announcedTrendRow({ back: { announced: 14 }, prev: { announced: 31 }, cur: { announced: 8 } })
  assert.equal(flickerExit, "the announced's own trend (v0.976.110): the announced's own swing - 14 -> 31 (+17) -> 8 (-23)u - the rise and the fall traded seats between the walks " + TAIL)
  const flickerSettle = announcedTrendRow({ back: { announced: 31 }, prev: { announced: 8 }, cur: { announced: 10 } })
  assert.equal(flickerSettle, "the announced's own trend (v0.976.110): the announced's own swing - 31 -> 8 (-23) -> 10 (+2)u - the rise and the fall traded seats between the walks " + TAIL)
  const refillExit = announcedTrendRow({ back: { announced: 20 }, prev: { announced: 23 }, cur: { announced: 10 } })
  assert.equal(refillExit, "the announced's own trend (v0.976.110): the announced's own swing - 20 -> 23 (+3) -> 10 (-13)u - the rise and the fall traded seats between the walks " + TAIL)
  const floorRebuild = announcedTrendRow({ back: { announced: 23 }, prev: { announced: 10 }, cur: { announced: 38 } })
  assert.equal(floorRebuild, "the announced's own trend (v0.976.110): the announced's own swing - 23 -> 10 (-13) -> 38 (+28)u - the rise and the fall traded seats between the walks " + TAIL)
  const topSettle = announcedTrendRow({ back: { announced: 38 }, prev: { announced: 74 }, cur: { announced: 67 } })
  assert.equal(topSettle, "the announced's own trend (v0.976.110): the announced's own swing - 38 -> 74 (+36) -> 67 (-7)u - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWELLS - the FACE 365/366 chains (2 -> 11 (+9)
  // -> 21 (+10), 11 -> 21 (+10) -> 31 (+10) - the build ran three
  // faces deep 2 -> 11 -> 21 -> 31), the FACE 371/372 chains (8 ->
  // 10 (+2) -> 20 (+10), 10 -> 20 (+10) -> 23 (+3) - the refill's
  // own build), the FACE 375 CHAIN 10 -> 38 (+28) -> 74 (+36) THE
  // FIELD'S OWN TOP RIDE
  const buildStart = announcedTrendRow({ back: { announced: 2 }, prev: { announced: 11 }, cur: { announced: 21 } })
  assert.equal(buildStart, "the announced's own trend (v0.976.110): the announced's rise ran two steps deep - 2 -> 11 (+9) -> 21 (+10)u - the announced's own swell " + TAIL)
  const buildDeep = announcedTrendRow({ back: { announced: 11 }, prev: { announced: 21 }, cur: { announced: 31 } })
  assert.equal(buildDeep, "the announced's own trend (v0.976.110): the announced's rise ran two steps deep - 11 -> 21 (+10) -> 31 (+10)u - the announced's own swell " + TAIL)
  const refillStart = announcedTrendRow({ back: { announced: 8 }, prev: { announced: 10 }, cur: { announced: 20 } })
  assert.equal(refillStart, "the announced's own trend (v0.976.110): the announced's rise ran two steps deep - 8 -> 10 (+2) -> 20 (+10)u - the announced's own swell " + TAIL)
  const refillDeep = announcedTrendRow({ back: { announced: 10 }, prev: { announced: 20 }, cur: { announced: 23 } })
  assert.equal(refillDeep, "the announced's own trend (v0.976.110): the announced's rise ran two steps deep - 10 -> 20 (+10) -> 23 (+3)u - the announced's own swell " + TAIL)
  const top = announcedTrendRow({ back: { announced: 10 }, prev: { announced: 38 }, cur: { announced: 74 } })
  assert.equal(top, "the announced's own trend (v0.976.110): the announced's rise ran two steps deep - 10 -> 38 (+28) -> 74 (+36)u - the announced's own swell " + TAIL)
  // THE HONEST SILENCE LAW - the FACE 360/361 held pair (14 -> 24
  // (+10) -> 24 (0), 24 -> 24 (0) -> 38 (+14)) and the clean trios
  assert.equal(announcedTrendRow({ back: { announced: 14 }, prev: { announced: 24 }, cur: { announced: 24 } }), null)
  assert.equal(announcedTrendRow({ back: { announced: 24 }, prev: { announced: 24 }, cur: { announced: 38 } }), null)
  assert.equal(announcedTrendRow({ back: { announced: 8 }, prev: { announced: 8 }, cur: { announced: 8 } }), null)
  assert.equal(announcedTrendRow({ back: { announced: 0 }, prev: { announced: 0 }, cur: { announced: 0 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, secondSlide, droughtFloor, topSlide, slideFloor, buildExit, live, droughtExit, exitSettle, spike, spikeSettle, slideLift, buildPayback, floorLift, buildExitTwo, flicker, flickerExit, flickerSettle, refillExit, floorRebuild, topSettle, buildStart, buildDeep, refillStart, refillDeep, top]) {
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
  // size is lawful (the smelt lane's own zero precedent v0.976.90
  // - the field's own face 352 the proof)
  assert.equal(announcedTrendRow(null), null)
  assert.equal(announcedTrendRow(undefined), null)
  assert.equal(announcedTrendRow('announced'), null)
  assert.equal(announcedTrendRow([1, 2, 3]), null)
  assert.equal(announcedTrendRow({ back: { announced: 1.5 }, prev: { announced: 0 }, cur: { announced: 0 } }), null)
  assert.equal(announcedTrendRow({ back: { announced: -1 }, prev: { announced: 0 }, cur: { announced: 0 } }), null)
  assert.equal(announcedTrendRow({ back: { announced: 1 }, prev: { announced: '2' }, cur: { announced: 0 } }), null)
  assert.equal(announcedTrendRow({ back: { announced: 1 }, prev: { announced: 2 } }), null)
  assert.equal(announcedTrendRow({ back: null, prev: { announced: 2 }, cur: { announced: 0 } }), null)
  assert.equal(announcedTrendConsistent({ back: { announced: 0 }, prev: { announced: 0 }, cur: { announced: 0 } }), true)
  assert.equal(announcedTrendConsistent({ back: { announced: 0 }, prev: { announced: 0 }, cur: { announced: 0.5 } }), false)
  // THE BOOK'S OWN READ - the START's own N (the batch's own size
  // book beside the count book - the SAME ledger's own cell);
  // unknown shapes read zero
  assert.equal(announcedOfLedger({ announced: 74 }), 74)
  assert.equal(announcedOfLedger({ announced: 0 }), 0)
  assert.equal(announcedOfLedger({}), 0)
  assert.equal(announcedOfLedger(null), 0)
  assert.equal(announcedOfLedger(undefined), 0)
  assert.equal(announcedOfLedger({ announced: -3 }), 0)
  // ONE-PARSER RIDE - the SAME smeltLedger images the fleet reader
  // holds: the START grammar's own arithmetic (the furnace chains'
  // own sizes sum - 9 + 2 + 1 = 12, the SAME cell the decompose's
  // smelt ledger row holds: 'batches N (announced Au: ...)')
  const led = smeltLedger([
    '[F12] smelting 9 x cobblestone in a furnace (fuel: 6 x oak_log)',
    '[F16] smelting 2 x raw_copper in a blast_furnace (fuel: 1 x coal)',
    '[F16] smelting 1 x cobblestone in a furnace (fuel: 3 x stick)'
  ])
  assert.equal(led.batches, 3)
  assert.equal(led.announced, 12)
  assert.equal(announcedOfLedger(led), 12)
})
