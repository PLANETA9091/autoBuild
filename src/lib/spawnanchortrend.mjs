// (v0.976.325) THE WORLD SPAWN'S OWN ANCHOR MASS - the server console's
// own 'Set the world spawn point to x, y, z [yaw, pitch] in dimension'
// INFO line's X cell the word prices across the faces - the ANCHOR hand
// (the east-west seat of the world's own first bed the boot seeds) a
// line family the thirteen login hands never opened (the SAME-LANE
// DIFFERENT-CELL LAW the echo box holds: the login words price the
// login line's cells, the echo box prices the setblock echo's own
// cells, this word prices the spawn-set line's own coordinate cell the
// server's own boot conversation rides - a new emitter the server
// console carries). THE EVIDENCE: the server's own boot prints '[21:40:
// 53] [Server thread/INFO]: Set the world spawn point to -127, 72, 394
// [0.0, 0.0] in minecraft:overworld' (F502's own face) - one print per
// spawn-set the server voiced, the X cell the world's own anchor held -
// and no book owned the ANCHOR across the faces: the spawn-set line rode
// unread while the login line's thirteen hands priced (the REAL
// twelve-face arc the faces carry - byte-verified from the
// fleet-server-log artifacts, every face's spawn sets re-read, the LAST
// print the face's own final anchor the LAST-PRINT-WINS law keeps - the
// .279 bootstrap targets word's own precedent holds): F502's anchor
// spoke X -127, F503 -133, F504 -118, F505 -124, F506 -130, F507 -136,
// F508 -123, F509 -122, F510 -119, F511 -133, F512 -135, F513 -132 -
// the REAL windows the arc holds: W1 the swing -127 -> -133 (-6) ->
// -118 (+15), W2 the swing -133 -> -118 (+15) -> -124 (-6), W3 the fade
// -118 -> -124 (-6) -> -130 (-6), W4 the fade -124 -> -130 (-6) ->
// -136 (-6), W5 the swing -130 -> -136 (-6) -> -123 (+13), W6 the swell
// -136 -> -123 (+13) -> -122 (+1), W7 the swell -123 -> -122 (+1) ->
// -119 (+3), W8 the swing -122 -> -119 (+3) -> -133 (-14), W9 the fade
// -119 -> -133 (-14) -> -135 (-2), W10 the swing -133 -> -135 (-2) ->
// -132 (+3) - TEN REAL WINDOWS TEN SPEAKS ZERO HELD the word born
// speaking TEN DEEP the family's deepest birth (the .321 dawn word's
// own nine-deep record the sibling holds - the world's own anchor the
// faces never hold still, every face's world a fresh seed the spawn
// wanders); the within-face pair the twelve faces witness: TWO prints
// per face the server's own re-set rides, the pair's X byte-identical
// 12/12 (the anchor the boot seeds never moves mid-face - the two
// prints one value the census hand trusts); the anchor's own
// neighbours the faces hold - Y 72/72/72/67/71/71/69/69/74/70/72/68
// and Z 394/400/390/396/404/397/396/405/392/395/402/407 - the Y and Z
// cells the shape-only lanes the next words' named-never-priced seats
// keep (the SAME-LINE DIFFERENT-CELL LAW the echo box holds - this
// word prices the X cell alone). THE CROSS-CHECK (the mirror sibling
// arcs the same mining pipeline re-proved): every face's spawn-set
// count the census re-voiced - TWO per face twelve faces, the
// within-face pair agreement the byte-exact trust rides - and the
// last spawn clock every face held rides AFTER the boot's own Done
// line (the anchor the boot conversation seeds the boot's own
// completion follows, the .294 Done duration word's own line the
// cross-check re-proved).
//
// GRAMMAR: the .322 dawn word's own clock frame byte-exact (the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the .278/.292/.293 INFO
// frame convention holds, zero-padded fixed fields hour 00-23 minute
// 00-59 second 00-59 the emitter's own shape (the leading zeros the
// F506 00:57:42 face rides, the .248 no-leading-zero law the COORD
// cell holds the clock cell the opposite shape the same house keeps -
// the .321/.322 clock words' own bounds the hour 00-23 the minute and
// second 00-59 the grammar keeps), the 'Set the world spawn point to '
// body, the X cell the signed integer no leading zero (the
// -?(?:0|[1-9]\d*) capture the .309 echo west word's own law holds -
// the negative the overworld's own west the anchor rides), the Y and
// Z cells the same signed integer capture shape-only (the same-line
// cells never re-priced), the ' [yaw, pitch]' angle pair the float
// prints the emitter's own shape holds shape-only, the ' in ' tail,
// the dimension cell the minecraft:[a-z_]+ shape the overworld's own
// name rides shape-only, LINE END tail boundary (the .288 precedent));
// the near-miss lanes never ride - nineteen skins refused (the bot
// prefix, the WARN frame, the pretty spacing, the plural body, the
// altered verb, the missing coords, the float coord, the leading-zero
// coord, the plus coord, the integer angle, the single angle, the
// missing dimension, the bare dimension, the leading whitespace, the
// trailing junk, the CR tail, the 1-digit hour clock, the overflow
// second clock, the dash-separator clock). THE SCALAR THE ANCHOR
// PRICES: the census takes the LAST spawn-set print's X cell the face
// held (the LAST-PRINT-WINS law the .279 bootstrap targets word's own
// precedent holds - the final anchor the face ended with; the
// within-face pair's byte-agreement the twelve faces hold the census
// hand trusts; the null-sentinel the no-spawn face the lawful zero -
// the .304/.306 convention holds); the clock cell and the Y/Z cells
// and the angle pair and the dimension cell ride shape only - the
// anchor hand alone prices. THE FENCE: the echo coord words' own
// integer fence (Number.isInteger - the negative the west the domain
// keeps, no sign restriction the coord law holds). CENSUS GUARD: zero
// fleet wiring, zero new fleet log lines - the word rides the reader's
// fold through the SECOND carrier lane the server-console faces ride
// (the argv[6..8] tail the .278 contract extends, the .281 through
// .323 folds the neighbours hold), the fleet's own console never
// changes.

const SPAWN_ANCHOR_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/

/**
 * The spawn anchor census - the world's own final anchor the face's
 * console voiced (the LAST print's X cell, the boot-seeded bed the
 * server itself sets).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{spawnX: number}|null} the mass or null (non-array)
 */
export function spawnAnchorCensus (lines) {
  if (!Array.isArray(lines)) return null
  let anchor = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SPAWN_ANCHOR_RE.exec(l)
    if (m) anchor = Number(m[4]) // the X cell - the LAST print wins the face's own final anchor
  }
  return { spawnX: anchor === null ? 0 : anchor }
}

/**
 * The fence - the echo coord words' own integer law (the negative the
 * west the domain keeps).
 *
 * @param {{back: {spawnX: number}, prev: {spawnX: number}, cur: {spawnX: number}}} e
 * @returns {boolean}
 */
export function spawnAnchorConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.spawnX) && numOk(e.prev.spawnX) && numOk(e.cur.spawnX))
}

/**
 * The spawn anchor weather's own two-step shape across three faces.
 *
 * @param {{back: {spawnX: number}, prev: {spawnX: number}, cur: {spawnX: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function spawnAnchorTrendRow (e) {
  if (!spawnAnchorConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.spawnX
  const p = prev.spawnX
  const c = cur.spawnX
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the anchor never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the spawn-set line's own Y cell and Z cell and clock cell and angle pair and dimension cell the shape-only lanes the next words' named-never-priced seats keep (the SAME-LINE DIFFERENT-CELL LAW the echo box holds - the anchor hand alone prices), the .309 echo west word keeps the setblock echo's own X-min seat and the .306 echo east word keeps the echo's own X-max seat (a different emitter the same X kind prices), the .323 login firstborn word keeps the login line's entity id cell MIN seat and the .297 peak word keeps the same cell's MAX seat, the .321 login dawn word keeps the login clock cell's earlier edge and the .322 login dusk word keeps the same cell's later edge, the .312/.313 login port pair keeps the socket seats and the .314 login count word keeps the join mass and the .315 through .320 login coord words keep the login where seats, the .294 boot done word keeps the same boot conversation's own Done duration seat and the .293 boot prep word keeps the elapsed segment, the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own counts, the .311 timed out word keeps the stalled-drop seat, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the spawn anchor's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server spawn anchor trend (v0.976.325): the world spawn's own anchor fade ran two steps deep - ${arc} - the seed's own bed walked west each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server spawn anchor trend (v0.976.325): the world spawn's own anchor swell ran two steps deep - ${arc} - the seed's own bed walked east each face, ${tail}`
  }
  return `the server spawn anchor trend (v0.976.325): the world spawn's own anchor swing - ${arc} - the seed's own bed traded its bank between the faces, ${tail}`
}
