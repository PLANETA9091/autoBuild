import { test } from 'node:test'
import assert from 'node:assert/strict'
import { joinEchoDriftCensus, joinEchoDriftConsistent, joinEchoDriftTrendRow } from '../../src/lib/joinechodrift.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own join lane voiced; the REAL twenty-four-face drift arc
// the artifacts hold - the drift mass per face, the count of echoes
// whose clock differs from their paired login's: F501 1 (F4's own
// echo one second later), F502-F517 0 (the pair-identity silence),
// F518 1 (F13's own echo one second later), F519-F524 0; the
// fire-0043 harvest the artifact IDs byte-agree the ledger F501
// 12220643212 through F524 12281658370)

const REAL = {
  f501: [
    '[20:40:42] [Server thread/INFO]: F4[/127.0.0.1:55440] logged in with entity id 317 at (-122.5, 71.0, 390.5)',
    '[20:40:43] [Server thread/INFO]: F4 joined the game'
  ],
  f518: [
    '[10:12:22] [Server thread/INFO]: F13[/127.0.0.1:53404] logged in with entity id 3471 at (-110.47520511227924, 43.2, 384.3)',
    '[10:12:23] [Server thread/INFO]: F13 joined the game'
  ],
  f524: [
    '[16:22:15] [Server thread/INFO]: YardSurvey[/127.0.0.1:59150] logged in with entity id 17 at (-122.5, 79.0, 405.5)',
    '[16:22:15] [Server thread/INFO]: YardSurvey joined the game',
    '[16:28:18] [Server thread/INFO]: F8 lost connection: Disconnected',
    '[16:28:18] [Server thread/INFO]: F8 left the game',
    '[16:28:18] [Server thread/INFO]: F8[/127.0.0.1:55568] logged in with entity id 2939 at (-122.7, 46.2, 395.34222906391034)',
    '[16:28:18] [Server thread/INFO]: F8 joined the game'
  ]
}

test('v0.976.336 census: the REAL lines byte-exact and the drift prices', () => {
  // F501's own face - the drift face the family keeps (the echo one
  // second later the login rode: 74442 -> 74443)
  assert.deepEqual(joinEchoDriftCensus(REAL.f501), { joinEchoCount: 1, joinEchoDrift: 1 })
  // F518's own face - the second drift face (the re-login's own
  // echo: 36742 -> 36743)
  assert.deepEqual(joinEchoDriftCensus(REAL.f518), { joinEchoCount: 1, joinEchoDrift: 1 })
  // F524's own face - the churn king's pair-identity silence (the
  // rejoin same-second the F8 dance rides: the drop, the leave, the
  // login, the join ALL 16:28:18 - the pair law held 70/70)
  assert.deepEqual(joinEchoDriftCensus(REAL.f524), { joinEchoCount: 2, joinEchoDrift: 0 })
  // the pair-identity baseline - the same-second pair the 804 rides
  assert.deepEqual(joinEchoDriftCensus([
    '[13:32:52] [Server thread/INFO]: YardSurvey[/127.0.0.1:57656] logged in with entity id 17 at (-136.5, 64.0, 410.5)',
    '[13:32:52] [Server thread/INFO]: YardSurvey joined the game'
  ]), { joinEchoCount: 1, joinEchoDrift: 0 })
  // the echo never precedes - the echo without its own pair rides
  // the drift (the honest degenerate the faces never voiced)
  assert.deepEqual(joinEchoDriftCensus([
    '[13:32:52] [Server thread/INFO]: YardSurvey joined the game'
  ]), { joinEchoCount: 1, joinEchoDrift: 1 })
  // the sibling lanes never ride - the leave echo and the loss
  // print and the boot conversation's own lines the .310/.333/.
  // 334/.330 words keep, this word silent on
  const siblings = [
    '[16:37:50] [Server thread/INFO]: F19 lost connection: Disconnected',
    '[16:37:50] [Server thread/INFO]: F19 left the game',
    '[16:22:03] [Server thread/INFO]: Done (4.808s)! For help, type "help"',
    '[16:22:16] [Server thread/INFO]: Set the world spawn point to -123, 82, 405 [0.0, 0.0] in minecraft:overworld',
    '[16:21:58] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[961.256s][info][gc] GC(100) Pause Young (Mixed) (G1 Evacuation Pause) 936M->308M(1024M) 52.213ms'
  ]
  assert.deepEqual(joinEchoDriftCensus(siblings), { joinEchoCount: 0, joinEchoDrift: 0 })
})

test('v0.976.336 census: the churn face keeps the LAST login pairing', () => {
  // the nearest preceding login the pair law keeps - the re-login
  // updates the pair (the first login's second no longer pairs the
  // echo the re-login owned)
  assert.deepEqual(joinEchoDriftCensus([
    '[20:48:44] [Server thread/INFO]: F4[/127.0.0.1:42300] logged in with entity id 3701 at (-124.50073622831489, 47.2, 410.7)',
    '[20:48:44] [Server thread/INFO]: F4 joined the game',
    '[20:50:17] [Server thread/INFO]: F4[/127.0.0.1:58006] logged in with entity id 4110 at (-124.50073622831489, 47.17412664653216, 410.7)',
    '[20:50:17] [Server thread/INFO]: F4 joined the game'
  ]), { joinEchoCount: 2, joinEchoDrift: 0 })
  // the junk faces keep the honest shapes
  assert.deepEqual(joinEchoDriftCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { joinEchoCount: 0, joinEchoDrift: 0 })
  assert.equal(joinEchoDriftCensus(null), null)
  assert.equal(joinEchoDriftCensus(undefined), null)
  assert.equal(joinEchoDriftCensus(42), null)
  assert.deepEqual(joinEchoDriftCensus([42, null, ...REAL.f501]), { joinEchoCount: 1, joinEchoDrift: 1 })
})

test('v0.976.336 grammar: the nineteen near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(joinEchoDriftCensus([s]), { joinEchoCount: 0, joinEchoDrift: 0 })
  // the bare body (the missing head)
  refuse('F4 joined the game')
  // the WARN frame
  refuse('[20:40:43] [Server thread/WARN]: F4 joined the game')
  // the ServerMain frame
  refuse('[20:40:43] [ServerMain/INFO]: F4 joined the game')
  // the pretty spacing
  refuse('[20:40:43] [Server thread/INFO]: F4  joined the game')
  // the missing name
  refuse('[20:40:43] [Server thread/INFO]: joined the game')
  // the trailing period
  refuse('[20:40:43] [Server thread/INFO]: F4 joined the game.')
  // the altered verb
  refuse('[20:40:43] [Server thread/INFO]: F4 joins the game')
  // the plural body
  refuse('[20:40:43] [Server thread/INFO]: F4 joined the games')
  // the lowercase body (the emitter's own skin case-shifted)
  refuse('[20:40:43] [Server thread/INFO]: F4 Joined The Game')
  // the leading whitespace
  refuse(' [20:40:43] [Server thread/INFO]: F4 joined the game')
  // the trailing junk
  refuse('[20:40:43] [Server thread/INFO]: F4 joined the game ok')
  // the CR tail
  refuse('[20:40:43] [Server thread/INFO]: F4 joined the game\r')
  // the 1-digit hour clock
  refuse('[8:22:36] [Server thread/INFO]: F4 joined the game')
  // the overflow second clock
  refuse('[20:40:60] [Server thread/INFO]: F4 joined the game')
  // the dash-separator clock
  refuse('[20-40-43] [Server thread/INFO]: F4 joined the game')
  // the missing clock
  refuse('[Server thread/INFO]: F4 joined the game')
  // the login line's own skin (the pair's own line - the .321 word's
  // own seat, this word pairs it never prices it)
  refuse('[20:40:42] [Server thread/INFO]: F4[/127.0.0.1:55440] logged in with entity id 317 at (-122.5, 71.0, 390.5)')
  // the leave sibling's own skin (the .310 lane's own echo)
  refuse('[20:40:43] [Server thread/INFO]: F4 left the game')
})

test('v0.976.336 fence: the count words\' own law every branch', () => {
  const face = (count, drift) => ({ joinEchoCount: count, joinEchoDrift: drift })
  // the lawful faces
  assert.equal(joinEchoDriftConsistent({ back: face(20, 0), prev: face(33, 1), cur: face(70, 0) }), true)
  assert.equal(joinEchoDriftConsistent({ back: face(0, 0), prev: face(0, 0), cur: face(0, 0) }), true)
  // the drift exceeding the count - refused
  assert.equal(joinEchoDriftConsistent({ back: face(20, 0), prev: face(3, 4), cur: face(70, 0) }), false)
  // the negative count - refused
  assert.equal(joinEchoDriftConsistent({ back: face(-1, 0), prev: face(3, 0), cur: face(70, 0) }), false)
  // the negative drift - refused
  assert.equal(joinEchoDriftConsistent({ back: face(20, 0), prev: face(3, -1), cur: face(70, 0) }), false)
  // the non-integer - refused
  assert.equal(joinEchoDriftConsistent({ back: face(20.5, 0), prev: face(3, 0), cur: face(70, 0) }), false)
  // the missing faces - refused
  assert.equal(joinEchoDriftConsistent(null), false)
  assert.equal(joinEchoDriftConsistent({}), false)
  assert.equal(joinEchoDriftConsistent({ back: face(1, 0), prev: face(1, 0) }), false)
})

test('v0.976.336 row: the REAL twenty-four-face drift arc re-voiced byte-exact', () => {
  // the REAL arc the harvest byte-verified: F501 1, F502-F517 0,
  // F518 1, F519-F524 0 - TWENTY-TWO REAL WINDOWS ONE SPEAK
  // TWENTY-ONE HELD
  const DRIFT = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
  const COUNT = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 70, 70, 70, 70]
  const face = (c, d) => ({ joinEchoCount: c, joinEchoDrift: d })
  // the all-held and three-zero windows the honest silence keeps
  for (let i = 0; i + 2 < DRIFT.length; i++) {
    const row = joinEchoDriftTrendRow({ back: face(COUNT[i], DRIFT[i]), prev: face(COUNT[i + 1], DRIFT[i + 1]), cur: face(COUNT[i + 2], DRIFT[i + 2]) })
    if (i === 15) {
      // W16 the F518 swing the one speak keeps (0 -> 1 -> 0: the
      // held first step 0->0 no wait - the F516/F517/F518 triple is
      // 0,0,1 the held law keeps silent; the SPEAK window is W17:
      // F517,F518,F519 = 0,1,0 the swing)
      assert.equal(row, null)
    } else if (i === 16) {
      // W17 the swing - the ONE speak the family keeps (the F518
      // face's own drift the window carries)
      assert.match(row, /the join echo's own drift swing - 0 -> 1 \(\+1\) -> 0 \(-1\)/)
      assert.match(row, /v0\.976\.336/)
      assert.match(row, /the .321 login dawn word prices/)
    } else {
      assert.equal(row, null)
    }
  }
  // the swell and fade shapes the grammar keeps (the synthetic faces
  // the row law holds)
  const swell = joinEchoDriftTrendRow({ back: face(10, 0), prev: face(10, 1), cur: face(10, 2) })
  assert.match(swell, /drift swell ran two steps deep - 0 -> 1 \(\+1\) -> 2 \(\+1\)/)
  const fade = joinEchoDriftTrendRow({ back: face(10, 2), prev: face(10, 1), cur: face(10, 0) })
  assert.match(fade, /drift fade ran two steps deep - 2 -> 1 \(-1\) -> 0 \(-1\)/)
  // the three-face zero and the held steps the honest silence keeps
  assert.equal(joinEchoDriftTrendRow({ back: face(10, 0), prev: face(10, 0), cur: face(10, 0) }), null)
  assert.equal(joinEchoDriftTrendRow({ back: face(10, 1), prev: face(10, 1), cur: face(10, 1) }), null)
  assert.equal(joinEchoDriftTrendRow({ back: face(10, 0), prev: face(10, 0), cur: face(10, 1) }), null)
  // the inconsistent faces the fence refuses the row never prices
  assert.equal(joinEchoDriftTrendRow(null), null)
  assert.equal(joinEchoDriftTrendRow({ back: face(3, 4), prev: face(1, 0), cur: face(1, 0) }), null)
})
