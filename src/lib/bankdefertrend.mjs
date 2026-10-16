// (v0.976.144) THE BANK CHAIN'S OWN DEFER TREND - the bank book's own
// defer seat: the bank chain's own defer mass across the faces (the
// 'F<n> bank trip: deferred (rescue owns the bot - the arm waits for
// the release, the budget never burns)' rescue defers and the
// 'F<n> bank trip: deferred night (tod=...)' night defers - two
// emitters, one shape, the BUDGET_SPENT_RE's own two-emitter
// precedent; the bank chain's own break mass - every defer the fleet
// printed to hold a bank trip back, the chain's own caught breath).
// The read owns the shape - one parser per shape (the chestLidBook
// precedent: the file IS the census owner; the bank trip grant shape
// the bank trip grant's own trend prices (v0.976.142) - a different
// cell, the cells never merge; the 'final bank deferred: night'
// pocket defers and the 'bank trip: 0 (climb refused ...)' verdicts
// are different shapes, never priced by this read).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// defer regex's own arithmetic: 348=2, 349=2, 350=1, 351=0, 352=0,
// 353=3, 354=1, 355=0, 356=1, 357=1, 358=2, 359=1, 360=1, 361=1,
// 362=4, 363=2, 364=1, 365=2, 366=0, 367=0, 368=2, 369=2, 370=2,
// 371=1, 372=2, 373=2, 374=1, 375=1, 376=3, 377=0, 378=1, 379=2,
// 380=1, 381=0, 382=3, 383=0, 384=2, 385=2, 386=0 - THE CELL'S OWN
// WEIGHT 52u the faces' own total across the priced faces (no prior
// witness - the shape's own book starts here), THE FIELD'S OWN TOP
// the face 362's own count 4 whose arrival rode a SILENT window (the
// held 1 -> 1 first step the drought's own door kept - the word
// spoke the top's own payback the face 363's own window 1 -> 4 (+3)
// -> 2 (-2) the swing), the +3 the max rise step's own single bound
// (the face 353's own second the 0 -> 3), the -3 the max fall step's
// own bound rode four steps deep (the face 377's own second and the
// face 383's own second the 3 -> 0 collapses, the face 378's own
// first and the face 384's own first - the spike-and-drain the
// storm's own churn), THE FIELD'S OWN FLOOR the zeros' own nine
// faces (351, 352, 355, 366, 367, 377, 381, 383, 386) - the defer
// mass flickers, the rescue's and the night's own two holds the
// breath's own pair) - THE BANK DEFER'S OWN FLICKER BOOK: the word
// born speaking EIGHTEEN of THIRTY-SEVEN windows (THIRTEEN swings,
// one swell, FOUR fades, the NINETEEN honest silences beside); TWO
// round trips rode one window whole (the face 383's own 0 -> 3 -> 0
// and the face 384's own 3 -> 0 -> 2 chains - the spike-and-drain
// two windows deep the churn's own pair), the ONLY swell the face
// 379's own window 0 -> 1 (+1) -> 2 (+1) the rebuild's own two-step
// walk.
//
// The seat law: the bank book's own anatomy the fleet's own lines
// hold - the bank trip grant lines the bank trip grant's own trend
// prices (the chain's own first link), the bank trip defer lines
// this word prices (the chain's own caught breath), the
// 'final bank deferred: night' pocket defers and the climb-refused
// verdicts and the budget-spent verdicts different shapes never
// priced here (the budget spread's own word prices the budget's own
// shape, the bank decide's own trend prices the docket's own door
// decide - a different census; the cells never merge - co-existence
// by seat never by duplication). The branch law: ONE SHAPE ONE WORD
// - rise then rise prices the bank trip defer's own swell, fall then
// fall prices the bank trip defer's own fade, a traded direction
// prices the bank trip defer's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held count is no
// direction - the bars never invent; the watertrend family's own
// held law; the priced field rode NINETEEN held windows the
// silences' own crowd). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the seats' own verdict word (no owns) nor the dynasty's own
// (no dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats - the names ride by
// law, the neighbor skins never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// v0.976.34 through the walk fuel commons's own v0.976.143). The
// fold receives the bank trip defer count per face (this file owns
// the parse - one-parser law: the same read runs over each face's
// own lines, never a fork). No two-back face given -> no read (the
// carrier's own null pass); the cell's own zero is no fence - a
// zero-defer face rides a lawful count (the smelt lane's own zero
// precedent v0.976.90; the priced field rode NINE zero faces, the
// law the field already walked through).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

const DEFER_RE = /^F\d+ bank trip: deferred/

/**
 * The cell's own read - the bank trip defer count across the lines.
 * The bank book's own defer seat's count - the count this word prices
 * across the faces (the rescue defers and the night defers - two
 * emitters, one shape).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the bank trip defer count (0 when the lines
 *   cannot prove a defer - the zero a lawful count)
 */
export function bankTripDefers (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && DEFER_RE.test(l)) n++
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
 *   { back: {bankTripDefers}, prev: {bankTripDefers}, cur: {bankTripDefers} }
 * @returns {boolean}
 */
export function bankDeferTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.bankTripDefers) && s.bankTripDefers >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the bank trip defer's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {bankTripDefers}, prev: {bankTripDefers}, cur: {bankTripDefers} }
 * @returns {string|null} the row byte, or null
 */
export function bankDeferTrendRow (e) {
  if (!bankDeferTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.bankTripDefers - back.bankTripDefers
  const second = cur.bankTripDefers - prev.bankTripDefers
  const arc = `${back.bankTripDefers} -> ${prev.bankTripDefers} (${first >= 0 ? '+' : ''}${first}) -> ${cur.bankTripDefers} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the walk fuel commons's own trend prices the walk-lane's own fuel commons lane's mass across the walks, this word prices the bank chain's own defer mass across the faces - the bank book's own defer seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the bank trip defer's own trend (v0.976.144): the bank trip defer's rise ran two steps deep - ${arc} - the bank trip defer's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the bank trip defer's own trend (v0.976.144): the bank trip defer's fall ran two steps deep - ${arc} - the bank trip defer's own fade ${tail}`
  }
  return `the bank trip defer's own trend (v0.976.144): the bank trip defer's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
