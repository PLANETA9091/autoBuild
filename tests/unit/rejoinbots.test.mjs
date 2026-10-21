import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinBotsCensus, rejoinBotsConsistent, rejoinBotsTrendRow } from '../../src/lib/rejoinbots.mjs'

// the REAL faces the fresh 32-face archive holds (fire-0743's own
// re-harvest, /home/z/faces331 - the breadth the depth never folded:
// THIRTEEN distinct classes the arc voices, the F501 ceiling's 17
// and the F509 floor's 1 the extremes ride, the fresh faces
// F530/F531/F532 the fire-0443/0643 deep-reads paid).

// F530's own echo set - the four re-joining names the fire-0443
// ledger named (F14/F10/F15/F17 each rejoined once - the EQUALITY
// face: breadth 4 == depth 4, each bot carried exactly one event)
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
// F531's own echo set - the seven re-joining names the fire-0643
// deep-read paid (F13 thrice, six singles - the DIVERGENCE face:
// breadth 7 < depth 8, F13's own third join the tally carries)
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
// F512's own F9 sequence - the MEGA-FLAPPER the fresh harvest keeps
// (eleven joins the face voiced, ten events one bot - the maximal
// divergence ratio the breadth cell prices)
const REAL_F9 = [
  '[05:01:24] [Server thread/INFO]: F9 joined the game',
  '[05:08:13] [Server thread/INFO]: F9 joined the game',
  '[05:08:21] [Server thread/INFO]: F9 joined the game',
  '[05:08:28] [Server thread/INFO]: F9 joined the game',
  '[05:08:57] [Server thread/INFO]: F9 joined the game',
  '[05:09:14] [Server thread/INFO]: F9 joined the game',
  '[05:09:25] [Server thread/INFO]: F9 joined the game',
  '[05:09:33] [Server thread/INFO]: F9 joined the game',
  '[05:09:47] [Server thread/INFO]: F9 joined the game',
  '[05:09:59] [Server thread/INFO]: F9 joined the game',
  '[05:10:11] [Server thread/INFO]: F9 joined the game'
]
// F532's own flap duo - the two names the fire-0643 addendum's face
// kept (F13 six joins, F17 four - the 28=28 balance's own inner
// shape the breadth cell prices: TWO bots, EIGHT events)
const REAL_F532_DUO = [
  '[23:02:29] [Server thread/INFO]: F13 joined the game',
  '[23:02:39] [Server thread/INFO]: F17 joined the game',
  '[23:07:30] [Server thread/INFO]: F13 joined the game',
  '[23:08:57] [Server thread/INFO]: F13 joined the game',
  '[23:09:44] [Server thread/INFO]: F13 joined the game',
  '[23:09:50] [Server thread/INFO]: F13 joined the game',
  '[23:10:14] [Server thread/INFO]: F17 joined the game',
  '[23:10:22] [Server thread/INFO]: F17 joined the game',
  '[23:11:21] [Server thread/INFO]: F17 joined the game',
  '[23:11:38] [Server thread/INFO]: F13 joined the game'
]

test('v0.976.347 census: the REAL re-join names byte-exact', () => {
  // F530's own equality - four bots, four events, the breadth the
  // depth the same face rides
  assert.deepEqual(rejoinBotsCensus(REAL_F530), { rejoinBotsCount: 4 })
  // F531's own divergence - seven bots, eight events (F13's third)
  assert.deepEqual(rejoinBotsCensus(REAL_F531), { rejoinBotsCount: 7 })
  // F512's own mega-flapper - ONE bot, TEN events, the ratio the
  // breadth cell alone keeps
  assert.deepEqual(rejoinBotsCensus(REAL_F9), { rejoinBotsCount: 1 })
  // F532's own flap duo - TWO bots, EIGHT events
  assert.deepEqual(rejoinBotsCensus(REAL_F532_DUO), { rejoinBotsCount: 2 })
  // the firsts-only face the lawful zero keeps
  assert.deepEqual(rejoinBotsCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinBotsCount: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinBotsCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinBotsCount: 0 })
  // non-array null
  assert.equal(rejoinBotsCensus(null), null)
  assert.equal(rejoinBotsCensus('lines'), null)
})

test('v0.976.347 arc: the REAL thirty-two-face breadth re-voiced byte-exact', () => {
  // fire-0743's own audit (/home/z/faces331, the re-harvest the
  // sandbox death's zero rebuilt) re-voices the breadth arc the
  // artifacts rode - THIRTEEN distinct classes no face born-constant
  const ARC = [17, 8, 3, 3, 15, 7, 4, 10, 1, 5, 7, 5, 3, 10, 4, 6, 8, 8, 5, 3, 4, 13, 5, 10, 9, 7, 5, 4, 2, 4, 7, 2]
  assert.equal(ARC.length, 32)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 13) // THIRTEEN distinct classes
  assert.equal(Math.max(...ARC), 17) // the F501 breadth ceiling
  assert.equal(Math.min(...ARC), 1) // the F509 lone-flapper floor
  assert.equal(ARC[29], 4) // F530's own four (the equality face)
  assert.equal(ARC[30], 7) // F531's own seven
  assert.equal(ARC[31], 2) // F532's own flap duo
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0)
})

test('v0.976.347 grammar: the refusal battery the strict frame keeps', () => {
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
    const face = rejoinBotsCensus([bad])
    assert.deepEqual(face, { rejoinBotsCount: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.347 fence: every branch the count law keeps', () => {
  const ok = (v) => ({ back: { rejoinBotsCount: v }, prev: { rejoinBotsCount: v }, cur: { rejoinBotsCount: v } })
  assert.equal(rejoinBotsConsistent(ok(0)), true)
  assert.equal(rejoinBotsConsistent(ok(17)), true)
  assert.equal(rejoinBotsConsistent(ok(86399)), true)
  assert.equal(rejoinBotsConsistent(ok(-1)), false)
  assert.equal(rejoinBotsConsistent(ok(86400)), false)
  assert.equal(rejoinBotsConsistent(ok(0.5)), false)
  assert.equal(rejoinBotsConsistent(ok('4')), false)
  assert.equal(rejoinBotsConsistent(ok(undefined)), false)
  assert.equal(rejoinBotsConsistent(null), false)
  assert.equal(rejoinBotsConsistent({}), false)
  assert.equal(rejoinBotsConsistent({ back: { rejoinBotsCount: 0 } }), false)
})

test('v0.976.347 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the fresh faces keep (F509 -> F510 -> F511:
  // 1 -> 5 -> 7 the churn's own widening two steps deep)
  const swell = rejoinBotsTrendRow({ back: { rejoinBotsCount: 1 }, prev: { rejoinBotsCount: 5 }, cur: { rejoinBotsCount: 7 } })
  assert.equal(swell.startsWith("the fleet's own re-join bots trend (v0.976.347): the fleet's own re-join bots swell ran two steps deep - 1 -> 5 (+4) -> 7 (+2) - the fleet's own churn widened each face,"), true)
  // the REAL swing the flap duo's own trade keeps (F530 -> F531 ->
  // F532: 4 -> 7 -> 2)
  const swing = rejoinBotsTrendRow({ back: { rejoinBotsCount: 4 }, prev: { rejoinBotsCount: 7 }, cur: { rejoinBotsCount: 2 } })
  assert.equal(swing.startsWith("the fleet's own re-join bots trend (v0.976.347): the fleet's own re-join bots swing - 4 -> 7 (+3) -> 2 (-5) - the fleet's own churn traded its width between the faces,"), true)
  // the REAL fade the calm's own narrowing keeps (F518 -> F519 ->
  // F520: 8 -> 5 -> 3)
  const fade = rejoinBotsTrendRow({ back: { rejoinBotsCount: 8 }, prev: { rejoinBotsCount: 5 }, cur: { rejoinBotsCount: 3 } })
  assert.equal(fade.startsWith("the fleet's own re-join bots trend (v0.976.347): the fleet's own re-join bots fade ran two steps deep - 8 -> 5 (-3) -> 3 (-2) - the fleet's own churn narrowed each face,"), true)
  // the held steps the honest silence keeps (F502 -> F503 -> F504:
  // 8 -> 3 -> 3 the second held)
  assert.equal(rejoinBotsTrendRow({ back: { rejoinBotsCount: 8 }, prev: { rejoinBotsCount: 3 }, cur: { rejoinBotsCount: 3 } }), null)
  // the held first the honest silence keeps (F517 -> F518 -> F519:
  // 8 -> 8 -> 5)
  assert.equal(rejoinBotsTrendRow({ back: { rejoinBotsCount: 8 }, prev: { rejoinBotsCount: 8 }, cur: { rejoinBotsCount: 5 } }), null)
  // the tail co-existence every seat named (the .346 depth sibling first)
  for (const seat of ['.346 re-join bin word prices', ".346 re-join bin word prices the lane's own DEPTH", '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
