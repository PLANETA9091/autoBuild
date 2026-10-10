//
// recoverwhy.test.mjs - THE FAILED WHY'S OWN ANATOMY (v0.913.0)
//
// Face 190 (38080764413) is the row's own face: 'failed 5 (none 0 /
// table 1)' could not say WHY - F18's 'no planks recipe' x4 rode the
// silent 'other', F8's prose 'table 0' classed 'table' on a false
// positive. The anatomy row speaks the verbatim whys and the re-fail
// cast (F18 x3 of 3 - the loop's own rent shape).
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { recoveryFailWhy, recoveryFailWhyRow } from '../../src/lib/recoverwhy.mjs'
import { RECOVERY_TERMINAL_RE } from '../../src/lib/toolrecovery.mjs'

const F18_LINE = 'F18 tool recovery: failed (no planks recipe)'
const F8_LINE = 'F8 tool recovery: failed (no pickaxe (sticks 2, planks-best 1, table 0))'

test('the face-190 shape: failed 5, the verbatim whys, F18 re-failed x3 of 3 (the row byte-exact)', () => {
  const lines = []
  for (let i = 0; i < 4; i++) {
    lines.push('F18 tool recovery: no pickaxe - spare-pick craft first')
    lines.push('F18 tool recovery: spare craft failed (no sticks and no planks for sticks) - re-running the bootstrap')
    lines.push(F18_LINE)
    lines.push('F18 tool recovery: surfaced - the wood leg gathers where trees grow')
  }
  lines.push('F8 tool recovery: no pickaxe - spare-pick craft first')
  lines.push('F8 tool recovery: spare craft failed (no sticks and no planks for sticks) - re-running the bootstrap')
  lines.push(F8_LINE)
  const r = recoveryFailWhy(lines)
  assert.equal(r.failed, 5)
  assert.deepEqual(r.whys, [
    { why: 'no planks recipe', n: 4 },
    { why: 'no pickaxe (sticks 2, planks-best 1, table 0)', n: 1 }
  ])
  assert.deepEqual(r.byBot, { F18: 4, F8: 1 })
  assert.deepEqual(r.repeats, { F18: 3 })
  assert.equal(r.repeatMass, 3)
  assert.equal(
    recoveryFailWhyRow(r),
    "the failed why's own anatomy (v0.913.0): failed 5 - no planks recipe x4 + no pickaxe (sticks 2, planks-best 1, table 0) x1 - F18 re-failed x3 of 3 (the loop's own rent, the recovery lane's own shape)"
  )
})

test('THE WIDE CAPTURE: the nested-parens why arrives whole - the old table false positive recorded, never rewritten', () => {
  const m = RECOVERY_TERMINAL_RE.exec(F8_LINE)
  assert.equal(m[2], 'failed')
  assert.equal(m[3], 'no pickaxe (sticks 2, planks-best 1, table 0)') // the verbatim - the substring 'table' classed it 'table' in the old row; the anatomy speaks the truth beside
  const r = recoveryFailWhy([F8_LINE])
  assert.equal(r.whys[0].why, 'no pickaxe (sticks 2, planks-best 1, table 0)')
})

test('THE ADJACENCY LAW: failed->failed is a re-fail, OK heals the chain, the spare-ok skin heals too', () => {
  const r = recoveryFailWhy([
    'F2 tool recovery: failed (no crafting table)',
    'F2 tool recovery: failed (none)',
    'F2 tool recovery: OK (wooden_pickaxe)',
    'F2 tool recovery: failed (none)',
    'F2 tool recovery: OK (spare craft stone, holds 1)',
    'F2 tool recovery: failed (no planks recipe)'
  ])
  assert.equal(r.failed, 4)
  assert.deepEqual(r.repeats, { F2: 1 }) // only the first pair re-failed; the OK + the spare-ok healed
  assert.equal(r.repeatMass, 1)
})

test('THE BYTE LAW: the whys read count desc then the why byte asc; the repeat bots read bot asc on ties', () => {
  const r = recoveryFailWhy([
    'F5 tool recovery: failed (zebra why)',
    'F2 tool recovery: failed (zebra why)',
    'F2 tool recovery: failed (alpha why)'
  ])
  assert.deepEqual(r.whys, [
    { why: 'zebra why', n: 2 },
    { why: 'alpha why', n: 1 }
  ])
  const r2 = recoveryFailWhy([
    'F5 tool recovery: failed (w1)',
    'F5 tool recovery: failed (w2)',
    'F2 tool recovery: failed (w3)',
    'F2 tool recovery: failed (w4)'
  ])
  assert.deepEqual(r2.repeats, { F2: 1, F5: 1 })
  assert.ok(recoveryFailWhyRow(r2).includes('no solo re-failer owns the majority: F2 x1 + F5 x1 own 2 of 2 re-fail(s)'))
})

test('THE ZERO-REPEAT FENCE: single fails read the anatomy only - no repeat clause', () => {
  const r = recoveryFailWhy(['F9 tool recovery: failed (none)'])
  assert.equal(r.repeatMass, 0)
  assert.equal(
    recoveryFailWhyRow(r),
    "the failed why's own anatomy (v0.913.0): failed 1 - none x1"
  )
})

test('THE MAJORITY LAW: the solo re-failer only above half (2 of 3 owns)', () => {
  const r = recoveryFailWhy([
    'F3 tool recovery: failed (w1)',
    'F3 tool recovery: failed (w2)',
    'F7 tool recovery: failed (w3)'
  ])
  assert.equal(r.repeatMass, 1) // F3 x1, F7 x0
  const row = recoveryFailWhyRow(r)
  assert.ok(row.includes('F3 re-failed x1 of 1')) // 1 > 0.5 - the solo seat
})

test('THE BLOB LAW: the raw string reads the same anatomy as the array', () => {
  const blob = [F18_LINE, F18_LINE].join('\n')
  assert.deepEqual(recoveryFailWhy(blob), recoveryFailWhy([F18_LINE, F18_LINE]))
})

test('THE HONEST SILENCES: zero failed, the junk battery', () => {
  assert.equal(recoveryFailWhy(['F1 tool recovery: OK (wooden_pickaxe)']), null)
  assert.equal(recoveryFailWhy([]), null)
  assert.equal(recoveryFailWhy(), null)
  assert.equal(recoveryFailWhy(null), null)
  assert.equal(recoveryFailWhy(42), null)
  assert.equal(recoveryFailWhy(['no strings here', 42, null]), null) // junk lines judge nothing
  assert.equal(recoveryFailWhyRow(null), null)
  assert.equal(recoveryFailWhyRow('junk'), null)
  assert.equal(recoveryFailWhyRow({ failed: 0, whys: [], repeats: {}, repeatMass: 0 }), null)
  assert.equal(recoveryFailWhyRow({ failed: 2, whys: 'nope', repeats: {}, repeatMass: 0 }), null)
})

test('THE CENSUS GUARD: the anatomy rides the decompose mine beside the v0.492.0 book (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { recoveryFailWhy, recoveryFailWhyRow } from '../../src/lib/recoverwhy.mjs'")) // the import
  assert.ok(src.includes('recoveryFailWhy(lines)')) // the same walk's own input, zero re-parsing
  const book = src.indexOf("--- RECOVERY BOOK (v0.492.0")
  const anatomy = src.indexOf('recoveryFailWhy(lines)')
  assert.ok(book > 0 && anatomy > book) // the row rides beside the book, never before it
})
