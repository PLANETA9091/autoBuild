import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fleetLossDawnCensus, fleetLossDawnConsistent, fleetLossDawnTrendRow } from '../../src/lib/fleetlossdawn.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own loss lane voiced; the REAL twenty-one-face loss dawn
// arc the artifacts hold - the lane's own first print's clock per
// face, seconds since midnight: F501 74434, F502 78055, F503 81349,
// F504 83716, F505 85459, F506 3465, F507 6276, F508 8083, F509
// 10951, F510 13662, F511 15535, F512 18063, F513 21774, F514
// 25288, F515 27497, F516 30185, F517 33130, F518 36222, F519
// 38159, F520 42165, F521 48774; the first loss print is
// YardSurvey's own drop every face the audit byte-agrees - the
// churn rides, the FIRST print the census keeps)

const REAL = {
  f501: ['[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  f505: ['[23:44:19] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  f506: ['[00:57:45] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  f520: ['[11:42:45] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  f521: ['[13:32:54] [Server thread/INFO]: YardSurvey lost connection: Disconnected']
}

test('v0.976.334 census: the REAL lines byte-exact and the first loss prices', () => {
  // F501's own face - the fleet's own loss dawn (the churn law's own
  // proof face: the first breath rode 20:40:34, the dusk closed
  // 20:55:21 - the .333 word's own proof face the mirror keeps)
  assert.deepEqual(fleetLossDawnCensus(REAL.f501), { lossDawnSec: 74434 })
  // F505's own face - the WRAP face's own dawn (the day's own last
  // hour the first loss rode, the dusk 00:00:20 the next day's
  // first seconds - the .333 word's own wrap face the mirror keeps)
  assert.deepEqual(fleetLossDawnCensus(REAL.f505), { lossDawnSec: 85459 })
  // F506's own face - the leading-zero-hour face the clock grammar keeps
  assert.deepEqual(fleetLossDawnCensus(REAL.f506), { lossDawnSec: 3465 })
  // the fresh extension faces - the fire-2330 harvest's own faces
  assert.deepEqual(fleetLossDawnCensus(REAL.f520), { lossDawnSec: 42165 })
  assert.deepEqual(fleetLossDawnCensus(REAL.f521), { lossDawnSec: 48774 })
  // the FIRST-PRINT-WINS law - the churn face the dawn prices (the
  // .333 word's own LAST-PRINT-WINS churn face the mirror keeps:
  // the same three drops, the FIRST the dawn keeps, the LAST the
  // dusk priced)
  const churn = [
    '[20:40:10] [Server thread/INFO]: Done (4.601s)! For help, type "help"',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:34] [Server thread/INFO]: YardSurvey left the game',
    '[20:45:17] [Server thread/INFO]: F1 lost connection: Disconnected',
    '[20:45:17] [Server thread/INFO]: F1 left the game',
    '[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected',
    '[20:55:21] [Server thread/INFO]: F6 left the game',
    '[926.668s][info][gc] GC(72) Pause Young (Normal) (G1 Evacuation Pause) 959M->387M(1024M) 51.769ms'
  ]
  assert.deepEqual(fleetLossDawnCensus(churn), { lossDawnSec: 74434 })
  // the class cell rides shape only - the two class skins both
  // lawful (the REAL faces' firsts rode the Disconnected skin 21/21,
  // the Timed out skin the lane's own union keeps lawful)
  assert.deepEqual(fleetLossDawnCensus(['[07:38:17] [Server thread/INFO]: F2 lost connection: Timed out']), { lossDawnSec: 27497 })
  // the sibling lanes never ride - the leave echo and the boot
  // conversation's own lines the .310/.311/.314/.330/.325 words
  // keep, this word silent on
  const siblings = [
    '[13:32:54] [Server thread/INFO]: YardSurvey left the game',
    '[13:32:54] [Server thread/INFO]: YardSurvey joined the game',
    '[13:32:52] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)',
    '[13:32:51] [Server thread/INFO]: Done (2.800s)! For help, type "help"',
    '[13:32:51] [Server thread/INFO]: Set the world spawn point to -125, 69, 403 [0.0, 0.0] in minecraft:overworld',
    '[13:32:50] [Server thread/INFO]: Starting minecraft server version 26.2'
  ]
  assert.deepEqual(fleetLossDawnCensus(siblings), { lossDawnSec: 0 })
})

test('v0.976.334 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(fleetLossDawnCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { lossDawnSec: 0 })
  assert.equal(fleetLossDawnCensus(null), null)
  assert.equal(fleetLossDawnCensus(undefined), null)
  assert.equal(fleetLossDawnCensus(42), null)
  assert.deepEqual(fleetLossDawnCensus([42, null, ...REAL.f501]), { lossDawnSec: 74434 })
})

test('v0.976.334 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(fleetLossDawnCensus([s]), { lossDawnSec: 0 })
  // the bare body - the missing head the INFO frame keeps
  refuse('F2 lost connection: Disconnected')
  // the WARN frame - a different lane the server keeps
  refuse('[20:40:34] [Server thread/WARN]: F2 lost connection: Disconnected')
  // the ServerMain frame - the boot thread the .292 lane keeps
  refuse('[20:40:34] [ServerMain/INFO]: F2 lost connection: Disconnected')
  // the pretty spacing - the doubled space the emitter never prints
  refuse('[20:40:34] [Server thread/INFO]: F2  lost connection: Disconnected')
  // the missing clock
  refuse('[Server thread/INFO]: F2 lost connection: Disconnected')
  // the 1-digit hour clock
  refuse('[9:40:34] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the overflow second clock
  refuse('[20:40:60] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the dash-separator clock
  refuse('[20-40-34] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the plural body
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connections: Disconnected')
  // the altered verb
  refuse('[20:40:34] [Server thread/INFO]: F2 lost the connection: Disconnected')
  // the missing reason
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection')
  // the other reason - the class the faces never carried
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: Kicked')
  // the lowercase reason - the class skin the strict union refuses
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: disconnected')
  // the leading whitespace
  refuse(' [20:40:34] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the trailing junk
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: Disconnected extra')
  // the CR tail
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: Disconnected\r')
  // the trailing period
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: Disconnected.')
  // the leave sibling - the pair's own second line the burst-identity
  // law keeps out of this seat
  refuse('[20:40:34] [Server thread/INFO]: F2 left the game')
  // the truncated body
  refuse('[20:40:34] [Server thread/INFO]: F2 lost')
})

test('v0.976.334 fence: every branch keeps', () => {
  const ok = (b, p, c) => fleetLossDawnConsistent({ back: { lossDawnSec: b }, prev: { lossDawnSec: p }, cur: { lossDawnSec: c } })
  assert.equal(ok(0, 100, 86399), true)
  assert.equal(ok(74434, 78055, 81349), true)
  assert.equal(ok(0, 0, 0), true)
  assert.equal(ok(86399.5, 100, 100), false)
  assert.equal(ok(-1, 100, 100), false)
  assert.equal(ok(86400, 100, 100), false)
  assert.equal(ok('x', 100, 100), false)
  assert.equal(fleetLossDawnConsistent({ back: { lossDawnSec: 1 }, prev: { lossDawnSec: 2 } }), false)
  assert.equal(fleetLossDawnConsistent(null), false)
  assert.equal(fleetLossDawnConsistent(42), false)
})

test('v0.976.334 trend: the REAL twenty-one-face arc re-voiced byte-exact', () => {
  // the REAL loss dawn arc the artifacts hold (F501-F521, the lane's
  // own first print's clock per face, seconds since midnight)
  const ARC = [74434, 78055, 81349, 83716, 85459, 3465, 6276, 8083, 10951, 13662, 15535, 18063, 21774, 25288, 27497, 30185, 33130, 36222, 38159, 42165, 48774]
  const WINDOWS = [
    ['74434 -> 78055 (+3621) -> 81349 (+3294)', 'swell'],
    ['78055 -> 81349 (+3294) -> 83716 (+2367)', 'swell'],
    ['81349 -> 83716 (+2367) -> 85459 (+1743)', 'swell'],
    ['83716 -> 85459 (+1743) -> 3465 (-81994)', 'swing'],
    ['85459 -> 3465 (-81994) -> 6276 (+2811)', 'swing'],
    ['3465 -> 6276 (+2811) -> 8083 (+1807)', 'swell'],
    ['6276 -> 8083 (+1807) -> 10951 (+2868)', 'swell'],
    ['8083 -> 10951 (+2868) -> 13662 (+2711)', 'swell'],
    ['10951 -> 13662 (+2711) -> 15535 (+1873)', 'swell'],
    ['13662 -> 15535 (+1873) -> 18063 (+2528)', 'swell'],
    ['15535 -> 18063 (+2528) -> 21774 (+3711)', 'swell'],
    ['18063 -> 21774 (+3711) -> 25288 (+3514)', 'swell'],
    ['21774 -> 25288 (+3514) -> 27497 (+2209)', 'swell'],
    ['25288 -> 27497 (+2209) -> 30185 (+2688)', 'swell'],
    ['27497 -> 30185 (+2688) -> 33130 (+2945)', 'swell'],
    ['30185 -> 33130 (+2945) -> 36222 (+3092)', 'swell'],
    ['33130 -> 36222 (+3092) -> 38159 (+1937)', 'swell'],
    ['36222 -> 38159 (+1937) -> 42165 (+4006)', 'swell'],
    ['38159 -> 42165 (+4006) -> 48774 (+6609)', 'swell']
  ]
  let speaks = 0
  for (let i = 0; i + 2 < ARC.length; i++) {
    const row = fleetLossDawnTrendRow({ back: { lossDawnSec: ARC[i] }, prev: { lossDawnSec: ARC[i + 1] }, cur: { lossDawnSec: ARC[i + 2] } })
    assert.notEqual(row, null, `window ${i + 1} held - the arc never holds`)
    assert.ok(row.includes(WINDOWS[i][0]), `window ${i + 1} arc byte-exact: ${row}`)
    assert.ok(row.includes(WINDOWS[i][1]), `window ${i + 1} the ${WINDOWS[i][1]} shape`)
    speaks++
  }
  assert.equal(speaks, 19, 'NINETEEN REAL WINDOWS')
  // the held law - a held step the honest silence
  assert.equal(fleetLossDawnTrendRow({ back: { lossDawnSec: 100 }, prev: { lossDawnSec: 100 }, cur: { lossDawnSec: 200 } }), null)
  // the three-face zero - the lawful silence
  assert.equal(fleetLossDawnTrendRow({ back: { lossDawnSec: 0 }, prev: { lossDawnSec: 0 }, cur: { lossDawnSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = fleetLossDawnTrendRow({ back: { lossDawnSec: 74434 }, prev: { lossDawnSec: 78055 }, cur: { lossDawnSec: 81349 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.333 closing clock word'), 'the mirror dusk seat named')
  assert.ok(tail.includes('FOLLOWS-OPENING'), 'the ordering gate named')
  assert.ok(tail.includes('.310 disconnect word'), 'the Disconnected class count seat named')
  assert.ok(tail.includes('.311 timed out word'), 'the Timed out class count seat named')
  assert.ok(tail.includes('left the game'), 'the leave sibling named')
  assert.ok(tail.includes('Stopping server'), 'the graceful shutdown silence named')
  assert.ok(tail.includes('.322 login dusk word'), 'the last-login seat named')
  assert.ok(tail.includes('v0.976.334'), 'the version rides')
})
