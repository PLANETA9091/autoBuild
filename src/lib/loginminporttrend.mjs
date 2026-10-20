// (v0.976.313) THE SERVER LOGIN'S OWN MIN PORT MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x,
// y, z)' INFO line's socket port cell the word prices across the
// faces - the MIN hand the .312 word's own tail named and never
// priced (the SAME-CELL DIFFERENT-HAND LAW the echo box holds: the
// .312 login port word prices the same cell's MAX hand - the kernel's
// peak socket, this word prices the MIN hand - the kernel's floor
// socket, the two hands never merge; the .304/.307 Y ceiling/floor
// pair and the .306/.309 X east/west pair's own sibling precedent
// holds). THE EVIDENCE (the seat the vanilla server itself carries):
// the server's own acceptor prints '[20:47:46] [Server thread/INFO]:
// F19[/127.0.0.1:33168] logged in with entity id 3417 at
// (-110.53468971052328, 50.0, 412.3)' (F501's own face, run
// 39319100730) - one print per login the server accepted, and the
// port cell's own floor hand rode unread while the MAX hand priced:
// the REAL five-face arc the faces carry (byte-verified from the
// fleet-server-log artifacts - every face's logins re-sorted, the
// min-port line read byte-exact): F501's logins floored at port
// 33168, F502 at 33720, F503 at 34166, F504 at 33176, F505 at 33136
// - the REAL windows the arc holds: W1 the swell 33168 -> 33720
// (+552) -> 34166 (+446), W2 the swing 33720 -> 34166 (+446) ->
// 33176 (-990), W3 the fade 34166 -> 33176 (-990) -> 33136 (-40) -
// THREE REAL WINDOWS THREE SPEAKS the word born speaking three deep,
// the kernel's own floor-socket weather the faces trade; the min
// hand's own speaker the faces hold - F19 spoke F501's and F505's
// floors, F10 F502's, F1 F503's, YardSurvey F504's - the floor seat
// no single bot owns (the sibling hands the same ephemeral range
// trades).
//
// GRAMMAR: the .312 login port word's own frame byte-exact (the
// same-cell sibling hand the precedent holds - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293 INFO frame
// convention holds, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the proven integer capture - no leading
// zero no plus (the .248 house law), the 'logged in with entity id '
// body, the entity id cell never re-captured (the double-count
// skin), the ' at (x, y, z)' float coords shape-only, LINE END tail
// boundary (the .288 precedent)); the near-miss lanes never ride -
// the bot-tagged prefix (the fleet log's own skin - the server
// console never wears it), the WARN frame, the pretty spacing, the
// plural body, the altered verb, the missing port cell, the float
// port, the leading-zero port, the plus port, the leading
// whitespace, the trailing junk, the CR tail. THE SCALAR THE MIN
// PRICES: the census takes the MIN port the face's logins rode (the
// MIN hand the .307 floor word's own null-sentinel precedent holds -
// the face whose lines carry no login is the lawful zero, the
// three-face zero the lawful silence), the fence the proven
// non-negative integer cells (the .310 fence law's own non-negative
// domain). CENSUS GUARD: zero fleet wiring, zero new fleet log
// lines - the word rides the reader's fold through the SECOND
// carrier lane the server-console faces ride (the argv[6..8] tail
// the .278 contract extends, the .281 through .312 folds the
// neighbours hold), the fleet's own console never changes.

const LOGIN_PORT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login min port census - the socket floor the face's logins
 * rode (the ephemeral low the kernel dealt - the same cell's own
 * min hand the .312 tail named).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{minLoginPort: number}|null} the mass or null (non-array)
 */
export function loginMinPortCensus (lines) {
  if (!Array.isArray(lines)) return null
  let min = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_PORT_RE.exec(l)
    if (!m) continue
    const port = Number(m[3])
    if (min === null || port < min) min = port // the floor the kernel dealt - the face's own socket floor
  }
  return { minLoginPort: min === null ? 0 : min }
}

/**
 * The fence - every face the proven non-negative integer cell (the
 * port domain the .310 fence law's own non-negative branch holds).
 *
 * @param {{back: {minLoginPort: number}, prev: {minLoginPort: number}, cur: {minLoginPort: number}}} e
 * @returns {boolean}
 */
export function loginMinPortConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.minLoginPort) && numOk(e.prev.minLoginPort) && numOk(e.cur.minLoginPort))
}

/**
 * The login min port weather's own two-step shape across three faces.
 *
 * @param {{back: {minLoginPort: number}, prev: {minLoginPort: number}, cur: {minLoginPort: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginMinPortTrendRow (e) {
  if (!loginMinPortConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.minLoginPort
  const p = prev.minLoginPort
  const c = cur.minLoginPort
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the socket floor never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .312 login port word keeps the same cell's own MAX seat - the sibling hand above (its census returns the ephemeral peak, never the floor - the SAME-CELL DIFFERENT-HAND LAW the .304/.307 Y pair and the .306/.309 X pair hold), the .297 entity id word keeps the same login line's own entity id cell (the same-line different-cell hand the same bracket pair holds), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login min port mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login min port trend (v0.976.313): the min port's own fade ran two steps deep - ${arc} - the kernel's floor sockets receded, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login min port trend (v0.976.313): the min port's own swell ran two steps deep - ${arc} - the kernel's floor sockets crowded, ${tail}`
  }
  return `the server login min port trend (v0.976.313): the min port's own swing - ${arc} - the kernel traded its floor sockets between the faces, ${tail}`
}
