// (v0.976.326) THE WORLD SPAWN'S OWN SOUTH MASS - the server console's
// own 'Set the world spawn point to x, y, z [yaw, pitch] in dimension'
// INFO line's Z cell the word prices across the faces - the SOUTH hand
// (the north-south seat of the world's own first bed the boot seeds,
// the MAX hand the farthest bed the arc held) the .325 anchor word's
// own tail named and never priced (the SAME-LINE DIFFERENT-CELL LAW
// the echo box holds: the .325 anchor prices the same line's X cell,
// this word the SAME line's Z cell - a different seat the same emitter
// carries, the .319/.320 login Z pair's own cross-emitter mirror holds).
// THE EVIDENCE: the server's own boot prints '[20:40:21] [Server
// thread/INFO]: Set the world spawn point to -130, 71, 398 [0.0, 0.0]
// in minecraft:overworld' (F501's own face) - two prints per face the
// server's own re-set rides - and the .325 anchor arc the faces hold
// rode F502-first while F501's own face the cache re-mined: the REAL
// THIRTEEN-face arc byte-verified from the fleet-server-log artifacts
// (every face's spawn sets re-read, the MAX Z the face's beds held -
// the within-face pair byte-identical 13/13 the census hand trusts):
// F501's bed spoke Z 398, F502 394, F503 400, F504 390, F505 396,
// F506 404, F507 397, F508 396, F509 405, F510 392, F511 395, F512
// 402, F513 407 - the REAL windows: W1 the swing 398 -> 394 (-4) ->
// 400 (+6), W2 the swing 394 -> 400 (+6) -> 390 (-10), W3 the swing
// 400 -> 390 (-10) -> 396 (+6), W4 the swell 390 -> 396 (+6) -> 404
// (+8), W5 the swing 396 -> 404 (+8) -> 397 (-7), W6 the fade 404 ->
// 397 (-7) -> 396 (-1), W7 the swing 397 -> 396 (-1) -> 405 (+9), W8
// the swing 396 -> 405 (+9) -> 392 (-13), W9 the swing 405 -> 392
// (-13) -> 395 (+3), W10 the swell 392 -> 395 (+3) -> 402 (+7), W11
// the swell 395 -> 402 (+7) -> 407 (+5) - ELEVEN REAL WINDOWS ELEVEN
// SPEAKS ZERO HELD the word born speaking ELEVEN DEEP the .324 boot
// birth's own eleven-deep record the sibling holds (the .325 anchor's
// own ten-deep the same-line sibling rides - the world's own bed the
// faces never hold still, every face's world a fresh seed the spawn
// wanders the whole north-south reach 390..407); the arc's own edges
// the faces hold - the MIN bed 390 (F504, the north reach the MIN
// hand's named-never-priced seat) and the MAX bed 407 (F513, the
// south reach this word's census prices - the newest face the deepest
// bed rode); the within-face pair the thirteen faces witness: TWO
// prints per face the server's own re-set rides, the pair's Z
// byte-identical 13/13 (the anchor the boot seeds never moves
// mid-face - the two prints one value the MAX hand trusts).
//
// GRAMMAR: the .325 anchor frame byte-exact (the '[(HH:MM:SS)] [Server
// thread/INFO]: Set the world spawn point to ' body the .278/.292/.293
// INFO frame convention holds, the clock cell shape-only zero-padded
// fixed fields hour 00-23 minute 00-59 second 00-59 the emitter's own
// shape, the X and Y cells the same signed integer capture shape-only
// (the same-line cells never re-priced), the ' [yaw, pitch]' angle
// pair the float prints the emitter's own shape holds shape-only, the
// ' in ' tail, the dimension cell the minecraft:[a-z_]+ shape the
// overworld's own name rides shape-only, LINE END tail boundary - the
// .288 precedent)); the near-miss lanes never ride - nineteen skins
// refused (the bot prefix, the WARN frame, the pretty spacing, the
// plural body, the altered verb, the missing coords, the float coord,
// the leading-zero coord, the plus coord, the integer angle, the
// single angle, the missing dimension, the bare dimension, the leading
// whitespace, the trailing junk, the CR tail, the 1-digit hour clock,
// the overflow second clock, the dash-separator clock). THE SCALAR THE
// SOUTH HAND PRICES: the census takes the MAX Z the face's spawn-set
// prints held (the MAX hand the .320 login south word's own precedent
// holds on the integer domain - the .312 port word's own max-hand law
// the mirror confirms, the farthest bed the face rode; the null-
// sentinel the no-spawn face the lawful zero - the .304/.306
// convention holds); the clock cell and the X/Y cells and the angle
// pair and the dimension cell ride shape only - the south hand alone
// prices. THE FENCE: the .325 anchor word's own integer fence
// (Number.isInteger - the same-line cell the same law keeps, no sign
// restriction the coord domain holds). CENSUS GUARD: zero fleet
// wiring, zero new fleet log lines - the word rides the reader's fold
// through the SECOND carrier lane the server-console faces ride (the
// argv[6..8] tail the .278 contract extends, the .281 through .325
// folds the neighbours hold), the fleet's own console never changes.

const SPAWN_SOUTH_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/

/**
 * The spawn south census - the farthest bed the face's own boot
 * conversation seeded (the MAX Z across the face's spawn-set prints).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{spawnZMax: number}|null} the mass or null (non-array)
 */
export function spawnSouthCensus (lines) {
  if (!Array.isArray(lines)) return null
  let far = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SPAWN_SOUTH_RE.exec(l)
    if (m) {
      const z = Number(m[6]) // the Z cell
      if (far === null || z > far) far = z // the MAX hand - the farthest bed the face held
    }
  }
  return { spawnZMax: far === null ? 0 : far }
}

/**
 * The fence - the .325 anchor word's own integer law (the same-line
 * cell the same law keeps).
 *
 * @param {{back: {spawnZMax: number}, prev: {spawnZMax: number}, cur: {spawnZMax: number}}} e
 * @returns {boolean}
 */
export function spawnSouthConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.spawnZMax) && numOk(e.prev.spawnZMax) && numOk(e.cur.spawnZMax))
}

/**
 * The spawn south weather's own two-step shape across three faces.
 *
 * @param {{back: {spawnZMax: number}, prev: {spawnZMax: number}, cur: {spawnZMax: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function spawnSouthTrendRow (e) {
  if (!spawnSouthConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.spawnZMax
  const p = prev.spawnZMax
  const c = cur.spawnZMax
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bed never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the spawn-set line's own X cell the .325 anchor word prices the LAST-PRINT-WINS seat and the Y cell and clock cell and angle pair and dimension cell the shape-only lanes the next words' named-never-priced seats keep (the SAME-LINE DIFFERENT-CELL LAW the echo box holds), the .320 login south word keeps the login line's own Z-max seat (a different emitter the same Z kind prices) and the .319 login north word keeps the login line's Z-min seat and the .317/.318 login Y pair and the .315/.316 login X pair and the .321/.322 login clock pair and the .297/.323 entity id pair and the .312/.313 port pair and the .314 login count word keeps the join mass and the .294 boot done word keeps the same boot conversation's own Done duration seat and the .293 boot prep word keeps the elapsed segment and the .324 boot mass word keeps the boot emitter's own duration cell and the .304/.307 echo Y pair and the .305/.308 echo Z pair (a different emitter the same cell kind) and the .306 echo east seat and the .309 echo west seat and the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own counts, the .311 timed out word keeps the stalled-drop seat, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the spawn south's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server spawn south trend (v0.976.326): the world spawn's own bed fade ran two steps deep - ${arc} - the seed's own bed walked north each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server spawn south trend (v0.976.326): the world spawn's own bed swell ran two steps deep - ${arc} - the seed's own bed walked south each face, ${tail}`
  }
  return `the server spawn south trend (v0.976.326): the world spawn's own bed swing - ${arc} - the seed's own bed traded its reach between the faces, ${tail}`
}
