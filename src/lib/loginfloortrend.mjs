// (v0.976.317) THE SERVER LOGIN'S OWN FLOOR MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x, y,
// z)' INFO line's Y cell the word prices across the faces - the FLOOR
// the fire-1000 tail named and never priced (the SAME-LANE
// DIFFERENT-CELL LAW the echo box holds: the .315 login east word
// prices the same line's X cell MAX hand and the .316 login west word
// prices the same cell's MIN hand - the return positions' east and
// west edges, this word prices the Y cell's floor hand - the return
// positions' lowest ground the logins rode, the ceiling hand rides
// unread beside; the .304/.307 echo Y ceiling/floor pair's own sibling
// precedent holds - and the .307 echo floor word prices the same cell
// kind on the setblock echo emitter, a different emitter the same
// Y-min seat prices). THE EVIDENCE: the server's own acceptor prints
// '[20:50:26] [Server thread/INFO]: F6[/127.0.0.1:47898] logged in
// with entity id 4154 at (-131.49961560785792, 43.7531999805212,
// 438.3)' (F501's own face, run 39319100730) - one print per login
// the server accepted, the Y coordinate the reconnecting bot's own
// return position carried - and no book owned the FLOOR across the
// faces: the Y cell itself rode unread (the REAL eight-face arc the
// faces carry - byte-verified from the fleet-server-log artifacts,
// every face's logins re-sorted on the Y cell, the census hand the
// mirror law trusts): F501's logins reached down to Y 43.7531999805212,
// F502 to 43.0, F503 to 47.2, F504 to 47.187201392047754, F505 to
// 43.0, F506 to 45.2, F507 to 46.2, F508 to 46.0 - the REAL windows
// the arc holds: W1 the swing 43.7531999805212 -> 43.0
// (-0.7531999805212024) -> 47.2 (+4.200000000000003), W2 the swing
// 43.0 -> 47.2 (+4.200000000000003) -> 47.187201392047754
// (-0.01279860795224863), W3 the fade 47.2 -> 47.187201392047754
// (-0.01279860795224863) -> 43.0 (-4.187201392047754), W4 the swing
// 47.187201392047754 -> 43.0 (-4.187201392047754) -> 45.2
// (+2.200000000000003), W5 the swell 43.0 -> 45.2
// (+2.200000000000003) -> 46.2 (+1), W6 the swing 45.2 -> 46.2 (+1)
// -> 46.0 (-0.20000000000000284) - SIX REAL WINDOWS SIX SPEAKS ZERO
// HELD the word born speaking SIX DEEP - the .316 west word's own
// record birth the sibling held, this birth the six the float domain
// honestly carries (the W1/W2/W4/W6 floats the domain prints
// shortest-round-trip, the +1 the W5 swell rides exact); the floor's
// own speaker the faces hold - F6 spoke F501's floor, F15 F502's and
// F503's, F12 F504's, F11 F505's, F10 F506's, F9 F507's, F14 F508's -
// the floor seat no single bot owns. THE CROSS-CHECK (the mirror
// sibling arcs the same mining pipeline re-proved): the west edge (X
// min) the same faces hold matches the .316 word's REAL eight-face
// arc byte-exact on every face and the east edge (X max) matches the
// .315 word's REAL five-face arc byte-exact on every shared face and
// the headcounts match the .314 word's REAL six-face arc byte-exact -
// the census hand the family trusts.
//
// GRAMMAR: the .315/.316 login coord words' own frame byte-exact (the
// same-line sibling hands the precedent holds - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293 INFO frame
// convention, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the proven integer capture - no leading
// zero no plus (the .248 house law), the 'logged in with entity id '
// body, the entity id cell never re-captured (the double-count
// skin), the X and Z cells shape-only - the double-count skin never
// rides, the Y cell the proven float capture - the '-?\d+\.\d+' shape
// the .295 destroy-mismatch coord law's own signed domain holds, the
// decimal point the float domain always prints, the integer-coord
// skin refused, LINE END tail boundary (the .288 precedent)); the
// near-miss lanes never ride - the bot-tagged prefix (the fleet
// log's own skin the server console never wears), the WARN frame,
// the pretty spacing, the plural body, the altered verb, the missing
// port cell, the float port, the leading-zero port, the plus port,
// the integer coord, the leading whitespace, the trailing junk, the
// CR tail. THE SCALAR THE FLOOR PRICES: the census takes the MIN Y
// the face's logins rode (the MIN hand the .307 echo floor law's own
// precedent holds on the signed float domain - the .309 echo west
// word's own same-cell-kind min hand the mirror confirms; the
// null-sentinel the no-login face the lawful zero - the .307/.309
// convention holds); the ephemeral port cells and the entity
// counters and the X/Z coord cells ride shape only - the floor hand
// alone prices (the capture law the .297/.312/.313/.314/.315/.316
// hands hold). CENSUS GUARD: zero fleet wiring, zero new fleet log
// lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail
// the .278 contract extends, the .281 through .316 folds the
// neighbours hold), the fleet's own console never changes.

const LOGIN_PORT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, (-?\d+\.\d+), -?\d+\.\d+\)$/

/**
 * The login floor census - the floor the face's logins rode (the
 * return positions' own Y-min hand - the ground the .307 echo floor
 * law's own mirror names).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{minLoginY: number}|null} the mass or null (non-array)
 */
export function loginFloorCensus (lines) {
  if (!Array.isArray(lines)) return null
  let min = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_PORT_RE.exec(l)
    if (!m) continue
    const y = Number(m[5])
    if (min === null || y < min) min = y // the floor the logins reached - the face's own return ground
  }
  return { minLoginY: min === null ? 0 : min }
}

/**
 * The fence - every face the proven finite number cell (the signed
 * float domain the .315 fence law holds).
 *
 * @param {{back: {minLoginY: number}, prev: {minLoginY: number}, cur: {minLoginY: number}}} e
 * @returns {boolean}
 */
export function loginFloorConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.minLoginY) && numOk(e.prev.minLoginY) && numOk(e.cur.minLoginY))
}

/**
 * The login floor weather's own two-step shape across three faces.
 *
 * @param {{back: {minLoginY: number}, prev: {minLoginY: number}, cur: {minLoginY: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginFloorTrendRow (e) {
  if (!loginFloorConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.minLoginY
  const p = prev.minLoginY
  const c = cur.minLoginY
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the floor never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .315 login east word keeps the same line's east edge seat and the .316 login west word keeps the same cell's west edge seat (their census returns the X cells, never the Y floor, the SAME-LANE DIFFERENT-CELL LAW the echo box holds), the .297 entity id word keeps the same login line's own entity id peak seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat, the .304 echo ceiling word keeps the setblock echo's own Y-max seat and the .307 echo floor word keeps the echo's own Y-min seat (a different emitter the same cell kind prices), the Y ceiling hand rides unread beside (the .304 mirror's own pair law names for a future word), the Z cells ride shape-only (the same-line different-cell law the sibling births hold), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login floor's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login floor trend (v0.976.317): the login floor's own fade ran two steps deep - ${arc} - the return positions sank toward the bedrock, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login floor trend (v0.976.317): the login floor's own swell ran two steps deep - ${arc} - the return positions climbed off the ground, ${tail}`
  }
  return `the server login floor trend (v0.976.317): the login floor's own swing - ${arc} - the return positions traded ground between the faces, ${tail}`
}
