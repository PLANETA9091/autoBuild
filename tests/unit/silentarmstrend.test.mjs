// (v0.976.235) THE SILENT ARMS TREND - the bank arm census's own battery.
// THE EVIDENCE (the F466 face, run 39126831061): the final report printed
// 'bank arm census: 2 bot(s) never armed a bank pass - their end pockets
// carried 0u - the arms' silence is the face's own read' and no book owned
// the line - the deep strand word named the census its first face's own
// motivation but never took the seat. The pins: the census parse byte-exact
// (the F466 line whole, the with-top shape the fleet19 template appends,
// the near-miss lanes' refusal), the fence (every honest branch, the junk
// laws), the row (the fade / the swell / the swing byte-exact, the held
// step's honest null, the junk fold's null), and the emitter grammar (the
// fleet19 census template the word parses is the line the fleet prints -
// the deliberate-miss law: a near-miss census voice never rides).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { silentArmsOfCensus, silentArmsTrendConsistent, silentArmsTrendRow } from '../../src/lib/silentarmstrend.mjs'

test('the census: the F466 line rides whole (byte-exact shape)', () => {
  const lines = [
    'F9 final bank: 0 (nothing to deposit)',
    'bank flow: 0.5u/s (banked +141u over 288s) - the 459u pocket needs 938s past the deadline',
    'bank arm census: 2 bot(s) never armed a bank pass - their end pockets carried 0u - the arms\' silence is the face\'s own read',
    'pocket anatomy: whale F3 136u = 29.6% of the unbanked 459u (9 holders) - one walk owns the crater\'s face'
  ]
  const c = silentArmsOfCensus(lines)
  assert.deepEqual(c, { bots: 2, units: 0, top: null })
})

test('the census: the with-top shape the fleet19 template appends rides', () => {
  const c = silentArmsOfCensus([
    'bank arm census: 3 bot(s) never armed a bank pass - their end pockets carried 12u (top F7=9u) - the arms\' silence is the face\'s own read'
  ])
  assert.deepEqual(c, { bots: 3, units: 12, top: { bot: 'F7', units: 9 } })
})

test('the census: the last print wins, junk and near-misses never ride', () => {
  // the last census the face holds is the read (the report block prints once,
  // the parse stays honest whatever the fold's own direction)
  const two = silentArmsOfCensus([
    'bank arm census: 5 bot(s) never armed a bank pass - their end pockets carried 3u - the arms\' silence is the face\'s own read',
    'bank arm census: 2 bot(s) never armed a bank pass - their end pockets carried 0u - the arms\' silence is the face\'s own read'
  ])
  assert.equal(two.bots, 2)
  // the deep strand's own prose names the census but is NOT the census line
  assert.equal(silentArmsOfCensus(['// WHY: the bank arm census\'s first face (fleet 37154867210) read ALL 19']), null)
  // the write-off's own final line and the attribution's stranded row never ride
  assert.equal(silentArmsOfCensus(['final write-off: F3 136u/14s stalled-s0, F19 65u/10s no-chest (the deadline pocket rode unbanked)']), null)
  assert.equal(silentArmsOfCensus(['bank attribution: top F4 84u, F6 57u; stranded: F19 0u/65u pocket no-chest']), null)
  // a bot count with the wrong tail never rides (the strict grammar's own fence)
  assert.equal(silentArmsOfCensus(['bank arm census: 2 bot(s) never armed a bank pass - their end pockets carried 0u']), null)
  // junk-safe: the empty and non-array faces price null (the lawful no-read)
  assert.equal(silentArmsOfCensus([]), null)
  assert.equal(silentArmsOfCensus(null), null)
  assert.equal(silentArmsOfCensus('bank arm census: 2 bot(s)'), null)
  assert.equal(silentArmsOfCensus([42, {}]), null)
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { bots: 2, units: 0 }
  assert.equal(silentArmsTrendConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the healthy run's own zero the fence keeps)
  assert.equal(silentArmsTrendConsistent({ back: { bots: 0, units: 0 }, prev: { bots: 0, units: 0 }, cur: { bots: 0, units: 0 } }), true)
  // extra keys never rejected (the family's own extra-keys law)
  assert.equal(silentArmsTrendConsistent({ back: { ...face, top: null }, prev: face, cur: face }), true)
  // the junk laws: the null face, the missing face, the non-integer, the negative
  assert.equal(silentArmsTrendConsistent(null), false)
  assert.equal(silentArmsTrendConsistent({}), false)
  assert.equal(silentArmsTrendConsistent({ back: face, prev: face }), false)
  assert.equal(silentArmsTrendConsistent({ back: face, prev: { bots: 1.5, units: 0 }, cur: face }), false)
  assert.equal(silentArmsTrendConsistent({ back: face, prev: { bots: -1, units: 0 }, cur: face }), false)
  assert.equal(silentArmsTrendConsistent({ back: 'x', prev: face, cur: face }), false)
  assert.equal(silentArmsTrendConsistent([face, face, face]), false)
})

test('the row: the fade and the swell byte-exact', () => {
  const fade = silentArmsTrendRow({ back: { bots: 5, units: 7 }, prev: { bots: 3, units: 4 }, cur: { bots: 2, units: 0 } })
  assert.equal(fade, 'the silent arms trend (v0.976.235): the ladder\'s own heal ran two steps deep - 5 -> 3 (-2) -> 2 (-1) - the silent arms\' own fade, the silent arms\' own end pockets carried 7u -> 4u -> 0u (the deep strand\'s own seat prices the strand class the silence\'s own face named, the bank budget clamp\'s own trend prices the bank chains crater front\'s own budget seat, the write-off whys\' own front prices the deadline\'s own why split - the arms\' health row alone, co-existence by seat never by duplication)')
  const swell = silentArmsTrendRow({ back: { bots: 2, units: 0 }, prev: { bots: 4, units: 3 }, cur: { bots: 6, units: 9 } })
  assert.ok(swell.startsWith('the silent arms trend (v0.976.235): the ladder\'s own starve ran two steps deep - 2 -> 4 (+2) -> 6 (+2) - the silent arms\' own swell, the silent arms\' own end pockets carried 0u -> 3u -> 9u'))
})

test('the row: the swing rides, the held step is the honest null', () => {
  const swing = silentArmsTrendRow({ back: { bots: 5, units: 1 }, prev: { bots: 2, units: 0 }, cur: { bots: 4, units: 2 } })
  assert.ok(swing.startsWith('the silent arms trend (v0.976.235): the silent arms\' own swing - 5 -> 2 (-3) -> 4 (+2) - the heal and the starve traded seats between the faces'))
  // a held step prices no direction (the family's own held law)
  assert.equal(silentArmsTrendRow({ back: { bots: 2, units: 0 }, prev: { bots: 2, units: 0 }, cur: { bots: 3, units: 1 } }), null)
  assert.equal(silentArmsTrendRow({ back: { bots: 2, units: 0 }, prev: { bots: 3, units: 1 }, cur: { bots: 3, units: 1 } }), null)
  // the junk fold prices null (the fence's own law the row inherits)
  assert.equal(silentArmsTrendRow(null), null)
  assert.equal(silentArmsTrendRow({}), null)
})

test('the emitter grammar: the fleet19 census template the word parses rides the fleet\'s own print', () => {
  // the word parses the line the fleet ALREADY prints (the census guard's
  // own law: zero fleet wiring, zero new fleet log lines) - the emitter's
  // own shape the fleet19 source holds must stay the grammar the census
  // parses (the deliberate-miss law: the parse never forks a second voice)
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  assert.ok(fleetSrc.includes('bot(s) never armed a bank pass - their end pockets carried'), 'the fleet19 census emitter the word parses must stand')
  assert.ok(fleetSrc.includes('the arms\' silence is the face\'s own read'), 'the census tail the strict grammar anchors must stand')
})
