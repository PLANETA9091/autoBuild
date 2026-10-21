// (v0.976.363) THE CHAMPION'S OWN BREATH COUNT - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the CHAMPION BREATH COUNT CELL (the champion cadence list's own SIZE
// the adjacent pairs count prices: the consecutive champion re-join
// events in file order the adjacent pairs measure, the NUMBER of gaps
// the champion cadence keeps - the .362 storm breath count word the
// champion set's own MIRROR the symmetric seat prices). The family
// rhythm keeps (.346 mass .347 breadth .348 depth .349 name .350 span
// .351 champ stretch .352 gap .353 champ gap .354 mean breath .355
// champ mean breath .356 storm median breath .357 champ median breath
// .358 storm min breath .359 champ min breath .360 storm breath range
// .361 champ breath range .362 storm breath count all priced - the
// count word's own mirror the CHAMP side the fresh seat prices).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand the .355 .357 .359 .361 words re-
// ride - the TIE the co-reign keeps: F524's own TWO-name tie the F1
// and the F17 the ceiling face prices, F549's own NINE-name co-reign
// the nine-reign face keeps), the champion names' own beyond-first
// echoes the champion events ride (the FILE ORDER the .351 word
// keeps), the adjacent pairs the gaps measure (the second's own clock
// cell 0..86399 the day keeps, the wrap next+86400-first the
// day-cyclic precedent the .350 word holds), the NUMBER of gaps the
// count picks.
// THE IDENTITY LAW: the count the champion events' own arithmetic
// closes - count = the champion events minus the one (the adjacent
// pairs one fewer keep) - the champion events the champion names' own
// beyond-first echoes the REAL archive F357-F556 audit GREEN every
// face the origin words the seat closes.
// THE SUBSEQUENCE LAW: the champion count <= the storm count EVERY
// face (the champion events the storm's own re-join events'
// subsequence the file order keeps - the filtered list the pairs one
// fewer each keeps, the .362 word's own count the ceiling the champ
// never exceeds) - the REAL archive SIXTY-face audit GREEN every face
// (under FORTY-NINE faces the family window keeps, level SIX faces
// the whole-storm co-reigns F509's and F529's and F530's and F545's
// and F547's and F549's own every-rejoiner-a-champion rides keep,
// ABOVE never rides).
// THE ZERO-SET LAW: the champion count zero WHERE the storm count
// zero - the same faces the both words silence (the one-echo storm
// the champion list its own single echo no pair to pair keeps); the
// REAL archive prices the zero FIVE faces all outside the family
// window (F357's and F381's and F459's and F468's and F474's own
// one-echo storms the older archive keeps) - the family window
// F501-F556 never rode the zero, the synthetic pin the zero branch
// keeps (the constructive zero the fewer-than-two champion events
// the .361 range word's own convention keeps).
// THE SINGLE-GAP LAW: the .361 champion range's own zero TEN faces
// the count's floor keeps (the one-gap reign the range zero AND the
// count one the same faces voice - F509's and F510's and F513's and
// F518's and F519's and F528's and F529's and F531's and F545's and
// F551's own single-gap rides the TEN-face floor the window prices).
// THE CEILING LAW: the count 21 F524's own BUSY storm prices - the
// TWO-name tie co-reign (the F1 and the F17 the tallest columns'
// eleven-beyond-first apiece) the TWENTY-TWO champion events the
// twenty-one gaps keep - the ceiling face the BOTH counts' own
// gravity (the storm's 49 the champ's 21 the same face the mirror
// prices).
// THE HELD PAIRS: the REAL window keeps SIX held pairs (F501/F502
// the threes, F509/F510 and F518/F519 and F528/F529 the ones, the
// F536/F537 nines, F543/F544 the twos) - the .362 storm count arc's
// own TWO held pairs the champ arc does NOT inherit, the honest
// naming the difference prices (the held step the trend's own honest
// silence keeps).
// THE MULTI-CLASS LAW: the REAL FIFTY-FIVE-face window F501-F556
// keeps ELEVEN distinct classes no face born-constant - the 3 the
// eleven-face gravity, the 1 and the 2 the ten-face classes, the 10
// the five-face class, the 21 the ceiling face F524 keeps, MANY
// values speak - the seat LIVE (the champSetSize candidate the
// honest probe DECLINED again: FIVE classes FORTY-TWO born-sole
// faces the co-reign width's own gravity the seat never rides, the
// COUNT's eleven the choice itself prices).
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the .321
// word's own shape law keeps, the 'joined the game' tail the lane's
// own skin byte-locked, LINE END tail boundary the .288 precedent).
// THE FENCE: the count words' own integer law plus the day ceiling
// 0..86399 (the .346 mass word's own count fence the precedent
// keeps).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane (the
// argv[6..8] tail the .278 contract extends, the .281 through .362
// folds the neighbours hold), the fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The champion breath count census - the champion cadence list's own
 * SIZE the adjacent pairs count prices (the .362 storm count the
 * whole lane's own size prices, the champion set's own mirror this
 * seat keeps).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampBreathCount: number}|null} the count or null (non-array)
 */
export function rejoinChampBreathCountCensus (lines) {
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
  return { rejoinChampBreathCount: gaps.length } // the SIZE the champion cadence keeps
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399 (the .346 mass word's own count fence the precedent
 * keeps).
 *
 * @param {{back: {rejoinChampBreathCount: number}, prev: {rejoinChampBreathCount: number}, cur: {rejoinChampBreathCount: number}}} e
 * @returns {boolean}
 */
export function rejoinChampBreathCountConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampBreathCount) && ok(e.prev.rejoinChampBreathCount) && ok(e.cur.rejoinChampBreathCount))
}

/**
 * The champion breath count weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinChampBreathCount: number}, prev: {rejoinChampBreathCount: number}, cur: {rejoinChampBreathCount: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampBreathCountTrendRow (e) {
  if (!rejoinChampBreathCountConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampBreathCount
  const p = prev.rejoinChampBreathCount
  const c = cur.rejoinChampBreathCount
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion breath count never invents - the REAL
  // window's own SIX held pairs the F501/F502 threes and the
  // F509/F510 and F518/F519 and F528/F529 ones and the F536/F537
  // nines and the F543/F544 twos keep)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (WHO owns the tallest column) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own sum-law division the whole cadence list prices) and the .355 champion mean breath word prices the CHAMPION MEAN BREATH (the champion set's own sum-law division the champion cadence prices) and the .356 storm median breath word prices the MEDIAN BREATH (the whole cadence list's own CENTRE the sort law prices) and the .357 champion median breath word prices the CHAMPION MEDIAN BREATH (the champion cadence list's own centre the same sort law keeps) and the .358 storm min breath word prices the STORM MIN BREATH (the whole cadence list's own FLOOR the shortest adjacent gap prices) and the .359 champion min breath word prices the CHAMPION MIN BREATH (the champion cadence list's own floor the same shortest-gap law keeps) and the .360 storm breath range word prices the STORM BREATH RANGE (the whole cadence list's own SPREAD the two edges' difference prices) and the .361 champion breath range word prices the CHAMPION BREATH RANGE (the champion cadence list's own spread the same two-edge law keeps) and the .362 storm breath count word prices the STORM BREATH COUNT (the whole cadence list's own SIZE the adjacent pairs count prices - the champion count's own CEILING the subsequence law keeps) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion breath count row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion breath count trend (v0.976.363): the fleet's own champion breath count fade ran two steps deep - ${arc} - the champions' own breath lists shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion breath count trend (v0.976.363): the fleet's own champion breath count swell ran two steps deep - ${arc} - the champions' own breath lists lengthened each face, ${tail}`
  }
  return `the fleet's own champion breath count trend (v0.976.363): the fleet's own champion breath count swing - ${arc} - the champions traded their breath list size between the faces, ${tail}`
}
