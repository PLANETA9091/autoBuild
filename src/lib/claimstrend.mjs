// (v0.976.263) THE CLAIMS CELL'S OWN HOLD MASS - the counters line's own
// claims cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... airGlitches=0 claims=33 claimedHolds=0 wet=3
// wt=2' (F478's own face) and '... claims=17 claimedHolds=0 ...' (F479)
// and '... claims=23 claimedHolds=0 ...' (F480) and '... claims=19
// claimedHolds=0 wet=3 wt=2' (F481) - testbed/fleet19.mjs's counters
// line (fleet19.mjs:4682), one print per face, the claims cell the
// per-bot stats.claims sums (the trip commitments the fleet registered
// - src/fleet/claims.mjs's ClaimBoard, the v0.15.0 soft expiring claim
// the run 35485296464 pile-up lesson shipped: every bot onto one beach,
// banked=0, the choosing uncoordinated; a claim deters CLAIM_RADIUS's
// 32 blocks around a committed target for CLAIM_TTL_MS's 120s so the
// next scorer pays the 96-block penalty and walks elsewhere) - and no
// book owned the cell's own mass across the faces: the claims.mjs
// module owns the board's own runtime (the registry, the expiry, the
// sync lane), the torched word (the .261 word) prices the counters
// frame's torched cell beside, the hound shelter's own lane keeps its
// seat - the hold mass itself (the commitments the trip cadence spent,
// the detours the penalty bought) rode unread across the faces (33 ->
// 17 -> 23 -> 19 the four-face arc no row read). THIS WORD TAKES THE
// SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the claims -> claimedHolds cell band, the emitter's own
// template order, the two priced cells no leading zero no sign (the
// .248 house law), the anchor cells the emitter's own counts ride), the
// near-miss lanes never ride (the bare cell without the frame, the
// pretty spacing, the altered order, the leading zero, the negative
// count, the bot-tagged prefix, the drifted template, the truncated
// head, the wrong frame), the law LAST-PRINT-WINS - the counters line
// speaks once per face, the last print the freshest body the face held.
//
// THE CELLS: claims (the hold mass - the proven integer cell, the zero
// lawful - the never-claiming face keeps the healthy zero), claimedHolds
// (the board's own live end size the side-car holds - the expiry's own
// lawful zero the end phase keeps: the claims expire, the board reads
// empty at the report). The trend reads the claims mass's arc two steps
// deep (the family's own two-step shape): both steps down = the hold
// weather's own fade (the trips thinned - the map's own leaner targets),
// both steps up = the hold weather's own swell (the commitment surge -
// the trip cadence piled), a trade = the swing. A held step prices no
// direction - the honest silence (the family's own held law); a
// three-face zero claims mass prices nothing - the fleet never claimed
// the whole arc (the lawful silence the .255 churn ceiling's own
// lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const CLAIMS_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=(\d+) banked=(\d+) smelted=(\d+) planted=(\d+) torched=(\d+) fights=(\d+) kills=(\d+) shelters=(\d+) rescues=(\d+) pounces=(\d+) pounceLanded=(\d+) airGlitches=(\d+) claims=(0|[1-9]\d*) claimedHolds=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own claims cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{claims: number, claimedHolds: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function claimsCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { claims: 0, claimedHolds: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = CLAIMS_RE.exec(l)
    if (!m) continue
    mass.claims = Number(m[23]) // the head chain's own capture order: bots..airGlitches ride m[1..22], the priced cells ride m[23..24]
    mass.claimedHolds = Number(m[24])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-claiming face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {claims,claimedHolds}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function claimsConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.claims) && numOk(s.claimedHolds)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the claims mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never claimed -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {claims,claimedHolds}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function claimsTrendRow (e) {
  if (!claimsConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.claims
  const p = prev.claims
  const c = cur.claims
  // the fleet never claimed across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const holdsArc = `the claimedHolds rode ${back.claimedHolds} -> ${prev.claimedHolds} -> ${cur.claimedHolds}`
  const tail = "(the ClaimBoard's own runtime keeps the registry's seat, the torched word's own row keeps the counters frame's first cell seat (the .261 word), the hound shelter's own lane keeps its seat - the claims mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the claims trend (v0.976.263): the hold weather's own fade ran two steps deep - ${arc} - the claims mass's own fade, ${holdsArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the claims trend (v0.976.263): the hold weather's own swell ran two steps deep - ${arc} - the claims mass's own swell, ${holdsArc} ${tail}`
  }
  return `the claims trend (v0.976.263): the hold weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${holdsArc} ${tail}`
}
