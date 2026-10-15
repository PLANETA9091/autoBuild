// (v0.976.106) THE GRAND TOTAL'S OWN TREND - the test's own field pin:
// every chain below rode the field's own priced windows (the sum's own
// price list TWENTY-EIGHT faces deep, SEVEN live bytes cross-checked)
// - the bars never invent.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { starveGrandTrendConsistent, starveGrandTrendRow } from '../../src/lib/starvegrandtrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'
import { decideWeather } from '../../src/lib/decideweather.mjs'
import { bankDocket } from '../../src/lib/bankdocket.mjs'

const TAIL = "(the grand total's own seat prices the three lanes' own sum within one face, the grand total's own mix prices the majority's own lane within one face, the lane seat's own word prices which lane's own decide-timeouts own the sky within one face, the walk-fail's own trend word prices the walk lane's own mass across the faces - the commons ledger's own book, the hop's own trend word prices the hop lane's own mass across the faces - the weather's own book, the bank decide's own trend word prices the bank decide lane's own mass across the faces - the docket's own door book, the lanes never re-sum inside their own words, the cells never merge, this word prices the three lanes' own sum across the faces - the whole sky's own mass, co-existence by seat never by duplication)"

test('the grand total trend - one pin, the field byte-exact', () => {
  // THE BIRTH RIDE byte-exact - the FACE 350 CHAIN the whole sky's own
  // trade 33 -> 29 (-4) -> 43 (+14) - the field's own first priced
  // window (the three lanes' own join: walk 16 + hop 12 + bank 15)
  const swing350 = starveGrandTrendRow({ back: { sum: 33 }, prev: { sum: 29 }, cur: { sum: 43 } })
  assert.equal(swing350, "the grand total's own trend (v0.976.106): the grand total's own swing - 33 -> 29 (-4) -> 43 (+14) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN HIGHEST FACE byte-exact - the FACE 368 CHAIN the
  // spike's own 170 (walk 25 + hop 62 + bank 83 - the three lanes'
  // own storm face the whole sky's own bill)
  const swing368 = starveGrandTrendRow({ back: { sum: 21 }, prev: { sum: 14 }, cur: { sum: 170 } })
  assert.equal(swing368, "the grand total's own trend (v0.976.106): the grand total's own swing - 21 -> 14 (-7) -> 170 (+156) - the rise and the fall traded seats between the walks " + TAIL)
  // THE PAYBACK byte-exact - the FACE 369 CHAIN 14 -> 170 (+156) -> 37 (-133)
  const swing369 = starveGrandTrendRow({ back: { sum: 14 }, prev: { sum: 170 }, cur: { sum: 37 } })
  assert.equal(swing369, "the grand total's own trend (v0.976.106): the grand total's own swing - 14 -> 170 (+156) -> 37 (-133) - the rise and the fall traded seats between the walks " + TAIL)
  // THE WHOLE SKY'S OWN SWING byte-exact - the FACE 374 CHAIN the
  // three lanes swung the same face 74 -> 125 (+51) -> 52 (-73)
  const swing374 = starveGrandTrendRow({ back: { sum: 74 }, prev: { sum: 125 }, cur: { sum: 52 } })
  assert.equal(swing374, "the grand total's own trend (v0.976.106): the grand total's own swing - 74 -> 125 (+51) -> 52 (-73) - the rise and the fall traded seats between the walks " + TAIL)
  // THE LATEST CHAIN byte-exact - the FACE 375 CHAIN 125 -> 52 (-73) -> 80 (+28)
  const swing375 = starveGrandTrendRow({ back: { sum: 125 }, prev: { sum: 52 }, cur: { sum: 80 } })
  assert.equal(swing375, "the grand total's own trend (v0.976.106): the grand total's own swing - 125 -> 52 (-73) -> 80 (+28) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWELLS - the FACE 351 chain the sky's own build,
  // the FACE 371 chain the refill's own build
  const swell351 = starveGrandTrendRow({ back: { sum: 29 }, prev: { sum: 43 }, cur: { sum: 65 } })
  assert.equal(swell351, "the grand total's own trend (v0.976.106): the grand total's rise ran two steps deep - 29 -> 43 (+14) -> 65 (+22) - the grand total's own swell " + TAIL)
  const swell371 = starveGrandTrendRow({ back: { sum: 37 }, prev: { sum: 41 }, cur: { sum: 74 } })
  assert.equal(swell371, "the grand total's own trend (v0.976.106): the grand total's rise ran two steps deep - 37 -> 41 (+4) -> 74 (+33) - the grand total's own swell " + TAIL)
  // THE FIELD'S OWN FADES - the FACE 359 chain THE FIELD'S OWN FLOOR
  // the 7 the sum's own low, the FACE 358 chain the calm's own deep,
  // the FACE 353 chain the slide, the FACE 367 chain the deep slide
  const fade359 = starveGrandTrendRow({ back: { sum: 29 }, prev: { sum: 11 }, cur: { sum: 7 } })
  assert.equal(fade359, "the grand total's own trend (v0.976.106): the grand total's fall ran two steps deep - 29 -> 11 (-18) -> 7 (-4) - the grand total's own fade " + TAIL)
  const fade358 = starveGrandTrendRow({ back: { sum: 58 }, prev: { sum: 29 }, cur: { sum: 11 } })
  assert.equal(fade358, "the grand total's own trend (v0.976.106): the grand total's fall ran two steps deep - 58 -> 29 (-29) -> 11 (-18) - the grand total's own fade " + TAIL)
  const fade353 = starveGrandTrendRow({ back: { sum: 65 }, prev: { sum: 32 }, cur: { sum: 22 } })
  assert.equal(fade353, "the grand total's own trend (v0.976.106): the grand total's fall ran two steps deep - 65 -> 32 (-33) -> 22 (-10) - the grand total's own fade " + TAIL)
  const fade367 = starveGrandTrendRow({ back: { sum: 54 }, prev: { sum: 21 }, cur: { sum: 14 } })
  assert.equal(fade367, "the grand total's own trend (v0.976.106): the grand total's fall ran two steps deep - 54 -> 21 (-33) -> 14 (-7) - the grand total's own fade " + TAIL)
  // THE FIELD'S OWN HONEST SILENCES - the THREE hold pairs the sky
  // rode back-to-back (the FACE 356/357 the 58's own pair, the FACE
  // 363/364 the 59's own pair, the FACE 372/373 the 74's own pair -
  // the whole sky's own echo), the law's own shapes beside: the clean
  // trio, the held both steps
  assert.equal(starveGrandTrendRow({ back: { sum: 122 }, prev: { sum: 58 }, cur: { sum: 58 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 58 }, prev: { sum: 58 }, cur: { sum: 29 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 24 }, prev: { sum: 59 }, cur: { sum: 59 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 59 }, prev: { sum: 59 }, cur: { sum: 41 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 41 }, prev: { sum: 74 }, cur: { sum: 74 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 74 }, prev: { sum: 74 }, cur: { sum: 125 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 5 }, prev: { sum: 5 }, cur: { sum: 5 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 9 }, prev: { sum: 9 }, cur: { sum: 9 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's own
  // verdict words (no return, no repeat, no stay, no run) nor the
  // seats' own verdict word (no owns) nor the dynasty's own (no
  // dynasty, no turn) - across every branch
  const swings = [33, 43].length // the birth's own kin kept below
  for (const row of [swing350, swing368, swing369, swing374, swing375, swell351, swell371, fade359, fade358, fade353, fade367]) {
    assert.ok(!row.includes('return'))
    assert.ok(!row.includes('repeat'))
    assert.ok(!row.includes('stay'))
    assert.ok(!row.includes('run '))
    assert.ok(!row.includes('owns '))
    assert.ok(!row.includes('dynasty'))
    assert.ok(!row.includes('turn'))
    assert.ok(row.includes('co-existence by seat never by duplication'))
  }
  assert.equal(swings, 2)
  // THE FENCE BATTERY - a fold that cannot prove itself prices
  // nothing (the fence law: the word never rides a lie); the ZERO sum
  // is lawful (the whole sky's own drought rides a lawful count)
  assert.equal(starveGrandTrendRow(null), null)
  assert.equal(starveGrandTrendRow(undefined), null)
  assert.equal(starveGrandTrendRow('sum'), null)
  assert.equal(starveGrandTrendRow([1, 2, 3]), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 1.5 }, prev: { sum: 0 }, cur: { sum: 0 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: -1 }, prev: { sum: 0 }, cur: { sum: 0 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: '2' }, prev: { sum: 0 }, cur: { sum: 0 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 2 }, prev: null, cur: { sum: 0 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 2 }, prev: { ghost: 2 }, cur: { sum: 0 } }), null)
  assert.equal(starveGrandTrendRow({ back: { sum: 2 }, prev: { sum: 0 }, cur: { lanes: 0 } }), null)
  assert.equal(starveGrandTrendConsistent({ back: { sum: 0 }, prev: { sum: 0 }, cur: { sum: 0 } }), true)
  // the zero's own exit-side ride - the drought's own face the zero
  // rode lawful, the exit the swing's own voice
  const exit = starveGrandTrendRow({ back: { sum: 7 }, prev: { sum: 0 }, cur: { sum: 23 } })
  assert.equal(exit, "the grand total's own trend (v0.976.106): the grand total's own swing - 7 -> 0 (-7) -> 23 (+23) - the rise and the fall traded seats between the walks " + TAIL)
  // THE ONE-PARSER RIDE through the three censuses' own images - the
  // SAME assembly the grand total's own birth site holds (the commons
  // ledger's own walk byte + the weather's own hop byte + the docket's
  // own door decide byte, the SAME visits rule): the walk-fail rides
  // the commons grammar (the anchor opens the sweep - the grammar's
  // own gate), the bank decide's door skin rides the docket, the hop
  // decide skin rides BOTH the hop zeros and the docket's door decide
  // (the A* share's own double seat - the same count the grand
  // total's own birth site holds), the hop's own no-path skin never
  // joins (the delivery's own why class - the hop lane's own
  // decide-only zeros)
  const anchor = (bot) => `${bot} fuel commons: the anchor chest is read first`
  const walkFail = (bot, why) => `${bot} fuel commons: chest walk failed after the nudge (${why})`
  const bankDecide = (bot, blocks) => `${bot} bank: chest unreachable (Took to long to decide path to goal!) (${blocks} blocks from yard) - walking back`
  const hopDecide = (bot) => `${bot} [${bot}] hop: chest at [-99,81,414] d=21 zero: chest unreachable (Took to long to decide path to goal!) (ledger live 0s ago)`
  const hopNoPath = (bot) => `${bot} [${bot}] hop: chest at [-99,81,414] d=21 zero: chest unreachable (No path to the goal) (ledger live 0s ago)`
  const visitsOf = (ls) => ls.filter(l => /bank(ed)?[: ]/i.test(l)).length > 0 ? ls.filter(l => /\bbank\b/.test(l)).length : 0
  const sumOf = (ls) => {
    const cl = commonsLedger(ls)
    const dw = decideWeather(ls)
    const d = bankDocket(ls, visitsOf(ls))
    const walk = cl && cl.totals ? cl.totals.walkFail : null
    const hop = dw && dw.hop ? dw.hop.zeros : null
    const bank = d && d.door ? d.door.decideTimeouts : null
    if (walk === null || hop === null || bank === null) return null
    return walk + hop + bank
  }
  const ride = starveGrandTrendRow({
    back: { sum: sumOf([anchor('F7'), walkFail('F7', 'the ground rose')]) },
    prev: { sum: sumOf([anchor('F7'), walkFail('F7', 'the ground rose'), bankDecide('F16', 18)]) },
    cur: { sum: sumOf([anchor('F7'), walkFail('F7', 'the ground rose'), bankDecide('F16', 18), hopDecide('F4')]) }
  })
  assert.equal(ride, "the grand total's own trend (v0.976.106): the grand total's rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the grand total's own swell " + TAIL)
  // the no-path skin's own silence - the hop's own non-decide why
  // never joins (the sum's own zero rides the honest assembly)
  assert.equal(sumOf([hopNoPath('F4')]), 0)
  // the empty face's own zero - the three censuses ride the lawful
  // zero sum over no lines (the drought's own shape, the assembly
  // never lies); the legs go null only when a census itself is
  // missing (the fold's own guard reads them before the word)
  assert.equal(sumOf([]), 0)
})
