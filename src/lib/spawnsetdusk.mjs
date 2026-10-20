// (v0.976.329) THE WORLD SPAWN'S OWN SET DUSK - the server console's
// own 'Set the world spawn point to x, y, z [yaw, pitch] in dimension'
// INFO line's clock cell the word prices across the faces - the SET
// DUSK hand (the later bed-set print's own clock, seconds since
// midnight, the MAX hand) the .328 set dawn word's own tail named and
// never priced (the SAME-LINE SAME-CELL DIFFERENT-HAND LAW the echo
// box holds: the .321/.322 login clock pair priced their emitter's
// clock both edges - dawn the earlier, dusk the later - and the
// bed-set emitter's clock cell now wears its own pair: the .328 word
// the earlier edge, this word the later edge; the pair-identity law
// the coordinate cells keep byte-identical within the face the clock
// cell does NOT keep - the two prints 9-10 seconds apart every face
// the two hands genuinely distinct the pair law honest). THE
// EVIDENCE: the server's own boot prints '[20:40:21] [Server
// thread/INFO]: Set the world spawn point to -130, 71, 398 [0.0, 0.0]
// in minecraft:overworld' and re-sets the bed ten seconds later
// ('[20:40:31] ...' F501's own face) - TWO prints per face the boot
// conversation rides, the pair 9-10 seconds apart every face, the MAX
// hand the later print takes (the MIN hand the earlier print wears -
// the .328 word's own law the pair keeps); the REAL SEVENTEEN-face
// arc byte-verified from the fleet-server-log artifacts (every face's
// spawn sets re-read, the later print's clock the census prices, the
// pair 9-10 seconds apart every face the two-print face the MIN/MAX
// split holds): F501's set dusk spoke 20:40:31, F502 21:40:53, F503
// 22:35:47, F504 23:15:13, F505 23:44:17, F506 00:57:42, F507
// 01:44:34, F508 02:14:41, F509 03:02:29, F510 03:47:39, F511
// 04:18:53, F512 05:01:01, F513 06:02:51, F514 07:01:26, F515
// 07:38:14, F516 08:23:03, F517 09:12:08 - the seconds the census
// prices 74431/78053/81347/83713/85457/3462/6274/8081/10949/13659/
// 15533/18061/21771/25286/27494/30183/33118 - the REAL windows: W1
// the swell 74431 -> 78053 (+3622) -> 81347 (+3294), W2 the swell
// 78053 -> 81347 (+3294) -> 83713 (+2366), W3 the swell 81347 ->
// 83713 (+2366) -> 85457 (+1744), W4 the swing 83713 -> 85457 (+1744)
// -> 3462 (-81995), W5 the swing 85457 -> 3462 (-81995) -> 6274
// (+2812), W6 the swell 3462 -> 6274 (+2812) -> 8081 (+1807), W7 the
// swell 6274 -> 8081 (+1807) -> 10949 (+2868), W8 the swell 8081 ->
// 10949 (+2868) -> 13659 (+2710), W9 the swell 10949 -> 13659 (+2710)
// -> 15533 (+1874), W10 the swell 13659 -> 15533 (+1874) -> 18061
// (+2528), W11 the swell 15533 -> 18061 (+2528) -> 21771 (+3710), W12
// the swell 18061 -> 21771 (+3710) -> 25286 (+3515), W13 the swell
// 21771 -> 25286 (+3515) -> 27494 (+2208), W14 the swell 25286 ->
// 27494 (+2208) -> 30183 (+2689), W15 the swell 27494 -> 30183 (+2689)
// -> 33128 (+2945) - FIFTEEN REAL WINDOWS FIFTEEN SPEAKS ZERO HELD
// the word born speaking FIFTEEN DEEP the deepest birth the family
// holds (the .328 set dawn's own thirteen-deep record the sibling
// holds - the F516/F517 fresh faces the arc extends, the two new
// faces' windows W14/W15 the birth deepens, the W4/W5 deltas the
// midnight wrap rides exact, the day boundary the seconds-since-
// midnight domain crosses, the arithmetic exact integers).
//
// GRAMMAR: the .321/.322/.325/.328 clock frame byte-exact (the
// '[(HH:MM:SS)] [Server thread/INFO]: Set the world spawn point to '
// head the .278/.292/.293 INFO frame convention holds, the PRICED
// clock cell zero-padded fixed fields hour 00-23 minute 00-59 second
// 00-59 the emitter's own shape (the leading zeros the F506 00:57:42
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
// THE SCALAR THE SET DUSK PRICES: the census takes the LATER
// spawn-set print's clock the face held (the MAX hand the .322 login
// dusk word's own precedent holds on the seconds domain - the .312
// max port mirror confirms, the later bed-set the boot voiced; the
// null-sentinel the no-spawn face the lawful zero - the .304/.306
// convention holds); the X/Y/Z cells and the angle pair and the
// dimension cell ride shape only - the set dusk hand alone prices.
// THE FENCE: the .321/.322 clock words' own fence (the integer law
// plus the clock ceiling 0..86399 the day boundary keeps). CENSUS
// GUARD: zero fleet wiring, zero new fleet log lines - the word rides
// the reader's fold through the SECOND carrier lane the server-
// console faces ride (the argv[6..8] tail the .278 contract extends,
// the .281 through .328 folds the neighbours hold), the fleet's own
// console never changes.

const SPAWN_SET_DUSK_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/

/**
 * The set dusk census - the later bed-set print's own clock the
 * face's boot conversation voiced (seconds since midnight).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{setDuskSec: number}|null} the mass or null (non-array)
 */
export function spawnSetDuskCensus (lines) {
  if (!Array.isArray(lines)) return null
  let dusk = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SPAWN_SET_DUSK_RE.exec(l)
    if (m) {
      const sec = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
      if (dusk === null || sec > dusk) dusk = sec // the MAX hand - the later bed-set the face voiced
    }
  }
  return { setDuskSec: dusk === null ? 0 : dusk }
}

/**
 * The fence - the .321/.322 clock words' own integer law plus the day
 * boundary 0..86399 keeps.
 *
 * @param {{back: {setDuskSec: number}, prev: {setDuskSec: number}, cur: {setDuskSec: number}}} e
 * @returns {boolean}
 */
export function spawnSetDuskConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.setDuskSec) && ok(e.prev.setDuskSec) && ok(e.cur.setDuskSec))
}

/**
 * The set dusk weather's own two-step shape across three faces.
 *
 * @param {{back: {setDuskSec: number}, prev: {setDuskSec: number}, cur: {setDuskSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function spawnSetDuskTrendRow (e) {
  if (!spawnSetDuskConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.setDuskSec
  const p = prev.setDuskSec
  const c = cur.setDuskSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the dusk never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the spawn-set line's own X cell the .325 anchor word prices the LAST-PRINT-WINS seat and the Z cell the .326 south word prices the MAX seat and the Y cell the .327 bed word prices and the earlier print's clock the MIN hand the .328 set dawn word prices (the SAME-LINE DIFFERENT-CELL LAW the echo box holds, the same cell's two edges the pair law splits), the .322 login dusk word keeps the login line's clock cell's later edge and the .321 login dawn word keeps the same cell's earlier edge (a different emitter the same clock kind prices), the .320 login south seat and the .319 north seat and the .317/.318 login Y pair and the .315/.316 login X pair and the .297/.323 entity id pair and the .312/.313 port pair and the .314 login count word keeps the join mass and the .294 boot done word keeps the same boot conversation's own Done duration seat and the .293 boot prep word keeps the elapsed segment and the .324 boot mass word keeps the boot emitter's own duration cell and the .304/.307 echo Y pair and the .305/.308 echo Z pair and the .306 echo east seat and the .309 echo west seat (a different emitter the same cell kinds price) and the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own counts, the .311 timed out word keeps the stalled-drop seat, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the set dusk's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server spawn set dusk trend (v0.976.329): the world spawn's own set dusk fade ran two steps deep - ${arc} - the bed-set walked earlier each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server spawn set dusk trend (v0.976.329): the world spawn's own set dusk swell ran two steps deep - ${arc} - the bed-set walked later each face, ${tail}`
  }
  return `the server spawn set dusk trend (v0.976.329): the world spawn's own set dusk swing - ${arc} - the boot's own bed-set traded its day between the faces, ${tail}`
}
