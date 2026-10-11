//
// maptripcast.mjs - THE MAP TRIP'S OWN CAST (v0.946.0)
//
// The fleet19 map-trip lane (testbed/fleet19.mjs's tripDue gate + the
// v0.900.0 second leg) is the WorldMap target assignment front's own
// emitter: the launch ('F9 map trip: sand'), the skips ('F3 map trip
// skipped: cannot leave the shaft', 'F2 map trip skipped:
// sand,gravel unreachable'), the second leg family ('F17 map trip
// second leg: sand' / 'F11 map trip second leg failed: No path to the
// goal!'), the night defer ('F9 map trip deferred: night (tod=...)') and
// the catch exit ('F9 map trip failed: <msg>'). The lane's field voice
// rode read only from the WHY side: the v0.801.0 trip ask seat priced
// WHICH WHY owns the asks (shaft-locked x8 + launch x7, face 209's
// 71.4%), the v0.415.0 census prints raw per-bot counts, the v0.901.0
// lens prices the second leg's own delivery share - no book, no BOT
// axis, no seat. THIS is the lane's own WHO axis: WHICH bot's own
// pocket keeps walking the map's targets.
//
// THE BILL LAW: the emitter's exact byte shapes, one parser per emitter,
// zero other readers - the launch/skip/second-leg REs ride by import
// from maptrip.mjs (the one-parser law's own precedent: tripcensus.mjs
// imports the famine/gathered shapes); the night defer and the catch
// exit are the shapes nobody parsed - each its own anchored form.
// THE LANE'S OWN POOL (the count law's own precedent: the v0.942.0
// bare/ARMED pool, the v0.943.0 both-skins pool, the v0.945.0 lane
// pool): each map trip line one vote - the launch, the skips, the
// second leg family, the night defer, the catch exit, one pool.
// THE STRICT-MAJORITY LAW: a bot owns the cast only above half the
// lane's lines, a tie owns nothing. The riders beside the seat's
// silence (byte law count desc + bot byte asc), the branch law fenced
// in the lib, the junk fences, the honest silences - the trip-free face
// stays silent.
//
// THE NAME'S OWN DEDUP (grepped src/tests/scripts): 'the map trip's
// own', 'the mappers' own crowd' and 'the fleet's own mapping seat'
// lived nowhere - maptrip.mjs owns the lane's own RUNTIME machinery and
// its WHY-side seat (tripAskSeat), the lane's own BOOK and BOT axis is
// THIS lib (both untouched). The legacy list's own front (WorldMap
// target assignment) priced at its trip lane's origin.
//
// Pure read-time tooling: zero fleet wiring, zero new log lines - the
// census-guard lane. Junk-safe end to end.
//
import { MAP_TRIP_RE, MAP_TRIP_SKIP_RE, classifyTripSkip, SECOND_LEG_DELIVERED_RE, SECOND_LEG_DEFERRED_RE, SECOND_LEG_REFUSED_RE, SECOND_LEG_FAILED_RE } from './maptrip.mjs'

// ---- the night defer (the lane's own defer skin) ----
// 'F9 map trip deferred: night (tod=18000)' (the walk gate's throttle,
// fleet19.mjs's lastNightLog voice; tod is Math.floor'd - an integer)
export const MAP_TRIP_NIGHT_DEFER_RE = /^(F\d+) map trip deferred: night \(tod=(\d+)\)$/

// ---- the catch exit (the lane's own failure skin) ----
// 'F9 map trip failed: <msg>' (the mapTrip try/catch's own voice)
export const MAP_TRIP_CATCH_FAIL_RE = /^(F\d+) map trip failed: (.+)$/

function zeroBot () {
  return {
    launch: 0, skipShaft: 0, skipUnreachable: 0, skipOther: 0,
    secondDelivered: 0, secondDeferred: 0, secondRefused: 0, secondFailed: 0,
    nightDefer: 0, catchFail: 0, total: 0
  }
}

/**
 * mapTripCastBook(lines) - the map trip lane's own field book.
 * Pure census: every map trip line classifies independently (no opener,
 * no cross-line join). @param {string[]} lines one fleet-log
 * @returns {null|{bots: Object<string,object>, totals: object}}
 */
export function mapTripCastBook (lines) {
  if (!Array.isArray(lines)) return null
  const bots = {}
  const totals = zeroBot()
  totals.totalBots = {}
  totals.launchTargets = {}
  totals.unreachableTargets = {}
  const bump = (bot, fn) => {
    const b = bots[bot] || (bots[bot] = zeroBot())
    fn(b)
    b.total++
    totals.total++
    totals.totalBots[bot] = (totals.totalBots[bot] || 0) + 1
  }
  for (const line of lines) {
    if (typeof line !== 'string') continue
    let m = SECOND_LEG_DELIVERED_RE.exec(line)
    if (m) {
      const t = m[2]
      bump(m[1], b => { b.secondDelivered++ })
      totals.secondDelivered++
      totals.launchTargets[t] = (totals.launchTargets[t] || 0) + 1
      continue
    }
    if (SECOND_LEG_DEFERRED_RE.test(line)) {
      m = SECOND_LEG_DEFERRED_RE.exec(line)
      bump(m[1], b => { b.secondDeferred++ })
      totals.secondDeferred++
      continue
    }
    if (SECOND_LEG_REFUSED_RE.test(line)) {
      m = SECOND_LEG_REFUSED_RE.exec(line)
      bump(m[1], b => { b.secondRefused++ })
      totals.secondRefused++
      continue
    }
    m = SECOND_LEG_FAILED_RE.exec(line)
    if (m) {
      bump(m[1], b => { b.secondFailed++ })
      totals.secondFailed++
      continue
    }
    m = MAP_TRIP_NIGHT_DEFER_RE.exec(line)
    if (m) {
      bump(m[1], b => { b.nightDefer++ })
      totals.nightDefer++
      continue
    }
    m = MAP_TRIP_CATCH_FAIL_RE.exec(line)
    if (m) {
      bump(m[1], b => { b.catchFail++ })
      totals.catchFail++
      continue
    }
    m = MAP_TRIP_RE.exec(line)
    if (m) {
      const ts = m[2].split(',')
      bump(m[1], b => { b.launch++ })
      totals.launch++
      for (const t of ts) totals.launchTargets[t] = (totals.launchTargets[t] || 0) + 1
      continue
    }
    m = MAP_TRIP_SKIP_RE.exec(line)
    if (m) {
      const why = classifyTripSkip(m[2])
      bump(m[1], b => {
        if (why.why === 'shaft-locked') b.skipShaft++
        else if (why.why === 'unreachable') b.skipUnreachable++
        else b.skipOther++
      })
      if (why.why === 'shaft-locked') totals.skipShaft++
      else if (why.why === 'unreachable') totals.skipUnreachable++
      else totals.skipOther++
      if (why.why === 'unreachable') {
        for (const t of why.targets || []) totals.unreachableTargets[t] = (totals.unreachableTargets[t] || 0) + 1
      }
      continue
    }
  }
  return { bots, totals }
}

/**
 * mapTripCast(botBook) - the map trip lane's bot-level seat.
 * @param {Object<string, {total: number}>|null} [botBook] the book's
 *   own bots cells (mapTripCastBook's bots map, the totals the book's
 *   raw row already reads)
 * @returns {null|{bot: string, owns: number, ofLines: number, share: number}}
 *   the cast (null on a minority top or an empty book - the honest silence)
 */
export function mapTripCast (botBook) {
  if (!botBook || typeof botBook !== 'object' || Array.isArray(botBook)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(botBook)) {
    const n = cell && typeof cell === 'object' && !Array.isArray(cell) ? cell.total : null
    if (typeof bot === 'string' && bot && Number.isInteger(n) && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (!rows.length) return null
  const total = rows.reduce((a, r) => a + r.owns, 0)
  const top = rows[0]
  if (top.owns <= total - top.owns) return null
  return { bot: top.bot, owns: top.owns, ofLines: total, share: +(top.owns / total).toFixed(3) }
}

// (v0.946.0) the cast's own row - THE FLEET'S OWN MAPPING SEAT: one
// bot's own trips keep the map's own voice. Junk never prints a seat.
export function mapTripCastRow (cast) {
  if (!cast || typeof cast !== 'object') return null
  const { bot, owns, ofLines, share } = cast
  if (typeof bot !== 'string' || !bot || !Number.isInteger(owns) || owns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || owns > ofLines || !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the map trip's own cast (v0.946.0): ${bot} owns ${owns} of ${ofLines} map trip ${s} (${(share * 100).toFixed(1)}%) - THE FLEET'S OWN MAPPING SEAT: one bot's own trips keep the map's own voice - the v0.801.0 seat priced the ask, the cast names its walker`
}

// (v0.946.0) THE MAP TRIP'S OWN RIDERS - the cast's silence's own
// companion: a MEASURE, never a verdict-owner - the top two mappers'
// concentration prices the shape the solo law refused to name (the
// cast's owner case leaves the companion unprinted - the decompose's
// own branch law). The order is deterministic (count desc, then the
// name's own - 'F11' < 'F19' byte-wise). Junk never invents a shape.
export function mapTripRiders (botBook) {
  if (mapTripCast(botBook)) return null
  if (!botBook || typeof botBook !== 'object' || Array.isArray(botBook)) return null
  const rows = []
  for (const [bot, cell] of Object.entries(botBook)) {
    const n = cell && typeof cell === 'object' && !Array.isArray(cell) ? cell.total : null
    if (typeof bot === 'string' && bot && Number.isInteger(n) && n > 0) rows.push({ bot, owns: n })
  }
  rows.sort((a, b) => b.owns - a.owns || (a.bot < b.bot ? -1 : 1))
  if (rows.length < 2) return null
  const leader = rows[0]
  const runner = rows[1]
  const pairOwns = leader.owns + runner.owns
  const total = rows.reduce((a, r) => a + r.owns, 0)
  return { leader: leader.bot, leaderOwns: leader.owns, runner: runner.bot, runnerOwns: runner.owns, ofLines: total, pairOwns, share: +(pairOwns / total).toFixed(3) }
}

// (v0.946.0) the riders' own row - THE MAPPERS' OWN CROWD (the family's
// own tail): a measure of the shape, never a named owner. Junk never
// prints a shape.
export function mapTripRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofLines, pairOwns, share } = r
  if (typeof leader !== 'string' || !leader || !Number.isInteger(leaderOwns) || leaderOwns <= 0 ||
      typeof runner !== 'string' || !runner || !Number.isInteger(runnerOwns) || runnerOwns <= 0 ||
      !Number.isInteger(ofLines) || ofLines <= 0 || !Number.isInteger(pairOwns) || pairOwns > ofLines ||
      !Number.isFinite(share)) return null
  const s = ofLines === 1 ? 'line' : 'lines'
  return `the map trip's own riders (v0.946.0): no solo mapper owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofLines} map trip ${s} (${(share * 100).toFixed(1)}%) - THE MAPPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the lane the solo law refused to name`
}
