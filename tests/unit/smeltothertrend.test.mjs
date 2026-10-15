// tests/unit/smeltothertrend.test.mjs - THE SMELT OTHER'S OWN
// TREND's own pin battery (v0.976.120): the field's own chain
// byte-exact, the honest silences, the byte-pin battery, the fence
// battery, the class's own read, the multi-skin voice ride, the
// one-parser ride through the anatomy's own segs cell (the same
// refusal lines the ledger's own whys cell holds - the cells never
// merge).
import { smeltOtherOfAnatomy, smeltOtherTrendConsistent, smeltOtherTrendRow } from '../../src/lib/smeltothertrend.mjs'
import { smeltRefusalAnatomy } from '../../src/lib/smelthold.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, this word prices the smelt refusal anatomy's other class across the walks, co-existence by seat never by duplication)"

// THE FIELD'S OWN CHAIN BYTE-EXACT - the priced field 348..385 (the
// anatomy's own arithmetic: 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0 - THE COUNT RODE ZERO THIRTY-SEVEN faces of THIRTY-EIGHT,
// THE FIELD'S OWN TOP 1 THE FACE 367 COUNT, the +1 the field's own
// biggest single step the face 367's own 0 -> 1, the -1 the field's
// own biggest fall the face 368's own 1 -> 0 - the arrival and the
// payback rode the same pair of faces) - the word born speaking ONE
// window deep (one swing) with the THIRTY-FIVE honest silences
// beside - THE QUIETEST-SPEAKING BIRTH.
const P = { 348: 0, 349: 0, 350: 0, 351: 0, 352: 0, 353: 0, 354: 0, 355: 0, 356: 0, 357: 0, 358: 0, 359: 0, 360: 0, 361: 0, 362: 0, 363: 0, 364: 0, 365: 0, 366: 0, 367: 1, 368: 0, 369: 0, 370: 0, 371: 0, 372: 0, 373: 0, 374: 0, 375: 0, 376: 0, 377: 0, 378: 0, 379: 0, 380: 0, 381: 0, 382: 0, 383: 0, 384: 0, 385: 0 }
const w = (f) => smeltOtherTrendRow({ back: { smeltOther: P[f - 2] }, prev: { smeltOther: P[f - 1] }, cur: { smeltOther: P[f] } })

// the one speaking chain byte-exact - the FACE 368 chain the swing
// THE WORD'S OWN BIRTH RIDE (the unknown voice's one arrival paid
// back the very next walk)
assert.equal(w(368), "the smelt other's own trend (v0.976.120): the smelt other's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)

// the thirty-five honest silences - the held windows (the all-zero
// droughts, the face 367's own first-held arrival 0 -> 0 -> 1, the
// face 369's own second-held payback 1 -> 0 -> 0)
const silences = [350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385]
assert.equal(silences.length, 35)
assert.equal(w(367), null, 'F367 first held -> null')
assert.equal(w(369), null, 'F369 second held -> null')
for (const f of silences) assert.equal(w(f), null, `F${f} held -> null`)

// the tally - one swing of thirty-six windows (the quietest-speaking
// birth - the no chest's own v0.976.96 the precedent)
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 385; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 1, swell: 0, fade: 0, silence: 35 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(368)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(smeltOtherTrendConsistent(null), false)
assert.equal(smeltOtherTrendConsistent(undefined), false)
assert.equal(smeltOtherTrendConsistent('other'), false)
assert.equal(smeltOtherTrendConsistent([]), false)
assert.equal(smeltOtherTrendConsistent({ back: { smeltOther: 0 }, prev: { smeltOther: 0 } }), false)
assert.equal(smeltOtherTrendConsistent({ back: { smeltOther: 0 }, prev: { smeltOther: 0 }, cur: { smeltOther: 0 } }), true)
assert.equal(smeltOtherTrendConsistent({ back: { smeltOther: -1 }, prev: { smeltOther: 0 }, cur: { smeltOther: 0 } }), false)
assert.equal(smeltOtherTrendConsistent({ back: { smeltOther: 1.5 }, prev: { smeltOther: 0 }, cur: { smeltOther: 0 } }), false)
assert.equal(smeltOtherTrendConsistent({ back: { smeltOther: '3' }, prev: { smeltOther: 0 }, cur: { smeltOther: 0 } }), false)
assert.equal(smeltOtherTrendConsistent({ back: null, prev: { smeltOther: 0 }, cur: { smeltOther: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(smeltOtherTrendConsistent({ back: { smeltOther: 0, timeout: 1 }, prev: { smeltOther: 2, timeout: 1 }, cur: { smeltOther: 1, timeout: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(smeltOtherTrendRow(null), null)
assert.equal(smeltOtherTrendRow('x'), null)
assert.equal(smeltOtherTrendRow({ back: { smeltOther: 1 }, prev: { smeltOther: 1 }, cur: { smeltOther: 1 } }), null)

// THE CLASS'S OWN READ - smeltOtherOfAnatomy rides the anatomy's
// segs cell
assert.equal(smeltOtherOfAnatomy(null), 0)
assert.equal(smeltOtherOfAnatomy(undefined), 0)
assert.equal(smeltOtherOfAnatomy([]), 0)
assert.equal(smeltOtherOfAnatomy({}), 0)
assert.equal(smeltOtherOfAnatomy({ segs: null }), 0)
assert.equal(smeltOtherOfAnatomy({ segs: [] }), 0)
assert.equal(smeltOtherOfAnatomy({ segs: {} }), 0)
assert.equal(smeltOtherOfAnatomy({ segs: { other: 1, busy: 4 } }), 1)
assert.equal(smeltOtherOfAnatomy({ segs: { other: -1 } }), 0)
assert.equal(smeltOtherOfAnatomy({ segs: { other: 2.5 } }), 0)
assert.equal(smeltOtherOfAnatomy({ segs: { other: '3' } }), 0)

// THE ONE-PARSER RIDE - the SAME refusal lines' cells: the anatomy's
// segs.other cell this word prices (the unknown voice reads other by
// the anatomy's own classification law - counted, never invented).
// The multi-skin refusal rides each of its voices (the anatomy's own
// counting law).
const lines = [
  'F2 smelt: 0 (raw_iron@furnace: machine asleep)',
  'F3 smelt: 0 (raw_iron@furnace: machine drifting; busy)',
  'F4 smelt: 0 (raw_copper@blast_furnace: timeout)',
  'F5 smelt: 12 (raw_iron@furnace: ok)'
]
const anat = smeltRefusalAnatomy(lines)
assert.equal(anat.segs.other, 2)
assert.equal(anat.segs.busy, 1)
assert.equal(anat.segs.timeout, 1)
assert.equal(smeltOtherOfAnatomy(anat), 2)
const led = smeltLedger(lines)
// the ledger's own refusal book prices the refusals' own count - a
// different book, the cells never merge
assert.equal(led.refusals, 3)
// the fold rides the anatomy's own cell - the wire's own arithmetic
const fold = { back: { smeltOther: smeltOtherOfAnatomy(anat) }, prev: { smeltOther: 0 }, cur: { smeltOther: 1 } }
assert.equal(smeltOtherTrendRow(fold), "the smelt other's own trend (v0.976.120): the smelt other's own swing - 2 -> 0 (-2) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)

console.log('smeltothertrend.test: all pins green')
