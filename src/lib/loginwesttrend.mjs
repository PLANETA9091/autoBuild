// (v0.976.316) THE SERVER LOGIN'S OWN WEST EDGE MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x, y,
// z)' INFO line's X cell the word prices across the faces - the WEST
// edge the .315 word's own tail named and never priced (the
// SAME-CELL DIFFERENT-HAND LAW the echo box holds: the .315 login
// east word prices the same cell's MAX hand - the return positions'
// east edge, this word prices the MIN hand - the return positions'
// west edge, the two hands never merge; the .304/.307 Y ceiling/floor
// pair and the .305/.308 Z north/south pair and the .306/.309 X
// east/west pair's own sibling precedent holds - and the .309 echo
// west word prices the same cell kind on the setblock echo emitter,
// a different emitter the same X-min seat prices). THE EVIDENCE: the
// server's own acceptor prints '[20:49:49] [Server thread/INFO]:
// F12[/127.0.0.1:49058] logged in with entity id 4016 at
// (-173.34762934529394, 65.02442408821369, 416.06112547909356)'
// (F501's own face, run 39319100730) - one print per login the server
// accepted, the X coordinate the reconnecting bot's own return
// position carried - and the X floor rode unread while the .315
// sibling priced the same cell's ceiling: the REAL eight-face arc the
// faces carry (byte-verified from the fleet-server-log artifacts,
// every face's logins re-sorted on the X cell, the census hand the
// mirror law trusts): F501's logins reached west to X
// -173.34762934529394, F502 to -145.7, F503 to -157.07857451117061,
// F504 to -125.7, F505 to -195.63148831977773, F506 to -149.7, F507
// to -156.54694911648963, F508 to -143.13065092268548 - the REAL
// windows the arc holds: W1 the swing -173.34762934529394 -> -145.7
// (+27.64762934529395) -> -157.07857451117061 (-11.378574511170626),
// W2 the swing -145.7 -> -157.07857451117061 (-11.378574511170626) ->
// -125.7 (+31.378574511170612), W3 the swing
// -157.07857451117061 -> -125.7 (+31.378574511170612) ->
// -195.63148831977773 (-69.93148831977773), W4 the swing -125.7 ->
// -195.63148831977773 (-69.93148831977773) -> -149.7
// (+45.93148831977774), W5 the swing -195.63148831977773 -> -149.7
// (+45.93148831977774) -> -156.54694911648963 (-6.84694911648964), W6
// the swing -149.7 -> -156.54694911648963 (-6.84694911648964) ->
// -143.13065092268548 (+13.416298193804153) - SIX REAL WINDOWS SIX
// SWINGS ZERO HELD the word born speaking SIX DEEP - the deepest
// birth the family holds, every window traded the return-position
// weather the faces trade (the .308 echo south word's five-swing
// birth the record the sibling held, this birth the six the newest
// faces F506/F507/F508 the arc carries deepened - the fire-0743 law
// the F505+ re-voice keeps lawful and the F507/F508 first-reads the
// arc's own newest windows hold); the west edge's own speaker the
// faces hold - F12 spoke F501's and F506's west, F9 F505's, F8
// F507's, F2 F508's - the edge seat no single bot owns. THE
// CROSS-CHECK (the mirror sibling arc the same mining pipeline
// re-proved): the east edge (X max) the same faces hold - F501 -95.3,
// F502 -106.3, F503 -111.3, F504 -89.3, F505 -80.7 - match the .315
// word's REAL five-face arc byte-exact on every shared face, the
// census hand the family trusts.
//
// GRAMMAR: the .315 login east word's own frame byte-exact (the
// same-cell sibling hand the precedent holds - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293 INFO frame
// convention, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the proven integer capture - no leading
// zero no plus (the .248 house law), the 'logged in with entity id '
// body, the entity id cell never re-captured (the double-count
// skin), the X cell the proven float capture - the '-?\d+\.\d+' shape
// the .295 destroy-mismatch coord law's own signed domain holds, the
// decimal point the float domain always prints, the integer-coord
// skin refused, the Y and Z cells shape-only - the double-count skin
// never rides, LINE END tail boundary (the .288 precedent)); the
// near-miss lanes never ride - the bot-tagged prefix (the fleet
// log's own skin the server console never wears), the WARN frame,
// the pretty spacing, the plural body, the altered verb, the missing
// port cell, the float port, the leading-zero port, the plus port,
// the integer coord, the leading whitespace, the trailing junk, the
// CR tail. THE SCALAR THE WEST EDGE PRICES: the census takes the MIN
// X the face's logins rode (the MIN hand the .307 floor law's own
// precedent holds on the signed float domain - the .309 echo west
// word's own same-cell-kind min hand the mirror confirms; the
// null-sentinel the no-login face the lawful zero - the .309/.315
// convention holds); the ephemeral port cells and the entity
// counters and the Y/Z coord cells ride shape only - the west hand
// alone prices (the capture law the .297/.312/.313/.314/.315 hands
// hold). CENSUS GUARD: zero fleet wiring, zero new fleet log lines -
// the word rides the reader's fold through the SECOND carrier lane
// the server-console faces ride (the argv[6..8] tail the .278
// contract extends, the .281 through .315 folds the neighbours
// hold), the fleet's own console never changes.

const LOGIN_PORT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \((-?\d+\.\d+), -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login west census - the west edge the face's logins rode (the
 * return positions' own west hand - the X floor the .315 sibling's
 * own tail named).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{minLoginX: number}|null} the mass or null (non-array)
 */
export function loginWestCensus (lines) {
  if (!Array.isArray(lines)) return null
  let min = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_PORT_RE.exec(l)
    if (!m) continue
    const x = Number(m[5])
    if (min === null || x < min) min = x // the west edge the logins reached - the face's own return floor
  }
  return { minLoginX: min === null ? 0 : min }
}

/**
 * The fence - every face the proven finite number cell (the signed
 * float domain the .315 fence law holds).
 *
 * @param {{back: {minLoginX: number}, prev: {minLoginX: number}, cur: {minLoginX: number}}} e
 * @returns {boolean}
 */
export function loginWestConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.minLoginX) && numOk(e.prev.minLoginX) && numOk(e.cur.minLoginX))
}

/**
 * The login west weather's own two-step shape across three faces.
 *
 * @param {{back: {minLoginX: number}, prev: {minLoginX: number}, cur: {minLoginX: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginWestTrendRow (e) {
  if (!loginWestConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.minLoginX
  const p = prev.minLoginX
  const c = cur.minLoginX
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the edge never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .315 login east word keeps the same cell's east edge seat - the west edge's own mirror sibling hand (its census returns the X maximum, never the floor, the SAME-CELL DIFFERENT-HAND LAW the echo box holds), the .297 entity id word keeps the same login line's own entity id peak seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat, the .306 echo east word keeps the setblock echo's own X-max seat and the .309 echo west word keeps the echo's own X-min seat (a different emitter the same cell kind prices), the Y and Z cells ride shape-only (the same-line different-cell law the sibling births hold), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login west edge's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login west trend (v0.976.316): the login west edge's own fade ran two steps deep - ${arc} - the return positions withdrew west, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login west trend (v0.976.316): the login west edge's own swell ran two steps deep - ${arc} - the return positions pressed east, ${tail}`
  }
  return `the server login west trend (v0.976.316): the login west edge's own swing - ${arc} - the return positions traded between the faces, ${tail}`
}
