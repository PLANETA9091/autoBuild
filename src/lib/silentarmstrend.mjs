// (v0.976.235) THE SILENT ARMS TREND - the bank arm census's own line the
// word prices across the faces. THE EVIDENCE (the F466 face, run
// 39126831061): 'bank arm census: 2 bot(s) never armed a bank pass - their
// end pockets carried 0u - the arms' silence is the face's own read' - the
// arming ladder's own health row, printed once per face by the final
// report block (testbed/fleet19.mjs, the silentArms fold). The deep strand
// word (src/lib/deepstrand.mjs) named the census its FIRST face's own
// motivation (fleet 37154867210 read ALL 19 arms silent) but never owned
// the line itself - the series (19 silent -> ... -> 2 silent) the faces
// hold is the arming ladder's own recovery curve, and no book prices it.
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape (the
// census's own template the fleet19 line speaks - the bot(s) count, the
// end pockets' own carried total, the optional top clause the fleet19
// template appends only when a top arm carries >0u), the near-miss lanes
// never ride (the deep strand's own pricing prose, the write-off's own
// final line, the bank attribution's own stranded row - different lanes,
// different seats, co-existence by seat never by duplication).
//
// THE CELLS: bots (the silent arms' own count - the ladder's own health)
// and units (the end pockets' own carried total the silent arms hold -
// the F466 read 0u: the silence cost nothing THAT face, the whale
// strands rode the stall class instead). The trend reads the bots arc
// two steps deep - the family's own two-step shape (the .232 sweep
// collected lane's own precedent): both steps down = the arms' fade (the
// ladder heals), both steps up = the arms' swell (the ladder starves),
// a trade = the swing. A held step prices no direction - the honest
// silence (the bars never invent, the family's own held law).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .232 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const CENSUS_RE = /^bank arm census: (\d+) bot\(s\) never armed a bank pass - their end pockets carried (\d+)u(?: \(top (F\d+)=(\d+)u\))? - the arms' silence is the face's own read$/

/**
 * The census - the family's own strict grammar, the word's own read
 * (the .230 bankWalkPathEventCount precedent the family's census rides,
 * the .232 sweep collected lane's own count the same law holds).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{bots: number, units: number, top: {bot: string, units: number}|null}|null}
 *   the census state, or null when the face's lines hold no census print
 *   (the pre-census faces the null a lawful no-read)
 */
export function silentArmsOfCensus (lines) {
  if (!Array.isArray(lines)) return null
  for (let i = lines.length - 1; i >= 0; i--) {
    const l = lines[i]
    if (typeof l !== 'string') continue
    const m = CENSUS_RE.exec(l)
    if (!m) continue
    return {
      bots: Number(m[1]),
      units: Number(m[2]),
      top: m[3] ? { bot: m[3], units: Number(m[4]) } : null
    }
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
 *   { back: {bots, units}, prev: {bots, units}, cur: {bots, units} }
 * @returns {boolean}
 */
export function silentArmsTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.bots) && s.bots >= 0 &&
      Number.isInteger(s.units) && s.units >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the silent arms' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law) or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {bots, units}, prev: {bots, units}, cur: {bots, units} }
 * @returns {string|null} the row byte, or null
 */
export function silentArmsTrendRow (e) {
  if (!silentArmsTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.bots - back.bots
  const second = cur.bots - prev.bots
  const arc = `${back.bots} -> ${prev.bots} (${first >= 0 ? '+' : ''}${first}) -> ${cur.bots} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  // the units ride the read's own side-car: the silence's own cost the
  // faces carry beside the count (the F466 read 0u - the crater the
  // stall class owned, the arms' silence innocent that face)
  const cost = `the silent arms' own end pockets carried ${back.units}u -> ${prev.units}u -> ${cur.units}u`
  const tail = "(the deep strand's own seat prices the strand class the silence's own face named, the bank budget clamp's own trend prices the bank chains crater front's own budget seat, the write-off whys' own front prices the deadline's own why split - the arms' health row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the silent arms trend (v0.976.235): the ladder's own heal ran two steps deep - ${arc} - the silent arms' own fade, ${cost} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the silent arms trend (v0.976.235): the ladder's own starve ran two steps deep - ${arc} - the silent arms' own swell, ${cost} ${tail}`
  }
  return `the silent arms trend (v0.976.235): the silent arms' own swing - ${arc} - the heal and the starve traded seats between the faces, ${cost} ${tail}`
}
