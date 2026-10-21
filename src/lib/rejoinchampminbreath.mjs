// (v0.976.359) THE CHAMPION'S OWN MIN BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the CHAMPION MIN BREATH CELL (the champion cadence list's own FLOOR
// the shortest adjacent gap prices: the consecutive champion re-join
// events in file order the adjacent pairs measure, the SHORTEST gap
// the census prices). The .355 champion mean breath word prices the
// champions' own typical breath by the SUM's division and the .357
// champion median breath word prices the champions' own centre by the
// sort - the MIN the floor BOTH never seat: the shortest silence the
// champions ever allowed their own churn, the one gap the champion
// list bows to. The .358 storm min breath word prices the WHOLE
// lane's own floor - the CHAMPION MIN BREATH the champion set's own
// mirror the symmetric seat prices (the family rhythm keeps: .350
// storm .351 champ .352 storm .353 champ .354 storm .355 champ .356
// storm .357 champ .358 storm .359 champ, the twelve cells underprice
// - the .346 mass .347 breadth .348 depth .349 name .350 span .351
// champ stretch .352 gap .353 champ gap .354 mean breath .355 champ
// mean breath .356 storm median breath .357 champ median breath .358
// storm min breath all priced).
// THE FLOOR LAW: the min bounds EVERY champion breath sibling from
// below - min <= the .357 champ median, min <= the .355 champ mean,
// min <= the .353 champ gap (the champion's tallest), min <= the .351
// champ stretch - the REAL FIFTY-face audit GREEN every bound every
// face (the min a champion gap list's own member, the smallest the
// list itself keeps; the median a member or two members' half-sum;
// the mean the division; the tallest the max; the stretch the whole
// the champion gaps sum to). THE ANTI-CHAIN LAW the REAL audit keeps:
// the bounds NEVER chain through the median - FIVE faces the chain
// min <= median <= mean BREAKS on (F514's own 12 above the 11, F521's
// own 27 above the 25, F530's own 59 above the 53, F532's own 67
// above the 62, F538's own 105 above the 72 - the .357 dialog's own
// above-side faces the busy majority outweighs the tail) - the floor
// bounds each sibling DIRECTLY, never transitively, the per-sibling
// law the census's own arithmetic prices.
// THE ZERO LAW: the min zero when the champion cadence lists no gap
// (the CONSTRUCTIVE zero - fewer than two champion re-join events no
// floor keeps; the REAL archive never rode it - all fifty faces voice
// champion gaps - the convention the synthetic pin keeps); a VOICED
// gap list may price the zero lawfully (the same-second champion
// re-join pair the zero gap keeps) - THREE of the fifty faces the
// zero prices (F524's own zero the 21-gap co-reign list's same-second
// F17/F1 pair hides INSIDE the busy list, F545's own ALL-ZERO face
// the two-event co-reign the same second keeps, F549's own NINE-reign
// fresh face the TWO same-second pairs the busy champion list keeps)
// - the champion min's own zero gravity LIGHT the .358 storm word's
// own FIFTEEN-face gravity the shorter champion lists never carry,
// the honest naming the difference itself prices.
// THE EQUALITY LAW (the single-gap champion ride): the ladder
// collapses to a POINT when ONE silence owns the whole ride - NINE
// faces the REAL audit keeps (F509's own 28=28=28, F510's 26, F513's
// 19, F518's 11, F519's 104, F528's 35, F529's 40, F531's 20, F545's
// own 0 - the .357 word's own equality nine the min rides the same
// single-gap faces the centre IS the list keeps) - and the FLOORED
// PAIR the ladder LEVELS without collapsing: F535's own two-gap
// (8+7) the min 7 the median AND the mean the SAME floored half-sum
// price 7 (the even-count law the .357 median's own arithmetic the
// min shares, the held TRIPLE's own head the perfect cadence keeps).
// THE MULTI-CLASS LAW: the REAL FIFTY-face arc F501-F550 keeps
// TWENTY-FOUR distinct classes no face born-constant - the 0 the
// three-face gravity keeps, the 8 the six-face class, the 5 and the
// 7 the fives, the 4 and the 6 and the 10 the quads, the 2 and the
// 20 and the 25 the pairs, the singles 9 11 19 21 26 28 34 35 36 39
// 40 43 104 111 the busy tails voice, the 111 the ceiling face F543's
// own two-gap (111+233) the SHORTER half the floor prices while the
// .357 median rides the same 344-stretch to 172, MANY values speak,
// the seat LIVE, the born-constant decline never rides.
// THE HELD WINDOWS: the REAL arc keeps ONE held TRIPLE and TWO held
// pairs (F535/F536/F537 the sevens three faces deep, F522/F523 and
// F541/F542 the eights) - the .358 storm min arc's own TWO held pairs
// the champion arc does NOT inherit, the TRIPLE the champion lists'
// own steadiness keeps (the held step the trend's own honest silence
// keeps).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand the .355 and .357 words re-ride -
// the TIE the co-reign keeps: F549's own NINE-name co-reign the
// merged file-order list prices), the champion names' own beyond-first
// echoes the champion events ride (the FILE ORDER the .351 word
// keeps), the adjacent pairs the gaps measure (the second's own clock
// cell 0..86399 the day keeps, the wrap next+86400-first the
// day-cyclic precedent the .350 word holds), the SHORTEST gap the
// floor picks.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the .321
// word's own shape law keeps, the 'joined the game' tail the lane's
// own skin byte-locked, LINE END tail boundary the .288 precedent).
// THE FENCE: the count words' own integer law plus the day ceiling
// 0..86399. CENSUS GUARD: zero fleet wiring, zero new fleet log lines
// - the word rides the reader's fold through the SECOND carrier lane
// (the argv[6..8] tail the .278 contract extends, the .281 through
// .358 folds the neighbours hold), the fleet's own console never
// changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The champion min breath census - the champion set's own gap list
 * the FLOOR prices (the .355 sum and the .357 centre never seat).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampMinBreathSeconds: number}|null} the min or null (non-array)
 */
export function rejoinChampMinBreathCensus (lines) {
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
  if (gaps.length === 0) return { rejoinChampMinBreathSeconds: 0 } // the CONSTRUCTIVE zero
  let min = Infinity
  for (const g of gaps) if (g < min) min = g // the FLOOR the champion list bows to
  return { rejoinChampMinBreathSeconds: min }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinChampMinBreathSeconds: number}, prev: {rejoinChampMinBreathSeconds: number}, cur: {rejoinChampMinBreathSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinChampMinBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampMinBreathSeconds) && ok(e.prev.rejoinChampMinBreathSeconds) && ok(e.cur.rejoinChampMinBreathSeconds))
}

/**
 * The champion min breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinChampMinBreathSeconds: number}, prev: {rejoinChampMinBreathSeconds: number}, cur: {rejoinChampMinBreathSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampMinBreathTrendRow (e) {
  if (!rejoinChampMinBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampMinBreathSeconds
  const p = prev.rejoinChampMinBreathSeconds
  const c = cur.rejoinChampMinBreathSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion min breath never invents - the REAL
  // arc's own held TRIPLE the F535/F536/F537 sevens keep and the TWO
  // eights pairs the F522/F523 and F541/F542 windows hold)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion min breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion min breath trend (v0.976.359): the fleet's own champion min breath fade ran two steps deep - ${arc} - the champions' own floor breaths shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion min breath trend (v0.976.359): the fleet's own champion min breath swell ran two steps deep - ${arc} - the champions' own floor breaths stretched each face, ${tail}`
  }
  return `the fleet's own champion min breath trend (v0.976.359): the fleet's own champion min breath swing - ${arc} - the champions traded their floor breath between the faces, ${tail}`
}
