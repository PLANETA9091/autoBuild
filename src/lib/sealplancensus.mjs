// (v0.976.237) THE SEAL PLAN'S OWN VERDICT MASS - the tunnel seal plan's
// own lines the word prices across the faces. THE EVIDENCE (the fleet19
// emitter, testbed/fleet19.mjs, the v0.245.0 geometry face): 'F12 tunnel:
// seal plan: anchor solid, headroom clear - the seal-and-cross is
// buildable' - the seal-and-cross's own verdict line, printed per firing
// whenever a step-1 water lock carries sealable stock (the census arm's
// own gate - the water-lock census line the water-lock book's own cast
// prices rides one line ahead). The geometry face answered the canon's
// second question (CAN the standing bot place into the step-1 fluid cell)
// with FOUR verdicts - buildable (anchor solid, headroom clear: the seal
// may land), walled (anchor solid, headroom solid: the seal becomes a
// wall - the v0.250.0 dig-around named the class a BLOCKER, not a fate),
// unanchored (no face to click - the v0.369.0 anchor drop's own class),
// unknown (a blind read - the eyes never invented) - and no book prices
// the mass the verdicts hold across the faces.
//
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the fleet19 line speaks - the anchor word, the headroom word, the
// verdict word, every term byte-exact), the near-miss lanes never ride
// (the final climb's own 'shift pre-seal plan:' variant - a different
// prefix, a different lane; the water-lock census line the plan's own
// eyes ride one line ahead; the tunnel sealed's own line - co-existence
// by seat never by duplication), the mass SUMS every firing the face
// carries (the plan speaks per firing, the face's own mass is the sum -
// no last-print-wins here, the firing's own verdict is a vote).
//
// THE CELLS: buildable / walled / unanchored / unknown (the four
// verdicts' own counts). The trend reads the BLOCKED MASS arc two steps
// deep (walled + unanchored + unknown - the verdicts that kept the
// standoff, the vein's own burners): both steps down = the blockers'
// fade (the gallery stone read right, the dig-around's own heal), both
// steps up = the blockers' swell (the stand-off starves the veins), a
// trade = the swing. The buildable count rides the read's own side-car
// (the lane's own health beside the mass). A held step prices no
// direction - the honest silence (the family's own held law); a
// three-face zero mass prices nothing - the lane never fired (the
// lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .235 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const SEAL_PLAN_RE = /^(\S+) tunnel: seal plan: anchor (solid|open), headroom (clear|solid) - the seal-and-cross is (buildable|walled|unanchored|unknown)$/

/**
 * The census - the family's own strict grammar, the face's own mass
 * (every firing's own verdict a vote, the sum the mass keeps).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{buildable: number, walled: number, unanchored: number, unknown: number}|null}
 *   the verdict mass, or null when the lines themselves are junk (a
 *   face whose lines hold no plan print is the LAWFUL ZERO - the lane
 *   never fired, the zeros speak)
 */
export function sealPlanCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { buildable: 0, walled: 0, unanchored: 0, unknown: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SEAL_PLAN_RE.exec(l)
    if (!m) continue
    mass[m[4]]++
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all four
 * proven integer counts (the zero lawful - the lane never fired).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {buildable,walled,unanchored,unknown},
 *     prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function sealPlanCensusConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.buildable) && s.buildable >= 0 &&
      Number.isInteger(s.walled) && s.walled >= 0 &&
      Number.isInteger(s.unanchored) && s.unanchored >= 0 &&
      Number.isInteger(s.unknown) && s.unknown >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the blocked mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face mass is zero (the lane never fired - nothing to price), or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function sealPlanCensusRow (e) {
  if (!sealPlanCensusConsistent(e)) return null
  const { back, prev, cur } = e
  const massOf = (s) => s.walled + s.unanchored + s.unknown
  const b = massOf(back)
  const p = massOf(prev)
  const c = massOf(cur)
  // the lane never fired across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const side = `the buildable rode ${back.buildable} -> ${prev.buildable} -> ${cur.buildable}`
  const split = `the cur face's own split walled ${cur.walled} / unanchored ${cur.unanchored} / unknown ${cur.unknown}`
  const tail = "(the sealed trend's own seat prices the tunnel sealed's own lane, the water-lock book's own cast prices the census arm the plan's own eyes ride, the standoff's own verdict lanes price the crossing's own outcome - the plan's mass row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the seal plan trend (v0.976.237): the blockers' own heal ran two steps deep - ${arc} - the blocked mass's own fade, ${side}, ${split} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the seal plan trend (v0.976.237): the blockers' own starve ran two steps deep - ${arc} - the blocked mass's own swell, ${side}, ${split} ${tail}`
  }
  return `the seal plan trend (v0.976.237): the blocked mass's own swing - ${arc} - the heal and the starve traded seats between the faces, ${side}, ${split} ${tail}`
}
