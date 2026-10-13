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

console.log('rentshadow: all pins green')
