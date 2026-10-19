// (v0.976.262) THE AUTOSAVE MERGE'S OWN DISK PULSE - the word's own pins.
// The real lines ride byte-exact (the field's own faces: F467 run
// 39131684179, F474 run 39160949802, F475 run 39164157313, F478 run
// 39174346168 - the churn ceiling word's own first live face rode the
// same log the autosave merge pulsed).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { autosaveMergeCensus, autosaveMergeConsistent, autosaveMergeTrendRow } from '../../src/lib/autosavemergetrend.mjs'

// the REAL face lines (the cached faces' own autosave merge prints -
// one print per face the timer rode, the [worldmap] tag the wrapper rides)
const F467 = '[worldmap] autosave: merged 4 from disk, 1212 positions on file'
const F474 = '[worldmap] autosave: merged 21 from disk, 1476 positions on file'
const F475 = '[worldmap] autosave: merged 1 from disk, 1328 positions on file'
const F478 = '[worldmap] autosave: merged 42 from disk, 1162 positions on file'

test('the real face lines ride byte-exact', () => {
  assert.deepEqual(autosaveMergeCensus([F467]), { merged: 4, onFile: 1212 })
  assert.deepEqual(autosaveMergeCensus([F474]), { merged: 21, onFile: 1476 })
  assert.deepEqual(autosaveMergeCensus([F475]), { merged: 1, onFile: 1328 })
  assert.deepEqual(autosaveMergeCensus([F478]), { merged: 42, onFile: 1162 })
})

test('LAST-PRINT-WINS - the last print the freshest disk state the face held', () => {
  // a face the 300000ms timer rode twice (the fleet lived past two intervals)
  assert.deepEqual(autosaveMergeCensus([F467, F478]), { merged: 42, onFile: 1162 })
  assert.deepEqual(autosaveMergeCensus([F478, F467]), { merged: 4, onFile: 1212 })
})

test('the lawful zero - the no-print face keeps the healthy-looking zeros', () => {
  // the emitter gates merged > 0 - the face the autosave rode clean
  // (or the fleet died before the first interval) prints nothing
  assert.deepEqual(autosaveMergeCensus(['bots=19 spawned=19', 'worldmap: 1212 positions, 20 chunks scanned, top: sand=521 coal_ore=359']), { merged: 0, onFile: 0 })
  assert.deepEqual(autosaveMergeCensus([]), { merged: 0, onFile: 0 })
})

test('the near-miss lanes never ride - the neighbours own their lanes', () => {
  // the untagged skin (the [worldmap] wrapper the fleet19 log ride carries)
  assert.deepEqual(autosaveMergeCensus(['autosave: merged 4 from disk, 1212 positions on file']), { merged: 0, onFile: 0 })
  // the error skin (the save threw - worldmap.mjs's catch lane)
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave failed: EACCES']), { merged: 0, onFile: 0 })
  // the report tail's own end mass (the .252 word's own seat)
  assert.deepEqual(autosaveMergeCensus(['worldmap: 1212 positions, 20 chunks scanned, top: sand=521']), { merged: 0, onFile: 0 })
  // the tick docket's own map cell (the .260 word's own seat)
  assert.deepEqual(autosaveMergeCensus(['t-536s alive=19/19 mined=92 map=319p/9ch banked=0 smelted=0 pocket=58u/17s | sand=0']), { merged: 0, onFile: 0 })
  // the bot-tagged prefix (the emitter never rides one)
  assert.deepEqual(autosaveMergeCensus(['[F4] [worldmap] autosave: merged 4 from disk, 1212 positions on file']), { merged: 0, onFile: 0 })
  // the pretty spacing (the emitter never prints it)
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave: merged  4  from disk,  1212  positions on file']), { merged: 0, onFile: 0 })
  // the missing 'from disk'
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave: merged 4, 1212 positions on file']), { merged: 0, onFile: 0 })
  // the missing 'positions on file'
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave: merged 4 from disk']), { merged: 0, onFile: 0 })
  // the leading zero (the .248 house law - the emitter never prints it)
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave: merged 04 from disk, 1212 positions on file']), { merged: 0, onFile: 0 })
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave: merged 4 from disk, 01212 positions on file']), { merged: 0, onFile: 0 })
  // the negative count (the sign never rides)
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave: merged -4 from disk, 1212 positions on file']), { merged: 0, onFile: 0 })
  // the altered prose (a skin the template never printed)
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave: saved 4 from disk, 1212 positions on file']), { merged: 0, onFile: 0 })
  // the truncated frame
  assert.deepEqual(autosaveMergeCensus(['[worldmap] autosave: merged 4']), { merged: 0, onFile: 0 })
  // the trailing garbage (the whole line anchors)
  assert.deepEqual(autosaveMergeCensus([F478 + ' (lag)']), { merged: 0, onFile: 0 })
})

test('the junk input never crashes the census', () => {
  assert.equal(autosaveMergeCensus(null), null)
  assert.equal(autosaveMergeCensus(undefined), null)
  assert.equal(autosaveMergeCensus('[worldmap] autosave: merged 4 from disk'), null)
  assert.equal(autosaveMergeCensus(42), null)
  // the non-string lines ride past
  assert.deepEqual(autosaveMergeCensus([42, null, {}, F478]), { merged: 42, onFile: 1162 })
})

test('the fence every branch - the fold proves itself or prices nothing', () => {
  const ok = { back: { merged: 4, onFile: 1212 }, prev: { merged: 21, onFile: 1476 }, cur: { merged: 1, onFile: 1328 } }
  assert.equal(autosaveMergeConsistent(ok), true)
  assert.equal(autosaveMergeConsistent(null), false)
  assert.equal(autosaveMergeConsistent(undefined), false)
  assert.equal(autosaveMergeConsistent([ok]), false)
  assert.equal(autosaveMergeConsistent('fold'), false)
  assert.equal(autosaveMergeConsistent({ ...ok, prev: null }), false)
  assert.equal(autosaveMergeConsistent({ ...ok, cur: { merged: 1 } }), false)
  assert.equal(autosaveMergeConsistent({ back: { merged: 1, onFile: 0 }, prev: { merged: -1, onFile: 0 }, cur: { merged: 1, onFile: 0 } }), false)
  assert.equal(autosaveMergeConsistent({ back: { merged: 1.5, onFile: 0 }, prev: { merged: 1, onFile: 0 }, cur: { merged: 1, onFile: 0 } }), false)
  assert.equal(autosaveMergeConsistent({ back: { merged: 0, onFile: 0 }, prev: { merged: 0, onFile: 0 }, cur: { merged: 0, onFile: 0 } }), true)
  // the extra keys never rejected
  assert.equal(autosaveMergeConsistent({ ...ok, back: { ...ok.back, extra: 'ride' } }), true)
})

test('the swing byte-exact - the fade and the swell traded seats (W467-474-475)', () => {
  const row = autosaveMergeTrendRow({ back: { merged: 4, onFile: 1212 }, prev: { merged: 21, onFile: 1476 }, cur: { merged: 1, onFile: 1328 } })
  assert.equal(row, 'the autosave merge trend (v0.976.262): the disk pulse\'s own swing - 4 -> 21 (+17) -> 1 (-20) - the fade and the swell traded seats between the faces, the file mass rode 1212 -> 1476 -> 1328 (the worldmap tail\'s own end mass keeps the report seat (the .252 word), the pulse map\'s own tick cell keeps the docket seat (the .260 word), the maptrip\'s own header parse keeps the trip gap\'s input - the autosave merge\'s row alone, co-existence by seat never by duplication)')
})

test('the second real swing byte-exact (W474-475-478)', () => {
  const row = autosaveMergeTrendRow({ back: { merged: 21, onFile: 1476 }, prev: { merged: 1, onFile: 1328 }, cur: { merged: 42, onFile: 1162 } })
  assert.equal(row, 'the autosave merge trend (v0.976.262): the disk pulse\'s own swing - 21 -> 1 (-20) -> 42 (+41) - the fade and the swell traded seats between the faces, the file mass rode 1476 -> 1328 -> 1162 (the worldmap tail\'s own end mass keeps the report seat (the .252 word), the pulse map\'s own tick cell keeps the docket seat (the .260 word), the maptrip\'s own header parse keeps the trip gap\'s input - the autosave merge\'s row alone, co-existence by seat never by duplication)')
})

test('the fade and the swell byte-exact - the family\'s own two-step shape', () => {
  // the swell (the disk gave deeper two faces straight)
  const swell = autosaveMergeTrendRow({ back: { merged: 4, onFile: 1212 }, prev: { merged: 21, onFile: 1476 }, cur: { merged: 42, onFile: 1162 } })
  assert.match(swell, /^the autosave merge trend \(v0\.976\.262\): the disk pulse's own swell ran two steps deep - 4 -> 21 \(\+17\) -> 42 \(\+21\)/)
  // the fade (the disk ran lean two faces straight)
  const fade = autosaveMergeTrendRow({ back: { merged: 42, onFile: 1162 }, prev: { merged: 21, onFile: 1476 }, cur: { merged: 1, onFile: 1328 } })
  assert.match(fade, /^the autosave merge trend \(v0\.976\.262\): the disk pulse's own fade ran two steps deep - 42 -> 21 \(-21\) -> 1 \(-20\)/)
})

test('the honest nulls - the held step and the three-face zero and the fence fail', () => {
  // the held first step (no direction - the family's own held law)
  assert.equal(autosaveMergeTrendRow({ back: { merged: 4, onFile: 1212 }, prev: { merged: 4, onFile: 1212 }, cur: { merged: 21, onFile: 1476 } }), null)
  // the held second step
  assert.equal(autosaveMergeTrendRow({ back: { merged: 4, onFile: 1212 }, prev: { merged: 21, onFile: 1476 }, cur: { merged: 21, onFile: 1476 } }), null)
  // the three-face zero (the merge never rode the whole arc - the lawful silence)
  assert.equal(autosaveMergeTrendRow({ back: { merged: 0, onFile: 0 }, prev: { merged: 0, onFile: 0 }, cur: { merged: 0, onFile: 0 } }), null)
  // the fence fail
  assert.equal(autosaveMergeTrendRow({ back: { merged: 1, onFile: 0 }, prev: { merged: -1, onFile: 0 }, cur: { merged: 1, onFile: 0 } }), null)
  assert.equal(autosaveMergeTrendRow(null), null)
})

test('the emitter grammar - the worldmap.mjs template must stand', () => {
  // the autosave emitter's own template (src/fleet/worldmap.mjs:221):
  // 'if (r.merged > 0) log(`autosave: merged ${r.merged} from disk,
  // ${r.written} positions on file`)' - the [worldmap] tag the fleet19
  // wrapper rides (fleet19.mjs:113)
  const emit = (rmerged, rwritten) => `[worldmap] autosave: merged ${rmerged} from disk, ${rwritten} positions on file`
  assert.deepEqual(autosaveMergeCensus([emit(5, 1200)]), { merged: 5, onFile: 1200 })
  assert.deepEqual(autosaveMergeCensus([emit(42, 1162)]), { merged: 42, onFile: 1162 })
  // the gate the emitter ships: merged > 0 - the zero-merge save never
  // prints (the no-print face the lawful zero census keeps)
  assert.deepEqual(autosaveMergeCensus(['bots=19 spawned=19']), { merged: 0, onFile: 0 })
  // the disk's own lag cross-check: the F478 face's file mass (1162 on
  // file) names the disk read the live map cell outpaced (the .260 word's
  // own face rode 1163 positions - the last scan rode after the save,
  // the seats co-exist, the cells distinct)
  assert.deepEqual(autosaveMergeCensus([F478]), { merged: 42, onFile: 1162 })
})
