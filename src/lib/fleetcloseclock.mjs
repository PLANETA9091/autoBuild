// (v0.976.333) THE FLEET'S OWN CLOSING SECOND - the server console's
// own '<name> lost connection: Disconnected' / '<name> lost
// connection: Timed out' INFO lines the word prices across the faces
// - the CLOSING CLOCK cell (the fleet's own last breath, seconds
// since midnight, the wall-clock the vanilla server stamps the loss
// lane's own final print with) the conversation's own CLOSING phase
// named and never priced (the PHASE LAW the conversation holds: the
// boot announces FIRST, the spawn is picked after, the spawn area
// preps, the boot completes, the fleet rides, the losses churn, the
// CLOSING burst ends the face - the .332 opening clock word prices
// the conversation's own first second, the .331 selection clock word
// prices the spawn pick's own second, the .330 completion clock word
// prices the boot's own finish second, the .293 prep word prices the
// prep segment's own ms cell, the closing second itself rode
// unread). THE GRACEFUL SHUTDOWN NEVER SPEAKS: the 'Stopping server'
// and 'Saving players' and 'Saving worlds' lines the vanilla server
// prints on a graceful stop never appear in the faces (the kill is
// hard - F501's own console ends on the loss burst and the [gc]
// lane, the shutdown conversation born-silent honest the audit
// re-voices 21/21), the loss burst IS the closing phase the console
// carries. THE LOSS LANE'S OWN CLASSES: the vanilla server drops a
// client with two reasons the faces carry - 'Disconnected' (the
// .310 word's own class, its count the .310 word prices) and 'Timed
// out' (the .311 word's own class, its count the .311 word prices)
// - the closing clock prices the LANE's own last print regardless
// of class (the class cell rides shape only - the two class skins
// the faces carry, other reasons refused named-never-priced; F515's
// own face the class-union proof: the terminal burst rode Timed out
// 07:47:34 while the Disconnected class's last print came earlier
// 07:46:18 - the lane's own last breath the census keeps). THE
// CHURN LAW: the losses never ride one burst alone - mid-run churn
// losses ride the lane (F501's own face: YardSurvey dropped
// 20:40:34, F1 dropped 20:45:17, the terminal burst 20:55:21) - the
// census takes the LAST loss print's clock the face held (the
// LAST-PRINT-WINS law the .279 bootstrap targets word's own
// precedent holds on the seconds domain - the .330/.331/.332 clock
// words' own within-face law the siblings keep). THE LEAVE SIBLING:
// each loss print is followed by the '<name> left the game' echo in
// the SAME second every face (the pair-per-bot law the audit
// re-voices 21/21 - the leave count byte-adds the two loss classes'
// counts) - the leave lane the same-second sibling the burst-identity
// law declines (the fire-2133 law: same-second siblings decline by
// identity, the FIRST line prices - the loss print the pair's first
// line, the leave echo the word never prices). THE EVIDENCE: the
// REAL TWENTY-ONE-face arc byte-verified from the fleet-server-log
// artifacts, the lane's own last print per face: F501's fleet closed
// 20:55:21, F502 21:55:52, F503 22:51:24, F504 23:28:57, F505
// 00:00:20, F506 01:10:57, F507 01:59:00, F508 02:28:33, F509
// 03:15:18, F510 04:01:03, F511 04:34:55, F512 05:15:04, F513
// 06:18:43, F514 07:17:21, F515 07:47:34, F516 08:39:06, F517
// 09:23:50, F518 10:15:19, F519 10:52:00, F520 11:54:09, F521
// 13:45:48 - the seconds the census prices 75321/78952/82284/84537/
// 20/4257/7140/8913/11718/14463/16495/18904/22723/26241/28054/31146/
// 33830/36919/39120/42849/49548 - NINETEEN REAL WINDOWS NINETEEN
// SPEAKS ZERO HELD the word born speaking NINETEEN DEEP the family
// record TIED (the .332 opening clock's own nineteen-deep birth the
// sibling holds - the F521 fresh face the fire-2230 harvest mines,
// run 39429320337 the .331 full tree's own first fleet face, the W19
// window the birth deepens, the W3/W4 deltas the midnight wrap rides
// exact, the day boundary the seconds-since-midnight domain crosses,
// the arithmetic exact integers). THE ORDERING LAW: the closing
// second never precedes the boot conversation's own opening second
// (CLOSING-FOLLOWS 21/21 the field read keeps wrap-aware - the .332
// word's own OPENING-PRECEDES gate's mirror side, the phase law
// whole: the announcement opens, the selection picks, the prep
// masses, the completion closes, the fleet rides, the losses close).
// GRAMMAR: the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293/.310 INFO frame
// convention holds, the '<name> lost connection: <reason>' body the
// emitter's own skin (the name cell rides shape only, the reason
// cell the two class skins the faces carry ride shape only, the
// PRICED clock cell zero-padded fixed fields hour 00-23 minute 00-59
// second 00-59 the emitter's own shape - the leading zeros the F506
// 01:10:57 face rides), LINE END tail boundary (the .288 precedent);
// the near-miss lanes never ride - nineteen skins refused (the bare
// body, the WARN frame, the ServerMain frame, the pretty spacing,
// the missing clock, the 1-digit hour clock, the overflow second
// clock, the dash-separator clock, the plural body, the altered
// verb, the missing reason, the other reason, the lowercase reason,
// the leading whitespace, the trailing junk, the CR tail, the
// trailing period, the leave sibling, the truncated body). THE
// FENCE: the .321/.322/.328/.329/.330/.331/.332 clock words' own
// fence (the integer law plus the clock ceiling 0..86399 the day
// boundary keeps). CENSUS GUARD: zero fleet wiring, zero new fleet
// log lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail
// the .278 contract extends, the .281 through .332 folds the
// neighbours hold), the fleet's own console never changes.

const FLEET_CLOSE_CLOCK_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+ lost connection: (Disconnected|Timed out)$/

/**
 * The closing clock census - the final 'lost connection' print's own
 * clock the face's loss lane voiced (seconds since midnight).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{closeClockSec: number}|null} the mass or null (non-array)
 */
export function fleetCloseClockCensus (lines) {
  if (!Array.isArray(lines)) return null
  let clock = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = FLEET_CLOSE_CLOCK_RE.exec(l)
    if (m) {
      clock = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]) // the LAST print - the lane's final breath the face ended with
    }
  }
  return { closeClockSec: clock === null ? 0 : clock }
}

/**
 * The fence - the clock words' own integer law plus the day boundary
 * 0..86399 keeps.
 *
 * @param {{back: {closeClockSec: number}, prev: {closeClockSec: number}, cur: {closeClockSec: number}}} e
 * @returns {boolean}
 */
export function fleetCloseClockConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.closeClockSec) && ok(e.prev.closeClockSec) && ok(e.cur.closeClockSec))
}

/**
 * The closing clock weather's own two-step shape across three faces.
 *
 * @param {{back: {closeClockSec: number}, prev: {closeClockSec: number}, cur: {closeClockSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function fleetCloseClockTrendRow (e) {
  if (!fleetCloseClockConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.closeClockSec
  const p = prev.closeClockSec
  const c = cur.closeClockSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the losses never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the conversation's own phase law the siblings keep: the .332 opening clock word prices the 'Starting minecraft server version' line's own clock cell (the conversation's own first second the closing never precedes - the CLOSING-FOLLOWS ordering the field read keeps) and the .331 selection clock word prices the 'Selecting global world spawn...' line's own clock cell and the .330 completion clock word prices the Done line's own clock cell and the .293 boot prep word prices the 'Time elapsed' segment's own ms cell and the .294 boot done word prices the Done line's ms cell the SUM hand and the .324 boot mass word prices the same cell the MAX hand and the .328 set dawn word keeps the spawn-set clock cell's earlier edge and the .329 set dusk word keeps the same cell's later edge and the .325 anchor and .326 south and .327 bed words keep the spawn-SET line's own coordinate cells and the .321 login dawn word keeps the login line's clock cell's earlier edge and the .322 login dusk word keeps the same cell's later edge (the last LOGIN second the closing never is - the losses ride after the last login every face) and the .314 login count word keeps the join mass and the .310 disconnect word keeps the loss lane's Disconnected class count and the .311 timed out word keeps the Timed out class count (the two class skins this word's reason cell rides shape only) and the leave lane the same-second sibling the burst-identity law keeps ('<name> left the game' - the pair's own second line, the loss print the FIRST line the lane prices) and the graceful shutdown conversation ('Stopping server', 'Saving players', 'Saving worlds') born-silent honest (the console never carries it - the kill is hard) and the deathcause module keeps the death lane and the dupclock book keeps the duplicate-loss churn and the kick bill keeps the fleet log's own event cells and the .278 advancement word keeps the same console's own achievement seat and the gc band keeps the [gc] lane the face ends on and the .292 fill word keeps the fill echo lane - the closing clock's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own closing clock trend (v0.976.333): the fleet's own closing fade ran two steps deep - ${arc} - the fleet's own last breath came earlier each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own closing clock trend (v0.976.333): the fleet's own closing swell ran two steps deep - ${arc} - the fleet's own last breath came later each face, ${tail}`
  }
  return `the fleet's own closing clock trend (v0.976.333): the fleet's own closing swing - ${arc} - the fleet's own last breath traded its day between the faces, ${tail}`
}
