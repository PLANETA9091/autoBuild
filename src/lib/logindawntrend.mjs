// (v0.976.321) THE SERVER LOGIN'S OWN DAWN MASS - the server console's
// own '<name>[/IP:port] logged in with entity id N at (x, y, z)' INFO
// line's clock cell the word prices across the faces - the DAWN hand
// (the earliest accepted login's own clock, seconds since midnight)
// the login family's tails named and never priced (the login
// timestamp cell rode shape-only through the ten births the
// .297/.312/.313/.314/.315/.316/.317/.318/.319/.320 hands hold - the
// SAME-LANE DIFFERENT-CELL LAW the echo box holds: every prior word
// prices a cell AFTER the INFO frame, this word prices the frame's
// own clock cell the '[(HH:MM:SS)]' head wears - the time domain the
// coord words never opened). THE EVIDENCE: the server's own acceptor
// prints '[20:40:21] [Server thread/INFO]:
// YardSurvey[/127.0.0.1:48142] logged in with entity id 17 at
// (-129.5, 70.0, 398.5)' (F501's own face) - one print per login the
// server accepted, the clock the acceptor stamped the line with - and
// no book owned the DAWN across the faces: the clock cell itself rode
// unread (the REAL eleven-face arc the faces carry - byte-verified
// from the fleet-server-log artifacts, every face's logins re-sorted
// on the clock, the census hand the mirror law trusts): F501's first
// accepted login spoke 20:40:21, F502 21:40:43, F503 22:35:36, F504
// 23:15:03, F505 23:44:07, F506 00:57:33, F507 01:44:24, F508
// 02:14:31, F509 03:02:19, F510 03:47:29, F511 04:18:43 - the seconds
// since midnight the census prices: 74421, 78043, 81336, 83703,
// 85447, 3453, 6264, 8071, 10939, 13649, 15523 - the REAL windows the
// arc holds: W1 the swell 74421 -> 78043 (+3622) -> 81336 (+3293), W2
// the swell 78043 -> 81336 (+3293) -> 83703 (+2367), W3 the swell
// 81336 -> 83703 (+2367) -> 85447 (+1744), W4 the swing 83703 ->
// 85447 (+1744) -> 3453 (-81994), W5 the swing 85447 -> 3453 (-81994)
// -> 6264 (+2811), W6 the swell 3453 -> 6264 (+2811) -> 8071 (+1807),
// W7 the swell 6264 -> 8071 (+1807) -> 10939 (+2868), W8 the swell
// 8071 -> 10939 (+2868) -> 13649 (+2710), W9 the swell 10939 ->
// 13649 (+2710) -> 15523 (+1874) - NINE REAL WINDOWS NINE SPEAKS ZERO
// HELD the word born speaking NINE DEEP the .319/.320 births' own
// eight-deep record the sibling held (the W4/W5 deltas the midnight
// wrap rides exact - the day boundary the seconds-since-midnight
// domain crosses, the arithmetic exact integers the integer domain
// never tails); the dawn's own speaker the faces hold - YardSurvey
// the survey bot's own login spoke EVERY face's dawn (eleven faces
// eleven dawns one name) - the dawn seat ONE name owns (the coord
// seats no single bot owns - the dawn the exception the faces hold).
// THE CROSS-CHECK (the mirror sibling arc the same mining pipeline
// re-proved): the headcounts the same faces hold match the .314
// word's REAL arc byte-exact on every face (39/30/25/30/40/37/26/39/
// 22/26, the F511 32 first-read beside) - the census hand the family
// trusts.
//
// GRAMMAR: the .315/.316/.317/.318/.319/.320 login words' own frame
// byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head the
// .278/.292/.293 INFO frame convention - THIS word's priced cell the
// clock itself carries, the domain shape the emitter prints:
// zero-padded fixed fields hour 00-23 minute 00-59 second 00-59 (the
// leading zeros the emitter's own shape the F506 00:57:33 dawn rides
// - the .248 no-leading-zero law the PORT cell holds, the clock cell
// the opposite shape the same house keeps), the \S+ name cell the
// who-byte law rides, the '[/IP:port]' socket cell the proven integer
// capture, the 'logged in with entity id ' body, the entity id cell
// never re-captured, the X/Y/Z coord cells shape-only, LINE END tail
// boundary); the near-miss lanes never ride - the bot-tagged prefix,
// the WARN frame, the pretty spacing, the plural body, the altered
// verb, the missing port cell, the float port, the leading-zero port,
// the plus port, the integer coord, the leading whitespace, the
// trailing junk, the CR tail, the 1-digit hour clock, the overflow
// hour clock, the overflow minute clock, the overflow second clock,
// the dash-separator clock. THE SCALAR THE DAWN PRICES: the census
// takes the MIN clock the face's logins rode, seconds since midnight
// (the MIN hand the .317 floor law's own precedent holds on the
// integer domain - the .313 login min port word's own same-line
// min-hand the mirror confirms; the null-sentinel the no-login face
// the lawful zero - the .304/.306 convention holds); the port cells
// and the entity counters and the coord cells and the name cell ride
// shape only - the dawn hand alone prices. THE FENCE: the .311/.314
// count fence's integer law plus the clock domain's own ceiling -
// Number.isInteger and 0..86399 (23:59:59) the clock cell the bounds
// keep. CENSUS GUARD: zero fleet wiring, zero new fleet log lines -
// the word rides the reader's fold through the SECOND carrier lane
// the server-console faces ride (the argv[6..8] tail the .278
// contract extends, the .281 through .320 folds the neighbours hold),
// the fleet's own console never changes.

const LOGIN_DAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login dawn census - the earliest accepted login's own clock the
 * face rode (the MIN hand, seconds since midnight).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{dawnSec: number}|null} the mass or null (non-array)
 */
export function loginDawnCensus (lines) {
  if (!Array.isArray(lines)) return null
  let dawn = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_DAWN_RE.exec(l)
    if (!m) continue
    const sec = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
    if (dawn === null || sec < dawn) dawn = sec // the dawn the logins rose from - the face's own first accept
  }
  return { dawnSec: dawn === null ? 0 : dawn }
}

/**
 * The fence - the integer law plus the clock domain's own bounds
 * (0..86399 the 23:59:59 ceiling keeps).
 *
 * @param {{back: {dawnSec: number}, prev: {dawnSec: number}, cur: {dawnSec: number}}} e
 * @returns {boolean}
 */
export function loginDawnConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const clockOk = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    clockOk(e.back.dawnSec) && clockOk(e.prev.dawnSec) && clockOk(e.cur.dawnSec))
}

/**
 * The login dawn weather's own two-step shape across three faces.
 *
 * @param {{back: {dawnSec: number}, prev: {dawnSec: number}, cur: {dawnSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginDawnTrendRow (e) {
  if (!loginDawnConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.dawnSec
  const p = prev.dawnSec
  const c = cur.dawnSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the dawn never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the login dusk hand keeps the same cell's later-edge seat unread (the SAME-CELL DIFFERENT-HAND LAW the echo box holds - the .304/.307 and .305/.308 and .315/.316 and .317/.318 and .319/.320 pairs' own precedent, the next word's named-never-priced lane), the .320 login south word keeps the same line's south seat and the .319 login north word keeps the same cell's north seat, the .317 login floor word keeps the same line's floor seat and the .318 login ceiling word keeps the same cell's ceiling seat, the .315 login east word keeps the same line's east edge seat and the .316 login west word keeps the same line's west edge seat, the .297 entity id word keeps the same login line's own entity id peak seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat, the .305 echo north word keeps the setblock echo's own Z-min seat and the .308 echo south word keeps the echo's own Z-max seat (a different emitter the same cell kind prices), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login dawn's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login dawn trend (v0.976.321): the login dawn's own fade ran two steps deep - ${arc} - the dawns withdrew toward midnight, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login dawn trend (v0.976.321): the login dawn's own swell ran two steps deep - ${arc} - the dawns pressed later into the day, ${tail}`
  }
  return `the server login dawn trend (v0.976.321): the login dawn's own swing - ${arc} - the dawns traded earlier-later between the faces, ${tail}`
}
