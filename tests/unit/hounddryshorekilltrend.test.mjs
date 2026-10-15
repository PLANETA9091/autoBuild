import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndDryShoreKillTrendRow, houndDryShoreKillTrendConsistent } from '../../src/lib/hounddryshorekilltrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the dry-shore kill's own trend (v0.976.85) - the hound census's dry-shore venue book's trend seat, the fence, the word", () => {
  // THE DRY-SHORE KILL'S OWN SWING byte-exact - THE FIELD'S OWN
  // CHAINS: THE FACE 351 BIRTH RIDE (349 rode 0, 350 rode 6, 351 rode
  // 0), the FACE 358 chain (356 rode 0, 357 rode 8, 358 rode 0), and
  // the FACE 359 chain (357 rode 8, 358 rode 0, 359 rode 1)
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the wet retreats' own mass, the fight's word prices the courage's own mass, the dry flee's word prices the dry retreats' own mass, the shelter's word prices the seal answers' own mass, the other's word prices the wake's own remainder, the water kill's word prices the water venue's own mass - the arena's word prices which venue the kill book holds within one face, this word prices the dry-shore venue's own count across the walks, co-existence by seat never by duplication)"
  const swing1 = houndDryShoreKillTrendRow({ back: { dryShore: 0 }, prev: { dryShore: 6 }, cur: { dryShore: 0 } })
  assert.equal(swing1, "the dry-shore kill's own trend (v0.976.85): the dry-shore kill's own swing - 0 -> 6 (+6) -> 0 (-6) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = houndDryShoreKillTrendRow({ back: { dryShore: 0 }, prev: { dryShore: 8 }, cur: { dryShore: 0 } })
  assert.equal(swing2, "the dry-shore kill's own trend (v0.976.85): the dry-shore kill's own swing - 0 -> 8 (+8) -> 0 (-8) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = houndDryShoreKillTrendRow({ back: { dryShore: 8 }, prev: { dryShore: 0 }, cur: { dryShore: 1 } })
  assert.equal(swing3, "the dry-shore kill's own trend (v0.976.85): the dry-shore kill's own swing - 8 -> 0 (-8) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
  // THE DRY-SHORE KILL'S OWN SWELL byte-exact - THE FIELD'S OWN FACE
  // 360 CHAIN 0 -> 1 -> 12 (THE FLEET'S OWN DRY-SHORE STORM twelve
  // bots one kill each) + the synthetic branch (the law prices it,
  // the bars never invent it)
  const swell1 = houndDryShoreKillTrendRow({ back: { dryShore: 0 }, prev: { dryShore: 1 }, cur: { dryShore: 12 } })
  assert.equal(swell1, "the dry-shore kill's own trend (v0.976.85): the dry-shore kill's rise ran two steps deep - 0 -> 1 (+1) -> 12 (+11) - the dry-shore kill's own swell " + TAIL)
  const swell2 = houndDryShoreKillTrendRow({ back: { dryShore: 1 }, prev: { dryShore: 3 }, cur: { dryShore: 4 } })
  assert.equal(swell2, "the dry-shore kill's own trend (v0.976.85): the dry-shore kill's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the dry-shore kill's own swell " + TAIL)
  // THE DRY-SHORE KILL'S OWN FADE byte-exact - the branch the
  // fourteen priced faces never rode (the slow two-fall the field
  // has not held; the law prices it, the bars never invent it)
  const fade = houndDryShoreKillTrendRow({ back: { dryShore: 6 }, prev: { dryShore: 4 }, cur: { dryShore: 1 } })
  assert.equal(fade, "the dry-shore kill's own trend (v0.976.85): the dry-shore kill's fall ran two steps deep - 6 -> 4 (-2) -> 1 (-3) - the dry-shore kill's own fade " + TAIL)
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 350 chain
  // the held first step 0 -> 0 -> 6 (the arrival rode unnamed), the
  // FACE 352 chain the held second step 6 -> 0 -> 0 (the storm's own
  // exit), the FACE 349 chain the clean trio 0 -> 0 -> 0, and the
  // held both steps 2 -> 2 -> 2 (the family's own held law - the
  // bars never invent)
  assert.equal(houndDryShoreKillTrendRow({ back: { dryShore: 0 }, prev: { dryShore: 0 }, cur: { dryShore: 6 } }), null)
  assert.equal(houndDryShoreKillTrendRow({ back: { dryShore: 6 }, prev: { dryShore: 0 }, cur: { dryShore: 0 } }), null)
  assert.equal(houndDryShoreKillTrendRow({ back: { dryShore: 0 }, prev: { dryShore: 0 }, cur: { dryShore: 0 } }), null)
  assert.equal(houndDryShoreKillTrendRow({ back: { dryShore: 2 }, prev: { dryShore: 2 }, cur: { dryShore: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swell1, swell2, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndDryShoreKillTrendConsistent({ back: { dryShore: 2 }, prev: { dryShore: 1 }, cur: { dryShore: 0.5 } }), false)
  assert.equal(houndDryShoreKillTrendConsistent({ back: { dryShore: 2 }, prev: { dryShore: -1 }, cur: { dryShore: 0 } }), false)
  assert.equal(houndDryShoreKillTrendConsistent({ back: { dryShore: 2 }, prev: { dryShore: 1 } }), false)
  assert.equal(houndDryShoreKillTrendConsistent({ back: { dryShore: '2' }, prev: { dryShore: 1 }, cur: { dryShore: 0 } }), false)
  assert.equal(houndDryShoreKillTrendConsistent(null), false)
  assert.equal(houndDryShoreKillTrendConsistent([]), false)
  assert.equal(houndDryShoreKillTrendConsistent({ back: { dryShore: 2 }, prev: { dryShore: 1 }, cur: { dryShore: 0 } }), true)
  assert.equal(houndDryShoreKillTrendRow({ back: { dryShore: 2 }, prev: { dryShore: 1 }, cur: { dryShore: 0.5 } }), null)
  assert.equal(houndDryShoreKillTrendRow({ back: { dryShore: '2' }, prev: { dryShore: 1 }, cur: { dryShore: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the dry-shore venue count - the same cell the
  // episode detail line holds): the back face's two dry-shore kills,
  // the prev face's honest zero, the cur face's three - the fold's
  // own chain 2 -> 0 -> 3 rides the swing byte-exact (the context
  // line rides alone - the respawn banner never joins)
  const killLine = (id, venue) => `F${id} [F${id}] death: drowned-kill context (${venue}, y 62, feet air, head air, water none)`
  const backLines = [killLine(3, 'dry-shore'), killLine(5, 'dry-shore'), killLine(9, 'in-water')]
  const curLines = [killLine(7, 'dry-shore'), killLine(2, 'dry-shore'), killLine(8, 'dry-shore')]
  const backDryShore = houndCensus(backLines).killsDryShore
  const prevDryShore = houndCensus(['F1 [F1] death: drown context (o2-reset F1 y=-61)']).killsDryShore
  const curDryShore = houndCensus(curLines).killsDryShore
  assert.equal(backDryShore, 2)
  assert.equal(prevDryShore, 0)
  assert.equal(curDryShore, 3)
  assert.equal(houndDryShoreKillTrendRow({ back: { dryShore: backDryShore }, prev: { dryShore: prevDryShore }, cur: { dryShore: curDryShore } }),
    "the dry-shore kill's own trend (v0.976.85): the dry-shore kill's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
