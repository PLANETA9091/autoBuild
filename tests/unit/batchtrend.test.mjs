import { test } from 'node:test'
import assert from 'node:assert/strict'
import { batchTrendRow, batchTrendConsistent } from '../../src/lib/batchtrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the batch's own trend (v0.976.99) - the smelt ledger's batch book's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN FULL-SPECTRUM BIRTH - fourteen chains speak,
  // six honest silences beside. THE FIELD'S OWN BIRTH RIDE
  // byte-exact: the FACE 350 CHAIN THE FADE (348 rode 9, 349 rode
  // 7) - the batch book's own easing into the face 352 drought
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, this word prices the batch's own census across the walks, co-existence by seat never by duplication)"
  const birth = batchTrendRow({ back: { batches: 9 }, prev: { batches: 7 }, cur: { batches: 3 } })
  assert.equal(birth, "the batch's own trend (v0.976.99): the batch's fall ran two steps deep - 9 -> 7 (-2) -> 3 (-4) - the batch's own fade " + TAIL)
  // THE FIELD'S OWN SWELLS x3 - the FACE 360 chain 6 -> 8 -> 15,
  // the FACE 361 chain 8 -> 15 -> 18 (the yard's own build two
  // swells straight - the climb ran four faces deep 6 -> 8 -> 15
  // -> 18), the FACE 366 chain 2 -> 8 -> 13
  const swell = batchTrendRow({ back: { batches: 6 }, prev: { batches: 8 }, cur: { batches: 15 } })
  assert.equal(swell, "the batch's own trend (v0.976.99): the batch's rise ran two steps deep - 6 -> 8 (+2) -> 15 (+7) - the batch's own swell " + TAIL)
  const swell2 = batchTrendRow({ back: { batches: 8 }, prev: { batches: 15 }, cur: { batches: 18 } })
  assert.equal(swell2, "the batch's own trend (v0.976.99): the batch's rise ran two steps deep - 8 -> 15 (+7) -> 18 (+3) - the batch's own swell " + TAIL)
  const swell3 = batchTrendRow({ back: { batches: 2 }, prev: { batches: 8 }, cur: { batches: 13 } })
  assert.equal(swell3, "the batch's own trend (v0.976.99): the batch's rise ran two steps deep - 2 -> 8 (+6) -> 13 (+5) - the batch's own swell " + TAIL)
  // THE FIELD'S OWN FADES x2 - the FACE 350 birth ride 9 -> 7 -> 3,
  // the FACE 363 chain 18 -> 3 -> 2 (the build's own exit)
  const fade = batchTrendRow({ back: { batches: 18 }, prev: { batches: 3 }, cur: { batches: 2 } })
  assert.equal(fade, "the batch's own trend (v0.976.99): the batch's fall ran two steps deep - 18 -> 3 (-15) -> 2 (-1) - the batch's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS - the FACE 353 chain the drought's own
  // exit 3 -> 0 -> 8, the FACE 355 chain 8 -> 5 -> 24 (the count's
  // own biggest face), the FACE 369 chain 4 -> 17 -> 3 the
  // furnace's own flicker the latest ride
  const droughtExit = batchTrendRow({ back: { batches: 3 }, prev: { batches: 0 }, cur: { batches: 8 } })
  assert.equal(droughtExit, "the batch's own trend (v0.976.99): the batch's own swing - 3 -> 0 (-3) -> 8 (+8) - the rise and the fall traded seats between the walks " + TAIL)
  const biggest = batchTrendRow({ back: { batches: 8 }, prev: { batches: 5 }, cur: { batches: 24 } })
  assert.equal(biggest, "the batch's own trend (v0.976.99): the batch's own swing - 8 -> 5 (-3) -> 24 (+19) - the rise and the fall traded seats between the walks " + TAIL)
  const latest = batchTrendRow({ back: { batches: 4 }, prev: { batches: 17 }, cur: { batches: 3 } })
  assert.equal(latest, "the batch's own trend (v0.976.99): the batch's own swing - 4 -> 17 (+13) -> 3 (-14) - the rise and the fall traded seats between the walks " + TAIL)
  // THE HONEST SILENCES - the field rode them SIX times: the held
  // second step (the FACE 351 chain 7 -> 3 -> 3), the held first
  // step (the FACE 352 chain 3 -> 3 -> 0 - the drought's own floor
  // the zero a lawful count), the FACE 357 chain 24 -> 10 -> 10,
  // the FACE 358 chain 10 -> 10 -> 6, the FACE 364 chain 3 -> 2
  // -> 2, the FACE 365 chain 2 -> 2 -> 8; the synthetic holds ride
  // the same law (the clean trio, the held both steps)
  assert.equal(batchTrendRow({ back: { batches: 7 }, prev: { batches: 3 }, cur: { batches: 3 } }), null)
  assert.equal(batchTrendRow({ back: { batches: 3 }, prev: { batches: 3 }, cur: { batches: 0 } }), null)
  assert.equal(batchTrendRow({ back: { batches: 24 }, prev: { batches: 10 }, cur: { batches: 10 } }), null)
  assert.equal(batchTrendRow({ back: { batches: 10 }, prev: { batches: 10 }, cur: { batches: 6 } }), null)
  assert.equal(batchTrendRow({ back: { batches: 4 }, prev: { batches: 4 }, cur: { batches: 4 } }), null)
  assert.equal(batchTrendRow({ back: { batches: 0 }, prev: { batches: 0 }, cur: { batches: 0 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, swell, swell2, swell3, fade, droughtExit, biggest, latest]) {
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
  // count is lawful (the batch's own zero rides - the field's own
  // face 352 the proof)
  assert.equal(batchTrendRow(null), null)
  assert.equal(batchTrendRow(undefined), null)
  assert.equal(batchTrendRow('batches'), null)
  assert.equal(batchTrendRow([1, 2, 3]), null)
  assert.equal(batchTrendRow({ back: { batches: 1.5 }, prev: { batches: 0 }, cur: { batches: 0 } }), null)
  assert.equal(batchTrendRow({ back: { batches: -1 }, prev: { batches: 0 }, cur: { batches: 0 } }), null)
  assert.equal(batchTrendRow({ back: { batches: '2' }, prev: { batches: 0 }, cur: { batches: 0 } }), null)
  assert.equal(batchTrendRow({ back: { batches: 2 }, prev: { batches: 0 }, cur: { batches: 0 } }), null)
  assert.equal(batchTrendRow({ back: { batches: 0 }, prev: null, cur: { batches: 0 } }), null)
  assert.equal(batchTrendRow({ back: { batches: 0 }, prev: { clips: 2 }, cur: { batches: 0 } }), null)
  assert.equal(batchTrendConsistent({ back: { batches: 0 }, prev: { batches: 0 }, cur: { batches: 0 } }), true)
  assert.equal(batchTrendConsistent({ back: { batches: 2 }, prev: { batches: 0 }, cur: { batches: 5 } }), true)
  assert.equal(batchTrendConsistent(null), false)
  // THE ONE-PARSER RIDE - the SAME ledger runs over each face's own
  // lines, never a fork: the mixed face rides the batch AND the
  // clips, this word prices the batch alone (THE CLIPS NEVER JOIN,
  // a different cell, the same emitter's other book; the refusal
  // never joins either). The fold's own FACE 350 birth ride
  // byte-exact through the ledger's own images (348 rode 9, 349
  // rode 7, 350 rode 3 - the ledger's own batch census).
  const start = (b, n, item, fuelBot, fn, fu) => `[${b}] smelting ${n} x ${item} in a ${fn} (fuel: ${fu} x ${fuelBot})`
  const face348 = [
    start('F8', 6, 'cobblestone', 'oak_log', 'furnace', 4),
    start('F13', 1, 'raw_copper', 'coal', 'blast_furnace', 1),
    start('F1', 3, 'raw_iron', 'coal', 'furnace', 2),
    start('F11', 5, 'raw_gold', 'oak_log', 'furnace', 3),
    start('F17', 2, 'sand', 'stick', 'furnace', 1),
    start('F2', 4, 'cobblestone', 'oak_log', 'furnace', 2),
    start('F9', 7, 'raw_copper', 'coal', 'blast_furnace', 1),
    start('F14', 3, 'raw_iron', 'stick', 'furnace', 2),
    start('F19', 8, 'sand', 'oak_log', 'furnace', 4)
  ]
  const face349 = [
    start('F8', 6, 'cobblestone', 'oak_log', 'furnace', 4),
    start('F13', 1, 'raw_copper', 'coal', 'blast_furnace', 1),
    start('F1', 3, 'raw_iron', 'coal', 'furnace', 2),
    start('F11', 5, 'raw_gold', 'oak_log', 'furnace', 3),
    start('F17', 2, 'sand', 'stick', 'furnace', 1),
    start('F2', 4, 'cobblestone', 'oak_log', 'furnace', 2),
    start('F9', 7, 'raw_copper', 'coal', 'blast_furnace', 1)
  ]
  const face350 = [
    start('F8', 6, 'cobblestone', 'oak_log', 'furnace', 4),
    start('F13', 1, 'raw_copper', 'coal', 'blast_furnace', 1),
    start('F1', 3, 'raw_iron', 'coal', 'furnace', 2)
  ]
  const l348 = smeltLedger(face348)
  const l349 = smeltLedger(face349)
  const l350 = smeltLedger(face350)
  assert.equal(l348.batches, 9)
  assert.equal(l349.batches, 7)
  assert.equal(l350.batches, 3)
  const birthRide = batchTrendRow({ back: { batches: l348.batches }, prev: { batches: l349.batches }, cur: { batches: l350.batches } })
  assert.equal(birthRide, "the batch's own trend (v0.976.99): the batch's fall ran two steps deep - 9 -> 7 (-2) -> 3 (-4) - the batch's own fade " + TAIL)
  // the mixed face: a clip and a refusal beside the batches - the
  // clip and the refusal never join (a different cell, the same
  // emitter's other books)
  const mixed = smeltLedger([
    start('F8', 6, 'cobblestone', 'oak_log', 'furnace', 4),
    '[F8] fuel clips the batch: 5 x oak_log completes 7 of 14 x raw_copper (the rest re-smelts on the next chain)',
    'F2 smelt: 0 (nothing to smelt)'
  ])
  assert.equal(mixed.batches, 1)
  assert.equal(mixed.refusals, 1)
  assert.equal(mixed.fuelClips + mixed.clockClips, 1)
  assert.equal(batchTrendRow({ back: { batches: 0 }, prev: { batches: 0 }, cur: { batches: mixed.batches } }), null)
  // the zero fold rides the fence lawful (the field's own face 352
  // the proof - the drought rode the held step's own floor honest)
  assert.equal(batchTrendConsistent({ back: { batches: 0 }, prev: { batches: 2 }, cur: { batches: 0 } }), true)
})
