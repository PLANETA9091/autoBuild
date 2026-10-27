// Tests for the claim take census word (src/lib/claimtakecensus.mjs).
// The claim board's own take lane priced from the F678 live face:
// 301 takes all mono-shape target-free, the headroom floor 23 of
// cap 24, the release book log-silent. Pure arithmetic - the fixtures
// are the REAL lines the F678 fleet19-log rode.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { censusClaimTakes, claimTakeCensusRow, censusClaimTakeClock, claimTakeClockRow } from '../../src/lib/claimtakecensus.mjs'

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

// --- (v0.976.512) THE CLAIM TAKE CLOCK - the take lane's own remaining-clock book ---

test('the F678 real excerpt face without heartbeats: the pre-clock face carries all', () => {
  const c = censusClaimTakeClock(REAL_F678_LINES)
  assert.equal(c.takes, 8)
  assert.equal(c.preClock, 8) // the fixture carries no heartbeat lines - the unclocked seat holds all
  assert.deepEqual(c.byBucket, {}) // no heartbeat minted - no bucket rode
  assert.equal(c.firstTakeAt, null)
  assert.equal(c.lastTakeAt, null)
  const row = claimTakeClockRow(c)
  assert.ok(row !== null)
  assert.match(row, /no bucket rode \(the pre-clock face carried the takes\)/)
  assert.match(row, /first take pre-clock, last take pre-clock/)
})

test('the F678 whole-run clock arithmetic: the crest bucket t-360s rides 91 (30.2%)', () => {
  // The REAL F678 stream's own clock book (computed over the artifact the
  // F678 read fetched): 301 takes, 9 buckets, crest t-360s 91 takes 30.2%,
  // first take t-537s, last take t-7s, pre-clock zero.
  const lines = []
  const book = { 8: 5, 7: 57, 6: 91, 5: 33, 4: 10, 3: 22, 2: 15, 1: 50, 0: 18 }
  const order = ['8', '7', '6', '5', '4', '3', '2', '1', '0'] // the explicit descending walk - the engine sorts integer-like keys ascending, the run's own face rode the countdown
  for (const b of order) {
    for (let i = 0; i < book[b]; i++) {
      lines.push(`t-${b * 60 + 30}s alive=19/19`)
      lines.push('F14 claims: take - target-free (claims 0, cap 24, claimsLeft 23)')
    }
  }
  const k = censusClaimTakeClock(lines)
  assert.equal(k.takes, 301)
  assert.equal(k.preClock, 0)
  assert.deepEqual(k.byBucket, book)
  assert.equal(k.firstTakeAt, 510)
  const row = claimTakeClockRow(k)
  assert.match(row, /^claim-take-clock: 301 take\(s\) across 9 bucket\(s\) - /)
  assert.match(row, /crest bucket t-360s rides 91 \(30\.2%\)/)
})

test('the bucket assignment law: the nearest preceding beat\'s minute owns the take', () => {
  const k = censusClaimTakeClock([
    't-119s alive=19/19',
    'F1 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
    't-60s alive=19/19',
    'F2 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
    't-59s alive=19/19',
    'F3 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
    't-0s alive=19/19',
    'F4 claims: take - target-free (claims 0, cap 24, claimsLeft 23)'
  ])
  assert.equal(k.takes, 4)
  assert.deepEqual(k.byBucket, { 1: 2, 0: 2 })
  assert.equal(k.lastTakeAt, 0)
})

test('the pre-clock face: the take before the first heartbeat the unclocked seat keeps', () => {
  const k = censusClaimTakeClock([
    'F1 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
    't-537s alive=19/19',
    'F2 claims: take - target-free (claims 0, cap 24, claimsLeft 23)'
  ])
  assert.equal(k.takes, 2)
  assert.equal(k.preClock, 1)
  assert.equal(k.firstTakeAt, null)
  assert.equal(k.lastTakeAt, 537)
  const row = claimTakeClockRow(k)
  assert.match(row, /first take pre-clock/)
  assert.match(row, /last take t-537s/)
})

test('the zero-take face: the clock row never prints (the honest silence)', () => {
  assert.equal(claimTakeClockRow(censusClaimTakeClock(['t-537s alive=19/19', 'b] n=1 ts=20s'])), null)
  assert.equal(claimTakeClockRow(null), null)
  assert.equal(claimTakeClockRow(censusClaimTakeClock(null)), null)
})

test('junk battery: the clock gate refuses the non-array and the non-string', () => {
  assert.equal(censusClaimTakeClock(null).takes, 0)
  assert.equal(censusClaimTakeClock(42).takes, 0)
  const k = censusClaimTakeClock([42, null, 't-100s alive=19/19', 'F1 claims: take - target-free (claims 0, cap 24, claimsLeft 23)'])
  assert.equal(k.takes, 1)
  assert.equal(k.byBucket[1], 1)
})

test('the crest tie: the earliest seat keeps (the first max the insertion order rides)', () => {
  const k = censusClaimTakeClock([
    't-300s alive=19/19',
    'F1 claims: take - target-free (claims 0, cap 24, claimsLeft 23)',
    't-100s alive=19/19',
    'F2 claims: take - target-free (claims 0, cap 24, claimsLeft 23)'
  ])
  const row = claimTakeClockRow(k)
  assert.match(row, /crest bucket t-300s rides 1 \(50\.0%\)/)
})
