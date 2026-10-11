//
// triggerlag.mjs - THE TRIGGER'S OWN LAG (v0.960.0)
//
// The o2-low trigger front's own missing join. The page lead's own row
// named the front twice (face 145: fits 0 / misses 2; face 219: the page
// lead 3.3s misses) and the verdict byte never changed: the trigger must
// fire at o2 low, not at the reset. The window book (v0.884.0) prices
// the RUNWAY (the last band crossing to the death line - face 145's
// window 40..300s avg 167s); the page lead book (v0.875.0) prices the
// LEAD (the page's own arrival before death - the last-breath pages ride
// 0.8..3.1s avg 2.0s). NOBODY prices the span between the two books'
// own bytes: THE LAG - how much of the runway the trigger burned before
// the page arrived. The two books' own cells join per death:
//
//     lag = window - lead
//
// (both ride the same death's own seconds - no new grammar, no new
// clock; the one-parser law by reuse whole).
//
// THE CLASSES (the lag's own verdict):
//   - the EARLY page (lag < 0): the page preceded the death's own last
//     in-band read - the o2-low page WITNESSED (the front's own cure
//     seen live: the page rode the band's own onset, not the reset).
//   - the LAST-BREATH page (lead <= LAST_BREATH_MAX_S, pagelead's own
//     constant - the one-constant law by import): the reset's own page
//     (the front's own disease - the sentry pages at the o2 reset, the
//     lane inherits the damage window).
//   - the LATE page (the rest): the burned runway - THE LEVER'S OWN
//     PRICE: the late lags' own sum over the joined windows' own sum
//     is the share of the runway the trigger burned unread.
//
// THE POPULATION: the drown contexts (o2gap's own grammar - the lead
// side's own population, pagelead's own deaths cell). The window side
// rides the window book's OWN perDeath rows (the fold's own bytes,
// never re-folded here): the alignment law joins them index for index
// through the anchored announce token (o2trigger's own kind-join shape
// - the same anchored death token in the same line order; the fence
// demands the two announce walks agree or nothing prices).
//
// THE MAP WART (honest, never forged): the lead side's perDeath map
// stays o2gap's own last-wins shape - a bot that drowns twice owns two
// deaths but the map holds one row. The bot's LAST context joins the
// map's lead byte-true; the bot's earlier deaths ride the honest
// UNJOINED class (the lead not per-death provable - the wart's own
// price, never papered over with the last death's lead).
//
// THE CLASS LAW (the first absent byte owns): no-announce (the context
// without its announce row) > no-window (the window book's own honest
// nulls - no crossing or untimed) > unjoined (the multi-death map
// wart) > unpaged (the lead provably absent) > joined.
//
// THE FENCES (the two-walks-agree law): both books' own fences must
// hold (o2TriggerConsistent + pageLeadBookConsistent - imported, never
// forked); the announce walks must agree (my walk's announce count ===
// the window book's perDeath length); the context population must
// agree (my walk's deaths === the lead book's deaths); the map's own
// image must hold (each bot's LAST death's lead === the map's lead);
// and the fold's self-proving cells recount (the classes' sum rides
// the deaths, the lag cells ride the joined rows' own image). An
// inconsistent join prices nothing (the row stays silent).
//
// THE LAG'S OWN PRECISION: the lead rides the emitter's own one-decimal
// seconds ('paged 2.4s before death'), the window rides the heartbeat's
// own integer seconds - the lag keeps the lead's own precision (the
// float the subtraction yields, never rounded - the fold's own bytes,
// and the fence recomputes the same expression so the cells stay
// byte-true).
//
// Mining-surface only: zero fleet wiring, zero new log lines (the
// v0.379.0 precedent). Junk-safe end to end: non-string rows judge
// nothing; a junk-shaped context reads its honest class. Pure: reads,
// never mutates.
//

import { DROWN_CONTEXT_RE } from './o2gap.mjs'
import { LAST_BREATH_MAX_S, pageLeadBookConsistent } from './pagelead.mjs'
import { o2TriggerConsistent } from './o2trigger.mjs'
import { parseDeathKind } from './deathkinds.mjs'
import { DEATH_CENSUS_LINE_RE } from './deathcensus.mjs'

// the anchored announce token's own bot read (the house idiom - the bot
// rides the line's head; o2trigger's own DEATH_RE shape, the alignment
// law's own token)
const ANNOUNCE_BOT_RE = /^(F\d+) \[F\d+\] died - respawning/

/** The kind word for a death whose announce carries no server verdict
 *  (the inferred-only family - the honest cell, never adjudicated). */
const UNKINDED = 'unkinded'

/**
 * (v0.960.0) THE TRIGGER'S OWN LAG - the two books' own per-death join.
 *
 * @param {object|null} [o2t] o2TriggerBook's own fold (the window side)
 * @param {object|null} [plb] pageLeadBook's own fold (the lead side)
 * @param {string[]} [lines] the face log (array - the house fence)
 * @returns {{deaths: number, joined: number, noWindow: number,
 *   unjoined: number, unpaged: number, noAnnounce: number,
 *   kinds: Object<string, number>, early: number, lastBreath: number,
 *   late: number, lag: {count: number, min: number|null, max: number|null,
 *   sum: number, avg: number|null}, windowSum: number, lateLagSum: number,
 *   burnedShare: number|null, rows: Array<object>}|null}
 *   null when any fence fails (the two walks disagree or a book is
 *   inconsistent - a fold that cannot prove itself prices nothing).
 */
export function triggerLagBook (o2t, plb, lines) {
  if (!o2t || typeof o2t !== 'object' || Array.isArray(o2t)) return null
  if (!plb || typeof plb !== 'object' || Array.isArray(plb)) return null
  if (!Array.isArray(lines)) return null
  if (!o2TriggerConsistent(o2t)) return null
  if (!pageLeadBookConsistent(plb)) return null
  if (!Number.isInteger(plb.deaths) || plb.deaths <= 0) return null
  // the context totals per bot (the map wart's own law: the bot's LAST
  // context is the one the map's row byte-trues)
  const ctxTotal = {}
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const cm = DROWN_CONTEXT_RE.exec(l)
    if (cm) ctxTotal[cm[1]] = (ctxTotal[cm[1]] || 0) + 1
  }
  const ctxSeen = {}
  const pending = {} // bot -> {rowIdx, kind} - the announce seat (the v0.880.0 idiom: never survives what it joined)
  let ai = -1 // the window book's own perDeath index (the alignment law)
  const rows = []
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (DEATH_CENSUS_LINE_RE.test(l)) {
      const bm = ANNOUNCE_BOT_RE.exec(l)
      if (!bm) continue // a non-F announce head - the alignment fence fails below
      const k = parseDeathKind(l)
      pending[bm[1]] = { rowIdx: ai + 1, kind: k ? k.kind : UNKINDED }
      ai++
      continue
    }
    const cm = DROWN_CONTEXT_RE.exec(l)
    if (!cm) continue
    const bot = cm[1]
    ctxSeen[bot] = (ctxSeen[bot] || 0) + 1
    const seat = pending[bot] || null
    pending[bot] = null // the seat never survives the context it joined
    const isLast = ctxSeen[bot] === ctxTotal[bot]
    const mapRow = (isLast && plb.perDeath && plb.perDeath[bot]) || null
    // the PROVABLE lead (the map's own byte for the bot's last context;
    // null when absent or provably absent; never the last death's lead
    // forged onto an earlier one - the wart rides the unjoined class)
    const lead = mapRow ? (Number.isFinite(mapRow.lead) ? mapRow.lead : null) : null
    const kind = seat ? seat.kind : UNKINDED
    const row = { bot, kind, cls: null, sub: null, window: null, lead: isLast ? lead : null, lag: null, rowIdx: seat ? seat.rowIdx : null }
    if (!seat) {
      row.cls = 'noAnnounce'
    } else {
      const wrow = o2t.perDeath[seat.rowIdx]
      const window = wrow && wrow.crossed && Number.isInteger(wrow.window) ? wrow.window : null
      row.window = window
      if (window === null) {
        row.cls = 'noWindow'
      } else if (!isLast) {
        row.cls = 'unjoined' // the multi-death map wart - the lead is not per-death provable
      } else if (lead === null) {
        row.cls = 'unpaged'
      } else {
        const lag = window - lead
        row.cls = 'joined'
        row.lag = lag
        row.sub = lag < 0 ? 'early' : (lead <= LAST_BREATH_MAX_S ? 'lastBreath' : 'late')
      }
    }
    rows.push(row)
  }
  // THE ALIGNMENT FENCE: my announce walk must count exactly the window
  // book's own rows (the two walks agree or nothing prices)
  if (ai + 1 !== o2t.perDeath.length) return null
  // THE POPULATION FENCE: my context walk must count exactly the lead
  // book's own deaths (one grammar, two walks)
  if (rows.length !== plb.deaths) return null
  // THE MAP-IMAGE FENCE: each bot's LAST death's lead === the map's own
  // lead byte (the wart's law whole - the provable lead rides every
  // last-context row, the class never hides it)
  const lastLeadByBot = {}
  for (const row of rows) lastLeadByBot[row.bot] = row.lead // the rows ride line order - the last row per bot wins
  for (const bot of Object.keys(plb.perDeath || {})) {
    const mapLead = plb.perDeath[bot].lead
    const mine = lastLeadByBot[bot]
    const myLead = mine === undefined ? null : mine
    if (myLead !== mapLead) return null
  }
  // the cells' own fold
  const kinds = {}
  let joined = 0, noWindow = 0, unjoined = 0, unpaged = 0, noAnnounce = 0
  let early = 0, lastBreath = 0, late = 0
  let lagCount = 0, lagMin = null, lagMax = null, lagSum = 0
  let windowSum = 0, lateLagSum = 0
  for (const row of rows) {
    kinds[row.kind] = (kinds[row.kind] || 0) + 1
    if (row.cls === 'joined') {
      joined++
      if (row.sub === 'early') early++
      else if (row.sub === 'lastBreath') lastBreath++
      else late++
      lagCount++
      lagSum += row.lag
      if (lagMin === null || row.lag < lagMin) lagMin = row.lag
      if (lagMax === null || row.lag > lagMax) lagMax = row.lag
      windowSum += row.window
      if (row.sub === 'late') lateLagSum += row.lag
    } else if (row.cls === 'noWindow') noWindow++
    else if (row.cls === 'unjoined') unjoined++
    else if (row.cls === 'unpaged') unpaged++
    else noAnnounce++
  }
  return {
    deaths: rows.length,
    joined, noWindow, unjoined, unpaged, noAnnounce,
    kinds,
    early, lastBreath, late,
    lag: { count: lagCount, min: lagMin, max: lagMax, sum: lagSum, avg: lagCount ? lagSum / lagCount : null },
    windowSum,
    lateLagSum,
    burnedShare: windowSum > 0 ? lateLagSum / windowSum : null,
    rows
  }
}

/**
 * The fence law: the fold's self-proving cells. The classes' sum must
 * ride the deaths; the lag cells must be the joined rows' own image;
 * the burned share must be its own recount. An inconsistent book
 * prices nothing.
 */
export function triggerLagConsistent (b) {
  if (!b || typeof b !== 'object' || Array.isArray(b)) return false
  if (!Number.isInteger(b.deaths) || b.deaths <= 0) return false
  if (!Array.isArray(b.rows) || b.rows.length !== b.deaths) return false
  const cells = [b.joined, b.noWindow, b.unjoined, b.unpaged, b.noAnnounce, b.early, b.lastBreath, b.late]
  if (!cells.every((v) => Number.isInteger(v) && v >= 0)) return false
  if (b.joined + b.noWindow + b.unjoined + b.unpaged + b.noAnnounce !== b.deaths) return false
  if (b.early + b.lastBreath + b.late !== b.joined) return false
  if (!b.kinds || typeof b.kinds !== 'object' || Array.isArray(b.kinds)) return false
  const kinds = {}
  let joined = 0, noWindow = 0, unjoined = 0, unpaged = 0, noAnnounce = 0
  let early = 0, lastBreath = 0, late = 0
  let lagCount = 0, lagMin = null, lagMax = null, lagSum = 0
  let windowSum = 0, lateLagSum = 0
  for (const r of b.rows) {
    if (!r || typeof r !== 'object' || Array.isArray(r)) return false
    if (typeof r.bot !== 'string' || !r.bot) return false
    if (typeof r.kind !== 'string' || !r.kind) return false
    if (r.lead !== null && !Number.isFinite(r.lead)) return false
    if (r.lag !== null && !Number.isFinite(r.lag)) return false
    if (r.cls !== 'joined' && r.lag !== null) return false
    if (r.window !== null && !Number.isInteger(r.window)) return false
    if (r.rowIdx !== null && !Number.isInteger(r.rowIdx)) return false
    kinds[r.kind] = (kinds[r.kind] || 0) + 1
    if (r.cls === 'joined') {
      if (r.lag === null || r.window === null || r.lead === null) return false
      if (r.lag !== r.window - r.lead) return false
      const sub = r.lag < 0 ? 'early' : (r.lead <= LAST_BREATH_MAX_S ? 'lastBreath' : 'late')
      if (r.sub !== sub) return false
      joined++
      if (r.sub === 'early') early++
      else if (r.sub === 'lastBreath') lastBreath++
      else late++
      lagCount++
      lagSum += r.lag
      if (lagMin === null || r.lag < lagMin) lagMin = r.lag
      if (lagMax === null || r.lag > lagMax) lagMax = r.lag
      windowSum += r.window
      if (r.sub === 'late') lateLagSum += r.lag
    } else {
      if (r.lag !== null || r.sub !== null) return false
      if (r.cls === 'noWindow') { if (r.window !== null) return false; noWindow++ }
      else if (r.cls === 'unjoined') { if (r.lead !== null) return false; unjoined++ }
      else if (r.cls === 'unpaged') { if (r.window === null || r.lead !== null) return false; unpaged++ }
      else if (r.cls === 'noAnnounce') { noAnnounce++ }
      else return false
    }
  }
  if (joined !== b.joined || noWindow !== b.noWindow || unjoined !== b.unjoined ||
    unpaged !== b.unpaged || noAnnounce !== b.noAnnounce) return false
  if (early !== b.early || lastBreath !== b.lastBreath || late !== b.late) return false
  const kindKeys = Object.keys(b.kinds)
  if (kindKeys.length !== Object.keys(kinds).length) return false
  for (const k of Object.keys(kinds)) {
    if (b.kinds[k] !== kinds[k]) return false
  }
  const lag = b.lag
  if (!lag || typeof lag !== 'object' || Array.isArray(lag)) return false
  if (!Number.isInteger(lag.count) || lag.count < 0) return false
  if (lag.count !== lagCount) return false
  if (lag.count === 0) {
    if (lag.min !== null || lag.max !== null || lag.sum !== 0) return false
  } else {
    if (lag.min === null || lag.max === null || !Number.isFinite(lag.min) || !Number.isFinite(lag.max)) return false
    if (lag.min !== lagMin || lag.max !== lagMax || lag.sum !== lagSum) return false
    if (!Number.isFinite(lag.avg) || lag.avg !== lagSum / lagCount) return false
  }
  if (b.windowSum !== windowSum || b.lateLagSum !== lateLagSum) return false
  if (windowSum > 0) {
    if (b.burnedShare === null || b.burnedShare !== lateLagSum / windowSum) return false
  } else if (b.burnedShare !== null) return false
  return true
}

/**
 * The single-seat row (the house idiom): the lag's own spread, the
 * classes' own counts, the lever's own price. An inconsistent book
 * prices nothing; a book with no deaths never builds (the build fence).
 */
export function triggerLagRow (b) {
  if (!triggerLagConsistent(b)) return null
  const parts = [`${b.deaths} drown death(s)`]
  if (b.joined > 0) {
    const avg = b.lag.avg === null ? '0' : b.lag.avg.toFixed(1)
    parts.push(`joined ${b.joined} (lag ${b.lag.min}..${b.lag.max}s avg ${avg}s)`)
  }
  if (b.noWindow > 0) parts.push(`no-window ${b.noWindow}`)
  if (b.unpaged > 0) parts.push(`unpaged ${b.unpaged}`)
  if (b.unjoined > 0) parts.push(`unjoined ${b.unjoined}`)
  if (b.noAnnounce > 0) parts.push(`no-announce ${b.noAnnounce}`)
  const classByte = `early ${b.early} / last-breath ${b.lastBreath} / late ${b.late}`
  const burnByte = (b.windowSum > 0 && b.late > 0)
    ? ` - the late page burned ${((b.lateLagSum / b.windowSum) * 100).toFixed(1)}% of the joined runway`
    : ''
  let verdict
  if (b.early > 0) verdict = 'the o2-low page witnessed: the early page rode the band, not the reset - the front\'s own cure seen live'
  else if (b.lastBreath > 0 && b.lastBreath >= b.late) verdict = 'the page rides the reset: the trigger must fire at o2 low, not at the reset - the front rides'
  else if (b.late > 0) verdict = 'the late page owns the lag: the runway burned unread - the o2-low threshold is the lever'
  else verdict = 'the lag unpriced: no joined death (the honest blind)'
  return `the trigger's own lag (v0.960.0): ${parts.join(', ')} - ${classByte}${burnByte} - ${verdict}`
}

/**
 * The riders row - the per-death bracket line (the house bill idiom).
 * Bots ride line order (the truth). An inconsistent book prices
 * nothing; every class rides its own honest bracket.
 */
export function triggerLagRidersRow (b) {
  if (!triggerLagConsistent(b)) return null
  const bits = b.rows.map((r) => {
    if (r.cls === 'joined') return `${r.bot} [lag ${r.lag}s - ${r.sub}]`
    if (r.cls === 'noWindow') return `${r.bot} [no window]`
    if (r.cls === 'unjoined') return `${r.bot} [unjoined]`
    if (r.cls === 'unpaged') return `${r.bot} [unpaged]`
    return `${r.bot} [no announce]`
  })
  return bits.length ? bits.join(' ') : null
}
