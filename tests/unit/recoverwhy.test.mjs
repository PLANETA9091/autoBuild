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
import { recoveryFailWhy, recoveryFailWhyRow, recoveryFailChains, recoveryFailChainsRow } from '../../src/lib/recoverwhy.mjs'
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
  assert.ok(src.includes("import { recoveryFailWhy, recoveryFailWhyRow, recoveryFailChains, recoveryFailChainsRow } from '../../src/lib/recoverwhy.mjs'")) // the import (v0.914.0: + the chain's own book)
  assert.ok(src.includes('recoveryFailWhy(lines)')) // the same walk's own input, zero re-parsing
  assert.ok(src.includes('recoveryFailChains(lines)')) // the chain book rides the same walk (one parser, one input)
  const book = src.indexOf("--- RECOVERY BOOK (v0.492.0")
  const anatomy = src.indexOf('recoveryFailWhy(lines)')
  assert.ok(book > 0 && anatomy > book) // the row rides beside the book, never before it
  const chains = src.indexOf('recoveryFailChains(lines)')
  assert.ok(chains > anatomy) // the chain's own row rides beside the anatomy, never before it
})

// ------------------------------------------------------------------
// (v0.914.0) THE RE-FAIL CHAIN'S OWN DEPTH - the adjacency's missing
// structure. The cast counts the repeats; the chain reads the
// AMPLITUDE: the maximal unhealed run per bot. Face 190's F18 shape
// is the row's own face: 4 consecutive failed terminals = ONE chain
// of depth 4 = three unhealed re-asks - the brake lever's own size.
// ------------------------------------------------------------------

test("THE CHAIN'S OWN DEPTH: face-190's F18 shape is ONE chain of depth 4 - the row byte-exact", () => {
  const lines = []
  for (let i = 0; i < 4; i++) {
    lines.push('F18 tool recovery: no pickaxe - spare-pick craft first')
    lines.push('F18 tool recovery: spare craft failed (no sticks and no planks for sticks) - re-running the bootstrap')
    lines.push(F18_LINE)
    lines.push('F18 tool recovery: surfaced - the wood leg gathers where trees grow') // prose - never a terminal, never a heal
  }
  const c = recoveryFailChains(lines)
  assert.deepEqual(c, { chains: 1, maxDepth: 4, owners: ['F18'] })
  assert.equal(
    recoveryFailChainsRow(c),
    "the re-fail chain's own book (v0.914.0): 1 chain(s), max depth 4 - F18 owns the deepest: the bootstrap re-asked 3 time(s) unhealed - the loop's own amplitude, the brake's own size"
  )
})

test('THE HEAL CLOSES THE CHAIN: OK splits one fail-run into two chains - the depth never bridges a heal', () => {
  const c = recoveryFailChains([
    'F2 tool recovery: failed (no crafting table)',
    'F2 tool recovery: failed (none)',
    'F2 tool recovery: OK (wooden_pickaxe)',
    'F2 tool recovery: failed (none)',
    'F2 tool recovery: failed (no planks recipe)'
  ])
  assert.deepEqual(c, { chains: 2, maxDepth: 2, owners: ['F2'] }) // the same bot twice - deduped in the owners
  assert.equal(
    recoveryFailChainsRow(c),
    "the re-fail chain's own book (v0.914.0): 2 chain(s), max depth 2 - F2 owns the deepest: the bootstrap re-asked 1 time(s) unhealed - the loop's own amplitude, the brake's own size"
  )
})

test('THE SPARE-OK SKIN HEALS TOO: the cheap lane closes the run like its OK twin (one heal law)', () => {
  const c = recoveryFailChains([
    'F4 tool recovery: failed (none)',
    'F4 tool recovery: failed (no planks recipe)',
    'F4 tool recovery: OK (spare craft stone, holds 1)',
    'F4 tool recovery: failed (none)'
  ])
  assert.deepEqual(c, { chains: 1, maxDepth: 2, owners: ['F4'] }) // the heal closed the run - the tail fail stands alone
})

test('THE TIE LAW: two bots hold the deepest chain - no solo owner, the row names the riders', () => {
  const lines = [
    'F7 tool recovery: failed (no planks recipe)',
    'F7 tool recovery: failed (no planks recipe)',
    'F7 tool recovery: failed (no planks recipe)',
    'F8 tool recovery: failed (no planks recipe)',
    'F8 tool recovery: failed (no planks recipe)',
    'F8 tool recovery: failed (no planks recipe)'
  ]
  const c = recoveryFailChains(lines)
  assert.deepEqual(c, { chains: 2, maxDepth: 3, owners: ['F7', 'F8'] }) // the byte asc (the v0.790.0 law)
  assert.equal(
    recoveryFailChainsRow(c),
    "the re-fail chain's own book (v0.914.0): 2 chain(s), max depth 3 - no solo bot owns the deepest (F7 + F8): the bootstrap re-asked 2 time(s) unhealed - the loop's own amplitude, the brake's own size"
  )
})

test("THE AMPLITUDE'S OWN HONESTY: three spread re-fails never inflate the depth - chains 3, max depth 2", () => {
  const lines = []
  for (let i = 0; i < 3; i++) {
    lines.push('F11 tool recovery: failed (no planks recipe)')
    lines.push('F11 tool recovery: failed (no planks recipe)')
    lines.push('F11 tool recovery: OK (wooden_pickaxe)')
  }
  const c = recoveryFailChains(lines)
  assert.deepEqual(c, { chains: 3, maxDepth: 2, owners: ['F11'] }) // the count grew, the amplitude held - the brake's honest size
})

test('THE ISOLATED FENCE: every fail healed - zero chains, the honest silence (null, no row)', () => {
  const lines = [
    'F9 tool recovery: failed (none)',
    'F9 tool recovery: OK (wooden_pickaxe)',
    'F2 tool recovery: failed (no planks recipe)',
    'F2 tool recovery: OK (spare craft stone, holds 1)'
  ]
  assert.equal(recoveryFailChains(lines), null)
  assert.equal(recoveryFailChainsRow(null), null)
})

test("THE EOF'S OWN TAIL: the open unhealed run closes at the log's end (the bootstrap never came back)", () => {
  const c = recoveryFailChains([
    'F6 tool recovery: failed (no planks recipe)',
    'F6 tool recovery: failed (no planks recipe)',
    'F6 tool recovery: failed (no planks recipe)'
    // no terminal after - the log ends mid-chain, the depth stands
  ])
  assert.deepEqual(c, { chains: 1, maxDepth: 3, owners: ['F6'] })
})

test('THE CHAIN BOOK\'S OWN JUNK BATTERY: junk judges nothing, the solo fail is no chain', () => {
  assert.equal(recoveryFailChains(), null)
  assert.equal(recoveryFailChains(null), null)
  assert.equal(recoveryFailChains(42), null)
  assert.equal(recoveryFailChains(['no strings here', 42, null]), null)
  assert.equal(recoveryFailChains(['F1 tool recovery: failed (none)']), null) // a solo fail never re-asked
  assert.equal(recoveryFailChainsRow('junk'), null)
  assert.equal(recoveryFailChainsRow({ chains: 0, maxDepth: 0, owners: [] }), null)
  assert.equal(recoveryFailChainsRow({ chains: 2, maxDepth: 1, owners: ['F1'] }), null) // depth < 2 is no chain
  assert.equal(recoveryFailChainsRow({ chains: 2, maxDepth: 3, owners: 'nope' }), null)
})
