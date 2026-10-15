import { test } from 'node:test'
import assert from 'node:assert/strict'
import { refusalTrendRow, refusalTrendConsistent } from '../../src/lib/refusaltrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the refusal's own trend (v0.976.100) - the smelt ledger's refusal book's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN ONE-SIDED BIRTH - fourteen chains speak (twelve
  // swings + two fades), five honest silences beside, the swell never
  // rode. THE FIELD'S OWN BIRTH RIDE byte-exact: the FACE 351 CHAIN
  // THE SWING (348 rode 4, 349 rode 4, 350 rode 3, 351 rode 4)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, this word prices the refusal's own book across the walks, co-existence by seat never by duplication)"
  const birth = refusalTrendRow({ back: { refusals: 4 }, prev: { refusals: 3 }, cur: { refusals: 4 } })
  assert.equal(birth, "the refusal's own trend (v0.976.100): the refusal's own swing - 4 -> 3 (-1) -> 4 (+1) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN FADES x2 - the FACE 361 chain 15 -> 8 -> 3 (the
  // spike's own slide - the field's own top 15 the FACE 359 count
  // paying back), the FACE 362 chain 8 -> 3 -> 2 (the slide's own
  // floor - the four-step recession 15 -> 8 -> 3 -> 2 the field's
  // own longest slide)
  const fade = refusalTrendRow({ back: { refusals: 15 }, prev: { refusals: 8 }, cur: { refusals: 3 } })
  assert.equal(fade, "the refusal's own trend (v0.976.100): the refusal's fall ran two steps deep - 15 -> 8 (-7) -> 3 (-5) - the refusal's own fade " + TAIL)
  const fade2 = refusalTrendRow({ back: { refusals: 8 }, prev: { refusals: 3 }, cur: { refusals: 2 } })
  assert.equal(fade2, "the refusal's own trend (v0.976.100): the refusal's fall ran two steps deep - 8 -> 3 (-5) -> 2 (-1) - the refusal's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS - the FACE 356 chain 6 -> 9 -> 3 (the
  // count's own biggest fall), the FACE 360 chain 6 -> 15 -> 8 (the
  // spike's own exit - the top paid back the same trade), the FACE
  // 366 chain 1 -> 2 -> 1 (the trade's own flicker the latest
  // speaking ride)
  const biggest = refusalTrendRow({ back: { refusals: 6 }, prev: { refusals: 9 }, cur: { refusals: 3 } })
  assert.equal(biggest, "the refusal's own trend (v0.976.100): the refusal's own swing - 6 -> 9 (+3) -> 3 (-6) - the rise and the fall traded seats between the walks " + TAIL)
  const spikeExit = refusalTrendRow({ back: { refusals: 6 }, prev: { refusals: 15 }, cur: { refusals: 8 } })
  assert.equal(spikeExit, "the refusal's own trend (v0.976.100): the refusal's own swing - 6 -> 15 (+9) -> 8 (-7) - the rise and the fall traded seats between the walks " + TAIL)
  const latest = refusalTrendRow({ back: { refusals: 1 }, prev: { refusals: 2 }, cur: { refusals: 1 } })
  assert.equal(latest, "the refusal's own trend (v0.976.100): the refusal's own swing - 1 -> 2 (+1) -> 1 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  // THE HONEST SILENCES - the field rode them FIVE times: the held
  // first step (the FACE 350 chain 4 -> 4 -> 3), the held second
  // step (the FACE 358 chain 3 -> 6 -> 6), the held first step (the
  // FACE 359 chain 6 -> 6 -> 15 - the spike's own approach, the
  // field's own top rides the silence), the held second step (the
  // FACE 367 chain 2 -> 1 -> 1), the held first step (the FACE 368
  // chain 1 -> 1 -> 7 - the return's own approach); the synthetic
  // holds ride the same law (the clean trio, the held both steps)
  assert.equal(refusalTrendRow({ back: { refusals: 4 }, prev: { refusals: 4 }, cur: { refusals: 3 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 3 }, prev: { refusals: 6 }, cur: { refusals: 6 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 6 }, prev: { refusals: 6 }, cur: { refusals: 15 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 2 }, prev: { refusals: 1 }, cur: { refusals: 1 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 1 }, prev: { refusals: 1 }, cur: { refusals: 7 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 5 }, prev: { refusals: 5 }, cur: { refusals: 5 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 0 }, prev: { refusals: 0 }, cur: { refusals: 0 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, fade, fade2, biggest, spikeExit, latest]) {
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
  // - the field's own book never rode zero, the law holds the zero
  // lawful all the same)
  assert.equal(refusalTrendRow(null), null)
  assert.equal(refusalTrendRow(undefined), null)
  assert.equal(refusalTrendRow('refusals'), null)
  assert.equal(refusalTrendRow([1, 2, 3]), null)
  assert.equal(refusalTrendRow({ back: { refusals: 1.5 }, prev: { refusals: 0 }, cur: { refusals: 0 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: -1 }, prev: { refusals: 0 }, cur: { refusals: 0 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: '2' }, prev: { refusals: 0 }, cur: { refusals: 0 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 2 }, prev: { refusals: 0 }, cur: { refusals: 0 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 0 }, prev: null, cur: { refusals: 0 } }), null)
  assert.equal(refusalTrendRow({ back: { refusals: 0 }, prev: { batches: 2 }, cur: { refusals: 0 } }), null)
  assert.equal(refusalTrendConsistent({ back: { refusals: 0 }, prev: { refusals: 0 }, cur: { refusals: 0 } }), true)
  assert.equal(refusalTrendConsistent({ back: { refusals: 2 }, prev: { refusals: 0 }, cur: { refusals: 5 } }), true)
  assert.equal(refusalTrendConsistent(null), false)
  // THE ONE-PARSER RIDE - the SAME ledger runs over each face's own
  // lines, never a fork: the mixed face rides the refusals AND the
  // batches AND the clips, this word prices the refusals alone (THE
  // BATCH AND THE CLIPS NEVER JOIN, different cells, the same
  // emitter's other books). The fold's own FACE 351 birth ride
  // byte-exact through the ledger's own images (348 rode 4, 349
  // rode 4 - held, 350 rode 3, 351 rode 4 - the birth trade).
  const face349 = [
    'F2 smelt: 0 (nothing to smelt)',
    'F8 smelt: 0 (empty input)',
    'F13 smelt: 0 (nothing to smelt)',
    'F1 smelt: 0 (no fuel lane)'
  ]
  const face350 = [
    'F2 smelt: 0 (nothing to smelt)',
    'F8 smelt: 0 (empty input)',
    'F13 smelt: 0 (nothing to smelt)'
  ]
  const face351 = [
    'F2 smelt: 0 (nothing to smelt)',
    'F8 smelt: 0 (empty input)',
    'F13 smelt: 0 (nothing to smelt)',
    'F1 smelt: 0 (no fuel lane)'
  ]
  const l349 = smeltLedger(face349)
  const l350 = smeltLedger(face350)
  const l351 = smeltLedger(face351)
  assert.equal(l349.refusals, 4)
  assert.equal(l350.refusals, 3)
  assert.equal(l351.refusals, 4)
  // the fold rides the window's own order (back -> prev -> cur):
  // the FACE 351 window 4 -> 3 -> 4 the ledger's own images
  const birthRide = refusalTrendRow({ back: { refusals: l349.refusals }, prev: { refusals: l350.refusals }, cur: { refusals: l351.refusals } })
  assert.equal(birthRide, birth)
  // the mixed face: a batch and a clip beside the refusals - the
  // batch and the clip never join (different cells, the same
  // emitter's other books)
  const start = (b, n, item, fuelBot, fn, fu) => `[${b}] smelting ${n} x ${item} in a ${fn} (fuel: ${fu} x ${fuelBot})`
  const mixed = smeltLedger([
    start('F8', 6, 'cobblestone', 'oak_log', 'furnace', 4),
    '[F8] fuel clips the batch: 5 x oak_log completes 7 of 14 x raw_copper (the rest re-smelts on the next chain)',
    'F2 smelt: 0 (nothing to smelt)'
  ])
  assert.equal(mixed.refusals, 1)
  assert.equal(mixed.batches, 1)
  assert.equal(mixed.fuelClips + mixed.clockClips, 1)
  assert.equal(refusalTrendRow({ back: { refusals: 0 }, prev: { refusals: 0 }, cur: { refusals: mixed.refusals } }), null)
  // the zero fold rides the fence lawful (the smelt lane's own zero
  // precedent v0.976.90 - the field never rode it, the law holds)
  assert.equal(refusalTrendConsistent({ back: { refusals: 0 }, prev: { refusals: 2 }, cur: { refusals: 0 } }), true)
})
