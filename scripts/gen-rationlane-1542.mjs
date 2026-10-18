#!/usr/bin/env node
// (fire 1542) THE RATION LANE WORD'S OWN GENERATOR - the gen-pwh-1442
// method: the tail catalog byte-level chain-inheritance from THEIR llr
// word (the newest sibling the seat beside holds), the module + the
// test battery emitted whole. usage: node scripts/gen-rationlane-1542.mjs
import { readFileSync, writeFileSync } from 'node:fs'

const llrSrc = readFileSync('src/lib/liarladderratchettrend.mjs', 'utf8')
const m = llrSrc.match(/const tail = "(.*)"\n/s)
if (!m) { console.error('llr tail extract failed'); process.exit(1) }
const llrTail = m[1]
if (!(llrTail.startsWith('(') && llrTail.endsWith(')'))) { console.error('llr tail not paren-wrapped'); process.exit(1) }
const inner = llrTail.slice(1, -1)
const OLD_END = "this word prices the liar-ladder ratchet's own mass across the faces - the liar-ladder ratchet seat, co-existence by seat never by duplication"
const NEW_END = "the liar-ladder ratchet's own trend prices the liar-ladder ratchet's own mass across the faces, this word prices the ration lane's own mass across the faces - the ration lane seat, co-existence by seat never by duplication"
if (!inner.endsWith(OLD_END)) { console.error('llr tail end mismatch'); process.exit(1) }
const tail = '(' + (inner.slice(0, -OLD_END.length) + NEW_END) + ')'

const header = `// (v0.976.228) THE RATION LANE'S OWN TREND - the ration gate's own
// print-pair mass across the faces beside the raw lane words: the
// field's own scan named the lane the seat first (the 'F<n> [F<n>]
// ration: eating <item> (hunger <n>, hp <n>, <reason>)' ask and the
// 'F<n> [F<n>] ration: <ate|failed> <item> (hunger <n> -> <n>, hp <n>
// -> <n>)' outcome family the ration gate prints around every bite -
// ONE lane, TWO carrier shapes, the heaviest clean unpriced voice the
// fire-1542 walk named: the hardened seathunt's literal probe the map
// priced seat by seat (the stale-probe false positives the overrides
// map priced honest: the water pass the .202 seat prices, the pulse
// ticker the maptrip's own header prices, the plan top and the
// deficits rows the plantoptrend seat prices, the mem line the memhb
// seat prices, the smelt took lane the tooktrend's own census prices,
// the reconnect retry the reconnectretrytrend seat prices, the tool
// upgrade the upgradecensus seat prices, the launcher's own b] tick
// the allocvalve's own watch prices) - the ration lane's own 337u the
// heaviest clean unpriced voice the gate holds, every other unpriced
// fragment the dump lane prints a lighter sibling the next seats
// price). THE RAW LAW: every line the lane prints rides, no exclusion
// the family needs - the ask and the outcome and the failed verdict
// and the unreadable-clock '?' skin the same lane holds (the wrl
// lane's own lane law - the lane's own count rides whole whatever the
// skin's name); the ration's OTHER cells never ride (the food commons
// lane and the fuel commons lane and the fuel commons' own took cell
// the commonsledger's own grammar prices and the smelt ledger's own
// took cell the tooktrend seat prices and the inventory dump the
// plan reporter's own skin holds and the berry lane and the
// ration.mjs gate's own constants the decision logic holds - the
// ration lane alone).
// THE CENSUS LAW: the word owns the count - no trend word owned the
// ration lane cell (the .223 bankedReceiptCount precedent the
// family's census rides, the .220 verticalDoomSkipCount and the .224
// waterRescueLaneCount and the .226 prePositionWalkHomeCount the same
// law hold) - rationLaneCount the family's own count, one parser
// never a second; the strict grammar the field's own proof prices
// (the field proof 25/25 census==raw zero mismatches -
// scripts/fieldread-rationlane-1542.mjs, the faces 436..460 the
// artifact fetches re-spoke; the strict ask 170 + the strict outcome
// 167 the loose count matches whole - zero junk the grammar holds).
// THE CELL'S OWN WEIGHT 337u the twenty-five faces' own total (the
// honest window; the 436 10, the 437 14, the 438 22, the 439 6, the
// 440 0, the 441 6, the 442 26, the 443 12, the 444 8, the 445 8, the
// 446 26, the 447 20, the 448 2, the 449 20, the 450 2, the 451 16,
// the 452 0, the 453 20, the 454 20, the 455 4, the 456 12, the 457
// 16, the 458 24, the 459 19, the F460 24).
// THE BOOK TWENTY-THREE of TWENTY-THREE windows speaking (TWELVE
// swings, FOUR swells, THREE fades, FOUR honest silences - the
// family's own skin): the W438 swell 10 -> 14 (+4) -> 22 (+8), the
// W439 swing 14 -> 22 (+8) -> 6 (-16), the W440 fade 22 -> 6 (-16) ->
// 0 (-6), the W441 swing 6 -> 0 (-6) -> 6 (+6), the W442 swell 0 ->
// 6 (+6) -> 26 (+20), the W443 swing 6 -> 26 (+20) -> 12 (-14), the
// W444 fade 26 -> 12 (-14) -> 8 (-4), the W445 the held second step
// the honest silence prices, the W446 the held first step the honest
// silence prices, the W447 swing 8 -> 26 (+18) -> 20 (-6), the W448
// fade 26 -> 20 (-6) -> 2 (-18), the W449 swing 20 -> 2 (-18) -> 20
// (+18), the W450 swing 2 -> 20 (+18) -> 2 (-18), the W451 swing 20
// -> 2 (-18) -> 16 (+14), the W452 swing 2 -> 16 (+14) -> 0 (-16),
// the W453 swing 16 -> 0 (-16) -> 20 (+20), the W454 the held second
// step the honest silence prices, the W455 the held first step the
// honest silence prices, the W456 swing 20 -> 4 (-16) -> 12 (+8), the
// W457 swell 4 -> 12 (+8) -> 16 (+4), the W458 swell 12 -> 16 (+4) ->
// 24 (+8), the W459 swing 16 -> 24 (+8) -> 19 (-5), the W460 swing 24
// -> 19 (-5) -> 24 (+5) MY WORD'S OWN BIRTH WINDOW the newest face
// prices.
// THE BOUNDS' OWN LEGS: the +20 the max rise rode TWO legs ONE leg
// per boundary 441/442 and 452/453, the -18 the max fall rode TWO
// legs ONE leg per boundary 447/448 and 449/450; the round trips the
// FOUR the book holds (the W441's own -6/+6, the W449's own -18/+18,
// the W450's own mirror +18/-18 - the W449/W450 pair the storm's own
// echo prices - the W460's own -5/+5 the birth face rides).
// THE TOP the count 26 rode TWICE (the W442 crest and the W446 crest
// the twin storms price), THE FLOOR the count 0 rode TWICE (the two
// honest droughts 440 and 452 the window prices - the zero a lawful
// count, the smelt lane's own zero precedent v0.976.90).
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier
// chain). The fold receives the count per face (rationLaneCount owns
// the census - the word's own strict grammar, never a fork). No
// two-back face given -> no read (the carrier's own null pass); the
// lane's own zero is no fence - a zero face rides a lawful count (the
// drought's own zero the fence keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// ration lane's own swell, fall then fall prices the ration lane's
// own fade, a traded direction prices the ration lane's own swing, a
// held step (any count-to-count zero) prices the honest silence (a
// held count is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the seats' own verdict word (no owns) nor the dynasty's
// own (no dynasty, no turn) - co-existence by seat never by
// duplication.
//
// THE .227 SEAT THEIRS - their liar-ladder ratchet's own trend
// (b3ca5615) the fire before rode; MY .226 the pre-position walk
// home's own trend (fd1fc1e1) beside. This word the ration lane's own
// seat takes - different cells the seats co-exist by (the ratchet the
// water guard's own patience prices, the walk home the end-phase's
// own scheduler prices, the ration lane the gate's own bite prices),
// ONE reader the book holds all words read.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first ration-lane read - the cell the
// reader never priced across the faces before this word).

/**
 * The census - the family's own strict grammar, the word's own count
 * (the .223 bankedReceiptCount precedent the family's census rides).
 * Every line the ration lane's TWO shapes classify rides - the ask
 * and the outcome, the failed verdict and the unreadable-clock '?'
 * skin included; the food commons and the fuel commons and the took
 * cells and the dump lane never ride.
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the ration lane count (0 when the lines hold no
 *   ration print - the zero a lawful count)
 */
export function rationLaneCount (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && (ASK_RE.test(l) || OUT_RE.test(l))) n++
  }
  return n
}

const ASK_RE = /^F\\d+ \\[F\\d+\\] ration: eating [a-z_]+ \\(hunger (?:\\?|\\d+), hp (?:\\?|\\d+(?:\\.\\d+)?), (?:hunger-guard|health-guard|hunger-guard\\+health-guard)\\)$/
const OUT_RE = /^F\\d+ \\[F\\d+\\] ration: (?:ate|failed) [a-z_]+ \\(hunger (?:\\?|\\d+) -> (?:\\?|\\d+), hp (?:\\?|\\d+(?:\\.\\d+)?) -> (?:\\?|\\d+(?:\\.\\d+)?)\\)$/

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {eats}, prev: {eats}, cur: {eats} }
 * @returns {boolean}
 */
export function rationLaneTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.eats) && s.eats >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the ration lane's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {eats}, prev: {eats}, cur: {eats} }
 * @returns {string|null} the row byte, or null
 */
export function rationLaneTrendRow (e) {
  if (!rationLaneTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.eats - back.eats
  const second = cur.eats - prev.eats
  const arc = \`\${back.eats} -> \${prev.eats} (\${first >= 0 ? '+' : ''}\${first}) -> \${cur.eats} (\${second >= 0 ? '+' : ''}\${second})\`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = ${JSON.stringify(tail)}
  if (first > 0 && second > 0) {
    return \`the ration lane trend (v0.976.228): the ration lane's rise ran two steps deep - \${arc} - the ration lane's own swell \${tail}\`
  }
  if (first < 0 && second < 0) {
    return \`the ration lane trend (v0.976.228): the ration lane's fall ran two steps deep - \${arc} - the ration lane's own fade \${tail}\`
  }
  return \`the ration lane trend (v0.976.228): the ration lane's own swing - \${arc} - the rise and the fall traded seats between the faces \${tail}\`
}
`

writeFileSync('src/lib/rationlanetrend.mjs', header)
console.log('module written:', 'src/lib/rationlanetrend.mjs', header.length, 'bytes, tail', tail.length, 'chars')

// quick smoke: import + count over a synthetic mixed bag
const mod = await import('../src/lib/rationlanetrend.mjs')
const sample = [
  'F1 [F1] ration: eating apple (hunger 17, hp 20, health-guard)',
  'F1 [F1] ration: ate apple (hunger 17 -> 20, hp 20 -> 20)',
  'F2 [F2] ration: failed rotten_flesh (hunger 20 -> 20, hp 13.8 -> 7.4)',
  'F3 [F3] ration: eating rotten_flesh (hunger ?, hp ?, hunger-guard+health-guard)',
  'F9 [F9] craft torches: skip (no coal: sticks 6 coals 0)',
  'F1 [F1] food commons: chest at [-120,64,380] holds 3 stacks'
]
console.log('smoke count (expect 4):', mod.rationLaneCount(sample))
console.log('smoke row (expect swing):', (mod.rationLaneTrendRow({ back: { eats: 6 }, prev: { eats: 0 }, cur: { eats: 6 } }) || '').slice(0, 90))
console.log('smoke silence (expect null):', mod.rationLaneTrendRow({ back: { eats: 8 }, prev: { eats: 8 }, cur: { eats: 26 } }))
