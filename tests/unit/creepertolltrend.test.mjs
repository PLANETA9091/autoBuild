import { test } from 'node:test'
import assert from 'node:assert/strict'
import { creeperTollTrendRow, creeperTollTrendConsistent } from '../../src/lib/creepertolltrend.mjs'
import { deathKindCensus } from '../../src/lib/deathkinds.mjs'

test("the creeper toll's own trend (v0.976.111) - the death census's explosion book's first kinded class-toll word, the fence, the word", () => {
  // THE FIELD'S OWN CHAINS - byte-exact from the forty-four priced
  // faces (the census's own arithmetic: the FACE 338 chain the swing
  // 0 -> 1 -> 0, the FACE 343/344/345 chains the swings 0 -> 2 -> 0
  // and 2 -> 0 -> 1 and 0 -> 1 -> 0, the FACE 357..364 chains the
  // long quiet run the clean silences, THE FACE 370 CHAIN THE WORD'S
  // OWN FADE 2 -> 1 -> 0, the FACE 375 chain the held first step
  // 0 -> 0 -> 4 the storm's own arrival unnamed, THE FACE 376 CHAIN
  // THE SWING THE STORM'S OWN EXIT 0 -> 4 -> 0, THE FACE 377 CHAIN
  // THE WORD'S OWN LIVE WINDOW 4 -> 0 -> 1)
  const TAIL = "(the explosion toll's own word prices the explosion kind's own mass across the walks, the zombie toll's, the skeleton toll's, the drowned toll's, the spider toll's and the witch toll's own words price the mob book's own class tolls across them, the kind's word prices the head's own identity, the siege's word prices the book's own total - a different book, the killer is not the death - this word prices the explosion book's own Creeper class across the walks, co-existence by seat never by duplication)"
  // the honest silences - the field's own held chains
  assert.equal(creeperTollTrendRow({ back: { creeper: 0 }, prev: { creeper: 0 }, cur: { creeper: 0 } }), null)
  assert.equal(creeperTollTrendRow({ back: { creeper: 0 }, prev: { creeper: 0 }, cur: { creeper: 4 } }), null)
  assert.equal(creeperTollTrendRow({ back: { creeper: 0 }, prev: { creeper: 2 }, cur: { creeper: 2 } }), null)
  assert.equal(creeperTollTrendRow({ back: { creeper: 2 }, prev: { creeper: 2 }, cur: { creeper: 1 } }), null)
  assert.equal(creeperTollTrendRow({ back: { creeper: 2 }, prev: { creeper: 0 }, cur: { creeper: 0 } }), null)
  // THE WORD'S OWN FADE byte-exact - the FACE 370 chain the drowned
  // toll's own fade arc the field's own echo
  const fade1 = creeperTollTrendRow({ back: { creeper: 2 }, prev: { creeper: 1 }, cur: { creeper: 0 } })
  assert.equal(fade1, "the creeper toll's own trend (v0.976.111): the creeper toll's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the creeper toll's own fade " + TAIL)
  // THE SWING byte-exact - the FACE 338 chain the toll trading seats
  const swing1 = creeperTollTrendRow({ back: { creeper: 0 }, prev: { creeper: 1 }, cur: { creeper: 0 } })
  assert.equal(swing1, "the creeper toll's own trend (v0.976.111): the creeper toll's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SWING byte-exact - the FACE 376 chain the storm's own exit
  const swing2 = creeperTollTrendRow({ back: { creeper: 0 }, prev: { creeper: 4 }, cur: { creeper: 0 } })
  assert.equal(swing2, "the creeper toll's own trend (v0.976.111): the creeper toll's own swing - 0 -> 4 (+4) -> 0 (-4) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SWING byte-exact - the FACE 377 chain the word's own live window
  const swing3 = creeperTollTrendRow({ back: { creeper: 4 }, prev: { creeper: 0 }, cur: { creeper: 1 } })
  assert.equal(swing3, "the creeper toll's own trend (v0.976.111): the creeper toll's own swing - 4 -> 0 (-4) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SWELL byte-exact - the shape the field has not held (the
  // swell never rode the forty-two windows the census priced: the
  // creeper's own tolls trade every walk, the build never came)
  const swell1 = creeperTollTrendRow({ back: { creeper: 0 }, prev: { creeper: 1 }, cur: { creeper: 3 } })
  assert.equal(swell1, "the creeper toll's own trend (v0.976.111): the creeper toll's rise ran two steps deep - 0 -> 1 (+1) -> 3 (+2) - the creeper toll's own swell " + TAIL)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict words (no owns, no dynasty, no turn) - co-existence by
  // seat never by duplication
  for (const row of [fade1, swing1, swing2, swing3, swell1]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(creeperTollTrendConsistent({ back: { creeper: 2 }, prev: { creeper: 1 }, cur: { creeper: 0.5 } }), false)
  assert.equal(creeperTollTrendConsistent({ back: { creeper: 2 }, prev: { creeper: -1 }, cur: { creeper: 0 } }), false)
  assert.equal(creeperTollTrendConsistent({ back: { creeper: 2 }, prev: { creeper: 1 } }), false)
  assert.equal(creeperTollTrendConsistent({ back: { creeper: '2' }, prev: { creeper: 1 }, cur: { creeper: 0 } }), false)
  assert.equal(creeperTollTrendConsistent(null), false)
  assert.equal(creeperTollTrendConsistent([]), false)
  assert.equal(creeperTollTrendConsistent({ back: { creeper: 2 }, prev: { creeper: 1 }, cur: { creeper: 0 } }), true)
  assert.equal(creeperTollTrendRow({ back: { creeper: 2 }, prev: { creeper: 1 }, cur: { creeper: 0.5 } }), null)
  assert.equal(creeperTollTrendRow({ back: { creeper: '2' }, prev: { creeper: 1 }, cur: { creeper: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (deathKindCensus owns the kinded attacker tally): the back
  // face's two creeper blasts, the prev face's honest zero, the cur
  // face's three - the fold's own chain 2 -> 0 -> 3 rides the swing
  // byte-exact (the zombie's own slain-by line never joins the
  // creeper's own book; the empty face rides the lawful zero - the
  // face 363 the field's own precedent)
  const blastLine = (id) => `F${id} [F${id}] died - respawning (cause: server: blown up by Creeper [kind=explosion by Creeper] | inferred: creeper@0.3 (0s before death at [-100,60,400]) [the inference corroborates the server verdict])`
  const slainLine = (id) => `F${id} [F${id}] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@0.7 (0s before death at [-120,62,405]) [the inference corroborates the server verdict])`
  const backCensus = deathKindCensus([blastLine(3), blastLine(5), slainLine(9)])
  const prevCensus = deathKindCensus([slainLine(1)])
  const curCensus = deathKindCensus([blastLine(7), blastLine(2), blastLine(8)])
  const backCreeper = (backCensus.byAttackerByKind.explosion || {}).Creeper || 0
  const prevCreeper = (prevCensus.byAttackerByKind.explosion || {}).Creeper || 0
  const curCreeper = (curCensus.byAttackerByKind.explosion || {}).Creeper || 0
  assert.equal(backCreeper, 2)
  assert.equal(prevCreeper, 0)
  assert.equal(curCreeper, 3)
  assert.equal((deathKindCensus([]).byAttackerByKind.explosion || {}).Creeper || 0, 0)
  assert.equal(creeperTollTrendRow({ back: { creeper: backCreeper }, prev: { creeper: prevCreeper }, cur: { creeper: curCreeper } }),
    "the creeper toll's own trend (v0.976.111): the creeper toll's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
