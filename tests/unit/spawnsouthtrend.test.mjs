import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSouthCensus, spawnSouthConsistent, spawnSouthTrendRow } from '../../src/lib/spawnsouthtrend.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot conversation spoke; the REAL thirteen-face south
// arc the artifacts hold - the MAX Z per face: F501 398, F502 394,
// F503 400, F504 390, F505 396, F506 404, F507 397, F508 396, F509
// 405, F510 392, F511 395, F512 402, F513 407; the within-face pair
// the thirteen faces byte-identical 13/13)

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
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld']
}

test('v0.976.326 census: the REAL lines byte-exact and the farthest bed prices', () => {
  // F501's own face - the face the .325 anchor arc rode without (the
  // cache re-mined) - the arc's north door
  assert.deepEqual(spawnSouthCensus(FACES.f501), { spawnZMax: 398 })
  // F504's own face - the arc's own north reach (the MIN bed 390 the
  // MIN hand's named-never-priced seat holds)
  assert.deepEqual(spawnSouthCensus(FACES.f504), { spawnZMax: 390 })
  // F510's own face - the midnight-wrap face the clock grammar keeps
  assert.deepEqual(spawnSouthCensus(FACES.f510), { spawnZMax: 392 })
  // F513's own face - the arc's own south reach (the MAX bed 407 the
  // newest face rode)
  assert.deepEqual(spawnSouthCensus(FACES.f513), { spawnZMax: 407 })
  // the MAX hand - the farthest bed wins over the nearer print (the
  // .320 login south word's own max-hand law the same Z kind holds)
  const maxfirst = [
    '[02:00:01] [Server thread/INFO]: Set the world spawn point to -100, 70, 405 [0.0, 0.0] in minecraft:overworld',
    '[02:00:09] [Server thread/INFO]: Set the world spawn point to -123, 69, 392 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnSouthCensus(maxfirst), { spawnZMax: 405 })
  const maxlast = [
    '[02:00:01] [Server thread/INFO]: Set the world spawn point to -100, 70, 392 [0.0, 0.0] in minecraft:overworld',
    '[02:00:09] [Server thread/INFO]: Set the world spawn point to -123, 69, 405 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnSouthCensus(maxlast), { spawnZMax: 405 })
  // the sibling lanes never ride - the setblock echo line the echo box
  // owns and the boot's own Done line the .294 word owns and the login
  // line the login family owns
  const siblings = [
    '[06:02:42] [Server thread/INFO]: Changed the block at -108, 73, 415',
    '[06:02:31] [Server thread/INFO]: Done (4.800s)! For help, type "help"',
    '[06:02:30] [Server thread/INFO]: YardSurvey[/127.0.0.1:59342] logged in with entity id 17 at (-132.5, 72, 407.5)'
  ]
  assert.deepEqual(spawnSouthCensus(siblings), { spawnZMax: 0 })
})

test('v0.976.326 census: the junk faces keep the honest shapes', () => {
  // the junk face - no spawn-set line the lawful zero (the
  // null-sentinel convention holds)
  assert.deepEqual(spawnSouthCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { spawnZMax: 0 })
  // non-array input - the honest null
  assert.equal(spawnSouthCensus(null), null)
  assert.equal(spawnSouthCensus(undefined), null)
  assert.equal(spawnSouthCensus(42), null)
  // non-string members ride past the hand
  assert.deepEqual(spawnSouthCensus([42, null, ...FACES.f501]), { spawnZMax: 398 })
})

test('v0.976.326 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(spawnSouthCensus([s]), { spawnZMax: 0 })
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

test('v0.976.326 fence: the integer law the whole domain keeps', () => {
  const ok = (z) => ({ back: { spawnZMax: z }, prev: { spawnZMax: z }, cur: { spawnZMax: z } })
  assert.equal(spawnSouthConsistent(ok(398)), true)
  assert.equal(spawnSouthConsistent(ok(0)), true)
  assert.equal(spawnSouthConsistent(ok(-5)), true)
  const fail = (v) => {
    const e = ok(398)
    e.cur.spawnZMax = v
    return spawnSouthConsistent(e)
  }
  assert.equal(fail(398.5), false)
  assert.equal(fail(Infinity), false)
  assert.equal(fail(NaN), false)
  assert.equal(fail('407'), false)
  assert.equal(spawnSouthConsistent(null), false)
  assert.equal(spawnSouthConsistent({}), false)
  assert.equal(spawnSouthConsistent({ back: { spawnZMax: 398 }, prev: { spawnZMax: 394 } }), false)
})

test('v0.976.326 trend: the REAL thirteen-face arc re-voices W1-W11 byte-exact', () => {
  const names = Object.keys(FACES)
  const census = names.map(n => spawnSouthCensus(FACES[n]))
  const raw = [398, 394, 400, 390, 396, 404, 397, 396, 405, 392, 395, 402, 407]
  census.forEach((c, i) => assert.equal(c.spawnZMax, raw[i], `${names[i]} mirror`))
  const rowOf = (i) => spawnSouthTrendRow({ back: census[i], prev: census[i + 1], cur: census[i + 2] })
  // W1 the swing 398 -> 394 (-4) -> 400 (+6)
  assert.match(rowOf(0), /the world spawn's own bed swing - 398 -> 394 \(-4\) -> 400 \(\+6\)/)
  // W2 the swing 394 -> 400 (+6) -> 390 (-10)
  assert.match(rowOf(1), /bed swing - 394 -> 400 \(\+6\) -> 390 \(-10\)/)
  // W3 the swing 400 -> 390 (-10) -> 396 (+6)
  assert.match(rowOf(2), /bed swing - 400 -> 390 \(-10\) -> 396 \(\+6\)/)
  // W4 the swell 390 -> 396 (+6) -> 404 (+8)
  assert.match(rowOf(3), /bed swell ran two steps deep - 390 -> 396 \(\+6\) -> 404 \(\+8\)/)
  // W5 the swing 396 -> 404 (+8) -> 397 (-7)
  assert.match(rowOf(4), /bed swing - 396 -> 404 \(\+8\) -> 397 \(-7\)/)
  // W6 the fade 404 -> 397 (-7) -> 396 (-1)
  assert.match(rowOf(5), /bed fade ran two steps deep - 404 -> 397 \(-7\) -> 396 \(-1\)/)
  // W7 the swing 397 -> 396 (-1) -> 405 (+9)
  assert.match(rowOf(6), /bed swing - 397 -> 396 \(-1\) -> 405 \(\+9\)/)
  // W8 the swing 396 -> 405 (+9) -> 392 (-13)
  assert.match(rowOf(7), /bed swing - 396 -> 405 \(\+9\) -> 392 \(-13\)/)
  // W9 the swing 405 -> 392 (-13) -> 395 (+3)
  assert.match(rowOf(8), /bed swing - 405 -> 392 \(-13\) -> 395 \(\+3\)/)
  // W10 the swell 392 -> 395 (+3) -> 402 (+7)
  assert.match(rowOf(9), /bed swell ran two steps deep - 392 -> 395 \(\+3\) -> 402 \(\+7\)/)
  // W11 the swell 395 -> 402 (+7) -> 407 (+5)
  assert.match(rowOf(10), /bed swell ran two steps deep - 395 -> 402 \(\+7\) -> 407 \(\+5\)/)
  // ELEVEN windows ELEVEN speaks ZERO held - the born-eleven-deep birth
  const speaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(rowOf).filter(Boolean)
  assert.equal(speaks.length, 11)
  // the row's own v-pin and the co-existence tail ride every row
  for (const r of speaks) {
    assert.match(r, /v0\.976\.326/)
    assert.match(r, /the .325 anchor word prices the LAST-PRINT-WINS seat/)
    assert.match(r, /the .320 login south word keeps the login line's own Z-max seat/)
  }
  // the held law - a flat step the honest silence keeps
  const held = spawnSouthTrendRow({ back: { spawnZMax: 398 }, prev: { spawnZMax: 398 }, cur: { spawnZMax: 394 } })
  assert.equal(held, null)
  // the three-face zero - the silence the family keeps
  assert.equal(spawnSouthTrendRow({ back: { spawnZMax: 0 }, prev: { spawnZMax: 0 }, cur: { spawnZMax: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(spawnSouthTrendRow({ back: { spawnZMax: 398 }, prev: { spawnZMax: 394 }, cur: { spawnZMax: '400' } }), null)
})
