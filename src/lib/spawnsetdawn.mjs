// (v0.976.328) THE WORLD SPAWN'S OWN SET DAWN - the server console's
// own 'Set the world spawn point to x, y, z [yaw, pitch] in dimension'
// INFO line's clock cell the word prices across the faces - the SET
// DAWN hand (the earliest bed-set print's own clock, seconds since
// midnight) the fire-1543 tail named and never priced (the SAME-LINE
// DIFFERENT-CELL LAW the echo box holds: the .325/.326/.327 words
// price the same line's X/Z/Y coordinate cells, this word prices the
// frame's own clock cell - the time domain the coord words never
// opened on this line; the .321/.322 login clock pair's own
// cross-emitter mirror holds - the login line's dawn/dusk pair priced
// their emitter's clock, this word prices the bed-set emitter's own).
// THE EVIDENCE: the server's own boot prints '[20:40:21] [Server
// thread/INFO]: Set the world spawn point to -130, 71, 398 [0.0, 0.0]
// in minecraft:overworld' and re-sets the bed ten seconds later
// ('[20:40:31] ...' F501's own face) - TWO prints per face the boot
// conversation rides, the pair 9-10 seconds apart every face, the MIN
// hand the earlier print takes (the MAX and LAST hands the later print
// wears - the sibling seats the next words name); the REAL FIFTEEN-
// face arc byte-verified from the fleet-server-log artifacts (every
// face's spawn sets re-read, the earliest print's clock the census
// prices, the within-face pair agreement the trust rides): F501's set
// dawn spoke 20:40:21, F502 21:40:44, F503 22:35:37, F504 23:15:03,
// F505 23:44:07, F506 00:57:33, F507 01:44:25, F508 02:14:31, F509
// 03:02:20, F510 03:47:29, F511 04:18:43, F512 05:00:51, F513 06:02:
// 42, F514 07:01:16, F515 07:38:05 - the seconds the census prices
// 74421/78044/81337/83703/85447/3453/6265/8071/10940/13649/15523/
// 18051/21762/25276/27485 - the REAL
// windows: W1 the swell 74421 -> 78044 (+3623) -> 81337 (+3293), W2
// the swell 78044 -> 81337 (+3293) -> 83703 (+2366), W3 the swell
// 81337 -> 83703 (+2366) -> 85447 (+1744), W4 the swing 83703 ->
// 85447 (+1744) -> 3453 (-81994), W5 the swing 85447 -> 3453 (-81994)
// -> 6265 (+2812), W6 the swell 3453 -> 6265 (+2812) -> 8071 (+1806),
// W7 the swell 6265 -> 8071 (+1806) -> 10940 (+2869), W8 the swell
// 8071 -> 10940 (+2869) -> 13649 (+2709), W9 the swell 10940 ->
// 13649 (+2709) -> 15523 (+1874), W10 the swell 13649 -> 15523
// (+1874) -> 18051 (+2528), W11 the swell 15523 -> 18051 (+2528) ->
// 21762 (+3711), W12 the swell 18051 -> 21762 (+3711) -> 25276
// (+3514), W13 the swell 21762 -> 25276 (+3514) -> 27485 (+2209) -
// THIRTEEN REAL WINDOWS THIRTEEN SPEAKS ZERO HELD the word born
// speaking THIRTEEN DEEP the deepest birth the family holds (the
// .324 boot and .326 south births' own eleven-deep record the sibling
// holds - the W4/W5 deltas the midnight wrap rides exact, the day
// boundary the seconds-since-midnight domain crosses, the arithmetic
// exact integers); the set dawn the faces hold rides the first
// login's own second beside - the .321 login dawn word's REAL arc
// 74421/78043/81336/83703/85447/3453/6264/8071/10939/13649/15523 the
// F501/F504/F505/F506/F508/F510/F511 faces byte-equal, the F502/F503/
// F507/F509 faces the +1 second the boot's own ordering rides (the
// bed-set the first login's own second or the next the CROSS-CHECK
// re-voiced on every shared face).
//
// GRAMMAR: the .321/.322/.325 clock frame byte-exact (the
// '[(HH:MM:SS)] [Server thread/INFO]: Set the world spawn point to '
// head the .278/.292/.293 INFO frame convention holds, the PRICED
// clock cell zero-padded fixed fields hour 00-23 minute 00-59 second
// 00-59 the emitter's own shape (the leading zeros the F506 00:57:33
// face rides, the .248 no-leading-zero law the COORD cells hold the
// clock cell the opposite shape the same house keeps), the X/Y/Z
// cells the signed integer captures shape-only (the same-line cells
// the .325/.326/.327 words price), the ' [yaw, pitch]' angle pair the
// float prints the emitter's own shape holds shape-only, the ' in '
// tail, the dimension cell the minecraft:[a-z_]+ shape the
// overworld's own name rides shape-only, LINE END tail boundary (the
// .288 precedent)); the near-miss lanes never ride - nineteen skins
// refused (the bot prefix, the WARN frame, the pretty spacing, the
// plural body, the altered verb, the missing coords, the float coord,
// the leading-zero coord, the plus coord, the integer angle, the
// single angle, the missing dimension, the bare dimension, the
// leading whitespace, the trailing junk, the CR tail, the 1-digit
// hour clock, the overflow second clock, the dash-separator clock).
// THE SCALAR THE SET DAWN PRICES: the census takes the EARLIEST
// spawn-set print's clock the face held (the MIN hand the .321 login
// dawn word's own precedent holds on the seconds domain - the .313
// min port mirror confirms, the earliest bed-set the boot voiced;
// the null-sentinel the no-spawn face the lawful zero - the
// .304/.306 convention holds); the X/Y/Z cells and the angle pair
// and the dimension cell ride shape only - the set dawn hand alone
// prices. THE FENCE: the .321/.322 clock words' own fence (the
// integer law plus the clock ceiling 0..86399 the day boundary
// keeps). CENSUS GUARD: zero fleet wiring, zero new fleet log lines
// - the word rides the reader's fold through the SECOND carrier lane
// the server-console faces ride (the argv[6..8] tail the .278
// contract extends, the .281 through .327 folds the neighbours
// hold), the fleet's own console never changes.

const SPAWN_SET_DAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/

/**
 * The set dawn census - the earliest bed-set print's own clock the
 * face's boot conversation voiced (seconds since midnight).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{setDawnSec: number}|null} the mass or null (non-array)
 */
export function spawnSetDawnCensus (lines) {
  if (!Array.isArray(lines)) return null
  let dawn = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SPAWN_SET_DAWN_RE.exec(l)
    if (m) {
      const sec = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
      if (dawn === null || sec < dawn) dawn = sec // the MIN hand - the earliest bed-set the face voiced
    }
  }
  return { setDawnSec: dawn === null ? 0 : dawn }
}

/**
 * The fence - the .321/.322 clock words' own integer law plus the day
 * boundary 0..86399 keeps.
 *
 * @param {{back: {setDawnSec: number}, prev: {setDawnSec: number}, cur: {setDawnSec: number}}} e
 * @returns {boolean}
 */
export function spawnSetDawnConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.setDawnSec) && ok(e.prev.setDawnSec) && ok(e.cur.setDawnSec))
}

/**
 * The set dawn weather's own two-step shape across three faces.
 *
 * @param {{back: {setDawnSec: number}, prev: {setDawnSec: number}, cur: {setDawnSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function spawnSetDawnTrendRow (e) {
  if (!spawnSetDawnConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.setDawnSec
  const p = prev.setDawnSec
  const c = cur.setDawnSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the dawn never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the spawn-set line's own X cell the .325 anchor word prices the LAST-PRINT-WINS seat and the Z cell the .326 south word prices the MAX seat and the Y cell the .327 bed word prices and the later print's clock the MAX hand's named-never-priced seat keeps (the SAME-LINE DIFFERENT-CELL LAW the echo box holds), the .321 login dawn word keeps the login line's clock cell's earlier edge and the .322 login dusk word keeps the same cell's later edge (a different emitter the same clock kind prices), the .320 login south seat and the .319 north seat and the .317/.318 login Y pair and the .315/.316 login X pair and the .297/.323 entity id pair and the .312/.313 port pair and the .314 login count word keeps the join mass and the .294 boot done word keeps the same boot conversation's own Done duration seat and the .293 boot prep word keeps the elapsed segment and the .324 boot mass word keeps the boot emitter's own duration cell and the .304/.307 echo Y pair and the .305/.308 echo Z pair and the .306 echo east seat and the .309 echo west seat (a different emitter the same cell kinds price) and the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own counts, the .311 timed out word keeps the stalled-drop seat, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the set dawn's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server spawn set dawn trend (v0.976.328): the world spawn's own set dawn fade ran two steps deep - ${arc} - the bed-set walked earlier each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server spawn set dawn trend (v0.976.328): the world spawn's own set dawn swell ran two steps deep - ${arc} - the bed-set walked later each face, ${tail}`
  }
  return `the server spawn set dawn trend (v0.976.328): the world spawn's own set dawn swing - ${arc} - the boot's own bed-set traded its day between the faces, ${tail}`
}
