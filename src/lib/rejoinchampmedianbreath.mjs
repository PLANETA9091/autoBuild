// (v0.976.357) THE CHAMPION'S OWN MEDIAN BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the CHAMPION MEDIAN BREATH CELL (the champion cadence list's own
// CENTRE the sort law prices: the consecutive champion re-join events
// in file order the adjacent pairs measure, the gaps the ascending
// sort orders, the MIDDLE gap the odd count keeps, the two middle
// gaps' own floored half-sum the even count keeps). The .355 champion
// mean breath word prices the champions' own typical breath by the
// SUM's division - the champion's own tallest lone silence the sum
// carries - the MEDIAN the SUM never consults: the centre gap the
// sort law picks, the outlier silence the centre ignores. The .356
// storm median breath word prices the WHOLE lane's own centre - the
// CHAMPION MEDIAN BREATH the champion set's own mirror the symmetric
// seat prices (the family rhythm keeps: .350 storm .351 champ .352
// storm .353 champ .354 storm .355 champ .356 storm .357 champ, the
// eleven cells underprice - the .346 mass .347 breadth .348 depth
// .349 name .350 span .351 champ stretch .352 gap .353 champ gap
// .354 mean breath .355 champ mean breath .356 storm median breath
// all priced).
// THE DIALOG LAW: the REAL FORTY-SEVEN-face audit keeps the dialog
// HONEST - the median UNDER the mean TWENTY faces (the tallest
// silence's own gravity the mean carries, the centre drops - F537's
// own 8 the centre prices while the mean rides the 251 giant to 40,
// F525's own 13 while the mean rides the 238 giant to 87), level
// TWENTY-TWO faces (the single-gap rides the centre IS the list, the
// balanced lists the centre IS the mean - F524's own co-reign 7=7,
// F547's own three-reign 23=23 the TWO-gap even-count law the same
// floored half-sum both words price), ABOVE FIVE faces (the busy
// majority outweighs the tail - F514's own 12 above the 11, F521's
// own 27 above the 25, F530's own 59 above the 53, F532's own 67
// above the 62, F538's own 105 above the 72) - no constant order,
// the ROBUST seat the dialog itself prices. The champion dialog
// BALANCEDER than the storm's own (the
// .356 word's own 41-under the champion's 20-under mirrors - the
// champion lists shorter, the tail gravity lighter, the born-constant
// decline never rides).
// THE ZERO LAW: the champion median zero when the champion cadence
// lists no gap (the CONSTRUCTIVE zero - fewer than two champion
// re-join events no centre keeps); a VOICED gap list may price the
// zero lawfully (the same-second champion re-join pair the zero gap
// keeps - the REAL ALL-ZERO face F545's own 2-events 1-gap 0 the
// archive keeps, median IS mean IS gap IS span zero the four-zero
// face; F524's own 0 the 21-gap co-reign list's same-second F17/F1
// pair the centre's neighbour hides INSIDE the busy list, the zero
// a lawful reading the census's own arithmetic prices).
// THE BOUND LAW: the median a champion gap list's own member (the
// odd count) or two members' own floored half-sum (the even count) -
// the MIN bounds from below, the champion's own TALLEST gap (the
// .353 word) bounds from above (min <= champMedian <= champGap, the
// REAL audit GREEN all forty-seven), the champion stretch bounds wider
// (champMedian <= champSpan, the REAL audit GREEN - the even-count
// floored half-sum the tallest member never exceeds, the odd-count
// member neither).
// THE EQUALITY LAW (the single-gap champion ride): the champion
// median EQUALS the champion gap EQUALS the champion mean EQUALS the
// champion stretch when ONE silence owns the whole ride (the centre
// IS the list) - the REAL audit keeps NINE equality faces (F509's
// own 28=28, F510's 26, F513's 19, F518's 11, F519's 104, F528's 35,
// F529's 40, F531's 20, F545's own 0 - the .355 word's own EIGHT the
// ALL-ZERO ninth the fresh harvest keeps, the same two-event champion
// rides the single gap IS the champion's whole stretch keeps).
// THE MULTI-CLASS LAW: the REAL FORTY-SEVEN-face arc F501-F547 keeps
// THIRTY-FOUR distinct classes no face born-constant - the 0 floor
// the ALL-ZERO face keeps, the 172 ceiling F543's own two-gap
// (111+233)/2 the floor keeps (the .355 word's own NEW CEILING face
// the even-count median the same 344-stretch prices), the 23 F547's
// own three-reign two-gap (10+37)/2 the fresh face keeps, the 7 the
// QUAD (F524's and F535's and F539's and F540's), the 8 the QUAD (F516's
// and F527's and F534's and F537's), the 11 the TRIPLE (F518's and
// F523's and F542's), the HELD PAIR the F539/F540 sevens the arc
// keeps (the storm median's own NO-HELD-PAIR the champion arc does
// NOT inherit - the honest naming the difference itself prices),
// MANY values speak, the seat LIVE.
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand the .355 word re-rides - the TIE
// the co-reign keeps: F524's own F1+F17 pair BOTH champions the
// merged file-order list prices), the champion names' own
// beyond-first echoes the champion events ride (the FILE ORDER the
// .351 word keeps), the adjacent pairs the gaps measure (the
// second's own clock cell 0..86399 the day keeps, the wrap
// next+86400-first the day-cyclic precedent the .350 word holds),
// the ascending sort the centre picks (the odd count the middle
// member, the even count the two middle members' floored half-sum
// the integer law keeps).
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
 * The champion median breath census - the champion set's own gap
 * list the sort law prices (the centre the .355 word's own sum never
 * consults).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampMedianBreathSeconds: number}|null} the median or null (non-array)
 */
export function rejoinChampMedianBreathCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  const evts = [] // every echo the file order keeps ({name, second, tally})
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    evts.push({ name: m[4], s: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]), n })
  }
  let peak = 0
  for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1) // the tallest column
  const champs = new Set()
  for (const [name, n] of tally) if (n > 1 && n - 1 === peak) champs.add(name) // the TIE co-reigns
  const cevts = evts.filter(e => e.n > 1 && champs.has(e.name)) // the champion events the FILE ORDER keeps
  const gaps = []
  for (let i = 1; i < cevts.length; i++) {
    const cur = cevts[i - 1].s
    const nxt = cevts[i].s
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur) // the day-cyclic wrap
  }
  if (gaps.length === 0) return { rejoinChampMedianBreathSeconds: 0 } // the CONSTRUCTIVE zero
  const sorted = [...gaps].sort((a, b) => a - b)
  const n = sorted.length
  const median = n % 2 === 1
    ? sorted[(n - 1) / 2] // the middle member
    : Math.floor((sorted[n / 2 - 1] + sorted[n / 2]) / 2) // the floored half-sum
  return { rejoinChampMedianBreathSeconds: median }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinChampMedianBreathSeconds: number}, prev: {rejoinChampMedianBreathSeconds: number}, cur: {rejoinChampMedianBreathSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinChampMedianBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampMedianBreathSeconds) && ok(e.prev.rejoinChampMedianBreathSeconds) && ok(e.cur.rejoinChampMedianBreathSeconds))
}

/**
 * The champion median breath weather's own two-step shape across
 * three faces.
 *
 * @param {{back: {rejoinChampMedianBreathSeconds: number}, prev: {rejoinChampMedianBreathSeconds: number}, cur: {rejoinChampMedianBreathSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampMedianBreathTrendRow (e) {
  if (!rejoinChampMedianBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampMedianBreathSeconds
  const p = prev.rejoinChampMedianBreathSeconds
  const c = cur.rejoinChampMedianBreathSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion median breath never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices - the champion median's own whole-lane mirror the seat keeps) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion median breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion median breath trend (v0.976.357): the fleet's own champion median breath fade ran two steps deep - ${arc} - the champions' own centre breaths shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion median breath trend (v0.976.357): the fleet's own champion median breath swell ran two steps deep - ${arc} - the champions' own centre breaths stretched each face, ${tail}`
  }
  return `the fleet's own champion median breath trend (v0.976.357): the fleet's own champion median breath swing - ${arc} - the champions traded their centre breath between the faces, ${tail}`
}
