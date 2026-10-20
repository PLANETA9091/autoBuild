import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSetDuskCensus, spawnSetDuskConsistent, spawnSetDuskTrendRow } from '../../src/lib/spawnsetdusk.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot conversation spoke; the REAL seventeen-face set
// dusk arc the artifacts hold - the later print's clock per face,
// seconds since midnight: F501 74431, F502 78053, F503 81347, F504
// 83713, F505 85457, F506 3462, F507 6274, F508 8081, F509 10949,
// F510 13659, F511 15533, F512 18061, F513 21771, F514 25286, F515
// 27494, F516 30183, F517 33118; the within-face pair 9-10 seconds
// apart every face - the two hands the MAX/MIN split keeps)

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
    '[07:38:14] [Server thread/INFO]: Set the world spawn point to -123, 70, 390 [0.0, 0.0] in minecraft:overworld'],
  // the fresh extension faces - the fire-1743 harvest's own new faces
  // (the F516 run 39391362502 and F517 run 39397311636 server-console
  // faces byte-exact, the pair 10 seconds apart both)
  f516: ['[08:22:53] [Server thread/INFO]: Set the world spawn point to -130, 71, 406 [0.0, 0.0] in minecraft:overworld',
    '[08:23:03] [Server thread/INFO]: Set the world spawn point to -130, 71, 406 [0.0, 0.0] in minecraft:overworld'],
  f517: ['[09:11:58] [Server thread/INFO]: Set the world spawn point to -127, 72, 398 [0.0, 0.0] in minecraft:overworld',
    '[09:12:08] [Server thread/INFO]: Set the world spawn point to -127, 72, 398 [0.0, 0.0] in minecraft:overworld']
}

test('v0.976.329 census: the REAL lines byte-exact and the later bed-set prices', () => {
  // F501's own face - the pair 74421/74431 the MAX hand the later
  // print takes (the MIN hand the earlier print wears - the .328
  // word's own law the pair keeps)
  assert.deepEqual(spawnSetDuskCensus(FACES.f501), { setDuskSec: 74431 })
  // F506's own face - the leading-zero-hour wrap face the clock
  // grammar keeps (00:57:42 the later print)
  assert.deepEqual(spawnSetDuskCensus(FACES.f506), { setDuskSec: 3462 })
  // F514's own face - the 81-bed face the .327 word's peak rode
  assert.deepEqual(spawnSetDuskCensus(FACES.f514), { setDuskSec: 25286 })
  // the fresh extension faces - the fire-1743 harvest's own new faces
  assert.deepEqual(spawnSetDuskCensus(FACES.f516), { setDuskSec: 30183 })
  assert.deepEqual(spawnSetDuskCensus(FACES.f517), { setDuskSec: 33128 })
  // the MAX-not-MIN law both orders - the later print wins
  // whichever order the face voiced
  const earlyfirst = [
    '[02:00:01] [Server thread/INFO]: Set the world spawn point to -100, 70, 400 [0.0, 0.0] in minecraft:overworld',
    '[02:00:09] [Server thread/INFO]: Set the world spawn point to -123, 69, 396 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnSetDuskCensus(earlyfirst), { setDuskSec: 7209 })
  const latefirst = [
    '[02:00:09] [Server thread/INFO]: Set the world spawn point to -123, 69, 396 [0.0, 0.0] in minecraft:overworld',
    '[02:00:01] [Server thread/INFO]: Set the world spawn point to -100, 70, 400 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnSetDuskCensus(latefirst), { setDuskSec: 7209 })
  // the sibling lanes never ride - the setblock echo line the echo box
  // owns and the boot's own Done line the .294 word owns and the login
  // line the login family owns
  const siblings = [
    '[06:02:42] [Server thread/INFO]: Changed the block at -108, 73, 415',
    '[06:02:31] [Server thread/INFO]: Done (4.800s)! For help, type "help"',
    '[06:02:30] [Server thread/INFO]: YardSurvey[/127.0.0.1:59342] logged in with entity id 17 at (-132.5, 72, 407.5)'
  ]
  assert.deepEqual(spawnSetDuskCensus(siblings), { setDuskSec: 0 })
})

test('v0.976.329 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(spawnSetDuskCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { setDuskSec: 0 })
  assert.equal(spawnSetDuskCensus(null), null)
  assert.equal(spawnSetDuskCensus(undefined), null)
  assert.equal(spawnSetDuskCensus(42), null)
  assert.deepEqual(spawnSetDuskCensus([42, null, ...FACES.f501]), { setDuskSec: 74431 })
})

test('v0.976.329 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(spawnSetDuskCensus([s]), { setDuskSec: 0 })
  // 1 the bot-tagged prefix
  refuse('[06:02:51] [Server thread/INFO]: YardSurvey[/127.0.0.1:59342]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 2 the WARN frame
  refuse('[06:02:51] [Server thread/WARN]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 3 the pretty spacing
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to  -132,  68,  407  [0.0, 0.0] in minecraft:overworld')
  // 4 the plural body
  refuse('[06:02:51] [Server thread/INFO]: Set the worlds spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 5 the altered verb
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn coordinate to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 6 the missing coords
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to [0.0, 0.0] in minecraft:overworld')
  // 7 the float coord
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407.5 [0.0, 0.0] in minecraft:overworld')
  // 8 the leading-zero coord
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 0407 [0.0, 0.0] in minecraft:overworld')
  // 9 the plus coord
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, +407 [0.0, 0.0] in minecraft:overworld')
  // 10 the integer angle
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0, 0] in minecraft:overworld')
  // 11 the single angle
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0] in minecraft:overworld')
  // 12 the missing dimension
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0]')
  // 13 the bare dimension
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in overworld')
  // 14 the leading whitespace
  refuse(' [06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 15 the trailing junk
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld done')
  // 16 the CR tail
  refuse('[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld\r')
  // 17 the 1-digit hour clock
  refuse('[6:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 18 the overflow second clock
  refuse('[06:02:60] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
  // 19 the dash-separator clock
  refuse('[06-02-51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld')
})

test('v0.976.329 fence: the clock law the whole day keeps', () => {
  const ok = (s) => ({ back: { setDuskSec: s }, prev: { setDuskSec: s }, cur: { setDuskSec: s } })
  assert.equal(spawnSetDuskConsistent(ok(74431)), true)
  assert.equal(spawnSetDuskConsistent(ok(0)), true)
  assert.equal(spawnSetDuskConsistent(ok(86399)), true)
  const fail = (v) => {
    const e = ok(74431)
    e.cur.setDuskSec = v
    return spawnSetDuskConsistent(e)
  }
  assert.equal(fail(86400), false)
  assert.equal(fail(-1), false)
  assert.equal(fail(74431.5), false)
  assert.equal(fail(Infinity), false)
  assert.equal(fail(NaN), false)
  assert.equal(fail('74431'), false)
  assert.equal(spawnSetDuskConsistent(null), false)
  assert.equal(spawnSetDuskConsistent({}), false)
  assert.equal(spawnSetDuskConsistent({ back: { setDuskSec: 74431 }, prev: { setDuskSec: 78053 } }), false)
})

test('v0.976.329 trend: the REAL seventeen-face arc re-voices W1-W15 byte-exact', () => {
  const names = Object.keys(FACES)
  const census = names.map(n => spawnSetDuskCensus(FACES[n]))
  const raw = [74431, 78053, 81347, 83713, 85457, 3462, 6274, 8081, 10949, 13659, 15533, 18061, 21771, 25286, 27494, 30183, 33128]
  census.forEach((c, i) => assert.equal(c.setDuskSec, raw[i], `${names[i]} mirror`))
  const rowOf = (i) => spawnSetDuskTrendRow({ back: census[i], prev: census[i + 1], cur: census[i + 2] })
  // W1-W3 the evening swells
  assert.match(rowOf(0), /set dusk swell ran two steps deep - 74431 -> 78053 \(\+3622\) -> 81347 \(\+3294\)/)
  assert.match(rowOf(1), /set dusk swell ran two steps deep - 78053 -> 81347 \(\+3294\) -> 83713 \(\+2366\)/)
  assert.match(rowOf(2), /set dusk swell ran two steps deep - 81347 -> 83713 \(\+2366\) -> 85457 \(\+1744\)/)
  // W4 the midnight wrap swing
  assert.match(rowOf(3), /set dusk swing - 83713 -> 85457 \(\+1744\) -> 3462 \(-81995\)/)
  // W5 the wrap recovery swing
  assert.match(rowOf(4), /set dusk swing - 85457 -> 3462 \(-81995\) -> 6274 \(\+2812\)/)
  // W6-W10 the night swells
  assert.match(rowOf(5), /set dusk swell ran two steps deep - 3462 -> 6274 \(\+2812\) -> 8081 \(\+1807\)/)
  assert.match(rowOf(6), /set dusk swell ran two steps deep - 6274 -> 8081 \(\+1807\) -> 10949 \(\+2868\)/)
  assert.match(rowOf(7), /set dusk swell ran two steps deep - 8081 -> 10949 \(\+2868\) -> 13659 \(\+2710\)/)
  assert.match(rowOf(8), /set dusk swell ran two steps deep - 10949 -> 13659 \(\+2710\) -> 15533 \(\+1874\)/)
  assert.match(rowOf(9), /set dusk swell ran two steps deep - 13659 -> 15533 \(\+1874\) -> 18061 \(\+2528\)/)
  // W11-W15 the morning swells (W14/W15 the fresh faces' own windows)
  assert.match(rowOf(10), /set dusk swell ran two steps deep - 15533 -> 18061 \(\+2528\) -> 21771 \(\+3710\)/)
  assert.match(rowOf(11), /set dusk swell ran two steps deep - 18061 -> 21771 \(\+3710\) -> 25286 \(\+3515\)/)
  assert.match(rowOf(12), /set dusk swell ran two steps deep - 21771 -> 25286 \(\+3515\) -> 27494 \(\+2208\)/)
  assert.match(rowOf(13), /set dusk swell ran two steps deep - 25286 -> 27494 \(\+2208\) -> 30183 \(\+2689\)/)
  assert.match(rowOf(14), /set dusk swell ran two steps deep - 27494 -> 30183 \(\+2689\) -> 33128 \(\+2945\)/)
  // FIFTEEN windows FIFTEEN speaks ZERO held - the deepest birth
  const speaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(rowOf).filter(Boolean)
  assert.equal(speaks.length, 15)
  for (const r of speaks) {
    assert.match(r, /v0\.976\.329/)
    assert.match(r, /the .322 login dusk word keeps the login line's clock cell's later edge/)
    assert.match(r, /the earlier print's clock the MIN hand the .328 set dawn word prices/)
  }
  // the held law - a flat step the honest silence keeps
  assert.equal(spawnSetDuskTrendRow({ back: { setDuskSec: 74431 }, prev: { setDuskSec: 74431 }, cur: { setDuskSec: 78053 } }), null)
  // the three-face zero - the silence the family keeps
  assert.equal(spawnSetDuskTrendRow({ back: { setDuskSec: 0 }, prev: { setDuskSec: 0 }, cur: { setDuskSec: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(spawnSetDuskTrendRow({ back: { setDuskSec: 74431 }, prev: { setDuskSec: 78053 }, cur: { setDuskSec: 86400 } }), null)
})
