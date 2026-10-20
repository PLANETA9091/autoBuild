import { test } from 'node:test'
import assert from 'node:assert/strict'
import { lossWidthCensus, lossWidthConsistent, lossWidthTrendRow } from '../../src/lib/losswidthtrend.mjs'

// the REAL faces the artifacts hold (the byte-exact loss lane the
// vanilla server voiced; the dawn stamps the .334 word's arc prices,
// the dusk stamps the .333 word's arc prices - the name cells ride
// shape only the .333/.334 convention keeps, the clock cells the
// byte-verified stamps ride). the REAL twenty-one-face width arc
// the two edge arcs derive - dusk - dawn, wrap-aware, seconds:
// F501 887, F502 897, F503 935, F504 821, F505 961 (the wrap face:
// the dawn 85459 the day's last hour, the dusk 20 the next day's
// first seconds), F506 792, F507 864, F508 830, F509 767, F510 801,
// F511 960, F512 841, F513 949, F514 953, F515 557 (the honest
// band's own floor - the fire-2330 ledger's 887..961 sketch the
// F515 557 the honest read corrects), F516 961, F517 700, F518 697,
// F519 961, F520 684, F521 774

const REAL = {
  f501: ['[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected'],
  f505: ['[23:44:19] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[00:00:20] [Server thread/INFO]: F3 lost connection: Timed out'],
  f506: ['[00:57:45] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[01:10:57] [Server thread/INFO]: F8 lost connection: Disconnected'],
  // F515's own face - the class-union proof face the .333 word keeps:
  // the terminal burst rode Timed out 07:47:34 while the
  // Disconnected class's last print came earlier 07:46:18 - the
  // width the lane's own two edges keep (07:38:17 the dawn the
  // class-union lane rides shape-only, the honest 557 the band's own
  // floor)
  f515: ['[07:38:17] [Server thread/INFO]: F2 lost connection: Timed out',
    '[07:46:18] [Server thread/INFO]: F13 lost connection: Disconnected',
    '[07:47:34] [Server thread/INFO]: F19 lost connection: Timed out'],
  f521: ['[13:32:54] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[13:45:48] [Server thread/INFO]: F18 lost connection: Disconnected']
}

test('v0.976.335 census: the REAL faces byte-exact and the width prices', () => {
  // F501's own face - the churn law's own proof face the .333/.334
  // words keep: the dawn 20:40:34 = 74434, the dusk 20:55:21 = 75321
  // - the ride's own width 887 the census prices
  assert.deepEqual(lossWidthCensus(REAL.f501), { lossWidthSec: 887 })
  // F505's own face - the WRAP face the day boundary keeps: the dawn
  // 23:44:19 = 85459, the dusk 00:00:20 = 20 the next day's first
  // seconds - the numeric compare fails, the wrap arithmetic keeps:
  // 20 + 86400 - 85459 = 961
  assert.deepEqual(lossWidthCensus(REAL.f505), { lossWidthSec: 961 })
  // F506's own face - the leading-zero-hour faces the clock grammar keeps
  assert.deepEqual(lossWidthCensus(REAL.f506), { lossWidthSec: 792 })
  // F515's own face - the class-union face and the honest band's own
  // floor: the dawn 07:38:17 = 27497, the dusk 07:47:34 = 28054 - 557
  assert.deepEqual(lossWidthCensus(REAL.f515), { lossWidthSec: 557 })
  // the fresh extension face - the fire-2230 harvest's own face
  assert.deepEqual(lossWidthCensus(REAL.f521), { lossWidthSec: 774 })
  // the FIRST + LAST laws the two hands keep - the churn face the
  // .333/.334 words' own proof face rides (the same three-drop face:
  // the FIRST print the dawn hand, the LAST the dusk hand - the
  // middle churn the span swallows)
  const churn = [
    '[20:40:10] [Server thread/INFO]: Done (4.601s)! For help, type "help"',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:34] [Server thread/INFO]: YardSurvey left the game',
    '[20:45:17] [Server thread/INFO]: F1 lost connection: Disconnected',
    '[20:45:17] [Server thread/INFO]: F1 left the game',
    '[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected',
    '[20:55:21] [Server thread/INFO]: F6 left the game',
    '[926.668s][info][gc] GC(72) Pause Young (Normal) (G1 Evacuation Pause) 959M->387M(1024M) 51.769ms'
  ]
  assert.deepEqual(lossWidthCensus(churn), { lossWidthSec: 887 })
  // the single breath's own zero - the face one loss print carries
  // prices width zero honest (the dawn and the dusk the same second
  // rides)
  assert.deepEqual(lossWidthCensus(['[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected']), { lossWidthSec: 0 })
  // the sibling lanes never ride - the leave echo and the boot
  // conversation's own lines the .310/.311/.314/.330/.325 words
  // keep, this word silent on
  const siblings = [
    '[13:45:48] [Server thread/INFO]: F18 left the game',
    '[13:45:48] [Server thread/INFO]: F18 joined the game',
    '[13:45:46] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)',
    '[13:45:46] [Server thread/INFO]: Done (2.800s)! For help, type "help"',
    '[13:45:46] [Server thread/INFO]: Set the world spawn point to -125, 69, 403 [0.0, 0.0] in minecraft:overworld',
    '[13:45:45] [Server thread/INFO]: Starting minecraft server version 26.2'
  ]
  assert.deepEqual(lossWidthCensus(siblings), { lossWidthSec: 0 })
})

test('v0.976.335 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(lossWidthCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { lossWidthSec: 0 })
  assert.equal(lossWidthCensus(null), null)
  assert.equal(lossWidthCensus(undefined), null)
  assert.equal(lossWidthCensus(42), null)
  assert.deepEqual(lossWidthCensus([42, null, ...REAL.f501]), { lossWidthSec: 887 })
})

test('v0.976.335 grammar: the near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(lossWidthCensus([s]), { lossWidthSec: 0 })
  // the bare body - the missing head the INFO frame keeps
  refuse('F2 lost connection: Disconnected')
  // the WARN frame - a different lane the server keeps
  refuse('[20:40:34] [Server thread/WARN]: F2 lost connection: Disconnected')
  // the ServerMain frame - the boot thread the .292 lane keeps
  refuse('[20:40:34] [ServerMain/INFO]: F2 lost connection: Disconnected')
  // the pretty spacing - the doubled space the emitter never prints
  refuse('[20:40:34] [Server thread/INFO]: F2  lost connection: Disconnected')
  // the missing clock
  refuse('[Server thread/INFO]: F2 lost connection: Disconnected')
  // the 1-digit hour clock
  refuse('[9:40:34] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the overflow second clock
  refuse('[20:40:60] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the dash-separator clock
  refuse('[20-40-34] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the plural body
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connections: Disconnected')
  // the altered verb
  refuse('[20:40:34] [Server thread/INFO]: F2 lost the connection: Disconnected')
  // the missing reason
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection')
  // the other reason - the class the faces never carried
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: Kicked')
  // the lowercase reason - the class skin the strict union refuses
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: disconnected')
  // the leading whitespace
  refuse(' [20:40:34] [Server thread/INFO]: F2 lost connection: Disconnected')
  // the trailing junk
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: Disconnected extra')
  // the CR tail
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: Disconnected\r')
  // the leave sibling - the pair's own second line the burst-identity
  // law keeps out of this seat
  refuse('[20:40:34] [Server thread/INFO]: F2 left the game')
  // the truncated body
  refuse('[20:40:34] [Server thread/INFO]: F2 lost')
})

test('v0.976.335 fence: every branch keeps', () => {
  const ok = (b, p, c) => lossWidthConsistent({ back: { lossWidthSec: b }, prev: { lossWidthSec: p }, cur: { lossWidthSec: c } })
  assert.equal(ok(0, 100, 86399), true)
  assert.equal(ok(887, 897, 935), true)
  assert.equal(ok(0, 0, 0), true)
  assert.equal(ok(86399.5, 100, 100), false)
  assert.equal(ok(-1, 100, 100), false)
  assert.equal(ok(86400, 100, 100), false)
  assert.equal(ok('x', 100, 100), false)
  assert.equal(lossWidthConsistent({ back: { lossWidthSec: 1 }, prev: { lossWidthSec: 2 } }), false)
  assert.equal(lossWidthConsistent(null), false)
  assert.equal(lossWidthConsistent(42), false)
})

test('v0.976.335 trend: the REAL twenty-one-face width arc re-voiced byte-exact', () => {
  // the REAL width arc the two byte-verified edge arcs derive
  // (F501-F521, dusk - dawn wrap-aware, seconds)
  const ARC = [887, 897, 935, 821, 961, 792, 864, 830, 767, 801, 960, 841, 949, 953, 557, 961, 700, 697, 961, 684, 774]
  const WINDOWS = [
    ['887 -> 897 (+10) -> 935 (+38)', 'swell'],
    ['897 -> 935 (+38) -> 821 (-114)', 'swing'],
    ['935 -> 821 (-114) -> 961 (+140)', 'swing'],
    ['821 -> 961 (+140) -> 792 (-169)', 'swing'],
    ['961 -> 792 (-169) -> 864 (+72)', 'swing'],
    ['792 -> 864 (+72) -> 830 (-34)', 'swing'],
    ['864 -> 830 (-34) -> 767 (-63)', 'fade'],
    ['830 -> 767 (-63) -> 801 (+34)', 'swing'],
    ['767 -> 801 (+34) -> 960 (+159)', 'swell'],
    ['801 -> 960 (+159) -> 841 (-119)', 'swing'],
    ['960 -> 841 (-119) -> 949 (+108)', 'swing'],
    ['841 -> 949 (+108) -> 953 (+4)', 'swell'],
    ['949 -> 953 (+4) -> 557 (-396)', 'swing'],
    ['953 -> 557 (-396) -> 961 (+404)', 'swing'],
    ['557 -> 961 (+404) -> 700 (-261)', 'swing'],
    ['961 -> 700 (-261) -> 697 (-3)', 'fade'],
    ['700 -> 697 (-3) -> 961 (+264)', 'swing'],
    ['697 -> 961 (+264) -> 684 (-277)', 'swing'],
    ['961 -> 684 (-277) -> 774 (+90)', 'swing']
  ]
  let speaks = 0
  for (let i = 0; i + 2 < ARC.length; i++) {
    const row = lossWidthTrendRow({ back: { lossWidthSec: ARC[i] }, prev: { lossWidthSec: ARC[i + 1] }, cur: { lossWidthSec: ARC[i + 2] } })
    assert.notEqual(row, null, `window ${i + 1} held - the arc never holds`)
    assert.ok(row.includes(WINDOWS[i][0]), `window ${i + 1} arc byte-exact: ${row}`)
    assert.ok(row.includes(WINDOWS[i][1]), `window ${i + 1} the ${WINDOWS[i][1]} shape`)
    speaks++
  }
  assert.equal(speaks, 19, 'NINETEEN REAL WINDOWS')
  // the held law - a held step the honest silence
  assert.equal(lossWidthTrendRow({ back: { lossWidthSec: 887 }, prev: { lossWidthSec: 887 }, cur: { lossWidthSec: 900 } }), null)
  assert.equal(lossWidthTrendRow({ back: { lossWidthSec: 887 }, prev: { lossWidthSec: 900 }, cur: { lossWidthSec: 900 } }), null)
  // the three-face zero - the lawful silence
  assert.equal(lossWidthTrendRow({ back: { lossWidthSec: 0 }, prev: { lossWidthSec: 0 }, cur: { lossWidthSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = lossWidthTrendRow({ back: { lossWidthSec: 887 }, prev: { lossWidthSec: 897 }, cur: { lossWidthSec: 935 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.334 fleet loss dawn word'), 'the dawn hand named (the FIRST-print input)')
  assert.ok(tail.includes('.333 fleet closing clock word'), 'the dusk hand named (the LAST-print input)')
  assert.ok(tail.includes('wrap'), 'the wrap law named')
  assert.ok(tail.includes('.310 disconnect word'), 'the Disconnected class count seat named')
  assert.ok(tail.includes('.311 timed out word'), 'the Timed out class count seat named')
  assert.ok(tail.includes('left the game'), 'the leave sibling named')
  assert.ok(tail.includes('dupclock book'), 'the duplicate-loss churn seat named')
  assert.ok(tail.includes('FOLLOWS-OPENING'), 'the ordering gate named')
  assert.ok(tail.includes('v0.976.335'), 'the version rides')
})
