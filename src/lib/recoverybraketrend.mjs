// (v0.976.170) THE RECOVERY BRAKE'S OWN TREND - the recovery
// machinery's own brake seat beside the raw lane words: the recovery
// brake's own mass across the faces (the 'F<n> recovery brake: '
// lines - ONE emitter, one shape, the fleet19's own brake lines the
// lane prints; the FOUR-RUNG ESCALATION LADDER the lane speaks -
// '1 consecutive failures - next attempt in 45s', '2 consecutive
// failures - next attempt in 90s', '3 consecutive failures - next
// attempt in 180s', '4 consecutive failures - next attempt in 300s'
// - the rung the brake holds the count this book prices - THE RAW
// LAW: every line the lane prints rides, no exclusion the lane
// needs). THE CELL'S OWN WEIGHT 58u the thirty-nine faces' own
// total - THE LIGHTEST NAMED LANE THE FIELD HOLDS (the .167
// delivery's own 195u the lightest the record beside - the brake's
// 58u the honest light the weight never lies). THE LANE'S OWN
// BORDER: the tool recovery's own emissions ('F<n> tool recovery: '
// - the toolrecovery.mjs module's own book a different lane) never
// ride - the brake never recovers, the recovery never brakes (the
// lanes never merge); the climb-out skins the climb-out book's own
// cells never ride; the walk-lane census cells the walk book's own
// axes never ride. The read owns the shape - one parser per shape
// (the chestLidBook precedent: the file IS the census owner).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// brake regex's own arithmetic: 348=0, 349=1, 350=4, 351=0, 352=6,
// 353=0, 354=0, 355=0, 356=1, 357=0, 358=1, 359=5, 360=4, 361=0,
// 362=4, 363=4, 364=0, 365=1, 366=2, 367=0, 368=0, 369=0, 370=4,
// 371=0, 372=4, 373=0, 374=0, 375=0, 376=2, 377=0, 378=0, 379=0,
// 380=8, 381=1, 382=1, 383=0, 384=0, 385=3, 386=2 - THE CELL'S OWN
// WEIGHT 58u the faces' own total), THE FIELD'S OWN TOP THE COUNT 8
// the face 380's own top rode once - THE TOP'S OWN ARRIVAL THE
// SILENCE'S OWN BACK RODE (the face 380's own window the honest
// null the top beside - the .168's own F351 precedent the naming
// rode), the +6 the max rise step's own single bound rode ONCE (the
// 0 -> 6 the face 352's own window's second leg), the -7 the max
// fall step's own single bound rode ONCE (the 8 -> 1 the face 381's
// own window's second leg - the top's own relief the same trade two
// windows ride), THE FIELD'S OWN FLOOR THE COUNT ZERO rode TWENTY
// faces (the faces 348/351/353/354/355/357/361/364/367/368/369/
// 371/373/374/375/377/378/379/383/384's own zeros - THE DRIED SKIN
// THE MACHINERY'S OWN REST the zero a lawful count the smelt lane's
// own zero precedent v0.976.90 holds, the .167 delivery's own EIGHT
// zero faces the record beside - the brake never speaks when the
// failures do not chain, the drought the machinery's honest rest
// keeps), THE RECOVERY BRAKE'S OWN BREATH BOOK: the word born
// speaking NINETEEN of THIRTY-SEVEN windows (FIFTEEN swings, THREE
// swells, ONE fade, the EIGHTEEN honest silences beside - THE
// SILENT-HEAVIEST BOOK THE FAMILY HOLDS the climb-out tool
// recovery's own fourteen the record beside), THE THREE SWELLS THE
// BOOK RIDES (the faces 350/359/366's own windows), THE ONE FADE
// (the face 361's own window 5 -> 4 (-1) -> 0 (-4) - the brake's
// own release the full drain rode), THE ONE-WINDOW ROUND TRIPS
// EIGHT - THE MOST ROUND-TRIP BOOK THE FAMILY HOLDS (the faces
// 353/357/358/362/371/372/373/377's own windows - the sword due's
// own six the .169 record beside - THE THREE BACK-TO-BACK ROUND
// TRIPS THE FAMILY'S FIRST the faces 371/372/373's own windows the
// run rides 0 -> 4 -> 0 -> 4 -> 0 the whole field between none).
// ONE SHAPE ONE WORD: the branch law ONE SHAPE ONE WORD - rise then
// rise prices the brake's own swell, fall then fall prices the
// brake's own fade, direction exchange prices the brake's own
// swing, a held step prices no direction - the honest silence (the
// family's own held law: the bars never invent). The byte-pin law:
// the swell's own count THREE, the fade's own count ONE, the
// swing's own count FIFTEEN - the field's own arithmetic the tests
// pin byte-exact.
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
// emits (the decompose's own first recovery brake read - the lane
// the reader never priced before this word).

const BRAKE_RE = /^F\d+ recovery brake: /

/**
 * The cell's own read - the recovery brake's count across the lines.
 * The brake book's own seat's count - the count this word prices
 * across the faces (the whole raw mass the lane prints - every line
 * rides, no exclusion the lane needs).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the recovery brake count (0 when the lines
 *   cannot prove a brake line - the zero a lawful count)
 */
export function recoveryBrakes (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && BRAKE_RE.test(l)) n++
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
 *   { back: {recoveryBrakes}, prev: {recoveryBrakes}, cur: {recoveryBrakes} }
 * @returns {boolean}
 */
export function recoveryBrakeTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.recoveryBrakes) && s.recoveryBrakes >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the brake's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {recoveryBrakes}, prev: {recoveryBrakes}, cur: {recoveryBrakes} }
 * @returns {string|null} the row byte, or null
 */
export function recoveryBrakeTrendRow (e) {
  if (!recoveryBrakeTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.recoveryBrakes - back.recoveryBrakes
  const second = cur.recoveryBrakes - prev.recoveryBrakes
  const arc = `${back.recoveryBrakes} -> ${prev.recoveryBrakes} (${first >= 0 ? '+' : ''}${first}) -> ${cur.recoveryBrakes} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, this word prices the recovery brake's own mass across the faces - the recovery brake's own seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the recovery brake's own trend (v0.976.170): the recovery brake's rise ran two steps deep - ${arc} - the recovery brake's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the recovery brake's own trend (v0.976.170): the recovery brake's fall ran two steps deep - ${arc} - the recovery brake's own fade ${tail}`
  }
  return `the recovery brake's own trend (v0.976.170): the recovery brake's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
