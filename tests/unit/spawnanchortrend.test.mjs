import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnAnchorCensus, spawnAnchorConsistent, spawnAnchorTrendRow } from '../../src/lib/spawnanchortrend.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot conversation spoke; the REAL twelve-face anchor arc
// the artifacts hold - the LAST print's X per face: F502 -127, F503
// -133, F504 -118, F505 -124, F506 -130, F507 -136, F508 -123, F509
// -122, F510 -119, F511 -133, F512 -135, F513 -132; the within-face
// pair the twelve faces byte-identical 12/12)

test('v0.976.325 census: the REAL lines byte-exact and the anchor prices', () => {
  // F502's own face - the pair the boot conversation rides (both prints
  // one value - the census hand the pair agreement trusts)
  const f502 = [
    '[21:40:44] [Server thread/INFO]: Set the world spawn point to -127, 72, 394 [0.0, 0.0] in minecraft:overworld',
    '[21:40:53] [Server thread/INFO]: Set the world spawn point to -127, 72, 394 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnAnchorCensus(f502), { spawnX: -127 })
  // F506's own face - the leading-zero-hour wrap face the clock grammar
  // keeps (00:57:42 the second print the face's final anchor)
  const f506 = [
    '[00:57:33] [Server thread/INFO]: Set the world spawn point to -130, 71, 404 [0.0, 0.0] in minecraft:overworld',
    '[00:57:42] [Server thread/INFO]: Set the world spawn point to -130, 71, 404 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnAnchorCensus(f506), { spawnX: -130 })
  // F513's own face - the newest face (run 39376695495, the .321 tree's
  // own fleet) - the W10 swing's own head
  const f513 = [
    '[06:02:42] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld',
    '[06:02:51] [Server thread/INFO]: Set the world spawn point to -132, 68, 407 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnAnchorCensus(f513), { spawnX: -132 })
  // the LAST-PRINT-WINS law - a re-anchor the face ends on the later
  // print (the .279 bootstrap targets word's own precedent holds)
  const relast = [
    '[02:00:01] [Server thread/INFO]: Set the world spawn point to -100, 70, 400 [0.0, 0.0] in minecraft:overworld',
    '[02:00:09] [Server thread/INFO]: Set the world spawn point to -123, 69, 396 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(spawnAnchorCensus(relast), { spawnX: -123 })
  // the sibling lanes never ride - the setblock echo line the echo box
  // owns and the boot's own Done line the .294 word owns
  const siblings = [
    '[06:02:42] [Server thread/INFO]: Changed the block at -108, 73, 415',
    '[06:02:31] [Server thread/INFO]: Done (4.800s)! For help, type "help"',
    '[06:02:51] [Server thread/INFO]: Successfully filled 12 block(s)'
  ]
  assert.deepEqual(spawnAnchorCensus(siblings), { spawnX: 0 })
})

test('v0.976.325 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .304/.306
  // convention holds - the no-spawn face the zero keeps)
  assert.deepEqual(spawnAnchorCensus(['garbage', '', 'no spawn sets here']), { spawnX: 0 })
  // the non-array - the honest null
  assert.equal(spawnAnchorCensus(null), null)
  assert.equal(spawnAnchorCensus('lines'), null)
  assert.equal(spawnAnchorCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(spawnAnchorCensus([42, null, undefined, {}]), { spawnX: 0 })
})

test('v0.976.325 near-miss skins: nineteen forms the grammar refuses', () => {
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
  // 06:02:51 the good line's own clock - the X -132 the seed the good
  // line carries
  for (const skin of refuses) {
    assert.deepEqual(spawnAnchorCensus([skin]), { spawnX: 0 }, `refuses: ${skin}`)
    assert.deepEqual(spawnAnchorCensus([good, skin]), { spawnX: -132 }, `the good line still prices beside: ${skin}`)
  }
})

test('v0.976.325 fence: the integer coord domain the bounds keep', () => {
  // the REAL three-face window rides the fence
  assert.equal(spawnAnchorConsistent({ back: { spawnX: -127 }, prev: { spawnX: -133 }, cur: { spawnX: -118 } }), true)
  // the zero rides (the no-spawn face's lawful mass)
  assert.equal(spawnAnchorConsistent({ back: { spawnX: 0 }, prev: { spawnX: -133 }, cur: { spawnX: -118 } }), true)
  // the floats fall
  assert.equal(spawnAnchorConsistent({ back: { spawnX: -127.5 }, prev: { spawnX: -133 }, cur: { spawnX: -118 } }), false)
  // the strings fall
  assert.equal(spawnAnchorConsistent({ back: { spawnX: '-127' }, prev: { spawnX: -133 }, cur: { spawnX: -118 } }), false)
  // the missing faces
  assert.equal(spawnAnchorConsistent(null), false)
  assert.equal(spawnAnchorConsistent({}), false)
  assert.equal(spawnAnchorConsistent({ back: { spawnX: -127 }, prev: { spawnX: -133 } }), false)
})

test('v0.976.325 rows: the REAL windows byte-exact - born speaking ten deep', () => {
  // W1 - F502 -> F503 -> F504: the swing the anchor trades east
  const w1 = spawnAnchorTrendRow({ back: { spawnX: -127 }, prev: { spawnX: -133 }, cur: { spawnX: -118 } })
  assert.ok(w1.includes('the world spawn\'s own anchor swing - -127 -> -133 (-6) -> -118 (+15)'))
  // W2 - F503 -> F504 -> F505: the swing back
  const w2 = spawnAnchorTrendRow({ back: { spawnX: -133 }, prev: { spawnX: -118 }, cur: { spawnX: -124 } })
  assert.ok(w2.includes('the world spawn\'s own anchor swing - -133 -> -118 (+15) -> -124 (-6)'))
  // W3 - F504 -> F505 -> F506: the fade west
  const w3 = spawnAnchorTrendRow({ back: { spawnX: -118 }, prev: { spawnX: -124 }, cur: { spawnX: -130 } })
  assert.ok(w3.includes('the world spawn\'s own anchor fade ran two steps deep - -118 -> -124 (-6) -> -130 (-6)'))
  // W6 - F507 -> F508 -> F509: the swell east
  const w6 = spawnAnchorTrendRow({ back: { spawnX: -136 }, prev: { spawnX: -123 }, cur: { spawnX: -122 } })
  assert.ok(w6.includes('the world spawn\'s own anchor swell ran two steps deep - -136 -> -123 (+13) -> -122 (+1)'))
  // W8 - F509 -> F510 -> F511: the swing west
  const w8 = spawnAnchorTrendRow({ back: { spawnX: -122 }, prev: { spawnX: -119 }, cur: { spawnX: -133 } })
  assert.ok(w8.includes('the world spawn\'s own anchor swing - -122 -> -119 (+3) -> -133 (-14)'))
  // W10 - F511 -> F512 -> F513: the swing home
  const w10 = spawnAnchorTrendRow({ back: { spawnX: -133 }, prev: { spawnX: -135 }, cur: { spawnX: -132 } })
  assert.ok(w10.includes('the world spawn\'s own anchor swing - -133 -> -135 (-2) -> -132 (+3)'))
  // a held step prices no direction - the honest silence (the REAL arc
  // never held - the constructed pair the held law still keeps)
  assert.equal(spawnAnchorTrendRow({ back: { spawnX: -132 }, prev: { spawnX: -132 }, cur: { spawnX: -118 } }), null)
  assert.equal(spawnAnchorTrendRow({ back: { spawnX: -133 }, prev: { spawnX: -135 }, cur: { spawnX: -135 } }), null)
  // the tail co-existence rides every speaking row
  for (const w of [w1, w2, w3, w6, w8, w10]) {
    assert.ok(w.includes("the spawn-set line's own Y cell and Z cell and clock cell and angle pair and dimension cell the shape-only lanes"))
    assert.ok(w.includes("the .309 echo west word keeps the setblock echo's own X-min seat"))
    assert.ok(w.includes('the .323 login firstborn word keeps the login line\'s entity id cell MIN seat'))
    assert.ok(w.includes("the .294 boot done word keeps the same boot conversation's own Done duration seat"))
    assert.ok(w.includes('the .314 login count word keeps the join mass'))
  }
})

test('v0.976.325 rows: the three-face zero and the fence fail and the missing faces', () => {
  // the three-face zero - the no-spawn mass the family keeps silent
  assert.equal(spawnAnchorTrendRow({ back: { spawnX: 0 }, prev: { spawnX: 0 }, cur: { spawnX: 0 } }), null)
  // the fence fail rides the row null
  assert.equal(spawnAnchorTrendRow({ back: { spawnX: -1.5 }, prev: { spawnX: -133 }, cur: { spawnX: -118 } }), null)
  assert.equal(spawnAnchorTrendRow({ back: { spawnX: -127 }, prev: { spawnX: '-133' }, cur: { spawnX: -118 } }), null)
  // the missing faces
  assert.equal(spawnAnchorTrendRow(null), null)
})
