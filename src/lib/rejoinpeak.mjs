// (v0.976.348) THE FLEET'S OWN PEAK CHURNER - the server console's own
// '<name> joined the game' lane the word prices across the faces -
// the PEAK CELL (the single storm-bot's own depth: the TALLEST
// column the face's own join tally keeps, the max re-join events any
// ONE name carried). The .346 re-join bin word prices the lane's own
// TOTAL (the events beyond each name's first the tally sums - the
// churn's own MASS) and the .347 re-join bots word prices the
// BREADTH (the DISTINCT names the churn rode - the churn's own
// WIDTH) - the CONCENTRATION the two cells underprice: the same mass
// the same width the different storms (F533's own 15 events rode
// eleven bots whose tallest column three, F512's own 18 events rode
// five bots whose tallest column TEN - the mega-flapper F9's own
// eleven joins the deep churner's face keeps). THE STORM LAW THE
// FACES KEEP: the mass the breadth and the peak the same tally's
// three folds - F524's own face the storm proof (50 events, 10 bots,
// peak 11: the TWIN champions F17 and F1 twelve joins each, F8
// eleven the bronze column rides), F506's own face the lone
// champion's (12 events, 7 bots, peak 11: F1 twelve joins the single
// column the face's own storm), F514's own F9 twelve joins the same
// class. THE FLAT LAW: the peak ONE the every-once face (no bot rode
// twice - F529's and F530's own faces the floor classes, every
// re-joining bot exactly one event). THE MULTI-CLASS LAW: the REAL
// THIRTY-THREE-face arc F501-F533 keeps NINE distinct classes
// (1,2,3,4,5,6,7,10,11) no face born-constant the arc's own storms
// keep - the 11 ceiling THREE faces ride (F506/F514/F524 the storm
// class), the 10 the F512 mega-flapper class, the fresh faces the
// census re-voices (F531's own 2, F532's own 5, F533's own 3) -
// MANY values speak, the seat LIVE, the born-constant decline never
// rides. THE PEAK LAW: the peak never exceeds the events the tally
// guarantees (the tallest column rides within the mass - F533's own
// 3 of 15 the fresh face rides); the peak zero iff no re-join the
// face voices (the LAWFUL ZERO the .304/.306 convention the count
// words keep). THE HAND: every 'joined the game' echo the face
// voices the census reads in file order, the name's own join tally
// the bin keeps, the TALLEST beyond-first count the peak takes.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .347 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The fleet's own peak churner census - the concentration cell the
 * mass and breadth underprice (the max re-join events any ONE name
 * carried).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinPeakEvents: number}|null} the peak or null (non-array)
 */
export function rejoinPeakCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (m) tally.set(m[4], (tally.get(m[4]) || 0) + 1)
  }
  let peak = 0
  for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1) // the tallest column
  return { rejoinPeakEvents: peak }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinPeakEvents: number}, prev: {rejoinPeakEvents: number}, cur: {rejoinPeakEvents: number}}} e
 * @returns {boolean}
 */
export function rejoinPeakConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinPeakEvents) && ok(e.prev.rejoinPeakEvents) && ok(e.cur.rejoinPeakEvents))
}

/**
 * The peak churner weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinPeakEvents: number}, prev: {rejoinPeakEvents: number}, cur: {rejoinPeakEvents: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinPeakTrendRow (e) {
  if (!rejoinPeakConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinPeakEvents
  const p = prev.rejoinPeakEvents
  const c = cur.rejoinPeakEvents
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the peak never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the peak churner's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own re-join peak trend (v0.976.348): the fleet's own peak churner fade ran two steps deep - ${arc} - the fleet's own storm calmed each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own re-join peak trend (v0.976.348): the fleet's own peak churner swell ran two steps deep - ${arc} - the fleet's own storm grew each face, ${tail}`
  }
  return `the fleet's own re-join peak trend (v0.976.348): the fleet's own peak churner swing - ${arc} - the fleet's own storm traded its depth between the faces, ${tail}`
}
