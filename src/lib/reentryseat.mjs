//
// reentryseat.mjs - THE RE-ENTRY'S OWN LEG (v0.912.0)
//
// The stale re-entry class's own seat: WHICH WALK owns the returns to the
// water. Face 189 (38078750669) is the row's own face: F4's death read
// 'rescue 72s ago, leg next column alt' - the lane completed its save 72s
// before the death, the bot went back in, and the context line named the
// leg that held the return. The v0.746.0 gap split priced the CLOCK
// (immediate < 10s = the release's own edge / delayed = the bot's own
// return) and captures the leg on every row - captured-but-unread: the
// immediate print shows the leg inline ad hoc, the delayed rows print
// none, and NO row ever seats the leg across the face. The sand read's
// own lever shape ('the delivery leg is the lever') is the water lane's
// own missing lever: the re-entry leg is the seat the cure names.
//
// THE BILL LAW (the seat precedents' own shape - the v0.774.0 cast, the
// v0.780.0 ends, the v0.790.0 mid-episode seat): the ledger's own cells
// only, zero re-parsing - the input is reentryGaps' own output
// ({ immediate, delayed } rows of { bot, ago, leg }, o2gap.mjs v0.746.0)
// or the flat rows array; the strict-majority law - a solo leg owns the
// returns only above half (a tie owns nothing); the unread fence - a
// row without a usable leg name ('unknown'/null/empty) never joins the
// seat (the silence law) and the bill counts it honestly.
//
// THE SEAT'S OWN NAME LAW: the leg field rides the v0.270.0 '@coords'
// stamp verbatim ('fuel commons walk @-145,391') - the seat reads the
// WALK'S NAME (the part before ' @'), the stamp never fragments the
// class (two returns at different cells are one walk's own churn).
//
// Fences (every one the honest fork):
//   - junk input (non-object rows, non-string leg) judges nothing
//   - zero stale rows -> null (the re-entry class never rode - the
//     v0.746.0 row's own silence, this row's too)
//   - stale rows with zero named legs -> the honest unread row (the
//     v0.270.0 stamp's own gap would name itself, never a silence)
//   - no solo leg above half -> the riders form (the measure-not-owner
//     law: the top two named legs' concentration, count desc then the
//     name's own byte asc - the v0.790.0 byte law)
// Pure: reads, never mutates. Zero fleet wiring (mining-surface only,
// the v0.379/.../v0.754.0 precedent) - the fleet's own drown-context
// bytes are the filter-keys, they already ride.
//

/**
 * the seat's own name - the walk's name before the v0.270.0 '@coords'
 * stamp ('fuel commons walk @-145,391' -> 'fuel commons walk'); junk
 * reads null (the row never joins the seat).
 * @param {unknown} leg
 * @returns {string|null}
 */
export function reentryLegName (leg) {
  if (typeof leg !== 'string') return null
  const s = leg.trim()
  if (!s.length || /^unknown$/i.test(s)) return null
  const at = s.indexOf(' @')
  return (at > 0 ? s.slice(0, at) : s).trim() || null
}

/**
 * reentryLegBill(rows) - the re-entry's own leg bill: the stale rows'
 * leg seat off the ledger's own cells (null unless stale rows rode).
 *
 * @param {{immediate?: unknown[], delayed?: unknown[]}|unknown[]} [rows]
 *   reentryGaps' own output, or the flat rows array
 * @returns {null|{n: number, named: number, unread: number,
 *   legs: Array<{name: string, n: number}>, owner: null|
 *   {name: string, owns: number}}}
 */
export function reentryLegBill (rows) {
  const flat = Array.isArray(rows)
    ? rows
    : (rows && typeof rows === 'object'
        ? [
            ...(Array.isArray(rows.immediate) ? rows.immediate : []),
            ...(Array.isArray(rows.delayed) ? rows.delayed : [])
          ]
        : null)
  if (!flat) return null
  const legs = new Map()
  let unread = 0
  let n = 0
  for (const r of flat) {
    if (!r || typeof r !== 'object') continue // junk rows never price (the population is the priced)
    n++
    const name = reentryLegName(r.leg)
    if (name === null) { unread++; continue }
    legs.set(name, (legs.get(name) || 0) + 1)
  }
  if (n <= 0) return null
  const named = n - unread
  const sorted = [...legs.entries()]
    .map(([name, c]) => ({ name, n: c }))
    .sort((a, b) => b.n - a.n || a.name.localeCompare(b.name))
  let owner = null
  if (sorted.length && sorted[0].n > n / 2) {
    owner = { name: sorted[0].name, owns: sorted[0].n }
  }
  return { n, named, unread, legs: sorted, owner }
}

/**
 * reentryLegRow(bill) - the bill's own row: WHICH WALK owns the returns
 * (the strict-majority seat) or the riders' concentration (the
 * measure-not-owner law); the unread class rides its own honest count.
 * Junk never prints a seat (the honest silence's own row law).
 *
 * @param {unknown} [bill]
 * @returns {null|string}
 */
export function reentryLegRow (bill) {
  if (!bill || typeof bill !== 'object') return null
  const { n, named, unread, legs, owner } = bill
  if (!Number.isFinite(n) || n <= 0 || !Array.isArray(legs)) return null
  const unit = n === 1 ? 'stale re-entry' : 'stale re-entries'
  const tail = unread > 0 ? ` (${unread} leg unread)` : ''
  if (!named) {
    return `the re-entry's own leg (v0.912.0): ${n} ${unit}, every leg unread - the stamp's own gap names itself${''}`
  }
  if (owner) {
    const pct = Math.round((owner.owns / n) * 100)
    return `the re-entry's own leg (v0.912.0): leg ${owner.name} owns ${owner.owns} of ${n} ${unit} (${pct}%) - the walk's own water is the lever${tail}`
  }
  const riders = legs.slice(0, 2)
    .map(l => `${l.name} x${l.n}`)
    .join(' + ')
  const owns = legs.slice(0, 2).reduce((s, l) => s + l.n, 0)
  const pct = Math.round((owns / n) * 100)
  return `the re-entry's own leg (v0.912.0): no solo leg owns the majority - ${riders} own ${owns} of ${n} ${unit} (${pct}%)${tail}`
}
