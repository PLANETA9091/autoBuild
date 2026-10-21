// (v0.976.354) THE STORM'S OWN MEAN BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the MEAN BREATH CELL (the WHOLE cadence list one integer the
// compression prices: the consecutive re-join events in file order
// the adjacent pairs measure, the gaps the sum law's own division
// compresses, the FLOOR of the mean the census prices). The .346
// re-join bin word prices the lane's own TOTAL (the churn's own MASS)
// and the .347 re-join bots word prices the BREADTH (the churn's own
// WIDTH) and the .348 re-join peak word prices the PEAK (the churn's
// own DEPTH) and the .349 re-join peak name word prices the IDENTITY
// (WHO owns the tallest column) and the .350 re-join span word prices
// the TEMPO (the whole storm's own duration) and the .351 champion
// stretch word prices the champions' own RIDE and the .352 re-join
// gap word prices the storm's own TALLEST silence and the .353
// champion gap word prices the champion's OWN breathing - the MEAN
// BREATH the eight cells underprice: the .352 word prices the TALLEST
// silence only, the mean breath the WHOLE cadence list prices (the
// storm's own typical breath - the many small steps the tallest lone
// silence hides).
// THE MEAN LAW: the whole cadence table the sum law's own division
// prices - the gaps sum to the storm's own span (the .350 word's own
// arithmetic the same event set keeps, the day-cyclic wrap the
// accounting keeps), the mean breath the division's own FLOOR prices
// (the integer law the count words keep) - the mean the TALLEST gap
// bounds from above (mean <= the .352 word the tallest-silence law
// keeps) and the storm span bounds tighter (mean <= span the division
// keeps, the REAL FORTY-ONE-face audit GREEN).
// THE ZERO LAW: the mean zero iff the storm's own span zero (fewer
// than two re-join events OR every event the same second rides - the
// LAWFUL ZERO the count words keep, the mean0-iff-span0 the division
// keeps: span rides and the floor of a positive division never
// zeroes, the REAL audit GREEN).
// THE EQUALITY LAW (the single-gap storm): the mean EQUALS the span
// when ONE silence owns the whole storm (the gap count one the
// division never thins) - the REAL audit keeps TWO equality faces
// (F509's own 28=28 and F529's own 40=40 - the .352 word's own
// equality pair the same two-event faces keep, the single gap IS the
// storm and the mean IS the gap).
// THE MULTI-CLASS LAW: the REAL FORTY-ONE-face arc F501-F541 keeps
// MANY distinct classes no face born-constant - MANY values speak,
// the seat LIVE, the born-constant decline never rides.
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the beyond-first echoes the re-join events
// ride (the .346 word's own tally the beyond-first law keeps), the
// adjacent pairs the gaps measure (the second's own clock cell
// 0..86399 the day keeps, the wrap next+86400-first the day-cyclic
// precedent the .350 word holds), the WHOLE list the division
// compresses (the gap count the adjacent pairs keep, the floor the
// integer law keeps).
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .353 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The mean breath census - the storm's own WHOLE cadence list the
 * sum law's own division prices (the eight cells underprice).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinMeanBreathSeconds: number}|null} the mean or null (non-array)
 */
export function rejoinMeanBreathCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  const revts = [] // the re-join events (beyond each name's first) the FILE ORDER keeps
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    if (n > 1) revts.push({ name: m[4], s: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]) })
  }
  let span = 0
  if (revts.length >= 2) {
    const dawn = revts[0].s
    const dusk = revts[revts.length - 1].s
    span = dusk >= dawn ? dusk - dawn : dusk + 86400 - dawn // the day-cyclic wrap
  }
  const gaps = revts.length >= 2 ? revts.length - 1 : 0 // the adjacent pairs the cadence keeps
  const mean = gaps > 0 ? Math.floor(span / gaps) : 0 // the whole list one division prices
  return { rejoinMeanBreathSeconds: mean }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinMeanBreathSeconds: number}, prev: {rejoinMeanBreathSeconds: number}, cur: {rejoinMeanBreathSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinMeanBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinMeanBreathSeconds) && ok(e.prev.rejoinMeanBreathSeconds) && ok(e.cur.rejoinMeanBreathSeconds))
}

/**
 * The mean breath weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinMeanBreathSeconds: number}, prev: {rejoinMeanBreathSeconds: number}, cur: {rejoinMeanBreathSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinMeanBreathTrendRow (e) {
  if (!rejoinMeanBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinMeanBreathSeconds
  const p = prev.rejoinMeanBreathSeconds
  const c = cur.rejoinMeanBreathSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the mean breath never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (the champions whose own column equals the peak) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the mean breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own mean breath trend (v0.976.354): the fleet's own mean breath fade ran two steps deep - ${arc} - the fleet's own storms' typical breaths shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own mean breath trend (v0.976.354): the fleet's own mean breath swell ran two steps deep - ${arc} - the fleet's own storms' typical breaths stretched each face, ${tail}`
  }
  return `the fleet's own mean breath trend (v0.976.354): the fleet's own mean breath swing - ${arc} - the fleet's own storms traded their typical breath between the faces, ${tail}`
}
