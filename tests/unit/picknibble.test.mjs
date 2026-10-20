import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pickNibbleCensus, pickNibbleConsistent, pickNibbleTrendRow } from '../../src/lib/picknibble.mjs'

// the REAL faces the artifacts hold (the byte-exact boot conversation
// the vanilla server voiced; the open stamps the .332 word's arc
// prices, the select stamps the .331 word's arc prices - the version
// cell rides shape only the .332 convention keeps, the clock cells
// the byte-verified stamps ride).
// the REAL twenty-eight-face nibble arc mined from the fresh
// artifacts (F501-F528, selection - announcement, seconds):
// F501 1, F502 1, F503 1, F504 1, F505 1, F506 1, F507 0, F508 1,
// F509 1, F510 1, F511 1, F512 1, F513 0, F514 1, F515 1, F516 1,
// F517 0, F518 0, F519 1, F520 1, F521 0, F522 1, F523 1, F524 0,
// F525 1, F526 1, F527 1, F528 1 - the honest two-value record
// (twenty-two ones, six zeros, no third value the faces ever voiced)

const REAL = {
  // F501's own face - the fresh pick's own breath: the open
  // 20:40:05 = 74405, the select 20:40:06 = 74406 - the nibble one
  // (the selection lands one second after the announcement)
  f501: ['[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[20:40:06] [Server thread/INFO]: Selecting global world spawn...',
    '[20:40:10] [Server thread/INFO]: Done (4.601s)! For help, type "help"',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  // F507's own face - the burst-swallowed pick: the open 01:44:13 =
  // 6253, the select 01:44:13 = 6253 - the nibble zero (the
  // selection rides the announcement's own second - the same-second
  // identity the OPENING BURST law keeps)
  f507: ['[01:44:13] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[01:44:13] [Server thread/INFO]: Selecting global world spawn...',
    '[01:44:18] [Server thread/INFO]: Done (4.488s)! For help, type "help"'],
  // F524's own face - the .340 word's own proof face: the open
  // 16:21:58 = 58918, the select 16:21:58 = 58918 - the nibble zero
  // (the reach 30 the quiet's own span byte-equal the NIBBLE LAW's
  // own face keeps: quiet 30 - nibble 0 == reach 30)
  f524: ['[16:21:58] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[16:21:58] [Server thread/INFO]: Selecting global world spawn...',
    '[16:22:03] [Server thread/INFO]: Done (4.808s)! For help, type "help"',
    '[16:22:28] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  // F527's own face - the ride-and-quiet words' first fleet face the
  // fire-0243 deep-read paid: the open 18:49:31 = 67771, the select
  // 18:49:32 = 67772 - the nibble one
  f527: ['[18:49:31] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[18:49:32] [Server thread/INFO]: Selecting global world spawn...',
    '[18:49:37] [Server thread/INFO]: Done (5.491s)! For help, type "help"',
    '[18:49:41] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  // F528's own face - the fire-0243 ledger's own next-fire debt this
  // round pays: the face's own FIRST READ (the open 19:27:12 =
  // 70032, the select 19:27:13 = 70033 - the nibble one; the shape
  // word's first fleet face the identity keeps: quiet 26 - nibble 1
  // == reach 25)
  f528: ['[19:27:12] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[19:27:13] [Server thread/INFO]: Selecting global world spawn...',
    '[19:27:16] [Server thread/INFO]: Time elapsed: 3627 ms',
    '[19:27:16] [Server thread/INFO]: Done (3.809s)! For help, type "help"',
    '[19:27:38] [Server thread/INFO]: YardSurvey lost connection: Disconnected']
}

test('v0.976.342 census: the REAL faces byte-exact and the nibble prices', () => {
  // F501's own face - the announcement to the selection: 74406 - 74405 = 1
  assert.deepEqual(pickNibbleCensus(REAL.f501), { pickNibbleSec: 1 })
  // F507's own face - the burst-swallowed pick: 6253 - 6253 = 0 (the
  // selection rides the announcement's own second)
  assert.deepEqual(pickNibbleCensus(REAL.f507), { pickNibbleSec: 0 })
  // F524's own face - the .340 word's own proof face: 58918 - 58918 = 0
  assert.deepEqual(pickNibbleCensus(REAL.f524), { pickNibbleSec: 0 })
  // F527's own face - the ride-and-quiet words' first fleet face:
  // 67772 - 67771 = 1
  assert.deepEqual(pickNibbleCensus(REAL.f527), { pickNibbleSec: 1 })
  // F528's own face - the fresh face this round's deep-read pays:
  // 70033 - 70032 = 1
  assert.deepEqual(pickNibbleCensus(REAL.f528), { pickNibbleSec: 1 })
  // the wrap degenerate - the day the face crosses between the edges
  // the arithmetic keeps (never observed in the faces - the
  // OPENING-PRECEDES ordering keeps the announcement and the
  // selection the same day - the honest degenerate the census keeps:
  // open 86390, select 20 -> 20 + 86400 - 86390 = 30)
  assert.deepEqual(pickNibbleCensus(['[23:59:50] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[00:00:20] [Server thread/INFO]: Selecting global world spawn...']), { pickNibbleSec: 30 })
  // the partial phase's own zero - the face missing either edge
  // prices the nibble zero honest (the phase never half-read)
  assert.deepEqual(pickNibbleCensus(['[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2']), { pickNibbleSec: 0 })
  assert.deepEqual(pickNibbleCensus(['[20:40:06] [Server thread/INFO]: Selecting global world spawn...']), { pickNibbleSec: 0 })
  assert.deepEqual(pickNibbleCensus(['[20:40:10] [Server thread/INFO]: Done (4.601s)! For help, type "help"']), { pickNibbleSec: 0 })
  // the sibling lanes never ride - the loss lane's and the login
  // conversation's own lines the .334/.321 words keep, this word
  // silent on (the boot conversation's own two lines the ONLY inputs)
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[13:32:52] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)',
    '[13:32:54] [Server thread/INFO]: YardSurvey joined the game',
    '[13:45:48] [Server thread/INFO]: F18 left the game',
    '[19:27:26] [Server thread/INFO]: Set the world spawn point to -128, 73, 398 [0.0, 0.0] in minecraft:overworld'
  ]
  assert.deepEqual(pickNibbleCensus(siblings), { pickNibbleSec: 0 })
})

test('v0.976.342 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(pickNibbleCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { pickNibbleSec: 0 })
  assert.equal(pickNibbleCensus(null), null)
  assert.equal(pickNibbleCensus(undefined), null)
  assert.equal(pickNibbleCensus(42), null)
  assert.deepEqual(pickNibbleCensus([42, null, ...REAL.f501]), { pickNibbleSec: 1 })
  // the LAST print both hands keep - the re-boot face the newest
  // boot's own pair the .332/.331 hands' own law rides (the
  // LAST-PRINT-WINS mirror side the two-boot face keeps)
  assert.deepEqual(pickNibbleCensus(['[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[20:40:06] [Server thread/INFO]: Selecting global world spawn...',
    '[21:00:00] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[21:00:01] [Server thread/INFO]: Selecting global world spawn...']), { pickNibbleSec: 1 })
})

test('v0.976.342 grammar: the near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(pickNibbleCensus([s, ...REAL.f507]), { pickNibbleSec: 0 })
  // the open lane's near-miss skins (the .332 emitter's own refusals)
  refuse('[20:40:05] [Server thread/WARN]: Starting minecraft server version 26.2')
  refuse('[20:40:05] [Server thread/INFO]: Starting minecraft server version 26')
  refuse('[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2.1')
  refuse('[20:40:05] [Server thread/INFO]: Starting minecraft server  version 26.2')
  refuse('[20:40:05] [Server thread/INFO]: starting minecraft server version 26.2')
  refuse('[20:40:05] [Server thread/INFO]: Starting minecraft server version')
  // the select lane's near-miss skins (the .331 emitter's own refusals)
  refuse('[20:40:06] [Server thread/WARN]: Selecting global world spawn...')
  refuse('[20:40:06] [Server thread/INFO]: Selecting global world spawn')
  refuse('[20:40:06] [Server thread/INFO]: Selecting global world spawn.')
  refuse('[20:40:06] [Server thread/INFO]: Selecting  global world spawn...')
  refuse('[20:40:06] [Server thread/INFO]: selecting global world spawn...')
  refuse('[20:40:06] [Server thread/INFO]: Selecting global world spawn... (26.2)')
  // the clock skins both lanes refuse
  refuse('[20:40:5] [Server thread/INFO]: Starting minecraft server version 26.2')
  refuse('[20:40:60] [Server thread/INFO]: Selecting global world spawn...')
})

test('v0.976.342 fence: every branch keeps', () => {
  const ok = (b, p, c) => pickNibbleConsistent({ back: { pickNibbleSec: b }, prev: { pickNibbleSec: p }, cur: { pickNibbleSec: c } })
  assert.equal(ok(0, 1, 86399), true)
  assert.equal(ok(1, 0, 1), true)
  assert.equal(ok(0, 0, 0), true)
  assert.equal(ok(86399.5, 1, 1), false)
  assert.equal(ok(-1, 1, 1), false)
  assert.equal(ok(86400, 1, 1), false)
  assert.equal(ok('x', 1, 1), false)
  assert.equal(pickNibbleConsistent({ back: { pickNibbleSec: 1 }, prev: { pickNibbleSec: 0 } }), false)
  assert.equal(pickNibbleConsistent(null), false)
  assert.equal(pickNibbleConsistent(42), false)
})

test('v0.976.342 trend: the REAL twenty-eight-face nibble arc re-voiced byte-exact', () => {
  // the REAL nibble arc the two byte-verified edge arcs derive
  // (F501-F528, selection - announcement, seconds)
  const ARC = [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]
  // the four speaks - the 1 -> 0 -> 1 alternations the burst's own
  // heartbeat keeps (W6, W12, W20, W23 - all swings, the two-value
  // cell's own honest trade)
  const SPEAKS = [
    [5, '1 -> 0 (-1) -> 1 (+1)'],
    [11, '1 -> 0 (-1) -> 1 (+1)'],
    [19, '1 -> 0 (-1) -> 1 (+1)'],
    [22, '1 -> 0 (-1) -> 1 (+1)']
  ]
  const HELDS = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25]
  for (const [idx, arc] of SPEAKS) {
    const row = pickNibbleTrendRow({ back: { pickNibbleSec: ARC[idx] }, prev: { pickNibbleSec: ARC[idx + 1] }, cur: { pickNibbleSec: ARC[idx + 2] } })
    assert.notEqual(row, null, `window ${idx + 1} held - the arc speaks`)
    assert.ok(row.includes(arc), `window ${idx + 1} arc byte-exact: ${row}`)
    assert.ok(row.includes('swing'), `window ${idx + 1} the swing shape - the alternation the only speaks the two-value cell keeps`)
  }
  for (const idx of HELDS) {
    const row = pickNibbleTrendRow({ back: { pickNibbleSec: ARC[idx] }, prev: { pickNibbleSec: ARC[idx + 1] }, cur: { pickNibbleSec: ARC[idx + 2] } })
    assert.equal(row, null, `window ${idx + 1} the held silence`)
  }
  // the three-face zero - the lawful silence
  assert.equal(pickNibbleTrendRow({ back: { pickNibbleSec: 0 }, prev: { pickNibbleSec: 0 }, cur: { pickNibbleSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = pickNibbleTrendRow({ back: { pickNibbleSec: 1 }, prev: { pickNibbleSec: 0 }, cur: { pickNibbleSec: 1 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.332 boot open clock word'), 'the open input seat named')
  assert.ok(tail.includes('.331 spawn selection clock word'), 'the select input seat named')
  assert.ok(tail.includes('.340 pick reach word'), 'the reach span sibling named')
  assert.ok(tail.includes('NIBBLE LAW'), 'the nibble law named')
  assert.ok(tail.includes('.337 boot quiet word'), 'the outer span sibling named')
  assert.ok(tail.includes('.333 closing clock word'), 'the dusk edge named')
  assert.ok(tail.includes('.335 loss width word'), 'the inner span sibling named')
  assert.ok(tail.includes('.338 fleet ride word'), 'the ride span named')
  assert.ok(tail.includes('.339 loss width shape word'), 'the shape classifier named')
  assert.ok(tail.includes('.341 save trio clock word'), 'the save trio sibling named')
  assert.ok(tail.includes('.314 headcount'), 'the login family named')
  assert.ok(tail.includes('v0.976.342'), 'the version rides')
})
