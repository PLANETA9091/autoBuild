// (v0.976.142) THE BANK CHAIN'S OWN GRANT TREND - the bank book's own
// grant seat: the bank chain's own grant mass across the faces (the
// 'F<n> bank trip: planned budget <N>s' grants and the 'F<n> bank
// trip: fuel-tithe budget <N>s' tithe grants - two emitters, one
// shape, the BUDGET_SPENT_RE's own two-emitter precedent; the bank
// chain's own arming count - every grant the fleet printed to arm a
// bank trip, the chain's own first link). The read owns the shape -
// one parser per shape (the chestLidBook precedent: the file IS the
// census owner; the bank trip grant shape rode no census before this
// read - the 'bank trip: 0 (climb refused ...)' verdicts and the
// 'bank trip: deferred (...)' defers are different shapes, never
// priced by this read, the cells never merge).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// grant regex's own arithmetic: 348=8, 349=7, 350=6, 351=5, 352=11,
// 353=13, 354=7, 355=13, 356=11, 357=13, 358=12, 359=11, 360=10,
// 361=9, 362=6, 363=6, 364=8, 365=11, 366=10, 367=14, 368=12, 369=8,
// 370=7, 371=9, 372=5, 373=9, 374=6, 375=10, 376=11, 377=4, 378=11,
// 379=2, 380=11, 381=7, 382=13, 383=2, 384=11, 385=5, 386=8 - THE
// CELL'S OWN WEIGHT 343u the faces' own total across the priced
// faces, THE FIELD'S OWN TOP the face 367's own count 14, the +9 the
// storm's own rise rode twice (the faces 380/384's own seconds, the
// 2 -> 11 rebuilds), the -11 the max step's own bound rode twice (the
// face 383's own second and the face 384's own first - the same
// transition two windows deep, the 13 -> 2 collapse), THE FIELD'S
// OWN FLOOR the count 2 the faces 379/383's own storm bottoms - and
// THE ZERO NEVER RODE: the grant mass touched zero NO face of the
// priced field (the walk total's own dense law's bank sibling - the
// grant mass never sleeps, the bank chain arms every face the fleet
// walks)) - THE BANK CHAIN'S OWN DENSE TRADE BOOK: the word born
// speaking THIRTY-FIVE of THIRTY-SEVEN windows (TWENTY-FOUR swings,
// three swells, eight fades, the TWO honest silences beside - the
// faces 363/364's own held run the 6-count two windows deep); the
// trades ride the storm's own bounds (the faces 379..385's own legs
// the +-9 and +-11 steps rode - the grant count swings between the
// cadence windows the bank chain's own breath).
//
// The seat law: the bank book's own anatomy the fleet's own lines
// hold - the bank trip grant lines this word prices (the chain's own
// first link), the bank trip defers ('bank trip: deferred (...)') and
// the climb-refused verdicts ('bank trip: 0 (climb refused ...)')
// different shapes the read never prices, the budget-spent verdicts
// the budget spread's own word prices (a different census), the bank
// decide's own trend (v0.976.104) prices the docket's own door decide
// (a different census), the dusk-plan arms the decompose's own
// section counts (a different lane); the cells never merge -
// co-existence by seat never by duplication. The branch law: ONE
// SHAPE ONE WORD - rise then rise prices the bank trip grant's own
// swell, fall then fall prices the bank trip grant's own fade, a
// traded direction prices the bank trip grant's own swing, a held
// step (any count-to-count zero) prices the honest silence (a held
// count is no direction - the bars never invent; the watertrend
// family's own held law; the priced field rode TWO held windows the
// silences' own pair). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the seats' own verdict word (no owns) nor the dynasty's own
// (no dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats - the names ride by law,
// the neighbor skins never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// v0.976.34 through the walk other's own v0.976.141). The fold
// receives the bank trip grant count per face (this file owns the
// parse - one-parser law: the same read runs over each face's own
// lines, never a fork). No two-back face given -> no read (the
// carrier's own null pass); the cell's own zero is no fence - a
// zero-grant face rides a lawful count (the smelt lane's own zero
// precedent v0.976.90; the law keeps the door open the field never
// closed - the zero never rode the priced field).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

const GRANT_RE = /^F\d+ bank trip: (?:planned|fuel-tithe) budget \d+s$/

/**
 * The cell's own read - the bank trip grant count across the lines.
 * The bank book's own grant seat's count - the count this word prices
 * across the faces (the 'planned budget' grants and the 'fuel-tithe
 * budget' grants - two emitters, one shape).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the bank trip grant count (0 when the lines
 *   cannot prove a grant - the zero a lawful count)
 */
export function bankTripGrants (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && GRANT_RE.test(l)) n++
  }
  return n
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * smelt lane's own zero precedent). The fence never rejects extra
 * keys.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {bankTripGrants}, prev: {bankTripGrants}, cur: {bankTripGrants} }
 * @returns {boolean}
 */
export function bankTripTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.bankTripGrants) && s.bankTripGrants >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the bank trip grant's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {bankTripGrants}, prev: {bankTripGrants}, cur: {bankTripGrants} }
 * @returns {string|null} the row byte, or null
 */
export function bankTripTrendRow (e) {
  if (!bankTripTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.bankTripGrants - back.bankTripGrants
  const second = cur.bankTripGrants - prev.bankTripGrants
  const arc = `${back.bankTripGrants} -> ${prev.bankTripGrants} (${first >= 0 ? '+' : ''}${first}) -> ${cur.bankTripGrants} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, this word prices the bank chain's own grant mass across the faces - the bank book's own grant seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the bank trip grant's own trend (v0.976.142): the bank trip grant's rise ran two steps deep - ${arc} - the bank trip grant's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the bank trip grant's own trend (v0.976.142): the bank trip grant's fall ran two steps deep - ${arc} - the bank trip grant's own fade ${tail}`
  }
  return `the bank trip grant's own trend (v0.976.142): the bank trip grant's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
