// (v0.976.312) THE SERVER LOGIN'S OWN PORT MASS - the server console's
// own '<name>[/IP:port] logged in with entity id N at (x, y, z)' INFO
// line's socket port cell the word prices across the faces (the
// SAME-LINE DIFFERENT-CELL LAW the echo box holds: the .297 entity id
// word prices the same line's entity counter cell, this word prices
// the same line's socket port cell, the two hands never merge).
// THE EVIDENCE (the seat the vanilla server itself carries): the
// server's own acceptor prints '[23:44:55] [Server thread/INFO]:
// F15[/127.0.0.1:59934] logged in with entity id 432 at (-121.5, 78.0,
// 401.5)' (F505's own face, run 39341992087) - one print per login the
// server accepted, the ephemeral port the kernel handed that client -
// and no book owned the PORT across the faces: the .297 entity id word
// prices the same line's entity counter (its socket cell rides shape
// only - the '\d+' byte the grammar holds, never captured), the
// deathcause module prices the join/leave lines, the dupclock book
// prices the duplicate-loss churn, the .310 disconnect word prices the
// loss lane's own reason counts - the port itself rode unread (the
// REAL five-face arc the faces carry: F501's logins peaked at port
// 58954, F502 at 58868, F503 at 59334, F504 at 56186, F505 at 59934 -
// the three REAL windows the arc holds: W1 the swing 58954 -> 58868
// (-86) -> 59334 (+466), W2 the swing 58868 -> 59334 (+466) -> 56186
// (-3148), W3 the swing 59334 -> 56186 (-3148) -> 59934 (+3748) -
// THREE REAL WINDOWS THREE SWINGS THE WORD BORN SPEAKING THREE DEEP,
// the kernel's own socket weather the faces trade).
//
// GRAMMAR: the .297 login word's own frame byte-exact (the same-line
// different-cell precedent that birth holds - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293 INFO frame
// convention holds, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the .297 grammar's own shape holds with the
// port cell upgraded to the proven integer capture - no leading zero
// no plus (the .248 house law - the priced cell the proven grammar
// rides, the .295 destroy-mismatch coord law's own precedent), the
// 'logged in with entity id ' body, the entity id cell the .297
// capture's own shape holds never re-captured (the double-count
// skin), the ' at (x, y, z)' float coords shape-only (the float
// domain the .297 grammar's own shape holds), LINE END tail boundary
// (the .288 word's own precedent)); the near-miss lanes never ride -
// the bot-tagged prefix (the fleet log's own skin - the server
// console never wears it), the WARN frame, the pretty spacing, the
// plural body, the altered verb, the missing port cell, the float
// port, the leading-zero port, the plus port, the leading whitespace,
// the trailing junk, the CR tail. THE SCALAR THE PORT PRICES: the
// census takes the MAX port the face's logins rode (the MAX hand the
// .297 entity id word's own same-line precedent holds, the ephemeral
// range the kernel's own hands deal - every REAL port five digits),
// the fence the proven non-negative integer cells (the .310 fence
// law's own non-negative domain). CENSUS GUARD: zero fleet wiring,
// zero new fleet log lines - the word rides the reader's fold through
// the SECOND carrier lane the server-console faces ride (the
// argv[6..8] tail the .278 contract extends, the .281/.289/.290/.292/
// .293/.294/.295/.296/.297/.298/.299/.300/.301/.302/.303/.304/.305/
// .306/.307/.308/.309/.310 folds the neighbours hold), the fleet's own
// console never changes.

const LOGIN_PORT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login port census - the socket mass the face's logins rode
 * (the ephemeral peak the kernel dealt - the same-line different-cell
 * law's own newest hand).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxLoginPort: number}|null} the mass or null (non-array)
 */
export function loginPortCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_PORT_RE.exec(l)
    if (!m) continue
    const port = Number(m[3])
    if (port > max) max = port // the peak the kernel dealt - the face's own socket mass
  }
  return { maxLoginPort: max }
}

/**
 * The fence - every face the proven non-negative integer cell (the
 * port domain the .310 fence law's own non-negative branch holds).
 *
 * @param {{back: {maxLoginPort: number}, prev: {maxLoginPort: number}, cur: {maxLoginPort: number}}} e
 * @returns {boolean}
 */
export function loginPortConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxLoginPort) && numOk(e.prev.maxLoginPort) && numOk(e.cur.maxLoginPort))
}

/**
 * The login port weather's own two-step shape across three faces.
 *
 * @param {{back: {maxLoginPort: number}, prev: {maxLoginPort: number}, cur: {maxLoginPort: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginPortTrendRow (e) {
  if (!loginPortConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxLoginPort
  const p = prev.maxLoginPort
  const c = cur.maxLoginPort
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the socket mass never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .297 entity id word keeps the same login line's own entity id cell (the sibling hand the same bracket pair holds - co-existence by cell never by duplication, the SAME-LINE DIFFERENT-CELL LAW the echo box holds), the socket cell's own min hand rides unread (the REAL five-face arc 33168/33720/34166/33176/33136 the same logins carry - a lane the tail names and never prices), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own reason counts, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login port mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login port trend (v0.976.312): the login port's own fade ran two steps deep - ${arc} - the kernel's sockets receded, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login port trend (v0.976.312): the login port's own swell ran two steps deep - ${arc} - the kernel's sockets crowded, ${tail}`
  }
  return `the server login port trend (v0.976.312): the login port's own swing - ${arc} - the kernel traded its sockets between the faces, ${tail}`
}
