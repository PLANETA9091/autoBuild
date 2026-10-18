// (v0.976.252) THE KNOWLEDGE MAP'S OWN END MASS - the report frame's own
// position/chunks counts the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own report blocks carry): the
// final report prints 'worldmap: 1476 positions, 25 chunks scanned, top:
// sand=521 coal_ore=359 copper_ore=213 oak_log=185 gravel=98' (run
// 39160949802's own face, F474) - testbed/fleet19.mjs's report line (one
// print per face, the knowledge map's own end read: the positions the
// scans hold, the chunks the walk priced) - and no book owned the frame:
// the maptrip.mjs module owns the trip lane's own parse (parseWorldmapTail
// the map-trip gap's own input, the v0.445.0 read), the smokeread.mjs
// module owns the SHORT skin's own lane (`worldmap: N positions, M chunks`
// - the pulse-adjacent skin), the autosave's own merge line keeps its own
// lane and the pulse's own map=Np/Mch cell keeps its own lane beside - the
// end mass itself (the positions the knowledge ends with, the chunks the
// scan cost) rode unread across the faces. THIS WORD TAKES THE SEAT: the
// strict grammar one emitter one shape (the fleet's own template byte-exact
// - the frame, the two proven integer cells no leading zero no sign (the
// .248 house law), the ' scanned, top: ' boundary, the top pairs the
// name=count single-space shape the emitter's own join prints, the top
// NAMES the world's own - never frozen, the shape alone the grammar
// prices), the near-miss lanes never ride (the autosave's own merge line,
// the pulse's own map cell, the SHORT skin, the bot-tagged prefix, the
// pretty spacing the join never prints, the missing boundary, the missing
// top, the junk after the pairs, the leading zero, the negative count, the
// altered prose, the truncated tail, the wrong frame), the law
// LAST-PRINT-WINS - the frame speaks once per face, the last print the
// freshest state the face held.
//
// THE CELLS: positions and chunks (the knowledge map's own end counts -
// the proven integer cells, the zero lawful - the never-scanned face keeps
// the healthy-looking zeros). The trend reads the positions mass's arc two
// steps deep (the family's own two-step shape): both steps down = the
// knowledge's own fade (the map thins - the reset class the world holds),
// both steps up = the knowledge's own swell (the scans grow the map), a
// trade = the swing (the world's own churn - new chunks scanned, old
// positions dropped). The chunks arc rides the read's own side-car (the
// scan cost's own mass beside the knowledge). A held step prices no
// direction - the honest silence (the family's own held law); a three-face
// zero mass prices nothing - the map never rode the whole arc (the lawful
// silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const WORLDMAP_TAIL_TREND_RE = /^worldmap: (0|[1-9]\d*) positions, (0|[1-9]\d*) chunks scanned, top: [a-z_]+=(0|[1-9]\d*)( [a-z_]+=(0|[1-9]\d*))*$/

/**
 * The census - the family's own strict grammar, the face's own end
 * frame (the report's own worldmap tail; LAST-PRINT-WINS - the last
 * print the freshest state the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{positions: number, chunks: number}|null}
 *   the knowledge cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no report print is the LAWFUL ZERO - the
 *   never-scanned face keeps the healthy-looking zeros), null when the
 *   input itself is not an array
 */
export function worldmapTailCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { positions: 0, chunks: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = WORLDMAP_TAIL_TREND_RE.exec(l)
    if (!m) continue
    mass.positions = Number(m[1])
    mass.chunks = Number(m[2])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-scanned face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {positions,chunks}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function worldmapTailConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.positions) && numOk(s.chunks)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the knowledge map's own positions mass's two-step
 * shape. The honest null when a step held (no direction - the family's
 * own held law), the three-face mass is zero (the map never rode -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {positions,chunks}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function worldmapTailTrendRow (e) {
  if (!worldmapTailConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.positions
  const p = prev.positions
  const c = cur.positions
  // the map never rode across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const chunkArc = `the chunks rode ${back.chunks} -> ${prev.chunks} -> ${cur.chunks}`
  const tail = "(the map trip lane keeps its own seat, the pulse's own map cell keeps its own lane, the autosave's own merge line keeps its own lane, the plan progress's own completion census keeps the .238 word's seat - the worldmap tail's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the worldmap tail trend (v0.976.252): the knowledge's own fade ran two steps deep - ${arc} - the positions mass's own fade, ${chunkArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the worldmap tail trend (v0.976.252): the knowledge's own swell ran two steps deep - ${arc} - the positions mass's own swell, ${chunkArc} ${tail}`
  }
  return `the worldmap tail trend (v0.976.252): the knowledge's own swing - ${arc} - the fade and the swell traded seats between the faces, ${chunkArc} ${tail}`
}
