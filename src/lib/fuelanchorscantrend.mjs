// (v0.976.161) THE FUEL ANCHOR SCAN'S OWN TREND - the fuel commons
// book's own scan seat beside the raw docket words: the fuel anchor
// scan's own mass across the faces (the 'F<n> fuel anchor scan' lines
// - ONE emitter, one shape, the fleet19's own anchor scans the probe
// prints - THREE line kinds the lane rides whole: the returned-empty
// verdicts ('F<n> fuel anchor scan returned empty (attempt n/n) at
// [x,y,z] yard d=n - the palette empty-return class, the singular
// probe rides first'), the colon verdicts ('F<n> fuel anchor scan:
// the palette read empty xN - the singular probe rescued the scan
// (chest at [x,y,z])'), the bare-empty verdicts ('F<n> fuel anchor
// scan empty xN - the singular probe found nothing either') - THE RAW
// LAW: every line the lane prints rides, no exclusion the lane needs).
// THE CELL'S OWN WEIGHT 3370u the faces' own total - THE FIRE-0142'S
// OWN NAMED HEAVIEST the five lanes' own whole pricing rode (the
// sword's whole mass 2458u the second, the iron commune's raw colon
// mass 1564u the third, the bank's raw colon mass 1298u the fourth,
// the camp furnace's 1164u the fifth - the weight whole priced before
// the take). THE LANE'S OWN BORDER: the 'F<n> fuel anchor: ' delivery
// verdicts (the final-leg seat's own '0 delivered at arrival' and
// 'skipped' lines the sub-doom gate prints) a different lane never
// ride - the scan never delivers, the delivery lane the beside-seat
// the next carrier prices. The read owns the shape - one parser per
// shape (the chestLidBook precedent: the file IS the census owner;
// the fuel commons' own raw docket mass the .159 word's own cell a
// different lane never rides - the scan never commons; the docket's
// own food commons verdicts the .160 word's own cell never rides; the
// sword's own lines the sworddue.mjs module's own census a different
// book never rides; the walk-lane census cells the walk book's own
// axes never ride; the fuel drought's own class the no-fuel trend's
// own cell never rides).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// fuel anchor scan regex's own arithmetic: 348=94, 349=84, 350=62,
// 351=84, 352=70, 353=128, 354=94, 355=104, 356=98, 357=98, 358=86,
// 359=122, 360=88, 361=80, 362=70, 363=74, 364=58, 365=78, 366=80,
// 367=88, 368=68, 369=96, 370=80, 371=94, 372=104, 373=60, 374=86,
// 375=96, 376=108, 377=58, 378=112, 379=64, 380=118, 381=82, 382=92,
// 383=72, 384=74, 385=74, 386=92 - THE CELL'S OWN WEIGHT 3370u the
// faces' own total), THE FIELD'S OWN TOP THE COUNT 128 the face 353's
// own top rode once - the top's own arrival the swing's own back rode
// (84 -> 70 (-14) -> 128 (+58) the trade-then-surcharge the window's
// own shape - the +58 the max rise step's own single bound the same
// step rode), the -50 the max fall step's own single bound rode ONCE
// two legs (the 108 -> 58 the drain the face 377's own window's
// second leg and the face 378's own window's first leg the shared leg
// beside), THE FIELD'S OWN FLOOR THE COUNT 58 rode TWICE (the faces
// 364/377's own floors - the face 364's own floor the drain rode (70
// -> 74 (+4) -> 58 (-16)), the face 377's own floor the max fall's
// own bound rode), the floor's own trade one window deep the rebuild
// the face 378's own window rode (108 -> 58 (-50) -> 112 (+54) the
// floor -> the rebuild) - ZERO FACES NONE - THE SKIN NEVER DRIED (the
// tunnel docket's own never-dried book and the fuel commons' own raw
// docket book the companions beside), THE FUEL ANCHOR SCAN'S OWN
// BREATH BOOK: the word born speaking THIRTY-THREE of THIRTY-SEVEN
// windows (TWENTY-FIVE swings, FIVE swells, THREE fades, the FOUR
// honest silences beside - TWO back-to-back pairs the faces 357/358's
// own and the faces 385/386's own windows hold, the family's own
// first two-pair book the .159 word's own pair the mirror beside, the
// family's own held law the bars never invent), THE FIVE SWELLS THE
// BOOK RIDES (the faces 366/367/372/375/376's own windows), THE THREE
// FADES (the faces 350/361/362's own windows - the face 350's own
// fade the field's own first word, the face 362's own fade the last
// the book speaks), THE ONE-WINDOW ROUND TRIP THE BOOK RIDES ONCE
// (the face 351's own window 84 -> 62 (-22) -> 84 (+22) - the .159
// word's own none beside, the climb-out food trip's own three
// beside). ONE SHAPE ONE WORD: the branch law ONE SHAPE ONE WORD -
// rise then rise prices the fuel anchor scan's own swell, fall then
// fall prices the fuel anchor scan's own fade, direction exchange
// prices the fuel anchor scan's own swing, a held step prices no
// direction - the honest silence (the family's own held law: the bars
// never invent). The byte-pin law: the swell's own count FIVE, the
// fade's own count THREE, the swing's own count TWENTY-FIVE - the
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
// emits (the decompose's own first fuel anchor scan read - the lane
// the reader never priced before this word).

const SCAN_RE = /^F\d+ fuel anchor scan(:| )/

/**
 * The cell's own read - the fuel anchor scan count across the
 * lines. The fuel commons book's own scan seat's count - the count
 * this word prices across the faces (the whole scan mass the probe
 * prints - all THREE line kinds ride, no exclusion the lane needs).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the fuel anchor scan count (0 when the lines
 *   cannot prove a fuel anchor scan line - the zero a lawful
 *   count)
 */
export function fuelAnchorScans (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && SCAN_RE.test(l)) n++
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
 *   { back: {fuelAnchorScans}, prev: {fuelAnchorScans}, cur: {fuelAnchorScans} }
 * @returns {boolean}
 */
export function fuelAnchorScanTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.fuelAnchorScans) && s.fuelAnchorScans >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the fuel anchor scan's own two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {fuelAnchorScans}, prev: {fuelAnchorScans}, cur: {fuelAnchorScans} }
 * @returns {string|null} the row byte, or null
 */
export function fuelAnchorScanTrendRow (e) {
  if (!fuelAnchorScanTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.fuelAnchorScans - back.fuelAnchorScans
  const second = cur.fuelAnchorScans - prev.fuelAnchorScans
  const arc = `${back.fuelAnchorScans} -> ${prev.fuelAnchorScans} (${first >= 0 ? '+' : ''}${first}) -> ${cur.fuelAnchorScans} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons' own raw docket trend prices the food commons' own raw docket mass across the faces, this word prices the fuel anchor scan's own mass across the faces - the fuel anchor scan's own seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the fuel anchor scan's own trend (v0.976.161): the fuel anchor scan's rise ran two steps deep - ${arc} - the fuel anchor scan's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the fuel anchor scan's own trend (v0.976.161): the fuel anchor scan's fall ran two steps deep - ${arc} - the fuel anchor scan's own fade ${tail}`
  }
  return `the fuel anchor scan's own trend (v0.976.161): the fuel anchor scan's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
