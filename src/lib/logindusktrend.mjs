// (v0.976.322) THE SERVER LOGIN'S OWN DUSK MASS - the server console's
// own '<name>[/IP:port] logged in with entity id N at (x, y, z)' INFO
// line's clock cell the word prices across the faces - the DUSK hand
// (the latest accepted login's own clock, seconds since midnight) the
// .321 dawn word's own tail named and never priced (the login
// timestamp cell rode shape-only through the eleven births the
// .297/.312/.313/.314/.315/.316/.317/.318/.319/.320/.321 hands hold -
// the SAME-CELL DIFFERENT-HAND LAW the echo box holds: the .321 dawn
// word prices the frame's own clock cell's EARLIER edge, this word
// prices the SAME cell's LATER edge - the .304/.307 and .305/.308 and
// .315/.316 and .317/.318 and .319/.320 pairs' own precedent the
// clock domain joins). THE EVIDENCE: the server's own acceptor prints
// '[20:50:26] [Server thread/INFO]: F6[/127.0.0.1:47898] logged in
// with entity id 4154 at (-131.49961560785792, 43.7531999805212,
// 438.3)' (F501's own face) - one print per login the server
// accepted, the clock the acceptor stamped the line with - and no
// book owned the DUSK across the faces: the clock cell's later edge
// rode unread (the REAL eleven-face arc the faces carry - byte-
// verified from the fleet-server-log artifacts, every face's logins
// re-sorted on the clock, the census hand the mirror law trusts):
// F501's latest accepted login spoke 20:50:26, F502 21:50:56, F503
// 22:45:49, F504 23:24:55, F505 23:54:14, F506 01:07:45, F507
// 01:54:33, F508 02:24:31, F509 03:12:18, F510 03:57:39, F511
// 04:28:49 - the seconds since midnight the census prices: 75026,
// 78656, 81949, 84295, 86054, 4065, 6873, 8671, 11538, 14259, 16129 -
// the REAL windows the arc holds: W1 the swell 75026 -> 78656 (+3630)
// -> 81949 (+3293), W2 the swell 78656 -> 81949 (+3293) -> 84295
// (+2346), W3 the swell 81949 -> 84295 (+2346) -> 86054 (+1759), W4
// the swing 84295 -> 86054 (+1759) -> 4065 (-81989), W5 the swing
// 86054 -> 4065 (-81989) -> 6873 (+2808), W6 the swell 4065 -> 6873
// (+2808) -> 8671 (+1798), W7 the swell 6873 -> 8671 (+1798) -> 11538
// (+2867), W8 the swell 8671 -> 11538 (+2867) -> 14259 (+2721), W9
// the swell 11538 -> 14259 (+2721) -> 16129 (+1870) - NINE REAL
// WINDOWS NINE SPEAKS ZERO HELD the word born speaking NINE DEEP the
// .321 dawn birth's own nine-deep record the sibling holds (the
// W4/W5 deltas the midnight wrap rides exact - the day boundary the
// seconds-since-midnight domain crosses, the arithmetic exact
// integers the integer domain never tails); the dusk's own speakers
// the faces hold - F6/F3/F5/F12/F17/F8/F8/F1/F16/F5/F6 - no single
// bot owns the dusk seat (the dawn's YardSurvey one-name monopoly the
// exception the dusk does not extend). THE CROSS-CHECK (the mirror
// sibling arc the same mining pipeline re-proved): the dawn values
// the same faces hold match the .321 word's REAL arc byte-exact on
// every face (74421/78043/81336/83703/85447/3453/6264/8071/10939/
// 13649/15523) - the census hand the family trusts.
//
// GRAMMAR: the .321 dawn word's own frame byte-exact (the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the .278/.292/.293 INFO
// frame convention - THIS word's priced cell the clock itself
// carries, the domain shape the emitter prints: zero-padded fixed
// fields hour 00-23 minute 00-59 second 00-59 (the leading zeros the
// emitter's own shape the F506 01:07:45 dusk rides - the .248
// no-leading-zero law the PORT cell holds, the clock cell the
// opposite shape the same house keeps), the \S+ name cell the
// who-byte law rides, the '[/IP:port]' socket cell the proven integer
// capture, the 'logged in with entity id ' body, the entity id cell
// never re-captured, the X/Y/Z coord cells shape-only, LINE END tail
// boundary); the near-miss lanes never ride - the bot-tagged prefix,
// the WARN frame, the pretty spacing, the plural body, the altered
// verb, the missing port cell, the float port, the leading-zero port,
// the plus port, the integer coord, the leading whitespace, the
// trailing junk, the CR tail, the 1-digit hour clock, the overflow
// hour clock, the overflow minute clock, the overflow second clock,
// the dash-separator clock, the missing-seconds clock. THE SCALAR
// THE DUSK PRICES: the census takes the MAX clock the face's logins
// rode, seconds since midnight (the MAX hand the .312 port word's own
// precedent holds on the integer domain - the .320 login south
// word's own same-line max-hand the mirror confirms; the
// null-sentinel the no-login face the lawful zero - the .304/.306
// convention holds); the port cells and the entity counters and the
// coord cells and the name cell ride shape only - the dusk hand alone
// prices. THE FENCE: the .311/.314 count fence's integer law plus the
// clock domain's own ceiling - Number.isInteger and 0..86399
// (23:59:59) the clock cell the bounds keep. CENSUS GUARD: zero fleet
// wiring, zero new fleet log lines - the word rides the reader's fold
// through the SECOND carrier lane the server-console faces ride (the
// argv[6..8] tail the .278 contract extends, the .281 through .321
// folds the neighbours hold), the fleet's own console never changes.

const LOGIN_DUSK_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login dusk census - the latest accepted login's own clock the
 * face rode (the MAX hand, seconds since midnight).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{duskSec: number}|null} the mass or null (non-array)
 */
export function loginDuskCensus (lines) {
  if (!Array.isArray(lines)) return null
  let dusk = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_DUSK_RE.exec(l)
    if (!m) continue
    const sec = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
    if (dusk === null || sec > dusk) dusk = sec // the dusk the logins retired at - the face's own last accept
  }
  return { duskSec: dusk === null ? 0 : dusk }
}

/**
 * The fence - the integer law plus the clock domain's own bounds
 * (0..86399 the 23:59:59 ceiling keeps).
 *
 * @param {{back: {duskSec: number}, prev: {duskSec: number}, cur: {duskSec: number}}} e
 * @returns {boolean}
 */
export function loginDuskConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const clockOk = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    clockOk(e.back.duskSec) && clockOk(e.prev.duskSec) && clockOk(e.cur.duskSec))
}

/**
 * The login dusk weather's own two-step shape across three faces.
 *
 * @param {{back: {duskSec: number}, prev: {duskSec: number}, cur: {duskSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginDuskTrendRow (e) {
  if (!loginDuskConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.duskSec
  const p = prev.duskSec
  const c = cur.duskSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the dusk never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the login dawn hand keeps the same cell's earlier-edge seat priced beside (the .321 dawn word the same clock cell's own MIN hand - co-existence by seat never by duplication), the .320 login south word keeps the same line's south seat and the .319 login north word keeps the same cell's north seat, the .317 login floor word keeps the same line's floor seat and the .318 login ceiling word keeps the same cell's ceiling seat, the .315 login east word keeps the same line's east edge seat and the .316 login west word keeps the same line's west edge seat, the .297 entity id word keeps the same login line's own entity id peak seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat, the .305 echo north word keeps the setblock echo's own Z-min seat and the .308 echo south word keeps the echo's own Z-max seat (a different emitter the same cell kind prices), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login dusk's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login dusk trend (v0.976.322): the login dusk's own fade ran two steps deep - ${arc} - the dusks withdrew toward midnight, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login dusk trend (v0.976.322): the login dusk's own swell ran two steps deep - ${arc} - the dusks pressed later into the day, ${tail}`
  }
  return `the server login dusk trend (v0.976.322): the login dusk's own swing - ${arc} - the dusks traded earlier-later between the faces, ${tail}`
}
