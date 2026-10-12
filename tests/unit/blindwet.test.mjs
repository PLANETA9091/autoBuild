// THE BLIND-WET ESCALATION - the blindwet tests (v0.974.4).
//
// Face 265's own bill named the hole: 6 fatal arms, 3 rode the blind
// reset(-1) skin to the death line - a bot whose head sits in water while
// its air_supply metadata rides the -1 sentinel NEVER pages (v0.64.0 reads
// a missing bar FULL, the drowning clock runs unwitnessed). The escalation
// makes the sentinel's own persistence honest: blind + wet past the
// threshold = the page. The guards are the test's own fence:
//   - an in-domain read never escalates (the sensor spoke - the verdict
//     lanes own the next word)
//   - a dry head never escalates (the surface-bob's own intermittent sight)
//   - the pre-threshold window judges nothing (the honest blind idiom)
//   - a broken threshold falls back to the constant (the fence law)
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { blindWetPage, BLIND_WET_PAGE_MS, BLIND_WET_VERDICT } from '../../src/lib/drowning.mjs'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))

test('the threshold constant rides the priced seat (~20 s - two refill cycles + margin, under the ~35 s drain-to-death clock)', () => {
  assert.equal(BLIND_WET_PAGE_MS, 20000)
  assert.equal(typeof BLIND_WET_VERDICT, 'string')
  assert.ok(BLIND_WET_VERDICT.length > 0, 'the verdict word is non-empty')
})

test('the fatal arm shape pages: blind sentinel + head wet past the threshold', () => {
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: BLIND_WET_PAGE_MS }), true)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: 60000 }), true)
})

test('the pre-threshold window judges nothing (the honest blind idiom)', () => {
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: 0 }), false)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: 1 }), false)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: BLIND_WET_PAGE_MS - 1 }), false)
})

test('an in-domain read never escalates - the sensor spoke (the verdict lanes own the next word)', () => {
  assert.equal(blindWetPage({ o2InDomain: true, headWet: true, blindWetMs: 999999 }), false)
})

test('a dry head never escalates - the surface-bob re-arms per descent', () => {
  assert.equal(blindWetPage({ o2InDomain: false, headWet: false, blindWetMs: 999999 }), false)
})

test('junk-safe: non-finite and negative persistence judge nothing', () => {
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: NaN }), false)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: -5 }), false)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: Infinity }), false)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: 'junk' }), false)
})

test('a broken threshold falls back to the constant (the fence law)', () => {
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: 25000, thresholdMs: NaN }), true)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: 25000, thresholdMs: 0 }), true)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: 15000, thresholdMs: NaN }), false)
  assert.equal(blindWetPage({ o2InDomain: false, headWet: true, blindWetMs: 25000, thresholdMs: 30000 }), false)
})

test('the v0.974.4 wiring rides the sentry: the blind-wet fold joins the verdict chain and the rescue start emitter keeps its seat', () => {
  const src = readFileSync(join(here, '../../src/bots/miner.mjs'), 'utf8')
  // the import rides the drowning band
  assert.ok(src.includes('blindWetPage, BLIND_WET_PAGE_MS, BLIND_WET_VERDICT,'), 'the escalation imports ride the band')
  // the tracker rides the sentry state
  assert.ok(src.includes('let blindWetSince = 0'), 'the persistence tracker rides the sentry state')
  // the fold: blind track opens/closes on the sentry's own clock
  assert.ok(src.includes("if (!oxygenInDomain(o2raw) && headWet) { if (!blindWetSince) blindWetSince = now } else { blindWetSince = 0 }"), 'the track rides the sentry clock')
  // the page gate folds the blind class beside the drowning verdict
  assert.ok(src.includes("if (verdict === 'drowning' || blindWetVerdict) {"), 'the page gate folds the blind class')
  // the rescue start emitter keeps its seat - the class rides the existing line
  assert.ok(src.includes('rescueFromWater(blindWetVerdict || verdict)'), 'the start emitter rides the blind verdict')
})

test('the decomposition contract holds: the blind verdict word rides the existing rescue start emitter (zero new line families)', () => {
  const src = readFileSync(join(here, '../../src/lib/drowning.mjs'), 'utf8')
  assert.ok(src.includes("export const BLIND_WET_VERDICT = 'blind sentinel wet'"), 'the verdict word rides the export band')
  assert.ok(src.includes('export const BLIND_WET_PAGE_MS = 20000'), 'the threshold rides the export band')
  assert.ok(src.includes('export function blindWetPage ('), 'the pure law rides the export band')
})
