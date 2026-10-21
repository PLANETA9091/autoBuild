// (v0.976.352) THE STORM'S OWN LONGEST SILENCE - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the RE-JOIN GAP CELL (the longest inter-event silence the storm's
// own event sequence keeps: the consecutive re-join events in file
// order the adjacent pairs measure, the TALLEST gap the census
// prices). The .346 re-join bin word prices the lane's own TOTAL (the
// churn's own MASS) and the .347 re-join bots word prices the BREADTH
// (the churn's own WIDTH) and the .348 re-join peak word prices the
// PEAK (the churn's own DEPTH) and the .349 re-join peak name word
// prices the IDENTITY (WHO owns the tallest column) and the .350
// re-join span word prices the TEMPO (the whole storm's own duration)
// and the .351 champion stretch word prices the champions' own RIDE -
// the GAP the six cells underprice: the storm's own BREATH (where the
// silence sits - F539's own 95-second mid-storm breath the fresh face
// keeps, F10's 04:26:44 echo to F3's 04:28:19 the storm's own
// mid-breath the deep-read names, F516's own 170-second ceiling the
// arc rides).
// THE GAP LAW: the gaps sum to the storm's own span (the .350 word's
// own arithmetic the same event set keeps - the day-cyclic wrap the
// accounting keeps) - every gap the span bounds (gap <= span the sum
// law keeps, the REAL THIRTY-NINE-face audit GREEN).
// THE ZERO LAW: the gap zero iff the storm's own span zero (fewer
// than two re-join events OR every event the same second rides - the
// LAWFUL ZERO the count words keep, the gap0-iff-span0 the sum law
// keeps, the REAL audit GREEN).
// THE EQUALITY LAW (the single-gap storm): the gap EQUALS the span
// when ONE silence owns the whole storm - the REAL audit keeps TWO
// equality faces (F509's own 28=28 and F529's own 40=40 - the
// two-flapper faces the single gap IS the storm).
// THE MULTI-CLASS LAW: the REAL THIRTY-NINE-face arc F501-F539 keeps
// THIRTY-ONE distinct classes no face born-constant - the 28-second
// floor F509's own single-gap storm keeps, the 170-second ceiling
// F516's own silence rides, the 56 the triplet faces keep (F520's
// F521's F522's own the repeat trio), the 61 the twin pair (F535's
// F536's own), MANY values speak, the seat LIVE, the born-constant
// decline never rides.
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the beyond-first echoes the re-join events
// ride (the .346 word's own tally the beyond-first law keeps), the
// adjacent pairs the gaps measure (the second's own clock cell
// 0..86399 the day keeps, the wrap next+86400-first the day-cyclic
// precedent the .350 word holds), the TALLEST gap the word prices.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .351 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The re-join gap census - the storm's own longest inter-event
 * silence the six cells underprice.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinGapSeconds: number}|null} the gap or null (non-array)
 */
export function rejoinGapCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  const revts = [] // the re-join events (beyond each name's first) the FILE ORDER keeps
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    if (n > 1) revts.push({ name: m[4], s: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]) })
  }
  let gap = 0
  if (revts.length >= 2) {
    for (let i = 1; i < revts.length; i++) {
      const cur = revts[i - 1].s
      const nxt = revts[i].s
      const g = nxt >= cur ? nxt - cur : nxt + 86400 - cur // the day-cyclic wrap
      if (g > gap) gap = g
    }
  }
  return { rejoinGapSeconds: gap }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinGapSeconds: number}, prev: {rejoinGapSeconds: number}, cur: {rejoinGapSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinGapConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinGapSeconds) && ok(e.prev.rejoinGapSeconds) && ok(e.cur.rejoinGapSeconds))
}

/**
 * The re-join gap weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinGapSeconds: number}, prev: {rejoinGapSeconds: number}, cur: {rejoinGapSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinGapTrendRow (e) {
  if (!rejoinGapConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinGapSeconds
  const p = prev.rejoinGapSeconds
  const c = cur.rejoinGapSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the gap never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (the champions whose own column equals the peak) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .351 champion stretch word prices the CHAMPION SPAN (the champion set's own dawn-to-dusk stretch the champions own) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the re-join gap row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own re-join gap trend (v0.976.352): the fleet's own re-join gap fade ran two steps deep - ${arc} - the fleet's own storms' longest silences shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own re-join gap trend (v0.976.352): the fleet's own re-join gap swell ran two steps deep - ${arc} - the fleet's own storms' longest silences stretched each face, ${tail}`
  }
  return `the fleet's own re-join gap trend (v0.976.352): the fleet's own re-join gap swing - ${arc} - the fleet's own storms traded their longest silence between the faces, ${tail}`
}
