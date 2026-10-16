// (v0.976.155) THE CLIMB-OUT BOOK'S OWN WOOD TRIP TREND - the
// climb-out book's own wood-trip seat: the climb-out book's own wood
// trip skin mass across the faces (the 'F<n> climb out (wood trip):
// <verdict>' lines - ONE emitter, one shape, the fleet19's own wood
// trip climb-outs the skin prints). THE CELL'S OWN WEIGHT 114u the
// faces' own total - byte-true the climb-out bank word's own naming
// rode (the bank's 729u the heaviest, the trip's 619u the second,
// THIS the third, the food trip's 73u the fourth, the tool
// recovery's 63u the smallest the climb-out tool recovery word's own
// cell beside). The read owns the shape - one parser per shape (the
// chestLidBook precedent: the file IS the census owner; the climb out
// (bank) / (trip) / (food trip) / (tool recovery) skins different
// cells, the climb-out book's own other skins never priced by this
// read; the docket's own 'F<n> trip:' verdicts the tripclimbrefused
// word's own cell (v0.976.147) a different shape never rides - the
// docket never climbs; the strict 'tool recovery:' emitter lines the
// toolrecovery.mjs module's own book - a different cell, the cells
// never merge, never priced by this read; the pre-position climb's
// own riders census (v0.811.0) prices the climb-outs' own why mix
// within one face - a different anatomy, the census never merges).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// climb-out wood trip regex's own arithmetic: 348=1, 349=1, 350=1,
// 351=2, 352=2, 353=3, 354=4, 355=2, 356=0, 357=13, 358=4, 359=3,
// 360=4, 361=3, 362=5, 363=2, 364=4, 365=1, 366=3, 367=1, 368=4,
// 369=2, 370=3, 371=0, 372=1, 373=5, 374=2, 375=3, 376=2, 377=4,
// 378=3, 379=7, 380=3, 381=1, 382=3, 383=4, 384=0, 385=5, 386=3 -
// THE CELL'S OWN WEIGHT 114u the faces' own total), THE FIELD'S OWN
// TOP THE COUNT 13 the face 357's own top rode once - the top's own
// arrival the swing's own back rode (2 -> 0 (-2) -> 13 (+13) the
// drought-and-surcharge the window's own shape - no silent arrival
// the bank's own face 356 beside), the +13 the face 357's own
// window's second leg the max rise step's own single bound (the 0 ->
// 13 the surcharge), the -9 the face 358's own window's second leg
// the max fall step's own bound (the 13 -> 4 the drain), THE FIELD'S
// OWN FLOOR THE COUNT 0 the faces 356/371/384's own floors rode
// THREE - THE SKIN DRIED THRICE (the tool recovery's own
// drought-eleven the mirror beside, the trip skin's own never-dried
// book the contrast), THE CLIMB-OUT WOOD TRIP'S OWN BREATH BOOK: the
// word born speaking THIRTY-THREE of THIRTY-SEVEN windows (TWENTY-
// SEVEN swings, THREE swells, THREE fades, the FOUR honest silences
// beside - the face 350's own full hold and the half-holds the
// faces 351/352/353's own windows the honest silences keep, the
// family's own held law the bars never invent), THE SIX ONE-WINDOW
// ROUND TRIPS THE BOOK RIDES SIX (the face 360's own window 4 -> 3
// (-1) -> 4 (+1), the face 361's own window 3 -> 4 (+1) -> 3 (-1),
// the face 367's own window 1 -> 3 (+2) -> 1 (-2), the face 376's
// own window 2 -> 3 (+1) -> 2 (-1), the face 380's own window 3 ->
// 7 (+4) -> 3 (-4), the face 382's own window 3 -> 1 (-2) -> 3 (+2)
// - the trip's own book rode TWO beside, the bank's own TWO beside,
// every other book rode ONE or THREE). ONE SHAPE ONE WORD: the
// branch law ONE SHAPE ONE WORD - rise then rise prices the
// climb-out wood trip's own swell, fall then fall prices the
// climb-out wood trip's own fade, direction exchange prices the
// climb-out wood trip's own swing, a held step prices no direction -
// the honest silence (the family's own held law: the bars never
// invent). The byte-pin law: the swell's own count THREE, the
// fade's own count THREE, the swing's own count TWENTY-SEVEN - the
// field's own arithmetic the tests pin byte-exact.
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

const SKIN_RE = /^F\d+ climb out \(wood trip\): /

/**
 * The cell's own read - the climb-out wood trip count across the
 * lines. The climb-out book's own wood-trip seat's count - the count
 * this word prices across the faces (the 'climb out (wood trip):'
 * verdicts - one emitter, one shape).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the climb-out wood trip count (0 when the lines
 *   cannot prove a wood trip climb-out - the zero a lawful count)
 */
export function climbOutWoodTrips (lines) {
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
 *   { back: {climbOutWoodTrips}, prev: {climbOutWoodTrips}, cur: {climbOutWoodTrips} }
 * @returns {boolean}
 */
export function climbOutWoodTripTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.climbOutWoodTrips) && s.climbOutWoodTrips >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the climb-out wood trip's own two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {climbOutWoodTrips}, prev: {climbOutWoodTrips}, cur: {climbOutWoodTrips} }
 * @returns {string|null} the row byte, or null
 */
export function climbOutWoodTripTrendRow (e) {
  if (!climbOutWoodTripTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.climbOutWoodTrips - back.climbOutWoodTrips
  const second = cur.climbOutWoodTrips - prev.climbOutWoodTrips
  const arc = `${back.climbOutWoodTrips} -> ${prev.climbOutWoodTrips} (${first >= 0 ? '+' : ''}${first}) -> ${cur.climbOutWoodTrips} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, this word prices the climb-out book's own wood-trip skin mass across the faces - the climb-out book's own wood-trip seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the climb-out wood trip's own trend (v0.976.155): the climb-out wood trip's rise ran two steps deep - ${arc} - the climb-out wood trip's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the climb-out wood trip's own trend (v0.976.155): the climb-out wood trip's fall ran two steps deep - ${arc} - the climb-out wood trip's own fade ${tail}`
  }
  return `the climb-out wood trip's own trend (v0.976.155): the climb-out wood trip's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
