// (v0.976.137) THE WALK-LANE'S OWN NO-PATH TREND - the walk-lane
// book's own fourth worded seat: the walk-lane's own no-path mass
// across the walks (the census's own walk.byWhy['no-path'] cell - the
// lane's own second-heaviest why 393u; the walk-fail's own 'chest
// walk failed' lines the pathfinder's own hand refused: 'No path to
// the goal!' the classifyWalkWhy's own no-path why; the walk total's
// own trend (v0.976.133) prices the census's walk.total SUM - a
// different cell, the same census, the cells never merge; the walk
// decide-timeout's own trend (v0.976.134) prices the census's
// walk.byWhy['decide-timeout'] cell beside; the walk goal-churn's own
// trend (v0.976.131) prices the census's walk.byWhy['goal-churn']
// cell beside; the no-path's own trend (v0.976.123) prices the
// sweep's machine-unreachable NO-PATH SKIN's own mass - a different
// census cell, the sweep's own wrapped read; the no-path seats never
// merge).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// census's own walk-lane arithmetic: 348=8, 349=16, 350=6, 351=12,
// 352=7, 353=6, 354=5, 355=30, 356=15, 357=2, 358=3, 359=6, 360=12,
// 361=8, 362=12, 363=10, 364=18, 365=3, 366=9, 367=9, 368=12, 369=7,
// 370=9, 371=15, 372=14, 373=5, 374=7, 375=10, 376=11, 377=9,
// 378=18, 379=9, 380=11, 381=8, 382=17, 383=10, 384=2, 385=14,
// 386=8 - THE CELL'S OWN WEIGHT 393u the faces' own total across the
// priced faces byte-true vs the fire-1200's own 393u witness, THE
// FIELD'S OWN TOP the face 355's own count 30, the +25 the face
// 355's own window the max step's own single bound (the 5 -> 30
// surge the spike's own face rode), the -15 the faces
// 356/365/366's own windows the paybacks' own bound, THE FIELD'S OWN
// FLOOR the faces 357/384's own count 2) - THE TRADE BOOK: the word
// born speaking THIRTY-FIVE of THIRTY-SEVEN windows (TWENTY-EIGHT
// swings - the family's own swing-heaviest word, the trade's own
// lane: the count trades seats between the walks nearly every face -
// five swells, five fades, the two honest silences the faces
// 367/368's own held windows rode) with NOT ONE zero face in the
// priced field (the floor the twos' own low - the lane's own
// pathfinder refusal never fell silent) - THE CELL'S OWN VOICE (the
// walk decide-timeout's own v0.976.134 the precedent). THE FACE 355
// CHAIN THE SWING 5 -> 30 (+25) -> 15 (-15) THE SPIKE'S OWN FACE
// RODE TWO WINDOWS (the surge the field's own biggest rise, the
// payback the next window rode), THE FACE 359 CHAIN THE SWELL 2 -> 3
// (+1) -> 6 (+3) THE FLOOR'S OWN EXIT, THE FACE 353 CHAIN THE FADE
// 12 -> 7 (-5) -> 6 (-1) THE FIRST TWO-STEP FALL.
//
// The seat law: the walk-lane book's own anatomy the walk-fail's own
// census holds - the walk.total's own sum (the walk total's own word
// prices it), the byWhy's own cells (the walk decide-timeout's own
// cell the lane's own heaviest why 886u, this cell the lane's own
// second-heaviest why 393u, walk-timeout 108u, other 93u,
// water-rescue 62u, governor-refusal 48u, the walk goal-churn's own
// cell 14u) and the byLane's own lanes; the why seats price their
// own classes within the sum, the cells never merge (the sum's own
// seat prices the lane, this seat prices the lane's own
// second-heaviest why). The branch law: ONE SHAPE ONE WORD - rise
// then rise prices the walk no-path's own swell, fall then fall
// prices the walk no-path's own fade, a traded direction prices the
// walk no-path's own swing, a held step (any count-to-count zero)
// prices the honest silence (a held count is no direction - the bars
// never invent; the watertrend family's own held law; the priced
// field rode TWO held windows the faces 367/368's own). The
// byte-pin: the trend row never speaks the shape's own verdict words
// (no return, no repeat, no stay, no run) nor the seats' own verdict
// word (no owns) nor the dynasty's own (no dynasty, no turn) -
// co-existence by seat never by duplication; the seat-law tail names
// the neighbor seats - the names ride by law, the neighbor skins
// never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// v0.976.34 through the walk decide-timeout's own v0.976.134). The
// fold receives the census's own walk-lane why cell per face
// (walkFailCensus owns the census - one-parser law: the same census
// runs over each face's own lines, never a fork - the wire rides the
// SAME census parser the sweep verdict's own book section already
// holds, never a second parser). No two-back face given -> no read
// (the carrier's own null pass); the cell's own zero is no fence - a
// zero-cell face rides a lawful count (the smelt lane's own zero
// precedent v0.976.90; the field's own proof the cell never rode
// zero, the law keeps the door open the field never closed).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

const CELL = 'no-path'

/**
 * The cell's own read - the census's walk.byWhy['no-path'] count.
 * The walk-lane book's own fourth worded seat's count - the count
 * this word prices across the walks.
 *
 * @param {object|null} [census] walkFailCensus's own image
 * @returns {number} the walk-lane no-path count (0 when the image
 *   cannot prove the cell - the zero a lawful count)
 */
export function walkNoPathOfCensus (census) {
  if (!census || typeof census !== 'object' || Array.isArray(census)) return 0
  const walk = census.walk
  if (!walk || typeof walk !== 'object' || Array.isArray(walk)) return 0
  const byWhy = walk.byWhy
  if (!byWhy || typeof byWhy !== 'object' || Array.isArray(byWhy)) return 0
  if (!Object.prototype.hasOwnProperty.call(byWhy, CELL)) return 0
  const n = byWhy[CELL]
  return Number.isInteger(n) && n >= 0 ? n : 0
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * smelt lane's own zero precedent). The fence never rejects extra
 * keys.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {walkNoPath}, prev: {walkNoPath}, cur: {walkNoPath} }
 * @returns {boolean}
 */
export function walkNoPathTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.walkNoPath) && s.walkNoPath >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the walk no-path's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {walkNoPath}, prev: {walkNoPath}, cur: {walkNoPath} }
 * @returns {string|null} the row byte, or null
 */
export function walkNoPathTrendRow (e) {
  if (!walkNoPathTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.walkNoPath - back.walkNoPath
  const second = cur.walkNoPath - prev.walkNoPath
  const arc = `${back.walkNoPath} -> ${prev.walkNoPath} (${first >= 0 ? '+' : ''}${first}) -> ${cur.walkNoPath} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, this word prices the walk-lane's own no-path mass across the walks - the walk-lane book's own fourth worded seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the walk no-path's own trend (v0.976.137): the walk no-path's rise ran two steps deep - ${arc} - the walk no-path's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the walk no-path's own trend (v0.976.137): the walk no-path's fall ran two steps deep - ${arc} - the walk no-path's own fade ${tail}`
  }
  return `the walk no-path's own trend (v0.976.137): the walk no-path's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
