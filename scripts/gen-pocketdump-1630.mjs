#!/usr/bin/env node
// (v0.976.229, fire-1630) THE POCKET DUMP GENERATOR - the gen-rationlane
// method the tail byte-level inherits: the .228 tail the literal rides,
// the sibling's own ending the newest seat re-names. usage:
//   node scripts/gen-pocketdump-1630.mjs
import { readFileSync, writeFileSync } from 'node:fs'

const src = readFileSync('src/lib/rationlanetrend.mjs', 'utf8')
const m = src.match(/const tail = "(\(the sweep's own seat[^"]+\))"/)
if (!m) { console.error('tail literal not found'); process.exit(1) }
const oldTail = m[1]
const RATION_END = ", this word prices the ration lane's own mass across the faces - the ration lane seat, co-existence by seat never by duplication)"
if (!oldTail.endsWith(RATION_END)) { console.error('tail ending drifted'); process.exit(1) }
const NEW_TAIL = oldTail.slice(0, -RATION_END.length) +
  ", the ration lane's own trend prices the ration lane's own mass across the faces, " +
  "this word prices the pocket dump's own mass across the faces - the pocket dump seat, co-existence by seat never by duplication)"

const header = `// (v0.976.229) THE POCKET DUMP'S OWN TREND - the reporter tick's own
// fleet-wide pocket-snapshot mass across the faces beside the raw lane
// words: the field's own scan named the lane the seat first (the
// '   F<n>=<mined>[<item>:<n> ...| empty]' family the reporter tick
// prints every heartbeat - ONE line, nineteen bots the joiner rides,
// the heaviest clean unpriced voice the fire-1630 seathunt named: the
// hardened seathunt's literal probe the map priced seat by seat (the
// fire-1542 method the cache holds - the stale-probe false positives
// the overrides map priced honest) and the .228's own comment the
// lighter siblings named: every unpriced fragment the dump lane prints
// the next seats price). THE RAW LAW: every line the lane prints
// rides - the empty pockets and the mined zeros and the negative
// drift skin and the full three-item tops the same lane holds (the
// wrl lane's own lane law - the lane's own count rides whole whatever
// the skin's name); the reporter's OTHER lines never ride (the pulse
// header the maptrip's own header prices, the deficits row the
// plantoptrend seat prices, the plan top the plantoptrend seat prices
// beside, the mem line the memhb seat prices, the pocket TOTALS the
// pocketline book prices - the live-object read, never the lane's own
// log skin - the dump lane alone).
// THE CENSUS LAW: the word owns the count - no trend word owned the
// dump lane cell (the .228 rationLaneCount precedent the family's
// census rides, the .223 bankedReceiptCount and the .220
// verticalDoomSkipCount the same law hold) - pocketDumpCount the
// family's own count, one parser never a second; the strict grammar
// the field's own proof prices (the field proof 7/7 census==raw zero
// mismatches - scripts/fieldread-pocketdump-1630.mjs, the faces
// 455..461 the artifact fetches re-spoke).
// THE CELL'S OWN WEIGHT 393u the seven faces' own total (the honest
// window; the 455 54, the 456 60, the 457 63, the 458 58, the 459 46,
// the 460 58, the F461 54) - the ration lane's own 337u the
// twenty-five faces' total beside, the per-face weight the dump's own
// tick cadence prices heavier.
// THE BOOK FIVE of FIVE windows speaking (THREE swings, ONE swell,
// ONE fade, the ZERO honest silences - the all-speaking family's own
// skin, the .208 combat band's own 41/41 + 65/65 pair the precedent
// holds): the W456 swell 54 -> 60 (+6) -> 63 (+3), the W457 swing 60
// -> 63 (+3) -> 58 (-5), the W458 fade 63 -> 58 (-5) -> 46 (-12), the
// W459 swing 58 -> 46 (-12) -> 58 (+12), the W460 swing 46 -> 58
// (+12) -> 54 (-4) MY WORD'S OWN BIRTH WINDOW the newest face prices.
// THE BOUNDS' OWN LEGS: the +12 ONE leg ONE boundary 459/460 and the
// -12 ONE leg ONE boundary 458/459 - the mirror pair the storm prices
// (the trough's own climb and the crest's own drain the same weight
// holds); the round trips the ZERO the book holds.
// THE TOP the count 63 rode ONCE (the F457 crest), THE FLOOR the
// count 46 rode ONCE (the F459 trough).
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier
// chain). The fold receives the count per face (pocketDumpCount owns
// the census - the word's own strict grammar, never a fork). No
// two-back face given -> no read (the carrier's own null pass); the
// lane's own zero is no fence - a zero face rides a lawful count (the
// drought's own zero the fence keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// pocket dump's own swell, fall then fall prices the pocket dump's
// own fade, a traded direction prices the pocket dump's own swing, a
// held step (any count-to-count zero) prices the honest silence (a
// held count is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the seats' own verdict word (no owns) nor the dynasty's
// own (no dynasty, no turn) - co-existence by seat never by
// duplication.
//
// THE .228 SEAT THEIRS - their ration lane's own trend (319ffa9) the
// fire before rode; MY .227 the liar-ladder ratchet's own trend
// (b3ca561) beside. This word the pocket dump's own seat takes -
// different cells the seats co-exist by (the ration lane the gate's
// own bite prices, the pocket dump the reporter tick's own snapshot
// prices), ONE reader the book holds all words read.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first pocket-dump read - the lane the
// reader never priced across the faces before this word).

/**
 * The census - the family's own strict grammar, the word's own count
 * (the .228 rationLaneCount precedent the family's census rides).
 * Every line the dump lane's ONE shape classifies rides - the empty
 * pockets and the mined zeros and the negative drift skin included;
 * the pulse header and the deficits row and the plan top and the mem
 * line never ride.
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the pocket dump count (0 when the lines hold no
 *   dump print - the zero a lawful count)
 */
export function pocketDumpCount (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && DUMP_RE.test(l)) n++
  }
  return n
}

const BOT_SEG = 'F\\\\d+=-?\\\\d+\\\\[(?:empty|[a-z0-9_]+:\\\\d+(?: [a-z0-9_]+:\\\\d+){0,2})\\\\]'
const DUMP_RE = new RegExp('^   ' + BOT_SEG + '(?: \\\\| ' + BOT_SEG + ')*$')

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {dumps}, prev: {dumps}, cur: {dumps} }
 * @returns {boolean}
 */
export function pocketDumpTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.dumps) && s.dumps >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the pocket dump's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {dumps}, prev: {dumps}, cur: {dumps} }
 * @returns {string|null} the row byte, or null
 */
export function pocketDumpTrendRow (e) {
  if (!pocketDumpTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.dumps - back.dumps
  const second = cur.dumps - prev.dumps
  const arc = \`\${back.dumps} -> \${prev.dumps} (\${first >= 0 ? '+' : ''}\${first}) -> \${cur.dumps} (\${second >= 0 ? '+' : ''}\${second})\`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "\${TAIL}"
  if (first > 0 && second > 0) {
    return \`the pocket dump trend (v0.976.229): the pocket dump's rise ran two steps deep - \${arc} - the pocket dump's own swell \${tail}\`
  }
  if (first < 0 && second < 0) {
    return \`the pocket dump trend (v0.976.229): the pocket dump's fall ran two steps deep - \${arc} - the pocket dump's own fade \${tail}\`
  }
  return \`the pocket dump trend (v0.976.229): the pocket dump's own swing - \${arc} - the rise and the fall traded seats between the faces \${tail}\`
}
`

const out = header.replace('${TAIL}', () => NEW_TAIL)
writeFileSync('src/lib/pocketdumptrend.mjs', out)
console.log('written src/lib/pocketdumptrend.mjs', out.length, 'bytes; tail', NEW_TAIL.length, 'bytes')
