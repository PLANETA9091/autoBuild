/**
 * torchedtrend.test.mjs - (v0.976.261) THE TORCHED CELL'S OWN NIGHT-LIGHT
 * MASS - the counters line's own torched cell the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes):
 *   F479 (run 39178460638): '... planted=11 torched=1 fights=3 kills=2 ...'
 *   F480 (run 39184044983): '... planted=11 torched=19 fights=2 kills=1 ...'
 * the nineteen-fold swell the night defense's own light painted (1 -> 19)
 * and no row read - the word takes the seat, the pins ride the faces
 * byte-exact. The two-back face (F478) left no cached log in this sandbox
 * - the three-face W-window's row read rides the next fire's cached faces
 * (the carrier's own null pass prices honestly today; the census==raw
 * fieldproof prices 2/2 faces now).
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { torchedCensus, torchedConsistent, torchedTrendRow } from '../../src/lib/torchedtrend.mjs'

// the REAL face lines byte-exact (the counters lines' own bodies)
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'

test('the REAL faces byte-exact - the census rides both counters lines', () => {
  const c479 = torchedCensus([F479])
  assert.deepEqual(c479, { planted: 11, torched: 1 })
  const c480 = torchedCensus([F480])
  assert.deepEqual(c480, { planted: 11, torched: 19 })
  // LAST-PRINT-WINS: the counters line speaks once per face, the last print wins
  const both = torchedCensus([F479, F480])
  assert.deepEqual(both, { planted: 11, torched: 19 })
})

test('the junk faces - the lawful zeros and the null pass', () => {
  assert.deepEqual(torchedCensus([]), { planted: 0, torched: 0 })
  assert.deepEqual(torchedCensus(['junk', 'not a counters line']), { planted: 0, torched: 0 })
  assert.equal(torchedCensus(null), null)
  assert.equal(torchedCensus('junk'), null)
  assert.equal(torchedCensus(undefined), null)
  assert.deepEqual(torchedCensus([null, undefined, 42, F480]), { planted: 11, torched: 19 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  const bare = 'torched=19'
  assert.deepEqual(torchedCensus([bare]), { planted: 0, torched: 0 }) // the frame carries the seat, the bare cell never rides
  assert.deepEqual(torchedCensus(['planted=11 torched=19 fights=2']), { planted: 0, torched: 0 }) // the 'bots=' head missing
  assert.deepEqual(torchedCensus(['bots=19 spawned=19 planted=11 torched=19 fights=2']), { planted: 0, torched: 0 }) // the drifted template (the middle cells missing)
  assert.deepEqual(torchedCensus([F480.replace(' torched=19', '  torched=19')]), { planted: 0, torched: 0 }) // the pretty spacing
  assert.deepEqual(torchedCensus([F480.replace('planted=11 torched=19 fights=2', 'torched=19 planted=11 fights=2')]), { planted: 0, torched: 0 }) // the altered order
  assert.deepEqual(torchedCensus([F480.replace('torched=19', 'torched=019')]), { planted: 0, torched: 0 }) // the leading zero (the priced cell)
  assert.deepEqual(torchedCensus([F480.replace('torched=19', 'torched=-3')]), { planted: 0, torched: 0 }) // the negative count
  assert.deepEqual(torchedCensus([F480.replace('torched=19', 'torched=')]), { planted: 0, torched: 0 }) // the truncated cell
  assert.deepEqual(torchedCensus([F480.slice(0, F480.indexOf(' fights=2'))]), { planted: 0, torched: 0 }) // the truncated tail - the fights cell missing, the window never closes
  assert.deepEqual(torchedCensus([F480.replace('fights=2 kills', 'fights=02 kills')]), { planted: 0, torched: 0 }) // the leading zero on the tail cell - the boundary the .263 claims seat ships the torched grammar adopts
})

test('the fence - every branch', () => {
  const f = { planted: 11, torched: 1 }
  assert.equal(torchedConsistent({ back: f, prev: f, cur: f }), true)
  assert.equal(torchedConsistent(null), false)
  assert.equal(torchedConsistent('junk'), false)
  assert.equal(torchedConsistent([f, f, f]), false)
  assert.equal(torchedConsistent({ back: f, prev: f }), false)
  assert.equal(torchedConsistent({ back: { planted: 11 }, prev: f, cur: f }), false)
  assert.equal(torchedConsistent({ back: { planted: 11, torched: -1 }, prev: f, cur: f }), false)
  assert.equal(torchedConsistent({ back: { planted: 11, torched: 1.5 }, prev: f, cur: f }), false)
  assert.equal(torchedConsistent({ back: { planted: 0, torched: 0 }, prev: { planted: 0, torched: 0 }, cur: { planted: 0, torched: 0 } }), true) // the zeros lawful
  assert.equal(torchedConsistent({ back: f, prev: f, cur: { planted: 11, torched: 19, extra: 'ok' } }), true) // extra keys never rejected
})

test('the shapes byte-exact - the fade, the swell, the swing, the honest silences', () => {
  // the swell two steps deep
  assert.equal(
    torchedTrendRow({ back: { planted: 4, torched: 1 }, prev: { planted: 11, torched: 5 }, cur: { planted: 11, torched: 19 } }),
    "the torched trend (v0.976.261): the night light's own swell ran two steps deep - 1 -> 5 (+4) -> 19 (+14) - the torched mass's own swell, the planted rode 4 -> 11 -> 11 (the counters line's own other cells keep their seats - the fights cell rides the fight ledger's own episode lane, the pounce book's own probe lane, the finalbody census's own body cells - the torched mass's row alone, co-existence by seat never by duplication)"
  )
  // the fade two steps deep
  assert.equal(
    torchedTrendRow({ back: { planted: 9, torched: 19 }, prev: { planted: 9, torched: 5 }, cur: { planted: 9, torched: 1 } }),
    "the torched trend (v0.976.261): the night light's own fade ran two steps deep - 19 -> 5 (-14) -> 1 (-4) - the torched mass's own fade, the planted rode 9 -> 9 -> 9 (the counters line's own other cells keep their seats - the fights cell rides the fight ledger's own episode lane, the pounce book's own probe lane, the finalbody census's own body cells - the torched mass's row alone, co-existence by seat never by duplication)"
  )
  // the swing
  assert.equal(
    torchedTrendRow({ back: { planted: 2, torched: 1 }, prev: { planted: 2, torched: 9 }, cur: { planted: 2, torched: 3 } }),
    "the torched trend (v0.976.261): the night light's own swing - 1 -> 9 (+8) -> 3 (-6) - the fade and the swell traded seats between the faces, the planted rode 2 -> 2 -> 2 (the counters line's own other cells keep their seats - the fights cell rides the fight ledger's own episode lane, the pounce book's own probe lane, the finalbody census's own body cells - the torched mass's row alone, co-existence by seat never by duplication)"
  )
  // a held step - the honest silence
  assert.equal(torchedTrendRow({ back: { planted: 1, torched: 5 }, prev: { planted: 1, torched: 5 }, cur: { planted: 1, torched: 9 } }), null)
  assert.equal(torchedTrendRow({ back: { planted: 1, torched: 5 }, prev: { planted: 1, torched: 9 }, cur: { planted: 1, torched: 9 } }), null)
  // the three-face zero - the lawful silence (the night never armed)
  assert.equal(torchedTrendRow({ back: { planted: 0, torched: 0 }, prev: { planted: 0, torched: 0 }, cur: { planted: 0, torched: 0 } }), null)
  // the fence failing - the null pass
  assert.equal(torchedTrendRow(null), null)
  assert.equal(torchedTrendRow({ back: { planted: -1, torched: 0 }, prev: { planted: 0, torched: 0 }, cur: { planted: 0, torched: 0 } }), null)
})

test('the pair\'s own real arc - F479 1 -> F480 19 prices the up-step', () => {
  // the two-face pair the sandbox holds: the cur step (+18) is real;
  // the three-face window waits for the next fire's cached two-back face
  const c479 = torchedCensus([F479])
  const c480 = torchedCensus([F480])
  assert.equal(c480.torched - c479.torched, 18)
  assert.equal(c480.torched > c479.torched, true) // the night light armed
  // the window the pair forms honestly: back=the F479 read twice is NOT
  // lawful field data - the row read waits; the census==raw is today's proof
  assert.deepEqual(torchedCensus([F479]), { planted: 11, torched: 1 })
  assert.deepEqual(torchedCensus([F480]), { planted: 11, torched: 19 })
})
