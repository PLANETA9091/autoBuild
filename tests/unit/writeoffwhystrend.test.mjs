// tests/unit/writeoffwhystrend.test.mjs - THE DUSK BANK FRONT'S OWN WHYS
// TREND's own pin battery (v0.976.189): the write-off whys' own front mass
// across the faces the F428's own census named first (night 690u of 1052u
// 65.6% - the dark holds the walks - the dusk bank is the front; the F426's
// own 935u of 1802u the mirror behind, the F425's own wet-wall 569u the
// .186 word's own front beside) - the field's own chains byte-exact (THE
// CELL'S OWN WEIGHT 13399u the thirty-nine faces' own total, THE FIELD'S
// OWN TOP THE COUNT 1138 rode ONCE the face 370's own crest - THE CREST'S
// OWN CLIMB born of the double drought the faces 368/369 hold, THE FIELD'S
// OWN FLOOR THE COUNT ZERO rode TWELVE times - THE TWELVE DROUGHTS the
// no-majority law holds), THIRTY-THREE of THIRTY-SEVEN windows speaking
// (TWENTY-FOUR swings THE LOUDEST BOOK THE FAMILY HOLDS, THREE swells, SIX
// fades, the FOUR honest silences - the TWO back-to-back silence PAIRS the
// faces 367/368 and 383/384 hold), THE ONE back-to-back fade pair the faces
// 370/371 hold, the ZERO back-to-back swell pairs, THE TWO ROUND TRIPS the
// faces 366/376 hold - THE CREST'S OWN MIRRORS (the +459/-459 and the
// +232/-232), the bounds' own legs pins (the +1138 rode TWICE two legs ONE
// boundary the boundary 369/370 - THE CREST'S OWN CLIMB, the -861 rode TWICE
// two legs ONE boundary the boundary 382/383 - THE CRATER'S OWN DRAIN the
// crest 861 the floor 0), the last word the face 386's own window the
// honest silence (0 -> 0 -> 0 - THE DROUGHT'S OWN CLOSER), the whole-cache
// pins (the 16620u over the forty-six faces incl. the face 347's own 1027u
// the pre-field face, the face 428's own 690u the newest add, the W428
// window the swing 935 -> 0 (-935) -> 690 (+690) MY WORD'S OWN FIRST LIVE
// READ the nearest-completed law holds - the cancelled 424 the honest gap
// rides, the W427 window the swing 569 -> 935 (+366) -> 0 (-935), the
// crater's own 427 seat the heaviest silence the whole cache holds - the
// honest zero the no-majority law keeps) + the byte-pin battery, the fence
// battery, the cell's own read, the one-parser ride over the REAL whys
// lines (the night's skin, the wet-wall's skin, the timeout's skin - the
// why's name never splits the mass; the final write-off line the fwo's own
// book prices never rides, the bank attribution line never rides, the final
// bank budget lines the fbb's own book prices never ride, the climb
// wet-wall yield lines the wwy's own book prices never ride, the retry
// lines the rr's own book prices never ride, the bare head never rides -
// no such emitter voice, the no-colon junk never rides - the lanes never
// merge)
import assert from 'node:assert'
import { writeOffWhys, writeOffWhysTrendConsistent, writeOffWhysTrendRow } from '../../src/lib/writeoffwhystrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the final write-off's own trend prices the deadline's own write-off mass across the faces, the bank budget clamp's own trend prices the bank chains' own clamp mass across the faces, this word prices the write-off whys' own front mass across the faces - the dusk bank front's own whys seat, co-existence by seat never by duplication)"

const HEAD = 'the write-off whys trend (v0.976.189)'
const SWING = HEAD + ": the whys' own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the whys' rise ran two steps deep - "
const SWELL_TAIL = " - the whys' own swell " + TAIL
const FADE = HEAD + ": the whys' fall ran two steps deep - "
const FADE_TAIL = " - the whys' own fade " + TAIL

// ---------------------------------------------------------------- the cell's own read
{
  // the REAL lines the field holds byte-true (the F428's own closing
  // census the dusk bank front rides, the F426's own 935u the mirror
  // behind, the F425's own wet-wall the .186 word's own front)
  assert.strictEqual(writeOffWhys(['write-off whys: night carries 690u of 1052u (65.6%) - the dark holds the walks - the dusk bank is the front']), 690)
  assert.strictEqual(writeOffWhys(['write-off whys: night carries 935u of 1802u (51.9%) - the dark holds the walks - the dusk bank is the front']), 935)
  assert.strictEqual(writeOffWhys(['write-off whys: wet-wall carries 569u of 1056u (53.9%) - the water\'s wall is the front']), 569)
  // the why's name never splits the mass - the named mass rides whole
  assert.strictEqual(writeOffWhys(['write-off whys: timeout carries 1027u of 1620u (63.4%) - the deadline\'s own clock is the front']), 1027)
  assert.strictEqual(writeOffWhys(['write-off whys: stalled-s0 carries 355u of 518u (68.5%) - the climb\'s first wall is the front']), 355)
  assert.strictEqual(writeOffWhys(['write-off whys: low-o2 carries 228u of 381u (59.8%) - the water\'s own clock is the front']), 228)
  // the silent faces ride the lawful zero whole
  assert.strictEqual(writeOffWhys(['F9 retry #1 in 2.1s (timeout)']), 0)
  assert.strictEqual(writeOffWhys([]), 0)
  // byte-pin battery - the junk never invents a front
  assert.strictEqual(writeOffWhys(null), 0)
  assert.strictEqual(writeOffWhys(undefined), 0)
  assert.strictEqual(writeOffWhys(42), 0)
  assert.strictEqual(writeOffWhys([null, 7, {}]), 0)
  // the lanes never merge - the family's own lines never ride
  assert.strictEqual(writeOffWhys(['final write-off: F8 323u/21s stalled-s0, F11 251u/17s night (the deadline pocket rode unbanked)']), 0)
  assert.strictEqual(writeOffWhys(['bank attribution: top F3 201u, F15 163u, F2 159u; stranded: F17 0u/253u pocket stalled-s1']), 0)
  assert.strictEqual(writeOffWhys(['F7 final bank budget: flow-priced 1309s (fleet bankable pocket 1286u (raw 1619u) at 1.0u/s needs 1309s) - the static 248s covered only the fast flows - clamped to 300s (the kill margin)']), 0)
  assert.strictEqual(writeOffWhys(['F16 [F16] climb wet-wall yield: 2 wet rotations vs 1 dry at y=38 - no dry bearing owns this column, the fence reserve returns to the chain']), 0)
  assert.strictEqual(writeOffWhys(['F9 retry #2 in 3.5s (timeout)']), 0)
  assert.strictEqual(writeOffWhys(['write-off whys:']), 0) // the bare head - no such emitter voice
  assert.strictEqual(writeOffWhys(['write-off whys: night carries 690u of 1052u']), 0) // the percent the shape holds
  assert.strictEqual(writeOffWhys(['write-off whyss: night carries 5u of 10u (50%)']), 0) // the plural skin never rides
  assert.strictEqual(writeOffWhys(['write-off whys junk']), 0)
  assert.strictEqual(writeOffWhys(['the write-off whys: night carries 5u of 10u (50%)']), 0)
  // the first line the shape prints rides - the census's own single print
  assert.strictEqual(writeOffWhys(['write-off whys: night carries 10u of 20u (50%)', 'write-off whys: timeout carries 90u of 100u (90%)']), 10)
}

// ---------------------------------------------------------------- the birth field
const BIRTH = { 348: 170, 349: 895, 350: 355, 351: 233, 352: 433, 353: 578, 354: 0, 355: 326, 356: 573, 357: 200, 358: 509, 359: 423, 360: 119, 361: 662, 362: 0, 363: 939, 364: 576, 365: 775, 366: 0, 367: 459, 368: 0, 369: 0, 370: 1138, 371: 642, 372: 458, 373: 0, 374: 563, 375: 228, 376: 0, 377: 232, 378: 0, 379: 700, 380: 264, 381: 0, 382: 88, 383: 861, 384: 0, 385: 0, 386: 0 }

{
  const faces = Object.keys(BIRTH).map(Number).sort((a, b) => a - b)
  assert.strictEqual(faces.length, 39)
  const sum = faces.reduce((a, f) => a + BIRTH[f], 0)
  assert.strictEqual(sum, 13399) // THE CELL'S OWN WEIGHT
  // THE FIELD'S OWN TOP THE COUNT 1138 rode ONCE - the face 370's own crest
  const top = Math.max(...faces.map(f => BIRTH[f]))
  assert.strictEqual(top, 1138)
  assert.strictEqual(faces.filter(f => BIRTH[f] === top).length, 1)
  assert.strictEqual(BIRTH[370], 1138)
  // THE TWELVE DROUGHTS - the no-majority law's own zeros
  const zeros = faces.filter(f => BIRTH[f] === 0)
  assert.deepStrictEqual(zeros, [354, 362, 366, 368, 369, 373, 376, 378, 381, 384, 385, 386])
  // the breath book over the THIRTY-SEVEN windows
  const wins = []
  for (let i = 348; i <= 384; i++) {
    const a = BIRTH[i]; const b = BIRTH[i + 1]; const c = BIRTH[i + 2]
    const first = b - a; const second = c - b
    if (first === 0 || second === 0) wins.push({ w: i, cls: 'silence', first, second })
    else if (first > 0 && second > 0) wins.push({ w: i, cls: 'swell', first, second })
    else if (first < 0 && second < 0) wins.push({ w: i, cls: 'fade', first, second })
    else wins.push({ w: i, cls: 'swing', first, second })
  }
  assert.strictEqual(wins.length, 37)
  const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
  for (const w of wins) tally[w.cls]++
  assert.deepStrictEqual(tally, { swing: 24, swell: 3, fade: 6, silence: 4 }) // THE LOUDEST BOOK
  assert.strictEqual(tally.swing + tally.swell + tally.fade, 33) // THIRTY-THREE of THIRTY-SEVEN speaking
  // the swells / fades / silences byte-exact
  assert.deepStrictEqual(wins.filter(w => w.cls === 'swell').map(w => w.w), [351, 354, 381])
  assert.deepStrictEqual(wins.filter(w => w.cls === 'fade').map(w => w.w), [349, 358, 370, 371, 374, 379])
  assert.deepStrictEqual(wins.filter(w => w.cls === 'silence').map(w => w.w), [367, 368, 383, 384])
  // the back-to-back runs: the ONE fade pair, the ZERO swell pairs,
  // the TWO silence pairs
  const bb = (cls) => wins.filter((w, i) => i > 0 && w.cls === cls && wins[i - 1].cls === cls).map(w => w.w)
  assert.deepStrictEqual(bb('fade'), [371])
  assert.deepStrictEqual(bb('swell'), [])
  assert.deepStrictEqual(bb('silence'), [368, 384])
  // THE TWO ROUND TRIPS - the crest's own mirrors
  const rts = wins.filter(w => w.cls === 'swing' && w.first === -w.second)
  assert.deepStrictEqual(rts.map(w => w.w), [366, 376])
  assert.deepStrictEqual(rts.map(w => [w.first, w.second]), [[459, -459], [232, -232]])
  // the bounds' own legs
  const legs = []
  for (const w of wins) legs.push({ v: w.first, w: w.w }, { v: w.second, w: w.w })
  const maxRise = Math.max(...legs.map(l => l.v))
  const maxFall = Math.min(...legs.map(l => l.v))
  assert.strictEqual(maxRise, 1138)
  assert.deepStrictEqual(legs.filter(l => l.v === maxRise).map(l => l.w), [368, 369]) // TWICE two legs ONE boundary 369/370
  assert.strictEqual(maxFall, -861)
  assert.deepStrictEqual(legs.filter(l => l.v === maxFall).map(l => l.w), [382, 383]) // TWICE two legs ONE boundary 382/383
  // the last word - the drought's own closer
  const last = wins[wins.length - 1]
  assert.strictEqual(last.w, 384)
  assert.strictEqual(last.cls, 'silence')
  assert.deepStrictEqual([BIRTH[384], BIRTH[385], BIRTH[386]], [0, 0, 0])
}

// ---------------------------------------------------------------- the whole-cache seat
{
  // the forty-six faces the cache holds (347 + 348..386 + 422 + 423 +
  // 425 + 426 + 427 + 428; the cancelled 424 the honest gap never rode)
  const whole = { ...BIRTH, 347: 1027, 422: 0, 423: 0, 425: 569, 426: 935, 427: 0, 428: 690 }
  const faces = Object.keys(whole).map(Number).sort((a, b) => a - b)
  assert.strictEqual(faces.length, 46)
  const sum = faces.reduce((a, f) => a + whole[f], 0)
  assert.strictEqual(sum, 16620) // THE WHOLE-CACHE SEAT
  assert.strictEqual(whole[347], 1027) // the pre-field face
  assert.strictEqual(whole[428], 690) // the newest add - the dusk bank front rides
  assert.strictEqual(whole[427], 0) // the crater's honest zero - the heaviest silence
  // the W428 window - MY WORD'S OWN FIRST LIVE READ (the swing)
  const row428 = writeOffWhysTrendRow({ back: { writeOffWhys: 935 }, prev: { writeOffWhys: 0 }, cur: { writeOffWhys: 690 } })
  assert.strictEqual(row428, SWING + '935 -> 0 (-935) -> 690 (+690)' + SWING_TAIL)
  // the W427 window - the crater's own silence the drain rides (the swing)
  const row427 = writeOffWhysTrendRow({ back: { writeOffWhys: 569 }, prev: { writeOffWhys: 935 }, cur: { writeOffWhys: 0 } })
  assert.strictEqual(row427, SWING + '569 -> 935 (+366) -> 0 (-935)' + SWING_TAIL)
  // the crater's silence row - the honest null the held law rides
  assert.strictEqual(writeOffWhysTrendRow({ back: { writeOffWhys: 0 }, prev: { writeOffWhys: 0 }, cur: { writeOffWhys: 690 } }), null)
  // the row printers byte-exact (the swell / the fade / the swing)
  const swellRow = writeOffWhysTrendRow({ back: { writeOffWhys: 0 }, prev: { writeOffWhys: 1 }, cur: { writeOffWhys: 3 } })
  assert.strictEqual(swellRow, SWELL + '0 -> 1 (+1) -> 3 (+2)' + SWELL_TAIL)
  const fadeRow = writeOffWhysTrendRow({ back: { writeOffWhys: 3 }, prev: { writeOffWhys: 1 }, cur: { writeOffWhys: 0 } })
  assert.strictEqual(fadeRow, FADE + '3 -> 1 (-2) -> 0 (-1)' + FADE_TAIL)
}

// ---------------------------------------------------------------- the fence
{
  // the consistent triple rides
  assert.strictEqual(writeOffWhysTrendConsistent({ back: { writeOffWhys: 0 }, prev: { writeOffWhys: 935 }, cur: { writeOffWhys: 690 } }), true)
  // the fence never rejects extra keys - co-existence by seat
  assert.strictEqual(writeOffWhysTrendConsistent({ back: { writeOffWhys: 0, finalWriteOffs: 1759 }, prev: { writeOffWhys: 1 }, cur: { writeOffWhys: 2, zork: 'x' } }), true)
  // the junk never passes
  assert.strictEqual(writeOffWhysTrendConsistent(null), false)
  assert.strictEqual(writeOffWhysTrendConsistent(undefined), false)
  assert.strictEqual(writeOffWhysTrendConsistent(42), false)
  assert.strictEqual(writeOffWhysTrendConsistent([]), false)
  assert.strictEqual(writeOffWhysTrendConsistent({}), false)
  assert.strictEqual(writeOffWhysTrendConsistent({ back: null, prev: {}, cur: {} }), false)
  assert.strictEqual(writeOffWhysTrendConsistent({ back: { writeOffWhys: -1 }, prev: { writeOffWhys: 1 }, cur: { writeOffWhys: 2 } }), false)
  assert.strictEqual(writeOffWhysTrendConsistent({ back: { writeOffWhys: 1.5 }, prev: { writeOffWhys: 1 }, cur: { writeOffWhys: 2 } }), false)
  assert.strictEqual(writeOffWhysTrendConsistent({ back: { writeOffWhys: '690' }, prev: { writeOffWhys: 1 }, cur: { writeOffWhys: 2 } }), false)
  assert.strictEqual(writeOffWhysTrendConsistent({ back: { writeOffWhys: 1 }, prev: { writeOffWhys: 1 }, cur: {} }), false)
  // the inconsistent row never prints
  assert.strictEqual(writeOffWhysTrendRow(null), null)
  assert.strictEqual(writeOffWhysTrendRow({ back: { writeOffWhys: 1 }, prev: { writeOffWhys: 1 }, cur: { writeOffWhys: 'x' } }), null)
}
