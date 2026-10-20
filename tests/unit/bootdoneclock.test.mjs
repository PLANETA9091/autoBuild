import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bootDoneClockCensus, bootDoneClockConsistent, bootDoneClockTrendRow } from '../../src/lib/bootdoneclock.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot voiced; the REAL nineteen-face completion clock
// arc the artifacts hold - the final Done print's clock per face,
// seconds since midnight: F501 74410, F502 78032, F503 81326, F504
// 83691, F505 85437, F506 3444, F507 6256, F508 8060, F509 10930,
// F510 13638, F511 15513, F512 18042, F513 21751, F514 25263, F515
// 27472, F516 30162, F517 33106, F518 36200, F519 38138; one print
// per face every face - the ONE-PRINT law the census keeps)

const FACES = {
  f501: ['[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"'],
  f502: ['[21:40:32] [Server thread/INFO]: Done (4.869s)! For help, type "help"'],
  f503: ['[22:35:26] [Server thread/INFO]: Done (4.807s)! For help, type "help"'],
  f504: ['[23:14:51] [Server thread/INFO]: Done (4.715s)! For help, type "help"'],
  f505: ['[23:43:57] [Server thread/INFO]: Done (2.883s)! For help, type "help"'],
  f506: ['[00:57:24] [Server thread/INFO]: Done (3.569s)! For help, type "help"'],
  f507: ['[01:44:16] [Server thread/INFO]: Done (2.836s)! For help, type "help"'],
  f508: ['[02:14:20] [Server thread/INFO]: Done (4.596s)! For help, type "help"'],
  f509: ['[03:02:10] [Server thread/INFO]: Done (3.145s)! For help, type "help"'],
  f510: ['[03:47:18] [Server thread/INFO]: Done (4.930s)! For help, type "help"'],
  f511: ['[04:18:33] [Server thread/INFO]: Done (2.855s)! For help, type "help"'],
  f512: ['[05:00:42] [Server thread/INFO]: Done (3.716s)! For help, type "help"'],
  f513: ['[06:02:31] [Server thread/INFO]: Done (4.800s)! For help, type "help"'],
  f514: ['[07:01:03] [Server thread/INFO]: Done (6.687s)! For help, type "help"'],
  f515: ['[07:37:52] [Server thread/INFO]: Done (4.696s)! For help, type "help"'],
  f516: ['[08:22:42] [Server thread/INFO]: Done (4.812s)! For help, type "help"'],
  f517: ['[09:11:46] [Server thread/INFO]: Done (5.016s)! For help, type "help"'],
  // the fresh extension faces - the fire-1843 harvest's own new faces
  // (the F518 run 39402993976 and F519 run 39407353321 server-console
  // faces byte-exact, the .329 full tree's own first fleet face F519)
  f518: ['[10:03:20] [Server thread/INFO]: Done (3.807s)! For help, type "help"'],
  f519: ['[10:35:38] [Server thread/INFO]: Done (3.111s)! For help, type "help"']
}

test('v0.976.330 census: the REAL lines byte-exact and the final boot prices', () => {
  // F501's own face - the boot's own completion second
  assert.deepEqual(bootDoneClockCensus(FACES.f501), { doneClockSec: 74410 })
  // F506's own face - the leading-zero-hour wrap face the clock
  // grammar keeps (00:57:24)
  assert.deepEqual(bootDoneClockCensus(FACES.f506), { doneClockSec: 3444 })
  // F514's own face - the 81-bed face the slowest boot rode (6.687s)
  assert.deepEqual(bootDoneClockCensus(FACES.f514), { doneClockSec: 25263 })
  // the fresh extension faces - the fire-1843 harvest's own new faces
  assert.deepEqual(bootDoneClockCensus(FACES.f518), { doneClockSec: 36200 })
  assert.deepEqual(bootDoneClockCensus(FACES.f519), { doneClockSec: 38138 })
  // the LAST-PRINT-WINS law - a re-boot face the final boot prices
  const reprinted = [
    '[02:00:01] [Server thread/INFO]: Done (2.500s)! For help, type "help"',
    '[02:00:09] [Server thread/INFO]: Done (3.500s)! For help, type "help"'
  ]
  assert.deepEqual(bootDoneClockCensus(reprinted), { doneClockSec: 7209 })
  // the sibling lanes never ride - the spawn-set line the spawn family
  // owns and the login line the login family owns and the fill line
  // the .292 word owns
  const siblings = [
    '[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    '[06:02:30] [Server thread/INFO]: YardSurvey[/127.0.0.1:59342] logged in with entity id 17 at (-132.5, 72, 407.5)',
    '[06:02:31] [Server thread/INFO]: Successfully filled 1537 block(s)'
  ]
  assert.deepEqual(bootDoneClockCensus(siblings), { doneClockSec: 0 })
})

test('v0.976.330 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(bootDoneClockCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { doneClockSec: 0 })
  assert.equal(bootDoneClockCensus(null), null)
  assert.equal(bootDoneClockCensus(undefined), null)
  assert.equal(bootDoneClockCensus(42), null)
  assert.deepEqual(bootDoneClockCensus([42, null, ...FACES.f501]), { doneClockSec: 74410 })
})

test('v0.976.330 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(bootDoneClockCensus([s]), { doneClockSec: 0 })
  // 1 the bot-tagged prefix
  refuse('[20:40:10] [Server thread/INFO]: YardSurvey: Done (4.801s)! For help, type "help"')
  // 2 the WARN frame
  refuse('[20:40:10] [Server thread/WARN]: Done (4.801s)! For help, type "help"')
  // 3 the pretty spacing
  refuse('[20:40:10] [Server thread/INFO]: Done ( 4.801s )! For help, type "help"')
  // 4 the plural body
  refuse('[20:40:10] [Server thread/INFO]: Dones (4.801s)! For help, type "help"')
  // 5 the altered verb
  refuse('[20:40:10] [Server thread/INFO]: Complete (4.801s)! For help, type "help"')
  // 6 the missing duration
  refuse('[20:40:10] [Server thread/INFO]: Done ! For help, type "help"')
  // 7 the integer duration
  refuse('[20:40:10] [Server thread/INFO]: Done (4s)! For help, type "help"')
  // 8 the two-decimal duration
  refuse('[20:40:10] [Server thread/INFO]: Done (4.80s)! For help, type "help"')
  // 9 the leading-zero duration
  refuse('[20:40:10] [Server thread/INFO]: Done (04.801s)! For help, type "help"')
  // 10 the plus duration
  refuse('[20:40:10] [Server thread/INFO]: Done (+4.801s)! For help, type "help"')
  // 11 the missing tail
  refuse('[20:40:10] [Server thread/INFO]: Done (4.801s)')
  // 12 the altered tail
  refuse('[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type help')
  // 13 the bare Done
  refuse('[20:40:10] [Server thread/INFO]: Done')
  // 14 the leading whitespace
  refuse(' [20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"')
  // 15 the trailing junk
  refuse('[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help" done')
  // 16 the CR tail
  refuse('[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"\r')
  // 17 the 1-digit hour clock
  refuse('[2:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"')
  // 18 the overflow second clock
  refuse('[20:40:60] [Server thread/INFO]: Done (4.801s)! For help, type "help"')
  // 19 the dash-separator clock
  refuse('[20-40-10] [Server thread/INFO]: Done (4.801s)! For help, type "help"')
})

test('v0.976.330 fence: the clock law the whole day keeps', () => {
  const ok = (s) => ({ back: { doneClockSec: s }, prev: { doneClockSec: s }, cur: { doneClockSec: s } })
  assert.equal(bootDoneClockConsistent(ok(74410)), true)
  assert.equal(bootDoneClockConsistent(ok(0)), true)
  assert.equal(bootDoneClockConsistent(ok(86399)), true)
  const fail = (v) => {
    const e = ok(74410)
    e.cur.doneClockSec = v
    return bootDoneClockConsistent(e)
  }
  assert.equal(fail(86400), false)
  assert.equal(fail(-1), false)
  assert.equal(fail(74410.5), false)
  assert.equal(fail(Infinity), false)
  assert.equal(fail(NaN), false)
  assert.equal(fail('74410'), false)
  assert.equal(bootDoneClockConsistent(null), false)
  assert.equal(bootDoneClockConsistent({}), false)
  assert.equal(bootDoneClockConsistent({ back: { doneClockSec: 74410 }, prev: { doneClockSec: 78032 } }), false)
})

test('v0.976.330 trend: the REAL nineteen-face arc re-voices W1-W17 byte-exact', () => {
  const names = Object.keys(FACES)
  const census = names.map(n => bootDoneClockCensus(FACES[n]))
  const raw = [74410, 78032, 81326, 83691, 85437, 3444, 6256, 8060, 10930, 13638, 15513, 18042, 21751, 25263, 27472, 30162, 33106, 36200, 38138]
  census.forEach((c, i) => assert.equal(c.doneClockSec, raw[i], `${names[i]} mirror`))
  const rowOf = (i) => bootDoneClockTrendRow({ back: census[i], prev: census[i + 1], cur: census[i + 2] })
  // W1-W3 the evening swells
  assert.match(rowOf(0), /completion swell ran two steps deep - 74410 -> 78032 \(\+3622\) -> 81326 \(\+3294\)/)
  assert.match(rowOf(1), /completion swell ran two steps deep - 78032 -> 81326 \(\+3294\) -> 83691 \(\+2365\)/)
  assert.match(rowOf(2), /completion swell ran two steps deep - 81326 -> 83691 \(\+2365\) -> 85437 \(\+1746\)/)
  // W4 the midnight wrap swing
  assert.match(rowOf(3), /completion swing - 83691 -> 85437 \(\+1746\) -> 3444 \(-81993\)/)
  // W5 the wrap recovery swing
  assert.match(rowOf(4), /completion swing - 85437 -> 3444 \(-81993\) -> 6256 \(\+2812\)/)
  // W6-W10 the night swells
  assert.match(rowOf(5), /completion swell ran two steps deep - 3444 -> 6256 \(\+2812\) -> 8060 \(\+1804\)/)
  assert.match(rowOf(6), /completion swell ran two steps deep - 6256 -> 8060 \(\+1804\) -> 10930 \(\+2870\)/)
  assert.match(rowOf(7), /completion swell ran two steps deep - 8060 -> 10930 \(\+2870\) -> 13638 \(\+2708\)/)
  assert.match(rowOf(8), /completion swell ran two steps deep - 10930 -> 13638 \(\+2708\) -> 15513 \(\+1875\)/)
  assert.match(rowOf(9), /completion swell ran two steps deep - 13638 -> 15513 \(\+1875\) -> 18042 \(\+2529\)/)
  // W11-W17 the morning swells (W16/W17 the fresh faces' own windows)
  assert.match(rowOf(10), /completion swell ran two steps deep - 15513 -> 18042 \(\+2529\) -> 21751 \(\+3709\)/)
  assert.match(rowOf(11), /completion swell ran two steps deep - 18042 -> 21751 \(\+3709\) -> 25263 \(\+3512\)/)
  assert.match(rowOf(12), /completion swell ran two steps deep - 21751 -> 25263 \(\+3512\) -> 27472 \(\+2209\)/)
  assert.match(rowOf(13), /completion swell ran two steps deep - 25263 -> 27472 \(\+2209\) -> 30162 \(\+2690\)/)
  assert.match(rowOf(14), /completion swell ran two steps deep - 27472 -> 30162 \(\+2690\) -> 33106 \(\+2944\)/)
  assert.match(rowOf(15), /completion swell ran two steps deep - 30162 -> 33106 \(\+2944\) -> 36200 \(\+3094\)/)
  assert.match(rowOf(16), /completion swell ran two steps deep - 33106 -> 36200 \(\+3094\) -> 38138 \(\+1938\)/)
  // SEVENTEEN windows SEVENTEEN speaks ZERO held - the deepest birth
  const speaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(rowOf).filter(Boolean)
  assert.equal(speaks.length, 17)
  for (const r of speaks) {
    assert.match(r, /v0\.976\.330/)
    assert.match(r, /the .294 boot done word prices the SUM hand and the .324 boot mass word prices the MAX hand/)
    assert.match(r, /the boot finishes before the first login the ordering law keeps/)
  }
  // the held law - a flat step the honest silence keeps
  assert.equal(bootDoneClockTrendRow({ back: { doneClockSec: 74410 }, prev: { doneClockSec: 74410 }, cur: { doneClockSec: 78032 } }), null)
  // the three-face zero - the silence the family keeps
  assert.equal(bootDoneClockTrendRow({ back: { doneClockSec: 0 }, prev: { doneClockSec: 0 }, cur: { doneClockSec: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(bootDoneClockTrendRow({ back: { doneClockSec: 74410 }, prev: { doneClockSec: 78032 }, cur: { doneClockSec: 86400 } }), null)
})
