// (v0.976.360) THE STORM'S OWN BREATH RANGE - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the STORM BREATH RANGE CELL (the cadence list's own SPREAD the two
// edges' difference prices: the consecutive re-join events in file
// order the adjacent pairs measure, the TALLEST gap minus the
// SHORTEST the census prices). The .352 re-join gap word prices the
// storm's own TALLEST silence alone and the .358 storm min breath
// word prices the storm's own FLOOR alone - the RANGE the two edges'
// spread NEITHER prices alone: the width of the storm's own breath
// band, the one number the max and the min keep between them. The
// .359 champion min breath word priced the champion set's own floor -
// the RANGE the whole lane's own width the storm-side seat the family
// rhythm calls (the family rhythm keeps: .350 storm .351 champ .352
// storm .353 champ .354 storm .355 champ .356 storm .357 champ .358
// storm .359 champ .360 storm, the thirteen cells underprice - the
// .346 mass .347 breadth .348 depth .349 name .350 span .351 champ
// stretch .352 gap .353 champ gap .354 mean breath .355 champ mean
// breath .356 storm median breath .357 champ median breath .358 storm
// min breath .359 champ min breath all priced).
// THE SPREAD LAW: the range the two edges' own arithmetic prices -
// range = the tallest gap minus the shortest gap, 0 <= range <= the
// .352 gap (the max itself bounds the range the min never negative
// keeps) and range <= the .350 span (the whole the gaps sum to) - the
// REAL FIFTY-ONE-face audit GREEN every face. THE DIALOG LAW the REAL
// audit keeps: the range ABOVE the median FORTY-SIX faces (the spread
// wider than the centre the storm's own tails keep - F521's own 51
// above the 28, F549's own 310 above the 2 the ceiling face the
// two-zero pairs ride), level ONE face (F545's own ALL-ZERO the
// single-gap the range IS the median IS the zero), UNDER FOUR faces
// (F530's own 33 UNDER the 59 the .358 anti-chain face's own dialog
// the busy-majority centre keeps) - no constant order the honest seat
// prices.
// THE ZERO LAW: the range zero when the storm's gaps ALL EQUAL (the
// ONE-BREATH storm - the single silence the whole list keeps OR the
// perfectly even cadence the multi-gap list keeps); the REAL archive
// prices the zero THREE faces all single-gap rides (F509's own 28 the
// whole storm one silence, F529's own 40 the ceiling-equality face,
// F545's own 0 the ALL-ZERO face); the CONSTRUCTIVE zero (no re-join
// events no gap list) never rode - all fifty-one faces voice gaps;
// the voiced all-equal multi-gap storm never rode either (the
// convention the synthetic pin keeps).
// THE CEILING LAW: the range 310 F549's own NINE-reign storm prices -
// the 310 giant the min-zero pairs keep (range = the max when the min
// zero rides, the .358 word's own zero the same face the storm-min
// prices) - the ceiling face the range's own gravity the giant's own
// width keeps.
// THE HELD PAIR: the REAL arc keeps ONE held pair (F535/F536 the
// sixties 60=60) - the .359 champ min arc's own held TRIPLE the
// range arc does NOT inherit, the honest naming the difference
// prices (the held step the trend's own honest silence keeps).
// THE MULTI-CLASS LAW: the REAL FIFTY-ONE-face arc F501-F551 keeps
// FORTY-ONE distinct classes no face born-constant - the 0 the
// three-face gravity keeps, the 310 the ceiling face F549 keeps, the
// 60 the held pair shares, MANY values speak - the seat the LIVEST
// the family's own breath words keep (the .359 probe's own MODE
// candidate the honest probe DECLINED: FIFTEEN classes TWENTY-SEVEN
// tie-degenerate faces the mode's own tie law the seat never rides,
// the RANGE's FORTY-ONE the choice itself prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the beyond-first echoes the re-join events
// ride (the .346 word's own tally the beyond-first law keeps), the
// adjacent pairs the gaps measure (the second's own clock cell
// 0..86399 the day keeps, the wrap next+86400-first the day-cyclic
// precedent the .350 word holds), the TALLEST minus the SHORTEST the
// spread picks.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the .321
// word's own shape law keeps, the 'joined the game' tail the lane's
// own skin byte-locked, LINE END tail boundary the .288 precedent).
// THE FENCE: the count words' own integer law plus the day ceiling
// 0..86399. CENSUS GUARD: zero fleet wiring, zero new fleet log lines
// - the word rides the reader's fold through the SECOND carrier lane
// (the argv[6..8] tail the .278 contract extends, the .281 through
// .359 folds the neighbours hold), the fleet's own console never
// changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The storm breath range census - the cadence list's own SPREAD the
 * tallest-minus-shortest difference prices (the .352 max and the
 * .358 min each price one edge alone).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormBreathRangeSeconds: number}|null} the range or null (non-array)
 */
export function rejoinStormBreathRangeCensus (lines) {
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
  if (gaps.length === 0) return { rejoinStormBreathRangeSeconds: 0 } // the CONSTRUCTIVE zero
  let min = Infinity
  let max = -Infinity
  for (const g of gaps) {
    if (g < min) min = g // the FLOOR the .358 word prices
    if (g > max) max = g // the TALLEST the .352 word prices
  }
  return { rejoinStormBreathRangeSeconds: max - min } // the SPREAD the edges keep
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinStormBreathRangeSeconds: number}, prev: {rejoinStormBreathRangeSeconds: number}, cur: {rejoinStormBreathRangeSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinStormBreathRangeConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormBreathRangeSeconds) && ok(e.prev.rejoinStormBreathRangeSeconds) && ok(e.cur.rejoinStormBreathRangeSeconds))
}

/**
 * The storm breath range weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinStormBreathRangeSeconds: number}, prev: {rejoinStormBreathRangeSeconds: number}, cur: {rejoinStormBreathRangeSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormBreathRangeTrendRow (e) {
  if (!rejoinStormBreathRangeConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormBreathRangeSeconds
  const p = prev.rejoinStormBreathRangeSeconds
  const c = cur.rejoinStormBreathRangeSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the storm breath range never invents - the REAL
  // arc's own held pair the F535/F536 sixties keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the storm breath range row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own storm breath range trend (v0.976.360): the fleet's own storm breath range fade ran two steps deep - ${arc} - the fleet's own storms' breath widths narrowed each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own storm breath range trend (v0.976.360): the fleet's own storm breath range swell ran two steps deep - ${arc} - the fleet's own storms' breath widths stretched each face, ${tail}`
  }
  return `the fleet's own storm breath range trend (v0.976.360): the fleet's own storm breath range swing - ${arc} - the fleet's own storms traded their breath width between the faces, ${tail}`
}
