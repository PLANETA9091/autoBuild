// (v0.976.279) THE BOOTSTRAP TARGETS LINE'S OWN ASSIGNMENT MASS - the
// launching line's own targets cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own bootstrap prints carry):
// the launch prints 'launching 19 bots for 600s -> targets sand,
// gravel, dirt, stone' (F478's own face, run 39174346168) and the same
// shape on F479 (run 39178460638) and F480 (run 39184044983) and F481
// (run 39188700500) and F482 (run 39193658512) and F483 (run
// 39200742905) and F484 (run 39206031566) and F485 (run 39208857636) -
// testbed/fleet19.mjs's launch line (fleet19.mjs:4098), one print per
// face, the targets cell the fleet's own bootstrap assignment (the
// WorldMap target assignment front's own start-state mass: the
// materials the bootstrap hands the walkers before the first think) -
// and no book owned the line's own mass across the faces: the
// worldmap tail word (the .252 word) prices the report frame's own
// positions/chunks end-state cells (a different emitter's lane - the
// report's own end read, never the launch), the maptrip module owns
// the trip lane's own parse, the pulse map's own tick cell (the .260
// word) keeps its lane, the autosave merge word (the .262 word) keeps
// the disk pulse's own lane, the transit census and the pin bill keep
// their lanes beside - the assignment mass itself rode unread (4 -> 4
// -> 4 -> 4 -> 4 -> 4 -> 4 -> 4 the eight-face arc no row read). THIS
// WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the launch line's
// own template byte-exact - the 'launching ' head the anchor rides
// whole, the emitter's own template order, the proven integer cells no
// leading zero no sign (the .248 house law), the target names the
// world's own lowercase shape the join's single-space comma order
// prints, the tail boundary the list ends at whitespace or line end
// never mid-token - the fused-tail skin the grammar refuses, the
// scout tail the literal ' (+1 ground scout)' the emitter's own
// optional byte prints, the fused scout skin the grammar refuses),
// the near-miss lanes never ride (the bare cell without the frame,
// the pretty spacing, the altered order, the leading zero, the
// bot-tagged prefix, the drifted template, the truncated head, the
// wrong frame), the law LAST-PRINT-WINS - the launch line speaks once
// per face, the last print the freshest assignment the face held.
//
// THE CELLS: targetCount (the assignment mass - the breadth the
// bootstrap hands the walkers, the proven integer cell derived from
// the list the emitter's own join printed, the zero unlawful in the
// shape - a targetless launch is no launch, the junk face keeps the
// lawful zero), the side-cars the same line rode (the bots cell the
// body tally the bootstrap spawned - a different emitter's byte than
// the counters line's own bots cell the .277 word's side-car holds,
// the seconds cell the face's own span, the scout byte the ground
// scout's own 0/1). The trend reads the assignment mass's arc two
// steps deep (the family's own two-step shape): both steps down = the
// assignment weather's own fade (the targets narrowed - the config
// narrowed the hand), both steps up = the assignment weather's own
// swell (the targets widened - the config grew the hand), a trade =
// the swing. A held step prices no direction - the honest silence
// (the family's own held law - the REAL eight faces' whole arc rode
// 4, every real window the word's birth prices held, the silences the
// word prices honest: the fleet's own assignment the steadiest shape
// the mass holds); a three-face zero assignment mass prices nothing -
// the family's own shape keeps the silence (the never-launched face
// the lawful zero prices, the bars never invent). The synthetic arcs
// prove the speech machinery byte exact for the day the config turns
// the targets (the 4 -> 3 the assignment weather's own first word
// will ride).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never
// changes).

const TARGETS_RE = /^launching (0|[1-9]\d*) bots for (0|[1-9]\d*)s -> targets ([a-z_]+(?:, [a-z_]+)*)(?! \(\+1 ground scout\)\S)( \(\+1 ground scout\))?(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own start
 * read (the launch line's own targets cell; LAST-PRINT-WINS - the
 * launch line speaks once per face, the last print the freshest
 * assignment the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{targetCount: number, bots: number, seconds: number, scout: number, list: string}|null}
 *   the cells (the list the emitter's own join printed), or the zeros
 *   when the lines themselves are junk (a face whose lines hold no
 *   launch line is the LAWFUL ZERO - the never-launched face keeps
 *   the healthy-looking zeros), null when the input itself is not an
 *   array
 */
export function bootstrapTargetsCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { targetCount: 0, bots: 0, seconds: 0, scout: 0, list: '' }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = TARGETS_RE.exec(l)
    if (!m) continue
    mass.bots = Number(m[1]) // the body tally the same bootstrap rode - the side-car
    mass.seconds = Number(m[2]) // the face's own span - the side-car
    mass.list = m[3] // the names the emitter's own join printed - the assignment's own bytes
    mass.targetCount = m[3].split(', ').length // the priced cell - the assignment mass
    mass.scout = m[4] !== undefined ? 1 : 0 // the ground scout's own byte - the side-car
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all proven
 * integer cells (the zero lawful - the never-launched face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {targetCount,bots,seconds,scout}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function bootstrapTargetsConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.targetCount) && numOk(s.bots) && numOk(s.seconds) && numOk(s.scout)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the assignment mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass the family's own shape keeps
 * silent (the never-launched face), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {targetCount,bots,seconds,scout}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function bootstrapTargetsTrendRow (e) {
  if (!bootstrapTargetsConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.targetCount
  const p = prev.targetCount
  const c = cur.targetCount
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend, the never-launched face
  // the lawful zero prices)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const botsArc = `the bots rode ${back.bots} -> ${prev.bots} -> ${cur.bots}`
  const secsArc = `the seconds rode ${back.seconds} -> ${prev.seconds} -> ${cur.seconds}`
  const scoutArc = `the scout byte rode ${back.scout} -> ${prev.scout} -> ${cur.scout}`
  const tail = "(the worldmap tail word's row keeps the report frame's own positions/chunks end-state seat (the .252 word - a different emitter's lane, the report's own end read never the launch), the maptrip row keeps the trip lane's own parse, the pulse map row keeps the tick cell's seat (the .260 word), the autosave merge row keeps the disk pulse's seat (the .262 word), the counters spawned row keeps the bootstrap end-state seat (the .277 word - its grammar anchors the counters line's own bytes, its bots side-car never this line's own bots cell) - the assignment mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the bootstrap targets trend (v0.976.279): the assignment weather's own fade ran two steps deep - ${arc} - the assignment mass's own fade, ${botsArc}, ${secsArc}, ${scoutArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the bootstrap targets trend (v0.976.279): the assignment weather's own swell ran two steps deep - ${arc} - the assignment mass's own swell, ${botsArc}, ${secsArc}, ${scoutArc} ${tail}`
  }
  return `the bootstrap targets trend (v0.976.279): the assignment weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${botsArc}, ${secsArc}, ${scoutArc} ${tail}`
}
