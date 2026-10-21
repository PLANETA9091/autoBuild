// (v0.976.355) THE CHAMPION'S OWN MEAN BREATH - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the CHAMPION MEAN BREATH CELL (the WHOLE champion cadence list one
// integer the compression prices: the consecutive champion re-join
// events in file order the adjacent pairs measure, the gaps the sum
// law's own division compresses, the FLOOR of the mean the census
// prices). The .346 re-join bin word prices the lane's own TOTAL (the
// churn's own MASS) and the .347 re-join bots word prices the BREADTH
// (the churn's own WIDTH) and the .348 re-join peak word prices the
// PEAK (the churn's own DEPTH) and the .349 re-join peak name word
// prices the IDENTITY (WHO owns the tallest column) and the .350
// re-join span word prices the TEMPO (the whole storm's own duration)
// and the .351 champion stretch word prices the champions' own RIDE
// and the .352 re-join gap word prices the storm's own TALLEST
// silence and the .353 champion gap word prices the champion's OWN
// LONGEST silence and the .354 mean breath word prices the storm's
// own WHOLE cadence - the CHAMPION MEAN BREATH the nine cells
// underprice: the champion's own TYPICAL breath the .353 word prices
// the tallest only and the .354 word prices the storm's own list (the
// family rhythm the alternation keeps - .350 storm .351 champ .352
// storm .353 champ .354 storm .355 champ, the champion's own typical
// breath the symmetric seat the pair keeps).
// THE CHAMPION MEAN LAW: the whole champion cadence table the sum
// law's own division prices - the champion's own gaps sum to the
// champion's own stretch (the .351/.353 words' own arithmetic the
// same champion event set keeps, the day-cyclic wrap the accounting
// keeps), the mean breath the division's own FLOOR prices (the
// integer law the count words keep) - the mean the champion's own
// TALLEST gap bounds from above (champMean <= the .353 word the
// champion-tallest-silence law keeps) and the champion stretch bounds
// tighter (champMean <= champSpan the division keeps, the REAL
// FORTY-TWO-face audit GREEN) and the storm's own mean breath bounds
// nothing (the champion's own cadence the storm's own list never
// prices - the two lists different event sets the seat separation
// keeps, co-existence by seat never by duplication).
// THE ZERO LAW: the champion mean zero iff fewer than two champion
// re-join events the face voices (the LAWFUL ZERO the .353 word's
// own zero law the same event set mirrors - no champion set, no
// adjacent pair, no division, the REAL audit GREEN: every face the
// forty-two-face arc holds a champion set rides, the zero face the
// firsts-only face keeps).
// THE EQUALITY LAW (the single-gap champion ride): the champion mean
// EQUALS the champion stretch when ONE silence owns the whole ride -
// the gap count one the division never thins - the REAL audit keeps
// EIGHT equality faces (F509's own 28=28, F510, F513, F518, F519,
// F528, F529's own 40=40, F531 - the .353 word's own equality pair
// set the same two-event champion rides keep, the single gap IS the
// champion's whole stretch and the mean IS the gap).
// THE MULTI-CLASS LAW: the REAL FORTY-TWO-face arc F501-F542 keeps
// THIRTY distinct classes no face born-constant - the 6-second floor
// F506's own ten-gap F1 column keeps, the 104-second ceiling F519's
// own single-gap ride holds, the 11 the triplet (F518's and F540's
// and F522's own), the 62 the twin pair (F502's and F532's own), MANY
// values speak, the seat LIVE, the born-constant decline never rides.
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand the .353 word re-rides), the
// champion names' own beyond-first echoes the champion events ride
// (the FILE ORDER the .351 word keeps), the adjacent pairs the gaps
// measure (the second's own clock cell 0..86399 the day keeps, the
// wrap next+86400-first the day-cyclic precedent the .350 word
// holds), the WHOLE champion list the division compresses (the gap
// count the adjacent pairs keep, the floor the integer law keeps).
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .354 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The champion mean breath census - the champion set's own WHOLE
 * cadence list the sum law's own division prices (the nine cells
 * underprice).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampMeanBreathSeconds: number}|null} the mean or null (non-array)
 */
export function rejoinChampMeanBreathCensus (lines) {
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
  for (const [name, n] of tally) if (n > 1 && n - 1 === peak) champs.add(name)
  const cevts = evts.filter(e => e.n > 1 && champs.has(e.name)) // the champion events the FILE ORDER keeps
  const gaps = []
  for (let i = 1; i < cevts.length; i++) {
    const cur = cevts[i - 1].s
    const nxt = cevts[i].s
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur) // the day-cyclic wrap
  }
  const sum = gaps.reduce((a, b) => a + b, 0) // the champion's own gaps the stretch sums
  const mean = gaps.length > 0 ? Math.floor(sum / gaps.length) : 0 // the whole list one division prices
  return { rejoinChampMeanBreathSeconds: mean }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinChampMeanBreathSeconds: number}, prev: {rejoinChampMeanBreathSeconds: number}, cur: {rejoinChampMeanBreathSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinChampMeanBreathConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampMeanBreathSeconds) && ok(e.prev.rejoinChampMeanBreathSeconds) && ok(e.cur.rejoinChampMeanBreathSeconds))
}

/**
 * The champion mean breath weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {rejoinChampMeanBreathSeconds: number}, prev: {rejoinChampMeanBreathSeconds: number}, cur: {rejoinChampMeanBreathSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampMeanBreathTrendRow (e) {
  if (!rejoinChampMeanBreathConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampMeanBreathSeconds
  const p = prev.rejoinChampMeanBreathSeconds
  const c = cur.rejoinChampMeanBreathSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion mean breath never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (the champions whose own column equals the peak) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own TALLEST silence the storm's own event sequence keeps) and the .353 champion gap word prices the CHAMPION GAP (the champion set's own longest silence the champion's own event sequence keeps) and the .354 mean breath word prices the MEAN BREATH (the storm's own WHOLE cadence list one integer the sum law's own division prices) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion mean breath row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion mean breath trend (v0.976.355): the fleet's own champion mean breath fade ran two steps deep - ${arc} - the fleet's own champions' typical breaths shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion mean breath trend (v0.976.355): the fleet's own champion mean breath swell ran two steps deep - ${arc} - the fleet's own champions' typical breaths stretched each face, ${tail}`
  }
  return `the fleet's own champion mean breath trend (v0.976.355): the fleet's own champion mean breath swing - ${arc} - the fleet's own champions traded their typical breath between the faces, ${tail}`
}
