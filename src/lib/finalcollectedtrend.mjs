// (v0.976.280) THE FINAL COLLECTED LINES' OWN GATHERED MASS - the final
// report's own per-material collected lines the word prices across the
// faces.
// THE EVIDENCE (the seat the fleet faces' own report blocks carry): the
// report prints '  sand          collected      11 (0.007% of 157,926)'
// and '  gravel        collected       6 (0.004% of 149,380)' and
// '  dirt          collected     111' and '  stone         collected
// 299 (4.466% of 6,695)' (F485's own face, run 39208857636) and the
// same four-line shape on F478 (run 39174346168) and F479 (run
// 39178460638) and F480 (run 39184044983) and F481 (run 39188700500)
// and F482 (run 39193658512) and F483 (run 39200742905) and F484 (run
// 39206031566) - testbed/fleet19.mjs's per-material collected line
// (fleet19.mjs:5006), one print per plan material the report names,
// the collected cell the run's own gather tally (the got the plan's
// own demanded side rides against, the stockpile's own gathered-side
// display the final report closes beside) - and no book owned the
// lines' own mass across the faces: the materials dump word (the .248
// word) prices the byName JSON's own stockpile mass (a different
// emitter's lane - fleet19.mjs:4952's own console.log, the demand
// side's own bottom ledger, never the gathered display), the plan
// progress word prices the plan's own completion fraction, the sweep
// collected lane word (the .232 word) prices the smelt sweep's own
// verdict lines (a different collected - the sweep's own close, never
// the report's gather), the bankcensus module keeps the loot lane,
// the counters banked/smelted words (the .276/.269 words) keep the
// counters line's own cells, the bootstrap targets word (the .279
// word) prices the launch line's own assignment - the gathered mass
// itself rode unread (719 -> 1075 -> 1047 -> 644 -> 679 -> 498 -> 853
// -> 427 the eight-face arc no row read). THIS WORD TAKES THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the collected
// line's own template byte-exact - the two-space prefix the report
// block's own indent holds, the name the MC item id's own lowercase
// shape, the name gap the padEnd's own 13-wide column prints (the
// gap the emitter's own arithmetic holds - 14 minus the name's own
// length, the clamp at one when the name overruns the column), the
// ' collected ' prose the template rides, the got gap the padStart's
// own 7-wide column prints (8 minus the got's own length, the clamp
// at one), the priced cell no leading zero no sign (the .248 house
// law), the required tail the emitter's own optional byte prints
// (' (P.PPP% of N,NNT)' - the percent the toFixed's own three-decimal
// shape, the required the toLocaleString's own comma grouping), the
// tail boundary the line ends at the line end never mid-token - the
// fused-tail skin the grammar refuses), the near-miss lanes never
// ride (the bare cell without the frame, the pretty spacing, the
// altered order, the leading zero, the negative count, the bot-tagged
// prefix, the drifted template, the truncated tail, the wrong frame,
// the comma-less required skin, the fused percent skin), THE
// MULTI-PRINT LAW - the report speaks once per plan material, every
// line its own seat, the face's own gathered mass the SUM the lines
// ride (the family's LAST-PRINT-WINS the one-print emitters hold -
// the counters line's own law, the launch line's own law - never this
// one: the gather the face closes with the whole report's own mass,
// the junk line the grammar refuses never poisons the sum, the
// strict-grammar lines alone ride). THE CELLS: total (the gathered
// mass - the sum of the got cells the strict grammar rode, the zero
// lawful - the never-gathered face keeps the healthy zero), materials
// (the lines' own tally the same report rode - the side-car). The
// trend reads the gathered mass's arc two steps deep (the family's
// own two-step shape): both steps down = the gather weather's own
// fade (the dig hand thinned), both steps up = the gather weather's
// own swell (the dig hand surged), a trade = the swing. A held step
// prices no direction - the honest silence (the family's own held
// law); a three-face zero gathered mass prices nothing - the family's
// own shape keeps the silence (the never-gathered face the lawful
// zero prices, the bars never invent). The REAL arc the birth prices
// speaks five of the six windows (the swing-rich arc - the strongest
// birth the family priced beside the banked word's zero-held arc).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never
// changes).

const FINAL_COLLECTED_RE = /^  ([a-z_]+)( {1,20})collected( {1,20})(0|[1-9]\d*)(?: \((\d+\.\d{3})% of (\d{1,3}(?:,\d{3})*)\))?$/

/**
 * The census - the family's own strict grammar, the face's own gather
 * read (the final report's own collected lines; THE MULTI-PRINT LAW -
 * every strict line its own seat, the sum the face's own gathered
 * mass, the junk line never poisons the sum).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{total: number, materials: number}|null}
 *   the cells, or the zeros when the lines themselves are junk (a
 *   face whose lines hold no collected line is the LAWFUL ZERO - the
 *   never-gathered face keeps the healthy-looking zeros), null when
 *   the input itself is not an array
 */
export function finalCollectedCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { total: 0, materials: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = FINAL_COLLECTED_RE.exec(l)
    if (!m) continue
    const name = m[1]
    const got = m[4]
    // the emitter's own padEnd/padStart arithmetic byte-exact - the
    // gaps the template's own column math holds, the clamp at one
    const nameGap = Math.max(1, 14 - name.length)
    const gotGap = Math.max(1, 8 - got.length)
    if (m[2].length !== nameGap || m[3].length !== gotGap) continue
    mass.total += Number(got) // the priced cell - the gather's own mass
    mass.materials += 1 // the side-car - the lines' own tally
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-gathered face; the
 * materials-zero face must hold the zero total - the tally and the
 * sum never disagree). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {total,materials}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function finalCollectedConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    if (!numOk(s.total) || !numOk(s.materials)) return false
    return s.materials !== 0 || s.total === 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the gathered mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero mass the family's own shape keeps
 * silent (the never-gathered face), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {total,materials}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function finalCollectedTrendRow (e) {
  if (!finalCollectedConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.total
  const p = prev.total
  const c = cur.total
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend, the never-gathered face
  // the lawful zero prices)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const matsArc = `the materials rode ${back.materials} -> ${prev.materials} -> ${cur.materials}`
  const tail = "(the materials dump word's row keeps the byName JSON's own stockpile seat (the .248 word - a different emitter's lane, the demand side's own bottom ledger never the gathered display), the plan progress word's row keeps the completion fraction's seat, the sweep collected lane's row keeps the smelt sweep's own verdict seat (the .232 word - a different collected), the counters banked/smelted rows keep the counters line's own cells (the .276/.269 words), the bootstrap targets row keeps the launch line's own assignment seat (the .279 word) - the gathered mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the final collected trend (v0.976.280): the gather weather's own fade ran two steps deep - ${arc} - the gathered mass's own fade, ${matsArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the final collected trend (v0.976.280): the gather weather's own swell ran two steps deep - ${arc} - the gathered mass's own swell, ${matsArc} ${tail}`
  }
  return `the final collected trend (v0.976.280): the gather weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${matsArc} ${tail}`
}
