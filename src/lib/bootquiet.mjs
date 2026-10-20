// (v0.976.337) THE FRESH BOOT'S OWN QUIET - the server console's own
// two lines the word prices across the faces - the QUIET cell (the
// loss dawn minus the boot open, in seconds: the span the vanilla
// server's own version announcement to the fleet's own first loss
// print, the fresh boot's own silent head start the conversation's
// opening phase owned before the loss lane ever breathed). The two
// INPUT edges the siblings price: the .332 boot open clock word
// prices the 'Starting minecraft server version N.N' line's own
// clock cell (the conversation's own first second) and the .334
// fleet loss dawn word prices the 'lost connection' lane's own FIRST
// print's clock cell (the loss lane's own opening breath) - the two
// edges this word's own inputs, the SPAN between them the cell it
// prices (co-existence by seat never by duplication; the .335 loss
// width word prices the loss lane's own inner span dusk - dawn -
// the quiet the OUTER span the boot owns, the width the lane's own
// ride, the two spans the same console's different distances keep).
// THE PHASE LAW THE SPAN KEEPS: the announcement opens, the selection
// picks, the prep masses, the completion closes, the fleet rides,
// the dawn opens the loss lane - the dawn never precedes the opening
// second (the FOLLOWS-OPENING 21/21 ordering the .334 fieldread
// keeps, the quiet never negative the ordering guarantees). THE
// EVIDENCE: the REAL TWENTY-ONE-face quiet arc derived from the two
// byte-verified edge arcs the artifacts hold (the .332 open arc
// 74405/78026/81321/83686/85434/3440/6253/8055/10926/13632/15510/
// 18037/21746/25256/27466/30156/33101/36196/38134/42142/48750 and
// the .334 dawn arc 74434/78055/81349/83716/85459/3465/6276/8083/
// 10951/13662/15535/18063/21774/25288/27497/30185/33130/36222/38159/
// 42165/48774) - the quiet the census prices 29/29/28/30/25/25/23/
// 28/25/30/25/26/28/32/31/29/29/26/25/23/24 - the honest band 23..32
// (the boot's own head start never left the twenty-second floor nor
// crossed the half-minute ceiling, the band the faces keep) -
// FOURTEEN REAL WINDOWS FOURTEEN SPEAKS FIVE HELD (the W1/W4/W5/
// W15/W16 held steps the honest silence prices, the sparse-arc
// precedent the .311 rare-speak family keeps; the W11/W12 swell the
// quiet's own climb, the W14/W17/W18 fades the boot's own quiet
// eroding, the W19 swing 25 -> 23 (-2) -> 24 (+1) the fresh face's
// trade). THE WRAP-AWARE LAW: the day the face crosses between the
// edges the arithmetic keeps (dawn < open numerically -> the wrap
// folds: quiet = dawn + 86400 - open) - never observed in the faces
// (the FOLLOWS-OPENING ordering keeps the boot and the dawn the same
// day every face) yet the honest degenerate the census keeps (the
// wrap the .334/.335 law holds). THE PARTIAL PHASE'S OWN ZERO: the
// face missing either edge (no boot announcement, or the bootless
// loss lane) prices the quiet zero honest (the phase never half-read
// - the .304/.306 null-sentinel convention holds; the no-print face
// the lawful zero). THE GRAMMAR: the census re-rides the two strict
// frames the .332/.334 words hold byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the INFO frame convention, the
// 'Starting minecraft server version N.N' body the .332 emitter's
// own skin (the two-part version cell rides shape only), the
// '<name> lost connection: <reason>' body the .334 emitter's own
// skin (the name cell and the two class skins Disconnected|Timed out
// ride shape only), LINE END tail boundary (the .288 precedent); the
// FIRST open print the open hand keeps (the .332 LAST-PRINT-WINS law
// the census mirrors honest - one print per boot the ONE-PRINT law
// the faces keep), the FIRST loss print the dawn hand keeps (the
// .334 FIRST-PRINT-WINS law). THE FENCE: the clock words' own
// integer law plus the day ceiling 0..86399 the span arithmetic
// bounds (the quiet the two clocks' own distance never exceeds the
// day the domain keeps). CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane the server-console faces ride (the argv[6..8]
// tail the .278 contract extends, the .281 through .336 folds the
// neighbours hold), the fleet's own console never changes.

const BOOT_OPEN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Starting minecraft server version (\d+)\.(\d+)$/
const LOSS_DAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+ lost connection: (Disconnected|Timed out)$/

const toSec = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

/**
 * The fresh boot's own quiet census - the span the version
 * announcement to the loss lane's own first breath the face voiced
 * (dawn - open, seconds, wrap-aware).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{bootQuietSec: number}|null} the mass or null (non-array)
 */
export function bootQuietCensus (lines) {
  if (!Array.isArray(lines)) return null
  let open = null
  let dawn = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const o = BOOT_OPEN_RE.exec(l)
    if (o && open === null) open = toSec(o) // the FIRST announcement - the conversation's own opening second the .332 hand keeps
    const d = LOSS_DAWN_RE.exec(l)
    if (d && dawn === null) dawn = toSec(d) // the FIRST loss print - the lane's opening breath the .334 hand keeps
  }
  if (open === null || dawn === null) return { bootQuietSec: 0 } // the partial phase - the lawful zero
  const quiet = dawn >= open ? dawn - open : dawn + 86400 - open // the wrap the day boundary keeps
  return { bootQuietSec: quiet }
}

/**
 * The fence - the clock words' own integer law plus the day ceiling
 * 0..86399 the span arithmetic bounds.
 *
 * @param {{back: {bootQuietSec: number}, prev: {bootQuietSec: number}, cur: {bootQuietSec: number}}} e
 * @returns {boolean}
 */
export function bootQuietConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.bootQuietSec) && ok(e.prev.bootQuietSec) && ok(e.cur.bootQuietSec))
}

/**
 * The boot quiet weather's own two-step shape across three faces.
 *
 * @param {{back: {bootQuietSec: number}, prev: {bootQuietSec: number}, cur: {bootQuietSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function bootQuietTrendRow (e) {
  if (!bootQuietConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.bootQuietSec
  const p = prev.bootQuietSec
  const c = cur.bootQuietSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the quiet never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the two input edges the clock hands keep: the .332 boot open clock word prices the 'Starting minecraft server version' line's own clock cell (this word's own open input - the conversation's own first second the FOLLOWS-OPENING ordering the dawn never precedes) and the .334 fleet loss dawn word prices the loss lane's own FIRST print's clock cell (this word's own dawn input - the FIRST-PRINT-WINS law the churn face keeps) and the .333 closing clock word prices the lane's own LAST print (the dusk edge the outer span never prices) and the .335 loss width word prices the lane's own inner span dusk - dawn (the ride's own width the quiet's sibling mass - the outer and the inner spans co-exist by seat) and the .331 selection and .330 completion and .293 prep and .294/.324 done-ms hands the boot conversation's own seconds keep and the spawn-set family .325/.326/.327/.328/.329 and the login family's thirteen hands the .314 headcount keeps and the .336 join echo drift word keeps the echo's own drift hand and the .310/.311 class counts and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the boot quiet's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own boot quiet trend (v0.976.337): the fleet's own boot quiet fade ran two steps deep - ${arc} - the fleet's own fresh boot lost its head start each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own boot quiet trend (v0.976.337): the fleet's own boot quiet swell ran two steps deep - ${arc} - the fleet's own fresh boot grew its head start each face, ${tail}`
  }
  return `the fleet's own boot quiet trend (v0.976.337): the fleet's own boot quiet swing - ${arc} - the fleet's own fresh boot traded its head start between the faces, ${tail}`
}
