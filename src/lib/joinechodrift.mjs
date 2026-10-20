// (v0.976.336) THE JOIN ECHO'S OWN SECOND - the server console's own
// '<name> joined the game' INFO line the word prices across the faces
// - the JOIN ECHO line's own CLOCK cell (the wall-clock the vanilla
// server stamps the join echo with, seconds since midnight) named and
// never priced before this word (the deathcause module keeps the
// join/leave LINES as counts, the .314 login count word keeps the
// join MASS, the .321/.322 login dawn/dusk words price the LOGIN
// line's own clock cell's edges - the echo line's own clock cell rode
// unread). THE PAIR-IDENTITY BASELINE: the join echo never rides
// alone - each echo is preceded by its own login line ('<name>[/
// 127.0.0.1:port] logged in with entity id N at (x, y, z)') and rides
// the SAME second the login rides, the pair law the audit re-voices
// 804/806 across the REAL TWENTY-FOUR-face harvest (the fire-0043
// harvest, the artifact IDs byte-agree the ledger: F501 12220643212
// through F524 12281658370) - THE DRIFT HAND: on TWO faces the echo
// spoke its OWN second one later than the login's (F501's own face
// the proof: 'F4 logged in' 20:40:42 = 74442, 'F4 joined the game'
// 20:40:43 = 74443 - the echo one second later; F518's own face: 'F13
// logged in' 10:12:22 = 36742, 'F13 joined the game' 10:12:23 =
// 36743) - the census prices the DRIFT MASS: the count of echoes
// whose clock cell differs from their paired login's clock (the
// nearest preceding login of the same name the pair law keeps; an
// echo with no login pair at all rides the drift too - it spoke
// without its pair - never observed in the faces the honest
// degenerate the pins keep). THE ECHO-FOLLOWS LAW: the drift is never
// EARLIER - the echo's second is the login's second or one later
// (806/806 the audit keeps, both drift faces speak +1, the server
// never stamps the echo before the login). THE DAWN/DUSK HANDS
// DECLINED: the echo's own earlier edge (the first echo's clock)
// byte-equals the .321 login dawn word's arc 24/24 and the echo's own
// later edge (the last echo's clock) byte-equals the .322 login dusk
// word's arc 24/24 (the SAME-CELL DIFFERENT-HAND LAW the .294/.324
// Done-ms pair and the .328/.329 set dawn-dusk pair and the
// .333/.334 loss dusk-dawn pair the family holds - the echo's edges
// ride the login pair's own seconds, the DRIFT hand the cell's only
// live voice this word prices). THE EVIDENCE: the REAL
// TWENTY-FOUR-face drift arc byte-verified from the fleet-server-log
// artifacts: F501's face drifted 1, F502 through F517 rode the
// pair-identity silence, F518's face drifted 1, F519 through F524
// rode the silence again - the census prices
// 1/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/0/1/0/0/0/0/0/0 - TWENTY-TWO REAL
// WINDOWS ONE SPEAK TWENTY-ONE HELD (the W17 window the swing 0 ->
// 1 (+1) -> 0 (-1) - the F518 face's own drift the window carries,
// the sparse arc the .311 timed out mass's own rare-speak precedent
// keeps, the lawful zero the .304/.306 convention holds - the churn
// face F524's own seventy logins all rode the pair-identity silence
// the mass re-voices). THE ORDERING: the echo never precedes its
// login (the pairing walks the lines in order, the nearest preceding
// same-name login the pair keeps). THE FENCE: the count words' own
// law (Number.isInteger plus the non-negative bounds, the drift
// never exceeding the join count it rides).
//
// GRAMMAR: the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.292/.293/.310/.333 INFO
// frame convention holds, the '<name> joined the game' body the
// emitter's own skin (the name cell rides shape only the .321 login
// word's own \S+ shape law keeps, the PRICED clock cell zero-padded
// fixed fields hour 00-23 minute 00-59 second 00-59 the emitter's own
// shape - the leading zeros the F506 00:57:20 face's own hour rides),
// LINE END tail boundary (the .288 precedent); the near-miss lanes
// never ride - nineteen skins refused (the bare body, the WARN frame,
// the ServerMain frame, the pretty spacing, the missing name, the
// trailing period, the altered verb, the plural body, the lowercase
// body, the leading whitespace, the trailing junk, the CR tail, the
// 1-digit hour clock, the overflow second clock, the dash-separator
// clock, the missing clock, the double-space name gap, the login
// line's own skin, the leave sibling's own skin). THE PAIRING
// GRAMMAR: the login line the .321 login dawn word's own grammar
// byte-exact ('<name>[/IP:port] logged in with entity id N at
// (x, y, z)' - the IP and port and entity id and coordinate cells
// ride shape only, the pair's own skin the .321 word keeps). CENSUS
// GUARD: zero fleet wiring, zero new fleet log lines - the word rides
// the reader's fold through the SECOND carrier lane the server-console
// faces ride (the argv[6..8] tail the .278 contract extends, the
// .281 through .334 folds the neighbours hold), the fleet's own
// console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const LOGIN_PAIR_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The join echo drift census - the count of '<name> joined the game'
 * echoes whose clock cell differs from their paired login line's own
 * clock (the nearest preceding login of the same name), the DRIFT MASS
 * the cell's own live voice; the join count rides beside (the .314
 * word's own mass the co-existence seat keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{joinEchoCount: number, joinEchoDrift: number}|null} the mass or null (non-array)
 */
export function joinEchoDriftCensus (lines) {
  if (!Array.isArray(lines)) return null
  const lastLogin = new Map()
  let count = 0
  let drift = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    let m = LOGIN_PAIR_RE.exec(l)
    if (m) {
      lastLogin.set(m[4], Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])) // the nearest preceding login the pair law keeps
      continue
    }
    m = JOIN_ECHO_RE.exec(l)
    if (m) {
      count++
      const clock = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
      const name = m[4]
      if (!lastLogin.has(name) || lastLogin.get(name) !== clock) drift++ // the echo spoke its own second (or without its pair)
    }
  }
  return { joinEchoCount: count, joinEchoDrift: drift }
}

/**
 * The fence - the count words' own integer law: the drift never
 * exceeds the join count it rides, both non-negative.
 *
 * @param {{back: {joinEchoCount: number, joinEchoDrift: number}, prev: {joinEchoCount: number, joinEchoDrift: number}, cur: {joinEchoCount: number, joinEchoDrift: number}}} e
 * @returns {boolean}
 */
export function joinEchoDriftConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (c) => Number.isInteger(c.joinEchoCount) && c.joinEchoCount >= 0 &&
    Number.isInteger(c.joinEchoDrift) && c.joinEchoDrift >= 0 && c.joinEchoDrift <= c.joinEchoCount
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back) && ok(e.prev) && ok(e.cur))
}

/**
 * The join echo drift weather's own two-step shape across three faces.
 *
 * @param {{back: {joinEchoCount: number, joinEchoDrift: number}, prev: {joinEchoCount: number, joinEchoDrift: number}, cur: {joinEchoCount: number, joinEchoDrift: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function joinEchoDriftTrendRow (e) {
  if (!joinEchoDriftConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.joinEchoDrift
  const p = prev.joinEchoDrift
  const c = cur.joinEchoDrift
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the echo never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the join echo's own pair law the siblings keep: the .321 login dawn word prices the LOGIN line's own clock cell's earlier edge and the .322 login dusk word prices the same cell's later edge (the echo's own dawn/dusk hands byte-equal those arcs 24/24 - the pair-identity the audit keeps, the drift hand this word prices the cell's only live voice) and the .314 login count word keeps the join mass and the .297/.323 entity id pair and the .312/.313 port pair and the .315/.316 login X pair and the .317/.318 login Y pair and the .319/.320 compass seats keep the login line's own cells and the deathcause module keeps the join/leave lines as counts and the leave sibling the loss lane's own same-second pair the burst-identity law keeps and the .310 disconnect word keeps the loss lane's own counts, the .311 timed out word keeps the stalled-drop seat, the .333 closing clock word prices the loss lane's own last print's clock cell, the .334 loss dawn word prices the same lane's first print's clock cell (the SAME-CELL DIFFERENT-HAND LAW the family holds) and the .332 opening clock seat and the .331 selection seat and the .330 completion seat and the .293 prep seat and the .294/.324 done-ms hands and the spawn-set family (.325/.326/.327/.328/.329) and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the join echo's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the join echo drift trend (v0.976.336): the join echo's own drift fade ran two steps deep - ${arc} - the echoes spoke their own second less each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the join echo drift trend (v0.976.336): the join echo's own drift swell ran two steps deep - ${arc} - the echoes spoke their own second more each face, ${tail}`
  }
  return `the join echo drift trend (v0.976.336): the join echo's own drift swing - ${arc} - the echo's own second traded its ride between the faces, ${tail}`
}
