// (v0.976.370) THE STORM'S OWN FOURTH BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces
// - the STORM FOURTH BREATH CELL (the storm cadence list's own FOURTH
// GAP the adjacent pair at index three prices: the consecutive re-join
// events in file order the adjacent pairs measure, the FOURTH gap the
// list keeps - the fourth order statistic the .364 storm first breath
// the opening prices, the .366 storm second breath the runner-up
// priced, the .368 storm third breath the third arrival tempo priced
// and this seat the fourth arrival tempo prices). The family rhythm
// keeps (.346 mass .347 breadth .348 depth .349 name .350 span .351
// champ stretch .352 gap .353 champ gap .354 mean breath .355 champ
// mean breath .356 storm median breath .357 champ median breath .358
// storm min breath .359 champ min breath .360 storm breath range .361
// champ breath range .362 storm breath count .363 champ breath count
// .364 storm first breath .365 champ first breath .366 storm second
// breath .367 champ second breath .368 storm third breath .369 champ
// third breath all priced - the storm side the fresh seat prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// beyond-first echoes the storm's re-join events ride (the FILE ORDER
// the .362 word keeps), the adjacent pairs the gaps measure (the
// gap's own clock cell 0..86399 the day keeps, the wrap
// next+86400-first the day-cyclic precedent the .350 word holds), the
// FOURTH gap the order statistic picks (the fewer-than-four-gaps face
// the constructive zero the .368 word's own convention extends - the
// three-gap storm the fourth pair no list holds).
// THE HEAD LAW: the fourth breath the censoring never rides - the
// head the tail's own censoring the .368 word's own decline NEVER
// rides (the first FOUR gaps all fully observed whenever the list
// holds them, the log cut censors the TAIL alone - the LAST breath
// the tail's own censoring the honest law declined, the FOURTH the
// head's own sample the seat prices).
// THE CONSTRUCTIVE LAW: the fewer-than-four-gaps face the lawful
// zero - the one-gap and the two-gap and the three-gap faces the
// window prices (the F509 single-gap trio the .366 word voiced, the
// F513 three-gap face the fourth pair no list holds the constructive
// branch rides, the F559 one-echo tail the no-pair face keeps) - the
// synthetic pin the branch keeps.
// THE REAL ZERO LAW: the fourth gap zero WHEN the list's own FOURTH
// pair the same second keeps - the REAL window prices the zero ONE
// face (F516's own pair the storm keeps - the honest zero the
// constructive branch never rides, the list holds the gaps the zero
// the cadence's own tempo prices).
// THE BOUND LAW: the .358 storm min breath <= the fourth breath <=
// the .352 re-join gap (the storm's own tallest silence) and the
// fourth breath <= the .350 re-join span's own sum-law - the bounds
// the voiced faces price (the fewer-than-four-gaps face the lawful
// zero the bounds keep - the no-list-sample face the min/max never
// bound).
// THE DIALOG LAW: the fourth breath UNDER the .368 storm third breath
// on the shorten faces, LEVEL on the same-tempo faces, ABOVE on the
// lengthen faces - no constant order the REAL window prices (the
// thirty-one under the five level the twenty-six above the 62-face
// window keeps - the seat LIVE, the F564's own 2 ABOVE the 1 the
// fresh tail keeps).
// THE CEILING LAW: the fourth breath IS the storm cadence's own
// tallest silence on FOUR faces (F527's own 110 the arc ceiling,
// F548's own 106, F515's own 62, F523's own 36) - the fourth the
// order statistic the extremes the cadence keeps.
// THE HELD LAW: the 62-face window keeps TWO held pairs (the
// F529/F530 constructive-zero pair, the F539/F540 sevens the .367
// champ arc's own echo prices) - the .368 arc's own ZERO the fourth
// arc does NOT inherit (the honest distinction the seats price).
// THE MULTI-CLASS LAW: the REAL SIXTY-TWO-face window F501-F564 keeps
// THIRTY-TWO distinct classes no face born-constant (the 0 the
// nine-face gravity - the eight constructive + the F516 REAL - the 5
// the four-face class, the 4/6/16/1/2/14 the three-face classes, the
// 110 the ceiling face F527 keeps, the 2 the fresh tail F564 keeps) -
// the seat LIVE (the mode candidate the honest probe DECLINED: the
// nine-face zero the tie-degenerate gravity the same decline the
// family prices).
// THE FRESH TAIL: F564's own 2 the newest harvest prices (the
// 18-gap storm cadence [2, 1, 1, 2, 0, 6, 9, 1, 13, 28, 48, 2, 2, 1,
// 1, 1, 0, 5] the fourth pair 2 the list keeps).

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The storm fourth breath census - the storm cadence list's own
 * FOURTH GAP the adjacent pair at index three prices (the .364 storm
 * first breath the opening prices, the .366 storm second breath the
 * runner-up priced, the .368 storm third breath the third priced, the
 * fourth this seat keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormFourthBreath: number}|null} the fourth gap or null (non-array)
 */
export function rejoinStormFourthBreathCensus (lines) {
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
  return { rejoinStormFourthBreath: gaps.length > 3 ? gaps[3] : 0 } // the FOURTH the list keeps (the constructive zero the fewer-than-four-gaps convention keeps)
}

/**
 * The fence - the gap words' own integer law plus the day ceiling
 * 0..86399 (the .352 re-join gap word's own fence the precedent
 * keeps).
 *
 * @param {{back: {rejoinStormFourthBreath: number}, prev: {rejoinStormFourthBreath: number}, cur: {rejoinStormFourthBreath: number}}} e
 * @returns {boolean}
 */
export function rejoinStormFourthBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormFourthBreath) && ok(e.prev.rejoinStormFourthBreath) && ok(e.cur.rejoinStormFourthBreath))
}

/**
 * The storm fourth breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinStormFourthBreath: number}, prev: {rejoinStormFourthBreath: number}, cur: {rejoinStormFourthBreath: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormFourthBreathTrendRow (e) {
  if (!rejoinStormFourthBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormFourthBreath
  const p = prev.rejoinStormFourthBreath
  const c = cur.rejoinStormFourthBreath
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the storm fourth breath never invents - the REAL
  // window's own TWO held pairs the arc keeps)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .362 storm breath count word prices the STORM BREATH COUNT (the whole cadence list's own SIZE the adjacent pairs count prices) and the .363 champion breath count word prices the CHAMPION BREATH COUNT (the champion cadence list's own size the same adjacent-pairs law keeps) and the .364 storm first breath word prices the STORM FIRST BREATH (the whole cadence list's own OPENING GAP the first adjacent pair prices) and the .365 champion first breath word prices the CHAMPION FIRST BREATH (the champion cadence list's own opening gap the same first-pair law keeps) and the .366 storm second breath word prices the STORM SECOND BREATH (the storm cadence list's own second gap the adjacent pair at index one prices - the runner-up order statistic the second arrival tempo prices) and the .367 champion second breath word prices the CHAMPION SECOND BREATH (the champion cadence list's own second gap the same second-pair law keeps - the storm runner-up's own mirror the symmetric seat prices) and the .368 storm third breath word prices the STORM THIRD BREATH (the storm cadence list's own third gap the adjacent pair at index two prices - the third order statistic the third arrival tempo prices) and the .369 champion third breath word prices the CHAMPION THIRD BREATH (the champion cadence list's own third gap the same third-pair law keeps - the storm third's own mirror the symmetric seat prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the storm fourth breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own storm fourth breath trend (v0.976.370): the fleet's own storm fourth breath fade ran two steps deep - ${arc} - the storm's own fourth breath shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own storm fourth breath trend (v0.976.370): the fleet's own storm fourth breath swell ran two steps deep - ${arc} - the storm's own fourth breath lengthened each face, ${tail}`
  }
  return `the fleet's own storm fourth breath trend (v0.976.370): the fleet's own storm fourth breath swing - ${arc} - the storm traded its fourth breath between the faces, ${tail}`
}
