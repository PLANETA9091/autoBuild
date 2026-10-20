import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginFirstbornCensus, loginFirstbornConsistent, loginFirstbornTrendRow } from '../../src/lib/loginfirstborntrend.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own acceptor spoke; the REAL twelve-face firstborn arc the
// artifacts hold - the MIN entity id per face: F501 17, F502 9, F503
// 25, F504 9, F505 9, F506 17, F507 17, F508 17, F509 25, F510 9,
// F511 17, F512 17; the firstborn line the dawn line's own twin -
// YardSurvey spoke every face's firstborn, the firstborn's own clock
// the .321 dawn arc byte-exact on every face; the peak ids the same
// faces hold the .297 scalar's own twelve fresh extension reads beside:
// 4154/4111/3759/3884/4670/4726/3901/3297/4851/4191/4539/4161)

test('v0.976.323 census: the REAL lines byte-exact and the firstborn prices', () => {
  // F501's own face - the firstborn the arc's W1 swing base rides
  // (the dawn twin line the .321 word prices the clock cell of)
  const f501 = [
    '[20:40:21] [Server thread/INFO]: YardSurvey[/127.0.0.1:48142] logged in with entity id 17 at (-129.5, 70.0, 398.5)',
    '[20:50:26] [Server thread/INFO]: F6[/127.0.0.1:47898] logged in with entity id 4154 at (-131.49961560785792, 43.7531999805212, 438.3)'
  ]
  assert.deepEqual(loginFirstbornCensus(f501), { firstbornId: 17 })
  // F502's own face - the boot-seed 9 the restart cycle carries
  const f502 = [
    '[21:40:43] [Server thread/INFO]: YardSurvey[/127.0.0.1:46906] logged in with entity id 9 at (-126.5, 63.0, 394.5)'
  ]
  assert.deepEqual(loginFirstbornCensus(f502), { firstbornId: 9 })
  // F503's own face - the boot-seed 25 the arc's other base
  const f503 = [
    '[22:35:36] [Server thread/INFO]: YardSurvey[/127.0.0.1:57690] logged in with entity id 25 at (-132.5, 70.0, 400.5)'
  ]
  assert.deepEqual(loginFirstbornCensus(f503), { firstbornId: 25 })
  // F510's own face - the boot-seed 9 again (run 39364947414, the
  // .317 tree's own fleet)
  const f510 = [
    '[03:47:29] [Server thread/INFO]: YardSurvey[/127.0.0.1:44544] logged in with entity id 9 at (-118.5, 64.0, 392.5)'
  ]
  assert.deepEqual(loginFirstbornCensus(f510), { firstbornId: 9 })
  // F512's own face - the newest face (run 39371335466, the .321
  // tree's own fleet) - the full-precision coord skin the emitter wears
  const f512 = [
    '[05:00:51] [Server thread/INFO]: YardSurvey[/127.0.0.1:41044] logged in with entity id 17 at (-129.5, 69.0, 395.5)',
    '[05:10:11] [Server thread/INFO]: F9[/127.0.0.1:40710] logged in with entity id 4161 at (-128.3, 51.092568553515534, 406.33521351956125)'
  ]
  assert.deepEqual(loginFirstbornCensus(f512), { firstbornId: 17 })
  // the MIN hand - the firstborn sinks below the crowd (the counter
    // monotone within one boot the first accept carries the seed - a
  // later higher id never lifts the firstborn)
  const minhand = [
    '[20:00:10] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 64.0, 350.25)',
    '[09:15:59] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 272 at (0.0, 64.0, 500.5)',
    '[23:59:59] [Server thread/INFO]: F9[/127.0.0.1:11111] logged in with entity id 4154 at (0.0, 64.0, 439.7)'
  ]
  assert.deepEqual(loginFirstbornCensus(minhand), { firstbornId: 272 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginFirstbornCensus(siblings), { firstbornId: 0 })
})

test('v0.976.323 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .304/.306
  // convention holds - the no-login face the zero keeps)
  assert.deepEqual(loginFirstbornCensus(['garbage', '', 'no logins here']), { firstbornId: 0 })
  // the non-array - the honest null
  assert.equal(loginFirstbornCensus(null), null)
  assert.equal(loginFirstbornCensus('lines'), null)
  assert.equal(loginFirstbornCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginFirstbornCensus([42, null, undefined, {}]), { firstbornId: 0 })
})

test('v0.976.323 near-miss skins: nineteen forms the grammar refuses', () => {
  const good = '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)'
  const refuses = [
    // the bot-tagged prefix - the fleet log's own skin, the server
    // console never wears it
    '[F2] [21:47:59] F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the WARN frame
    '[21:47:59] [Server thread/WARN]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the pretty spacing
    '[21:47:59] [Server thread/INFO]:  F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the plural body
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity ids 3026 at (-138.7, 48.2, 410.3)',
    // the altered verb
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged on with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the missing port cell
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the float port
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868.0] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the leading-zero port
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:058868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the plus port
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:+58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the integer coord
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138, 48, 410)',
    // the leading whitespace
    ' [21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the trailing junk
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3) extra',
    // the CR tail
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)\r',
    // the 1-digit hour clock
    '[1:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the overflow hour clock
    '[24:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the overflow minute clock
    '[21:60:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the overflow second clock
    '[21:47:60] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the dash-separator clock
    '[21-47-59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the missing seconds field
    '[21:47] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)'
  ]
  assert.equal(refuses.length, 19)
  // 21:47:59 the good line's own clock - the entity id 3026 the seed
  // the good line carries
  for (const skin of refuses) {
    assert.deepEqual(loginFirstbornCensus([skin]), { firstbornId: 0 }, `refuses: ${skin}`)
    assert.deepEqual(loginFirstbornCensus([good, skin]), { firstbornId: 3026 }, `the good line still prices beside: ${skin}`)
  }
})

test('v0.976.323 fence: the counter domain the bounds keep', () => {
  // the REAL three-face window rides the fence
  assert.equal(loginFirstbornConsistent({ back: { firstbornId: 17 }, prev: { firstbornId: 9 }, cur: { firstbornId: 25 } }), true)
  // the zero rides (the no-login face's lawful mass)
  assert.equal(loginFirstbornConsistent({ back: { firstbornId: 0 }, prev: { firstbornId: 9 }, cur: { firstbornId: 25 } }), true)
  // the negatives fall
  assert.equal(loginFirstbornConsistent({ back: { firstbornId: -1 }, prev: { firstbornId: 9 }, cur: { firstbornId: 25 } }), false)
  // the floats fall
  assert.equal(loginFirstbornConsistent({ back: { firstbornId: 17.5 }, prev: { firstbornId: 9 }, cur: { firstbornId: 25 } }), false)
  // the strings fall
  assert.equal(loginFirstbornConsistent({ back: { firstbornId: '17' }, prev: { firstbornId: 9 }, cur: { firstbornId: 25 } }), false)
  // the missing faces
  assert.equal(loginFirstbornConsistent(null), false)
  assert.equal(loginFirstbornConsistent({}), false)
  assert.equal(loginFirstbornConsistent({ back: { firstbornId: 17 }, prev: { firstbornId: 9 } }), false)
})

test('v0.976.323 rows: the REAL four windows byte-exact and the six held keep silent - born speaking four deep', () => {
  // W1 - F501 -> F502 -> F503: the swing the boot-seed trades
  const w1 = loginFirstbornTrendRow({ back: { firstbornId: 17 }, prev: { firstbornId: 9 }, cur: { firstbornId: 25 } })
  assert.ok(w1.includes('the login firstborn\'s own swing - 17 -> 9 (-8) -> 25 (+16)'))
  // W2 - F502 -> F503 -> F504: the swing the seed trades back
  const w2 = loginFirstbornTrendRow({ back: { firstbornId: 9 }, prev: { firstbornId: 25 }, cur: { firstbornId: 9 } })
  assert.ok(w2.includes('the login firstborn\'s own swing - 9 -> 25 (+16) -> 9 (-16)'))
  // W8 - F508 -> F509 -> F510: the swing
  const w8 = loginFirstbornTrendRow({ back: { firstbornId: 17 }, prev: { firstbornId: 25 }, cur: { firstbornId: 9 } })
  assert.ok(w8.includes('the login firstborn\'s own swing - 17 -> 25 (+8) -> 9 (-16)'))
  // W9 - F509 -> F510 -> F511: the swing
  const w9 = loginFirstbornTrendRow({ back: { firstbornId: 25 }, prev: { firstbornId: 9 }, cur: { firstbornId: 17 } })
  assert.ok(w9.includes('the login firstborn\'s own swing - 25 -> 9 (-16) -> 17 (+8)'))
  // the six held windows keep the honest silence (W3/W4/W5/W6/W7/W10
  // - a held step prices no direction)
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: 25 }, prev: { firstbornId: 9 }, cur: { firstbornId: 9 } }), null) // W3
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: 9 }, prev: { firstbornId: 9 }, cur: { firstbornId: 17 } }), null) // W4
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: 9 }, prev: { firstbornId: 17 }, cur: { firstbornId: 17 } }), null) // W5
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: 17 }, prev: { firstbornId: 17 }, cur: { firstbornId: 17 } }), null) // W6 the flat triple
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: 17 }, prev: { firstbornId: 17 }, cur: { firstbornId: 25 } }), null) // W7
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: 9 }, prev: { firstbornId: 17 }, cur: { firstbornId: 17 } }), null) // W10
  // the tail co-existence rides every speaking row
  for (const w of [w1, w2, w8, w9]) {
    assert.ok(w.includes("the .297 entity id word keeps the same cell's peak seat"))
    assert.ok(w.includes("the .321 login dawn word keeps the same line's own clock cell's earlier-edge seat"))
    assert.ok(w.includes("the .322 login dusk word keeps the same cell's later-edge seat"))
    assert.ok(w.includes("the .320 login south word keeps the same line's south seat"))
    assert.ok(w.includes("the .314 login count word keeps the same lines' count seat"))
    assert.ok(w.includes("the .305 echo north word keeps the setblock echo's own Z-min seat"))
  }
})

test('v0.976.323 rows: the three-face zero and the fence fail and the missing faces', () => {
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: 0 }, prev: { firstbornId: 0 }, cur: { firstbornId: 0 } }), null)
  // the fence fail rides the row null
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: -1 }, prev: { firstbornId: 9 }, cur: { firstbornId: 25 } }), null)
  assert.equal(loginFirstbornTrendRow({ back: { firstbornId: 17 }, prev: { firstbornId: 9.5 }, cur: { firstbornId: 25 } }), null)
  // the missing faces
  assert.equal(loginFirstbornTrendRow(null), null)
})
