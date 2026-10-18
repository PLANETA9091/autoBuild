// (v0.976.241) THE END-PHASE LIVE BOARD'S OWN MASS - the final report's
// own three boards the word prices across the faces. THE EVIDENCE (the
// fleet19 emitter, testbed/fleet19.mjs, the end-phase block v0.976.233's
// own watch built for): 'no-path ledger: 2 live verdict(s) at end phase',
// 'full-chest ledger: 0 live verdict(s) at end phase', 'walk-intent board:
// 1 live intent(s) at end phase' - the F469 face printed all three and
// then the exit watchdog fired ('the margin spent, the runners never
// drained', exit 12): the LIVE cells the boards hold at the deadline are
// the never-drain class's own evidence - a bot whose ledger still holds a
// live verdict or whose walk-intent never resolved is a bot whose runner
// cannot settle, and the parked runner is the await the drain never saw.
//
// THIS WORD TAKES THE SEAT: the strict grammar one machinery one block
// (the fleet19 end-phase lines speak - the 'ledger:' / 'board:' frame,
// the live count, the verdict(s)/intent(s) skins, every term byte-exact),
// the near-miss lanes never ride (the doomed-goal ledger's own live cell
// a different shape the doom book's own prose carries; the bank arm
// census and the pre-position census the neighbouring end-phase boards
// their own seats price; the mid-run record lines the record seats price;
// the truncated tail, the un-parenthesised plural, the alien count), the
// law is LAST-PRINT-WINS (the boards speak once per face at the final
// report - the last print the face's own closing word; a mid-block echo
// never outvotes the closer).
//
// THE CELLS: nopath / fullchest / walkintent (the three boards' own live
// counts). The trend reads the LIVE MASS arc two steps deep (nopath +
// fullchest + walkintent - the cells that hold the unsettled work): both
// steps down = the boards' own heal (the runners settle cleaner), both
// steps up = the boards' own swell (the parked class grows), a trade =
// the swing. The cur face's own split rides the read's own side-car (the
// per-board anatomy beside the mass). A held step prices no direction -
// the honest silence (the family's own held law); a three-face zero mass
// prices nothing - the runners drained clean (the lawful silence the
// zeros keep - the face the drain never doubts).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .240 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const NOPATH_LIVE_RE = /^no-path ledger: (\d+) live verdict\(s\) at end phase$/
const FULLCHEST_LIVE_RE = /^full-chest ledger: (\d+) live verdict\(s\) at end phase$/
const WALKINTENT_LIVE_RE = /^walk-intent board: (\d+) live intent\(s\) at end phase$/

/**
 * The census - the family's own strict grammar, the face's own closing
 * word (the boards speak once, the last print wins).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{nopath: number, fullchest: number, walkintent: number}|null}
 *   the live mass, or null when the lines themselves are junk (a face
 *   whose lines hold no end-phase board print is the LAWFUL ZERO - the
 *   report never reached the boards, the zeros speak)
 */
export function endPhaseBoardCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { nopath: 0, fullchest: 0, walkintent: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    let m = NOPATH_LIVE_RE.exec(l)
    if (m) { mass.nopath = Number(m[1]); continue }
    m = FULLCHEST_LIVE_RE.exec(l)
    if (m) { mass.fullchest = Number(m[1]); continue }
    m = WALKINTENT_LIVE_RE.exec(l)
    if (m) { mass.walkintent = Number(m[1]) }
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all three
 * proven integer counts (the zero lawful - the boards never spoke).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {nopath,fullchest,walkintent}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function endPhaseBoardCensusConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.nopath) && s.nopath >= 0 &&
      Number.isInteger(s.fullchest) && s.fullchest >= 0 &&
      Number.isInteger(s.walkintent) && s.walkintent >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the live mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face mass is zero (the runners drained - nothing to price), or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function endPhaseBoardCensusRow (e) {
  if (!endPhaseBoardCensusConsistent(e)) return null
  const { back, prev, cur } = e
  const massOf = (s) => s.nopath + s.fullchest + s.walkintent
  const b = massOf(back)
  const p = massOf(prev)
  const c = massOf(cur)
  // the runners drained across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const split = `the cur face's own split nopath ${cur.nopath} / fullchest ${cur.fullchest} / walkintent ${cur.walkintent}`
  const tail = "(the mid-run record lanes the record seats price, the doomed-goal ledger's own live cell the doom book's own prose carries, the exit watchdog's own verdict the runtime's own backstop holds - the boards' mass row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the end-phase live board trend (v0.976.241): the boards' own heal ran two steps deep - ${arc} - the live mass's own fade, ${split} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the end-phase live board trend (v0.976.241): the boards' own swell ran two steps deep - ${arc} - the live mass's own swell, ${split} ${tail}`
  }
  return `the end-phase live board trend (v0.976.241): the live mass's own swing - ${arc} - the heal and the swell traded seats between the faces, ${split} ${tail}`
}
