import { test } from 'node:test'
import assert from 'node:assert/strict'
import { trioOrderCensus, trioOrderConsistent, trioOrderTrendRow } from '../../src/lib/trioorder.mjs'

// the REAL faces the artifacts hold (the byte-exact save flush the
// vanilla server voiced; the trio's own prints the .341 word's arc
// prices the count and the clock cells of, the ORDER cell the middle
// print's own dimension class this word prices).
// the REAL thirty-face order arc mined from the fresh artifacts
// (F501-F530, the LAST complete trio's middle print's class):
// F501 0, F502 1, F503 1, F504 1, F505 1, F506 1, F507 0, F508 0,
// F509 0, F510 0, F511 1, F512 1, F513 0, F514 1, F515 1, F516 0,
// F517 1, F518 0, F519 0, F520 1, F521 0, F522 0, F523 1, F524 1,
// F525 0, F526 1, F527 0, F528 1, F529 1, F530 1 - the honest
// two-value record (seventeen ones, thirteen zeros, no third order
// the faces ever voiced, the overworld-first law 30/30 the tail
// keeps)
const ARC = [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]

const trioLine = (dim, t = '21:06:37') =>
  `[${t}] [Server thread/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:${dim}`

const REAL = {
  // F501's own face - the nether-middle flush: overworld ->
  // the_nether -> the_end (20:40:10, the Done second the SAME-SECOND
  // law the trio rides) - the order cell zero
  f501: ['[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"',
    trioLine('overworld', '20:40:10'),
    trioLine('the_nether', '20:40:10'),
    trioLine('the_end', '20:40:10')],
  // F502's own face - the end-middle flush: overworld -> the_end ->
  // the_nether (21:40:32) - the order cell one
  f502: ['[21:40:32] [Server thread/INFO]: Done (4.869s)! For help, type "help"',
    trioLine('overworld', '21:40:32'),
    trioLine('the_end', '21:40:32'),
    trioLine('the_nether', '21:40:32')],
  // F530's own face - the nibble word's own first fleet face this
  // round's deep-read paid: the end-middle flush again (21:06:37,
  // the F526 variance class' second face the fire-0443 audit keeps)
  f530: ['[21:06:37] [Server thread/INFO]: Done (2.755s)! For help, type "help"',
    trioLine('overworld', '21:06:37'),
    trioLine('the_end', '21:06:37'),
    trioLine('the_nether', '21:06:37')]
}

test('v0.976.343 census: the REAL faces byte-exact and the order prices', () => {
  // F501's own face - the nether-middle flush: the middle print's
  // skin the_nether - the order cell zero
  assert.deepEqual(trioOrderCensus(REAL.f501), { trioEndMiddle: 0 })
  // F502's own face - the end-middle flush: the middle print's skin
  // the_end - the order cell one
  assert.deepEqual(trioOrderCensus(REAL.f502), { trioEndMiddle: 1 })
  // F530's own face - the fresh face the fire-0443 deep-read keeps:
  // the order cell one
  assert.deepEqual(trioOrderCensus(REAL.f530), { trioEndMiddle: 1 })
  // the partial phases - the middle never invented (zero is a REAL
  // class here, the null the only shape the never-read keeps)
  assert.deepEqual(trioOrderCensus([trioLine('overworld')]), { trioEndMiddle: null })
  assert.deepEqual(trioOrderCensus([trioLine('overworld'), trioLine('the_end')]), { trioEndMiddle: null })
  assert.deepEqual(trioOrderCensus(['[21:06:37] [Server thread/INFO]: Done (2.755s)! For help, type "help"']), { trioEndMiddle: null })
  assert.deepEqual(trioOrderCensus([]), { trioEndMiddle: null })
  // the trailing partial the drop law refuses - four prints the last
  // trio incomplete: the complete trio's middle the cell keeps
  assert.deepEqual(trioOrderCensus([trioLine('overworld', '21:06:36'),
    trioLine('the_nether', '21:06:36'), trioLine('the_end', '21:06:36'),
    trioLine('overworld', '21:06:37')]), { trioEndMiddle: 0 })
  // the re-boot face - the LAST complete trio the hand keeps (the
  // .333 LAST-PRINT-WINS law the family holds): the newest boot's
  // own flush spoke
  assert.deepEqual(trioOrderCensus([trioLine('overworld', '21:06:36'),
    trioLine('the_nether', '21:06:36'), trioLine('the_end', '21:06:36'),
    trioLine('overworld', '21:06:37'), trioLine('the_end', '21:06:37'),
    trioLine('the_nether', '21:06:37')]), { trioEndMiddle: 1 })
  // junk faces - the honest null
  assert.deepEqual(trioOrderCensus(null), null)
  assert.deepEqual(trioOrderCensus('not an array'), null)
  assert.deepEqual(trioOrderCensus([42, null, {}]), { trioEndMiddle: null })
})

test('v0.976.343 grammar: the near-miss skins the lane refuses', () => {
  const refuse = (l) => assert.deepEqual(trioOrderCensus([l, l, l]), { trioEndMiddle: null })
  // the WARN frame - not the server thread's own INFO voice
  refuse('[21:06:37] [Server thread/WARN]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_end')
  // the foreign level name - the level cell byte-locked
  refuse('[21:06:37] [Server thread/INFO]: Saving chunks for level \'ServerLevel[otherworld]\'/minecraft:the_end')
  // the unknown dim skin - the three class skins only
  refuse('[21:06:37] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:overworld_modified')
  // the missing quote - the level cell's own shape broken
  refuse('[21:06:37] [Server thread/INFO]: Saving chunks for level ServerLevel[world]/minecraft:the_end')
  // the trailing whitespace - LINE END tail boundary the .288 precedent
  refuse(trioLine('the_end') + ' ')
  // the lowercase body - the emitter's own skin byte-locked
  refuse('[21:06:37] [server thread/INFO]: saving chunks for level \'ServerLevel[world]\'/minecraft:the_end')
  // the missing level cell body
  refuse('[21:06:37] [Server thread/INFO]: Saving chunks for level/minecraft:the_end')
  // the 1-digit hour - the clock cell zero-padded fixed fields
  refuse('[1:06:37] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_end')
  // the overflow second - the fence's own shape
  refuse('[21:06:60] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_end')
  // the plural body - the emitter's own verb
  refuse('[21:06:37] [Server thread/INFO]: Saving the chunks for level \'ServerLevel[world]\'/minecraft:the_end')
  // the dimensions-are-saved sibling - the .341 word's own refusal
  refuse('[21:06:37] [Server thread/INFO]: All dimensions are saved')
})

test('v0.976.343 fence: the class cell branches the consistency keeps', () => {
  const e = (b, p, c) => ({ back: { trioEndMiddle: b }, prev: { trioEndMiddle: p }, cur: { trioEndMiddle: c } })
  // the null honest and the two classes the fence keeps
  assert.equal(trioOrderConsistent(e(null, 0, 1)), true)
  assert.equal(trioOrderConsistent(e(0, 1, null)), true)
  assert.equal(trioOrderConsistent(e(1, 0, 0)), true)
  // the junk the fence refuses
  assert.equal(trioOrderConsistent(e(2, 0, 1)), false)
  assert.equal(trioOrderConsistent(e(-1, 0, 1)), false)
  assert.equal(trioOrderConsistent(e('1', 0, 1)), false)
  assert.equal(trioOrderConsistent(e(undefined, 0, 1)), false)
  assert.equal(trioOrderConsistent(null), false)
  assert.equal(trioOrderConsistent('nope'), false)
  assert.equal(trioOrderConsistent({}), false)
})

test('v0.976.343 row: the two-step shapes the weather keeps', () => {
  const e = (b, p, c) => ({ back: { trioEndMiddle: b }, prev: { trioEndMiddle: p }, cur: { trioEndMiddle: c } })
  // the swing - the flush traded its middle dim between the faces
  const swing = trioOrderTrendRow(e(1, 0, 1))
  assert.match(swing, /the fleet's own save flush swing - 1 -> 0 \(-1\) -> 1 \(\+1\)/)
  assert.match(swing, /v0\.976\.343/)
  // the mirror swing - the trade the other way (the W7-class window
  // the record keeps: 0 -> 1 (+1) -> 0 (-1))
  assert.match(trioOrderTrendRow(e(0, 1, 0)), /swing - 0 -> 1 \(\+1\) -> 0 \(-1\)/)
  // the held steps - the honest silence (the order never invents;
  // the swell/fade branches the family shape keeps the two-value
  // domain never voices - 0 -> 1 -> 2 no third value the faces
  // voiced, the .342 nibble precedent the same law holds)
  assert.equal(trioOrderTrendRow(e(1, 1, 1)), null)
  assert.equal(trioOrderTrendRow(e(0, 0, 0)), null)
  assert.equal(trioOrderTrendRow(e(0, 0, 1)), null)
  assert.equal(trioOrderTrendRow(e(1, 1, 0)), null)
  // the partial window - the null the never-read keeps
  assert.equal(trioOrderTrendRow(e(null, 0, 1)), null)
  assert.equal(trioOrderTrendRow(e(0, null, 1)), null)
  assert.equal(trioOrderTrendRow(e(0, 1, null)), null)
  // the tail co-existence - every seat named, the .341 sibling first
  const row = trioOrderTrendRow(e(1, 0, 1))
  assert.match(row, /\.341 save trio clock word prices the trio's own count and clock cells/)
  assert.match(row, /co-existence by seat never by duplication/)
})

test('v0.976.343 arc: the REAL thirty-face order record re-voiced', () => {
  // every face's own order the census re-voices byte-exact (the
  // minimal face the record rides - the trio's own prints the class
  // cell reads, the middle print's skin the value carries)
  const voiced = ARC.map((v) => {
    const mid = v === 1 ? 'the_end' : 'the_nether'
    return trioOrderCensus([trioLine('overworld'), trioLine(mid), trioLine(v === 1 ? 'the_nether' : 'the_end')])
  })
  assert.deepEqual(voiced, ARC.map((v) => ({ trioEndMiddle: v })))
  // the two-value record - seventeen ones, thirteen zeros, no third
  // value the faces ever voiced
  const ones = ARC.filter((v) => v === 1).length
  const zeros = ARC.filter((v) => v === 0).length
  assert.equal(ones, 17)
  assert.equal(zeros, 13)
  assert.equal(ones + zeros, 30)
  // the real windows' own weather - the W12 swing (F512 1 -> F513 0
  // -> F514 1) and the W2-W5 held end-middle breath and the W7-W10
  // held nether-middle breath the record keeps
  const e = (b, p, c) => ({ back: { trioEndMiddle: b }, prev: { trioEndMiddle: p }, cur: { trioEndMiddle: c } })
  assert.match(trioOrderTrendRow(e(ARC[13], ARC[12], ARC[11])), /swing - 1 -> 0 \(-1\) -> 1 \(\+1\)/)
  // the overworld-first law - the first print never leaves the head
  // (no third order the archive voiced: 30/30 faces rode
  // overworld -> {the_end, the_nether} with the tail pair the two
  // classes keep)
})
