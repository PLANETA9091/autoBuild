import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSelectClockCensus, spawnSelectClockConsistent, spawnSelectClockTrendRow } from '../../src/lib/spawnselectclock.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot voiced; the REAL twenty-face selection clock arc
// the artifacts hold - the selection line's clock per face, seconds
// since midnight: F501 74406, F502 78027, F503 81322, F504 83687,
// F505 85435, F506 3441, F507 6253, F508 8056, F509 10927, F510
// 13633, F511 15511, F512 18038, F513 21746, F514 25257, F515 27467,
// F516 30157, F517 33101, F518 36196, F519 38135, F520 42143; one
// print per face every face - the ONE-PRINT law the census keeps)

const FACES = {
  f501: ['[20:40:06] [Server thread/INFO]: Selecting global world spawn...'],
  f502: ['[21:40:27] [Server thread/INFO]: Selecting global world spawn...'],
  f503: ['[22:35:22] [Server thread/INFO]: Selecting global world spawn...'],
  f504: ['[23:14:47] [Server thread/INFO]: Selecting global world spawn...'],
  f505: ['[23:43:55] [Server thread/INFO]: Selecting global world spawn...'],
  f506: ['[00:57:21] [Server thread/INFO]: Selecting global world spawn...'],
  f507: ['[01:44:13] [Server thread/INFO]: Selecting global world spawn...'],
  f508: ['[02:14:16] [Server thread/INFO]: Selecting global world spawn...'],
  f509: ['[03:02:07] [Server thread/INFO]: Selecting global world spawn...'],
  f510: ['[03:47:13] [Server thread/INFO]: Selecting global world spawn...'],
  f511: ['[04:18:31] [Server thread/INFO]: Selecting global world spawn...'],
  f512: ['[05:00:38] [Server thread/INFO]: Selecting global world spawn...'],
  f513: ['[06:02:26] [Server thread/INFO]: Selecting global world spawn...'],
  f514: ['[07:00:57] [Server thread/INFO]: Selecting global world spawn...'],
  f515: ['[07:37:47] [Server thread/INFO]: Selecting global world spawn...'],
  f516: ['[08:22:37] [Server thread/INFO]: Selecting global world spawn...'],
  f517: ['[09:11:41] [Server thread/INFO]: Selecting global world spawn...'],
  // the fresh extension face - the fire-2043 harvest's own new face
  // (the F520 run 39415017928 server-console face byte-exact, the
  // .330 full tree's own first fleet face)
  f518: ['[10:03:16] [Server thread/INFO]: Selecting global world spawn...'],
  f519: ['[10:35:35] [Server thread/INFO]: Selecting global world spawn...'],
  f520: ['[11:42:23] [Server thread/INFO]: Selecting global world spawn...']
}

test('v0.976.331 census: the REAL lines byte-exact and the final boot prices', () => {
  // F501's own face - the boot's own selection second
  assert.deepEqual(spawnSelectClockCensus(FACES.f501), { selectClockSec: 74406 })
  // F506's own face - the leading-zero-hour wrap face the clock
  // grammar keeps (00:57:21)
  assert.deepEqual(spawnSelectClockCensus(FACES.f506), { selectClockSec: 3441 })
  // F514's own face - the slowest boot's selection second (6.687s completion)
  assert.deepEqual(spawnSelectClockCensus(FACES.f514), { selectClockSec: 25257 })
  // the fresh extension face - the fire-2043 harvest's own new face
  assert.deepEqual(spawnSelectClockCensus(FACES.f519), { selectClockSec: 38135 })
  assert.deepEqual(spawnSelectClockCensus(FACES.f520), { selectClockSec: 42143 })
  // the LAST-PRINT-WINS law - a re-boot face the final boot prices
  const reprinted = [...FACES.f501, '[22:00:09] [Server thread/INFO]: Selecting global world spawn...']
  assert.deepEqual(spawnSelectClockCensus(reprinted), { selectClockSec: 79209 })
  // the sibling lanes never ride - the boot conversation's own other
  // lines the .293/.330/.325 words keep, this word silent on
  const siblings = [
    '[11:42:25] [Server thread/INFO]: Done (2.786s)! For help, type "help"',
    '[11:42:25] [Server thread/INFO]: Time elapsed: 2603 ms',
    '[11:42:25] [Server thread/INFO]: Preparing spawn area: 100%',
    '[11:42:34] [Server thread/INFO]: Set the world spawn point to -137, 66, 410 [0.0, 0.0] in minecraft:overworld',
    '[11:42:33] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)'
  ]
  assert.deepEqual(spawnSelectClockCensus(siblings), { selectClockSec: 0 })
})

test('v0.976.331 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(spawnSelectClockCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { selectClockSec: 0 })
  assert.equal(spawnSelectClockCensus(null), null)
  assert.equal(spawnSelectClockCensus(undefined), null)
  assert.equal(spawnSelectClockCensus(42), null)
  assert.deepEqual(spawnSelectClockCensus([42, null, ...FACES.f501]), { selectClockSec: 74406 })
})

test('v0.976.331 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(spawnSelectClockCensus([s]), { selectClockSec: 0 })
  // the bot prefix - a different emitter the login lane keeps
  refuse('[11:42:23] [Server thread/INFO]: YardSurvey Selecting global world spawn...')
  // the WARN frame
  refuse('[11:42:23] [Server thread/WARN]: Selecting global world spawn...')
  // the ServerMain frame
  refuse('[11:42:23] [ServerMain/INFO]: Selecting global world spawn...')
  // the pretty spacing
  refuse('[11:42:23] [Server thread/INFO]: Selecting  global world spawn...')
  // the missing ellipsis
  refuse('[11:42:23] [Server thread/INFO]: Selecting global world spawn')
  // the one-dot tail
  refuse('[11:42:23] [Server thread/INFO]: Selecting global world spawn.')
  // the altered verb
  refuse('[11:42:23] [Server thread/INFO]: Selected global world spawn...')
  // the altered body
  refuse('[11:42:23] [Server thread/INFO]: Selecting the global world spawn...')
  // the point suffix
  refuse('[11:42:23] [Server thread/INFO]: Selecting global world spawn point...')
  // the plural body
  refuse('[11:42:23] [Server thread/INFO]: Selecting global world spawns...')
  // the lowercase body
  refuse('[11:42:23] [Server thread/INFO]: selecting global world spawn...')
  // the leading whitespace
  refuse(' [11:42:23] [Server thread/INFO]: Selecting global world spawn...')
  // the trailing junk
  refuse('[11:42:23] [Server thread/INFO]: Selecting global world spawn... ok')
  // the CR tail
  refuse('[11:42:23] [Server thread/INFO]: Selecting global world spawn...\r')
  // the 1-digit hour clock
  refuse('[1:42:23] [Server thread/INFO]: Selecting global world spawn...')
  // the overflow second clock
  refuse('[11:42:60] [Server thread/INFO]: Selecting global world spawn...')
  // the dash-separator clock
  refuse('[11-42-23] [Server thread/INFO]: Selecting global world spawn...')
  // the missing head
  refuse('[Server thread/INFO]: Selecting global world spawn...')
  // the truncated head
  refuse('[11:42:23] [Server thread/INFO]: Selecting global world spawn')
})

test('v0.976.331 fence: the clock law the whole day keeps', () => {
  const ok = (n) => ({ back: { selectClockSec: n }, prev: { selectClockSec: n }, cur: { selectClockSec: n } })
  const fail = (n) => ({ back: { selectClockSec: n }, prev: { selectClockSec: n }, cur: { selectClockSec: n } })
  assert.equal(spawnSelectClockConsistent(ok(74406)), true)
  assert.equal(spawnSelectClockConsistent(ok(0)), true)
  assert.equal(spawnSelectClockConsistent(ok(86399)), true)
  assert.equal(spawnSelectClockConsistent(ok(42143)), true)
  assert.equal(spawnSelectClockConsistent(fail(86400)), false)
  assert.equal(spawnSelectClockConsistent(fail(-1)), false)
  assert.equal(spawnSelectClockConsistent(fail(1.5)), false)
  assert.equal(spawnSelectClockConsistent(fail(NaN)), false)
  assert.equal(spawnSelectClockConsistent(null), false)
  assert.equal(spawnSelectClockConsistent(undefined), false)
  assert.equal(spawnSelectClockConsistent({}), false)
  assert.equal(spawnSelectClockConsistent({ back: { selectClockSec: 1 }, prev: { selectClockSec: 2 } }), false)
})

test('v0.976.331 re-voice: the REAL twenty-face arc speaks EIGHTEEN deep zero held', () => {
  // the REAL arc the faces hold (byte-verified from the artifacts)
  const ARC = [74406, 78027, 81322, 83687, 85435, 3441, 6253, 8056, 10927, 13633,
    15511, 18038, 21746, 25257, 27467, 30157, 33101, 36196, 38135, 42143]
  // the REAL windows the arc holds (the deltas byte-exact - W4/W5 the
  // midnight wrap rides, W18 the F520 fresh face deepens)
  const WINDOWS = [
    ['74406 -> 78027 (+3621) -> 81322 (+3295)', 'swell'],
    ['78027 -> 81322 (+3295) -> 83687 (+2365)', 'swell'],
    ['81322 -> 83687 (+2365) -> 85435 (+1748)', 'swell'],
    ['83687 -> 85435 (+1748) -> 3441 (-81994)', 'swing'],
    ['85435 -> 3441 (-81994) -> 6253 (+2812)', 'swing'],
    ['3441 -> 6253 (+2812) -> 8056 (+1803)', 'swell'],
    ['6253 -> 8056 (+1803) -> 10927 (+2871)', 'swell'],
    ['8056 -> 10927 (+2871) -> 13633 (+2706)', 'swell'],
    ['10927 -> 13633 (+2706) -> 15511 (+1878)', 'swell'],
    ['13633 -> 15511 (+1878) -> 18038 (+2527)', 'swell'],
    ['15511 -> 18038 (+2527) -> 21746 (+3708)', 'swell'],
    ['18038 -> 21746 (+3708) -> 25257 (+3511)', 'swell'],
    ['21746 -> 25257 (+3511) -> 27467 (+2210)', 'swell'],
    ['25257 -> 27467 (+2210) -> 30157 (+2690)', 'swell'],
    ['27467 -> 30157 (+2690) -> 33101 (+2944)', 'swell'],
    ['30157 -> 33101 (+2944) -> 36196 (+3095)', 'swell'],
    ['33101 -> 36196 (+3095) -> 38135 (+1939)', 'swell'],
    ['36196 -> 38135 (+1939) -> 42143 (+4008)', 'swell']
  ]
  let speaks = 0
  let held = 0
  for (let i = 0; i + 2 < ARC.length; i++) {
    const row = spawnSelectClockTrendRow({ back: { selectClockSec: ARC[i] }, prev: { selectClockSec: ARC[i + 1] }, cur: { selectClockSec: ARC[i + 2] } })
    assert.notEqual(row, null, `window ${i + 1} held - the arc never holds`)
    assert.ok(row.includes(WINDOWS[i][0]), `window ${i + 1} arc byte-exact: ${row}`)
    if (WINDOWS[i][1] === 'swell') assert.ok(row.includes('swell'), `window ${i + 1} the swell shape`)
    else assert.ok(row.includes('swing'), `window ${i + 1} the swing shape`)
    speaks++
  }
  assert.equal(speaks, 18, 'EIGHTEEN REAL WINDOWS')
  assert.equal(held, 0, 'ZERO HELD')
  // the held law - a held step the honest silence
  assert.equal(spawnSelectClockTrendRow({ back: { selectClockSec: 100 }, prev: { selectClockSec: 100 }, cur: { selectClockSec: 200 } }), null)
  // the three-face zero - the lawful silence
  assert.equal(spawnSelectClockTrendRow({ back: { selectClockSec: 0 }, prev: { selectClockSec: 0 }, cur: { selectClockSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = spawnSelectClockTrendRow({ back: { selectClockSec: 74406 }, prev: { selectClockSec: 78027 }, cur: { selectClockSec: 81322 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.293 boot prep word'), 'the prep segment seat named')
  assert.ok(tail.includes('.330 completion clock word'), 'the completion clock seat named')
  assert.ok(tail.includes('.328 set dawn word'), 'the set dawn seat named')
  assert.ok(tail.includes('.329 set dusk word'), 'the set dusk seat named')
  assert.ok(tail.includes('v0.976.331'), 'the version rides')
})
