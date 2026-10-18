// (v0.976.238) THE PLAN PROGRESS TREND - the materials plan's own completion
// census the word prices across the faces. THE EVIDENCE (the F466 and the
// F467 faces, runs 39126831061 and 39131684179): the final report printed
// 'plan progress: 1/31 resources complete' and 'plan progress: 2/31
// resources complete' (testbed/fleet19.mjs, the plan progress fold - the
// count of the materials plan's resources whose have side reached the need)
// and no book owned the line - the family RESERVED the seat by name (three
// refusal pins stand: the deficits row's own lane, the plan top's own lane,
// the map trip's own lane each refuse the line - 'the plan progress row is
// its own lane') and the seat stood empty: decompose's own scan prices a
// raw count only, the maptrip lens prices the trip lane's own launches and
// skips, the plan top trend prices the per-resource board - the completion
// census itself, the plan's own headline, rode unread.
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape (the
// final report's own template - the done count over the board's own total),
// the near-miss lanes never ride (the plan top rows, the map trip lines,
// the deficits rows, the materials plan header prose, the truncated tails).
//
// THE CELLS: done (the resources complete - the plan's own score) and
// total (the board's own scope). The trend reads the done arc two steps
// deep - the family's own two-step shape (the .235 silent arms trend's own
// precedent): both steps up = the plan's own climb (the resources complete),
// both steps down = the plan's own retreat (the have side fell below the
// need), a trade = the swing. A held step prices no direction - the honest
// silence (the bars never invent, the family's own held law). The board's
// own scope rides the read's own side-car: the plan's own size across the
// faces (the emitter's keys count - the scope the done count divides).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .235 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const PLAN_PROGRESS_RE = /^plan progress: (\d+)\/(\d+) resources complete$/

/**
 * The census - the family's own strict grammar, the word's own read
 * (the .230 bankWalkPathEventCount precedent the family's census rides,
 * the .235 silent arms' own count the same law holds).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{done: number, total: number}|null}
 *   the census state, or null when the face's lines hold no completion
 *   print (the pre-report faces the null a lawful no-read)
 */
export function planProgressOfCensus (lines) {
  if (!Array.isArray(lines)) return null
  for (let i = lines.length - 1; i >= 0; i--) {
    const l = lines[i]
    if (typeof l !== 'string') continue
    const m = PLAN_PROGRESS_RE.exec(l)
    if (!m) continue
    return { done: Number(m[1]), total: Number(m[2]) }
  }
  return null
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold a proven
 * census (the null face the wire skips - no two-back face given ->
 * no read, the carrier's own null pass). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {done, total}, prev: {done, total}, cur: {done, total} }
 * @returns {boolean}
 */
export function planProgressTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.done) && s.done >= 0 &&
      Number.isInteger(s.total) && s.total >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the plan progress's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law) or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {done, total}, prev: {done, total}, cur: {done, total} }
 * @returns {string|null} the row byte, or null
 */
export function planProgressTrendRow (e) {
  if (!planProgressTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.done - back.done
  const second = cur.done - prev.done
  const arc = `${back.done} -> ${prev.done} (${first >= 0 ? '+' : ''}${first}) -> ${cur.done} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  // the board's own scope rides the read's own side-car: the plan's
  // own size the done count divides (the F466 and the F467 faces read
  // 31 -> 31 -> 31 - the scope the climb stood on)
  const scope = `the board's own scope ${back.total} -> ${prev.total} -> ${cur.total}`
  const tail = "(the plan top's own seat prices the per-resource board, the maptrip lens prices the trip lane's own launches and skips, the deficits row's own trend prices the deficit mass, the bankcensus's own seat prices the banking side - the completion census alone, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the plan progress trend (v0.976.238): the plan's own climb ran two steps deep - ${arc} - the resources' own completion, ${scope} ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the plan progress trend (v0.976.238): the plan's own retreat ran two steps deep - ${arc} - the resources' own fade, ${scope} ${tail}`
  }
  return `the plan progress trend (v0.976.238): the plan's own swing - ${arc} - the climb and the retreat traded seats between the faces, ${scope} ${tail}`
}
