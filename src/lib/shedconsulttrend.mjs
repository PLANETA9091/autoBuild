// (v0.976.239) THE SHED CONSULT'S OWN VERDICT TREND - the shed consult's
// own verdict lines the word prices across the faces. THE EVIDENCE (the
// F468 face, run 39137798623 - THE CONSULT LINE'S OWN FIRST LIVE FLEET
// READ, the v0.976.236 word's own emitter the .236 tree carried): 32
// consult lines spoke, the mass UNKNOWN 23 / LIGHT 7 - zero late, zero
// holding, zero go, zero seed. THE ANSWER THE FACE NAMED: the whale
// cure's own silence (zero 'shed' rides across F466 AND F467 whole -
// the fire-2200 read) was NEVER the healthy light and NEVER the clock's
// late - it was THE JUNK GATE: 'refused - unknown (the junk inputs price
// no shed - the guess-free zero)' the every-bot verdict, the shed arm's
// own inputs arriving junk at the moment it consults. The face cannot
// cure what it cannot read - the unknown mass IS the diagnostic.
//
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the bankshed book's own shedConsultLine template byte-exact - the
// light's two skins the generic and the numbered need/budget read, the
// late's two skins the clock read and the generic, the holding's two
// skins the clock read and the generic, the unknown the guess-free
// zero), the near-miss lanes never ride (the hybrid class/tail junk -
// a 'refused - unknown' wearing the light's tail prices nothing; the
// truncated tail; the alien why; the go and the seed the TRIP LINE's
// own verdicts - the bank trip family's own seat; the refractory the
// cadence keeps silent), the mass SUMS every consult the face carries
// (the consult speaks per SHED_RETRY_MS window per bot - the verdict a
// vote, the face's own mass the sum).
//
// THE CELLS: light / late / holding / unknown (the four verdicts' own
// counts). The trend reads the UNKNOWN mass arc two steps deep (the
// junk gate's own mass - the silence's owner the F468 face named):
// both steps down = the junk gate's fade (the inputs read clean, the
// cure can see), both steps up = the junk gate's swell (the consult
// blind, the cure starves), a trade = the swing. The light count rides
// the read's own side-car (the healthy face's own reads beside), the
// cur face's own split late/holding beside. A held step prices no
// direction - the honest silence (the family's own held law); a
// three-face zero unknown prices nothing - the consult never spoke
// the junk way (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .237 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const LIGHT_RE = /^(\S+) bank shed consult: refused - light \(the (?:need \d+s rides inside the budget \d+s|end bank covers the pocket) - the leanness law holds\)$/
const LATE_RE = /^(\S+) bank shed consult: deferred - late \(the trip cannot land(?:, \d+s of run clock left)? - the endphase owns the goal\)$/
const HOLDING_RE = /^(\S+) bank shed consult: deferred - holding \(the active shed trip owns the clock(?:, \d+s left)?\)$/
const UNKNOWN_RE = /^(\S+) bank shed consult: refused - unknown \(the junk inputs price no shed - the guess-free zero\)$/

/**
 * The census - the family's own strict grammar, the face's own verdict
 * mass (every consult's own verdict a vote, the sum the mass keeps).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{light: number, late: number, holding: number, unknown: number}|null}
 *   the verdict mass, or null when the lines themselves are junk (a
 *   face whose lines hold no consult print is the LAWFUL ZERO - the
 *   arm never consulted, the zeros speak)
 */
export function shedConsultCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { light: 0, late: 0, holding: 0, unknown: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (LIGHT_RE.test(l)) { mass.light++; continue }
    if (LATE_RE.test(l)) { mass.late++; continue }
    if (HOLDING_RE.test(l)) { mass.holding++; continue }
    if (UNKNOWN_RE.test(l)) mass.unknown++
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all four
 * proven integer counts (the zero lawful - the arm never consulted).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {light,late,holding,unknown}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function shedConsultTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.light) && s.light >= 0 &&
      Number.isInteger(s.late) && s.late >= 0 &&
      Number.isInteger(s.holding) && s.holding >= 0 &&
      Number.isInteger(s.unknown) && s.unknown >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the junk gate's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face unknown mass is zero (the consult never spoke the junk way
 * - nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function shedConsultTrendRow (e) {
  if (!shedConsultTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.unknown - back.unknown
  const second = cur.unknown - prev.unknown
  const arc = `${back.unknown} -> ${prev.unknown} (${first >= 0 ? '+' : ''}${first}) -> ${cur.unknown} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const side = `the light rode ${back.light} -> ${prev.light} -> ${cur.light}`
  const split = `the cur face's own split late ${cur.late} / holding ${cur.holding}`
  const tail = "(the formatter's own seat the bankshed book prices, the trip line's own verdicts the bank trip family's own seat prices, the arms' census the silent arms word prices - the consult's verdict mass alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the shed consult trend (v0.976.239): the junk gate's own heal ran two steps deep - ${arc} - the unknown mass's own fade, ${side}, ${split} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the shed consult trend (v0.976.239): the junk gate's own starve ran two steps deep - ${arc} - the unknown mass's own swell, ${side}, ${split} ${tail}`
  }
  return `the shed consult trend (v0.976.239): the unknown mass's own swing - ${arc} - the heal and the starve traded seats between the faces, ${side}, ${split} ${tail}`
}
