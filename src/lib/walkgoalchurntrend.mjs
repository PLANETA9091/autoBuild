// (v0.976.131) THE WALK-LANE'S OWN GOAL-CHURN TREND - the walk-lane
// book's own first worded seat: the walk-lane's own goal-churn mass
// across the walks (the raw lane's own churn - the 'chest walk
// failed' line the re-task's own hand refused: 'The goal was changed'
// the classifyWalkWhy's own goal-churn why; the walkFailCensus's own
// walk.byWhy['goal-churn'] cell - a different cell, the same census,
// the cells never merge; the goal-churn's own trend (v0.976.129)
// prices the machine-unreachable GOAL-CHURN SKIN's own mass - the
// sweep's own wrapped read, a different cell; the starvation's own
// walk-fail's own trend (v0.976.97) prices the commons ledger's own
// walkFail cell - a different census, a different book; the three
// goal-churn seats never merge).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// census's own walk-lane arithmetic: 348 rode 0, 349 rode 0,
// 350 rode 0, 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 0,
// 355 rode 0, 356 rode 0, 357 rode 0, 358 rode 0, 359 rode 0,
// 360 rode 2, 361 rode 0, 362 rode 0, 363 rode 0, 364 rode 0,
// 365 rode 0, 366 rode 0, 367 rode 0, 368 rode 0, 369 rode 1,
// 370 rode 1, 371 rode 0, 372 rode 0, 373 rode 0, 374 rode 0,
// 375 rode 0, 376 rode 0, 377 rode 3, 378 rode 0, 379 rode 0,
// 380 rode 0, 381 rode 1, 382 rode 1, 383 rode 0, 384 rode 0,
// 385 rode 3, 386 rode 2 - THE CELL'S OWN WEIGHT 14 the faces' own
// total across the priced faces, THE FIELD'S OWN TOP 3 THE FACES
// 377/385 COUNTS (the top count two faces held), the +3 the face
// 378's own window the max step's own single bound, the -3 the same
// window's own full payback - the count rode zero THIRTY-ONE faces
// and rose five times) - THE SPARSE ROUND-TRIP BOOK THAT BREATHES:
// THE FACE 361 CHAIN THE SWING 0 -> 2 (+2) -> 0 (-2) THE PAIR'S OWN
// ROUND TRIP, THE FACE 378 CHAIN THE SWING 0 -> 3 (+3) -> 0 (-3) THE
// ROUND TRIP RODE ONE FACE WHOLE (the field's own biggest ride), THE
// FACE 386 CHAIN THE SWING 0 -> 3 (+3) -> 2 (-1) THE TAIL'S OWN
// PARTIAL PAYBACK - THE WORD BORN SPEAKING THREE WINDOWS DEEP (three
// swings - the round trips' own family) with the THIRTY-FOUR honest
// silences riding the priced field beside them - THE CELL'S OWN VOICE
// (the unparsed's own v0.976.130 the precedent; the word speaks THREE
// of THIRTY-SEVEN windows). THE SWELL NEVER RODE and THE FADE NEVER
// RODE the thirty-seven priced windows (the churn's own lane is a
// round-trip book - the law prices the branch, the bars never invent
// them).
//
// The seat law: the walk-lane book's own anatomy the walk-fail's own
// census holds - the walk.total's own sum, the byWhy's own cells
// (decide-timeout the lane's own headline 886u, no-path 393u,
// walk-timeout 108u, other 93u, water-rescue 62u, governor-refusal
// 48u, this cell 14u) and the byLane's own lanes; the path-stopped
// and the budget-floor cells rode zero the priced field whole - the
// silent seats the zeros' own law keeps, this word prices the live
// seat beside them (a different cell, the same census, the cells
// never merge). The branch law: ONE SHAPE ONE WORD - rise then rise
// prices the walk goal-churn's own swell, fall then fall prices the
// walk goal-churn's own fade, a traded direction prices the walk
// goal-churn's own swing, a held step (any count-to-count zero)
// prices the honest silence (a held count is no direction - the bars
// never invent; the watertrend family's own held law). The byte-pin:
// the trend row never speaks the shape's own verdict words (no
// return, no repeat, no stay, no run) nor the seats' own verdict word
// (no owns) nor the dynasty's own (no dynasty, no turn) -
// co-existence by seat never by duplication; the seat-law tail names
// the neighbor seats - the names ride by law, the neighbor skins
// never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// v0.976.34 through the unparsed's own v0.976.130). The fold receives
// the census's own walk-lane cell per face (walkFailCensus owns the
// census - one-parser law: the same census runs over each face's own
// lines, never a fork - the wire rides the SAME census parser the
// sweep verdict's own book section already holds, never a second
// parser). No two-back face given -> no read (the carrier's own null
// pass); the cell's own zero is no fence - a zero-cell face rides a
// lawful count (the smelt lane's own zero precedent v0.976.90; the
// field's own thirty-one zero faces the proof).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

const CELL = 'goal-churn'

/**
 * The cell's own read - the census's walk.byWhy['goal-churn'] count.
 * The walk-lane book's own first worded seat's count - the count this
 * word prices across the walks.
 *
 * @param {object|null} [census] walkFailCensus's own image
 * @returns {number} the walk-lane goal-churn count (0 when the image
 *   cannot prove the cell - the zero a lawful count)
 */
export function walkGoalChurnOfCensus (census) {
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
 * field's own thirty-one zero faces the proof). The fence never
 * rejects extra keys.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {goalChurn}, prev: {goalChurn}, cur: {goalChurn} }
 * @returns {boolean}
 */
export function walkGoalChurnTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.goalChurn) && s.goalChurn >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the walk goal-churn's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {goalChurn}, prev: {goalChurn}, cur: {goalChurn} }
 * @returns {string|null} the row byte, or null
 */
export function walkGoalChurnTrendRow (e) {
  if (!walkGoalChurnTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.goalChurn - back.goalChurn
  const second = cur.goalChurn - prev.goalChurn
  const arc = `${back.goalChurn} -> ${prev.goalChurn} (${first >= 0 ? '+' : ''}${first}) -> ${cur.goalChurn} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, this word prices the walk-lane's own goal-churn mass across the walks - the walk-lane book's own first worded seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the walk goal-churn's own trend (v0.976.131): the walk goal-churn's rise ran two steps deep - ${arc} - the walk goal-churn's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the walk goal-churn's own trend (v0.976.131): the walk goal-churn's fall ran two steps deep - ${arc} - the walk goal-churn's own fade ${tail}`
  }
  return `the walk goal-churn's own trend (v0.976.131): the walk goal-churn's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
