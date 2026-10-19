// (v0.976.296) THE SETBLOCK REFUSAL'S OWN LAWFUL-ZERO MASS - the test
// pins. REAL lines byte-exact: F496's own face (run 39287423190)
// carries '[16:57:27] [Server thread/INFO]: Could not set the block'
// four times riding the 'Changed the block at' echo conversation; the
// REAL thirteen-face arc: twelve faces audited flat 4 (the
// setblock-arc-mine-0043.mjs record) and F496's own face voicing 4 -
// every REAL window held, the word born into the lawful silence (the
// .288 counterwt held-prairie birth the precedent holds); the
// synthetic swell/fade/swing the shape logic's own proof (the .287
// counterreboots synthetic-shape precedent holds).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { setblockRefusalCensus, setblockRefusalConsistent, setblockRefusalTrendRow } from '../../src/lib/setblockrefusaltrend.mjs'

const REAL_L = '[16:57:27] [Server thread/INFO]: Could not set the block'
const REAL_L_ECHO = '[16:57:27] [Server thread/INFO]: Changed the block at -111, 72, 395'
const REAL_L_FILL = '[16:57:27] [Server thread/INFO]: Successfully filled 1537 block(s)'

test('v0.976.296 census: the REAL lines byte-exact and the lane counts whole', () => {
  assert.deepEqual(setblockRefusalCensus([REAL_L, REAL_L, REAL_L, REAL_L]), { refusals: 4 }, 'the REAL F496 face (four refusals)')
  assert.deepEqual(setblockRefusalCensus(['noise', REAL_L_ECHO, REAL_L, REAL_L_FILL, REAL_L]), { refusals: 2 }, 'the count never caps (the .232 law) and the sibling lanes never ride')
})

test('v0.976.296 census: the junk faces stay honest', () => {
  assert.deepEqual(setblockRefusalCensus([]), { refusals: 0 })
  assert.equal(setblockRefusalCensus(null), null, 'the .278 convention')
  assert.equal(setblockRefusalCensus(7), null)
})

test('v0.976.296 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(setblockRefusalCensus(['F4 ' + REAL_L]).refusals, 0, 'bot-tagged prefix')
  assert.equal(setblockRefusalCensus(['[16:57:27] [Server thread/WARN]: Could not set the block']).refusals, 0, 'WARN frame')
  assert.equal(setblockRefusalCensus(['[16:57:27] [Server thread/INFO]: Could not  set the block']).refusals, 0, 'pretty spacing')
  assert.equal(setblockRefusalCensus(['[16:57:27] [Server thread/INFO]: Could not set the block.']).refusals, 0, 'trailing period')
  assert.equal(setblockRefusalCensus(['[16:57:27] [Server thread/INFO]: could not set the block']).refusals, 0, 'lowercase skin')
  assert.equal(setblockRefusalCensus(['[16:57:27] [Server thread/INFO]: Could not place the block']).refusals, 0, 'altered verb')
  assert.equal(setblockRefusalCensus(['[16:57:27] [Server thread/INFO]: Could not set the blocks']).refusals, 0, 'plural body')
  assert.equal(setblockRefusalCensus([' ' + REAL_L]).refusals, 0, 'leading whitespace')
  assert.equal(setblockRefusalCensus([REAL_L + ' ok']).refusals, 0, 'trailing junk')
  assert.equal(setblockRefusalCensus([REAL_L_ECHO]).refusals, 0, "the 'Changed the block at' sibling echo line")
  assert.equal(setblockRefusalCensus([REAL_L_FILL]).refusals, 0, "the 'Successfully filled' sibling volume line")
  assert.equal(setblockRefusalCensus([REAL_L + '\r']).refusals, 0, 'CR tail')
})

test('v0.976.296 fence: every branch prices', () => {
  const ok = { back: { refusals: 4 }, prev: { refusals: 4 }, cur: { refusals: 4 } }
  assert.equal(setblockRefusalConsistent(ok), true)
  assert.equal(setblockRefusalConsistent(null), false)
  assert.equal(setblockRefusalConsistent({}), false)
  assert.equal(setblockRefusalConsistent({ back: { refusals: 1 }, prev: { refusals: 1 } }), false, 'missing face')
  assert.equal(setblockRefusalConsistent({ back: { refusals: -1 }, prev: { refusals: 1 }, cur: { refusals: 1 } }), false, 'negative')
  assert.equal(setblockRefusalConsistent({ back: { refusals: 1.5 }, prev: { refusals: 1 }, cur: { refusals: 1 } }), false, 'non-integer')
})

test('v0.976.296 shape: the REAL birth window the lawful silence keeps (4 -> 4 -> 4)', () => {
  const e = { back: { refusals: 4 }, prev: { refusals: 4 }, cur: { refusals: 4 } }
  assert.equal(setblockRefusalTrendRow(e), null, 'the REAL thirteen-face flat prairie - every window the held law keeps silent (the word born into the lawful silence, the .288 counterwt precedent)')
  assert.equal(setblockRefusalTrendRow({ back: { refusals: 0 }, prev: { refusals: 0 }, cur: { refusals: 0 } }), null, 'the three-face zero')
  assert.equal(setblockRefusalTrendRow({ back: { refusals: 4 }, prev: { refusals: 4 }, cur: { refusals: 5 } }), null, 'the held first step (the day the arc varies the second step prices)')
  assert.equal(setblockRefusalTrendRow({ back: { refusals: 4 }, prev: { refusals: 5 }, cur: null }), null, 'the fence fail')
})

test('v0.976.296 shape: the synthetic swell and the fade and the swing byte-exact', () => {
  const swell = setblockRefusalTrendRow({ back: { refusals: 2 }, prev: { refusals: 3 }, cur: { refusals: 4 } })
  assert.match(swell, /the setblock refusal's own swell ran two steps deep - 2 -> 3 \(\+1\) -> 4 \(\+1\) - the refusals grew/)
  assert.match(swell, /the setblock refusal trend \(v0\.976\.296\):/)
  const fade = setblockRefusalTrendRow({ back: { refusals: 4 }, prev: { refusals: 3 }, cur: { refusals: 2 } })
  assert.match(fade, /the setblock refusal's own fade ran two steps deep - 4 -> 3 \(-1\) -> 2 \(-1\) - the fills met fewer walls/)
  const swing = setblockRefusalTrendRow({ back: { refusals: 3 }, prev: { refusals: 5 }, cur: { refusals: 4 } })
  assert.match(swing, /the setblock refusal's own swing - 3 -> 5 \(\+2\) -> 4 \(-1\) - the refusals traded between the faces/)
})
