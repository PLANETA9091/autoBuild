// (v0.976.331) THE WORLD SPAWN'S OWN SELECTION SECOND - the server
// console's own 'Selecting global world spawn...' INFO line the word
// prices across the faces - the SELECTION CLOCK cell (the boot's own
// spawn-selection second, seconds since midnight, the wall-clock the
// vanilla server stamps the boot's own spawn-picking line with) the
// boot conversation's own earlier phase named and never priced (the
// PHASE LAW the boot conversation holds: the server picks the world
// spawn FIRST, the spawn area preps after, the boot completes LAST -
// the .293 boot prep word prices the prep segment's own duration, the
// .330 completion clock word prices the boot's own finish second, the
// selection second itself rode unread; the .325/.326/.327 words price
// the spawn-SET line's own coordinate cells - the set line the fleet
// itself prints after login - and this word prices the boot's own
// SELECTION line the server prints before any bot ever joins, a
// different emitter a different phase the seat law keeps). THE
// EVIDENCE: the vanilla server's own boot prints '[20:40:06] [Server
// thread/INFO]: Selecting global world spawn...' (F501's own face) -
// one print per boot the selection line rides, the wall-clock second
// the boot starts picking the world spawn at - and no book owned the
// mass across the faces: the .293 boot prep word prices the elapsed
// segment's own ms cell, the .330 completion word prices the Done
// line's own clock cell, the .328/.329 words price the spawn-set
// line's own clock pair, the .321/.322 words price the login
// emitter's clock pair - the selection second itself rode unread
// (the REAL TWENTY-face arc byte-verified from the fleet-server-log
// artifacts, one print per face every face the ONE-PRINT law the
// census keeps): F501's boot selected 20:40:06, F502 21:40:27, F503
// 22:35:22, F504 23:14:47, F505 23:43:55, F506 00:57:21, F507
// 01:44:13, F508 02:14:16, F509 03:02:07, F510 03:47:13, F511
// 04:18:31, F512 05:00:38, F513 06:02:26, F514 07:00:57, F515
// 07:37:47, F516 08:22:37, F517 09:11:41, F518 10:03:16, F519
// 10:35:35, F520 11:42:23 - the seconds the census prices 74406/
// 78027/81322/83687/85435/3441/6253/8056/10927/13633/15511/18038/
// 21746/25257/27467/30157/33101/36196/38135/42143 - the REAL
// windows: W1 the swell 74406 -> 78027 (+3621) -> 81322 (+3295), W2
// the swell 78027 -> 81322 (+3295) -> 83687 (+2365), W3 the swell
// 81322 -> 83687 (+2365) -> 85435 (+1748), W4 the swing 83687 ->
// 85435 (+1748) -> 3441 (-81994), W5 the swing 85435 -> 3441 (-81994)
// -> 6253 (+2812), W6 the swell 3441 -> 6253 (+2812) -> 8056 (+1803),
// W7 the swell 6253 -> 8056 (+1803) -> 10927 (+2871), W8 the swell
// 8056 -> 10927 (+2871) -> 13633 (+2706), W9 the swell 10927 ->
// 13633 (+2706) -> 15511 (+1878), W10 the swell 13633 -> 15511
// (+1878) -> 18038 (+2527), W11 the swell 15511 -> 18038 (+2527) ->
// 21746 (+3708), W12 the swell 18038 -> 21746 (+3708) -> 25257
// (+3511), W13 the swell 21746 -> 25257 (+3511) -> 27467 (+2210), W14
// the swell 25257 -> 27467 (+2210) -> 30157 (+2690), W15 the swell
// 27467 -> 30157 (+2690) -> 33101 (+2944), W16 the swell 30157 ->
// 33101 (+2944) -> 36196 (+3095), W17 the swell 33101 -> 36196
// (+3095) -> 38135 (+1939), W18 the swell 36196 -> 38135 (+1939) ->
// 42143 (+4008) - EIGHTEEN REAL WINDOWS EIGHTEEN SPEAKS ZERO HELD the
// word born speaking EIGHTEEN DEEP the family record (beats the .330
// completion clock's own seventeen-deep birth the sibling holds - the
// F520 fresh face the fire-2043 harvest mines, run 39415017928 the
// .330 full tree's own first fleet face the W18 window deepens, the
// W4/W5 deltas the midnight wrap rides exact, the day boundary the
// seconds-since-midnight domain crosses, the arithmetic exact
// integers).
//
// GRAMMAR: the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293/.330 INFO frame
// convention holds, the 'Selecting global world spawn...' body the
// emitter's own skin (the triple-dot tail the vanilla print rides,
// the PRICED clock cell zero-padded fixed fields hour 00-23 minute
// 00-59 second 00-59 the emitter's own shape - the leading zeros the
// F506 00:57:21 face rides), LINE END tail boundary (the .288
// precedent); the near-miss lanes never ride - nineteen skins refused
// (the bot prefix, the WARN frame, the ServerMain frame, the pretty
// spacing, the missing ellipsis, the one-dot tail, the altered verb,
// the altered body, the point suffix, the plural body, the lowercase
// body, the leading whitespace, the trailing junk, the CR tail, the
// 1-digit hour clock, the overflow second clock, the dash-separator
// clock, the missing head, the truncated head). THE SCALAR THE
// SELECTION CLOCK PRICES: the census takes the LAST selection print's
// clock the face held (the LAST-PRINT-WINS law the .279 bootstrap
// targets word's own precedent holds on the seconds domain - the
// .330 completion clock word's own within-face law the sibling
// keeps, the final boot the face ended with; the null-sentinel the
// no-selection face the lawful zero - the .304/.306 convention
// holds). THE ORDERING LAW: the selection second precedes the boot
// conversation's own completion second every face (the .330 word's
// own DONE-PRECEDES gate's mirror side - the server picks the spawn
// before the boot finishes, the phase law the field read keeps
// whole). THE FENCE: the .321/.322/.328/.329/.330 clock words' own
// fence (the integer law plus the clock ceiling 0..86399 the day
// boundary keeps). CENSUS GUARD: zero fleet wiring, zero new fleet
// log lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail
// the .278 contract extends, the .281 through .330 folds the
// neighbours hold), the fleet's own console never changes.

const SPAWN_SELECT_CLOCK_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Selecting global world spawn\.\.\.$/

/**
 * The selection clock census - the final 'Selecting global world
 * spawn' print's own clock the face's boot voiced (seconds since
 * midnight).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{selectClockSec: number}|null} the mass or null (non-array)
 */
export function spawnSelectClockCensus (lines) {
  if (!Array.isArray(lines)) return null
  let clock = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SPAWN_SELECT_CLOCK_RE.exec(l)
    if (m) {
      clock = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]) // the LAST print - the final boot the face ended with
    }
  }
  return { selectClockSec: clock === null ? 0 : clock }
}

/**
 * The fence - the clock words' own integer law plus the day boundary
 * 0..86399 keeps.
 *
 * @param {{back: {selectClockSec: number}, prev: {selectClockSec: number}, cur: {selectClockSec: number}}} e
 * @returns {boolean}
 */
export function spawnSelectClockConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.selectClockSec) && ok(e.prev.selectClockSec) && ok(e.cur.selectClockSec))
}

/**
 * The selection clock weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {selectClockSec: number}, prev: {selectClockSec: number}, cur: {selectClockSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function spawnSelectClockTrendRow (e) {
  if (!spawnSelectClockConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.selectClockSec
  const p = prev.selectClockSec
  const c = cur.selectClockSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the selection never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the boot conversation's own phase law the siblings keep: the .293 boot prep word prices the 'Time elapsed' segment's own ms cell (the prep phase the selection precedes) and the .330 completion clock word prices the Done line's own clock cell (the completion phase the selection precedes - the SELECTION-PRECEDES ordering the field read keeps) and the .294 boot done word prices the Done line's ms cell the SUM hand and the .324 boot mass word prices the same cell the MAX hand and the .325 anchor and .326 south and .327 bed words keep the spawn-SET line's own coordinate cells and the .328 set dawn word keeps the spawn-set clock cell's earlier edge and the .329 set dusk word keeps the same cell's later edge (the set line the fleet prints after login a later conversation holds) and the .321 login dawn word keeps the login line's clock cell's earlier edge and the .322 login dusk word keeps the same cell's later edge and the .320 login south seat and the .319 north seat and the .317/.318 login Y pair and the .315/.316 login X pair and the .297/.323 entity id pair and the .312/.313 port pair and the .314 login count word keeps the join mass and the .304/.307 echo Y pair and the .305/.308 echo Z pair and the .306 echo east seat and the .309 echo west seat (a different emitter the same cell kinds price) and the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own counts, the .311 timed out word keeps the stalled-drop seat, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the selection clock's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the world spawn selection clock trend (v0.976.331): the server boot's own selection fade ran two steps deep - ${arc} - the boot picked the world spawn earlier each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the world spawn selection clock trend (v0.976.331): the server boot's own selection swell ran two steps deep - ${arc} - the boot picked the world spawn later each face, ${tail}`
  }
  return `the world spawn selection clock trend (v0.976.331): the server boot's own selection swing - ${arc} - the boot's own spawn pick traded its day between the faces, ${tail}`
}
