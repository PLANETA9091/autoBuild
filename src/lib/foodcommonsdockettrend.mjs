// (v0.976.160) THE DOCKET'S OWN FOOD COMMONS TREND - the docket
// book's own food-commons seat beside the docket's own fuel commons
// word: the docket's own food commons verdict mass across the faces
// (the 'F<n> food commons: <verdict>' lines - ONE emitter, one
// shape, the fleet19's own food commons verdicts the docket prints;
// the empty reads ('chest holds no food'), the plate lines ('the
// plate stays empty (commons empty) - the next trip retries' / 'the
// plate stays empty (no chest reached) - the next trip retries'),
// the walk-fail lines ('chest walk failed (...)'), the ladder lines
// ('chest at [...] the yard stands ... the plate rides (the tithe
// owns the refill)') this book prices). THE CELL'S OWN WEIGHT 1618u
// the faces' own total - THE THIRD HEAVIEST WORD THE FIELD HOLDS
// (the fuel commons' 10426u the heaviest, the tunnel's 7911u the
// second, THIS the third - the walk total's 1604u the census book's
// own heaviest beside, the climb-out bank's 729u the smaller books
// beside). The food commons lane holds no climb-refused class - the
// refused shape the three trip lanes' own byte the .147 word's own
// cell rides - the whole verdict mass this read prices, no exclusion
// the lane needs. The read owns the shape - one parser per shape
// (the chestLidBook precedent: the file IS the census owner; the
// fuel commons' own raw docket mass the .159 word's own cell a
// different lane never rides - the lanes never merge; the tunnel
// verdicts the .158 word's own cell never ride; the food trip
// dockets the .157 word's own cell never ride; the walk-lane census
// cells the walk book's own axes never ride - the walk food commons
// lane's own trend the census's walk.byLane cell a different axis
// the same lane name the cells never merge; the climb out skins the
// climb-out book's own cells never ride - the climb-out never
// commons; the bank trip grant lines the banktriptrend.mjs module's
// own book a different lane never rides).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// food commons docket regex's own arithmetic: 348=55, 349=40,
// 350=23, 351=39, 352=25, 353=68, 354=27, 355=83, 356=51, 357=63,
// 358=24, 359=92, 360=58, 361=50, 362=25, 363=15, 364=16, 365=23,
// 366=27, 367=17, 368=60, 369=12, 370=20, 371=42, 372=76, 373=28,
// 374=55, 375=43, 376=60, 377=38, 378=54, 379=6, 380=69, 381=26,
// 382=45, 383=28, 384=33, 385=53, 386=49 - THE CELL'S OWN WEIGHT
// 1618u the faces' own total), THE FIELD'S OWN TOP THE COUNT 92 the
// face 359's own top rode once - the top's own arrival the swing's
// own back rode (63 -> 24 (-39) -> 92 (+68) the drain-and-surcharge
// the window's own shape - no silent arrival the bank's own face
// 356 beside), the +68 the max rise step's own single bound rode
// ONCE two legs (the 24 -> 92 the surcharge the face 359's own
// window's second leg and the face 360's own window's first leg the
// shared leg beside), the -48 the max fall step's own bound rode
// THREE steps SIX legs (the 60 -> 12 the face 369/370's own windows
// the shared leg beside, the 76 -> 28 the face 373/374's own windows
// the shared leg beside, the 54 -> 6 the face 379/380's own windows
// the shared leg beside - the drain's own triple the field's own
// echo), THE FIELD'S OWN FLOOR THE COUNT 6 the face 379's own floor
// rode once - the floor's own arrival the drain rode (38 -> 54
// (+16) -> 6 (-48) the surcharge-and-drain), the floor's own trade
// one window deep the rebuild the face 380's own window rode (54 ->
// 6 (-48) -> 69 (+63) the floor -> the +63 the rebuild's own bound)
// - ZERO FACES NONE - THE SKIN NEVER DRIED (the tunnel skin's own
// never-dried book beside, the trip skin's own never-dried book
// beside), THE DOCKET'S OWN FOOD COMMONS BREATH BOOK: the word born
// speaking ALL THIRTY-SEVEN windows (TWENTY-EIGHT swings, FIVE
// swells, FOUR fades, the ZERO honest silences beside) - THE
// NEVER-SILENT BOOK THE SECOND THE FAMILY HOLDS (the tunnel
// docket's own never-silent book the .158 word the first beside,
// the food trip docket's own thirteen-silence book and the
// climb-out food trip's own fifteen-silence book the
// silent-heaviest books the contrast beside, the family's own held
// law the bars never invent), THE FIVE SWELLS THE BOOK RIDES (the
// faces 365/366/371/372/385's own windows - the face 372's own
// swell the +34 the book's own heaviest two-step ladder rode 20 ->
// 42 (+22) -> 76 (+34)), THE FOUR FADES (the faces 350/361/362/363's
// own windows - the face 363's own fade the book's own last fade
// rode), THE ONE-WINDOW ROUND TRIPS NONE (the book never trades one
// window deep - the tunnel docket's own round-trip-less book the
// .158 word beside, the family's own second). ONE SHAPE ONE WORD:
// the branch law ONE SHAPE ONE WORD - rise then rise prices the
// food commons docket's own swell, fall then fall prices the food
// commons docket's own fade, direction exchange prices the food
// commons docket's own swing, a held step prices no direction - the
// honest silence (the family's own held law: the bars never
// invent). The byte-pin law: the swell's own count FIVE, the fade's
// own count FOUR, the swing's own count TWENTY-EIGHT - the field's
// own arithmetic the tests pin byte-exact.
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
// emits (the decompose's own first food commons read - the lane the
// reader never priced before this word).

const DOCKET_RE = /^F\d+ food commons: /

/**
 * The cell's own read - the food commons docket verdict count
 * across the lines. The docket book's own food-commons seat's
 * count - the count this word prices across the faces (the
 * 'food commons:' verdicts - one emitter, one shape; the whole
 * verdict mass the lane holds - the food commons lane no
 * climb-refused class rides).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the food commons docket count (0 when the
 *   lines cannot prove a food commons docket verdict - the zero a
 *   lawful count)
 */
export function foodCommonsDockets (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && DOCKET_RE.test(l)) n++
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
 *   { back: {foodCommonsDockets}, prev: {foodCommonsDockets}, cur: {foodCommonsDockets} }
 * @returns {boolean}
 */
export function foodCommonsDocketTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.foodCommonsDockets) && s.foodCommonsDockets >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the food commons docket's own two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {foodCommonsDockets}, prev: {foodCommonsDockets}, cur: {foodCommonsDockets} }
 * @returns {string|null} the row byte, or null
 */
export function foodCommonsDocketTrendRow (e) {
  if (!foodCommonsDocketTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.foodCommonsDockets - back.foodCommonsDockets
  const second = cur.foodCommonsDockets - prev.foodCommonsDockets
  const arc = `${back.foodCommonsDockets} -> ${prev.foodCommonsDockets} (${first >= 0 ? '+' : ''}${first}) -> ${cur.foodCommonsDockets} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, this word prices the food commons' own raw docket mass across the faces - the food commons' own raw docket seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the food commons docket's own trend (v0.976.160): the food commons docket's rise ran two steps deep - ${arc} - the food commons docket's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the food commons docket's own trend (v0.976.160): the food commons docket's fall ran two steps deep - ${arc} - the food commons docket's own fade ${tail}`
  }
  return `the food commons docket's own trend (v0.976.160): the food commons docket's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
