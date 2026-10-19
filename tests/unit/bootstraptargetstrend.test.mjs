/**
 * bootstraptargetstrend.test.mjs - (v0.976.279) THE BOOTSTRAP TARGETS
 * LINE'S OWN ASSIGNMENT MASS - the launch line's own targets cell the
 * word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the eight fleet faces'
 * own launch lines):
 *   F478-F485: 'launching 19 bots for 600s -> targets sand, gravel,
 *   dirt, stone'
 * the eight-face arc 4 -> 4 -> 4 -> 4 -> 4 -> 4 -> 4 -> 4 no row read
 * - the word takes the seat, the pins ride the faces byte-exact, the
 * birth the held law's own honest silence prices.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bootstrapTargetsCensus, bootstrapTargetsConsistent, bootstrapTargetsTrendRow } from '../../src/lib/bootstraptargetstrend.mjs'

// the REAL face lines byte-exact (the launch lines' own shape - one
// print per face, the same template all eight faces rode)
const F478 = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
const F479 = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
const F480 = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
const F481 = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
const F482 = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
const F483 = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
const F484 = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
const F485 = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
const REAL = { targetCount: 4, bots: 19, seconds: 600, scout: 0, list: 'sand, gravel, dirt, stone' }

test('the REAL faces byte-exact - the census rides all eight launch lines', () => {
  assert.deepEqual(bootstrapTargetsCensus([F478]), REAL)
  assert.deepEqual(bootstrapTargetsCensus([F479]), REAL)
  assert.deepEqual(bootstrapTargetsCensus([F480]), REAL)
  assert.deepEqual(bootstrapTargetsCensus([F481]), REAL)
  assert.deepEqual(bootstrapTargetsCensus([F482]), REAL)
  assert.deepEqual(bootstrapTargetsCensus([F483]), REAL)
  assert.deepEqual(bootstrapTargetsCensus([F484]), REAL)
  assert.deepEqual(bootstrapTargetsCensus([F485]), REAL)
  // the eight lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(bootstrapTargetsCensus([F478, F479, F480, F481, F482, F483, F484, F485]), REAL)
  // the scout-tail variant the emitter's own optional byte prints - the
  // lawful ride (the SCOUT=true face the template holds)
  const scouted = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone (+1 ground scout)'
  assert.deepEqual(bootstrapTargetsCensus([scouted]), { ...REAL, scout: 1 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(bootstrapTargetsCensus(null), null)
  assert.equal(bootstrapTargetsCensus(undefined), null)
  assert.equal(bootstrapTargetsCensus('launching 19 bots'), null)
  assert.equal(bootstrapTargetsCensus(42), null)
  // junk lines - the lawful zero (the never-launched face)
  assert.deepEqual(bootstrapTargetsCensus([]), { targetCount: 0, bots: 0, seconds: 0, scout: 0, list: '' })
  assert.deepEqual(bootstrapTargetsCensus(['total chaos, no launch here']), { targetCount: 0, bots: 0, seconds: 0, scout: 0, list: '' })
  assert.deepEqual(bootstrapTargetsCensus([null, 42, 'junk', F478]), REAL)
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  const Z = { targetCount: 0, bots: 0, seconds: 0, scout: 0, list: '' }
  // the fused tail - the list ends at whitespace or line end, never
  // mid-token (the fused separator skin the join never prints)
  const fused = 'launching 19 bots for 600s -> targets sand,gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([fused]), Z)
  // the fused scout skin - the scout byte the literal tail holds, the
  // fused junk the grammar refuses
  const fusedScout = 'launching 19 bots for 600s -> targets sand, gravel, dirt, stone (+1 ground scout)junk'
  assert.deepEqual(bootstrapTargetsCensus([fusedScout]), Z)
  // the leading zero - the .248 house law (the bots cell)
  const leading = 'launching 019 bots for 600s -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([leading]), Z)
  // the leading zero (the seconds cell)
  const leadingSecs = 'launching 19 bots for 0600s -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([leadingSecs]), Z)
  // the negative count
  const negative = 'launching -19 bots for 600s -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([negative]), Z)
  // the pretty spacing - the emitter's own template order byte-exact
  const pretty = 'launching 19  bots for 600s -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([pretty]), Z)
  // the altered order - the template's own sequence
  const altered = 'launching 19 bots for 600s launching -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([altered]), Z)
  const reordered = 'for 600s -> targets sand, gravel, dirt, stone launching 19 bots'
  assert.deepEqual(bootstrapTargetsCensus([reordered]), Z)
  // the truncated head - the 'launching ' anchor rides whole
  const truncated = '19 bots for 600s -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([truncated]), Z)
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-7] launching 19 bots for 600s -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([tagged]), Z)
  // the bare cell without the frame
  assert.deepEqual(bootstrapTargetsCensus(['targets sand, gravel, dirt, stone']), Z)
  // the wrong frame - the launch verb the template holds
  const wrong = 'launched 19 bots for 600s -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([wrong]), Z)
  // the drifted template - the 'targets' head the list rides behind
  const drifted = 'launching 19 bots for 600s -> target sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([drifted]), Z)
  // the fused seconds skin - the 's' cell the template holds
  const fusedSecs = 'launching 19 bots for 600 s -> targets sand, gravel, dirt, stone'
  assert.deepEqual(bootstrapTargetsCensus([fusedSecs]), Z)
  // the list the join's own comma-space order holds - the single-comma
  // skin rides (the emitter's own join never prints ', ' differently)
  const twoTargets = 'launching 19 bots for 600s -> targets sand, gravel'
  assert.deepEqual(bootstrapTargetsCensus([twoTargets]), { ...REAL, targetCount: 2, list: 'sand, gravel' })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { targetCount: 4, bots: 19, seconds: 600, scout: 0 }, prev: { targetCount: 3, bots: 19, seconds: 600, scout: 0 }, cur: { targetCount: 2, bots: 19, seconds: 600, scout: 0 } }
  assert.equal(bootstrapTargetsConsistent(good), true)
  // the null and the non-object
  assert.equal(bootstrapTargetsConsistent(null), false)
  assert.equal(bootstrapTargetsConsistent(undefined), false)
  assert.equal(bootstrapTargetsConsistent(42), false)
  assert.equal(bootstrapTargetsConsistent([good]), false)
  // the missing face
  assert.equal(bootstrapTargetsConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(bootstrapTargetsConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(bootstrapTargetsConsistent({ back: { targetCount: 1.5, bots: 19, seconds: 600, scout: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(bootstrapTargetsConsistent({ back: { targetCount: -1, bots: 19, seconds: 600, scout: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(bootstrapTargetsConsistent({ back: { targetCount: NaN, bots: 19, seconds: 600, scout: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(bootstrapTargetsConsistent({ back: { targetCount: 4, bots: 1.5, seconds: 600, scout: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(bootstrapTargetsConsistent({ back: { targetCount: 4, bots: 19, seconds: 1.5, scout: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(bootstrapTargetsConsistent({ back: { targetCount: 4, bots: 19, seconds: 600, scout: 1.5 }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(bootstrapTargetsConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(bootstrapTargetsConsistent({ back: { targetCount: 0, bots: 0, seconds: 0, scout: 0 }, prev: { targetCount: 0, bots: 0, seconds: 0, scout: 0 }, cur: { targetCount: 0, bots: 0, seconds: 0, scout: 0 } }), true)
})

test('the shapes byte-exact - the REAL six windows the honest silences, the synthetic arcs the machinery proves', () => {
  const TAIL = "(the worldmap tail word's row keeps the report frame's own positions/chunks end-state seat (the .252 word - a different emitter's lane, the report's own end read never the launch), the maptrip row keeps the trip lane's own parse, the pulse map row keeps the tick cell's seat (the .260 word), the autosave merge row keeps the disk pulse's seat (the .262 word), the counters spawned row keeps the bootstrap end-state seat (the .277 word - its grammar anchors the counters line's own bytes, its bots side-car never this line's own bots cell) - the assignment mass's row alone, co-existence by seat never by duplication)"
  const f = (x, y, s) => ({ targetCount: x, bots: y, seconds: s, scout: 0 })
  // the six REAL windows - the whole arc rode 4, every window the
  // held law's own honest silence prices
  assert.equal(bootstrapTargetsTrendRow({ back: f(4, 19, 600), prev: f(4, 19, 600), cur: f(4, 19, 600) }), null)
  // the fade shape - the synthetic byte-exact (the day the config
  // narrowed the hand)
  const fade = { back: f(4, 19, 600), prev: f(3, 19, 600), cur: f(2, 19, 600) }
  assert.match(bootstrapTargetsTrendRow(fade), /^the bootstrap targets trend \(v0\.976\.279\): the assignment weather's own fade ran two steps deep - 4 -> 3 \(-1\) -> 2 \(-1\)/)
  assert.match(bootstrapTargetsTrendRow(fade), /the assignment mass's own fade, the bots rode 19 -> 19 -> 19, the seconds rode 600 -> 600 -> 600, the scout byte rode 0 -> 0 -> 0 \(the worldmap tail word's row keeps/)
  // the swell shape - the synthetic byte-exact (the config grew the hand)
  const swell = { back: f(2, 19, 600), prev: f(3, 19, 600), cur: f(4, 19, 600) }
  assert.match(bootstrapTargetsTrendRow(swell), /^the bootstrap targets trend \(v0\.976\.279\): the assignment weather's own swell ran two steps deep - 2 -> 3 \(\+1\) -> 4 \(\+1\)/)
  // the swing shape - the synthetic byte-exact (the trade)
  const swing = { back: f(4, 19, 600), prev: f(3, 19, 600), cur: f(4, 19, 600) }
  assert.match(bootstrapTargetsTrendRow(swing), /^the bootstrap targets trend \(v0\.976\.279\): the assignment weather's own swing - 4 -> 3 \(-1\) -> 4 \(\+1\)/)
  assert.match(bootstrapTargetsTrendRow(swing), /the fade and the swell traded seats between the faces, the bots rode 19 -> 19 -> 19/)
  // the scout byte's own arc rides (the SCOUT=true face the synthetics hold)
  const scouted = { back: { targetCount: 4, bots: 19, seconds: 600, scout: 0 }, prev: { targetCount: 3, bots: 20, seconds: 300, scout: 1 }, cur: { targetCount: 2, bots: 20, seconds: 300, scout: 1 } }
  assert.match(bootstrapTargetsTrendRow(scouted), /the bots rode 19 -> 20 -> 20, the seconds rode 600 -> 300 -> 300, the scout byte rode 0 -> 1 -> 1/)
  // the three-face zero - the family's own shape keeps the silence
  const zeros = { back: f(0, 0, 0), prev: f(0, 0, 0), cur: f(0, 0, 0) }
  assert.equal(bootstrapTargetsTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(bootstrapTargetsTrendRow(null), null)
  assert.equal(bootstrapTargetsTrendRow({ back: { junk: 1 }, prev: { targetCount: 2, bots: 3, seconds: 4, scout: 0 }, cur: { targetCount: 3, bots: 3, seconds: 4, scout: 0 } }), null)
})
// zero the family's own shape keeps silent - the never-launched face
// the lawful zero prices; the seats never merge - the worldmap tail
// row and the maptrip row and the pulse map row and the autosave merge
// row and the counters spawned row keep their lanes, the assignment
// mass's row alone rides here.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.
