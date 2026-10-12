// THE RELOG'S OWN CLOCK - the relogclock tests (v0.966.0).
//
// The throne's third lane's own WHEN (the shared lattice's fourth
// book): the churn lane's WHEN rides the arm clock (v0.965.0), the
// freeze lane's WHEN rides the standdown's clock (v0.921.0) - the
// relog lane's own WHEN never rode a seat. The verbatim lines below
// are SYNTHETIC, built from the emitter's own templates byte for byte
// (the v0.875.0 precedent: pre-field tests pin the shape, the field
// face rides the next fire's artifact read). Both tree eras ride the
// grammar (the census's own law - the era never folds).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { frozenCensus } from '../../src/lib/frozencensus.mjs'
import { relogClockBook, relogClockConsistent, relogClockVerdict, relogClockRow } from '../../src/lib/relogclock.mjs'

// the current-era relog line (the gate tail rides - the emitter's own
// template byte for byte)
const relog = (bot, streak, verdicts) =>
  `${bot} [${bot}] water: frozen client relog (#${streak} consecutive) (frozen while head-wet (${verdicts} verdicts) - the drowning clock owns this client) - ending the session, the reconnect lane rebuilds the physics; the drowning sentry holds non-critical pages 10s (the frozen-return gate) - o2=7 health=20 window=wet-critical fast`

// the legacy-era relog line (the pre-gate shape - both eras parse)
const relogLegacy = (bot, verdicts) =>
  `${bot} [${bot}] water: frozen client relog (${verdicts} consecutive frozen verdicts) - ending the session, the reconnect lane rebuilds the physics`

// the heartbeat anchor - the pulse rail's own line (the truncated skin
// rides the same grammar the opendeaf tests pin; the relog's clock
// brackets against these)
const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=300M late=5ms`

// the late face: 4 relogs (1 early tight pair + 3 late tight pairs),
// clockEnd 360 / thirdS 120 - LATE dominance (3 of 4), zero wide,
// 7 anchors.
const CLOCK_LATE = [
  hb(1, 100),
  relog('F2', 1, 3), // early: lo=100 hi=130 mid=115 (span 30)
  hb(2, 130),
  hb(3, 250), // consecutive anchors - no relog rides the gap
  relog('F3', 2, 3), // late: lo=250 hi=260 mid=255
  hb(4, 260),
  relog('F4', 3, 4), // late: 265
  hb(5, 270),
  relog('F5', 1, 2), // late: 275
  hb(6, 280),
  hb(7, 360) // the clock's own end
]

// the mid face: 2 mid of 3 (the 2:1 law seats MID)
const CLOCK_MID = [
  hb(1, 130),
  relog('F2', 1, 3), // mid: lo=130 hi=170 mid=150
  hb(2, 170),
  hb(3, 200),
  relog('F3', 2, 3), // mid: lo=200 hi=240 mid=220
  hb(4, 240),
  hb(5, 340),
  relog('F1', 4, 5), // late: lo=340 hi=360 mid=350
  hb(6, 360)
]

// the early face: 2 early of 3 (the legacy era rides one seat - the
// era never folds)
const CLOCK_EARLY = [
  hb(1, 20),
  relog('F1', 1, 2), // early: lo=20 hi=60 mid=40
  hb(2, 60),
  hb(3, 90),
  relogLegacy('F2', 2), // early: lo=90 hi=110 mid=100 (the legacy era)
  hb(4, 110),
  hb(5, 200),
  relog('F3', 2, 3), // late: lo=200 hi=320 mid=260
  hb(6, 320),
  hb(7, 360)
]

// the mixed face: early + mid + late (n=3, no dominance) - the wide
// bracket rides (span 140 > thirdS 120)
const CLOCK_MIXED = [
  hb(1, 20),
  relog('F1', 1, 2), // early: lo=20 hi=60 mid=40 (span 40)
  hb(2, 60),
  relog('F2', 1, 2), // mid: lo=60 hi=200 mid=130 (span 140 - WIDE)
  hb(3, 200),
  hb(4, 280),
  relog('F3', 2, 3), // late: lo=280 hi=320 mid=300 (span 40)
  hb(5, 320),
  hb(6, 360) // the clock's own end
]

// the rail-less face: the family rides but no anchor ever printed -
// every seat unplaced (the rail's own honesty)
const CLOCK_RAILLESS = [
  relog('F2', 1, 3),
  relog('F3', 2, 3)
]

test('the clock cells - the one-walk law, the late face byte-exact', () => {
  const census = frozenCensus(CLOCK_LATE)
  const c = relogClockBook(census, CLOCK_LATE)
  assert.ok(c, 'the book folded')
  assert.equal(c.n, 4)
  // the fence's two ways: the family count is the census's own
  assert.equal(c.n, census.relogs.n, 'the clock\'s family count is the census\'s own')
  assert.deepEqual(c, {
    anchors: 7,
    clockEnd: 360,
    thirdS: 120,
    n: 4,
    byPhase: { early: 1, mid: 0, late: 3, unplaced: 0 },
    wide: 0
  })
  // the verdict rides the 2:1 dominance law
  assert.deepEqual(relogClockVerdict(c), {
    verdict: 'late', n: 4, byPhase: { early: 1, mid: 0, late: 3, unplaced: 0 }, anchors: 7, wide: 0, thirdS: 120
  })
})

test('the three seats - the 2:1 law seats, both eras ride one court', () => {
  const mid = relogClockVerdict(relogClockBook(frozenCensus(CLOCK_MID), CLOCK_MID))
  assert.equal(mid.verdict, 'mid')
  assert.deepEqual(mid.byPhase, { early: 0, mid: 2, late: 1, unplaced: 0 })
  const early = relogClockVerdict(relogClockBook(frozenCensus(CLOCK_EARLY), CLOCK_EARLY))
  assert.equal(early.verdict, 'early')
  assert.deepEqual(early.byPhase, { early: 2, mid: 0, late: 1, unplaced: 0 })
  assert.equal(early.n, 3, 'the legacy era rides the same family (the era never folds)')
})

test('the honest silence - the mixed spread reads no seat, the wide bracket rides', () => {
  const census = frozenCensus(CLOCK_MIXED)
  const c = relogClockBook(census, CLOCK_MIXED)
  assert.ok(c, 'the mixed face folds')
  assert.deepEqual(c.byPhase, { early: 1, mid: 1, late: 1, unplaced: 0 })
  assert.equal(c.wide, 1, 'the span 140 bracket counts wide (the sparse-anchor honesty)')
  assert.equal(relogClockVerdict(c), null, '1+1+1 of 3 - no dominance, the storm has no seat')
})

test('the rail-less face - every seat unplaced, the clock null (the rail\'s own honesty)', () => {
  const c = relogClockBook(frozenCensus(CLOCK_RAILLESS), CLOCK_RAILLESS)
  assert.ok(c, 'the family folds without a rail')
  assert.deepEqual(c, {
    anchors: 0,
    clockEnd: null,
    thirdS: null,
    n: 2,
    byPhase: { early: 0, mid: 0, late: 0, unplaced: 2 },
    wide: 0
  })
  assert.equal(relogClockConsistent(c), true, 'the rail-less book is honest, not junk')
  assert.equal(relogClockVerdict(c), null, 'no rail - no thirds, no seat')
})

test('the fence battery - a forked or junky read prices nothing', () => {
  const census = frozenCensus(CLOCK_LATE)
  assert.equal(relogClockBook(null, CLOCK_LATE), null, 'no census - no book')
  assert.equal(relogClockBook(census, 'a raw blob'), null, 'a raw blob reads null - the caller splits first')
  assert.equal(relogClockBook(census, []), null, 'an empty walk disagrees with the census - the fence prices nothing')
  assert.equal(relogClockBook({}, CLOCK_LATE), null, 'a census without the relog family prices nothing')
  assert.equal(relogClockBook({ relogs: { n: 99 } }, CLOCK_LATE), null, 'a forked count prices nothing (the o2arm deaths-fence law)')
  assert.equal(relogClockBook({ relogs: { n: 0 } }, CLOCK_LATE), null, 'an empty family rides the silence')
  assert.equal(relogClockBook({ relogs: 'junk' }, CLOCK_LATE), null, 'a junky family cell prices nothing')
  // non-string lines are skipped; the index still rides (the position is
  // the truth) - the family still agrees with the census
  const dirty = [null, 42, hb(1, 100), undefined, relog('F2', 1, 3), hb(2, 360)]
  const dc = frozenCensus(dirty)
  const db = relogClockBook(dc, dirty)
  assert.ok(db, 'the junk skins skip, the honest lines ride')
  assert.equal(db.n, 1)
  assert.equal(db.anchors, 2)
})

test('the fence cells - a book that cannot prove itself prices nothing', () => {
  const good = relogClockBook(frozenCensus(CLOCK_LATE), CLOCK_LATE)
  assert.equal(relogClockConsistent(good), true)
  const lie = (patch) => relogClockConsistent({ ...good, ...patch })
  assert.equal(lie({ n: 5 }), false, 'the phases must sum to the family')
  assert.equal(lie({ n: 0 }), false, 'a zero family prices nothing')
  assert.equal(lie({ n: -1 }), false, 'a negative family prices nothing')
  assert.equal(lie({ byPhase: { early: 9, mid: 0, late: 3, unplaced: 0 } }), false, 'the phases must sum to the family')
  assert.equal(lie({ wide: 9 }), false, 'the wide rides within the family')
  assert.equal(lie({ wide: -1 }), false, 'a negative wide prices nothing')
  assert.equal(lie({ anchors: -1 }), false, 'a negative rail prices nothing')
  assert.equal(lie({ anchors: 0 }), false, 'a rail-less book must ride every seat unplaced + a null clock')
  assert.equal(lie({ thirdS: 999 }), false, 'the third rides the clock\'s own third')
  assert.equal(lie({ clockEnd: -5 }), false, 'a negative clock prices nothing')
  assert.equal(relogClockVerdict(null), null, 'the verdict reads null on the absent book')
  assert.equal(relogClockVerdict(lie({ n: 5 })), null, 'the verdict reads the fence at its own door')
  assert.equal(relogClockRow(null), null, 'the row reads null on the absent verdict')
})

test('the rows - the three seats byte-exact, the lever\'s own clause', () => {
  const late = relogClockRow(relogClockVerdict(relogClockBook(frozenCensus(CLOCK_LATE), CLOCK_LATE)))
  assert.equal(
    late,
    'the relog\'s own clock (v0.966.0): the frozen relogs rode LATE-dominant (3 of 4; early 1 / mid 0 / late 3 / unplaced 0, 0 wide of 7 anchor(s)) - the closing thirds own the reconnects: the drain\'s late legs drop the sessions - the end-phase\'s own churn tax is the front'
  )
  const mid = relogClockRow(relogClockVerdict(relogClockBook(frozenCensus(CLOCK_MID), CLOCK_MID)))
  assert.equal(
    mid,
    'the relog\'s own clock (v0.966.0): the frozen relogs rode MID-dominant (2 of 3; early 0 / mid 2 / late 1 / unplaced 0, 0 wide of 6 anchor(s)) - the mid-run churn\'s pace prices the reconnects - the reconnect cadence is the front'
  )
  const early = relogClockRow(relogClockVerdict(relogClockBook(frozenCensus(CLOCK_EARLY), CLOCK_EARLY)))
  assert.equal(
    early,
    'the relog\'s own clock (v0.966.0): the frozen relogs rode EARLY-dominant (2 of 3; early 2 / mid 0 / late 1 / unplaced 0, 0 wide of 7 anchor(s)) - the entry window\'s own churn owns the opening: the launch window\'s geometry is the front'
  )
})

test('the row junk battery - the honest nulls', () => {
  assert.equal(relogClockRow(undefined), null, 'junk prints nothing')
  assert.equal(relogClockRow('a string'), null, 'junk prints nothing')
  assert.equal(relogClockRow({ verdict: 'nope', n: 3, byPhase: { early: 1, mid: 1, late: 1, unplaced: 0 }, anchors: 5, wide: 0 }), null, 'a foreign verdict prints nothing')
  assert.equal(relogClockRow({ verdict: 'late', n: 0, byPhase: { early: 0, mid: 0, late: 0, unplaced: 0 }, anchors: 5, wide: 0 }), null, 'a zero family prints nothing')
  assert.equal(relogClockRow({ verdict: 'late', n: 3, byPhase: { early: 1, mid: 1, late: 1, unplaced: 0 }, anchors: -2, wide: 0 }), null, 'a negative rail prints nothing')
  assert.equal(relogClockRow({ verdict: 'mid', n: 3, byPhase: { early: -1, mid: 2, late: 1, unplaced: 0 }, anchors: 5, wide: 0 }), null, 'a negative phase cell prints nothing (the sum is the fence\'s own law, the shape is the row\'s)')
})

test('the decompose WIRING pins - the import band, the print site inside the throne\'s own block, the lib bytes', () => {
  const dec = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(dec.includes("import { relogClockBook, relogClockVerdict, relogClockRow } from '../../src/lib/relogclock.mjs'"), 'the import band grew')
  const throneSite = dec.indexOf('const throne = churnThrone(throneCells)')
  const site = dec.indexOf('const rlc = relogClockBook(fcThrone, lines)')
  assert.ok(site > 0, 'the print site rides')
  assert.ok(throneSite > 0 && site > throneSite, 'the relog clock prints inside the throne\'s own block (after the join)')
  const rlcv = dec.indexOf('const rlcv = relogClockVerdict(rlc)')
  assert.ok(rlcv > 0 && rlcv > site, 'the verdict rides the book\'s own block (after it)')
  assert.ok(dec.includes('if (rlcv) console.log(`  ${relogClockRow(rlcv)}`)'), 'the row prints silent-on-no-dominance')
  const lib = readFileSync(new URL('../../src/lib/relogclock.mjs', import.meta.url), 'utf8')
  for (const byte of ['relogClockBook', 'relogClockConsistent', 'relogClockVerdict', 'relogClockRow', "from './phasebook.mjs'", "from './opendeaf.mjs'", "from './frozencensus.mjs'", 'parseFrozenRelog', 'parsePulseAnchor', 'phaseBookOf']) {
    assert.ok(lib.includes(byte), `the lib byte ${byte} rides`)
  }
})
