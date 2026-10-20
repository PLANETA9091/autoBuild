// (v0.976.339) THE WIDTH'S OWN SHAPE - the loss lane's own span faces
// the word classifies across the windows - the SHAPE cell (the wrap /
// flat / breath class each face's loss conversation keeps, the day
// boundary's own verdict on the lane's churn) the .335 width word
// prices the DISTANCE of and never the class of (the same lane's
// fourth mass: the width the span cell keeps, the shape the class
// cell this word prices - co-existence by seat never by
// duplication). THE AMBIGUITY PROOF THE SHAPE SPLITS: the 961
// ceiling three faces share and the width cell alone cannot
// separate - F505's own 961 the WRAP face carries (the dawn 85459,
// the dusk 20 the next day's first seconds) and F516's and F519's
// own 961 the FLAT faces carry (30185 -> 31146 and 38159 -> 39120,
// both dusk > dawn) - the same width number the two shapes ride and
// only the shape cell names which face crossed the midnight seam.
// THE SHAPE ARC: the REAL TWENTY-ONE-face arc the two byte-verified
// edge arcs derive (the .334 dawn arc and the .333 dusk arc the
// .335 width word re-rides) classifies TWENTY FLAT ONE WRAP ZERO
// BREATH - the day-boundary crossing the RARE exception the arc
// keeps (F505 the only wrap face, the flat shape 20 of 21 the
// normal order), the fresh F526-class flat faces the later reads
// agree (64717 -> 65585 flat 868 the fire-0043 face carries). THE
// THREE CLASSES THE ONE-HOT LAW KEEPS: the WRAP face (two or more
// prints, the numeric dusk < the numeric dawn - the day boundary
// the lane crossed), the FLAT face (two or more prints, dusk >=
// dawn - the lane stayed inside its own day), the BREATH face
// (exactly one print - the lane opened and closed on one breath,
// the span zero the .335 word prices honest, the single print the
// midnight seam never crosses), the SILENT face (no prints - the
// lane never spoke, all three cells zero the one-hot law keeps).
// THE GRAMMAR: the census re-rides the loss lane's own strict frame
// the .333/.334/.335 words hold byte-exact - the '[(HH:MM:SS)]
// [Server thread/INFO]: ' head, the '<name> lost connection:
// <reason>' body (the name cell rides shape only, the reason cell
// the two class skins ride shape only), LINE END tail boundary.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends), the fleet's own console never changes.

const FLEET_LOSS_LANE_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+ lost connection: (Disconnected|Timed out)$/

const toSec = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

const SILENT = { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 0 }
const WRAP = { lossWrapFace: 1, lossFlatFace: 0, lossBreathFace: 0 }
const FLAT = { lossWrapFace: 0, lossFlatFace: 1, lossBreathFace: 0 }
const BREATH = { lossWrapFace: 0, lossFlatFace: 0, lossBreathFace: 1 }

/**
 * The loss width's own shape census - the wrap / flat / breath class
 * the face's loss lane voiced (one-hot, the silent face all zero).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{lossWrapFace: number, lossFlatFace: number, lossBreathFace: number}|null} the shape or null (non-array)
 */
export function lossShapeCensus (lines) {
  if (!Array.isArray(lines)) return null
  let dawn = null
  let dusk = null
  let prints = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = FLEET_LOSS_LANE_RE.exec(l)
    if (m) {
      if (dawn === null) dawn = toSec(m) // the FIRST print - the .334 dawn hand's own law
      dusk = toSec(m) // the LAST print - the .333 dusk hand's own law
      prints++
    }
  }
  if (dawn === null) return { ...SILENT } // the lane never spoke
  if (prints === 1) return { ...BREATH } // the single breath - the seam never crossed
  if (dusk < dawn) return { ...WRAP } // the day boundary the lane crossed
  return { ...FLAT } // the lane stayed inside its own day
}

/**
 * The fence - the one-hot law the shape cells keep (each cell 0|1,
 * at most one cell hot per face, the three faces the window rides).
 *
 * @param {{back: object, prev: object, cur: object}} e
 * @returns {boolean}
 */
export function lossShapeConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (f) => {
    if (!f || typeof f !== 'object') return false
    const cells = [f.lossWrapFace, f.lossFlatFace, f.lossBreathFace]
    if (!cells.every((c) => Number.isInteger(c) && (c === 0 || c === 1))) return false
    return cells.reduce((a, c) => a + c, 0) <= 1 // the one-hot law
  }
  return Boolean(e.back && e.prev && e.cur && ok(e.back) && ok(e.prev) && ok(e.cur))
}

/**
 * The loss width's own shape row across three faces.
 *
 * @param {{back: object, prev: object, cur: object}} e
 * @returns {string|null} the row or the honest silence
 */
export function lossShapeTrendRow (e) {
  if (!lossShapeConsistent(e)) return null
  const faces = [e.back, e.prev, e.cur]
  const w = faces.reduce((a, f) => a + f.lossWrapFace, 0)
  const f = faces.reduce((a, x) => a + x.lossFlatFace, 0)
  const b = faces.reduce((a, x) => a + x.lossBreathFace, 0)
  // the all-silent window - the census never invents a lane the
  // console never voiced
  if (w + f + b === 0) return null
  const counts = `wrap ${w} / flat ${f} / breath ${b}`
  const tail = "(the shape the width's own faces keep: the .335 width word prices the lane's own span distance and the .334 fleet loss dawn word prices the lane's own FIRST print's clock cell and the .333 fleet closing clock word prices the lane's own LAST print's clock cell - the three hands this word's own inputs ride, the shape the class cell no distance alone can name (the 961 ceiling F505's wrap face and F516's and F519's flat faces share - the width cell the same number three faces carry, the shape cell the split keeps) and the .338 fleet ride word keeps the done-to-dusk span and the .337 boot quiet word keeps the open-to-dawn span and the .310 disconnect word keeps the Disconnected class count and the .311 timed out word keeps the Timed out class count and the .336 join echo drift word keeps the login pair's own drift and the leave lane the same-second sibling the burst-identity law keeps and the dupclock book keeps the duplicate-loss churn and the deathcause module keeps the death lane and the kick bill keeps the fleet log's own event cells and the .278 advancement word keeps the same console's own achievement seat and the .332 opening clock word keeps the boot conversation's own first second and the .331 selection and .330 completion and .293 prep and .294/.324 done-ms hands and the spawn-set family and the login family's thirteen hands and the gc band and the .292 fill lane - the loss shape's row alone, co-existence by seat never by duplication)"
  if (w >= 1) {
    return `the fleet's own loss shape (v0.976.339): the day-boundary wrap ran ${w} of the window's three faces deep - ${counts} - the loss lane crossed the midnight seam ${w} time(s) across the window, ${tail}`
  }
  return `the fleet's own loss shape (v0.976.339): the flat shape held - ${counts} - the loss lane stayed inside its own day across the window's speaking faces, ${tail}`
}
