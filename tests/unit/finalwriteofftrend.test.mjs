// tests/unit/finalwriteofftrend.test.mjs - THE DEADLINE'S OWN WRITE-OFF
// TREND's own pin battery (v0.976.187): the final write-off's own mass
// across the faces the F426's own crater named first (banked 2 of 1888u -
// 0.1% the mines boomed 2839 while the deadline collected 1759u) - the
// runner's own closing line both skins ride (the entries form + the none
// skin the face 422's own lawful zero), the why tokens never split the
// mass (the why split the pocket's own census prices beside - the lanes
// never merge) - the field's own chains byte-exact (THE CELL'S OWN WEIGHT
// 33847u the thirty-nine faces' own total, THE FIELD'S OWN TOP THE COUNT
// 1880 rode ONCE the face 386's own crest - THE FIELD'S OWN LANDER, THE
// FIELD'S OWN FLOOR THE COUNT 88 rode ONCE the face 382's own floor -
// THE SKIN DRIED ONCE), THE NEVER-SILENT BOOK THIRTY-SEVEN of
// THIRTY-SEVEN windows speaking (TWENTY-EIGHT swings, FIVE swells, FOUR
// fades, ZERO honest silences - THE FIRST ALL-SPEAKING BOOK THE FAMILY
// HOLDS), the ONE back-to-back swell pair the faces 353/354 hold, the
// FOUR fades never back-to-back, the ZERO round trips, the bounds' own
// legs pins (the +1342 rode ONCE one leg the face 373's own window -
// THE CREST'S OWN CLIMB, the -1195 rode ONCE one leg the face 382's own
// window - THE CRATER'S OWN DRAIN), the last word the face 386's own
// window the swing (1681 -> 1288 (-393) -> 1880 (+592)), the whole-cache
// pins (the 36997u across forty-three faces, the face 426's own 1759u the
// newest add, the W426 window the swell 335 -> 1056 (+721) -> 1759 (+703)
// MY WORD'S OWN FIRST LIVE READ the nearest-completed law holds - the
// cancelled 424 the honest gap rides, the W425 window the swell 0 ->
// 335 (+335) -> 1056 (+721) - THE BACK-TO-BACK SWELL PAIR THE TWO NEWEST
// WINDOWS RIDE) + the byte-pin battery, the fence battery, the cell's own
// read, the one-parser ride over the REAL closing lines (the whys line
// never rides, the bank attribution line never rides, the doom lines
// never ride, the bare head never rides, the plural skin never rides -
// no such emitter voice, the no-colon junk never rides - the lanes never
// merge)
import assert from 'node:assert'
import { finalWriteOffs, finalWriteOffTrendConsistent, finalWriteOffTrendRow } from '../../src/lib/finalwriteofftrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, this word prices the final write-off's own mass across the faces - the deadline's own crater seat, co-existence by seat never by duplication)"

const HEAD = 'the final write-off trend (v0.976.187)'
const SWING = HEAD + ": the write-off's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the write-off's rise ran two steps deep - "
const SWELL_TAIL = " - the write-off's own swell " + TAIL
const FADE = HEAD + ": the write-off's fall ran two steps deep - "
const FADE_TAIL = " - the write-off's own fade " + TAIL

// THE REAL CLOSING LINES - byte-copies the fleet's own runner prints
const F426_LINE = 'final write-off: F8 323u/21s stalled-s0, F11 251u/17s night, F13 237u/17s doom-latched, F19 218u/19s low-o2, F16 211u/20s wet-wall, F10 195u/17s doom-latched, F9 124u/14s stalled-s1, F6 104u/13s stalled-s0, F7 96u/16s stalled-s0 (the deadline pocket rode unbanked)'
const F425_LINE = 'final write-off: F8 273u/26s wet-wall, F11 214u/20s wet-wall, F4 151u/15s stalled-s0, F17 97u/16s exhausted, F3 91u/9s stalled-s0, F18 82u/17s wet-wall, F6 77u/12s unreachable, F16 71u/16s night (the deadline pocket rode unbanked)'
const F422_NONE = 'final write-off: none (every pocket under 64 units)'
const F369_LINE = 'final write-off: F7 141u/12s, F8 136u/14s stalled-s0, F2 134u/16s timeout, F19 113u/16s timeout, F12 105u/13s, F3 95u/17s exhausted (the deadline pocket rode unbanked)'
const F386_LINE = 'final write-off: F6 348u/18s timeout, F8 233u/18s unreachable, F7 221u/17s no-chest, F5 216u/20s timeout, F17 162u/16s night, F19 154u/18s unreachable, F18 118u/12s night, F12 103u/11s night, F13 101u/15s night, F4 79u/15s night, F2 74u/8s, F14 71u/10s night (the deadline pocket rode unbanked)'
const F373_LINE = 'final write-off: F2 233u/22s wet-sentinel, F3 182u/24s night, F18 169u/14s night, F17 167u/18s timeout, F12 164u/18s stalled-s0, F9 155u/16s low-o2, F15 135u/17s low-o2, F11 116u/19s exhausted, F10 107u/16s low-o2, F4 103u/15s night, F13 99u/13s timeout, F6 86u/13s night, F19 84u/14s stalled-s0 (the deadline pocket rode unbanked)'
const F382_LINE = 'final write-off: F17 88u/13s timeout (the deadline pocket rode unbanked)'
const F354_LINE = 'final write-off: F2 257u/21s exhausted, F14 238u/19s stalled-s0, F11 181u/22s stalled-s0, F5 176u/17s night, F19 172u/18s stalled-s1, F12 133u/15s night, F9 66u/12s doom-latched (the deadline pocket rode unbanked)'
const F350_LINE = 'final write-off: F5 355u/20s stalled-s0, F3 99u/13s doom-latched, F6 64u/9s night (the deadline pocket rode unbanked)'

// THE CELL'S OWN READ - the one-parser ride over the real lines
assert.equal(finalWriteOffs([F426_LINE]), 1759)
assert.equal(finalWriteOffs([F425_LINE]), 1056)
assert.equal(finalWriteOffs([F422_NONE]), 0) // the none skin - the lawful zero rides whole
assert.equal(finalWriteOffs([F369_LINE]), 724) // the why-less entries ride the mass whole
assert.equal(finalWriteOffs([F386_LINE]), 1880)
assert.equal(finalWriteOffs([F373_LINE]), 1800)
assert.equal(finalWriteOffs([F382_LINE]), 88)
assert.equal(finalWriteOffs([F354_LINE]), 1223)
assert.equal(finalWriteOffs([F350_LINE]), 518)
assert.equal(finalWriteOffs([F422_NONE, F426_LINE]), 0) // the none skin wins the first seat - ONE line per face the runner prints
assert.equal(finalWriteOffs([F426_LINE, F425_LINE]), 1759) // the first closing line the face holds - never a second

// THE LANES NEVER MERGE - the neighbors' lines never ride
assert.equal(finalWriteOffs(['write-off whys: wet-wall carries 569u of 1056u (53.9%) - the water\'s wall is the front']), 0)
assert.equal(finalWriteOffs(['bank attribution: top F12 2u; stranded: F8 0u/323u pocket stalled-s0 - the strand rode doom-latched+low-o2+night+stalled-s0+stalled-s1+wet-wall']), 0)
assert.equal(finalWriteOffs(['final bank doom census: spread - top F10 carries 2 of 21 failed climb cycles (9.5%) - the strand is a fleet-wide climb tax']), 0)
assert.equal(finalWriteOffs(['final bank: F9 4u/1 pockets']), 0)
assert.equal(finalWriteOffs(['F8 final write-off line: 323u']), 0)
assert.equal(finalWriteOffs(['final write-offs: F8 323u/21s stalled-s0']), 0) // the plural skin never rides - no such emitter voice
assert.equal(finalWriteOffs(['final write-off:']), 0)
assert.equal(finalWriteOffs(['final write-off: F8 323u stalled-s0']), 0) // the seconds the shape demands
assert.equal(finalWriteOffs(['final write-off 323u/21s stalled-s0']), 0) // the colon the shape demands

// the defensive reads
assert.equal(finalWriteOffs(null), 0)
assert.equal(finalWriteOffs(undefined), 0)
assert.equal(finalWriteOffs('junk'), 0)
assert.equal(finalWriteOffs(42), 0)
assert.equal(finalWriteOffs([null, 42, {}]), 0)

// THE BIRTH FIELD - the thirty-nine faces' own chains byte-exact
const FIELD = { 348: 308, 349: 991, 350: 518, 351: 448, 352: 710, 353: 871, 354: 1223, 355: 326, 356: 839, 357: 348, 358: 755, 359: 423, 360: 198, 361: 1096, 362: 1000, 363: 1008, 364: 750, 365: 1482, 366: 820, 367: 858, 368: 532, 369: 724, 370: 1328, 371: 1268, 372: 458, 373: 1800, 374: 891, 375: 381, 376: 1233, 377: 367, 378: 652, 379: 1071, 380: 525, 381: 1283, 382: 88, 383: 1425, 384: 1681, 385: 1288, 386: 1880 }
const WHOLE_CACHE_EXTRA = { 422: 0, 423: 335, 425: 1056, 426: 1759 }
const birthSum = Object.keys(FIELD).reduce((s, f) => s + FIELD[f], 0)
assert.equal(birthSum, 33847) // THE CELL'S OWN WEIGHT the thirty-nine faces' own total
const wholeSum = birthSum + Object.keys(WHOLE_CACHE_EXTRA).reduce((s, f) => s + WHOLE_CACHE_EXTRA[f], 0)
assert.equal(wholeSum, 36997) // THE WHOLE-CACHE SEAT the forty-three faces the cache holds
assert.equal(Object.values(FIELD).filter((m) => m === 1880).length, 1) // the top rode ONCE
assert.equal(Object.values(FIELD).filter((m) => m === 88).length, 1) // the floor rode ONCE - THE SKIN DRIED ONCE

// THE BREATH BOOK - the thirty-seven windows' own tally
const kinds = {}
let silences = 0
const swellFaces = []
const fadeFaces = []
for (let f = 350; f <= 386; f++) {
  const first = FIELD[f - 1] - FIELD[f - 2]
  const second = FIELD[f] - FIELD[f - 1]
  let kind
  if (first === 0 || second === 0) { kind = 'silence'; silences++ } else if (first > 0 && second > 0) { kind = 'swell'; swellFaces.push(f) } else if (first < 0 && second < 0) { kind = 'fade'; fadeFaces.push(f) } else { kind = 'swing' }
  kinds[f] = kind
}
assert.equal(silences, 0) // THE NEVER-SILENT BOOK - ZERO honest silences
assert.equal(swellFaces.join('/'), '353/354/370/379/384') // the FIVE swells
assert.equal(fadeFaces.join('/'), '351/360/372/375') // the FOUR fades
assert.equal(kinds[353] === 'swell' && kinds[354] === 'swell', true) // THE ONE back-to-back swell pair the faces 353/354 hold
assert.equal(kinds[360] === 'fade' && kinds[361] !== 'fade', true) // the fades never chain
assert.equal(kinds[372] === 'fade' && kinds[373] !== 'fade', true)
assert.equal(kinds[375] === 'fade' && kinds[376] !== 'fade', true)
let roundTrips = 0
for (let f = 350; f <= 386; f++) { if (FIELD[f] === FIELD[f - 2]) roundTrips++ }
assert.equal(roundTrips, 0) // the ZERO round trips - the legs never mirror

// THE BOUNDS' OWN LEGS
const rises = []
const falls = []
for (let f = 349; f <= 386; f++) { const d = FIELD[f] - FIELD[f - 1]; if (d > 0) rises.push([f, d]); if (d < 0) falls.push([f, d]) }
const maxRise = Math.max(...rises.map((r) => r[1]))
const maxFall = Math.min(...falls.map((r) => r[1]))
assert.equal(maxRise, 1342) // THE CREST'S OWN CLIMB
assert.equal(rises.filter((r) => r[1] === maxRise).length, 1) // rode ONCE one leg
assert.equal(rises.find((r) => r[1] === maxRise)[0], 373) // the face 373's own window
assert.equal(maxFall, -1195) // THE CRATER'S OWN DRAIN
assert.equal(falls.filter((r) => r[1] === maxFall).length, 1) // rode ONCE one leg
assert.equal(falls.find((r) => r[1] === maxFall)[0], 382) // the face 382's own window

// THE LAST WORD - the face 386's own window the swing (byte-exact)
assert.equal(
  finalWriteOffTrendRow({ back: { finalWriteOffs: 1681 }, prev: { finalWriteOffs: 1288 }, cur: { finalWriteOffs: 1880 } }),
  SWING + '1681 -> 1288 (-393) -> 1880 (+592)' + SWING_TAIL
)

// THE WHOLE-CACHE WINDOWS - the two newest windows the back-to-back swell pair rides
assert.equal(
  finalWriteOffTrendRow({ back: { finalWriteOffs: 335 }, prev: { finalWriteOffs: 1056 }, cur: { finalWriteOffs: 1759 } }),
  SWELL + '335 -> 1056 (+721) -> 1759 (+703)' + SWELL_TAIL
) // the W426 window MY WORD'S OWN FIRST LIVE READ
assert.equal(
  finalWriteOffTrendRow({ back: { finalWriteOffs: 0 }, prev: { finalWriteOffs: 335 }, cur: { finalWriteOffs: 1056 } }),
  SWELL + '0 -> 335 (+335) -> 1056 (+721)' + SWELL_TAIL
) // the W425 window - the none skin's zero the back seat rides

// THE ROW PRINTERS - the three kinds byte-exact
assert.equal(
  finalWriteOffTrendRow({ back: { finalWriteOffs: 308 }, prev: { finalWriteOffs: 991 }, cur: { finalWriteOffs: 518 } }),
  SWING + '308 -> 991 (+683) -> 518 (-473)' + SWING_TAIL
) // the face 350's own window
assert.equal(
  finalWriteOffTrendRow({ back: { finalWriteOffs: 448 }, prev: { finalWriteOffs: 710 }, cur: { finalWriteOffs: 871 } }),
  SWELL + '448 -> 710 (+262) -> 871 (+161)' + SWELL_TAIL
) // the face 353's own window - the pair's first leg
assert.equal(
  finalWriteOffTrendRow({ back: { finalWriteOffs: 423 }, prev: { finalWriteOffs: 198 }, cur: { finalWriteOffs: 1096 } }),
  SWING + '423 -> 198 (-225) -> 1096 (+898)' + SWING_TAIL
) // the face 361's own window - the rise and the fall traded seats
assert.equal(
  finalWriteOffTrendRow({ back: { finalWriteOffs: 991 }, prev: { finalWriteOffs: 518 }, cur: { finalWriteOffs: 448 } }),
  FADE + '991 -> 518 (-473) -> 448 (-70)' + FADE_TAIL
) // the face 351's own window - the fade's own descent
assert.equal(
  finalWriteOffTrendRow({ back: { finalWriteOffs: 518 }, prev: { finalWriteOffs: 448 }, cur: { finalWriteOffs: 448 } }),
  null
) // the held step is no direction - the honest silence (the branch law's own null)

console.log('finalwriteofftrend.test: all pins green')
