import { test } from 'node:test'
import assert from 'node:assert/strict'
import { walkFailTrendRow, walkFailTrendConsistent } from '../../src/lib/walkfailtrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the walk-fail's own trend (v0.976.97) - the starvation's walk lane's trend seat, the fence, the word", () => {
  // THE WORD BORN SPEAKING EIGHTEEN CHAINS DEEP, ONE HONEST SILENCE
  // BESIDE - the family's own FULL-SPECTRUM BIRTH (the budget's own
  // v0.976.93 the precedent). THE FIELD'S OWN SWINGS byte-exact: the
  // FACE 351 CHAIN (348 rode 19, 349 rode 19, 350 rode 16, 351 rode
  // 26) - the lane's own first trade - and the FACE 352 CHAIN the
  // trade back, and THE FACE 368 CHAIN THE LANE'S OWN RETURN (366
  // rode 13, 367 rode 10, 368 rode 25 - the two-window slide's own
  // exit)
  const TAIL = "(the grand total's own seat prices the three lanes' own sum, the lane seat's own word prices which lane's own decide-timeouts own the sky within one face, the grand total's own mix prices the majority's own lane within one face, the hop's own lane never joins - a different lane, a different book, the bank decide's own lane never joins either - the cells never merge, this word prices the walk-fail's own mass across the faces, co-existence by seat never by duplication)"
  const swing351 = walkFailTrendRow({ back: { walkFail: 19 }, prev: { walkFail: 16 }, cur: { walkFail: 26 } })
  assert.equal(swing351, "the walk-fail's own trend (v0.976.97): the walk-fail's own swing - 19 -> 16 (-3) -> 26 (+10) - the rise and the fall traded seats between the walks " + TAIL)
  const swing352 = walkFailTrendRow({ back: { walkFail: 16 }, prev: { walkFail: 26 }, cur: { walkFail: 13 } })
  assert.equal(swing352, "the walk-fail's own trend (v0.976.97): the walk-fail's own swing - 16 -> 26 (+10) -> 13 (-13) - the rise and the fall traded seats between the walks " + TAIL)
  const swing368 = walkFailTrendRow({ back: { walkFail: 13 }, prev: { walkFail: 10 }, cur: { walkFail: 25 } })
  assert.equal(swing368, "the walk-fail's own trend (v0.976.97): the walk-fail's own swing - 13 -> 10 (-3) -> 25 (+15) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWELLS byte-exact x3 - the lane's own builds
  // (the FACE 355 CHAIN 4 -> 24 (+20) -> 34 (+10), the FACE 360
  // CHAIN 5 -> 7 (+2) -> 30 (+23) the storm's own build, the FACE
  // 364 CHAIN 15 -> 20 (+5) -> 22 (+2) the quiet build)
  const swell355 = walkFailTrendRow({ back: { walkFail: 4 }, prev: { walkFail: 24 }, cur: { walkFail: 34 } })
  assert.equal(swell355, "the walk-fail's own trend (v0.976.97): the walk-fail's rise ran two steps deep - 4 -> 24 (+20) -> 34 (+10) - the walk-fail's own swell " + TAIL)
  const swell360 = walkFailTrendRow({ back: { walkFail: 5 }, prev: { walkFail: 7 }, cur: { walkFail: 30 } })
  assert.equal(swell360, "the walk-fail's own trend (v0.976.97): the walk-fail's rise ran two steps deep - 5 -> 7 (+2) -> 30 (+23) - the walk-fail's own swell " + TAIL)
  const swell364 = walkFailTrendRow({ back: { walkFail: 15 }, prev: { walkFail: 20 }, cur: { walkFail: 22 } })
  assert.equal(swell364, "the walk-fail's own trend (v0.976.97): the walk-fail's rise ran two steps deep - 15 -> 20 (+5) -> 22 (+2) - the walk-fail's own swell " + TAIL)
  // THE FIELD'S OWN FADES byte-exact - the lane's own drain (the
  // FACE 353 CHAIN 26 -> 13 (-13) -> 4 (-9)) and the four-step
  // recession's own window (the FACE 358 CHAIN 20 -> 14 (-6) -> 5
  // (-9) - the priced field's only four-face slide 34 -> 20 -> 14
  // -> 5 across the FACE 357/358 windows)
  const fade353 = walkFailTrendRow({ back: { walkFail: 26 }, prev: { walkFail: 13 }, cur: { walkFail: 4 } })
  assert.equal(fade353, "the walk-fail's own trend (v0.976.97): the walk-fail's fall ran two steps deep - 26 -> 13 (-13) -> 4 (-9) - the walk-fail's own fade " + TAIL)
  const fade358 = walkFailTrendRow({ back: { walkFail: 20 }, prev: { walkFail: 14 }, cur: { walkFail: 5 } })
  assert.equal(fade358, "the walk-fail's own trend (v0.976.97): the walk-fail's fall ran two steps deep - 20 -> 14 (-6) -> 5 (-9) - the walk-fail's own fade " + TAIL)
  // THE HONEST SILENCES - the field rode them once (the FACE 350
  // chain the held first step 19 -> 19 (0) -> 16 (-3)) beside the
  // law's own shapes the field kept (the held second step, the
  // clean trio, the held both steps)
  assert.equal(walkFailTrendRow({ back: { walkFail: 19 }, prev: { walkFail: 19 }, cur: { walkFail: 16 } }), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: 5 }, prev: { walkFail: 9 }, cur: { walkFail: 9 } }), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: 0 }, prev: { walkFail: 0 }, cur: { walkFail: 0 } }), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: 7 }, prev: { walkFail: 7 }, cur: { walkFail: 7 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [swing351, swing352, swing368, swell355, swell360, swell364, fade353, fade358]) {
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
  // count is lawful (the walk-fail's own zero rides a lawful count)
  assert.equal(walkFailTrendRow(null), null)
  assert.equal(walkFailTrendRow(undefined), null)
  assert.equal(walkFailTrendRow('walkFail'), null)
  assert.equal(walkFailTrendRow([1, 2, 3]), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: 1.5 }, prev: { walkFail: 0 }, cur: { walkFail: 0 } }), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: -1 }, prev: { walkFail: 0 }, cur: { walkFail: 0 } }), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: '2' }, prev: { walkFail: 0 }, cur: { walkFail: 0 } }), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: 2 }, prev: null, cur: { walkFail: 0 } }), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: 2 }, prev: { ghost: 2 }, cur: { walkFail: 0 } }), null)
  assert.equal(walkFailTrendRow({ back: { walkFail: 2 }, prev: { walkFail: 0 }, cur: { hop: 0 } }), null)
  const zeroLawful = walkFailTrendRow({ back: { walkFail: 3 }, prev: { walkFail: 0 }, cur: { walkFail: 4 } })
  assert.equal(zeroLawful, "the walk-fail's own trend (v0.976.97): the walk-fail's own swing - 3 -> 0 (-3) -> 4 (+4) - the rise and the fall traded seats between the walks " + TAIL)
  assert.equal(walkFailTrendConsistent({ back: { walkFail: 0 }, prev: { walkFail: 0 }, cur: { walkFail: 0 } }), true)
  // THE ONE-PARSER RIDE through the ledger's own images - the SAME
  // cell the grand total's walk leg holds (the commons ledger's own
  // walk-fail lens): the lane's own two skins (the path's own
  // refusal and the decide tax) ride the one count, the hop's own
  // lane and the bank decide's own lane never join (different
  // lanes, different books - the ledger's own walkFail byte moves
  // on the walk-fail lines alone; the anchor read opens the sweep
  // the close settles - the close class never rides without the
  // walk, the walk-fail never counts outside the sweep's own
  // anatomy)
  const anchor = (bot) => `${bot} fuel commons: the anchor chest is read first`
  const spent = (bot) => `${bot} fuel commons: budget spent (0/2 units)`
  const curLines = [
    anchor('F6'),
    'F6 fuel commons: chest walk failed after the nudge (Took to long to decide path to goal!)',
    'F6 fuel commons: chest walk failed after the nudge (No path to the goal!)',
    spent('F6')
  ]
  const prevLines = [
    anchor('F2'),
    'F2 fuel commons: chest walk failed after the nudge (No path to the goal!)',
    spent('F2')
  ]
  const backLines = [anchor('F1'), spent('F1')]
  const ride = walkFailTrendRow({
    back: { walkFail: commonsLedger(backLines).totals.walkFail },
    prev: { walkFail: commonsLedger(prevLines).totals.walkFail },
    cur: { walkFail: commonsLedger(curLines).totals.walkFail }
  })
  assert.equal(ride, "the walk-fail's own trend (v0.976.97): the walk-fail's rise ran two steps deep - 0 -> 1 (+1) -> 2 (+1) - the walk-fail's own swell " + TAIL)
  // the fold's own FACE 368 birth-side ride through the ledger's
  // own images (the decide tax beside the path refusal - the one
  // count holds both skins; the ledger's own grammar reads each
  // bot's own walk inside that bot's own sweep - the mixed face's
  // three bots ride three sweeps, the one count holds them all)
  const mixed = walkFailTrendRow({
    back: { walkFail: commonsLedger([anchor('F3'), 'F3 fuel commons: chest walk failed after the nudge (Took to long to decide path to goal!)', spent('F3')]).totals.walkFail },
    prev: { walkFail: commonsLedger(curLines).totals.walkFail },
    cur: { walkFail: commonsLedger([anchor('F9'), 'F9 fuel commons: chest walk failed after the nudge (No path to the goal!)', anchor('F4'), 'F4 fuel commons: chest walk failed after the nudge (Took to long to decide path to goal!)', spent('F4'), anchor('F5'), 'F5 fuel commons: chest walk failed after the nudge (No path to the goal!)', spent('F5'), spent('F9')]).totals.walkFail }
  })
  assert.equal(mixed, "the walk-fail's own trend (v0.976.97): the walk-fail's rise ran two steps deep - 1 -> 2 (+1) -> 3 (+1) - the walk-fail's own swell " + TAIL)
})
