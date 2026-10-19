// (v0.976.297) THE SERVER LOGIN'S OWN ENTITY ID MASS - the login echo's
// own entity counter the word prices across the faces. THE EVIDENCE
// (the seat the fleet-server-log artifact lane carries): the vanilla
// server's own login prints '[21:15:29] [Server thread/INFO]: F1[/
// 127.0.0.1:37486] logged in with entity id 272 at (-128.5, 73.0,
// 391.5)' (F496's own face, run 39287423190) - one print per login the
// server accepted, the entity id cell the server's own counter held at
// that login, the world's own population testimony - and no book owned
// the mass across the faces: the .278 advancement word prices the same
// console's own advancement lines, the .281/.289/.290 gc words price
// the [gc] band, the .292 fill word prices the fill echo lane, the
// .293 boot prep and the .294 boot done words price the boot
// conversation, the .295 desync word prices the WARN mismatch lane,
// the deathcause module prices the 'joined the game'/'left the game'
// lines (the sibling the same login conversation holds this word never
// prices), the dupclock book prices the duplicate-loss clock - the
// login entity id itself rode unread (the REAL five-face arc the faces
// carry: F492's logins peaked at entity id 4258, F493 at 3516, F494 at
// 4242, F495 at 3672, F496 at 4145 - the three REAL windows the arc
// holds: W1 the swing 4258 -> 3516 (-742) -> 4242 (+726), W2 the swing
// 3516 -> 4242 (+726) -> 3672 (-570), W3 the swing 4242 -> 3672 (-570)
// -> 4145 (+473) - THREE REAL WINDOWS THREE SPEAKS THE WORD BORN
// SPEAKING THREE DEEP, the world's own crowd the faces trade).
//
// GRAMMAR: the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278 word's own frame convention
// holds, the name cell the login's own who (\S+ the bare name the
// REAL F1/YardSurvey skins carry), the '[/IP:port]' socket cell byte-
// shaped, the 'logged in with entity id ' body, the N cell the proven
// integer no leading zero no sign (the .248 house law), the ' at (x,
// y, z)' tail the login's own where - the coords the proven signed
// decimal forms any precision the server's own float prints carry
// (the 73.0 one-decimal skin and the 41.47181706387992 full-precision
// skin both REAL), LINE END tail boundary (the .288 word's own
// precedent); the near-miss lanes never ride - the bot-tagged prefix,
// the missing with, the altered verb, the float id, the leading-zero
// id, the negative id, the missing tail, the integer coord, the
// double space, the leading whitespace, the trailing junk, the CR
// tail. THE SCALAR THE PEAK PRICES: the census takes the MAX entity id
// the face's logins held - the counter monotone within one boot (the
// one-boot face last==max, the REAL five faces all one boot), the max
// law the mid-face reboot's own counter reset survives (the .232 sum
// law's cousin: the face's own peak is the mass). CENSUS GUARD: zero
// fleet wiring, zero new fleet log lines - the word rides the
// reader's fold through the SECOND carrier lane the server-console
// faces ride (the argv[6..8] tail the .278 contract extends, the
// .281/.289/.290/.292/.293/.294/.295 folds the neighbours hold), the
// fleet's own console never changes.

const LOGIN_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:\d+\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login entity id census - the peak the face's logins held.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{maxEntityId: number}|null} the mass or null (non-array)
 */
export function entityIdCensus (lines) {
  if (!Array.isArray(lines)) return null
  let max = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_RE.exec(l)
    if (!m) continue
    const id = Number(m[3])
    if (id > max) max = id // the peak the counter reached - the face's own mass
  }
  return { maxEntityId: max }
}

/**
 * The fence - every face the proven non-negative integer cell.
 *
 * @param {{back: {maxEntityId: number}, prev: {maxEntityId: number}, cur: {maxEntityId: number}}} e
 * @returns {boolean}
 */
export function entityIdConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.maxEntityId) && numOk(e.prev.maxEntityId) && numOk(e.cur.maxEntityId))
}

/**
 * The login weather's own two-step shape across three faces.
 *
 * @param {{back: {maxEntityId: number}, prev: {maxEntityId: number}, cur: {maxEntityId: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function entityIdTrendRow (e) {
  if (!entityIdConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.maxEntityId
  const p = prev.maxEntityId
  const c = cur.maxEntityId
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the counter never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the .292 fill word keeps the fill echo lane, the .293 boot prep and the .294 boot done words keep the boot conversation's seats, the .295 desync word keeps the WARN mismatch lane, the deathcause module keeps the 'joined the game'/'left the game' lines (the sibling the same login conversation holds this word never prices), the dupclock book keeps the duplicate-loss clock - the login entity id mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login trend (v0.976.297): the login entity id's own fade ran two steps deep - ${arc} - the world's own crowd thinned, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login trend (v0.976.297): the login entity id's own swell ran two steps deep - ${arc} - the world's own crowd grew, ${tail}`
  }
  return `the server login trend (v0.976.297): the login entity id's own swing - ${arc} - the world's own crowd ebbed and returned between the faces, ${tail}`
}
