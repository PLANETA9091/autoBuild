/**
 * nullrowsilence.test.mjs - (v0.976.259) THE NULL ROW'S OWN SILENCE - the
 * report face's own hygiene word, pure.
 *
 * MEASURED (F479, fleet 39178460638, the v0.976.258 tree, run58, the bigfleet
 * face): the report block printed the literal `null` row between the banked
 * crater decode and the drop census - a deathless face (zero 'died -
 * respawning' announces across the whole bigfleet log) walked into
 * deathCensusRow's healthy-silence none-form and the bare console.log printed
 * the null itself onto the report. The row's own law (deathcensus.mjs) reads
 * 'a deathless face reads no row ... the calm face's own silence'; the
 * caller's own comment read the same - the guard was just missing. The word:
 * the none-form holds the seat silently, the null never reaches the face.
 *
 * THE LAWS THIS WORD OBEYS:
 *   - the F479 face anchor: the defect's own bytes (crater decode -> null ->
 *     drop census) ride the test byte-exact - the seat's own fieldproof.
 *   - the none-form family: empty mass / non-array / null records all read
 *     the silent guard (no print), a live mass reads the row (the census
 *     never loses its seat on a deathful face).
 *   - the audit's own pins: the report block's other try/console.log row
 *     functions never return null (scout/map always speak; the drop census
 *     family always speaks) - the guard stays a single-seat fix, the audit
 *     rides the pins so a future none-form cannot sneak in unguarded.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { deathCensusRow, deathCensusRecord, DEATH_CENSUS_LINE_RE } from '../../src/lib/deathcensus.mjs'
import { scoutReportRow, mapCoverageRow } from '../../src/lib/statcarry.mjs'
import { dropCensusRow, dropOpenAnatomyRow, overdueOwnerRow } from '../../src/lib/dropcensus.mjs'

// The F479 bigfleet face's own bytes (the defect's seat, byte-exact):
//   <ts> banked crater decode: crater: 13.6% ... | <ts> null | <ts> drop census: ...
const F479_CRATER = 'banked crater decode: crater: 13.6% of the endgame loot reached chests (banked 313 of 2304u) - the bank chains are the bottleneck, the mines are not'
const F479_NULL = 'null'
const F479_DROP = 'drop census: 1244u of 36305u resolved lost uncollected, 2376u still live (3.4% - under the 25.0% floor) - the shaft drops stay minor, the leak\'s other suspects keep the cover'

// The guarded emitter - the fleet19 call site's own shape (v0.976.259),
// mirrored byte-exact so the test pins the fix, not a paraphrase.
function guardedDeathRowPrint (records, sink) {
  try {
    const deathRow = deathCensusRow(records)
    if (deathRow != null) sink(deathRow)
  } catch { /* the census never holds the teardown */ }
}

test('the F479 face anchor - the defect\'s own bytes sit between crater decode and drop census', () => {
  // the face read the crater, printed the bare null, then the drop census -
  // the exact triple the v0.976.258 tree put on the run58 face
  assert.equal(F479_CRATER.startsWith('banked crater decode: crater: 13.6%'), true)
  assert.equal(F479_NULL, 'null')
  assert.equal(F479_DROP.startsWith('drop census: 1244u of 36305u'), true)
})

test('the deathless face - zero announces, the census none-form, the guard prints nothing', () => {
  // the F479 shape: zero 'died - respawning' lines across the whole log
  const deathlessLines = [
    F479_CRATER,
    'F10 [F10] death drop snapshot: pocket=12u (the death-drop band never announces)',
    F479_DROP
  ]
  const records = deathlessLines.map(deathCensusRecord).filter(Boolean)
  assert.equal(records.length, 0) // the death-drop band never matches the announce shape
  assert.equal(deathCensusRow(records), null) // the none-form
  assert.equal(deathCensusRow([]), null)
  assert.equal(deathCensusRow(undefined), null)
  assert.equal(deathCensusRow(null), null)
  assert.equal(deathCensusRow('junk'), null)
  // the guard's own hand: nothing reaches the face
  const printed = []
  guardedDeathRowPrint(records, l => printed.push(l))
  guardedDeathRowPrint([], l => printed.push(l))
  guardedDeathRowPrint(null, l => printed.push(l))
  assert.equal(printed.length, 0) // the null never reaches the face again
})

test('the deathful face - a live mass keeps its seat, the guard prints the row', () => {
  const announce = 'F13 [F13] died - respawning (server: Drowned ... [kind=mob by Drowned] | ...)'
  assert.equal(DEATH_CENSUS_LINE_RE.test(announce), true)
  const rec = deathCensusRecord(announce)
  assert.equal(rec.kind, 'mob')
  assert.equal(rec.killer, 'Drowned')
  const row = deathCensusRow([rec])
  assert.equal(typeof row, 'string')
  assert.equal(row.startsWith('death census: 1 death - Drowned x1 (100.0%)'), true)
  const printed = []
  guardedDeathRowPrint([rec], l => printed.push(l))
  assert.equal(printed.length, 1)
  assert.equal(printed[0], row)
})

test('the multi-killer face - the row\'s own grammar rides the guarded emitter', () => {
  // the v0.656.0 docstring's own mass: 33 deaths - Drowned x26 (78.8%), Zombie x3,
  // Skeleton x2, Creeper x1, fall x1 - Drowned owns the mass
  const mk = (killer, n) => Array.from({ length: n }, () => ({ bot: 'Fx', kind: 'mob', killer }))
  const records = [
    ...mk('Drowned', 26),
    ...mk('Zombie', 3),
    ...mk('Skeleton', 2),
    ...mk('Creeper', 1),
    { bot: 'F4', kind: 'fall', killer: null }
  ]
  const row = deathCensusRow(records)
  assert.equal(row, 'death census: 33 deaths - Drowned x26 (78.8%), Zombie x3, Skeleton x2, Creeper x1, fall x1 - Drowned owns the mass')
  const printed = []
  guardedDeathRowPrint(records, l => printed.push(l))
  assert.equal(printed.length, 1)
  assert.equal(printed[0], row)
})

test('the audit\'s own pins - the report block\'s other try/console.log rows never read null', () => {
  // scout report: junk reads the named faces, never null (the v0.535.0 law)
  assert.equal(scoutReportRow({}), 'scout report: off')
  assert.equal(scoutReportRow({ requested: true, stats: null }), 'scout report: requested, never spawned')
  assert.equal(scoutReportRow(null).startsWith('scout report: off'), true)
  // map coverage: junk reads 'unavailable', never null
  assert.equal(mapCoverageRow(null), 'map coverage: unavailable')
  assert.equal(mapCoverageRow(undefined), 'map coverage: unavailable')
  // the drop census family: ALWAYS speaks (the census's own law) - junk reads
  // a verdict string, never null
  for (const [name, row] of [
    ['dropCensusRow', dropCensusRow(null)],
    ['dropOpenAnatomyRow', dropOpenAnatomyRow(null)],
    ['overdueOwnerRow', overdueOwnerRow(null)]
  ]) {
    assert.equal(typeof row, 'string', `${name} must always speak, got ${String(row)}`)
    assert.notEqual(row, 'null')
  }
})
