// (v0.976.485) The endportal word's own test battery - the activation
// lane's honest forms: the junk battery, the floor law, the FRAME
// GATE (the keep, never a defer), the gate order (the frame beats
// the eye-short), the EYE-SHORT defer's named deficit, the min law's
// three legs, the SOCKET LAW's hard dozen (the thirteenth eye
// refused, the surplus pocketed and named), the DEFICIT LAW (the
// partial fill rides priced, the full dozen reads the activation),
// the fractional remainder, the no-mutation purity, the vanilla pin.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideEndPortal, ENDPORTAL_EYES_PER_PORTAL, ENDPORTAL_EYES_PER_FRAME } from '../../src/lib/endportal.mjs'

test('vanilla pin: the frame holds twelve, one eye per socket', () => {
  assert.equal(ENDPORTAL_EYES_PER_PORTAL, 12)
  assert.equal(ENDPORTAL_EYES_PER_FRAME, 1)
})

test('junk: NaN eyes refuse', () => {
  const r = decideEndPortal({ eyesCount: NaN, framesCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.sockets, 0)
})

test('junk: Infinity frames refuse', () => {
  const r = decideEndPortal({ eyesCount: 0, framesCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean eyes refuse (a true count is a flag, never a number)', () => {
  const r = decideEndPortal({ eyesCount: true, framesCount: 1 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: string frames refuse', () => {
  const r = decideEndPortal({ eyesCount: 0, framesCount: '3' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative eyes read as zero (the eye-short defer)', () => {
  const r = decideEndPortal({ eyesCount: -3, framesCount: 12 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'eye-short')
})

test('floor law: negative frames read as zero (the frame-absent keep)', () => {
  const r = decideEndPortal({ eyesCount: 5, framesCount: -5 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'frame-absent')
})

test('FRAME GATE: no frame in reach reads the keep, never a defer', () => {
  const r = decideEndPortal({ eyesCount: 20, framesCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'frame-absent')
  assert.equal(r.sockets, 0)
  assert.equal(r.eyesLeft, 20)
})

test('gate order: the frame gate beats the eye-short (the world reads first)', () => {
  const r = decideEndPortal({ eyesCount: 0, framesCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'frame-absent')
})

test('EYE-SHORT: the bare pocket defers with the dozen named', () => {
  const r = decideEndPortal({ eyesCount: 0, framesCount: 12 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'eye-short')
  assert.equal(r.deficit, 12)
})

test('the frame leg binds: three frames price three sockets, the deficit named', () => {
  const r = decideEndPortal({ eyesCount: 20, framesCount: 3 })
  assert.equal(r.action, 'fill')
  assert.equal(r.reason, 'frame-and-eye-afford')
  assert.equal(r.sockets, 3)
  assert.equal(r.deficit, 9)
  assert.equal(r.eyesLeft, 17)
})

test('the eye leg binds: five eyes price five sockets, the deficit named', () => {
  const r = decideEndPortal({ eyesCount: 5, framesCount: 12 })
  assert.equal(r.action, 'fill')
  assert.equal(r.sockets, 5)
  assert.equal(r.deficit, 7)
  assert.equal(r.eyesLeft, 0)
})

test('THE SOCKET LAW: the full dozen reads the activation (deficit zero)', () => {
  const r = decideEndPortal({ eyesCount: 12, framesCount: 12 })
  assert.equal(r.action, 'fill')
  assert.equal(r.sockets, 12)
  assert.equal(r.deficit, 0)
  assert.equal(r.eyesLeft, 0)
  assert.equal(r.framesLeft, 0)
})

test('THE SOCKET LAW: the thirteenth eye the frame refuses, the surplus pocketed and named', () => {
  const r = decideEndPortal({ eyesCount: 20, framesCount: 12 })
  assert.equal(r.action, 'fill')
  assert.equal(r.sockets, 12)
  assert.equal(r.deficit, 0)
  assert.equal(r.eyesLeft, 8)
})

test('THE SOCKET LAW: the hard ceiling never lies (a thousand eyes still fill twelve)', () => {
  const r = decideEndPortal({ eyesCount: 1000, framesCount: 12 })
  assert.equal(r.sockets, 12)
  assert.equal(r.eyesLeft, 988)
})

test('fractional census floors honestly with the remainder named', () => {
  const r = decideEndPortal({ eyesCount: 12.5, framesCount: 12 })
  assert.equal(r.action, 'fill')
  assert.equal(r.sockets, 12)
  assert.equal(r.eyesLeft, 0.5)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { eyesCount: 4, framesCount: 12 }
  const snapshot = JSON.stringify(input)
  decideEndPortal(input)
  assert.equal(JSON.stringify(input), snapshot)
})
