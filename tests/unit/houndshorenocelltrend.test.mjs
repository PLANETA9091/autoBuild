import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndShoreNoCellTrendRow, houndShoreNoCellTrendConsistent } from '../../src/lib/houndshorenocelltrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the shore-no-cell's own trend (v0.976.109) - the hound census's presence book's last class seat, the fence, the word", () => {
  // THE FIELD'S OWN SILENCES - ALL TWENTY-EIGHT CHAINS THE FIELD HAS
  // EVER HELD RODE NOTHING (the thirty priced faces 347..376 all rode
  // 0): the clean trio 0 -> 0 -> 0 (the field's own every chain),
  // the held first step 0 -> 0 -> N and the held second step
  // N -> 0 -> 0 and N -> N -> 0 and 0 -> N -> N - the waterline
  // kill's own v0.976.87 shapes the field's own zero rides whole
  // - THE WORD BORN WHOLE AND SILENT (the family's own second
  // silent birth: thirty faces zero cornered flees)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: 0 }, prev: { shoreNoCell: 0 }, cur: { shoreNoCell: 0 } }), null)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: 0 }, prev: { shoreNoCell: 0 }, cur: { shoreNoCell: 1 } }), null)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: 1 }, prev: { shoreNoCell: 0 }, cur: { shoreNoCell: 0 } }), null)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: 1 }, prev: { shoreNoCell: 1 }, cur: { shoreNoCell: 0 } }), null)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: 0 }, prev: { shoreNoCell: 1 }, cur: { shoreNoCell: 1 } }), null)
  // THE SHORE-NO-CELL'S OWN SWING byte-exact - the branch the law
  // prices and the field has not held yet (the bars never invent a
  // field; the law never withholds a shape)
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the wet retreats' own mass, the fight's word prices the courage's own mass, the dry flee's word prices the dry retreats' own mass, the shelter's word prices the seal answers' own mass, the other's word prices the wake's own remainder, the water kill's word prices the water venue's own mass, the dry-shore kill's word prices the dry-shore venue's own mass, the waterline kill's word prices the waterline venue's own mass - the answer's word prices which class the presence book holds within one face, this word prices the shore-no-cell class's own count across the walks, co-existence by seat never by duplication)"
  const swing1 = houndShoreNoCellTrendRow({ back: { shoreNoCell: 2 }, prev: { shoreNoCell: 0 }, cur: { shoreNoCell: 3 } })
  assert.equal(swing1, "the shore-no-cell's own trend (v0.976.109): the shore-no-cell's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SHORE-NO-CELL'S OWN SWELL byte-exact - the cornered flee's
  // own storm the field has not held yet (the wet flee's own
  // v0.976.79 the answered side's precedent: the corner never came)
  const swell1 = houndShoreNoCellTrendRow({ back: { shoreNoCell: 0 }, prev: { shoreNoCell: 1 }, cur: { shoreNoCell: 5 } })
  assert.equal(swell1, "the shore-no-cell's own trend (v0.976.109): the shore-no-cell's rise ran two steps deep - 0 -> 1 (+1) -> 5 (+4) - the shore-no-cell's own swell " + TAIL)
  // THE SHORE-NO-CELL'S OWN FADE byte-exact - the storm's own relief
  // the field has not held yet
  const fade1 = houndShoreNoCellTrendRow({ back: { shoreNoCell: 6 }, prev: { shoreNoCell: 4 }, cur: { shoreNoCell: 1 } })
  assert.equal(fade1, "the shore-no-cell's own trend (v0.976.109): the shore-no-cell's fall ran two steps deep - 6 -> 4 (-2) -> 1 (-3) - the shore-no-cell's own fade " + TAIL)
  // the honest silences beyond the field's own chains - the held both
  // steps (the family's own held law - the bars never invent)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: 2 }, prev: { shoreNoCell: 2 }, cur: { shoreNoCell: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swell1, fade1]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndShoreNoCellTrendConsistent({ back: { shoreNoCell: 2 }, prev: { shoreNoCell: 1 }, cur: { shoreNoCell: 0.5 } }), false)
  assert.equal(houndShoreNoCellTrendConsistent({ back: { shoreNoCell: 2 }, prev: { shoreNoCell: -1 }, cur: { shoreNoCell: 0 } }), false)
  assert.equal(houndShoreNoCellTrendConsistent({ back: { shoreNoCell: 2 }, prev: { shoreNoCell: 1 } }), false)
  assert.equal(houndShoreNoCellTrendConsistent({ back: { shoreNoCell: '2' }, prev: { shoreNoCell: 1 }, cur: { shoreNoCell: 0 } }), false)
  assert.equal(houndShoreNoCellTrendConsistent(null), false)
  assert.equal(houndShoreNoCellTrendConsistent([]), false)
  assert.equal(houndShoreNoCellTrendConsistent({ back: { shoreNoCell: 2 }, prev: { shoreNoCell: 1 }, cur: { shoreNoCell: 0 } }), true)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: 2 }, prev: { shoreNoCell: 1 }, cur: { shoreNoCell: 0.5 } }), null)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: '2' }, prev: { shoreNoCell: 1 }, cur: { shoreNoCell: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the shore-no-cell count - the same cell the
  // presence line holds): the back face's two cornered flees, the
  // prev face's honest zero, the cur face's three - the fold's own
  // chain 2 -> 0 -> 3 rides the swing byte-exact (the class line
  // rides alone - the answered flee-shore class never joins the
  // shore-no-cell's own book)
  const cornerLine = (id, dist) => `F${id} [F${id}] combat: aquatic flee: no verified shore cell - bearing the nearest shore (${dist}) vs drowned (@6.0)`
  const answeredLine = (id, steps) => `F${id} [F${id}] combat: flee toward shore (${steps} step 9) vs drowned (@5.5)`
  const backLines = [cornerLine(3, 12), cornerLine(5, 7), answeredLine(9, 14)]
  const curLines = [cornerLine(7, 9), cornerLine(2, 15), cornerLine(8, 4)]
  const backCorner = houndCensus(backLines).shoreNoCell
  const prevCorner = houndCensus(['F1 [F1] death: drown context (o2 reset(-1), feet water, head water)']).shoreNoCell
  const curCorner = houndCensus(curLines).shoreNoCell
  assert.equal(backCorner, 2)
  assert.equal(prevCorner, 0)
  assert.equal(curCorner, 3)
  assert.equal(houndShoreNoCellTrendRow({ back: { shoreNoCell: backCorner }, prev: { shoreNoCell: prevCorner }, cur: { shoreNoCell: curCorner } }),
    "the shore-no-cell's own trend (v0.976.109): the shore-no-cell's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
