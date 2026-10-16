// (v0.976.147) THE DOCKET'S OWN TRIP CLIMB-REFUSED TREND - the bank
// book's own climb-refused seat: the docket's own trip climb-refused
// verdict mass across the faces (the 'F<n> bank trip: 0 (climb
// refused ...)' bank verdicts, the 'F<n> wood trip: 0 (climb
// refused)' wood verdicts, and the 'F<n> food trip: 0 (climb
// refused)' food verdicts - three lane emitters, one shape, the
// BUDGET_SPENT_RE's own multi-emitter precedent; the docket's own
// caught refusal - every climb-refused zero verdict the fleet printed
// when the climb gate held a trip back). The read owns the shape -
// one parser per shape (the chestLidBook precedent: the file IS the
// census owner; the bank trip grant shape the bank trip grant's own
// trend prices (v0.976.142) and the bank trip defer shape the bank
// chain's own defer trend prices (v0.976.144) - different cells, the
// cells never merge; the tool recovery's own climb-refused skin
// ('tool recovery: climb refused - the underground attempt stands') a
// different carrier, never priced by this read; the wood trip's own
// refusal WHY the climbrefusal census prices (v0.691.0 - the fail
// reason's own join, a different anatomy; this seat prices the
// verdict mass alone, the count never merges the why).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// climb-refused regex's own arithmetic: 348=3, 349=6, 350=5, 351=5,
// 352=4, 353=2, 354=7, 355=0, 356=7, 357=13, 358=8, 359=2, 360=4,
// 361=8, 362=8, 363=8, 364=5, 365=9, 366=7, 367=6, 368=12, 369=3,
// 370=4, 371=3, 372=2, 373=10, 374=7, 375=6, 376=10, 377=5, 378=6,
// 379=8, 380=5, 381=1, 382=5, 383=4, 384=5, 385=11, 386=5 - THE
// CELL'S OWN WEIGHT 229u the faces' own total across the priced
// faces (no prior witness - the shape's own book starts here), THE
// FIELD'S OWN TOP the face 357's own count 13, the +8 the face 373's
// own window the max rise step's own single bound (the 2 -> 10), the
// -9 the face 369's own window the max fall step's own single bound
// (the 12 -> 3 the top's own payback), THE FIELD'S OWN FLOOR the
// ZERO - THE DOCKET DRIED ONCE: the face 355's own zero the field's
// own floor rode once (the smelt lane's own zero precedent v0.976.90
// - the zero-cell face rides a lawful count and THIS field's own
// priced faces EXERCISED it; the face 356's own window the zero's
// own wake rode - the round trip 7 -> 0 (-7) -> 7 (+7) the trade
// back)) - THE TRIP CLIMB-REFUSED'S OWN TRADE BOOK: the word born
// speaking THIRTY-TWO of THIRTY-SEVEN windows (TWENTY-TWO swings,
// FOUR swells, SIX fades, the FIVE honest silences beside - THE
// FAMILY'S OWN SWING HEAD TIED: the twenty-two trades the food
// commons lane's own book rides beside - the traded seat the
// dominant shape twice over); the FIVE held windows rode the faces
// 351/352's own early hold and the faces 362/363/364's own mid hold
// (the docket's own rest - the 8-count three windows deep).
//
// The seat law: the bank book's own anatomy the fleet's own lines
// hold - the bank trip grant lines the bank trip grant's own trend
// prices (the chain's own first link), the bank trip defer lines the
// bank chain's own defer trend prices (the chain's own caught
// breath), the trip climb-refused verdict lines this word prices
// (the docket's own caught refusal - the bank and the wood and the
// food trips' own three lane skins one shape), the budget-spent
// verdicts the budget spread's own word prices (a different census),
// the tool recovery's own climb-refused skin a different carrier
// never priced here, the walk-fail's own lanes the walk-lane book's
// own words price (a different book), the climbrefusal census (v0.691.0)
// prices the wood refusal's own why - a different anatomy, the cells
// never merge (the count's own seat prices the verdict mass, the
// why's own seat prices the reason join - co-existence by seat never
// by duplication). The branch law: ONE SHAPE ONE WORD - rise then
// rise prices the trip climb-refused's own swell, fall then fall
// prices the trip climb-refused's own fade, a traded direction
// prices the trip climb-refused's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held count is no
// direction - the bars never invent; the watertrend family's own
// held law; the priced field rode FIVE held windows the silences'
// own rest). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication; the
// seat-law tail names the neighbor seats - the names ride by law, the
// neighbor skins never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// v0.976.34 through the walk food commons's own v0.976.146). The
// fold receives the trip climb-refused count per face (this file owns
// the parse - one-parser law: the same read runs over each face's
// own lines, never a fork). No two-back face given -> no read (the
// carrier's own null pass); the cell's own zero is no fence - a
// zero-verdict face rides a lawful count (the smelt lane's own zero
// precedent v0.976.90; the priced field rode ONE zero face, the law
// the field already walked through).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

const CLIMB_REFUSED_RE = /^F\d+ (bank|wood|food) trip: 0 \(climb refused/

/**
 * The cell's own read - the trip climb-refused verdict count across
 * the lines. The bank book's own climb-refused seat's count - the
 * count this word prices across the faces (the bank and the wood and
 * the food trips' own three lane emitters, one shape).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the trip climb-refused verdict count (0 when the
 *   lines cannot prove a verdict - the zero a lawful count)
 */
export function tripClimbRefusals (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && CLIMB_REFUSED_RE.test(l)) n++
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
 *   { back: {tripClimbRefusals}, prev: {tripClimbRefusals}, cur: {tripClimbRefusals} }
 * @returns {boolean}
 */
export function tripClimbRefusedTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.tripClimbRefusals) && s.tripClimbRefusals >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the trip climb-refused's own two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {tripClimbRefusals}, prev: {tripClimbRefusals}, cur: {tripClimbRefusals} }
 * @returns {string|null} the row byte, or null
 */
export function tripClimbRefusedTrendRow (e) {
  if (!tripClimbRefusedTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.tripClimbRefusals - back.tripClimbRefusals
  const second = cur.tripClimbRefusals - prev.tripClimbRefusals
  const arc = `${back.tripClimbRefusals} -> ${prev.tripClimbRefusals} (${first >= 0 ? '+' : ''}${first}) -> ${cur.tripClimbRefusals} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, this word prices the docket's own trip climb-refused verdict mass across the faces - the bank book's own climb-refused seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the trip climb-refused's own trend (v0.976.147): the trip climb-refused's rise ran two steps deep - ${arc} - the trip climb-refused's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the trip climb-refused's own trend (v0.976.147): the trip climb-refused's fall ran two steps deep - ${arc} - the trip climb-refused's own fade ${tail}`
  }
  return `the trip climb-refused's own trend (v0.976.147): the trip climb-refused's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
