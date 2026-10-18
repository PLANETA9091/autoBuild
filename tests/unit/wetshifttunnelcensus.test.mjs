// (v0.976.240) THE WET SHIFT TUNNEL'S OWN YIELD MASS - the word's own
// pins. The census (the attempt's own yield a vote, the sum the mass
// keeps), the fence (every face all four proven integers, the zero
// lawful), the row (the blocks mass's own two-step arc - the fade the
// crossings' own short run, the swell the slice's own long pace, the
// swing the trade; a held step the honest null, the three-face zero the
// lawful silence). The near-miss lanes never ride: the stall line's own
// 'wet shift stalled (tunnel done=...)' verdict, the done='?' junk
// return skin, the tunnelled verb variant, the prefix-less retell, the
// truncated tail. The emitter grammar pin: the fleet19 template must
// stand (the .237 word's own law).
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { wetShiftTunnelCensus, wetShiftTunnelCensusConsistent, wetShiftTunnelCensusRow } from '../../src/lib/wetshifttunnelcensus.mjs'

const B = (blocks, seconds, firings, stopped) => ({ blocks, seconds, firings, stopped })

test('census: the firings sum, the junk never votes', () => {
  const lines = [
    'F12 final climb: wet shift tunnel: 2 blocks in 3s (stalled)',
    'junk line',
    7,
    null,
    '',
    'F9 final climb: wet shift tunnel: 0 blocks in 80s',
    'F19 final climb: wet shift tunnel: 12 blocks in 25s (fence)',
    'F5 final climb: wet shift tunnel: 7 blocks in 9s (stalled)',
    'F7 final climb: wet shift tunnel: ? blocks in 3s'
  ]
  assert.deepEqual(wetShiftTunnelCensus(lines), B(21, 117, 4, 3))
})

test('census: the lawful zero - a face whose lines hold no shift-tunnel print', () => {
  assert.deepEqual(wetShiftTunnelCensus([
    'F12 final climb: wet shift stalled (tunnel done=0 - the gate: stuck) - the climb stays home (a re-entry would ride the memo\'s refusal)',
    'F12 final climb: shift pre-seal swallowed: the throw - the gate keeps the cell, the account never sleeps'
  ]), B(0, 0, 0, 0))
})

test('census: junk-safe - the non-array prices null, junk types skipped', () => {
  assert.equal(wetShiftTunnelCensus(null), null)
  assert.equal(wetShiftTunnelCensus(undefined), null)
  assert.equal(wetShiftTunnelCensus('F12 final climb: wet shift tunnel: 2 blocks in 3s'), null)
  assert.equal(wetShiftTunnelCensus(42), null)
  assert.deepEqual(wetShiftTunnelCensus([null, 9, 'no votes here']), B(0, 0, 0, 0))
})

test('census: the near-miss lanes never ride', () => {
  const rejects = [
    'F12 final climb: wet shift stalled (tunnel done=2 stalled) - the climb stays home (a re-entry would ride the memo\'s refusal)',
    'F12 final climb: wet shift tunnel: ? blocks in 3s',
    'F12 final climb: wet shift tunnel: 2 blocks',
    'F12 final climb: wet shift tunnelled: 2 blocks in 3s',
    'F12 wet shift tunnel: 2 blocks in 3s',
    'F12 Final climb: wet shift tunnel: 2 blocks in 3s',
    'F12 final climb: Wet shift tunnel: 2 blocks in 3s',
    'F12 final climb: wet shift tunnel: 2.5 blocks in 3s',
    'F12 final climb: wet shift tunnel: 2 blocks in 3.5s',
    'final climb: wet shift tunnel: 2 blocks in 3s'
  ]
  const mass = wetShiftTunnelCensus(rejects)
  assert.deepEqual(mass, B(0, 0, 0, 0))
})

test('fence: every branch', () => {
  assert.equal(wetShiftTunnelCensusConsistent({ back: B(1, 0, 0, 0), prev: B(0, 2, 0, 0), cur: B(0, 0, 3, 0) }), true)
  // the zero lawful - the lane never fired
  assert.equal(wetShiftTunnelCensusConsistent({ back: B(0, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), true)
  // extra keys never rejected
  assert.equal(wetShiftTunnelCensusConsistent({ back: { ...B(1, 1, 1, 1), top: 'x' }, prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), true)
  // a missing cell rejects the face
  assert.equal(wetShiftTunnelCensusConsistent({ back: { blocks: 1, seconds: 1, firings: 1 }, prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  // the junk folds reject whole
  assert.equal(wetShiftTunnelCensusConsistent(null), false)
  assert.equal(wetShiftTunnelCensusConsistent(undefined), false)
  assert.equal(wetShiftTunnelCensusConsistent([B(0, 0, 0, 0), B(0, 0, 0, 0), B(0, 0, 0, 0)]), false)
  assert.equal(wetShiftTunnelCensusConsistent('fold'), false)
  assert.equal(wetShiftTunnelCensusConsistent({ back: B(-1, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  assert.equal(wetShiftTunnelCensusConsistent({ back: B(1.5, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  assert.equal(wetShiftTunnelCensusConsistent({ back: B(0, 0, 0, 0), prev: null, cur: B(0, 0, 0, 0) }), false)
})

const TAIL = "(the stall line's own lane prices the gate's own refusals, the pre-seal's own swallow prices the shift's own account, the sealed trend's own seat prices the tunnel sealed's own lane - the tunnel's mass row alone, co-existence by seat never by duplication)"

test('row: the fade byte-exact - the blocks mass two steps down', () => {
  const e = { back: B(8, 12, 3, 1), prev: B(5, 7, 2, 1), cur: B(2, 3, 4, 2) }
  assert.equal(wetShiftTunnelCensusRow(e),
    'the wet shift tunnel trend (v0.976.240): the yield\'s own fade ran two steps deep - 8 -> 5 (-3) -> 2 (-3) - the blocks mass\'s own fade, the seconds rode 12 -> 7 -> 3, the stopped count rode 1 -> 1 -> 2, the cur face\'s own firings 4 ' + TAIL)
})

test('row: the swell byte-exact - the blocks mass two steps up', () => {
  const e = { back: B(2, 3, 1, 0), prev: B(5, 6, 2, 1), cur: B(9, 11, 3, 1) }
  assert.equal(wetShiftTunnelCensusRow(e),
    'the wet shift tunnel trend (v0.976.240): the yield\'s own swell ran two steps deep - 2 -> 5 (+3) -> 9 (+4) - the blocks mass\'s own swell, the seconds rode 3 -> 6 -> 11, the stopped count rode 0 -> 1 -> 1, the cur face\'s own firings 3 ' + TAIL)
})

test('row: the swing byte-exact + the held steps the honest null', () => {
  const e = { back: B(6, 9, 2, 2), prev: B(1, 2, 1, 0), cur: B(4, 5, 2, 1) }
  assert.equal(wetShiftTunnelCensusRow(e),
    'the wet shift tunnel trend (v0.976.240): the blocks mass\'s own swing - 6 -> 1 (-5) -> 4 (+3) - the fade and the swell traded seats between the faces, the seconds rode 9 -> 2 -> 5, the stopped count rode 2 -> 0 -> 1, the cur face\'s own firings 2 ' + TAIL)
  // a held step prices no direction
  assert.equal(wetShiftTunnelCensusRow({ back: B(8, 3, 0, 0), prev: B(8, 3, 0, 0), cur: B(2, 3, 0, 0) }), null)
  assert.equal(wetShiftTunnelCensusRow({ back: B(8, 3, 0, 0), prev: B(2, 3, 0, 0), cur: B(2, 3, 0, 0) }), null)
  // the three-face zero - the lane never fired, nothing to price
  assert.equal(wetShiftTunnelCensusRow({ back: B(0, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), null)
  // the fence fail rides null
  assert.equal(wetShiftTunnelCensusRow(null), null)
  assert.equal(wetShiftTunnelCensusRow({ back: B(0, 0, 0, 0), prev: B(0, 0, 0), cur: B(0, 0, 0, 0) }), null)
})

test('emitter grammar: the fleet19 template must stand', () => {
  const src = readFileSync(fileURLToPath(new URL('../../testbed/fleet19.mjs', import.meta.url)), 'utf8')
  assert.ok(src.includes('final climb: wet shift tunnel: '), 'the wet shift tunnel emitter template moved - the word\'s grammar must follow')
  assert.ok(src.includes(' blocks in '), 'the wet shift tunnel seconds tail moved - the word\'s grammar must follow')
  assert.ok(src.includes(' (${tun.stopped})'), 'the wet shift tunnel stopped tail moved - the word\'s grammar must follow')
})
