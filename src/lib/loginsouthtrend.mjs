// (v0.976.320) THE SERVER LOGIN'S OWN SOUTH EDGE MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x, y,
// z)' INFO line's Z cell the word prices across the faces - the SOUTH
// hand the .319 north word's own tail named and never priced (the
// SAME-CELL DIFFERENT-HAND LAW the echo box holds: the .319 login
// north word prices the same cell's MIN hand - the return positions'
// north edge, this word prices the MAX hand - the return positions'
// south edge the logins rode, the two hands never merge; the
// .305/.308 echo Z north/south pair's own sibling precedent holds -
// and the .308 echo south word prices the same cell kind on the
// setblock echo emitter, a different emitter the same Z-max seat
// prices). THE EVIDENCE: the server's own acceptor prints
// '[20:48:57] [Server thread/INFO]: F8[/127.0.0.1:36726] logged in
// with entity id 3764 at (-122.49999930994368, 62.7967356006687,
// 439.7)' (F501's own face, run 39319100730) - one print per login
// the server accepted, the Z coordinate the reconnecting bot's own
// return position carried - and no book owned the SOUTH EDGE across
// the faces: the Z cell's max hand rode unread (the REAL ten-face arc
// the faces carry - byte-verified from the fleet-server-log
// artifacts, every face's logins re-sorted on the Z cell, the census
// hand the mirror law trusts): F501's logins reached south to Z
// 439.7, F502 to 410.3, F503 to 409.5, F504 to 406.7, F505 to 432.7,
// F506 to 420.17018125938336, F507 to 408.67004669518434, F508 to
// 413.3, F509 to 415.5, F510 to 402.5 - the REAL windows the arc
// holds: W1 the fade 439.7 -> 410.3 (-29.399999999999977) -> 409.5
// (-0.8000000000000114), W2 the fade 410.3 -> 409.5
// (-0.8000000000000114) -> 406.7 (-2.8000000000000114), W3 the swing
// 409.5 -> 406.7 (-2.8000000000000114) -> 432.7 (+26), W4 the swing
// 406.7 -> 432.7 (+26) -> 420.17018125938336 (-12.529818740616633),
// W5 the fade 432.7 -> 420.17018125938336 (-12.529818740616633) ->
// 408.67004669518434 (-11.500134564199016), W6 the swing
// 420.17018125938336 -> 408.67004669518434 (-11.500134564199016) ->
// 413.3 (+4.629953304815672), W7 the swell 408.67004669518434 ->
// 413.3 (+4.629953304815672) -> 415.5 (+2.1999999999999886), W8 the
// swing 413.3 -> 415.5 (+2.1999999999999886) -> 402.5 (-13) - EIGHT
// REAL WINDOWS EIGHT SPEAKS ZERO HELD the word born speaking EIGHT
// DEEP the .319 north word's own record birth the sibling held (the
// long floats the domain prints shortest-round-trip the honest tail
// the W1-W6 arcs carry, the +26 the W3 swing rides exact); the south
// edge's own speaker the faces hold - F8 spoke F501's and F507's
// south, F2 F502's, F13 F503's, F12 F504's, F6 F505's, F1 F506's,
// F19 F508's, F5 F509's, F11 F510's - the south seat no single bot
// owns. THE CROSS-CHECK (the mirror sibling arc the same mining
// pipeline re-proved): the north edge (Z min) the same faces hold
// matches the .319 word's REAL ten-face arc byte-exact on every face
// (367.3/369.7/387.40643534050946/370.49016791070585/371.5/
// 391.5003579676622/387.5/377.4998057557638/364.3695904441215/351.3)
// - the census hand the family trusts.
//
// GRAMMAR: the .315/.316/.317/.318/.319 login coord words' own frame
// byte-exact (the same-line sibling hands the precedent holds - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the .278/.292/.293 INFO
// frame convention, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the proven integer capture - no leading
// zero no plus (the .248 house law), the 'logged in with entity id '
// body, the entity id cell never re-captured (the double-count
// skin), the X and Y cells shape-only - the double-count skin never
// rides, the Z cell the proven float capture - the '-?\d+\.\d+'
// shape the .295 destroy-mismatch coord law's own signed domain
// holds, the decimal point the float domain always prints, the
// integer-coord skin refused, LINE END tail boundary (the .288
// precedent)); the near-miss lanes never ride - the bot-tagged
// prefix (the fleet log's own skin the server console never wears),
// the WARN frame, the pretty spacing, the plural body, the altered
// verb, the missing port cell, the float port, the leading-zero
// port, the plus port, the integer coord, the leading whitespace,
// the trailing junk, the CR tail. THE SCALAR THE SOUTH EDGE PRICES:
// the census takes the MAX Z the face's logins rode (the MAX hand
// the .308 echo south law's own precedent holds on the signed float
// domain - the .306 echo east word's own same-cell-kind max hand the
// mirror confirms; the null-sentinel the no-login face the lawful
// zero - the .304/.306 convention holds); the ephemeral port cells
// and the entity counters and the X/Y coord cells ride shape only -
// the south hand alone prices (the capture law the
// .297/.312/.313/.314/.315/.316/.317/.318/.319 hands hold). CENSUS
// GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281 through .319 folds the neighbours hold), the
// fleet's own console never changes.

const LOGIN_PORT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, (-?\d+\.\d+)\)$/

/**
 * The login south census - the south edge the face's logins rode (the
 * return positions' own Z-max hand - the .308 echo south law's own
 * mirror names).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxLoginZ: number}|null} the mass or null (non-array)
 */
export function loginSouthCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_PORT_RE.exec(l)
    if (!m) continue
    const z = Number(m[5])
    if (max === null || z > max) max = z // the south edge the logins reached - the face's own return south
  }
  return { maxLoginZ: max === null ? 0 : max }
}

/**
 * The fence - every face the proven finite number cell (the signed
 * float domain the .315 fence law holds).
 *
 * @param {{back: {maxLoginZ: number}, prev: {maxLoginZ: number}, cur: {maxLoginZ: number}}} e
 * @returns {boolean}
 */
export function loginSouthConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxLoginZ) && numOk(e.prev.maxLoginZ) && numOk(e.cur.maxLoginZ))
}

/**
 * The login south weather's own two-step shape across three faces.
 *
 * @param {{back: {maxLoginZ: number}, prev: {maxLoginZ: number}, cur: {maxLoginZ: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginSouthTrendRow (e) {
  if (!loginSouthConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxLoginZ
  const p = prev.maxLoginZ
  const c = cur.maxLoginZ
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the south edge never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .319 login north word keeps the same cell's north seat (its census returns the Z minimum, never the south edge, the SAME-CELL DIFFERENT-HAND LAW the echo box holds), the .317 login floor word keeps the same line's floor seat and the .318 login ceiling word keeps the same cell's ceiling seat (their census returns the Y cells), the .315 login east word keeps the same line's east edge seat and the .316 login west word keeps the same line's west edge seat (their census returns the X cells), the .297 entity id word keeps the same login line's own entity id peak seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat, the .305 echo north word keeps the setblock echo's own Z-min seat and the .308 echo south word keeps the echo's own Z-max seat (a different emitter the same cell kind prices), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login south edge's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login south trend (v0.976.320): the login south edge's own fade ran two steps deep - ${arc} - the return positions withdrew north, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login south trend (v0.976.320): the login south edge's own swell ran two steps deep - ${arc} - the return positions pressed south, ${tail}`
  }
  return `the server login south trend (v0.976.320): the login south edge's own swing - ${arc} - the return positions traded north-south between the faces, ${tail}`
}
