// (v0.976.154) THE CLIMB-OUT BOOK'S OWN TRIP TREND - the climb-out
// book's own trip seat: the climb-out book's own trip skin mass
// across the faces (the 'F<n> climb out (trip): <verdict>' lines -
// ONE emitter, one shape, the fleet19's own trip climb-outs the skin
// prints; the skin's own verdict census the field holds - the OK
// climbs 321 / the stalled 98 / the rescue-owned 52 / the low-o2 46
// / the wet walls 42 / the timeouts 51 the rests beside - the
// anatomy byte-true THE FIELD'S OWN WITNESS). THE CELL'S OWN WEIGHT
// 619u the faces' own total - byte-true the climb-out bank word's
// own naming rode (the bank's 729u the heaviest, THIS the second,
// the wood trip's 114u the third, the food trip's 73u the fourth,
// the tool recovery's 63u the smallest the climb-out tool recovery
// word's own cell beside). The read owns the shape - one parser per
// shape (the chestLidBook precedent: the file IS the census owner;
// the climb out (bank) / (wood trip) / (food trip) / (tool recovery)
// skins different cells, the climb-out book's own other skins never
// priced by this read; the docket's own 'F<n> trip:' verdicts the
// tripclimbrefused word's own cell (v0.976.147) a different shape
// never rides - the docket never climbs; the strict 'tool recovery:'
// emitter lines the toolrecovery.mjs module's own book - a different
// cell, the cells never merge, never priced by this read; the
// pre-position climb's own riders census (v0.811.0) prices the
// climb-outs' own why mix within one face - a different anatomy, the
// census never merges; the climbrefusal WHY census (v0.691.0) a
// different book again).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// climb-out trip regex's own arithmetic: 348=13, 349=14, 350=7,
// 351=14, 352=16, 353=18, 354=21, 355=16, 356=16, 357=16, 358=18,
// 359=16, 360=19, 361=18, 362=20, 363=21, 364=16, 365=15, 366=17,
// 367=13, 368=18, 369=14, 370=17, 371=17, 372=16, 373=18, 374=14,
// 375=11, 376=11, 377=11, 378=18, 379=10, 380=19, 381=11, 382=22,
// 383=16, 384=19, 385=15, 386=18 - THE CELL'S OWN WEIGHT 619u the
// faces' own total), THE FIELD'S OWN TOP the count 22 the face 382's
// own top rode once - the top's own arrival the swing's own back
// rode (19 -> 11 (-8) -> 22 (+11) the drain-and-surcharge the
// window's own shape - no silent arrival the bank's own face 356
// beside), the +11 the face 382's own window's second leg the max
// rise step's own single bound (the 11 -> 22 the surcharge), the -8
// the face 379's own window's second leg the max fall step's own
// bound (the 18 -> 10 the drain), THE FIELD'S OWN FLOOR THE COUNT 7
// the face 350's own floor rode once, THE ZERO FACES NONE - THE
// TRIP SKIN NEVER DRIED (the bank skin's own never-dried book the
// companion, the tool recovery's own drought-eleven the mirror
// beside), THE CLIMB-OUT TRIP'S OWN BREATH BOOK: the word born
// speaking TWENTY-NINE of THIRTY-SEVEN windows (TWENTY-THREE swings,
// FOUR swells, TWO fades, the EIGHT honest silences beside - the
// half-holds the honest silences keep, the family's own held law the
// bars never invent), THE TWO ONE-WINDOW ROUND TRIPS THE SECOND BOOK
// RIDES TWO (the face 351's own window 14 -> 7 (-7) -> 14 (+7) the
// floor's own trade one window deep, the face 359's own window 16 ->
// 18 (+2) -> 16 (-2) - the climb-out bank's own book rode TWO beside,
// every other book rode ONE or THREE). ONE SHAPE ONE WORD: the
// branch law ONE SHAPE ONE WORD - rise then rise prices the
// climb-out trip's own swell, fall then fall prices the climb-out
// trip's own fade, direction exchange prices the climb-out trip's
// own swing, a held step prices no direction - the honest silence
// (the family's own held law: the bars never invent). The byte-pin
// law: the swell's own count FOUR, the fade's own count TWO, the
// swing's own count TWENTY-THREE - the field's own arithmetic the
// tests pin byte-exact.
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

const SKIN_RE = /^F\d+ climb out \(trip\): /

/**
 * The cell's own read - the climb-out trip count across the lines.
 * The climb-out book's own trip seat's count - the count this word
 * prices across the faces (the 'climb out (trip):' verdicts - one
 * emitter, one shape).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the climb-out trip count (0 when the lines
 *   cannot prove a trip climb-out - the zero a lawful count)
 */
export function climbOutTrips (lines) {
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
 *   { back: {climbOutTrips}, prev: {climbOutTrips}, cur: {climbOutTrips} }
 * @returns {boolean}
 */
export function climbOutTripTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.climbOutTrips) && s.climbOutTrips >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the climb-out trip's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {climbOutTrips}, prev: {climbOutTrips}, cur: {climbOutTrips} }
 * @returns {string|null} the row byte, or null
 */
export function climbOutTripTrendRow (e) {
  if (!climbOutTripTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.climbOutTrips - back.climbOutTrips
  const second = cur.climbOutTrips - prev.climbOutTrips
  const arc = `${back.climbOutTrips} -> ${prev.climbOutTrips} (${first >= 0 ? '+' : ''}${first}) -> ${cur.climbOutTrips} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, this word prices the climb-out book's own trip skin mass across the faces - the climb-out book's own trip seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the climb-out trip's own trend (v0.976.154): the climb-out trip's rise ran two steps deep - ${arc} - the climb-out trip's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the climb-out trip's own trend (v0.976.154): the climb-out trip's fall ran two steps deep - ${arc} - the climb-out trip's own fade ${tail}`
  }
  return `the climb-out trip's own trend (v0.976.154): the climb-out trip's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
