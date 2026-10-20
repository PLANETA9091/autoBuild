// (v0.976.338) THE FLEET'S OWN RIDE - the server console's own two
// lines the word prices across the faces - the RIDE cell (the lane's
// own closing breath minus the boot's own completion second, in
// seconds: the span the vanilla server's own Done line to the loss
// lane's own last print, the fleet's own ride length the face's
// whole conversation carries after the boot finished). The two INPUT
// edges the siblings price: the .330 boot done clock word prices the
// Done line's own CLOCK cell (the boot's own finish second) and the
// .333 fleet closing clock word prices the 'lost connection' lane's
// own LAST print's clock cell (the lane's own closing breath) - the
// two edges this word's own inputs, the SPAN between them the cell
// it prices (co-existence by seat never by duplication; the .335
// loss width word prices the lane's own inner span dawn - dusk and
// the .337 boot quiet word prices the outer span open - dawn - the
// ride the THIRD span the same conversation owns: done -> dusk, the
// whole ride's own length the boot-finish edge opens). THE SPAN LAW
// THE RIDE KEEPS: ride = (dawn - done) + width - the .337 quiet and
// the .335 width the algebra's own pieces the census never re-prices
// (the ride the whole, the quiet and the width the pieces, the three
// spans co-exist by seat). THE WRAP-AWARE LAW: the face the day
// boundary keeps crosses midnight between the edges (F505's own face
// the proof: the Done 23:43:57 = 85437, the dusk 00:00:20 = 20 the
// next day's first seconds - the numeric dusk < the numeric done the
// raw compare fails and the wrap the arithmetic keeps: ride = dusk +
// 86400 - done = 983, the wrap law the .333/.334/.335/.337 siblings
// hold). THE EVIDENCE: the REAL NINETEEN-face ride arc derived from
// the two byte-verified edge arcs the artifacts hold (the .330 done
// arc 74410/78032/81326/83691/85437/3444/6256/8060/10930/13638/
// 15513/18042/21751/25263/27472/30162/33106/36200/38138 and the .333
// dusk arc 75321/78952/82284/84537/20/4257/7140/8913/11718/14463/
// 16495/18904/22723/26241/28054/31146/33830/36919/39120) - the rides
// the census prices 911/920/958/846/983/813/884/853/788/825/982/862/
// 972/978/582/984/724/719/982 - the honest band 582..984 (F515's own
// face the shortest ride the class-union proof face carries, F516's
// own face the ceiling the arc keeps; the floor and the ceiling the
// width arc's own 557/961 band the quiet tail-width the ride adds) -
// SEVENTEEN REAL WINDOWS SEVENTEEN SPEAKS ZERO HELD the word born
// speaking SEVENTEEN DEEP the family record TIED (the .330 boot done
// clock's own seventeen-deep birth the sibling holds - the W13/W14
// swings 972 -> 978 (+6) -> 582 (-396) and 978 -> 582 (-396) -> 984
// (+404) the floor's own dive and the ceiling's own climb back the
// width arc's own pair the ride re-voices, the W17 swing 724 -> 719
// (-5) -> 982 (+263) the fresh face's trade). THE PARTIAL PHASE'S
// OWN ZERO: the face missing either edge (no Done print, or the
// bootless loss lane) prices the ride zero honest (the phase never
// half-read - the .304/.306 null-sentinel convention holds). THE
// GRAMMAR: the census re-rides the two strict frames the .330/.333
// words hold byte-exact - the '[(HH:MM:SS)] [Server thread/INFO]: '
// head the INFO frame convention, the 'Done (N.NNNs)! For help, type
// "help"' body the .330 emitter's own skin (the duration cell rides
// shape only - the .294/.324 words price the ms cell), the '<name>
// lost connection: <reason>' body the .333 emitter's own skin (the
// name cell and the two class skins ride shape only), LINE END tail
// boundary (the .288 precedent); the LAST Done print the done hand
// keeps (the .330 LAST-PRINT-WINS law), the LAST loss print the dusk
// hand keeps (the .333 LAST-PRINT-WINS law) - the two hands this
// word's own inputs, the ride the cell it prices. THE FENCE: the
// clock words' own integer law plus the day ceiling 0..86399 the
// span arithmetic bounds. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane the server-console faces ride (the argv[6..8]
// tail the .278 contract extends, the .281 through .337 folds the
// neighbours hold), the fleet's own console never changes.

const BOOT_DONE_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Done \((0|[1-9]\d*)\.(\d{3})s\)! For help, type "help"$/
const FLEET_CLOSE_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+ lost connection: (Disconnected|Timed out)$/

const toSec = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

/**
 * The fleet's own ride census - the span the boot's own completion
 * second to the loss lane's own closing breath the face voiced
 * (dusk - done, seconds, wrap-aware).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{fleetRideSec: number}|null} the mass or null (non-array)
 */
export function fleetRideCensus (lines) {
  if (!Array.isArray(lines)) return null
  let done = null
  let dusk = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const d = BOOT_DONE_RE.exec(l)
    if (d) done = toSec(d) // the LAST Done print - the boot's own finish second the .330 hand keeps
    const c = FLEET_CLOSE_RE.exec(l)
    if (c) dusk = toSec(c) // the LAST loss print - the lane's closing breath the .333 hand keeps
  }
  if (done === null || dusk === null) return { fleetRideSec: 0 } // the partial phase - the lawful zero
  const ride = dusk >= done ? dusk - done : dusk + 86400 - done // the wrap the day boundary keeps
  return { fleetRideSec: ride }
}

/**
 * The fence - the clock words' own integer law plus the day ceiling
 * 0..86399 the span arithmetic bounds.
 *
 * @param {{back: {fleetRideSec: number}, prev: {fleetRideSec: number}, cur: {fleetRideSec: number}}} e
 * @returns {boolean}
 */
export function fleetRideConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.fleetRideSec) && ok(e.prev.fleetRideSec) && ok(e.cur.fleetRideSec))
}

/**
 * The fleet ride weather's own two-step shape across three faces.
 *
 * @param {{back: {fleetRideSec: number}, prev: {fleetRideSec: number}, cur: {fleetRideSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function fleetRideTrendRow (e) {
  if (!fleetRideConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.fleetRideSec
  const p = prev.fleetRideSec
  const c = cur.fleetRideSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the rides never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the two input edges the clock hands keep: the .330 boot done clock word prices the Done line's own clock cell (this word's own done input - the boot's own finish second the DONE-PRECEDES ordering keeps) and the .333 fleet closing clock word prices the loss lane's own LAST print's clock cell (this word's own dusk input - the LAST-PRINT-WINS law the terminal burst keeps) and the .335 loss width word prices the lane's own inner span dawn - dusk (the ride's own piece the algebra keeps: ride = the quiet's own dawn - done piece + the width's own piece) and the .337 boot quiet word prices the outer span open - dawn (the other piece the quiet prices) and the .332 opening and .331 selection and .293 prep and .294/.324 done-ms hands the boot conversation's own seconds keep and the spawn-set family .325/.326/.327/.328/.329 and the login family's thirteen hands the .314 headcount keeps and the .336 join echo drift seat and the .310 disconnect word keeps the loss lane's Disconnected class count and the .311 timed out word keeps the Timed out class count and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the ride's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own ride trend (v0.976.338): the fleet's own ride fade ran two steps deep - ${arc} - the fleet's own ride shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own ride trend (v0.976.338): the fleet's own ride swell ran two steps deep - ${arc} - the fleet's own ride lengthened each face, ${tail}`
  }
  return `the fleet's own ride trend (v0.976.338): the fleet's own ride swing - ${arc} - the fleet's own ride traded its length between the faces, ${tail}`
}
