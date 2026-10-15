import { test } from 'node:test'
import assert from 'node:assert/strict'
import { noSmeltTrendRow, noSmeltTrendConsistent, noSmeltOfWhys } from '../../src/lib/nosmelttrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the no smelt's own trend (v0.976.105) - the smelt ledger's refusal whys' input drought's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN TWO-SIDED BIRTH - twelve chains speak (eight
  // swings + two swells + two fades), thirteen honest silences
  // beside, the swell RODE (the faces 358/359 pair - the no fuel's
  // own v0.976.103 the mirror, that one's swell never rode). THE
  // WORD BORN SILENT AT THE BIRTH WINDOW - the FACE 350 CHAIN THE
  // HONEST SILENCE (348 rode 1, 349 rode 2, 350 rode 2 - the held
  // second step the bars never invent); the first SPEAKING chain
  // byte-exact: the FACE 354 CHAIN THE SWING (352 rode 3, 353 rode
  // 0, 354 rode 5 - the drought floor's own surge, the field's own
  // biggest single step)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, this word prices the no smelt's own class across the walks, co-existence by seat never by duplication)"
  const birthSilent = noSmeltTrendRow({ back: { noSmelt: 1 }, prev: { noSmelt: 2 }, cur: { noSmelt: 2 } })
  assert.equal(birthSilent, null)
  const surge = noSmeltTrendRow({ back: { noSmelt: 3 }, prev: { noSmelt: 0 }, cur: { noSmelt: 5 } })
  assert.equal(surge, "the no smelt's own trend (v0.976.105): the no smelt's own swing - 3 -> 0 (-3) -> 5 (+5) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWINGS - the FACE 355 chain 0 -> 5 -> 3, the
  // FACE 357 chain 3 -> 1 -> 3, the FACE 365 chain 2 -> 1 -> 2,
  // the FACE 366 chain 1 -> 2 -> 0, the FACE 369 chain 0 -> 6 -> 2
  // (the pair drought's own exit), the FACE 372 chain 2 -> 1 -> 3,
  // the FACE 373 chain 1 -> 3 -> 2
  const exit355 = noSmeltTrendRow({ back: { noSmelt: 0 }, prev: { noSmelt: 5 }, cur: { noSmelt: 3 } })
  assert.equal(exit355, "the no smelt's own trend (v0.976.105): the no smelt's own swing - 0 -> 5 (+5) -> 3 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  const swing357 = noSmeltTrendRow({ back: { noSmelt: 3 }, prev: { noSmelt: 1 }, cur: { noSmelt: 3 } })
  assert.equal(swing357, "the no smelt's own trend (v0.976.105): the no smelt's own swing - 3 -> 1 (-2) -> 3 (+2) - the rise and the fall traded seats between the walks " + TAIL)
  const flicker365 = noSmeltTrendRow({ back: { noSmelt: 2 }, prev: { noSmelt: 1 }, cur: { noSmelt: 2 } })
  assert.equal(flicker365, "the no smelt's own trend (v0.976.105): the no smelt's own swing - 2 -> 1 (-1) -> 2 (+1) - the rise and the fall traded seats between the walks " + TAIL)
  const swing366 = noSmeltTrendRow({ back: { noSmelt: 1 }, prev: { noSmelt: 2 }, cur: { noSmelt: 0 } })
  assert.equal(swing366, "the no smelt's own trend (v0.976.105): the no smelt's own swing - 1 -> 2 (+1) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  const exit369 = noSmeltTrendRow({ back: { noSmelt: 0 }, prev: { noSmelt: 6 }, cur: { noSmelt: 2 } })
  assert.equal(exit369, "the no smelt's own trend (v0.976.105): the no smelt's own swing - 0 -> 6 (+6) -> 2 (-4) - the rise and the fall traded seats between the walks " + TAIL)
  const swing372 = noSmeltTrendRow({ back: { noSmelt: 2 }, prev: { noSmelt: 1 }, cur: { noSmelt: 3 } })
  assert.equal(swing372, "the no smelt's own trend (v0.976.105): the no smelt's own swing - 2 -> 1 (-1) -> 3 (+2) - the rise and the fall traded seats between the walks " + TAIL)
  const swing373 = noSmeltTrendRow({ back: { noSmelt: 1 }, prev: { noSmelt: 3 }, cur: { noSmelt: 2 } })
  assert.equal(swing373, "the no smelt's own trend (v0.976.105): the no smelt's own swing - 1 -> 3 (+2) -> 2 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWELLS x2 - the FAMILY'S OWN FIRST SWELL (the
  // FACE 358 chain 1 -> 3 -> 4) and the FACE 359 chain 3 -> 4 -> 6
  // (the field's own top - the count never climbed past six)
  const swell358 = noSmeltTrendRow({ back: { noSmelt: 1 }, prev: { noSmelt: 3 }, cur: { noSmelt: 4 } })
  assert.equal(swell358, "the no smelt's own trend (v0.976.105): the no smelt's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the no smelt's own swell " + TAIL)
  const swell359 = noSmeltTrendRow({ back: { noSmelt: 3 }, prev: { noSmelt: 4 }, cur: { noSmelt: 6 } })
  assert.equal(swell359, "the no smelt's own trend (v0.976.105): the no smelt's rise ran two steps deep - 3 -> 4 (+1) -> 6 (+2) - the no smelt's own swell " + TAIL)
  // THE FIELD'S OWN FADES x2 - the FACE 356 chain 5 -> 3 -> 1 and
  // the FACE 362 chain 6 -> 3 -> 2 (the top's own retreat)
  const fade356 = noSmeltTrendRow({ back: { noSmelt: 5 }, prev: { noSmelt: 3 }, cur: { noSmelt: 1 } })
  assert.equal(fade356, "the no smelt's own trend (v0.976.105): the no smelt's fall ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the no smelt's own fade " + TAIL)
  const fade362 = noSmeltTrendRow({ back: { noSmelt: 6 }, prev: { noSmelt: 3 }, cur: { noSmelt: 2 } })
  assert.equal(fade362, "the no smelt's own trend (v0.976.105): the no smelt's fall ran two steps deep - 6 -> 3 (-3) -> 2 (-1) - the no smelt's own fade " + TAIL)
  // THE HONEST SILENCES - the field rode them THIRTEEN times: the
  // birth window's held second (the FACE 350 chain 1 -> 2 -> 2),
  // the held first (the FACE 351 chain 2 -> 2 -> 3), the held
  // second (the FACE 352 chain 2 -> 3 -> 3), the held first (the
  // FACE 353 chain 3 -> 3 -> 0 - the zero face rides the silence),
  // the held second (the FACE 360 chain 4 -> 6 -> 6), the held
  // first (the FACE 361 chain 6 -> 6 -> 3), the held both (the
  // FACE 363 chain 2 -> 2 -> 2), the held first (the FACE 364
  // chain 2 -> 2 -> 1), the held second (the FACE 367 chain 2 ->
  // 0 -> 0), the held first (the FACE 368 chain 0 -> 0 -> 6 - the
  // surge rides the silence), the held second (the FACE 370 chain
  // 6 -> 2 -> 2), the held first (the FACE 371 chain 2 -> 2 -> 1),
  // the held second (the FACE 374 chain 3 -> 2 -> 2); the clean
  // trio rides the same law
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 2 }, prev: { noSmelt: 2 }, cur: { noSmelt: 3 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 2 }, prev: { noSmelt: 3 }, cur: { noSmelt: 3 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 3 }, prev: { noSmelt: 3 }, cur: { noSmelt: 0 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 4 }, prev: { noSmelt: 6 }, cur: { noSmelt: 6 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 6 }, prev: { noSmelt: 6 }, cur: { noSmelt: 3 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 2 }, prev: { noSmelt: 2 }, cur: { noSmelt: 2 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 2 }, prev: { noSmelt: 2 }, cur: { noSmelt: 1 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 2 }, prev: { noSmelt: 0 }, cur: { noSmelt: 0 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 0 }, prev: { noSmelt: 0 }, cur: { noSmelt: 6 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 6 }, prev: { noSmelt: 2 }, cur: { noSmelt: 2 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 2 }, prev: { noSmelt: 2 }, cur: { noSmelt: 1 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 3 }, prev: { noSmelt: 2 }, cur: { noSmelt: 2 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 0 }, prev: { noSmelt: 0 }, cur: { noSmelt: 0 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [surge, exit355, swing357, flicker365, swing366, exit369, swing372, swing373, swell358, swell359, fade356, fade362]) {
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
  // - the field's own three zero faces the proof)
  assert.equal(noSmeltTrendRow(null), null)
  assert.equal(noSmeltTrendRow(undefined), null)
  assert.equal(noSmeltTrendRow('nothing to smelt'), null)
  assert.equal(noSmeltTrendRow([1, 2, 3]), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 1.5 }, prev: { noSmelt: 0 }, cur: { noSmelt: 0 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: -1 }, prev: { noSmelt: 0 }, cur: { noSmelt: 0 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 1 }, prev: { noSmelt: '2' }, cur: { noSmelt: 0 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 1 }, prev: { noSmelt: 2 } }), null)
  assert.equal(noSmeltTrendRow({ back: null, prev: { noSmelt: 2 }, cur: { noSmelt: 0 } }), null)
  assert.equal(noSmeltTrendRow({ back: { noSmelt: 1 }, prev: { noSmelt: 2 }, cur: { noSmelt: 0 } }), surge.replace('3 -> 0 (-3) -> 5 (+5)', '1 -> 2 (+1) -> 0 (-2)'))
  assert.equal(noSmeltTrendConsistent({ back: { noSmelt: 0 }, prev: { noSmelt: 0 }, cur: { noSmelt: 0 } }), true)
  assert.equal(noSmeltTrendConsistent({ back: { noSmelt: 0 }, prev: { noSmelt: 0 }, cur: { noSmelt: 0.5 } }), false)
  // THE CLASS'S OWN READ - the nothing-to-smelt class sum; the no
  // fuel, the busy, the timeout and the busy cold classes never
  // join (the class law: the refusal is one line, the class one
  // count); the zero whys read zero; unknown shapes read zero
  assert.equal(noSmeltOfWhys({ 'nothing to smelt': 2, 'oak_log@furnace: no fuel': 2, 'cobblestone@furnace: no fuel': 1 }), 2)
  assert.equal(noSmeltOfWhys({ 'cobblestone@furnace: no fuel': 3, 'cobblestone@furnace: busy': 1, 'sand@furnace: timeout': 1, 'oak_log@furnace: busy cold': 1 }), 0)
  assert.equal(noSmeltOfWhys({}), 0)
  assert.equal(noSmeltOfWhys(undefined), 0)
  // ONE-PARSER RIDE - the SAME smeltLedger images the fleet reader
  // holds: the face 374 window's own whys fold through the ledger's
  // own arithmetic (refusals 5 - nothing to smelt 2, oak_log no
  // fuel 2, cobblestone no fuel 1 - the field's own read)
  const led = smeltLedger([
    'F2 smelt: 4 (announced 4u) (nothing to smelt)',
    'F2 smelt: 0 (nothing to smelt)',
    'F2 smelt: 0 (oak_log@furnace: no fuel)',
    'F2 smelt: 0 (cobblestone@furnace: no fuel)'
  ])
  assert.equal(led.refusals, 3)
  assert.equal(noSmeltOfWhys(led.refusalWhys), 1)
})
