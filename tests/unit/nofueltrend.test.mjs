import { test } from 'node:test'
import assert from 'node:assert/strict'
import { noFuelTrendRow, noFuelTrendConsistent, noFuelOfWhys } from '../../src/lib/nofueltrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the no fuel's own trend (v0.976.103) - the smelt ledger's refusal whys' fuel drought's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN ONE-SIDED BIRTH AGAIN - eight chains speak (six
  // swings + two fades), eleven honest silences beside, the swell
  // never rode. THE FIELD'S OWN BIRTH RIDE byte-exact: the FACE 350
  // CHAIN THE FADE (348 rode 3, 349 rode 2, 350 rode 1 - the
  // drought's own quiet open)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, this word prices the no fuel's own class across the walks, co-existence by seat never by duplication)"
  const birth = noFuelTrendRow({ back: { noFuel: 3 }, prev: { noFuel: 2 }, cur: { noFuel: 1 } })
  assert.equal(birth, "the no fuel's own trend (v0.976.103): the no fuel's fall ran two steps deep - 3 -> 2 (-1) -> 1 (-1) - the no fuel's own fade " + TAIL)
  // THE FIELD'S OWN FADES x2 - the FACE 350 chain (the birth ride)
  // and the FACE 361 chain 9 -> 1 -> 0 (the slide's own floor - the
  // field's own second top 9 the FACE 359 count paying back)
  const fade2 = noFuelTrendRow({ back: { noFuel: 9 }, prev: { noFuel: 1 }, cur: { noFuel: 0 } })
  assert.equal(fade2, "the no fuel's own trend (v0.976.103): the no fuel's fall ran two steps deep - 9 -> 1 (-8) -> 0 (-1) - the no fuel's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS - the FACE 353 chain 1 -> 0 -> 8 (the
  // drought floor's own surge - the field's own biggest single
  // step), the FACE 354 chain 0 -> 8 -> 0 (the spike's own full
  // round trip - every unit paid back the same trade), the FACE
  // 360 chain 2 -> 9 -> 1 (the spike's own exit), the FACE 364
  // chain 0 -> 2 -> 0 (the trade's own flicker)
  const surge = noFuelTrendRow({ back: { noFuel: 1 }, prev: { noFuel: 0 }, cur: { noFuel: 8 } })
  assert.equal(surge, "the no fuel's own trend (v0.976.103): the no fuel's own swing - 1 -> 0 (-1) -> 8 (+8) - the rise and the fall traded seats between the walks " + TAIL)
  const roundTrip = noFuelTrendRow({ back: { noFuel: 0 }, prev: { noFuel: 8 }, cur: { noFuel: 0 } })
  assert.equal(roundTrip, "the no fuel's own trend (v0.976.103): the no fuel's own swing - 0 -> 8 (+8) -> 0 (-8) - the rise and the fall traded seats between the walks " + TAIL)
  const spikeExit = noFuelTrendRow({ back: { noFuel: 2 }, prev: { noFuel: 9 }, cur: { noFuel: 1 } })
  assert.equal(spikeExit, "the no fuel's own trend (v0.976.103): the no fuel's own swing - 2 -> 9 (+7) -> 1 (-8) - the rise and the fall traded seats between the walks " + TAIL)
  const flicker = noFuelTrendRow({ back: { noFuel: 0 }, prev: { noFuel: 2 }, cur: { noFuel: 0 } })
  assert.equal(flicker, "the no fuel's own trend (v0.976.103): the no fuel's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE HONEST SILENCES - the field rode them ELEVEN times: the
  // held second step (the FACE 351 chain 2 -> 1 -> 1), the held
  // first step (the FACE 352 chain 1 -> 1 -> 0), the held second
  // (the FACE 357 chain 4 -> 2 -> 2), the held both (the FACE 358
  // chain 2 -> 2 -> 2), the held first (the FACE 359 chain 2 ->
  // 2 -> 9 - the spike's own approach rides the silence), the
  // held second (the FACE 362 chain 1 -> 0 -> 0), the held first
  // (the FACE 363 chain 0 -> 0 -> 2), the held second (the FACE
  // 365 chain 2 -> 0 -> 0), the held both (the FACE 366 chain
  // 0 -> 0 -> 0 - the triple drought's own middle), the held
  // first (the FACE 367 chain 0 -> 0 -> 1), the held second (the
  // FACE 368 chain 0 -> 1 -> 1); the synthetic holds ride the
  // same law (the clean trio)
  assert.equal(noFuelTrendRow({ back: { noFuel: 2 }, prev: { noFuel: 1 }, cur: { noFuel: 1 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 1 }, prev: { noFuel: 1 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 4 }, prev: { noFuel: 2 }, cur: { noFuel: 2 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 2 }, prev: { noFuel: 2 }, cur: { noFuel: 2 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 2 }, prev: { noFuel: 2 }, cur: { noFuel: 9 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 1 }, prev: { noFuel: 0 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 0 }, prev: { noFuel: 0 }, cur: { noFuel: 2 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 2 }, prev: { noFuel: 0 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 0 }, prev: { noFuel: 0 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 0 }, prev: { noFuel: 0 }, cur: { noFuel: 1 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 0 }, prev: { noFuel: 1 }, cur: { noFuel: 1 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, fade2, surge, roundTrip, spikeExit, flicker]) {
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
  // - the field's own seven zero faces the proof)
  assert.equal(noFuelTrendRow(null), null)
  assert.equal(noFuelTrendRow(undefined), null)
  assert.equal(noFuelTrendRow('no fuel'), null)
  assert.equal(noFuelTrendRow([1, 2, 3]), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 1.5 }, prev: { noFuel: 0 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: -1 }, prev: { noFuel: 0 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: '2' }, prev: { noFuel: 0 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 2 }, prev: { noFuel: 0 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 0 }, prev: null, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendRow({ back: { noFuel: 0 }, prev: { refusals: 2 }, cur: { noFuel: 0 } }), null)
  assert.equal(noFuelTrendConsistent({ back: { noFuel: 0 }, prev: { noFuel: 0 }, cur: { noFuel: 0 } }), true)
  assert.equal(noFuelTrendConsistent({ back: { noFuel: 2 }, prev: { noFuel: 0 }, cur: { noFuel: 5 } }), true)
  assert.equal(noFuelTrendConsistent(null), false)
  // THE CLASS'S OWN READ - the whys' no-fuel sum: the compound why
  // rides ONE refusal (the refusal is one line, the class one
  // count), the busy and the timeout classes never join, the
  // empty whys ride zero
  assert.equal(noFuelOfWhys({ 'cobblestone@furnace: no fuel': 1, 'nothing to smelt': 3 }), 1)
  assert.equal(noFuelOfWhys({ 'cobblestone@furnace: no fuel; oak_log@furnace: no fuel': 2 }), 2)
  assert.equal(noFuelOfWhys({ 'cobblestone@furnace: busy': 2, 'sand@furnace: timeout': 1, 'nothing to smelt': 4 }), 0)
  assert.equal(noFuelOfWhys({ 'raw_copper@blast_furnace: no fuel; sand@furnace: no fuel; birch_log@furnace: busy cold': 1 }), 1)
  assert.equal(noFuelOfWhys({}), 0)
  assert.equal(noFuelOfWhys({ 'oak_log@furnace: no fuel': 4, 'cobblestone@furnace: no fuel; oak_log@furnace: no fuel': 3, 'cobblestone@furnace: no fuel': 1 }), 8)
  // THE ONE-PARSER RIDE - the SAME ledger runs over each face's own
  // lines, never a fork: the mixed face rides the refusalWhys AND
  // the batches AND the clips, this word prices the no-fuel class
  // alone (THE BUSY AND THE TIMEOUT CLASSES NEVER JOIN, the batch
  // and the clips never join - different cells, the same emitter's
  // other books). The fold's own FACE 350 birth ride byte-exact
  // through the ledger's own images (348 rode 3, 349 rode 2, 350
  // rode 1 - the drought's own quiet open).
  const face348 = [
    'F2 smelt: 0 (nothing to smelt)',
    'F8 smelt: 0 (cobblestone@furnace: no fuel; sand@furnace: no fuel)',
    'F13 smelt: 0 (cobblestone@furnace: no fuel; oak_log@furnace: no fuel)',
    'F1 smelt: 0 (oak_log@furnace: no fuel)'
  ]
  const face349 = [
    'F2 smelt: 0 (nothing to smelt)',
    'F8 smelt: 0 (nothing to smelt)',
    'F13 smelt: 0 (cobblestone@furnace: no fuel)',
    'F1 smelt: 0 (oak_log@furnace: no fuel)'
  ]
  const face350 = [
    'F2 smelt: 0 (nothing to smelt)',
    'F8 smelt: 0 (nothing to smelt)',
    'F13 smelt: 0 (raw_copper@blast_furnace: no fuel; sand@furnace: no fuel; birch_log@furnace: busy cold)'
  ]
  const l348 = smeltLedger(face348)
  const l349 = smeltLedger(face349)
  const l350 = smeltLedger(face350)
  assert.equal(noFuelOfWhys(l348.refusalWhys), 3)
  assert.equal(noFuelOfWhys(l349.refusalWhys), 2)
  assert.equal(noFuelOfWhys(l350.refusalWhys), 1)
  // the fold rides the window's own order (back -> prev -> cur):
  // the FACE 350 window 3 -> 2 -> 1 the ledger's own images
  const birthRide = noFuelTrendRow({ back: { noFuel: noFuelOfWhys(l348.refusalWhys) }, prev: { noFuel: noFuelOfWhys(l349.refusalWhys) }, cur: { noFuel: noFuelOfWhys(l350.refusalWhys) } })
  assert.equal(birthRide, birth)
  // the mixed face: a batch and a clip beside the refusals - the
  // batch and the clip never join (different cells, the same
  // emitter's other books); the busy refusal rides the whole book,
  // the drought's own class never counts it
  const start = (b, n, item, fuelBot, fn, fu) => `[${b}] smelting ${n} x ${item} in a ${fn} (fuel: ${fu} x ${fuelBot})`
  const mixed = smeltLedger([
    start('F8', 6, 'cobblestone', 'oak_log', 'furnace', 4),
    '[F8] fuel clips the batch: 5 x oak_log completes 7 of 14 x raw_copper (the rest re-smelts on the next chain)',
    'F2 smelt: 0 (cobblestone@furnace: busy)',
    'F3 smelt: 0 (sand@furnace: no fuel)'
  ])
  assert.equal(mixed.refusals, 2)
  assert.equal(mixed.batches, 1)
  assert.equal(mixed.fuelClips + mixed.clockClips, 1)
  assert.equal(noFuelOfWhys(mixed.refusalWhys), 1)
  assert.equal(noFuelTrendRow({ back: { noFuel: 0 }, prev: { noFuel: 0 }, cur: { noFuel: noFuelOfWhys(mixed.refusalWhys) } }), null)
  // the zero fold rides the fence lawful (the smelt lane's own zero
  // precedent v0.976.90 - the field's own seven zero faces the
  // proof)
  assert.equal(noFuelTrendConsistent({ back: { noFuel: 0 }, prev: { noFuel: 2 }, cur: { noFuel: 0 } }), true)
})
