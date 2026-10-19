// (v0.976.260) THE PULSE MAP CELL'S OWN GROWTH MASS - the fleet tick
// docket's own map cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own tick dockets carry): the
// fleet ticker prints 't-536s alive=19/19 mined=92 map=319p/9ch banked=0
// smelted=0 pocket=58u/17s | sand=0 gravel=0 dirt=0 stone=0' (run
// 39178460638's own face, F479, 54 prints) - testbed/fleet19.mjs's tick
// line (fleet19.mjs:4488, one print per tick all faces ride, the map
// cells map=${mapRep.positions}p/${mapRep.chunksScanned}ch the
// knowledge map's own mid-run pulse) - and no book owned the cell's own
// mass across the faces: the worldmaptailtrend.mjs module owns the
// report tail's own end mass (the .252 word - its own header names the
// beside-seat: 'the pulse's own map=Np/Mch cell keeps its own lane
// beside'), the maptrip.mjs module owns the trip lane's own parse
// (PULSE_HEADER_RE the map-trip gap's own functional input, the v0.445.0
// read), the smokeread.mjs module owns the SHORT skin's own lane, the
// autosave's own merge line keeps its own lane - the pulse map cell's
// own growth mass (the positions the tick held, the chunks the scan
// rode) rode unread across the faces. THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the fleet's own
// template byte-exact - the tick header the anchor rides whole, the two
// proven integer cells no leading zero no sign (the .248 house law)),
// the near-miss lanes never ride (the report tail's own end mass, the
// SHORT skin, the bot-tagged prefix, the pretty spacing, the missing
// 'p/' boundary, the missing 'ch' tail, the leading zero, the negative
// count, the altered cell, the truncated header, the wrong frame), the
// law LAST-PRINT-WINS - the tick speaks all face long, the last print
// the freshest read the face held.
//
// THE CELLS: positions, chunks (the map cell's own pair - the proven
// integer cells, the zero lawful - the pre-scan face keeps the
// healthy-looking zeros 'map=0p/0ch'). The trend reads the positions
// mass's arc two steps deep (the family's own two-step shape): both
// steps down = the knowledge weather's own fade (the map's own drain -
// the fresh world's leaner read), both steps up = the knowledge
// weather's own swell (the scan surge priced), a trade = the swing.
// The chunks mass (the scan cost) rides the read's own side-car. A held
// step prices no direction - the honest silence (the family's own held
// law); a three-face zero positions mass prices nothing - the scan
// never rode the whole arc (the lawful silence the .255 churn ceiling's
// own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const PULSE_MAP_RE = /^t-(\d+)s alive=(\d+)\/(\d+) mined=(\d+) map=(0|[1-9]\d*)p\/(0|[1-9]\d*)ch banked=(\d+) smelted=(\d+) pocket=(\d+)u\/(\d+)s \| /

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the tick docket's own map cell; LAST-PRINT-WINS - the last
 * print the freshest state the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{positions: number, chunks: number}|null}
 *   the map cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no tick docket is the LAWFUL ZERO - the
 *   never-scanned face keeps the healthy-looking zeros), null when the
 *   input itself is not an array
 */
export function pulseMapCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { positions: 0, chunks: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = PULSE_MAP_RE.exec(l)
    if (!m) continue
    mass.positions = Number(m[5])
    mass.chunks = Number(m[6])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the pre-scan face). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {positions,chunks}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function pulseMapConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.positions) && numOk(s.chunks)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the positions mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the scan never rode -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {positions,chunks}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function pulseMapTrendRow (e) {
  if (!pulseMapConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.positions
  const p = prev.positions
  const c = cur.positions
  // the scan never rode across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const chunkArc = `the chunks rode ${back.chunks} -> ${prev.chunks} -> ${cur.chunks}`
  const tail = "(the worldmap tail's own end mass keeps the report seat (the .252 word), the maptrip's own header parse keeps the trip gap's input, the autosave's own merge line keeps its own lane - the pulse map's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the pulse map trend (v0.976.260): the knowledge weather's own fade ran two steps deep - ${arc} - the positions mass's own fade, ${chunkArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the pulse map trend (v0.976.260): the knowledge weather's own swell ran two steps deep - ${arc} - the positions mass's own swell, ${chunkArc} ${tail}`
  }
  return `the pulse map trend (v0.976.260): the knowledge weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${chunkArc} ${tail}`
}
