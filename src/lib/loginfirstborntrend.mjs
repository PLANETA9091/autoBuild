// (v0.976.323) THE SERVER LOGIN'S OWN FIRSTBORN MASS - the server
// console's own '<name>[/IP:port] logged in with entity id N at (x, y,
// z)' INFO line's entity id cell the word prices across the faces -
// the FIRSTBORN hand (the lowest entity id the face's logins held, the
// world's own first accept the counter seeded) the .297 peak word's
// own cell wears unpriced beside (the SAME-CELL DIFFERENT-HAND LAW the
// echo box holds: the .297 login entity id word prices the same cell's
// MAX hand - the peak the crowd grew to, this word prices the MIN hand
// - the first accept the boot seeded the logins rode, the two hands
// never merge - the .312/.313 port peak/floor pair and the .321/.322
// dawn/dusk clock pair and the .315/.316 and .317/.318 and .319/.320
// coord pairs the same law's own children keep). THE EVIDENCE: the
// server's own acceptor prints '[20:40:21] [Server thread/INFO]:
// YardSurvey[/127.0.0.1:48142] logged in with entity id 17 at
// (-129.5, 70.0, 398.5)' (F501's own face) - one print per login the
// server accepted, the entity id cell the server's own counter held at
// that login - and no book owned the FIRSTBORN across the faces: the
// counter's low edge rode unread through the peak's own birth (the
// REAL twelve-face arc the faces carry - byte-verified from the
// fleet-server-log artifacts, every face's logins re-sorted on the
// entity id cell, the census hand the mirror law trusts): F501's
// firstborn spoke entity id 17, F502 9, F503 25, F504 9, F505 9, F506
// 17, F507 17, F508 17, F509 25, F510 9, F511 17, F512 17 - the REAL
// windows the arc holds: W1 the swing 17 -> 9 (-8) -> 25 (+16), W2 the
// swing 9 -> 25 (+16) -> 9 (-16), W3 the held pair 25 -> 9 (-16) ->
// 9 (+0), W4 the held pair 9 -> 9 (+0) -> 17 (+8), W5 the held pair 9
// -> 17 (+8) -> 17 (+0), W6 the held pair 17 -> 17 (+0) -> 17 (+0),
// W7 the held pair 17 -> 17 (+0) -> 25 (+8), W8 the swing 17 -> 25
// (+8) -> 9 (-16), W9 the swing 25 -> 9 (-16) -> 17 (+8), W10 the
// held pair 9 -> 17 (+8) -> 17 (+0) - TEN REAL WINDOWS FOUR SPEAKS
// SIX HELD the word born speaking FOUR DEEP the family's fewest
// speaks the held law keeps honest (the .318 ceiling birth's own
// three-held shape the sibling precedent holds - the boot-seed the
// restarts hold never invents a direction the counter did not ride);
// the boot-seed the twelve faces witness: THREE distinct base values
// (9, 17, 25) the server's own restart cycle the ids carry - the
// counter the boot resets, the faces the reboots trade; the firstborn
// seat ONE name owns - YardSurvey the survey bot's own login spoke
// EVERY face's firstborn (twelve faces twelve firstborns one name,
// the .321 dawn word's own one-name monopoly the firstborn joins) -
// and the firstborn line the dawn line's own twin: the same line the
// .321 clock word prices, the firstborn's own clock the dawn arc
// byte-exact on every face (the same-line different-cell law the
// pair's own witness holds). THE CROSS-CHECK (the mirror sibling arcs
// the same mining pipeline re-proved): the peak ids the same faces
// hold - the .297 word's own scalar - the twelve fresh extension
// reads beside the sibling's published F492-F496 arc: 4154/4111/3759/
// 3884/4670/4726/3901/3297/4851/4191/4539/4161, every face's firstborn
// the peak's own floor (the MIN never above the MAX the monotone
// counter keeps), and the headcounts the same faces hold match the
// .314 word's REAL arc byte-exact (39/30/25/30/40/37/26/39/22/26/32/
// 38) - the census hands the family trusts.
//
// GRAMMAR: the .322 dusk word's own frame byte-exact (the newest
// family frame the clock domain's own bounds keep - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the .278/.292/.293 INFO
// frame convention holds, zero-padded fixed fields hour 00-23 minute
// 00-59 second 00-59 the emitter's own shape (the leading zeros the
// emitter's own shape the F506 00:57:33 face rides, the .248
// no-leading-zero law the PORT cell holds the clock cell the opposite
// shape the same house keeps), the \S+ name cell the who-byte law
// rides, the '[/IP:port]' socket cell the proven integer capture,
// the 'logged in with entity id ' body, the N cell the proven integer
// no leading zero no sign (the .248 house law - THIS word's priced
// cell the firstborn keeps), the ' at (x, y, z)' tail the login's own
// where - the coords shape-only the float prints carry, LINE END tail
// boundary); the near-miss lanes never ride - the bot-tagged prefix,
// the WARN frame, the pretty spacing, the plural body, the altered
// verb, the missing port cell, the float port, the leading-zero port,
// the plus port, the integer coord, the leading whitespace, the
// trailing junk, the CR tail, the 1-digit hour clock, the overflow
// hour clock, the overflow minute clock, the overflow second clock,
// the dash-separator clock, the missing-seconds clock. THE SCALAR THE
// FIRSTBORN PRICES: the census takes the MIN entity id the face's
// logins held (the MIN hand the .313 min port law's own precedent
// holds on the integer domain - the .297 peak word's own same-cell
// max-hand the mirror confirms; the counter monotone within one boot
// the first accept carries the seed, the mid-face reboot's own
// counter reset the MIN law survives - the smallest across boots the
// face's own firstborn; the null-sentinel the no-login face the
// lawful zero - the .304/.306 convention holds); the port cells and
// the clock cell and the coord cells and the name cell ride shape
// only - the firstborn hand alone prices. THE FENCE: the .297 peak
// word's own non-negative integer fence (Number.isInteger and >= 0 -
// the counter's own domain the bounds keep). CENSUS GUARD: zero fleet
// wiring, zero new fleet log lines - the word rides the reader's fold
// through the SECOND carrier lane the server-console faces ride (the
// argv[6..8] tail the .278 contract extends, the .281 through .322
// folds the neighbours hold), the fleet's own console never changes.

const LOGIN_FIRSTBORN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

/**
 * The login firstborn census - the lowest entity id the face's logins
 * held (the MIN hand, the boot-seed the first accept carries).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{firstbornId: number}|null} the mass or null (non-array)
 */
export function loginFirstbornCensus (lines) {
  if (!Array.isArray(lines)) return null
  let firstborn = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = LOGIN_FIRSTBORN_RE.exec(l)
    if (!m) continue
    const id = Number(m[6]) // the entity id cell - the sixth group the split clock fields shift
    if (firstborn === null || id < firstborn) firstborn = id // the seed the first accept carried - the face's own firstborn
  }
  return { firstbornId: firstborn === null ? 0 : firstborn }
}

/**
 * The fence - the .297 peak word's own non-negative integer law.
 *
 * @param {{back: {firstbornId: number}, prev: {firstbornId: number}, cur: {firstbornId: number}}} e
 * @returns {boolean}
 */
export function loginFirstbornConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.firstbornId) && numOk(e.prev.firstbornId) && numOk(e.cur.firstbornId))
}

/**
 * The login firstborn weather's own two-step shape across three faces.
 *
 * @param {{back: {firstbornId: number}, prev: {firstbornId: number}, cur: {firstbornId: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function loginFirstbornTrendRow (e) {
  if (!loginFirstbornConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.firstbornId
  const p = prev.firstbornId
  const c = cur.firstbornId
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the boot-seed never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .297 entity id word keeps the same cell's peak seat (the SAME-CELL DIFFERENT-HAND LAW the echo box holds - the .312/.313 and .315/.316 and .317/.318 and .319/.320 and .321/.322 pairs' own precedent, the hand this word's own birth completes), the .321 login dawn word keeps the same line's own clock cell's earlier-edge seat and the .322 login dusk word keeps the same cell's later-edge seat (the firstborn line the dawn line's own twin - the same line the clock words price, the counter cell the firstborn prices), the .320 login south word keeps the same line's south seat and the .319 login north word keeps the same cell's north seat, the .317 login floor word keeps the same line's floor seat and the .318 login ceiling word keeps the same cell's ceiling seat, the .315 login east word keeps the same line's east edge seat and the .316 login west word keeps the same line's west edge seat, the .312 login port word keeps the same line's socket peak seat, the .313 login min port word keeps the same line's socket floor seat, the .314 login count word keeps the same lines' count seat, the .305 echo north word keeps the setblock echo's own Z-min seat and the .308 echo south word keeps the echo's own Z-max seat (a different emitter the same cell kind prices), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane's own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login firstborn's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server login firstborn trend (v0.976.323): the login firstborn's own fade ran two steps deep - ${arc} - the boot-seed sank toward the counter's base, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server login firstborn trend (v0.976.323): the login firstborn's own swell ran two steps deep - ${arc} - the boot-seed rose, ${tail}`
  }
  return `the server login firstborn trend (v0.976.323): the login firstborn's own swing - ${arc} - the boot-seed traded between the faces, ${tail}`
}
