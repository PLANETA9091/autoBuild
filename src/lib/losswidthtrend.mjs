// (v0.976.335) THE FLEET'S OWN LOSS WIDTH - the server console's own
// 'lost connection' lane the word prices across the faces - the
// WIDTH cell (the ride's own churn span, dusk - dawn in seconds, the
// distance the lane's own first breath to the lane's own last
// breath) the .334 dawn word and the .333 dusk word priced the two
// EDGES of and never the span between (the same lane's third mass:
// the edges the two clock hands keep, the width this word prices -
// co-existence by seat never by duplication). THE WRAP-AWARE LAW:
// the face the day boundary keeps crosses midnight between the
// edges (F505's own face the proof: the dawn 23:44:19 = 85459 the
// day's own last hour, the dusk 00:00:20 = 20 the next day's first
// seconds - the numeric dusk < the numeric dawn the raw compare
// fails and the wrap the arithmetic keeps: width = dusk + 86400 -
// dawn = 961, the DAWN-BEFORE-DUSK law wrap-aware the .334 fieldread
// holds, this word's own census the same wrap law rides). THE EVIDENCE:
// the REAL TWENTY-ONE-face width arc derived from the two
// byte-verified edge arcs the artifacts hold (the fire-2230 and
// fire-2330 harvests, the artifact IDs byte-agree the ledger F501
// 12220643212 through F521 12268373593; the dawn arc the .334 word
// prices 74434/78055/81349/83716/85459/3465/6276/8083/10951/13662/
// 15535/18063/21774/25288/27497/30185/33130/36222/38159/42165/48774,
// the dusk arc the .333 word prices 75321/78952/82284/84537/20/4257/
// 7140/8913/11718/14463/16495/18904/22723/26241/28054/31146/33830/
// 36919/39120/42849/49548) - the widths the census prices 887/897/
// 935/821/961/792/864/830/767/801/960/841/949/953/557/961/700/697/
// 961/684/774 - the honest band 557..961 (F515's own face the
// narrowest ride the class-union proof face carries, the wrap face
// F505 and F516 and F519 the 961 ceiling three rides share; the
// fire-2330 ledger's 887..961 sketch the F515 557 the honest read
// corrects) - NINETEEN REAL WINDOWS NINETEEN SPEAKS ZERO HELD the
// word born speaking NINETEEN DEEP the family record TIED (the
// .333/.334 nineteen-deep births the siblings hold). THE SINGLE
// BREATH'S OWN ZERO: the face one loss print carries prices width
// zero honest (the dawn and the dusk the same second rides - the
// lane opened and closed on one breath, the span zero lawful the
// .304/.306 null-sentinel convention keeps) and the no-loss face
// the lawful zero too (the census never invents a lane the console
// never voiced). THE GRAMMAR: the census re-rides the loss lane's
// own strict frame the .333/.334 words hold byte-exact - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the INFO frame
// convention, the '<name> lost connection: <reason>' body (the name
// cell rides shape only, the reason cell the two class skins
// Disconnected|Timed out ride shape only, the clock cell zero-padded
// fixed fields), LINE END tail boundary (the .288 precedent); the
// FIRST print the dawn keeps (the .334 FIRST-PRINT-WINS law), the
// LAST print the dusk keeps (the .333 LAST-PRINT-WINS law) - the
// two hands this word's own inputs, the width the cell it prices.
// THE FENCE: the clock words' own integer law plus the day ceiling
// 0..86399 the wrap arithmetic bounds (the width the two clocks'
// own distance never exceeds the day the domain keeps). CENSUS
// GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281 through .334 folds the neighbours hold), the
// fleet's own console never changes.

const FLEET_LOSS_LANE_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+ lost connection: (Disconnected|Timed out)$/

const toSec = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

/**
 * The loss width census - the ride's own churn span the face's loss
 * lane voiced (dusk - dawn, seconds, wrap-aware).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{lossWidthSec: number}|null} the mass or null (non-array)
 */
export function lossWidthCensus (lines) {
  if (!Array.isArray(lines)) return null
  let dawn = null
  let dusk = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = FLEET_LOSS_LANE_RE.exec(l)
    if (m) {
      if (dawn === null) dawn = toSec(m) // the FIRST print - the lane's opening breath the .334 dawn hand keeps
      dusk = toSec(m) // the LAST print - the lane's closing breath the .333 dusk hand keeps
    }
  }
  if (dawn === null) return { lossWidthSec: 0 } // the no-loss face - the lawful zero
  const width = dusk >= dawn ? dusk - dawn : dusk + 86400 - dawn // the wrap the day boundary keeps
  return { lossWidthSec: width }
}

/**
 * The fence - the clock words' own integer law plus the day ceiling
 * 0..86399 the wrap arithmetic bounds.
 *
 * @param {{back: {lossWidthSec: number}, prev: {lossWidthSec: number}, cur: {lossWidthSec: number}}} e
 * @returns {boolean}
 */
export function lossWidthConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.lossWidthSec) && ok(e.prev.lossWidthSec) && ok(e.cur.lossWidthSec))
}

/**
 * The loss width weather's own two-step shape across three faces.
 *
 * @param {{back: {lossWidthSec: number}, prev: {lossWidthSec: number}, cur: {lossWidthSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function lossWidthTrendRow (e) {
  if (!lossWidthConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.lossWidthSec
  const p = prev.lossWidthSec
  const c = cur.lossWidthSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the widths never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the loss lane's own edges the clock hands keep: the .334 fleet loss dawn word prices the lane's own FIRST print's clock cell (this word's own dawn input - the FIRST-PRINT-WINS law the churn face keeps) and the .333 fleet closing clock word prices the lane's own LAST print's clock cell (this word's own dusk input - the LAST-PRINT-WINS law the terminal burst keeps) and the wrap the day boundary keeps rides both hands wrap-aware (F505's own face the proof: the dusk 00:00:20 the next day's first seconds the arithmetic folds back) and the .310 disconnect word keeps the loss lane's Disconnected class count and the .311 timed out word keeps the Timed out class count (the two class skins this word's reason cells ride shape only - the counts the siblings price) and the leave lane the same-second sibling the burst-identity law keeps ('<name> left the game' - the pair's own second line the lane never prices) and the dupclock book keeps the duplicate-loss churn and the deathcause module keeps the death lane and the kick bill keeps the fleet log's own event cells and the .278 advancement word keeps the same console's own achievement seat and the .332 opening clock word keeps the boot conversation's own first second (the FOLLOWS-OPENING ordering the dawn never breaks) and the .331 selection and .330 completion and .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the login family's thirteen hands the .314 headcount keeps and the gc band keeps the [gc] lane the face ends on and the .292 fill word keeps the fill echo lane - the loss width's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own loss width trend (v0.976.335): the fleet's own loss width fade ran two steps deep - ${arc} - the fleet's own loss lane rode narrower each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own loss width trend (v0.976.335): the fleet's own loss width swell ran two steps deep - ${arc} - the fleet's own loss lane rode wider each face, ${tail}`
  }
  return `the fleet's own loss width trend (v0.976.335): the fleet's own loss width swing - ${arc} - the fleet's own loss width traded its shape between the faces, ${tail}`
}
