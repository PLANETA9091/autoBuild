// (v0.974.19) THE RENT SHADOW - the repeat rent's own TTL shadow, priced from
// the log's own bytes.
//
// MEASURED (face 288 = 38357188178, the v0.974.17 sweep tree): the bank's own
// docket read 'chest unreachable 62 + decide timeouts 48' of 81 door legs with
// banked 0 of 2001u - THE SILENT BANK - and the v0.862.0 book named the
// exclude machinery's own front: walks rented on repeats 5 of 9 (56%), the
// majority of the no-path walks rented on chests that had ALREADY refused.
// The field read of the raw bytes (cell [-143,81,411]: write F10 'ttl 15s' ->
// hop fail -> write F5 'ttl 15s, timeout verdict' -> hop fail -> SKIP F14
// 'cached 5s ago' -> SKIP F15 'cached 8s ago' -> hop rents F15/F15/F7 again)
// prices the hole the parser could not: the SKIP line carries the ledger's
// own age byte ('no path cached Ns ago'), but the RENT line (the hop that
// walked) carries NONE - a repeat rent is silent about the live entry it rode
// or outlived. THE RENT'S OWN AGE IS THE MISSING BYTE. This census prices
// what the bytes CAN prove, per chest cell, from four event kinds:
//   write  - 'no-path ledger: chest at [x,y,z] ... (N live, ttl Ts[, timeout verdict])'
//   hold   - 'walk-intent: chest at [x,y,z] held for the fleet (N live, ttl Ts)'
//   skip   - 'chest skip (no path cached Ns ago at [x,y,z])'  (the age byte!)
//   rent   - 'hop: chest at [x,y,z] ... chest unreachable (...)'  (no age byte)
// THE PROOF MACHINE (pure, deterministic):
//   - a SKIP after a write proves the entry was live at skip moment
//     (age_s = the skip's own byte).
//   - a RENT before any write of the cell = the BLIND class (the ledger never
//     spoke for this cell).
//   - a RENT whose nearest preceding skip for the same cell proves liveness
//     and rides NO new write after that skip = the SHADOW class (the rent
//     rented inside the proven-live window - the consult hole's own
//     candidate: the walker's rent seat never consulted, or consulted and
//     walked anyway).
//   - a RENT after the proven-live window closed (or with no skip ever) =
//     the EXPIRED class (the TTL's own brevity candidate: the entry died
//     before the rent - the floor, not the consult).
// THE VERDICT (the wire question priced for the next fire, the
// pricing-before-wire law v0.473.0): whichever class owns the repeat rent
// names the cure's own seat - SHADOW owns -> the rent seat needs the consult
// byte (wire); EXPIRED owns -> the chest ttl floor needs its own turn
// (constant); BLIND owns -> the rent's cell never entered the ledger (the
// write seat's own hole).
//
// Pure parser - junk lines are ignored, junk cells keep their own buckets,
// never throws. Tests pin the classes, the skip-proof window and the
// verdict's own law on a face-288-shaped synthetic.

const WRITE_RE = /no-path ledger: chest at \[(-?\d+),(\d+),(-?\d+)\] cached for the fleet \((\d+) live, ttl (\d+)s(, timeout verdict)?\)/
const HOLD_RE = /walk-intent: chest at \[(-?\d+),(\d+),(-?\d+)\] held for the fleet \((\d+) live, ttl (\d+)s\)/
const SKIP_RE = /chest skip \(no path cached (\d+)s ago at \[(-?\d+),(\d+),(-?\d+)\]\)/
const RENT_RE = /hop: chest at \[(-?\d+),(\d+),(-?\d+)\] d=\d+ zero: chest unreachable/
// (v0.974.21) THE RENT'S OWN AGE BYTE - the wire's own measurement half. The
// field verdict (45/45 shadow on the two faces) priced the consult hole and
// the verdict law named the cure: the rent seat needs the consult byte. The
// wire rides the rent line's OWN tail - the failed hop re-consults the
// no-path ledger AT FAILURE MOMENT and the answer lands as a separate paren
// group AFTER the message's own parens ('chest unreachable (No path to the
// goal!) (ledger live 3s ago)') - the original reason bytes stay untouched,
// so every anchored consumer survives byte-true (the door leg's (.+)\)$
// capture still ends on the message's own paren, the hop census's bucket
// tests ride substrings of the untouched message). The census reads the byte
// and splits the SHADOW class: rode-live (the byte present - the ledger
// SPOKE at failure moment and the walk rode anyway: the decision preceded
// the verdict, the concurrency seam) vs rode-blind (no byte - the ledger was
// silent even at failure: the copy/propagation hole). A legacy rent line
// (no byte) reads rode-blind - the two-face record's shape byte-true.
const RENT_BYTE_RE = / \(ledger live (\d+)s ago\)$/

const cellKey = (x, y, z) => `${x},${y},${z}`

/** Parse one line into the cell's own event stream. Returns null on junk. */
export function rentShadowEvent (line) {
  if (typeof line !== 'string') return null
  let m = WRITE_RE.exec(line)
  if (m) {
    return { kind: 'write', cell: cellKey(+m[1], +m[2], +m[3]), ttlS: +m[5], timeout: Boolean(m[6]) }
  }
  m = HOLD_RE.exec(line)
  if (m) {
    return { kind: 'hold', cell: cellKey(+m[1], +m[2], +m[3]), ttlS: +m[5], timeout: false }
  }
  m = SKIP_RE.exec(line)
  if (m) {
    return { kind: 'skip', cell: cellKey(+m[2], +m[3], +m[4]), ageS: +m[1] }
  }
  m = RENT_RE.exec(line)
  if (m) {
    const b = RENT_BYTE_RE.exec(line)
    return { kind: 'rent', cell: cellKey(+m[1], +m[2], +m[3]), ledgerAgeS: b ? +b[1] : null }
  }
  return null
}

/**
 * Fold the log's rent-shadow census. Pure. Returns:
 *   cells         - per cell: { writes, holds, skips, rents, timeoutWrites,
 *                   lastSkipAgeS, classes: {blind, shadow, expired} }
 *   totals        - { writes, holds, skips, rents, blind, shadow, expired,
 *                   shadowLive, shadowBlind } (the v0.974.21 split: the
 *                   shadow class's own two seats - shadowLive + shadowBlind
 *                   always sum to shadow)
 *   verdict       - the owner's own word: 'blind' | 'shadow' | 'expired' |
 *                   'tie' | 'silent' (no rents at all)
 *   wireQuestion  - the priced read for the next fire's own seat
 */
export function rentShadowCensus (lines) {
  const cells = new Map()
  const totals = { writes: 0, holds: 0, skips: 0, rents: 0, blind: 0, shadow: 0, expired: 0, shadowLive: 0, shadowBlind: 0 }
  if (!Array.isArray(lines)) {
    return { cells, totals, verdict: 'silent', wireQuestion: 'no lines - nothing priced' }
  }
  for (const line of lines) {
    const ev = rentShadowEvent(line)
    if (!ev) continue
    if (!cells.has(ev.cell)) {
      cells.set(ev.cell, { writes: 0, holds: 0, skips: 0, rents: 0, timeoutWrites: 0, lastSkipAgeS: null, classes: { blind: 0, shadow: 0, expired: 0 }, lastWriteSeen: false, liveProven: false })
    }
    const c = cells.get(ev.cell)
    if (ev.kind === 'write') {
      c.writes++
      if (ev.timeout) c.timeoutWrites++
      c.lastWriteSeen = true
      c.liveProven = true // the write itself is the liveness's own t=0
    } else if (ev.kind === 'hold') {
      c.holds++
      c.lastWriteSeen = true
      c.liveProven = true
    } else if (ev.kind === 'skip') {
      c.skips++
      if (c.lastWriteSeen) c.lastSkipAgeS = ev.ageS // the age byte's own proof
    } else if (ev.kind === 'rent') {
      c.rents++
      let cls
      if (!c.lastWriteSeen) {
        cls = 'blind' // the ledger never spoke for this cell
      } else if (c.liveProven) {
        cls = 'shadow' // the rent rode inside the proven-live window - the consult hole's own candidate
        // (v0.974.21) the wire's own split: the byte's presence names WHICH
        // seat the hole rode - the ledger speaking at failure moment (rode-live,
        // the concurrency seam) vs silent even then (rode-blind, the copy hole)
        if (ev.ledgerAgeS != null) totals.shadowLive++
        else totals.shadowBlind++
        c.liveProven = false // one shadow rent consumes the proof (the next rent needs its own proof)
      } else {
        cls = 'expired' // the window closed (or no skip ever proved it) - the ttl's own brevity candidate
      }
      c.classes[cls]++
      totals[cls]++
    }
    totals[ev.kind + 's']++ // write->writes, hold->holds, skip->skips, rent->rents
  }
  const { blind, shadow, expired } = totals
  let verdict = 'silent'
  let wireQuestion = 'no rent priced - the repeat rent never spoke'
  const sum = blind + shadow + expired
  if (sum > 0) {
    const max = Math.max(blind, shadow, expired)
    const owners = [blind === max && max > 0 ? 'blind' : null, shadow === max && max > 0 ? 'shadow' : null, expired === max && max > 0 ? 'expired' : null].filter(Boolean)
    verdict = owners.length > 1 ? 'tie' : owners[0]
    if (verdict === 'shadow') wireQuestion = 'the consult hole owns - the consult byte rides the rent line now (the wire, v0.974.21): the split prices rode-live vs rode-blind'
    else if (verdict === 'expired') wireQuestion = "the ttl's own brevity owns - the chest floor needs its own turn (constant)"
    else if (verdict === 'blind') wireQuestion = "the write seat's own hole owns - the rent's cell never entered the ledger"
    else if (verdict === 'tie') wireQuestion = 'the tie owns nothing - the unanimity law refused the seat'
  }
  return { cells, totals, verdict, wireQuestion }
}

/** One decompose-shaped row beside the v0.862.0 repeats' own book. */
export function rentShadowRow (c) {
  if (!c || !c.totals || c.totals.rents === 0) return null
  const t = c.totals
  const share = n => t.rents ? (100 * n / t.rents).toFixed(1) : '0.0'
  // (v0.974.21) the split's own clause - rides ONLY when the face carried at
  // least one byte (a legacy byte-less face reads byte-identical: the
  // grammar-growth law, the honest silence on the unwired tree)
  const split = t.shadow > 0 && t.shadowLive > 0
    ? ` - the split: rode-live ${t.shadowLive} / rode-blind ${t.shadowBlind}`
    : ''
  return `the rent shadow's own book (v0.974.19): rents ${t.rents} on ${c.cells.size} cell(s) - blind ${t.blind} (${share(t.blind)}%) / shadow ${t.shadow} (${share(t.shadow)}%) / expired ${t.expired} (${share(t.expired)}%)${split} - ${c.verdict === 'tie' ? "THE TIE'S OWN SILENCE: the unanimity law refused the seat" : `THE ${c.verdict.toUpperCase()}'S OWN SEAT: ${c.wireQuestion}`}`
}
