//
// waterleg.test.mjs - THE WATER'S OWN LEG (v0.957.0)
//
// The drown context's own leg axis across EVERY rescue relation - the
// v0.912.0 re-entry's own leg seats the RETURNS' walk (the stale class
// alone); the live lane's walk and the trigger-blind's walk ride
// unnamed, and no row ever draws the whole map. The book reads the LOG
// LINES directly off DROWN_CONTEXT_RE (the one-parser law - the
// grammar lives in o2gap.mjs once) because o2Gap's perBot fold is
// LAST-WINS per bot: face 215's F9 drowned twice and its first leg
// ('rescue never, leg approach segment') never reaches any perBot
// cell. The seat law rides the re-entry seat's own shape byte-true
// (strict majority over ALL contexts, a tie owns nothing, the unread
// class counts and judges nothing).
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  waterLegBook,
  waterLegConsistent,
  waterLegRow
} from '../../src/lib/waterleg.mjs'

// The face-215 gate's own context bytes, byte-true off the live log
// (the four rows the v0.956.0 spot book's gate rode - one pool's own
// levy, the legs the water kept).
const ctx = (bot, o2, rescue, leg, wet) =>
  `${bot} [${bot}] death: drown context (o2 ${o2}, feet water, head water, rescue ${rescue}, leg ${leg}, ${wet})`

const FACE215_GATE = [
  ctx('F16', 'reset(-1)', '37s ago', 'approach segment', 'wet 23s'),
  ctx('F1', 'reset(-1)', '46s ago', 'next column alt', 'wet 17s@last'),
  ctx('F9', 'reset(-1)', 'never', 'approach segment', 'wet 27s'),
  ctx('F9', 'reset(-1)', 'active', 'unknown', 'wet 6s')
]

test('the face-215 gate: the whole map prices every lane the water kept (the book, the fence, the row byte-exact)', () => {
  const b = waterLegBook(FACE215_GATE)
  assert.equal(b.contexts, 4)
  assert.equal(b.named, 3)
  assert.equal(b.unread, 1)
  assert.deepEqual(b.legs, [
    { name: 'approach segment', n: 2, live: 0, never: 1, stale: 1 },
    { name: 'next column alt', n: 1, live: 0, never: 0, stale: 1 }
  ])
  assert.equal(b.owner, null) // 2 of 4 = exactly half - the tie law held
  assert.equal(b.rows.length, 4)
  assert.equal(waterLegConsistent(b), true)
  assert.equal(waterLegRow(b), "the water's own leg (v0.957.0): contexts 4 - approach segment 2, next column alt 1, unread 1 - the legs' own spread: no walk owns half the water's own book - THE AMBIENT WALK'S OWN SPREAD, the lanes rode their own legs")
})

test('the seat: a named walk above half owns the water, the class join rides the lanes cell (the row byte-exact)', () => {
  const b = waterLegBook([
    ctx('F2', '0', 'never', 'approach segment', 'wet 9s'),
    ctx('F4', '1', '5s ago', 'approach segment', 'wet 11s'),
    ctx('F6', '2', '30s ago', 'next column alt', 'wet unknown')
  ])
  assert.equal(b.contexts, 3)
  assert.equal(b.named, 3)
  assert.equal(b.unread, 0)
  assert.deepEqual(b.owner, { name: 'approach segment', owns: 2, live: 0, never: 1, stale: 1 })
  assert.equal(waterLegConsistent(b), true)
  assert.equal(waterLegRow(b), "the water's own leg (v0.957.0): contexts 3 - approach segment 2, next column alt 1 - leg approach segment owns 2 of 3 (66.7%) (the lanes: never 1, stale 1) - THE WATER'S OWN MAP: one walk prices the lanes the water kept - the walk's own levy")
})

test('the tie law: exactly half owns nothing (the strict-majority law, the seat stays null)', () => {
  const b = waterLegBook([
    ctx('F2', '0', 'never', 'approach segment', 'wet 9s'),
    ctx('F4', '1', '5s ago', 'approach segment', 'wet 11s'),
    ctx('F6', '2', '30s ago', 'next column alt', 'wet unknown'),
    ctx('F8', '3', 'active', 'next column alt', 'wet 2s')
  ])
  assert.equal(b.contexts, 4)
  assert.equal(b.legs[0].n, 2)
  assert.equal(b.legs[1].n, 2)
  assert.equal(b.owner, null)
  assert.equal(waterLegConsistent(b), true)
  assert.ok(waterLegRow(b).includes("the legs' own spread"))
})

test('the blind skin: the unread class counts in the book and the denominator and judges nothing (unknown never owns)', () => {
  const b = waterLegBook([
    ctx('F2', '0', 'active', 'unknown', 'wet 4s'),
    ctx('F4', '1', 'never', 'unknown', 'wet 5s'),
    ctx('F6', '2', '30s ago', 'approach segment', 'wet 8s')
  ])
  assert.equal(b.contexts, 3)
  assert.equal(b.named, 1)
  assert.equal(b.unread, 2)
  assert.equal(b.owner, null) // 1 of 3 is no majority; the unread pair never joins the seat
  assert.equal(waterLegConsistent(b), true)
  assert.equal(waterLegRow(b), "the water's own leg (v0.957.0): contexts 3 - approach segment 1, unread 2 - the legs' own spread: no walk owns half the water's own book - THE AMBIENT WALK'S OWN SPREAD, the lanes rode their own legs")
})

test("the '@coords' stamp law: two cells of one walk are ONE class (the name law rides reentryLegName once)", () => {
  const b = waterLegBook([
    ctx('F2', '0', '41s ago', 'fuel commons walk @-145,391', 'wet 12s'),
    ctx('F4', '1', 'active', 'fuel commons walk @-150,393', 'wet 3s'),
    ctx('F6', '2', 'never', 'approach segment', 'wet 8s')
  ])
  assert.equal(b.contexts, 3)
  assert.deepEqual(b.legs[0], { name: 'fuel commons walk', n: 2, live: 1, never: 0, stale: 1 })
  assert.deepEqual(b.owner, { name: 'fuel commons walk', owns: 2, live: 1, never: 0, stale: 1 })
  assert.equal(waterLegConsistent(b), true)
  assert.equal(waterLegRow(b), "the water's own leg (v0.957.0): contexts 3 - fuel commons walk 2, approach segment 1 - leg fuel commons walk owns 2 of 3 (66.7%) (the lanes: live 1, stale 1) - THE WATER'S OWN MAP: one walk prices the lanes the water kept - the walk's own levy")
})

test('the twice-drowned bot: BOTH legs price (the perBot last-wins fold is the fence this book exists for)', () => {
  const b = waterLegBook(FACE215_GATE)
  const f9 = b.rows.filter((r) => r.bot === 'F9')
  assert.equal(f9.length, 2)
  assert.deepEqual(f9.map((r) => r.name), ['approach segment', null]) // the first leg the perBot fold would lose
  assert.equal(b.rows[0].rescue, 'stale')
  assert.equal(b.rows[2].rescue, 'never')
  assert.equal(b.rows[3].rescue, 'live')
})

test('the grammar fence: the suffocate and void contexts, the death rows and the chat never vote', () => {
  const b = waterLegBook([
    'F5 [F5] death: suffocate context (head water, o2 0, leg approach segment)',
    'F7 [F7] death: void context (cell [10,-64,10], depth unknown, leg unknown)',
    'F9 [F9] died - respawning (cause: server: drowned [kind=drown] | inferred: drowning (0s before death at [-121,48,398]))',
    'F5 [F5] chat: the water is fine',
    ctx('F2', '0', 'never', 'approach segment', 'wet 9s')
  ])
  assert.equal(b.contexts, 1)
  assert.equal(b.named, 1)
  assert.equal(waterLegConsistent(b), true)
})

test('the silence branch: a context-less face prices nothing (the honest null)', () => {
  assert.equal(waterLegBook([]), null)
  assert.equal(waterLegBook(['junk line', 'F5 [F5] chat: hello']), null)
  assert.equal(waterLegBook(undefined), null)
  assert.equal(waterLegBook(null), null)
})

test('the byte law: count desc, then the name\'s own asc (the v0.912.0 order rides the split)', () => {
  const b = waterLegBook([
    ctx('F2', '0', 'never', 'wood trip', 'wet 9s'),
    ctx('F4', '1', 'active', 'approach segment', 'wet 3s'),
    ctx('F6', '2', '30s ago', 'next column alt', 'wet unknown')
  ])
  assert.deepEqual(b.legs.map((l) => l.name), ['approach segment', 'next column alt', 'wood trip'])
  assert.equal(waterLegConsistent(b), true)
})

test('the fence: a tampered book prices nothing (the cells lie, the mirror recounts)', () => {
  const b = waterLegBook(FACE215_GATE)
  assert.equal(waterLegConsistent(b), true)
  // the count cells lie
  assert.equal(waterLegConsistent({ ...b, contexts: 5 }), false)
  assert.equal(waterLegConsistent({ ...b, named: 2 }), false)
  assert.equal(waterLegConsistent({ ...b, unread: 2 }), false)
  // the legs lie (a walk overcounted / a walk the rows never rode / a class lie)
  assert.equal(waterLegConsistent({ ...b, legs: [{ name: 'approach segment', n: 3, live: 0, never: 1, stale: 2 }, b.legs[1]] }), false)
  assert.equal(waterLegConsistent({ ...b, legs: [...b.legs, { name: 'wood trip', n: 1, live: 0, never: 0, stale: 1 }] }), false)
  assert.equal(waterLegConsistent({ ...b, legs: [{ ...b.legs[0], live: 2 }, b.legs[1]] }), false)
  // the order lie (the byte law)
  assert.equal(waterLegConsistent({ ...b, legs: [b.legs[1], b.legs[0]] }), false)
  // the owner lies (a seat the strict-majority law refuses / a walk the map never rode)
  assert.equal(waterLegConsistent({ ...b, owner: { name: 'approach segment', owns: 2, live: 0, never: 1, stale: 1 } }), false)
  assert.equal(waterLegConsistent({ ...b, owner: { name: 'wood trip', owns: 3, live: 0, never: 0, stale: 3 } }), false)
  // the name law's own recount (a row's name drifted off reentryLegName)
  const drifted = { ...b, rows: b.rows.map((r, i) => (i === 0 ? { ...r, name: 'junk walk' } : r)) }
  assert.equal(waterLegConsistent(drifted), false)
  // the relation lie
  const relied = { ...b, rows: b.rows.map((r, i) => (i === 0 ? { ...r, rescue: 'swim' } : r)) }
  assert.equal(waterLegConsistent(relied), false)
  // junk shapes price nothing
  assert.equal(waterLegConsistent(null), false)
  assert.equal(waterLegConsistent(undefined), false)
  assert.equal(waterLegConsistent('book'), false)
  assert.equal(waterLegConsistent([]), false)
})

test('the row branch law: junk never prints a row, one branch never both (the seat and the spread are exclusive)', () => {
  assert.equal(waterLegRow(null), null)
  assert.equal(waterLegRow(undefined), null)
  assert.equal(waterLegRow('book'), null)
  assert.equal(waterLegRow([]), null)
  const b = waterLegBook(FACE215_GATE) // the spread book (the tie)
  assert.equal(waterLegRow({ ...b, contexts: 0 }), null)
  assert.equal(waterLegRow({ ...b, named: 4, unread: 1 }), null)
  assert.equal(waterLegRow({ ...b, legs: [{ ...b.legs[0], stale: 2 }] }), null)
  // the spread row cannot print under a live majority
  const seat = waterLegBook([
    ctx('F2', '0', 'never', 'approach segment', 'wet 9s'),
    ctx('F4', '1', '5s ago', 'approach segment', 'wet 11s'),
    ctx('F6', '2', '30s ago', 'next column alt', 'wet unknown')
  ])
  assert.equal(waterLegRow({ ...seat, owner: null }), null)
  // the seat row cannot print without the majority
  assert.equal(waterLegRow({ ...b, owner: { name: 'approach segment', owns: 2, live: 0, never: 1, stale: 1 } }), null)
  // the all-unread row
  const dark = waterLegBook([
    ctx('F2', '0', 'active', 'unknown', 'wet 4s'),
    ctx('F4', '1', 'never', 'unknown', 'wet 5s')
  ])
  assert.equal(dark.named, 0)
  assert.equal(waterLegRow(dark), "the water's own leg (v0.957.0): contexts 2, every leg unread - the water's own map never drew, the stamps stayed dark")
})

test('the prose stays in the lib (the decompose rides the row, never the prose)', () => {
  const libSrc = readFileSync(new URL('../../src/lib/waterleg.mjs', import.meta.url), 'utf8')
  assert.ok(libSrc.includes("THE WATER'S OWN MAP: one walk prices the lanes the water kept"), 'the map tail rides the lib')
  const decSrc = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(!decSrc.includes("THE WATER'S OWN MAP: one walk prices the lanes"), 'the prose stays in the lib')
})

test('the one-parser law: the grammar and the name law live once (the lib imports, never re-spells)', () => {
  const libSrc = readFileSync(new URL('../../src/lib/waterleg.mjs', import.meta.url), 'utf8')
  assert.ok(libSrc.includes("import { DROWN_CONTEXT_RE } from './o2gap.mjs'"), 'the context grammar imports once')
  assert.ok(libSrc.includes("import { reentryLegName } from './reentryseat.mjs'"), 'the name law imports once')
  assert.equal(/DROWN_CONTEXT_RE\s*=/.test(libSrc), false, 'the RE never re-spells')
  assert.equal(/\/\^\(F\\d\+\)/.test(libSrc), false, 'no second context RE')
})

test('WIRING: the decompose rides the water map beside the re-entry leg (the v0.957.0 block)', () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.equal(/const wlb = waterLegBook\(lines\)/.test(src), true)
  assert.equal(/if \(wlb && waterLegConsistent\(wlb\)\)/.test(src), true)
  assert.equal(/const wlr = waterLegRow\(wlb\)/.test(src), true)
  assert.equal(/if \(wlr\) console\.log\(`\s*\$\{wlr\}`\)/.test(src), true)
})
