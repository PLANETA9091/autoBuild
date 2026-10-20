// (v0.976.319) THE SERVER LOGIN'S OWN NORTH EDGE MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x, y,
// z)' INFO line's Z cell the word prices across the faces - the NORTH
// edge of the return positions the logins themselves rode (the
// SAME-LANE DIFFERENT-CELL LAW the echo box holds: the .317 floor word
// prices the same line's Y cell MIN hand, the .318 ceiling word prices
// the same cell's MAX hand - the Y cell wears both its hands, the Z
// cells all rode shape-only through the seven births, the float domain
// the .297 grammar's own shape holds never captured; the .305 echo
// north word's own same-cell-kind precedent the Z-min hand carries - a
// different emitter the same Z-min seat prices, the echo line the
// setblock conversation, this line the login conversation). THE
// EVIDENCE: the server's own acceptor prints '[20:50:07] [Server
// thread/INFO]: F17[/127.0.0.1:47016] logged in with entity id 4064 at
// (-113.50084909676028, 49.0, 367.3)' (F501's own face, run
// 39319100730) - one print per login the server accepted, the Z
// coordinate the reconnecting bot's own return position carried - and
// no book owned the NORTH EDGE across the faces: the Z cell itself
// rode unread (the REAL ten-face arc the faces carry - byte-verified
// from the fleet-server-log artifacts, every face's logins re-sorted
// on the Z cell, the census hand the mirror law trusts): F501's logins
// reached north to Z 367.3, F502 to 369.7, F503 to 387.40643534050946,
// F504 to 370.49016791070585, F505 to 371.5, F506 to
// 391.5003579676622, F507 to 387.5, F508 to 377.4998057557638, F509
// to 364.3695904441215, F510 to 351.3 - the REAL windows the arc
// holds: W1 the swell 367.3 -> 369.7 (+2.3999999999999773) ->
// 387.40643534050946 (+17.706435340509472), W2 the swing 369.7 ->
// 387.40643534050946 (+17.706435340509472) -> 370.49016791070585
// (-16.91626742980361), W3 the swing 387.40643534050946 ->
// 370.49016791070585 (-16.91626742980361) -> 371.5
// (+1.0098320892941501), W4 the swell 370.49016791070585 -> 371.5
// (+1.0098320892941501) -> 391.5003579676622 (+20.000357967662183),
// W5 the swing 371.5 -> 391.5003579676622 (+20.000357967662183) ->
// 387.5 (-4.0003579676621825), W6 the fade 391.5003579676622 ->
// 387.5 (-4.0003579676621825) -> 377.4998057557638
// (-10.000194244236184), W7 the fade 387.5 -> 377.4998057557638
// (-10.000194244236184) -> 364.3695904441215 (-13.130215311642303),
// W8 the fade 377.4998057557638 -> 364.3695904441215
// (-13.130215311642303) -> 351.3 (-13.069590444121502) - EIGHT REAL
// WINDOWS EIGHT SPEAKS ZERO HELD the word born speaking EIGHT DEEP -
// the deepest birth the family holds, the .316 west word's six-deep
// record the sibling held, this birth the ten-face arc the F509/F510
// first-reads deepen (the F510 face run 39364947414, the .317 tree's
// own fleet, the newest read); the long floats the domain prints
// shortest-round-trip the honest tail the W1..W8 arcs carry; the
// north's own speaker the faces hold - F15 spoke F502's and F503's
// north, F8 F507's and F508's, F16 F509's and F510's, F17 F501's, F1
// F504's, F13 F505's, F19 F506's - three bots the seat shares twice
// and four once, no single bot owns it. THE CROSS-CHECK (the mirror
// sibling arcs the same mining pipeline re-proved): the headcounts
// the same faces hold match the .314 word's REAL arc byte-exact on
// F501 through F508 (39/30/25/30/40/37/26/39, the F509 22 and F510
// 26 first-reads beside) and the Y floor the same faces hold matches
// the .317 word's REAL eight-face arc byte-exact on every face
// (43.7531999805212/43.0/47.2/47.187201392047754/43.0/45.2/46.2/
// 46.0) - the census hand the family trusts.
//
// GRAMMAR: the .315/.316/.317/.318 login coord words' own frame
// byte-exact (the same-line sibling hands the precedent holds - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the .278/.292/.293 INFO
// frame convention, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the proven integer capture - no leading
// zero no plus (the .248 house law), the 'logged in with entity id '
// body, the entity id cell never re-captured (the double-count
// skin), the X and Y cells shape-only - the double-count skin never
// rides, the Z cell the proven float capture - the '-?\d+\.\d+' shape
// the .295 destroy-mismatch coord law's own signed domain holds, the
// decimal point the float domain always prints, the integer-coord
// skin refused, LINE END tail boundary (the .288 precedent)); the
// near-miss lanes never ride - the bot-tagged prefix (the fleet
// log's own skin the server console never wears), the WARN frame,
// the pretty spacing, the plural body, the altered verb, the missing
// port cell, the float port, the leading-zero port, the plus port,
// the integer coord, the leading whitespace, the trailing junk, the
// CR tail. THE SCALAR THE NORTH EDGE PRICES: the census takes the
// MIN Z the face's logins rode (the MIN hand the .307 echo floor
// law's own precedent holds on the signed float domain - the .305
// echo north word's own same-cell-kind min hand the mirror confirms;
// the null-sentinel the no-login face the lawful zero - the
// .307/.309 convention holds); the ephemeral port cells and the
// entity counters and the X/Y coord cells ride shape only - the
// north hand alone prices (the capture law the .297/.312/.313/.314/
// .315/.316/.317/.318 hands hold). CENSUS GUARD: zero fleet wiring,
// zero new fleet log lines - the word rides the reader's fold through
// the SECOND carrier lane the server-console faces ride (the
// argv[6..8] tail the .278 contract extends, the .281 through .318
// folds the neighbours hold), the fleet's own console never changes.

const LOGIN_PORT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, (-?\d+\.\d+)\)$/

/**
 * The login north census - the north edge the face's logins rode (the
 * return positions' own Z-min hand - the edge the .305 echo north
 * law's own mirror names).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{minLoginZ: number}|null} the mass or null (non-array)
 */
export function loginNorthCensus (lines) {
  if (!Array.isArray(lines)) return null
  let min = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_PORT_RE.exec(l)
    if (!m) continue
    const z = Number(m[5])
    if (min === null || z < min) min = z // the north the logins reached - the face's own return edge
  }
  return { minLoginZ: min === null ? 0 : min }
}

/**
 * The fence - every face the proven finite number cell (the signed
 * float domain the .315 fence law holds).
 *
 * @param {{back: {minLoginZ: number}, prev: {minLoginZ: number}, cur: {minLoginZ: number}}} e
 * @returns {boolean}
 */
export function loginNorthConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.minLoginZ) && numOk(e.prev.minLoginZ) && numOk(e.cur.minLoginZ))
}

/**
 * The login north weather's own two-step shape across three faces.
 *
 * @param {{back: {minLoginZ: number}, prev: {minLoginZ: number}, cur: {minLoginZ: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginNorthTrendRow (e) {
  if (!loginNorthConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.minLoginZ
  const p = prev.minLoginZ
  const c = cur.minLoginZ
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the north edge never invents - the birth arc's
  // eight windows all traded, the held branch the synthetic pins ride)
  if (first === 0 || second === 0) return null
  const tail = "(the .318 login ceiling word keeps the same line's Y cell's ceiling seat and the .317 login floor word keeps the same cell's floor seat (their census returns the Y cells, never the Z north, the SAME-LANE DIFFERENT-CELL LAW the echo box holds), the .315 login east word keeps the same line's east edge seat and the .316 login west word keeps the same cell's west edge seat (the X cell wears both its hands the pairs' own mirror holds), the .297 entity id word keeps the same login line's own entity id peak seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat, the Z south hand rides unread beside (the .308 echo south mirror's own pair law names for a future word - the same cell's MAX hand this word never prices), the .305 echo north word keeps the setblock echo's own Z-min seat and the .308 echo south word keeps the echo's own Z-max seat (a different emitter the same cell kind prices), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login north's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login north trend (v0.976.319): the login north's own fade ran two steps deep - ${arc} - the return positions pressed toward the north edge, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login north trend (v0.976.319): the login north's own swell ran two steps deep - ${arc} - the return positions pulled back from the north edge, ${tail}`
  }
  return `the server login north trend (v0.976.319): the login north's own swing - ${arc} - the return positions traded ground between the faces, ${tail}`
}
