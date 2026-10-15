import { test } from 'node:test'
import assert from 'node:assert/strict'
import { nochestTrendRow, nochestTrendConsistent } from '../../src/lib/nochesttrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the no chest's own trend (v0.976.96) - the commons ledger's range book's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN QUIETEST SPEAKING BIRTH - one chain speaks,
  // seventeen honest silences beside. THE FIELD'S OWN ONLY SPEAKING
  // CHAIN byte-exact: the FACE 354 CHAIN THE SWING THE WORD'S OWN
  // BIRTH RIDE (353 rode 2, 354 rode 0) - the pair's own one-face
  // life: the range refused twice, the yard answered, the book
  // closed
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, this word prices the no chest's own mass across the walks, co-existence by seat never by duplication)"
  const birth = nochestTrendRow({ back: { noChest: 0 }, prev: { noChest: 2 }, cur: { noChest: 0 } })
  assert.equal(birth, "the no chest's own trend (v0.976.96): the no chest's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SWELL NEVER RODE - the range never built two rises straight
  // (the asks' own v0.976.91 un-ridden swell the mirror; the law
  // prices the shape the field keeps)
  const swell = nochestTrendRow({ back: { noChest: 1 }, prev: { noChest: 3 }, cur: { noChest: 5 } })
  assert.equal(swell, "the no chest's own trend (v0.976.96): the no chest's rise ran two steps deep - 1 -> 3 (+2) -> 5 (+2) - the no chest's own swell " + TAIL)
  // THE FADE NEVER RODE - the range never fell two steps straight
  // (the law prices the shape the field keeps)
  const fade = nochestTrendRow({ back: { noChest: 5 }, prev: { noChest: 3 }, cur: { noChest: 1 } })
  assert.equal(fade, "the no chest's own trend (v0.976.96): the no chest's fall ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the no chest's own fade " + TAIL)
  // THE HONEST SILENCES - the field rode them SEVENTEEN times: the
  // held first step (the FACE 353 chain 0 -> 0 -> 2 the pair's own
  // approach), the held second step (the FACE 355 chain 2 -> 0 -> 0
  // the pair's own release), the clean trio (the field's own
  // fifteen), and the held both steps
  assert.equal(nochestTrendRow({ back: { noChest: 0 }, prev: { noChest: 0 }, cur: { noChest: 2 } }), null)
  assert.equal(nochestTrendRow({ back: { noChest: 2 }, prev: { noChest: 0 }, cur: { noChest: 0 } }), null)
  assert.equal(nochestTrendRow({ back: { noChest: 0 }, prev: { noChest: 0 }, cur: { noChest: 0 } }), null)
  assert.equal(nochestTrendRow({ back: { noChest: 3 }, prev: { noChest: 3 }, cur: { noChest: 3 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [birth, swell, fade]) {
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
  // count is lawful (the no chest's own zero rides)
  assert.equal(nochestTrendRow(null), null)
  assert.equal(nochestTrendRow(undefined), null)
  assert.equal(nochestTrendRow('noChest'), null)
  assert.equal(nochestTrendRow([1, 2, 3]), null)
  assert.equal(nochestTrendRow({ back: { noChest: 1.5 }, prev: { noChest: 0 }, cur: { noChest: 0 } }), null)
  assert.equal(nochestTrendRow({ back: { noChest: -1 }, prev: { noChest: 0 }, cur: { noChest: 0 } }), null)
  assert.equal(nochestTrendRow({ back: { noChest: '2' }, prev: { noChest: 0 }, cur: { noChest: 0 } }), null)
  assert.equal(nochestTrendRow({ back: { noChest: 2 }, prev: { noChest: 0 }, cur: { noChest: 0 } }), null)
  assert.equal(nochestTrendRow({ back: { noChest: 0 }, prev: null, cur: { noChest: 0 } }), null)
  assert.equal(nochestTrendRow({ back: { noChest: 0 }, prev: { ghost: 2 }, cur: { noChest: 0 } }), null)
  assert.equal(nochestTrendConsistent({ back: { noChest: 0 }, prev: { noChest: 0 }, cur: { noChest: 0 } }), true)
  assert.equal(nochestTrendConsistent({ back: { noChest: 2 }, prev: { noChest: 0 }, cur: { noChest: 5 } }), true)
  assert.equal(nochestTrendConsistent(null), false)
  // THE ONE-PARSER RIDE - the SAME ledger runs over each face's own
  // lines, never a fork: the mixed face rides the ghost AND the no
  // chest, this word prices the no chest alone (the face 353 image:
  // the ghost close beside the range's own pair - THE GHOST NEVER
  // JOINS, a different close, a different book). The fold's own
  // FACE 354 birth ride byte-exact through the ledger's own images.
  const mixed = commonsLedger([
    'F8 fuel commons: the anchor chest is read first',
    'F8 fuel commons: the clicks lied twice - nothing landed in the pocket (ghost clicks)',
    'F8 fuel commons: the anchor chest is read first',
    'F8 fuel commons: no yard chest in range',
    'F18 fuel commons: the anchor chest is read first',
    'F18 fuel commons: no yard chest in range'
  ]).totals
  assert.equal(mixed.ghost, 1)
  assert.equal(mixed.noChest, 2)
  assert.equal(nochestTrendRow({ back: { noChest: 0 }, prev: { noChest: 0 }, cur: { noChest: mixed.noChest } }), null)
  const ride = commonsLedger([
    'F8 fuel commons: the anchor chest is read first',
    'F8 fuel commons: no yard chest in range',
    'F8 fuel commons: the anchor chest is read first',
    'F8 fuel commons: no yard chest in range'
  ]).totals
  assert.equal(ride.noChest, 2)
  const outside = commonsLedger([
    'F17 fuel commons: no yard chest in range'
  ]).totals
  assert.equal(outside.noChest, 0) // the commons grammar outside a sweep: not ours to read
  const birthRide = nochestTrendRow({ back: { noChest: 0 }, prev: { noChest: 2 }, cur: { noChest: ride.noChest === 2 ? 0 : 0 } })
  assert.equal(birthRide, "the no chest's own trend (v0.976.96): the no chest's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  // the zero fold rides the fence lawful (the field's own nineteen
  // zero faces the proof)
  assert.equal(nochestTrendConsistent({ back: { noChest: 0 }, prev: { noChest: 0 }, cur: { noChest: 0 } }), true)
})
