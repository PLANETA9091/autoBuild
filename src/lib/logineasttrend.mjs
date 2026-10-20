// (v0.976.315) THE SERVER LOGIN'S OWN EAST EDGE MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x,
// y, z)' INFO line's X cell the word prices across the faces - the
// east edge of the return positions the logins themselves rode (the
// SAME-LANE DIFFERENT-CELL LAW the echo box holds: the .297 entity id
// word prices the same line's entity counter peak, the .312 word
// prices the same line's socket port MAX hand, the .313 word prices
// the same line's socket port MIN hand, the .314 headcount word
// prices the same lines' count - the coord cells all rode shape-only
// through the four births, the float domain the .297 grammar's own
// shape holds never captured; the .306 echo east word's own
// same-cell-kind precedent the X-max hand carries - a different
// emitter the same X-max seat prices, the echo line the setblock
// conversation, this line the login conversation). THE EVIDENCE (the
// seat the vanilla server itself carries): the server's own acceptor
// prints '[22:35:50] [Server thread/INFO]:
// F1[/127.0.0.1:34166] logged in with entity id 271 at (-139.5,
// 72.0, 403.5)' (F503's own face, run 39334531367) - one print per
// login the server accepted, the X coordinate the reconnecting bot's
// own return position carried - and no book owned the EAST EDGE
// across the faces: the .297 entity id word prices the counter peak
// (its coords ride shape only), the .312/.313 words price the socket
// hands, the .314 word prices the count - the X cell itself rode
// unread (the REAL five-face arc the faces carry - byte-verified
// from the fleet-server-log artifacts, every face's logins re-sorted
// on the X cell: F501's logins reached east to X -95.3, F502 to
// -106.3, F503 to -111.3, F504 to -89.3, F505 to -80.7 - the REAL
// windows the arc holds: W1 the fade -95.3 -> -106.3 (-11) -> -111.3
// (-5), W2 the swing -106.3 -> -111.3 (-5) -> -89.3 (+22), W3 the
// swell -111.3 -> -89.3 (+22) -> -80.7 (+8.599999999999994) - THREE
// REAL WINDOWS THREE SPEAKS the word born speaking three deep, the
// return-position weather the faces trade - F505's crowd pressed
// furthest east, F503's calm face the furthest west the arc holds;
// the X floor hand rides unread beside (the west edge the
// .306/.309 pair's own law names for a future word), the Y and Z
// cells ride shape-only beside (the same-line different-cell law the
// four sibling births hold)).
//
// GRAMMAR: the .312 login port word's own frame byte-exact (the
// same-line sibling hand the precedent holds - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293 INFO frame
// convention holds, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the proven integer capture - no leading
// zero no plus (the .248 house law), the 'logged in with entity id '
// body, the entity id cell never re-captured (the double-count
// skin), the ' at (x, y, z)' tail with the X cell upgraded to the
// proven float capture - the '-?\d+\.\d+' shape the .297 grammar
// holds now taken (the .295 destroy-mismatch coord law's own signed
// domain, the decimal point the float domain always prints), the Y
// and Z cells shape-only (the double-count skin never rides), LINE
// END tail boundary (the .288 precedent)); the near-miss lanes never
// ride - the bot-tagged prefix (the fleet log's own skin - the
// server console never wears it), the WARN frame, the pretty
// spacing, the plural body, the altered verb, the missing port
// cell, the float port, the leading-zero port, the plus port, the
// integer coord (no decimal point), the leading whitespace, the
// trailing junk, the CR tail. THE SCALAR THE EAST EDGE PRICES: the
// census takes the MAX X the face's logins rode (the MAX hand the
// .306 echo east word's own same-cell-kind precedent holds on the
// signed float domain), the fence the proven finite number cells
// (the signed float domain the .295 coord law holds - the .289
// maxPause law's own decimal fence the float branch extends), the
// no-login face the lawful zero (the null-sentinel the .307 floor
// law's own min hand and the .306 east hand both hold - the
// three-face zero the lawful silence). CENSUS GUARD: zero fleet
// wiring, zero new fleet log lines - the word rides the reader's
// fold through the SECOND carrier lane the server-console faces
// ride (the argv[6..8] tail the .278 contract extends, the .281
// through .314 folds the neighbours hold), the fleet's own console
// never changes.

const LOGIN_PORT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \((-?\d+\.\d+), -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login east census - the east edge the face's logins rode (the
 * return positions' own east hand - the X cell the four sibling
 * births rode shape-only).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxLoginX: number}|null} the mass or null (non-array)
 */
export function loginEastCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_PORT_RE.exec(l)
    if (!m) continue
    const x = Number(m[5])
    if (max === null || x > max) max = x // the east edge the logins reached - the face's own return mass
  }
  return { maxLoginX: max === null ? 0 : max }
}

/**
 * The fence - every face the proven finite number cell (the signed
 * float domain the .295 coord law holds).
 *
 * @param {{back: {maxLoginX: number}, prev: {maxLoginX: number}, cur: {maxLoginX: number}}} e
 * @returns {boolean}
 */
export function loginEastConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => typeof n === 'number' && Number.isFinite(n)
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxLoginX) && numOk(e.prev.maxLoginX) && numOk(e.cur.maxLoginX))
}

/**
 * The login east weather's own two-step shape across three faces.
 *
 * @param {{back: {maxLoginX: number}, prev: {maxLoginX: number}, cur: {maxLoginX: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginEastTrendRow (e) {
  if (!loginEastConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxLoginX
  const p = prev.maxLoginX
  const c = cur.maxLoginX
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the edge never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .297 entity id word keeps the same login line's own entity id peak seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat - the four hands the same lines hold and the X cell none of them prices, the .306 echo east word keeps the setblock echo's own X-max seat (a different emitter the same cell kind prices), the login X floor hand rides unread (the west edge the .306/.309 pair's own law names for a future word), the Y and Z cells ride shape-only (the same-line different-cell law the four sibling births hold), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login east edge's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login east trend (v0.976.315): the login east edge's own fade ran two steps deep - ${arc} - the return positions withdrew west, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login east trend (v0.976.315): the login east edge's own swell ran two steps deep - ${arc} - the return positions pressed east, ${tail}`
  }
  return `the server login east trend (v0.976.315): the login east edge's own swing - ${arc} - the return positions traded between the faces, ${tail}`
}
