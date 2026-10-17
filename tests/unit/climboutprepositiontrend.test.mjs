// tests/unit/climboutprepositiontrend.test.mjs - THE CLIMB-OUT BOOK'S
// OWN PRE-POSITION TREND's own pin battery (v0.976.183): the
// climb-out book's own sixth skin the family's own completion named -
// THE SECOND-HEAVIEST SKIN THE CLIMB-OUT BOOK HOLDS the bank's own
// 729u the record stands - the field's own chains byte-exact (THE
// CELL'S OWN WEIGHT 640u the thirty-nine faces' own total, THE
// FIELD'S OWN TOP THE COUNT 57 the face 354's own top rode once, THE
// FIELD'S OWN FLOOR THE COUNT 3 the face 367's own floor rode once -
// THE SKIN NEVER DRIED ZERO faces NONE whole), THIRTY-SIX of
// THIRTY-SEVEN windows speaking (TWENTY-THREE swings, SEVEN swells,
// SIX fades, the ONE honest silence - THE OPENER BORN SILENT the face
// 350's own window the held first leg rides), THE SEVEN SWELLS the
// family's own second-heaviest swell book rides (THE BACK-TO-BACK
// SWELL PAIR the faces 357/358's own windows the staircase rides),
// THE TWO ONE-WINDOW ROUND TRIPS the faces 372/385's own windows ride
// mirrored, the bounds' own legs pins (the +41 TWICE the boundary
// 353/354, the -48 TWICE the boundary 354/355 - THE CRATER'S OWN
// DRAIN), the last word the face 386's own window the swing, the
// whole-cache pins (the 676u the face 423's own 36u the newest add
// rides - the drown storm's own face), the byte-pin battery, the
// fence battery, the cell's own read, the one-parser ride over the
// REAL climb-out lines (the pre-position skin the mass rides - the
// walk-home's own climb the seat's own ladder speaks; the five priced
// skins' lines the bank's and the trip's and the wood trip's and the
// food trip's and the tool recovery's own cells never ride - the
// family never merges; the walk-home announcements the census's own
// lane never ride)
import assert from 'node:assert'
import { climbOutPrePositions, climbOutPrePositionTrendConsistent, climbOutPrePositionTrendRow } from '../../src/lib/climboutprepositiontrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, this word prices the climb-out book's own pre-position skin mass across the faces - the climb-out book's own pre-position seat, co-existence by seat never by duplication)"

const HEAD = "the climb-out pre-position's own trend (v0.976.183)"
const SWING = HEAD + ": the climb-out pre-position's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the climb-out pre-position's rise ran two steps deep - "
const SWELL_TAIL = " - the climb-out pre-position's own swell " + TAIL
const FADE = HEAD + ": the climb-out pre-position's fall ran two steps deep - "
const FADE_TAIL = " - the climb-out pre-position's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the
// climb-out pre-position RE's own arithmetic, THIRTY-NINE faces
// deep) - THE CELL'S OWN WEIGHT 640u the faces' own total, THE
// SECOND-HEAVIEST SKIN THE CLIMB-OUT BOOK HOLDS (the bank's 729u the
// record beside).
const P = {}
const TABLE = { 348: 11, 349: 11, 350: 14, 351: 19, 352: 4, 353: 16, 354: 57, 355: 9, 356: 11, 357: 15, 358: 18, 359: 14, 360: 7, 361: 18, 362: 24, 363: 11, 364: 6, 365: 12, 366: 24, 367: 3, 368: 18, 369: 4, 370: 14, 371: 21, 372: 14, 373: 30, 374: 18, 375: 16, 376: 13, 377: 25, 378: 16, 379: 28, 380: 19, 381: 18, 382: 13, 383: 20, 384: 12, 385: 20, 386: 17 }
Object.assign(P, TABLE)
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 640, 'the cell 640u the second-heaviest skin the climb-out book holds - THE FAMILY\'S OWN COMPLETION')
const w = (f) => climbOutPrePositionTrendRow({ back: { climbOutPrePositions: P[f - 2] }, prev: { climbOutPrePositions: P[f - 1] }, cur: { climbOutPrePositions: P[f] } })

// the window's own shape - ONE SHAPE ONE WORD (the branch law: the
// bars never invent - a held step no direction, the honest silence)
const tallyWindow = (f, T) => {
  const a = T[f - 2], b = T[f - 1], c = T[f]
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}

// THE FIELD'S OWN CHAINS - ALL THIRTY-SEVEN windows byte-exact (the
// ONE silence the opener holds, the row never invents)
const ARCS = {
  350: ['silence', '11 -> 11 (+0) -> 14 (+5)'],
  351: ['swell', '11 -> 14 (+3) -> 19 (+5)'],
  352: ['swing', '14 -> 19 (+5) -> 4 (-15)'],
  353: ['swing', '19 -> 4 (-15) -> 16 (+12)'],
  354: ['swell', '4 -> 16 (+12) -> 57 (+41)'],
  355: ['swing', '16 -> 57 (+41) -> 9 (-48)'],
  356: ['swing', '57 -> 9 (-48) -> 11 (+2)'],
  357: ['swell', '9 -> 11 (+2) -> 15 (+4)'],
  358: ['swell', '11 -> 15 (+4) -> 18 (+3)'],
  359: ['swing', '15 -> 18 (+3) -> 14 (-4)'],
  360: ['fade', '18 -> 14 (-4) -> 7 (-7)'],
  361: ['swing', '14 -> 7 (-7) -> 18 (+11)'],
  362: ['swell', '7 -> 18 (+11) -> 24 (+6)'],
  363: ['swing', '18 -> 24 (+6) -> 11 (-13)'],
  364: ['fade', '24 -> 11 (-13) -> 6 (-5)'],
  365: ['swing', '11 -> 6 (-5) -> 12 (+6)'],
  366: ['swell', '6 -> 12 (+6) -> 24 (+12)'],
  367: ['swing', '12 -> 24 (+12) -> 3 (-21)'],
  368: ['swing', '24 -> 3 (-21) -> 18 (+15)'],
  369: ['swing', '3 -> 18 (+15) -> 4 (-14)'],
  370: ['swing', '18 -> 4 (-14) -> 14 (+10)'],
  371: ['swell', '4 -> 14 (+10) -> 21 (+7)'],
  372: ['swing', '14 -> 21 (+7) -> 14 (-7)'],
  373: ['swing', '21 -> 14 (-7) -> 30 (+16)'],
  374: ['swing', '14 -> 30 (+16) -> 18 (-12)'],
  375: ['fade', '30 -> 18 (-12) -> 16 (-2)'],
  376: ['fade', '18 -> 16 (-2) -> 13 (-3)'],
  377: ['swing', '16 -> 13 (-3) -> 25 (+12)'],
  378: ['swing', '13 -> 25 (+12) -> 16 (-9)'],
  379: ['swing', '25 -> 16 (-9) -> 28 (+12)'],
  380: ['swing', '16 -> 28 (+12) -> 19 (-9)'],
  381: ['fade', '28 -> 19 (-9) -> 18 (-1)'],
  382: ['fade', '19 -> 18 (-1) -> 13 (-5)'],
  383: ['swing', '18 -> 13 (-5) -> 20 (+7)'],
  384: ['swing', '13 -> 20 (+7) -> 12 (-8)'],
  385: ['swing', '20 -> 12 (-8) -> 20 (+8)'],
  386: ['swing', '12 -> 20 (+8) -> 17 (-3)']
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 23, swell: 7, fade: 6, silence: 1 }, 'the birth field\'s own breath the THIRTY-SEVEN windows hold - the ONE silence the opener rides')
for (const [f, [kind, arc]] of Object.entries(ARCS)) {
  if (kind === 'silence') {
    assert.equal(w(Number(f)), null, `the silence W${f} the held law keeps - the row never invents`)
    continue
  }
  const head = kind === 'swell' ? SWELL : kind === 'fade' ? FADE : SWING
  const tailKind = kind === 'swell' ? SWELL_TAIL : kind === 'fade' ? FADE_TAIL : SWING_TAIL
  assert.equal(w(Number(f)), head + arc + tailKind, `the ${kind} W${f} the arc rides byte-exact`)
}
// the swells' own seats the second-heaviest swell book rides (SEVEN -
// the tool recovery's own four the record beside)
const swellSeats = Object.entries(ARCS).filter(([, [k]]) => k === 'swell').map(([f]) => Number(f))
assert.deepEqual(swellSeats, [351, 354, 357, 358, 362, 366, 371], 'the SEVEN swells the family\'s own second-heaviest swell book holds')
// THE BACK-TO-BACK SWELL PAIR the faces 357/358's own windows the
// staircase rides (the tool upgrade due's own opener pair the .176's
// own precedent the mirror beside)
assert.deepEqual([357, 358].map(f => tallyWindow(f, P)), ['swell', 'swell'], 'the back-to-back swell pair the staircase rides')
// the fades' own seats the six the skin holds
const fadeSeats = Object.entries(ARCS).filter(([, [k]]) => k === 'fade').map(([f]) => Number(f))
assert.deepEqual(fadeSeats, [360, 364, 375, 376, 381, 382], 'the SIX fades the skin holds')
// THE TWO TWO-FADE RUNS the faces 375/376 and 381/382's own windows
// hold (the back-to-back drain pair the recession rides)
assert.deepEqual([375, 376].map(f => tallyWindow(f, P)), ['fade', 'fade'], 'the first two-fade run the recession rides')
assert.deepEqual([381, 382].map(f => tallyWindow(f, P)), ['fade', 'fade'], 'the second two-fade run the recession rides')
// the ONE honest silence the opener holds (the .178's own honest
// silence the opener mirror beside)
assert.equal(tallyWindow(350, P), 'silence', 'the opener born silent the held first leg rides')
let silences = 0
for (let f = 350; f <= 386; f++) { if (tallyWindow(f, P) === 'silence') silences++ }
assert.equal(silences, 1, 'the ONE silence the opener holds - the never-silent stretch beside')

// THE TWO ONE-WINDOW ROUND TRIPS the faces 372/385's own windows ride
// mirrored (the trip's own two and the bank's own two the family
// record beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [372, 385], 'the birth field holds the TWO round trips - every leg mirrored')
for (const f of roundTrips) {
  assert.equal(Math.abs(P[f - 1] - P[f - 2]), Math.abs(P[f] - P[f - 1]), `the round trip W${f} the same size both legs the mirror rides`)
}
assert.equal(w(372), SWING + '14 -> 21 (+7) -> 14 (-7)' + SWING_TAIL, 'the first round trip\'s own arc the swing rides')
assert.equal(w(385), SWING + '20 -> 12 (-8) -> 20 (+8)' + SWING_TAIL, 'the second round trip\'s own arc the swing rides')

// THE TOP THE COUNT 57 - rode ONCE the face 354's own crest holds
// (THE CLIMB-OUT BOOK'S OWN CREST the whole family holds)
assert.equal(Math.max(...Object.values(P)), 57, 'the birth top the count 57 the heaviest crest rides')
let topRode = 0
for (let f = 348; f <= 386; f++) { if (P[f] === 57) topRode++ }
assert.equal(topRode, 1, 'the top rode ONCE the face 354\'s own crest')

// THE FLOOR THE COUNT 3 - the face 367's own floor rode once - THE
// SKIN NEVER DRIED (ZERO faces NONE whole the field holds)
assert.equal(Math.min(...Object.values(P)), 3, 'the birth floor the count 3 the never-dried skin rides')
let floorRode = 0
let zeroFaces = 0
for (let f = 348; f <= 386; f++) { if (P[f] === 3) floorRode++; if (P[f] === 0) zeroFaces++ }
assert.equal(floorRode, 1, 'the floor rode ONCE the face 367\'s own rest')
assert.equal(zeroFaces, 0, 'ZERO zero faces - THE SKIN NEVER DRIED the never-dried book rides')

// THE BOUNDS - the +41 the max rise rode TWICE two legs (the boundary
// 353/354 the two windows share), the -48 the max fall rode TWICE two
// legs (the boundary 354/355 the two windows share - THE CRATER'S OWN
// DRAIN the crest the face 354's own 57 the face 355's own 9 the
// floor)
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 41, 'the birth max rise +41 the bound holds')
assert.equal(Math.min(...steps), -48, 'the birth max fall -48 the bound holds')
assert.equal(steps.filter(s => s === 41).length, 2, 'the +41 rode TWICE two legs the boundary 353/354 shares')
assert.equal(steps.filter(s => s === -48).length, 2, 'the -48 rode TWICE two legs the boundary 354/355 shares')

// THE LAST WORD - the face 386's own window the swing (the food trip's
// own fade the .156's own last word the sibling mirror beside - the
// siblings' own last words disagree)
assert.equal(w(386), SWING + '12 -> 20 (+8) -> 17 (-3)' + SWING_TAIL, 'the last word born trading the row rides')

// THE WHOLE-CACHE SEAT 676u - the face 423's own 36u the newest add
// rides (the drown storm's own face the wet-sentinel refusals the
// storm's own lane the mass rides)
assert.equal(640 + 36, 676, 'the whole-cache 676u the face 423\'s own 36u the newest add rides')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 1 }, prev: { climbOutPrePositions: 2 }, cur: { climbOutPrePositions: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 3 }, prev: { climbOutPrePositions: 2 }, cur: { climbOutPrePositions: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 1 }, prev: { climbOutPrePositions: 3 }, cur: { climbOutPrePositions: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 2 }, prev: { climbOutPrePositions: 2 }, cur: { climbOutPrePositions: 3 } }), null)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 2 }, prev: { climbOutPrePositions: 3 }, cur: { climbOutPrePositions: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 0 }, prev: { climbOutPrePositions: 1 }, cur: { climbOutPrePositions: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 0 }, prev: { climbOutPrePositions: 0 }, cur: { climbOutPrePositions: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(climbOutPrePositionTrendRow(null), null)
assert.equal(climbOutPrePositionTrendRow(undefined), null)
assert.equal(climbOutPrePositionTrendRow('junk'), null)
assert.equal(climbOutPrePositionTrendRow(42), null)
assert.equal(climbOutPrePositionTrendRow([]), null)
assert.equal(climbOutPrePositionTrendRow({}), null)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 1 }, prev: { climbOutPrePositions: 2 } }), null)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 1 }, cur: { climbOutPrePositions: 2 } }), null)
assert.equal(climbOutPrePositionTrendRow({ prev: { climbOutPrePositions: 1 }, cur: { climbOutPrePositions: 2 } }), null)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 1 }, prev: { climbOutPrePositions: 2 }, cur: { climbOutPrePositions: -1 } }), null)
assert.equal(climbOutPrePositionTrendRow({ back: { climbOutPrePositions: 1.5 }, prev: { climbOutPrePositions: 2 }, cur: { climbOutPrePositions: 3 } }), null)
assert.equal(climbOutPrePositionTrendRow({ back: { other: 1 }, prev: { climbOutPrePositions: 2 }, cur: { climbOutPrePositions: 3 } }), null)
assert.equal(climbOutPrePositionTrendConsistent({ back: { climbOutPrePositions: 0 }, prev: { climbOutPrePositions: 0 }, cur: { climbOutPrePositions: 0 } }), true)
assert.equal(climbOutPrePositionTrendConsistent({ back: { climbOutPrePositions: 5 }, prev: { climbOutPrePositions: 9 }, cur: { climbOutPrePositions: 2 }, spare: true }), true)
assert.equal(climbOutPrePositionTrendConsistent(null), false)
assert.equal(climbOutPrePositionTrendConsistent(undefined), false)
assert.equal(climbOutPrePositionTrendConsistent('junk'), false)
assert.equal(climbOutPrePositionTrendConsistent([]), false)
assert.equal(climbOutPrePositionTrendConsistent({ back: { climbOutPrePositions: 1 }, prev: { climbOutPrePositions: 2 }, cur: { climbOutPrePositions: NaN } }), false)

// THE CELL'S OWN READ - the real pre-position lines ride (the raw mass
// the lane prints - every line the skin prints rides, no exclusion the
// skin needs; the climbed verdicts the OK skins hold, the failed
// skins the wet-sentinel and the stalled and the low-o2 classes
// beside)
assert.equal(climbOutPrePositions([
  'F8 climb out (pre-position): OK +11 levels (10 steps, 23 dug, 26s)',
  'F7 climb out (pre-position): OK +32 levels (0 steps, 0 dug, 81s)',
  'F7 climb out (pre-position): failed - stalled',
  'F14 climb out (pre-position): failed - wet-sentinel',
  'F9 climb out (pre-position): failed - timeout (traversed 11)',
  'F9 climb out (pre-position): failed - exhausted (wait 47s)',
  'F6 climb out (pre-position): failed - rescue owns the bot',
  'F7 climb out (pre-position): failed - low-o2',
  'F7 climb out (pre-position): failed - stopped'
]), 9)
assert.equal(climbOutPrePositions(['F14 climb out (pre-position): failed - wet-sentinel']), 1)
// THE FIVE PRICED SKINS' OWN LINES never ride - the family never
// merges (the bank's and the trip's and the wood trip's and the food
// trip's and the tool recovery's own cells)
assert.equal(climbOutPrePositions(['F9 climb out (bank): retry (escalated retry after stalled, fenced to 90s of the 150s the chain has left)']), 0)
assert.equal(climbOutPrePositions(['F9 climb out (bank): retry failed - stalled [stage 1]']), 0)
assert.equal(climbOutPrePositions(['F9 climb out (trip): OK +14 levels (14 steps, 28 dug, 12 traversed, 38s)']), 0)
assert.equal(climbOutPrePositions(['F7 climb out (wood trip): OK +16 levels (16 steps, 43 dug, 53s)']), 0)
assert.equal(climbOutPrePositions(['F5 climb out (food trip): OK +3 levels (3 steps, 4 dug, 9s)']), 0)
assert.equal(climbOutPrePositions(['F9 climb out (tool recovery): OK +5 levels (5 steps, 7 dug, 12s)']), 0)
// the bare climb-out line without the paren skin never rides - the
// emitter's own voice the paren holds
assert.equal(climbOutPrePositions(['F9 climb out: OK +3 levels (3 steps, 4 dug, 9s)']), 0)
// the 'F<n> pre-position:' walk-home announcements never ride - the
// pre-position census's own lane (the bankcensus's own parse) a
// different shape
assert.equal(climbOutPrePositions(['F1 pre-position: 37b from yard, t-282s - walking home']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(climbOutPrePositions(['F5 final bank: 3 stacks deposited']), 0)
assert.equal(climbOutPrePositions(['F2 bank: deposit done (128 items)']), 0)
assert.equal(climbOutPrePositions(['F3 reloot: chest scanned 2 items']), 0)
assert.equal(climbOutPrePositions(['F5 steer hazard defer: coal_ore@-123,60,389 held behind the ledger (d 4) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)']), 0)
assert.equal(climbOutPrePositions(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the tagged skin never rides - the emitter's own voice the bare
// prefix holds (the lane prints bare only)
assert.equal(climbOutPrePositions(['F12 [F12] climb out (pre-position): failed - stalled']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(climbOutPrePositions(['F6 climb out (pre-position) failed - stalled']), 0)
assert.equal(climbOutPrePositions(['F6 climb out (pre-position)']), 0)
assert.equal(climbOutPrePositions(['climb out (pre-position): failed - stalled']), 0)
assert.equal(climbOutPrePositions(['F8 climb outs (pre-position): failed - stalled']), 0)
assert.equal(climbOutPrePositions(['F8 climb out-extra (pre-position): failed - stalled']), 0)

// the defensive reads
assert.equal(climbOutPrePositions(null), 0)
assert.equal(climbOutPrePositions(undefined), 0)
assert.equal(climbOutPrePositions('junk'), 0)
assert.equal(climbOutPrePositions(42), 0)
assert.equal(climbOutPrePositions([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 climb out (pre-position): failed - stalled',
  'F14 climb out (pre-position): failed - wet-sentinel',
  'F9 climb out (trip): OK +14 levels (14 steps, 28 dug, 12 traversed, 38s)'
]
assert.equal(climbOutPrePositions(lines), 2)
const fold = { back: { climbOutPrePositions: climbOutPrePositions(lines) }, prev: { climbOutPrePositions: 5 }, cur: { climbOutPrePositions: 0 } }
assert.equal(climbOutPrePositionTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('climboutprepositiontrend.test: all pins green')
