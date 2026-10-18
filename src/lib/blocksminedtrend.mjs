// (v0.976.247) THE BLOCKS MINED'S OWN PRODUCTIVITY METER - the fleet's
// own headline dig mass the word prices across the faces.
// THE EVIDENCE (the F473 face's own read, the run 39156167132 the .245
// tree rode): the final report prints 'blocks mined: 1860 in ~600s =
// 3.10 blocks/s (186/min)' - testbed/fleet19.mjs's report line (one
// print per face, the fleet's own productivity meter the README's whole
// complaint prices: the fleet mining productivity front's own headline)
// - and no book owned the mass: the loot ledger's own accounting prices
// where the yield ended up (banked/pocket/unaccounted), the map
// coverage's own top prices the scanned mass, the final body's own
// survivor mass prices the roster - the mined mass itself, the fleet's
// own blocks-per-second meter, rode unread (the F473 face held 1860
// blocks at 3.10/s; the F471-class faces' own meters the same law
// keeps).
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the fleet's own template byte-exact - the frame, the mined cell, the
// '~<secs>s' window, the two-decimal blocks/s cell, the integer per-min
// tail; the emitter's own arithmetic the census holds - the printed
// rate must equal (mined / secs).toFixed(2) and the printed per-min
// must equal ((mined / secs) * 60) rounded, a forged meter never
// rides), the near-miss lanes never ride (the bot-tagged prefix, the
// truncated tail, the one-decimal rate, the missing '~', the altered
// unit prose, the forged arithmetic, the wrong frame), the law
// LAST-PRINT-WINS - the meter speaks once per face, the last print the
// freshest state the face held.
//
// THE CELLS: mined (the dig mass the face holds) and secs (the window
// the meter ran under - the deadline's own length the face carries) and
// bps (the rate in integer hundredths - '3.10' rides as 310, the fence
// stays all-integers) and permin (the per-minute tail the emitter
// rounds). The trend reads the mined mass arc two steps deep (the
// family's own two-step shape, the .245 climb run-up's own precedent):
// both steps down = the dig mass's own fade (the fleet's own slowdown -
// the productivity front's own drain), both steps up = the dig mass's
// own swell (the mines' own grip - the productivity climbs), a trade =
// the swing. The rate arc and the window arc ride the read's own
// side-cars (the blocks/s beside the mass, the deadline window beside
// both - a 600s face beside a 300s face the window cell names). A held
// step prices no direction - the honest silence (the family's own held
// law); a three-face zero mass prices nothing - the fleet dug nothing
// the whole arc (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .245 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const BLOCKS_MINED_RE = /^blocks mined: (\d+) in ~(\d+)s = (\d+\.\d{2}) blocks\/s \((\d+)\/min\)$/

/**
 * The census - the family's own strict grammar, the face's own meter
 * (the fleet's own productivity line; LAST-PRINT-WINS - the last print
 * the freshest state the face held; the emitter's own arithmetic the
 * census holds - a forged rate never rides).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{mined: number, secs: number, bps: number, permin: number}|null}
 *   the meter, or null when the lines themselves are junk (a face whose
 *   lines hold no report print is the LAWFUL ZERO - the zeros speak)
 */
export function blocksMinedCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { mined: 0, secs: 0, bps: 0, permin: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = BLOCKS_MINED_RE.exec(l)
    if (!m) continue
    const mined = Number(m[1])
    const secs = Number(m[2])
    if (secs <= 0) continue
    const div = mined / secs
    if (!Number.isFinite(div)) continue
    // the emitter's own arithmetic the census holds - the printed rate
    // must be the division's own two-decimal print, the per-min tail
    // the division's own minute rounding (a forged meter never rides)
    if (div.toFixed(2) !== m[3]) continue
    if (Math.round(div * 60) !== Number(m[4])) continue
    mass.mined = mined
    mass.secs = secs
    mass.bps = Math.round(div * 100)
    mass.permin = Number(m[4])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all four
 * proven integer counts (the zero lawful - the meter never printed).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {mined,secs,bps,permin}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function blocksMinedTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.mined) && s.mined >= 0 &&
      Number.isInteger(s.secs) && s.secs >= 0 &&
      Number.isInteger(s.bps) && s.bps >= 0 &&
      Number.isInteger(s.permin) && s.permin >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the mined mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face mass is zero (the fleet dug nothing - nothing to price), or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function blocksMinedTrendRow (e) {
  if (!blocksMinedTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.mined
  const p = prev.mined
  const c = cur.mined
  // the meter never rode across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const rateArc = `the rate rode ${(back.bps / 100).toFixed(2)} -> ${(prev.bps / 100).toFixed(2)} -> ${(cur.bps / 100).toFixed(2)}`
  const windowArc = `the window rode ${back.secs} -> ${prev.secs} -> ${cur.secs}`
  const tail = "(the loot ledger's own accounting prices the banked mass's own yield across the faces, the map coverage's own top prices the scanned mass's own census across the faces, the final body's own survivor mass keeps the roster's alive cell across the faces - the blocks mined's mass row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the blocks mined trend (v0.976.247): the dig mass's own fade ran two steps deep - ${arc} - the mined mass's own fade, ${rateArc}, ${windowArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the blocks mined trend (v0.976.247): the dig mass's own swell ran two steps deep - ${arc} - the mined mass's own swell, ${rateArc}, ${windowArc} ${tail}`
  }
  return `the blocks mined trend (v0.976.247): the mined mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${rateArc}, ${windowArc} ${tail}`
}
