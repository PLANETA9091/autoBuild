// (v0.976.156) THE CLIMB-OUT BOOK'S OWN FOOD TRIP TREND - the
// climb-out book's own food-trip seat: the climb-out book's own food
// trip skin mass across the faces (the 'F<n> climb out (food trip):
// <verdict>' lines - ONE emitter, one shape, the fleet19's own food
// trip climb-outs the skin prints). THE CELL'S OWN WEIGHT 73u the
// faces' own total - byte-true the bank word's own naming rode (the
// bank's 729u the heaviest, the trip's 619u the second, the wood
// trip's 114u the third, THIS the fourth, the tool recovery's 63u
// the smallest the climb-out tool recovery word's own cell beside).
// The read owns the shape - one parser per shape (the chestLidBook
// precedent: the file IS the census owner; the climb out (bank) /
// (trip) / (wood trip) / (tool recovery) skins different cells, the
// climb-out book's own other skins never priced by this read; the
// docket's own 'F<n> food trip:' verdicts (the famine and the plate
// lines - 'food trip: famine', 'food trip: 0 (commons empty)') the
// docket's own book a different shape never rides - the docket never
// climbs; the docket's own 'F<n> trip:' verdicts the tripclimbrefused
// word's own cell (v0.976.147) a different shape never rides - the
// docket never climbs; the strict 'tool recovery:' emitter lines the
// toolrecovery.mjs module's own book - a different cell, the cells
// never merge, never priced by this read; the pre-position climb's
// own riders census (v0.811.0) prices the climb-outs' own why mix
// within one face - a different anatomy, the census never merges).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// climb-out food trip regex's own arithmetic: 348=1, 349=5, 350=2,
// 351=3, 352=2, 353=0, 354=4, 355=2, 356=0, 357=3, 358=0, 359=0,
// 360=1, 361=4, 362=4, 363=3, 364=1, 365=2, 366=2, 367=0, 368=4,
// 369=1, 370=0, 371=0, 372=0, 373=4, 374=4, 375=0, 376=3, 377=1,
// 378=1, 379=3, 380=2, 381=0, 382=2, 383=2, 384=0, 385=6, 386=1 -
// THE CELL'S OWN WEIGHT 73u the faces' own total), THE FIELD'S OWN
// TOP THE COUNT 6 the face 385's own top rode once, the +6 the face
// 385's own window's second leg the max rise step's own single bound
// (the 0 -> 6 the surcharge), the -5 the face 386's own window's
// second leg the max fall step's own bound (the 6 -> 1 the drain),
// THE FIELD'S OWN FLOOR THE COUNT 0 the ELEVEN zero faces' own
// floors rode (the faces 353/356/358/359/367/370/371/372/375/381/
// 384's own floors) - THE SKIN DRIED ELEVEN TIMES (the tool
// recovery's own drought-eleven the mirror beside, the wood trip's
// own thrice-dried book beside, the trip skin's own never-dried book
// the contrast), THE CLIMB-OUT FOOD TRIP'S OWN BREATH BOOK: the word
// born speaking SIXTEEN of THIRTY-SEVEN windows (SIXTEEN swings, ONE
// swell, FIVE fades, the FIFTEEN honest silences beside - the
// half-holds and the full holds the honest silences keep, the
// family's own held law the bars never invent) - THE SILENT-HEAVIEST
// BOOK THE FAMILY HOLDS (the tool recovery's own fourteen-silence
// book the mirror beside), THE ONE SWELL BORN OF ZERO (the face
// 361's own window 0 -> 1 (+1) -> 4 (+3) - the tool recovery's own
// swells all born of zero the mirror beside), THE THREE ONE-WINDOW
// ROUND TRIPS THE BOOK RIDES THREE (the face 352's own window 2 ->
// 3 (+1) -> 2 (-1), the face 358's own window 0 -> 3 (+3) -> 0
// (-3), the face 382's own window 2 -> 0 (-2) -> 2 (+2) - the trip's
// own book rode TWO beside, the bank's own TWO beside, the wood
// trip's own SIX beside). ONE SHAPE ONE WORD: the branch law ONE
// SHAPE ONE WORD - rise then rise prices the climb-out food trip's
// own swell, fall then fall prices the climb-out food trip's own
// fade, direction exchange prices the climb-out food trip's own
// swing, a held step prices no direction - the honest silence (the
// family's own held law: the bars never invent). The byte-pin law:
// the swell's own count ONE, the fade's own count FIVE, the swing's
// own count SIXTEEN - the field's own arithmetic the tests pin
// byte-exact.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// - the fold receives back/prev/cur the faces' own counts; the
// missing leg prices nothing - no back face -> no read (the
// carrier's own null pass); the cell's own zero is no fence - a
// lawful count (the smelt lane's own zero precedent v0.976.90)).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

const SKIN_RE = /^F\d+ climb out \(food trip\): /

/**
 * The cell's own read - the climb-out food trip count across the
 * lines. The climb-out book's own food-trip seat's count - the count
 * this word prices across the faces (the 'climb out (food trip):'
 * verdicts - one emitter, one shape).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the climb-out food trip count (0 when the lines
 *   cannot prove a food trip climb-out - the zero a lawful count)
 */
export function climbOutFoodTrips (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && SKIN_RE.test(l)) n++
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
 *   { back: {climbOutFoodTrips}, prev: {climbOutFoodTrips}, cur: {climbOutFoodTrips} }
 * @returns {boolean}
 */
export function climbOutFoodTripTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.climbOutFoodTrips) && s.climbOutFoodTrips >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the climb-out food trip's own two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {climbOutFoodTrips}, prev: {climbOutFoodTrips}, cur: {climbOutFoodTrips} }
 * @returns {string|null} the row byte, or null
 */
export function climbOutFoodTripTrendRow (e) {
  if (!climbOutFoodTripTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.climbOutFoodTrips - back.climbOutFoodTrips
  const second = cur.climbOutFoodTrips - prev.climbOutFoodTrips
  const arc = `${back.climbOutFoodTrips} -> ${prev.climbOutFoodTrips} (${first >= 0 ? '+' : ''}${first}) -> ${cur.climbOutFoodTrips} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, this word prices the climb-out book's own food-trip skin mass across the faces - the climb-out book's own food-trip seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the climb-out food trip's own trend (v0.976.156): the climb-out food trip's rise ran two steps deep - ${arc} - the climb-out food trip's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the climb-out food trip's own trend (v0.976.156): the climb-out food trip's fall ran two steps deep - ${arc} - the climb-out food trip's own fade ${tail}`
  }
  return `the climb-out food trip's own trend (v0.976.156): the climb-out food trip's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
