// Tests for the claim take census word (src/lib/claimtakecensus.mjs).
// The claim board's own take lane priced from the F678 live face:
// 301 takes all mono-shape target-free, the headroom floor 23 of
// cap 24, the release book log-silent. Pure arithmetic - the fixtures
// are the REAL lines the F678 fleet19-log rode.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { censusClaimTakes, claimTakeCensusRow } from '../../src/lib/claimtakecensus.mjs'

// The REAL F678 excerpts (the artifact the F678 read fetched, verbatim).
const REAL_F678_LINES = [
  'F13 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
  'F4 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
  'F13 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
  'F13 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
  'F13 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
  'F4 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
  'F10 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
  'F4 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
  'b] n=1 ts=20s rss=254M late=5ms mainLate=0ms',
  't-537s alive=19/19 mined=89 map=348p/7ch banked=0 smelted=0 pocket=97u/32s | sand=0 gravel=0 dirt=1 stone=0'
]

test('the F678 real face: takes counted, the junk metrics lines never rode', () => {
  const c = censusClaimTakes(REAL_F678_LINES)
  assert.equal(c.takes, 8)
  assert.equal(c.releases, 0)
  assert.deepEqual(c.byBot, { F13: 4, F4: 3, F10: 1 })
  assert.deepEqual(c.byReason, { 'target-free': 8 })
})

test('the F678 real face: the headroom floor 23 of cap 24, claims peak zero', () => {
  const c = censusClaimTakes(REAL_F678_LINES)
  assert.equal(c.claimsMax, 0)
  assert.equal(c.capMax, 24)
  assert.equal(c.claimsLeftMin, 23)
  assert.equal(c.claimsLeftMinHolder, 'F13')
})

test('the F678 real face: the mono-shape row names the monopoly and the crest bot', () => {
  const c = censusClaimTakes(REAL_F678_LINES)
  const row = claimTakeCensusRow(c)
  assert.ok(row !== null)
  assert.match(row, /^claim-takes: 8 take\(s\) across 3 bot\(s\) - /)
  assert.match(row, /target-free carries all 8 \(the mono-shape lane\)/)
  assert.match(row, /headroom floor 23 of cap 24 \(bot F13\)/)
  assert.match(row, /crest F13 rides 4 \(50\.0%\)/)
})

test('the zero-take face: the row never prints (the honest silence)', () => {
  const c = censusClaimTakes(['b] n=1 ts=20s rss=254M', 'worldmap: 1059 positions'])
  assert.equal(c.takes, 0)
  assert.equal(claimTakeCensusRow(c), null)
  assert.equal(claimTakeCensusRow(null), null)
})

test('junk battery: non-array and non-string entries the gate refuses', () => {
  assert.equal(censusClaimTakes(null).takes, 0)
  assert.equal(censusClaimTakes(42).takes, 0)
  assert.equal(censusClaimTakes('F1 claims: take').takes, 0)
  const c = censusClaimTakes([42, null, undefined, 'F1 claims: take - target-free (claims 0, cap 24, claimsLeft 23)'])
  assert.equal(c.takes, 1)
})

test('junk battery: the malformed take seats the shape refuses (one-parser law)', () => {
  const c = censusClaimTakes([
    'F1 claims: take - target-free (claims x, cap 24, claimsLeft 23)',
    'F1 claims: take - target-free (claims 0, cap 24, claimsLeft 23) trailing',
    'F1 claims: take - target-free',
    'F1 claims:',
    'F2 claims: take - target-free (claims 0, cap 24, claimsLeft 23)'
  ])
  assert.equal(c.takes, 1)
  assert.deepEqual(c.byBot, { F2: 1 })
})

test('the multi-reason face: the top reason carries k of n (synthetic token, the parser reason-agnostic)', () => {
  const c = censusClaimTakes([
    'F1 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
    'F2 claims: take - retake (claims 1, cap 24, claimsLeft 23)',
    'F3 claims: take - retake (claims 1, cap 24, claimsLeft 22)'
  ])
  assert.equal(c.takes, 3)
  const row = claimTakeCensusRow(c)
  assert.match(row, /retake carries 2 of 3/)
  assert.ok(!row.includes('mono-shape'))
  assert.equal(c.claimsLeftMin, 22)
  assert.equal(c.claimsLeftMinHolder, 'F3')
})

test('the release book: the prefix family counts whenever a stream rides one', () => {
  const c = censusClaimTakes([
    'F1 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
    'F1 claims: release - walk-end',
    'F1 claims: release'
  ])
  assert.equal(c.takes, 1)
  assert.equal(c.releases, 2)
})

test('the crest concentration: the F678 whole-run arithmetic (78 of 301 = 25.9%)', () => {
  // The F678 face's own crest: F14 took 78 of the 301 takes the run rode -
  // the strict max (the other 223 spread across the eighteen siblings, the
  // nearest second seat 31 the F16's own).
  const lines = []
  for (let i = 0; i < 78; i++) lines.push('F14 claims: take - target-free (claims 0, cap 24, claimsLeft 23)')
  for (let i = 0; i < 77; i++) lines.push('F9 claims: take - target-free (claims 0, cap 24, claimsLeft 23)')
  for (let i = 0; i < 77; i++) lines.push('F16 claims: take - target-free (claims 0, cap 24, claimsLeft 23)')
  for (let i = 0; i < 69; i++) lines.push('F8 claims: take - target-free (claims 0, cap 24, claimsLeft 23)')
  const c = censusClaimTakes(lines)
  assert.equal(c.takes, 301)
  const row = claimTakeCensusRow(c)
  assert.match(row, /crest F14 rides 78 \(25\.9%\)/)
  assert.match(row, /headroom floor 23 of cap 24 \(bot F14\)/)
})
