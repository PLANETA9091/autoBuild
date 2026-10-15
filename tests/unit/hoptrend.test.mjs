import { test } from 'node:test'
import assert from 'node:assert/strict'
import { hopTrendRow, hopTrendConsistent } from '../../src/lib/hoptrend.mjs'
import { decideWeather } from '../../src/lib/decideweather.mjs'

test("the hop lane's own trend (v0.976.102) - the starvation's hop lane's trend seat, the fence, the word", () => {
  // THE WORD BORN SPEAKING TWENTY-TWO CHAINS DEEP, NO HONEST SILENCE
  // BESIDE - the fullest-window birth the family holds (the walk-fail's
  // own full-spectrum v0.976.97 the precedent). THE FIELD'S OWN SWINGS
  // byte-exact: the FACE 350 CHAIN the birth ride (348 rode 6, 349 rode
  // 5, 350 rode 12), the FACE 365 CHAIN the exact trade back, THE FACE
  // 368 CHAIN THE FIELD'S OWN HIGHEST FACE (366 rode 4, 367 rode 2,
  // 368 rode 62 - the spike's own 62), the FACE 369 CHAIN the payback,
  // the FACE 370 CHAIN the landing (62 rode in, 6 rode out, 9 the
  // landing's own step)
  const TAIL = "(the grand total's own seat prices the three lanes' own sum, the lane seat's own word prices which lane's own decide-timeouts own the sky within one face, the grand total's own mix prices the majority's own lane within one face, the walk-fail's own lane never joins - a different lane, a different book, the bank decide's own lane never joins either - the cells never merge, this word prices the hop lane's own decide-timeout zeros across the faces, co-existence by seat never by duplication)"
  const swing350 = hopTrendRow({ back: { zeros: 6 }, prev: { zeros: 5 }, cur: { zeros: 12 } })
  assert.equal(swing350, "the hop lane's own trend (v0.976.102): the hop lane's own swing - 6 -> 5 (-1) -> 12 (+7) - the rise and the fall traded seats between the hops " + TAIL)
  const swing365 = hopTrendRow({ back: { zeros: 17 }, prev: { zeros: 8 }, cur: { zeros: 17 } })
  assert.equal(swing365, "the hop lane's own trend (v0.976.102): the hop lane's own swing - 17 -> 8 (-9) -> 17 (+9) - the rise and the fall traded seats between the hops " + TAIL)
  const swing368 = hopTrendRow({ back: { zeros: 4 }, prev: { zeros: 2 }, cur: { zeros: 62 } })
  assert.equal(swing368, "the hop lane's own trend (v0.976.102): the hop lane's own swing - 4 -> 2 (-2) -> 62 (+60) - the rise and the fall traded seats between the hops " + TAIL)
  const swing369 = hopTrendRow({ back: { zeros: 2 }, prev: { zeros: 62 }, cur: { zeros: 6 } })
  assert.equal(swing369, "the hop lane's own trend (v0.976.102): the hop lane's own swing - 2 -> 62 (+60) -> 6 (-56) - the rise and the fall traded seats between the hops " + TAIL)
  const swing370 = hopTrendRow({ back: { zeros: 62 }, prev: { zeros: 6 }, cur: { zeros: 9 } })
  assert.equal(swing370, "the hop lane's own trend (v0.976.102): the hop lane's own swing - 62 -> 6 (-56) -> 9 (+3) - the rise and the fall traded seats between the hops " + TAIL)
  // THE FIELD'S OWN SWELLS byte-exact - the lane's own builds, the
  // window's two rides (the FACE 351 CHAIN 5 -> 12 (+7) -> 18 (+6),
  // the FACE 371 CHAIN the refill's own build 6 -> 9 (+3) -> 23 (+14)
  // - the latest chain the word's own live window rides FACE 372:
  // 9 -> 23 -> ?)
  const swell351 = hopTrendRow({ back: { zeros: 5 }, prev: { zeros: 12 }, cur: { zeros: 18 } })
  assert.equal(swell351, "the hop lane's own trend (v0.976.102): the hop zeros' rise ran two steps deep - 5 -> 12 (+7) -> 18 (+6) - the hop lane's own swell " + TAIL)
  const swell371 = hopTrendRow({ back: { zeros: 6 }, prev: { zeros: 9 }, cur: { zeros: 23 } })
  assert.equal(swell371, "the hop lane's own trend (v0.976.102): the hop zeros' rise ran two steps deep - 6 -> 9 (+3) -> 23 (+14) - the hop lane's own swell " + TAIL)
  // THE FIELD'S OWN FADES byte-exact - the lane's own drain (the
  // FACE 353 CHAIN 18 -> 9 (-9) -> 8 (-1)), the drought's own floor
  // (the FACE 359 CHAIN 7 -> 3 (-4) -> 0 (-3) - the lane's own
  // zero face, the only one in the priced window), the deep slide
  // (the FACE 367 CHAIN 17 -> 4 (-13) -> 2 (-2))
  const fade353 = hopTrendRow({ back: { zeros: 18 }, prev: { zeros: 9 }, cur: { zeros: 8 } })
  assert.equal(fade353, "the hop lane's own trend (v0.976.102): the hop zeros' fall ran two steps deep - 18 -> 9 (-9) -> 8 (-1) - the hop lane's own fade " + TAIL)
  const fade359 = hopTrendRow({ back: { zeros: 7 }, prev: { zeros: 3 }, cur: { zeros: 0 } })
  assert.equal(fade359, "the hop lane's own trend (v0.976.102): the hop zeros' fall ran two steps deep - 7 -> 3 (-4) -> 0 (-3) - the hop lane's own fade " + TAIL)
  const fade367 = hopTrendRow({ back: { zeros: 17 }, prev: { zeros: 4 }, cur: { zeros: 2 } })
  assert.equal(fade367, "the hop lane's own trend (v0.976.102): the hop zeros' fall ran two steps deep - 17 -> 4 (-13) -> 2 (-2) - the hop lane's own fade " + TAIL)
  // THE DROUGHT'S OWN EXIT byte-exact - the FACE 360 CHAIN the
  // storm's own refill 3 -> 0 (-3) -> 21 (+21) - the zero face the
  // count's own floor rode lawful, the exit the swing's own voice
  const swing360 = hopTrendRow({ back: { zeros: 3 }, prev: { zeros: 0 }, cur: { zeros: 21 } })
  assert.equal(swing360, "the hop lane's own trend (v0.976.102): the hop lane's own swing - 3 -> 0 (-3) -> 21 (+21) - the rise and the fall traded seats between the hops " + TAIL)
  // THE HONEST SILENCES - the law's own shapes the priced window
  // never rode (the lane never held a step in twenty-four faces -
  // the no-silence birth), the shapes stay priced: the held first
  // step, the held second step, the clean trio, the held both steps
  assert.equal(hopTrendRow({ back: { zeros: 6 }, prev: { zeros: 6 }, cur: { zeros: 3 } }), null)
  assert.equal(hopTrendRow({ back: { zeros: 5 }, prev: { zeros: 9 }, cur: { zeros: 9 } }), null)
  assert.equal(hopTrendRow({ back: { zeros: 0 }, prev: { zeros: 0 }, cur: { zeros: 0 } }), null)
  assert.equal(hopTrendRow({ back: { zeros: 7 }, prev: { zeros: 7 }, cur: { zeros: 7 } }), null)
  // THE BYTE-PIN BATTERY - the trend row never speaks the shape's
  // own verdict words (no return, no repeat, no stay, no run) nor
  // the seats' own verdict word (no owns) nor the dynasty's own
  // (no dynasty, no turn) - across every branch
  for (const row of [swing350, swing365, swing368, swing369, swing370, swing360, swell351, swell371, fade353, fade359, fade367]) {
    assert.ok(!row.includes('return'))
    assert.ok(!row.includes('repeat'))
    assert.ok(!row.includes('stay'))
    assert.ok(!row.includes('run '))
    assert.ok(!row.includes('owns '))
    assert.ok(!row.includes('dynasty'))
    assert.ok(!row.includes('turn'))
    assert.ok(row.includes('co-existence by seat never by duplication'))
  }
  // THE FENCE BATTERY - a fold that cannot prove itself prices
  // nothing (the fence law: the word never rides a lie); the ZERO
  // count is lawful (the FACE 359 drought rides a lawful count)
  assert.equal(hopTrendRow(null), null)
  assert.equal(hopTrendRow(undefined), null)
  assert.equal(hopTrendRow('zeros'), null)
  assert.equal(hopTrendRow([1, 2, 3]), null)
  assert.equal(hopTrendRow({ back: { zeros: 1.5 }, prev: { zeros: 0 }, cur: { zeros: 0 } }), null)
  assert.equal(hopTrendRow({ back: { zeros: -1 }, prev: { zeros: 0 }, cur: { zeros: 0 } }), null)
  assert.equal(hopTrendRow({ back: { zeros: '2' }, prev: { zeros: 0 }, cur: { zeros: 0 } }), null)
  assert.equal(hopTrendRow({ back: { zeros: 2 }, prev: null, cur: { zeros: 0 } }), null)
  assert.equal(hopTrendRow({ back: { zeros: 2 }, prev: { ghost: 2 }, cur: { zeros: 0 } }), null)
  assert.equal(hopTrendRow({ back: { zeros: 2 }, prev: { zeros: 0 }, cur: { hop: 0 } }), null)
  assert.equal(hopTrendConsistent({ back: { zeros: 0 }, prev: { zeros: 0 }, cur: { zeros: 0 } }), true)
  // THE ONE-PARSER RIDE through the weather's own images - the SAME
  // cell the grand total's hop leg holds (the decide weather's own
  // hop lane): the hop zero's own why classes - the decide-timeout
  // zeros ride the count, the delivery's own skins never join (the
  // hop census's own whole-zero count is a different book - the
  // nothing-to-deposit zero never prices the starve's own sky), the
  // drought face the zero rides lawful
  const anchor = (ts) => `F1 [main] tick: heartbeats b] n=1 ts=${ts}s rss=900M late=10ms mainLate=5ms`
  const mem = ' mem: heap=800M/2000M old=100M ext=50M ab=10M rss=900M cols=20 ents=30 evicted=0 path=1a/0q (max 8) stale=0'
  const hopDecide = (bot) => `${bot} [${bot}] hop: chest at [-143,68,411] d=23 zero: chest unreachable (Took to long to decide path to goal!)`
  const hopDeposit = (bot) => `${bot} [${bot}] hop: chest at [-143,68,411] d=23 zero: nothing to deposit`
  const curLines = [anchor(60), mem, hopDecide('F12'), hopDecide('F8'), hopDeposit('F5')]
  const prevLines = [anchor(60), mem, hopDecide('F2')]
  const backLines = [anchor(60), mem]
  const ride = hopTrendRow({
    back: { zeros: decideWeather(backLines).hop.zeros },
    prev: { zeros: decideWeather(prevLines).hop.zeros },
    cur: { zeros: decideWeather(curLines).hop.zeros }
  })
  assert.equal(ride, "the hop lane's own trend (v0.976.102): the hop zeros' rise ran two steps deep - 0 -> 1 (+1) -> 2 (+1) - the hop lane's own swell " + TAIL)
  // the fold's own FACE 360 exit-side ride through the weather's own
  // images (the drought's own face the zero rode lawful, the exit the
  // swing's own voice - the delivery's own skin beside the starve's
  // own zero, the one count holds the decide-timeout zeros alone)
  const exit = hopTrendRow({
    back: { zeros: decideWeather([anchor(60), mem, hopDecide('F9'), hopDecide('F6'), hopDecide('F3')]).hop.zeros },
    prev: { zeros: decideWeather([anchor(60), mem]).hop.zeros },
    cur: { zeros: decideWeather([anchor(60), mem, hopDeposit('F1'), hopDecide('F12'), hopDecide('F8'), hopDecide('F6'), hopDecide('F3'), hopDeposit('F4')]).hop.zeros }
  })
  assert.equal(exit, "the hop lane's own trend (v0.976.102): the hop lane's own swing - 3 -> 0 (-3) -> 4 (+4) - the rise and the fall traded seats between the hops " + TAIL)
})
