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
  const lie = { deaths: 1, noCrossing: 1, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, lies: 1 }
  assert.equal(o2TriggerEdgeConsistent(lie), false)
  assert.equal(o2TriggerEdgeRow(lie), null)
  // the seats must sum to the fold's own noCrossing
  const split = { deaths: 2, noCrossing: 2, blind: 0, blindSplit: { reset: 0, unknown: 0, silent: 0, legacy: 0 }, catchable: { count: 1, min: 3, max: 3, sum: 3 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(split), false)
  // the blind split's own image: the four skins sum to the blind total
  const badSplit = { deaths: 2, noCrossing: 2, blind: 2, blindSplit: { reset: 1, unknown: 0, silent: 0, legacy: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, lies: 0 }
  assert.equal(o2TriggerEdgeConsistent(badSplit), false)
  // all-blind (reset skins): the row rides the sensor's own death word
  const blind = { deaths: 2, noCrossing: 2, blind: 2, blindSplit: { reset: 2, unknown: 0, silent: 0, legacy: 0 }, catchable: { count: 0, min: null, max: null, sum: 0 }, lies: 0 }
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
