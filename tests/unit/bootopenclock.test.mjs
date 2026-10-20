import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bootOpenClockCensus, bootOpenClockConsistent, bootOpenClockTrendRow } from '../../src/lib/bootopenclock.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot voiced; the REAL twenty-one-face opening clock
// arc the artifacts hold - the announcement line's clock per face,
// seconds since midnight: F501 74405, F502 78026, F503 81321, F504
// 83686, F505 85434, F506 3440, F507 6253, F508 8055, F509 10926,
// F510 13632, F511 15510, F512 18037, F513 21746, F514 25256, F515
// 27466, F516 30156, F517 33101, F518 36196, F519 38134, F520 42142,
// F521 48750; one print per face every face - the ONE-PRINT law the
// census keeps)

const FACES = {
  f501: ['[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f502: ['[21:40:26] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f503: ['[22:35:21] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f504: ['[23:14:46] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f505: ['[23:43:54] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f506: ['[00:57:20] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f507: ['[01:44:13] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f508: ['[02:14:15] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f509: ['[03:02:06] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f510: ['[03:47:12] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f511: ['[04:18:30] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f512: ['[05:00:37] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f513: ['[06:02:26] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f514: ['[07:00:56] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f515: ['[07:37:46] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f516: ['[08:22:36] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f517: ['[09:11:41] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f518: ['[10:03:16] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f519: ['[10:35:34] [Server thread/INFO]: Starting minecraft server version 26.2'],
  // the fresh extension faces - the fire-2043/fire-2133 harvest's own
  // new faces (the F520 run 39415017928 and F521 run 39429320337
  // server-console faces byte-exact, the .330/.331 full trees' own
  // first fleet faces)
  f520: ['[11:42:22] [Server thread/INFO]: Starting minecraft server version 26.2'],
  f521: ['[13:32:30] [Server thread/INFO]: Starting minecraft server version 26.2']
}

test('v0.976.332 census: the REAL lines byte-exact and the final boot prices', () => {
  // F501's own face - the boot's own opening second
  assert.deepEqual(bootOpenClockCensus(FACES.f501), { openClockSec: 74405 })
  // F506's own face - the leading-zero-hour wrap face the clock
  // grammar keeps (00:57:20)
  assert.deepEqual(bootOpenClockCensus(FACES.f506), { openClockSec: 3440 })
  // F514's own face - the slowest boot's opening second (6.687s completion)
  assert.deepEqual(bootOpenClockCensus(FACES.f514), { openClockSec: 25256 })
  // the fresh extension faces - the fire-2043/fire-2133 harvest's own new faces
  assert.deepEqual(bootOpenClockCensus(FACES.f520), { openClockSec: 42142 })
  assert.deepEqual(bootOpenClockCensus(FACES.f521), { openClockSec: 48750 })
  // the LAST-PRINT-WINS law - a re-boot face the final boot prices
  const reprinted = [...FACES.f501, '[22:00:09] [Server thread/INFO]: Starting minecraft server version 26.2']
  assert.deepEqual(bootOpenClockCensus(reprinted), { openClockSec: 79209 })
  // the sibling lanes never ride - the boot conversation's own other
  // lines the .293/.330/.331/.325 words keep, this word silent on
  const siblings = [
    '[13:32:30] [Server thread/INFO]: Selecting global world spawn...',
    '[13:32:30] [Server thread/INFO]: Loading properties',
    '[13:32:33] [Server thread/INFO]: Done (2.800s)! For help, type "help"',
    '[13:32:33] [Server thread/INFO]: Time elapsed: 2667 ms',
    '[13:32:43] [Server thread/INFO]: Set the world spawn point to -125, 69, 403 [0.0, 0.0] in minecraft:overworld',
    '[13:32:43] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)'
  ]
  assert.deepEqual(bootOpenClockCensus(siblings), { openClockSec: 0 })
})

test('v0.976.332 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(bootOpenClockCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { openClockSec: 0 })
  assert.equal(bootOpenClockCensus(null), null)
  assert.equal(bootOpenClockCensus(undefined), null)
  assert.equal(bootOpenClockCensus(42), null)
  assert.deepEqual(bootOpenClockCensus([42, null, ...FACES.f501]), { openClockSec: 74405 })
})

test('v0.976.332 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(bootOpenClockCensus([s]), { openClockSec: 0 })
  // the bot prefix - a different emitter the login lane keeps
  refuse('[21:40:26] [Server thread/INFO]: YardSurvey Starting minecraft server version 26.2')
  // the WARN frame
  refuse('[21:40:26] [Server thread/WARN]: Starting minecraft server version 26.2')
  // the ServerMain frame
  refuse('[21:40:26] [ServerMain/INFO]: Starting minecraft server version 26.2')
  // the pretty spacing
  refuse('[21:40:26] [Server thread/INFO]: Starting  minecraft server version 26.2')
  // the altered verb
  refuse('[21:40:26] [Server thread/INFO]: Started minecraft server version 26.2')
  // the missing cell
  refuse('[21:40:26] [Server thread/INFO]: Starting minecraft server version')
  // the one-part version
  refuse('[21:40:26] [Server thread/INFO]: Starting minecraft server version 26')
  // the three-part version
  refuse('[21:40:26] [Server thread/INFO]: Starting minecraft server version 26.2.1')
  // the v-prefix version
  refuse('[21:40:26] [Server thread/INFO]: Starting minecraft server version v26.2')
  // the altered noun
  refuse('[21:40:26] [Server thread/INFO]: Starting minecraft edition version 26.2')
  // the trailing period
  refuse('[21:40:26] [Server thread/INFO]: Starting minecraft server version 26.2.')
  // the lowercase body
  refuse('[21:40:26] [Server thread/INFO]: starting minecraft server version 26.2')
  // the leading whitespace
  refuse(' [21:40:26] [Server thread/INFO]: Starting minecraft server version 26.2')
  // the trailing junk
  refuse('[21:40:26] [Server thread/INFO]: Starting minecraft server version 26.2 ok')
  // the CR tail
  refuse('[21:40:26] [Server thread/INFO]: Starting minecraft server version 26.2\r')
  // the 1-digit hour clock
  refuse('[1:40:26] [Server thread/INFO]: Starting minecraft server version 26.2')
  // the overflow second clock
  refuse('[21:40:60] [Server thread/INFO]: Starting minecraft server version 26.2')
  // the dash-separator clock
  refuse('[21-40-26] [Server thread/INFO]: Starting minecraft server version 26.2')
  // the missing head
  refuse('[Server thread/INFO]: Starting minecraft server version 26.2')
})

test('v0.976.332 fence: the clock law the whole day keeps', () => {
  const ok = (n) => ({ back: { openClockSec: n }, prev: { openClockSec: n }, cur: { openClockSec: n } })
  const fail = (n) => ({ back: { openClockSec: n }, prev: { openClockSec: n }, cur: { openClockSec: n } })
  assert.equal(bootOpenClockConsistent(ok(74405)), true)
  assert.equal(bootOpenClockConsistent(ok(0)), true)
  assert.equal(bootOpenClockConsistent(ok(86399)), true)
  assert.equal(bootOpenClockConsistent(ok(48750)), true)
  assert.equal(bootOpenClockConsistent(fail(86400)), false)
  assert.equal(bootOpenClockConsistent(fail(-1)), false)
  assert.equal(bootOpenClockConsistent(fail(1.5)), false)
  assert.equal(bootOpenClockConsistent(fail(NaN)), false)
  assert.equal(bootOpenClockConsistent(null), false)
  assert.equal(bootOpenClockConsistent(undefined), false)
  assert.equal(bootOpenClockConsistent({}), false)
  assert.equal(bootOpenClockConsistent({ back: { openClockSec: 1 }, prev: { openClockSec: 2 } }), false)
})

test('v0.976.332 re-voice: the REAL twenty-one-face arc speaks NINETEEN deep zero held', () => {
  // the REAL arc the faces hold (byte-verified from the artifacts)
  const ARC = [74405, 78026, 81321, 83686, 85434, 3440, 6253, 8055, 10926, 13632,
    15510, 18037, 21746, 25256, 27466, 30156, 33101, 36196, 38134, 42142, 48750]
  // the REAL windows the arc holds (the deltas byte-exact - W4/W5 the
  // midnight wrap rides, W19 the F521 fresh face deepens)
  const WINDOWS = [
    ['74405 -> 78026 (+3621) -> 81321 (+3295)', 'swell'],
    ['78026 -> 81321 (+3295) -> 83686 (+2365)', 'swell'],
    ['81321 -> 83686 (+2365) -> 85434 (+1748)', 'swell'],
    ['83686 -> 85434 (+1748) -> 3440 (-81994)', 'swing'],
    ['85434 -> 3440 (-81994) -> 6253 (+2813)', 'swing'],
    ['3440 -> 6253 (+2813) -> 8055 (+1802)', 'swell'],
    ['6253 -> 8055 (+1802) -> 10926 (+2871)', 'swell'],
    ['8055 -> 10926 (+2871) -> 13632 (+2706)', 'swell'],
    ['10926 -> 13632 (+2706) -> 15510 (+1878)', 'swell'],
    ['13632 -> 15510 (+1878) -> 18037 (+2527)', 'swell'],
    ['15510 -> 18037 (+2527) -> 21746 (+3709)', 'swell'],
    ['18037 -> 21746 (+3709) -> 25256 (+3510)', 'swell'],
    ['21746 -> 25256 (+3510) -> 27466 (+2210)', 'swell'],
    ['25256 -> 27466 (+2210) -> 30156 (+2690)', 'swell'],
    ['27466 -> 30156 (+2690) -> 33101 (+2945)', 'swell'],
    ['30156 -> 33101 (+2945) -> 36196 (+3095)', 'swell'],
    ['33101 -> 36196 (+3095) -> 38134 (+1938)', 'swell'],
    ['36196 -> 38134 (+1938) -> 42142 (+4008)', 'swell'],
    ['38134 -> 42142 (+4008) -> 48750 (+6608)', 'swell']
  ]
  let speaks = 0
  for (let i = 0; i + 2 < ARC.length; i++) {
    const row = bootOpenClockTrendRow({ back: { openClockSec: ARC[i] }, prev: { openClockSec: ARC[i + 1] }, cur: { openClockSec: ARC[i + 2] } })
    assert.notEqual(row, null, `window ${i + 1} held - the arc never holds`)
    assert.ok(row.includes(WINDOWS[i][0]), `window ${i + 1} arc byte-exact: ${row}`)
    assert.ok(row.includes(WINDOWS[i][1]), `window ${i + 1} the ${WINDOWS[i][1]} shape`)
    speaks++
  }
  assert.equal(speaks, 19, 'NINETEEN REAL WINDOWS')
  // the held law - a held step the honest silence
  assert.equal(bootOpenClockTrendRow({ back: { openClockSec: 100 }, prev: { openClockSec: 100 }, cur: { openClockSec: 200 } }), null)
  // the three-face zero - the lawful silence
  assert.equal(bootOpenClockTrendRow({ back: { openClockSec: 0 }, prev: { openClockSec: 0 }, cur: { openClockSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = bootOpenClockTrendRow({ back: { openClockSec: 74405 }, prev: { openClockSec: 78026 }, cur: { openClockSec: 81321 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.331 selection clock word'), 'the selection clock seat named')
  assert.ok(tail.includes('.293 boot prep word'), 'the prep segment seat named')
  assert.ok(tail.includes('.330 completion clock word'), 'the completion clock seat named')
  assert.ok(tail.includes('Loading properties'), 'the opening burst siblings named')
  assert.ok(tail.includes('Preparing level'), 'the level line ride named')
  assert.ok(tail.includes('v0.976.332'), 'the version rides')
})
