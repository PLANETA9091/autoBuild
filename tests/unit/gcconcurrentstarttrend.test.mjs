import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcConcurrentStartCensus, gcConcurrentStartConsistent, gcConcurrentStartTrendRow } from '../../src/lib/gcconcurrentstarttrend.mjs'

// the REAL lines the faces carry (run 39287423190 F496, run 39296753535
// F497, run 39303149973 F498, run 39309831696 F499, run 39314160850
// F500 - the byte-exact prints the JVM's own G1 collector spoke)

test('v0.976.303 census: the REAL lines byte-exact and the peak prices', () => {
  // F498's own face - the plain Metadata skin, the plain CodeCache skin,
  // and the PINNED CodeCache skin (the arc's own peak 25.909)
  const f498 = [
    '[9.719s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 145M->42M(1026M) 18.553ms',
    '[11.783s][info][gc] GC(5) Pause Young (Concurrent Start) (Metadata GC Threshold) 66M->62M(1024M) 22.139ms',
    '[13.810s][info][gc] GC(9) Pause Young (Concurrent Start) (Metadata GC Threshold) 91M->87M(1024M) 21.696ms',
    '[48.648s][info][gc] GC(17) Pause Young (Concurrent Start) (CodeCache GC Threshold) (Evacuation Failure: Pinned) 730M->196M(1024M) 25.909ms'
  ]
  assert.deepEqual(gcConcurrentStartCensus(f498), { maxCStartMs: 25.909, pinned: 1 })
  // F496's own face - the four plain skins the arc's first face held
  const f496 = [
    '[2.783s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 146M->42M(1026M) 11.361ms',
    '[4.781s][info][gc] GC(5) Pause Young (Concurrent Start) (Metadata GC Threshold) 65M->62M(1024M) 18.779ms',
    '[6.971s][info][gc] GC(9) Pause Young (Concurrent Start) (Metadata GC Threshold) 90M->88M(1024M) 16.776ms',
    '[41.936s][info][gc] GC(18) Pause Young (Concurrent Start) (CodeCache GC Threshold) 358M->213M(1024M) 22.336ms'
  ]
  assert.deepEqual(gcConcurrentStartCensus(f496), { maxCStartMs: 22.336, pinned: 0 })
  // F500's own face - the CodeCache plain skin rides (the .302 grammar
  // refuses this body - the seats never collide)
  const f500 = [
    '[3.707s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 145M->42M(1026M) 10.597ms',
    '[37.340s][info][gc] GC(18) Pause Young (Concurrent Start) (CodeCache GC Threshold) 277M->205M(1024M) 16.332ms'
  ]
  assert.deepEqual(gcConcurrentStartCensus(f500), { maxCStartMs: 16.332, pinned: 0 })
  // the sibling kinds never ride - the Normal line the .302 word's own
  // seat keeps
  const mixed = [
    '[32.053s][info][gc] GC(13) Pause Young (Normal) (G1 Evacuation Pause) 702M->154M(1024M) 65.071ms',
    '[4.132s][info][gc] GC(2) Pause Young (Concurrent Start) (Metadata GC Threshold) 146M->42M(1026M) 11.314ms'
  ]
  assert.deepEqual(gcConcurrentStartCensus(mixed), { maxCStartMs: 11.314, pinned: 0 })
})

test('v0.976.303 census: the junk faces stay honest', () => {
  assert.equal(gcConcurrentStartCensus(null), null)
  assert.equal(gcConcurrentStartCensus('junk'), null)
  assert.equal(gcConcurrentStartCensus(42), null)
  assert.deepEqual(gcConcurrentStartCensus([]), { maxCStartMs: 0, pinned: 0 })
  assert.deepEqual(gcConcurrentStartCensus(['total junk', '']), { maxCStartMs: 0, pinned: 0 })
  assert.deepEqual(gcConcurrentStartCensus([null, 7, undefined]), { maxCStartMs: 0, pinned: 0 })
})

test('v0.976.303 near-miss skins: twelve forms the grammar refuses', () => {
  const refuses = [
    // the Normal kind - the .302 word's own body
    '[32.053s][info][gc] GC(13) Pause Young (Normal) (G1 Evacuation Pause) 702M->154M(1024M) 65.071ms',
    // the Prepare Mixed kind - the .301 word's own body
    '[9.719s][info][gc] GC(1) Pause Young (Prepare Mixed) (Metadata GC Threshold) 145M->42M(1026M) 18.553ms',
    // the Mixed kind
    '[9.719s][info][gc] GC(1) Pause Young (Mixed) (Metadata GC Threshold) 145M->42M(1026M) 18.553ms',
    // the bot-tagged prefix the console frame wears
    '[12:00:01] [Server thread/INFO]: GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 145M->42M(1026M) 18.553ms',
    // the Remark sibling - the .298 word's own lane
    '[9.719s][info][gc] GC(1) Pause Remark 145M->42M(1026M) 18.553ms',
    // the Cleanup sibling - the .300 word's own lane
    '[9.719s][info][gc] GC(1) Pause Cleanup 145M->42M(1026M) 18.553ms',
    // the Concurrent Mark Cycle sibling - the .290 word's own lane
    '[9.719s][info][gc] GC(1) Concurrent Mark Cycle 18.553ms',
    // the float heap the trio never prints
    '[9.719s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 145.5M->42M(1026M) 18.553ms',
    // the missing ms unit
    '[9.719s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 145M->42M(1026M) 18.553',
    // the missing cause parens
    '[9.719s][info][gc] GC(1) Pause Young (Concurrent Start) 145M->42M(1026M) 18.553ms',
    // the leading-zero GC num the .248 house law refuses
    '[9.719s][info][gc] GC(01) Pause Young (Concurrent Start) (Metadata GC Threshold) 145M->42M(1026M) 18.553ms',
    // the leading whitespace + the trailing junk
    ' [9.719s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 145M->42M(1026M) 18.553ms',
    '[9.719s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 145M->42M(1026M) 18.553ms junk',
    // the CR tail
    '[9.719s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 145M->42M(1026M) 18.553ms\r'
  ]
  for (const l of refuses) {
    const c = gcConcurrentStartCensus([l])
    assert.deepEqual(c, { maxCStartMs: 0, pinned: 0 }, `refused: ${l}`)
  }
})

test('v0.976.303 fence: every branch prices', () => {
  const face = { maxCStartMs: 22.336, pinned: 0 }
  assert.equal(gcConcurrentStartConsistent(null), false)
  assert.equal(gcConcurrentStartConsistent('junk'), false)
  assert.equal(gcConcurrentStartConsistent({ back: face, prev: face }), false)
  assert.equal(gcConcurrentStartConsistent({ back: face, prev: face, cur: face }), true)
  assert.equal(gcConcurrentStartConsistent({ back: { maxCStartMs: -1, pinned: 0 }, prev: face, cur: face }), false)
  assert.equal(gcConcurrentStartConsistent({ back: { maxCStartMs: Infinity, pinned: 0 }, prev: face, cur: face }), false)
  assert.equal(gcConcurrentStartConsistent({ back: face, prev: { maxCStartMs: NaN, pinned: 0 }, cur: face }), false)
  assert.equal(gcConcurrentStartConsistent({ back: face, prev: face, cur: { maxCStartMs: 0, pinned: -1 } }), false)
  assert.equal(gcConcurrentStartConsistent({ back: face, prev: face, cur: { maxCStartMs: 0, pinned: 1.5 } }), false)
  assert.equal(gcConcurrentStartConsistent({ back: face, prev: face, cur: { maxCStartMs: 16.332, pinned: 1 } }), true)
})

test('v0.976.303 shape: the REAL three swings byte-exact (the birth speaks three deep)', () => {
  const f496 = { maxCStartMs: 22.336, pinned: 0 }
  const f497 = { maxCStartMs: 21.96, pinned: 0 }
  const f498 = { maxCStartMs: 25.909, pinned: 1 }
  const f499 = { maxCStartMs: 15.947, pinned: 0 }
  const f500 = { maxCStartMs: 16.332, pinned: 0 }
  // W1 the swing 22.336 -> 21.960 (-0.376) -> 25.909 (+3.949)
  assert.equal(
    gcConcurrentStartTrendRow({ back: f496, prev: f497, cur: f498 }),
    'the server gc trend (v0.976.303): the concurrent start\'s own peak swing - 22.336 -> 21.960 (-0.376) -> 25.909 (+3.949) ms - the start handoff\'s own price traded between the faces (the pinned rode 0 -> 0 -> 1), (the .281 gcpausetrend word keeps the all-kinds merged maxPause cell (its scalar never splits the kind), the .290 gcconcurrenttrend word keeps the Concurrent Mark Cycle lane (a different emitter), the .302 gcnormalpeaktrend word keeps the Normal kind\'s max seat (its grammar refuses the Concurrent Start body byte-exact), the .301 gcpausemixedtrend word keeps the Prepare Mixed kind\'s max seat, the .299 gcpausenormaltrend word keeps the Normal kind\'s count cell, the .298 remark and the .300 cleanup words keep the metadata cycle\'s own pauses\' seats - the concurrent start peak\'s row alone, co-existence by seat never by duplication)'
  )
  // W2 the swing 21.960 -> 25.909 (+3.949) -> 15.947 (-9.962)
  const w2 = gcConcurrentStartTrendRow({ back: f497, prev: f498, cur: f499 })
  assert.ok(w2.includes('the concurrent start\'s own peak swing - 21.960 -> 25.909 (+3.949) -> 15.947 (-9.962) ms'))
  assert.ok(w2.includes('(the pinned rode 0 -> 1 -> 0)'))
  // W3 the swing 25.909 -> 15.947 (-9.962) -> 16.332 (+0.385)
  const w3 = gcConcurrentStartTrendRow({ back: f498, prev: f499, cur: f500 })
  assert.ok(w3.includes('the concurrent start\'s own peak swing - 25.909 -> 15.947 (-9.962) -> 16.332 (+0.385) ms'))
  assert.ok(w3.includes('(the pinned rode 1 -> 0 -> 0)'))
})

test('v0.976.303 shape: the fade and the swell and the held law and the three-face zero', () => {
  const tail = "the .281 gcpausetrend word keeps the all-kinds merged maxPause cell (its scalar never splits the kind)"
  // the synthesized fade byte-exact
  const fade = gcConcurrentStartTrendRow({ back: { maxCStartMs: 30, pinned: 0 }, prev: { maxCStartMs: 20, pinned: 0 }, cur: { maxCStartMs: 10, pinned: 0 } })
  assert.ok(fade.startsWith('the server gc trend (v0.976.303): the concurrent start\'s own peak fade ran two steps deep - 30.000 -> 20.000 (-10.000) -> 10.000 (-10.000) ms - the start handoff\'s own relief'))
  assert.ok(fade.includes(tail))
  // the synthesized swell byte-exact
  const swell = gcConcurrentStartTrendRow({ back: { maxCStartMs: 10, pinned: 2 }, prev: { maxCStartMs: 20, pinned: 1 }, cur: { maxCStartMs: 30, pinned: 0 } })
  assert.ok(swell.startsWith('the server gc trend (v0.976.303): the concurrent start\'s own peak swell ran two steps deep - 10.000 -> 20.000 (+10.000) -> 30.000 (+10.000) ms - the start handoff\'s own price climbed'))
  assert.ok(swell.includes('(the pinned rode 2 -> 1 -> 0)'))
  // the held step - the honest silence
  assert.equal(gcConcurrentStartTrendRow({ back: { maxCStartMs: 20, pinned: 0 }, prev: { maxCStartMs: 20, pinned: 0 }, cur: { maxCStartMs: 30, pinned: 0 } }), null)
  assert.equal(gcConcurrentStartTrendRow({ back: { maxCStartMs: 20, pinned: 0 }, prev: { maxCStartMs: 30, pinned: 0 }, cur: { maxCStartMs: 30, pinned: 0 } }), null)
  // the three-face zero - the lawful silence keeps
  assert.equal(gcConcurrentStartTrendRow({ back: { maxCStartMs: 0, pinned: 0 }, prev: { maxCStartMs: 0, pinned: 0 }, cur: { maxCStartMs: 0, pinned: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(gcConcurrentStartTrendRow(null), null)
  assert.equal(gcConcurrentStartTrendRow({ back: { maxCStartMs: -1, pinned: 0 }, prev: { maxCStartMs: 20, pinned: 0 }, cur: { maxCStartMs: 30, pinned: 0 } }), null)
})
