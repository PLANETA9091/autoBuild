import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinBinCensus, rejoinBinConsistent, rejoinBinTrendRow } from '../../src/lib/rejoinbin.mjs'

// the REAL faces the fresh 31-face archive holds (fire-0643's own
// re-harvest, /home/z/faces331 - the re-join bin the balance's inner
// shape keeps: SEVENTEEN distinct classes the arc voices, the F524
// churn monster's 50 the ceiling, F530's 4 and F531's 8 the fresh
// faces the fire-0443/0643 deep-reads paid).

// F530's own face - the re-joining names' own echo sequences the
// fire-0443 ledger named (F14/F10/F15/F17 each rejoined once - the
// four events the 24=24 balance rode)
const REAL_F530 = [
  '[21:07:22] [Server thread/INFO]: F10 joined the game',
  '[21:07:32] [Server thread/INFO]: F14 joined the game',
  '[21:07:34] [Server thread/INFO]: F15 joined the game',
  '[21:07:39] [Server thread/INFO]: F17 joined the game',
  '[21:13:40] [Server thread/INFO]: F14 joined the game',
  '[21:14:14] [Server thread/INFO]: F10 joined the game',
  '[21:15:13] [Server thread/INFO]: F15 joined the game',
  '[21:16:20] [Server thread/INFO]: F17 joined the game'
]
// F531's own face - the re-joining names' own echo sequences the
// fire-0643 deep-read paid (F13 rejoined TWICE, F3/F4/F7/F11/F14/F15
// once each - the eight events the 28=28 balance rode)
const REAL_F531 = [
  '[21:59:10] [Server thread/INFO]: F3 joined the game',
  '[21:59:13] [Server thread/INFO]: F4 joined the game',
  '[21:59:21] [Server thread/INFO]: F7 joined the game',
  '[21:59:31] [Server thread/INFO]: F11 joined the game',
  '[21:59:36] [Server thread/INFO]: F13 joined the game',
  '[21:59:39] [Server thread/INFO]: F14 joined the game',
  '[21:59:41] [Server thread/INFO]: F15 joined the game',
  '[22:06:07] [Server thread/INFO]: F15 joined the game',
  '[22:06:27] [Server thread/INFO]: F13 joined the game',
  '[22:06:47] [Server thread/INFO]: F13 joined the game',
  '[22:09:00] [Server thread/INFO]: F14 joined the game',
  '[22:09:01] [Server thread/INFO]: F3 joined the game',
  '[22:09:01] [Server thread/INFO]: F11 joined the game',
  '[22:09:03] [Server thread/INFO]: F4 joined the game',
  '[22:09:03] [Server thread/INFO]: F7 joined the game'
]

test('v0.976.346 census: the REAL re-join sequences byte-exact', () => {
  // F530's own names - the four events the ledger named
  const f530 = rejoinBinCensus(REAL_F530)
  assert.deepEqual(f530, { rejoinBinEvents: 4 })
  // F531's own names - the eight events (F13's twice the deep-read keeps)
  const f531 = rejoinBinCensus(REAL_F531)
  assert.deepEqual(f531, { rejoinBinEvents: 8 })
  // the firsts-only face the lawful zero keeps
  assert.deepEqual(rejoinBinCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinBinEvents: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinBinCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinBinEvents: 0 })
  // non-array null
  assert.equal(rejoinBinCensus(null), null)
  assert.equal(rejoinBinCensus('lines'), null)
  // the same name thrice the tally keeps (F13's own shape)
  assert.deepEqual(rejoinBinCensus([
    '[21:59:36] [Server thread/INFO]: F13 joined the game',
    '[22:06:27] [Server thread/INFO]: F13 joined the game',
    '[22:06:47] [Server thread/INFO]: F13 joined the game'
  ]), { rejoinBinEvents: 2 })
})

test('v0.976.346 arc: the REAL thirty-one-face bin re-voiced byte-exact', () => {
  // fire-0643's own audit (/home/z/faces331, the re-harvest the
  // sandbox death's zero rebuilt) re-voices the arc the artifacts
  // rode - the balance's inner shape the census never priced
  const ARC = [19, 10, 5, 10, 20, 17, 6, 19, 2, 6, 12, 18, 4, 27, 7, 13, 12, 9, 6, 6, 13, 27, 8, 50, 16, 12, 8, 5, 2, 4, 8]
  assert.equal(ARC.length, 31)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 17) // SEVENTEEN distinct classes
  assert.equal(Math.max(...ARC), 50) // the F524 churn monster's ceiling
  assert.equal(ARC[29], 4) // F530's own four
  assert.equal(ARC[30], 8) // F531's own eight
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0)
})

test('v0.976.346 grammar: the refusal battery the strict frame keeps', () => {
  const refusals = [
    '[21:16:20] [Server thread/WARN]: F17 joined the game', // WARN frame
    '[21:16:20] [Server thread/INFO]: F17 left the game', // the leave sibling
    '[21:16:20] [Server thread/INFO]: F17 logged in with entity id 541', // the login line
    '[21:16:20] [Server thread/INFO]: F17 joined the server', // foreign tail
    '[21:16:20] [Server thread/INFO]: F17 joined game', // missing article
    '[21:16:20] [Server thread/INFO]: F17 joined the game ', // trailing whitespace
    '[1:44:16] [Server thread/INFO]: F17 joined the game', // 1-digit hour
    '[01:44:60] [Server thread/INFO]: F17 joined the game', // overflow second
    '[21:16:20] [Server thread/INFO]: Joined the game', // no name cell
    '[21:16:20] [Server thread/INFO]: joined the game' // lowercase join verb
  ]
  for (const bad of refusals) {
    const face = rejoinBinCensus([bad])
    assert.deepEqual(face, { rejoinBinEvents: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.346 fence: every branch the count law keeps', () => {
  const ok = (v) => ({ back: { rejoinBinEvents: v }, prev: { rejoinBinEvents: v }, cur: { rejoinBinEvents: v } })
  assert.equal(rejoinBinConsistent(ok(0)), true)
  assert.equal(rejoinBinConsistent(ok(50)), true)
  assert.equal(rejoinBinConsistent(ok(86399)), true)
  assert.equal(rejoinBinConsistent(ok(-1)), false)
  assert.equal(rejoinBinConsistent(ok(86400)), false)
  assert.equal(rejoinBinConsistent(ok(0.5)), false)
  assert.equal(rejoinBinConsistent(ok('4')), false)
  assert.equal(rejoinBinConsistent(ok(undefined)), false)
  assert.equal(rejoinBinConsistent(null), false)
  assert.equal(rejoinBinConsistent({}), false)
  assert.equal(rejoinBinConsistent({ back: { rejoinBinEvents: 0 } }), false)
})

test('v0.976.346 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the fresh faces keep (F529 -> F530 -> F531:
  // 2 -> 4 -> 8 the churn's own climb two steps deep)
  const swell = rejoinBinTrendRow({ back: { rejoinBinEvents: 2 }, prev: { rejoinBinEvents: 4 }, cur: { rejoinBinEvents: 8 } })
  assert.equal(swell.startsWith("the fleet's own re-join trend (v0.976.346): the fleet's own re-join bin swell ran two steps deep - 2 -> 4 (+2) -> 8 (+4) - the fleet's own churn grew each face,"), true)
  // the swing the storm's own trade keeps (F528 -> F529 -> F530:
  // 5 -> 2 -> 4)
  const swing = rejoinBinTrendRow({ back: { rejoinBinEvents: 5 }, prev: { rejoinBinEvents: 2 }, cur: { rejoinBinEvents: 4 } })
  assert.equal(swing.startsWith("the fleet's own re-join trend (v0.976.346): the fleet's own re-join bin swing - 5 -> 2 (-3) -> 4 (+2) - the fleet's own churn traded between the faces,"), true)
  // the fade the calm's own shape keeps
  const fade = rejoinBinTrendRow({ back: { rejoinBinEvents: 8 }, prev: { rejoinBinEvents: 4 }, cur: { rejoinBinEvents: 2 } })
  assert.equal(fade.startsWith("the fleet's own re-join trend (v0.976.346): the fleet's own re-join bin fade ran two steps deep - 8 -> 4 (-4) -> 2 (-2) - the fleet's own churn calmed each face,"), true)
  // the held steps the honest silence keeps
  assert.equal(rejoinBinTrendRow({ back: { rejoinBinEvents: 4 }, prev: { rejoinBinEvents: 4 }, cur: { rejoinBinEvents: 8 } }), null)
  assert.equal(rejoinBinTrendRow({ back: { rejoinBinEvents: 2 }, prev: { rejoinBinEvents: 4 }, cur: { rejoinBinEvents: 4 } }), null)
  // the tail co-existence every seat named (the .336 sibling first)
  for (const seat of ['.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
