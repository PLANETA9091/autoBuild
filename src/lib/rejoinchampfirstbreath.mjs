// (v0.976.365) THE CHAMPION'S OWN FIRST BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces
// - the CHAMPION FIRST BREATH CELL (the champion cadence list's own
// OPENING GAP the first adjacent pair prices: the consecutive champion
// re-join events in file order the adjacent pairs measure, the FIRST
// gap the champion cadence keeps - the champion set's own arrival
// breath the .364 storm first breath word the champion set's own
// MIRROR the symmetric seat prices). The family rhythm keeps (.346
// mass .347 breadth .348 depth .349 name .350 span .351 champ stretch
// .352 gap .353 champ gap .354 mean breath .355 champ mean breath
// .356 storm median breath .357 champ median breath .358 storm min
// breath .359 champ min breath .360 storm breath range .361 champ
// breath range .362 storm breath count .363 champ breath count .364
// storm first breath all priced - the champ side the fresh seat
// prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand the .355 .357 .359 .361 .363 words
// re-ride - the TIE the co-reign keeps: F549's own NINE-name
// co-reign the whole-storm face keeps), the champion names' own
// beyond-first echoes the champion events ride (the FILE ORDER the
// .351 word keeps), the adjacent pairs the gaps measure (the second's
// own clock cell 0..86399 the day keeps, the wrap next+86400-first
// the day-cyclic precedent the .350 word holds), the FIRST gap the
// opening breath picks (the fewer-than-two champion events face the
// constructive zero the .361 range word's own convention keeps).
// THE BOUND LAW: the opening breath the champion cadence's own edges
// bound - the .359 champion min breath <= the first breath <= the
// .353 champion gap (the champion set's own longest silence bounds
// the opening) and the first breath <= the .351 champion stretch -
// the REAL FIFTY-SEVEN-face audit GREEN every face every bound.
// THE DIALOG LAW: the first breath UNDER the .357 champion median
// THIRTEEN faces (F558's own 10 under the 15 the fresh under-dialog
// the F558 dispatch's own face keeps), level EIGHTEEN faces (F509's
// own 28 the single-gap the level rides, F519's own 104 the one-gap
// reign the level keeps), ABOVE TWENTY-SIX faces (F527's own 125
// above the 8 the storm zero face the champ above-dialog prices,
// F549's own 310 above the 2 the ceiling) - no constant order the
// honest seat prices.
// THE ZERO LAW: the first breath zero WHEN the champion set's own
// first TWO re-join events the same second keep (the REAL zero the
// same-second arrival prices - F545's own F18-F2 the 09:27:57 pair
// the single-gap champ the window prices, the storm's own zero face
// the champ zero re-voices), the CONSTRUCTIVE zero the fewer-than-
// two champion events convention the older archive's one-echo storms
// rode (F357's and F381's and F459's and F468's and F474's own faces
// the older archive keeps) - the family window never rode it until
// the F559 harvest: the fresh tail's own ONE re-join event the
// constructive zero the window's FIRST rider prices (the one-echo
// storm the F559 dispatch keeps).
// THE CEILING LAW: the first breath the champion cadence's own
// TALLEST silence on THIRTY-TWO faces (the champ cadence the short
// reigns keep - the single-gap reign the opening IS the whole the
// F509's own 28 and the F519's own 104 faces ride, the multi-gap
// ceiling F549's own 310 the opening IS the champion set's own
// tallest silence the .360 range ceiling re-voices).
// THE HELD PAIR: the REAL window keeps ONE held pair (F534/F535 the
// eights) - the same pair the .364 storm arc keeps, the held step
// the trend's own honest silence keeps.
// THE MULTI-CLASS LAW: the REAL FIFTY-SEVEN-face window F501-F559
// keeps FORTY distinct classes no face born-constant (the prev
// window F501-F558 the same FORTY the viability priced byte-exact) -
// the 8 the five-face gravity, the 6 and the 23 and the 28 and the
// 35 the three-face classes, the 0 and the 5 and the 10 and the 11
// and the 19 the pairs, THIRTY singletons, the 310 the ceiling face
// F549 keeps, the 125 the F527 above-dialog face keeps, the 0 the
// fresh tail F559's constructive face rides - MANY values speak, the
// seat LIVE (the mode candidate the honest probe DECLINED again:
// FORTY classes TWENTY-SEVEN tie-degenerate faces the mode's own tie
// law the seat never rides, the FIRST's forty the choice itself
// prices).
// THE FRESH TAIL: F559's own constructive zero the newest harvest
// prices (the F559 dispatch the .363 tree face the window grows into
// - the one-echo storm the champ list its own single echo no pair to
// pair the older convention the window's first rider keeps).
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
// argv[6..8] tail the .278 contract extends, the .281 through .364
// folds the neighbours hold), the fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The champion first breath census - the champion cadence list's own
 * OPENING GAP the first adjacent pair prices (the .364 storm first
 * breath the whole lane's own opening prices, the champion set's own
 * mirror this seat keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampFirstBreath: number}|null} the first gap or null (non-array)
 */
export function rejoinChampFirstBreathCensus (lines) {
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
  return { rejoinChampFirstBreath: gaps.length ? gaps[0] : 0 } // the OPENING the champion cadence keeps (the constructive zero the fewer-than-two-events convention keeps)
}

/**
 * The fence - the gap words' own integer law plus the day ceiling
 * 0..86399 (the .352 re-join gap word's own fence the precedent
 * keeps).
 *
 * @param {{back: {rejoinChampFirstBreath: number}, prev: {rejoinChampFirstBreath: number}, cur: {rejoinChampFirstBreath: number}}} e
 * @returns {boolean}
 */
export function rejoinChampFirstBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampFirstBreath) && ok(e.prev.rejoinChampFirstBreath) && ok(e.cur.rejoinChampFirstBreath))
}

/**
 * The champion first breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinChampFirstBreath: number}, prev: {rejoinChampFirstBreath: number}, cur: {rejoinChampFirstBreath: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampFirstBreathTrendRow (e) {
  if (!rejoinChampFirstBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampFirstBreath
  const p = prev.rejoinChampFirstBreath
  const c = cur.rejoinChampFirstBreath
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion first breath never invents - the REAL
  // window's own ONE held pair the F534/F535 eights keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .362 storm breath count word prices the STORM BREATH COUNT (the whole cadence list's own SIZE the adjacent pairs count prices - the champion count's own CEILING the subsequence law keeps) and the .363 champion breath count word prices the CHAMPION BREATH COUNT (the champion cadence list's own size the same adjacent-pairs law keeps - the storm count's own mirror the subsequence law prices) and the .364 storm first breath word prices the STORM FIRST BREATH (the whole cadence list's own OPENING GAP the first adjacent pair prices - the champion opening's own mirror the fresh seat keeps) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion first breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion first breath trend (v0.976.365): the fleet's own champion first breath fade ran two steps deep - ${arc} - the champions' own opening breath shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion first breath trend (v0.976.365): the fleet's own champion first breath swell ran two steps deep - ${arc} - the champions' own opening breath lengthened each face, ${tail}`
  }
  return `the fleet's own champion first breath trend (v0.976.365): the fleet's own champion first breath swing - ${arc} - the champions traded their opening breath between the faces, ${tail}`
}
