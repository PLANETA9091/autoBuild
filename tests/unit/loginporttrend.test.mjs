import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginPortCensus, loginPortConsistent, loginPortTrendRow } from '../../src/lib/loginporttrend.mjs'

// the REAL lines the faces carry (run 39319100730 F501, 39327612804
// F502, 39334531367 F503, 39338489283 F504, 39341992087 F505 - the
// byte-exact prints the vanilla server's own acceptor spoke, the
// ephemeral ports the kernel dealt)

test('v0.976.312 census: the REAL lines byte-exact and the port prices', () => {
  // F505's own face - the max-port line the arc's W3 swing rides
  const f505 = [
    '[23:44:55] [Server thread/INFO]: F15[/127.0.0.1:59934] logged in with entity id 432 at (-121.5, 78.0, 401.5)',
    '[23:44:07] [Server thread/INFO]: YardSurvey[/127.0.0.1:57116] logged in with entity id 9 at (-123.5, 66.0, 396.5)'
  ]
  assert.deepEqual(loginPortCensus(f505), { maxLoginPort: 59934 })
  // F501's own face - the long-float coord skin the shape-only cells hold
  const f501 = [
    '[20:49:19] [Server thread/INFO]: F11[/127.0.0.1:58954] logged in with entity id 3874 at (-149.03768012666592, 59.17675927506424, 401.5442795786802)'
  ]
  assert.deepEqual(loginPortCensus(f501), { maxLoginPort: 58954 })
  // F503's own face - the arc's W1 second step
  const f503 = [
    '[22:44:16] [Server thread/INFO]: F5[/127.0.0.1:59334] logged in with entity id 3411 at (-128.38464769374113, 52.0, 397.7)'
  ]
  assert.deepEqual(loginPortCensus(f503), { maxLoginPort: 59334 })
  // F504's own face - the arc's dip the W2/W3 swings trade
  const f504 = [
    '[23:22:08] [Server thread/INFO]: F1[/127.0.0.1:56186] logged in with entity id 3113 at (-89.3, 61.038117287424, 370.49016791070585)'
  ]
  assert.deepEqual(loginPortCensus(f504), { maxLoginPort: 56186 })
  // the capture law - the entity id never rides the port cell (the
  // bigger counter the shape-only cell holds, the port wins)
  const capture = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 64.0, 0.0)'
  ]
  assert.deepEqual(loginPortCensus(capture), { maxLoginPort: 12345 })
  // the sibling lanes never ride - disconnect and join/leave and dup
  // and fill lines the same console wears
  const siblings = [
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected',
    '[21:45:40] [Server thread/INFO]: YardSurvey left the game',
    '[21:45:41] [Server thread/INFO]: F3 lost connection: You logged in from another location',
    '[21:45:42] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[23:44:55] [Server thread/INFO]: F15[/127.0.0.1:59934] logged in with entity id 432 at (-121.5, 78.0, 401.5)'
  ]
  assert.deepEqual(loginPortCensus(siblings), { maxLoginPort: 59934 })
  // the max never caps - the many-logins face rides whole
  const many = []
  for (let i = 0; i < 40; i++) many.push('[20:0' + (i % 10) + ':' + String(10 + i).padStart(2, '0') + '] [Server thread/INFO]: F' + ((i % 19) + 1) + '[/127.0.0.1:' + (40000 + i) + '] logged in with entity id ' + (100 + i) + ' at (-100.5, 64.0, 400.5)')
  assert.deepEqual(loginPortCensus(many), { maxLoginPort: 40039 })
})

test('v0.976.312 census: the junk faces stay honest', () => {
  assert.equal(loginPortCensus(null), null)
  assert.equal(loginPortCensus('junk'), null)
  assert.equal(loginPortCensus(42), null)
  assert.deepEqual(loginPortCensus([]), { maxLoginPort: 0 })
  assert.deepEqual(loginPortCensus(['total junk', '']), { maxLoginPort: 0 })
  assert.deepEqual(loginPortCensus([null, 7, undefined]), { maxLoginPort: 0 })
})

test('v0.976.312 near-miss skins: twelve forms the grammar refuses', () => {
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
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868.5] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the leading-zero port - the .248 house law
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:058868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the plus port
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:+58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the leading whitespace
    ' [21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the trailing junk
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3) extra',
    // the CR tail - the .288 tail boundary law
    good + '\r'
  ]
  for (const skin of refuses) {
    assert.deepEqual(loginPortCensus([skin]), { maxLoginPort: 0 }, 'skin must refuse: ' + skin)
  }
  // the good line still rides beside every refusal
  assert.deepEqual(loginPortCensus([...refuses, good]), { maxLoginPort: 58868 })
})

test('v0.976.312 fence: the non-negative integer cells every branch', () => {
  const face = (n) => ({ maxLoginPort: n })
  assert.equal(loginPortConsistent({ back: face(59334), prev: face(56186), cur: face(59934) }), true)
  // zero faces ride - the no-login face the three-face zero law keeps
  assert.equal(loginPortConsistent({ back: face(0), prev: face(0), cur: face(0) }), true)
  // the negative cell the port domain never holds
  assert.equal(loginPortConsistent({ back: face(-1), prev: face(56186), cur: face(59934) }), false)
  // the float cell
  assert.equal(loginPortConsistent({ back: face(58868.5), prev: face(56186), cur: face(59934) }), false)
  // the string cell
  assert.equal(loginPortConsistent({ back: face('58868'), prev: face(56186), cur: face(59934) }), false)
  // the missing faces
  assert.equal(loginPortConsistent(null), false)
  assert.equal(loginPortConsistent({}), false)
  assert.equal(loginPortConsistent({ back: face(1), prev: face(2) }), false)
})

test('v0.976.312 rows: the REAL three swings byte-exact', () => {
  // W1 - F501 -> F502 -> F503: the swing the arc opens with
  const w1 = loginPortTrendRow({ back: { maxLoginPort: 58954 }, prev: { maxLoginPort: 58868 }, cur: { maxLoginPort: 59334 } })
  assert.ok(w1.includes('the login port\'s own swing - 58954 -> 58868 (-86) -> 59334 (+466) - the kernel traded its sockets between the faces'))
  assert.ok(w1.includes('v0.976.312'))
  // W2 - F502 -> F503 -> F504: the swing the dip rides
  const w2 = loginPortTrendRow({ back: { maxLoginPort: 58868 }, prev: { maxLoginPort: 59334 }, cur: { maxLoginPort: 56186 } })
  assert.ok(w2.includes('the login port\'s own swing - 58868 -> 59334 (+466) -> 56186 (-3148)'))
  // W3 - F503 -> F504 -> F505: the swing the fold will speak
  const w3 = loginPortTrendRow({ back: { maxLoginPort: 59334 }, prev: { maxLoginPort: 56186 }, cur: { maxLoginPort: 59934 } })
  assert.ok(w3.includes('the login port\'s own swing - 59334 -> 56186 (-3148) -> 59934 (+3748)'))
  // the tail co-existence rides every row
  assert.ok(w3.includes('the .297 entity id word keeps the same login line\'s own entity id cell'))
  assert.ok(w3.includes('the socket cell\'s own min hand rides unread'))
  // the synthetic fade and swell branches the all-swing birth never
  // rode (the family's own coverage law)
  const fade = loginPortTrendRow({ back: { maxLoginPort: 59934 }, prev: { maxLoginPort: 58000 }, cur: { maxLoginPort: 56000 } })
  assert.ok(fade.includes('the login port\'s own fade ran two steps deep - 59934 -> 58000 (-1934) -> 56000 (-2000)'))
  const swell = loginPortTrendRow({ back: { maxLoginPort: 56000 }, prev: { maxLoginPort: 58000 }, cur: { maxLoginPort: 59934 } })
  assert.ok(swell.includes('the login port\'s own swell ran two steps deep - 56000 -> 58000 (+2000) -> 59934 (+1934)'))
})

test('v0.976.312 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence
  assert.equal(loginPortTrendRow({ back: { maxLoginPort: 58868 }, prev: { maxLoginPort: 58868 }, cur: { maxLoginPort: 59934 } }), null)
  assert.equal(loginPortTrendRow({ back: { maxLoginPort: 58954 }, prev: { maxLoginPort: 58868 }, cur: { maxLoginPort: 58868 } }), null)
  // the three-face zero - the no-logins mass the family keeps silent
  assert.equal(loginPortTrendRow({ back: { maxLoginPort: 0 }, prev: { maxLoginPort: 0 }, cur: { maxLoginPort: 0 } }), null)
  // the fence fail - the negative cell the port domain never holds
  assert.equal(loginPortTrendRow({ back: { maxLoginPort: -5 }, prev: { maxLoginPort: 56186 }, cur: { maxLoginPort: 59934 } }), null)
  // the missing faces
  assert.equal(loginPortTrendRow(null), null)
})
