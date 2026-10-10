//
// recoverwhy.mjs - THE FAILED WHY'S OWN ANATOMY (v0.913.0)
//
// The recovery book's failed terminals finally speak their own why.
// Face 190 (38080764413) is the row's own face: the book read
// 'failed 5 (none 0 / table 1)' - and the row could not say WHY the
// five episodes failed: F18's 'no planks recipe' x4 rode the silent
// 'other' class (the row prints none/table counts only), while F8's
// 'no pickaxe (sticks 2, planks-best 1, table 0)' classed 'table' on
// a FALSE POSITIVE - the why's prose MENTIONS the table ('table 0' =
// the table was THERE), the substring law (failedClass /table/) never
// read the number. THE ANATOMY ROW speaks the verbatim whys beside
// the book (recorded not rewritten - the old row keeps its byte, the
// collapse names itself in the new row's own light).
//
// THE RE-FAIL'S OWN CAST rides the same walk: a failed terminal that
// follows the same bot's failed terminal (no ok/spare-ok between) is
// a RE-FAIL - the bootstrap re-asked a question it just failed, and
// face 190's F18 re-failed x3 of 3 (the WHALE'S OWN SHAPE, the
// v0.911.0 rent's recovery-lane cousin: the lane re-runs its cycle
// with no loop-level brake). The seat: strict majority (a solo
// re-failer owns only above half), else the riders form
// (measure-not-owner) - the v0.774.0/v0.780.0/v0.912.0 seat law.
//
// THE ONE-PARSER LAW: the walk imports RECOVERY_TERMINAL_RE verbatim
// (toolrecovery.mjs, the v0.492.0 grammar - zero new regexes); the
// spare-ok skin reads OK-side and never collides (this lens prices
// the failed side only). The book's own rows[] keep the CLASS; this
// lens keeps the VERBATIM - two lenses, one grammar, no fork.
//
// Fences (the honest fork):
//   - junk input (non-array, non-string lines) judges nothing
//   - zero failed terminals -> null (the calm fleet never opens the
//     failed side - the book's own honest zero stays the book's)
//   - the whys list reads count desc then the why's own byte asc
//     (the v0.790.0 byte law), capped at the top two (the riders
//     form's own cap - a many-why face cannot balloon the row)
//   - the repeat clause drops out on zero repeat mass (the single-
//     fail face reads the anatomy only)
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.379/.../v0.754.0 precedent) - the fleet's own recovery bytes
// are the filter-keys, they already ride.
//

import { RECOVERY_TERMINAL_RE } from './toolrecovery.mjs'

/**
 * recoveryFailWhy(lines) - the failed terminals' own verbatim anatomy
 * and the re-fail cast (null unless a failed terminal rode).
 *
 * @param {string[]|string} [lines] the face log (array or raw blob)
 * @returns {null|{failed: number, whys: Array<{why: string, n: number}>,
 *   byBot: Object<string, number>, repeats: Object<string, number>,
 *   repeatMass: number}}
 */
export function recoveryFailWhy (lines) {
  const src = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : null)
  if (!src) return null
  const whys = new Map()
  const byBot = new Map()
  const repeats = new Map()
  const lastFate = new Map() // bot -> 'ok' | 'failed' (the terminal-adjacency state)
  let failed = 0
  for (const line of src) {
    if (typeof line !== 'string') continue
    const m = RECOVERY_TERMINAL_RE.exec(line)
    if (!m) continue
    const bot = m[1]
    if (m[2] === 'OK') {
      lastFate.set(bot, 'ok') // the chain healed - the next fail starts fresh
      continue
    }
    // the failed terminal: the verbatim why (the WIDE capture's own tail,
    // trimmed) prices the anatomy; the adjacency prices the re-fail.
    failed++
    const why = m[3].trim()
    whys.set(why, (whys.get(why) || 0) + 1)
    byBot.set(bot, (byBot.get(bot) || 0) + 1)
    if (lastFate.get(bot) === 'failed') {
      repeats.set(bot, (repeats.get(bot) || 0) + 1)
    }
    lastFate.set(bot, 'failed')
  }
  if (failed <= 0) return null
  const sortedWhys = [...whys.entries()]
    .map(([why, n]) => ({ why, n }))
    .sort((a, b) => b.n - a.n || a.why.localeCompare(b.why))
  const repeatsObj = {}
  let repeatMass = 0
  for (const [bot, n] of repeats) {
    repeatsObj[bot] = n
    repeatMass += n
  }
  const byBotObj = {}
  for (const [bot, n] of byBot) byBotObj[bot] = n
  return { failed, whys: sortedWhys, byBot: byBotObj, repeats: repeatsObj, repeatMass }
}

/**
 * recoveryFailWhyRow(r) - the anatomy's own row: the verbatim whys
 * (top two, the byte law) and the re-fail's own seat (strict majority,
 * else the riders). Junk never prints (the honest silence's row law).
 *
 * @param {unknown} [r]
 * @returns {null|string}
 */
export function recoveryFailWhyRow (r) {
  if (!r || typeof r !== 'object') return null
  const { failed, whys, repeats, repeatMass } = r
  if (!Number.isFinite(failed) || failed <= 0 || !Array.isArray(whys) || !whys.length) return null
  const top = whys.slice(0, 2).map(w => `${w.why} x${w.n}`).join(' + ')
  let row = `the failed why's own anatomy (v0.913.0): failed ${failed} - ${top}`
  if (Number.isFinite(repeatMass) && repeatMass > 0 && repeats && typeof repeats === 'object') {
    const entries = Object.entries(repeats)
      .map(([bot, n]) => ({ bot, n }))
      .sort((a, b) => b.n - a.n || a.bot.localeCompare(b.bot))
    const topBot = entries[0]
    if (topBot.n > repeatMass / 2) {
      row += ` - ${topBot.bot} re-failed x${topBot.n} of ${repeatMass} (the loop's own rent, the recovery lane's own shape)`
    } else {
      const owns = entries.slice(0, 2).reduce((s, e) => s + e.n, 0)
      const riders = entries.slice(0, 2).map(e => `${e.bot} x${e.n}`).join(' + ')
      row += ` - no solo re-failer owns the majority: ${riders} own ${owns} of ${repeatMass} re-fail(s)`
    }
  }
  return row
}
