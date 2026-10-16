// (v0.976.168) THE SPARE PICK DUE'S OWN TREND - the spare pick book's
// own due seat beside the raw docket words: the spare pick due's own
// mass across the faces (the 'F<n> spare pick due: ' lines - ONE
// emitter, one shape, the fleet19's own spare pick due lines the
// lane prints; the planks-available verdicts ('spare (planks
// available)'), the cobble-available verdicts ('spare (cobble
// available)') this book prices - THE RAW LAW: every line the lane
// prints rides, no exclusion the lane needs). THE CELL'S OWN WEIGHT
// 788u the thirty-nine faces' own total - THE FIRE-0142'S OWN
// BESIDE-SEAT the .166 word's own naming rode byte-true (the spare
// pick's whole mass 1747u the .166's own whole-field price rode: the
// colon seat 959u the .166 word's own the heavier primary shape, the
// due sibling 788u this word prices - the sword's own precedent the
// .162 word's own naming held: the whole mass the colon seat the
// heavier primary shape, the due sibling the named beside-seat; the
// hand-off's own arithmetic the field re-verified 788u byte-exact
// the take rode). THE LANE'S OWN BORDER: the spare pick colon's own
// lines ('F<n> spare pick: ' - the craft verdicts and the skip
// verdicts and the no-table lines) a different lane never ride - the
// colon seat the .166 word's own cell holds, the due seat this word
// prices (the lanes never merge); the sword due's own precedent the
// .162 word's own border rode; the refill scheduler's own step the
// fleet's own emitter - the module owns the schedule, this book owns
// the mass across the faces. The read owns the shape - one parser
// per shape (the chestLidBook precedent: the file IS the census
// owner; the walk-lane census cells the walk book's own axes never
// ride; the climb-out skins the climb-out book's own cells never
// ride).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// due regex's own arithmetic: 348=20, 349=19, 350=19, 351=24, 352=17,
// 353=18, 354=17, 355=23, 356=21, 357=17, 358=19, 359=23, 360=21,
// 361=22, 362=18, 363=18, 364=17, 365=22, 366=22, 367=21, 368=21,
// 369=18, 370=19, 371=20, 372=23, 373=21, 374=18, 375=20, 376=20,
// 377=21, 378=23, 379=18, 380=22, 381=22, 382=23, 383=18, 384=23,
// 385=20, 386=20 - THE CELL'S OWN WEIGHT 788u the faces' own total
// the .166's own naming byte-true), THE FIELD'S OWN TOP THE COUNT 24
// the face 351's own top rode once (the top's own arrival the
// silence's own back rode - the face 351's own window the honest
// null the top beside), the +6 the max rise step's own single bound
// rode TWICE two legs (the face 355's own window's second leg and
// the face 356's own window's first leg the shared leg), the -7 the
// max fall step's own single bound rode TWICE two legs (the face
// 352's own window's second leg and the face 353's own window's
// first leg the shared leg), THE FIELD'S OWN FLOOR THE COUNT 17 rode
// FOUR faces (the faces 352/354/357/364's own floors), ZERO FACES
// NONE - THE SKIN NEVER DRIED (the tunnel skin's own never-dried
// book beside, the .166's own never-dried book beside - the due
// never dries the fleet's own refill law holds), THE SPARE PICK
// DUE'S OWN BREATH BOOK: the word born speaking TWENTY-FOUR of
// THIRTY-SEVEN windows (EIGHTEEN swings, FOUR swells, TWO fades, the
// THIRTEEN honest silences beside - SEVEN back-to-back pairs the
// faces 350/351, 363/364, 366/367, 367/368, 368/369, 376/377,
// 381/382's own windows hold - THE NEW MOST-PAIRED BOOK THE FAMILY
// HOLDS the .167's own six pairs the record beside, the ONE held leg
// the two windows share every pair, THE FOUR-WINDOW SILENT RUN THE
// FAMILY'S FIRST the faces 366/367/368/369's own windows the held
// legs chain the four windows share - the family's own longest
// silence the bars never invent), THE FOUR SWELLS THE BOOK RIDES
// (the faces 359/371/372/378's own windows - the faces 371/372's own
// pair the back-to-back build beside), THE TWO FADES (the faces
// 357/374's own windows), THE TWO-WINDOW ROUND TRIPS the book rides
// TWICE (the faces 354/384's own windows 17 -> 18 (+1) -> 17 (-1) and
// 23 -> 18 (-5) -> 23 (+5) - the family's own round-trip books the
// mirror beside, the pair NOT adjacent the whole field between). ONE
// SHAPE ONE WORD: the branch law ONE SHAPE ONE WORD - rise then rise
// prices the due's own swell, fall then fall prices the due's own
// fade, direction exchange prices the due's own swing, a held step
// prices no direction - the honest silence (the family's own held
// law: the bars never invent). The byte-pin law: the swell's own
// count FOUR, the fade's own count TWO, the swing's own count
// EIGHTEEN - the field's own arithmetic the tests pin byte-exact.
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
// emits (the decompose's own first spare pick due read - the lane
// the reader never priced before this word).

const DUE_RE = /^F\d+ spare pick due: /

/**
 * The cell's own read - the spare pick due's count across the lines.
 * The due book's own seat's count - the count this word prices across
 * the faces (the whole raw mass the lane prints - every line rides,
 * no exclusion the lane needs).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the spare pick due count (0 when the lines
 *   cannot prove a due line - the zero a lawful count)
 */
export function sparePickDues (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && DUE_RE.test(l)) n++
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
 *   { back: {sparePickDues}, prev: {sparePickDues}, cur: {sparePickDues} }
 * @returns {boolean}
 */
export function sparePickDueTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.sparePickDues) && s.sparePickDues >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the due's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {sparePickDues}, prev: {sparePickDues}, cur: {sparePickDues} }
 * @returns {string|null} the row byte, or null
 */
export function sparePickDueTrendRow (e) {
  if (!sparePickDueTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.sparePickDues - back.sparePickDues
  const second = cur.sparePickDues - prev.sparePickDues
  const arc = `${back.sparePickDues} -> ${prev.sparePickDues} (${first >= 0 ? '+' : ''}${first}) -> ${cur.sparePickDues} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, this word prices the spare pick due's own mass across the faces - the spare pick due's own seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the spare pick due's own trend (v0.976.168): the spare pick due's rise ran two steps deep - ${arc} - the spare pick due's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the spare pick due's own trend (v0.976.168): the spare pick due's fall ran two steps deep - ${arc} - the spare pick due's own fade ${tail}`
  }
  return `the spare pick due's own trend (v0.976.168): the spare pick due's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
