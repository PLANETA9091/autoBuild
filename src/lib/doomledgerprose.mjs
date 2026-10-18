// (v0.976.242) THE DOOMED-GOAL LEDGER'S OWN LIVE RESIDUE - the final
// report's own doom prose the word prices across the faces. THE EVIDENCE
// (the fleet19 emitter, testbed/fleet19.mjs, the final-report block):
// 'doomed-goal ledger: 228 recorded, 686 re-issues refused at the funnel,
// 29 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer
// out-pace the ttl), 1 live at end phase (v0.72.0 spiral breaker)' - the
// F469 face printed the prose and then the exit watchdog fired (exit 12,
// the runners never drained): the LIVE cell is the never-drain class's
// own second witness - a doom still live at end phase is a goal the
// spiral never settled, the parked work the drain must still walk past.
// The .241 board word named the seat and kept it (the doomed-goal
// ledger's own live cell a different shape the doom book's own prose
// carries) - THIS WORD TAKES IT: the strict grammar one emitter one
// shape (the 'doomed-goal ledger:' frame, the four proven integers, the
// backoff and breaker prose byte-exact), the near-miss lanes never ride
// (the mid-run 'doomed goal (ledgered Ns ago ...)' refusal lines the
// doom book's own lane prices, the walk/bank refusal prose cells, the
// .241 boards' own ledger/board lines, the truncated tail, the
// un-parenthesised plural, the altered backoff prose, the alien count),
// the law is LAST-PRINT-WINS (the ledger speaks once per face at the
// final report - the last print the face's own closing word).
//
// THE CELLS: recorded / refusals / absorbed / live (the prose's own four
// proven integers). The trend reads the LIVE MASS arc two steps deep
// (the end-phase residue - the dooms the spiral never settled): both
// steps down = the spiral's own heal (the dooms settle cleaner), both
// steps up = the spiral's own swell (the parked dooms grow), a trade =
// the swing. The cur face's own split rides the read's own side-car
// (records / refusals / absorbed beside the mass). A held step prices no
// direction - the honest silence (the family's own held law); a
// three-face zero live prices nothing - the spiral never parked a doom
// (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .240/.241 words' own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const DOOM_LEDGER_PROSE_RE = /^doomed-goal ledger: (\d+) recorded, (\d+) re-issues refused at the funnel, (\d+) re-dooms absorbed \(the v0\.96\.0 backoff - the storm can no longer out-pace the ttl\), (\d+) live at end phase \(v0\.72\.0 spiral breaker\)$/

/**
 * The census - the prose's own strict grammar, the face's own closing
 * word (the ledger speaks once, the last print wins).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{recorded: number, refusals: number, absorbed: number, live: number}|null}
 *   the residue, or null when the lines themselves are junk (a face
 *   whose lines hold no doom-ledger prose print is the LAWFUL ZERO -
 *   the report never reached the ledger, the zeros speak)
 */
export function doomLedgerProseCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { recorded: 0, refusals: 0, absorbed: 0, live: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = DOOM_LEDGER_PROSE_RE.exec(l)
    if (m) {
      mass.recorded = Number(m[1])
      mass.refusals = Number(m[2])
      mass.absorbed = Number(m[3])
      mass.live = Number(m[4])
    }
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all four
 * proven integer counts (the zero lawful - the ledger never spoke).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {recorded,refusals,absorbed,live}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function doomLedgerProseCensusConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.recorded) && s.recorded >= 0 &&
      Number.isInteger(s.refusals) && s.refusals >= 0 &&
      Number.isInteger(s.absorbed) && s.absorbed >= 0 &&
      Number.isInteger(s.live) && s.live >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the live residue's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law), the three-face residue is zero (the spiral never parked - the
 * lawful silence), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function doomLedgerProseCensusRow (e) {
  if (!doomLedgerProseCensusConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.live
  const p = prev.live
  const c = cur.live
  // the spiral never parked a doom across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const split = `the cur face's own split records ${cur.recorded} / refusals ${cur.refusals} / absorbed ${cur.absorbed}`
  const tail = "(the mid-run refusal lines the doom book's own lane prices, the .241 boards' own live cells the board word prices, the exit watchdog's own verdict the runtime's own backstop holds - the ledger's prose row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the doomed-goal ledger prose trend (v0.976.242): the spiral's own heal ran two steps deep - ${arc} - the live residue's own fade, ${split} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the doomed-goal ledger prose trend (v0.976.242): the spiral's own swell ran two steps deep - ${arc} - the live residue's own swell, ${split} ${tail}`
  }
  return `the doomed-goal ledger prose trend (v0.976.242): the live residue's own swing - ${arc} - the heal and the swell traded seats between the faces, ${split} ${tail}`
}
