// fleeseat.mjs - THE TRAP'S OWN SEAT (v0.921.0)
//
// The flee bearing histogram's own seat (the v0.375.0 census's own cells,
// zero re-parsing): the trapped-flee read printed the histogram raw for
// 500+ versions and its own comment named the cure's price leg ("a bearing
// diversity rule or a climb-out prices off this histogram") - the seat
// prices the repeats under the seat law family's own law (the v0.784.0
// kind seat's shape, the v0.788.0 attacker seat's own verdict, the
// v0.803.0 ask book's own strict-majority scan).
//
// THE CELL AXIS: the census's own key IS the atom - 'F14(2,2)' is one
// bot's own bearing; the row prints the key verbatim (the bill law: zero
// re-parsing, no fold, no split - the v0.920.0 cast's own precedent).
// Face 194 (38092578200): F14(2,2) x18 + F14(3,1) x6 = 24 flee events
// over 2 distinct bearings - ONE cell owning 75.0% of the flee book is
// the trap's own signature (the v0.375.0 comment's own words: "a trapped
// flee cannot be outrun by repeating it").
//
// THE STRICT-MAJORITY LAW: the top cell owns the flee book only above
// half; a tie owns nothing (the honest null - the spread needs the
// riders, not a named owner; the storm-has-no-seat precedent). The byte
// order decides the scan (the cell's own bytes).
//
// THE RIDERS - the seat's own silence's companion (the v0.803.0 riders'
// own shape, the v0.919.0 branch law's own fence): a MEASURE, never a
// verdict-owner - the top two cells' own concentration prices the shape
// the solo law refused to name. THE BRANCH LAW (never both): the riders
// speak only when the solo cell rode silent (the fence lives in the lib -
// the seat's own law re-judged here, a second seat would recurse the
// defect). THE BYTE LAW: counts desc, then the cell's own byte asc.
//
// Junk never invents a book: a non-object map, a malformed key (the
// census's own emitter law - 'F14(2,2)', the v0.375.0 loop's own shape),
// a non-finite or non-positive cell (skipped - the real cells still
// tally), or a zero-sum book reads the honest silence (null).
//
// Pure: reads, never mutates. Zero fleet wiring, zero new log lines -
// the row rides decompose beside the v0.375.0 prints (read-time tooling
// only, the CENSUS GUARD law).

// The census's own emitter law: the v0.375.0 loop's own key shape
// ('F14(2,2)') - the cell's own atom, never forked.
const CELL_RE = /^F\d+\(-?\d+,-?\d+\)$/

const foldCells = (fleeBearing) => {
  if (!fleeBearing || typeof fleeBearing !== 'object' || Array.isArray(fleeBearing)) return null
  const cells = []
  let total = 0
  for (const [key, n] of Object.entries(fleeBearing)) {
    if (typeof key !== 'string' || !CELL_RE.test(key)) continue
    if (!Number.isFinite(n) || n <= 0) continue
    cells.push({ key, n })
    total += n
  }
  if (cells.length === 0 || total <= 0) return null
  return { cells, total }
}

// (v0.921.0) the trap's own seat - the strict-majority law's verdict: the
// top cell owns the flee book only above half; a tie owns nothing. The
// byte order decides the scan (the cell's own bytes).
export function fleeSeat (fleeBearing) {
  const fold = foldCells(fleeBearing)
  if (!fold) return null
  let topOwns = 0
  let topKey = null
  for (const { key, n } of fold.cells.slice().sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0))) {
    if (n > topOwns) { topOwns = n; topKey = key }
  }
  if (topKey === null || topOwns <= fold.total - topOwns) return null
  return { key: topKey, owns: topOwns, ofFlees: fold.total, shareOfFlees: +(topOwns / fold.total).toFixed(3) }
}

// (v0.921.0) the flee book's own riders - the seat's own silence's
// companion: a measure, never a verdict-owner. THE BRANCH LAW (never
// both): the riders speak only when the solo cell rode silent - the
// seat's own law re-judged here (the v0.919.0 crowd's own fence shape).
// Fewer than two counted cells reads the honest silence (the solo face
// is the seat's own).
export function fleeRiders (fleeBearing) {
  const fold = foldCells(fleeBearing)
  if (!fold) return null
  const ranked = fold.cells.slice().sort((a, b) => b.n - a.n || (a.key < b.key ? -1 : 1))
  const leader = ranked[0]
  if (leader.n > fold.total - leader.n) return null // the branch law: the solo row owns the owner's face
  if (ranked.length < 2) return null // the solo face is the seat's own (the belt-and-suspenders fence)
  const runner = ranked[1]
  const pairN = leader.n + runner.n
  return { leader: leader.key, leaderN: leader.n, runner: runner.key, runnerN: runner.n, pairN, ofFlees: fold.total, shareOfFlees: +(pairN / fold.total).toFixed(3), duet: leader.n === runner.n }
}

// (v0.921.0) the trap seat's own row - THE TRAP'S OWN SEAT: one
// bot-bearing cell's own repeats own the flee book. Junk never prints a
// row (the honest silence's own row law): every field is guarded before
// the template speaks.
export function fleeSeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { key, owns, ofFlees, shareOfFlees } = seat
  if (typeof key !== 'string' || !key ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofFlees) || ofFlees <= 0 || owns > ofFlees ||
      !Number.isFinite(shareOfFlees)) return null
  return `the flee book's own cell (v0.921.0): ${key} owns ${owns} of ${ofFlees} flee(s) (${(shareOfFlees * 100).toFixed(1)}%) - THE TRAP'S OWN SEAT: one bot-bearing cell owns the flee book - the repeat is the trap (the v0.375.0 cure prices the diversity rule)`
}

// (v0.921.0) the flee riders' own row - THE FLEE'S OWN MIX: a measure of
// the repeats' own shape, never a named owner (the seat's tie law holds).
// Junk never prints a shape (the honest silence's own row law).
export function fleeRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderN, runner, runnerN, pairN, ofFlees, shareOfFlees } = r
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner ||
      !Number.isFinite(leaderN) || leaderN <= 0 || !Number.isFinite(runnerN) || runnerN <= 0 ||
      !Number.isFinite(ofFlees) || ofFlees <= 0 ||
      !Number.isFinite(pairN) || pairN > ofFlees ||
      !Number.isFinite(shareOfFlees)) return null
  return `the flee book's own cell (v0.921.0): no solo cell owns the majority - ${leader} x${leaderN} + ${runner} x${runnerN} own ${pairN} of ${ofFlees} flee(s) (${(shareOfFlees * 100).toFixed(1)}%) - THE FLEE'S OWN MIX: the seat's tie law held, the repeats are the shape - the cells' own bearings price the trap the solo law refused to name`
}
