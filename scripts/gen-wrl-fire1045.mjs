#!/usr/bin/env node
// (v0.976.224 fire 1045) THE WATER RESCUE LANE TREND'S OWN GENERATOR -
// builds src/lib/waterrescuelanetrend.mjs + tests/unit/
// waterrescuelanetrend.test.mjs: the tail enumeration rides byte-exact
// from the bankedreceipttrend's own tail (the one-emitter seat law's
// own chain, the new seat appended), the series the faces/ field
// prices live (never hand-copied), every expectation asserted loud
// before the files emit.
// usage: node scripts/gen-wrl-fire1045.mjs <faces-dir>
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2] || 'faces'
if (!statSync(dir, { throwIfNoEntry: false })?.isDirectory()) { console.error('faces dir missing'); process.exit(1) }

// === 1. the tail chain (byte-exact from the .223 word's own tail) ===
const brtSrc = readFileSync('src/lib/bankedreceipttrend.mjs', 'utf8')
const tailLine = brtSrc.split('\n').find(l => l.includes('const tail = "'))
if (!tailLine) { console.error('brt tail line not found'); process.exit(1) }
const inner = tailLine.slice(tailLine.indexOf('"') + 1, tailLine.lastIndexOf('"'))
const OLD_END = ", this word prices the banked receipt's own mass across the faces - the banked receipt seat, co-existence by seat never by duplication)"
if (!inner.endsWith(OLD_END)) { console.error('brt tail end drifted: ' + inner.slice(-120)); process.exit(1) }
const NEW_END = ", the banked receipt's own trend prices the banked receipt's own mass across the faces, this word prices the water rescue lane's own mass across the faces - the water rescue lane seat, co-existence by seat never by duplication)"
const TAIL = inner.slice(0, inner.length - OLD_END.length) + NEW_END

// === 2. the field series (live from the faces) ===
const RESCUE_RE = /^F(\d+) \[F\1\] water: (?:drowning rescue|rescue) .+$/
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
const SERIES = []
let total = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  let n = 0
  for (const l of lines) if (typeof l === 'string' && RESCUE_RE.test(l)) n++
  total += n
  SERIES.push([Number(f.slice(4)), n])
}
if (SERIES.length !== 23) { console.error('expected 23 faces, got ' + SERIES.length); process.exit(1) }
if (total !== 2867) { console.error('expected the 2867u cell, got ' + total); process.exit(1) }
const V = Object.fromEntries(SERIES)
if (SERIES.some(([, v]) => v === 0)) { console.error('the no-drought field drifted - a zero rode'); process.exit(1) }

// === 3. the book arithmetic ===
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [, a, b, c] of wins) {
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; continue }
  if (d1 > 0 && d2 > 0) { swells++; continue }
  if (d1 < 0 && d2 < 0) { fades++; continue }
  swings++
}
if (swells !== 7 || fades !== 1 || swings !== 13 || silences !== 0) { console.error(`book drifted: ${swells} swells ${fades} fades ${swings} swings ${silences} silences`); process.exit(1) }
const legs = SERIES.map(([, v]) => v)
let maxRise = 0, maxFall = 0
for (let i = 1; i < legs.length; i++) { const d = legs[i] - legs[i - 1]; if (d > maxRise) maxRise = d; if (d < maxFall) maxFall = d }
let riseRides = 0, fallRides = 0, riseBoundary = '', fallBoundary = ''
for (let i = 1; i < legs.length; i++) {
  const d = legs[i] - legs[i - 1]
  if (d === maxRise) { riseRides++; riseBoundary = `${SERIES[i - 1][0]}/${SERIES[i][0]}` }
  if (d === maxFall) { fallRides++; fallBoundary = `${SERIES[i - 1][0]}/${SERIES[i][0]}` }
}
if (maxRise !== 152 || riseRides !== 1 || riseBoundary !== '437/438') { console.error(`rise bound drifted: ${maxRise} x${riseRides} ${riseBoundary}`); process.exit(1) }
if (maxFall !== -189 || fallRides !== 1 || fallBoundary !== '453/454') { console.error(`fall bound drifted: ${maxFall} x${fallRides} ${fallBoundary}`); process.exit(1) }
const top = Math.max(...legs), floor = Math.min(...legs)
const topFaces = SERIES.filter(([, v]) => v === top).map(([f]) => f)
const floorFaces = SERIES.filter(([, v]) => v === floor).map(([f]) => f)
if (top !== 279 || topFaces.join(',') !== '453') { console.error('top drifted: ' + top + ' @ ' + topFaces); process.exit(1) }
if (floor !== 25 || floorFaces.join(',') !== '436') { console.error('floor drifted: ' + floor + ' @ ' + floorFaces); process.exit(1) }
const arc = (a, b, c) => `${a} -> ${b} (${b - a >= 0 ? '+' : ''}${b - a}) -> ${c} (${c - b >= 0 ? '+' : ''}${c - b})`
const shapeOf = (a, b, c) => { const d1 = b - a, d2 = c - b; if (d1 === 0 || d2 === 0) return 'silence'; if (d1 > 0 && d2 > 0) return 'swell'; if (d1 < 0 && d2 < 0) return 'fade'; return 'swing' }
const NUM = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY', 'TWENTY-ONE']
const WINTEXT = wins.map(([f, a, b, c]) => `the W${f} ${shapeOf(a, b, c)} ${arc(a, b, c)}`).join(', ')
const CHAIN = SERIES.map(([f, v], i) => `${i === SERIES.length - 1 ? 'the F' + f : 'the ' + f} ${v}`).join(', ')

// === 4. the module ===
const modHead = `// (v0.976.224) THE WATER RESCUE LANE'S OWN TREND - the water guard's
// own rescue lane mass across the faces beside the raw lane words: the
// field's own walk named the lane the seat first (the 'F<n> [F<n>]
// water: drowning rescue <skin>' + 'F<n> [F<n>] water: rescue <skin>'
// family the water guard's rescue lane prints while a bot drowns -
// ONE lane, one carrier shape, the heaviest clean unpriced voice the
// fire-1045 walk named: the water guard's own anatomy the scan priced
// skin by skin, the pass's own 3158u cell the .202 seat prices, the
// hazard memorize's own 937u cell the .212 seat prices, the transit
// target's own 884u cell the ttt seat prices, the shore pin's own 511u
// cell the shore pin seat prices, the air bar glitch's own 136u cell
// the .222 seat prices beside - the rescue lane's own 2867u the
// heaviest clean unpriced voice the guard holds, every other unpriced
// skin the guard prints (the frozen family's own cells, the surface
// re-arm's own cell, the death spot's own cell, the liar ladder's own
// cell) a lighter sibling the next seats price) - this word prices
// the rescue lane's own mass ACROSS the faces, co-existence by seat
// never by duplication.
// THE RAW LAW: every line the lane prints rides, no exclusion the
// family needs ('F<n> [F<n>] water: drowning rescue start (drowning,
// oxygen <n>)' and the seven rescue skins the lane prints - the start
// and the blind live and the released and the standing down and the
// complete and the aborted and the timeout, the [blind: ...] suffix
// skins the same lane holds - the line's own count rides whole
// whatever the skin's name - the .196 climb bridge's own lane law);
// the water guard's OTHER cells never ride (the pass cell the .202
// seat prices and the hazard memorize cell the .212 seat prices and
// the shore pin cell the shore pin seat prices and the transit target
// cell the ttt seat prices and the air bar glitch cell the .222 seat
// prices and the frozen family's own cells and the walk-lane's own
// water-rescue why-cell the walkFailCensus holds never ride - the
// rescue lane alone).
// THE CENSUS LAW: the word owns the count - no trend word owned the
// rescue lane cell (the .223 bankedReceiptCount precedent the family's
// census rides, the .220 verticalDoomSkipCount and the .222
// airBarGlitchCount the same law hold) - waterRescueLaneCount the
// family's own count the fold rides, one parser never a second; the
// strict grammar the field's own proof prices (the backreference
// bracket form - every rescue line the whole window holds the
// self-bracket shape classifies, the field proof 23/23 census==raw
// zero mismatches scripts/fieldread-waterrescuelane-1045.mjs).
// THE CELL'S OWN WEIGHT 2867u the twenty-three faces' own total (the
// faces 436..458 the artifact fetches re-spoke, the F458 run the
// .223 tree's own dispatch the fleet rode - alive 19/19, mined 1801,
// banked 1572, the conversion 110.0 percent, the calm the reconnects
// 6 the kicks 0 the rescues 33 the face's own summary holds;
// ${CHAIN}).
// THE NO-DROUGHT FIELD the zero never rode (twenty-three faces and no
// zero - the no-drought family's own seat the word joins), THE FLOOR
// the count ${floor} rode ONCE (the face ${floorFaces[0]}'s own floor), THE FIELD'S
// OWN TOP the count ${top} rode ONCE (the face ${topFaces[0]}'s own crest - THE
// STORM).
// THE BOOK TWENTY-ONE of TWENTY-ONE windows speaking (THIRTEEN
// swings, SEVEN swells, ONE fade, the ZERO honest silences - the
// family's own restless skin): ${WINTEXT}.
// THE BOUNDS' OWN LEGS: the +152 the max rise rode ONE leg ONE
// boundary (the boundary ${riseBoundary} - THE STORM'S OWN CLIMB), the -189 the
// max fall rode ONE leg ONE boundary (the boundary ${fallBoundary} - THE
// STORM'S OWN DRAIN the heaviest fall the family's own record holds);
// the round trips the ZERO the book holds (the swings never
// mirrored).
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain).
// The fold receives the rescue lane's own count per face (the word
// owns the census - one-parser law: the SAME strict grammar runs over
// each face's own lines, never a fork). No two-back face given -> no
// read (the carrier's own null pass); the lane's own zero is no fence
// - a zero face rides a lawful count (the drought's own zero the
// fence keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// lane's own swell, fall then fall prices the lane's own fade, a
// traded direction prices the lane's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held rescue count
// is no direction - the bars never invent; the watertrend family's
// own held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication.
//
// THE .223 SEAT MINE - the banked receipt's own trend (0d20b69c) the
// fire before rode; THE .222 SEAT THEIRS TOO - the parallel fire's own
// air bar glitch word the record holds. This word the water rescue
// lane's own seat takes - different cells the seats co-exist by (the
// receipt the deposit's own move prices, the rescue lane the water
// guard's own drownings price, the pass the crossing's own telemetry
// prices), ONE reader the book holds all words read.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already emits
// (the decompose's own first water rescue lane read - the cell the
// reader never priced across the faces before this word).

/**
 * The census - the family's own strict grammar, the word's own count
 * (the .223 bankedReceiptCount precedent the family's census rides).
 * Every line the rescue lane's ONE carrier shape classifies rides;
 * the water guard's other cells and the no-carrier and wrong-bracket
 * forms never ride. The seven skins and the [blind: ...] suffix skins
 * the same grammar holds.
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the rescue lane count (0 when the lines hold no
 *   rescue read - the zero a lawful count)
 */
export function waterRescueLaneCount (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && RESCUE_RE.test(l)) n++
  }
  return n
}

const RESCUE_RE = /^F(\\d+) \\[F\\1\\] water: (?:drowning rescue|rescue) .+$/

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {rescues}, prev: {rescues}, cur: {rescues} }
 * @returns {boolean}
 */
export function waterRescueLaneTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.rescues) && s.rescues >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the rescue lane's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {rescues}, prev: {rescues}, cur: {rescues} }
 * @returns {string|null} the row byte, or null
 */
export function waterRescueLaneTrendRow (e) {
  if (!waterRescueLaneTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.rescues - back.rescues
  const second = cur.rescues - prev.rescues
  const arc = \`\${back.rescues} -> \${prev.rescues} (\${first >= 0 ? '+' : ''}\${first}) -> \${cur.rescues} (\${second >= 0 ? '+' : ''}\${second})\`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "${TAIL.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"
  if (first > 0 && second > 0) {
    return \`the water rescue lane trend (v0.976.224): the water rescue lane's rise ran two steps deep - \${arc} - the water rescue lane's own swell \${tail}\`
  }
  if (first < 0 && second < 0) {
    return \`the water rescue lane trend (v0.976.224): the water rescue lane's fall ran two steps deep - \${arc} - the water rescue lane's own fade \${tail}\`
  }
  return \`the water rescue lane trend (v0.976.224): the water rescue lane's own swing - \${arc} - the rise and the fall traded seats between the faces \${tail}\`
}
`

// === 5. the test ===
const pinLines = wins.map(([f, a, b, c]) => {
  const shape = shapeOf(a, b, c)
  const CONST = shape === 'swell' ? 'SWELL' : shape === 'fade' ? 'FADE' : 'SWING'
  const TCONST = shape === 'swell' ? 'SWELL_TAIL' : shape === 'fade' ? 'FADE_TAIL' : 'SWING_TAIL'
  const note = f === 458 ? " THE FIELD'S OWN NEWEST WINDOW THE SCAN PRICES" : ''
  return `assert.deepStrictEqual(rowOf(T[${f - 2}], T[${f - 1}], T[${f}]), ${CONST} + '${arc(a, b, c)}' + ${TCONST}) // W${f}${note}`
}).join('\n')

const testHead = `// tests/unit/waterrescuelanetrend.test.mjs - THE WATER RESCUE LANE'S
// OWN TREND's own pin battery (v0.976.224 - THE .223 SEAT MINE: the
// banked receipt's own trend (0d20b69c) the fire before rode, this
// word the water rescue lane's own seat takes): the water guard's own
// rescue lane mass across the faces the field's own walk named first
// (the 'F<n> [F<n>] water: drowning rescue <skin>' + 'F<n> [F<n>]
// water: rescue <skin>' family the water guard's rescue lane prints
// while a bot drowns) - the strict grammar the field's own proof
// prices (the backreference bracket form, the seven skins and the
// [blind: ...] suffix skins the same lane holds - the pass cell and
// the hazard memorize cell and the shore pin cell and the transit
// target cell and the air bar glitch cell and the walk-lane's own
// water-rescue why-cell never ride, the field proof 23/23 census==raw
// zero mismatches - scripts/fieldread-waterrescuelane-1045.mjs), the
// field's own chains byte-exact (THE CELL'S OWN WEIGHT 2867u the
// twenty-three faces' own total, the faces 436..458 the artifact
// fetches re-spoke, THE NO-DROUGHT FIELD the zero never rode, THE
// FLOOR the count 25 rode ONCE the face 436's own floor, THE FIELD'S
// OWN TOP the count 279 rode ONCE the face 453's own crest - THE
// STORM), THE BOOK TWENTY-ONE of TWENTY-ONE windows speaking
// (THIRTEEN swings, SEVEN swells, ONE fade, the ZERO honest silences
// - the family's own restless skin), the window pins (the honest arc
// each window holds), the bounds' own legs pins (+152 rode ONE leg
// ONE boundary 437/438 - THE STORM'S OWN CLIMB, -189 rode ONE leg
// ONE boundary 453/454 - THE STORM'S OWN DRAIN the heaviest fall the
// record holds; the round trips the ZERO the book holds), the census
// battery (waterRescueLaneCount the family's own count the fold rides
// - the .223 bankedReceiptCount precedent the family's census rides,
// the seven skins ride whole, the junk forms never ride), the fence
// battery (the fold proves itself or the word prices nothing - the
// lawful zero the fence keeps, the extra keys never rejected), the
// byte-pin battery (the tail rides byte-exact - the seat the
// family's own enumeration holds), the lanes-never-merge battery
// (the pass and the hazard memorize and the shore pin and the transit
// target and the air bar glitch cells never ride the rescue fold)
import assert from 'node:assert'
import { waterRescueLaneCount, waterRescueLaneTrendConsistent, waterRescueLaneTrendRow } from '../../src/lib/waterrescuelanetrend.mjs'

const TAIL = "${TAIL.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"

const HEAD = 'the water rescue lane trend (v0.976.224)'
const SWING = HEAD + ": the water rescue lane's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the water rescue lane's rise ran two steps deep - "
const SWELL_TAIL = " - the water rescue lane's own swell " + TAIL
const FADE = HEAD + ": the water rescue lane's fall ran two steps deep - "
const FADE_TAIL = " - the water rescue lane's own fade " + TAIL

const rowOf = (a, b, c) => {
  const d1 = b - a, d2 = c - b
  const arc = \`\${a} -> \${b} (\${d1 >= 0 ? '+' : ''}\${d1}) -> \${c} (\${d2 >= 0 ? '+' : ''}\${d2})\`
  if (d1 === 0 || d2 === 0) return null
  if (d1 > 0 && d2 > 0) return SWELL + arc + SWELL_TAIL
  if (d1 < 0 && d2 < 0) return FADE + arc + FADE_TAIL
  return SWING + arc + SWING_TAIL
}
const foldOf = (a, b, c) => ({ back: { rescues: a }, prev: { rescues: b }, cur: { rescues: c } })

// === THE FIELD SERIES (the honest twenty-three-face window,
// byte-exact) ===
const SERIES = ${JSON.stringify(SERIES)}
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 2867) // THE CELL'S OWN WEIGHT 2867u
assert.strictEqual(SERIES.length, 23)
assert.strictEqual(T[436], 25) // THE FLOOR rode ONCE (the face 436's own floor)
assert.strictEqual(T[453], 279) // THE FIELD'S OWN TOP rode ONCE (the face 453's own crest - THE STORM)
assert.ok(Object.values(T).every(v => v > 0)) // THE NO-DROUGHT FIELD the zero never rode
// THE BOOK TWENTY-ONE of TWENTY-ONE windows speaking - THIRTEEN
// swings, SEVEN swells, ONE fade, the ZERO honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 21)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE)); continue }
  swings++; assert.ok(row.startsWith(SWING))
}
assert.strictEqual(swells, 7)
assert.strictEqual(fades, 1)
assert.strictEqual(swings, 13)
assert.strictEqual(silences, 0)
// the window pins byte-exact (the honest arc each window holds)
${pinLines}
// the bounds' own legs: +152 ONE leg ONE boundary 437/438 (THE
// STORM'S OWN CLIMB), -189 ONE leg ONE boundary 453/454 (THE STORM'S
// OWN DRAIN the heaviest fall the record holds)
const legs = SERIES.map(([, v]) => v)
let maxRise = 0, maxFall = 0, riseRides = 0, fallRides = 0
for (let i = 1; i < legs.length; i++) {
  const d = legs[i] - legs[i - 1]
  if (d > maxRise) maxRise = d
  if (d < maxFall) maxFall = d
}
for (let i = 1; i < legs.length; i++) {
  const d = legs[i] - legs[i - 1]
  if (d === maxRise) riseRides++
  if (d === maxFall) fallRides++
}
assert.strictEqual(maxRise, 152)
assert.strictEqual(riseRides, 1) // ONE leg ONE boundary 437/438
assert.strictEqual(maxFall, -189)
assert.strictEqual(fallRides, 1) // ONE leg ONE boundary 453/454
// the round trips the ZERO the book holds (the swings never mirrored)
let mirrors = 0
for (let i = 2; i < SERIES.length; i++) {
  const a = SERIES[i - 2][1], b = SERIES[i - 1][1], c = SERIES[i][1]
  if (b - a !== 0 && c - b === -(b - a)) mirrors++
}
assert.strictEqual(mirrors, 0)

// === THE CENSUS BATTERY (the word's own count the fold rides) ===
// the seven skins ride whole (the start and the blind live and the
// released and the standing down and the complete and the aborted and
// the timeout - the suffix skins the same lane holds)
const faceSample = [
  'F10 [F10] water: drowning rescue start (drowning, oxygen 15)',
  'F16 [F16] water: rescue blind live (pass 3, air=11, no ground truth yet - the climb flies on buoyancy alone)',
  'F5 [F5] water: rescue blind live (pass 2, air=reset(-1), no ground truth yet - the climb flies on buoyancy alone)',
  'F16 [F16] water: rescue released (surface-safe, open water - no land known; the walk gate reopens) in 5.0s',
  'F16 [F16] water: rescue standing down (frozen physics - the walk gate reopens, the reconnect lane owns a dead client) [blind: 2 passes, 1 shore scans hit, 3 standing probes - no ground truth ever gathered] in 12.3s',
  'F16 [F16] water: rescue complete in 7.2s',
  'F16 [F16] water: rescue complete (standing wet - shallow water is not drowning) in 4.0s',
  'F16 [F16] water: rescue aborted (dead mid-rescue - the hazard stays at the death spot) in 9.1s',
  'F16 [F16] water: rescue timeout (still wet, 3 passes, 2 probes, tail dry/dry/dry) in 30.0s',
  'F9 [F9] water: drowning rescue start (drowning, oxygen -1)'
]
assert.strictEqual(waterRescueLaneCount(faceSample), 10)
// the other emitters' lines never ride (the lanes never merge - the
// pass cell and the hazard memorize cell and the shore pin cell and
// the transit target cell and the air bar glitch cell and the
// walk-lane's own water-rescue why-cell and the no-carrier and
// wrong-bracket and junk forms)
const junk = [
  'F16 [F16] water: pass 0 head=wet shore=none land=n/a y=60.0 o2=15 probes=0 at=[-122,60,372]',
  'F16 [F16] water: hazard memorized at [-120,62,376] (1 live, fleet-wide)',
  'F16 [F16] water: shore pinned (r=2 after 8 passes - the shoreline owns this swim; the release takes over)',
  'F10 [F10] water: transit toward known land (birch_log) at [-131,396] d=6',
  'F16 [F16] water: air-bar glitch ignored (oxygen 0 on dry land at [-122,60,372], 3 total)',
  'F2 [F2] walk water-rescue: the walk-lane why-cell never rides the rescue fold',
  'F16 water: drowning rescue start (drowning, oxygen 15)',
  'water: rescue complete in 5.0s',
  'F16 [F17] water: rescue complete in 5.0s',
  'F16 [F16] water: rescued five bots',
  'F16 [F16] water: rescue',
  'F16 [F16] water: drowning rescue',
  'F16 [F16] water: rescue complete in 5.0s extra tail words ride whole'
]
assert.strictEqual(waterRescueLaneCount(junk.slice(0, 12)), 0) // the lanes and the junk forms never ride
assert.strictEqual(waterRescueLaneCount([junk[12]]), 1) // the open tail rides whole (the lane's own law)
// the zero a lawful count (the drought's own zero the fence keeps)
const dry = ['launching 19 bots for 600s -> targets sand, gravel, dirt, stone']
assert.strictEqual(waterRescueLaneCount(dry), 0)
// the census's own null pass (no lines, no read - the zero rides)
assert.strictEqual(waterRescueLaneCount(null), 0)
assert.strictEqual(waterRescueLaneCount(undefined), 0)
assert.strictEqual(waterRescueLaneCount('no lines'), 0)
assert.strictEqual(waterRescueLaneCount([42, {}]), 0)

// === THE FENCE BATTERY (the fold proves itself or prices nothing) ===
assert.strictEqual(waterRescueLaneTrendConsistent(null), false)
assert.strictEqual(waterRescueLaneTrendConsistent(undefined), false)
assert.strictEqual(waterRescueLaneTrendConsistent('no'), false)
assert.strictEqual(waterRescueLaneTrendConsistent([1, 2]), false)
assert.strictEqual(waterRescueLaneTrendConsistent({}), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1 }, prev: { rescues: 2 } }), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1 }, prev: { rescues: 2 }, cur: { rescues: '3' } }), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1 }, prev: { rescues: 2 }, cur: { rescues: -1 } }), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1.5 }, prev: { rescues: 2 }, cur: { rescues: 3 } }), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 0 }, prev: { rescues: 0 }, cur: { rescues: 0 } }), true) // the lawful zero
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1 }, prev: { rescues: 2 }, cur: { rescues: 3 }, extra: 'rides' }), true) // extra keys never rejected
// the row's own fence
assert.strictEqual(waterRescueLaneTrendRow(null), null)
assert.strictEqual(waterRescueLaneTrendRow({ back: { rescues: 1 }, prev: { rescues: 2 }, cur: { rescues: 'x' } }), null)
assert.strictEqual(waterRescueLaneTrendRow({ back: { rescues: -1 }, prev: { rescues: 2 }, cur: { rescues: 3 } }), null)
// the held step the honest silence (the family's own held law)
assert.strictEqual(waterRescueLaneTrendRow(foldOf(5, 5, 9)), null)
assert.strictEqual(waterRescueLaneTrendRow(foldOf(5, 9, 9)), null)
assert.strictEqual(waterRescueLaneTrendRow(foldOf(0, 0, 0)), null)

// === THE BYTE-PIN BATTERY (the tail rides byte-exact) ===
const sample = waterRescueLaneTrendRow(foldOf(25, 77, 229))
assert.ok(sample.startsWith(HEAD + ':'))
assert.ok(sample.endsWith(TAIL))
assert.ok(sample.includes(' - the water rescue lane seat, co-existence by seat never by duplication)'))
assert.ok(sample.startsWith(HEAD + ": the water rescue lane's rise ran two steps deep - 25 -> 77 (+52) -> 229 (+152) - the water rescue lane's own swell "))
// the byte-pin law: no shape verdict words (no return, no repeat, no
// stay, no run) nor the seats' own verdict word (no owns) nor the
// dynasty's own (no dynasty, no turn)
for (const w of [' return', ' repeat', ' stay', ' run ', ' owns ', ' dynasty', ' turn ']) {
  assert.ok(!sample.includes(w), 'byte-pin leak: ' + w)
}

// === THE LANES-NEVER-MERGE BATTERY ===
// the water guard's other cells never ride the rescue fold - the
// rescue lane alone (the junk battery above holds the other cells'
// own lines at zero); the fold the word's own count feeds never
// invents from the pass's own telemetry
const mixedFace = [
  'F16 [F16] water: pass 0 head=wet shore=none land=n/a y=60.0 o2=15 probes=0 at=[-122,60,372]',
  'F16 [F16] water: hazard memorized at [-120,62,376] (1 live, fleet-wide)',
  'F16 [F16] water: drowning rescue start (drowning, oxygen 15)',
  'F16 [F16] water: rescue released (surface-safe, open water - no land known; the walk gate reopens) in 5.0s'
]
assert.strictEqual(waterRescueLaneCount(mixedFace), 2) // the rescue lines alone

console.log('waterrescuelanetrend: all pins green')
`

writeFileSync('src/lib/waterrescuelanetrend.mjs', modHead)
writeFileSync('tests/unit/waterrescuelanetrend.test.mjs', testHead)
console.log('generated src/lib/waterrescuelanetrend.mjs + tests/unit/waterrescuelanetrend.test.mjs')
console.log(`field: ${total}u / ${SERIES.length}f; book ${swings} swings ${swells} swells ${fades} fades ${silences} silences; bounds +${maxRise} (${riseBoundary}) / ${maxFall} (${fallBoundary}); top ${top}@${topFaces} floor ${floor}@${floorFaces}`)
