// (v0.976.133) THE WALK-LANE'S OWN SUM TREND - the walk-lane book's
// own second worded seat: the walk-lane's own sum mass across the
// walks (the census's own walk.total cell - the lane's own headline;
// the sum-first precedent the sweep verdict's own book named at the
// v0.976.121 - the sum priced before the skins; the walk goal-churn's
// own trend (v0.976.131) prices the census's walk.byWhy['goal-churn']
// cell - a different cell, the same census, the cells never merge;
// the starvation's own walk-fail's own trend (v0.976.97) prices the
// commons ledger's own walkFail cell - a different census, a
// different book; the seats never merge).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// census's own walk-lane arithmetic: 348=31, 349=39, 350=36,
// 351=47, 352=39, 353=15, 354=50, 355=56, 356=47, 357=27, 358=7,
// 359=14, 360=78, 361=35, 362=28, 363=49, 364=46, 365=27, 366=18,
// 367=21, 368=91, 369=34, 370=44, 371=42, 372=69, 373=50, 374=44,
// 375=49, 376=27, 377=37, 378=38, 379=46, 380=48, 381=38, 382=49,
// 383=39, 384=39, 385=79, 386=31 - THE CELL'S OWN WEIGHT 1604u the
// faces' own total across the priced faces byte-true vs the
// fire-1200's own 1604u witness, THE FIELD'S OWN TOP the face 368's
// own count 91, the +70 the face 368's own window the max step's own
// single bound (the 21 -> 91 surge the storm's own face), the -57
// the face 369's own window the payback's own biggest fall) - THE
// DENSE BOOK THAT NEVER FELL SILENT: the count rode zero NO face of
// the priced field (the sum never sleeps - the walks' own mass
// breathes every face), the word born speaking THIRTY-FIVE of
// THIRTY-SEVEN windows (twenty-two swings, six swells, seven fades,
// the two honest silences the faces 384/385's own held windows rode)
// - THE CELL'S OWN VOICE (the walk goal-churn's own v0.976.131 the
// precedent; the sparse round-trip books' opposite: the sum's own
// lane never empties). THE FACE 368 CHAIN THE SWELL 21 -> 91 (+70)
// -> 34 (-57) THE STORM'S OWN FACE RODE TWO WINDOWS (the surge the
// field's own biggest rise, the payback the field's own biggest
// fall), THE FACE 355 CHAIN THE SWELL 15 -> 50 (+35) -> 56 (+6) THE
// FIRST TWO-STEP RISE, THE FACE 353 CHAIN THE FADE 47 -> 39 (-8) ->
// 15 (-24) THE FIRST TWO-STEP FALL.
//
// The seat law: the walk-lane book's own anatomy the walk-fail's own
// census holds - this sum, the byWhy's own cells (decide-timeout the
// lane's own heaviest why 886u, no-path 393u, walk-timeout 108u,
// other 93u, water-rescue 62u, governor-refusal 48u, the walk
// goal-churn's own cell 14u) and the byLane's own lanes; the sum
// prices the whole lane's own mass - the byWhy cells the sum's own
// parts, the cells never merge (the sum's own seat prices the lane,
// the why seats price their own classes). The branch law: ONE SHAPE
// ONE WORD - rise then rise prices the walk total's own swell, fall
// then fall prices the walk total's own fade, a traded direction
// prices the walk total's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held count is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication; the
// seat-law tail names the neighbor seats - the names ride by law,
// the neighbor skins never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// v0.976.34 through the walk goal-churn's own v0.976.131). The fold
// receives the census's own walk-lane sum per face (walkFailCensus
// owns the census - one-parser law: the same census runs over each
// face's own lines, never a fork - the wire rides the SAME census
// parser the sweep verdict's own book section already holds, never a
// second parser). No two-back face given -> no read (the carrier's
// own null pass); the sum's own zero is no fence - a zero-sum face
// rides a lawful count (the field's own proof the sum never rode
// zero, the law keeps the door open the field never closed).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The cell's own read - the census's walk.total sum.
 * The walk-lane book's own second worded seat's count - the count
 * this word prices across the walks.
 *
 * @param {object|null} [census] walkFailCensus's own image
 * @returns {number} the walk-lane sum (0 when the image cannot prove
 *   the cell - the zero a lawful count)
 */
export function walkTotalOfCensus (census) {
  if (!census || typeof census !== 'object' || Array.isArray(census)) return 0
  const walk = census.walk
  if (!walk || typeof walk !== 'object' || Array.isArray(walk)) return 0
  if (!Object.prototype.hasOwnProperty.call(walk, 'total')) return 0
  const n = walk.total
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
 *   { back: {walkTotal}, prev: {walkTotal}, cur: {walkTotal} }
 * @returns {boolean}
 */
export function walkTotalTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.walkTotal) && s.walkTotal >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the walk total's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {walkTotal}, prev: {walkTotal}, cur: {walkTotal} }
 * @returns {string|null} the row byte, or null
 */
export function walkTotalTrendRow (e) {
  if (!walkTotalTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.walkTotal - back.walkTotal
  const second = cur.walkTotal - prev.walkTotal
  const arc = `${back.walkTotal} -> ${prev.walkTotal} (${first >= 0 ? '+' : ''}${first}) -> ${cur.walkTotal} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, this word prices the walk-lane's own sum mass across the walks - the walk-lane book's own second worded seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the walk total's own trend (v0.976.133): the walk total's rise ran two steps deep - ${arc} - the walk total's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the walk total's own trend (v0.976.133): the walk total's fall ran two steps deep - ${arc} - the walk total's own fade ${tail}`
  }
  return `the walk total's own trend (v0.976.133): the walk total's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
