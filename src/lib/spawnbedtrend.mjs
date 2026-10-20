// (v0.976.327) THE WORLD SPAWN'S OWN BED MASS - the server console's
// own 'Set the world spawn point to x, y, z [yaw, pitch] in dimension'
// INFO line's Y cell the word prices across the faces - the BED hand
// (the height seat of the world's own first bed the boot seeds) the
// .325 anchor word's X cell and the .326 south word's Z cell wear
// priced beside (the SAME-LINE DIFFERENT-CELL LAW the echo box holds:
// the .325 spawn anchor word prices the same line's X cell - the
// east-west seat, the .326 spawn south word prices the same line's Z
// cell - the north-south seat, this word prices the Y cell - the
// height seat, the three hands never merge - the coordinate trio the
// line's own three seats complete). THE EVIDENCE: the server's own
// boot prints '[21:40:53] [Server thread/INFO]: Set the world spawn
// point to -127, 72, 394 [0.0, 0.0] in minecraft:overworld' (F502's
// own face) - one print per spawn-set the server voiced, the Y cell
// the world's own bed height held - and no book owned the BED across
// the faces: the Y cell rode shape-only through the anchor's and the
// south word's births (the REAL fifteen-face arc the faces carry -
// byte-verified from the fleet-server-log artifacts, every face's
// spawn sets re-read, the LAST print the face's own final bed the
// LAST-PRINT-WINS law keeps - the .279 bootstrap targets word's own
// precedent the .325 anchor word holds - the within-face pair
// byte-identical every face the pair-agreement trust rides, so the
// LAST hand the MAX and MIN hands the same value the line's own pair
// law keeps): F501's bed spoke Y 71, F502 72, F503 72, F504 72, F505
// 67, F506 71, F507 71, F508 69, F509 69, F510 74, F511 70, F512 72,
// F513 68, F514 81, F515 70 - the REAL windows the arc holds: W1 the
// held pair 71 -> 72 (+1) -> 72 (+0), W2 the held pair 72 -> 72 (+0)
// -> 72 (+0), W3 the held pair 72 -> 72 (+0) -> 67 (-5), W4 the swing
// 72 -> 67 (-5) -> 71 (+4), W5 the held pair 67 -> 71 (+4) -> 71
// (+0), W6 the held pair 71 -> 71 (+0) -> 69 (-2), W7 the held pair
// 71 -> 69 (-2) -> 69 (+0), W8 the held pair 69 -> 69 (+0) -> 74
// (+5), W9 the swing 69 -> 74 (+5) -> 70 (-4), W10 the swing 74 -> 70
// (-4) -> 72 (+2), W11 the swing 70 -> 72 (+2) -> 68 (-4), W12 the
// swing 72 -> 68 (-4) -> 81 (+13), W13 the swing 68 -> 81 (+13) -> 70
// (-11) - THIRTEEN REAL WINDOWS SIX SPEAKS SEVEN HELD the word born
// speaking SIX DEEP the held law keeps honest (the .323 firstborn
// word's own four-deep six-held birth the sibling precedent holds -
// the bed height the seeds trade rarely, the world's own re-seed the
// band 67..81 the faces wander, the held windows the lawful silence
// the family keeps - the .318 ceiling birth's own three-held shape
// the first held precedent holds); the within-face pair the faces
// witness: TWO prints per face the server's own re-set rides, the
// pair's Y byte-identical every face (the bed the boot seeds never
// moves mid-face - the two prints one value the census hand trusts);
// the bed's own neighbours the faces hold - the X cell the .325
// anchor word prices and the Z cell the .326 south word prices - the
// clock cell and the angle pair and the dimension cell the
// shape-only lanes the next words' named-never-priced seats keep
// (the SAME-LINE DIFFERENT-CELL LAW the echo box holds - this word
// prices the Y cell alone). THE CROSS-CHECK (the mirror sibling arcs
// the same mining pipeline re-proved): the anchor X the .325 word's
// REAL arc and the south Z the .326 word's REAL arc byte-exact every
// shared face the sibling hands the mirror re-voices, every face's
// spawn-set count the census re-voiced - TWO per face every face -
// and the last spawn clock every face held rides AFTER the boot's
// own Done line (the bed the boot conversation seeds the boot's own
// completion follows, the .294 Done duration word's own line the
// cross-check re-proved).
//
// GRAMMAR: the .325 anchor word's own frame byte-exact (the same
// emitter the same shape keeps - the '[(HH:MM:SS)] [Server thread/
// INFO]: ' head the .278/.292/.293 INFO frame convention holds,
// zero-padded fixed fields hour 00-23 minute 00-59 second 00-59 the
// emitter's own shape (the leading zeros the F506 00:57:42 face
// rides, the .248 no-leading-zero law the COORD cell holds the clock
// cell the opposite shape the same house keeps), the 'Set the world
// spawn point to ' body, the X and Z cells the signed integer
// capture shape-only (the same-line cells never re-priced), the Y
// cell the signed integer no leading zero (the -?(?:0|[1-9]\d*)
// capture the .309 echo west word's own law holds - the priced cell
// the bed keeps), the ' [yaw, pitch]' angle pair the float prints
// shape-only, the ' in ' tail, the dimension cell the
// minecraft:[a-z_]+ shape shape-only, LINE END tail boundary (the
// .288 precedent)); the near-miss lanes never ride - nineteen skins
// refused (the bot prefix, the WARN frame, the pretty spacing, the
// plural body, the altered verb, the missing coords, the float
// coord, the leading-zero coord, the plus coord, the integer angle,
// the single angle, the missing dimension, the bare dimension, the
// leading whitespace, the trailing junk, the CR tail, the 1-digit
// hour clock, the overflow second clock, the dash-separator clock).
// THE SCALAR THE BED PRICES: the census takes the LAST spawn-set
// print's Y cell the face held (the LAST-PRINT-WINS law the .279
// bootstrap targets word's own precedent holds - the final bed the
// face ended with; the within-face pair's byte-agreement the faces
// hold the census hand trusts - the LAST hand the MAX and MIN hands
// the same value the line's own pair law keeps; the null-sentinel
// the no-spawn face the lawful zero - the .304/.306 convention
// holds); the clock cell and the X/Z cells and the angle pair and
// the dimension cell ride shape only - the bed hand alone prices.
// THE FENCE: the echo coord words' own integer fence
// (Number.isInteger - no sign restriction the coord law holds).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281 through .326 folds the neighbours hold), the
// fleet's own console never changes.

const SPAWN_BED_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/

/**
 * The spawn bed census - the world's own final bed height the face's
 * console voiced (the LAST print's Y cell, the boot-seeded bed the
 * server itself sets).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{spawnY: number}|null} the mass or null (non-array)
 */
export function spawnBedCensus (lines) {
  if (!Array.isArray(lines)) return null
  let bed = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SPAWN_BED_RE.exec(l)
    if (m) bed = Number(m[5]) // the Y cell - the LAST print wins the face's own final bed
  }
  return { spawnY: bed === null ? 0 : bed }
}

/**
 * The fence - the echo coord words' own integer law (no sign
 * restriction the coord domain keeps).
 *
 * @param {{back: {spawnY: number}, prev: {spawnY: number}, cur: {spawnY: number}}} e
 * @returns {boolean}
 */
export function spawnBedConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.spawnY) && numOk(e.prev.spawnY) && numOk(e.cur.spawnY))
}

/**
 * The spawn bed weather's own two-step shape across three faces.
 *
 * @param {{back: {spawnY: number}, prev: {spawnY: number}, cur: {spawnY: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function spawnBedTrendRow (e) {
  if (!spawnBedConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.spawnY
  const p = prev.spawnY
  const c = cur.spawnY
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bed never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the spawn-set line's own X cell the .325 anchor word keeps and the Z cell the .326 south word keeps and the clock cell and angle pair and dimension cell the shape-only lanes the next words' named-never-priced seats keep (the SAME-LINE DIFFERENT-CELL LAW the echo box holds - the bed hand alone prices), the .320 login south word keeps the login line's own Z-max seat and the .319 login north word keeps the login line's Z-min seat and the .317/.318 login Y pair keeps the login where's height seats (a different emitter the same Y kind prices) and the .315/.316 login X pair and the .321/.322 login clock pair and the .297/.323 entity id pair and the .312/.313 port pair and the .314 login count word keeps the join mass and the .294 boot done word keeps the same boot conversation's own Done duration seat and the .293 boot prep word keeps the elapsed segment and the .324 boot mass word keeps the boot emitter's own duration cell and the .304/.307 echo Y pair and the .305/.308 echo Z pair (a different emitter the same cell kind) and the .306 echo east seat and the .309 echo west seat and the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own counts, the .311 timed out word keeps the stalled-drop seat, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the spawn bed's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server spawn bed trend (v0.976.327): the world spawn's own bed fade ran two steps deep - ${arc} - the seed's own bed sank each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server spawn bed trend (v0.976.327): the world spawn's own bed swell ran two steps deep - ${arc} - the seed's own bed rose each face, ${tail}`
  }
  return `the server spawn bed trend (v0.976.327): the world spawn's own bed swing - ${arc} - the seed's own bed traded its height between the faces, ${tail}`
}
