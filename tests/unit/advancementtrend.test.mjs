/**
 * advancementtrend.test.mjs - (v0.976.278) THE SERVER ADVANCEMENT'S
 * OWN ACHIEVEMENT MASS - the server console's own advancement lines
 * the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the ten server-console
 * faces' own advancement lines, run 39174346168 .. 39214842713):
 *   F478: 36 advancements, 3 names   F483: 29 advancements, 3 names
 *   F479: 37 advancements, 3 names   F484: 28 advancements, 3 names
 *   F480: 38 advancements, 3 names   F485: 34 advancements, 3 names
 *   F481: 31 advancements, 4 names   F486: 31 advancements, 3 names
 *   F482: 31 advancements, 3 names   F487: 30 advancements, 3 names
 * the ten-face arc 36 -> 37 -> 38 -> 31 -> 31 -> 29 -> 28 -> 34 -> 31
 * -> 30 no row read - the word takes the seat, the fieldproof rides
 * the full faces (scripts/fieldread-advancement-1643.mjs, 10/10),
 * the pins ride the REAL lines byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { advancementCensus, advancementConsistent, advancementTrendRow } from '../../src/lib/advancementtrend.mjs'

// the REAL lines byte-exact (the server console's own broadcasts)
const L1 = '[23:11:46] [Server thread/INFO]: F1 has made the advancement [Stone Age]'
const L2 = '[23:12:00] [Server thread/INFO]: F10 has made the advancement [Stone Age]'
const L3 = '[23:12:49] [Server thread/INFO]: F15 has made the advancement [Stone Age]'
const L4 = '[23:24:09] [Server thread/INFO]: F16 has made the advancement [Monster Hunter]'
const L5 = '[02:36:21] [Server thread/INFO]: F9 has made the advancement [Acquire Hardware]'
const L6 = '[02:39:35] [Server thread/INFO]: F5 has made the advancement [Monster Hunter]'
const L7 = '[07:41:12] [Server thread/INFO]: F15 has made the advancement [Getting an Upgrade]'

test('the REAL lines byte-exact - the census sums the lane whole', () => {
  // one line one advancement (the .232 census law)
  assert.deepEqual(advancementCensus([L1]), { advancements: 1, names: 1 })
  // the same name repeated - the sum rides, the breadth holds one
  assert.deepEqual(advancementCensus([L1, L2, L3]), { advancements: 3, names: 1 })
  // the four names the ten faces earned - the breadth hand rides four
  assert.deepEqual(advancementCensus([L1, L2, L3, L4, L5, L6, L7]), { advancements: 7, names: 4 })
  // the order never matters - the sum is the lane's own law
  assert.deepEqual(advancementCensus([L7, L4, L1]), { advancements: 3, names: 3 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(advancementCensus(null), null)
  assert.equal(advancementCensus(undefined), null)
  assert.equal(advancementCensus('[23:11:46] [Server thread/INFO]: F1 has made the advancement [Stone Age]'), null)
  assert.equal(advancementCensus(42), null)
  // junk lines - the lawful zero (the never-advancing face)
  assert.deepEqual(advancementCensus([]), { advancements: 0, names: 0 })
  assert.deepEqual(advancementCensus(['total chaos, no advancements here']), { advancements: 0, names: 0 })
  assert.deepEqual(advancementCensus([null, 42, 'junk', L1]), { advancements: 1, names: 1 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the wrong frame - the server's own channel byte-exact
  const wrongFrame = '[23:11:46] [Server thread/WARN]: F1 has made the advancement [Stone Age]'
  assert.deepEqual(advancementCensus([wrongFrame]), { advancements: 0, names: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = 'x ' + L1
  assert.deepEqual(advancementCensus([tagged]), { advancements: 0, names: 0 })
  // the pretty spacing - the emitter's own template byte-exact
  const pretty = '[23:11:46] [Server thread/INFO]:  F1 has made the advancement [Stone Age]'
  assert.deepEqual(advancementCensus([pretty]), { advancements: 0, names: 0 })
  // the missing closing bracket - the tail boundary the cell holds
  const unclosed = '[23:11:46] [Server thread/INFO]: F1 has made the advancement [Stone Age'
  assert.deepEqual(advancementCensus([unclosed]), { advancements: 0, names: 0 })
  // the altered prose - the emitter's own body
  const altered = '[23:11:46] [Server thread/INFO]: F1 made the advancement [Stone Age]'
  assert.deepEqual(advancementCensus([altered]), { advancements: 0, names: 0 })
  // the digits in the name cell - the proven letters-and-spaces shape
  const digits = '[23:11:46] [Server thread/INFO]: F1 has made the advancement [Stone Age 2]'
  assert.deepEqual(advancementCensus([digits]), { advancements: 0, names: 0 })
  // the bare prose without the frame
  assert.deepEqual(advancementCensus(['F1 has made the advancement [Stone Age]']), { advancements: 0, names: 0 })
  // the truncated head - the timestamp the anchor rides whole
  const truncated = '[23:11:46] [Server thread/INFO]: F1 has made'
  assert.deepEqual(advancementCensus([truncated]), { advancements: 0, names: 0 })
  // the malformed clock - the frame's own shape
  const badClock = '[23:11] [Server thread/INFO]: F1 has made the advancement [Stone Age]'
  assert.deepEqual(advancementCensus([badClock]), { advancements: 0, names: 0 })
  // the zero rides - the zero lawful
  assert.deepEqual(advancementCensus([L1]), { advancements: 1, names: 1 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { advancements: 36, names: 3 }, prev: { advancements: 37, names: 3 }, cur: { advancements: 38, names: 3 } }
  assert.equal(advancementConsistent(good), true)
  // the null and the non-object
  assert.equal(advancementConsistent(null), false)
  assert.equal(advancementConsistent(undefined), false)
  assert.equal(advancementConsistent(42), false)
  assert.equal(advancementConsistent([good]), false)
  // the missing face
  assert.equal(advancementConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(advancementConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(advancementConsistent({ back: { advancements: 1.5, names: 3 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(advancementConsistent({ back: { advancements: -1, names: 3 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(advancementConsistent({ back: { advancements: 0, names: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(advancementConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(advancementConsistent({ back: { advancements: 0, names: 0 }, prev: { advancements: 0, names: 0 }, cur: { advancements: 0, names: 0 } }), true)
})

test('the shapes byte-exact - the REAL eight windows price six, the held two the honest silence', () => {
  const TAIL = "(the deathcause module's chat-exclusion list keeps the advancement line its own refusal (never a pricing), the doom ledger keeps the deaths' own prose lane, the columntoll and deathkinds words keep the fleet's own death relay (a different emitter), the alive word's row keeps the survival seat (the .275 word), the upgradecensus module keeps the smith chain's own lane (the v0.465.0 word - the fleet's own [toolupgrade] emitter), the counterstrend family keeps the counters line's own seats (the .261-.277 band) - the achievement mass's row alone, co-existence by seat never by duplication)"
  const f = (a, n) => ({ advancements: a, names: n })
  const w = (a, b, c) => ({ back: a, prev: b, cur: c })
  // the W478-479-480 swell - the real window byte-exact (36 -> 37 -> 38)
  assert.equal(advancementTrendRow(w(f(36, 3), f(37, 3), f(38, 3))), "the server advancements trend (v0.976.278): the achievement weather's own swell ran two steps deep - 36 -> 37 (+1) -> 38 (+1) - the achievement mass's own swell, the names rode 3 -> 3 -> 3 " + TAIL)
  // the W479-480-481 swing - the real window byte-exact (37 -> 38 -> 31)
  assert.equal(advancementTrendRow(w(f(37, 3), f(38, 3), f(31, 4))), "the server advancements trend (v0.976.278): the achievement weather's own swing - 37 -> 38 (+1) -> 31 (-7) - the fade and the swell traded seats between the faces, the names rode 3 -> 3 -> 4 " + TAIL)
  // the W480-481-482 held second step - the honest silence (38 -> 31 -> 31)
  assert.equal(advancementTrendRow(w(f(38, 3), f(31, 4), f(31, 3))), null)
  // the W481-482-483 held first step - the honest silence (31 -> 31 -> 29)
  assert.equal(advancementTrendRow(w(f(31, 4), f(31, 3), f(29, 3))), null)
  // the W482-483-484 fade - the real window byte-exact (31 -> 29 -> 28)
  assert.equal(advancementTrendRow(w(f(31, 3), f(29, 3), f(28, 3))), "the server advancements trend (v0.976.278): the achievement weather's own fade ran two steps deep - 31 -> 29 (-2) -> 28 (-1) - the achievement mass's own fade, the names rode 3 -> 3 -> 3 " + TAIL)
  // the W483-484-485 swing - the real window byte-exact (29 -> 28 -> 34)
  assert.equal(advancementTrendRow(w(f(29, 3), f(28, 3), f(34, 3))), "the server advancements trend (v0.976.278): the achievement weather's own swing - 29 -> 28 (-1) -> 34 (+6) - the fade and the swell traded seats between the faces, the names rode 3 -> 3 -> 3 " + TAIL)
  // the W484-485-486 swing - the real window byte-exact (28 -> 34 -> 31)
  assert.equal(advancementTrendRow(w(f(28, 3), f(34, 3), f(31, 3))), "the server advancements trend (v0.976.278): the achievement weather's own swing - 28 -> 34 (+6) -> 31 (-3) - the fade and the swell traded seats between the faces, the names rode 3 -> 3 -> 3 " + TAIL)
  // the W485-486-487 fade - the real window byte-exact (34 -> 31 -> 30)
  assert.equal(advancementTrendRow(w(f(34, 3), f(31, 3), f(30, 3))), "the server advancements trend (v0.976.278): the achievement weather's own fade ran two steps deep - 34 -> 31 (-3) -> 30 (-1) - the achievement mass's own fade, the names rode 3 -> 3 -> 3 " + TAIL)
  // the three-face zero - the lawful silence (the server never witnessed)
  const zeros = { back: { advancements: 0, names: 0 }, prev: { advancements: 0, names: 0 }, cur: { advancements: 0, names: 0 } }
  assert.equal(advancementTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(advancementTrendRow(null), null)
  assert.equal(advancementTrendRow({ back: { advancements: 1 }, prev: { advancements: 2 }, cur: { advancements: 3 } }), null)
})
