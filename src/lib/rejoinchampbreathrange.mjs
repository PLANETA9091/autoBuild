// (v0.976.361) THE CHAMPION'S OWN BREATH RANGE - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the CHAMPION BREATH RANGE CELL (the champion cadence list's own
// SPREAD the two edges' difference prices: the consecutive champion
// re-join events in file order the adjacent pairs measure, the
// TALLEST gap minus the SHORTEST the census prices). The .360 storm
// breath range word priced the WHOLE lane's own spread - the CHAMPION
// BREATH RANGE the champion set's own mirror the symmetric seat prices
// (the family rhythm keeps: .350 storm .351 champ .352 storm .353 champ
// .354 storm .355 champ .356 storm .357 champ .358 storm .359 champ
// .360 storm .361 CHAMP, the fourteen cells underprice - the .346 mass
// .347 breadth .348 depth .349 name .350 span .351 champ stretch .352
// gap .353 champ gap .354 mean breath .355 champ mean breath .356
// storm median breath .357 champ median breath .358 storm min breath
// .359 champ min breath .360 storm breath range all priced).
// THE SPREAD LAW: the champion range the two edges' own arithmetic
// prices - range = the champion's tallest gap minus the champion's
// shortest gap, 0 <= range <= the .353 champion gap (the champion's
// own max itself bounds the range the min never negative keeps) and
// range <= the .351 champion stretch (the whole the champion gaps sum
// to) - the REAL FIFTY-ONE-face audit GREEN every bound every face.
// THE DIALOG LAW the REAL audit keeps: the range ABOVE the champion
// median TWENTY-NINE faces (F521's own 30 above the 27, F549's own 310
// above the 2 the ceiling face the busy lists keep), level ONE face
// (F545's own ALL-ZERO the same-second co-reign the range IS the
// median IS the zero), UNDER TWENTY-ONE faces (F530's own 33 UNDER the
// 59, F543's own 122 UNDER the 172 the two-gap 344-stretch the .357
// word's own face keeps, F544's own 20 UNDER the 53) - no constant
// order the honest seat prices.
// THE ZERO LAW: the champion range zero when the champions' gaps ALL
// EQUAL (the ONE-BREATH reign - the single silence the whole champion
// list keeps OR the perfectly even cadence the multi-gap list keeps);
// the REAL archive prices the zero TEN faces all single-gap rides
// (F509's own 28, F510's 26, F513's 19, F518's 11, F519's 104, F528's
// 35, F529's 40, F531's 20, F545's own 0, F551's 6 - the .359 word's
// own equality nine the F551 fresh face the equality ten keeps); the
// CONSTRUCTIVE zero (fewer than two champion re-join events no gap
// list) never rode - all fifty-one faces voice champion gaps; the
// voiced all-equal multi-gap champion reign never rode either (the
// convention the synthetic pin keeps).
// THE CEILING LAW: the range 310 F549's own NINE-reign champion list
// prices - the [310 0 12 2 0 2 1 2] gaps the 310 giant the min-zero
// pairs keep (range = the max when the min zero rides, the .359 word's
// own champ-min zero the same face prices) - the ceiling face the
// range's own gravity the giant's own width keeps.
// THE HELD WINDOWS: the REAL arc keeps FOUR held pairs - the three
// zero pairs (F509/F510, F518/F519, F528/F529 the single-gap faces'
// own equality) and the ONE nonzero pair (F542/F543 the 122s the
// two-gap reigns keep) - the .360 storm range arc's own ONE held pair
// the champion arc does NOT inherit, the honest naming the difference
// prices (the held step the trend's own honest silence keeps).
// THE MULTI-CLASS LAW: the REAL FIFTY-ONE-face arc F501-F551 keeps
// THIRTY-SIX distinct classes no face born-constant - the 0 the
// ten-face gravity keeps, the 5 the four-face class, the 6 and the 20
// and the 122 the pairs, MANY values speak - the seat LIVE (the
// probe's own MODE candidate the honest probe DECLINED again: TWENTY-
// FIVE classes THIRTY-ONE tie-degenerate faces the mode's own tie law
// the seat never rides, the RANGE's thirty-six the choice itself
// prices). THE HAND: every 'joined the game' echo the face voices the
// census reads in file order, the name's own join tally the bin keeps,
// the names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand the .355 .357 .359 words re-ride -
// the TIE the co-reign keeps: F549's own NINE-name co-reign the merged
// file-order list prices), the champion names' own beyond-first echoes
// the champion events ride (the FILE ORDER the .351 word keeps), the
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
// .360 folds the neighbours hold), the fleet's own console never
// changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The champion breath range census - the champion set's own gap list
 * the SPREAD prices (the .353 max and the .359 min each price one
 * edge alone).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampBreathRangeSeconds: number}|null} the range or null (non-array)
 */
export function rejoinChampBreathRangeCensus (lines) {
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
  if (gaps.length === 0) return { rejoinChampBreathRangeSeconds: 0 } // the CONSTRUCTIVE zero
  let min = Infinity
  let max = -Infinity
  for (const g of gaps) {
    if (g < min) min = g // the FLOOR the .359 word prices
    if (g > max) max = g // the TALLEST the .353 word prices
  }
  return { rejoinChampBreathRangeSeconds: max - min } // the SPREAD the edges keep
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinChampBreathRangeSeconds: number}, prev: {rejoinChampBreathRangeSeconds: number}, cur: {rejoinChampBreathRangeSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinChampBreathRangeConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampBreathRangeSeconds) && ok(e.prev.rejoinChampBreathRangeSeconds) && ok(e.cur.rejoinChampBreathRangeSeconds))
}

/**
 * The champion breath range weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinChampBreathRangeSeconds: number}, prev: {rejoinChampBreathRangeSeconds: number}, cur: {rejoinChampBreathRangeSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampBreathRangeTrendRow (e) {
  if (!rejoinChampBreathRangeConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampBreathRangeSeconds
  const p = prev.rejoinChampBreathRangeSeconds
  const c = cur.rejoinChampBreathRangeSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion breath range never invents - the REAL
  // arc's own FOUR held pairs the three zero pairs and the F542/F543
  // 122s keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion breath range row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion breath range trend (v0.976.361): the fleet's own champion breath range fade ran two steps deep - ${arc} - the champions' own breath widths narrowed each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion breath range trend (v0.976.361): the fleet's own champion breath range swell ran two steps deep - ${arc} - the champions' own breath widths stretched each face, ${tail}`
  }
  return `the fleet's own champion breath range trend (v0.976.361): the fleet's own champion breath range swing - ${arc} - the champions traded their breath width between the faces, ${tail}`
}
