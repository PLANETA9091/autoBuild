// (v0.976.250) THE APPROACH WALK'S OWN VERDICT MASS - the walk approach
// lane's own summary verdict mass the word prices across the faces.
// THE EVIDENCE (the fleet faces' own logs carry the lane): the miner's
// walk approach prints 'F6 [F6] approach: 1 segment(s) walked in 11.4s,
// goal now d=21.5 (inside the direct envelope)' and 'F6 [F6] approach:
// 6 segment(s) walked in 42.4s, goal now d=32.4 (still outside - a
// segment stalled (no position delta))' - src/lib/approach.mjs's
// approachWalk summary read (line 367, one print per WALK, and only
// when at least one segment rode - the zero-segment walk prints
// nothing), riding the fleet19 filter's own 'approach' key - and no
// book owned the mass: the yard approach's own lane the
// yardapproachtrend seat prices (the 'yard approach:' frame a
// different lane), the fire-0142 seathunt named the seat FREE ('the
// approach lane's variable tail a two-shape seat the one-shape law
// prices against') - the summary verdict itself, the walk's own
// landed-or-outside split, rode unread.
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the fleet's own template byte-exact - the bot tag and its bracket
// backref must agree, the segments cell, the one-decimal secs cell,
// the goal-distance cell ('?' the unreadable-distance skin the
// emitter's own ternary prints), the verdict cell's enumerated skin
// space: 'inside the direct envelope' the landed skin, 'still outside
// - a segment stalled (no position delta)' the stall skin, 'still
// outside - the approach clock is spent' the clock skin, 'still
// outside - the segment cap spent (N walked, d=X.X)' the cap skin -
// the emitter's own arithmetic the census holds: the cap skin's N must
// equal the line's own segments cell (the same variable prints both),
// a forged meter never rides), the near-miss lanes never ride (the
// sibling 'yard approach:' frame the yardapproachtrend seat prices,
// the side-step's own prints ('the stall side-step (right) moved the
// start', 'the stall side-step (left) stalled too') the raw lane's
// own words, the v0.162.0 liar skin ('still outside - inside the
// direct envelope' - the self-contradiction the honest-cap cure
// named, the grammar refuses it forever), the zero-segments skin the
// emitter never prints, the integer secs skin, the tag-mismatch
// prefix, the truncated tail, the altered prose, the wrong frame), the
// law THE MASS SUMS EVERY SUMMARY - each walk a vote, no
// last-print-wins here (the .245 climb run-up's own precedent).
//
// THE CELLS: walks (the summary mass the face holds) and segs (the
// segment mass the walks paid) and walkedIn (the landed mass - the
// envelope-skin prints) and outside (the still-outside mass - the
// stall/clock/cap skins). The emitter's own arithmetic the census and
// the fence both hold: walkedIn + outside = walks (every summary
// print exactly one verdict - the enumerated skin space makes it
// true). The trend reads the walked-in mass arc two steps deep (the
// family's own two-step shape): both steps down = the walked-in mass's
// own fade (the approaches stop landing), both steps up = the
// walked-in mass's own swell (the walks land), a trade = the swing.
// The walks arc and the outside arc and the segments arc ride the
// read's own side-cars (the activity beside the success, the
// still-outside beside both, the dig-through tax the segments
// carry). A held step prices no direction - the honest silence; a
// three-face zero walks mass prices nothing - the lane never rode the
// whole arc (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .249 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never
// changes).

const APPROACH_WALK_RE = /^(F\d+) \[\1\] approach: (\d+) segment\(s\) walked in (\d+\.\d)s, goal now d=(\d+\.\d|\?) \((inside the direct envelope|still outside - (?:a segment stalled \(no position delta\)|the approach clock is spent|the segment cap spent \((\d+) walked, d=(\d+\.\d)\)))\)$/

/**
 * The census - the family's own strict grammar, the face's own summary
 * mass (the approach walk's own verdict lines; THE MASS SUMS EVERY
 * SUMMARY - each walk a vote; the emitter's own arithmetic the census
 * holds - a forged cap never rides; a face whose lines hold no summary
 * print is the LAWFUL ZERO - the lane never rode, the zeros speak).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{walks: number, segs: number, walkedIn: number, outside: number}}
 *   the verdict mass, or null when the lines themselves are junk
 */
export function approachWalkCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { walks: 0, segs: 0, walkedIn: 0, outside: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = APPROACH_WALK_RE.exec(l)
    if (!m) continue
    const segs = Number(m[2])
    const verdict = m[5]
    // the emitter's own guard the census mirrors - the summary line
    // only prints when at least one segment rode (the zero-segments
    // skin the emitter never prints, the grammar refuses it)
    if (segs <= 0) continue
    // the emitter's own arithmetic the census holds - the cap skin's
    // own N must equal the line's own segments cell (the same variable
    // prints both; a forged meter never rides)
    if (m[6] !== undefined && Number(m[6]) !== segs) continue
    mass.walks += 1
    mass.segs += segs
    if (verdict === 'inside the direct envelope') mass.walkedIn += 1
    else mass.outside += 1
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all four
 * proven integer counts and the verdict arithmetic (walkedIn + outside
 * = walks - every summary exactly one verdict). Extra keys never
 * rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {walks,segs,walkedIn,outside}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function approachWalkTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.walks) && s.walks >= 0 &&
      Number.isInteger(s.segs) && s.segs >= 0 &&
      Number.isInteger(s.walkedIn) && s.walkedIn >= 0 &&
      Number.isInteger(s.outside) && s.outside >= 0 &&
      s.walkedIn + s.outside === s.walks
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the walked-in mass's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law), the three-face walks mass is zero (the lane never rode -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function approachWalkTrendRow (e) {
  if (!approachWalkTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.walkedIn
  const p = prev.walkedIn
  const c = cur.walkedIn
  // the lane never rode across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (back.walks === 0 && prev.walks === 0 && cur.walks === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const walksArc = `the walks rode ${back.walks} -> ${prev.walks} -> ${cur.walks}`
  const outsideArc = `the outside rode ${back.outside} -> ${prev.outside} -> ${cur.outside}`
  const segsArc = `the segments rode ${back.segs} -> ${prev.segs} -> ${cur.segs}`
  const tail = "(the yard approach's own lane keeps the yardapproachtrend seat, the walk nudge's own trend keeps the walknudgetrend seat, the climb family's own lanes keep their seats - the approach walk's verdict row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the approach walk trend (v0.976.250): the walked-in mass's own fade ran two steps deep - ${arc} - the walked-in mass's own fade, ${walksArc}, ${outsideArc}, ${segsArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the approach walk trend (v0.976.250): the walked-in mass's own swell ran two steps deep - ${arc} - the walked-in mass's own swell, ${walksArc}, ${outsideArc}, ${segsArc} ${tail}`
  }
  return `the approach walk trend (v0.976.250): the walked-in mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${walksArc}, ${outsideArc}, ${segsArc} ${tail}`
}
