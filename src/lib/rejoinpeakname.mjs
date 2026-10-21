// (v0.976.349) THE FLEET'S OWN PEAK CHURNER'S NAME - the server console's
// own '<name> joined the game' lane the word prices across the faces -
// the NAME CELL (WHO owns the tallest column: the CHAMPIONS the face's
// own peak keeps, the names whose own re-join tally EQUALS the .348
// word's peak the ladder echoes). The .346 re-join bin word prices the
// lane's own TOTAL (the churn's own MASS) and the .347 re-join bots
// word prices the BREADTH (the churn's own WIDTH) and the .348 re-join
// peak word prices the PEAK (the churn's own DEPTH) - the NAME cell
// prices the IDENTITY the three cells underprice: the same peak the
// different owners (F524's own 11 the TWIN champions F17 and F1 twelve
// joins each ride, F506's own 11 the LONE champion F1 the single
// column rides, F514's own 11 the lone F9, F512's own 10 the lone F9
// the mega-flapper's own face keeps, F534's own 5 the lone F17 whose
// six joins the fire-0843 deep-read named).
// THE LADDER LAW THE FACES KEEP: every champion rides the fleet's own
// ladder - the REAL THIRTY-FIVE-face audit keeps SEVENTEEN of the
// nineteen ladder names champions (F14 six faces the storm's favourite
// seat, F1 five, F17 five, F9 four, F13 four the fresh face's rapid
// flap trio re-voices, F12 three, F4 three, F15 two, F2 two, F5 two,
// F11 two, F16 two, F6 one, F8 one, F18 one, F19 one, F10 one) and
// the survey's own single join never champions (YardSurvey joins once
// per face, zero re-joins, never the peak's owner) - F3 and F7 the
// two silent ladder seats the audit names.
// THE TIE LAW: the champions are every name whose column EQUALS the
// peak - the floor ties everyone (the F530 face's own peak ONE the
// breadth FOUR rides: F10 and F14 and F15 and F17 each one re-join
// ALL FOUR champions - the QUARTET face the flat class keeps) and the
// taller peaks the proper subsets ride (F524's own 50-event storm the
// TWIN proof: ten re-joining bots, TWO champions).
// THE MULTI-CLASS LAW: the champion COUNT keeps THREE distinct classes
// (1,2,4) no face born-constant - the 1 the lone-champion majority
// (twenty-seven faces), the 2 the twin class (seven faces: F501's own
// F1+F4 the storm twins among them), the 4 the quartet face's own
// class - MANY values speak, the seat LIVE, the born-constant decline
// never rides.
// THE CHAMPION LAW: the champions never empty when the peak speaks
// and never present when the peak zero (the LAWFUL ZERO the .304/.306
// convention the count words keep); the champion's own column IS the
// peak the census guarantees; the champions never exceed the breadth
// (the champion set rides within the re-joining names).
// THE HAND: every 'joined the game' echo the face voices the census
// reads in file order, the name's own join tally the bin keeps, the
// names whose beyond-first count equals the tallest the champions
// take (sorted, the ladder's own order the byte-exact pins keep).
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399. CENSUS GUARD: zero fleet wiring, zero new
// fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .348 folds the neighbours hold), the
// fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The fleet's own peak churner's name census - the identity cell the
 * mass breadth and depth underprice (the names whose own re-join
 * column equals the tallest).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinPeakNameChampions: string[], rejoinPeakNameCount: number}|null} the champions or null (non-array)
 */
export function rejoinPeakNameCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (m) tally.set(m[4], (tally.get(m[4]) || 0) + 1)
  }
  let peak = 0
  for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1) // the tallest column
  const champions = []
  for (const [name, n] of tally) if (n > 1 && n - 1 === peak) champions.push(name)
  champions.sort()
  return { rejoinPeakNameChampions: champions, rejoinPeakNameCount: champions.length }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinPeakNameCount: number}, prev: {rejoinPeakNameCount: number}, cur: {rejoinPeakNameCount: number}}} e
 * @returns {boolean}
 */
export function rejoinPeakNameConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinPeakNameCount) && ok(e.prev.rejoinPeakNameCount) && ok(e.cur.rejoinPeakNameCount))
}

/**
 * The peak churner's name weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinPeakNameCount: number}, prev: {rejoinPeakNameCount: number}, cur: {rejoinPeakNameCount: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinPeakNameTrendRow (e) {
  if (!rejoinPeakNameConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinPeakNameCount
  const p = prev.rejoinPeakNameCount
  const c = cur.rejoinPeakNameCount
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the champion count never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .346 re-join bin word prices the lane's own TOTAL (the events beyond each name's first the tally sums - the churn's own mass) and the .347 re-join bots word prices the BREADTH (the distinct names the churn rode - the churn's own width) and the .348 re-join peak word prices the PEAK (the tallest single-name column - the churn's own depth) and the .314 join mass word prices the lane's own every-echo headcount and the .336 join echo drift word prices the echo's own clock cell (one lane many cells co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the peak churner's name row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own re-join peak name trend (v0.976.349): the fleet's own champion throne fade ran two steps deep - ${arc} - the fleet's own storm thrones narrowed each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own re-join peak name trend (v0.976.349): the fleet's own champion throne swell ran two steps deep - ${arc} - the fleet's own storm thrones widened each face, ${tail}`
  }
  return `the fleet's own re-join peak name trend (v0.976.349): the fleet's own champion throne swing - ${arc} - the fleet's own storm traded its thrones between the faces, ${tail}`
}
