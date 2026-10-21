// (v0.976.358) THE STORM'S OWN MIN BREATH - the server console's own
// '<name> joined the game' lane the word prices across the faces -
// the MIN BREATH CELL (the cadence list's own FLOOR the adjacent gap
// list keeps: the consecutive re-join events in file order the
// adjacent pairs measure, the SHORTEST gap the census prices). The
// .354 mean breath word prices the storm's own typical breath by the
// SUM's division and the .356 median breath word prices the storm's
// own centre by the sort - the MIN the floor BOTH never seat: the
// shortest silence the storm ever allowed its own churn, the one
// gap the whole list bows to.
// THE FLOOR LAW: the min bounds EVERY breath sibling from below -
// min <= the .356 median, min <= the .354 mean, min <= the .352 gap
// (the tallest), min <= the .350 span - the REAL FORTY-EIGHT-face
// audit GREEN every bound every face (the min a gap list's own
// member, the smallest the list itself keeps; the median a member or
// two members' half-sum; the mean the division; the tallest the max;
// the span the whole the gaps sum to). THE ANTI-CHAIN LAW the REAL
// audit keeps: the bounds NEVER chain through the median - F530's
// own centre 59 ABOVE its mean 53 the busy-majority face keeps (the
// .356 dialog's own above-side), the naive chain min <= median <=
// mean the face BREAKS - the floor bounds each sibling DIRECTLY,
// never transitively, the per-sibling law the census's own
// arithmetic prices.
// THE ZERO LAW: the min zero when the cadence lists no gap (the
// CONSTRUCTIVE zero - fewer than two re-join events no floor keeps;
// the REAL archive never rode it - all forty-eight faces voice gaps
// - the convention the synthetic pin keeps); a VOICED gap list may
// price the zero lawfully (the same-second re-join pair the zero gap
// keeps) - FIFTEEN of the forty-eight faces the zero prices (F501
// F505 F508 F512 F516 F522 F524 F527 F531 F533 F537 F538 F541 F545
// F548) - the min's own ALL-ZERO GRAVITY the busy fleet's same-second
// pairs keep voicing, F545's own five-zero face the archive keeps
// (min IS median IS mean IS gap IS span IS zero).
// THE EQUALITY LAW (the single-gap storm): the ladder collapses to a
// POINT when ONE silence owns the whole ride - THREE faces the REAL
// audit keeps (F509's own 28=28=28=28=28, F529's own 40 the ceiling
// face the equality rides - the whole storm one forty-second silence
// the min's own ceiling AND its own equality face in one, F545's own
// 0 the five-zero face).
// THE MULTI-CLASS LAW: the REAL FORTY-EIGHT-face arc F501-F548 keeps
// FOURTEEN distinct classes no face born-constant - the 0 the
// fifteen-face gravity keeps, the 1 the nine-face class, the 2 and
// the 5 the quads, the 3 and the 4 the triples, the 6 and the 7 the
// pairs, the singles 10 19 28 29 34 40 the busy tails voice, the 40
// the ceiling face F529's own census prices, MANY values speak, the
// seat LIVE, the born-constant decline never rides.
// THE HELD PAIRS: the REAL arc keeps TWO held pairs (F535/F536 the
// 1=1, F537/F538 the 0=0) - the .356 storm median arc's own
// NO-HELD-PAIR the min arc does NOT inherit (the .357 champion
// median's own held pair the F539/F540 sevens the precedent - the
// honest naming the difference itself prices, the held step the
// trend's own honest silence keeps).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the beyond-first echoes the re-join events
// ride (the .346 word's own tally the beyond-first law keeps), the
// adjacent pairs the gaps measure (the second's own clock cell
// 0..86399 the day keeps, the wrap next+86400-first the day-cyclic
// precedent the .350 word holds), the SHORTEST gap the floor picks.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .357 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The min breath census - the cadence list's own FLOOR the shortest
 * adjacent gap prices (the .354 sum and the .356 centre never seat).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormMinBreathSeconds: number}|null} the min or null (non-array)
 */
export function rejoinStormMinBreathCensus (lines) {
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
  if (gaps.length === 0) return { rejoinStormMinBreathSeconds: 0 } // the CONSTRUCTIVE zero
  let min = Infinity
  for (const g of gaps) if (g < min) min = g // the FLOOR the list bows to
  return { rejoinStormMinBreathSeconds: min }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinStormMinBreathSeconds: number}, prev: {rejoinStormMinBreathSeconds: number}, cur: {rejoinStormMinBreathSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinStormMinBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormMinBreathSeconds) && ok(e.prev.rejoinStormMinBreathSeconds) && ok(e.cur.rejoinStormMinBreathSeconds))
}

/**
 * The min breath weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinStormMinBreathSeconds: number}, prev: {rejoinStormMinBreathSeconds: number}, cur: {rejoinStormMinBreathSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormMinBreathTrendRow (e) {
  if (!rejoinStormMinBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormMinBreathSeconds
  const p = prev.rejoinStormMinBreathSeconds
  const c = cur.rejoinStormMinBreathSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the min breath never invents - the REAL arc's own
  // TWO held pairs the F535/F536 and F537/F538 windows keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the min breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own min breath trend (v0.976.358): the fleet's own min breath fade ran two steps deep - ${arc} - the fleet's own storms' floor breaths shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own min breath trend (v0.976.358): the fleet's own min breath swell ran two steps deep - ${arc} - the fleet's own storms' floor breaths stretched each face, ${tail}`
  }
  return `the fleet's own min breath trend (v0.976.358): the fleet's own min breath swing - ${arc} - the fleet's own storms traded their floor breath between the faces, ${tail}`
}
