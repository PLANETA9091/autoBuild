// (v0.976.350) THE FLEET'S OWN STORM SPAN - the server console's own
// '<name> joined the game' lane the word prices across the faces -
// the TEMPO CELL (the storm's own duration: the face's first re-join
// event to its last, the seconds the churn rode). The .346 re-join
// bin word prices the lane's own TOTAL (the churn's own MASS) and
// the .347 re-join bots word prices the BREADTH (the churn's own
// WIDTH) and the .348 re-join peak word prices the PEAK (the
// churn's own DEPTH) and the .349 re-join peak name word prices the
// IDENTITY (the churn's own champions) - the four cells all COUNTS,
// the TEMPO the counts underprice: the same mass the different
// stretches (F532's own 8 events rode 248 seconds the flap duo's
// own minute-pair cadence keeps, F530's own 4 rode 160 the quartet's
// own spaced re-joins keep, F524's own 50-event storm rode 329 the
// mass and the tempo diverge the compression the cell names).
// THE SPAN LAW THE FACES KEEP: the span the last re-join second
// minus the first re-join second the file order keeps (the echoes
// the face voices the hand reads in file order, the tally's own
// beyond-first echoes the events take) - the span rides within the
// day the fence guarantees (0..86399, the midnight wrap the day-
// cyclic arithmetic carries) and the span zero iff fewer than two
// re-join events the face voices (the LAWFUL ZERO the .304/.306
// convention the count words keep - one event no stretch the floor
// rides, zero events no storm the silence keeps).
// THE MULTI-CLASS LAW: the REAL THIRTY-SIX-face arc F501-F536 keeps
// THIRTY-FOUR distinct classes no face born-constant - the 28-second
// floor F509's lone flapper keeps, the 40 the F529 flat face, the
// 346-second ceiling F522's own stretch rides, the fresh faces the
// census re-voices (F534's own 127, F535's own 93, F536's own 273)
// - MANY values speak, the seat LIVE, the born-constant decline
// never rides.
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// beyond-first echo's own clock cell the event takes, the FIRST
// such event's second the span's dawn and the LAST the span's dusk.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .349 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The fleet's own storm span census - the tempo cell the four count
 * cells underprice (the first re-join event's second to the last).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinSpanSeconds: number}|null} the span or null (non-array)
 */
export function rejoinSpanCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  let first = null
  let last = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    if (n > 1) { // the beyond-first echo the re-join event rides
      const s = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
      if (first === null) first = s
      last = s
    }
  }
  let span = 0
  if (first !== null) span = last >= first ? last - first : last + 86400 - first // the day-cyclic wrap
  return { rejoinSpanSeconds: span }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinSpanSeconds: number}, prev: {rejoinSpanSeconds: number}, cur: {rejoinSpanSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinSpanConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinSpanSeconds) && ok(e.prev.rejoinSpanSeconds) && ok(e.cur.rejoinSpanSeconds))
}

/**
 * The storm span weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinSpanSeconds: number}, prev: {rejoinSpanSeconds: number}, cur: {rejoinSpanSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinSpanTrendRow (e) {
  if (!rejoinSpanConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinSpanSeconds
  const p = prev.rejoinSpanSeconds
  const c = cur.rejoinSpanSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the span never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (the champions whose own column equals the peak) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the storm span row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own re-join span trend (v0.976.350): the fleet's own storm span fade ran two steps deep - ${arc} - the fleet's own storm shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own re-join span trend (v0.976.350): the fleet's own storm span swell ran two steps deep - ${arc} - the fleet's own storm stretched each face, ${tail}`
  }
  return `the fleet's own re-join span trend (v0.976.350): the fleet's own storm span swing - ${arc} - the fleet's own storm traded its stretch between the faces, ${tail}`
}
