// (v0.976.334) THE FLEET'S OWN OPENING LOSS - the server console's
// own '<name> lost connection: Disconnected' / '<name> lost
// connection: Timed out' INFO lines the word prices across the faces
// - the LOSS DAWN cell (the fleet's own first breath on the loss
// lane, seconds since midnight, the wall-clock the vanilla server
// stamps the loss lane's own first print with) the .333 closing
// clock word's own mirror hand named and never priced (the
// SAME-CELL DIFFERENT-HAND LAW the family holds: the .294 word
// prices the Done line's ms cell the SUM hand and the .324 boot mass
// word prices the same cell the MAX hand, the .321 login dawn word
// prices the login line's clock cell the earlier edge and the .322
// login dusk word prices the same cell the later edge, the .328 set
// dawn word keeps the spawn-set clock cell's earlier edge and the
// .329 set dusk word keeps the same cell's later edge - the loss
// lane's own clock cell rode its LATER edge priced by the .333
// closing clock word while the EARLIER edge rode unread). THE
// CHURN LAW THE DAWN KEEPS: the losses never ride one burst alone -
// the mid-run churn losses open the lane (the REAL twenty-one-face
// audit: TWENTY faces carry the mid-run churn - the first loss
// print rides the lane's own opening breath a full ride's width
// before the terminal burst closes the face, F501's own face the
// proof: YardSurvey dropped 20:40:34 = 74434, F1 dropped 20:45:17,
// the terminal burst closed 20:55:21 - the dawn the dusk's own
// mirror edge the census prices) and F505's own face the WRAP face
// the day boundary keeps (the dawn 23:44:19 = 85459 the day's own
// last hour, the dusk 00:00:20 = 20 the next day's first seconds -
// the numeric wrap the deltas ride exact, the DAWN-BEFORE-DUSK law
// wrap-aware the fieldread keeps). THE FIRST BREATH'S OWN SHAPE:
// the first loss print is the SAME emitter the closing burst rides
// - YardSurvey's own first drop every face (the twenty-one faces
// byte-agree the first print rode the Disconnected class skin -
// the class cell rides shape only, the two class skins the faces
// carry both lawful, other reasons refused named-never-priced; the
// .310 word prices the Disconnected class's own count and the .311
// word prices the Timed out class's own count - the class COUNTS
// the siblings price, the dawn prices the LANE's own first print
// regardless of class). THE LEAVE SIBLING: each loss print is
// followed by the '<name> left the game' echo in the SAME second
// every face (the pair-per-bot law the audit re-voices 21/21 - the
// loss print the pair's FIRST line the dawn prices, the leave echo
// the word never prices). THE EVIDENCE: the REAL TWENTY-ONE-face
// arc byte-verified from the fleet-server-log artifacts (the
// fire-2330 harvest re-downloads all twenty-one faces, the artifact
// IDs byte-agree the ledger: F501 12220643212 through F521
// 12268373593), the lane's own first print per face: F501's first
// loss 20:40:34, F502 21:40:55, F503 22:35:49, F504 23:15:16,
// F505 23:44:19, F506 00:57:45, F507 01:44:36, F508 02:14:43,
// F509 03:02:31, F510 03:47:42, F511 04:18:55, F512 05:01:03,
// F513 06:02:54, F514 07:01:28, F515 07:38:17, F516 08:23:05,
// F517 09:12:10, F518 10:03:42, F519 10:35:59, F520 11:42:45,
// F521 13:32:54 - the seconds the census prices 74434/78055/81349/
// 83716/85459/3465/6276/8083/10951/13662/15535/18063/21774/25288/
// 27497/30185/33130/36222/38159/42165/48774 - NINETEEN REAL
// WINDOWS NINETEEN SPEAKS ZERO HELD the word born speaking
// NINETEEN DEEP the family record TIED (the .333 closing clock's
// own nineteen-deep birth the sibling holds - the W4/W5 deltas the
// midnight wrap rides exact, the day boundary the seconds-since-
// midnight domain crosses, the arithmetic exact integers: W4
// -81994 the wrap's own width the F505 face rides). THE ORDERING
// LAW: the dawn never precedes the boot conversation's own opening
// second (FOLLOWS-OPENING 21/21 the field read keeps index-based
// wrap-immune - the .332 word's own OPENING-PRECEDES gate's mirror
// side, the phase law whole: the announcement opens, the selection
// picks, the prep masses, the completion closes, the fleet rides,
// the dawn opens the loss lane, the dusk closes the face). GRAMMAR:
// the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293/.310/.333 INFO
// frame convention holds, the '<name> lost connection: <reason>'
// body the emitter's own skin (the name cell rides shape only, the
// reason cell the two class skins the faces carry ride shape only,
// the PRICED clock cell zero-padded fixed fields hour 00-23 minute
// 00-59 second 00-59 the emitter's own shape - the leading zeros
// the F506 00:57:45 face rides), LINE END tail boundary (the .288
// precedent); the near-miss lanes never ride - nineteen skins
// refused (the bare body, the WARN frame, the ServerMain frame,
// the pretty spacing, the missing clock, the 1-digit hour clock,
// the overflow second clock, the dash-separator clock, the plural
// body, the altered verb, the missing reason, the other reason,
// the lowercase reason, the leading whitespace, the trailing junk,
// the CR tail, the trailing period, the leave sibling, the
// truncated body). THE FENCE: the .333 clock words' own fence (the
// integer law plus the clock ceiling 0..86399 the day boundary
// keeps). CENSUS GUARD: zero fleet wiring, zero new fleet log
// lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail
// the .278 contract extends, the .281 through .333 folds the
// neighbours hold), the fleet's own console never changes.

const FLEET_LOSS_DAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+ lost connection: (Disconnected|Timed out)$/

/**
 * The loss dawn census - the first 'lost connection' print's own
 * clock the face's loss lane voiced (seconds since midnight).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{lossDawnSec: number}|null} the mass or null (non-array)
 */
export function fleetLossDawnCensus (lines) {
  if (!Array.isArray(lines)) return null
  let clock = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = FLEET_LOSS_DAWN_RE.exec(l)
    if (m) {
      clock = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]) // the FIRST print - the lane's opening breath the face opened the loss lane with
      break
    }
  }
  return { lossDawnSec: clock === null ? 0 : clock }
}

/**
 * The fence - the clock words' own integer law plus the day boundary
 * 0..86399 keeps.
 *
 * @param {{back: {lossDawnSec: number}, prev: {lossDawnSec: number}, cur: {lossDawnSec: number}}} e
 * @returns {boolean}
 */
export function fleetLossDawnConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.lossDawnSec) && ok(e.prev.lossDawnSec) && ok(e.cur.lossDawnSec))
}

/**
 * The loss dawn weather's own two-step shape across three faces.
 *
 * @param {{back: {lossDawnSec: number}, prev: {lossDawnSec: number}, cur: {lossDawnSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function fleetLossDawnTrendRow (e) {
  if (!fleetLossDawnConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.lossDawnSec
  const p = prev.lossDawnSec
  const c = cur.lossDawnSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the losses never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the conversation's own phase law the siblings keep: the .333 closing clock word prices the loss lane's own LAST print's clock cell (this word's own mirror hand - the same cell's later edge the dusk prices) and the .332 opening clock word prices the 'Starting minecraft server version' line's own clock cell (the conversation's own first second the dawn never precedes - the FOLLOWS-OPENING ordering the field read keeps) and the .331 selection clock word prices the 'Selecting global world spawn...' line's own clock cell and the .330 completion clock word prices the Done line's own clock cell and the .293 boot prep word prices the 'Time elapsed' segment's own ms cell and the .294 boot done word prices the Done line's ms cell the SUM hand and the .324 boot mass word prices the same cell the MAX hand and the .328 set dawn word keeps the spawn-set clock cell's earlier edge and the .329 set dusk word keeps the same cell's later edge and the .325 anchor and .326 south and .327 bed words keep the spawn-SET line's own coordinate cells and the .321 login dawn word keeps the login line's clock cell's earlier edge and the .322 login dusk word keeps the same cell's later edge (the last LOGIN second the dawn never is - the losses ride after the last login every face) and the .314 login count word keeps the join mass and the .310 disconnect word keeps the loss lane's Disconnected class count and the .311 timed out word keeps the Timed out class count (the two class skins this word's reason cell rides shape only - the counts the siblings price, the dawn the lane's own first print) and the leave lane the same-second sibling the burst-identity law keeps ('<name> left the game' - the pair's own second line, the loss print the FIRST line the dawn prices) and the graceful shutdown conversation ('Stopping server', 'Saving players', 'Saving worlds') born-silent honest (the console never carries it - the kill is hard) and the deathcause module keeps the death lane and the dupclock book keeps the duplicate-loss churn and the kick bill keeps the fleet log's own event cells and the .278 advancement word keeps the same console's own achievement seat and the gc band keeps the [gc] lane the face ends on and the .292 fill word keeps the fill echo lane - the loss dawn's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own loss dawn trend (v0.976.334): the fleet's own loss dawn fade ran two steps deep - ${arc} - the fleet's own first loss came earlier each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own loss dawn trend (v0.976.334): the fleet's own loss dawn swell ran two steps deep - ${arc} - the fleet's own first loss came later each face, ${tail}`
  }
  return `the fleet's own loss dawn trend (v0.976.334): the fleet's own loss dawn swing - ${arc} - the fleet's own first loss traded its day between the faces, ${tail}`
}
