// (v0.976.318) THE SERVER LOGIN'S OWN CEILING MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x, y,
// z)' INFO line's Y cell the word prices across the faces - the
// CEILING hand the .317 floor word's own tail named and never priced
// (the SAME-CELL DIFFERENT-HAND LAW the echo box holds: the .317
// login floor word prices the same cell's MIN hand - the return
// positions' lowest ground, this word prices the MAX hand - the
// return positions' highest ground the logins rode, the two hands
// never merge; the .304/.307 echo Y ceiling/floor pair's own sibling
// precedent holds - and the .304 echo ceiling word prices the same
// cell kind on the setblock echo emitter, a different emitter the
// same Y-max seat prices). THE EVIDENCE: the server's own acceptor
// prints '[20:40:38] [Server thread/INFO]: F2[/127.0.0.1:53000]
// logged in with entity id 309 at (-123.5, 77.0, 406.5)' (F501's own
// face, run 39319100730) - one print per login the server accepted,
// the Y coordinate the reconnecting bot's own return position
// carried - and no book owned the CEILING across the faces: the Y
// cell's max hand rode unread (the REAL eight-face arc the faces
// carry - byte-verified from the fleet-server-log artifacts, every
// face's logins re-sorted on the Y cell, the census hand the mirror
// law trusts): F501's logins reached up to Y 77.0, F502 to 72.0, F503
// to 72.0, F504 to 72.0, F505 to 78.0, F506 to 80.0, F507 to 71.0,
// F508 to 75.0 - the REAL windows the arc holds: W1 the held pair
// 77.0 -> 72.0 (-5) -> 72.0 (0), W2 the held pair 72.0 -> 72.0 (0)
// -> 72.0 (0), W3 the held pair 72.0 -> 72.0 (0) -> 78.0 (+6), W4
// the swell 72.0 -> 78.0 (+6) -> 80.0 (+2), W5 the swing 78.0 ->
// 80.0 (+2) -> 71.0 (-9), W6 the swing 80.0 -> 71.0 (-9) -> 75.0
// (+4) - THREE REAL WINDOWS THREE SPEAKS the three held steps the
// family's own held law keeps honest (the .306 echo east word's own
// birth shape the sibling precedent holds - the word born speaking
// three deep), the F504->F505->F506 climb the W4 swell rides - the
// ceiling lifted two steps straight then traded the faces' own
// return-position weather; the ceiling's own speaker the faces hold
// - F1 spoke F502's and F503's and F504's and F507's ceiling, F2
// F501's, F15 F505's, F5 F506's, F17 F508's - the ceiling seat no
// single bot owns. THE CROSS-CHECK (the mirror sibling arc the same
// mining pipeline re-proved): the floor hand (Y min) the same faces
// hold matches the .317 word's REAL eight-face arc byte-exact on
// every face - the census hand the family trusts.
//
// GRAMMAR: the .315/.316/.317 login coord words' own frame
// byte-exact (the same-line sibling hands the precedent holds - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the .278/.292/.293 INFO
// frame convention, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the proven integer capture - no leading
// zero no plus (the .248 house law), the 'logged in with entity id '
// body, the entity id cell never re-captured (the double-count
// skin), the X and Z cells shape-only - the double-count skin never
// rides, the Y cell the proven float capture - the '-?\d+\.\d+'
// shape the .295 destroy-mismatch coord law's own signed domain
// holds, the decimal point the float domain always prints, the
// integer-coord skin refused, LINE END tail boundary (the .288
// precedent)); the near-miss lanes never ride - the bot-tagged
// prefix (the fleet log's own skin the server console never wears),
// the WARN frame, the pretty spacing, the plural body, the altered
// verb, the missing port cell, the float port, the leading-zero
// port, the plus port, the integer coord, the leading whitespace,
// the trailing junk, the CR tail. THE SCALAR THE CEILING PRICES: the
// census takes the MAX Y the face's logins rode (the MAX hand the
// .304 echo ceiling law's own precedent holds on the signed float
// domain - the .306 echo east word's own same-cell-kind max hand the
// mirror confirms; the null-sentinel the no-login face the lawful
// zero - the .304/.306 convention holds); the ephemeral port cells
// and the entity counters and the X/Z coord cells ride shape only -
// the ceiling hand alone prices (the capture law the
// .297/.312/.313/.314/.315/.316/.317 hands hold). CENSUS GUARD:
// zero fleet wiring, zero new fleet log lines - the word rides the
// reader's fold through the SECOND carrier lane the server-console
// faces ride (the argv[6..8] tail the .278 contract extends, the
// .281 through .317 folds the neighbours hold), the fleet's own
// console never changes.

const LOGIN_PORT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, (-?\d+\.\d+), -?\d+\.\d+\)$/

/**
 * The login ceiling census - the ceiling the face's logins rode (the
 * return positions' own Y-max hand - the .304 echo ceiling law's own
 * mirror names).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxLoginY: number}|null} the mass or null (non-array)
 */
export function loginCeilingCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_PORT_RE.exec(l)
    if (!m) continue
    const y = Number(m[5])
    if (max === null || y > max) max = y // the ceiling the logins reached - the face's own return sky
  }
  return { maxLoginY: max === null ? 0 : max }
}

/**
 * The fence - every face the proven finite number cell (the signed
 * float domain the .315 fence law holds).
 *
 * @param {{back: {maxLoginY: number}, prev: {maxLoginY: number}, cur: {maxLoginY: number}}} e
 * @returns {boolean}
 */
export function loginCeilingConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxLoginY) && numOk(e.prev.maxLoginY) && numOk(e.cur.maxLoginY))
}

/**
 * The login ceiling weather's own two-step shape across three faces.
 *
 * @param {{back: {maxLoginY: number}, prev: {maxLoginY: number}, cur: {maxLoginY: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginCeilingTrendRow (e) {
  if (!loginCeilingConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxLoginY
  const p = prev.maxLoginY
  const c = cur.maxLoginY
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the ceiling never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .317 login floor word keeps the same cell's floor seat (its census returns the Y minimum, never the ceiling, the SAME-CELL DIFFERENT-HAND LAW the echo box holds), the .315 login east word keeps the same line's east edge seat and the .316 login west word keeps the same line's west edge seat (their census returns the X cells, never the Y ceiling), the .297 entity id word keeps the same login line's own entity id peak seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat, the .304 echo ceiling word keeps the setblock echo's own Y-max seat and the .307 echo floor word keeps the echo's own Y-min seat (a different emitter the same cell kind prices), the Z cells ride shape-only (the same-line different-cell law the sibling births hold), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login ceiling's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login ceiling trend (v0.976.318): the login ceiling's own fade ran two steps deep - ${arc} - the return positions sank under their old sky, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login ceiling trend (v0.976.318): the login ceiling's own swell ran two steps deep - ${arc} - the return positions climbed higher ground, ${tail}`
  }
  return `the server login ceiling trend (v0.976.318): the login ceiling's own swing - ${arc} - the return positions traded sky between the faces, ${tail}`
}
