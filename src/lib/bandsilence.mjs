//
// bandsilence.mjs - THE BAND ARM'S OWN SILENCE (v0.964.0)
//
// The o2-low trigger front's own gate-level byte. The front's rows ride
// three faces deep (face 229: lastBreath 2/2, pages 0.5..0.7s; face 231:
// the saveable death, the trigger's own gap; face 232: the controls-blind
// remainder) and the verdict byte never changed: the trigger must fire at
// o2 low, not at the reset. The v0.958.0 lane WIRED the band arm (the
// descent through 10..5 arms on witnessed wet contact + the bandClimb
// refill fence) - and the deaths still rode the reset. The books priced
// the RUNWAY (o2trigger, v0.884.0), the LEAD (pagelead, v0.875.0), the
// LAG (triggerlag, v0.960.0), the arm's own depth (o2arm, v0.880.0), the
// blind arm's own window (blindarmwindow, v0.959.0) - NOBODY prices the
// band arm's own gate at the death tick: WAS the lane's own conjunction
// satisfied when the bot died, and did the rescue ever fly?
//
// THE DEATH TICK'S OWN BYTES: the drown context line (o2gap's own grammar
// - the one-parser law by reuse whole) carries the waterRead truth at the
// death itself - the o2 bar, the feet/head cells with their waterlogged
// flags, the rescue relation (active / Ns ago / never). That is the band
// arm's own conjunction minus one input: the sentry's live airHistory
// (the bandClimb fence rides the pre-death trend, which no context line
// carries - the honest exclusion, the same idiom as o2arm's own blind
// seat: the climb fence prices nothing here and the row never claims it).
//
// THE SEATS (exclusive by the tick's own o2 byte, the lane's own bounds
// byte for byte - OXYGEN_CRITICAL_LEVEL and OXYGEN_RESCUE_LEVEL imported,
// never forked):
//   blind        - o2 reset(-1) or ? (the sensor's own death prices
//                  nothing - o2arm's own law)
//   critical     - o2 <= 4 (the bar rode below the band's own seat
//                  between reads - the sentry's own cadence)
//   band         - o2 5..10 (the v0.958.0 lane's own exact seat:
//                  o2 > critical && o2 <= rescue level) - split by the
//                  tick's own trust and rescue bytes:
//     bandSilence    - trust wet/unknown, rescue never - THE FRONT'S OWN
//                      BYTE: the lane's own conjunction rode satisfied
//                      and the lane never flew
//     bandFlight     - trust wet/unknown, rescue active/ago - the lane
//                      flew, the drain won (the execution's own seat)
//     bandDryHold    - trust dry, rescue never - the dry cells' own
//                      out-vote held the arm (the v0.16.0 law's own byte)
//     bandDryFlight  - trust dry, rescue active/ago - the hold was moot,
//                      another lane's arm flew
//   headroom     - o2 >= 11 (the band never owned the tick - the
//                  crossing's own late descent)
//
// THE TRUST RIDES THE ONE CLASSIFIER: airBarTrust imported from
// drowning.mjs (never forked) fed the context's own cells - the
// emitter's own round trip honored (the renderer wrote null as
// 'unknown', the reader converts 'unknown' back before the trust
// judges; the ' wl' suffix is the waterlogged flag).
//
// THE OWNER LAW: the seats' strict majority (the top seat strictly
// above the runner-up owns; a tie reads the spread is the shape - the
// honest silence, the house's own null law).
//
// Mining-surface only: zero fleet wiring, zero new log lines (the
// v0.379.0 precedent). Junk-safe end to end: non-string rows judge
// nothing; a junk-shaped context never matches; the fold never returns
// null (o2TriggerBook's own precedent - the empty book builds). Pure:
// reads, never mutates.
//

import { DROWN_CONTEXT_RE } from './o2gap.mjs'
import { airBarTrust, OXYGEN_CRITICAL_LEVEL, OXYGEN_RESCUE_LEVEL } from './drowning.mjs'

// the seats' own words (the row's own vocabulary - one spelling, the
// riders row and the verdict ride the same map)
const SEAT_WORDS = {
  blind: 'blind',
  critical: 'critical',
  bandSilence: 'band-silence',
  bandFlight: 'band-flight',
  bandDryHold: 'band-dry-hold',
  bandDryFlight: 'band-dry-flight',
  headroom: 'headroom'
}

const SEAT_KEYS = Object.keys(SEAT_WORDS)

// the verdicts' own words (the prose lives in the lib - the mine
// imports the names, the v0.962.0 wiring law)
const VERDICTS = {
  bandSilence: 'the band arm\'s own conjunction rode satisfied and the rescue never flew - the v0.958.0 lane\'s own silence is the front',
  bandFlight: 'the band arm flew and the drain won - the lane\'s own execution prices the loss (the constant is not the lever)',
  bandDryHold: 'the dry cells\' own out-vote held the band arm - the witness\'s own gap is the front',
  bandDryFlight: 'the dry tick\'s arm rode another lane - the witness\'s own lie did not hold the flight',
  critical: 'the bar rode below the band\'s own seat between reads - the sentry\'s own cadence is the front',
  blind: 'the sensor\'s own death prices nothing - the blind family\'s own seat owns the lane',
  headroom: 'the band never owned these ticks - the crossing\'s own late descent is the front'
}

/** The seat's own arithmetic - the fold and the fence ride the SAME
 * expression (the recomputed cell stays byte-true, the triggerlag
 * idiom). The trust and rescue ride the context's own normalized
 * bytes. */
const seatOf = (o2, trust, rescue) => {
  if (o2 === null) return 'blind'
  if (o2 <= OXYGEN_CRITICAL_LEVEL) return 'critical'
  if (o2 <= OXYGEN_RESCUE_LEVEL) {
    if (trust === 'dry') return rescue === 'never' ? 'bandDryHold' : 'bandDryFlight'
    return rescue === 'never' ? 'bandSilence' : 'bandFlight'
  }
  return 'headroom'
}

const emptyBook = () => ({
  deaths: 0,
  seats: { blind: 0, critical: 0, bandSilence: 0, bandFlight: 0, bandDryHold: 0, bandDryFlight: 0, headroom: 0 },
  trust: { wet: 0, unknown: 0, dry: 0 },
  rescue: { never: 0, active: 0, ago: 0 },
  rows: []
})

/**
 * Fold the drown contexts into the band arm's own silence book. Every
 * context line is self-contained (the death tick's own bytes ride the
 * same line - zero cross-line joins, zero re-parsing).
 *
 * @param {string[]} [lines] the face log (array; a raw blob reads the
 *   empty book - the caller splits first, the house fence)
 * @returns {{deaths: number, seats: Object<string, number>,
 *   trust: {wet: number, unknown: number, dry: number},
 *   rescue: {never: number, active: number, ago: number},
 *   rows: Array<{bot: string, o2: number|null, o2Byte: string,
 *   trust: string, rescue: string, seat: string, leg: string,
 *   wet: string}>}} never null, never invented
 */
export function bandSilenceBook (lines) {
  const book = emptyBook()
  if (!Array.isArray(lines)) return book
  for (const line of lines) {
    if (typeof line !== 'string') continue
    const m = DROWN_CONTEXT_RE.exec(line)
    if (!m) continue
    // the emitter's own round trip: the renderer wrote null as
    // 'unknown' and the wl flag as the ' wl' suffix
    const cell = (tok) => {
      const wl = / wl$/i.test(tok)
      const name = tok.replace(/ wl$/i, '')
      return { name: name.toLowerCase() === 'unknown' ? null : name, wl }
    }
    const feet = cell(m[3])
    const head = cell(m[4])
    const o2 = /^\d+$/.test(m[2]) ? Number(m[2]) : null // null = the blind skins (reset(-1) / ?)
    const trust = airBarTrust({ feet: feet.name, head: head.name, feetWaterlogged: feet.wl, headWaterlogged: head.wl })
    const rescueByte = m[5].toLowerCase()
    const rescue = rescueByte === 'active' ? 'active' : (rescueByte === 'never' ? 'never' : 'ago')
    const seat = seatOf(o2, trust, rescue)
    book.deaths++
    book.seats[seat]++
    if (o2 !== null && o2 > OXYGEN_CRITICAL_LEVEL && o2 <= OXYGEN_RESCUE_LEVEL) book.trust[trust]++
    book.rescue[rescue]++
    book.rows.push({ bot: m[1], o2, o2Byte: m[2], trust, rescue, seat, leg: m[6], wet: m[7] })
  }
  return book
}

/**
 * The fence law: the fold's self-proving cells. The seats' sum rides
 * the deaths; the trust split rides the band ticks' own image (the
 * wet/unknown side sums to the silence+flight pair, the dry side to
 * the dry pair); the rescue split rides the deaths; every row re-seats
 * through the same expression. An inconsistent book prices nothing.
 */
export function bandSilenceConsistent (b) {
  if (!b || typeof b !== 'object' || Array.isArray(b)) return false
  if (!Number.isInteger(b.deaths) || b.deaths < 0) return false
  if (!Array.isArray(b.rows) || b.rows.length !== b.deaths) return false
  const s = b.seats
  if (!s || typeof s !== 'object' || Array.isArray(s)) return false
  if (!SEAT_KEYS.every((k) => Number.isInteger(s[k]) && s[k] >= 0)) return false
  if (SEAT_KEYS.reduce((a, k) => a + s[k], 0) !== b.deaths) return false
  const t = b.trust
  if (!t || typeof t !== 'object' || Array.isArray(t)) return false
  if (!['wet', 'unknown', 'dry'].every((k) => Number.isInteger(t[k]) && t[k] >= 0)) return false
  if (t.wet + t.unknown !== s.bandSilence + s.bandFlight) return false
  if (t.dry !== s.bandDryHold + s.bandDryFlight) return false
  const r = b.rescue
  if (!r || typeof r !== 'object' || Array.isArray(r)) return false
  if (!['never', 'active', 'ago'].every((k) => Number.isInteger(r[k]) && r[k] >= 0)) return false
  if (r.never + r.active + r.ago !== b.deaths) return false
  for (const row of b.rows) {
    if (!row || typeof row !== 'object' || Array.isArray(row)) return false
    if (typeof row.bot !== 'string' || !row.bot) return false
    if (typeof row.trust !== 'string' || typeof row.rescue !== 'string') return false
    if (row.o2 !== null && !Number.isFinite(row.o2)) return false
    if (SEAT_WORDS[row.seat] === undefined) return false
    if (seatOf(row.o2, row.trust, row.rescue) !== row.seat) return false
  }
  return true
}

/** The seats' strict majority - the owner seat or null (a tie owns
 * nothing, the honest silence; an empty book owns nothing). */
export function bandSilenceOwner (b) {
  if (!bandSilenceConsistent(b) || b.deaths <= 0) return null
  const sorted = SEAT_KEYS.map((k) => [k, b.seats[k]]).sort((a, z) => z[1] - a[1] || (a[0] < z[0] ? -1 : 1))
  const [topSeat, topN] = sorted[0]
  if (topN <= 0) return null
  const runnerUp = sorted.length > 1 ? sorted[1][1] : 0
  if (topN <= runnerUp) return null
  return { seat: topSeat, n: topN }
}

/**
 * The single-seat row (the house idiom): the seats' own spread, the
 * band trust's own split, the owner's own verdict. An inconsistent
 * book prices nothing; a book with no deaths never builds (the build
 * fence).
 */
export function bandSilenceRow (b) {
  if (!bandSilenceConsistent(b) || b.deaths <= 0) return null
  const s = b.seats
  const seatsByte = SEAT_KEYS.map((k) => `${SEAT_WORDS[k]} ${s[k]}`).join(' / ')
  const trustByte = `band trust wet ${b.trust.wet} / unknown ${b.trust.unknown} / dry ${b.trust.dry}`
  const owner = bandSilenceOwner(b)
  const verdict = owner ? VERDICTS[owner.seat] : 'the seats\' own spread owns the book - no seat holds the majority (the honest silence)'
  return `the band arm's own silence (v0.964.0): ${b.deaths} drown tick(s) - ${seatsByte} - ${trustByte} - ${verdict}`
}

/**
 * The riders row - the per-death bracket line (the house bill idiom).
 * Bots ride line order (the truth). An inconsistent book prices
 * nothing; every death rides its own honest bracket.
 */
export function bandSilenceRidersRow (b) {
  if (!bandSilenceConsistent(b) || b.deaths <= 0) return null
  const bits = b.rows.map((r) => `${r.bot} [${SEAT_WORDS[r.seat]} o2 ${r.o2Byte} ${r.rescue}]`)
  return bits.length ? bits.join(' ') : null
}
