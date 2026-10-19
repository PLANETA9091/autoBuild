// (v0.976.282) THE MATERIAL CELL'S OWN GATHERED MASS - the final
// report's own per-material collected line the word prices ONE
// material at a time across the faces (the narrow lane the same-name
// cell rides - the .281 front the worklog priced).
// THE EVIDENCE (the seat the .280 word's own lines ride): the report
// prints '  sand          collected      75 (0.047% of 157,926)'
// (F478's own face, run 39174346168) and the same four-line shape on
// F479-F485 (runs 39178460638/39184044983/39188700500/39193658512/
// 39200742905/39206031566/39208857636) - testbed/fleet19.mjs's
// per-material collected line (fleet19.mjs:5006), one print per plan
// material the report names. The .280 word prices the LINES' OWN SUM
// (the report's whole gathered mass, the MULTI-PRINT lane); the
// single material's own cell rode unread (sand 75 -> 38 -> 60 -> 90
// -> 102 -> 61 -> 48 -> 11 the eight-face arc no row read - the
// gravel arc 12 -> 7 -> 4 -> 0 -> 6 -> 9 -> 9 -> 6 the F481 zero-got
// face the lawful zero holds). THIS WORD TAKES THE CELL SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the same
// template the .280 grammar holds byte-exact - the two-space prefix,
// the name gap the padEnd's own 13-wide column, the got gap the
// padStart's own 7-wide column, the priced cell no leading zero no
// sign (the .248 house law), the required tail the toFixed/
// toLocaleString's own shapes, the tail boundary the line ends at
// the line end never mid-token), THE CELL LAW LAST-PRINT-WINS (the
// report speaks once per plan material - the family's own
// single-emitter law the counters line holds; the last strict print
// the face's own freshest tally, the junk line the grammar refuses
// never poisons), the missing material the LAWFUL ZERO (the face the
// plan never named the material keeps the healthy zero - the .280
// word's own never-gathered law), the invalid name the honest null
// (the lowercase-MC-id shape the grammar holds - the caller's own
// broken hand the null prices, never a zero). The fence: every face
// cell a proven non-negative integer. The word reads the cell's own
// arc two steps deep (the family's own two-step shape): both steps
// down = the dig weather's own fade, both steps up = the swell, a
// trade = the swing; a held step prices no direction - the honest
// silence (the family's own held law the REAL gravel faces speak:
// W482-483-484 the 6 -> 9 -> 9 held, W483-484-485 the 9 -> 9 -> 6
// held); a three-face zero cell prices nothing. The REAL sand arc
// speaks SIX of the six windows (swing/swell/swell/swing/fade/fade -
// the strongest birth the family priced, every weather shape the
// same hand rode).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the .247 word's own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold, the fleet's own
// console never changes). THE SEATS NEVER MERGE: the .280 word keeps
// the lines' own sum (the report's whole mass), the .248 dump word
// keeps the byName JSON's own stockpile seat, the .232 sweep
// collected lane keeps the smelt sweep's own verdict seat, the
// .276/.269 counters rows keep the counters line's own cells - the
// single material's own cell row alone rides here.

const MATERIAL_CELL_RE = /^  ([a-z_]+)( {1,20})collected( {1,20})(0|[1-9]\d*)(?: \((\d+\.\d{3})% of (\d{1,3}(?:,\d{3})*)\))?$/

const NAME_RE = /^[a-z_]+$/

/**
 * The cell census - one material's own gathered tally the strict
 * grammar prices (the final report's own collected lines; THE CELL
 * LAW LAST-PRINT-WINS - the last strict print for the named material
 * the face's own freshest tally, the junk line never poisons).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @param {string|null} [name] the material's own lowercase MC id
 * @returns {number|null} the cell (the zero lawful - the face the
 *   plan never named the material), or null when the input itself is
 *   invalid (not an array, or the name not the lowercase-id shape)
 */
export function materialCellCensus (lines, name) {
  if (!Array.isArray(lines)) return null
  if (typeof name !== 'string' || !NAME_RE.test(name)) return null
  let cell = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = MATERIAL_CELL_RE.exec(l)
    if (!m || m[1] !== name) continue
    const got = m[4]
    // the emitter's own padEnd/padStart arithmetic byte-exact - the
    // gaps the template's own column math holds, the clamp at one
    const nameGap = Math.max(1, 14 - name.length)
    const gotGap = Math.max(1, 8 - got.length)
    if (m[2].length !== nameGap || m[3].length !== gotGap) continue
    cell = Number(got) // the last strict print - the freshest tally
  }
  return cell
}

/**
 * The fence - the fold's own cells must prove themselves before the
 * word rides. A fold that cannot prove itself prices nothing (the
 * fence law: the word never rides a lie). Every face must hold a
 * proven non-negative integer cell (the zero lawful - the
 * never-gathered face). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold: { back, prev, cur }
 * @returns {boolean}
 */
export function materialCellConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  return numOk(e.back) && numOk(e.prev) && numOk(e.cur)
}

/**
 * The word - one line, one material's own two-step gather weather.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face zero cell the family's own shape keeps
 * silent, the invalid name the null, or the fold fails the fence.
 *
 * @param {string|null} [name] the material's own lowercase MC id
 * @param {object|null} [e] the trend fold { back, prev, cur }
 * @returns {string|null} the row byte, or null
 */
export function materialCellTrendRow (name, e) {
  if (typeof name !== 'string' || !NAME_RE.test(name)) return null
  if (!materialCellConsistent(e)) return null
  const { back, prev, cur } = e
  // the three-face zero cell - the family's own shape keeps the
  // silence (the zeros never invent a trend, the never-gathered face
  // the lawful zero prices)
  if (back === 0 && prev === 0 && cur === 0) return null
  const first = prev - back
  const second = cur - prev
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent - the REAL gravel faces the
  // W482-483-484 and W483-484-485 helds the silence prices)
  if (first === 0 || second === 0) return null
  const arc = `${back} -> ${prev} (${first >= 0 ? '+' : ''}${first}) -> ${cur} (${second >= 0 ? '+' : ''}${second})`
  const tail = "(the final collected trend's row keeps the report's own gathered-mass seat (the .280 word - the lines' own sum the MULTI-PRINT law rides, the whole report's own mass never the single cell), the materials dump word keeps the byName JSON's own stockpile seat (the .248 word - the demand side's own bottom ledger), the sweep collected lane keeps the smelt sweep's own verdict seat (the .232 word - a different collected), the counters banked/smelted rows keep the counters line's own cells (the .276/.269 words) - the material's own cell row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the ${name} collected cell trend (v0.976.282): the ${name} dig weather's own fade ran two steps deep - ${arc} - the ${name} cell's own gather thinned two faces deep, the last strict print the face's own tally rode ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the ${name} collected cell trend (v0.976.282): the ${name} dig weather's own swell ran two steps deep - ${arc} - the ${name} cell's own gather surged two faces deep, the last strict print the face's own tally rode ${tail}`
  }
  return `the ${name} collected cell trend (v0.976.282): the ${name} dig weather's own swing - ${arc} - the fade and the swell traded seats between the faces, the last strict print the face's own tally rode ${tail}`
}
