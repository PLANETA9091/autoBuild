// (v0.976.340) THE SPAWN PICK'S OWN REACH - the server console's own
// two lines the word prices across the faces - the REACH cell (the
// loss dawn minus the spawn selection, in seconds: the span the
// vanilla server's own 'Selecting global world spawn...' second to
// the fleet's own first loss print, the fresh spawn pick's own calm
// reach the conversation's picking phase owned before the loss lane
// ever breathed). The two INPUT edges the siblings price: the .331
// spawn selection clock word prices the 'Selecting global world
// spawn...' line's own clock cell (the boot conversation's own
// picking second - the LAST print the .331 hand keeps, one print per
// boot the ONE-PRINT law the faces keep) and the .334 fleet loss
// dawn word prices the 'lost connection' lane's own FIRST print's
// clock cell (the loss lane's own opening breath) - the two edges
// this word's own inputs, the SPAN between them the cell it prices
// (co-existence by seat never by duplication; the fire-0200 ledger
// named the seat the fourth span the conversation owns). THE NIBBLE
// LAW THE REACH KEEPS: the selection second rides the opening
// burst's own edge - the pick lands the announcement's own second
// (the nibble zero, six faces the burst swallows - F524's own face
// the proof: reach 30 == quiet 30) or one second after (the nibble
// one, twenty faces the fresh harvest keeps) - the reach the quiet's
// own span minus the pick's own nibble (the .331/.332 pair priced
// BOTH sides of the same nibble the precedent the co-existence law
// keeps - the nibble-relationship never declined a seat: the .332
// open word priced its own seat beside the .331 selection word
// across the identical split). THE PHASE LAW THE SPAN KEEPS: the
// announcement opens, the selection picks, the prep masses, the
// completion closes, the fleet rides, the dawn opens the loss lane -
// the dawn never precedes the selection second (the FOLLOWS-SELECT
// 26/26 ordering the fresh audit keeps, the reach never negative the
// ordering guarantees). THE EVIDENCE: the REAL TWENTY-SIX-face reach
// arc mined from the fresh artifacts (F501-F526, the harvest the
// artifact IDs byte-agree the ledger; the F525 face the fire-0130
// ledger's own debt the harvest pays - select 62438, dawn 62464, the
// face's own first read) - the reach the census prices 28/28/27/29/
// 24/24/23/27/24/29/24/25/28/31/30/28/29/26/24/22/24/30/29/30/26/29
// - the honest band 22..31 (the pick's own calm never left the
// twenty-second floor nor crossed the half-minute ceiling, the band
// the faces keep) - TWENTY-FOUR REAL WINDOWS TWENTY-ONE SPEAKS THREE
// HELD born speaking TWENTY-ONE DEEP the speaks record the family
// keeps (the W1/W4/W5 held steps the honest silence prices, the
// sparse-arc precedent the .337 quiet family keeps; the W11/W12
// swells the reach's own climb 24 -> 25 (+1) -> 28 (+3) -> 31 (+3),
// the W18/W19 fades the floor's own dive 26 -> 24 (-2) -> 22 (-2) ->
// 24 (+2), the W20 swell 22 -> 24 (+2) -> 30 (+6) the ceiling's own
// climb back, the F522/F523/F524/F525/F526 fresh faces the band's
// own upperhalf ride). THE WRAP-AWARE LAW: the day the face crosses
// between the edges the arithmetic keeps (dawn < select numerically
// -> the wrap folds: reach = dawn + 86400 - select) - never observed
// in the faces (the FOLLOWS-SELECT ordering keeps the pick and the
// dawn the same day every face) yet the honest degenerate the census
// keeps (the wrap the .334/.335/.337 law holds). THE PARTIAL PHASE'S
// OWN ZERO: the face missing either edge (no selection print, or the
// bootless loss lane) prices the reach zero honest (the phase never
// half-read - the .304/.306 null-sentinel convention holds; the
// no-print face the lawful zero). THE GRAMMAR: the census re-rides
// the two strict frames the .331/.334 words hold byte-exact - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the INFO frame
// convention, the 'Selecting global world spawn...' body the .331
// emitter's own skin (the trailing ellipsis the cell's own shape),
// the '<name> lost connection: <reason>' body the .334 emitter's own
// skin (the name cell and the two class skins Disconnected|Timed out
// ride shape only), LINE END tail boundary (the .288 precedent); the
// LAST select print the select hand keeps (the .331 word's own hand
// byte-exact - ONE-PRINT 26/26 the FIRST==LAST equivalence the faces
// keep), the FIRST loss print the dawn hand keeps (the .334
// FIRST-PRINT-WINS law). THE FENCE: the clock words' own integer law
// plus the day ceiling 0..86399 the span arithmetic bounds (the
// reach the two clocks' own distance never exceeds the day the
// domain keeps). CENSUS GUARD: zero fleet wiring, zero new fleet log
// lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail
// the .278 contract extends, the .281 through .339 folds the
// neighbours hold), the fleet's own console never changes.

const SPAWN_SELECT_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Selecting global world spawn\.\.\.$/
const LOSS_DAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+ lost connection: (Disconnected|Timed out)$/

const toSec = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

/**
 * The spawn pick's own reach census - the span the selection second
 * to the loss lane's own first breath the face voiced (dawn -
 * selection, seconds, wrap-aware).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{pickReachSec: number}|null} the mass or null (non-array)
 */
export function pickReachCensus (lines) {
  if (!Array.isArray(lines)) return null
  let sel = null
  let dawn = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const s = SPAWN_SELECT_RE.exec(l)
    if (s) sel = toSec(s) // the LAST select print - the .331 hand byte-exact (ONE-PRINT the equivalence keeps)
    const d = LOSS_DAWN_RE.exec(l)
    if (d && dawn === null) dawn = toSec(d) // the FIRST loss print - the lane's opening breath the .334 hand keeps
  }
  if (sel === null || dawn === null) return { pickReachSec: 0 } // the partial phase - the lawful zero
  const reach = dawn >= sel ? dawn - sel : dawn + 86400 - sel // the wrap the day boundary keeps
  return { pickReachSec: reach }
}

/**
 * The fence - the clock words' own integer law plus the day ceiling
 * 0..86399 the span arithmetic bounds.
 *
 * @param {{back: {pickReachSec: number}, prev: {pickReachSec: number}, cur: {pickReachSec: number}}} e
 * @returns {boolean}
 */
export function pickReachConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.pickReachSec) && ok(e.prev.pickReachSec) && ok(e.cur.pickReachSec))
}

/**
 * The pick reach weather's own two-step shape across three faces.
 *
 * @param {{back: {pickReachSec: number}, prev: {pickReachSec: number}, cur: {pickReachSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function pickReachTrendRow (e) {
  if (!pickReachConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.pickReachSec
  const p = prev.pickReachSec
  const c = cur.pickReachSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the reach never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the two input edges the clock hands keep: the .331 spawn selection clock word prices the 'Selecting global world spawn...' line's own clock cell (this word's own select input - the picking second the LAST hand keeps) and the .334 fleet loss dawn word prices the loss lane's own FIRST print's clock cell (this word's own dawn input - the FIRST-PRINT-WINS law the churn face keeps) and the .332 boot open clock word keeps the announcement's own second (the burst's own edge the pick's nibble rides - the reach the quiet's own span minus the nibble the NIBBLE LAW keeps) and the .337 boot quiet word prices the outer span open - dawn (the reach's own sibling span - the nibble the two spans' own gap) and the .333 closing clock word prices the lane's own LAST print (the dusk edge the reach never prices) and the .335 loss width word prices the lane's own inner span dusk - dawn and the .338 fleet ride word prices the done - dusk span (the whole the pieces the algebra keeps) and the .330 completion and .293 prep and .294/.324 done-ms hands the boot conversation's own seconds keep and the spawn-set family .325/.326/.327/.328/.329 and the login family's thirteen hands the .314 headcount keeps and the .336 join echo drift word keeps the echo's own drift hand and the .310/.311 class counts and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the pick reach's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own pick reach trend (v0.976.340): the fleet's own pick reach fade ran two steps deep - ${arc} - the fleet's own fresh pick lost its calm each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own pick reach trend (v0.976.340): the fleet's own pick reach swell ran two steps deep - ${arc} - the fleet's own fresh pick grew its calm each face, ${tail}`
  }
  return `the fleet's own pick reach trend (v0.976.340): the fleet's own pick reach swing - ${arc} - the fleet's own fresh pick traded its calm between the faces, ${tail}`
}
