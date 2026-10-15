// tests/unit/busytrend.test.mjs - THE BUSY'S OWN TREND's own pin
// battery (v0.976.118): the field's own chains byte-exact, the
// honest silences, the byte-pin battery, the fence battery, the
// class's own read, the multi-skin voice ride, the one-parser ride
// through the anatomy's own segs cell (the same refusal lines the
// ledger's own whys cell holds - the cells never merge).
import { busyOfAnatomy, busyTrendConsistent, busyTrendRow } from '../../src/lib/busytrend.mjs'
import { smeltRefusalAnatomy } from '../../src/lib/smelthold.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, this word prices the smelt refusal anatomy's busy class across the walks, co-existence by seat never by duplication)"

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..384 (the
// anatomy's own arithmetic: 0, 0, 1, 0, 0, 1, 1, 3, 0, 1, 1, 0, 0,
// 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 3, 2, 0, 1, 0, 1, 0, 3, 4, 0, 0,
// 0, 1 - THE COUNT LEFT ZERO TWENTY faces deep, THE FIELD'S OWN TOP
// 4 THE FACE 380 COUNT, the +3 the field's own biggest single step
// THE QUAD the face 372's own 0 -> 3 and the face 373's own 0 -> 3
// and the face 379's own 0 -> 3 and the face 380's own 0 -> 3, the
// -4 the field's own biggest fall the face 381's own collapse) - the
// word born speaking SIXTEEN windows deep (fourteen swings + one
// swell + one fade) with the NINETEEN honest silences beside.
const P = { 348: 0, 349: 0, 350: 1, 351: 0, 352: 0, 353: 1, 354: 1, 355: 3, 356: 0, 357: 1, 358: 1, 359: 0, 360: 0, 361: 1, 362: 0, 363: 1, 364: 1, 365: 0, 366: 1, 367: 0, 368: 0, 369: 0, 370: 0, 371: 0, 372: 3, 373: 2, 374: 0, 375: 1, 376: 0, 377: 1, 378: 0, 379: 3, 380: 4, 381: 0, 382: 0, 383: 0, 384: 1 }
const w = (f) => busyTrendRow({ back: { busy: P[f - 2] }, prev: { busy: P[f - 1] }, cur: { busy: P[f] } })

// the sixteen speaking chains byte-exact - the FACE 351 chain the
// swing THE WORD'S OWN BIRTH RIDE
assert.equal(w(351), "the busy's own trend (v0.976.118): the busy's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(356), "the busy's own trend (v0.976.118): the busy's own swing - 1 -> 3 (+2) -> 0 (-3) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(357), "the busy's own trend (v0.976.118): the busy's own swing - 3 -> 0 (-3) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(362), "the busy's own trend (v0.976.118): the busy's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(363), "the busy's own trend (v0.976.118): the busy's own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(366), "the busy's own trend (v0.976.118): the busy's own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(367), "the busy's own trend (v0.976.118): the busy's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
// the storm's own trade - the FACE 373 chain the swing (the +3 the
// quad's own first step the trade paid back)
assert.equal(w(373), "the busy's own trend (v0.976.118): the busy's own swing - 0 -> 3 (+3) -> 2 (-1) - the rise and the fall traded seats between the walks " + TAIL)
// THE FADE - the FACE 374 chain (the field's own only fade)
assert.equal(w(374), "the busy's own trend (v0.976.118): the busy's fall ran two steps deep - 3 -> 2 (-1) -> 0 (-2) - the busy's own fade " + TAIL)
assert.equal(w(375), "the busy's own trend (v0.976.118): the busy's own swing - 2 -> 0 (-2) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(376), "the busy's own trend (v0.976.118): the busy's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(377), "the busy's own trend (v0.976.118): the busy's own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(378), "the busy's own trend (v0.976.118): the busy's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(379), "the busy's own trend (v0.976.118): the busy's own swing - 1 -> 0 (-1) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
// THE SWELL - the FACE 380 chain (the field's own top 4)
assert.equal(w(380), "the busy's own trend (v0.976.118): the busy's rise ran two steps deep - 0 -> 3 (+3) -> 4 (+1) - the busy's own swell " + TAIL)
// the collapse's own round trip - the FACE 381 chain the swing (the
// -4 the field's own biggest fall)
assert.equal(w(381), "the busy's own trend (v0.976.118): the busy's own swing - 3 -> 4 (+1) -> 0 (-4) - the rise and the fall traded seats between the walks " + TAIL)

// the nineteen honest silences - the held windows (the birth window
// the FACE 350 chain, the storm's own arrival riding held the FACE
// 372 chain, the drought's own exit riding held the FACE 384 chain,
// the triple drought the FACE 369..371 chains, the double drought
// the FACE 382/383 chains)
const silences = [350, 352, 353, 354, 355, 358, 359, 360, 361, 364, 365, 368, 369, 370, 371, 372, 382, 383, 384]
assert.equal(silences.length, 19)
for (const f of silences) assert.equal(w(f), null, `F${f} held -> null`)

// the tally - fourteen swings + one swell + one fade = sixteen
// speaking of thirty-five windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 384; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 14, swell: 1, fade: 1, silence: 19 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(380)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(busyTrendConsistent(null), false)
assert.equal(busyTrendConsistent(undefined), false)
assert.equal(busyTrendConsistent('busy'), false)
assert.equal(busyTrendConsistent([]), false)
assert.equal(busyTrendConsistent({ back: { busy: 0 }, prev: { busy: 0 } }), false)
assert.equal(busyTrendConsistent({ back: { busy: 0 }, prev: { busy: 0 }, cur: { busy: 0 } }), true)
assert.equal(busyTrendConsistent({ back: { busy: -1 }, prev: { busy: 0 }, cur: { busy: 0 } }), false)
assert.equal(busyTrendConsistent({ back: { busy: 1.5 }, prev: { busy: 0 }, cur: { busy: 0 } }), false)
assert.equal(busyTrendConsistent({ back: { busy: '3' }, prev: { busy: 0 }, cur: { busy: 0 } }), false)
assert.equal(busyTrendConsistent({ back: null, prev: { busy: 0 }, cur: { busy: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(busyTrendConsistent({ back: { busy: 0, took: 4 }, prev: { busy: 2, took: 4 }, cur: { busy: 1, took: 4 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(busyTrendRow(null), null)
assert.equal(busyTrendRow('x'), null)
assert.equal(busyTrendRow({ back: { busy: 1 }, prev: { busy: 1 }, cur: { busy: 1 } }), null)

// THE CLASS'S OWN READ - busyOfAnatomy rides the anatomy's segs cell
assert.equal(busyOfAnatomy(null), 0)
assert.equal(busyOfAnatomy(undefined), 0)
assert.equal(busyOfAnatomy([]), 0)
assert.equal(busyOfAnatomy({}), 0)
assert.equal(busyOfAnatomy({ segs: null }), 0)
assert.equal(busyOfAnatomy({ segs: [] }), 0)
assert.equal(busyOfAnatomy({ segs: {} }), 0)
assert.equal(busyOfAnatomy({ segs: { busy: 4, unreachable: 3 } }), 4)
assert.equal(busyOfAnatomy({ segs: { busy: -1 } }), 0)
assert.equal(busyOfAnatomy({ segs: { busy: 2.5 } }), 0)
assert.equal(busyOfAnatomy({ segs: { busy: '3' } }), 0)

// THE ONE-PARSER RIDE - the SAME refusal lines' TWO cells: the
// anatomy's segs.busy cell this word prices (the last-paren anchor's
// own arithmetic) and the ledger's own refusalWhys cell (the
// first-paren stop's own book - the cells never merge). The multi-skin
// refusal rides each of its voices (the anatomy's own counting law).
const lines = [
  'F2 smelt: 0 (raw_iron@furnace: busy)',
  'F3 smelt: 0 (raw_iron@furnace: busy; no fuel)',
  'F4 smelt: 0 (raw_copper@blast_furnace: machine unreachable (No path to the goal!))',
  'F5 smelt: 12 (raw_iron@furnace: ok)'
]
const anat = smeltRefusalAnatomy(lines)
assert.equal(anat.segs.busy, 2)
assert.equal(anat.segs['no-fuel'], 1)
assert.equal(anat.segs.unreachable, 1)
assert.equal(busyOfAnatomy(anat), 2)
const led = smeltLedger(lines)
// the ledger's own first-paren book holds the busy line's first skin
// (the multi-skin line's busy voice rides the whys too) while the
// machine skin's nested parens break its match (F4 never enters) - a
// different cell, the same refusal lines, the cells never merge
assert.equal(led.refusals, 2)
// the fold rides the anatomy's own cell - the wire's own arithmetic
const fold = { back: { busy: busyOfAnatomy(anat) }, prev: { busy: 4 }, cur: { busy: 0 } }
assert.equal(busyTrendRow(fold), "the busy's own trend (v0.976.118): the busy's own swing - 2 -> 4 (+2) -> 0 (-4) - the rise and the fall traded seats between the walks " + TAIL)

console.log('busytrend.test: all pins green')
