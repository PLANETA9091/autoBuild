import { test } from 'node:test'
import assert from 'node:assert/strict'
import { debtTrendRow, debtTrendConsistent } from '../../src/lib/debttrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the debt's own trend (v0.976.101) - the smelt ledger's debt book's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN FULLEST-SPECTRUM BIRTH AT THE UNITS' OWN SCALE -
  // seventeen chains speak (seven swings + four fades + six swells),
  // two honest silences beside. THE FIELD'S OWN BIRTH RIDE byte-exact:
  // the FACE 350 CHAIN THE SWELL (348 rode 24, 349 rode 153, 350 rode
  // 249) - the debt book's own build
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the refusal's own trend prices the refusal's own book across the walks, this word prices the debt's own mass across the walks, co-existence by seat never by duplication)"
  const birth = debtTrendRow({ back: { debt: 24 }, prev: { debt: 153 }, cur: { debt: 249 } })
  assert.equal(birth, "the debt's own trend (v0.976.101): the debt's rise ran two steps deep - 24 -> 153 (+129) -> 249 (+96)u - the debt's own swell " + TAIL)
  // THE FIELD'S OWN SWELLS x6 - the FACE 350 birth ride, the FACE 354
  // chain 0 -> 82 -> 175 (the build from the drought's own floor), the
  // FACE 355 chain 82 -> 175 -> 305 (the build's own second ride), the
  // FACE 359/360/361 chains THREE STRAIGHT (the climb ran five faces
  // deep 18 -> 78 -> 116 -> 195 -> 305 - the longest build the field
  // has priced)
  const swellFloor = debtTrendRow({ back: { debt: 0 }, prev: { debt: 82 }, cur: { debt: 175 } })
  assert.equal(swellFloor, "the debt's own trend (v0.976.101): the debt's rise ran two steps deep - 0 -> 82 (+82) -> 175 (+93)u - the debt's own swell " + TAIL)
  const swell1 = debtTrendRow({ back: { debt: 18 }, prev: { debt: 78 }, cur: { debt: 116 } })
  assert.equal(swell1, "the debt's own trend (v0.976.101): the debt's rise ran two steps deep - 18 -> 78 (+60) -> 116 (+38)u - the debt's own swell " + TAIL)
  const swell2 = debtTrendRow({ back: { debt: 78 }, prev: { debt: 116 }, cur: { debt: 195 } })
  assert.equal(swell2, "the debt's own trend (v0.976.101): the debt's rise ran two steps deep - 78 -> 116 (+38) -> 195 (+79)u - the debt's own swell " + TAIL)
  const swell3 = debtTrendRow({ back: { debt: 116 }, prev: { debt: 195 }, cur: { debt: 305 } })
  assert.equal(swell3, "the debt's own trend (v0.976.101): the debt's rise ran two steps deep - 116 -> 195 (+79) -> 305 (+110)u - the debt's own swell " + TAIL)
  // THE FIELD'S OWN FADES x4 - the FACE 352 chain 249 -> 10 -> 0 (the
  // drought's own floor the zero a lawful count), the FACE 357 chain
  // 305 -> 173 -> 18 (the build's own exit), the FACE 363 chain 305 ->
  // 84 -> 38, the FACE 367 chain 406 -> 231 -> 51 (the spike's own
  // slide - the field's own top 406 the FACE 365 count paying back)
  const droughtFloor = debtTrendRow({ back: { debt: 249 }, prev: { debt: 10 }, cur: { debt: 0 } })
  assert.equal(droughtFloor, "the debt's own trend (v0.976.101): the debt's fall ran two steps deep - 249 -> 10 (-239) -> 0 (-10)u - the debt's own fade " + TAIL)
  const fade = debtTrendRow({ back: { debt: 305 }, prev: { debt: 173 }, cur: { debt: 18 } })
  assert.equal(fade, "the debt's own trend (v0.976.101): the debt's fall ran two steps deep - 305 -> 173 (-132) -> 18 (-155)u - the debt's own fade " + TAIL)
  const spikeSlide = debtTrendRow({ back: { debt: 406 }, prev: { debt: 231 }, cur: { debt: 51 } })
  assert.equal(spikeSlide, "the debt's own trend (v0.976.101): the debt's fall ran two steps deep - 406 -> 231 (-175) -> 51 (-180)u - the debt's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS - the FACE 351 chain 153 -> 249 -> 10 (the
  // build's own exit), the FACE 365/366 pair's own trade 38 -> 38 ->
  // 406 -> 231 (the spike's own exit), the FACE 368 chain 231 -> 51 ->
  // 446 (the return's own surge the latest ride)
  const buildExit = debtTrendRow({ back: { debt: 153 }, prev: { debt: 249 }, cur: { debt: 10 } })
  assert.equal(buildExit, "the debt's own trend (v0.976.101): the debt's own swing - 153 -> 249 (+96) -> 10 (-239)u - the rise and the fall traded seats between the walks " + TAIL)
  const spikeExit = debtTrendRow({ back: { debt: 38 }, prev: { debt: 406 }, cur: { debt: 231 } })
  assert.equal(spikeExit, "the debt's own trend (v0.976.101): the debt's own swing - 38 -> 406 (+368) -> 231 (-175)u - the rise and the fall traded seats between the walks " + TAIL)
  const latest = debtTrendRow({ back: { debt: 231 }, prev: { debt: 51 }, cur: { debt: 446 } })
  assert.equal(latest, "the debt's own trend (v0.976.101): the debt's own swing - 231 -> 51 (-180) -> 446 (+395)u - the rise and the fall traded seats between the walks " + TAIL)
  // THE HONEST SILENCES - the field rode them TWICE: the held second
  // step (the FACE 364 chain 84 -> 38 -> 38), the held first step (the
  // FACE 365 chain 38 -> 38 -> 406 - the spike's own approach, the
  // field's own top rides the silence); the synthetic holds ride the
  // same law (the clean trio, the held both steps)
  assert.equal(debtTrendRow({ back: { debt: 84 }, prev: { debt: 38 }, cur: { debt: 38 } }), null)
  assert.equal(debtTrendRow({ back: { debt: 38 }, prev: { debt: 38 }, cur: { debt: 406 } }), null)
  assert.equal(debtTrendRow({ back: { debt: 55 }, prev: { debt: 55 }, cur: { debt: 55 } }), null)
  assert.equal(debtTrendRow({ back: { debt: 0 }, prev: { debt: 0 }, cur: { debt: 0 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, swellFloor, swell1, swell2, swell3, droughtFloor, fade, spikeSlide, buildExit, spikeExit, latest]) {
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
  // mass is lawful (the field's own face 352 the proof - the
  // drought rode the fade's own floor honest)
  assert.equal(debtTrendRow(null), null)
  assert.equal(debtTrendRow(undefined), null)
  assert.equal(debtTrendRow('debt'), null)
  assert.equal(debtTrendRow([1, 2, 3]), null)
  assert.equal(debtTrendRow({ back: { debt: 1.5 }, prev: { debt: 0 }, cur: { debt: 0 } }), null)
  assert.equal(debtTrendRow({ back: { debt: -1 }, prev: { debt: 0 }, cur: { debt: 0 } }), null)
  assert.equal(debtTrendRow({ back: { debt: '2' }, prev: { debt: 0 }, cur: { debt: 0 } }), null)
  assert.equal(debtTrendRow({ back: { debt: 2 }, prev: { debt: 0 }, cur: { debt: 0 } }), null)
  assert.equal(debtTrendRow({ back: { debt: 0 }, prev: null, cur: { debt: 0 } }), null)
  assert.equal(debtTrendRow({ back: { debt: 0 }, prev: { refusals: 2 }, cur: { debt: 0 } }), null)
  assert.equal(debtTrendConsistent({ back: { debt: 0 }, prev: { debt: 0 }, cur: { debt: 0 } }), true)
  assert.equal(debtTrendConsistent({ back: { debt: 2 }, prev: { debt: 0 }, cur: { debt: 5 } }), true)
  assert.equal(debtTrendConsistent(null), false)
  // THE ONE-PARSER RIDE - the SAME ledger runs over each face's own
  // lines, never a fork: the mixed face rides the debt AND the
  // refusals AND the batches AND the clips, this word prices the
  // debt alone (THE OTHER BOOKS NEVER JOIN, different cells, the
  // same emitter's other books). The fold's own FACE 350 birth ride
  // byte-exact through the ledger's own images (348 rode 24u, 349
  // rode 153u, 350 rode 249u - the ledger's own owed units).
  const clip = (bot, f, comp, asked, item) => `[${bot}] fuel clips the batch: ${f} x oak_log completes ${comp} of ${asked} x ${item} (the rest re-smelts on the next chain)`
  const clockClip = (bot, w, comp, asked, item) => `[${bot}] the clock clips the batch: the ${w}s window completes ~${comp} of ${asked} x ${item} (the rest re-smelts on the next chain)`
  const face348 = [
    clip('F8', 5, 7, 14, 'raw_copper'),
    clip('F13', 4, 2, 9, 'raw_iron'),
    clockClip('F1', 31, 3, 13, 'raw_gold')
  ]
  const face349 = [
    clip('F8', 5, 7, 14, 'raw_copper'),
    clip('F13', 4, 2, 9, 'raw_iron'),
    clockClip('F1', 31, 3, 13, 'raw_gold'),
    clip('F11', 6, 10, 70, 'raw_copper'),
    clip('F17', 3, 6, 75, 'sand')
  ]
  const face350 = [
    clip('F8', 5, 7, 14, 'raw_copper'),
    clip('F13', 4, 2, 9, 'raw_iron'),
    clockClip('F1', 31, 3, 13, 'raw_gold'),
    clip('F11', 6, 10, 70, 'raw_copper'),
    clip('F17', 3, 6, 75, 'sand'),
    clip('F2', 2, 8, 20, 'cobblestone'),
    clip('F9', 7, 4, 24, 'raw_iron'),
    clip('F14', 4, 10, 30, 'raw_copper'),
    clip('F19', 6, 2, 18, 'sand'),
    clip('F21', 5, 12, 40, 'sand')
  ]
  const l348 = smeltLedger(face348)
  const l349 = smeltLedger(face349)
  const l350 = smeltLedger(face350)
  assert.equal(l348.clipDebt, 24)
  assert.equal(l349.clipDebt, 153)
  assert.equal(l350.clipDebt, 249)
  const birthRide = debtTrendRow({ back: { debt: l348.clipDebt }, prev: { debt: l349.clipDebt }, cur: { debt: l350.clipDebt } })
  assert.equal(birthRide, birth)
  // the mixed face: a refusal and a batch beside the debt - the
  // refusal and the batch never join (different cells, the same
  // emitter's other books)
  const mixed = smeltLedger([
    '[F8] smelting 6 x cobblestone in a furnace (fuel: 4 x oak_log)',
    clip('F8', 5, 7, 14, 'raw_copper'),
    'F2 smelt: 0 (nothing to smelt)'
  ])
  assert.equal(mixed.clipDebt, 7)
  assert.equal(mixed.batches, 1)
  assert.equal(mixed.refusals, 1)
  assert.equal(debtTrendRow({ back: { debt: 0 }, prev: { debt: 0 }, cur: { debt: mixed.clipDebt } }), null)
  // the zero fold rides the fence lawful (the field's own face 352
  // the proof - the drought rode the fade's own floor honest)
  assert.equal(debtTrendConsistent({ back: { debt: 0 }, prev: { debt: 2 }, cur: { debt: 0 } }), true)
})
