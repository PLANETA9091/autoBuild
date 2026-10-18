// (v0.976.243) THE FINAL BODY'S OWN SURVIVOR MASS - the word's own
// pins. The census (the body speaks once, the last print wins), the
// fence (every face both proven integers, the zero lawful), the row
// (the alive mass's own two-step arc - the fade the deaths' own sink,
// the swell the fleet's own heal, the swing the trade; a held step the
// honest null, the three-face zero the whole roster dead - the fate
// the facefate seat names). The near-miss lanes never ride: the report
// frame, the partial kill row, the hard-kill death row, the truncated
// body, the reordered counters. The emitter grammar pin: the fleet19
// template must stand (the .237 word's own law).
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { finalBodyCensus, finalBodyCensusConsistent, finalBodyCensusRow } from '../../src/lib/finalbodycensus.mjs'

const B = (bots, alive) => ({ bots, alive })
const F470 = 'bots=19 spawned=19 reconnects=24 kicks=15 tools=19 recovered=2 reboots=0 upgraded=15 swords=17 alive=19 climbs=26 banked=627 smelted=4 planted=12 torched=7 fights=20 kills=3 shelters=0 rescues=28 pounces=3 pounceLanded=0 airGlitches=0 claims=11 claimedHolds=0 wet=3 wt=3'

test('census: the F470 face byte-exact - the last print wins', () => {
  const lines = [
    'junk line',
    7,
    null,
    '',
    '================ FLEET RESULT (normal end - deadline 600s reached) ================',
    F470
  ]
  assert.deepEqual(finalBodyCensus(lines), B(19, 19))
  // the body speaks once - a later print outvotes the closer
  const echoed = [
    'bots=20 spawned=20 reconnects=1 kicks=0 tools=20 recovered=0 reboots=0 upgraded=2 swords=1 alive=17 climbs=3 banked=10 smelted=0 planted=0 torched=0 fights=0 kills=0 shelters=0 rescues=0 pounces=0 pounceLanded=0 airGlitches=0 claims=0 claimedHolds=0 wet=0 wt=0',
    F470
  ]
  assert.deepEqual(finalBodyCensus(echoed), B(19, 19))
})

test('census: the lawful zero - a face whose lines hold no body print', () => {
  assert.deepEqual(finalBodyCensus([
    'F12 bank trip: shed 12u',
    'no-path ledger: 2 live verdict(s) at end phase',
    'F9 final climb: wet shift tunnel: 2 blocks in 3s'
  ]), B(0, 0))
})

test('census: junk-safe - the non-array prices null, junk types skipped', () => {
  assert.equal(finalBodyCensus(null), null)
  assert.equal(finalBodyCensus(undefined), null)
  assert.equal(finalBodyCensus(F470), null)
  assert.equal(finalBodyCensus(42), null)
  assert.deepEqual(finalBodyCensus([null, 9, 'no body here']), B(0, 0))
})

test('census: the near-miss lanes never ride', () => {
  const rejects = [
    // the report frame - the facefate seat
    '================ FLEET RESULT (normal end - deadline 600s reached) ================',
    // the partial kill row - the same fate seat's own lane
    '[fleet] partial: alive=19 mined=1204 banked=954 smelted=300 climbs=8',
    // the hard-kill report's own death row
    '[fleet] hard-kill report failed: the heap cliff owns the teardown',
    // the truncated body cut before the alive cell
    'bots=19 spawned=19 reconnects=24 kicks=15 tools=19 recovered=2 reboots=0 upgraded=15 swords=17',
    // the reordered counters
    'alive=19 bots=19 spawned=19 reconnects=24 kicks=15 tools=19 recovered=2 reboots=0 upgraded=15 swords=17 climbs=26',
    // the case flip, the alien count, the missing climb anchor
    'Bots=19 spawned=19 reconnects=24 kicks=15 tools=19 recovered=2 reboots=0 upgraded=15 swords=17 alive=19 climbs=26',
    'bots=19.5 spawned=19 reconnects=24 kicks=15 tools=19 recovered=2 reboots=0 upgraded=15 swords=17 alive=19 climbs=26',
    'bots=19 spawned=19 reconnects=24 kicks=15 tools=19 recovered=2 reboots=0 upgraded=15 swords=17 alive=19'
  ]
  assert.deepEqual(finalBodyCensus(rejects), B(0, 0))
})

test('fence: every branch', () => {
  assert.equal(finalBodyCensusConsistent({ back: B(20, 19), prev: B(20, 17), cur: B(20, 18) }), true)
  // the zero lawful - the body never spoke
  assert.equal(finalBodyCensusConsistent({ back: B(0, 0), prev: B(0, 0), cur: B(0, 0) }), true)
  // extra keys never rejected
  assert.equal(finalBodyCensusConsistent({ back: { ...B(19, 19), top: 'x' }, prev: B(0, 0), cur: B(0, 0) }), true)
  // a missing cell rejects the face
  assert.equal(finalBodyCensusConsistent({ back: { bots: 19 }, prev: B(0, 0), cur: B(0, 0) }), false)
  // the junk folds reject whole
  assert.equal(finalBodyCensusConsistent(null), false)
  assert.equal(finalBodyCensusConsistent(undefined), false)
  assert.equal(finalBodyCensusConsistent([B(0, 0), B(0, 0), B(0, 0)]), false)
  assert.equal(finalBodyCensusConsistent('fold'), false)
  assert.equal(finalBodyCensusConsistent({ back: B(-1, 0), prev: B(0, 0), cur: B(0, 0) }), false)
  assert.equal(finalBodyCensusConsistent({ back: B(1.5, 0), prev: B(0, 0), cur: B(0, 0) }), false)
  assert.equal(finalBodyCensusConsistent({ back: B(0, 0), prev: null, cur: B(0, 0) }), false)
})

const TAIL = "(the report frame the facefate seat names, the partial row the same fate seat prices, the body's other counters their own seats price - the climb lane and the bank words and the counter gap and the reconnect trend the trend seats own - the survivor mass row alone, co-existence by seat never by duplication)"

test('row: the fade byte-exact - the survivor mass two steps down', () => {
  const e = { back: B(20, 19), prev: B(20, 17), cur: B(20, 15) }
  assert.equal(finalBodyCensusRow(e),
    'the final body survivor trend (v0.976.243): the vitality\'s own fade ran two steps deep - 19 -> 17 (-2) -> 15 (-2) - the survivor mass\'s own fade, the cur face\'s own roster bots 20 ' + TAIL)
})

test('row: the swell byte-exact - the survivor mass two steps up', () => {
  const e = { back: B(20, 16), prev: B(20, 18), cur: B(20, 19) }
  assert.equal(finalBodyCensusRow(e),
    'the final body survivor trend (v0.976.243): the vitality\'s own swell ran two steps deep - 16 -> 18 (+2) -> 19 (+1) - the survivor mass\'s own swell, the cur face\'s own roster bots 20 ' + TAIL)
})

test('row: the swing byte-exact + the held steps the honest null', () => {
  const e = { back: B(20, 19), prev: B(20, 17), cur: B(20, 19) }
  assert.equal(finalBodyCensusRow(e),
    'the final body survivor trend (v0.976.243): the survivor mass\'s own swing - 19 -> 17 (-2) -> 19 (+2) - the fade and the swell traded seats between the faces, the cur face\'s own roster bots 20 ' + TAIL)
  // a held step prices no direction
  assert.equal(finalBodyCensusRow({ back: B(20, 19), prev: B(20, 19), cur: B(20, 17) }), null)
  assert.equal(finalBodyCensusRow({ back: B(20, 17), prev: B(20, 19), cur: B(20, 19) }), null)
  // the three-face zero - the whole roster dead, no direction the arc prices
  assert.equal(finalBodyCensusRow({ back: B(20, 0), prev: B(20, 0), cur: B(20, 0) }), null)
  // the fence fail rides null
  assert.equal(finalBodyCensusRow(null), null)
  assert.equal(finalBodyCensusRow({ back: B(0, 0), prev: B(0), cur: B(0, 0) }), null)
})

test('emitter grammar: the fleet19 template must stand', () => {
  const src = readFileSync(fileURLToPath(new URL('../../testbed/fleet19.mjs', import.meta.url)), 'utf8')
  assert.ok(src.includes('bots=${COUNT} spawned=${spawned} reconnects=${reconnects} kicks=${kicks} tools=${toolsOk} recovered=${toolsRecovered} reboots=${toolsReboot} upgraded=${toolsUpgraded} swords=${swordsCrafted} alive=${aliveCount()} climbs='), 'the body emitter moved - the word\'s grammar must follow')
})
