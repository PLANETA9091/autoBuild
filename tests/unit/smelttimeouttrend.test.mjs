// tests/unit/smelttimeouttrend.test.mjs - THE SMELT TIMEOUT'S OWN
// TREND's own pin battery (v0.976.119): the field's own chains
// byte-exact, the honest silences, the byte-pin battery, the fence
// battery, the class's own read, the multi-skin voice ride, the
// one-parser ride through the anatomy's own segs cell (the same
// refusal lines the ledger's own whys cell holds - the cells never
// merge; the mining ledger's own totals cell the timeout word
// prices a different book).
import { smeltTimeoutOfAnatomy, smeltTimeoutTrendConsistent, smeltTimeoutTrendRow } from '../../src/lib/smelttimeouttrend.mjs'
import { smeltRefusalAnatomy } from '../../src/lib/smelthold.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, this word prices the smelt refusal anatomy's timeout class across the walks, co-existence by seat never by duplication)"

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..384 (the
// anatomy's own arithmetic: 1, 0, 2, 3, 4, 0, 6, 1, 1, 2, 1, 0, 2,
// 0, 0, 4, 5, 2, 1, 2, 2, 1, 1, 1, 3, 5, 3, 0, 3, 7, 4, 0, 0, 2, 6,
// 1, 0 - THE COUNT LEFT ZERO NINE faces deep, THE FIELD'S OWN TOP 7
// THE FACE 377 COUNT, the +6 the field's own biggest single step the
// face 354's own 0 -> 6, the -5 the field's own biggest fall THE
// TWIN the face 355's own 6 -> 1 and the face 383's own 6 -> 1) -
// the word born speaking TWENTY-FOUR windows deep (thirteen swings +
// six swells + five fades) with the ELEVEN honest silences beside.
const P = { 348: 1, 349: 0, 350: 2, 351: 3, 352: 4, 353: 0, 354: 6, 355: 1, 356: 1, 357: 2, 358: 1, 359: 0, 360: 2, 361: 0, 362: 0, 363: 4, 364: 5, 365: 2, 366: 1, 367: 2, 368: 2, 369: 1, 370: 1, 371: 1, 372: 3, 373: 5, 374: 3, 375: 0, 376: 3, 377: 7, 378: 4, 379: 0, 380: 0, 381: 2, 382: 6, 383: 1, 384: 0 }
const w = (f) => smeltTimeoutTrendRow({ back: { smeltTimeout: P[f - 2] }, prev: { smeltTimeout: P[f - 1] }, cur: { smeltTimeout: P[f] } })

// the twenty-four speaking chains byte-exact - the FACE 350 chain
// the swing THE WORD'S OWN BIRTH RIDE
assert.equal(w(350), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 1 -> 0 (-1) -> 2 (+2) - the rise and the fall traded seats between the walks " + TAIL)
// the patience's own build - the FACE 351/352 chains the swells
assert.equal(w(351), "the smelt timeout's own trend (v0.976.119): the smelt timeout's rise ran two steps deep - 0 -> 2 (+2) -> 3 (+1) - the smelt timeout's own swell " + TAIL)
assert.equal(w(352), "the smelt timeout's own trend (v0.976.119): the smelt timeout's rise ran two steps deep - 2 -> 3 (+1) -> 4 (+1) - the smelt timeout's own swell " + TAIL)
// the burst's own round trip - the FACE 353..355 chains the swings
// (the +6 the field's own biggest single step the face 354's own
// 0 -> 6, the collapse's own payback)
assert.equal(w(353), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 3 -> 4 (+1) -> 0 (-4) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(354), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 4 -> 0 (-4) -> 6 (+6) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(355), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 0 -> 6 (+6) -> 1 (-5) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(358), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 1 -> 2 (+1) -> 1 (-1) - the rise and the fall traded seats between the walks " + TAIL)
// the FACE 359 chain the fade
assert.equal(w(359), "the smelt timeout's own trend (v0.976.119): the smelt timeout's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the smelt timeout's own fade " + TAIL)
assert.equal(w(360), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 1 -> 0 (-1) -> 2 (+2) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(361), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
// THE FACE 364 chain the swell (the rebuild's own climb)
assert.equal(w(364), "the smelt timeout's own trend (v0.976.119): the smelt timeout's rise ran two steps deep - 0 -> 4 (+4) -> 5 (+1) - the smelt timeout's own swell " + TAIL)
assert.equal(w(365), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 4 -> 5 (+1) -> 2 (-3) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(366), "the smelt timeout's own trend (v0.976.119): the smelt timeout's fall ran two steps deep - 5 -> 2 (-3) -> 1 (-1) - the smelt timeout's own fade " + TAIL)
assert.equal(w(367), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 2 -> 1 (-1) -> 2 (+1) - the rise and the fall traded seats between the walks " + TAIL)
// the summit's own wait - the FACE 373 chain the swell
assert.equal(w(373), "the smelt timeout's own trend (v0.976.119): the smelt timeout's rise ran two steps deep - 1 -> 3 (+2) -> 5 (+2) - the smelt timeout's own swell " + TAIL)
assert.equal(w(374), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 3 -> 5 (+2) -> 3 (-2) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(375), "the smelt timeout's own trend (v0.976.119): the smelt timeout's fall ran two steps deep - 5 -> 3 (-2) -> 0 (-3) - the smelt timeout's own fade " + TAIL)
assert.equal(w(376), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 3 -> 0 (-3) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
// THE FIELD'S OWN TOP - the FACE 377 chain the swell
assert.equal(w(377), "the smelt timeout's own trend (v0.976.119): the smelt timeout's rise ran two steps deep - 0 -> 3 (+3) -> 7 (+4) - the smelt timeout's own swell " + TAIL)
// the top's own payback - the FACE 378/379 chains
assert.equal(w(378), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 3 -> 7 (+4) -> 4 (-3) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(379), "the smelt timeout's own trend (v0.976.119): the smelt timeout's fall ran two steps deep - 7 -> 4 (-3) -> 0 (-4) - the smelt timeout's own fade " + TAIL)
// the rebuild's own climb - the FACE 382 chain the swell
assert.equal(w(382), "the smelt timeout's own trend (v0.976.119): the smelt timeout's rise ran two steps deep - 0 -> 2 (+2) -> 6 (+4) - the smelt timeout's own swell " + TAIL)
// the storm's own exit - the FACE 383 chain the swing (the twin's
// own second step the -5) and the FACE 384 chain the fade THE
// WORD'S OWN LIVE WINDOW
assert.equal(w(383), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 2 -> 6 (+4) -> 1 (-5) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(384), "the smelt timeout's own trend (v0.976.119): the smelt timeout's fall ran two steps deep - 6 -> 1 (-5) -> 0 (-1) - the smelt timeout's own fade " + TAIL)

// the eleven honest silences - the held windows
const silences = [356, 357, 362, 363, 368, 369, 370, 371, 372, 380, 381]
assert.equal(silences.length, 11)
for (const f of silences) assert.equal(w(f), null, `F${f} held -> null`)

// the tally - thirteen swings + six swells + five fades = twenty-four
// speaking of thirty-five windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 384; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 13, swell: 6, fade: 5, silence: 11 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(377)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(smeltTimeoutTrendConsistent(null), false)
assert.equal(smeltTimeoutTrendConsistent(undefined), false)
assert.equal(smeltTimeoutTrendConsistent('timeout'), false)
assert.equal(smeltTimeoutTrendConsistent([]), false)
assert.equal(smeltTimeoutTrendConsistent({ back: { smeltTimeout: 0 }, prev: { smeltTimeout: 0 } }), false)
assert.equal(smeltTimeoutTrendConsistent({ back: { smeltTimeout: 0 }, prev: { smeltTimeout: 0 }, cur: { smeltTimeout: 0 } }), true)
assert.equal(smeltTimeoutTrendConsistent({ back: { smeltTimeout: -1 }, prev: { smeltTimeout: 0 }, cur: { smeltTimeout: 0 } }), false)
assert.equal(smeltTimeoutTrendConsistent({ back: { smeltTimeout: 1.5 }, prev: { smeltTimeout: 0 }, cur: { smeltTimeout: 0 } }), false)
assert.equal(smeltTimeoutTrendConsistent({ back: { smeltTimeout: '3' }, prev: { smeltTimeout: 0 }, cur: { smeltTimeout: 0 } }), false)
assert.equal(smeltTimeoutTrendConsistent({ back: null, prev: { smeltTimeout: 0 }, cur: { smeltTimeout: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(smeltTimeoutTrendConsistent({ back: { smeltTimeout: 0, busy: 1 }, prev: { smeltTimeout: 2, busy: 1 }, cur: { smeltTimeout: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(smeltTimeoutTrendRow(null), null)
assert.equal(smeltTimeoutTrendRow('x'), null)
assert.equal(smeltTimeoutTrendRow({ back: { smeltTimeout: 1 }, prev: { smeltTimeout: 1 }, cur: { smeltTimeout: 1 } }), null)

// THE CLASS'S OWN READ - smeltTimeoutOfAnatomy rides the anatomy's
// segs cell
assert.equal(smeltTimeoutOfAnatomy(null), 0)
assert.equal(smeltTimeoutOfAnatomy(undefined), 0)
assert.equal(smeltTimeoutOfAnatomy([]), 0)
assert.equal(smeltTimeoutOfAnatomy({}), 0)
assert.equal(smeltTimeoutOfAnatomy({ segs: null }), 0)
assert.equal(smeltTimeoutOfAnatomy({ segs: [] }), 0)
assert.equal(smeltTimeoutOfAnatomy({ segs: {} }), 0)
assert.equal(smeltTimeoutOfAnatomy({ segs: { timeout: 7, busy: 4 } }), 7)
assert.equal(smeltTimeoutOfAnatomy({ segs: { timeout: -1 } }), 0)
assert.equal(smeltTimeoutOfAnatomy({ segs: { timeout: 2.5 } }), 0)
assert.equal(smeltTimeoutOfAnatomy({ segs: { timeout: '3' } }), 0)

// THE ONE-PARSER RIDE - the SAME refusal lines' cells: the anatomy's
// segs.timeout cell this word prices (the last-paren anchor's own
// arithmetic). The multi-skin refusal rides each of its voices (the
// anatomy's own counting law).
const lines = [
  'F2 smelt: 0 (raw_iron@furnace: timeout)',
  'F3 smelt: 0 (raw_iron@furnace: timeout; busy)',
  'F4 smelt: 0 (raw_copper@blast_furnace: machine unreachable (No path to the goal!))',
  'F5 smelt: 12 (raw_iron@furnace: ok)'
]
const anat = smeltRefusalAnatomy(lines)
assert.equal(anat.segs.timeout, 2)
assert.equal(anat.segs.busy, 1)
assert.equal(anat.segs.unreachable, 1)
assert.equal(smeltTimeoutOfAnatomy(anat), 2)
const led = smeltLedger(lines)
// the mining ledger's own timeout word prices the MINING LEDGER's
// totals cell - a different book, the cells never merge
assert.equal(led.refusals, 2)
// the fold rides the anatomy's own cell - the wire's own arithmetic
const fold = { back: { smeltTimeout: smeltTimeoutOfAnatomy(anat) }, prev: { smeltTimeout: 6 }, cur: { smeltTimeout: 1 } }
assert.equal(smeltTimeoutTrendRow(fold), "the smelt timeout's own trend (v0.976.119): the smelt timeout's own swing - 2 -> 6 (+4) -> 1 (-5) - the rise and the fall traded seats between the walks " + TAIL)

console.log('smelttimeouttrend.test: all pins green')
