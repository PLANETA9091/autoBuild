// (v0.976.297) THE SERVER LOGIN'S OWN ENTITY ID MASS - the test pins.
// REAL lines byte-exact: F496's own face (run 39287423190) carries
// '[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged in
// with entity id 272 at (-128.5, 73.0, 391.5)'; the REAL five-face
// arc: F492 4258, F493 3516, F494 4242, F495 3672, F496 4145 - W1 the
// swing 4258 -> 3516 -> 4242, W2 the swing 3516 -> 4242 -> 3672, W3
// the swing 4242 -> 3672 -> 4145 - THREE REAL WINDOWS THREE SPEAKS.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { entityIdCensus, entityIdConsistent, entityIdTrendRow } from '../../src/lib/entityidtrend.mjs'

const REAL_L = '[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged in with entity id 272 at (-128.5, 73.0, 391.5)'
const REAL_L2 = '[21:15:16] [Server thread/INFO]: YardSurvey[/127.0.0.1:43464] logged in with entity id 9 at (-126.5, 63.0, 395.5)'
const REAL_HIGH = '[13:20:53] [Server thread/INFO]: F11[/127.0.0.1:50772] logged in with entity id 4258 at (-104.49995226879878, 67.0, 408.58988304549314)'

test('v0.976.297 census: the REAL lines byte-exact and the peak prices', () => {
  assert.deepEqual(entityIdCensus([REAL_L, REAL_L2]), { maxEntityId: 272 }, 'the bare-name skin rides, the peak wins')
  assert.deepEqual(entityIdCensus([REAL_L, REAL_HIGH]), { maxEntityId: 4258 }, 'the full-precision coord skin rides, the peak wins (the F492 face)')
})

test('v0.976.297 census: the junk faces stay honest', () => {
  assert.deepEqual(entityIdCensus([]), { maxEntityId: 0 }, 'the never-logged face the lawful zero')
  assert.equal(entityIdCensus(null), null, 'the .278 convention')
  assert.equal(entityIdCensus(7), null)
})

test('v0.976.297 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(entityIdCensus(['F4 ' + REAL_L]).maxEntityId, 0, 'bot-tagged prefix')
  assert.equal(entityIdCensus(['[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged in entity id 272 at (-128.5, 73.0, 391.5)']).maxEntityId, 0, 'missing with')
  assert.equal(entityIdCensus(['[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged on with entity id 272 at (-128.5, 73.0, 391.5)']).maxEntityId, 0, 'altered verb')
  assert.equal(entityIdCensus(['[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged in with entity id 272.0 at (-128.5, 73.0, 391.5)']).maxEntityId, 0, 'float id')
  assert.equal(entityIdCensus(['[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged in with entity id 0272 at (-128.5, 73.0, 391.5)']).maxEntityId, 0, 'leading-zero id')
  assert.equal(entityIdCensus(['[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged in with entity id -272 at (-128.5, 73.0, 391.5)']).maxEntityId, 0, 'negative id')
  assert.equal(entityIdCensus(['[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged in with entity id 272']).maxEntityId, 0, 'missing tail')
  assert.equal(entityIdCensus(['[21:15:29] [Server thread/INFO]: F1[/127.0.0.1:37486] logged in with entity id 272 at (-128, 73.0, 391.5)']).maxEntityId, 0, 'integer coord')
  assert.equal(entityIdCensus(['[21:15:29] [Server thread/INFO]: F1[127.0.0.1:37486] logged in with entity id 272 at (-128.5, 73.0, 391.5)']).maxEntityId, 0, 'socket slash missing')
  assert.equal(entityIdCensus([' ' + REAL_L]).maxEntityId, 0, 'leading whitespace')
  assert.equal(entityIdCensus([REAL_L + ' ok']).maxEntityId, 0, 'trailing junk')
  assert.equal(entityIdCensus([REAL_L + '\r']).maxEntityId, 0, 'CR tail')
})

test('v0.976.297 fence: every branch prices', () => {
  const ok = { back: { maxEntityId: 4258 }, prev: { maxEntityId: 3516 }, cur: { maxEntityId: 4242 } }
  assert.equal(entityIdConsistent(ok), true)
  assert.equal(entityIdConsistent(null), false)
  assert.equal(entityIdConsistent({}), false)
  assert.equal(entityIdConsistent({ back: { maxEntityId: 1 }, prev: { maxEntityId: 1 } }), false, 'missing face')
  assert.equal(entityIdConsistent({ back: { maxEntityId: -1 }, prev: { maxEntityId: 1 }, cur: { maxEntityId: 1 } }), false, 'negative')
  assert.equal(entityIdConsistent({ back: { maxEntityId: 1.5 }, prev: { maxEntityId: 1 }, cur: { maxEntityId: 1 } }), false, 'non-integer')
})

test('v0.976.297 shape: the REAL W1 swing byte-exact (4258 -> 3516 -> 4242)', () => {
  const row = entityIdTrendRow({ back: { maxEntityId: 4258 }, prev: { maxEntityId: 3516 }, cur: { maxEntityId: 4242 } })
  assert.match(row, /the login entity id's own swing - 4258 -> 3516 \(-742\) -> 4242 \(\+726\) - the world's own crowd ebbed and returned between the faces/)
  assert.match(row, /the server login trend \(v0\.976\.297\):/)
})

test('v0.976.297 shape: the fade and the swell and the held law and the three-face zero', () => {
  const fade = entityIdTrendRow({ back: { maxEntityId: 5000 }, prev: { maxEntityId: 4000 }, cur: { maxEntityId: 3000 } })
  assert.match(fade, /the login entity id's own fade ran two steps deep - 5000 -> 4000 \(-1000\) -> 3000 \(-1000\) - the world's own crowd thinned/)
  const swell = entityIdTrendRow({ back: { maxEntityId: 3000 }, prev: { maxEntityId: 4000 }, cur: { maxEntityId: 5000 } })
  assert.match(swell, /the login entity id's own swell ran two steps deep - 3000 -> 4000 \(\+1000\) -> 5000 \(\+1000\) - the world's own crowd grew/)
  assert.equal(entityIdTrendRow({ back: { maxEntityId: 1000 }, prev: { maxEntityId: 1000 }, cur: { maxEntityId: 2000 } }), null, 'the held first step')
  assert.equal(entityIdTrendRow({ back: { maxEntityId: 1000 }, prev: { maxEntityId: 2000 }, cur: { maxEntityId: 2000 } }), null, 'the held second step')
  assert.equal(entityIdTrendRow({ back: { maxEntityId: 0 }, prev: { maxEntityId: 0 }, cur: { maxEntityId: 0 } }), null, 'the three-face zero')
  assert.equal(entityIdTrendRow({ back: { maxEntityId: 1 }, prev: { maxEntityId: 2 }, cur: null }), null, 'the fence fail')
})
