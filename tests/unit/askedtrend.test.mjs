import { test } from 'node:test'
import assert from 'node:assert/strict'
import { askedTrendRow, askedTrendConsistent, askedOfLedger } from '../../src/lib/askedtrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the asked's own trend (v0.976.108) - the smelt ledger's demand book's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN ALL-SPEAKING BIRTH - twenty-seven chains speak
  // (fourteen swings + five fades + eight swells), ZERO honest
  // silences beside (the held step the law prices but the field
  // never rode - the sweeps' own v0.976.88 the precedent). THE
  // FIELD'S OWN BIRTH RIDE byte-exact: the FACE 350 CHAIN THE SWELL
  // (348 rode 38, 349 rode 173, 350 rode 254 - the demand's own
  // build)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, this word prices the asked's own mass across the walks, co-existence by seat never by duplication)"
  const birth = askedTrendRow({ back: { asked: 38 }, prev: { asked: 173 }, cur: { asked: 254 } })
  assert.equal(birth, "the asked's own trend (v0.976.108): the asked's rise ran two steps deep - 38 -> 173 (+135) -> 254 (+81) - the asked's own swell " + TAIL)
  // THE FIELD'S OWN FADES - the FACE 352 chain 254 -> 12 (-242) ->
  // 0 (-12) (THE DROUGHT'S OWN FLOOR the zero a lawful count), the
  // FACE 357 chain 380 -> 211 -> 39 (the top's own slide), the
  // FACE 363 chain 426 -> 95 (-331) -> 39, the FACE 367 chain 499
  // -> 295 -> 65, the FACE 370 chain 480 -> 52 (-428) -> 30 (the
  // slide's own floor)
  const droughtFloor = askedTrendRow({ back: { asked: 254 }, prev: { asked: 12 }, cur: { asked: 0 } })
  assert.equal(droughtFloor, "the asked's own trend (v0.976.108): the asked's fall ran two steps deep - 254 -> 12 (-242) -> 0 (-12) - the asked's own fade " + TAIL)
  const topSlide = askedTrendRow({ back: { asked: 380 }, prev: { asked: 211 }, cur: { asked: 39 } })
  assert.equal(topSlide, "the asked's own trend (v0.976.108): the asked's fall ran two steps deep - 380 -> 211 (-169) -> 39 (-172) - the asked's own fade " + TAIL)
  const slideFloor = askedTrendRow({ back: { asked: 480 }, prev: { asked: 52 }, cur: { asked: 30 } })
  assert.equal(slideFloor, "the asked's own trend (v0.976.108): the asked's fall ran two steps deep - 480 -> 52 (-428) -> 30 (-22) - the asked's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS - the FACE 351 chain 173 -> 254 -> 12,
  // the FACE 353 CHAIN 12 -> 0 (-12) -> 106 (+106) (THE DROUGHT'S
  // OWN EXIT), the FACE 356 chain 204 -> 380 (+176) -> 211, the
  // FACE 358 chain 211 -> 39 (-172) -> 122, the FACE 362 chain
  // 253 -> 426 (+173) -> 95 (-331) (the top's own payback), the
  // FACE 364 chain 95 -> 39 -> 54, the FACE 366 chain 54 -> 499
  // (+445) -> 295, the FACE 368 CHAIN 295 -> 65 (-230) -> 480
  // (+415) (THE RETURN'S OWN SURGE), the FACE 369 CHAIN 65 -> 480
  // (+415) -> 52 (-428) (THE SPIKE'S OWN FULL ROUND TRIP), the
  // FACE 371 chain 52 -> 30 -> 197, the FACE 373/374/375/376
  // chains (197 -> 326 -> 214, 326 -> 214 -> 280, 214 -> 280 ->
  // 113, 280 -> 113 -> 240 the word's own live window)
  const droughtExit = askedTrendRow({ back: { asked: 12 }, prev: { asked: 0 }, cur: { asked: 106 } })
  assert.equal(droughtExit, "the asked's own trend (v0.976.108): the asked's own swing - 12 -> 0 (-12) -> 106 (+106) - the rise and the fall traded seats between the walks " + TAIL)
  const topPayback = askedTrendRow({ back: { asked: 253 }, prev: { asked: 426 }, cur: { asked: 95 } })
  assert.equal(topPayback, "the asked's own trend (v0.976.108): the asked's own swing - 253 -> 426 (+173) -> 95 (-331) - the rise and the fall traded seats between the walks " + TAIL)
  const returnSurge = askedTrendRow({ back: { asked: 295 }, prev: { asked: 65 }, cur: { asked: 480 } })
  assert.equal(returnSurge, "the asked's own trend (v0.976.108): the asked's own swing - 295 -> 65 (-230) -> 480 (+415) - the rise and the fall traded seats between the walks " + TAIL)
  const roundTrip = askedTrendRow({ back: { asked: 65 }, prev: { asked: 480 }, cur: { asked: 52 } })
  assert.equal(roundTrip, "the asked's own trend (v0.976.108): the asked's own swing - 65 -> 480 (+415) -> 52 (-428) - the rise and the fall traded seats between the walks " + TAIL)
  const live = askedTrendRow({ back: { asked: 280 }, prev: { asked: 113 }, cur: { asked: 240 } })
  assert.equal(live, "the asked's own trend (v0.976.108): the asked's own swing - 280 -> 113 (-167) -> 240 (+127) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWELLS - the FACE 354/355 chains (0 -> 106 ->
  // 204, 106 -> 204 -> 380), the FACE 359/360/361 chains THREE
  // SWELLS STRAIGHT (39 -> 122 -> 170, 122 -> 170 -> 253, 170 ->
  // 253 -> 426 the build ran four faces deep), the FACE 365 CHAIN
  // 39 -> 54 (+15) -> 499 (+445) THE FIELD'S OWN TOP (the spike's
  // own 445 the field's own biggest single step), the FACE 372
  // chain 30 -> 197 -> 326 (the refill's own build)
  const build = askedTrendRow({ back: { asked: 106 }, prev: { asked: 204 }, cur: { asked: 380 } })
  assert.equal(build, "the asked's own trend (v0.976.108): the asked's rise ran two steps deep - 106 -> 204 (+98) -> 380 (+176) - the asked's own swell " + TAIL)
  const thirdStep = askedTrendRow({ back: { asked: 170 }, prev: { asked: 253 }, cur: { asked: 426 } })
  assert.equal(thirdStep, "the asked's own trend (v0.976.108): the asked's rise ran two steps deep - 170 -> 253 (+83) -> 426 (+173) - the asked's own swell " + TAIL)
  const top = askedTrendRow({ back: { asked: 39 }, prev: { asked: 54 }, cur: { asked: 499 } })
  assert.equal(top, "the asked's own trend (v0.976.108): the asked's rise ran two steps deep - 39 -> 54 (+15) -> 499 (+445) - the asked's own swell " + TAIL)
  const refill = askedTrendRow({ back: { asked: 30 }, prev: { asked: 197 }, cur: { asked: 326 } })
  assert.equal(refill, "the asked's own trend (v0.976.108): the asked's rise ran two steps deep - 30 -> 197 (+167) -> 326 (+129) - the asked's own swell " + TAIL)
  // THE HONEST SILENCE LAW - the field never rode a held step (the
  // all-speaking birth the sweeps' own v0.976.88 the precedent),
  // the law prices it still (the clean trio)
  assert.equal(askedTrendRow({ back: { asked: 8 }, prev: { asked: 8 }, cur: { asked: 8 } }), null)
  assert.equal(askedTrendRow({ back: { asked: 0 }, prev: { asked: 0 }, cur: { asked: 0 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, droughtFloor, topSlide, slideFloor, droughtExit, topPayback, returnSurge, roundTrip, live, build, thirdStep, top, refill]) {
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
  assert.equal(askedTrendRow(null), null)
  assert.equal(askedTrendRow(undefined), null)
  assert.equal(askedTrendRow('asked'), null)
  assert.equal(askedTrendRow([1, 2, 3]), null)
  assert.equal(askedTrendRow({ back: { asked: 1.5 }, prev: { asked: 0 }, cur: { asked: 0 } }), null)
  assert.equal(askedTrendRow({ back: { asked: -1 }, prev: { asked: 0 }, cur: { asked: 0 } }), null)
  assert.equal(askedTrendRow({ back: { asked: 1 }, prev: { asked: '2' }, cur: { asked: 0 } }), null)
  assert.equal(askedTrendRow({ back: { asked: 1 }, prev: { asked: 2 } }), null)
  assert.equal(askedTrendRow({ back: null, prev: { asked: 2 }, cur: { asked: 0 } }), null)
  assert.equal(askedTrendConsistent({ back: { asked: 0 }, prev: { asked: 0 }, cur: { asked: 0 } }), true)
  assert.equal(askedTrendConsistent({ back: { asked: 0 }, prev: { asked: 0 }, cur: { asked: 0.5 } }), false)
  // THE BOOK'S OWN READ - the two classes one book's own mass (the
  // fuel side's own demand and the clock side's own demand join -
  // the SAME join law the clip's own word holds on the loss side
  // and the completions' own word holds on the yield side);
  // unknown shapes read zero
  assert.equal(askedOfLedger({ fuelClipAsked: 123, clockClipAsked: 117 }), 240)
  assert.equal(askedOfLedger({ fuelClipAsked: 0, clockClipAsked: 0 }), 0)
  assert.equal(askedOfLedger({}), 0)
  assert.equal(askedOfLedger(null), 0)
  assert.equal(askedOfLedger(undefined), 0)
  assert.equal(askedOfLedger({ fuelClipAsked: -1, clockClipAsked: 5 }), 5)
  // ONE-PARSER RIDE - the SAME smeltLedger images the fleet reader
  // holds: the clip grammar's own arithmetic (the fuel clip PUT 8,
  // the clock clip PUT 5 - asked 13)
  const led = smeltLedger([
    '[F5] fuel clips the batch: 2 x oak_log completes 3 of 8 x sand (the rest re-smelts on the next chain)',
    '[F5] the clock clips the batch: the 80s window completes ~4 of 5 x sand (the rest re-smelts on the next chain)'
  ])
  assert.equal(led.fuelClipAsked, 8)
  assert.equal(led.clockClipAsked, 5)
  assert.equal(askedOfLedger(led), 13)
})
