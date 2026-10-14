import { test } from 'node:test'
import assert from 'node:assert/strict'
import { explosionEchoRow, explosionEchoConsistent } from '../../src/lib/explosionecho.mjs'
import { deathKindCensus } from '../../src/lib/deathkinds.mjs'

test("the explosion book's own echo (v0.976.29) - the fold, the fence, the word", () => {
  // the FACE 314 / FACE 315 reads' own shapes byte-exact: the blast
  // book went quiet (0 explosions of 1 death), then FACE 315's book
  // SPOKE 1 explosion of 5 death(s) - the siege's own voice RETURNING
  // after the rest (the word's FIRST field shape)
  const face314 = { explosions: 0, deaths: 1 }
  const face315 = { explosions: 1, deaths: 5 }
  assert.equal(explosionEchoConsistent({ prev: face314, cur: face315 }), true)
  const row1 = explosionEchoRow({ prev: face314, cur: face315 })
  assert.ok(row1.includes("the explosion book's own echo (v0.976.29): this face's blast book holds 1 explosion(s) of 5 death(s) against the prior face's silence"))
  assert.ok(row1.includes('- the siege\'s own voice returning (co-existence reported, causation never guessed)'))
  // the REPEAT: a spoke-after-spoke face prices the voice's own
  // repeat - FACE 316's book spoke 2 explosions of 8 death(s) against
  // FACE 315's spoken book (co-existence reported, causation never
  // guessed)
  const row2 = explosionEchoRow({ prev: face315, cur: { explosions: 2, deaths: 8 } })
  assert.ok(row2.includes("the explosion book's own echo (v0.976.29): this face's blast book holds 2 explosion(s) of 8 death(s) against the prior face's 1 explosion(s) of 5 death(s)"))
  assert.ok(row2.includes('- the siege\'s own voice repeating (co-existence reported, causation never guessed)'))
  // the storm's own RETURN: FACE 322 = 38504523787's book spoke 4
  // explosion(s) of 7 death(s) against FACE 321's quiet book (0 of 1,
  // the fall death) - the siege returning at full weight after two
  // faces of rest (320, 321)
  const row3 = explosionEchoRow({ prev: { explosions: 0, deaths: 1 }, cur: { explosions: 4, deaths: 7 } })
  assert.ok(row3.includes("the explosion book's own echo (v0.976.29): this face's blast book holds 4 explosion(s) of 7 death(s) against the prior face's silence"))
  assert.ok(row3.includes('- the siege\'s own voice returning (co-existence reported, causation never guessed)'))
  // the honest silences: a QUIET blast book prices no echo (the
  // voice's rest is not the subject - the voice is) - FACE 317's own
  // rest after FACE 316's spoken book prices the null, and FACE 321's
  // rest after FACE 320's quiet prices the same null
  assert.equal(explosionEchoRow({ prev: { explosions: 2, deaths: 8 }, cur: { explosions: 0, deaths: 12 } }), null)
  assert.equal(explosionEchoRow({ prev: { explosions: 0, deaths: 1 }, cur: { explosions: 0, deaths: 1 } }), null)
  // the junk seats
  assert.equal(explosionEchoRow(null), null)
  assert.equal(explosionEchoRow('junk'), null)
  assert.equal(explosionEchoRow(undefined), null)
  assert.equal(explosionEchoRow({ prev: face314 }), null)
  assert.equal(explosionEchoRow({ prev: 'junk', cur: face315 }), null)
  assert.equal(explosionEchoRow({ prev: [0], cur: face315 }), null)
  assert.equal(explosionEchoRow({ prev: face314, cur: 42 }), null)
  assert.equal(explosionEchoConsistent(null), false)
  assert.equal(explosionEchoConsistent(42), false)
  assert.equal(explosionEchoConsistent([2]), false)
  assert.equal(explosionEchoConsistent({ prev: face314 }), false)
})

test("the explosion book's own echo fence (v0.976.29) - the voice, the mass, the lie", () => {
  const base = { prev: { explosions: 0, deaths: 1 }, cur: { explosions: 4, deaths: 7 } }
  assert.equal(explosionEchoConsistent(base), true)
  // the honest zeros: a zero book is a legal integer shape (the fence
  // prices the image, the row prices the silence)
  assert.equal(explosionEchoConsistent({ prev: { explosions: 0, deaths: 0 }, cur: { explosions: 0, deaths: 0 } }), true)
  // the explosion count rides a non-negative integer (either face)
  assert.equal(explosionEchoConsistent({ ...base, prev: { ...base.prev, explosions: 1.5 } }), false, 'a fractional explosion count lies')
  assert.equal(explosionEchoConsistent({ ...base, cur: { ...base.cur, explosions: -1 } }), false, 'a negative explosion count lies')
  assert.equal(explosionEchoConsistent({ ...base, prev: { ...base.prev, explosions: null } }), false, 'a missing explosion count lies (the fence prices the image)')
  // the death mass rides a non-negative integer (either face)
  assert.equal(explosionEchoConsistent({ ...base, prev: { ...base.prev, deaths: 1.5 } }), false, 'a fractional death mass lies')
  assert.equal(explosionEchoConsistent({ ...base, cur: { ...base.cur, deaths: -1 } }), false, 'a negative death mass lies')
  assert.equal(explosionEchoConsistent({ ...base, cur: { ...base.cur, deaths: null } }), false, 'a missing death mass lies')
})

test("the explosion book's own echo (v0.976.29) - the one-parser law's own ride", () => {
  // the census's own images: the same deathKindCensus parser runs over
  // both faces' lines (never a fork) - the FACE 322-shaped announces
  // ride the storm's own RETURN through the fold
  const face321Lines = [
    'F17 [F17] died - respawning (cause: server: suffocated in a wall [kind=suffocate] | inferred: fall/env (0s before death at [-91,43,375]) [the inference is blind])'
  ]
  const face322Lines = [
    'F10 [F10] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: zombie@4.8 (0s before death at [-132,38,411]) [the inference names a BYSTANDER - the exploder removed itself at detonation])',
    'F6 [F6] died - respawning (cause: server: drowned [kind=drown] | inferred: drowning (0s before death at [-127,53,409]) [the inference corroborates the server verdict])',
    'F17 [F17] died - respawning (cause: server: suffocated in a wall [kind=suffocate] | inferred: fall/env (0s before death at [-91,43,375]) [the inference is blind])',
    'F8 [F8] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: fall/env (0s before death at [-112,66,395]) [the inference is blind])',
    'F3 [F3] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@1.5 (0s before death at [-183,65,426]) [the inference corroborates the server verdict])',
    'F5 [F5] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: skeleton@4.0 (0s before death at [-89,66,430]) [the inference is blind])',
    'F2 [F2] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: fall/env (0s before death at [-100,68,415]) [the inference is blind])'
  ]
  const prevCensus = deathKindCensus(face321Lines)
  const curCensus = deathKindCensus(face322Lines)
  const prev = { explosions: prevCensus.byKind.explosion || 0, deaths: prevCensus.total }
  const cur = { explosions: curCensus.byKind.explosion || 0, deaths: curCensus.total }
  assert.equal(prev.explosions, 0)
  assert.equal(prev.deaths, 1)
  assert.equal(cur.explosions, 4)
  assert.equal(cur.deaths, 7)
  const row = explosionEchoRow({ prev, cur })
  assert.ok(row.includes('this face\'s blast book holds 4 explosion(s) of 7 death(s) against the prior face\'s silence'))
  assert.ok(row.includes('- the siege\'s own voice returning (co-existence reported, causation never guessed)'))
  // the junk-safe law: prose and death-drop lines never invent a body
  // (the census's own guard, the v0.583.0 law)
  const quiet = deathKindCensus([
    'F6 [F6] death drop: ~136u lost at [-127,53,409] (dirt 34, cobblestone 25)',
    'F6 steer hazard defer: coal_ore@-124,59,387 held behind the ledger (d 4.3)'
  ])
  assert.equal(quiet.total, 0)
  assert.equal(explosionEchoRow({ prev, cur: { explosions: quiet.byKind.explosion || 0, deaths: quiet.total } }), null)
})
