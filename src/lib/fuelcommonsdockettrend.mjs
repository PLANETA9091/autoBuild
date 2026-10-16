// (v0.976.159) THE FUEL COMMONS' OWN RAW DOCKET TREND - the fuel
// commons book's own raw docket seat beside the docket book's own
// words: the fuel commons' own raw docket mass across the faces (the
// 'F<n> fuel commons: ' lines - ONE emitter, one shape, the fleet19's
// own fuel commons lines the lane prints; the anchor chest lines ('the
// anchor chest is read first'), the budget lines ('budget spent (0/2
// units)'), the path nudge lines ('path nudge inside the direct
// envelope') the raw docket prices - THE RAW LAW: every line the lane
// prints rides, no exclusion the lane needs). THE CELL'S OWN WEIGHT
// 10426u the faces' own total - THE FIELD'S OWN UNPRICED HEAVIEST the
// .158 word's own naming rode (the tunnel docket's 7911u the heaviest
// priced beside, the climb-out bank's 729u the heaviest beside). The
// read owns the shape - one parser per shape (the chestLidBook
// precedent: the file IS the census owner; the walk-lane's own fuel
// commons lane the walk book's own cell a different lane never rides -
// the walk never dockets; the docket's own tunnel verdicts the .158
// word's own cell never rides - the lanes never merge; the docket's
// own food trip verdicts the .157 word's own cell never rides; the
// climb out skins the climb-out book's own cells never ride - the
// climb-out never commons; the bank trip grant lines the
// banktriptrend.mjs module's own book never rides; the fuel drought's
// own class the no-fuel trend's own cell never rides - the class the
// mass never merges).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// fuel commons regex's own arithmetic: 348=299, 349=225, 350=202,
// 351=325, 352=196, 353=328, 354=245, 355=381, 356=301, 357=301,
// 358=277, 359=447, 360=322, 361=243, 362=210, 363=216, 364=205,
// 365=207, 366=280, 367=287, 368=248, 369=266, 370=233, 371=297,
// 372=302, 373=191, 374=261, 375=270, 376=310, 377=168, 378=347,
// 379=225, 380=366, 381=248, 382=296, 383=215, 384=206, 385=213,
// 386=267 - THE CELL'S OWN WEIGHT 10426u the faces' own total), THE
// FIELD'S OWN TOP THE COUNT 447 the face 359's own top rode once -
// the top's own arrival the swing's own back rode (301 -> 277 (-24)
// -> 447 (+170) the trade-then-surcharge the window's own shape),
// the +179 the max rise step's own single bound rode TWICE two legs
// (the 168 -> 347 the floor's own rebuild the face 378's own window's
// second leg and the face 379's own window's first leg the shared leg
// beside), the -142 the max fall step's own single bound rode ONCE
// two legs (the 310 -> 168 the drain the face 377's own window's
// second leg and the face 378's own window's first leg the shared leg
// beside), THE FIELD'S OWN FLOOR THE COUNT 168 the face 377's own
// floor rode once - the floor's own arrival the drain rode (270 ->
// 310 (+40) -> 168 (-142) the surcharge-and-drain), the floor's own
// trade one window deep the rebuild the face 378's own window rode
// (310 -> 168 (-142) -> 347 (+179) the floor -> the max rise's own
// bound) - ZERO FACES NONE - THE SKIN NEVER DRIED (the tunnel
// docket's own never-dried book the companion beside), THE FUEL
// COMMONS' OWN RAW DOCKET BREATH BOOK: the word born speaking
// THIRTY-FIVE of THIRTY-SEVEN windows (TWENTY-FIVE swings, SIX
// swells, FOUR fades, the TWO honest silences beside - the
// back-to-back pair the faces 357/358's own windows hold, the
// family's own held law the bars never invent; the tunnel docket's
// own zero-silence book and the food trip docket's own
// thirteen-silence book the contrast beside), THE SIX SWELLS THE BOOK
// RIDES (the faces 366/367/372/375/376/386's own windows), THE FOUR
// FADES (the faces 350/361/362/384's own windows - the face 350's own
// fade the field's own first word, the face 384's own fade the last
// the book speaks), THE ONE-WINDOW ROUND TRIPS NONE (the book never
// trades one window deep - the tunnel docket's own none beside, the
// climb-out food trip's own three beside). ONE SHAPE ONE WORD: the
// branch law ONE SHAPE ONE WORD - rise then rise prices the fuel
// commons' own swell, fall then fall prices the fuel commons' own
// fade, direction exchange prices the fuel commons' own swing, a held
// step prices no direction - the honest silence (the family's own
// held law: the bars never invent). The byte-pin law: the swell's own
// count SIX, the fade's own count FOUR, the swing's own count
// TWENTY-FIVE - the field's own arithmetic the tests pin byte-exact.
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
// emits (the decompose's own first fuel commons read - the lane the
// reader never priced before this word).

const DOCKET_RE = /^F\d+ fuel commons: /

/**
 * The cell's own read - the fuel commons' raw docket count across
 * the lines. The fuel commons book's own raw docket seat's count -
 * the count this word prices across the faces (the whole raw mass
 * the lane prints - every line rides, no exclusion the lane needs).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the fuel commons raw docket count (0 when the
 *   lines cannot prove a fuel commons line - the zero a lawful
 *   count)
 */
export function fuelCommonsDockets (lines) {
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
 *   { back: {fuelCommonsDockets}, prev: {fuelCommonsDockets}, cur: {fuelCommonsDockets} }
 * @returns {boolean}
 */
export function fuelCommonsDocketTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.fuelCommonsDockets) && s.fuelCommonsDockets >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the fuel commons' own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {fuelCommonsDockets}, prev: {fuelCommonsDockets}, cur: {fuelCommonsDockets} }
 * @returns {string|null} the row byte, or null
 */
export function fuelCommonsDocketTrendRow (e) {
  if (!fuelCommonsDocketTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.fuelCommonsDockets - back.fuelCommonsDockets
  const second = cur.fuelCommonsDockets - prev.fuelCommonsDockets
  const arc = `${back.fuelCommonsDockets} -> ${prev.fuelCommonsDockets} (${first >= 0 ? '+' : ''}${first}) -> ${cur.fuelCommonsDockets} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, this word prices the fuel commons' own raw docket mass across the faces - the fuel commons' own raw docket seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the fuel commons docket's own trend (v0.976.159): the fuel commons docket's rise ran two steps deep - ${arc} - the fuel commons docket's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the fuel commons docket's own trend (v0.976.159): the fuel commons docket's fall ran two steps deep - ${arc} - the fuel commons docket's own fade ${tail}`
  }
  return `the fuel commons docket's own trend (v0.976.159): the fuel commons docket's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
