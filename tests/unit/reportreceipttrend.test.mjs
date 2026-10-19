// (v0.976.291) THE REPORT WRITE RECEIPT'S OWN MASS - the test pins.
// REAL lines byte-exact: F494's own face (run 39268802792) carries the
// receipt once; the REAL zero face run36292057377 carries none (the
// stormguard FATAL OOM class the face ends on); the REAL windows the
// shapes price: W36289053811-36292057377-36295859380 the swing
// 1 -> 0 -> 1 and W36292057377-36295859380-36301385048 the swell
// 0 -> 1 -> 1; the held windows the silence prices (F492 -> F493 ->
// F494 the 1 -> 1 -> 1 the completed-run prairie rides).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { reportReceiptCensus, reportReceiptConsistent, reportReceiptTrendRow } from '../../src/lib/reportreceipttrend.mjs'

// the REAL receipt line byte-exact (the fleet faces' own teardown echo)
const REAL_RECEIPT = 'report: data/fleet-report.json written'
// the REAL zero face's own body (run36292057377 - the OOM class the
// receipt's absence names; the stormguard lines the face ends on)
const REAL_OOM_FACE_TAIL = [
  'b] n=12 ts=241s rss=367M late=60ms mainLate=2190ms',
  '[stormguard] STORM PROBE: rss 1154M -> 2271M (+1117M in 5s = 223MB/s, mainLate 2190ms)',
  '[stormguard] FATAL (hard ceiling 3000M): rss 2271M -> 3094M (+823M in 5s = 164MB/s >= 40MB/s at rss >= 1200M floor)',
  '[stormguard] the MAIN thread is allocating itself to death while frozen (run53/35647216505 OOM class: unsymbolized exit 134)'
]

test('v0.976.291 census: the REAL receipt line byte-exact (the F494 face)', () => {
  assert.deepEqual(reportReceiptCensus([REAL_RECEIPT]), { receipts: 1 })
  assert.deepEqual(reportReceiptCensus(['plan progress: 1/31 resources complete', REAL_RECEIPT, 'FLEET RESULT (normal end) =====']), { receipts: 1 })
})

test('v0.976.291 census: the REAL zero face (run36292057377 the OOM class)', () => {
  assert.deepEqual(reportReceiptCensus(REAL_OOM_FACE_TAIL), { receipts: 0 })
})

test('v0.976.291 census: the sum never caps (the .232 law) and the junk faces stay honest', () => {
  assert.deepEqual(reportReceiptCensus([REAL_RECEIPT, REAL_RECEIPT]), { receipts: 2 })
  assert.deepEqual(reportReceiptCensus([]), { receipts: 0 })
  assert.deepEqual(reportReceiptCensus(null), { receipts: 0 })
})

test('v0.976.291 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(reportReceiptCensus(['F4 report: data/fleet-report.json written']).receipts, 0, 'bot-tagged prefix')
  assert.equal(reportReceiptCensus(['report:  data/fleet-report.json written']).receipts, 0, 'pretty spacing')
  assert.equal(reportReceiptCensus(['report: data/fleet-report.json']).receipts, 0, 'missing tail')
  assert.equal(reportReceiptCensus(['report: data/fleet-report.json saved']).receipts, 0, 'altered tail verb')
  assert.equal(reportReceiptCensus(['report: data/fleet-report.json.tmp written']).receipts, 0, 'temp path skin')
  assert.equal(reportReceiptCensus([' report: data/fleet-report.json written']).receipts, 0, 'leading whitespace')
  assert.equal(reportReceiptCensus(['report: data/fleet-report.json written ok']).receipts, 0, 'trailing junk')
  assert.equal(reportReceiptCensus(['reports: data/fleet-report.json written']).receipts, 0, 'plural head')
  assert.equal(reportReceiptCensus(['report: data/other-report.json written']).receipts, 0, 'other path')
  assert.equal(reportReceiptCensus(['Report: data/fleet-report.json written']).receipts, 0, 'uppercase head')
  assert.equal(reportReceiptCensus(['report: data/fleet-report.json written\r']).receipts, 0, 'CR tail')
  assert.equal(reportReceiptCensus(['report: data/fleet-report.json  written']).receipts, 0, 'fused pretty spacing')
})

test('v0.976.291 fence: every branch prices', () => {
  const ok = { back: { receipts: 1 }, prev: { receipts: 0 }, cur: { receipts: 1 } }
  assert.equal(reportReceiptConsistent(ok), true)
  assert.equal(reportReceiptConsistent(null), false)
  assert.equal(reportReceiptConsistent({}), false)
  assert.equal(reportReceiptConsistent({ back: { receipts: 1 }, prev: { receipts: 0 } }), false, 'missing face')
  assert.equal(reportReceiptConsistent({ back: { receipts: -1 }, prev: { receipts: 0 }, cur: { receipts: 1 } }), false, 'negative')
  assert.equal(reportReceiptConsistent({ back: { receipts: 1.5 }, prev: { receipts: 0 }, cur: { receipts: 1 } }), false, 'non-integer')
})

test('v0.976.291 shape: the REAL swing window 1 -> 0 -> 1 (the death traded, the write returned)', () => {
  const row = reportReceiptTrendRow({ back: { receipts: 1 }, prev: { receipts: 0 }, cur: { receipts: 1 } })
  assert.equal(row, "the report receipt trend (v0.976.291): the write receipt's own swing - 1 -> 0 (-1) -> 1 (+1) - the write and the death traded seats between the faces (the receipt the OOM class takes), (the fate word keeps the fate lane (the v0.546.0 facefate's own result/partial/none rows - the account's fate the result block prices, the receipt the write's own echo the fate never prices), the atomicsave write's own emitter law keeps its test seat (the fleet19.mjs print the atomicsave test pins), the report frame's own words keep their seats (the .255 ceiling word, the .258 duck word, the .256 sentry row), the launch line the .279 bootstrap word prices, the counters band the .261-.288 words keep, the gc band the .281/.289/.290 words keep - the receipt mass's row alone, co-existence by seat never by duplication)")
})

test('v0.976.291 shape: the swell two rises deep and the REAL arrival the held law keeps unnamed', () => {
  const swell = reportReceiptTrendRow({ back: { receipts: 0 }, prev: { receipts: 1 }, cur: { receipts: 2 } })
  assert.match(swell, /the write receipt's own swell ran two steps deep - 0 -> 1 \(\+1\) -> 2 \(\+1\)/)
  assert.equal(reportReceiptTrendRow({ back: { receipts: 0 }, prev: { receipts: 1 }, cur: { receipts: 1 } }), null, 'the REAL W36292057377-36295859380-36301385048 window 0 -> 1 -> 1 - the arrival rode unnamed (the family held law)')
})

test('v0.976.291 shape: the fade and the held law and the three-face zero', () => {
  const fade = reportReceiptTrendRow({ back: { receipts: 2 }, prev: { receipts: 1 }, cur: { receipts: 0 } })
  assert.match(fade, /the write receipt's own fade ran two steps deep - 2 -> 1 \(-1\) -> 0 \(-1\)/)
  assert.equal(reportReceiptTrendRow({ back: { receipts: 1 }, prev: { receipts: 1 }, cur: { receipts: 1 } }), null, 'the REAL completed-run prairie the silence prices (F492 -> F493 -> F494)')
  assert.equal(reportReceiptTrendRow({ back: { receipts: 0 }, prev: { receipts: 0 }, cur: { receipts: 0 } }), null, 'the three-face zero')
  assert.equal(reportReceiptTrendRow({ back: { receipts: 0 }, prev: { receipts: 0 }, cur: { receipts: 1 } }), null, 'the held first step (the arrival unnamed)')
  assert.equal(reportReceiptTrendRow({ back: { receipts: 1 }, prev: { receipts: 0 }, cur: null }), null, 'the fence fail')
})
