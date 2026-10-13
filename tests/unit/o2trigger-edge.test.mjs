// THE NO-CROSSING DEATHS' OWN FLOOR - the o2trigger edge tests (v0.975.0).
//
// The band edge's own lever price (the front five faces named - 'the
// o2-low band edge, v0.975.0's named seat' - and never priced): the
// no-crossing life's every numeric read rode ABOVE the edge (the
// crossing law's own contrapositive), so the life's own floor (minO2)
// above the edge IS the miss seat's own depth - the minimal raise the
// raised edge would have bought. The synthetic lines ride the emitters'
// own grammar byte for byte (the v0.875.0 precedent).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  TRIGGER_O2_MAX,
  o2TriggerBook,
  o2TriggerConsistent,
  o2TriggerEdgeBook,
  o2TriggerEdgeConsistent,
  o2TriggerEdgeRow
} from '../../src/lib/o2trigger.mjs'

// the emitters' own grammar, byte for byte
const hb = (n, ts) => `fleet [fleet] n=${n} ts=${ts}s rss=456M late=10ms mainLate=5ms`
const pass = (bot, n, o2) =>
  `${bot} [${bot}] water: pass ${n} head=wet shore=none land=n/a y=60.4 o2=${o2} probes=0 at=[-134,60,387]`
const died = (bot, cause) => `${bot} [${bot}] died - respawning (cause: server: ${cause} [kind=drown] | inferred: none)`

test('the edge pin - the census\'s own edge, the mirror law by import', () => {
  // the threshold is the census's own rescueBand edge (never invented)
  assert.equal(TRIGGER_O2_MAX, 10)
})

test('the fold - the life\'s own floor rides the death, the reset clears it', () => {
  // F3's life: reads 14 then 12 - the floor is 12, the last read is 12,
  // no read at-or-below the edge (12 > 10) - the no-crossing seat
  const lines = [
    hb(0, 100),
    pass('F3', 0, 14),
    pass('F3', 1, 12),
    died('F3', 'drowned')
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.deaths, 1)
  assert.equal(b.noCrossing, 1)
  assert.equal(b.perDeath[0].minO2, 12)
  assert.equal(b.perDeath[0].lastO2, 12)
  assert.equal(b.perDeath[0].crossed, false)
  assert.ok(o2TriggerConsistent(b))
  // the floor never rides above the last read - the lie the fence catches
  const forged = { ...b, perDeath: [{ ...b.perDeath[0], minO2: 14 }] }
  assert.equal(o2TriggerConsistent(forged), false)
  // the floor without its own read lies (the shared-seat law)
  const orphan = { ...b, perDeath: [{ ...b.perDeath[0], lastO2: null, lastPassHead: null }] }
  assert.equal(o2TriggerConsistent(orphan), false)
  // the legacy seat (no floor byte rode) stays legal - never forged
  const legacy = { ...b, perDeath: [{ bot: 'F3', ts: 100, crossed: false, window: null, lastO2: null, lastO2Gap: null, lastO2Span: null, lastPassHead: null }] }
  assert.equal(o2TriggerConsistent(legacy), true)
})

test('the death reset - a new life\'s floor starts clean', () => {
  const lines = [
    hb(0, 100),
    pass('F3', 0, 4), // the first life's floor (a crossing - 4 <= 10)
    died('F3', 'drowned'),
    pass('F3', 1, 16), // the second life's floor: 16, the reset proved
    pass('F3', 2, 15),
    died('F3', 'drowned')
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.deaths, 2)
  assert.equal(b.perDeath[0].minO2, 4)
  assert.equal(b.perDeath[1].minO2, 15) // the first life's floor did not survive
  assert.equal(o2TriggerConsistent(b), true)
})

test('the edge book - the floor above the edge is the miss seat\'s own depth', () => {
  // two no-crossing lives (floors 12 and 18 - depths 2 and 8) + one
  // crossing life (the edge caught it - prices nothing) + one blind life
  const lines = [
    hb(0, 100),
    pass('F3', 0, 14), pass('F3', 1, 12), died('F3', 'drowned'), // depth 2
    pass('F4', 0, 18), died('F4', 'drowned'), // depth 8
    pass('F5', 0, 14), pass('F5', 1, 8), died('F5', 'drowned'), // crossed - skipped
    pass('F6', 0, 'reset(-1)'), died('F6', 'drowned') // blind - the sensor's own death
  ]
  const b = o2TriggerBook(lines)
  const e = o2TriggerEdgeBook(b)
  assert.ok(e)
  assert.equal(e.deaths, 4)
  assert.equal(e.noCrossing, 3)
  assert.equal(e.blind, 1)
  assert.equal(e.lies, 0)
  assert.equal(e.catchable.count, 2)
  assert.equal(e.catchable.min, 2)
  assert.equal(e.catchable.max, 8)
  assert.equal(e.catchable.sum, 10)
  assert.equal(o2TriggerEdgeConsistent(e), true)
  const row = o2TriggerEdgeRow(e)
  assert.ok(row.includes('2 of 3 no-crossing death(s)'))
  assert.ok(row.includes('2..8 avg 5.0 o2-unit(s)'))
  assert.ok(row.includes('the minimal raise the raised edge would have bought'))
})

test('the edge fence - a lie prices nothing, the blind rides the honest word', () => {
  // the lie seat: a no-crossing death with a floor at-or-below the edge
  // (the crossing law's own contrapositive is absolute)
  const lie = { deaths: 1, noCrossing: 1, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, lies: 1 }
  assert.equal(o2TriggerEdgeConsistent(lie), false)
  assert.equal(o2TriggerEdgeRow(lie), null)
  // the seats must sum to the fold's own noCrossing
  const split = { deaths: 2, noCrossing: 2, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 1, min: 3, max: 3, sum: 3 }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(split), false)
  // the blind split's own image: the four skins sum to the blind total
  const badSplit = { deaths: 2, noCrossing: 2, blind: 2, blindSplit: { reset: 1, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(badSplit), false)
  // all-blind (reset skins): the row rides the sensor's own death word
  const blind = { deaths: 2, noCrossing: 2, blind: 2, blindSplit: { reset: 2, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, raiseYield: { caught: 0, two: 0, three: 0, four: 0, five: 0, rest: { count: 0, min: null, max: null, sum: 0 } }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(blind), true)
  const row = o2TriggerEdgeRow(blind)
  assert.ok(row.includes('no numeric floor above the edge (2 blind)'))
  assert.ok(row.includes('the sensor\'s own sight prices the edge nothing'))
  assert.ok(row.includes('the blind split: reset 2 / unknown 0 / silent 0'))
  assert.ok(row.includes('the sensor\'s own death owns the blind share - the sensor-health front'))
})

test("the blind seat's own skin (v0.975.2) - the reset/unknown/silent split", () => {
  // three no-crossing blind lives: the sensor's own death (reset(-1)),
  // the parse's own unknown (?), the stream's own gap (no pass at all)
  const lines = [
    hb(0, 100),
    pass('F3', 0, 'reset(-1)'), died('F3', 'drowned'), // the sensor died
    pass('F4', 0, '?'), died('F4', 'drowned'), // the unknown skin
    died('F5', 'drowned') // no pass line ever - the stream's gap
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.deaths, 3)
  assert.equal(b.noCrossing, 3)
  assert.equal(b.perDeath[0].minO2, null)
  assert.equal(b.perDeath[0].blindKind, 'reset')
  assert.equal(b.perDeath[1].blindKind, 'unknown')
  assert.equal(b.perDeath[2].blindKind, 'silent')
  assert.equal(o2TriggerConsistent(b), true)
  const e = o2TriggerEdgeBook(b)
  assert.equal(e.blind, 3)
  assert.equal(e.blindSplit.reset, 1)
  assert.equal(e.blindSplit.unknown, 1)
  assert.equal(e.blindSplit.silent, 1)
  assert.equal(e.blindSplit.legacy, 0)
  assert.equal(o2TriggerEdgeConsistent(e), true)
  const row = o2TriggerEdgeRow(e)
  assert.ok(row.includes('the blind split: reset 1 / unknown 1 / silent 1'))
  assert.ok(row.includes('the two fronts compete'))
})

test("the silent life's own coverage seat (v0.975.4) - the unborn prices the fold's own start", () => {
  // the silent life with no previous death rides the honest unborn -
  // the fold's own start owns the birth, the seat never invents one
  const lines = [
    hb(0, 100),
    hb(1, 120),
    died('F5', 'drowned') // no pass line ever, no previous death - unborn
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.perDeath[0].blindKind, 'silent')
  assert.equal(b.perDeath[0].lifeSpan, null, 'no birth rode - the span prices nothing')
  assert.equal(b.perDeath[0].lifeHb, null, 'no birth rode - the pulse prices nothing')
  assert.equal(o2TriggerConsistent(b), true)
  const e = o2TriggerEdgeBook(b)
  assert.equal(e.blindSplit.silent, 1)
  assert.equal(e.silentSpan.born, 0)
  assert.equal(e.silentUnborn, 1)
  assert.equal(e.silentUnbornTs.count, 1, 'the death\'s own clock rode - the WHEN seat prices')
  assert.equal(e.silentUnbornTs.min, 120)
  assert.equal(e.silentUnbornTs.max, 120)
  assert.equal(e.silentUnbornTs.sum, 120)
  assert.equal(o2TriggerEdgeConsistent(e), true)
  const row = o2TriggerEdgeRow(e)
  assert.ok(row.includes("the stream's own gap owns the blind share - the sight-span front"))
  assert.ok(row.includes('all 1 unborn - the fold\'s own start owns the birth'))
  assert.ok(row.includes("the unborn lives' own when (v0.975.7): 1 of 1 priced the clock - the deaths rode ts 120..120 - the stream's own thirds (v0.976.11): early 0 / mid 0 / late 1 of 1 priced - the late third owns the lane - THE STREAM'S OWN CADENCE: the deaths crowd the stream's own end - the cadence's own front"))
})

test("the unborn lives' own when seat (v0.975.7) - the untimed unborn prices the honest silence", () => {
  // the silent life with no heartbeat rode before the death: the ts
  // byte never rode - the WHEN fold prices nothing (the clock's own
  // honesty), the row's WHEN word stays silent
  const lines = [
    died('F5', 'drowned') // no heartbeat ever - the untimed unborn seat
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.perDeath[0].blindKind, 'silent')
  assert.equal(b.perDeath[0].ts, null, 'no heartbeat rode - the death stays untimed')
  assert.equal(o2TriggerConsistent(b), true)
  const e = o2TriggerEdgeBook(b)
  assert.equal(e.silentUnborn, 1)
  assert.equal(e.silentUnbornTs.count, 0)
  assert.equal(e.silentUnbornTs.min, null)
  assert.equal(o2TriggerEdgeConsistent(e), true)
  const row = o2TriggerEdgeRow(e)
  assert.ok(row.includes('all 1 unborn - the fold\'s own start owns the birth'))
  assert.ok(!row.includes("the unborn lives' own when"), 'the WHEN word stays silent when no clock rode')
})

test("the silent life's own coverage seat (v0.975.4) - the born life prices the stream's own pulse", () => {
  // F5's second life is silent and born: the birth rides the first
  // death's own clock (ts 100) and the pulse position - the life spanned
  // 60s of clock and 2 heartbeats while the pass line slept
  const lines = [
    hb(0, 80),
    pass('F5', 0, 4),
    died('F5', 'drowned'), // the birth: ts 80, the pulse at 1 heartbeat
    hb(1, 110),
    hb(2, 140),
    died('F5', 'drowned') // the silent life: span 140-80=60s, pulse 2
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.perDeath[0].blindKind, null, 'the first life rode a numeric read - no blind byte')
  assert.equal(b.perDeath[0].lifeSpan, null, 'the first life is unborn')
  assert.equal(b.perDeath[0].lifeHb, null)
  assert.equal(b.perDeath[1].blindKind, 'silent', 'the second life rode no pass line at all')
  assert.equal(b.perDeath[1].lifeSpan, 60, 'the birth\'s own clock to the death\'s own clock')
  assert.equal(b.perDeath[1].lifeHb, 2, 'the stream\'s own pulse between the two lines')
  assert.equal(b.perDeath[1].lifeFleetPasses, 0, 'the fleet\'s own sight slept during the life (the one pass rode before the birth)')
  assert.equal(o2TriggerConsistent(b), true)
  const e = o2TriggerEdgeBook(b)
  assert.equal(e.blindSplit.silent, 1)
  assert.equal(e.silentSpan.born, 1)
  assert.equal(e.silentUnborn, 0)
  assert.equal(e.silentSpan.ts.count, 1)
  assert.equal(e.silentSpan.ts.min, 60)
  assert.equal(e.silentSpan.ts.max, 60)
  assert.equal(e.silentSpan.ts.sum, 60)
  assert.equal(e.silentSpan.hb.count, 1)
  assert.equal(e.silentSpan.hb.min, 2)
  assert.equal(e.silentSpan.hb.max, 2)
  assert.equal(e.silentSpan.hb.sum, 2)
  assert.equal(e.silentSpan.fp.count, 1)
  assert.equal(e.silentSpan.fp.min, 0)
  assert.equal(e.silentSpan.fp.max, 0)
  assert.equal(e.silentSpan.fp.sum, 0)
  assert.equal(o2TriggerEdgeConsistent(e), true)
  const row = o2TriggerEdgeRow(e)
  assert.ok(row.includes('1 born life(s) - the clock 60..60s avg 60.0, the pulse 2..2 heartbeat(s) avg 2.0'))
  assert.ok(row.includes('the silent gap\'s own seat split (v0.975.5): 1 priced life(s) - the whole stream slept - the server\'s own gap owns the seat'))
})

test("the silent gap's own seat split (v0.975.5) - the bot-local word and the compete word", () => {
  // F5's second life rides one fleet pass line (F6's own sight lived) -
  // the gap is bot-local; the compete word rides when both shapes
  // price in one fold
  const lines = [
    hb(0, 80),
    pass('F5', 0, 4),
    died('F5', 'drowned'), // the birth
    pass('F6', 0, 16), // the fleet's own sight rode during F5's silent life
    hb(1, 110),
    died('F5', 'drowned') // the silent life: fleet passes 1 - bot-local
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.perDeath[1].blindKind, 'silent')
  assert.equal(b.perDeath[1].lifeFleetPasses, 1, 'F6\'s pass line rode the life - the gap is bot-local')
  assert.equal(o2TriggerConsistent(b), true)
  const e = o2TriggerEdgeBook(b)
  assert.equal(e.silentSpan.fp.count, 1)
  assert.equal(e.silentSpan.fp.min, 1)
  assert.equal(e.silentSpan.fp.max, 1)
  assert.equal(e.silentSpan.fp.sum, 1)
  assert.equal(o2TriggerEdgeConsistent(e), true)
  const row = o2TriggerEdgeRow(e)
  assert.ok(row.includes("the fleet's own sight lived (min 1..max 1 pass line(s) rode) - the bot's own stream owns the gap seat"))
  // the compete word: two born silent lives, one of each shape
  const lines2 = [
    hb(0, 80),
    pass('F5', 0, 4),
    died('F5', 'drowned'), // F5's birth
    died('F5', 'drowned'), // F5's silent life: fleet passes 0 - fleet-wide
    pass('F7', 0, 4),
    died('F7', 'drowned'), // F7's birth
    pass('F6', 0, 16), // the fleet's sight rode F7's silent life
    hb(1, 110),
    died('F7', 'drowned') // F7's silent life: fleet passes 1 - bot-local
  ]
  const b2 = o2TriggerBook(lines2)
  const e2 = o2TriggerEdgeBook(b2)
  assert.equal(e2.silentSpan.fp.count, 2)
  assert.equal(e2.silentSpan.fp.min, 0)
  assert.equal(e2.silentSpan.fp.max, 1)
  assert.equal(o2TriggerEdgeConsistent(e2), true)
  const row2 = o2TriggerEdgeRow(e2)
  assert.ok(row2.includes("the gap seat is split (the bot's own stream vs the whole stream's sleep) - the two seats compete"))
})

test("the silent life's own coverage fence (v0.975.4) - the image law and the shared seat", () => {
  // the image law: the born lives plus the unborn lives must be exactly
  // the silent skin's own total - the walk's own recount
  const badImage = { deaths: 1, noCrossing: 1, blind: 1, blindSplit: { reset: 0, unknown: 0, silent: 1, legacy: 0 }, silentSpan: { born: 1, ts: { count: 1, min: 5, max: 5, sum: 5 }, hb: { count: 1, min: 2, max: 2, sum: 2 }, fp: { count: 1, min: 1, max: 1, sum: 1 } }, silentUnborn: 1, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(badImage), false, 'born 1 + unborn 1 is not the silent total 1 - the fold lies')
  // the sub-fold's own shape: a count without its bounds lies
  const badBounds = { deaths: 1, noCrossing: 1, blind: 1, blindSplit: { reset: 0, unknown: 0, silent: 1, legacy: 0 }, silentSpan: { born: 1, ts: { count: 1, min: null, max: null, sum: 5 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(badBounds), false)
  // the legacy shape (no lifeHb byte at all) prices neither - the image
  // law breaks and the fence holds the row (never forged)
  const legacySilent = { deaths: 1, noCrossing: 1, blind: 1, blindSplit: { reset: 0, unknown: 0, silent: 1, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(legacySilent), false, 'born 0 + unborn 0 is not the silent total 1 - the legacy shape prices nothing')
  assert.equal(o2TriggerEdgeRow(legacySilent), null)
  // the perDeath shared seat: the span without its own pulse count lies
  const lines = [
    hb(0, 80),
    pass('F5', 0, 4),
    died('F5', 'drowned'),
    died('F5', 'drowned')
  ]
  const b = o2TriggerBook(lines)
  assert.equal(o2TriggerConsistent(b), true)
  const spanNoHb = { ...b, perDeath: [b.perDeath[0], { ...b.perDeath[1], lifeHb: null }] }
  assert.equal(o2TriggerConsistent(spanNoHb), false, 'the span without its own birth seat lies')
  const fpNoHb = { ...b, perDeath: [b.perDeath[0], { ...b.perDeath[1], lifeHb: null }] }
  assert.equal(o2TriggerConsistent(fpNoHb), false, 'the fleet pass count without its own birth seat lies')
  const fpOverBorn = { deaths: 1, noCrossing: 1, blind: 1, blindSplit: { reset: 0, unknown: 0, silent: 1, legacy: 0 }, silentSpan: { born: 1, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 2, min: 0, max: 1, sum: 1 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(fpOverBorn), false, 'the fp fold pricing more lives than were born lies')
  // the unborn WHEN fold's own image: the count never exceeding the
  // unborn total (the image law's own walk)
  const whenOverUnborn = { deaths: 1, noCrossing: 1, blind: 1, blindSplit: { reset: 0, unknown: 0, silent: 1, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 1, min: 120, max: 120, sum: 120 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(whenOverUnborn), false, 'the WHEN fold pricing a life the unborn total does not own lies')
  // the unborn seat stays legal (the legacy book shape - never forged)
  const legacyBook = o2TriggerBook([hb(0, 80), died('F5', 'drowned')])
  const legacyRow = { ...legacyBook, perDeath: [{ bot: 'F5', ts: 80, crossed: false, window: null, lastO2: null, lastO2Gap: null, lastO2Span: null, lastPassHead: null }] }
  assert.equal(o2TriggerConsistent(legacyRow), true)
})

test("the born lives' own when word (v0.976.2) - the born gap's own clock prices", () => {
  // the unborn word's own mirror: the born silent lives price the same
  // WHEN seat - the death's own clock rides the born fold (the span
  // prices how long the life rode, the WHEN prices when the gap closed)
  const lines = [
    hb(0, 80),
    pass('F5', 0, 4),
    died('F5', 'drowned'), // the birth's own clock (ts 80) - the first life crossed
    hb(1, 110),
    died('F5', 'drowned'), // the born silent life: span 30s, pulse 1, death ts 110
    hb(2, 150),
    hb(3, 170),
    died('F5', 'drowned') // the born silent life: span 60s, pulse 2, death ts 170
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.perDeath[1].blindKind, 'silent')
  assert.equal(b.perDeath[2].blindKind, 'silent')
  assert.equal(o2TriggerConsistent(b), true)
  const e = o2TriggerEdgeBook(b)
  assert.equal(e.silentSpan.born, 2)
  assert.equal(e.silentBornTs.count, 2, 'both deaths rode the clock - the born WHEN prices')
  assert.equal(e.silentBornTs.min, 110)
  assert.equal(e.silentBornTs.max, 170)
  assert.equal(e.silentBornTs.sum, 280)
  assert.equal(o2TriggerEdgeConsistent(e), true)
  const row = o2TriggerEdgeRow(e)
  assert.ok(row.includes("the born lives' own when (v0.976.2): 2 of 2 priced the clock - the deaths rode ts 110..170 - the stream's own thirds (v0.976.11): early 0 / mid 1 / late 1 of 2 priced - no third owns the lane - the thirds' own spread (the tie's own law held)"))
})

test("the born lives' own when fence (v0.976.2) - the image law and the honest silence", () => {
  // the born WHEN fold's own image: the count never exceeding the born
  // total (the image law's own walk - the unborn word's own mirror)
  const whenOverBorn = { deaths: 1, noCrossing: 1, blind: 1, blindSplit: { reset: 0, unknown: 0, silent: 1, legacy: 0 }, silentSpan: { born: 1, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 2, min: 110, max: 170, sum: 280 }, catchable: { count: 0, min: null, max: null, sum: 0 }, raiseYield: { caught: 0, two: 0, three: 0, four: 0, five: 0, rest: { count: 0, min: null, max: null, sum: 0 } }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(whenOverBorn), false, 'the born WHEN fold pricing a life the born total does not own lies')
  // the born seat stays legal and the word rides the honest silence
  // when no clock rode (the fold prices what rode, never invents)
  const bornUntimed = { deaths: 1, noCrossing: 1, blind: 1, blindSplit: { reset: 0, unknown: 0, silent: 1, legacy: 0 }, silentSpan: { born: 1, ts: { count: 1, min: 5, max: 5, sum: 5 }, hb: { count: 1, min: 2, max: 2, sum: 2 }, fp: { count: 1, min: 1, max: 1, sum: 1 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, raiseYield: { caught: 0, two: 0, three: 0, four: 0, five: 0, rest: { count: 0, min: null, max: null, sum: 0 } }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(bornUntimed), true)
  const bornRow = o2TriggerEdgeRow(bornUntimed)
  assert.ok(bornRow.includes('1 born life(s)'))
  assert.ok(!bornRow.includes("the born lives' own when"), 'the born WHEN word stays silent when no clock rode')
})

test("the WHEN words' own lane (v0.976.11) - the cadence seat on FACE 308's own shape and the spawn's own dawn", () => {
  // FACE 308's own shape: 3 born silent lives priced the clock, the
  // deaths rode ts 721..861 of the stream's own end 881 - the late
  // third owns the lane (the cadence's own front priced by hand in the
  // reads - the lane byte becomes a field word)
  const lines1 = [
    hb(0, 100),
    pass('F3', 0, 4), died('F3', 'drowned'), // the birth's own clock (ts 100)
    hb(1, 721), died('F3', 'drowned'), // born silent #1: ts 721
    hb(2, 821), died('F3', 'drowned'), // born silent #2: ts 821
    hb(3, 861), died('F3', 'drowned'), // born silent #3: ts 861
    hb(4, 881) // the stream's own end
  ]
  const e1 = o2TriggerEdgeBook(o2TriggerBook(lines1))
  assert.equal(e1.endTs, 881)
  assert.equal(e1.silentBornTs.count, 3)
  assert.deepEqual(e1.silentBornLanes, { early: 0, mid: 0, late: 3 })
  assert.equal(o2TriggerEdgeConsistent(e1), true)
  const row1 = o2TriggerEdgeRow(e1)
  assert.ok(row1.includes("the born lives' own when (v0.976.2): 3 of 3 priced the clock - the deaths rode ts 721..861 - the stream's own thirds (v0.976.11): early 0 / mid 0 / late 3 of 3 priced - the late third owns the lane - THE STREAM'S OWN CADENCE: the deaths crowd the stream's own end - the cadence's own front"))
  // the spawn's own dawn: the deaths crowd the face's own opening -
  // the early third owns the lane (the spawn lane's own front)
  const lines2 = [
    hb(0, 5),
    pass('F4', 0, 4), died('F4', 'drowned'), // the birth's own clock (ts 5)
    hb(1, 10), died('F4', 'drowned'), // born silent #1: ts 10
    hb(2, 20), died('F4', 'drowned'), // born silent #2: ts 20
    hb(3, 90) // the stream's own end - thirdS 30, both deaths early
  ]
  const e2 = o2TriggerEdgeBook(o2TriggerBook(lines2))
  assert.equal(e2.endTs, 90)
  assert.deepEqual(e2.silentBornLanes, { early: 2, mid: 0, late: 0 })
  assert.equal(o2TriggerEdgeConsistent(e2), true)
  const row2 = o2TriggerEdgeRow(e2)
  assert.ok(row2.includes("the born lives' own when (v0.976.2): 2 of 2 priced the clock - the deaths rode ts 10..20 - the stream's own thirds (v0.976.11): early 2 / mid 0 / late 0 of 2 priced - the early third owns the lane - THE SPAWN'S OWN DAWN: the deaths crowd the face's own opening - the spawn lane's own front"))
})

test("the WHEN words' own lane fence (v0.976.11) - the image, the no-clock law, the junk clock, the missing byte", () => {
  // the base: the cadence seat's own fold (consistent true)
  const lines = [
    hb(0, 100),
    pass('F3', 0, 4), died('F3', 'drowned'),
    hb(1, 721), died('F3', 'drowned'),
    hb(2, 881)
  ]
  const base = o2TriggerEdgeBook(o2TriggerBook(lines))
  assert.equal(base.silentBornLanes.early + base.silentBornLanes.mid + base.silentBornLanes.late, base.silentBornTs.count)
  assert.equal(o2TriggerEdgeConsistent(base), true)
  // the image law: the lane fold's own counts recount the priced deaths
  const overImage = { ...base, silentBornLanes: { early: 1, mid: 0, late: 1 } }
  assert.equal(o2TriggerEdgeConsistent(overImage), false, 'the lane fold pricing 2 of a 1-death WHEN fold lies')
  // the no-clock law: no endTs prices the honest zeros
  const noClock = { ...base, endTs: null }
  assert.equal(o2TriggerEdgeConsistent(noClock), false, 'lane counts riding a clock-less fold lie')
  // the junk clock: a non-positive endTs prices the fold nothing
  const junkClock = { ...base, endTs: 0 }
  assert.equal(o2TriggerEdgeConsistent(junkClock), false, 'a zero clock prices nothing')
  const negClock = { ...base, endTs: -5 }
  assert.equal(o2TriggerEdgeConsistent(negClock), false, 'a negative clock lies')
  // the missing byte rides no row (the fence holds the shape)
  const noLanes = { ...base, silentBornLanes: undefined }
  assert.equal(o2TriggerEdgeConsistent(noLanes), false)
})

test("the raise's own first rung (v0.975.9) - the yield's own split word", () => {
  // the wire decision's own byte: the floor's three words rode
  // (6.0 / 1.0 / 7.0) and the raise-to-11's own yield was named by
  // hand in the reads - the front becomes a field byte: the first
  // rung owns depth exactly 1, the deeper lives ride the rest fold
  const lines = [
    hb(0, 100),
    pass('F3', 0, 11), died('F3', 'drowned'), // depth 1 - the first rung's own yield
    pass('F4', 0, 12), died('F4', 'drowned'), // depth 2 - the rest fold
    pass('F5', 0, 18), died('F5', 'drowned') // depth 8 - the rest fold
  ]
  const b = o2TriggerBook(lines)
  const e = o2TriggerEdgeBook(b)
  assert.equal(e.catchable.count, 3)
  assert.equal(e.raiseYield.caught, 1)
  assert.equal(e.raiseYield.rest.count, 2)
  assert.equal(e.raiseYield.rest.min, 2)
  assert.equal(e.raiseYield.rest.max, 8)
  assert.equal(e.raiseYield.rest.sum, 10)
  assert.equal(o2TriggerEdgeConsistent(e), true)
  const row = o2TriggerEdgeRow(e)
  assert.ok(row.includes("the raise's own first rung (v0.975.9): the minimal raise prices 1 of 3 life(s)"))
  assert.ok(row.includes('the rest rode depth 2..8 avg 5.0'))
  assert.ok(row.includes("THE LADDER'S OWN SPLIT"))
})

test("the raise's own first rung (v0.975.9) - the minimal raise's own seat and the ladder's own price", () => {
  // the all-depth-1 face: the minimal raise owns the whole share (the
  // wire's own word prices the raise real)
  const lines1 = [
    hb(0, 100),
    pass('F3', 0, 11), died('F3', 'drowned'),
    pass('F4', 0, 11), died('F4', 'drowned')
  ]
  const e1 = o2TriggerEdgeBook(o2TriggerBook(lines1))
  assert.equal(e1.raiseYield.caught, 2)
  assert.equal(e1.raiseYield.rest.count, 0)
  assert.equal(o2TriggerEdgeConsistent(e1), true)
  const row1 = o2TriggerEdgeRow(e1)
  assert.ok(row1.includes('the minimal raise (edge 10 -> 11) owns the whole share - 2 of 2 life(s) rode depth 1'))
  assert.ok(row1.includes("THE MINIMAL RAISE'S OWN SEAT"))
  // the all-deep face (face 296's own shape - depths 2..10): the first
  // rung prices nothing (the ladder's own price)
  const lines2 = [
    hb(0, 100),
    pass('F3', 0, 12), died('F3', 'drowned'),
    pass('F4', 0, 20), died('F4', 'drowned')
  ]
  const e2 = o2TriggerEdgeBook(o2TriggerBook(lines2))
  assert.equal(e2.raiseYield.caught, 0)
  assert.equal(e2.raiseYield.rest.count, 2)
  assert.equal(e2.raiseYield.rest.min, 2)
  assert.equal(e2.raiseYield.rest.max, 10)
  assert.equal(o2TriggerEdgeConsistent(e2), true)
  const row2 = o2TriggerEdgeRow(e2)
  assert.ok(row2.includes('the minimal raise prices nothing - the rest rode depth 2..10 avg 6.0'))
  assert.ok(row2.includes("THE LADDER'S OWN PRICE"))
})

test("the raise's own first rung fence (v0.975.9) - the image law and the rung law", () => {
  // the image law: the caught lives plus the rest's own fold must be
  // exactly the catchable total (the walk's own recount)
  const base = { deaths: 2, noCrossing: 2, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 2, min: 1, max: 8, sum: 9 }, raiseYield: { caught: 1, two: 0, three: 0, four: 0, five: 0, rest: { count: 1, min: 8, max: 8, sum: 8 } }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(base), true)
  const badImage = { ...base, raiseYield: { caught: 2, rest: { count: 1, min: 8, max: 8, sum: 8 } } }
  assert.equal(o2TriggerEdgeConsistent(badImage), false, 'caught 2 + rest 1 is not the catchable total 2 - the fold lies')
  // the rung law: the first rung owns depth exactly 1 - a rest life at
  // depth 1 is the yield's own miscount
  const badRung = { ...base, raiseYield: { caught: 0, rest: { count: 2, min: 1, max: 8, sum: 9 } } }
  assert.equal(o2TriggerEdgeConsistent(badRung), false, "a rest life at depth 1 is the first rung's own yield - the fold miscounted")
  // the empty rest rides the honest zero (the standard shape)
  const emptyRest = { ...base, deaths: 1, noCrossing: 1, catchable: { count: 1, min: 1, max: 1, sum: 1 }, raiseYield: { caught: 1, two: 0, three: 0, four: 0, five: 0, rest: { count: 0, min: null, max: null, sum: 0 } } }
  assert.equal(o2TriggerEdgeConsistent(emptyRest), true)
  // the missing fold rides no row (the fence holds the shape)
  const noFold = { ...base, raiseYield: undefined }
  assert.equal(o2TriggerEdgeConsistent(noFold), false)
  assert.equal(o2TriggerEdgeRow(noFold), null)
})

test("the ladder's own second rung (v0.976.0) - the close word and the deeper tail", () => {
  // the run108 verdict's own shape (the rest rode depth 2..2): the
  // second rung owns the whole remainder - the ladder's own close
  const lines1 = [
    hb(0, 100),
    pass('F3', 0, 11), died('F3', 'drowned'), // depth 1 - the first rung's own yield
    pass('F4', 0, 12), died('F4', 'drowned') // depth 2 - the second rung's own yield
  ]
  const e1 = o2TriggerEdgeBook(o2TriggerBook(lines1))
  assert.equal(e1.raiseYield.caught, 1)
  assert.equal(e1.raiseYield.two, 1)
  assert.equal(e1.raiseYield.rest.count, 1)
  assert.equal(o2TriggerEdgeConsistent(e1), true)
  const row1 = o2TriggerEdgeRow(e1)
  assert.ok(row1.includes('the ladder\'s own second rung (v0.976.0): the second rung (edge 10 -> 12) owns the whole remainder - 1 of 1 rest life(s) rode depth 2'))
  assert.ok(row1.includes("THE LADDER'S OWN CLOSE: two rungs price every miss"))
  // the deeper tail: the remainder rides depth >= 3 - the second
  // rung prices nothing (the deeper rungs' own word)
  const lines2 = [
    hb(0, 100),
    pass('F3', 0, 11), died('F3', 'drowned'), // depth 1
    pass('F4', 0, 13), died('F4', 'drowned'), // depth 3
    pass('F5', 0, 14), died('F5', 'drowned') // depth 4
  ]
  const e2 = o2TriggerEdgeBook(o2TriggerBook(lines2))
  assert.equal(e2.raiseYield.two, 0)
  assert.equal(e2.raiseYield.rest.count, 2)
  assert.equal(e2.raiseYield.rest.min, 3)
  assert.equal(e2.raiseYield.rest.max, 4)
  assert.equal(o2TriggerEdgeConsistent(e2), true)
  const row2 = o2TriggerEdgeRow(e2)
  assert.ok(row2.includes('the second rung prices nothing - the deeper rungs\' own word (the remainder rode depth 3..4)'))
  // the mixed face: the second rung owns part of the remainder (the
  // deeper rungs' own tail)
  const lines3 = [
    hb(0, 100),
    pass('F3', 0, 12), died('F3', 'drowned'), // depth 2
    pass('F4', 0, 12), died('F4', 'drowned'), // depth 2
    pass('F5', 0, 15), died('F5', 'drowned') // depth 5
  ]
  const e3 = o2TriggerEdgeBook(o2TriggerBook(lines3))
  assert.equal(e3.raiseYield.caught, 0)
  assert.equal(e3.raiseYield.two, 2)
  assert.equal(e3.raiseYield.rest.count, 3)
  assert.equal(o2TriggerEdgeConsistent(e3), true)
  const row3 = o2TriggerEdgeRow(e3)
  assert.ok(row3.includes('the second rung owns 2 of 3 rest life(s) - the deeper rungs\' own tail (the remainder rode depth 2..5)'))
})

test("the ladder's own second rung fence (v0.976.0) - the image, the coherence, the close", () => {
  // the image law: the second rung never owns more than the remainder
  const base = { deaths: 3, noCrossing: 3, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 3, min: 1, max: 5, sum: 8 }, raiseYield: { caught: 1, two: 1, three: 0, four: 0, five: 0, rest: { count: 2, min: 2, max: 5, sum: 7 } }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(base), true)
  const overImage = { ...base, raiseYield: { ...base.raiseYield, two: 3 } }
  assert.equal(o2TriggerEdgeConsistent(overImage), false, 'the second rung owning 3 of a 2-life remainder lies')
  // the coherence law: a second-rung life pins the remainder's own floor
  const incoherent = { ...base, raiseYield: { ...base.raiseYield, rest: { count: 2, min: 3, max: 5, sum: 8 } } }
  assert.equal(o2TriggerEdgeConsistent(incoherent), false, 'a second-rung life with the remainder floor at 3 miscounts the yield')
  // the close law: the whole remainder at the second rung pins the ceiling
  const badClose = { ...base, raiseYield: { caught: 0, two: 2, rest: { count: 2, min: 2, max: 5, sum: 7 } } }
  assert.equal(o2TriggerEdgeConsistent(badClose), false, 'the whole remainder owned at depth 2 with the ceiling at 5 lies')
  // the missing byte rides no row (the fence holds the shape)
  const noTwo = { ...base, raiseYield: { ...base.raiseYield, two: undefined } }
  assert.equal(o2TriggerEdgeConsistent(noTwo), false)
})

test("the ladder's own third rung (v0.976.5) - the close word and the beside-the-rung share", () => {
  // the FACE 304 verdict's own spread grew one rung deeper: the third
  // rung owns the whole remainder at depth 3 - the ladder's own close
  const lines1 = [
    hb(0, 100),
    pass('F3', 0, 13), died('F3', 'drowned'), // depth 3
    pass('F4', 0, 13), died('F4', 'drowned') // depth 3
  ]
  const e1 = o2TriggerEdgeBook(o2TriggerBook(lines1))
  assert.equal(e1.raiseYield.caught, 0)
  assert.equal(e1.raiseYield.two, 0)
  assert.equal(e1.raiseYield.three, 2)
  assert.equal(e1.raiseYield.rest.count, 2)
  assert.equal(e1.raiseYield.rest.min, 3)
  assert.equal(e1.raiseYield.rest.max, 3)
  assert.equal(e1.raiseYield.rest.sum, 6)
  assert.equal(o2TriggerEdgeConsistent(e1), true)
  const row1 = o2TriggerEdgeRow(e1)
  assert.ok(row1.includes('the ladder\'s own third rung (v0.976.5): the third rung (edge 10 -> 13) owns the whole remainder - 2 of 2 rest life(s) rode depth 3'))
  assert.ok(row1.includes("THE LADDER'S OWN CLOSE: three rungs price every miss"))
  // the beside-the-rung share: the third rung owns part of the
  // remainder - the rest rode beside the rung (the spread rides)
  const lines2 = [
    hb(0, 100),
    pass('F3', 0, 12), died('F3', 'drowned'), // depth 2
    pass('F4', 0, 13), died('F4', 'drowned'), // depth 3
    pass('F5', 0, 13), died('F5', 'drowned') // depth 3
  ]
  const e2 = o2TriggerEdgeBook(o2TriggerBook(lines2))
  assert.equal(e2.raiseYield.two, 1)
  assert.equal(e2.raiseYield.three, 2)
  assert.equal(e2.raiseYield.rest.count, 3)
  assert.equal(o2TriggerEdgeConsistent(e2), true)
  const row2 = o2TriggerEdgeRow(e2)
  assert.ok(row2.includes('the third rung (edge 10 -> 13) owns 2 of 3 rest life(s) rode depth 3 - 1 rest life(s) rode beside the rung (the remainder rode depth 2..3)'))
  // the honest silence: no third-rung life rode - the word prices
  // nothing (the fold prices what rode, never invents)
  const lines3 = [
    hb(0, 100),
    pass('F3', 0, 12), died('F3', 'drowned'), // depth 2
    pass('F4', 0, 14), died('F4', 'drowned') // depth 4
  ]
  const e3 = o2TriggerEdgeBook(o2TriggerBook(lines3))
  assert.equal(e3.raiseYield.three, 0)
  assert.equal(o2TriggerEdgeConsistent(e3), true)
  const row3 = o2TriggerEdgeRow(e3)
  assert.ok(!row3.includes('third rung'))
})

test("the ladder's own third rung fence (v0.976.5) - the image, the joint, the coherence, the close", () => {
  // the image law: the third rung never owns more than the remainder
  const base = { deaths: 3, noCrossing: 3, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 3, min: 1, max: 5, sum: 8 }, raiseYield: { caught: 1, two: 1, three: 1, four: 0, five: 0, rest: { count: 2, min: 2, max: 5, sum: 7 } }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(base), true)
  const overImage = { ...base, raiseYield: { ...base.raiseYield, three: 3 } }
  assert.equal(o2TriggerEdgeConsistent(overImage), false, 'the third rung owning 3 of a 2-life remainder lies')
  // the joint law: the two rungs never own more than the remainder together
  const overJoint = { ...base, raiseYield: { ...base.raiseYield, three: 2 } }
  assert.equal(o2TriggerEdgeConsistent(overJoint), false, 'two 1 + three 2 own 3 of a 2-life remainder - the rungs miscounted')
  // the coherence law: a third-rung life pins the remainder's own ceiling at 3+
  const incoherent = { ...base, raiseYield: { ...base.raiseYield, rest: { count: 2, min: 2, max: 2, sum: 4 } } }
  assert.equal(o2TriggerEdgeConsistent(incoherent), false, 'a third-rung life with the remainder ceiling at 2 miscounts the yield')
  // the close law: the whole remainder at the third rung pins the ceiling
  const badClose = { ...base, raiseYield: { caught: 0, two: 0, three: 2, rest: { count: 2, min: 2, max: 5, sum: 7 } } }
  assert.equal(o2TriggerEdgeConsistent(badClose), false, 'the whole remainder owned at depth 3 with the ceiling at 5 lies')
  // the missing byte rides no row (the fence holds the shape)
  const noThree = { ...base, raiseYield: { ...base.raiseYield, three: undefined } }
  assert.equal(o2TriggerEdgeConsistent(noThree), false)
})

test("the ladder's own fourth rung (v0.976.7) - the close word and the beside-the-rung share", () => {
  // the FACE 306 read's own tail grew one rung deeper: the fourth rung
  // owns the whole remainder at depth 4 - the ladder's own close
  const lines1 = [
    hb(0, 100),
    pass('F3', 0, 14), died('F3', 'drowned'), // depth 4
    pass('F4', 0, 14), died('F4', 'drowned') // depth 4
  ]
  const e1 = o2TriggerEdgeBook(o2TriggerBook(lines1))
  assert.equal(e1.raiseYield.caught, 0)
  assert.equal(e1.raiseYield.two, 0)
  assert.equal(e1.raiseYield.three, 0)
  assert.equal(e1.raiseYield.four, 2)
  assert.equal(e1.raiseYield.rest.count, 2)
  assert.equal(e1.raiseYield.rest.min, 4)
  assert.equal(e1.raiseYield.rest.max, 4)
  assert.equal(e1.raiseYield.rest.sum, 8)
  assert.equal(o2TriggerEdgeConsistent(e1), true)
  const row1 = o2TriggerEdgeRow(e1)
  assert.ok(row1.includes('the ladder\'s own fourth rung (v0.976.7): the fourth rung (edge 10 -> 14) owns the whole remainder - 2 of 2 rest life(s) rode depth 4'))
  assert.ok(row1.includes("THE LADDER'S OWN CLOSE: four rungs price every miss"))
  // the beside-the-rung share: the fourth rung owns part of the
  // remainder - the rest rode beside the rung (the spread rides)
  const lines2 = [
    hb(0, 100),
    pass('F3', 0, 12), died('F3', 'drowned'), // depth 2
    pass('F4', 0, 13), died('F4', 'drowned'), // depth 3
    pass('F5', 0, 14), died('F5', 'drowned'), // depth 4
    pass('F6', 0, 14), died('F6', 'drowned') // depth 4
  ]
  const e2 = o2TriggerEdgeBook(o2TriggerBook(lines2))
  assert.equal(e2.raiseYield.two, 1)
  assert.equal(e2.raiseYield.three, 1)
  assert.equal(e2.raiseYield.four, 2)
  assert.equal(e2.raiseYield.rest.count, 4)
  assert.equal(o2TriggerEdgeConsistent(e2), true)
  const row2 = o2TriggerEdgeRow(e2)
  assert.ok(row2.includes('the fourth rung (edge 10 -> 14) owns 2 of 4 rest life(s) rode depth 4 - 2 rest life(s) rode beside the rung (the remainder rode depth 2..4)'))
  // the honest silence: no fourth-rung life rode - the word prices
  // nothing (the fold prices what rode, never invents); the third
  // rung's own word still rides its own life
  const lines3 = [
    hb(0, 100),
    pass('F3', 0, 13), died('F3', 'drowned'), // depth 3
    pass('F4', 0, 15), died('F4', 'drowned') // depth 5
  ]
  const e3 = o2TriggerEdgeBook(o2TriggerBook(lines3))
  assert.equal(e3.raiseYield.four, 0)
  assert.equal(e3.raiseYield.three, 1)
  assert.equal(o2TriggerEdgeConsistent(e3), true)
  const row3 = o2TriggerEdgeRow(e3)
  assert.ok(!row3.includes('fourth rung'))
  assert.ok(row3.includes('third rung'))
})

test("the ladder's own fourth rung fence (v0.976.7) - the image, the full joint, the coherence, the close", () => {
  // the image law: the fourth rung never owns more than the remainder
  const base = { deaths: 3, noCrossing: 3, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 3, min: 1, max: 4, sum: 6 }, raiseYield: { caught: 1, two: 1, three: 0, four: 1, five: 0, rest: { count: 2, min: 2, max: 4, sum: 6 } }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(base), true)
  const overImage = { ...base, raiseYield: { ...base.raiseYield, four: 3 } }
  assert.equal(o2TriggerEdgeConsistent(overImage), false, 'the fourth rung owning 3 of a 2-life remainder lies')
  // the rungs' own FULL joint law: two + three + four never own more
  // than the remainder together
  const overJoint = { ...base, raiseYield: { ...base.raiseYield, three: 1 } }
  assert.equal(o2TriggerEdgeConsistent(overJoint), false, 'two 1 + three 1 + four 1 own 3 of a 2-life remainder - the rungs miscounted')
  // the coherence law: a fourth-rung life pins the remainder's own ceiling at 4+
  const incoherent = { ...base, raiseYield: { ...base.raiseYield, rest: { count: 2, min: 2, max: 3, sum: 5 } } }
  assert.equal(o2TriggerEdgeConsistent(incoherent), false, 'a fourth-rung life with the remainder ceiling at 3 miscounts the yield')
  // the close law: the whole remainder at the fourth rung pins the ceiling
  const badClose = { ...base, raiseYield: { caught: 0, two: 0, three: 0, four: 2, five: 0, rest: { count: 2, min: 2, max: 5, sum: 7 } } }
  assert.equal(o2TriggerEdgeConsistent(badClose), false, 'the whole remainder owned at depth 4 with the ceiling at 5 lies')
  // the missing byte rides no row (the fence holds the shape)
  const noFour = { ...base, raiseYield: { ...base.raiseYield, four: undefined } }
  assert.equal(o2TriggerEdgeConsistent(noFour), false)
})

test("the ladder's own fifth rung (v0.976.8) - the close word and the beside-the-rung share", () => {
  // the FACE 304 read's own spread's top grew one rung deeper: the
  // fifth rung owns the whole remainder at depth 5 - the ladder's own
  // close (the depth-5 tail's own top rode unnamed - the fourth rung's
  // own honest silence named it)
  const lines1 = [
    hb(0, 100),
    pass('F3', 0, 15), died('F3', 'drowned'), // depth 5
    pass('F4', 0, 15), died('F4', 'drowned') // depth 5
  ]
  const e1 = o2TriggerEdgeBook(o2TriggerBook(lines1))
  assert.equal(e1.raiseYield.caught, 0)
  assert.equal(e1.raiseYield.two, 0)
  assert.equal(e1.raiseYield.three, 0)
  assert.equal(e1.raiseYield.four, 0)
  assert.equal(e1.raiseYield.five, 2)
  assert.equal(e1.raiseYield.rest.count, 2)
  assert.equal(e1.raiseYield.rest.min, 5)
  assert.equal(e1.raiseYield.rest.max, 5)
  assert.equal(e1.raiseYield.rest.sum, 10)
  assert.equal(o2TriggerEdgeConsistent(e1), true)
  const row1 = o2TriggerEdgeRow(e1)
  assert.ok(row1.includes('the ladder\'s own fifth rung (v0.976.8): the fifth rung (edge 10 -> 15) owns the whole remainder - 2 of 2 rest life(s) rode depth 5'))
  assert.ok(row1.includes("THE LADDER'S OWN CLOSE: five rungs price every miss"))
  // the beside-the-rung share: the fifth rung owns part of the
  // remainder - the rest rode beside the rung (the spread rides)
  const lines2 = [
    hb(0, 100),
    pass('F3', 0, 12), died('F3', 'drowned'), // depth 2
    pass('F4', 0, 14), died('F4', 'drowned'), // depth 4
    pass('F5', 0, 15), died('F5', 'drowned'), // depth 5
    pass('F6', 0, 15), died('F6', 'drowned') // depth 5
  ]
  const e2 = o2TriggerEdgeBook(o2TriggerBook(lines2))
  assert.equal(e2.raiseYield.two, 1)
  assert.equal(e2.raiseYield.four, 1)
  assert.equal(e2.raiseYield.five, 2)
  assert.equal(e2.raiseYield.rest.count, 4)
  assert.equal(o2TriggerEdgeConsistent(e2), true)
  const row2 = o2TriggerEdgeRow(e2)
  assert.ok(row2.includes('the fifth rung (edge 10 -> 15) owns 2 of 4 rest life(s) rode depth 5 - 2 rest life(s) rode beside the rung (the remainder rode depth 2..5)'))
  // the honest silence: no fifth-rung life rode - the word prices
  // nothing (the fold prices what rode, never invents); the fourth
  // rung's own word still rides its own life
  const lines3 = [
    hb(0, 100),
    pass('F3', 0, 13), died('F3', 'drowned'), // depth 3
    pass('F4', 0, 14), died('F4', 'drowned') // depth 4
  ]
  const e3 = o2TriggerEdgeBook(o2TriggerBook(lines3))
  assert.equal(e3.raiseYield.five, 0)
  assert.equal(e3.raiseYield.four, 1)
  assert.equal(o2TriggerEdgeConsistent(e3), true)
  const row3 = o2TriggerEdgeRow(e3)
  assert.ok(!row3.includes('fifth rung'))
  assert.ok(row3.includes('fourth rung'))
})

test("the ladder's own fifth rung fence (v0.976.8) - the image, the full joint, the coherence, the close", () => {
  // the image law: the fifth rung never owns more than the remainder
  const base = { deaths: 3, noCrossing: 3, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, silentSpan: { born: 0, ts: { count: 0, min: null, max: null, sum: 0 }, hb: { count: 0, min: null, max: null, sum: 0 }, fp: { count: 0, min: null, max: null, sum: 0 } }, silentUnborn: 0, silentUnbornTs: { count: 0, min: null, max: null, sum: 0 }, silentBornTs: { count: 0, min: null, max: null, sum: 0 }, catchable: { count: 3, min: 1, max: 5, sum: 7 }, raiseYield: { caught: 1, two: 1, three: 0, four: 0, five: 1, rest: { count: 2, min: 2, max: 5, sum: 7 } }, endTs: null, silentBornLanes: { early: 0, mid: 0, late: 0 }, silentUnbornLanes: { early: 0, mid: 0, late: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(base), true)
  const overImage = { ...base, raiseYield: { ...base.raiseYield, five: 3 } }
  assert.equal(o2TriggerEdgeConsistent(overImage), false, 'the fifth rung owning 3 of a 2-life remainder lies')
  // the rungs' own FULL joint law: two + three + four + five never own
  // more than the remainder together
  const overJoint = { ...base, raiseYield: { ...base.raiseYield, three: 1 } }
  assert.equal(o2TriggerEdgeConsistent(overJoint), false, 'two 1 + three 1 + five 1 own 3 of a 2-life remainder - the rungs miscounted')
  // the coherence law: a fifth-rung life pins the remainder's own ceiling at 5+
  const incoherent = { ...base, raiseYield: { ...base.raiseYield, rest: { count: 2, min: 2, max: 4, sum: 6 } } }
  assert.equal(o2TriggerEdgeConsistent(incoherent), false, 'a fifth-rung life with the remainder ceiling at 4 miscounts the yield')
  // the close law: the whole remainder at the fifth rung pins the ceiling
  const badClose = { ...base, raiseYield: { caught: 0, two: 0, three: 0, four: 0, five: 2, rest: { count: 2, min: 2, max: 6, sum: 8 } } }
  assert.equal(o2TriggerEdgeConsistent(badClose), false, 'the whole remainder owned at depth 5 with the ceiling at 6 lies')
  // the missing byte rides no row (the fence holds the shape)
  const noFive = { ...base, raiseYield: { ...base.raiseYield, five: undefined } }
  assert.equal(o2TriggerEdgeConsistent(noFive), false)
})

test('the blind skin judges nothing - the crossing state untouched (the v0.975.2 observer law)', () => {
  // a reset skin between numeric reads never crosses, never clears,
  // never re-arms - the crossing law stands byte for byte
  const lines = [
    hb(0, 100),
    pass('F3', 0, 14), // above the edge - no crossing
    pass('F3', 1, 'reset(-1)'), // the sensor died - judges nothing
    pass('F3', 2, 12), // still above the edge - still no crossing
    died('F3', 'drowned')
  ]
  const b = o2TriggerBook(lines)
  assert.equal(b.noCrossing, 1)
  assert.equal(b.perDeath[0].minO2, 12) // the floor never rode the blind skin
  assert.equal(b.perDeath[0].blindKind, null) // the numeric life's blind byte is moot
  assert.equal(o2TriggerConsistent(b), true)
})

test('junk-safe - the honest nulls', () => {
  assert.equal(o2TriggerEdgeBook(null), null)
  assert.equal(o2TriggerEdgeBook(undefined), null)
  assert.equal(o2TriggerEdgeBook({ deaths: 0, perDeath: [] }), null)
  assert.equal(o2TriggerEdgeBook('junk'), null)
  assert.equal(o2TriggerEdgeConsistent(null), false)
  assert.equal(o2TriggerEdgeRow(null), null)
})
