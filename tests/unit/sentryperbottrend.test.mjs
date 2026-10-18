// (v0.976.256) THE SENTRY ATTRIBUTION'S OWN ROW MASS - the word's own pins.
// The real lines ride byte-exact (the field's own faces: F474 run
// 39160949802, F475 run 39164157313, F476 run 39166656131, F477 run
// 39170522050 - the drain fence's own first face).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sentryPerBotCensus, sentryPerBotConsistent, sentryPerBotTrendRow } from '../../src/lib/sentryperbottrend.mjs'

// the REAL face lines (the cached faces' own bytes)
const F474 = 'sentry per-bot: F1 g0/r1 F4 g0/r3 F6 g0/r1 F7 g0/r7 F8 g0/r5 F9 g0/r2 F11 g236/r4 F12 g0/r1 F13 g0/r6 F14 g0/r1 F15 g0/r7 F16 g0/r4 F18 g0/r2 | 6 g0/r0'
const F475 = 'sentry per-bot: F1 g0/r5 F2 g0/r3 F3 g0/r1 F4 g0/r5 F5 g0/r2 F6 g0/r15 F7 g0/r2 F8 g0/r5 F9 g0/r9 F10 g0/r19 F13 g0/r6 F14 g0/r1 F15 g0/r10 F16 g0/r5 F18 g0/r4 F19 g0/r10 | 3 g0/r0'
const F476 = 'sentry per-bot: F7 g0/r2 F10 g0/r2 F12 g0/r1 F13 g0/r3 F14 g0/r2 F16 g0/r4 F17 g0/r3 F19 g0/r1 | 11 g0/r0'
const F477 = 'sentry per-bot: F2 g0/r5 F3 g0/r1 F4 g0/r5 F10 g0/r3 F12 g0/r4 F13 g0/r1 F14 g0/r5 F15 g0/r4 F16 g0/r5 F18 g0/r3 | 9 g0/r0'

test('the real face lines ride byte-exact', () => {
  assert.deepEqual(sentryPerBotCensus([F474]), { named: 13, silent: 6, g: 236, r: 44 })
  assert.deepEqual(sentryPerBotCensus([F475]), { named: 16, silent: 3, g: 0, r: 102 })
  assert.deepEqual(sentryPerBotCensus([F476]), { named: 8, silent: 11, g: 0, r: 18 })
  assert.deepEqual(sentryPerBotCensus([F477]), { named: 10, silent: 9, g: 0, r: 36 })
  // the all-skin (the never-attributed face the emitter always prints)
  assert.deepEqual(sentryPerBotCensus(['sentry per-bot: all 19 g0/r0']), { named: 0, silent: 19, g: 0, r: 0 })
})

test('LAST-PRINT-WINS - the last print the freshest state the face held', () => {
  assert.deepEqual(sentryPerBotCensus([F476, F477]), { named: 10, silent: 9, g: 0, r: 36 })
  assert.deepEqual(sentryPerBotCensus([F477, F476]), { named: 8, silent: 11, g: 0, r: 18 })
})

test('the lawful zero - the never-attributed face keeps the healthy-looking zeros', () => {
  assert.deepEqual(sentryPerBotCensus(['bots=19 spawned=19', 'worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { named: 0, silent: 0, g: 0, r: 0 })
  assert.deepEqual(sentryPerBotCensus([]), { named: 0, silent: 0, g: 0, r: 0 })
})

test('the near-miss lanes never ride - the neighbours own their lanes', () => {
  // the hound's drowned-kill per-bot line (a different lane)
  assert.deepEqual(sentryPerBotCensus(['drowned-kill per-bot: F7 3 of 8']), { named: 0, silent: 0, g: 0, r: 0 })
  // the transit per-bot line (a different lane)
  assert.deepEqual(sentryPerBotCensus(['transit per-bot: F1 launched 73 times at [-134,413] (the walls class - the walls own the churn)']), { named: 0, silent: 0, g: 0, r: 0 })
  // the breath-mirror per-bot line (the freeze's own lane)
  assert.deepEqual(sentryPerBotCensus(['breath mirror [controls-blind] (the sentry died first) per-bot: F2 2']), { named: 0, silent: 0, g: 0, r: 0 })
  // the rescue-economy decode row (the storm's own seat)
  assert.deepEqual(sentryPerBotCensus(['rescue economy decode: 257 air glitches with 54 rescues (21.0%)']), { named: 0, silent: 0, g: 0, r: 0 })
  // the bot-tagged prefix on the report frame itself
  assert.deepEqual(sentryPerBotCensus(['F2 [F2] sentry per-bot: F2 g0/r5 | 18 g0/r0']), { named: 0, silent: 0, g: 0, r: 0 })
  // the pretty spacing (the double space the emitter never prints)
  assert.deepEqual(sentryPerBotCensus(['sentry per-bot: F2  g0/r5 | 18 g0/r0']), { named: 0, silent: 0, g: 0, r: 0 })
  // the missing pipe tail
  assert.deepEqual(sentryPerBotCensus(['sentry per-bot: F2 g0/r5']), { named: 0, silent: 0, g: 0, r: 0 })
  // the empty named body (the all-skin owns it)
  assert.deepEqual(sentryPerBotCensus(['sentry per-bot: | 9 g0/r0']), { named: 0, silent: 0, g: 0, r: 0 })
  // the named-zero token the emitter never prints
  assert.deepEqual(sentryPerBotCensus(['sentry per-bot: F2 g0/r0 F3 g0/r5 | 17 g0/r0']), { named: 0, silent: 0, g: 0, r: 0 })
  // the leading zero (the .248 house law)
  assert.deepEqual(sentryPerBotCensus(['sentry per-bot: F2 g03/r5 | 18 g0/r0']), { named: 0, silent: 0, g: 0, r: 0 })
  assert.deepEqual(sentryPerBotCensus(['sentry per-bot: F02 g0/r5 | 18 g0/r0']), { named: 0, silent: 0, g: 0, r: 0 })
  // the negative count
  assert.deepEqual(sentryPerBotCensus(['sentry per-bot: F2 g0/r-5 | 18 g0/r0']), { named: 0, silent: 0, g: 0, r: 0 })
  // the wrong frame entirely
  assert.deepEqual(sentryPerBotCensus(['worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { named: 0, silent: 0, g: 0, r: 0 })
  // the junk inputs
  assert.deepEqual(sentryPerBotCensus([null, undefined, 42, {}]), { named: 0, silent: 0, g: 0, r: 0 })
})

test('the census guard - the input itself not an array reads null', () => {
  assert.equal(sentryPerBotCensus(null), null)
  assert.equal(sentryPerBotCensus(undefined), null)
  assert.equal(sentryPerBotCensus(F477), null)
  assert.equal(sentryPerBotCensus(42), null)
})

test('the fence - every branch', () => {
  const ok = { back: { named: 1, silent: 18, g: 0, r: 1 }, prev: { named: 2, silent: 17, g: 1, r: 2 }, cur: { named: 3, silent: 16, g: 0, r: 3 } }
  assert.equal(sentryPerBotConsistent(ok), true)
  // the zero lawful - the all-silent face
  assert.equal(sentryPerBotConsistent({ back: { named: 0, silent: 19, g: 0, r: 0 }, prev: { named: 0, silent: 19, g: 0, r: 0 }, cur: { named: 0, silent: 19, g: 0, r: 0 } }), true)
  // extra keys never rejected
  assert.equal(sentryPerBotConsistent({ ...ok, extra: 'rides' }), true)
  // the missing face
  assert.equal(sentryPerBotConsistent({ back: { named: 1, silent: 18, g: 0, r: 1 }, prev: { named: 2, silent: 17, g: 1, r: 2 } }), false)
  // the negative cell
  assert.equal(sentryPerBotConsistent({ ...ok, cur: { named: -1, silent: 16, g: 0, r: 3 } }), false)
  // the non-integer cell
  assert.equal(sentryPerBotConsistent({ ...ok, cur: { named: 1.5, silent: 16, g: 0, r: 3 } }), false)
  // the junk folds
  assert.equal(sentryPerBotConsistent(null), false)
  assert.equal(sentryPerBotConsistent(undefined), false)
  assert.equal(sentryPerBotConsistent([ok]), false)
  assert.equal(sentryPerBotConsistent('fold'), false)
})

test('the row shapes - swell/fade/swing byte-exact', () => {
  const swell = sentryPerBotTrendRow({ back: { named: 8, silent: 11, g: 0, r: 18 }, prev: { named: 10, silent: 9, g: 0, r: 36 }, cur: { named: 16, silent: 3, g: 0, r: 102 } })
  assert.equal(swell, 'the sentry attribution trend (v0.976.256): the rescue mass\'s own swell ran two steps deep - 18 -> 36 (+18) -> 102 (+66) - the rescue mass\'s own swell, the storm witness rode 0 -> 0 -> 0, the named width rode 8 -> 10 -> 16 (the sentry row\'s own lane alone, co-existence by seat never by duplication - the rescue-economy decode keeps its own storm seat, the drowned-kill per-bot keeps the hound\'s lane, the transit per-bot keeps the transit\'s lane, the breath-mirror per-bot keeps the freeze\'s lane, the FLEET RESULT\'s rescues cell keeps the whole-fleet seat)')
  const fade = sentryPerBotTrendRow({ back: { named: 16, silent: 3, g: 0, r: 102 }, prev: { named: 10, silent: 9, g: 0, r: 36 }, cur: { named: 8, silent: 11, g: 0, r: 18 } })
  assert.equal(fade, 'the sentry attribution trend (v0.976.256): the rescue mass\'s own fade ran two steps deep - 102 -> 36 (-66) -> 18 (-18) - the rescue mass\'s own fade, the storm witness rode 0 -> 0 -> 0, the named width rode 16 -> 10 -> 8 (the sentry row\'s own lane alone, co-existence by seat never by duplication - the rescue-economy decode keeps its own storm seat, the drowned-kill per-bot keeps the hound\'s lane, the transit per-bot keeps the transit\'s lane, the breath-mirror per-bot keeps the freeze\'s lane, the FLEET RESULT\'s rescues cell keeps the whole-fleet seat)')
  const swing = sentryPerBotTrendRow({ back: { named: 13, silent: 6, g: 236, r: 44 }, prev: { named: 16, silent: 3, g: 0, r: 102 }, cur: { named: 8, silent: 11, g: 0, r: 18 } })
  assert.equal(swing, 'the sentry attribution trend (v0.976.256): the rescue mass\'s own swing - 44 -> 102 (+58) -> 18 (-84) - the fade and the swell traded seats between the faces, the storm witness rode 236 -> 0 -> 0, the named width rode 13 -> 16 -> 8 (the sentry row\'s own lane alone, co-existence by seat never by duplication - the rescue-economy decode keeps its own storm seat, the drowned-kill per-bot keeps the hound\'s lane, the transit per-bot keeps the transit\'s lane, the breath-mirror per-bot keeps the freeze\'s lane, the FLEET RESULT\'s rescues cell keeps the whole-fleet seat)')
})

test('the honest nulls - the held step and the three-face zero', () => {
  // a held step prices no direction
  assert.equal(sentryPerBotTrendRow({ back: { named: 1, silent: 18, g: 0, r: 44 }, prev: { named: 2, silent: 17, g: 0, r: 44 }, cur: { named: 3, silent: 16, g: 0, r: 102 } }), null)
  assert.equal(sentryPerBotTrendRow({ back: { named: 1, silent: 18, g: 0, r: 44 }, prev: { named: 2, silent: 17, g: 0, r: 102 }, cur: { named: 3, silent: 16, g: 0, r: 102 } }), null)
  // the three-face zero - the sentry attributed no rescue the whole arc
  assert.equal(sentryPerBotTrendRow({ back: { named: 0, silent: 19, g: 0, r: 0 }, prev: { named: 0, silent: 19, g: 0, r: 0 }, cur: { named: 0, silent: 19, g: 0, r: 0 } }), null)
  // the g-only face prices nothing - the storm witness rides only beside
  // a living rescue mass (the three-face zero r mass with g mass beside)
  assert.equal(sentryPerBotTrendRow({ back: { named: 1, silent: 18, g: 236, r: 0 }, prev: { named: 1, silent: 18, g: 100, r: 0 }, cur: { named: 1, silent: 18, g: 50, r: 0 } }), null)
  // the fence keeps the lie out
  assert.equal(sentryPerBotTrendRow({ back: { named: 1, silent: 18, g: 0, r: 1 } }), null)
  assert.equal(sentryPerBotTrendRow(null), null)
})

test('THE FIELD WINDOW - W477 the real arc 475->476->477 prices the swing', () => {
  const row = sentryPerBotTrendRow({
    back: sentryPerBotCensus([F475]),
    prev: sentryPerBotCensus([F476]),
    cur: sentryPerBotCensus([F477])
  })
  assert.equal(row, 'the sentry attribution trend (v0.976.256): the rescue mass\'s own swing - 102 -> 18 (-84) -> 36 (+18) - the fade and the swell traded seats between the faces, the storm witness rode 0 -> 0 -> 0, the named width rode 16 -> 8 -> 10 (the sentry row\'s own lane alone, co-existence by seat never by duplication - the rescue-economy decode keeps its own storm seat, the drowned-kill per-bot keeps the hound\'s lane, the transit per-bot keeps the transit\'s lane, the breath-mirror per-bot keeps the freeze\'s lane, the FLEET RESULT\'s rescues cell keeps the whole-fleet seat)')
})

test('the emitter grammar - the statcarry template must stand', () => {
  // the emitter's own template: `sentry per-bot: ${named.join(' ')} | ${silent} g0/r0` and `sentry per-bot: all ${silent} g0/r0`
  const templateLine = (tokens, silent) => tokens.length ? `sentry per-bot: ${tokens.join(' ')} | ${silent} g0/r0` : `sentry per-bot: all ${silent} g0/r0`
  const lines = [
    templateLine([], 19),
    templateLine(['F2 g0/r5', 'F3 g0/r1'], 17),
    templateLine(['F11 g236/r4'], 18),
    templateLine(['F1 g0/r1', 'F4 g0/r3', 'F6 g0/r1'], 16)
  ]
  for (const line of lines) {
    assert.equal(sentryPerBotCensus([line]) !== null, true, `template line must ride: ${line}`)
  }
})
