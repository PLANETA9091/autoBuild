// (v0.976.262) THE AUTOSAVE MERGE'S OWN DISK PULSE - the knowledge map's
// own autosave merge line the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own autosave lines carry): the
// fleet faces print '[worldmap] autosave: merged 42 from disk, 1162
// positions on file' (F478, run 39174346168's own face - one print the
// face rode) - src/fleet/worldmap.mjs's startAutosave emitter (worldmap.mjs:221,
// 'if (r.merged > 0) log(`autosave: merged ${r.merged} from disk,
// ${r.written} positions on file`)'), the [worldmap] tag the fleet19's
// own wrapper rides (fleet19.mjs:113 'log: m => console.log(`[worldmap] ${m}`)'),
// every 300000ms the timer rides (the unref'd interval never holds the
// process) - and no book owned the line's own cells across the faces:
// the worldmaptailtrend.mjs module owns the report tail's own end mass
// (the .252 word - its own test pins the autosave line a non-match), the
// maptrip.mjs module owns the trip lane's own parse (its own test: 'the
// autosave emitter is another lane'), the pulsemaptrend.mjs module owns
// the tick docket's own map cell (the .260 word - its own test refuses
// the autosave line, its own tail names the beside-seat: 'the autosave's
// own merge line keeps its own lane') - three neighbours priced the lane
// their own refusals, the seat stood open. THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the fleet's own
// template byte-exact - the [worldmap] autosave: merged N from disk,
// M positions on file frame the whole line anchors, the two proven
// integer cells no leading zero no sign (the .248 house law)), the
// near-miss lanes never ride (the untagged skin, the 'autosave failed'
// error skin, the report tail's own end mass, the tick docket's own map
// cell, the bot-tagged prefix, the pretty spacing, the missing 'from
// disk', the missing 'positions on file', the leading zero, the negative
// count, the altered prose, the truncated frame, the trailing garbage),
// the law LAST-PRINT-WINS - a face the timer rode more than once keeps
// the last print the freshest disk state the face held.
//
// THE CELLS: merged (the disk pulse - the positions the disk file gave
// the memory back), onFile (the file mass - the positions the save
// wrote, the disk's own end read). The emitter gates merged > 0 - the
// line only prints when the disk gave something new: a face whose lines
// hold no print is the LAWFUL ZERO (the autosave rode clean or the fleet
// died before the first interval - the healthy-looking zeros, the .255
// churn ceiling's own lawful-zero birth the precedent holds). The trend
// reads the merged mass's arc two steps deep (the family's own two-step
// shape): both steps down = the disk pulse's own fade (the disk ran
// lean), both steps up = the disk pulse's own swell (the disk gave
// deeper), a trade = the swing. The onFile mass (the disk's own end
// read) rides the read's own side-car. A held step prices no direction -
// the honest silence (the family's own held law); a three-face zero
// merged mass prices nothing - the merge never rode the whole arc (the
// lawful silence the .255 precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const AUTOSAVE_MERGE_RE = /^\[worldmap\] autosave: merged (0|[1-9]\d*) from disk, (0|[1-9]\d*) positions on file$/

/**
 * The census - the family's own strict grammar, the face's own last
 * disk read (the autosave merge line; LAST-PRINT-WINS - the last print
 * the freshest state the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{merged: number, onFile: number}|null}
 *   the merge cells, or the zeros when the lines themselves hold no
 *   print (a face the autosave never rode is the LAWFUL ZERO - the
 *   clean merge keeps the healthy-looking zeros), null when the input
 *   itself is not an array
 */
export function autosaveMergeCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { merged: 0, onFile: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = AUTOSAVE_MERGE_RE.exec(l)
    if (!m) continue
    mass.merged = Number(m[1])
    mass.onFile = Number(m[2])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the no-print face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {merged,onFile}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function autosaveMergeConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.merged) && numOk(s.onFile)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the merged mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the merge never rode -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {merged,onFile}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function autosaveMergeTrendRow (e) {
  if (!autosaveMergeConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.merged
  const p = prev.merged
  const c = cur.merged
  // the merge never rode across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const fileArc = `the file mass rode ${back.onFile} -> ${prev.onFile} -> ${cur.onFile}`
  const tail = "(the worldmap tail's own end mass keeps the report seat (the .252 word), the pulse map's own tick cell keeps the docket seat (the .260 word), the maptrip's own header parse keeps the trip gap's input - the autosave merge's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the autosave merge trend (v0.976.262): the disk pulse's own fade ran two steps deep - ${arc} - the merged mass's own fade, ${fileArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the autosave merge trend (v0.976.262): the disk pulse's own swell ran two steps deep - ${arc} - the merged mass's own swell, ${fileArc} ${tail}`
  }
  return `the autosave merge trend (v0.976.262): the disk pulse's own swing - ${arc} - the fade and the swell traded seats between the faces, ${fileArc} ${tail}`
}
