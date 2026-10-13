// (v0.974.19) THE RENT SHADOW's own pins - the repeat rent's TTL shadow.
import assert from 'node:assert/strict'
import { rentShadowEvent, rentShadowCensus, rentShadowRow } from '../../src/lib/rentshadow.mjs'

// --- the event grammar's own faces ---
{
  const w = rentShadowEvent('F10 [F10] no-path ledger: chest at [-143,81,411] cached for the fleet (1 live, ttl 15s)')
  assert.equal(w.kind, 'write'); assert.equal(w.cell, '-143,81,411'); assert.equal(w.ttlS, 15); assert.equal(w.timeout, false)
  const wt = rentShadowEvent('F5 [F5] no-path ledger: chest at [-103,81,421] cached for the fleet (2 live, ttl 15s, timeout verdict)')
  assert.equal(wt.timeout, true)
  const h = rentShadowEvent('F10 [F10] walk-intent: chest at [-143,81,411] held for the fleet (2 live, ttl 90s)')
  assert.equal(h.kind, 'hold'); assert.equal(h.ttlS, 90)
  const s = rentShadowEvent('F14 [F14] chest skip (no path cached 5s ago at [-143,81,411])')
  assert.equal(s.kind, 'skip'); assert.equal(s.ageS, 5); assert.equal(s.cell, '-143,81,411')
  const r = rentShadowEvent('F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)')
  assert.equal(r.kind, 'rent'); assert.equal(r.cell, '-143,81,411')
  assert.equal(rentShadowEvent('F6 [F6] vein sweep: the drop walk to [-122,57,396] failed - No path to the goal! (dy 3.1)'), null)
  assert.equal(rentShadowEvent(undefined), null); assert.equal(rentShadowEvent(42), null)
}

// --- the blind class: the rent before the ledger ever spoke ---
{
  const c = rentShadowCensus([
    'F10 [F10] hop: chest at [-100,81,400] d=12 zero: chest unreachable (No path to the goal!)',
    'F10 [F10] no-path ledger: chest at [-100,81,400] cached for the fleet (1 live, ttl 15s)'
  ])
  assert.equal(c.totals.blind, 1); assert.equal(c.totals.rents, 1)
  assert.equal(c.verdict, 'blind')
  assert.match(c.wireQuestion, /write seat/)
}

// --- the shadow class: the skip proved liveness, the rent rode it ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F14 [F14] chest skip (no path cached 5s ago at [-143,81,411])',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)',
    'F15 [F15] no-path ledger: chest at [-143,81,411] cached for the fleet (4 live, ttl 15s)'
  ])
  assert.equal(c.totals.shadow, 1); assert.equal(c.verdict, 'shadow')
  assert.match(c.wireQuestion, /consult byte/)
  // the skip's own age byte rides the cell's book
  assert.equal(c.cells.get('-143,81,411').lastSkipAgeS, 5)
  assert.equal(c.cells.get('-143,81,411').timeoutWrites, 1)
}

// --- the expired class: the window closed, no skip ever proved liveness ---
{
  const c = rentShadowCensus([
    'F10 [F10] no-path ledger: chest at [-122,81,395] cached for the fleet (1 live, ttl 15s)',
    'F16 [F16] hop: chest at [-122,81,395] d=19 zero: chest unreachable (No path to the goal!)'
  ])
  // write consumed its own proof? no - the write IS t=0, the FIRST rent after a
  // write with no intervening expiry marker rides the shadow candidate; the
  // SECOND rent (no fresh proof) rides expired
  assert.equal(c.totals.shadow, 1)
  const c2 = rentShadowCensus([
    'F10 [F10] no-path ledger: chest at [-122,81,395] cached for the fleet (1 live, ttl 15s)',
    'F16 [F16] hop: chest at [-122,81,395] d=19 zero: chest unreachable (No path to the goal!)',
    'F6 [F6] hop: chest at [-122,81,395] d=19 zero: chest unreachable (Took to long to decide path to goal!)'
  ])
  assert.equal(c2.totals.shadow, 1); assert.equal(c2.totals.expired, 1)
  assert.equal(c2.verdict, 'tie') // 1 vs 1 - the unanimity law refused the seat
  assert.match(c2.wireQuestion, /tie owns nothing/)
}

// --- the tie law's own byte (the 286/287 class re-spoken) ---
{
  const c = rentShadowCensus([
    'F1 [F1] hop: chest at [1,81,1] d=9 zero: chest unreachable (No path to the goal!)',
    'F2 [F2] no-path ledger: chest at [2,81,2] cached for the fleet (1 live, ttl 15s)',
    'F3 [F3] chest skip (no path cached 3s ago at [2,81,2])',
    'F4 [F4] hop: chest at [2,81,2] d=9 zero: chest unreachable (No path to the goal!)'
  ])
  assert.equal(c.totals.blind, 1); assert.equal(c.totals.shadow, 1)
  assert.equal(c.verdict, 'tie')
}

// --- the silent law: no rents, no verdict ---
{
  const c = rentShadowCensus(['F1 [F1] chest skip (no path cached 2s ago at [5,81,5])'])
  assert.equal(c.totals.rents, 0); assert.equal(c.verdict, 'silent'); assert.equal(rentShadowRow(c), null)
  const junk = rentShadowCensus(undefined)
  assert.equal(junk.verdict, 'silent')
}

// --- the row's own grammar (the decompose seat's byte) ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F14 [F14] chest skip (no path cached 5s ago at [-143,81,411])',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)',
    'F7 [F7] hop: chest at [-143,81,411] d=17 zero: chest unreachable (Took to long to decide path to goal!)'
  ])
  const row = rentShadowRow(c)
  assert.match(row, /rent shadow's own book \(v0\.974\.19\): rents 2 on 1 cell\(s\)/)
  assert.match(row, /shadow 1 \(50\.0%\)/)
  assert.match(row, /expired 1 \(50\.0%\)/)
  assert.match(row, /THE TIE'S OWN SILENCE/)
}

// --- the FACE 288-shaped synthetic: the real cell's own byte stream ---
{
  const c = rentShadowCensus([
    'F10 [F10] walk-intent: chest at [-143,81,411] held for the fleet (2 live, ttl 90s)',
    'F10 [F10] no-path ledger: chest at [-143,81,411] cached for the fleet (1 live, ttl 15s)',
    'F10 [F10] hop: chest at [-143,81,411] d=17 zero: chest unreachable (No path to the goal!)',
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F5 [F5] hop: chest at [-143,81,411] d=17 zero: chest unreachable (Took to long to decide path to goal!)',
    'F14 [F14] chest skip (no path cached 5s ago at [-143,81,411])',
    'F15 [F15] chest skip (no path cached 8s ago at [-143,81,411])',
    'F15 [F15] walk-intent: chest at [-143,81,411] held for the fleet (4 live, ttl 90s)',
    'F15 [F15] no-path ledger: chest at [-143,81,411] cached for the fleet (4 live, ttl 15s)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)',
    'F15 [F15] no-path ledger: chest at [-143,81,411] cached for the fleet (4 live, ttl 15s)',
    'F15 [F15] hop: chest at [-143,81,411] d=20 zero: chest unreachable (No path to the goal!)',
    'F7 [F7] no-path ledger: chest at [-143,81,411] cached for the fleet (5 live, ttl 15s, timeout verdict)',
    'F7 [F7] hop: chest at [-143,81,411] d=17 zero: chest unreachable (Took to long to decide path to goal!)'
  ])
  const cell = c.cells.get('-143,81,411')
  assert.equal(cell.writes, 5); assert.equal(cell.holds, 2); assert.equal(cell.skips, 2); assert.equal(cell.rents, 5)
  assert.equal(cell.timeoutWrites, 2)
  // the field's own read: the first rent rode the write's own t=0 proof (shadow),
  // the rests rode consumed windows (expired)
  assert.equal(c.totals.shadow + c.totals.expired, 5)
  const row = rentShadowRow(c)
  assert.match(row, /rents 5 on 1 cell\(s\)/)
}

// --- (v0.974.21) THE RENT'S OWN AGE BYTE - the wire's own pins ---

// --- the byte's own event grammar ---
{
  const rb = rentShadowEvent('F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!) (ledger live 3s ago)')
  assert.equal(rb.kind, 'rent'); assert.equal(rb.cell, '-143,81,411'); assert.equal(rb.ledgerAgeS, 3)
  const legacy = rentShadowEvent('F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)')
  assert.equal(legacy.ledgerAgeS, null) // the legacy line byte-true
  // the junk byte forms read the honest null - the rent still prices
  assert.equal(rentShadowEvent('F5 [F5] hop: chest at [1,81,1] d=9 zero: chest unreachable (No path) (ledger live ago)').ledgerAgeS, null)
  assert.equal(rentShadowEvent('F5 [F5] hop: chest at [1,81,1] d=9 zero: chest unreachable (No path) (ledger live -3s ago)').ledgerAgeS, null)
  assert.equal(rentShadowEvent('F5 [F5] hop: chest at [1,81,1] d=9 zero: chest unreachable (No path) (ledger live 3s ago').ledgerAgeS, null)
  // the byte rides nowhere else: a skip line with a byte-like tail stays a skip
  assert.equal(rentShadowEvent('F14 [F14] chest skip (no path cached 5s ago at [1,81,1]) (ledger live 2s ago)').kind, 'skip')
}

// --- rode-live: the ledger SPOKE at failure moment and the walk rode anyway ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!) (ledger live 3s ago)'
  ])
  assert.equal(c.totals.shadow, 1); assert.equal(c.totals.shadowLive, 1); assert.equal(c.totals.shadowBlind, 0)
  assert.equal(c.verdict, 'shadow')
  const row = rentShadowRow(c)
  assert.match(row, /the split: rode-live 1 \/ rode-blind 0/)
  assert.match(row, /consult byte rides the rent line now/)
}

// --- rode-blind: the legacy shape (no byte) - the two-face record byte-true ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)'
  ])
  assert.equal(c.totals.shadow, 1); assert.equal(c.totals.shadowLive, 0); assert.equal(c.totals.shadowBlind, 1)
  assert.equal(c.verdict, 'shadow')
  const row = rentShadowRow(c)
  assert.ok(!row.includes(' - the split: rode-live'), 'a byte-less face reads byte-identical: no split clause')
  assert.match(row, /consult byte rides the rent line now/)
}

// --- the mixed split: one of each seat (each proof its own write) ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)',
    'F7 [F7] no-path ledger: chest at [-143,81,411] cached for the fleet (3 live, ttl 15s)',
    'F16 [F16] hop: chest at [-143,81,411] d=17 zero: chest unreachable (No path to the goal!) (ledger live 8s ago)'
  ])
  assert.equal(c.totals.shadow, 2); assert.equal(c.totals.shadowLive, 1); assert.equal(c.totals.shadowBlind, 1)
  assert.match(rentShadowRow(c), /the split: rode-live 1 \/ rode-blind 1/)
}

// --- the byte on a NON-shadow rent moves no split seat ---
{
  const c = rentShadowCensus([
    'F10 [F10] hop: chest at [-100,81,400] d=12 zero: chest unreachable (No path to the goal!) (ledger live 4s ago)',
    'F10 [F10] no-path ledger: chest at [-100,81,400] cached for the fleet (1 live, ttl 15s)'
  ])
  assert.equal(c.totals.blind, 1); assert.equal(c.totals.shadowLive, 0); assert.equal(c.totals.shadowBlind, 0)
  assert.equal(c.verdict, 'blind')
  assert.ok(!rentShadowRow(c).includes(' - the split: rode-live'))
}

// --- the 288-shaped synthetic rides the split honestly (every rent rode its
// --- own write's t=0 proof: 5 shadow, all rode-blind on the legacy bytes) ---
{
  const c = rentShadowCensus([
    'F10 [F10] walk-intent: chest at [-143,81,411] held for the fleet (2 live, ttl 90s)',
    'F10 [F10] no-path ledger: chest at [-143,81,411] cached for the fleet (1 live, ttl 15s)',
    'F10 [F10] hop: chest at [-143,81,411] d=17 zero: chest unreachable (No path to the goal!)',
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F5 [F5] hop: chest at [-143,81,411] d=17 zero: chest unreachable (Took to long to decide path to goal!)',
    'F14 [F14] chest skip (no path cached 5s ago at [-143,81,411])',
    'F15 [F15] chest skip (no path cached 8s ago at [-143,81,411])',
    'F15 [F15] walk-intent: chest at [-143,81,411] held for the fleet (4 live, ttl 90s)',
    'F15 [F15] no-path ledger: chest at [-143,81,411] cached for the fleet (4 live, ttl 15s)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)',
    'F15 [F15] no-path ledger: chest at [-143,81,411] cached for the fleet (4 live, ttl 15s)',
    'F15 [F15] hop: chest at [-143,81,411] d=20 zero: chest unreachable (No path to the goal!)',
    'F7 [F7] no-path ledger: chest at [-143,81,411] cached for the fleet (5 live, ttl 15s, timeout verdict)',
    'F7 [F7] hop: chest at [-143,81,411] d=17 zero: chest unreachable (Took to long to decide path to goal!)'
  ])
  assert.equal(c.totals.shadow, 5); assert.equal(c.totals.shadowBlind, 5); assert.equal(c.totals.shadowLive, 0)
  assert.equal(c.totals.shadowLive + c.totals.shadowBlind, c.totals.shadow, 'the split sums to the shadow class')
}

console.log('rentshadow: all pins green')

// --- (v0.974.22) THE SHADOW'S OWN FEEDER - which machine's proof the rent rode ---

// --- hold-fed: the walk-intent hold's flight window owns the shadow ---
{
  const c = rentShadowCensus([
    'F10 [F10] walk-intent: chest at [-143,81,411] held for the fleet (2 live, ttl 90s)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)'
  ])
  assert.equal(c.totals.shadow, 1); assert.equal(c.totals.shadowByWrite, 0); assert.equal(c.totals.shadowByHold, 1)
  const row = rentShadowRow(c)
  assert.match(row, /the feeder: write-fed 0 \/ hold-fed 1/)
}

// --- write-fed: the byte-identical law (no clause rides) ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)'
  ])
  assert.equal(c.totals.shadow, 1); assert.equal(c.totals.shadowByWrite, 1); assert.equal(c.totals.shadowByHold, 0)
  const row = rentShadowRow(c)
  assert.ok(!row.includes(' - the feeder:'), 'a pure write-fed face reads byte-identical: no feeder clause')
}

// --- mixed: both feeders' own clause, the sums' own law ---
{
  const c = rentShadowCensus([
    'F10 [F10] walk-intent: chest at [-143,81,411] held for the fleet (2 live, ttl 90s)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)',
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F7 [F7] hop: chest at [-143,81,411] d=17 zero: chest unreachable (Took to long to decide path to goal!)'
  ])
  assert.equal(c.totals.shadow, 2); assert.equal(c.totals.shadowByWrite, 1); assert.equal(c.totals.shadowByHold, 1)
  assert.equal(c.totals.shadowByWrite + c.totals.shadowByHold, c.totals.shadow)
  assert.match(rentShadowRow(c), /the feeder: write-fed 1 \/ hold-fed 1/)
}

// --- the freshest proof's own law: a write after a hold re-feeds the seat ---
{
  const c = rentShadowCensus([
    'F10 [F10] walk-intent: chest at [-143,81,411] held for the fleet (2 live, ttl 90s)',
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)'
  ])
  assert.equal(c.totals.shadow, 1); assert.equal(c.totals.shadowByWrite, 1); assert.equal(c.totals.shadowByHold, 0)
  assert.ok(!rentShadowRow(c).includes(' - the feeder:'), 'the write overwrote the hold: the face reads write-fed')
}

// --- (v0.974.23) THE HOLE'S OWN AGE - the rode-live byte's own two faces ---

// --- aged: the pre-walk entry survived the failure's own write (the skip gate's miss) ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!) (ledger live 3s ago)'
  ])
  assert.equal(c.totals.shadowLive, 1); assert.equal(c.totals.shadowLiveAged, 1); assert.equal(c.totals.shadowLiveZero, 0)
  const row = rentShadowRow(c)
  assert.match(row, /the hole's own age: aged 1 \/ zero-age 0/)
  // the v0.974.21 clause rides byte-identical beside the age seat
  assert.match(row, /the split: rode-live 1 \/ rode-blind 0/)
}

// --- zero-age: the walk was blind-reasonable (the failure wrote the first evidence) ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!) (ledger live 0s ago)'
  ])
  assert.equal(c.totals.shadowLive, 1); assert.equal(c.totals.shadowLiveZero, 1); assert.equal(c.totals.shadowLiveAged, 0)
  assert.match(rentShadowRow(c), /the hole's own age: aged 0 \/ zero-age 1/)
}

// --- mixed: both faces' own sums (aged + zero-age = shadowLive) ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!) (ledger live 3s ago)',
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F7 [F7] hop: chest at [-143,81,411] d=17 zero: chest unreachable (Took to long to decide path to goal!) (ledger live 0s ago)'
  ])
  assert.equal(c.totals.shadowLive, 2)
  assert.equal(c.totals.shadowLiveAged + c.totals.shadowLiveZero, c.totals.shadowLive)
  assert.match(rentShadowRow(c), /the hole's own age: aged 1 \/ zero-age 1/)
}

// --- the byte-less face reads byte-identical: no age clause, no split clause ---
{
  const c = rentShadowCensus([
    'F5 [F5] no-path ledger: chest at [-143,81,411] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!)'
  ])
  assert.equal(c.totals.shadowLive, 0); assert.equal(c.totals.shadowLiveAged, 0); assert.equal(c.totals.shadowLiveZero, 0)
  const row = rentShadowRow(c)
  assert.ok(!row.includes("the hole's own age:"), 'a pre-wire face reads byte-identical: no age clause')
  assert.ok(!row.includes(' - the split: rode-live'))
}

// --- the 0s byte parses (the grammar's own floor) and rides nowhere else ---
{
  const ev = rentShadowEvent('F15 [F15] hop: chest at [-143,81,411] d=18 zero: chest unreachable (No path to the goal!) (ledger live 0s ago)')
  assert.equal(ev.kind, 'rent'); assert.equal(ev.ledgerAgeS, 0)
}
