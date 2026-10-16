// (v0.976.163) THE IRON COMMUNE'S OWN RAW COLON TREND - the iron
// commune book's own raw colon seat beside the raw docket words: the
// iron commune's own raw colon mass across the faces (the 'F<n> iron
// commune: ' lines - ONE emitter, one shape, the fleet19's own iron
// commune lines the lane prints; the chest-hold verdicts ('chest
// holds 0 ingot(s) + 0 raw_iron - nothing to complete here'), the
// chest-walk fail lines ('chest walk failed (Took to long to decide
// path to goal!)', 'chest walk failed (No path to the goal!)'), the
// nudge lines ('iron commune: path nudge inside the direct envelope',
// 'iron commune: path nudge approach: 1 segment(s) walked in 15.3s,
// goal now d=7.9 (inside the direct envelope)', 'iron commune: chest
// walk failed after the nudge (Took to long to decide path to
// goal!)'), the budget lines ('budget spent (0/3 units)'), the
// ghost-click lines ('the clicks lied - no ore landed in the pocket
// (ghost clicks)'), the completion lines ('the set is complete (3/3)
// - crafting the pick on the spot', 'the pool funds the set (2 in
// chest) - the withdraw completes it') this book prices - THE RAW
// LAW: every line the lane prints rides, no exclusion the lane
// needs). THE CELL'S OWN WEIGHT 1564u the faces' own total - THE
// FIRE-0142'S OWN NAMED THIRD the five lanes' whole pricing rode (the
// fuel anchor scan's 3370u the .161 word's own the heaviest, the
// sword's whole mass 2458u the .162 word's own the second, the bank's
// raw colon mass 1298u the fourth, the camp furnace's 1164u the fifth
// - the weight whole priced before the take). The read owns the shape
// - one parser per shape (the chestLidBook precedent: the file IS the
// census owner; the walk-lane's own iron commune census cells the
// walk book's own axes never ride - the walk lane a different book;
// the bank's raw colon mass the fourth lane's own seat never rides
// here; the camp furnace's mass the fifth's own seat beside; the
// .159 word's own fuel commons cell never rides; the .160 word's own
// food commons cell never rides; the .161 word's own anchor scan cell
// never rides; the .162 word's own sword cell never rides - the lanes
// never merge).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// iron commune regex's own arithmetic: 348=28, 349=26, 350=23,
// 351=48, 352=31, 353=50, 354=49, 355=59, 356=37, 357=26, 358=22,
// 359=39, 360=66, 361=28, 362=25, 363=45, 364=38, 365=25, 366=31,
// 367=25, 368=81, 369=23, 370=36, 371=39, 372=54, 373=54, 374=42,
// 375=44, 376=31, 377=50, 378=41, 379=52, 380=39, 381=35, 382=46,
// 383=45, 384=41, 385=59, 386=31 - THE CELL'S OWN WEIGHT 1564u the
// faces' own total), THE FIELD'S OWN TOP THE COUNT 81 the face 368's
// own top rode once - the top's own arrival the swing's own back rode
// (31 -> 25 (-6) -> 81 (+56) the trade-then-build the window's own
// shape - the +56 the max rise step's own single bound the same step
// rode), the +56 the max rise step's own single bound rode TWICE two
// legs (the 31 -> 25 -> 81 the face 368's own window's second leg and
// the face 369's own window's first leg the shared leg beside), the
// -58 the max fall step's own single bound rode TWICE two legs (the
// 25 -> 81 -> 23 the face 369's own window's second leg and the face
// 370's own window's first leg the shared leg beside), THE FIELD'S
// OWN FLOOR THE COUNT 22 the face 358's own floor rode once - the
// floor's own arrival the fade's own back rode (37 -> 26 (-11) ->
// 22 (-4)) - ZERO FACES NONE - THE SKIN NEVER DRIED (the tunnel
// docket's own never-dried book and the fuel commons' and the food
// commons' and the anchor scan's and the sword's own never-dried
// books beside), THE IRON COMMUNE'S OWN BREATH BOOK: the word born
// speaking THIRTY-FIVE of THIRTY-SEVEN windows (TWENTY-FIVE swings,
// THREE swells, SEVEN fades, the TWO honest silences beside - the
// faces 373/374's own windows the ONE held leg the two windows share
// the back-to-back pair the family's own second beside, the .159
// word's own pair the mirror beside, the family's own held law the
// bars never invent), THE THREE SWELLS THE BOOK RIDES (the faces
// 360/371/372's own windows - the faces 371/372's own pair the
// back-to-back build beside), THE SEVEN FADES (the faces
// 350/357/358/362/365/381/384's own windows - the face 350's own fade
// the field's own first word the .161 word's own mirror beside, the
// faces 357/358's own pair the back-to-back drain beside, the face
// 384's own fade the last the book speaks), THE ONE-WINDOW ROUND
// TRIP THE BOOK RIDES ONCE (the face 367's own window 25 -> 31 (+6)
// -> 25 (-6) - the .159 word's own pair beside). ONE SHAPE ONE WORD:
// the branch law ONE SHAPE ONE WORD - rise then rise prices the iron
// commune's own swell, fall then fall prices the iron commune's own
// fade, direction exchange prices the iron commune's own swing, a
// held step prices no direction - the honest silence (the family's
// own held law: the bars never invent). The byte-pin law: the swell's
// own count THREE, the fade's own count SEVEN, the swing's own count
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
// emits (the decompose's own first iron commune raw colon read - the
// lane the reader never priced before this word).

const COLON_RE = /^F\d+ iron commune: /

/**
 * The cell's own read - the iron commune's raw colon count across the
 * lines. The iron commune book's own raw colon seat's count - the
 * count this word prices across the faces (the whole raw mass the
 * lane prints - every line rides, no exclusion the lane needs).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the iron commune raw colon count (0 when the
 *   lines cannot prove an iron commune line - the zero a lawful
 *   count)
 */
export function ironCommuneColons (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && COLON_RE.test(l)) n++
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
 *   { back: {ironCommuneColons}, prev: {ironCommuneColons}, cur: {ironCommuneColons} }
 * @returns {boolean}
 */
export function ironCommuneColonTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.ironCommuneColons) && s.ironCommuneColons >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the iron commune's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {ironCommuneColons}, prev: {ironCommuneColons}, cur: {ironCommuneColons} }
 * @returns {string|null} the row byte, or null
 */
export function ironCommuneColonTrendRow (e) {
  if (!ironCommuneColonTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.ironCommuneColons - back.ironCommuneColons
  const second = cur.ironCommuneColons - prev.ironCommuneColons
  const arc = `${back.ironCommuneColons} -> ${prev.ironCommuneColons} (${first >= 0 ? '+' : ''}${first}) -> ${cur.ironCommuneColons} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, this word prices the iron commune's own raw colon mass across the faces - the iron commune's own raw colon seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the iron commune's own trend (v0.976.163): the iron commune's rise ran two steps deep - ${arc} - the iron commune's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the iron commune's own trend (v0.976.163): the iron commune's fall ran two steps deep - ${arc} - the iron commune's own fade ${tail}`
  }
  return `the iron commune's own trend (v0.976.163): the iron commune's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
