// (v0.976.294) THE SERVER BOOT'S OWN DONE MASS - the test pins.
// REAL lines byte-exact: F495's own face (run 39281865630) carries
// '[16:11:11] [Server thread/INFO]: Done (3.009s)! For help, type
// "help"', F494's own face (run 39268802792) carries '[14:42:22]
// [Server thread/INFO]: Done (4.225s)! For help, type "help"'; the
// REAL twelve-face arc: run36284626465 4.740s, run36286821015 3.263s,
// run36289053811 4.847s, run36292057377 4.762s, run36295859380
// 3.343s, run36301385048 4.617s, F478 3.728s, F486 5.062s, F488
// 4.813s, F493 4.834s, F494 4.225s, F495 3.009s - TEN REAL WINDOWS
// TEN SPEAKS (W1 swing 4.740 -> 3.263 -> 4.847, W2 swing 3.263 ->
// 4.847 -> 4.762, W3 fade 4.847 -> 4.762 -> 3.343, W4 swing 4.762 ->
// 3.343 -> 4.617, W5 swing 3.343 -> 4.617 -> 3.728, W6 swing 4.617
// -> 3.728 -> 5.062, W7 swing 3.728 -> 5.062 -> 4.813, W8 swing
// 5.062 -> 4.813 -> 4.834, W9 swing 4.813 -> 4.834 -> 4.225, W10
// fade 4.834 -> 4.225 -> 3.009 - zero helds the family's
// strongest-or-equal birth the .290 word's own precedent holds).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bootDoneCensus, bootDoneConsistent, bootDoneTrendRow } from '../../src/lib/bootdonetrend.mjs'

const REAL_F495 = '[16:11:11] [Server thread/INFO]: Done (3.009s)! For help, type "help"'
const REAL_F494 = '[14:42:22] [Server thread/INFO]: Done (4.225s)! For help, type "help"'
const REAL_W1A = '[01:22:53] [Server thread/INFO]: Done (4.740s)! For help, type "help"'
const REAL_ZERO = '[16:11:11] [Server thread/INFO]: Done (0.842s)! For help, type "help"'

test('v0.976.294 census: the REAL lines byte-exact and the lane sums whole', () => {
  assert.deepEqual(bootDoneCensus([REAL_F495]), { ms: 3009 })
  assert.deepEqual(bootDoneCensus([REAL_F494]), { ms: 4225 })
  assert.deepEqual(bootDoneCensus([REAL_W1A]), { ms: 4740 }, 'the trailing zero the %.3f pads the sum keeps whole')
  assert.deepEqual(bootDoneCensus([REAL_ZERO]), { ms: 842 }, 'the sub-second boot the zero integer part prices lawful')
  assert.deepEqual(bootDoneCensus([REAL_F495, REAL_F494]), { ms: 7234 }, 'a mid-face reboot both boots price (the .232 sum law)')
})

test('v0.976.294 census: the junk faces stay honest', () => {
  assert.deepEqual(bootDoneCensus([]), { ms: 0 })
  assert.equal(bootDoneCensus(null), null, 'the .278 convention')
  assert.equal(bootDoneCensus(7), null)
  assert.equal(bootDoneCensus(['[14:42:22] [Server thread/INFO]: Preparing spawn area: 4%']).ms, 0, 'the sibling prose line the census never prices')
})

test('v0.976.294 near-miss skins: the forms the grammar refuses', () => {
  assert.equal(bootDoneCensus(['F4 [16:11:11] [Server thread/INFO]: Done (3.009s)! For help, type "help"']).ms, 0, 'bot-tagged prefix')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done ( 3.009s)! For help, type "help"']).ms, 0, 'pretty spacing')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3s)! For help, type "help"']).ms, 0, 'integer seconds skin')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3.01s)! For help, type "help"']).ms, 0, 'two decimals skin')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3.0009s)! For help, type "help"']).ms, 0, 'four decimals skin')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (03.009s)! For help, type "help"']).ms, 0, 'leading-zero seconds')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (-3.009s)! For help, type "help"']).ms, 0, 'negative seconds')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3.009ms)! For help, type "help"']).ms, 0, 'altered unit')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3.009S)! For help, type "help"']).ms, 0, 'uppercase unit')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3.009s) For help, type "help"']).ms, 0, 'missing bang')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3.009s)! For help type "help"']).ms, 0, 'altered help tail')
  assert.equal(bootDoneCensus([' [16:11:11] [Server thread/INFO]: Done (3.009s)! For help, type "help"']).ms, 0, 'leading whitespace')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3.009s)! For help, type "help" ok']).ms, 0, 'trailing junk')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Dones (3.009s)! For help, type "help"']).ms, 0, 'plural head')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Completed (3.009s)! For help, type "help"']).ms, 0, 'altered verb')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/INFO]: Done (3.009s)! For help, type "help"\r']).ms, 0, 'CR tail')
  assert.equal(bootDoneCensus(['[16:11:11] [Server thread/WARN]: Done (3.009s)! For help, type "help"']).ms, 0, 'wrong thread')
  assert.equal(bootDoneCensus(["the drowning module's rescueDone and the jobqueue's recordSpinDone are their own function names"]).ms, 0, 'the function names the grep never means')
})

test('v0.976.294 fence: every branch prices', () => {
  const ok = { back: { ms: 4740 }, prev: { ms: 3263 }, cur: { ms: 4847 } }
  assert.equal(bootDoneConsistent(ok), true)
  assert.equal(bootDoneConsistent(null), false)
  assert.equal(bootDoneConsistent({}), false)
  assert.equal(bootDoneConsistent({ back: { ms: 1 }, prev: { ms: 1 } }), false, 'missing face')
  assert.equal(bootDoneConsistent({ back: { ms: -1 }, prev: { ms: 1 }, cur: { ms: 1 } }), false, 'negative')
  assert.equal(bootDoneConsistent({ back: { ms: 1.5 }, prev: { ms: 1 }, cur: { ms: 1 } }), false, 'non-integer')
  assert.equal(bootDoneConsistent({ back: { ms: 0 }, prev: { ms: 0 }, cur: { ms: 0 } }), true, 'the zero lawful - the no-boot face')
})

test('v0.976.294 shape: the REAL W1 swing byte-exact (4.740 -> 3.263 -> 4.847)', () => {
  const row = bootDoneTrendRow({ back: { ms: 4740 }, prev: { ms: 3263 }, cur: { ms: 4847 } })
  assert.match(row, /the boot done's own swing - 4\.740 -> 3\.263 \(-1\.477\) -> 4\.847 \(\+1\.584\) s - the boot total traded between the faces/)
  assert.match(row, /the server boot trend \(v0\.976\.294\):/)
})

test('v0.976.294 shape: the REAL W3 fade byte-exact (4.847 -> 4.762 -> 3.343)', () => {
  const row = bootDoneTrendRow({ back: { ms: 4847 }, prev: { ms: 4762 }, cur: { ms: 3343 } })
  assert.match(row, /the boot done's own fade ran two steps deep - 4\.847 -> 4\.762 \(-0\.085\) -> 3\.343 \(-1\.419\) s - the boot completed faster twice/)
})

test('v0.976.294 shape: the REAL W10 fade byte-exact (4.834 -> 4.225 -> 3.009)', () => {
  const row = bootDoneTrendRow({ back: { ms: 4834 }, prev: { ms: 4225 }, cur: { ms: 3009 } })
  assert.match(row, /the boot done's own fade ran two steps deep - 4\.834 -> 4\.225 \(-0\.609\) -> 3\.009 \(-1\.216\) s - the boot completed faster twice/)
})

test('v0.976.294 shape: the REAL twelve-face arc TEN WINDOWS TEN SPEAKS zero helds', () => {
  const faces = [4740, 3263, 4847, 4762, 3343, 4617, 3728, 5062, 4813, 4834, 4225, 3009]
  const kinds = []
  for (let i = 0; i + 2 < faces.length; i++) {
    const row = bootDoneTrendRow({ back: { ms: faces[i] }, prev: { ms: faces[i + 1] }, cur: { ms: faces[i + 2] } })
    assert.ok(row, `W${i + 1} the REAL window speaks - the honest silence never rides the arc`)
    kinds.push(row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE')
  }
  assert.deepEqual(kinds, ['SWING', 'SWING', 'FADE', 'SWING', 'SWING', 'SWING', 'SWING', 'SWING', 'SWING', 'FADE'], 'the REAL ten-window kinds byte-exact')
})

test('v0.976.294 shape: the swell and the held law and the three-face zero and the fence fail', () => {
  const swell = bootDoneTrendRow({ back: { ms: 1000 }, prev: { ms: 2000 }, cur: { ms: 3000 } })
  assert.match(swell, /the boot done's own swell ran two steps deep - 1\.000 -> 2\.000 \(\+1\.000\) -> 3\.000 \(\+1\.000\) s - the boot completed slower twice/)
  assert.equal(bootDoneTrendRow({ back: { ms: 4740 }, prev: { ms: 4740 }, cur: { ms: 4813 } }), null, 'the held first step')
  assert.equal(bootDoneTrendRow({ back: { ms: 0 }, prev: { ms: 0 }, cur: { ms: 0 } }), null, 'the three-face zero - the no-boot arc the silence prices')
  assert.equal(bootDoneTrendRow({ back: { ms: 4740 }, prev: { ms: 3263 }, cur: null }), null, 'the fence fail')
})
