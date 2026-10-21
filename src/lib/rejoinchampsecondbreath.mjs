// (v0.976.367) THE CHAMPION'S OWN SECOND BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces
// - the CHAMPION SECOND BREATH CELL (the champion cadence list's own
// SECOND GAP the adjacent pair at index one prices: the consecutive
// champion re-join events in file order the adjacent pairs measure,
// the SECOND gap the champion cadence keeps - the runner-up order
// statistic the .366 storm second breath the whole storm prices and
// this seat the champion set's own second arrival tempo prices). The
// family rhythm keeps (.346 mass .347 breadth .348 depth .349 name
// .350 span .351 champ stretch .352 gap .353 champ gap .354 mean
// breath .355 champ mean breath .356 storm median breath .357 champ
// median breath .358 storm min breath .359 champ min breath .360
// storm breath range .361 champ breath range .362 storm breath count
// .363 champ breath count .364 storm first breath .365 champ first
// breath .366 storm second breath all priced - the champ side the
// fresh seat prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand the .355 .357 .359 .361 .363 .365
// words re-ride - the TIE the co-reign keeps: F549's own NINE-name
// co-reign the whole-storm face keeps), the champion names' own
// beyond-first echoes the champion events ride (the FILE ORDER the
// .351 word keeps), the adjacent pairs the gaps measure (the second's
// own clock cell 0..86399 the day keeps, the wrap next+86400-first
// the day-cyclic precedent the .350 word holds), the SECOND gap the
// runner-up breath picks (the fewer-than-two-gaps face the lawful
// zero the .366 storm word's own convention keeps - the single-gap
// champion cadence the second pair no list holds).
// THE HEAD LAW: the second breath the censoring never rides - the
// first TWO champion gaps both fully observed whenever the list holds
// them, the log cut censors the TAIL alone - the LAST breath the
// tail's own censoring the honest law declined, the SECOND the head's
// own sample the seat prices (the .366 storm word's own head law the
// champion cadence re-rides).
// THE CONSTRUCTIVE LAW: the fewer-than-two-gaps face the lawful zero
// - the one-gap faces the window prices (F509's own F16 single gap
// and F519's own F2 one-gap reign and F545's own same-second opening
// pair the ONE champ gap the zero keeps, the F510's and the F513's
// and the F518's and the F528's and the F529's and the F531's own
// one-gap faces the same constructive branch rides) plus the F559
// no-pair tail (the one champion event the no list holds) - ELEVEN
// faces the window's constructive keeps (the synthetic pin the branch
// keeps).
// THE REAL ZERO LAW: the second gap zero WHEN the champion cadence's
// own SECOND pair the same second keeps - the REAL window prices the
// zero ONE face (F549's own nine-name co-reign the F14 and the F13
// the SAME SECOND 11:59:58 the second adjacent pair keeps - the same
// second the storm word's own zero face the champion zero re-voices,
// the count EIGHT the voiced champ cadence the constructive branch
// never rides).
// THE BOUND LAW: the .359 champion min breath <= the second breath <=
// the .353 champion gap (the champion set's own longest silence
// bounds the runner-up) and the second breath <= the .351 champion
// stretch - the REAL voiced-face audit GREEN every face (the
// constructive faces the lawful zero the bounds keep).
// THE DIALOG LAW: the second breath UNDER the .357 champion median
// TWENTY faces (F509's own 0 under the 28 the single-gap under
// keeps), level FOURTEEN faces (F527's own 8 the level rides), ABOVE
// TWENTY-FIVE faces (F504's own 166 above the 18 the above-dialog the
// window prices, F558's own 42 above the 15, F561's own 57 above the
// 31 the fresh tail) - no constant order the honest seat prices.
// THE CEILING LAW: the second breath IS the champion cadence's own
// TALLEST silence on EIGHTEEN faces (the runner-up IS the max the
// busy reigns keep - F504's own 166 the above-dialog face prices,
// F517's own 122, F543's own 233 the arc ceiling the same face
// prices).
// THE HELD PAIR: the REAL window keeps FOUR held pairs (F509/F510 the
// zeros, F518/F519 the zeros, F528/F529 the zeros, F539/F540 the
// sevens) - the .365 first-breath arc's ONE held pair the F534/F535
// eights the second arc does NOT inherit, the honest naming prices
// (the held step the trend's own honest silence keeps).
// THE MULTI-CLASS LAW: the REAL FIFTY-NINE-face window F501-F561
// keeps THIRTY-FOUR distinct classes no face born-constant (the prev
// window F501-F560 the fresh tail's own class unpriced keeps
// THIRTY-THREE) - the 0 the TWELVE-face gravity (the constructive
// eleven and the real one the pair keeps), the 7 and the 8 the
// five-face classes, the 10 the four-face class, the 5 the three-face
// class, the 63 the pair, TWENTY-EIGHT singletons, the 233 the
// ceiling face F543 keeps, the 57 the fresh tail F561 keeps - MANY
// values speak, the seat LIVE (the mode candidate the honest probe
// DECLINED again: THIRTY-FIVE tie-degenerate faces the mode's own tie
// law the seat never rides, the SECOND's thirty-four the choice
// itself prices).
// THE FRESH TAIL: F561's own 57 the newest harvest prices (the F561
// dispatch the .366 tree face the F19's own triple re-join the two-gap
// cadence [6, 57] keeps - the above-dialog 57 above the median 31 the
// tail prices).
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
// argv[6..8] tail the .278 contract extends, the .281 through .366
// folds the neighbours hold), the fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The champion second breath census - the champion cadence list's own
 * SECOND GAP the adjacent pair at index one prices (the .365 champion
 * first breath the opening prices, the runner-up this seat keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampSecondBreath: number}|null} the second gap or null (non-array)
 */
export function rejoinChampSecondBreathCensus (lines) {
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
  return { rejoinChampSecondBreath: gaps.length > 1 ? gaps[1] : 0 } // the SECOND the champion cadence keeps (the constructive zero the fewer-than-two-gaps convention keeps)
}

/**
 * The fence - the gap words' own integer law plus the day ceiling
 * 0..86399 (the .352 re-join gap word's own fence the precedent
 * keeps).
 *
 * @param {{back: {rejoinChampSecondBreath: number}, prev: {rejoinChampSecondBreath: number}, cur: {rejoinChampSecondBreath: number}}} e
 * @returns {boolean}
 */
export function rejoinChampSecondBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampSecondBreath) && ok(e.prev.rejoinChampSecondBreath) && ok(e.cur.rejoinChampSecondBreath))
}

/**
 * The champion second breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinChampSecondBreath: number}, prev: {rejoinChampSecondBreath: number}, cur: {rejoinChampSecondBreath: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampSecondBreathTrendRow (e) {
  if (!rejoinChampSecondBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampSecondBreath
  const p = prev.rejoinChampSecondBreath
  const c = cur.rejoinChampSecondBreath
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion second breath never invents - the REAL
  // window's own FOUR held pairs the zeros and the sevens keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .362 storm breath count word prices the STORM BREATH COUNT (the whole cadence list's own SIZE the adjacent pairs count prices) and the .363 champion breath count word prices the CHAMPION BREATH COUNT (the champion cadence list's own size the same adjacent-pairs law keeps - the storm count's own mirror the subsequence law prices) and the .364 storm first breath word prices the STORM FIRST BREATH (the whole cadence list's own OPENING GAP the first adjacent pair prices - the runner-up's own elder the head law prices) and the .365 champion first breath word prices the CHAMPION FIRST BREATH (the champion cadence list's own opening gap the same first-pair law keeps - the storm opening's own mirror the symmetric seat prices) and the .366 storm second breath word prices the STORM SECOND BREATH (the storm cadence list's own second gap the adjacent pair at index one prices - the runner-up order statistic the second arrival tempo prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion second breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion second breath trend (v0.976.367): the fleet's own champion second breath fade ran two steps deep - ${arc} - the champions' own second breath shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion second breath trend (v0.976.367): the fleet's own champion second breath swell ran two steps deep - ${arc} - the champions' own second breath lengthened each face, ${tail}`
  }
  return `the fleet's own champion second breath trend (v0.976.367): the fleet's own champion second breath swing - ${arc} - the champions traded their second breath between the faces, ${tail}`
}
