// (v0.976.353) THE CHAMPION'S OWN LONGEST SILENCE - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the CHAMPION GAP CELL (the longest inter-event silence the CHAMPION
// SET's own event sequence keeps: the consecutive champion re-join
// events in file order the adjacent pairs measure, the TALLEST gap the
// census prices). The .346 re-join bin word prices the lane's own TOTAL
// (the churn's own MASS) and the .347 re-join bots word prices the
// BREADTH (the churn's own WIDTH) and the .348 re-join peak word prices
// the PEAK (the churn's own DEPTH) and the .349 re-join peak name word
// prices the IDENTITY (WHO owns the tallest column) and the .350
// re-join span word prices the TEMPO (the whole storm's own duration)
// and the .351 champion stretch word prices the champions' own RIDE and
// the .352 re-join gap word prices the storm's own BREATH - the
// CHAMPION GAP the seven cells underprice: the champion's OWN breathing
// inside its own ride (F537's own 364-second champion stretch the F5
// column rode in a 251-second intra-champion silence the fire-1043
// deep-read's both-edges face keeps, F539's own 37-second champion
// burst the 11-second champion breath the fresh face keeps - the
// champion's own cadence the storm's own gap never prices).
// THE CHAMPION GAP LAW: the champion's own gaps sum to the champion's
// own stretch (the .351 word's own arithmetic the same champion event
// set keeps - the day-cyclic wrap the accounting keeps) - every
// champion gap the champion stretch bounds (champGap <= champSpan the
// sum law keeps, the REAL FORTY-face audit GREEN).
// THE ZERO LAW: the champion gap zero iff fewer than two champion
// re-join events the face voices (the LAWFUL ZERO the .304/.306
// convention the count words keep, the champspan's own zero law the
// same event set mirrors, the REAL audit GREEN).
// THE EQUALITY LAW (the single-gap champion ride): the champion gap
// EQUALS the champion stretch when ONE silence owns the whole ride -
// the REAL audit keeps EIGHT equality faces (F509's own 28=28, F510's
// own, F513's own, F518's own, F519's own, F528's own, F529's own
// 40=40, F531's own - the two-event champion rides the single gap IS
// the champion's whole stretch).
// THE MULTI-CLASS LAW: the REAL FORTY-face arc F501-F540 keeps
// THIRTY-FOUR distinct classes no face born-constant - the 8-second
// floor F535's own burst keeps, the 251-second ceiling F537's own
// champion window rides (the .352 word's own champion-window child the
// test pinned the seat prices formally), the 11 the twin pair (F518's
// and F539's own), the 28 the twin pair (F509's and F521's own), MANY
// values speak, the seat LIVE, the born-constant decline never rides.
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand), the champion names' own beyond-first
// echoes the champion events ride (the FILE ORDER the .351 word keeps),
// the adjacent pairs the gaps measure (the second's own clock cell
// 0..86399 the day keeps, the wrap next+86400-first the day-cyclic
// precedent the .350 word holds), the TALLEST gap the word prices.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the .321
// word's own shape law keeps, the 'joined the game' tail the lane's
// own skin byte-locked, LINE END tail boundary the .288 precedent).
// THE FENCE: the count words' own integer law plus the day ceiling
// 0..86399. CENSUS GUARD: zero fleet wiring, zero new fleet log lines
// - the word rides the reader's fold through the SECOND carrier lane
// (the argv[6..8] tail the .278 contract extends, the .281 through
// .352 folds the neighbours hold), the fleet's own console never
// changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The champion gap census - the champion set's own longest inter-event
 * silence the seven cells underprice.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampGapSeconds: number}|null} the gap or null (non-array)
 */
export function rejoinChampGapCensus (lines) {
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
  let gap = 0
  for (let i = 1; i < cevts.length; i++) {
    const cur = cevts[i - 1].s
    const nxt = cevts[i].s
    const g = nxt >= cur ? nxt - cur : nxt + 86400 - cur // the day-cyclic wrap
    if (g > gap) gap = g
  }
  return { rejoinChampGapSeconds: gap }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinChampGapSeconds: number}, prev: {rejoinChampGapSeconds: number}, cur: {rejoinChampGapSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinChampGapConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampGapSeconds) && ok(e.prev.rejoinChampGapSeconds) && ok(e.cur.rejoinChampGapSeconds))
}

/**
 * The champion gap weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinChampGapSeconds: number}, prev: {rejoinChampGapSeconds: number}, cur: {rejoinChampGapSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampGapTrendRow (e) {
  if (!rejoinChampGapConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampGapSeconds
  const p = prev.rejoinChampGapSeconds
  const c = cur.rejoinChampGapSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion gap never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (the champions whose own column equals the peak) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .352 re-join gap word prices the RE-JOIN GAP (the storm's own longest silence the storm's own event sequence keeps) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion gap row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion gap trend (v0.976.353): the fleet's own champion gap fade ran two steps deep - ${arc} - the fleet's own champions' longest silences shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion gap trend (v0.976.353): the fleet's own champion gap swell ran two steps deep - ${arc} - the fleet's own champions' longest silences stretched each face, ${tail}`
  }
  return `the fleet's own champion gap trend (v0.976.353): the fleet's own champion gap swing - ${arc} - the fleet's own champions traded their longest silence between the faces, ${tail}`
}
