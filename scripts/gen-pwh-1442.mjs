#!/usr/bin/env node
// (v0.976.226 fire 1442) THE PRE-POSITION WALK-HOME TREND'S OWN
// GENERATOR - builds src/lib/prepositionwalkhometrend.mjs +
// tests/unit/prepositionwalkhometrend.test.mjs +
// scripts/fieldread-prepositionwalkhome-1442.mjs: the tail
// enumeration rides byte-exact from the furnacenowalkopentrend's own
// tail (the one-emitter seat law's own chain, the new seat appended),
// the series the faces/ field prices live (never hand-copied), every
// expectation asserted loud before the files emit.
// usage: node scripts/gen-pwh-1442.mjs <faces-dir> <expected-faces> [expected-total]
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2] || 'faces'
const EXPECT_FACES = Number(process.argv[3] || 24)
const EXPECT_TOTAL = process.argv[4] != null ? Number(process.argv[4]) : null
if (!statSync(dir, { throwIfNoEntry: false })?.isDirectory()) { console.error('faces dir missing'); process.exit(1) }

// === 1. the tail chain (byte-exact from the .225 word's own tail) ===
const fnoSrc = readFileSync('src/lib/furnacenowalkopentrend.mjs', 'utf8')
const tailLine = fnoSrc.split('\n').find(l => l.includes('const tail = "'))
if (!tailLine) { console.error('fno tail line not found'); process.exit(1) }
const inner = tailLine.slice(tailLine.indexOf('"') + 1, tailLine.lastIndexOf('"'))
const OLD_END = ", this word prices the furnace no-walk open's own mass across the faces - the furnace no-walk open seat, co-existence by seat never by duplication)"
if (!inner.endsWith(OLD_END)) { console.error('fno tail end drifted: ' + inner.slice(-120)); process.exit(1) }
const NEW_END = ", the furnace no-walk open's own trend prices the furnace no-walk open's own mass across the faces, this word prices the pre-position walk home's own mass across the faces - the pre-position walk home seat, co-existence by seat never by duplication)"
const TAIL = inner.slice(0, inner.length - OLD_END.length) + NEW_END

// === 2. the field series (live from the faces) ===
const WALK_HOME_RE = /^F\d+ pre-position: \d+b from yard, t-\d+s - walking home$/
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
const SERIES = []
let total = 0
let rawMentions = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  let n = 0
  for (const l of lines) {
    if (typeof l !== 'string' || !l.includes('pre-position:')) continue
    rawMentions++
    if (WALK_HOME_RE.test(l)) n++
  }
  total += n
  SERIES.push([Number(f.slice(4)), n])
}
if (SERIES.length !== EXPECT_FACES) { console.error(`expected ${EXPECT_FACES} faces, got ${SERIES.length}`); process.exit(1) }
if (EXPECT_TOTAL != null && total !== EXPECT_TOTAL) { console.error(`expected the ${EXPECT_TOTAL}u cell, got ${total}`); process.exit(1) }
const V = Object.fromEntries(SERIES)
const MISSES = rawMentions - total
if (MISSES !== 0) { console.error(`the strict grammar drifted: ${MISSES} pre-position mentions outside the shape`); process.exit(1) }

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
const legs = SERIES.map(([, v]) => v)
let maxRise = 0, maxFall = 0, riseRides = 0, fallRides = 0, riseBoundary = '', fallBoundary = ''
for (let i = 1; i < legs.length; i++) {
  const d = legs[i] - legs[i - 1]
  if (d > maxRise) { maxRise = d; riseRides = 1; riseBoundary = `${SERIES[i - 1][0]}/${SERIES[i][0]}` } else if (d === maxRise && d > 0) { riseRides++; riseBoundary = `${riseBoundary} + ${SERIES[i - 1][0]}/${SERIES[i][0]}` }
  if (d < maxFall) { maxFall = d; fallRides = 1; fallBoundary = `${SERIES[i - 1][0]}/${SERIES[i][0]}` } else if (d === maxFall && d < 0) { fallRides++; fallBoundary = `${fallBoundary} + ${SERIES[i - 1][0]}/${SERIES[i][0]}` }
}
let roundTrips = 0
for (const [, a, b, c] of wins) { const d1 = b - a, d2 = c - b; if (d1 !== 0 && d2 !== 0 && d1 === -d2) roundTrips++ }
const top = Math.max(...legs), floor = Math.min(...legs)
const topFaces = SERIES.filter(([, v]) => v === top).map(([f]) => f)
const floorFaces = SERIES.filter(([, v]) => v === floor).map(([f]) => f)
const speaking = SERIES.filter(([, v]) => v > 0).length
const arc = (a, b, c) => `${a} -> ${b} (${b - a >= 0 ? '+' : ''}${b - a}) -> ${c} (${c - b >= 0 ? '+' : ''}${c - b})`
const shapeOf = (a, b, c) => { const d1 = b - a, d2 = c - b; if (d1 === 0 || d2 === 0) return 'silence'; if (d1 > 0 && d2 > 0) return 'swell'; if (d1 < 0 && d2 < 0) return 'fade'; return 'swing' }
const NUM = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY', 'TWENTY-ONE', 'TWENTY-TWO', 'TWENTY-THREE']
const WINTEXT = wins.map(([f, a, b, c]) => `the W${f} ${shapeOf(a, b, c)} ${arc(a, b, c)}`).join(', ')
const CHAIN = SERIES.map(([f, v], i) => `${i === SERIES.length - 1 ? 'the F' + f : 'the ' + f} ${v}`).join(', ')
const newest = SERIES[SERIES.length - 1][0]
console.log(`series: ${SERIES.length} faces, total ${total}u, top ${top}@${topFaces.join(',')} floor ${floor}@${floorFaces.join(',')}`)
console.log(`book: ${wins.length} windows - ${swings} swings ${swells} swells ${fades} fades ${silences} silences; bounds +${maxRise} x${riseRides} (${riseBoundary}) / ${maxFall} x${fallRides} (${fallBoundary}); round trips ${roundTrips}`)

// === 4. the module ===
const modHead = `// (v0.976.226) THE PRE-POSITION WALK-HOME'S OWN TREND - the fleet
// harness's own end-phase walk-home mass across the faces beside the
// raw lane words: the field's own scan named the lane the seat first
// (the 'F<n> pre-position: <N>b from yard, t-<N>s - walking home'
// family the harness prints when the end-phase scheduler turns the
// bot home before the final bank - ONE emitter, ONE strict shape, the
// heaviest clean unpriced voice the fire-1442 walk named: the
// hardened seathunt's literal probe the map priced seat by seat, the
// spare pick's own 389u colon cell the .175 word's raw-colon seat
// prices, the sword's own 389u docket cell the .160 word's raw-docket
// seat prices, the torch craft's own 248u terminal cell the torch
// book's own census holds the next seat prices beside, the smelt
// hold's own 196u cell a lighter sibling beside - the walk home's own
// 388u+ the heaviest clean voice the pre-position's own end-phase
// prints) - the walk home the bot's own event prices (per bot, per
// end-phase trip, the t-<N>s deadline read rides the line), the
// ticker's own clock the reader's own audit holds - a different
// voice, the lanes never merge. THE RAW LAW: every line the emitter
// prints rides, no exclusion the family needs - the line's own count
// rides whole whatever the distance or the deadline reads; the
// pre-position's OTHER cells never ride (the census summary
// 'pre-position census: armed N, landed N (+Nu), failed N' lines the
// bankcensus's own parse v0.811.0 holds and the climb-out book's own
// pre-position skin the .210 word's cell prices and the hop lane's
// own 'walking home instead' skin the hop census holds and the
// reloghandshake's own comment mentions never ride - the walk-home
// cell alone).
// THE CENSUS LAW: the word owns the count - no trend word owned the
// walk-home cell (the .223 bankedReceiptCount precedent the family's
// census rides, the .220 verticalDoomSkipCount and the .224
// waterRescueLaneCount the same law hold) - prePositionWalkHomeCount
// the family's own count the fold rides, one parser never a second;
// the strict grammar the field's own proof prices (the field proof
// ${SERIES.length}/${SERIES.length} census==raw zero mismatches -
// scripts/fieldread-prepositionwalkhome-1442.mjs, the faces 436..${newest}
// the artifact fetches re-spoke).
// THE CELL'S OWN WEIGHT ${total}u the twenty-four faces' own total (the
// honest window; ${CHAIN}).
// THE BOOK ${NUM[wins.length]} of ${NUM[wins.length]} windows speaking (${NUM[swings]} swings, ${NUM[swells]}
// swells, ${NUM[fades]} fades, ${NUM[silences]} honest silences - the family's own
// skin): ${WINTEXT}.
// THE BOUNDS' OWN LEGS: the +${maxRise} the max rise rode ${NUM[riseRides]} leg${riseRides === 1 ? '' : 's'}
// ${riseRides === 1 ? 'ONE boundary' : 'the boundaries'} ${riseBoundary}, the ${maxFall} the max fall rode ${NUM[fallRides]}
// leg${fallRides === 1 ? '' : 's'} ${fallRides === 1 ? 'ONE boundary' : 'the boundaries'} ${fallBoundary}; the round trips the ${NUM[roundTrips]}
// the book holds.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier
// chain). The fold receives the count per face (prePositionWalkHome
// Count owns the census - the word's own strict grammar, never a
// fork). No two-back face given -> no read (the carrier's own null
// pass); the lane's own zero is no fence - a zero face rides a
// lawful count (the drought's own zero the fence keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// walk homes' own swell, fall then fall prices the walk homes' own
// fade, a traded direction prices the walk homes' own swing, a held
// step (any count-to-count zero) prices the honest silence (a held
// count is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the seats' own verdict word (no owns) nor the dynasty's
// own (no dynasty, no turn) - co-existence by seat never by
// duplication.
//
// THE .225 SEAT THEIRS - their furnace no-walk open's own trend
// (62ed0e60) the fire before rode; MY .224 the water rescue lane's
// own trend (752c029c) beside. This word the pre-position walk
// home's own seat takes - different cells the seats co-exist by (the
// open the smelting lane's own machine prices, the rescue lane the
// water guard's own drownings price, the walk home the end-phase's
// own scheduler prices), ONE reader the book holds all words read.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first walk-home read - the cell the
// reader never priced across the faces before this word).

/**
 * The census - the family's own strict grammar, the word's own count
 * (the .223 bankedReceiptCount precedent the family's census rides).
 * Every line the walk-home lane's ONE shape classifies rides; the
 * census summary and the climb-out skin and the hop lane's
 * walking-home-instead skin never ride.
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the walk-home count (0 when the lines hold no
 *   walk home - the zero a lawful count)
 */
export function prePositionWalkHomeCount (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && WALK_HOME_RE.test(l)) n++
  }
  return n
}

const WALK_HOME_RE = /^F\\d+ pre-position: \\d+b from yard, t-\\d+s - walking home\$/

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {walks}, prev: {walks}, cur: {walks} }
 * @returns {boolean}
 */
export function prePositionWalkHomeTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.walks) && s.walks >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the walk homes' own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {walks}, prev: {walks}, cur: {walks} }
 * @returns {string|null} the row byte, or null
 */
export function prePositionWalkHomeTrendRow (e) {
  if (!prePositionWalkHomeTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.walks - back.walks
  const second = cur.walks - prev.walks
  const arc = \`\${back.walks} -> \${prev.walks} (\${first >= 0 ? '+' : ''}\${first}) -> \${cur.walks} (\${second >= 0 ? '+' : ''}\${second})\`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "${TAIL.replace(/\\\\/g, '\\\\\\\\').replace(/"/g, '\\\\"')}"
  if (first > 0 && second > 0) {
    return \`the pre-position walk home trend (v0.976.226): the walk homes' rise ran two steps deep - \${arc} - the walk homes' own swell \${tail}\`
  }
  if (first < 0 && second < 0) {
    return \`the pre-position walk home trend (v0.976.226): the walk homes' fall ran two steps deep - \${arc} - the walk homes' own fade \${tail}\`
  }
  return \`the pre-position walk home trend (v0.976.226): the walk homes' own swing - \${arc} - the rise and the fall traded seats between the faces \${tail}\`
}
`
writeFileSync('src/lib/prepositionwalkhometrend.mjs', modHead)
console.log('wrote src/lib/prepositionwalkhometrend.mjs')

// === 5. the test ===
const pinLines = wins.map(([f, a, b, c]) => {
  const shape = shapeOf(a, b, c)
  if (shape === 'silence') return `assert.strictEqual(rowOf(T[${f - 2}], T[${f - 1}], T[${f}]), null) // the W${f} held step - the honest silence`
  const CONST = shape === 'swell' ? 'SWELL' : shape === 'fade' ? 'FADE' : 'SWING'
  const TCONST = shape === 'swell' ? 'SWELL_TAIL' : shape === 'fade' ? 'FADE_TAIL' : 'SWING_TAIL'
  const note = f === newest ? " MY WORD'S OWN FIRST WINDOW THE NEXT DISPATCH'S FACE PRICES" : ''
  return `assert.strictEqual(rowOf(T[${f - 2}], T[${f - 1}], T[${f}]), ${CONST} + '${arc(a, b, c)}' + ${TCONST}) // the W${f} ${shape}${note}`
}).join('\n')
const boundaryNoteRise = riseRides === 1 ? " // the max rise rode ONE leg ONE boundary" : ' // the max rise rode ' + NUM[riseRides] + ' legs'
const boundaryNoteFall = fallRides === 1 ? " // the max fall rode ONE leg ONE boundary" : ' // the max fall rode ' + NUM[fallRides] + ' legs'
const sample1 = "F5 pre-position: 56b from yard, t-183s - walking home"
const sample2 = "F2 pre-position: 39b from yard, t-147s - walking home"
const sample3 = "F1 pre-position: 40b from yard, t-143s - walking home"

const testSrc = `// tests/unit/prepositionwalkhometrend.test.mjs - THE PRE-POSITION
// WALK-HOME'S OWN TREND's own pin battery (v0.976.226 - THE .225 SEAT
// THEIRS: the furnace no-walk open's own trend (62ed0e60) the fire
// before rode, this word the pre-position walk home's own seat
// takes): the fleet harness's own end-phase walk-home mass across the
// faces the field's own scan named first (the 'F<n> pre-position:
// <N>b from yard, t-<N>s - walking home' family the harness prints
// when the end-phase scheduler turns the bot home before the final
// bank) - the strict grammar the field proved zero mismatch (the
// field proof ${SERIES.length}/${SERIES.length} census==raw zero mismatches -
// scripts/fieldread-prepositionwalkhome-1442.mjs, the faces 436..${newest}
// the artifact fetches re-spoke), the field's own chains byte-exact
// (THE CELL'S OWN WEIGHT ${total}u the twenty-four faces' own total), THE TOP
// the count ${top} rode ${topFaces.length === 1 ? 'ONCE' : 'the rides the book holds'} (the face${topFaces.length === 1 ? ' ' + topFaces[0] : 's ' + topFaces.join(' and ')}'s own crest), THE FLOOR the
// count ${floor} rode ${floorFaces.length === 1 ? 'ONCE' : 'the rides the book holds'} (the face${floorFaces.length === 1 ? ' ' + floorFaces[0] : 's ' + floorFaces.join(' and ')}'s own floor), THE BOOK
// ${NUM[wins.length]} of ${NUM[wins.length]} windows speaking (${NUM[swings]} swings, ${NUM[swells]} swells, ${NUM[fades]}
// fades, ${NUM[silences]} honest silences - the family's own skin), the
// window pins byte-exact (all ${wins.length} windows), the bounds' own legs
// pins (+${maxRise} rode ${NUM[riseRides]} leg${riseRides === 1 ? '' : 's'} ${riseBoundary}, ${maxFall} rode ${NUM[fallRides]} leg${fallRides === 1 ? '' : 's'}
// ${fallBoundary}; the round trips the ${NUM[roundTrips]} the book holds), the
// census battery (prePositionWalkHomeCount the family's own count the
// fold rides - the word owns the count, one parser never a second -
// the strict shape rides whole, the census summary and the climb-out
// skin and the hop lane's walking-home-instead skin and the junk
// forms never ride), the fence battery (the fold proves itself or the
// word prices nothing - the lawful zero the fence keeps, the extra
// keys never rejected), the byte-pin battery (the tail rides
// byte-exact - the seat the family's own enumeration holds), the
// lanes-never-merge battery (the summary lines and the climb-out
// skins and the hop lines never ride the walk-home fold)
import assert from 'node:assert'
import { prePositionWalkHomeCount, prePositionWalkHomeTrendConsistent, prePositionWalkHomeTrendRow } from '../../src/lib/prepositionwalkhometrend.mjs'

const TAIL = ${JSON.stringify(TAIL)}

const HEAD = 'the pre-position walk home trend (v0.976.226)'
const SWING = HEAD + ": the walk homes' own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the walk homes' rise ran two steps deep - "
const SWELL_TAIL = " - the walk homes' own swell " + TAIL
const FADE = HEAD + ": the walk homes' fall ran two steps deep - "
const FADE_TAIL = " - the walk homes' own fade " + TAIL

const rowOf = (a, b, c) => {
  const d1 = b - a, d2 = c - b
  const arc = \`\${a} -> \${b} (\${d1 >= 0 ? '+' : ''}\${d1}) -> \${c} (\${d2 >= 0 ? '+' : ''}\${d2})\`
  if (d1 === 0 || d2 === 0) return null
  if (d1 > 0 && d2 > 0) return SWELL + arc + SWELL_TAIL
  if (d1 < 0 && d2 < 0) return FADE + arc + FADE_TAIL
  return SWING + arc + SWING_TAIL
}
const foldOf = (a, b, c) => ({ back: { walks: a }, prev: { walks: b }, cur: { walks: c } })

// === THE FIELD SERIES (the honest twenty-four-face window, byte-exact) ===
const SERIES = ${JSON.stringify(SERIES)}
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), ${total}) // THE CELL'S OWN WEIGHT ${total}u
assert.strictEqual(SERIES.length, ${SERIES.length})
let speaking = 0
for (const [, v] of SERIES) { if (v > 0) speaking++ }
assert.strictEqual(speaking, ${speaking}) // the book: the faces the skin prices
assert.strictEqual(T[${topFaces[0]}], ${top}) // THE TOP
assert.strictEqual(T[${floorFaces[0]}], ${floor}) // THE FLOOR
// THE BOOK ${NUM[wins.length]} of ${NUM[wins.length]} windows speaking - ${NUM[swings]} swings,
// ${NUM[swells]} swells, ${NUM[fades]} fades, ${NUM[silences]} honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, ${wins.length})
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE)); continue }
  swings++; assert.ok(row.startsWith(SWING))
}
assert.strictEqual(swings, ${swings}) // ${NUM[swings]} swings - the family's own skin
assert.strictEqual(swells, ${swells}) // ${NUM[swells]} swells
assert.strictEqual(fades, ${fades}) // ${NUM[fades]} fades
assert.strictEqual(silences, ${silences}) // ${NUM[silences]} honest silences
// the window pins byte-exact (the head + the arc byte)
${pinLines}
// THE BOUNDS' OWN LEGS: +${maxRise} rode ${NUM[riseRides]} leg${riseRides === 1 ? '' : 's'} ${riseBoundary},
// ${maxFall} rode ${NUM[fallRides]} leg${fallRides === 1 ? '' : 's'} ${fallBoundary}
const legs = []
for (let i = 1; i < SERIES.length; i++) legs.push([SERIES[i - 1][0], SERIES[i][0], SERIES[i][1] - SERIES[i - 1][1]])
let maxRise = null, maxFall = null
for (const [a, b, d] of legs) {
  if (maxRise === null || d > maxRise.d) maxRise = { d, b: a + '/' + b }
  if (maxFall === null || d < maxFall.d) maxFall = { d, b: a + '/' + b }
}
const riseBounds = legs.filter(([, , d]) => d === ${maxRise}).map(([a, b]) => a + '/' + b).join(' + ')
const fallBounds = legs.filter(([, , d]) => d === ${maxFall}).map(([a, b]) => a + '/' + b).join(' + ')
assert.strictEqual(maxRise.d, ${maxRise}); assert.strictEqual(riseBounds, '${riseBoundary}')${boundaryNoteRise}
assert.strictEqual(maxFall.d, ${maxFall}); assert.strictEqual(fallBounds, '${fallBoundary}')${boundaryNoteFall}
let roundTrips = 0
for (const [f, a, b, c] of wins) {
  const d1 = b - a, d2 = c - b
  if (d1 !== 0 && d2 !== 0 && d1 === -d2) roundTrips++
}
assert.strictEqual(roundTrips, ${roundTrips}) // the round trips the ${NUM[roundTrips]} the book holds

// === THE CENSUS BATTERY (prePositionWalkHomeCount - the strict grammar) ===
assert.strictEqual(prePositionWalkHomeCount([
  ${JSON.stringify(sample1)},
  ${JSON.stringify(sample2)},
  ${JSON.stringify(sample3)}
]), 3) // the strict shape rides whole - the distance and the deadline read
assert.strictEqual(prePositionWalkHomeCount([]), 0) // the honest zero
assert.strictEqual(prePositionWalkHomeCount(null), 0) // the junk input
assert.strictEqual(prePositionWalkHomeCount([null, 42, undefined]), 0) // non-strings skipped
// the junk forms never ride (the grammar the shape keeps)
assert.strictEqual(prePositionWalkHomeCount([
  'pre-position census: armed 9, landed 7 (+303u), failed 2 (top why: nothing to deposit x1) - the seat\\'s own delivery, first priced', // the census summary lane - bankcensus\\'s own read
  'F2 climb out (pre-position): OK +4 levels (4 steps, 11 dug, 10s)', // the climb-out book\\'s own skin - the .210 word\\'s cell
  'F5 [F5] pre-position: 56b from yard, t-183s - walking home', // the doubled tag - no such print the lane holds
  'pre-position: 56b from yard, t-183s - walking home', // the bare form - no F prefix
  'F5 pre-position: 56b from yard, t-183s - walking home instead', // the wrong tail - the hop lane\\'s skin
  'F5 pre-position: 56 blocks from yard, t-183s - walking home', // the wrong unit
  'F5 pre-position: 56b from yard - walking home', // the deadline read missing
  'F5 pre-position: -56b from yard, t-183s - walking home' // the negative
]), 0)

// === THE FENCE BATTERY ===
assert.strictEqual(prePositionWalkHomeTrendConsistent(foldOf(0, 0, 0)), true) // the lawful zero
assert.strictEqual(prePositionWalkHomeTrendConsistent(foldOf(10, 15, 35)), true)
assert.strictEqual(prePositionWalkHomeTrendConsistent(null), false)
assert.strictEqual(prePositionWalkHomeTrendConsistent(undefined), false)
assert.strictEqual(prePositionWalkHomeTrendConsistent([]), false)
assert.strictEqual(prePositionWalkHomeTrendConsistent({ back: { walks: 1 }, prev: { walks: 2 } }), false) // the cur missing
assert.strictEqual(prePositionWalkHomeTrendConsistent({ back: { walks: -1 }, prev: { walks: 2 }, cur: { walks: 3 } }), false) // the negative never proves
assert.strictEqual(prePositionWalkHomeTrendConsistent({ back: { walks: 1.5 }, prev: { walks: 2 }, cur: { walks: 3 } }), false) // the float never proves
assert.strictEqual(prePositionWalkHomeTrendConsistent({ back: { walks: 1 }, prev: { walks: 2 }, cur: { walks: 3 }, extra: 'rides' }), true) // extra keys never rejected

// === THE BYTE-PIN BATTERY (the row byte, the tail the seat holds) ===
assert.strictEqual(prePositionWalkHomeTrendRow(null), null) // the fence holds
assert.strictEqual(prePositionWalkHomeTrendRow(foldOf(5, 5, 9)), null) // the held first step - the honest silence
assert.strictEqual(prePositionWalkHomeTrendRow(foldOf(5, 9, 9)), null) // the held second step
const swellRow = prePositionWalkHomeTrendRow(foldOf(${wins.find(w => shapeOf(w[1], w[2], w[3]) === 'swell') ? wins.find(w => shapeOf(w[1], w[2], w[3]) === 'swell').slice(1).join(', ') : '8, 14, 22'}))
assert.ok(swellRow.startsWith(SWELL)) // the swell's head byte
assert.ok(swellRow.endsWith(TAIL)) // the tail byte-exact
assert.ok(!swellRow.includes('owns')) // the seats' own verdict word never rides
assert.ok(!swellRow.includes('dynasty') && !swellRow.includes('turn')) // the dynasty's own never rides
const fadeRow = prePositionWalkHomeTrendRow(foldOf(${wins.find(w => shapeOf(w[1], w[2], w[3]) === 'fade') ? wins.find(w => shapeOf(w[1], w[2], w[3]) === 'fade').slice(1).join(', ') : '35, 14, 10'}))
assert.ok(fadeRow.startsWith(FADE)) // the fade's head byte
assert.ok(fadeRow.endsWith(TAIL))
const swingRow = prePositionWalkHomeTrendRow(foldOf(${wins.find(w => shapeOf(w[1], w[2], w[3]) === 'swing') ? wins.find(w => shapeOf(w[1], w[2], w[3]) === 'swing').slice(1).join(', ') : '15, 35, 14'}))
assert.ok(swingRow.startsWith(SWING)) // the swing's head byte
assert.ok(swingRow.endsWith(TAIL))

// === THE LANES-NEVER-MERGE BATTERY ===
assert.strictEqual(prePositionWalkHomeCount([
  'pre-position census: armed 10, landed 3 (+378u), failed 3 (top why: chest unreachable x2) - the seat\\'s own delivery, first priced', // the summary lane
  'F1 climb out (pre-position): OK +6 levels (6 steps, 15 dug, 14s)', // the climb-out skin
  'F4 [F4] hop: chest at [-122,65,407] d=50 zero: chest beyond the hop search radius 48 - walking home instead', // the hop lane
  'F9 [F9] craft torches: skip (no coal: sticks 6 coals 0)', // the torch lane
  '[F8] furnace within reach - opening without a walk' // the smelting lane
]), 0) // the lanes never merge - the walk-home cell alone

console.log('prepositionwalkhometrend battery: all pins green')
`
writeFileSync('tests/unit/prepositionwalkhometrend.test.mjs', testSrc)
console.log('wrote tests/unit/prepositionwalkhometrend.test.mjs')

// === 6. the field read ===
const fieldSrc = `#!/usr/bin/env node
// (v0.976.226 fire 1442) THE WALK-HOME CENSUS'S OWN FIELD READ - the
// census's own proof over the faces: prePositionWalkHomeCount over
// each face's own lines must equal the raw strict-grammar count (the
// SAME regex the word holds - one parser, never a fork) - zero
// mismatches the field's own law keeps.
// usage: node scripts/fieldread-prepositionwalkhome-1442.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { prePositionWalkHomeCount } from '../src/lib/prepositionwalkhometrend.mjs'

const dir = process.argv[2] || 'faces'
if (!statSync(dir, { throwIfNoEntry: false })?.isDirectory()) { console.error('faces dir missing'); process.exit(1) }
const WALK_HOME_RE = /^F\\d+ pre-position: \\d+b from yard, t-\\d+s - walking home\$/
const faces = readdirSync(dir).filter(d => /^face\\d+\$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
let mismatches = 0, total = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\\n')
  const census = prePositionWalkHomeCount(lines)
  let raw = 0
  for (const l of lines) { if (typeof l === 'string' && WALK_HOME_RE.test(l)) raw++ }
  total += raw
  if (census !== raw) { mismatches++; console.log('MISMATCH', f, 'census=' + census, 'raw=' + raw) }
}
console.log('field read: ' + faces.length + ' faces, ' + total + 'u, mismatches=' + mismatches)
if (mismatches !== 0) process.exit(1)
console.log('FIELD PROOF ' + faces.length + '/' + faces.length + ' census==raw zero mismatches HOLDS')
`
writeFileSync('scripts/fieldread-prepositionwalkhome-1442.mjs', fieldSrc)
console.log('wrote scripts/fieldread-prepositionwalkhome-1442.mjs')
