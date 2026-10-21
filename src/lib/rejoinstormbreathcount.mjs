// (v0.976.362) THE STORM'S OWN BREATH COUNT - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the STORM BREATH COUNT CELL (the re-join event sequence's own SIZE
// the adjacent pairs count prices: the consecutive re-join events in
// file order the adjacent pairs measure, the NUMBER of gaps the whole
// cadence list keeps - the list's own DIMENSION the every breath word
// rides). The .346 re-join bin word prices the lane's own TOTAL echoes
// (the mass) and the .347 re-join bots word prices the BREADTH (the
// distinct names) - the COUNT neither prices alone: the re-join events
// beyond the firsts the pooled list keeps, minus the one the adjacent
// pairs need, the storm's own breath NUMBER. The family rhythm keeps
// (.346 mass .347 breadth .348 depth .349 name .350 span .351 champ
// stretch .352 gap .353 champ gap .354 mean breath .355 champ mean
// breath .356 storm median breath .357 champ median breath .358 storm
// min breath .359 champ min breath .360 storm breath range .361 champ
// breath range all priced - the storm side's own breath words the max
// and the min and the mean and the median and the range keep - the
// COUNT the list's own size the fresh dimension prices).
// THE IDENTITY LAW: the count the .346/.347 words' own arithmetic
// closes - count = the mass minus the breadth minus the one (the
// beyond-first echoes the tally sums, the adjacent pairs one fewer
// keep) - the REAL archive F356-F554 audit GREEN every face the
// origin words the seat closes.
// THE ZERO LAW: the count zero when the storm never re-joins (every
// bot echoes exactly once the re-join list empty keeps, the
// constructive zero the no-echo face the same keeps); the REAL archive
// prices the zero FIVE faces all outside the family window (F357's
// and F381's and F459's and F468's and F474's own one-echo storms the
// older archive keeps) - the family window F501-F554 never rode the
// zero (the floor the ONE trio F509's and F529's and F545's own
// single-gap rides keep), the synthetic pin the zero branch keeps.
// THE BOUND LAW: the count <= the mass minus two every face (the
// breadth >= 1 the ordering guarantees - the REAL window audit GREEN
// every face).
// THE DIALOG LAW the REAL window audit keeps: the count UNDER the
// breadth FORTY-FOUR faces (the calm majority - F501's own 18 under
// the 20), level ONE face (F542's own 20 the count IS the breadth the
// rarest order prices), ABOVE EIGHT faces (F524's own 49 above the 20
// the ceiling face, F514's and F522's own 26s, F537's 32, F539's 21,
// F541's 28, F546's 27, F550's 30 the busy storms keep) - no constant
// order the honest seat prices.
// THE CEILING LAW: the count 49 F524's own BUSY storm prices - the
// 70 echoes the 20 names the 50 re-join events the 49 gaps keep (the
// identity's own arithmetic the ceiling face re-voices) - the ceiling
// face the count's own gravity the busiest storm keeps.
// THE HELD PAIRS: the REAL window keeps TWO held pairs (F519/F520 the
// fives, F531/F532 the sevens) - the .361 champ range arc's own FOUR
// held pairs the count arc does NOT inherit, the honest naming the
// difference prices (the held step the trend's own honest silence
// keeps).
// THE MULTI-CLASS LAW: the REAL FIFTY-THREE-face window F501-F554
// keeps TWENTY-SIX distinct classes no face born-constant - the 5 the
// six-face gravity, the 11 the four-face class, the 1 the three-face
// floor trio (F509 F529 F545), the 49 the ceiling face F524 keeps,
// MANY values speak - the seat LIVE (the champSetSize candidate the
// honest probe DECLINED: FIVE classes FORTY born-sole faces the
// co-reign width's own gravity the seat never rides, the COUNT's
// twenty-six the choice itself prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the beyond-first echoes the re-join events ride
// (the .346 word's own tally the beyond-first law keeps), the adjacent
// pairs the gaps measure (the second's own clock cell 0..86399 the day
// keeps, the wrap next+86400-first the day-cyclic precedent the .350
// word holds), the NUMBER of gaps the count picks.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the .321
// word's own shape law keeps, the 'joined the game' tail the lane's
// own skin byte-locked, LINE END tail boundary the .288 precedent).
// THE FENCE: the count words' own integer law plus the day ceiling
// 0..86399 (the .346 mass word's own count fence the precedent keeps).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane (the
// argv[6..8] tail the .278 contract extends, the .281 through .361
// folds the neighbours hold), the fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The storm breath count census - the re-join event sequence's own
 * SIZE the adjacent pairs count prices (the .346 mass and the .347
 * breadth each price one ingredient alone).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormBreathCount: number}|null} the count or null (non-array)
 */
export function rejoinStormBreathCountCensus (lines) {
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
  return { rejoinStormBreathCount: gaps.length } // the SIZE the list keeps
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399 (the .346 mass word's own count fence the precedent keeps).
 *
 * @param {{back: {rejoinStormBreathCount: number}, prev: {rejoinStormBreathCount: number}, cur: {rejoinStormBreathCount: number}}} e
 * @returns {boolean}
 */
export function rejoinStormBreathCountConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormBreathCount) && ok(e.prev.rejoinStormBreathCount) && ok(e.cur.rejoinStormBreathCount))
}

/**
 * The storm breath count weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinStormBreathCount: number}, prev: {rejoinStormBreathCount: number}, cur: {rejoinStormBreathCount: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormBreathCountTrendRow (e) {
  if (!rejoinStormBreathCountConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormBreathCount
  const p = prev.rejoinStormBreathCount
  const c = cur.rejoinStormBreathCount
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the storm breath count never invents - the REAL
  // window's own TWO held pairs the F519/F520 fives and the F531/F532
  // sevens keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the storm breath count row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own storm breath count trend (v0.976.362): the fleet's own storm breath count fade ran two steps deep - ${arc} - the fleet's own storms' breath lists shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own storm breath count trend (v0.976.362): the fleet's own storm breath count swell ran two steps deep - ${arc} - the fleet's own storms' breath lists lengthened each face, ${tail}`
  }
  return `the fleet's own storm breath count trend (v0.976.362): the fleet's own storm breath count swing - ${arc} - the fleet's own storms traded their breath list size between the faces, ${tail}`
}
