import { test } from 'node:test'
import assert from 'node:assert/strict'
import { clipTrendRow, clipTrendConsistent } from '../../src/lib/cliptrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'

test("the clip's own trend (v0.976.98) - the smelt ledger's clip book's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN FULLEST-ARITHMETIC BIRTH - seventeen chains
  // speak, two honest silences beside. THE FIELD'S OWN BIRTH RIDE
  // byte-exact: the FACE 350 CHAIN THE SWING (348 rode 7, 349 rode
  // 8) - the clip book's own life in one trade
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, this word prices the clips' own mass across the walks, co-existence by seat never by duplication)"
  const birth = clipTrendRow({ back: { clips: 7 }, prev: { clips: 8 }, cur: { clips: 3 } })
  assert.equal(birth, "the clip's own trend (v0.976.98): the clip's own swing - 7 -> 8 (+1) -> 3 (-5) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWELLS x2 - the FACE 361 chain 10 -> 17 -> 20 and
  // the FACE 366 chain 2 -> 10 -> 18 the build's own double climb
  const swell = clipTrendRow({ back: { clips: 10 }, prev: { clips: 17 }, cur: { clips: 20 } })
  assert.equal(swell, "the clip's own trend (v0.976.98): the clip's rise ran two steps deep - 10 -> 17 (+7) -> 20 (+3) - the clip's own swell " + TAIL)
  const swell2 = clipTrendRow({ back: { clips: 2 }, prev: { clips: 10 }, cur: { clips: 18 } })
  assert.equal(swell2, "the clip's own trend (v0.976.98): the clip's rise ran two steps deep - 2 -> 10 (+8) -> 18 (+8) - the clip's own swell " + TAIL)
  // THE FIELD'S OWN FADES x4 - the FACE 351 chain 8 -> 3 -> 2, the
  // FACE 352 chain 3 -> 2 -> 0 the fade's own floor (the zero a
  // lawful count), the FACE 357 chain 26 -> 12 -> 8, the FACE 363
  // chain 20 -> 4 -> 1
  const fade = clipTrendRow({ back: { clips: 8 }, prev: { clips: 3 }, cur: { clips: 2 } })
  assert.equal(fade, "the clip's own trend (v0.976.98): the clip's fall ran two steps deep - 8 -> 3 (-5) -> 2 (-1) - the clip's own fade " + TAIL)
  const fadeFloor = clipTrendRow({ back: { clips: 3 }, prev: { clips: 2 }, cur: { clips: 0 } })
  assert.equal(fadeFloor, "the clip's own trend (v0.976.98): the clip's fall ran two steps deep - 3 -> 2 (-1) -> 0 (-2) - the clip's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS x9 more - the FACE 353 chain the drought's
  // own exit 2 -> 0 -> 8, the FACE 355 chain 8 -> 6 -> 26, the FACE
  // 368 chain 18 -> 4 -> 16 the flicker's own latest ride
  const droughtExit = clipTrendRow({ back: { clips: 2 }, prev: { clips: 0 }, cur: { clips: 8 } })
  assert.equal(droughtExit, "the clip's own trend (v0.976.98): the clip's own swing - 2 -> 0 (-2) -> 8 (+8) - the rise and the fall traded seats between the walks " + TAIL)
  const latest = clipTrendRow({ back: { clips: 18 }, prev: { clips: 4 }, cur: { clips: 16 } })
  assert.equal(latest, "the clip's own trend (v0.976.98): the clip's own swing - 18 -> 4 (-14) -> 16 (+12) - the rise and the fall traded seats between the walks " + TAIL)
  // THE HONEST SILENCES - the field rode them TWICE: the held second
  // step (the FACE 359 chain 8 -> 10 -> 10), the held first step
  // (the FACE 360 chain 10 -> 10 -> 17 - the clip's own quiet pair);
  // the synthetic holds ride the same law (the clean trio, the held
  // both steps)
  assert.equal(clipTrendRow({ back: { clips: 8 }, prev: { clips: 10 }, cur: { clips: 10 } }), null)
  assert.equal(clipTrendRow({ back: { clips: 10 }, prev: { clips: 10 }, cur: { clips: 17 } }), null)
  assert.equal(clipTrendRow({ back: { clips: 4 }, prev: { clips: 4 }, cur: { clips: 4 } }), null)
  assert.equal(clipTrendRow({ back: { clips: 0 }, prev: { clips: 0 }, cur: { clips: 0 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, swell, swell2, fade, fadeFloor, droughtExit, latest]) {
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
  // count is lawful (the clip's own zero rides - the field's own
  // face 352 the proof)
  assert.equal(clipTrendRow(null), null)
  assert.equal(clipTrendRow(undefined), null)
  assert.equal(clipTrendRow('clips'), null)
  assert.equal(clipTrendRow([1, 2, 3]), null)
  assert.equal(clipTrendRow({ back: { clips: 1.5 }, prev: { clips: 0 }, cur: { clips: 0 } }), null)
  assert.equal(clipTrendRow({ back: { clips: -1 }, prev: { clips: 0 }, cur: { clips: 0 } }), null)
  assert.equal(clipTrendRow({ back: { clips: '2' }, prev: { clips: 0 }, cur: { clips: 0 } }), null)
  assert.equal(clipTrendRow({ back: { clips: 2 }, prev: { clips: 0 }, cur: { clips: 0 } }), null)
  assert.equal(clipTrendRow({ back: { clips: 0 }, prev: null, cur: { clips: 0 } }), null)
  assert.equal(clipTrendRow({ back: { clips: 0 }, prev: { batches: 2 }, cur: { clips: 0 } }), null)
  assert.equal(clipTrendConsistent({ back: { clips: 0 }, prev: { clips: 0 }, cur: { clips: 0 } }), true)
  assert.equal(clipTrendConsistent({ back: { clips: 2 }, prev: { clips: 0 }, cur: { clips: 5 } }), true)
  assert.equal(clipTrendConsistent(null), false)
  // THE ONE-PARSER RIDE - the SAME ledger runs over each face's own
  // lines, never a fork: the mixed face rides the batch AND the
  // clips, this word prices the clips alone (THE BATCH NEVER JOINS,
  // a different cell, the same emitter's other book; the refusal
  // never joins either). The fold's own FACE 350 birth ride
  // byte-exact through the ledger's own images (348 rode 7: five
  // fuel + two clock; 349 rode 8: two fuel + six clock; 350 rode 3:
  // two fuel + one clock).
  const fuelClip = (b, n, f, c, of, item) => `[${b}] fuel clips the batch: ${n} x ${f} completes ${c} of ${of} x ${item} (the rest re-smelts on the next chain)`
  const clockClip = (b, w, c, of, item) => `[${b}] the clock clips the batch: the ${w}s window completes ~${c} of ${of} x ${item} (the rest re-smelts on the next chain)`
  const face348 = [
    fuelClip('F8', 5, 'oak_log', 7, 14, 'raw_copper'),
    fuelClip('F13', 4, 'stick', 2, 16, 'sand'),
    fuelClip('F1', 3, 'stick', 1, 8, 'cobblestone'),
    fuelClip('F11', 6, 'oak_log', 4, 12, 'raw_iron'),
    fuelClip('F17', 2, 'stick', 3, 9, 'sand'),
    clockClip('F8', 21, 1, 14, 'raw_copper'),
    clockClip('F13', 29, 2, 3, 'raw_copper')
  ]
  const face349 = [
    fuelClip('F8', 5, 'oak_log', 2, 10, 'raw_gold'),
    fuelClip('F13', 4, 'stick', 1, 16, 'sand'),
    clockClip('F8', 21, 1, 14, 'raw_copper'),
    clockClip('F13', 47, 4, 8, 'sand'),
    clockClip('F1', 86, 7, 71, 'cobblestone'),
    clockClip('F11', 87, 7, 82, 'cobblestone'),
    clockClip('F17', 12, 1, 5, 'sand'),
    clockClip('F2', 33, 2, 6, 'sand')
  ]
  const face350 = [
    fuelClip('F8', 5, 'oak_log', 3, 10, 'raw_gold'),
    fuelClip('F13', 4, 'stick', 1, 16, 'sand'),
    clockClip('F8', 21, 1, 14, 'raw_copper')
  ]
  const l348 = smeltLedger(face348)
  const l349 = smeltLedger(face349)
  const l350 = smeltLedger(face350)
  assert.equal(l348.fuelClips + l348.clockClips, 7)
  assert.equal(l349.fuelClips + l349.clockClips, 8)
  assert.equal(l350.fuelClips + l350.clockClips, 3)
  const birthRide = clipTrendRow({ back: { clips: l348.fuelClips + l348.clockClips }, prev: { clips: l349.fuelClips + l349.clockClips }, cur: { clips: l350.fuelClips + l350.clockClips } })
  assert.equal(birthRide, "the clip's own trend (v0.976.98): the clip's own swing - 7 -> 8 (+1) -> 3 (-5) - the rise and the fall traded seats between the walks " + TAIL)
  // the mixed face: a batch START and a refusal beside the clips -
  // the batch and the refusal never join (a different cell, the same
  // emitter's other books)
  const mixed = smeltLedger([
    '[F8] smelting 6 x cobblestone in a furnace (fuel: 4 x oak_log)',
    fuelClip('F8', 5, 'oak_log', 7, 14, 'raw_copper'),
    'F2 smelt: 0 (nothing to smelt)',
    clockClip('F13', 29, 2, 3, 'raw_copper')
  ])
  assert.equal(mixed.batches, 1)
  assert.equal(mixed.refusals, 1)
  assert.equal(mixed.fuelClips + mixed.clockClips, 2)
  assert.equal(clipTrendRow({ back: { clips: 0 }, prev: { clips: 0 }, cur: { clips: mixed.fuelClips + mixed.clockClips } }), null)
  // the zero fold rides the fence lawful (the field's own face 352
  // the proof - the drought rode the fade's own floor honest)
  assert.equal(clipTrendConsistent({ back: { clips: 0 }, prev: { clips: 2 }, cur: { clips: 0 } }), true)
})
