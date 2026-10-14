import { test } from 'node:test'
import assert from 'node:assert/strict'
import { kindEchoRow, kindEchoConsistent, kindSeatHead } from '../../src/lib/kindecho.mjs'
import { deathKindCensus } from '../../src/lib/deathkinds.mjs'

test("the kind's own seat echo (v0.976.31) - the fold, the fence, the word", () => {
  // the DYNASTY's own shape byte-exact: FACE 316's book rode mob as
  // the head kind (the head's own mass 4), then FACE 317's book rode
  // mob again (the head's own mass 10 - the siege the dynasty's own
  // peak, 10 of 12) - the mob kind's own seat five faces straight
  // (313 -> 317), the family's tie law naming the head both faces
  const face316 = { kind: 'mob', deaths: 4 }
  const face317 = { kind: 'mob', deaths: 10 }
  assert.equal(kindEchoConsistent({ prev: face316, cur: face317 }), true)
  const row1 = kindEchoRow({ prev: face316, cur: face317 })
  assert.ok(row1.includes("the kind's own seat echo (v0.976.31): the mob kind's own seat repeated - 10 death(s) this face against 4 prior"))
  assert.ok(row1.includes('- the dynasty holding (co-existence reported, causation never guessed)'))
  // the TURN's own shape byte-exact: FACE 318's drown took the seat
  // the mob kind rode (the head's own mass 2 of 3 against 10 of 12) -
  // the dynasty's own fall, the churn era's own birth
  const row2 = kindEchoRow({ prev: face317, cur: { kind: 'drown', deaths: 2 } })
  assert.ok(row2.includes("the kind's own seat echo (v0.976.31): the drown kind took the seat the mob kind rode - 2 death(s) this face against 10 prior"))
  assert.ok(row2.includes("- the seat's own turn (no dynasty rode unnamed)"))
  // the churn era's own latest: FACE 323's mob took the seat the
  // explosion kind rode (the head's own mass 7 against 4) - six
  // faces, six turns, no kind held two faces straight
  const row3 = kindEchoRow({ prev: { kind: 'explosion', deaths: 4 }, cur: { kind: 'mob', deaths: 7 } })
  assert.ok(row3.includes("the kind's own seat echo (v0.976.31): the mob kind took the seat the explosion kind rode - 7 death(s) this face against 4 prior"))
  // the head's own tie law: a tied mass rides name asc bytewise -
  // FACE 319's book {explosion: 1, fall: 1} reads the explosion kind
  // ('explosion' < 'fall')
  assert.deepEqual(kindSeatHead({ fall: 1, explosion: 1 }), { kind: 'explosion', deaths: 1 })
  assert.deepEqual(kindSeatHead({ mob: 4, drown: 2 }), { kind: 'mob', deaths: 4 })
  // the empty book prices no seat, and a birth prices no echo (the
  // echo needs a prior holder)
  assert.equal(kindSeatHead({}), null)
  assert.equal(kindEchoRow({ prev: null, cur: { kind: 'mob', deaths: 3 } }), null)
  assert.equal(kindEchoRow({ prev: face316, cur: null }), null)
  assert.equal(kindEchoRow({ prev: null, cur: null }), null)
  // the junk seats
  assert.equal(kindEchoRow(null), null)
  assert.equal(kindEchoRow('junk'), null)
  assert.equal(kindEchoRow(undefined), null)
  assert.equal(kindEchoRow({ prev: face316 }), null)
  assert.equal(kindEchoRow({ prev: 'junk', cur: face317 }), null)
  assert.equal(kindEchoRow({ prev: [1], cur: face317 }), null)
  assert.equal(kindEchoRow({ prev: face316, cur: 42 }), null)
  assert.equal(kindEchoConsistent(null), false)
  assert.equal(kindEchoConsistent(42), false)
  assert.equal(kindEchoConsistent([2]), false)
  assert.equal(kindEchoConsistent({ prev: face316 }), false)
})

test("the kind's own seat echo fence (v0.976.31) - the head, the mass, the lie", () => {
  const base = { prev: { kind: 'mob', deaths: 8 }, cur: { kind: 'mob', deaths: 12 } }
  assert.equal(kindEchoConsistent(base), true)
  // the null heads are legal shapes (the empty book's own silence;
  // the row prices the silence)
  assert.equal(kindEchoConsistent({ prev: null, cur: base.cur }), true)
  assert.equal(kindEchoConsistent({ prev: base.prev, cur: null }), true)
  // the kind byte rides a non-empty string (either face)
  assert.equal(kindEchoConsistent({ ...base, prev: { ...base.prev, kind: '' } }), false, 'an empty kind byte lies')
  assert.equal(kindEchoConsistent({ ...base, cur: { ...base.cur, kind: 42 } }), false, 'a numeric kind byte lies')
  assert.equal(kindEchoConsistent({ ...base, prev: { ...base.prev, kind: null } }), false, 'a missing kind byte lies (the fence prices the image)')
  // the mass rides a non-negative integer (either face)
  assert.equal(kindEchoConsistent({ ...base, prev: { ...base.prev, deaths: 1.5 } }), false, 'a fractional mass lies')
  assert.equal(kindEchoConsistent({ ...base, cur: { ...base.cur, deaths: -1 } }), false, 'a negative mass lies')
  assert.equal(kindEchoConsistent({ ...base, cur: { ...base.cur, deaths: null } }), false, 'a missing mass lies')
  // the head's own junk guard: junk buckets never invent a body
  assert.equal(kindSeatHead(null), null)
  assert.equal(kindSeatHead('junk'), null)
  assert.equal(kindSeatHead([4]), null)
  assert.equal(kindSeatHead({ mob: 0 }), null, 'a zero bucket is no seat')
  assert.equal(kindSeatHead({ mob: 1.5 }), null, 'a fractional bucket lies')
  assert.equal(kindSeatHead({ mob: -2 }), null, 'a negative bucket lies')
})

test("the kind's own seat echo (v0.976.31) - the one-parser law's own ride", () => {
  // the census's own images: the same deathKindCensus parser runs
  // over both faces' lines (never a fork) - the FACE 322/323-shaped
  // announces ride the churn era's own latest turn through the fold
  const face322Lines = [
    'F10 [F10] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: zombie@4.8 (0s before death at [-132,38,411]) [the inference names a BYSTANDER])',
    'F6 [F6] died - respawning (cause: server: drowned [kind=drown] | inferred: drowning (0s before death at [-127,53,409]) [the inference corroborates the server verdict])',
    'F17 [F17] died - respawning (cause: server: suffocated in a wall [kind=suffocate] | inferred: fall/env (0s before death at [-91,43,375]) [the inference is blind])',
    'F8 [F8] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: fall/env (0s before death at [-112,66,395]) [the inference is blind])',
    'F3 [F3] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@1.5 (0s before death at [-183,65,426]) [the inference corroborates the server verdict])',
    'F5 [F5] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: skeleton@4.0 (0s before death at [-89,66,430]) [the inference is blind])',
    'F2 [F2] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: fall/env (0s before death at [-100,68,415]) [the inference is blind])'
  ]
  const face323Lines = [
    'F3 [F3] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@1.5 (0s before death at [-183,65,426]) [the inference corroborates the server verdict])',
    'F5 [F5] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@2.0 (0s before death at [-89,66,430]) [the inference corroborates the server verdict])',
    'F8 [F8] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@1.2 (0s before death at [-112,66,395]) [the inference corroborates the server verdict])',
    'F2 [F2] died - respawning (cause: server: was slain by Drowned [kind=mob by Drowned] | inferred: zombie@1.8 (0s before death at [-100,68,415]) [the inference is blind])',
    'F9 [F9] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@1.1 (0s before death at [-90,65,420]) [the inference corroborates the server verdict])',
    'F12 [F12] died - respawning (cause: server: was slain by Drowned [kind=mob by Drowned] | inferred: zombie@2.2 (0s before death at [-130,52,410]) [the inference is blind])',
    'F15 [F15] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@1.4 (0s before death at [-95,64,400]) [the inference corroborates the server verdict])'
  ]
  const prevHead = kindSeatHead(deathKindCensus(face322Lines).byKind)
  const curHead = kindSeatHead(deathKindCensus(face323Lines).byKind)
  assert.deepEqual(prevHead, { kind: 'explosion', deaths: 4 })
  assert.deepEqual(curHead, { kind: 'mob', deaths: 7 })
  const row = kindEchoRow({ prev: prevHead, cur: curHead })
  assert.ok(row.includes("the mob kind took the seat the explosion kind rode - 7 death(s) this face against 4 prior"))
  assert.ok(row.includes("- the seat's own turn (no dynasty rode unnamed)"))
  // the dynasty's own ride: the mob-shaped book against the mob book
  // prices the holding (the census's own images, never a re-count)
  const rowDyn = kindEchoRow({ prev: { kind: 'mob', deaths: 4 }, cur: { kind: 'mob', deaths: 10 } })
  assert.ok(rowDyn.includes("the mob kind's own seat repeated - 10 death(s) this face against 4 prior"))
  // the junk-safe law: prose and death-drop lines never invent a body
  // (the census's own guard, the v0.583.0 law) - an empty book rides
  // the honest silence
  const quiet = deathKindCensus([
    'F6 [F6] death drop: ~136u lost at [-127,53,409] (dirt 34, cobblestone 25)',
    'F6 steer hazard defer: coal_ore@-124,59,387 held behind the ledger (d 4.3)'
  ])
  assert.equal(kindSeatHead(quiet.byKind), null)
  assert.equal(kindEchoRow({ prev: curHead, cur: kindSeatHead(quiet.byKind) }), null)
})
