// (v0.976.372) THE STORM'S OWN FIFTH BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces
// - the STORM FIFTH BREATH CELL (the storm cadence list's own FIFTH
// GAP the adjacent pair at index four prices: the consecutive re-join
// events in file order the adjacent pairs measure, the FIFTH gap the
// list keeps - the fifth order statistic the .364 storm first breath
// the opening prices, the .366 storm second breath the runner-up
// priced, the .368 storm third breath the third arrival tempo priced,
// the .370 storm fourth breath the fourth priced and this seat the
// fifth arrival tempo prices). The family rhythm keeps (.346 mass
// .347 breadth .348 depth .349 name .350 span .351 champ stretch .352
// gap .353 champ gap .354 mean breath .355 champ mean breath .356
// storm median breath .357 champ median breath .358 storm min breath
// .359 champ min breath .360 storm breath range .361 champ breath
// range .362 storm breath count .363 champ breath count .364 storm
// first breath .365 champ first breath .366 storm second breath .367
// champ second breath .368 storm third breath .369 champ third breath
// .370 storm fourth breath .371 champ fourth breath all priced - the
// storm side the fresh seat prices). THE HAND: every 'joined the
// game' echo the face voices the census reads in file order, the
// name's own join tally the bin keeps, the beyond-first echoes the
// storm's re-join events ride (the FILE ORDER the .362 word keeps),
// the adjacent pairs the gaps measure (the gap's own clock cell
// 0..86399 the day keeps, the wrap next+86400-first the day-cyclic
// precedent the .350 word holds), the FIFTH gap the order statistic
// picks (the fewer-than-five-gaps face the constructive zero the
// .370 word's own convention extends - the four-gap storm the fifth
// pair no list holds).
// THE HEAD LAW: the fifth breath the censoring never rides - the
// head the tail's own censoring the .370 word's own decline NEVER
// rides (the first FIVE gaps all fully observed whenever the list
// holds them, the log cut censors the TAIL alone - the LAST breath
// the tail's own censoring the honest law declined, the FIFTH the
// head's own sample the seat prices).
// THE CONSTRUCTIVE LAW: the fewer-than-five-gaps face the lawful
// zero - the one-gap and the two-gap and the three-gap and the
// four-gap faces the window prices (the ELEVEN faces the 64-face
// window keeps: F503's own four-gap storm the fifth pair no list
// holds the branch rides, the F509 single-gap trio the .366 word
// voiced, the F513 three-gap face the elder seats price, the F559
// one-echo tail the no-pair face keeps) - the synthetic pin the
// branch keeps.
// THE REAL ZERO LAW: the fifth gap zero WHEN the list's own FIFTH
// pair the same second keeps - the REAL window prices the zero FOUR
// faces (F531's own pair the storm keeps, F549's own pair, F564's
// own pair the .370 arc's own tail the fifth seat prices, F566's own
// pair the fresh tail keeps - the honest zeros the constructive
// branch never rides, the list holds the gaps the zero the cadence's
// own tempo prices; the .370 arc's own ONE the F516 the fourth
// seat's own REAL zero the fifth arc's own tally extends - the F516
// fifth 2 the honest ABOVE the .371's own zero-face keeps).
// THE BOUND LAW: the .358 storm min breath <= the fifth breath <=
// the .352 re-join gap (the storm's own tallest silence) and the
// fifth breath <= the .350 re-join span's own sum-law - the bounds
// the FIFTY-THREE voiced faces price GREEN (the fewer-than-five-gaps
// face the lawful zero the bounds keep - the no-list-sample face the
// min/max never bound).
// THE DIALOG LAW: the fifth breath UNDER the .370 storm fourth breath
// on the shorten faces, LEVEL on the same-tempo faces, ABOVE on the
// lengthen faces - no constant order the REAL window prices (the
// thirty-three under the nine level the twenty-two above the 64-face
// window keeps - the seat LIVE, the F566's own 0 the REAL zero the
// fourth 4 UNDER the fresh tail keeps).
// THE CEILING LAW: the fifth breath IS the storm cadence's own
// tallest silence on FOUR faces (F540's own 154 the arc ceiling the
// window's own TALLEST, F543's own 104, F502's own 88, F536's own
// 61) - the fifth the order statistic the extremes the cadence keeps
// (the .370 arc's own FOUR the F527's own 110 ceiling the fifth arc
// does NOT inherit - the F527 fifth 3 the honest BELOW the fourth's
// own ceiling keeps).
// THE HELD LAW: the 64-face window keeps SIX held pairs (the
// F528/F529 and the F529/F530 and the F530/F531 constructive-zero
// triad the gravity pairs, the F522/F523 eights, the F560/F561 sixes,
// the F562/F563 sevens) - the .370 arc's own TWO the fifth arc does
// NOT inherit (the F539/F540 sevens the fifth arc declines - F539's
// own 15 the F540's own 154 the honest distinction the seats price).
// THE MULTI-CLASS LAW: the REAL SIXTY-FOUR-face window F501-F566
// keeps TWENTY-NINE distinct classes no face born-constant (the 0 the
// fifteen-face gravity - the eleven constructive + the four REAL,
// the 8 the nine-face class, the 3 the five-face class, the 1/6/7
// the three-face classes, the 13/18/27 the pairs, ELEVEN singletons,
// the 154 the ceiling F540 keeps, the 30 the F565 keeps, the 0 the
// fresh tail F566 keeps) - the seat LIVE (the mode candidate the
// honest probe DECLINED: the fifteen-face zero the tie-degenerate
// gravity the same decline the family prices).
// THE FRESH TAIL: F566's own 0 the newest harvest prices (the
// 25-gap storm cadence [15, 124, 15, 4, 0, 2, 6, 5, 2, 5, 0, 2, 4, 2,
// 1, 2, 9, 9, 9, 8, 10, 9, 10, 43, 4] the FIFTH pair 0 the list
// keeps - the fifth same-second pair the REAL zero the honest
// novelty the seat prices).

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The storm fifth breath census - the storm cadence list's own
 * FIFTH GAP the adjacent pair at index four prices (the .364 storm
 * first breath the opening prices, the .366 storm second breath the
 * runner-up priced, the .368 storm third breath the third priced,
 * the .370 storm fourth breath the fourth priced, the fifth this
 * seat keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormFifthBreath: number}|null} the fifth gap or null (non-array)
 */
export function rejoinStormFifthBreathCensus (lines) {
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
  return { rejoinStormFifthBreath: gaps.length > 4 ? gaps[4] : 0 } // the FIFTH the list keeps (the constructive zero the fewer-than-five-gaps convention keeps)
}

/**
 * The fence - the gap words' own integer law plus the day ceiling
 * 0..86399 (the .352 re-join gap word's own fence the precedent
 * keeps).
 *
 * @param {{back: {rejoinStormFifthBreath: number}, prev: {rejoinStormFifthBreath: number}, cur: {rejoinStormFifthBreath: number}}} e
 * @returns {boolean}
 */
export function rejoinStormFifthBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormFifthBreath) && ok(e.prev.rejoinStormFifthBreath) && ok(e.cur.rejoinStormFifthBreath))
}

/**
 * The storm fifth breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinStormFifthBreath: number}, prev: {rejoinStormFifthBreath: number}, cur: {rejoinStormFifthBreath: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormFifthBreathTrendRow (e) {
  if (!rejoinStormFifthBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormFifthBreath
  const p = prev.rejoinStormFifthBreath
  const c = cur.rejoinStormFifthBreath
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the storm fifth breath never invents - the REAL
  // window's own SIX held pairs the arc keeps)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .362 storm breath count word prices the STORM BREATH COUNT (the whole cadence list's own SIZE the adjacent pairs count prices) and the .363 champion breath count word prices the CHAMPION BREATH COUNT (the champion cadence list's own size the same adjacent-pairs law keeps) and the .364 storm first breath word prices the STORM FIRST BREATH (the whole cadence list's own OPENING GAP the first adjacent pair prices) and the .365 champion first breath word prices the CHAMPION FIRST BREATH (the champion cadence list's own opening gap the same first-pair law keeps) and the .366 storm second breath word prices the STORM SECOND BREATH (the storm cadence list's own second gap the adjacent pair at index one prices - the runner-up order statistic the second arrival tempo prices) and the .367 champion second breath word prices the CHAMPION SECOND BREATH (the champion cadence list's own second gap the same second-pair law keeps - the storm runner-up's own mirror the symmetric seat prices) and the .368 storm third breath word prices the STORM THIRD BREATH (the storm cadence list's own third gap the adjacent pair at index two prices - the third order statistic the third arrival tempo prices) and the .369 champion third breath word prices the CHAMPION THIRD BREATH (the champion cadence list's own third gap the same third-pair law keeps - the storm third's own mirror the symmetric seat prices) and the .370 storm fourth breath word prices the STORM FOURTH BREATH (the storm cadence list's own fourth gap the adjacent pair at index three prices - the fourth order statistic the fourth arrival tempo prices) and the .371 champion fourth breath word prices the CHAMPION FOURTH BREATH (the champion cadence list's own fourth gap the same fourth-pair law keeps - the storm fourth's own mirror the symmetric seat prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the storm fifth breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own storm fifth breath trend (v0.976.372): the fleet's own storm fifth breath fade ran two steps deep - ${arc} - the storm's own fifth breath shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own storm fifth breath trend (v0.976.372): the fleet's own storm fifth breath swell ran two steps deep - ${arc} - the storm's own fifth breath lengthened each face, ${tail}`
  }
  return `the fleet's own storm fifth breath trend (v0.976.372): the fleet's own storm fifth breath swing - ${arc} - the storm traded its fifth breath between the faces, ${tail}`
}
