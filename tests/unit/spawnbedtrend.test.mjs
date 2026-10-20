import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnBedCensus, spawnBedConsistent, spawnBedTrendRow } from '../../src/lib/spawnbedtrend.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot conversation spoke; the REAL fifteen-face bed arc
// the artifacts hold - the LAST print's Y per face: F501 71, F502 72,
// F503 72, F504 72, F505 67, F506 71, F507 71, F508 69, F509 69, F510
// 74, F511 70, F512 72, F513 68, F514 81, F515 70; the within-face
// pair every face byte-identical)

test('v0.976.327 census: the REAL lines byte-exact and the bed prices', () => {
  // F501's own face - the pair the boot conversation rides (both prints
  // one value - the census hand the pair agreement trusts)
  const f501 = [
    '[20:40:21] [Server thread/INFO]: Set the world spawn point to -130, 71, 398 [0.0, 0.0] in minecraft:overworld',
    '[20:40:31] [Server thread/INFO]: Set the world spawn point to -130, 71, 398 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnBedCensus(f501), { spawnY: 71 })
  // F506's own face - the leading-zero-hour wrap face the clock grammar
  // keeps (00:57:42 the second print the face's final bed)
  const f506 = [
    '[00:57:33] [Server thread/INFO]: Set the world spawn point to -130, 71, 404 [0.0, 0.0] in minecraft:overworld',
    '[00:57:42] [Server thread/INFO]: Set the world spawn point to -130, 71, 404 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnBedCensus(f506), { spawnY: 71 })
  // F514's own face - the W12 swing's own head (run 39382361698, the
  // .323 tree's own fleet) - the arc's own peak bed 81
  const f514 = [
    '[07:01:16] [Server thread/INFO]: Set the world spawn point to -120, 81, 401 [0.0, 0.0] in minecraft:overworld',
    '[07:01:26] [Server thread/INFO]: Set the world spawn point to -120, 81, 401 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnBedCensus(f514), { spawnY: 81 })
  // F515's own face - the newest face (run 39385906686, the .325
  // tree's own fleet) - the W13 swing's own tail
  const f515 = [
    '[07:38:05] [Server thread/INFO]: Set the world spawn point to -123, 70, 390 [0.0, 0.0] in minecraft:overworld',
    '[07:38:14] [Server thread/INFO]: Set the world spawn point to -123, 70, 390 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnBedCensus(f515), { spawnY: 70 })
  // the LAST-PRINT-WINS law - a re-anchor the face ends on the later
  // print (the .279 bootstrap targets word's own precedent holds)
  const relast = [
    '[02:00:01] [Server thread/INFO]: Set the world spawn point to -100, 70, 400 [0.0, 0.0] in minecraft:overworld',
    '[02:00:09] [Server thread/INFO]: Set the world spawn point to -123, 69, 396 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnBedCensus(relast), { spawnY: 69 })
  // the sibling lanes never ride - the setblock echo line the echo box
  // owns and the boot's own Done line the .294 word owns
  const siblings = [
    '[06:02:42] [Server thread/INFO]: Changed the block at -108, 73, 415',
    '[06:02:31] [Server thread/INFO]: Done (4.800s)! For help, type "help"',
    '[06:02:51] [Server thread/INFO]: Successfully filled 12 block(s)'
  ]
  assert.deepEqual(spawnBedCensus(siblings), { spawnY: 0 })
})

test('v0.976.327 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .304/.306
  // convention holds - the no-spawn face the zero keeps)
  assert.deepEqual(spawnBedCensus(['garbage', '', 'no spawn sets here']), { spawnY: 0 })
  // the non-array - the honest null
  assert.equal(spawnBedCensus(null), null)
  assert.equal(spawnBedCensus('lines'), null)
  assert.equal(spawnBedCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(spawnBedCensus([42, null, undefined, {}]), { spawnY: 0 })
})

test('v0.976.327 near-miss skins: nineteen forms the grammar refuses', () => {
  const good = '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld'
  const refuses = [
    // the bot-tagged prefix - the fleet log's own skin, the server
    // console never wears it
    '[Sys] [06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the WARN frame
    '[06:02:51] [Server thread/WARN]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the pretty spacing
    '[06:02:51] [Server thread/INFO]:  Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the plural body
    '[06:02:51] [Server thread/INFO]: Set the world spawn points to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the altered verb
    '[06:02:51] [Server thread/INFO]: Setting the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the missing coords
    '[06:02:51] [Server thread/INFO]: Set the world spawn point [0.0, 0.0] in minecraft:overworld',
    // the float coord
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132.0, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the leading-zero coord
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 068, 407 [0.0, 0.0] in minecraft:overworld',
    // the plus coord
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, +68, 407 [0.0, 0.0] in minecraft:overworld',
    // the integer angle
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0, 0] in minecraft:overworld',
    // the single angle
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0] in minecraft:overworld',
    // the missing dimension
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0]',
    // the bare dimension
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in overworld',
    // the leading whitespace
    ' [06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the trailing junk
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld extra',
    // the CR tail
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld\r',
    // the 1-digit hour clock
    '[6:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the overflow second clock
    '[06:02:60] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    // the dash-separator clock
    '[06-02-51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.equal(refuses.length, 19)
  // 06:02:51 the good line's own clock - the Y 68 the bed the good
  // line carries
  for (const skin of refuses) {
    assert.deepEqual(spawnBedCensus([skin]), { spawnY: 0 }, `refuses: ${skin}`)
    assert.deepEqual(spawnBedCensus([good, skin]), { spawnY: 68 }, `the good line still prices beside: ${skin}`)
  }
})

test('v0.976.327 fence: the integer coord domain the bounds keep', () => {
  // the REAL three-face window rides the fence
  assert.equal(spawnBedConsistent({ back: { spawnY: 71 }, prev: { spawnY: 72 }, cur: { spawnY: 72 } }), true)
  // the zero rides (the no-spawn face's lawful mass)
  assert.equal(spawnBedConsistent({ back: { spawnY: 0 }, prev: { spawnY: 72 }, cur: { spawnY: 72 } }), true)
  // the floats fall
  assert.equal(spawnBedConsistent({ back: { spawnY: 71.5 }, prev: { spawnY: 72 }, cur: { spawnY: 72 } }), false)
  // the strings fall
  assert.equal(spawnBedConsistent({ back: { spawnY: '71' }, prev: { spawnY: 72 }, cur: { spawnY: 72 } }), false)
  // the missing faces
  assert.equal(spawnBedConsistent(null), false)
  assert.equal(spawnBedConsistent({}), false)
  assert.equal(spawnBedConsistent({ back: { spawnY: 71 }, prev: { spawnY: 72 } }), false)
})

test('v0.976.327 rows: the REAL windows byte-exact - born speaking six deep seven held', () => {
  // W4 - F504 -> F505 -> F506: the swing up (the first speak)
  const w4 = spawnBedTrendRow({ back: { spawnY: 72 }, prev: { spawnY: 67 }, cur: { spawnY: 71 } })
  assert.ok(w4.includes("the world spawn's own bed swing - 72 -> 67 (-5) -> 71 (+4)"))
  // W9 - F509 -> F510 -> F511: the swing down
  const w9 = spawnBedTrendRow({ back: { spawnY: 69 }, prev: { spawnY: 74 }, cur: { spawnY: 70 } })
  assert.ok(w9.includes("the world spawn's own bed swing - 69 -> 74 (+5) -> 70 (-4)"))
  // W10 - F510 -> F511 -> F512: the swing up again
  const w10 = spawnBedTrendRow({ back: { spawnY: 74 }, prev: { spawnY: 70 }, cur: { spawnY: 72 } })
  assert.ok(w10.includes("the world spawn's own bed swing - 74 -> 70 (-4) -> 72 (+2)"))
  // W12 - F512 -> F513 -> F514: the swing up to the peak bed 81
  const w12 = spawnBedTrendRow({ back: { spawnY: 72 }, prev: { spawnY: 68 }, cur: { spawnY: 81 } })
  assert.ok(w12.includes("the world spawn's own bed swing - 72 -> 68 (-4) -> 81 (+13)"))
  // W13 - F513 -> F514 -> F515: the swing down from the peak
  const w13 = spawnBedTrendRow({ back: { spawnY: 68 }, prev: { spawnY: 81 }, cur: { spawnY: 70 } })
  assert.ok(w13.includes("the world spawn's own bed swing - 68 -> 81 (+13) -> 70 (-11)"))
  // the REAL held windows the lawful silence keeps - W1..W3, W5..W8
  // the faces held (the constructed trio the held law byte-matches
  // the REAL W2 shape: 72 -> 72 -> 72)
  assert.equal(spawnBedTrendRow({ back: { spawnY: 72 }, prev: { spawnY: 72 }, cur: { spawnY: 72 } }), null)
  assert.equal(spawnBedTrendRow({ back: { spawnY: 71 }, prev: { spawnY: 72 }, cur: { spawnY: 72 } }), null)
  assert.equal(spawnBedTrendRow({ back: { spawnY: 69 }, prev: { spawnY: 69 }, cur: { spawnY: 74 } }), null)
  // the tail co-existence rides every speaking row
  for (const w of [w4, w9, w10, w12, w13]) {
    assert.ok(w.includes("the spawn-set line's own X cell the .325 anchor word keeps and the Z cell the .326 south word keeps"))
    assert.ok(w.includes("the .317/.318 login Y pair keeps the login where's height seats"))
    assert.ok(w.includes("the .294 boot done word keeps the same boot conversation's own Done duration seat"))
    assert.ok(w.includes('the .314 login count word keeps the join mass'))
  }
})

test('v0.976.327 rows: the three-face zero and the fence fail and the missing faces', () => {
  // the three-face zero - the no-spawn mass the family keeps silent
  assert.equal(spawnBedTrendRow({ back: { spawnY: 0 }, prev: { spawnY: 0 }, cur: { spawnY: 0 } }), null)
  // the fence fail rides the row null
  assert.equal(spawnBedTrendRow({ back: { spawnY: 1.5 }, prev: { spawnY: 72 }, cur: { spawnY: 72 } }), null)
  assert.equal(spawnBedTrendRow({ back: { spawnY: 71 }, prev: { spawnY: '72' }, cur: { spawnY: 72 } }), null)
  // the missing faces
  assert.equal(spawnBedTrendRow(null), null)
})
