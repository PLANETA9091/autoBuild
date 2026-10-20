import { test } from 'node:test'
import assert from 'node:assert/strict'
import { lossShapeCensus, lossShapeConsistent, lossShapeTrendRow } from '../../src/lib/losswidthshape.mjs'

// the REAL faces the byte-verified artifacts keep (the same lines the
// .335/.334/.333 words hold - the shape word re-rides the frames, the
// class cell its own)
const REAL = {
  f501: ['[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected'],
  f505: ['[23:44:19] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[00:00:20] [Server thread/INFO]: F3 lost connection: Timed out'],
  f506: ['[00:57:45] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[01:10:57] [Server thread/INFO]: F8 lost connection: Disconnected'],
  f515: ['[07:38:17] [Server thread/INFO]: F2 lost connection: Timed out',
    '[07:46:18] [Server thread/INFO]: F13 lost connection: Disconnected',
    '[07:47:34] [Server thread/INFO]: F19 lost connection: Timed out'],
  f519: ['[10:35:59] [Server thread/INFO]: F9 lost connection: Disconnected',
    '[10:52:00] [Server thread/INFO]: F4 lost connection: Disconnected']
}

test('v0.976.339 census: the REAL faces byte-exact and the shapes classify', () => {
  // F501's own face - the FLAT shape the normal order keeps: the dawn
  // 74434, the dusk 75321, dusk > dawn - the lane stayed inside its
  // own day
  assert.deepEqual(lossShapeCensus(REAL.f501), { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 })
  // F505's own face - the WRAP face the day boundary keeps: the dawn
  // 85459, the dusk 20 the next day's first seconds - the numeric
  // dusk < the numeric dawn the class names
  assert.deepEqual(lossShapeCensus(REAL.f505), { lossWrapFace: 1, lossFlatFace: 0, lossBreathFace: 0 })
  // F506's own face - the leading-zero-hour faces the grammar keeps, flat
  assert.deepEqual(lossShapeCensus(REAL.f506), { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 })
  // F515's own face - the honest band's own floor 557 the FLAT shape
  // carries (the narrowest ride never crossed the midnight seam), the
  // middle churn print the FIRST/LAST laws swallow
  assert.deepEqual(lossShapeCensus(REAL.f515), { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 })
  // F519's own face - the 961 ceiling's FLAT carrier (38159 -> 39120)
  assert.deepEqual(lossShapeCensus(REAL.f519), { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 })
  // the single breath's own class - the face one loss print carries
  // (the span zero the .335 word prices, the seam the single print
  // never crosses)
  assert.deepEqual(lossShapeCensus(['[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected']),
    { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 1 })
  // the two prints the same second rides - the flat shape the
  // dusk >= dawn law keeps (the width zero the .335 word prices)
  assert.deepEqual(lossShapeCensus([
    '[20:40:34] [Server thread/INFO]: F1 lost connection: Timed out',
    '[20:40:34] [Server thread/INFO]: F2 lost connection: Disconnected']),
  { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 })
  // the silent face - no loss prints, the all-zero shape the one-hot
  // law keeps
  assert.deepEqual(lossShapeCensus([
    '[13:45:48] [Server thread/INFO]: F18 left the game',
    '[13:45:46] [Server thread/INFO]: Done (2.800s)! For help, type "help"',
    '[13:45:45] [Server thread/INFO]: Starting minecraft server version 26.2']),
  { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 0 })
})

test('v0.976.339 arc: the REAL twenty-one-face shape arc re-voiced', () => {
  // the two byte-verified edge arcs the .334 dawn word and the .333
  // dusk word hold (the .335 width word re-rides) - the shape the
  // pairs derive
  const DAWN = [74434, 78055, 81349, 83716, 85459, 3465, 6276, 8083, 10951, 13662, 15535, 18063, 21774, 25288, 27497, 30185, 33130, 36222, 38159, 42165, 48774]
  const DUSK = [75321, 78952, 82284, 84537, 20, 4257, 7140, 8913, 11718, 14463, 16495, 18904, 22723, 26241, 28054, 31146, 33830, 36919, 39120, 42849, 49548]
  const clock = (s) => {
    const h = Math.floor(s / 3600) % 24
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    const p = (n) => String(n).padStart(2, '0')
    return `${p(h)}:${p(m)}:${p(sec)}`
  }
  const face = (i) => [
    `[${clock(DAWN[i])}] [Server thread/INFO]: FleetBot${i} lost connection: Disconnected`,
    `[${clock(DUSK[i])}] [Server thread/INFO]: F${i} lost connection: Timed out`
  ]
  const shapes = DAWN.map((_, i) => lossShapeCensus(face(i)))
  const wraps = shapes.filter((s) => s.lossWrapFace === 1).length
  const flats = shapes.filter((s) => s.lossFlatFace === 1).length
  const breaths = shapes.filter((s) => s.lossBreathFace === 1).length
  // TWENTY FLAT ONE WRAP ZERO BREATH - the day-boundary crossing the
  // RARE exception the arc keeps (F505 the only wrap face)
  assert.equal(wraps, 1)
  assert.equal(flats, 20)
  assert.equal(breaths, 0)
  // F505's own seat the only wrap carries (index 4)
  assert.equal(shapes[4].lossWrapFace, 1)
  // the F515 floor's own seat flat (index 14 - 27497 -> 28054)
  assert.equal(shapes[14].lossFlatFace, 1)
})

test('v0.976.339 proof: the 961 ceiling the two shapes share the shape cell splits', () => {
  // THE AMBIGUITY PROOF: F505's wrap 961 and F516's flat 961
  // (30185 -> 31146) and F519's flat 961 (38159 -> 39120) - the same
  // width number three faces carry and only the shape cell names
  // which crossed the midnight seam
  const f505 = lossShapeCensus(REAL.f505)
  const f516 = lossShapeCensus([
    '[08:23:05] [Server thread/INFO]: FleetBot5 lost connection: Disconnected',
    '[08:39:06] [Server thread/INFO]: F5 lost connection: Timed out'])
  const f519 = lossShapeCensus(REAL.f519)
  assert.deepEqual([f505.lossWrapFace, f516.lossWrapFace, f519.lossWrapFace], [1, 0, 0])
  assert.deepEqual([f505.lossFlatFace, f516.lossFlatFace, f519.lossFlatFace], [0, 1, 1])
})

test('v0.976.339 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(lossShapeCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']),
    { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 0 })
  assert.equal(lossShapeCensus(null), null)
  assert.equal(lossShapeCensus(undefined), null)
  assert.equal(lossShapeCensus(42), null)
  assert.deepEqual(lossShapeCensus([42, null, ...REAL.f501]),
    { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 })
})

test('v0.976.339 grammar: the near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(lossShapeCensus([s]),
    { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 0 })
  refuse('F2 lost connection: Disconnected')
  refuse('[20:40:34] [Server thread/WARN]: F2 lost connection: Disconnected')
  refuse('[20:40:34] [ServerMain/INFO]: F2 lost connection: Disconnected')
  refuse('[20:40:34] [Server thread/INFO]: F2  lost connection: Disconnected')
  refuse('[Server thread/INFO]: F2 lost connection: Disconnected')
  refuse('[9:40:34] [Server thread/INFO]: F2 lost connection: Disconnected')
  refuse('[20:40:60] [Server thread/INFO]: F2 lost connection: Disconnected')
  refuse('[20-40-34] [Server thread/INFO]: F2 lost connection: Disconnected')
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connections: Disconnected')
  refuse('[20:40:34] [Server thread/INFO]: F2 lost connection: Kicked')
  refuse('[20:40:34] [Server thread/INFO]: F2 left the game')
})

test('v0.976.339 fence: the one-hot law the shape cells keep', () => {
  const W = { lossWrapFace: 1, lossFlatFace: 0, lossBreathFace: 0 }
  const F = { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 }
  const B = { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 1 }
  const S = { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 0 }
  assert.equal(lossShapeConsistent({ back: W, prev: F, cur: B }), true)
  assert.equal(lossShapeConsistent({ back: S, prev: S, cur: S }), true)
  // the two-hot face the one-hot law refuses
  assert.equal(lossShapeConsistent({ back: { lossWrapFace: 1, lossFlatFace: 1, lossBreathFace: 0 }, prev: F, cur: F }), false)
  // the out-of-set cell the fence refuses
  assert.equal(lossShapeConsistent({ back: { lossWrapFace: 2, lossFlatFace: 0, lossBreathFace: 0 }, prev: F, cur: F }), false)
  assert.equal(lossShapeConsistent({ back: { lossWrapFace: -1, lossFlatFace: 0, lossBreathFace: 0 }, prev: F, cur: F }), false)
  assert.equal(lossShapeConsistent({ back: { lossWrapFace: 1.5, lossFlatFace: 0, lossBreathFace: 0 }, prev: F, cur: F }), false)
  // the missing face the fence refuses
  assert.equal(lossShapeConsistent({ back: W, prev: F }), false)
  assert.equal(lossShapeConsistent(null), false)
  assert.equal(lossShapeConsistent(42), false)
  assert.equal(lossShapeConsistent({ back: 'W', prev: F, cur: F }), false)
})

test('v0.976.339 rows: the shape windows the census speaks', () => {
  const W = { lossWrapFace: 1, lossFlatFace: 0, lossBreathFace: 0 }
  const F = { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 }
  const B = { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 1 }
  const S = { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 0 }
  // the wrap window - F505's own shape the window's middle face rides
  const wrapRow = lossShapeTrendRow({ back: F, prev: W, cur: F })
  assert.match(wrapRow, /^the fleet's own loss shape \(v0\.976\.339\): the day-boundary wrap ran 1 of the window's three faces deep - wrap 1 \/ flat 2 \/ breath 0 - the loss lane crossed the midnight seam 1 time\(s\) across the window, /)
  // the three-wrap window - the deep crossing the census counts
  assert.match(lossShapeTrendRow({ back: W, prev: W, cur: W }),
    /the day-boundary wrap ran 3 of the window's three faces deep - wrap 3 \/ flat 0 \/ breath 0 - the loss lane crossed the midnight seam 3 time\(s\)/)
  // the flat-held window - the normal order the arc keeps (20 of 21)
  const flatRow = lossShapeTrendRow({ back: F, prev: F, cur: F })
  assert.match(flatRow, /^the fleet's own loss shape \(v0\.976\.339\): the flat shape held - wrap 0 \/ flat 3 \/ breath 0 - the loss lane stayed inside its own day across the window's speaking faces, /)
  // the breath window - the single-breath faces the class carries
  assert.match(lossShapeTrendRow({ back: B, prev: F, cur: B }),
    /the flat shape held - wrap 0 \/ flat 1 \/ breath 2 - the loss lane stayed inside its own day/)
  // the all-silent window - the honest silence (never invent)
  assert.equal(lossShapeTrendRow({ back: S, prev: S, cur: S }), null)
  // the inconsistent window - the honest silence
  assert.equal(lossShapeTrendRow({ back: { lossWrapFace: 1, lossFlatFace: 1, lossBreathFace: 0 }, prev: F, cur: F }), null)
  assert.equal(lossShapeTrendRow(null), null)
  // the tail co-existence - the seat names the row alone keeps
  assert.match(wrapRow, /the \.335 width word prices the lane's own span distance/)
  assert.match(wrapRow, /co-existence by seat never by duplication\)$/)
})
