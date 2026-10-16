// (v0.976.157) THE DOCKET'S OWN FOOD TRIP TREND - the docket book's
// own food-trip seat beside the climb-out book's own words: the
// docket's own food trip verdict mass across the faces (the
// 'F<n> food trip: <verdict>' lines - ONE emitter, one shape, the
// fleet19's own food trip dockets the docket prints; the famine
// lines ('famine (hunger <n>, plate <n>) - the commons walk') and
// the plate lines ('0 (no chest reached)' / '0 (commons empty) - the
// plate rides to the next bank trip') this book prices). THE CELL'S
// OWN WEIGHT 144u the faces' own total. The EXCLUSION law: the
// climb-refused class ('0 (climb refused)') the docket's own trip
// climb-refused word's own cell (v0.976.147) - the .147 read prices
// the refused class across the three lanes (bank/wood/food), THIS
// read excludes the refused class by the byte-exact shape, the cells
// never merge (the field's own refused mass 44 the .147's own
// witness beside). The read owns the shape - one parser per shape
// (the chestLidBook precedent: the file IS the census owner; the
// climb out (food trip) skin the climb-out book's own cell
// (v0.976.156) a different shape never rides - the climb-out never
// dockets; the bank trip grant lines the banktriptrend.mjs module's
// own book - a different lane, the lanes never merge; the bank
// docket's own lines ('F<n> bank trip:') the bank docket's own
// cells - a different lane never priced by this read; the
// pre-position climb's own riders census (v0.811.0) a different
// anatomy, the census never merges).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// food trip docket regex's own arithmetic: 348=2, 349=13, 350=5,
// 351=6, 352=4, 353=0, 354=5, 355=4, 356=6, 357=7, 358=0, 359=2,
// 360=1, 361=5, 362=5, 363=3, 364=1, 365=3, 366=3, 367=2, 368=6,
// 369=1, 370=0, 371=2, 372=0, 373=9, 374=9, 375=4, 376=4, 377=4,
// 378=1, 379=3, 380=3, 381=0, 382=3, 383=2, 384=2, 385=11, 386=3 -
// THE CELL'S OWN WEIGHT 144u the faces' own total), THE FIELD'S OWN
// TOP THE COUNT 13 the face 349's own top rode once - NO WINDOW
// HOLDS the top's own arrival (the field's own first step the 2 ->
// 13 the +11 the max rise step's own single bound rode OUTSIDE the
// windows - the first two faces no window the family's own carrier
// law, the bank's own face 356's silent arrival a different book's
// own story), the -8 the max fall step's own bound rode TWICE (the
// face 350's own window's second leg the 13 -> 5 the drain rode
// first, the face 386's own window's second leg the 11 -> 3 the
// mirror -8 beside), THE FIELD'S OWN FLOOR THE COUNT 0 the faces
// 353/358/370/372/381's own floors rode FIVE - THE SKIN DRIED FIVE
// (the climb-out wood trip's own thrice-dried book beside, the trip
// skin's own never-dried book the contrast), THE DOCKET'S OWN FOOD
// TRIP BREATH BOOK: the word born speaking TWENTY-FOUR of
// THIRTY-SEVEN windows (TWENTY swings, ONE swell, THREE fades, the
// THIRTEEN honest silences beside - the face 377's own full hold
// and the half-holds the faces 362/363/366/367/374/375/376/378/380/
// 381/384/385's own windows the honest silences keep, the family's
// own held law the bars never invent), THE THREE ONE-WINDOW ROUND
// TRIPS THE BOOK RIDES THREE (the face 365's own window 3 -> 1 (-2)
// -> 3 (+2), the face 372's own window 0 -> 2 (+2) -> 0 (-2), the
// face 382's own window 3 -> 0 (-3) -> 3 (+3) - the climb-out
// food trip's own book rode THREE beside, the trip's own TWO beside,
// the bank's own TWO beside). ONE SHAPE ONE WORD: the branch law
// ONE SHAPE ONE WORD - rise then rise prices the food trip docket's
// own swell, fall then fall prices the food trip docket's own fade,
// direction exchange prices the food trip docket's own swing, a held
// step prices no direction - the honest silence (the family's own
// held law: the bars never invent). The byte-pin law: the swell's
// own count ONE, the fade's own count THREE, the swing's own count
// TWENTY - the field's own arithmetic the tests pin byte-exact.
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

const DOCKET_RE = /^F\d+ food trip: /
const REFUSED_RE = /^F\d+ food trip: 0 \(climb refused/

/**
 * The cell's own read - the food trip docket verdict count across
 * the lines. The docket book's own food-trip seat's count - the
 * count this word prices across the faces (the 'food trip:'
 * verdicts - one emitter, one shape; the climb-refused class the
 * .147 word's own cell never rides).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the food trip docket count (0 when the lines
 *   cannot prove a food trip docket verdict - the zero a lawful
 *   count)
 */
export function foodTripDockets (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && DOCKET_RE.test(l) && !REFUSED_RE.test(l)) n++
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
 *   { back: {foodTripDockets}, prev: {foodTripDockets}, cur: {foodTripDockets} }
 * @returns {boolean}
 */
export function foodTripDocketTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.foodTripDockets) && s.foodTripDockets >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the food trip docket's own two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {foodTripDockets}, prev: {foodTripDockets}, cur: {foodTripDockets} }
 * @returns {string|null} the row byte, or null
 */
export function foodTripDocketTrendRow (e) {
  if (!foodTripDocketTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.foodTripDockets - back.foodTripDockets
  const second = cur.foodTripDockets - prev.foodTripDockets
  const arc = `${back.foodTripDockets} -> ${prev.foodTripDockets} (${first >= 0 ? '+' : ''}${first}) -> ${cur.foodTripDockets} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, this word prices the docket's own food trip verdict mass across the faces - the docket's own food-trip seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the food trip docket's own trend (v0.976.157): the food trip docket's rise ran two steps deep - ${arc} - the food trip docket's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the food trip docket's own trend (v0.976.157): the food trip docket's fall ran two steps deep - ${arc} - the food trip docket's own fade ${tail}`
  }
  return `the food trip docket's own trend (v0.976.157): the food trip docket's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
