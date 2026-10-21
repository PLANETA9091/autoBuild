// (v0.976.364) THE STORM'S OWN FIRST BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces
// - the STORM FIRST BREATH CELL (the storm cadence list's own OPENING
// GAP the first adjacent pair prices: the consecutive re-join events
// in file order the adjacent pairs measure, the FIRST gap the whole
// list keeps - the storm's own arrival breath the second re-join
// event's own distance from the first prices) the sixteenth cell
// underprice - the .352 re-join gap word prices the storm's TALLEST
// silence alone and the .358 storm min breath word prices the FLOOR
// sample alone and the .354 mean and the .356 median words price the
// CENTRE and the .360 range word prices the SPREAD and the .362 count
// word prices the SIZE and the .350 span word prices the SUM - the
// OPENING tempo neither keeps (the head the tail's own censoring the
// .362 word's own runner-up decline NEVER rides - the first two
// re-join events both fully observed the log cut censors the TAIL
// alone, the opening breath the honest order-statistic the seat
// prices). The family rhythm keeps (.346 mass .347 breadth .348 depth
// .349 name .350 span .351 champ stretch .352 gap .353 champ gap .354
// mean breath .355 champ mean breath .356 storm median breath .357
// champ median breath .358 storm min breath .359 champ min breath
// .360 storm breath range .361 champ breath range .362 storm breath
// count .363 champ breath count all priced - the storm side the
// fresh seat prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// beyond-first echoes the storm's re-join events ride (the FILE ORDER
// the .362 word keeps), the adjacent pairs the gaps measure (the
// second's own clock cell 0..86399 the day keeps, the wrap
// next+86400-first the day-cyclic precedent the .350 word holds), the
// FIRST gap the opening breath picks (the fewer-than-two-events face
// the constructive zero the .361 range word's own convention keeps).
// THE BOUND LAW: the opening breath the two edges' own samples bound
// - the .358 storm min breath <= the first breath <= the .352 re-join
// gap (the tallest silence itself bounds the opening) and the first
// breath <= the .350 span - the REAL FIFTY-SIX-face audit GREEN every
// face every bound.
// THE DIALOG LAW: the first breath UNDER the .356 median TWELVE faces
// (F519's own 6 under the 11 the under-dialog the family window's own
// gravity keeps, F527's own 0 under the 8 the zero face rides), level
// EIGHT faces (F509's own 28 the single-gap the level rides, F535's
// own 8 the held pair's own face the level keeps), ABOVE THIRTY-SIX
// faces (F501's own 137 above the 7 the window's own opener, F549's
// own 310 above the 2 the ceiling face) - no constant order the
// honest seat prices.
// THE ZERO LAW: the first breath zero WHEN the storm's own first TWO
// re-join events the same second keep (the same-second opening pair
// the storm's own arrival the zero prices) - the REAL window prices
// the zero TWO faces (F527's own F12-F14 the 18:57:38 pair the
// eight-gap storm keeps, F545's own F18-F2 the 09:27:57 pair the
// .360 word's own all-zero co-reign face keeps), the CONSTRUCTIVE
// zero the fewer-than-two-events convention the older archive's
// one-echo storms rode (F357's and F381's and F459's and F468's and
// F474's own faces the older archive keeps) - the family window
// F501-F558 never rode the constructive zero, all fifty-six faces
// voice gaps (the synthetic pin the zero branch keeps).
// THE CEILING LAW: the first breath the storm's own TALLEST silence
// on SEVENTEEN faces (the storm opens with its longest breath the
// busy boots keep - F549's own 310 the .360 range ceiling the same
// face prices, F501's own 137 the window's own opener the ceiling
// order keeps, F542's own 130 the above-dialog face rides) - plus the
// THREE single-gap faces the level rides (F509's own 28 and F529's
// own 40 and F545's own 0 the one-gap storm the first IS the whole
// the .362 word's own floor trio keeps).
// THE HELD PAIR: the REAL window keeps ONE held pair (F534/F535 the
// eights) - the .362 storm count arc's own TWO held pairs the
// first-breath arc does NOT inherit, the honest naming prices (the
// held step the trend's own honest silence keeps).
// THE MULTI-CLASS LAW: the REAL FIFTY-SIX-face window F501-F558 keeps
// FORTY-ONE distinct classes no face born-constant - the 6 the
// five-face gravity, the 8 the four-face class, the 23 the
// three-face class, the 0 and the 5 and the 35 and the 144 and the
// 42 and the 34 the pairs, THIRTY-TWO singletons, the 310 the ceiling
// face F549 keeps, the 17 the fresh tail F558 keeps - MANY values
// speak, the seat LIVE (the mode candidate the honest probe DECLINED
// again: FORTY-ONE classes TWENTY-SIX tie-degenerate faces the mode's
// own tie law the seat never rides, the FIRST's forty-one the choice
// itself prices; the stormLastBreath the tail's own censoring the
// .362 word's own decline the honest law keeps).
// THE FRESH TAIL: F558's own 17 the newest harvest prices (the fleet
// face the F558 dispatch keeps - the F557 gate face the window keeps
// OUT, the small fleet's own regime the integration leg rides, the
// 600s regime the dispatch faces voice the window prices).
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the .321
// word's own shape law keeps, the 'joined the game' tail the lane's
// own skin byte-locked, LINE END tail boundary the .288 precedent).
// THE FENCE: the gap words' own integer law plus the day ceiling
// 0..86399 (the .352 re-join gap word's own fence the precedent
// keeps).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane (the
// argv[6..8] tail the .278 contract extends, the .281 through .363
// folds the neighbours hold), the fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The storm first breath census - the storm cadence list's own
 * OPENING GAP the first adjacent pair prices (the .362 storm count
 * the whole lane's own size prices, the opening tempo this seat
 * keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormFirstBreath: number}|null} the first gap or null (non-array)
 */
export function rejoinStormFirstBreathCensus (lines) {
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
  return { rejoinStormFirstBreath: gaps.length ? gaps[0] : 0 } // the OPENING the list keeps (the constructive zero the fewer-than-two-events convention keeps)
}

/**
 * The fence - the gap words' own integer law plus the day ceiling
 * 0..86399 (the .352 re-join gap word's own fence the precedent
 * keeps).
 *
 * @param {{back: {rejoinStormFirstBreath: number}, prev: {rejoinStormFirstBreath: number}, cur: {rejoinStormFirstBreath: number}}} e
 * @returns {boolean}
 */
export function rejoinStormFirstBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormFirstBreath) && ok(e.prev.rejoinStormFirstBreath) && ok(e.cur.rejoinStormFirstBreath))
}

/**
 * The storm first breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinStormFirstBreath: number}, prev: {rejoinStormFirstBreath: number}, cur: {rejoinStormFirstBreath: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormFirstBreathTrendRow (e) {
  if (!rejoinStormFirstBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormFirstBreath
  const p = prev.rejoinStormFirstBreath
  const c = cur.rejoinStormFirstBreath
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the storm first breath never invents - the REAL
  // window's own ONE held pair the F534/F535 eights keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .362 storm breath count word prices the STORM BREATH COUNT (the whole cadence list's own SIZE the adjacent pairs count prices) and the .363 champion breath count word prices the CHAMPION BREATH COUNT (the champion cadence list's own size the same adjacent-pairs law keeps - the storm count's own mirror the subsequence law prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the storm first breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own storm first breath trend (v0.976.364): the fleet's own storm first breath fade ran two steps deep - ${arc} - the storm's own opening breath shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own storm first breath trend (v0.976.364): the fleet's own storm first breath swell ran two steps deep - ${arc} - the storm's own opening breath lengthened each face, ${tail}`
  }
  return `the fleet's own storm first breath trend (v0.976.364): the fleet's own storm first breath swing - ${arc} - the storm traded its opening breath between the faces, ${tail}`
}
