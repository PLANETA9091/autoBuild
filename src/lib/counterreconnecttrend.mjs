// (v0.976.268) THE COUNTERS RECONNECT CELL'S OWN CHURN MASS - the
// counters line's own reconnects cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints 'bots=19 spawned=19 reconnects=1 kicks=0 ...'
// (F478's own face, run 39174346168) and '... reconnects=20 kicks=12
// ...' (F479, run 39178460638) and '... reconnects=14 kicks=1 ...'
// (F480, run 39184044983) and '... reconnects=5 kicks=1 ...' (F481,
// run 39188700500) and '... reconnects=23 kicks=9 ...' (F482, run
// 39193658512) - testbed/fleet19.mjs's counters line (fleet19.mjs:4682),
// one print per face, the reconnects cell the fleet's own re-link tally
// (the re-bootstraps the server's own churn forced - each reconnect a
// mining stall plus a full bot re-bootstrap, the pocketline census's own
// words) - and no book owned the cell's own mass across the faces: the
// pocketline census (the v0.565.0 word) prices the WITHIN-FACE seat (the
// per-bot holders' local/spread split - its row reads the bot entries,
// never the counters cell), the reconnectretrytrend word prices the
// retry lane beside (its own tail names the stats-line cell 'never
// rides' - the seat it refuses this word takes), the statcarry module
// owns the carry lane (the death's own stat preservation), the finalbody
// census prices the body's bots/alive cells only, the upgraded word (the
// .267 word) prices the upgraded cell beside with the reboots side-car -
// the churn mass itself rode unread (1 -> 20 -> 14 -> 5 -> 23 the
// five-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the spawned cell, the emitter's own template order, the
// priced cells no leading zero no sign (the .248 house law), the tail
// boundary the cell ends at whitespace or line end never mid-token -
// the fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated head, the wrong frame),
// the law LAST-PRINT-WINS - the counters line speaks once per face,
// the last print the freshest body the face held.
//
// THE CELLS: reconnects (the churn mass - the proven integer cell, the
// zero lawful - the never-disconnecting face keeps the healthy zero),
// kicks (the kick tally the side-car holds - the server's own evictions
// the same churn rode, the kick bill's own lanes keep the kick data's
// seats: the cell rides the row as a number, never a second word). The
// trend reads the churn mass's arc two steps deep (the family's own
// two-step shape): both steps down = the churn weather's own fade (the
// links held), both steps up = the churn weather's own swell (the
// server's own storm), a trade = the swing. A held step prices no
// direction - the honest silence (the family's own held law); a
// three-face zero churn mass prices nothing - the fleet never
// re-linked the whole arc (the lawful silence the .255 churn ceiling's
// own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const RECONNECT_RE = /^bots=(\d+) spawned=(\d+) reconnects=(0|[1-9]\d*) kicks=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own reconnects cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{reconnects: number, kicks: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterReconnectCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { reconnects: 0, kicks: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = RECONNECT_RE.exec(l)
    if (!m) continue
    mass.reconnects = Number(m[3]) // the head chain's own capture order: bots/spawned ride m[1..2], the priced cell rides m[3], the side-car rides m[4]
    mass.kicks = Number(m[4])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-disconnecting face).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {reconnects,kicks}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterReconnectConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.reconnects) && numOk(s.kicks)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the churn mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never re-linked -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {reconnects,kicks}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterReconnectTrendRow (e) {
  if (!counterReconnectConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.reconnects
  const p = prev.reconnects
  const c = cur.reconnects
  // the fleet never re-linked across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const kickArc = `the kicks rode ${back.kicks} -> ${prev.kicks} -> ${cur.kicks}`
  const tail = "(the pocketline census's own local/spread row keeps the within-face seat, the reconnectretrytrend word keeps the retry lane's seat, the statcarry module keeps the carry lane, the upgraded word's row keeps the reboots side-car's seat (the .267 word) - the churn mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the reconnect trend (v0.976.268): the churn weather's own fade ran two steps deep - ${arc} - the churn mass's own fade, ${kickArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the reconnect trend (v0.976.268): the churn weather's own swell ran two steps deep - ${arc} - the churn mass's own swell, ${kickArc} ${tail}`
  }
  return `the reconnect trend (v0.976.268): the churn weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${kickArc} ${tail}`
}
