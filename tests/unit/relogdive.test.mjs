//
// relogdive.test.mjs - THE RELOG'S OWN DIVE JOIN (v0.916.0)
//
// Face 191 (38084058429) is the row's own face: 5 relogs (head-wet
// saver 4) rode F11 x3 + F15 x2, and the SAME bots own 9 of 15 rescue
// starts (60.0%) - the reconnect loop's own closure, the v0.715.0
// founding warning's own missing half.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { relogDiveJoin, relogDiveJoinRow, relogDiveRiders, relogDiveRidersRow } from '../../src/lib/relogdive.mjs'

const F191_RELOGS = { F11: 3, F15: 2 }
const F191_STARTS = { F11: 5, F15: 4, F14: 3, F13: 2, F5: 1 }

test("the face-191 shape: the relog bots ARE the rescue spenders - 9 of 15 starts (60.0%), the row byte-exact", () => {
  const j = relogDiveJoin(F191_RELOGS, F191_STARTS)
  assert.deepEqual(j, {
    joined: [
      { bot: 'F11', relogs: 3, starts: 5 },
      { bot: 'F15', relogs: 2, starts: 4 }
    ],
    joinedStarts: 9,
    startTotal: 15
  })
  assert.equal(
    relogDiveJoinRow(j),
    "the relog's own dive join (v0.916.0): 2 bot(s) relogged AND started a rescue - F11 (relog 3, start 5) + F15 (relog 2, start 4) own 9 of 15 start(s) (60.0%) - THE RECONNECT LOOP'S OWN CLOSURE: the head-wet saver returns to the water"
  )
})

test('THE BYTE LAW: starts desc first, then the name byte asc on a tie', () => {
  const j = relogDiveJoin({ FB: 1, FA: 1 }, { FA: 2, FB: 2, FZ: 1 })
  assert.deepEqual(j.joined.map(e => e.bot), ['FA', 'FB']) // the tie rides the byte asc (the v0.790.0 law)
  const j2 = relogDiveJoin({ FB: 1 }, { FA: 5, FB: 2 })
  assert.deepEqual(j2.joined.map(e => e.bot), ['FB']) // the solo join never names the unjoined leader
})

test('THE BELOW-HALF LAW: the joined share at or under half rides measured, not owned', () => {
  const j = relogDiveJoin({ F6: 1 }, { F6: 2, F1: 8 }) // 2 of 10 = 20%
  assert.equal(j.joinedStarts, 2)
  assert.equal(j.startTotal, 10)
  assert.equal(
    relogDiveJoinRow(j),
    "the relog's own dive join (v0.916.0): 1 bot(s) relogged AND started a rescue - F6 (relog 1, start 2) own 2 of 10 start(s) (20.0%) - the dive lane's own crowd rides measured, not owned (the relog lane's reach is the measure)"
  )
})

test('THE STRICT LAW: the exact half owns nothing - 7 of 14 rides the riders clause', () => {
  const j = relogDiveJoin({ F3: 1 }, { F3: 7, F2: 7 })
  const row = relogDiveJoinRow(j)
  assert.ok(row.includes('(50.0%)'))
  assert.ok(row.includes('rides measured, not owned'))
})

test('THE HONEST SILENCE: disjoint books never join - null, no row', () => {
  assert.equal(relogDiveJoin({ F11: 3 }, { F5: 5 }), null) // no bot rode both
  assert.equal(relogDiveJoinRow(null), null)
})

test('THE JUNK BATTERY: junk judges nothing, the zero cells never join', () => {
  assert.equal(relogDiveJoin(), null)
  assert.equal(relogDiveJoin(null, null), null)
  assert.equal(relogDiveJoin(42, {}), null)
  assert.equal(relogDiveJoin([], {}), null)
  assert.equal(relogDiveJoin({ F11: 0 }, { F11: 5 }), null) // a zero relog is no relog
  assert.equal(relogDiveJoin({ F11: 3 }, { F11: 0 }), null) // a zero start is no dive
  assert.equal(relogDiveJoin({ F11: 'x' }, { F11: 5 }), null) // non-finite judges nothing
  assert.equal(relogDiveJoin({ F11: 1 }, { F11: NaN }), null)
  assert.equal(relogDiveJoinRow('junk'), null)
  assert.equal(relogDiveJoinRow({ joined: [], joinedStarts: 0, startTotal: 5 }), null)
  assert.equal(relogDiveJoinRow({ joined: [{ bot: 'F1', relogs: 1, starts: 1 }], joinedStarts: 0, startTotal: 5 }), null)
  assert.equal(relogDiveJoinRow({ joined: [{ bot: 'F1', relogs: 1, starts: 1 }], joinedStarts: 1, startTotal: 0 }), null)
})

test('THE CENSUS GUARD: the dive join rides the decompose mine beside the v0.715.0 bill (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { relogDiveJoin, relogDiveJoinRow, relogDiveRiders, relogDiveRidersRow } from '../../src/lib/relogdive.mjs'")) // the import (v0.917.0: + the cap's own tail)
  assert.ok(src.includes('relogDiveJoin(relogByBot, startByBot)')) // the two books' own cells, zero re-parsing
  assert.ok(src.includes('relogDiveRiders(rdj)')) // the tail reads the join's own result (the bill law)
  const bill = src.indexOf("the relog's own bill (v0.715.0)")
  const join = src.indexOf('relogDiveJoin(relogByBot, startByBot)')
  assert.ok(bill > 0 && join > bill) // the join rides beside the bill, never before it
  const riders = src.indexOf('relogDiveRiders(rdj)')
  assert.ok(riders > join) // the tail rides beside the join, never before it
})

// ------------------------------------------------------------------
// (v0.917.0) THE DIVE JOIN'S OWN RIDERS - the cap's own tail named.
// Face 192 (38087218197) is the row's own face: the join rode 3 bots,
// the v0.916.0 row's top-two cap named two, the third rode unread -
// the same defect class the v0.913.0 anatomy's cap owned (F9 hid
// behind the top-two; the v0.914.0 chain book named it).
// ------------------------------------------------------------------

test("the face-192 shape: the third joiner named - 1 rider beyond the cap, the row byte-exact", () => {
  const j = relogDiveJoin(
    { F11: 1, F6: 1, F7: 2 }, // the relog bill's own cells: F7 x2 owns the loop's skin
    { F11: 9, F6: 9, F7: 9, F5: 12, F13: 6 } // 45 starts, the joined own 27
  )
  const r = relogDiveRiders(j)
  assert.deepEqual(r, {
    riders: [{ bot: 'F7', relogs: 2, starts: 9 }], // the byte asc: F11 < F6 < F7 - the cap names F11 + F6
    riderStarts: 9,
    joinedStarts: 27
  })
  assert.equal(
    relogDiveRidersRow(r),
    "the dive join's own riders (v0.917.0): F7 (relog 2, start 9) - 1 rider(s) beyond the cap, their own 9 of the joined 27 start(s) - the membership's own tail named"
  )
  // the v0.916.0 row keeps its byte (recorded not rewritten)
  assert.equal(
    relogDiveJoinRow(j),
    "the relog's own dive join (v0.916.0): 3 bot(s) relogged AND started a rescue - F11 (relog 1, start 9) + F6 (relog 1, start 9) own 27 of 45 start(s) (60.0%) - THE RECONNECT LOOP'S OWN CLOSURE: the head-wet saver returns to the water"
  )
})

test("THE SORT HOLDS: the riders keep the join's own order verbatim - no second cap on the tail", () => {
  const j = relogDiveJoin(
    { F9: 1, F8: 1, F7: 1, F6: 1 },
    { F9: 5, F8: 4, F7: 4, F6: 3, F1: 10 } // the joined own 16 of 26
  )
  const r = relogDiveRiders(j)
  assert.deepEqual(r.riders.map(e => e.bot), ['F8', 'F6']) // the join's own sort: F9(5) first, the F7/F8 tie rides byte asc (F7 capped), F6 last
  assert.equal(r.riderStarts, 7)
  assert.equal(
    relogDiveRidersRow(r),
    "the dive join's own riders (v0.917.0): F8 (relog 1, start 4) + F6 (relog 1, start 3) - 2 rider(s) beyond the cap, their own 7 of the joined 16 start(s) - the membership's own tail named"
  )
})

test('THE HONEST SILENCE: the cap named everyone (joined <= 2) - null, no row', () => {
  const two = relogDiveJoin({ F11: 1, F6: 1 }, { F11: 9, F6: 9, F5: 12 })
  assert.equal(relogDiveRiders(two), null) // the v0.916.0 row IS the whole roster
  const one = relogDiveJoin({ F11: 1 }, { F11: 5, F5: 5 })
  assert.equal(relogDiveRiders(one), null)
  assert.equal(relogDiveRidersRow(null), null)
})

test("THE RIDERS' OWN JUNK BATTERY: junk judges nothing, the zero cells never ride", () => {
  assert.equal(relogDiveRiders(), null)
  assert.equal(relogDiveRiders(42), null)
  assert.equal(relogDiveRiders({ joined: [], joinedStarts: 5 }), null)
  assert.equal(relogDiveRiders({ joined: [{ bot: 'F1', relogs: 1, starts: 1 }], joinedStarts: 1 }), null)
  const j = relogDiveJoin({ F11: 1, F6: 1, F14: 1 }, { F11: 9, F6: 9, F14: 9 })
  const broken = { joined: [j.joined[0], j.joined[1], { bot: '', relogs: 1, starts: 9 }], joinedStarts: 27 } // a nameless cell judges nothing
  assert.equal(relogDiveRiders(broken), null)
  assert.equal(relogDiveRidersRow('junk'), null)
  assert.equal(relogDiveRidersRow({ riders: [], riderStarts: 0, joinedStarts: 5 }), null)
  assert.equal(relogDiveRidersRow({ riders: [{ bot: 'F1', relogs: 1, starts: 1 }], riderStarts: 0, joinedStarts: 5 }), null)
  assert.equal(relogDiveRidersRow({ riders: [{ bot: 'F1', relogs: 1, starts: 1 }], riderStarts: 1, joinedStarts: 0 }), null)
})
