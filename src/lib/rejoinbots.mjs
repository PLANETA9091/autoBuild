// (v0.976.347) THE FLEET'S OWN RE-JOIN BOTS - the server console's own
// '<name> joined the game' lane the word prices across the faces -
// the RE-JOIN BOTS CELL (the count of DISTINCT names whose own join
// tally the face carried past the first - the breadth of the churn
// the balance's own inner shape keeps). The .346 re-join bin word
// prices the lane's own DEPTH (the events beyond each name's first
// the tally sums - the churn's own mass) and the .314 join mass word
// prices the lane's own TOTAL and the .336 join echo drift word
// prices the echo's own clock cell - the BREADTH the depth never
// folded: the deep churner face (F512's own 18 events rode just FIVE
// bots) and the wide shallow face (F501's own 19 events rode
// SEVENTEEN) and the flap duo (F532's own 8 events rode TWO) and the
// lone flapper (F509's own 2 events rode ONE) the same mass the
// different widths the cells split. THE MULTI-CLASS LAW THE FACES
// KEEP: the REAL THIRTY-TWO-face arc F501-F532 keeps THIRTEEN
// distinct classes (1,2,3,4,5,6,7,8,9,10,13,15,17) no face
// born-constant the arc's own widths keep - the F501 face the
// breadth ceiling's own 17 rides (the widest churn the fleet voiced)
// and the F509 face the floor's own 1 rides (the lone flapper) and
// the fresh faces the census re-voices (F530's own 4, F531's own 7,
// F532's own 2) - MANY values speak, the seat LIVE, the
// born-constant decline never rides. THE BREADTH LAW: the bots never
// exceed the events the tally guarantees (each counted bot carries
// at least one event beyond its own first - the breadth <= depth the
// arithmetic keeps, F509's own 2 = 2 the equality face). THE HAND:
// every 'joined the game' echo the face voices the census reads in
// file order, the name's own join tally the bin keeps, the names
// whose tally reached the SECOND the count takes (joins minus
// distinct names counts the events, the tally's own tall columns
// count the bots - one lane two cells). THE LAWFUL ZERO: the face no
// re-join voices prices the breadth zero honest (the .304/.306
// convention the count words keep - the never-rejoined face the
// lawful zero). THE GRAMMAR: the census re-rides the strict frame
// the .336 word holds byte-exact (the '[(HH:MM:SS)] [Server
// thread/INFO]: ' head the INFO frame convention, the name cell rides
// shape only the .321 word's own shape law keeps, the 'joined the
// game' tail the lane's own skin byte-locked, LINE END tail boundary
// the .288 precedent). THE FENCE: the count words' own integer law
// plus the day ceiling 0..86399. CENSUS GUARD: zero fleet wiring,
// zero new fleet log lines - the word rides the reader's fold
// through the SECOND carrier lane (the argv[6..8] tail the .278
// contract extends, the .281 through .346 folds the neighbours
// hold), the fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The fleet's own re-join bots census - the breadth the depth never
 * folded (the count of DISTINCT names whose join tally the face
 * carried past the first).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinBotsCount: number}|null} the breadth or null (non-array)
 */
export function rejoinBotsCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (m) tally.set(m[4], (tally.get(m[4]) || 0) + 1)
  }
  let bots = 0
  for (const n of tally.values()) if (n > 1) bots++ // the names the churn rode
  return { rejoinBotsCount: bots }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinBotsCount: number}, prev: {rejoinBotsCount: number}, cur: {rejoinBotsCount: number}}} e
 * @returns {boolean}
 */
export function rejoinBotsConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinBotsCount) && ok(e.prev.rejoinBotsCount) && ok(e.cur.rejoinBotsCount))
}

/**
 * The re-join bots weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinBotsCount: number}, prev: {rejoinBotsCount: number}, cur: {rejoinBotsCount: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinBotsTrendRow (e) {
  if (!rejoinBotsConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinBotsCount
  const p = prev.rejoinBotsCount
  const c = cur.rejoinBotsCount
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the breadth never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own DEPTH (the events beyond each name's first the tally sums - the breadth the mass, the depth the events, the two cells 30 of 32 faces split) and the .314 join mass word prices the lane's own TOTAL (every echo the face holds) and the .336 join echo drift word prices the echo's own clock cell (the pair drift the login's own second keeps - one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the re-join bots' row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own re-join bots trend (v0.976.347): the fleet's own re-join bots fade ran two steps deep - ${arc} - the fleet's own churn narrowed each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own re-join bots trend (v0.976.347): the fleet's own re-join bots swell ran two steps deep - ${arc} - the fleet's own churn widened each face, ${tail}`
  }
  return `the fleet's own re-join bots trend (v0.976.347): the fleet's own re-join bots swing - ${arc} - the fleet's own churn traded its width between the faces, ${tail}`
}
