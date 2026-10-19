// (v0.976.294) THE SERVER BOOT'S OWN DONE MASS - the server console's
// own boot-complete duration line the word prices across the faces.
// THE EVIDENCE (the seat the fleet-server-log artifact lane carries):
// the vanilla server's own boot finishes with '[16:11:11] [Server
// thread/INFO]: Done (3.009s)! For help, type "help"' (F495's own
// face, run 39281865630) - the total boot duration the server prints
// once per boot, the seconds cell the boot's own completion price -
// and no book owned the mass across the faces: the .293 boot prep
// word prices the same boot conversation's own 'Time elapsed' segment
// line (its grammar refuses the Done line by shape), the .278
// advancement word prices the same console's own advancement lines,
// the .281/.289/.290 gc words price the [gc] band, the .292 fill word
// prices the fill echo lane, the .291 receipt word prices the
// teardown's own write echo, the drowning module's rescueDone and the
// jobqueue's recordSpinDone are their own function names the grep
// never means - the boot done mass itself rode unread (the REAL
// twelve-face arc the faces carry: run36284626465 done 4.740s,
// run36286821015 done 3.263s, run36289053811 done 4.847s,
// run36292057377 done 4.762s, run36295859380 done 3.343s,
// run36301385048 done 4.617s, F478 done 3.728s, F486 done 5.062s,
// F488 done 4.813s, F493 done 4.834s, F494 done 4.225s, F495 done
// 3.009s - the TEN REAL windows the arc holds: W1 the swing 4.740 ->
// 3.263 (-1.477) -> 4.847 (+1.584), W2 the swing 3.263 -> 4.847
// (+1.584) -> 4.762 (-0.085), W3 the fade 4.847 -> 4.762 (-0.085) ->
// 3.343 (-1.419), W4 the swing 4.762 -> 3.343 (-1.419) -> 4.617
// (+1.274), W5 the swing 3.343 -> 4.617 (+1.274) -> 3.728 (-0.889),
// W6 the swing 4.617 -> 3.728 (-0.889) -> 5.062 (+1.334), W7 the
// swing 3.728 -> 5.062 (+1.334) -> 4.813 (-0.249), W8 the swing
// 5.062 -> 4.813 (-0.249) -> 4.834 (+0.021), W9 the swing 4.813 ->
// 4.834 (+0.021) -> 4.225 (-0.609), W10 the fade 4.834 -> 4.225
// (-0.609) -> 3.009 (-1.216) - TEN REAL WINDOWS TEN SPEAKS THE WORD
// BORN SPEAKING TEN DEEP, zero helds the family's strongest-or-equal
// birth the .290 word's own fifteen-for-fifteen the precedent holds).
//
// GRAMMAR: the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278/.293 word's own frame
// convention holds, the 'Done (' body, the seconds cell the JVM's own
// '%.3f' resolution prints - the integer part the proven integer no
// leading zero no sign (the .248 house law, the zero itself lawful -
// the sub-second boot), the dot, the exactly-three fractional digits
// the %.3f format never pads nor trims, the 's)' unit, the '! For
// help, type "help"' tail byte-exact, LINE END tail boundary (the
// .288 word's own precedent); the near-miss lanes never ride - the
// bot-tagged prefix, the pretty spacing, the integer-seconds skin,
// the two-decimal skin, the four-decimal skin, the leading-zero
// seconds, the negative seconds, the altered unit, the uppercase
// unit, the missing bang, the altered help tail, the leading
// whitespace, the trailing junk, the plural head, the altered verb,
// the CR tail. THE SIBLING LANES keep their own rows beside - the
// .293 boot prep word keeps the same boot conversation's own 'Time
// elapsed' segment seat, the 'Preparing spawn area' prose keeps its
// own row beside, the .278 advancement seat, the gc band, the .292
// fill lane, the .291 receipt seat, the counters band keep theirs.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281/.289/.290/.292/.293 folds the neighbours hold),
// the fleet's own console never changes.

const DONE_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Done \((0|[1-9]\d*)\.(\d{3})s\)! For help, type "help"$/

/**
 * The boot done census - the total boot duration the face's boot printed.
 *
 * The cell rides in whole milliseconds (the exact integer the %.3f
 * seconds carry - the float drift never touches the sum), the lane
 * sums whole (the .232 census law - one print one boot, a mid-face
 * reboot both boots price).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{ms: number}|null} the mass or null (non-array)
 */
export function bootDoneCensus (lines) {
  if (!Array.isArray(lines)) return null
  let ms = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = DONE_RE.exec(l)
    if (!m) continue
    ms += Number(m[2]) * 1000 + Number(m[3]) // the exact integer the %.3f seconds carry
  }
  return { ms }
}

/**
 * The fence - every face the proven non-negative integer cell.
 *
 * @param {{back: {ms: number}, prev: {ms: number}, cur: {ms: number}}} e
 * @returns {boolean}
 */
export function bootDoneConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.ms) && numOk(e.prev.ms) && numOk(e.cur.ms))
}

/**
 * The boot done weather's own two-step shape across three faces.
 *
 * The arc prints the seconds the face's own bytes hold (the %.3f
 * resolution byte-exact - the trailing zero the format pads never
 * trims), the deltas the milliseconds' own exact integers carry.
 *
 * @param {{back: {ms: number}, prev: {ms: number}, cur: {ms: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function bootDoneTrendRow (e) {
  if (!bootDoneConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.ms
  const p = prev.ms
  const c = cur.ms
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const sec = (n) => (n / 1000).toFixed(3)
  const step = (n) => `${n < 0 ? '-' : '+'}${sec(Math.abs(n))}`
  const arc = `${sec(b)} -> ${sec(p)} (${step(p - b)}) -> ${sec(c)} (${step(c - p)}) s`
  // a held step is no direction - the honest silence (the family's
  // own held law: the boot never invents)
  const first = p - b
  const second = c - p
  if (first === 0 || second === 0) return null
  const tail = '(the .293 boot prep word keeps the same boot conversation\'s own \'Time elapsed\' segment seat (its grammar refuses the Done line by shape), the \'Preparing spawn area\' prose keeps its own row beside, the .278 advancement word keeps the same console\'s own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the .292 fill word keeps the fill echo lane, the .291 receipt word keeps the teardown\'s own write echo, the counters band keeps the .261-.288 cells, the drowning module\'s rescueDone and the jobqueue\'s recordSpinDone are their own function names the grep never means - the boot done mass\'s row alone, co-existence by seat never by duplication)'
  if (first < 0 && second < 0) {
    return `the server boot trend (v0.976.294): the boot done's own fade ran two steps deep - ${arc} - the boot completed faster twice, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server boot trend (v0.976.294): the boot done's own swell ran two steps deep - ${arc} - the boot completed slower twice, ${tail}`
  }
  return `the server boot trend (v0.976.294): the boot done's own swing - ${arc} - the boot total traded between the faces, ${tail}`
}
