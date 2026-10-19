// (v0.976.278) THE SERVER ADVANCEMENT'S OWN ACHIEVEMENT MASS - the
// server console's own advancement lines the word prices across the
// faces.
// THE EVIDENCE (the seat the fleet's server console carries - the
// fleet-server-log artifact, the lane the seathunt's fleet-log scan
// never rode): the vanilla server's own broadcast prints '[23:11:46]
// [Server thread/INFO]: F1 has made the advancement [Stone Age]'
// (F478's own face, run 39174346168) - one print per advancement the
// fleet earns, the server's own witness of the fleet's progress (the
// Stone Age and the Getting an Upgrade and the Monster Hunter and the
// Acquire Hardware - the achievements the bots put on the board), and
// no book owned the mass across the faces: the deathcause module's
// chat-exclusion list merely IGNORES the advancement line while
// classifying deaths (its own refusal, never a pricing), the doom
// ledger keeps the deaths' own prose lane (a different front), the
// columntoll and deathkinds words price the fleet's own death relay
// (a different emitter), the .275 alive word prices the counters
// line's own alive cell, the toolupgrade machinery and the
// upgradecensus module (the v0.465.0 word) price the smith chain's
// own runtime from the fleet's own [toolupgrade] lane - the
// achievement mass itself rode unread (36 -> 37 -> 38 -> 31 -> 31 ->
// 29 -> 28 -> 34 -> 31 -> 30 the ten-face arc no row read, the names
// hand 3 -> 3 -> 3 -> 4 -> 3 -> 3 -> 3 -> 3 -> 3 -> 3 the same
// silence but the F481 arrival). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the server's own
// frame byte-exact - the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the anchor rides whole, the 'FN has made the advancement [' body
// the emitter's own template, the name cell the proven letters-and-
// spaces shape the ten faces' own four names price ('Stone Age', the
// 'Getting an Upgrade', the 'Monster Hunter', the 'Acquire Hardware'),
// the closing ']' the tail boundary - the fused-tail skin the grammar
// refuses), the near-miss lanes never ride (the wrong frame, the
// bot-tagged prefix, the pretty spacing, the missing closing bracket,
// the altered prose, the digits in the name cell, the bare prose
// without the frame, the truncated head), the census law the lane
// sums whole (the .232 sweepCollectedLaneCount precedent the family's
// census rides - one line one advancement, the face's own count the
// sum holds, no LAST-PRINT-WINS the events never repeat a print).
//
// THE CELLS: advancements (the achievement mass - the face's own sum,
// the proven integer cell, the zero lawful - the console-less face
// keeps the healthy zero), names (the breadth hand the side-car holds
// - the distinct achievements the same face earned, the wt precedent
// the near-flat rider rides). The trend reads the achievement mass's
// arc two steps deep (the family's own two-step shape): both steps
// down = the achievement weather's own fade (the board went quiet),
// both steps up = the achievement weather's own swell (the advance
// surge), a trade = the swing. A held step prices no direction - the
// honest silence (the family's own held law); a three-face zero mass
// prices nothing - the server never witnessed an advancement the
// whole arc (the lawful silence the .255 churn ceiling's own
// lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the server already
// emits (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold through the SECOND
// carrier lane the server-console faces ride, the argv[6..8] tail
// the fleet faces' own argv[3..5] contract extends, the fleet's own
// console never changes).

const ADVANCEMENT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (F\d+) has made the advancement \[([A-Za-z ]+)\]$/

/**
 * The census - the family's own strict grammar, the face's own sum
 * read (the server console's own advancement lines; the census law
 * the lane sums whole - one line one advancement, the .232
 * sweepCollectedLaneCount precedent).
 *
 * @param {string[]|null} [lines] the face's own server console lines
 * @returns {{advancements: number, names: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no advancement line is the LAWFUL ZERO -
 *   the never-advancing face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function advancementCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { advancements: 0, names: 0 }
  const seen = new Set()
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = ADVANCEMENT_RE.exec(l)
    if (!m) continue
    mass.advancements += 1 // the lane sums whole - one line one advancement (the .232 census law)
    seen.add(m[3]) // the breadth hand: the distinct achievements the face earned
  }
  mass.names = seen.size
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the console-less face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {advancements,names}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function advancementConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.advancements) && numOk(s.names)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the achievement mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the server never witnessed
 * an advancement - nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {advancements,names}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function advancementTrendRow (e) {
  if (!advancementConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.advancements
  const p = prev.advancements
  const c = cur.advancements
  // the server never witnessed an advancement across the three faces -
  // the lawful silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const namesArc = `the names rode ${back.names} -> ${prev.names} -> ${cur.names}`
  const tail = "(the deathcause module's chat-exclusion list keeps the advancement line its own refusal (never a pricing), the doom ledger keeps the deaths' own prose lane, the columntoll and deathkinds words keep the fleet's own death relay (a different emitter), the alive word's row keeps the survival seat (the .275 word), the upgradecensus module keeps the smith chain's own lane (the v0.465.0 word - the fleet's own [toolupgrade] emitter), the counterstrend family keeps the counters line's own seats (the .261-.277 band) - the achievement mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server advancements trend (v0.976.278): the achievement weather's own fade ran two steps deep - ${arc} - the achievement mass's own fade, ${namesArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server advancements trend (v0.976.278): the achievement weather's own swell ran two steps deep - ${arc} - the achievement mass's own swell, ${namesArc} ${tail}`
  }
  return `the server advancements trend (v0.976.278): the achievement weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${namesArc} ${tail}`
}
