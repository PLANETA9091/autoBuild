// (v0.976.341) THE BOOT'S OWN SAVE TRIO - the server console's own
// 'Saving chunks for level' lane the word prices across the faces -
// the TRIO cells (the boot conversation's own save flush: the count
// the three dimensions' own prints ride, the clock the flush's own
// second the vanilla server stamps the lane's prints with) the
// conversation's own SAVE phase named and never priced (the boot
// announces FIRST, the spawn is picked after, the spawn area preps,
// the Done line completes - and the save trio rides the completion's
// own second the faces keep; the .330 completion clock word prices
// the Done line's own clock cell and this word prices the trio's own
// prints - distinct emitters, co-existence by seat never by
// duplication). THE SAME-SECOND LAW THE FACES KEEP: the trio's own
// print second and the Done line's own second ride the same second
// every REAL face holds (run68's own face the fixture proof: the
// Done (5.023s) line and the trio's three prints all [05:49:08];
// the fresh harvest's own faces the law re-keeps: F525's Done
// (3.788s) and the trio both [17:20:42], F526's Done (4.952s) and
// the trio both [17:58:12], F527's Done (5.491s) and the trio both
// [18:49:37] - FOUR REAL FACES FOUR SAME SECONDS the flush's own
// breath the completion's own second swallows). THE ORDER LAW THE
// DIMENSIONS KEEP: the three prints' own ORDER varies the faces hold
// (run68 and F525 and F527 rode overworld -> the_nether -> the_end,
// F526's own face the variance proof: overworld -> the_end ->
// the_nether - the dimension cells ride shape only, the count and
// the clock the order never touches). THE EVIDENCE: the REAL
// FOUR-face trio arc mined from the committed fixture and the fresh
// artifacts (run68 the house fixture's own face [05:49:08] = 20948;
// F525 the fire-0130 lane's own run the harvest re-rides [17:20:42]
// = 62442; F526 the fire-0043 read's own face [17:58:12] = 64692;
// F527 the fire-0200 ride's own face [18:49:37] = 67777) - the
// fresh three-face arc the row prices 62442 -> 64692 (+2250) ->
// 67777 (+3085) the swell two steps deep (the boot's own flush rode
// later each face - the boot seconds' own drift the completion
// conversation's own pace keeps). THE PARTIAL TRIO'S OWN HONESTY:
// the face fewer than three prints carries prices the count honest
// (one or two the dims the console voiced - the census never invents
// a print) and the no-trio face the lawful zero (the count zero the
// clock null - the clock cell never lies a second the lane never
// rode). THE GRAMMAR: the census holds the trio lane's own strict
// frame byte-exact - the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the 'Saving chunks for level
// 'ServerLevel[world]'/minecraft:<dim>' body (the level cell
// 'ServerLevel[world]' rides byte-locked - all four REAL faces the
// same level name hold, a foreign level name the near-miss the lane
// refuses, the dimension cell the three class skins
// overworld|the_nether|the_end ride shape only, the clock cell
// zero-padded fixed fields), LINE END tail boundary (the .288
// precedent), the LAST print the clock keeps (the .333
// LAST-PRINT-WINS law the family hand holds). THE FENCE: the clock
// words' own integer law plus the day ceiling 0..86399 the same
// second the Done line stamps bounds; the count the print tally the
// non-negative integers keep. CENSUS GUARD: zero fleet wiring, zero
// new fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .340 folds the neighbours hold), the
// fleet's own console never changes.

const SAVE_TRIO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Saving chunks for level 'ServerLevel\[world\]'\/minecraft:(overworld|the_nether|the_end)$/

const toSec = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

/**
 * The save trio census - the boot conversation's own save flush the
 * face's trio lane voiced (count + the last print's clock second).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{saveTrioCount: number, saveTrioClock: number|null}|null} the cells or null (non-array)
 */
export function saveTrioCensus (lines) {
  if (!Array.isArray(lines)) return null
  let count = 0
  let clock = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SAVE_TRIO_RE.exec(l)
    if (m) {
      count++ // the print tally - the dims the console voiced
      clock = toSec(m) // the LAST print - the flush's closing breath the .333 hand keeps
    }
  }
  if (count === 0) return { saveTrioCount: 0, saveTrioClock: null } // the no-trio face - the lawful zero
  return { saveTrioCount: count, saveTrioClock: clock }
}

/**
 * The fence - the clock words' own integer law plus the day ceiling
 * 0..86399; the clock null iff the count zero the honesty keeps.
 *
 * @param {{back: {saveTrioCount: number, saveTrioClock: number|null}, prev: {saveTrioCount: number, saveTrioClock: number|null}, cur: {saveTrioCount: number, saveTrioClock: number|null}}} e
 * @returns {boolean}
 */
export function saveTrioConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (f) => {
    if (!f || typeof f !== 'object') return false
    const n = f.saveTrioCount
    const c = f.saveTrioClock
    if (!Number.isInteger(n) || n < 0) return false
    if (n === 0) return c === null // the no-trio face - the clock the honesty keeps null
    return Number.isInteger(c) && c >= 0 && c <= 86399
  }
  return Boolean(e.back && e.prev && e.cur && ok(e.back) && ok(e.prev) && ok(e.cur))
}

/**
 * The save trio weather's own two-step shape across three faces
 * (the clock arc the row prices - the flush's own drift).
 *
 * @param {{back: {saveTrioCount: number, saveTrioClock: number|null}, prev: {saveTrioCount: number, saveTrioClock: number|null}, cur: {saveTrioCount: number, saveTrioClock: number|null}}} e
 * @returns {string|null} the row or the honest silence
 */
export function saveTrioTrendRow (e) {
  if (!saveTrioConsistent(e)) return null
  const { back, prev, cur } = e
  // the never-voiced silence - the family's own shape keeps the
  // quiet (the census never invents a lane the console never rode)
  if (back.saveTrioCount === 0 && prev.saveTrioCount === 0 && cur.saveTrioCount === 0) return null
  // the partial family - a faceless clock the arc never invents
  if (back.saveTrioClock === null || prev.saveTrioClock === null || cur.saveTrioClock === null) return null
  const b = back.saveTrioClock
  const p = prev.saveTrioClock
  const c = cur.saveTrioClock
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the clocks never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the boot conversation's own completion sibling the same second keeps: the .330 Done clock word prices the Done line's own clock cell - the SAME-SECOND LAW the four REAL faces keep, the trio's own print second the Done line's own second the flush's own breath rides - and the .294/.324 done-ms hands price the Done line's own ms cell and the .332 opening clock word prices the boot conversation's own first second and the .331 selection clock word prices the spawn pick's own second and the .293 prep hand prices the 'Time elapsed' segment's own ms cell and the spawn-set family .325/.326/.327/.328/.329 the set lane's own cells keep and the login family's thirteen hands the .314 headcount keeps and the .337 boot quiet word prices the open-to-dawn outer span and the .340 pick reach word prices the select-to-dawn reach and the loss lane the .333/.334/.335/.338/.339 words price (the edges the span the ride the shape - the loss conversation the trio's own boot second precedes) and the .336 join echo drift seat and the .310/.311 class counts and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the save trio's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own save trio trend (v0.976.341): the fleet's own save trio fade ran two steps deep - ${arc} - the boot's own save flush rode earlier each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own save trio trend (v0.976.341): the fleet's own save trio swell ran two steps deep - ${arc} - the boot's own save flush rode later each face, ${tail}`
  }
  return `the fleet's own save trio trend (v0.976.341): the fleet's own save trio swing - ${arc} - the boot's own save flush traded its pace between the faces, ${tail}`
}
