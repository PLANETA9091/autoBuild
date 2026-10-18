// (v0.976.251) THE PICKAXE LADDER'S OWN END MASS - the word's own
// pins. THE EVIDENCE (the fleet faces' own report blocks): the final
// report prints 'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,
// iron_pickaxe -> wooden=35 stone=11 iron=0' (run39160949802's own
// face, F474) - the tool ladder's own end read, one print per face -
// and no book owned the frame (the toolupgrade.mjs module owns the
// ladder's own climb, the neighbours' own near-miss pins reserved the
// seat by name twice - the .238 precedent's reserved seat).
// The pins: the census parse byte-exact (the real faces' lines whole,
// the LAST-PRINT-WINS law, the near-miss lanes' refusal incl. the
// neighbours' own lines and the forged ladders, the junk laws), the
// fence (every honest branch, the zero lawful, the junk laws), the
// row (the fade / the swell / the swing byte-exact, the held step's
// honest null, the three-face zero's lawful null, the junk fold's
// null), the face's own report block re-speaks the census whole, the
// SERIES the field recorded (the four-face arc 15/32/29/46) and the
// emitter grammar (the fleet19 template the word parses is the line
// the fleet prints - the deliberate-miss law: a near-miss census
// voice never rides).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pickaxeTiersEndCensus, pickaxeTiersEndConsistent, pickaxeTiersEndRow } from '../../src/lib/pickaxetiersend.mjs'

const TAIL = "(the server guard's own verdict keeps the .249 word's seat beside, the blocks mined's own productivity meter keeps the .247 word's seat, the materials dump's own stockpile keeps the .248 word's seat, the loot ledger's own accounting keeps its own lane - the pickaxe tiers' end row alone, co-existence by seat never by duplication)"

test('the census: the real face lines ride whole (byte-exact shape)', () => {
  // F474 (run39160949802)'s own face: the ladder's own end read
  const c474 = pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=35 stone=11 iron=0'
  ])
  assert.deepEqual(c474, { wooden: 35, stone: 11, iron: 0 })
  // face466's own face: the drought class - the stone rung nearly bare
  const c466 = pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=14 stone=1 iron=0'
  ])
  assert.deepEqual(c466, { wooden: 14, stone: 1, iron: 0 })
  // face467's own face: the stone rung's own swell rode
  const c467 = pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=23 stone=9 iron=0'
  ])
  assert.deepEqual(c467, { wooden: 23, stone: 9, iron: 0 })
  // face468's own face: the stone rung's own fade rode
  const c468 = pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=23 stone=6 iron=0'
  ])
  assert.deepEqual(c468, { wooden: 23, stone: 6, iron: 0 })
})

test('the census: the LAST-PRINT-WINS law (the last print the freshest state)', () => {
  const c = pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=1 stone=0 iron=0',
    'some noise line between',
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=2 stone=3 iron=0'
  ])
  assert.deepEqual(c, { wooden: 2, stone: 3, iron: 0 })
})

test('the census: the near-miss lanes never ride', () => {
  // the neighbours' own report lines a different frame keeps
  const neighbours = [
    'server guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=no revives=0 restarts=0',
    'blocks mined: 1886 in ~600s = 3.14 blocks/s (189/min)',
    'loot ledger: mined=1886 banked=1458 smelted=11 pocket=815u/205s accounted=2284 unaccounted=0 surplus=398u conversion=121.1%',
    'materials: {"oak_log":178,"stone":708}'
  ]
  for (const l of neighbours) {
    assert.deepEqual(pickaxeTiersEndCensus([l]), { wooden: 0, stone: 0, iron: 0 })
  }
  // the bot-tagged prefix the report frame never prints
  assert.deepEqual(pickaxeTiersEndCensus([
    'F7 [F7] pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=1 stone=0 iron=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the pretty spacing the join never prints
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe, stone_pickaxe, iron_pickaxe -> wooden=1 stone=0 iron=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the missing arrow
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe wooden=1 stone=0 iron=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the reordered ladder the frozen constant never holds
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: iron_pickaxe,stone_pickaxe,wooden_pickaxe -> wooden=1 stone=0 iron=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the extended ladder (the diamond rung the ladder never held)
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe,diamond_pickaxe -> wooden=1 stone=0 iron=0 diamond=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the shortened ladder
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe -> wooden=1 stone=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the rung key drift (the full item name the split never prints)
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden_pickaxe=1 stone_pickaxe=0 iron_pickaxe=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the extra pair appended
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=1 stone=0 iron=0 extra=4'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the missing pair
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=1 stone=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the leading zero the emitter's own reduction never prints
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=01 stone=0 iron=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the negative count
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=-1 stone=0 iron=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the altered prose
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at the end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=1 stone=0 iron=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the truncated tail
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=1 stone=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
  // the wrong frame entirely
  assert.deepEqual(pickaxeTiersEndCensus([
    'pickaxe tier at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=1 stone=0 iron=0'
  ]), { wooden: 0, stone: 0, iron: 0 })
})

test('the census: the junk laws (null in, junk lines, no print = the lawful zero)', () => {
  assert.equal(pickaxeTiersEndCensus(null), null)
  assert.equal(pickaxeTiersEndCensus(undefined), null)
  assert.equal(pickaxeTiersEndCensus(42), null)
  assert.equal(pickaxeTiersEndCensus('not an array'), null)
  // the junk members ride past (the loop's own typeof skip)
  assert.deepEqual(pickaxeTiersEndCensus([null, 42, {}, 'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=7 stone=0 iron=0']), { wooden: 7, stone: 0, iron: 0 })
  // the empty face the LAWFUL ZERO keeps
  assert.deepEqual(pickaxeTiersEndCensus([]), { wooden: 0, stone: 0, iron: 0 })
})

test('the fence: every honest branch rides, the lies never do', () => {
  const face = (w, s, i) => ({ wooden: w, stone: s, iron: i })
  // the honest fold rides
  assert.equal(pickaxeTiersEndConsistent({ back: face(14, 1, 0), prev: face(23, 9, 0), cur: face(23, 6, 0) }), true)
  // the zero face is lawful (the never-printed face)
  assert.equal(pickaxeTiersEndConsistent({ back: face(0, 0, 0), prev: face(0, 0, 0), cur: face(0, 0, 0) }), true)
  // extra keys never rejected
  assert.equal(pickaxeTiersEndConsistent({ back: { ...face(1, 0, 0), extra: 'x' }, prev: face(1, 0, 0), cur: face(1, 0, 0) }), true)
  // the junk laws
  assert.equal(pickaxeTiersEndConsistent(null), false)
  assert.equal(pickaxeTiersEndConsistent(undefined), false)
  assert.equal(pickaxeTiersEndConsistent([1, 2, 3]), false)
  assert.equal(pickaxeTiersEndConsistent('nope'), false)
  // a missing face never rides
  assert.equal(pickaxeTiersEndConsistent({ back: face(1, 0, 0), prev: face(1, 0, 0) }), false)
  // a face that is not an object never rides
  assert.equal(pickaxeTiersEndConsistent({ back: 42, prev: face(1, 0, 0), cur: face(1, 0, 0) }), false)
  // the negative cell never rides
  assert.equal(pickaxeTiersEndConsistent({ back: face(-1, 0, 0), prev: face(1, 0, 0), cur: face(1, 0, 0) }), false)
  // the non-integer cell never rides
  assert.equal(pickaxeTiersEndConsistent({ back: face(1.5, 0, 0), prev: face(1, 0, 0), cur: face(1, 0, 0) }), false)
  // the string cell never rides
  assert.equal(pickaxeTiersEndConsistent({ back: face('3', 0, 0), prev: face(1, 0, 0), cur: face(1, 0, 0) }), false)
})

test('the row: the fade / the swell / the swing byte-exact (the real arcs ride)', () => {
  const face = (w, s, i) => ({ wooden: w, stone: s, iron: i })
  // W466's own window (faces 466 -> 467 -> 468): the totals 15 -> 32 (+17) -> 29 (-3) - the trade
  const swing = pickaxeTiersEndRow({ back: face(14, 1, 0), prev: face(23, 9, 0), cur: face(23, 6, 0) })
  assert.equal(swing, `the pickaxe tiers end trend (v0.976.251): the ladder mass's own swing - 15 -> 32 (+17) -> 29 (-3) - the fade and the swell traded seats between the faces, the iron rung rode 0 -> 0 -> 0, the wooden rung rode 14 -> 23 -> 23, the stone rung rode 1 -> 9 -> 6 ${TAIL}`)
  // the synthetic fade: both steps down
  const fade = pickaxeTiersEndRow({ back: face(30, 10, 2), prev: face(20, 5, 1), cur: face(10, 2, 0) })
  assert.equal(fade, `the pickaxe tiers end trend (v0.976.251): the held mass's own fade ran two steps deep - 42 -> 26 (-16) -> 12 (-14) - the ladder mass's own fade, the iron rung rode 2 -> 1 -> 0, the wooden rung rode 30 -> 20 -> 10, the stone rung rode 10 -> 5 -> 2 ${TAIL}`)
  // the synthetic swell: both steps up
  const swell = pickaxeTiersEndRow({ back: face(10, 2, 0), prev: face(20, 5, 1), cur: face(30, 10, 2) })
  assert.equal(swell, `the pickaxe tiers end trend (v0.976.251): the held mass's own swell ran two steps deep - 12 -> 26 (+14) -> 42 (+16) - the ladder mass's own swell, the iron rung rode 0 -> 1 -> 2, the wooden rung rode 10 -> 20 -> 30, the stone rung rode 2 -> 5 -> 10 ${TAIL}`)
  // the negative step's own sign rides byte-exact
  const neg = pickaxeTiersEndRow({ back: face(0, 0, 5), prev: face(0, 0, 3), cur: face(0, 0, 1) })
  assert.equal(neg, `the pickaxe tiers end trend (v0.976.251): the held mass's own fade ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the ladder mass's own fade, the iron rung rode 5 -> 3 -> 1, the wooden rung rode 0 -> 0 -> 0, the stone rung rode 0 -> 0 -> 0 ${TAIL}`)
})

test('the row: the held step prices the honest null, the three-face zero the lawful null', () => {
  const face = (w, s, i) => ({ wooden: w, stone: s, iron: i })
  // a held first step - no direction
  assert.equal(pickaxeTiersEndRow({ back: face(23, 6, 0), prev: face(23, 6, 0), cur: face(30, 10, 0) }), null)
  // a held second step - no direction
  assert.equal(pickaxeTiersEndRow({ back: face(14, 1, 0), prev: face(23, 9, 0), cur: face(23, 9, 0) }), null)
  // both steps held - no direction twice over
  assert.equal(pickaxeTiersEndRow({ back: face(1, 1, 0), prev: face(1, 1, 0), cur: face(1, 1, 0) }), null)
  // the three-face zero mass - the fleet ended pickaxe-less the whole arc
  assert.equal(pickaxeTiersEndRow({ back: face(0, 0, 0), prev: face(0, 0, 0), cur: face(0, 0, 0) }), null)
  // the junk fold - the fence's own null
  assert.equal(pickaxeTiersEndRow(null), null)
  assert.equal(pickaxeTiersEndRow(undefined), null)
  assert.equal(pickaxeTiersEndRow('nope'), null)
  assert.equal(pickaxeTiersEndRow({ back: { wooden: -1, stone: 0, iron: 0 }, prev: { wooden: 1, stone: 0, iron: 0 }, cur: { wooden: 2, stone: 0, iron: 0 } }), null)
})

test("the face's own report block re-speaks the census whole (F474's neighbours beside)", () => {
  // F474's own report block: the pickaxe line rides among its neighbours
  // (the server guard and the blocks mined and the loot ledger lines the
  // neighbour words keep - co-existence by seat)
  const block = [
    'server guard: losses=0 (window 0/10) relogins=24 probe=n/a dead=no revives=0 restarts=0',
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=35 stone=11 iron=0',
    'blocks mined: 1886 in ~600s = 3.14 blocks/s (189/min)',
    'loot ledger: mined=1886 banked=1458 smelted=11 pocket=815u/205s accounted=2284 unaccounted=0 surplus=398u conversion=121.1%'
  ]
  const c = pickaxeTiersEndCensus(block)
  assert.deepEqual(c, { wooden: 35, stone: 11, iron: 0 })
  // the same face's own window rides: F473's totals (the .248 face's own
  // byName sum 1860u is the materials dump's mass - a different seat) -
  // here the face468 -> face474 window: 29 -> 46 over one step (held law
  // keeps the two-step row silent on a one-step arc - the fold needs
  // three faces)
  const c468 = pickaxeTiersEndCensus(['pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=23 stone=6 iron=0'])
  const row = pickaxeTiersEndRow({ back: { wooden: 14, stone: 1, iron: 0 }, prev: c468, cur: c })
  assert.equal(row, `the pickaxe tiers end trend (v0.976.251): the held mass's own swell ran two steps deep - 15 -> 29 (+14) -> 46 (+17) - the ladder mass's own swell, the iron rung rode 0 -> 0 -> 0, the wooden rung rode 14 -> 23 -> 35, the stone rung rode 1 -> 6 -> 11 ${TAIL}`)
})

test('the SERIES the field recorded (the four-face arc the cached faces hold)', () => {
  // the faces' own pickaxe lines the caches hold: 466 / 467 / 468 / 474
  const f466 = pickaxeTiersEndCensus(['pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=14 stone=1 iron=0'])
  const f467 = pickaxeTiersEndCensus(['pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=23 stone=9 iron=0'])
  const f468 = pickaxeTiersEndCensus(['pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=23 stone=6 iron=0'])
  const f474 = pickaxeTiersEndCensus(['pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=35 stone=11 iron=0'])
  const tot = (x) => x.wooden + x.stone + x.iron
  assert.deepEqual([tot(f466), tot(f467), tot(f468), tot(f474)], [15, 32, 29, 46])
  // the arcs the windows ride: W466 the swing, W467 the two-face swell's
  // front half (the fold needs three faces - the held law prices the
  // one-step window's silence when the middle step held)
  const w466 = pickaxeTiersEndRow({ back: f466, prev: f467, cur: f468 })
  assert.ok(w466.includes('15 -> 32 (+17) -> 29 (-3)'))
  assert.ok(w466.includes('the ladder mass\'s own swing'))
  // the iron rung's own standing read: 0 -> 0 -> 0 the whole arc (the
  // iron wall's own drought the side-car speaks honestly)
  assert.ok(w466.includes('the iron rung rode 0 -> 0 -> 0'))
})

test('the emitter grammar: the fleet19 template must stand (the deliberate-miss law)', () => {
  // the fleet's own template (testbed/fleet19.mjs:4730): the frozen
  // PICK_TIERS constant comma-joined, the rung keys the first segments,
  // the counts the fleet's own reduction - the word parses the line the
  // fleet prints, never a near-miss voice
  const PICK_TIERS = ['wooden_pickaxe', 'stone_pickaxe', 'iron_pickaxe']
  const counts = { wooden_pickaxe: 35, stone_pickaxe: 11, iron_pickaxe: 0 }
  const line = `pickaxe tiers at end: ${PICK_TIERS.join(',')} -> ${PICK_TIERS.map(t => `${t.split('_')[0]}=${counts[t]}`).join(' ')}`
  assert.equal(line, 'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=35 stone=11 iron=0')
  const c = pickaxeTiersEndCensus([line])
  assert.deepEqual(c, { wooden: 35, stone: 11, iron: 0 })
  // the template's own zero skin (the drought face the history holds)
  const zeroCounts = { wooden_pickaxe: 0, stone_pickaxe: 0, iron_pickaxe: 0 }
  const zeroLine = `pickaxe tiers at end: ${PICK_TIERS.join(',')} -> ${PICK_TIERS.map(t => `${t.split('_')[0]}=${zeroCounts[t]}`).join(' ')}`
  assert.deepEqual(pickaxeTiersEndCensus([zeroLine]), { wooden: 0, stone: 0, iron: 0 })
  // the template's own numbers ride the fence into the row
  const e = { back: pickaxeTiersEndCensus(['pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=14 stone=1 iron=0']), prev: pickaxeTiersEndCensus([line]), cur: pickaxeTiersEndCensus(['pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=40 stone=15 iron=1']) }
  const row = pickaxeTiersEndRow(e)
  assert.ok(row.startsWith("the pickaxe tiers end trend (v0.976.251): the held mass's own swell ran two steps deep - 15 -> 46 (+31) -> 56 (+10)"))
})
