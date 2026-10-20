import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fleetCloseClockCensus, fleetCloseClockConsistent, fleetCloseClockTrendRow } from '../../src/lib/fleetcloseclock.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own loss lane voiced; the REAL twenty-one-face closing
// clock arc the artifacts hold - the lane's own last print's clock
// per face, seconds since midnight: F501 75321, F502 78952, F503
// 82284, F504 84537, F505 20, F506 4257, F507 7140, F508 8913, F509
// 11718, F510 14463, F511 16495, F512 18904, F513 22723, F514
// 26241, F515 28054, F516 31146, F517 33830, F518 36919, F519
// 39120, F520 42849, F521 49548; the lane multi-prints per face -
// the churn rides, the LAST print the census keeps)

const REAL = {
  f501: ['[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected'],
  f506: ['[01:10:57] [Server thread/INFO]: F8 lost connection: Disconnected'],
  // F515's own face - the class-union proof: the terminal burst rode
  // Timed out 07:47:34 while the Disconnected class's last print
  // came earlier 07:46:18 - the lane's own last breath the census
  // keeps
  f515: ['[07:46:18] [Server thread/INFO]: F13 lost connection: Disconnected',
    '[07:47:34] [Server thread/INFO]: F19 lost connection: Timed out'],
  f520: ['[11:54:09] [Server thread/INFO]: F17 lost connection: Disconnected'],
  f521: ['[13:45:48] [Server thread/INFO]: F18 lost connection: Disconnected']
}

test('v0.976.333 census: the REAL lines byte-exact and the final loss prices', () => {
  // F501's own face - the fleet's own closing second
  assert.deepEqual(fleetCloseClockCensus(REAL.f501), { closeClockSec: 75321 })
  // F506's own face - the leading-zero-hour face the clock grammar keeps
  assert.deepEqual(fleetCloseClockCensus(REAL.f506), { closeClockSec: 4257 })
  // F515's own face - the class-union face (the Timed out skin the
  // lane's own last breath rode)
  assert.deepEqual(fleetCloseClockCensus(REAL.f515), { closeClockSec: 28054 })
  // the fresh extension faces - the fire-2230 harvest's own new faces
  assert.deepEqual(fleetCloseClockCensus(REAL.f520), { closeClockSec: 42849 })
  assert.deepEqual(fleetCloseClockCensus(REAL.f521), { closeClockSec: 49548 })
  // the LAST-PRINT-WINS law - the churn face the terminal burst
  // prices (F501's own churn: YardSurvey dropped 20:40:34, F1
  // dropped 20:45:17, the terminal burst 20:55:21)
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
  assert.deepEqual(fleetCloseClockCensus(churn), { closeClockSec: 75321 })
  // the sibling lanes never ride - the leave echo and the boot
  // conversation's own lines the .310/.311/.314/.330/.325 words
  // keep, this word silent on
  const siblings = [
    '[13:45:48] [Server thread/INFO]: F18 left the game',
    '[13:45:48] [Server thread/INFO]: F18 joined the game',
    '[13:45:46] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)',
    '[13:45:46] [Server thread/INFO]: Done (2.800s)! For help, type "help"',
    '[13:45:46] [Server thread/INFO]: Set the world spawn point to -125, 69, 403 [0.0, 0.0] in minecraft:overworld',
    '[13:45:45] [Server thread/INFO]: Starting minecraft server version 26.2'
  ]
  assert.deepEqual(fleetCloseClockCensus(siblings), { closeClockSec: 0 })
})

test('v0.976.333 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(fleetCloseClockCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { closeClockSec: 0 })
  assert.equal(fleetCloseClockCensus(null), null)
  assert.equal(fleetCloseClockCensus(undefined), null)
  assert.equal(fleetCloseClockCensus(42), null)
  assert.deepEqual(fleetCloseClockCensus([42, null, ...REAL.f501]), { closeClockSec: 75321 })
})

test('v0.976.333 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(fleetCloseClockCensus([s]), { closeClockSec: 0 })
  // the bare body - the missing head the INFO frame keeps
  refuse('F2 lost connection: Disconnected')
  // the WARN frame - a different lane the server keeps
  refuse('[20:55:21] [Server thread/WARN]: F2 lost connection: Disconnected')
  // the ServerMain frame - the boot thread the .292 lane keeps
  refuse('[20:55:21] [ServerMain/INFO]: F2 lost connection: Disconnected')
  // the pretty spacing - the doubled space the emitter never prints
  refuse('[20:55:21] [Server thread/INFO]: F2  lost connection: Disconnected')
  // the missing clock
  refuse('[Server thread/INFO]: F2 lost connection: Disconnected')
  // the 1-digit hour clock
  refuse('[9:55:21] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the overflow second clock
  refuse('[20:55:60] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the dash-separator clock
  refuse('[20-55-21] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the plural body
  refuse('[20:55:21] [Server thread/INFO]: F2 lost connections: Disconnected')
  // the altered verb
  refuse('[20:55:21] [Server thread/INFO]: F2 lost the connection: Disconnected')
  // the missing reason
  refuse('[20:55:21] [Server thread/INFO]: F2 lost connection')
  // the other reason - the class the faces never carried
  refuse('[20:55:21] [Server thread/INFO]: F2 lost connection: Kicked')
  // the lowercase reason - the class skin the strict union refuses
  refuse('[20:55:21] [Server thread/INFO]: F2 lost connection: disconnected')
  // the leading whitespace
  refuse(' [20:55:21] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the trailing junk
  refuse('[20:55:21] [Server thread/INFO]: F2 lost connection: Disconnected extra')
  // the CR tail
  refuse('[20:55:21] [Server thread/INFO]: F2 lost connection: Disconnected\r')
  // the trailing period
  refuse('[20:55:21] [Server thread/INFO]: F2 lost connection: Disconnected.')
  // the leave sibling - the pair's own second line the burst-identity
  // law keeps out of this seat
  refuse('[20:55:21] [Server thread/INFO]: F2 left the game')
  // the truncated body
  refuse('[20:55:21] [Server thread/INFO]: F2 lost')
})

test('v0.976.333 fence: every branch keeps', () => {
  const ok = (b, p, c) => fleetCloseClockConsistent({ back: { closeClockSec: b }, prev: { closeClockSec: p }, cur: { closeClockSec: c } })
  assert.equal(ok(0, 100, 86399), true)
  assert.equal(ok(75321, 78952, 82284), true)
  assert.equal(ok(0, 0, 0), true)
  assert.equal(ok(86399.5, 100, 100), false)
  assert.equal(ok(-1, 100, 100), false)
  assert.equal(ok(86400, 100, 100), false)
  assert.equal(ok('x', 100, 100), false)
  assert.equal(fleetCloseClockConsistent({ back: { closeClockSec: 1 }, prev: { closeClockSec: 2 } }), false)
  assert.equal(fleetCloseClockConsistent(null), false)
  assert.equal(fleetCloseClockConsistent(42), false)
})

test('v0.976.333 trend: the REAL twenty-one-face arc re-voiced byte-exact', () => {
  // the REAL closing arc the artifacts hold (F501-F521, the lane's
  // own last print's clock per face, seconds since midnight)
  const ARC = [75321, 78952, 82284, 84537, 20, 4257, 7140, 8913, 11718, 14463, 16495, 18904, 22723, 26241, 28054, 31146, 33830, 36919, 39120, 42849, 49548]
  const WINDOWS = [
    ['75321 -> 78952 (+3631) -> 82284 (+3332)', 'swell'],
    ['78952 -> 82284 (+3332) -> 84537 (+2253)', 'swell'],
    ['82284 -> 84537 (+2253) -> 20 (-84517)', 'swing'],
    ['84537 -> 20 (-84517) -> 4257 (+4237)', 'swing'],
    ['20 -> 4257 (+4237) -> 7140 (+2883)', 'swell'],
    ['4257 -> 7140 (+2883) -> 8913 (+1773)', 'swell'],
    ['7140 -> 8913 (+1773) -> 11718 (+2805)', 'swell'],
    ['8913 -> 11718 (+2805) -> 14463 (+2745)', 'swell'],
    ['11718 -> 14463 (+2745) -> 16495 (+2032)', 'swell'],
    ['14463 -> 16495 (+2032) -> 18904 (+2409)', 'swell'],
    ['16495 -> 18904 (+2409) -> 22723 (+3819)', 'swell'],
    ['18904 -> 22723 (+3819) -> 26241 (+3518)', 'swell'],
    ['22723 -> 26241 (+3518) -> 28054 (+1813)', 'swell'],
    ['26241 -> 28054 (+1813) -> 31146 (+3092)', 'swell'],
    ['28054 -> 31146 (+3092) -> 33830 (+2684)', 'swell'],
    ['31146 -> 33830 (+2684) -> 36919 (+3089)', 'swell'],
    ['33830 -> 36919 (+3089) -> 39120 (+2201)', 'swell'],
    ['36919 -> 39120 (+2201) -> 42849 (+3729)', 'swell'],
    ['39120 -> 42849 (+3729) -> 49548 (+6699)', 'swell']
  ]
  let speaks = 0
  for (let i = 0; i + 2 < ARC.length; i++) {
    const row = fleetCloseClockTrendRow({ back: { closeClockSec: ARC[i] }, prev: { closeClockSec: ARC[i + 1] }, cur: { closeClockSec: ARC[i + 2] } })
    assert.notEqual(row, null, `window ${i + 1} held - the arc never holds`)
    assert.ok(row.includes(WINDOWS[i][0]), `window ${i + 1} arc byte-exact: ${row}`)
    assert.ok(row.includes(WINDOWS[i][1]), `window ${i + 1} the ${WINDOWS[i][1]} shape`)
    speaks++
  }
  assert.equal(speaks, 19, 'NINETEEN REAL WINDOWS')
  // the held law - a held step the honest silence
  assert.equal(fleetCloseClockTrendRow({ back: { closeClockSec: 100 }, prev: { closeClockSec: 100 }, cur: { closeClockSec: 200 } }), null)
  // the three-face zero - the lawful silence
  assert.equal(fleetCloseClockTrendRow({ back: { closeClockSec: 0 }, prev: { closeClockSec: 0 }, cur: { closeClockSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = fleetCloseClockTrendRow({ back: { closeClockSec: 75321 }, prev: { closeClockSec: 78952 }, cur: { closeClockSec: 82284 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.332 opening clock word'), 'the opening clock seat named')
  assert.ok(tail.includes('.310 disconnect word'), 'the Disconnected class count seat named')
  assert.ok(tail.includes('.311 timed out word'), 'the Timed out class count seat named')
  assert.ok(tail.includes('left the game'), 'the leave sibling named')
  assert.ok(tail.includes('Stopping server'), 'the graceful shutdown silence named')
  assert.ok(tail.includes('.322 login dusk word'), 'the last-login seat named')
  assert.ok(tail.includes('v0.976.333'), 'the version rides')
})
