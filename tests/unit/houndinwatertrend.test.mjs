import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndInWaterTrendRow, houndInWaterTrendConsistent } from '../../src/lib/houndinwatertrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the in-water kill's own trend (v0.976.84) - the hound census's water arena book's trend seat, the fence, the word", () => {
  // THE IN-WATER KILL'S OWN SWING byte-exact - THE FIELD'S OWN BIRTH
  // CHAINS: the FACE 349 chain (347 rode 0, 348 rode 1, 349 rode 0),
  // the FACE 350 chain (348 rode 1, 349 rode 0, 350 rode 4), and the
  // FACE 351 chain (349 rode 0, 350 rode 4, 351 rode 0) - the trade's
  // own rhythm the word greeted on its birth ride (THE WORD BORN
  // SPEAKING THREE SWINGS DEEP - the kill's own three-swing birth the
  // precedent, v0.976.76)
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own kill mass across the walks, the prey's word prices which bot the kill book holds within one face, the arena's word prices which arena the kill book holds within one face, the presence's word prices the wake's own sum, the wet flee's word prices the wet retreats' own mass, the fight's word prices the courage's own mass, the dry flee's word prices the dry retreats' own mass, the shelter's word prices the seal answers' own mass, the other's word prices the residual class's own mass - this word prices the in-water arena's own class count across the walks, co-existence by seat never by duplication)"
  const swing1 = houndInWaterTrendRow({ back: { inWater: 0 }, prev: { inWater: 1 }, cur: { inWater: 0 } })
  assert.equal(swing1, "the in-water kill's own trend (v0.976.84): the in-water kill's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = houndInWaterTrendRow({ back: { inWater: 1 }, prev: { inWater: 0 }, cur: { inWater: 4 } })
  assert.equal(swing2, "the in-water kill's own trend (v0.976.84): the in-water kill's own swing - 1 -> 0 (-1) -> 4 (+4) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = houndInWaterTrendRow({ back: { inWater: 0 }, prev: { inWater: 4 }, cur: { inWater: 0 } })
  assert.equal(swing3, "the in-water kill's own trend (v0.976.84): the in-water kill's own swing - 0 -> 4 (+4) -> 0 (-4) - the rise and the fall traded seats between the walks " + TAIL)
  // the field's own fourth and fifth swings: the FACE 355 chain
  // (353 rode 0, 354 rode 2, 355 rode 0) and the FACE 359 chain
  // (357 rode 1, 358 rode 5, 359 rode 1)
  const swing4 = houndInWaterTrendRow({ back: { inWater: 0 }, prev: { inWater: 2 }, cur: { inWater: 0 } })
  assert.equal(swing4, "the in-water kill's own trend (v0.976.84): the in-water kill's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  const swing5 = houndInWaterTrendRow({ back: { inWater: 1 }, prev: { inWater: 5 }, cur: { inWater: 1 } })
  assert.equal(swing5, "the in-water kill's own trend (v0.976.84): the in-water kill's own swing - 1 -> 5 (+4) -> 1 (-4) - the rise and the fall traded seats between the walks " + TAIL)
  // THE WATER ARENA'S OWN SWELL byte-exact - THE FIELD'S OWN FACE 358
  // CHAIN (356 rode 0, 357 rode 1, 358 rode 5): the wet victories
  // built two steps deep - the swell's own ride the field held
  const swellField = houndInWaterTrendRow({ back: { inWater: 0 }, prev: { inWater: 1 }, cur: { inWater: 5 } })
  assert.equal(swellField, "the in-water kill's own trend (v0.976.84): the in-water kill's rise ran two steps deep - 0 -> 1 (+1) -> 5 (+4) - the in-water kill's own swell " + TAIL)
  // the law's own generic swell (the shape priced beyond the field's
  // own image)
  const swell = houndInWaterTrendRow({ back: { inWater: 2 }, prev: { inWater: 6 }, cur: { inWater: 11 } })
  assert.equal(swell, "the in-water kill's own trend (v0.976.84): the in-water kill's rise ran two steps deep - 2 -> 6 (+4) -> 11 (+5) - the in-water kill's own swell " + TAIL)
  // THE WATER ARENA'S OWN FADE byte-exact - THE FIELD'S OWN FACE 360
  // CHAIN (358 rode 5, 359 rode 1, 360 rode 0): the wet arena's own
  // relief the dry-shore's own twelve-kill storm rode beside - the
  // fade's own ride the field held (the slow two-fall the courage's
  // book never rode, the water arena's own)
  const fadeField = houndInWaterTrendRow({ back: { inWater: 5 }, prev: { inWater: 1 }, cur: { inWater: 0 } })
  assert.equal(fadeField, "the in-water kill's own trend (v0.976.84): the in-water kill's fall ran two steps deep - 5 -> 1 (-4) -> 0 (-1) - the in-water kill's own fade " + TAIL)
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 352 chain
  // the held second step 4 -> 0 -> 0 (the storm's own exit), the
  // FACE 354 chain the held first step 0 -> 0 -> 2 (the arrival rode
  // unnamed - the re-verdict's own FACE 350 precedent), the clean
  // trio 0 -> 0 -> 0 (the FACE 353 chain), and the held both steps
  // 2 -> 2 -> 2 (the family's own held law - the bars never invent)
  assert.equal(houndInWaterTrendRow({ back: { inWater: 4 }, prev: { inWater: 0 }, cur: { inWater: 0 } }), null)
  assert.equal(houndInWaterTrendRow({ back: { inWater: 0 }, prev: { inWater: 0 }, cur: { inWater: 2 } }), null)
  assert.equal(houndInWaterTrendRow({ back: { inWater: 0 }, prev: { inWater: 0 }, cur: { inWater: 0 } }), null)
  assert.equal(houndInWaterTrendRow({ back: { inWater: 2 }, prev: { inWater: 2 }, cur: { inWater: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the win's word, the
  // kill's word, the prey's word, the arena's word, the presence's
  // word, the wet flee's word, the fight's word, the dry flee's
  // word, the shelter's word, the other's word) - the names ride by
  // law, the neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swing4, swing5, swellField, swell, fadeField]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndInWaterTrendConsistent({ back: { inWater: 2 }, prev: { inWater: 1 }, cur: { inWater: 0.5 } }), false)
  assert.equal(houndInWaterTrendConsistent({ back: { inWater: 2 }, prev: { inWater: -1 }, cur: { inWater: 0 } }), false)
  assert.equal(houndInWaterTrendConsistent({ back: { inWater: 2 }, prev: { inWater: 1 } }), false)
  assert.equal(houndInWaterTrendConsistent({ back: { inWater: '2' }, prev: { inWater: 1 }, cur: { inWater: 0 } }), false)
  assert.equal(houndInWaterTrendConsistent(null), false)
  assert.equal(houndInWaterTrendConsistent([]), false)
  assert.equal(houndInWaterTrendConsistent({ back: { inWater: 2 }, prev: { inWater: 1 }, cur: { inWater: 0 } }), true)
  assert.equal(houndInWaterTrendRow({ back: { inWater: 2 }, prev: { inWater: 1 }, cur: { inWater: 0.5 } }), null)
  assert.equal(houndInWaterTrendRow({ back: { inWater: '2' }, prev: { inWater: 1 }, cur: { inWater: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the water arena count - the same cell the
  // episode detail line holds): the back face's two in-water kills,
  // the prev face's honest zero, the cur face's three - the fold's
  // own chain 2 -> 0 -> 3 rides the swing byte-exact
  const backLines = [
    'F3 [F3] death: drowned-kill context (in-water, y 62, feet water, head air, water e/w/n)',
    'F5 [F5] death: drowned-kill context (in-water, y 61, feet water, head water, water w/s)',
    'F3 [F3] death: drown context (o2 reset(-1), feet water, head water, rescue never)'
  ]
  const curLines = [
    'F7 [F7] death: drowned-kill context (in-water, y 62, feet water, head air, water e/w/n)',
    'F11 [F11] death: drowned-kill context (in-water, y 62, feet water, head air, water w/s)',
    'F12 [F12] death: drowned-kill context (in-water, y 62, feet water, head air, water e/w/n)'
  ]
  const backInWater = houndCensus(backLines).killsInWater
  const prevInWater = houndCensus(['F1 [F1] death: drown context (o2-reset F1 y=-61)']).killsInWater
  const curInWater = houndCensus(curLines).killsInWater
  assert.equal(backInWater, 2)
  assert.equal(prevInWater, 0)
  assert.equal(curInWater, 3)
  assert.equal(houndInWaterTrendRow({ back: { inWater: backInWater }, prev: { inWater: prevInWater }, cur: { inWater: curInWater } }),
    "the in-water kill's own trend (v0.976.84): the in-water kill's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
