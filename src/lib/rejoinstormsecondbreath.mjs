// (v0.976.366) THE STORM'S OWN SECOND BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces
// - the STORM SECOND BREATH CELL (the storm cadence list's own SECOND
// GAP the adjacent pair at index one prices: the consecutive re-join
// events in file order the adjacent pairs measure, the SECOND gap the
// list keeps - the runner-up order statistic the .364 storm first
// breath the opening prices and this seat the second arrival tempo
// prices). The family rhythm keeps (.346 mass .347 breadth .348 depth
// .349 name .350 span .351 champ stretch .352 gap .353 champ gap .354
// mean breath .355 champ mean breath .356 storm median breath .357
// champ median breath .358 storm min breath .359 champ min breath
// .360 storm breath range .361 champ breath range .362 storm breath
// count .363 champ breath count .364 storm first breath .365 champ
// first breath all priced - the storm side the fresh seat prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// beyond-first echoes the storm's re-join events ride (the FILE ORDER
// the .362 word keeps), the adjacent pairs the gaps measure (the
// second's own clock cell 0..86399 the day keeps, the wrap
// next+86400-first the day-cyclic precedent the .350 word holds), the
// SECOND gap the runner-up breath picks (the fewer-than-two-gaps face
// the constructive zero the .364 word's own convention keeps - the
// single-gap storm the second pair no list holds).
// THE HEAD LAW: the second breath the censoring never rides - the
// head the tail's own censoring the .364 word's own decline NEVER
// rides (the first TWO gaps both fully observed whenever the list
// holds them, the log cut censors the TAIL alone - the LAST breath
// the tail's own censoring the honest law declined, the SECOND the
// head's own sample the seat prices).
// THE CONSTRUCTIVE LAW: the fewer-than-two-gaps face the lawful zero
// - the single-gap trio F509's and F529's and F545's own faces the
// window prices (the .364 word's own floor trio the FIRST breath
// voiced, the SECOND breath the no-second-pair face the constructive
// branch rides) plus the F559 one-echo tail - FOUR faces the window's
// constructive keeps (the synthetic pin the branch keeps).
// THE REAL ZERO LAW: the second gap zero WHEN the list's own SECOND
// pair the same second keeps - the REAL window prices the zero THREE
// faces (F512's own pair the seventeen-gap storm keeps, F549's own
// pair the nine-name co-reign keeps, F550's own pair the thirty-gap
// storm keeps) - the F549/F550 held pair the zeros the arc keeps.
// THE BOUND LAW: the .358 storm min <= the second breath <= the .352
// re-join gap (the two edges' own samples bound) and the second breath
// <= the .350 span - the REAL voiced-face audit GREEN every face (the
// constructive faces the lawful zero the bounds keep).
// THE DIALOG LAW: the second breath UNDER the .356 storm median
// FIFTEEN faces (F509's own 0 under the 28 the single-gap under keeps),
// level SIX faces (F527's own 8 the level rides), ABOVE THIRTY-SIX
// faces (F519's own 82 above the 11 the above-dialog the window
// prices, F558's own 59 above the 9, F560's own 7 above the 6 the
// fresh tail) - no constant order the honest seat prices.
// THE CEILING LAW: the second breath IS the storm's own TALLEST
// silence on FOURTEEN faces (the runner-up IS the max the busy boots
// keep - F516's own 170 the arc ceiling the same face prices, F519's
// own 82 the above-dialog ceiling rides, F558's own 59 the fresh
// window's ceiling keeps).
// THE HELD PAIR: the REAL window keeps ONE held pair (F549/F550 the
// zeros) - the .364 storm arc's ONE held pair the F534/F535 eights
// the second arc does NOT inherit, the honest naming prices (the
// held step the trend's own honest silence keeps).
// THE MULTI-CLASS LAW: the REAL FIFTY-EIGHT-face window F501-F560
// keeps THIRTY-FOUR distinct classes no face born-constant (the prev
// window F501-F559 the same THIRTY-FOUR) - the 0 the seven-face
// gravity (the constructive four and the real zero three the pair
// keeps), the 5 and the 6 and the 8 the four-face classes, the 23 the
// three-face class, the 4 and the 7 and the 37 and the 38 and the 47
// and the 59 and the 95 the pairs, TWENTY-TWO singletons, the 170 the
// ceiling face F516 keeps, the 7 the fresh tail F560 pairs the F535
// keeps - MANY values speak, the seat LIVE (the mode candidate the
// honest probe DECLINED again: THIRTY-SIX tie-degenerate faces the
// mode's own tie law the seat never rides, the SECOND's thirty-four
// the choice itself prices).
// THE FRESH TAIL: F560's own 7 the newest harvest prices (the F560
// dispatch the .364 tree face the F14 eleven-reign storm keeps - the
// eighteen-gap storm the second breath 7 above the median 6 the
// above-dialog the tail prices).
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
// argv[6..8] tail the .278 contract extends, the .281 through .365
// folds the neighbours hold), the fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The storm second breath census - the storm cadence list's own
 * SECOND GAP the adjacent pair at index one prices (the .364 storm
 * first breath the opening prices, the runner-up this seat keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinStormSecondBreath: number}|null} the second gap or null (non-array)
 */
export function rejoinStormSecondBreathCensus (lines) {
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
  return { rejoinStormSecondBreath: gaps.length > 1 ? gaps[1] : 0 } // the SECOND the list keeps (the constructive zero the fewer-than-two-gaps convention keeps)
}

/**
 * The fence - the gap words' own integer law plus the day ceiling
 * 0..86399 (the .352 re-join gap word's own fence the precedent
 * keeps).
 *
 * @param {{back: {rejoinStormSecondBreath: number}, prev: {rejoinStormSecondBreath: number}, cur: {rejoinStormSecondBreath: number}}} e
 * @returns {boolean}
 */
export function rejoinStormSecondBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinStormSecondBreath) && ok(e.prev.rejoinStormSecondBreath) && ok(e.cur.rejoinStormSecondBreath))
}

/**
 * The storm second breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinStormSecondBreath: number}, prev: {rejoinStormSecondBreath: number}, cur: {rejoinStormSecondBreath: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinStormSecondBreathTrendRow (e) {
  if (!rejoinStormSecondBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinStormSecondBreath
  const p = prev.rejoinStormSecondBreath
  const c = cur.rejoinStormSecondBreath
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the storm second breath never invents - the REAL
  // window's own ONE held pair the F549/F550 zeros keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .362 storm breath count word prices the STORM BREATH COUNT (the whole cadence list's own SIZE the adjacent pairs count prices) and the .363 champion breath count word prices the CHAMPION BREATH COUNT (the champion cadence list's own size the same adjacent-pairs law keeps - the storm count's own mirror the subsequence law prices) and the .364 storm first breath word prices the STORM FIRST BREATH (the whole cadence list's own OPENING GAP the first adjacent pair prices - the runner-up's own elder the head law prices) and the .365 champion first breath word prices the CHAMPION FIRST BREATH (the champion cadence list's own opening gap the same first-pair law keeps - the storm opening's own mirror the symmetric seat prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the storm second breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own storm second breath trend (v0.976.366): the fleet's own storm second breath fade ran two steps deep - ${arc} - the storm's own second breath shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own storm second breath trend (v0.976.366): the fleet's own storm second breath swell ran two steps deep - ${arc} - the storm's own second breath lengthened each face, ${tail}`
  }
  return `the fleet's own storm second breath trend (v0.976.366): the fleet's own storm second breath swing - ${arc} - the storm traded its second breath between the faces, ${tail}`
}
