// (v0.976.293) THE SERVER BOOT'S OWN PREP MASS - the server console's
// own spawn-prep duration line the word prices across the faces. THE
// EVIDENCE (the seat the fleet-server-log artifact lane carries): the
// vanilla server's own boot prints '[14:42:22] [Server thread/INFO]:
// Time elapsed: 3927 ms' (F494's own face, run 39268802792) - the
// spawn-area preparation duration the server prints once per boot,
// the millisecond cell the world's own readiness price - and no book
// owned the mass across the faces: the .278 advancement word prices
// the same console's own advancement lines, the .281/.289/.290 gc
// words price the [gc] band, the .292 fill word prices the fill echo
// lane (its grammar refuses the boot line by shape), the drowning
// module's rescueDone and the jobqueue's recordSpinDone are their own
// function names the grep never means - the boot prep mass itself
// rode unread (the REAL seven-face arc the faces carry:
// run36284626465 prepped 4433 ms, run36286821015 prepped 3067 ms,
// run36289053811 prepped 4629 ms, run36292057377 prepped 4471 ms,
// F492 prepped 3628 ms, F493 prepped 4570 ms, F494 prepped 3927 ms -
// the five REAL windows the arc holds: W1 the swing 4433 -> 3067
// (-1366) -> 4629 (+1562), W2 the swing 3067 -> 4629 (+1562) -> 4471
// (-158), W3 the fade 4629 -> 4471 (-158) -> 3628 (-843) - the boot's
// own relief the fade names, W4 the swing 4471 -> 3628 (-843) -> 4570
// (+942), W5 the swing 3628 -> 4570 (+942) -> 3927 (-643) - FIVE REAL
// WINDOWS FIVE SPEAKS THE WORD BORN SPEAKING FIVE DEEP).
//
// GRAMMAR: the server's own frame byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head the .278 word's own frame convention
// holds, the 'Time elapsed: ' body, the N cell the proven integer no
// leading zero no sign (the .248 house law), the ' ms' tail, LINE END
// tail boundary (the .288 word's own precedent); the near-miss lanes
// never ride - the bot-tagged prefix, the pretty spacing, the missing
// unit, the altered unit, the float, the leading-zero N, the negative
// N, the leading whitespace, the trailing junk, the plural head, the
// CR tail. THE SIBLING LANES keep their own rows beside - the 'Done
// (N.NNNs)!' boot-complete line and the 'Preparing spawn area' prose
// the same boot conversation holds this word never prices.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281/.289/.290/.292 folds the neighbours hold), the
// fleet's own console never changes.

const BOOT_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Time elapsed: (0|[1-9]\d*) ms$/

/**
 * The boot prep census - the duration the face's boot printed.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{prep: number}|null} the mass or null (non-array)
 */
export function bootPrepCensus (lines) {
  if (!Array.isArray(lines)) return null
  let prep = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = BOOT_RE.exec(l)
    if (!m) continue
    prep += Number(m[2]) // the lane sums whole (the .232 census law - one print one boot, a mid-face reboot both boots price)
  }
  return { prep }
}

/**
 * The fence - every face the proven non-negative integer cell.
 *
 * @param {{back: {prep: number}, prev: {prep: number}, cur: {prep: number}}} e
 * @returns {boolean}
 */
export function bootPrepConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.prep) && numOk(e.prev.prep) && numOk(e.cur.prep))
}

/**
 * The boot prep weather's own two-step shape across three faces.
 *
 * @param {{back: {prep: number}, prev: {prep: number}, cur: {prep: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function bootPrepTrendRow (e) {
  if (!bootPrepConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.prep
  const p = prev.prep
  const c = cur.prep
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the boot never invents - the REAL faces' own held
  // prairie the equal-duration windows the silence prices)
  if (first === 0 || second === 0) return null
  const tail = "(the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the .292 fill word keeps the fill echo lane (its grammar refuses the boot line by shape), the 'Done (N.NNNs)!' boot-complete line and the 'Preparing spawn area' prose keep their own rows beside (the same boot conversation's siblings this word never prices), the drowning module's rescueDone and the jobqueue's recordSpinDone are their own function names the grep never means - the boot prep mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server boot trend (v0.976.293): the boot prep's own fade ran two steps deep - ${arc} ms - the world readied faster, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server boot trend (v0.976.293): the boot prep's own swell ran two steps deep - ${arc} ms - the world readied slower, ${tail}`
  }
  return `the server boot trend (v0.976.293): the boot prep's own swing - ${arc} ms - the readiness traded between the faces, ${tail}`
}
