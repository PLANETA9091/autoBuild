// (v0.976.351) THE CHAMPION'S OWN STRETCH - the server console's own
// '<name> joined the game' lane the word prices across the faces -
// the CHAMPION SPAN CELL (the champion set's own dawn-to-dusk
// stretch: the first to the last re-join event the .349 word's
// champions own). The .346 re-join bin word prices the lane's own
// TOTAL (the churn's own MASS) and the .347 re-join bots word
// prices the BREADTH (the churn's own WIDTH) and the .348 re-join
// peak word prices the PEAK (the churn's own DEPTH) and the .349
// re-join peak name word prices the IDENTITY (WHO owns the tallest
// column) and the .350 re-join span word prices the TEMPO (the
// whole storm's own duration) - the STRETCH the five cells
// underprice: the champion's own ride within the storm (F506's own
// 279-second storm the lone champion F1 rode in a 65-second burst
// the compression the cell names, F537's own 364-second storm the
// champion F5 owned BOTH edges of the equality the fresh face
// keeps).
// THE CHAMPION SPAN LAW THE FACES KEEP: the champion's stretch
// rides within the storm's own span (every champion event a re-join
// event is - the champion dawn never before the storm dawn and the
// champion dusk never after the storm dusk the .350 word's cell
// guarantees) and the stretch zero iff fewer than two champion
// re-join events the face voices (the LAWFUL ZERO the .304/.306
// convention the count words keep).
// THE EQUALITY LAW: the champion stretch EQUALS the storm span when
// the champion set holds both edges - the REAL THIRTY-SEVEN-face
// audit keeps NINE equality faces (F504/F509/F511/F515/F527/F529/
// F530/F532/F537 - the flat faces the quartet ties everyone the
// whole storm the champions own, F537's own the lone champion's
// both-edges first the fire-1043 deep-read named).
// THE MULTI-CLASS LAW: the REAL THIRTY-SEVEN-face arc F501-F537
// keeps THIRTY-SIX distinct classes no face born-constant - the
// 11-second floor F518's own burst keeps, the 364-second ceiling
// F537's own storm rides, the 118 the twin faces keep (F512's and
// F514's own the repeat pair), the fresh faces the census re-voices
// (F535's own 15, F536's own 267, F537's own 364) - MANY values
// speak, the seat LIVE, the born-constant decline never rides.
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (the .349 word's own hand), the champion names' own
// beyond-first echoes the events ride, the FIRST such event's
// second the stretch's dawn and the LAST the dusk.
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .350 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The champion's own stretch census - the champion set's own
 * dawn-to-dusk span the five cells underprice.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinChampSpanSeconds: number}|null} the stretch or null (non-array)
 */
export function rejoinChampSpanCensus (lines) {
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
  let span = 0
  if (cevts.length >= 2) {
    const dawn = cevts[0].s
    const dusk = cevts[cevts.length - 1].s
    span = dusk >= dawn ? dusk - dawn : dusk + 86400 - dawn // the day-cyclic wrap
  }
  return { rejoinChampSpanSeconds: span }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinChampSpanSeconds: number}, prev: {rejoinChampSpanSeconds: number}, cur: {rejoinChampSpanSeconds: number}}} e
 * @returns {boolean}
 */
export function rejoinChampSpanConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinChampSpanSeconds) && ok(e.prev.rejoinChampSpanSeconds) && ok(e.cur.rejoinChampSpanSeconds))
}

/**
 * The champion stretch weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinChampSpanSeconds: number}, prev: {rejoinChampSpanSeconds: number}, cur: {rejoinChampSpanSeconds: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinChampSpanTrendRow (e) {
  if (!rejoinChampSpanConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinChampSpanSeconds
  const p = prev.rejoinChampSpanSeconds
  const c = cur.rejoinChampSpanSeconds
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the stretch never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .349 re-join peak name word prices the IDENTITY (the champions whose own column equals the peak) and the .350 re-join span word prices the TEMPO (the whole storm's own duration the first re-join event to the last) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the champion stretch row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own champion stretch trend (v0.976.351): the fleet's own champion stretch fade ran two steps deep - ${arc} - the fleet's own champions' rides shortened each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own champion stretch trend (v0.976.351): the fleet's own champion stretch swell ran two steps deep - ${arc} - the fleet's own champions' rides stretched each face, ${tail}`
  }
  return `the fleet's own champion stretch trend (v0.976.351): the fleet's own champion stretch swing - ${arc} - the fleet's own champions traded their stretch between the faces, ${tail}`
}
