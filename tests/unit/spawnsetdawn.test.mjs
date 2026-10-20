import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSetDawnCensus, spawnSetDawnConsistent, spawnSetDawnTrendRow } from '../../src/lib/spawnsetdawn.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot conversation spoke; the REAL fifteen-face set
// dawn arc the artifacts hold - the earliest print's clock per face,
// seconds since midnight: F501 74421, F502 78044, F503 81337, F504
// 83703, F505 85447, F506 3453, F507 6265, F508 8071, F509 10940,
// F510 13649, F511 15523, F512 18051, F513 21762, F514 25276, F515
// 27485; the within-face pair 9-10 seconds apart every face)

const FACES = {
  f501: ['[20:40:21] [Server thread/INFO]: Set the world spawn point to -130, 71, 398 [0.0, 0.0] in minecraft:overworld',
    '[20:40:31] [Server thread/INFO]: Set the world spawn point to -130, 71, 398 [0.0, 0.0] in minecraft:overworld'],
  f502: ['[21:40:44] [Server thread/INFO]: Set the world spawn point to -127, 72, 394 [0.0, 0.0] in minecraft:overworld',
    '[21:40:53] [Server thread/INFO]: Set the world spawn point to -127, 72, 394 [0.0, 0.0] in minecraft:overworld'],
  f503: ['[22:35:37] [Server thread/INFO]: Set the world spawn point to -133, 72, 400 [0.0, 0.0] in minecraft:overworld',
    '[22:35:47] [Server thread/INFO]: Set the world spawn point to -133, 72, 400 [0.0, 0.0] in minecraft:overworld'],
  f504: ['[23:15:03] [Server thread/INFO]: Set the world spawn point to -118, 72, 390 [0.0, 0.0] in minecraft:overworld',
    '[23:15:13] [Server thread/INFO]: Set the world spawn point to -118, 72, 390 [0.0, 0.0] in minecraft:overworld'],
  f505: ['[23:44:07] [Server thread/INFO]: Set the world spawn point to -124, 67, 396 [0.0, 0.0] in minecraft:overworld',
    '[23:44:17] [Server thread/INFO]: Set the world spawn point to -124, 67, 396 [0.0, 0.0] in minecraft:overworld'],
  f506: ['[00:57:33] [Server thread/INFO]: Set the world spawn point to -130, 71, 404 [0.0, 0.0] in minecraft:overworld',
    '[00:57:42] [Server thread/INFO]: Set the world spawn point to -130, 71, 404 [0.0, 0.0] in minecraft:overworld'],
  f507: ['[01:44:25] [Server thread/INFO]: Set the world spawn point to -136, 71, 397 [0.0, 0.0] in minecraft:overworld',
    '[01:44:34] [Server thread/INFO]: Set the world spawn point to -136, 71, 397 [0.0, 0.0] in minecraft:overworld'],
  f508: ['[02:14:31] [Server thread/INFO]: Set the world spawn point to -123, 69, 396 [0.0, 0.0] in minecraft:overworld',
    '[02:14:41] [Server thread/INFO]: Set the world spawn point to -123, 69, 396 [0.0, 0.0] in minecraft:overworld'],
  f509: ['[03:02:20] [Server thread/INFO]: Set the world spawn point to -122, 69, 405 [0.0, 0.0] in minecraft:overworld',
    '[03:02:29] [Server thread/INFO]: Set the world spawn point to -122, 69, 405 [0.0, 0.0] in minecraft:overworld'],
  f510: ['[03:47:29] [Server thread/INFO]: Set the world spawn point to -119, 74, 392 [0.0, 0.0] in minecraft:overworld',
    '[03:47:39] [Server thread/INFO]: Set the world spawn point to -119, 74, 392 [0.0, 0.0] in minecraft:overworld'],
  f511: ['[04:18:43] [Server thread/INFO]: Set the world spawn point to -133, 70, 395 [0.0, 0.0] in minecraft:overworld',
    '[04:18:53] [Server thread/INFO]: Set the world spawn point to -133, 70, 395 [0.0, 0.0] in minecraft:overworld'],
  f512: ['[05:00:51] [Server thread/INFO]: Set the world spawn point to -135, 72, 402 [0.0, 0.0] in minecraft:overworld',
    '[05:01:01] [Server thread/INFO]: Set the world spawn point to -135, 72, 402 [0.0, 0.0] in minecraft:overworld'],
  f513: ['[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld'],
  f514: ['[07:01:16] [Server thread/INFO]: Set the world spawn point to -120, 81, 401 [0.0, 0.0] in minecraft:overworld',
    '[07:01:26] [Server thread/INFO]: Set the world spawn point to -120, 81, 401 [0.0, 0.0] in minecraft:overworld'],
  f515: ['[07:38:05] [Server thread/INFO]: Set the world spawn point to -123, 70, 390 [0.0, 0.0] in minecraft:overworld',
    '[07:38:14] [Server thread/INFO]: Set the world spawn point to -123, 70, 390 [0.0, 0.0] in minecraft:overworld']
}

test('v0.976.328 census: the REAL lines byte-exact and the earliest bed-set prices', () => {
  // F501's own face - the pair 74421/74431 the MIN hand the earlier
  // print takes (the LAST-PRINT-WINS and MAX hands the later print
  // wears - the law the two-print face distinguishes)
  assert.deepEqual(spawnSetDawnCensus(FACES.f501), { setDawnSec: 74421 })
  // F506's own face - the leading-zero-hour wrap face the clock
  // grammar keeps (00:57:33 the earliest print)
  assert.deepEqual(spawnSetDawnCensus(FACES.f506), { setDawnSec: 3453 })
  // F514's own face - the newest extension face (the 81-bed face the
  // .327 word's peak rode)
  assert.deepEqual(spawnSetDawnCensus(FACES.f514), { setDawnSec: 25276 })
  // F515's own face - the newest face
  assert.deepEqual(spawnSetDawnCensus(FACES.f515), { setDawnSec: 27485 })
  // the MIN-not-MAX law both orders - the earlier print wins
  // whichever order the face voiced
  const latefirst = [
    '[02:00:09] [Server thread/INFO]: Set the world spawn point to -123, 69, 396 [0.0, 0.0] in minecraft:overworld',
    '[02:00:01] [Server thread/INFO]: Set the world spawn point to -100, 70, 400 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnSetDawnCensus(latefirst), { setDawnSec: 7201 })
  const earlyfirst = [
    '[02:00:01] [Server thread/INFO]: Set the world spawn point to -100, 70, 400 [0.0, 0.0] in minecraft:overworld',
    '[02:00:09] [Server thread/INFO]: Set the world spawn point to -123, 69, 396 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnSetDawnCensus(earlyfirst), { setDawnSec: 7201 })
  // the sibling lanes never ride - the setblock echo line the echo box
  // owns and the boot's own Done line the .294 word owns and the login
  // line the login family owns
  const siblings = [
    '[06:02:42] [Server thread/INFO]: Changed the block at -108, 73, 415',
    '[06:02:31] [Server thread/INFO]: Done (4.800s)! For help, type "help"',
    '[06:02:30] [Server thread/INFO]: YardSurvey[/127.0.0.1:59342] logged in with entity id 17 at (-132.5, 72, 407.5)'
  ]
  assert.deepEqual(spawnSetDawnCensus(siblings), { setDawnSec: 0 })
})

test('v0.976.328 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(spawnSetDawnCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { setDawnSec: 0 })
  assert.equal(spawnSetDawnCensus(null), null)
  assert.equal(spawnSetDawnCensus(undefined), null)
  assert.equal(spawnSetDawnCensus(42), null)
  assert.deepEqual(spawnSetDawnCensus([42, null, ...FACES.f501]), { setDawnSec: 74421 })
})

test('v0.976.328 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(spawnSetDawnCensus([s]), { setDawnSec: 0 })
  // 1 the bot-tagged prefix
  refuse('[06:02:42] [Server thread/INFO]: YardSurvey[/127.0.0.1:59342]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 2 the WARN frame
  refuse('[06:02:42] [Server thread/WARN]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 3 the pretty spacing
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to  -132,  68,  407  [0.0, 0.0] in minecraft:overworld')
  // 4 the plural body
  refuse('[06:02:42] [Server thread/INFO]: Set the worlds spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 5 the altered verb
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn coordinate to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 6 the missing coords
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to [0.0, 0.0] in minecraft:overworld')
  // 7 the float coord
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407.5 [0.0, 0.0] in minecraft:overworld')
  // 8 the leading-zero coord
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 0407 [0.0, 0.0] in minecraft:overworld')
  // 9 the plus coord
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, +407 [0.0, 0.0] in minecraft:overworld')
  // 10 the integer angle
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0, 0] in minecraft:overworld')
  // 11 the single angle
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0] in minecraft:overworld')
  // 12 the missing dimension
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0]')
  // 13 the bare dimension
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in overworld')
  // 14 the leading whitespace
  refuse(' [06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 15 the trailing junk
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld done')
  // 16 the CR tail
  refuse('[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld\r')
  // 17 the 1-digit hour clock
  refuse('[6:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 18 the overflow second clock
  refuse('[06:02:60] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 19 the dash-separator clock
  refuse('[06-02-42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
})

test('v0.976.328 fence: the clock law the whole day keeps', () => {
  const ok = (s) => ({ back: { setDawnSec: s }, prev: { setDawnSec: s }, cur: { setDawnSec: s } })
  assert.equal(spawnSetDawnConsistent(ok(74421)), true)
  assert.equal(spawnSetDawnConsistent(ok(0)), true)
  assert.equal(spawnSetDawnConsistent(ok(86399)), true)
  const fail = (v) => {
    const e = ok(74421)
    e.cur.setDawnSec = v
    return spawnSetDawnConsistent(e)
  }
  assert.equal(fail(86400), false)
  assert.equal(fail(-1), false)
  assert.equal(fail(74421.5), false)
  assert.equal(fail(Infinity), false)
  assert.equal(fail(NaN), false)
  assert.equal(fail('74421'), false)
  assert.equal(spawnSetDawnConsistent(null), false)
  assert.equal(spawnSetDawnConsistent({}), false)
  assert.equal(spawnSetDawnConsistent({ back: { setDawnSec: 74421 }, prev: { setDawnSec: 78044 } }), false)
})

test('v0.976.328 trend: the REAL fifteen-face arc re-voices W1-W13 byte-exact', () => {
  const names = Object.keys(FACES)
  const census = names.map(n => spawnSetDawnCensus(FACES[n]))
  const raw = [74421, 78044, 81337, 83703, 85447, 3453, 6265, 8071, 10940, 13649, 15523, 18051, 21762, 25276, 27485]
  census.forEach((c, i) => assert.equal(c.setDawnSec, raw[i], `${names[i]} mirror`))
  const rowOf = (i) => spawnSetDawnTrendRow({ back: census[i], prev: census[i + 1], cur: census[i + 2] })
  // W1-W3 the evening swells
  assert.match(rowOf(0), /set dawn swell ran two steps deep - 74421 -> 78044 \(\+3623\) -> 81337 \(\+3293\)/)
  assert.match(rowOf(1), /set dawn swell ran two steps deep - 78044 -> 81337 \(\+3293\) -> 83703 \(\+2366\)/)
  assert.match(rowOf(2), /set dawn swell ran two steps deep - 81337 -> 83703 \(\+2366\) -> 85447 \(\+1744\)/)
  // W4 the midnight wrap swing
  assert.match(rowOf(3), /set dawn swing - 83703 -> 85447 \(\+1744\) -> 3453 \(-81994\)/)
  // W5 the wrap recovery swing
  assert.match(rowOf(4), /set dawn swing - 85447 -> 3453 \(-81994\) -> 6265 \(\+2812\)/)
  // W6-W10 the night swells
  assert.match(rowOf(5), /set dawn swell ran two steps deep - 3453 -> 6265 \(\+2812\) -> 8071 \(\+1806\)/)
  assert.match(rowOf(6), /set dawn swell ran two steps deep - 6265 -> 8071 \(\+1806\) -> 10940 \(\+2869\)/)
  assert.match(rowOf(7), /set dawn swell ran two steps deep - 8071 -> 10940 \(\+2869\) -> 13649 \(\+2709\)/)
  assert.match(rowOf(8), /set dawn swell ran two steps deep - 10940 -> 13649 \(\+2709\) -> 15523 \(\+1874\)/)
  assert.match(rowOf(9), /set dawn swell ran two steps deep - 13649 -> 15523 \(\+1874\) -> 18051 \(\+2528\)/)
  // W11-W13 the morning swells
  assert.match(rowOf(10), /set dawn swell ran two steps deep - 15523 -> 18051 \(\+2528\) -> 21762 \(\+3711\)/)
  assert.match(rowOf(11), /set dawn swell ran two steps deep - 18051 -> 21762 \(\+3711\) -> 25276 \(\+3514\)/)
  assert.match(rowOf(12), /set dawn swell ran two steps deep - 21762 -> 25276 \(\+3514\) -> 27485 \(\+2209\)/)
  // THIRTEEN windows THIRTEEN speaks ZERO held - the deepest birth
  const speaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(rowOf).filter(Boolean)
  assert.equal(speaks.length, 13)
  for (const r of speaks) {
    assert.match(r, /v0\.976\.328/)
    assert.match(r, /the .321 login dawn word keeps the login line's clock cell's earlier edge/)
    assert.match(r, /the .326 south word prices the MAX seat/)
  }
  // the held law - a flat step the honest silence keeps
  assert.equal(spawnSetDawnTrendRow({ back: { setDawnSec: 74421 }, prev: { setDawnSec: 74421 }, cur: { setDawnSec: 78044 } }), null)
  // the three-face zero - the silence the family keeps
  assert.equal(spawnSetDawnTrendRow({ back: { setDawnSec: 0 }, prev: { setDawnSec: 0 }, cur: { setDawnSec: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(spawnSetDawnTrendRow({ back: { setDawnSec: 74421 }, prev: { setDawnSec: 78044 }, cur: { setDawnSec: 86400 } }), null)
})
