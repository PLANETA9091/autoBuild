// tests/unit/pounceprobetrend.test.mjs - THE POUNCE PROBE LANE'S OWN
// TREND's own pin battery (v0.976.203): the well pounce's own decline probe
// mass across the faces the fire-0000's own survey named first (the
// 'F<n> [F<n>] climb pounce probe: <skin>' family - the well pounce's
// own decline probes) - the field's own chains byte-exact (THE CELL'S
// OWN WEIGHT 1698u the sixty-three faces' own total, THE BIRTH FIELD
// 1151u the forty-three faces' own total, THE NO-DROUGHT BIRTH the zero
// never rode, THE FIELD'S OWN TOP THE COUNT 49 rode ONCE the face
// 368's own crest - THE STORM, the floor THE COUNT 14 rode TWICE the
// faces 358/366's own floors), the FIELD BOOK THIRTY-NINE of FORTY-ONE
// windows speaking (TWENTY-FIVE swings, FIVE swells, NINE fades, the
// TWO honest silences - THE SILENCE PAIR 372/373) beside the
// whole-cache book FIFTY-NINE of SIXTY-ONE speaking, THE FIVE-SWING RUN
// 384..388 the field's own record + THE EIGHT-SWING RUN 423..432 THE
// WHOLE-CACHE RECORD, THE ZERO ROUND TRIPS, the bounds' own legs pins
// (the +29 rode ONE leg ONE boundary the boundary 367/368 - THE
// STORM'S OWN CLIMB, the -31 rode ONE leg ONE boundary the boundary
// 368/369 - THE STORM'S OWN DRAIN 49 -> 18), the last field word the
// face 389's own window the fade (30 -> 26 (-4) -> 22 (-4)), the
// whole-cache pins (the 1698u over the sixty-three faces, the face
// 427's own 52u THE WHOLE-CACHE STORM rode ONCE, the whole cache the
// zero never rode, the W435/W436 fade pair, the W437 swing, the W438
// swell, the W439 swing 21 -> 30 (+9) -> 18 (-12) MY WORD'S OWN FIRST
// LIVE READ), the REUSE LAW battery (pounceBook's own bots' decline
// cells the fold sums - the two skins the count rides whole, the
// attempt verdicts never ride, the lanes never merge), the
// fence/byte-pin batteries
import assert from 'node:assert'
import { pounceProbeTrendConsistent, pounceProbeTrendRow } from '../../src/lib/pounceprobetrend.mjs'
import { pounceBook } from '../../src/lib/pouncebook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, this word prices the pounce probe's own decline mass across the faces - the pounce probe seat, co-existence by seat never by duplication)"

const HEAD = 'the pounce probe trend (v0.976.203)'
const SWING = HEAD + ": the probe's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the probe's rise ran two steps deep - "
const SWELL_TAIL = " - the probe's own swell " + TAIL
const FADE = HEAD + ": the probe's fall ran two steps deep - "
const FADE_TAIL = " - the probe's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 347..389 (the probe RE's
// own arithmetic, FORTY-THREE faces deep) - THE BIRTH FIELD 1151u the
// faces' own total, THE NO-DROUGHT BIRTH the zero never rode, THE
// FIELD'S OWN TOP THE COUNT 49 rode ONCE (the face 368's own crest -
// THE STORM), the floor THE COUNT 14 rode TWICE (the faces
// 358/366's own floors)
const P = {}
P[347] = 18
P[348] = 26
P[349] = 22
P[350] = 20
P[351] = 28
P[352] = 26
P[353] = 30
P[354] = 35
P[355] = 36
P[356] = 26
P[357] = 19
P[358] = 14
P[359] = 22
P[360] = 33
P[361] = 17
P[362] = 27
P[363] = 25
P[364] = 21
P[365] = 22
P[366] = 14
P[367] = 20
P[368] = 49
P[369] = 18
P[370] = 16
P[371] = 28
P[372] = 28
P[373] = 43
P[374] = 30
P[375] = 28
P[376] = 23
P[377] = 44
P[378] = 27
P[379] = 23
P[380] = 29
P[381] = 24
P[382] = 32
P[383] = 36
P[384] = 26
P[385] = 41
P[386] = 27
P[387] = 30
P[388] = 26
P[389] = 22
let fieldSum = 0
for (let f = 347; f <= 389; f++) fieldSum += P[f]
assert.equal(fieldSum, 1151, "the birth field 1151u the hand-off holds - THE POUNCE PROBE'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 49, "THE STORM the count 49 the face 368's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 49).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 14, "the floor the count 14 the faces 358/366's own floors ride")
assert.equal(Object.values(P).filter(v => v === 14).length, 2, 'the floor rode TWICE the honest troughs the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the forty-three faces')
const w = (f) => pounceProbeTrendRow({ back: { probes: P[f - 2] }, prev: { probes: P[f - 1] }, cur: { probes: P[f] } })

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

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (FIVE swells, NINE fades - the byte-exact arcs)
const SWELLS = {
  354: '26 -> 30 (+4) -> 35 (+5)',
  355: '30 -> 35 (+5) -> 36 (+1)',
  360: '14 -> 22 (+8) -> 33 (+11)',
  368: '14 -> 20 (+6) -> 49 (+29)',
  383: '24 -> 32 (+8) -> 36 (+4)'
}
const FADES = {
  350: '26 -> 22 (-4) -> 20 (-2)',
  357: '36 -> 26 (-10) -> 19 (-7)',
  358: '26 -> 19 (-7) -> 14 (-5)',
  364: '27 -> 25 (-2) -> 21 (-4)',
  370: '49 -> 18 (-31) -> 16 (-2)',
  375: '43 -> 30 (-13) -> 28 (-2)',
  376: '30 -> 28 (-2) -> 23 (-5)',
  379: '44 -> 27 (-17) -> 23 (-4)',
  389: '30 -> 26 (-4) -> 22 (-4)'
}
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, 'the swell window ' + f + ' rides byte-exact')
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, 'the fade window ' + f + ' rides byte-exact')
}

// THE FIELD BOOK - the field's own tally
let swing = 0, swell = 0, fade = 0, silence = 0
for (let f = 349; f <= 389; f++) {
  const k = tallyWindow(f, P)
  if (k === 'swing') swing++
  else if (k === 'swell') swell++
  else if (k === 'fade') fade++
  else silence++
}
assert.equal(swing, 25, 'TWENTY-FIVE swings the field prices')
assert.equal(swell, 5, 'FIVE swells the field prices')
assert.equal(fade, 9, 'NINE fades the field prices')
assert.equal(silence, 2, 'the TWO honest silences the field prices')

// THE SILENCE PAIR 372/373 - the held 28 the storm's own approach
assert.ok(!tallyWindow(372, P).includes('swing') && tallyWindow(372, P) === 'silence', 'the silence window 372 the held 28 rides')
assert.ok(tallyWindow(373, P) === 'silence', 'the silence window 373 the held 28 rides')

// THE FIVE-SWING RUN 384..388 - THE FIELD'S OWN RECORD (the bounds
// never extend - the swell 383 and the fade 389 hold)
const isSwing = (f) => tallyWindow(f, P) === 'swing'
assert.ok([384, 385, 386, 387, 388].every(isSwing), 'THE FIVE-SWING RUN the faces 384..388 hold - THE FIELD RECORD')
assert.ok(!isSwing(383) && !isSwing(389), 'the run never extends - the honest bounds ride')

// THE ZERO ROUND TRIPS - the swings never mirrored (the field and the
// whole cache agree)
let roundTrips = 0
for (let f = 349; f <= 389; f++) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) roundTrips++
}
assert.equal(roundTrips, 0, 'THE ZERO ROUND TRIPS the swings never mirrored')

// THE BOUNDS' OWN LEGS - the +29 and the -31 rode ONE leg ONE
// boundary each (THE STORM'S OWN CLIMB, THE STORM'S OWN DRAIN)
let rises = [], falls = []
for (let f = 348; f <= 389; f++) {
  const d = P[f] - P[f - 1]
  if (d === 29) rises.push(f)
  if (d === -31) falls.push(f)
}
assert.equal(rises.length, 1, 'the +29 rode ONE leg')
assert.equal(falls.length, 1, 'the -31 rode ONE leg')
assert.deepEqual(rises, [368], "the +29 rode ONE leg ONE boundary the boundary 367/368 - THE STORM'S OWN CLIMB")
assert.deepEqual(falls, [369], "the -31 rode ONE leg ONE boundary the boundary 368/369 - THE STORM'S OWN DRAIN the crest paid 49 -> 18")

// THE LAST FIELD WORD - the face 389's own window the fade
assert.equal(w(389), FADE + '30 -> 26 (-4) -> 22 (-4)' + FADE_TAIL, "the last field word the face 389's own window the fade rides")

// THE WHOLE-CACHE SEAT - the 1698u over the sixty-three faces (the
// span 347..439, the absent 390..416 span and the 419 and the 424 and
// the 428 the honest gaps the cache holds not), the face 427's own
// 52u THE WHOLE-CACHE STORM rode ONCE, the whole cache the zero never
// rode
const W = {}
Object.assign(W, P)
W[417] = 29
W[418] = 20
W[420] = 21
W[421] = 22
W[422] = 38
W[423] = 31
W[425] = 35
W[426] = 26
W[427] = 52
W[429] = 22
W[430] = 31
W[431] = 20
W[432] = 26
W[433] = 44
W[434] = 25
W[435] = 24
W[436] = 12
W[437] = 21
W[438] = 30
W[439] = 18
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 63, 'the sixty-three faces the cache holds')
assert.equal(wholeSum, 1698, 'THE WHOLE-CACHE SEAT 1698u the sixty-three faces ride')
assert.equal(W[427], 52, "THE WHOLE-CACHE STORM the face 427's own 52u rode ONCE")
assert.equal(Object.values(W).filter(v => v === 52).length, 1, 'the whole-cache top rode ONCE')
assert.equal(W[436], 12, "the whole-cache floor the face 436's own 12u rides")
assert.equal(Object.values(W).filter(v => v === 0).length, 0, 'the whole cache the zero never rode - the no-drought cache')

// THE WHOLE-CACHE BOOK - the gap-crossing tally over the ordered
// cached faces (the absent 419 the windows cross, the honest gaps)
const wFaces = Object.keys(W).map(Number).sort((a, b) => a - b)
const clsArc = (a, b, c) => {
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
let wswing = 0, wswell = 0, wfade = 0, wsilence = 0
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') wswing++
  else if (k === 'swell') wswell++
  else if (k === 'fade') wfade++
  else wsilence++
}
assert.equal(wswing, 39, 'THIRTY-NINE swings the whole cache prices')
assert.equal(wswell, 9, 'NINE swells the whole cache prices')
assert.equal(wfade, 11, 'ELEVEN fades the whole cache prices')
assert.equal(wsilence, 2, 'the TWO honest silences the whole cache prices')
assert.equal(wswing + wswell + wfade + wsilence, 61, 'the SIXTY-ONE whole-cache windows ride')

// THE EIGHT-SWING RUN - THE WHOLE-CACHE RECORD (the gap-crossing run
// over the ordered cached faces - the absent 424 and the 428 the run
// crosses; the bounds never extend - the non-swings beside hold)
let wRun = [], wCur = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else wCur = []
}
assert.equal(wRun.length, 8, 'THE EIGHT-SWING RUN the whole cache holds - THE RECORD')
assert.deepEqual(wRun, [423, 425, 426, 427, 429, 430, 431, 432], 'the eight-swing run the gap-crossing faces hold')

// THE NEWEST WINDOWS - the W435/W436 fade pair and the W437 swing and
// the W438 swell and the W439 swing (MY WORD'S OWN FIRST LIVE READ the
// nearest-completed law holds)
const ww = (a, b, c) => pounceProbeTrendRow({ back: { probes: a }, prev: { probes: b }, cur: { probes: c } })
assert.equal(ww(W[433], W[434], W[435]), FADE + '44 -> 25 (-19) -> 24 (-1)' + FADE_TAIL, 'the W435 window the fade rides')
assert.equal(ww(W[434], W[435], W[436]), FADE + '25 -> 24 (-1) -> 12 (-12)' + FADE_TAIL, 'the W436 window the fade rides - THE FADE PAIR 435/436')
assert.equal(ww(W[435], W[436], W[437]), SWING + '24 -> 12 (-12) -> 21 (+9)' + SWING_TAIL, 'the W437 window the swing rides')
assert.equal(ww(W[436], W[437], W[438]), SWELL + '12 -> 21 (+9) -> 30 (+9)' + SWELL_TAIL, 'the W438 window the swell rides')
assert.equal(ww(W[437], W[438], W[439]), SWING + '21 -> 30 (+9) -> 18 (-12)' + SWING_TAIL, "the W439 window the swing rides - MY WORD'S OWN FIRST LIVE READ")

// THE REUSE LAW battery - pounceBook's own bots' decline cells the
// fold sums (the two skins the count rides whole, the attempt verdicts
// never ride, the lanes never merge)
const probeOf = (ls) => {
  const pb = pounceBook(ls)
  if (!pb) return 0
  let probes = 0
  for (const bot of Object.values(pb.bots)) probes += (bot.signature || 0) + (bot.guardWet || 0) + (bot.guardCap || 0)
  return probes
}
const L = (s) => probeOf(s.split('\n'))
assert.equal(L('F14 [F14] climb pounce probe: the signature declined (support=air, step=oak_leaves, head=air) - the well census continues'), 1, 'the signature-declined skin rides')
assert.equal(L('F16 [F16] climb pounce probe: the guard declined (wet feet) - the ladder owns the level'), 1, 'the guard wet-feet skin rides')
assert.equal(L('F17 [F17] climb pounce probe: the guard declined (the cap spent) - the ladder owns the level'), 1, 'the guard cap-spent skin rides')
assert.equal(L('F18 [F18] climb pounce probe: the signature declined (support=null, step=null, head=null) - the well census continues'), 1, 'the null cell reads ride whole')
assert.equal(L('F19 [F19] climb pounce: did not rise (back 4t + jump 24t toward -1,0) - the assist ladder owns it'), 0, 'the attempt verdict lane never rides')
assert.equal(L('F20 [F20] climb pounce: landed'), 0, 'the landed receipt lane never rides')
assert.equal(L('F21 [F21] climb pounce probe'), 0, 'the colon-less form never rides')
assert.equal(L('F21 climb pounce probe: the guard declined (wet feet) - the ladder owns the level'), 0, 'the single-prefix form never rides')
assert.equal(L('climb pounce probe: the guard declined (wet feet) - the ladder owns the level'), 0, 'the bare form never rides')
assert.equal(L('F22 [F22] climb pounce probe: the signature declined (support=air, step=oak_leaves, head=air)'), 0, 'the torn tail never rides')
assert.equal(L('F23 [F23] climb wet escape: 1 blocks walked (low-o2, walked 1/4)'), 0, 'the climb wet escape lane never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F14 [F14] climb pounce probe: the signature declined (support=air, step=oak_leaves, head=air) - the well census continues\nF16 [F16] climb pounce probe: the guard declined (wet feet) - the ladder owns the level\nF17 [F17] climb pounce probe: the guard declined (the cap spent) - the ladder owns the level'), 3, 'the TWO head skins the count rides whole - the raw law')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(pounceProbeTrendRow(null), null, 'the null fold prices nothing')
assert.equal(pounceProbeTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(pounceProbeTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(pounceProbeTrendRow([]), null, 'the array fold prices nothing')
assert.equal(pounceProbeTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(pounceProbeTrendRow({ back: { probes: 1 }, prev: { probes: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(pounceProbeTrendRow({ back: { probes: -1 }, prev: { probes: 2 }, cur: { probes: 3 } }), null, 'the negative face prices nothing')
assert.equal(pounceProbeTrendRow({ back: { probes: 1.5 }, prev: { probes: 2 }, cur: { probes: 3 } }), null, 'the fractional face prices nothing')
assert.equal(pounceProbeTrendRow({ back: { probes: '1' }, prev: { probes: 2 }, cur: { probes: 3 } }), null, 'the string face prices nothing')
assert.equal(pounceProbeTrendRow({ back: { probes: 1 }, prev: { probes: 1 }, cur: { probes: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(pounceProbeTrendRow({ back: { probes: 0 }, prev: { probes: 0 }, cur: { probes: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(pounceProbeTrendConsistent({ back: { probes: 0 }, prev: { probes: 3 }, cur: { probes: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(pounceProbeTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(pounceProbeTrendConsistent({ back: { probes: 0 }, prev: { probes: 3 } }), false, 'the two-faced fold never proves itself')
