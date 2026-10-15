import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bankDecideTrendRow, bankDecideTrendConsistent } from '../../src/lib/bankdecidetrend.mjs'
import { bankDocket } from '../../src/lib/bankdocket.mjs'

test("the bank decide's own trend (v0.976.104) - the starvation's bank decide lane's trend seat, the fence, the word", () => {
  // THE WORD BORN SPEAKING TWENTY-TWO CHAINS DEEP, TWO HONEST
  // SILENCES BESIDE - the field rode the held faces twice (the
  // FACE 353 chain the held second step, the FACE 354 chain the held
  // first step the spike's own approach). THE FIELD'S OWN SWINGS
  // byte-exact: the FACE 350 CHAIN the birth ride (348 rode 8, 349
  // rode 5, 350 rode 15), the FACE 352 CHAIN the trade back, the
  // FACE 355 CHAIN the spike's own payback (353 rode 10, 354 rode
  // 10, 355 rode 57), THE FACE 368 CHAIN THE FIELD'S OWN HIGHEST
  // FACE (366 rode 4, 367 rode 2, 368 rode 83 - the spike's own 83),
  // the FACE 369 CHAIN the payback, the FACE 370 CHAIN the landing
  const TAIL = "(the grand total's own seat prices the three lanes' own sum, the lane seat's own word prices which lane's own decide-timeouts own the sky within one face, the grand total's own mix prices the majority's own lane within one face, the walk-fail's own lane never joins - the commons ledger's own book, a different book, the hop's own lane never joins either - the weather's own book, the cells never merge, this word prices the bank decide's own decide-timeouts across the faces, co-existence by seat never by duplication)"
  const swing350 = bankDecideTrendRow({ back: { decide: 8 }, prev: { decide: 5 }, cur: { decide: 15 } })
  assert.equal(swing350, "the bank decide's own trend (v0.976.104): the bank decide's own swing - 8 -> 5 (-3) -> 15 (+10) - the rise and the fall traded seats between the bank decides " + TAIL)
  const swing352 = bankDecideTrendRow({ back: { decide: 15 }, prev: { decide: 21 }, cur: { decide: 10 } })
  assert.equal(swing352, "the bank decide's own trend (v0.976.104): the bank decide's own swing - 15 -> 21 (+6) -> 10 (-11) - the rise and the fall traded seats between the bank decides " + TAIL)
  const swing355 = bankDecideTrendRow({ back: { decide: 10 }, prev: { decide: 57 }, cur: { decide: 13 } })
  assert.equal(swing355, "the bank decide's own trend (v0.976.104): the bank decide's own swing - 10 -> 57 (+47) -> 13 (-44) - the rise and the fall traded seats between the bank decides " + TAIL)
  const swing368 = bankDecideTrendRow({ back: { decide: 4 }, prev: { decide: 2 }, cur: { decide: 83 } })
  assert.equal(swing368, "the bank decide's own trend (v0.976.104): the bank decide's own swing - 4 -> 2 (-2) -> 83 (+81) - the rise and the fall traded seats between the bank decides " + TAIL)
  const swing369 = bankDecideTrendRow({ back: { decide: 2 }, prev: { decide: 83 }, cur: { decide: 7 } })
  assert.equal(swing369, "the bank decide's own trend (v0.976.104): the bank decide's own swing - 2 -> 83 (+81) -> 7 (-76) - the rise and the fall traded seats between the bank decides " + TAIL)
  const swing370 = bankDecideTrendRow({ back: { decide: 83 }, prev: { decide: 7 }, cur: { decide: 13 } })
  assert.equal(swing370, "the bank decide's own trend (v0.976.104): the bank decide's own swing - 83 -> 7 (-76) -> 13 (+6) - the rise and the fall traded seats between the bank decides " + TAIL)
  // THE FIELD'S OWN SWELLS byte-exact - the lane's own builds (the
  // FACE 351 CHAIN 5 -> 15 (+10) -> 21 (+6), the FACE 371 CHAIN the
  // refill's own build 7 -> 13 (+6) -> 28 (+15), the FACE 372 CHAIN
  // the build's own hold 13 -> 28 (+15) -> 30 (+2), the FACE 373
  // CHAIN the climb's own third step 28 -> 30 (+2) -> 61 (+31) - the
  // latest chain the word's own live window rides FACE 374: 30 -> 61
  // -> ?)
  const swell351 = bankDecideTrendRow({ back: { decide: 5 }, prev: { decide: 15 }, cur: { decide: 21 } })
  assert.equal(swell351, "the bank decide's own trend (v0.976.104): the bank decide's rise ran two steps deep - 5 -> 15 (+10) -> 21 (+6) - the bank decide's own swell " + TAIL)
  const swell371 = bankDecideTrendRow({ back: { decide: 7 }, prev: { decide: 13 }, cur: { decide: 28 } })
  assert.equal(swell371, "the bank decide's own trend (v0.976.104): the bank decide's rise ran two steps deep - 7 -> 13 (+6) -> 28 (+15) - the bank decide's own swell " + TAIL)
  const swell372 = bankDecideTrendRow({ back: { decide: 13 }, prev: { decide: 28 }, cur: { decide: 30 } })
  assert.equal(swell372, "the bank decide's own trend (v0.976.104): the bank decide's rise ran two steps deep - 13 -> 28 (+15) -> 30 (+2) - the bank decide's own swell " + TAIL)
  const swell373 = bankDecideTrendRow({ back: { decide: 28 }, prev: { decide: 30 }, cur: { decide: 61 } })
  assert.equal(swell373, "the bank decide's own trend (v0.976.104): the bank decide's rise ran two steps deep - 28 -> 30 (+2) -> 61 (+31) - the bank decide's own swell " + TAIL)
  // THE FIELD'S OWN FADES byte-exact - the lane's own slide (the
  // FACE 358 CHAIN 20 -> 8 (-12) -> 3 (-5)), the drought's own floor
  // (the FACE 359 CHAIN 8 -> 3 (-5) -> 0 (-3) - the lane's own zero
  // face, the only one in the priced window, the SAME drought face
  // the hop's own word prices), the ease (the FACE 364 CHAIN 24 ->
  // 22 (-2) -> 11 (-11)), the deep slide (the FACE 367 CHAIN 23 ->
  // 4 (-19) -> 2 (-2))
  const fade358 = bankDecideTrendRow({ back: { decide: 20 }, prev: { decide: 8 }, cur: { decide: 3 } })
  assert.equal(fade358, "the bank decide's own trend (v0.976.104): the bank decide's fall ran two steps deep - 20 -> 8 (-12) -> 3 (-5) - the bank decide's own fade " + TAIL)
  const fade359 = bankDecideTrendRow({ back: { decide: 8 }, prev: { decide: 3 }, cur: { decide: 0 } })
  assert.equal(fade359, "the bank decide's own trend (v0.976.104): the bank decide's fall ran two steps deep - 8 -> 3 (-5) -> 0 (-3) - the bank decide's own fade " + TAIL)
  const fade364 = bankDecideTrendRow({ back: { decide: 24 }, prev: { decide: 22 }, cur: { decide: 11 } })
  assert.equal(fade364, "the bank decide's own trend (v0.976.104): the bank decide's fall ran two steps deep - 24 -> 22 (-2) -> 11 (-11) - the bank decide's own fade " + TAIL)
  const fade367 = bankDecideTrendRow({ back: { decide: 23 }, prev: { decide: 4 }, cur: { decide: 2 } })
  assert.equal(fade367, "the bank decide's own trend (v0.976.104): the bank decide's fall ran two steps deep - 23 -> 4 (-19) -> 2 (-2) - the bank decide's own fade " + TAIL)
  // THE DROUGHT'S OWN EXIT byte-exact - the FACE 360 CHAIN the
  // storm's own refill 3 -> 0 (-3) -> 23 (+23) - the zero face the
  // count's own floor rode lawful, the exit the swing's own voice
  const swing360 = bankDecideTrendRow({ back: { decide: 3 }, prev: { decide: 0 }, cur: { decide: 23 } })
  assert.equal(swing360, "the bank decide's own trend (v0.976.104): the bank decide's own swing - 3 -> 0 (-3) -> 23 (+23) - the rise and the fall traded seats between the bank decides " + TAIL)
  // THE FIELD'S OWN HONEST SILENCES - the held faces the priced
  // window rode TWICE (the FACE 353 chain the held second step 21 ->
  // 10 -> 10, the FACE 354 chain the held first step 10 -> 10 -> 57
  // - the spike's own approach rode the silence), the law's own
  // shapes beside: the clean trio, the held both steps
  assert.equal(bankDecideTrendRow({ back: { decide: 21 }, prev: { decide: 10 }, cur: { decide: 10 } }), null)
  assert.equal(bankDecideTrendRow({ back: { decide: 10 }, prev: { decide: 10 }, cur: { decide: 57 } }), null)
  assert.equal(bankDecideTrendRow({ back: { decide: 0 }, prev: { decide: 0 }, cur: { decide: 0 } }), null)
  assert.equal(bankDecideTrendRow({ back: { decide: 7 }, prev: { decide: 7 }, cur: { decide: 7 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [swing350, swing352, swing355, swing368, swing369, swing370, swing360, swell351, swell371, swell372, swell373, fade358, fade359, fade364, fade367]) {
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
  // count is lawful (the FACE 359 drought rides a lawful count)
  assert.equal(bankDecideTrendRow(null), null)
  assert.equal(bankDecideTrendRow(undefined), null)
  assert.equal(bankDecideTrendRow('decide'), null)
  assert.equal(bankDecideTrendRow([1, 2, 3]), null)
  assert.equal(bankDecideTrendRow({ back: { decide: 1.5 }, prev: { decide: 0 }, cur: { decide: 0 } }), null)
  assert.equal(bankDecideTrendRow({ back: { decide: -1 }, prev: { decide: 0 }, cur: { decide: 0 } }), null)
  assert.equal(bankDecideTrendRow({ back: { decide: '2' }, prev: { decide: 0 }, cur: { decide: 0 } }), null)
  assert.equal(bankDecideTrendRow({ back: { decide: 2 }, prev: null, cur: { decide: 0 } }), null)
  assert.equal(bankDecideTrendRow({ back: { decide: 2 }, prev: { ghost: 2 }, cur: { decide: 0 } }), null)
  assert.equal(bankDecideTrendRow({ back: { decide: 2 }, prev: { decide: 0 }, cur: { door: 0 } }), null)
  assert.equal(bankDecideTrendConsistent({ back: { decide: 0 }, prev: { decide: 0 }, cur: { decide: 0 } }), true)
  // THE ONE-PARSER RIDE through the docket's own images - the SAME
  // cell the grand total's bank leg holds (the docket's own door
  // decide skin, the A* family's share of the unreachable leg): the
  // bank door's own decide skins ride the count, the hop's own skins
  // ride the SAME A* share (the docket's own v0.703.0 birth names
  // the class - the A* family's share), the no-path skin and the
  // lid's own skin and the pocket's own skin never join
  const bankDecide = (bot, blocks) => `${bot} bank: chest unreachable (Took to long to decide path to goal!) (${blocks} blocks from yard) - walking back`
  const bankNoPath = (bot) => `${bot} bank: chest unreachable (No path to the goal) - walking back`
  const bankLid = (bot) => `${bot} bank: chest at [-99,81,414] d=8 zero: cannot open chest`
  const hopDecide = (bot) => `${bot} [${bot}] hop: chest at [-99,81,414] d=21 zero: chest unreachable (Took to long to decide path to goal!) (ledger live 0s ago)`
  const pocket = (bot) => `${bot} bank: chest at [-143,68,411] d=23 zero: nothing to deposit`
  const visitsOf = (ls) => ls.filter(l => /bank(ed)?[: ]/i.test(l)).length > 0 ? ls.filter(l => /\bbank\b/.test(l)).length : 0
  const decideOf = (ls) => { const d = bankDocket(ls, visitsOf(ls)); return d && d.door ? d.door.decideTimeouts : null }
  const curLines = [bankDecide('F16', 18), bankDecide('F15', 22), hopDecide('F4'), bankNoPath('F6'), bankLid('F9'), pocket('F5')]
  const prevLines = [bankDecide('F10', 22)]
  const backLines = [bankNoPath('F6'), bankLid('F9'), pocket('F5')]
  const ride = bankDecideTrendRow({
    back: { decide: decideOf(backLines) },
    prev: { decide: decideOf(prevLines) },
    cur: { decide: decideOf(curLines) }
  })
  assert.equal(ride, "the bank decide's own trend (v0.976.104): the bank decide's rise ran two steps deep - 0 -> 1 (+1) -> 3 (+2) - the bank decide's own swell " + TAIL)
  // the fold's own FACE 360 exit-side ride through the docket's own
  // images (the drought's own face the zero rode lawful, the exit the
  // swing's own voice - the A* share rides the whole sky, the bank
  // skin and the hop skin the same count)
  const exit = bankDecideTrendRow({
    back: { decide: decideOf([bankDecide('F16', 18), bankDecide('F15', 22), hopDecide('F4')]) },
    prev: { decide: decideOf([bankNoPath('F6'), pocket('F5')]) },
    cur: { decide: decideOf([bankDecide('F10', 22), hopDecide('F12'), hopDecide('F8'), bankDecide('F16', 18)]) }
  })
  assert.equal(exit, "the bank decide's own trend (v0.976.104): the bank decide's own swing - 3 -> 0 (-3) -> 4 (+4) - the rise and the fall traded seats between the bank decides " + TAIL)
})
