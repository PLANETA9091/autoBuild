/**
 * materialcelltrend.test.mjs - (v0.976.281) THE MATERIAL CELL'S OWN
 * GATHERED MASS - the final report's own per-material collected line
 * ONE material at a time the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the eight fleet faces'
 * own per-material cells):
 *   sand:   75  38  60  90 102  61  48  11
 *   gravel: 12   7   4   0   6   9   9   6
 *   dirt:  428 377 415 426 139 198 343 111
 *   stone: 204 653 568 128 432 230 453 299
 * the REAL sand arc speaks SIX of the six windows (the strongest
 * birth - every weather shape the same hand rode), the REAL gravel
 * arc the held law's own honest silence twice prices (W5 W6) beside
 * the F481 zero-got the lawful zero holds.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { materialCellCensus, materialCellConsistent, materialCellTrendRow } from '../../src/lib/materialcelltrend.mjs'

// the REAL face lines byte-exact (the .280 test's own faces - the
// same bytes the cell word re-prices one material at a time)
const F478 = [
  '  sand          collected      75 (0.047% of 157,926)',
  '  gravel        collected      12 (0.008% of 149,380)',
  '  dirt          collected     428',
  '  stone         collected     204 (3.047% of 6,695)'
]
const F479 = [
  '  sand          collected      38 (0.024% of 157,926)',
  '  gravel        collected       7 (0.005% of 149,380)',
  '  dirt          collected     377',
  '  stone         collected     653 (9.754% of 6,695)'
]
const F480 = [
  '  sand          collected      60 (0.038% of 157,926)',
  '  gravel        collected       4 (0.003% of 149,380)',
  '  dirt          collected     415',
  '  stone         collected     568 (8.484% of 6,695)'
]
const F481 = [
  '  sand          collected      90 (0.057% of 157,926)',
  '  gravel        collected       0 (0.000% of 149,380)',
  '  dirt          collected     426',
  '  stone         collected     128 (1.912% of 6,695)'
]
const F482 = [
  '  sand          collected     102 (0.065% of 157,926)',
  '  gravel        collected       6 (0.004% of 149,380)',
  '  dirt          collected     139',
  '  stone         collected     432 (6.453% of 6,695)'
]
const F483 = [
  '  sand          collected      61 (0.039% of 157,926)',
  '  gravel        collected       9 (0.006% of 149,380)',
  '  dirt          collected     198',
  '  stone         collected     230 (3.435% of 6,695)'
]
const F484 = [
  '  sand          collected      48 (0.030% of 157,926)',
  '  gravel        collected       9 (0.006% of 149,380)',
  '  dirt          collected     343',
  '  stone         collected     453 (6.766% of 6,695)'
]
const F485 = [
  '  sand          collected      11 (0.007% of 157,926)',
  '  gravel        collected       6 (0.004% of 149,380)',
  '  dirt          collected     111',
  '  stone         collected     299 (4.466% of 6,695)'
]
const FACES = [F478, F479, F480, F481, F482, F483, F484, F485]
const MATRIX = {
  sand: [75, 38, 60, 90, 102, 61, 48, 11],
  gravel: [12, 7, 4, 0, 6, 9, 9, 6],
  dirt: [428, 377, 415, 426, 139, 198, 343, 111],
  stone: [204, 653, 568, 128, 432, 230, 453, 299]
}

test('the REAL matrix byte-exact - the cell census rides all 32 cells', () => {
  for (const name of Object.keys(MATRIX)) {
    FACES.forEach((face, i) => {
      assert.equal(materialCellCensus(face, name), MATRIX[name][i], `${name} F${478 + i}`)
    })
  }
  // the cell law LAST-PRINT-WINS - the report speaks once per
  // material; two faces folded in one array the last strict print
  // the freshest tally rides
  assert.equal(materialCellCensus([...F478, ...F485], 'sand'), 11)
  assert.equal(materialCellCensus([...F485, ...F478], 'sand'), 75)
  // the cross-material isolation - the named material's own cell
  // alone (the sand line never prices the dirt cell)
  assert.equal(materialCellCensus(F478, 'dirt'), 428)
  assert.equal(materialCellCensus(F478, 'gravel'), 12)
})

test('the invalid inputs - the honest null; the junk faces - the lawful zero', () => {
  // non-array lines - the honest null
  assert.equal(materialCellCensus(null, 'sand'), null)
  assert.equal(materialCellCensus(undefined, 'sand'), null)
  assert.equal(materialCellCensus(42, 'sand'), null)
  assert.equal(materialCellCensus('  sand          collected      75', 'sand'), null)
  // the invalid name - the lowercase-MC-id shape the grammar holds
  assert.equal(materialCellCensus(F478, null), null)
  assert.equal(materialCellCensus(F478, undefined), null)
  assert.equal(materialCellCensus(F478, ''), null)
  assert.equal(materialCellCensus(F478, 'Sand'), null)
  assert.equal(materialCellCensus(F478, 'sa nd'), null)
  assert.equal(materialCellCensus(F478, 'sand1'), null)
  assert.equal(materialCellCensus(F478, 42), null)
  // the junk faces - the lawful zero (the face the plan never named
  // the material keeps the healthy zero)
  assert.equal(materialCellCensus([], 'sand'), 0)
  assert.equal(materialCellCensus(['total chaos, no gather here'], 'sand'), 0)
  // the junk line never poisons - the strict lines alone ride
  assert.equal(materialCellCensus([null, 42, 'junk', ...F485], 'stone'), 299)
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // every refused skin leaves the cell the lawful zero (the face's
  // own line the grammar refuses never prices)
  assert.equal(materialCellCensus(['  sand          collected      11junk'], 'sand'), 0)
  // the leading zero - the .248 house law
  assert.equal(materialCellCensus(['  sand          collected     011'], 'sand'), 0)
  // the negative count
  assert.equal(materialCellCensus(['  sand          collected     -11'], 'sand'), 0)
  // the pretty spacing - the emitter's own column math byte-exact
  assert.equal(materialCellCensus(['  sand           collected      11'], 'sand'), 0)
  // the missing two-space prefix
  assert.equal(materialCellCensus([' sand          collected      11'], 'sand'), 0)
  // the bot-tagged prefix - one emitter one shape
  assert.equal(materialCellCensus(['[bot-7]   sand          collected      11'], 'sand'), 0)
  // the bare cell without the frame
  assert.equal(materialCellCensus(['collected      11'], 'sand'), 0)
  // the wrong frame and the drifted template
  assert.equal(materialCellCensus(['  sand          gathered      11'], 'sand'), 0)
  assert.equal(materialCellCensus(['  sand          collect      11'], 'sand'), 0)
  // the comma-less required, the fused percent, the two-decimal percent
  assert.equal(materialCellCensus(['  sand          collected      11 (0.007% of 157926)'], 'sand'), 0)
  assert.equal(materialCellCensus(['  sand          collected      11(0.007% of 157,926)'], 'sand'), 0)
  assert.equal(materialCellCensus(['  sand          collected      11 (0.07% of 157,926)'], 'sand'), 0)
  // the hand-wide gap the emitter never prints
  assert.equal(materialCellCensus(['  sand          collected        11'], 'sand'), 0)
  // the zero got itself rides - the zero lawful (the F481 gravel
  // line's own shape)
  assert.equal(materialCellCensus(['  gravel        collected       0 (0.000% of 149,380)'], 'gravel'), 0)
  // the name mismatch never prices - the other material's strict
  // line the named cell never rides
  assert.equal(materialCellCensus(['  stone         collected     299 (4.466% of 6,695)'], 'sand'), 0)
})

test('the fence - every branch the fold proves', () => {
  assert.equal(materialCellConsistent({ back: 75, prev: 38, cur: 60 }), true)
  // the null and the non-object
  assert.equal(materialCellConsistent(null), false)
  assert.equal(materialCellConsistent(undefined), false)
  assert.equal(materialCellConsistent(42), false)
  assert.equal(materialCellConsistent([75, 38, 60]), false)
  // the missing face
  assert.equal(materialCellConsistent({ back: 75, prev: 38 }), false)
  assert.equal(materialCellConsistent({ back: null, prev: 38, cur: 60 }), false)
  // the non-integer and the negative cell
  assert.equal(materialCellConsistent({ back: 1.5, prev: 38, cur: 60 }), false)
  assert.equal(materialCellConsistent({ back: -1, prev: 38, cur: 60 }), false)
  assert.equal(materialCellConsistent({ back: NaN, prev: 38, cur: 60 }), false)
  assert.equal(materialCellConsistent({ back: 75, prev: 38, cur: Infinity }), false)
  // the zero cells ride - the zero lawful
  assert.equal(materialCellConsistent({ back: 0, prev: 0, cur: 0 }), true)
  // extra keys never rejected
  assert.equal(materialCellConsistent({ back: 75, prev: 38, cur: 60, junk: 'rides' }), true)
})

test('the shapes byte-exact - the REAL sand arc speaks SIX of the six windows', () => {
  const HEAD = /^the ([a-z_]+) collected cell trend \(v0\.976\.281\): the \1 dig weather's own/
  // the REAL six sand windows byte-exact - the strongest birth (every
  // weather shape the same hand rode: swing/swell/swell/swing/fade/fade)
  assert.match(materialCellTrendRow('sand', { back: 75, prev: 38, cur: 60 }), /^the sand collected cell trend \(v0\.976\.281\): the sand dig weather's own swing - 75 -> 38 \(-37\) -> 60 \(\+22\)/)
  assert.match(materialCellTrendRow('sand', { back: 38, prev: 60, cur: 90 }), /^the sand collected cell trend \(v0\.976\.281\): the sand dig weather's own swell ran two steps deep - 38 -> 60 \(\+22\) -> 90 \(\+30\)/)
  assert.match(materialCellTrendRow('sand', { back: 60, prev: 90, cur: 102 }), /^the sand collected cell trend \(v0\.976\.281\): the sand dig weather's own swell ran two steps deep - 60 -> 90 \(\+30\) -> 102 \(\+12\)/)
  assert.match(materialCellTrendRow('sand', { back: 90, prev: 102, cur: 61 }), /^the sand collected cell trend \(v0\.976\.281\): the sand dig weather's own swing - 90 -> 102 \(\+12\) -> 61 \(-41\)/)
  assert.match(materialCellTrendRow('sand', { back: 102, prev: 61, cur: 48 }), /^the sand collected cell trend \(v0\.976\.281\): the sand dig weather's own fade ran two steps deep - 102 -> 61 \(-41\) -> 48 \(-13\)/)
  assert.match(materialCellTrendRow('sand', { back: 61, prev: 48, cur: 11 }), /^the sand collected cell trend \(v0\.976\.281\): the sand dig weather's own fade ran two steps deep - 61 -> 48 \(-13\) -> 11 \(-37\)/)
  // every row opens the same head the family holds
  for (const w of [[75, 38, 60], [38, 60, 90], [60, 90, 102], [90, 102, 61], [102, 61, 48], [61, 48, 11]]) {
    assert.match(materialCellTrendRow('sand', { back: w[0], prev: w[1], cur: w[2] }), HEAD)
  }
  // the tail co-existence - the .280 word's own sum seat named first
  // (the narrow-lane caution: the seats never merge)
  const row = materialCellTrendRow('sand', { back: 75, prev: 38, cur: 60 })
  assert.match(row, /the final collected trend's row keeps the report's own gathered-mass seat \(the \.280 word - the lines' own sum the MULTI-PRINT law rides, the whole report's own mass never the single cell\)/)
  assert.match(row, /the materials dump word keeps the byName JSON's own stockpile seat \(the \.248 word/)
  assert.match(row, /the sweep collected lane keeps the smelt sweep's own verdict seat \(the \.232 word/)
  assert.match(row, /the counters banked\/smelted rows keep the counters line's own cells \(the \.276\/\.269 words\)/)
  assert.match(row, /co-existence by seat never by duplication\)$/)
})

test('the REAL gravel arc - the held law\'s own honest silence twice, the zero got the lawful ride', () => {
  // W1-W4 speak (fade/fade/swing/swell)
  assert.match(materialCellTrendRow('gravel', { back: 12, prev: 7, cur: 4 }), /own fade ran two steps deep - 12 -> 7 \(-5\) -> 4 \(-3\)/)
  // W2 the zero-got face rides - the lawful zero the F481 face holds
  assert.match(materialCellTrendRow('gravel', { back: 7, prev: 4, cur: 0 }), /own fade ran two steps deep - 7 -> 4 \(-3\) -> 0 \(-4\)/)
  assert.match(materialCellTrendRow('gravel', { back: 4, prev: 0, cur: 6 }), /own swing - 4 -> 0 \(-4\) -> 6 \(\+6\)/)
  assert.match(materialCellTrendRow('gravel', { back: 0, prev: 6, cur: 9 }), /own swell ran two steps deep - 0 -> 6 \(\+6\) -> 9 \(\+3\)/)
  // W5 and W6 the held step prices no direction - the honest silence
  // (the family's own held law the REAL faces speak)
  assert.equal(materialCellTrendRow('gravel', { back: 6, prev: 9, cur: 9 }), null)
  assert.equal(materialCellTrendRow('gravel', { back: 9, prev: 9, cur: 6 }), null)
  // the three-face zero cell - the family's own shape keeps the silence
  assert.equal(materialCellTrendRow('gravel', { back: 0, prev: 0, cur: 0 }), null)
  // the invalid name - the null
  assert.equal(materialCellTrendRow('Sand', { back: 1, prev: 2, cur: 3 }), null)
  assert.equal(materialCellTrendRow(null, { back: 1, prev: 2, cur: 3 }), null)
  // the fence fails - the null
  assert.equal(materialCellTrendRow('sand', null), null)
  assert.equal(materialCellTrendRow('sand', { back: -1, prev: 2, cur: 3 }), null)
  // the synthetic swell byte-exact - the dirt hand's own surge
  assert.match(materialCellTrendRow('dirt', { back: 100, prev: 200, cur: 300 }), /^the dirt collected cell trend \(v0\.976\.281\): the dirt dig weather's own swell ran two steps deep - 100 -> 200 \(\+100\) -> 300 \(\+100\)/)
})
// the seats never merge - the .280 word keeps the lines' own sum (the
// report's whole gathered mass), the materials dump row and the plan
// progress row and the sweep collected row and the counters
// banked/smelted rows keep their lanes, the single material's own
// cell row alone rides here.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.
