import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndWaterlineKillTrendRow, houndWaterlineKillTrendConsistent } from '../../src/lib/houndwaterlinekilltrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the waterline kill's own trend (v0.976.87) - the hound census's waterline venue book's trend seat, the fence, the word", () => {
  // THE FIELD'S OWN SILENCES - ALL THIRTEEN CHAINS HELD RODE NOTHING:
  // the FACE 357 chain the held first step 0 -> 0 -> 1 (355 rode 0,
  // 356 rode 0, 357 rode 1), the FACE 358 chain the held second step
  // 0 -> 1 -> 1 (356 rode 0, 357 rode 1, 358 rode 1), the FACE 359
  // chain the held second step 1 -> 1 -> 0, the FACE 360 chain the
  // held first step 1 -> 0 -> 0, and the clean trio 0 -> 0 -> 0 -
  // THE WORD BORN WHOLE AND SILENT (sixteen faces one kill)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: 0 }, prev: { waterline: 0 }, cur: { waterline: 1 } }), null)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: 0 }, prev: { waterline: 1 }, cur: { waterline: 1 } }), null)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: 1 }, prev: { waterline: 1 }, cur: { waterline: 0 } }), null)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: 1 }, prev: { waterline: 0 }, cur: { waterline: 0 } }), null)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: 0 }, prev: { waterline: 0 }, cur: { waterline: 0 } }), null)
  // THE WATERLINE KILL'S OWN SWING byte-exact - the branch the law
  // prices and the field has not held yet (the bars never invent a
  // field; the law never withholds a shape)
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the wet retreats' own mass, the fight's word prices the courage's own mass, the dry flee's word prices the dry retreats' own mass, the shelter's word prices the seal answers' own mass, the other's word prices the wake's own remainder, the water kill's word prices the water venue's own mass, the dry-shore kill's word prices the dry-shore venue's own mass - the arena's word prices which venue the kill book holds within one face, this word prices the waterline venue's own count across the walks, co-existence by seat never by duplication)"
  const swing1 = houndWaterlineKillTrendRow({ back: { waterline: 2 }, prev: { waterline: 0 }, cur: { waterline: 3 } })
  assert.equal(swing1, "the waterline kill's own trend (v0.976.87): the waterline kill's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
  // THE WATERLINE KILL'S OWN SWELL byte-exact - the storm's own build
  // the waterline has not held yet (the dry-shore kill's own FACE 360
  // storm the precedent: the venues' storms arrive or they do not)
  const swell1 = houndWaterlineKillTrendRow({ back: { waterline: 0 }, prev: { waterline: 1 }, cur: { waterline: 5 } })
  assert.equal(swell1, "the waterline kill's own trend (v0.976.87): the waterline kill's rise ran two steps deep - 0 -> 1 (+1) -> 5 (+4) - the waterline kill's own swell " + TAIL)
  // THE WATERLINE KILL'S OWN FADE byte-exact - the storm's own relief
  // the field has not held yet
  const fade1 = houndWaterlineKillTrendRow({ back: { waterline: 6 }, prev: { waterline: 4 }, cur: { waterline: 1 } })
  assert.equal(fade1, "the waterline kill's own trend (v0.976.87): the waterline kill's fall ran two steps deep - 6 -> 4 (-2) -> 1 (-3) - the waterline kill's own fade " + TAIL)
  // the honest silences beyond the field's own chains - the held both
  // steps (the family's own held law - the bars never invent)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: 2 }, prev: { waterline: 2 }, cur: { waterline: 2 } }), null)
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
  assert.equal(houndWaterlineKillTrendConsistent({ back: { waterline: 2 }, prev: { waterline: 1 }, cur: { waterline: 0.5 } }), false)
  assert.equal(houndWaterlineKillTrendConsistent({ back: { waterline: 2 }, prev: { waterline: -1 }, cur: { waterline: 0 } }), false)
  assert.equal(houndWaterlineKillTrendConsistent({ back: { waterline: 2 }, prev: { waterline: 1 } }), false)
  assert.equal(houndWaterlineKillTrendConsistent({ back: { waterline: '2' }, prev: { waterline: 1 }, cur: { waterline: 0 } }), false)
  assert.equal(houndWaterlineKillTrendConsistent(null), false)
  assert.equal(houndWaterlineKillTrendConsistent([]), false)
  assert.equal(houndWaterlineKillTrendConsistent({ back: { waterline: 2 }, prev: { waterline: 1 }, cur: { waterline: 0 } }), true)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: 2 }, prev: { waterline: 1 }, cur: { waterline: 0.5 } }), null)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: '2' }, prev: { waterline: 1 }, cur: { waterline: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the waterline venue count - the same cell the
  // episode detail line holds): the back face's two waterline kills,
  // the prev face's honest zero, the cur face's three - the fold's
  // own chain 2 -> 0 -> 3 rides the swing byte-exact (the venue line
  // rides alone - the in-water and dry-shore venues never join the
  // waterline's own book)
  const killLine = (id, venue) => `F${id} [F${id}] death: drowned-kill context (${venue}, y 62, feet air, head air, water none)`
  const backLines = [killLine(3, 'waterline'), killLine(5, 'waterline'), killLine(9, 'in-water')]
  const curLines = [killLine(7, 'waterline'), killLine(2, 'waterline'), killLine(8, 'waterline')]
  const backWaterline = houndCensus(backLines).killsWaterline
  const prevWaterline = houndCensus(['F1 [F1] death: drown context (o2-reset F1 y=-61)']).killsWaterline
  const curWaterline = houndCensus(curLines).killsWaterline
  assert.equal(backWaterline, 2)
  assert.equal(prevWaterline, 0)
  assert.equal(curWaterline, 3)
  assert.equal(houndWaterlineKillTrendRow({ back: { waterline: backWaterline }, prev: { waterline: prevWaterline }, cur: { waterline: curWaterline } }),
    "the waterline kill's own trend (v0.976.87): the waterline kill's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
