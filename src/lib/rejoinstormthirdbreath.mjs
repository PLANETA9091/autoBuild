// (v0.976.368) THE STORM'S OWN THIRD BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces
// - the STORM THIRD BREATH CELL (the storm cadence list's own THIRD
// GAP the adjacent pair at index two prices: the consecutive re-join
// events in file order the adjacent pairs measure, the THIRD gap the
// list keeps - the third order statistic the .364 storm first breath
// the opening prices, the .366 storm second breath the runner-up
// priced and this seat the third arrival tempo prices). The family
// rhythm keeps (.346 mass .347 breadth .348 depth .349 name .350 span
// .351 champ stretch .352 gap .353 champ gap .354 mean breath .355
// champ mean breath .356 storm median breath .357 champ median breath
// .358 storm min breath .359 champ min breath .360 storm breath range
// .361 champ breath range .362 storm breath count .363 champ breath
// count .364 storm first breath .365 champ first breath .366 storm
// second breath .367 champ second breath all priced - the storm side
// the fresh seat prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// beyond-first echoes the storm's re-join events ride (the FILE ORDER
// the .362 word keeps), the adjacent pairs the gaps measure (the
// gap's own clock cell 0..86399 the day keeps, the wrap
// next+86400-first the day-cyclic precedent the .350 word holds), the
// THIRD gap the order statistic picks (the fewer-than-three-gaps face
// the constructive zero the .366 word's own convention extends - the
// two-gap storm the third pair no list holds).
// THE HEAD LAW: the third breath the censoring never rides - the
// head the tail's own censoring the .366 word's own decline NEVER
// rides (the first THREE gaps all fully observed whenever the list
// holds them, the log cut censors the TAIL alone - the LAST breath
// the tail's own censoring the honest law declined, the THIRD the
// head's own sample the seat prices).
// THE CONSTRUCTIVE LAW: the fewer-than-three-gaps face the lawful
// zero - the one-gap and the two-gap faces the window prices (the
// F509 single-gap trio the .366 word voiced, the two-gap faces the
// third pair no list holds the constructive branch rides) - the
// synthetic pin the branch keeps.
// THE REAL ZERO LAW: the third gap zero WHEN the list's own THIRD
// pair the same second keeps - the REAL window prices the zero TWO
// faces (F501's own opening trio the same-second third pair keeps,
// F533's own pair the storm keeps) - the honest zero the constructive
// branch never rides (the list holds the gaps the zero the cadence's
// own tempo prices).
// THE BOUND LAW: the .358 storm min breath <= the third breath <= the
// .352 re-join gap (the storm's own tallest silence) and the third
// breath <= the .350 re-join span's own sum-law - the bounds the
// voiced faces price (the fewer-than-three-gaps face the lawful zero
// the bounds keep - the no-list-sample face the min/max never bound).
// THE DIALOG LAW: the third breath UNDER the .366 storm second breath
// on the shorten faces, LEVEL on the same-tempo faces, ABOVE on the
// lengthen faces - no constant order the REAL window prices (the
// thirty-one under the five level the twenty-four above the 60-face
// window keeps - the seat LIVE).
// THE CEILING LAW: the third breath IS the storm cadence's own
// tallest silence on TEN faces (F544's own 192 the arc ceiling, F531's
// own 133, F561's own 113 the fresh tail's neighbour keeps) - the
// third the order statistic the extremes the cadence keeps.
// THE HELD LAW: the 60-face window keeps ZERO held pairs - the .366
// arc's own THREE the third arc does NOT inherit (the honest
// distinction the seats price).
// THE MULTI-CLASS LAW: the REAL SIXTY-face window F501-F562 keeps
// THIRTY-TWO distinct classes no face born-constant (the 0 the
// seven-face gravity, the 10/5/7/20/6/4/21 the multi-face classes,
// the 192 the ceiling face F544 keeps, the 25 the fresh tail F562
// keeps) - the seat LIVE (the mode candidate the honest probe
// DECLINED: the seven-face zero the tie-degenerate gravity the same
// decline the family prices).
// THE FRESH TAIL: F562's own 25 the newest harvest prices (the
// seven-gap storm cadence [39, 18, 25, 6, 7, 48, 86] the third pair
// 25 the list keeps).

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The storm third breath census - the storm cadence list's own
 * THIRD GAP the adjacent pair at index two prices (the .364 storm
 * first breath the opening prices, the .366 storm second breath the
 * runner-up priced, the third this seat keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormThirdBreath: number}|null} the third gap or null (non-array)
 */
export function rejoinStormThirdBreathCensus (lines) {
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
  return { rejoinStormThirdBreath: gaps.length > 2 ? gaps[2] : 0 } // the THIRD the list keeps (the constructive zero the fewer-than-three-gaps convention keeps)
}

/**
 * The fence - the gap words' own integer law plus the day ceiling
 * 0..86399 (the .352 re-join gap word's own fence the precedent
 * keeps).
 *
 * @param {{back: {rejoinStormThirdBreath: number}, prev: {rejoinStormThirdBreath: number}, cur: {rejoinStormThirdBreath: number}}} e
 * @returns {boolean}
 */
export function rejoinStormThirdBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormThirdBreath) && ok(e.prev.rejoinStormThirdBreath) && ok(e.cur.rejoinStormThirdBreath))
}

/**
 * The storm third breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinStormThirdBreath: number}, prev: {rejoinStormThirdBreath: number}, cur: {rejoinStormThirdBreath: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormThirdBreathTrendRow (e) {
  if (!rejoinStormThirdBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormThirdBreath
  const p = prev.rejoinStormThirdBreath
  const c = cur.rejoinStormThirdBreath
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the storm third breath never invents - the REAL
  // window's own ZERO held pairs the arc keeps)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .362 storm breath count word prices the STORM BREATH COUNT (the whole cadence list's own SIZE the adjacent pairs count prices) and the .363 champion breath count word prices the CHAMPION BREATH COUNT (the champion cadence list's own size the same adjacent-pairs law keeps) and the .364 storm first breath word prices the STORM FIRST BREATH (the whole cadence list's own OPENING GAP the first adjacent pair prices) and the .365 champion first breath word prices the CHAMPION FIRST BREATH (the champion cadence list's own opening gap the same first-pair law keeps) and the .366 storm second breath word prices the STORM SECOND BREATH (the whole cadence list's own RUNNER-UP GAP the second adjacent pair prices - the third breath's own elder the head law prices) and the .367 champion second breath word prices the CHAMPION SECOND BREATH (the champion cadence list's own second gap the same second-pair law keeps - the storm runner-up's own mirror the symmetric seat prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the storm third breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own storm third breath trend (v0.976.368): the fleet's own storm third breath fade ran two steps deep - ${arc} - the storm's own third breath shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own storm third breath trend (v0.976.368): the fleet's own storm third breath swell ran two steps deep - ${arc} - the storm's own third breath lengthened each face, ${tail}`
  }
  return `the fleet's own storm third breath trend (v0.976.368): the fleet's own storm third breath swing - ${arc} - the storm traded its third breath between the faces, ${tail}`
}
