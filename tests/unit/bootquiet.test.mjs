import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bootQuietCensus, bootQuietConsistent, bootQuietTrendRow } from '../../src/lib/bootquiet.mjs'

// the REAL faces the artifacts hold (the byte-exact boot conversation
// and loss lane the vanilla server voiced; the open stamps the .332
// word's arc prices, the dawn stamps the .334 word's arc prices -
// the name cells and the version cell ride shape only the .332/.334
// convention keeps, the clock cells the byte-verified stamps ride).
// the REAL twenty-one-face quiet arc the two edge arcs derive -
// dawn - open, seconds: F501 29, F502 29, F503 28, F504 30, F505 25,
// F506 25, F507 23, F508 28, F509 25, F510 30, F511 25, F512 26,
// F513 28, F514 32, F515 31, F516 29, F517 29, F518 26, F519 25,
// F520 23, F521 24 - the honest band 23..32

const REAL = {
  // F501's own face - the churn law's own proof face: the open
  // 20:40:05 = 74405, the dawn 20:40:34 = 74434 - the quiet 29 (the
  // mid-run churn losses the F1 20:45:17 drop and the terminal burst
  // ride AFTER the dawn the census never moves)
  f501: ['[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[20:40:06] [Server thread/INFO]: Selecting global world spawn...',
    '[20:40:10] [Server thread/INFO]: Done (4.601s)! For help, type "help"',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:45:17] [Server thread/INFO]: F1 lost connection: Disconnected',
    '[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected'],
  f505: ['[23:43:54] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[23:44:19] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  f506: ['[00:57:20] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[00:57:45] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  f508: ['[02:14:15] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[02:14:43] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  f521: ['[13:32:30] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[13:32:54] [Server thread/INFO]: YardSurvey lost connection: Disconnected']
}

test('v0.976.337 census: the REAL faces byte-exact and the quiet prices', () => {
  // F501's own face - the conversation's own opening second to the
  // loss lane's own opening breath: 74434 - 74405 = 29
  assert.deepEqual(bootQuietCensus(REAL.f501), { bootQuietSec: 29 })
  // F505's own face - the .334 wrap face's own pre-midnight quiet:
  // 85459 - 85434 = 25 (the boot and the dawn the same day the
  // FOLLOWS-OPENING ordering keeps - the wrap never rides here)
  assert.deepEqual(bootQuietCensus(REAL.f505), { bootQuietSec: 25 })
  // F506's own face - the leading-zero-hour faces the clock grammar keeps
  assert.deepEqual(bootQuietCensus(REAL.f506), { bootQuietSec: 25 })
  // F508's own face - the band's own shapes the arc keeps
  assert.deepEqual(bootQuietCensus(REAL.f508), { bootQuietSec: 28 })
  // the fresh extension face - the fire-2133 harvest's own face
  assert.deepEqual(bootQuietCensus(REAL.f521), { bootQuietSec: 24 })
  // the wrap degenerate - the day the face crosses between the edges
  // the arithmetic keeps (never observed in the faces - the
  // FOLLOWS-OPENING ordering keeps the boot and the dawn the same
  // day - the honest degenerate the census keeps: open 86390, dawn
  // 20 -> 20 + 86400 - 86390 = 30)
  assert.deepEqual(bootQuietCensus(['[23:59:50] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[00:00:20] [Server thread/INFO]: YardSurvey lost connection: Disconnected']), { bootQuietSec: 30 })
  // the partial phase's own zero - the face missing either edge
  // prices the quiet zero honest (the phase never half-read)
  assert.deepEqual(bootQuietCensus(['[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2']), { bootQuietSec: 0 })
  assert.deepEqual(bootQuietCensus(['[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected']), { bootQuietSec: 0 })
  assert.deepEqual(bootQuietCensus(['[20:40:10] [Server thread/INFO]: Done (4.601s)! For help, type "help"']), { bootQuietSec: 0 })
  // the sibling lanes never ride - the login conversation's own lines
  // the .321/.322/.314 words keep, this word silent on
  const siblings = [
    '[13:32:52] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)',
    '[13:32:54] [Server thread/INFO]: YardSurvey joined the game',
    '[13:45:48] [Server thread/INFO]: F18 left the game'
  ]
  assert.deepEqual(bootQuietCensus(siblings), { bootQuietSec: 0 })
})

test('v0.976.337 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(bootQuietCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { bootQuietSec: 0 })
  assert.equal(bootQuietCensus(null), null)
  assert.equal(bootQuietCensus(undefined), null)
  assert.equal(bootQuietCensus(42), null)
  assert.deepEqual(bootQuietCensus([42, null, ...REAL.f501]), { bootQuietSec: 29 })
})

test('v0.976.337 grammar: the near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(bootQuietCensus([s]), { bootQuietSec: 0 })
  // the open lane's near-miss skins (the .332 emitter's own refusals)
  refuse('[20:40:05] [Server thread/WARN]: Starting minecraft server version 26.2')
  refuse('[20:40:05] [Server thread/INFO]: Starting minecraft server version 26')
  refuse('[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2.')
  refuse('[20:40:05] [Server thread/INFO]: Starting  minecraft server version 26.2')
  refuse('[20:40:05] [Server thread/INFO]: starting minecraft server version 26.2')
  // the dawn lane's near-miss skins (the .334 emitter's own refusals)
  refuse('[20:40:34] [Server thread/WARN]: YardSurvey lost connection: Disconnected')
  refuse('[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Kicked')
  refuse('[20:40:34] [Server thread/INFO]: YardSurvey lost connections: Disconnected')
  refuse('[20:40:34] [Server thread/INFO]: YardSurvey lost connection')
  refuse('[20:40:34] [Server thread/INFO]: YardSurvey left the game')
  // the clock skins both lanes refuse
  refuse('[20:40:5] [Server thread/INFO]: Starting minecraft server version 26.2')
  refuse('[20:40:60] [Server thread/INFO]: YardSurvey lost connection: Disconnected')
})

test('v0.976.337 fence: every branch keeps', () => {
  const ok = (b, p, c) => bootQuietConsistent({ back: { bootQuietSec: b }, prev: { bootQuietSec: p }, cur: { bootQuietSec: c } })
  assert.equal(ok(0, 100, 86399), true)
  assert.equal(ok(29, 28, 30), true)
  assert.equal(ok(0, 0, 0), true)
  assert.equal(ok(86399.5, 100, 100), false)
  assert.equal(ok(-1, 100, 100), false)
  assert.equal(ok(86400, 100, 100), false)
  assert.equal(ok('x', 100, 100), false)
  assert.equal(bootQuietConsistent({ back: { bootQuietSec: 1 }, prev: { bootQuietSec: 2 } }), false)
  assert.equal(bootQuietConsistent(null), false)
  assert.equal(bootQuietConsistent(42), false)
})

test('v0.976.337 trend: the REAL twenty-one-face quiet arc re-voiced byte-exact', () => {
  // the REAL quiet arc the two byte-verified edge arcs derive
  // (F501-F521, dawn - open, seconds)
  const ARC = [29, 29, 28, 30, 25, 25, 23, 28, 25, 30, 25, 26, 28, 32, 31, 29, 29, 26, 25, 23, 24]
  const SPEAKS = [
    [1, '29 -> 28 (-1) -> 30 (+2)', 'swing'],
    [2, '28 -> 30 (+2) -> 25 (-5)', 'swing'],
    [5, '25 -> 23 (-2) -> 28 (+5)', 'swing'],
    [6, '23 -> 28 (+5) -> 25 (-3)', 'swing'],
    [7, '28 -> 25 (-3) -> 30 (+5)', 'swing'],
    [8, '25 -> 30 (+5) -> 25 (-5)', 'swing'],
    [9, '30 -> 25 (-5) -> 26 (+1)', 'swing'],
    [10, '25 -> 26 (+1) -> 28 (+2)', 'swell'],
    [11, '26 -> 28 (+2) -> 32 (+4)', 'swell'],
    [12, '28 -> 32 (+4) -> 31 (-1)', 'swing'],
    [13, '32 -> 31 (-1) -> 29 (-2)', 'fade'],
    [16, '29 -> 26 (-3) -> 25 (-1)', 'fade'],
    [17, '26 -> 25 (-1) -> 23 (-2)', 'fade'],
    [18, '25 -> 23 (-2) -> 24 (+1)', 'swing']
  ]
  const HELDS = [0, 3, 4, 14, 15] // W1/W4/W5/W15/W16 - the honest silences
  for (const [idx, arc, shape] of SPEAKS) {
    const row = bootQuietTrendRow({ back: { bootQuietSec: ARC[idx] }, prev: { bootQuietSec: ARC[idx + 1] }, cur: { bootQuietSec: ARC[idx + 2] } })
    assert.notEqual(row, null, `window ${idx + 1} held - the arc speaks`)
    assert.ok(row.includes(arc), `window ${idx + 1} arc byte-exact: ${row}`)
    assert.ok(row.includes(shape), `window ${idx + 1} the ${shape} shape`)
  }
  for (const idx of HELDS) {
    const row = bootQuietTrendRow({ back: { bootQuietSec: ARC[idx] }, prev: { bootQuietSec: ARC[idx + 1] }, cur: { bootQuietSec: ARC[idx + 2] } })
    assert.equal(row, null, `window ${idx + 1} the held silence`)
  }
  // the three-face zero - the lawful silence
  assert.equal(bootQuietTrendRow({ back: { bootQuietSec: 0 }, prev: { bootQuietSec: 0 }, cur: { bootQuietSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = bootQuietTrendRow({ back: { bootQuietSec: 29 }, prev: { bootQuietSec: 28 }, cur: { bootQuietSec: 30 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.332 boot open clock word'), 'the open input seat named')
  assert.ok(tail.includes('.334 fleet loss dawn word'), 'the dawn input seat named')
  assert.ok(tail.includes('.333 closing clock word'), 'the dusk edge named')
  assert.ok(tail.includes('.335 loss width word'), 'the inner span sibling named')
  assert.ok(tail.includes('FOLLOWS-OPENING'), 'the ordering gate named')
  assert.ok(tail.includes('.314 headcount'), 'the login family named')
  assert.ok(tail.includes('v0.976.337'), 'the version rides')
})
