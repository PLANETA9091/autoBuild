import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pickReachCensus, pickReachConsistent, pickReachTrendRow } from '../../src/lib/pickreach.mjs'

// the REAL faces the artifacts hold (the byte-exact boot conversation
// and loss lane the vanilla server voiced; the select stamps the .331
// word's arc prices, the dawn stamps the .334 word's arc prices -
// the name cells and the class skins ride shape only the .331/.334
// convention keeps, the clock cells the byte-verified stamps ride).
// the REAL twenty-six-face reach arc the two edge arcs derive -
// dawn - selection, seconds: F501 28, F502 28, F503 27, F504 29,
// F505 24, F506 24, F507 23, F508 27, F509 24, F510 29, F511 24,
// F512 25, F513 28, F514 31, F515 30, F516 28, F517 29, F518 26,
// F519 24, F520 22, F521 24, F522 30, F523 29, F524 30, F525 26,
// F526 29 - the honest band 22..31

const REAL = {
  // F501's own face - the churn law's own proof face: the select
  // 20:40:06 = 74406, the dawn 20:40:34 = 74434 - the reach 28 (the
  // mid-run churn losses the F1 20:45:17 drop and the terminal burst
  // ride AFTER the dawn the census never moves)
  f501: ['[20:40:06] [Server thread/INFO]: Selecting global world spawn...',
    '[20:40:10] [Server thread/INFO]: Done (4.601s)! For help, type "help"',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:45:17] [Server thread/INFO]: F1 lost connection: Disconnected',
    '[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected'],
  // F505's own face - the wrap face's own pre-midnight reach: the
  // select 23:43:55 = 85435, the dawn 23:44:19 = 85459 - the reach 24
  // (the DUSK crosses the midnight the wrap faces keep, the dawn the
  // FOLLOWS-SELECT ordering rides the same day every face)
  f505: ['[23:43:55] [Server thread/INFO]: Selecting global world spawn...',
    '[23:44:19] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  // F506's own face - the leading-zero-hour faces the clock grammar keeps
  f506: ['[00:57:21] [Server thread/INFO]: Selecting global world spawn...',
    '[00:57:45] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  // F524's own face - the same-second boot's own proof face: the
  // selection 16:21:58 = 58918 rides the announcement's own second
  // (the nibble zero - the burst swallowed the pick) - the reach 30
  // the quiet's own span byte-equal the NIBBLE LAW's own face keeps
  f524: ['[16:21:58] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[16:21:58] [Server thread/INFO]: Selecting global world spawn...',
    '[16:22:03] [Server thread/INFO]: Done (4.808s)! For help, type "help"',
    '[16:22:28] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  // F525's own face - the fire-0130 ledger's own debt the harvest
  // pays: the face's own FIRST READ (select 17:20:38 = 62438, dawn
  // 17:21:04 = 62464 - the reach 26)
  f525: ['[17:20:38] [Server thread/INFO]: Selecting global world spawn...',
    '[17:21:04] [Server thread/INFO]: YardSurvey lost connection: Disconnected'],
  // F526's own face - the fresh extension face the harvest keeps
  f526: ['[17:58:08] [Server thread/INFO]: Selecting global world spawn...',
    '[17:58:37] [Server thread/INFO]: YardSurvey lost connection: Disconnected']
}

test('v0.976.340 census: the REAL faces byte-exact and the reach prices', () => {
  // F501's own face - the picking second to the loss lane's own
  // opening breath: 74434 - 74406 = 28
  assert.deepEqual(pickReachCensus(REAL.f501), { pickReachSec: 28 })
  // F505's own face - the wrap face's own pre-midnight reach:
  // 85459 - 85435 = 24 (the pick and the dawn the same day the
  // FOLLOWS-SELECT ordering keeps - the wrap never rides here)
  assert.deepEqual(pickReachCensus(REAL.f505), { pickReachSec: 24 })
  // F506's own face - the leading-zero-hour faces the clock grammar keeps
  assert.deepEqual(pickReachCensus(REAL.f506), { pickReachSec: 24 })
  // F524's own face - the same-second boot's own proof face:
  // 58948 - 58918 = 30 (the nibble zero - the reach the quiet's own
  // span byte-equal the burst-swallowed pick the face keeps)
  assert.deepEqual(pickReachCensus(REAL.f524), { pickReachSec: 30 })
  // F525's own face - the debt face's own first read: 62464 - 62438 = 26
  assert.deepEqual(pickReachCensus(REAL.f525), { pickReachSec: 26 })
  // F526's own face - the fresh extension: 64717 - 64688 = 29
  assert.deepEqual(pickReachCensus(REAL.f526), { pickReachSec: 29 })
  // the wrap degenerate - the day the face crosses between the edges
  // the arithmetic keeps (never observed in the faces - the
  // FOLLOWS-SELECT ordering keeps the pick and the dawn the same
  // day - the honest degenerate the census keeps: select 86390, dawn
  // 20 -> 20 + 86400 - 86390 = 30)
  assert.deepEqual(pickReachCensus(['[23:59:50] [Server thread/INFO]: Selecting global world spawn...',
    '[00:00:20] [Server thread/INFO]: YardSurvey lost connection: Disconnected']), { pickReachSec: 30 })
  // the partial phase's own zero - the face missing either edge
  // prices the reach zero honest (the phase never half-read)
  assert.deepEqual(pickReachCensus(['[20:40:06] [Server thread/INFO]: Selecting global world spawn...']), { pickReachSec: 0 })
  assert.deepEqual(pickReachCensus(['[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected']), { pickReachSec: 0 })
  assert.deepEqual(pickReachCensus(['[20:40:10] [Server thread/INFO]: Done (4.601s)! For help, type "help"']), { pickReachSec: 0 })
  // the sibling lanes never ride - the login conversation's own lines
  // the .321/.322/.314 words keep, this word silent on
  const siblings = [
    '[13:32:31] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[13:32:52] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)',
    '[13:32:54] [Server thread/INFO]: YardSurvey joined the game',
    '[13:45:48] [Server thread/INFO]: F18 left the game'
  ]
  assert.deepEqual(pickReachCensus(siblings), { pickReachSec: 0 })
})

test('v0.976.340 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(pickReachCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { pickReachSec: 0 })
  assert.equal(pickReachCensus(null), null)
  assert.equal(pickReachCensus(undefined), null)
  assert.equal(pickReachCensus(42), null)
  assert.deepEqual(pickReachCensus([42, null, ...REAL.f501]), { pickReachSec: 28 })
  // the LAST select print the select hand keeps - the re-boot face
  // the .331 hand's own law rides (the .332/.330 LAST-PRINT-WINS
  // mirror side the two-boot face keeps)
  assert.deepEqual(pickReachCensus(['[20:40:06] [Server thread/INFO]: Selecting global world spawn...',
    '[20:41:00] [Server thread/INFO]: Selecting global world spawn...',
    '[20:41:28] [Server thread/INFO]: YardSurvey lost connection: Disconnected']), { pickReachSec: 28 })
})

test('v0.976.340 grammar: the near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(pickReachCensus([s]), { pickReachSec: 0 })
  // the select lane's near-miss skins (the .331 emitter's own refusals)
  refuse('[20:40:06] [Server thread/WARN]: Selecting global world spawn...')
  refuse('[20:40:06] [Server thread/INFO]: Selecting global world spawn')
  refuse('[20:40:06] [Server thread/INFO]: Selecting global world spawn.'
  )
  refuse('[20:40:06] [Server thread/INFO]: Selecting  global world spawn...')
  refuse('[20:40:06] [Server thread/INFO]: selecting global world spawn...')
  refuse('[20:40:06] [Server thread/INFO]: Selecting global world spawn... (26.2)')
  // the dawn lane's near-miss skins (the .334 emitter's own refusals)
  refuse('[20:40:34] [Server thread/WARN]: YardSurvey lost connection: Disconnected')
  refuse('[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Kicked')
  refuse('[20:40:34] [Server thread/INFO]: YardSurvey lost connections: Disconnected')
  refuse('[20:40:34] [Server thread/INFO]: YardSurvey lost connection')
  refuse('[20:40:34] [Server thread/INFO]: YardSurvey left the game')
  // the clock skins both lanes refuse
  refuse('[20:40:6] [Server thread/INFO]: Selecting global world spawn...')
  refuse('[20:40:60] [Server thread/INFO]: YardSurvey lost connection: Disconnected')
})

test('v0.976.340 fence: every branch keeps', () => {
  const ok = (b, p, c) => pickReachConsistent({ back: { pickReachSec: b }, prev: { pickReachSec: p }, cur: { pickReachSec: c } })
  assert.equal(ok(0, 100, 86399), true)
  assert.equal(ok(28, 27, 29), true)
  assert.equal(ok(0, 0, 0), true)
  assert.equal(ok(86399.5, 100, 100), false)
  assert.equal(ok(-1, 100, 100), false)
  assert.equal(ok(86400, 100, 100), false)
  assert.equal(ok('x', 100, 100), false)
  assert.equal(pickReachConsistent({ back: { pickReachSec: 1 }, prev: { pickReachSec: 2 } }), false)
  assert.equal(pickReachConsistent(null), false)
  assert.equal(pickReachConsistent(42), false)
})

test('v0.976.340 trend: the REAL twenty-six-face reach arc re-voiced byte-exact', () => {
  // the REAL reach arc the two byte-verified edge arcs derive
  // (F501-F526, dawn - selection, seconds)
  const ARC = [28, 28, 27, 29, 24, 24, 23, 27, 24, 29, 24, 25, 28, 31, 30, 28, 29, 26, 24, 22, 24, 30, 29, 30, 26, 29]
  const SPEAKS = [
    [1, '28 -> 27 (-1) -> 29 (+2)', 'swing'],
    [2, '27 -> 29 (+2) -> 24 (-5)', 'swing'],
    [5, '24 -> 23 (-1) -> 27 (+4)', 'swing'],
    [6, '23 -> 27 (+4) -> 24 (-3)', 'swing'],
    [7, '27 -> 24 (-3) -> 29 (+5)', 'swing'],
    [8, '24 -> 29 (+5) -> 24 (-5)', 'swing'],
    [9, '29 -> 24 (-5) -> 25 (+1)', 'swing'],
    [10, '24 -> 25 (+1) -> 28 (+3)', 'swell'],
    [11, '25 -> 28 (+3) -> 31 (+3)', 'swell'],
    [12, '28 -> 31 (+3) -> 30 (-1)', 'swing'],
    [13, '31 -> 30 (-1) -> 28 (-2)', 'fade'],
    [14, '30 -> 28 (-2) -> 29 (+1)', 'swing'],
    [15, '28 -> 29 (+1) -> 26 (-3)', 'swing'],
    [16, '29 -> 26 (-3) -> 24 (-2)', 'fade'],
    [17, '26 -> 24 (-2) -> 22 (-2)', 'fade'],
    [18, '24 -> 22 (-2) -> 24 (+2)', 'swing'],
    [19, '22 -> 24 (+2) -> 30 (+6)', 'swell'],
    [20, '24 -> 30 (+6) -> 29 (-1)', 'swing'],
    [21, '30 -> 29 (-1) -> 30 (+1)', 'swing'],
    [22, '29 -> 30 (+1) -> 26 (-4)', 'swing'],
    [23, '30 -> 26 (-4) -> 29 (+3)', 'swing']
  ]
  const HELDS = [0, 3, 4] // W1/W4/W5 - the honest silences
  for (const [idx, arc, shape] of SPEAKS) {
    const row = pickReachTrendRow({ back: { pickReachSec: ARC[idx] }, prev: { pickReachSec: ARC[idx + 1] }, cur: { pickReachSec: ARC[idx + 2] } })
    assert.notEqual(row, null, `window ${idx + 1} held - the arc speaks`)
    assert.ok(row.includes(arc), `window ${idx + 1} arc byte-exact: ${row}`)
    assert.ok(row.includes(shape), `window ${idx + 1} the ${shape} shape`)
  }
  for (const idx of HELDS) {
    const row = pickReachTrendRow({ back: { pickReachSec: ARC[idx] }, prev: { pickReachSec: ARC[idx + 1] }, cur: { pickReachSec: ARC[idx + 2] } })
    assert.equal(row, null, `window ${idx + 1} the held silence`)
  }
  // the three-face zero - the lawful silence
  assert.equal(pickReachTrendRow({ back: { pickReachSec: 0 }, prev: { pickReachSec: 0 }, cur: { pickReachSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = pickReachTrendRow({ back: { pickReachSec: 28 }, prev: { pickReachSec: 27 }, cur: { pickReachSec: 29 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.331 spawn selection clock word'), 'the select input seat named')
  assert.ok(tail.includes('.334 fleet loss dawn word'), 'the dawn input seat named')
  assert.ok(tail.includes('.332 boot open clock word'), 'the burst edge named')
  assert.ok(tail.includes('.337 boot quiet word'), 'the outer span sibling named')
  assert.ok(tail.includes('NIBBLE LAW'), 'the nibble law named')
  assert.ok(tail.includes('.333 closing clock word'), 'the dusk edge named')
  assert.ok(tail.includes('.335 loss width word'), 'the inner span sibling named')
  assert.ok(tail.includes('.338 fleet ride word'), 'the ride span named')
  assert.ok(tail.includes('.314 headcount'), 'the login family named')
  assert.ok(tail.includes('v0.976.340'), 'the version rides')
})
