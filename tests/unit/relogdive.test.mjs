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
import { relogDiveJoin, relogDiveJoinRow } from '../../src/lib/relogdive.mjs'

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
  assert.ok(src.includes("import { relogDiveJoin, relogDiveJoinRow } from '../../src/lib/relogdive.mjs'")) // the import
  assert.ok(src.includes('relogDiveJoin(relogByBot, startByBot)')) // the two books' own cells, zero re-parsing
  const bill = src.indexOf("the relog's own bill (v0.715.0)")
  const join = src.indexOf('relogDiveJoin(relogByBot, startByBot)')
  assert.ok(bill > 0 && join > bill) // the join rides beside the bill, never before it
})
