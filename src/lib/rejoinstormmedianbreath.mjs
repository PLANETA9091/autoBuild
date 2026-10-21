// (v0.976.356) THE STORM'S OWN MEDIAN BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the MEDIAN BREATH CELL (the cadence list's own CENTRE the sort law
// prices: the consecutive re-join events in file order the adjacent
// pairs measure, the gaps the ascending sort orders, the MIDDLE gap
// (or the two middle gaps' own floored half-sum) the census prices).
// The .354 mean breath word prices the storm's own typical breath by
// the SUM's division - the tallest lone silence the sum carries (the
// REAL arc the mean the tallest gap's own gravity keeps) - the MEDIAN
// the SUM never consults: the centre gap the sort law picks, the
// outlier silence the centre ignores. THE REAL FORTY-SIX-face audit
// keeps the dialog HONEST: the median UNDER the mean FORTY-ONE faces (the
// tallest silence's own gravity the mean carries, the median drops),
// level THREE faces (the single-gap rides the centre IS the storm),
// above TWO faces (the busy majority outweighs the lone giant) - no
// constant order, the ROBUST seat the dialog itself prices.
// THE ZERO LAW: the median zero when the cadence lists no gap (the
// CONSTRUCTIVE zero - fewer than two re-join events no centre keeps);
// a VOICED gap list may price the zero lawfully (the same-second
// re-join pair the zero gap keeps - the REAL ALL-ZERO face F545's own
// 2-events 1-gap 0 the archive keeps, median IS mean IS span IS zero
// the four-zero face). The one-way law the census's own arithmetic
// keeps.
// THE BOUND LAW: the median a gap list's own member (the odd count)
// or two members' own floored half-sum (the even count) - the MIN
// bounds from below, the TALLEST gap (the .352 word) bounds from
// above (min <= median <= gapMax, the REAL audit GREEN), the storm
// span bounds wider (median <= span, the REAL audit GREEN).
// THE EQUALITY LAW (the single-gap storm): the median EQUALS the gap
// EQUALS the mean EQUALS the span when ONE silence owns the whole
// storm (the centre IS the list) - the REAL audit keeps the family's
// own equality faces (F509's own 28=28, F530's own 40=40, the
// ALL-ZERO face's own 0=0=0=0 - the .352/.353/.354/.355 words' own
// equality set the same two-event faces keep).
// THE MULTI-CLASS LAW: the REAL FORTY-SIX-face arc F501-F546 keeps
// TWENTY-THREE distinct classes no face born-constant - the 0 floor
// the ALL-ZERO face keeps, the 2 the triple (three faces the busy
// centre keeps), the 59 the ceiling face F531's own census voices,
// MANY values speak, the seat LIVE, the born-constant decline never
// rides.
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the beyond-first echoes the re-join events
// ride (the .346 word's own tally the beyond-first law keeps), the
// adjacent pairs the gaps measure (the second's own clock cell
// 0..86399 the day keeps, the wrap next+86400-first the day-cyclic
// precedent the .350 word holds), the ascending sort the centre
// picks (the odd count the middle member, the even count the two
// middle members' floored half-sum the integer law keeps).
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .355 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The median breath census - the cadence list's own CENTRE the sort
 * law prices (the .354 word's own sum never consults).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormMedianBreathSeconds: number}|null} the median or null (non-array)
 */
export function rejoinStormMedianBreathCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  const revts = [] // the re-join events (beyond each name's first) the FILE ORDER keeps
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    if (n > 1) revts.push(Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]))
  }
  const gaps = []
  for (let i = 1; i < revts.length; i++) {
    const cur = revts[i - 1]
    const nxt = revts[i]
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur) // the day-cyclic wrap
  }
  if (gaps.length === 0) return { rejoinStormMedianBreathSeconds: 0 } // the CONSTRUCTIVE zero
  const sorted = [...gaps].sort((a, b) => a - b)
  const n = sorted.length
  const median = n % 2 === 1
    ? sorted[(n - 1) / 2] // the middle member
    : Math.floor((sorted[n / 2 - 1] + sorted[n / 2]) / 2) // the floored half-sum
  return { rejoinStormMedianBreathSeconds: median }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinStormMedianBreathSeconds: number}, prev: {rejoinStormMedianBreathSeconds: number}, cur: {rejoinStormMedianBreathSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinStormMedianBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormMedianBreathSeconds) && ok(e.prev.rejoinStormMedianBreathSeconds) && ok(e.cur.rejoinStormMedianBreathSeconds))
}

/**
 * The median breath weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinStormMedianBreathSeconds: number}, prev: {rejoinStormMedianBreathSeconds: number}, cur: {rejoinStormMedianBreathSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormMedianBreathTrendRow (e) {
  if (!rejoinStormMedianBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormMedianBreathSeconds
  const p = prev.rejoinStormMedianBreathSeconds
  const c = cur.rejoinStormMedianBreathSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the median breath never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices - the median's own sum-blind sibling the dialog keeps) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the median breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own median breath trend (v0.976.356): the fleet's own median breath fade ran two steps deep - ${arc} - the fleet's own storms' centre breaths shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own median breath trend (v0.976.356): the fleet's own median breath swell ran two steps deep - ${arc} - the fleet's own storms' centre breaths stretched each face, ${tail}`
  }
  return `the fleet's own median breath trend (v0.976.356): the fleet's own median breath swing - ${arc} - the fleet's own storms traded their centre breath between the faces, ${tail}`
}
