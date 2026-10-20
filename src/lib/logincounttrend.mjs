// (v0.976.314) THE SERVER LOGIN'S OWN HEADCOUNT MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x, y,
// z)' INFO line the word prices across the faces - the COUNT hand the
// same login line family carries (the SAME-LINE DIFFERENT-CELL LAW the
// echo box holds: the .297 entity id word prices the same line's
// entity counter cell, the .312 port word prices the same line's
// socket port cell's MAX hand, the .313 min port word prices the same
// cell's MIN hand - this word prices the face's own login HEADCOUNT,
// the how-many-joins scalar the line family's own mass holds, the
// fourth hand the same lines carry and no hand priced). THE EVIDENCE
// (the seat the vanilla server itself carries): the server's own
// acceptor prints '[20:40:21] [Server thread/INFO]:
// YardSurvey[/127.0.0.1:48142] logged in with entity id 17 at
// (-129.5, 70.0, 398.5)' (F501's own face, run 39319100730) - one
// print per login the server accepted, and the print's own COUNT rode
// unread while the entity counter (.297) and the socket's MAX (.312)
// and MIN (.313) hands priced: the REAL six-face arc the faces carry
// (byte-verified from the fleet-server-log artifacts - every face's
// console re-counted, the census hand the mirror law trusts):
// F501's console voiced 39 logins, F502 30, F503 25, F504 30, F505
// 40, F506 37 - the REAL windows the arc holds: W1 the fade 39 -> 30
// (-9) -> 25 (-5), W2 the swing 30 -> 25 (-5) -> 30 (+5), W3 the
// swell 25 -> 30 (+5) -> 40 (+10), W4 the swing 30 -> 40 (+10) -> 37
// (-3) - FOUR REAL WINDOWS FOUR SPEAKS the word born speaking four
// deep, the fleet's own join weather the faces trade; the F506 face
// (run 39349450602, the .310 tree's own fleet) the newest face the
// arc carries - the fire-0743 law the F505+ re-voice keeps lawful and
// the F506 first-read the arc's own newest window holds.
//
// GRAMMAR: the .312 login port word's own frame byte-exact (the same
// line family's own precedent the .313 sibling birth holds - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the .278/.292/.293 INFO
// frame convention, the \S+ name cell the who-byte law rides, the
// '[/IP:port]' socket cell the proven integer capture - no leading
// zero no plus (the .248 house law), the 'logged in with entity id '
// body, the entity id cell the .297 capture's own shape holds never
// re-captured (the double-count skin), the ' at (x, y, z)' float
// coords shape-only (the float domain the .312 grammar's own shape
// holds), LINE END tail boundary (the .288 precedent)); the near-miss
// lanes never ride - the bot-tagged prefix (the fleet log's own skin
// the server console never wears), the WARN frame, the pretty
// spacing, the plural body, the altered verb, the missing port cell,
// the float port, the leading-zero port, the plus port, the leading
// whitespace, the trailing junk, the CR tail. THE SCALAR THE LOGIN
// COUNT PRICES: the census counts the face's login lines whole (the
// .232 count law - the count never caps, the .311 Timed out count's
// own precedent the count family holds); the ephemeral port cells and
// the entity counters and the float coords ride shape only - the
// count hand alone prices (the capture law the .297/.312/.313 hands
// hold: the bigger scalar the shape-only cells keep, the count wins).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281 through .313 folds the neighbours hold), the
// fleet's own console never changes.

const LOGIN_COUNT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login count census - the join mass the face's console voiced
 * (the headcount the line family's own print holds - the fourth hand
 * the same lines carry).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{logins: number}|null} the mass or null (non-array)
 */
export function loginCountCensus (lines) {
  if (!Array.isArray(lines)) return null
  let n = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (LOGIN_COUNT_RE.test(l)) n++ // the join the server voiced - the headcount the face holds
  }
  return { logins: n }
}

/**
 * The fence - every face the proven non-negative integer cell (the
 * count domain the .311 Timed out count's own integer fence law
 * holds).
 *
 * @param {{back: {logins: number}, prev: {logins: number}, cur: {logins: number}}} e
 * @returns {boolean}
 */
export function loginCountConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.logins) && numOk(e.prev.logins) && numOk(e.cur.logins))
}

/**
 * The login headcount weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {logins: number}, prev: {logins: number}, cur: {logins: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginCountTrendRow (e) {
  if (!loginCountConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.logins
  const p = prev.logins
  const c = cur.logins
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the join mass never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .312 port word keeps the same lines' MAX socket seat and the .313 min port word keeps the MIN seat (the sibling hands the same bracket pair holds - the count never prices ports, the SAME-CELL DIFFERENT-HAND LAW the echo box holds), the .297 entity id word keeps the same line's entity counter cell, the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own reason counts, the .311 timed out word keeps the stalled-drop seat, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login headcount row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login count trend (v0.976.314): the login headcount's own fade ran two steps deep - ${arc} - the fleet's joins receded each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login count trend (v0.976.314): the login headcount's own swell ran two steps deep - ${arc} - the fleet's joins crowded each face, ${tail}`
  }
  return `the server login count trend (v0.976.314): the login headcount's own swing - ${arc} - the fleet traded its joins between the faces, ${tail}`
}
