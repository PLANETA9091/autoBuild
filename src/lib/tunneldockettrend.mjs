// (v0.976.158) THE DOCKET'S OWN TUNNEL TREND - the docket book's
// own tunnel seat beside the docket's own food trip word: the
// docket's own tunnel verdict mass across the faces (the
// 'F<n> tunnel: <verdict>' lines - ONE emitter, one shape, the
// fleet19's own tunnel verdicts the docket prints; the blocks lines
// ('<n> blocks (branch mine at the floor...)'), the seal plan lines,
// the water-lock census lines, the steering lines this book prices).
// THE CELL'S OWN WEIGHT 7911u the faces' own total - THE HEAVIEST
// WORD THE FIELD HOLDS (the climb-out bank's 729u the heaviest
// beside, the fuel commons' own raw docket mass 10426u the field's
// own unpriced heaviest the next carrier beside). The tunnel lane
// holds no climb-refused class - the refused shape the three trip
// lanes' own byte the .147 word's own cell rides - the whole verdict
// mass this read prices, no exclusion the lane needs. The read owns
// the shape - one parser per shape (the chestLidBook precedent: the
// file IS the census owner; the docket's own food trip verdicts the
// .157 word's own cell a different lane never rides - the lanes
// never merge; the climb out skins the climb-out book's own cells
// never ride - the climb-out never tunnels; the bank trip grant
// lines the banktriptrend.mjs module's own book a different lane
// never rides; the walk-lane census cells the walk book's own axes
// never ride; the fuel commons' own raw docket mass a different lane
// never priced by this read - the next carrier beside).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// tunnel docket regex's own arithmetic: 348=117, 349=157, 350=116,
// 351=177, 352=206, 353=364, 354=100, 355=219, 356=193, 357=328,
// 358=294, 359=458, 360=235, 361=139, 362=185, 363=213, 364=231,
// 365=189, 366=223, 367=255, 368=178, 369=251, 370=196, 371=288,
// 372=242, 373=167, 374=105, 375=137, 376=259, 377=21, 378=226,
// 379=121, 380=326, 381=84, 382=266, 383=102, 384=222, 385=169,
// 386=152 - THE CELL'S OWN WEIGHT 7911u the faces' own total), THE
// FIELD'S OWN TOP THE COUNT 458 the face 359's own top rode once -
// the top's own arrival the swing's own back rode (294 -> 458 (+164)
// -> 235 (-223) the surcharge-and-drain the window's own shape - no
// silent arrival the bank's own face 356 beside), the +205 the max
// rise step's own bound rode TWO steps FOUR legs (the 21 -> 226 the
// floor's own rebuild the face 378's own window's second leg and the
// face 379's own window's first leg the shared leg beside, the 121
// -> 326 the mirror step the face 380's own window's second leg and
// the face 381's own window's first leg the shared leg beside), the
// -264 the max fall step's own single bound rode ONCE two legs (the
// 364 -> 100 the drain the face 354's own window's second leg and
// the face 355's own window's first leg the shared leg beside), THE
// FIELD'S OWN FLOOR THE COUNT 21 the face 377's own floor rode once
// - the floor's own arrival the drain rode (137 -> 259 (+122) -> 21
// (-238) the surcharge-and-drain), the floor's own trade one window
// deep the rebuild the face 378's own window rode (259 -> 21 (-238)
// -> 226 (+205) the floor -> the max rise's own bound) - ZERO FACES
// NONE - THE SKIN NEVER DRIED (the trip skin's own never-dried book
// the companion beside), THE TUNNEL DOCKET'S OWN BREATH BOOK: the
// word born speaking ALL THIRTY-SEVEN windows (TWENTY-SEVEN swings,
// SIX swells, FOUR fades, the ZERO honest silences beside) - THE
// NEVER-SILENT BOOK THE FAMILY HOLDS (every window the field holds
// speaks a direction - the food trip docket's own thirteen-silence
// book and the climb-out food trip's own fifteen-silence book the
// silent-heaviest books the contrast beside, the family's own held
// law the bars never invent), THE SIX SWELLS THE BOOK RIDES (the
// faces 352/353/363/364/367/376's own windows), THE FOUR FADES (the
// faces 361/373/374/386's own windows - the face 386's own fade the
// book's own last word), THE ONE-WINDOW ROUND TRIPS NONE (the book
// never trades one window deep - the climb-out food trip's own three
// beside, the food trip docket's own three beside). ONE SHAPE ONE
// WORD: the branch law ONE SHAPE ONE WORD - rise then rise prices
// the tunnel docket's own swell, fall then fall prices the tunnel
// docket's own fade, direction exchange prices the tunnel docket's
// own swing, a held step prices no direction - the honest silence
// (the family's own held law: the bars never invent). The byte-pin
// law: the swell's own count SIX, the fade's own count FOUR, the
// swing's own count TWENTY-SEVEN - the field's own arithmetic the
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
// emits (the decompose's own first tunnel read - the lane the reader
// never priced before this word).

const DOCKET_RE = /^F\d+ tunnel: /

/**
 * The cell's own read - the tunnel docket verdict count across
 * the lines. The docket book's own tunnel seat's count - the
 * count this word prices across the faces (the 'tunnel:'
 * verdicts - one emitter, one shape; the whole verdict mass the
 * lane holds - the tunnel lane no climb-refused class rides).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the tunnel docket count (0 when the lines
 *   cannot prove a tunnel docket verdict - the zero a lawful
 *   count)
 */
export function tunnelDockets (lines) {
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
 *   { back: {tunnelDockets}, prev: {tunnelDockets}, cur: {tunnelDockets} }
 * @returns {boolean}
 */
export function tunnelDocketTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.tunnelDockets) && s.tunnelDockets >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the tunnel docket's own two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {tunnelDockets}, prev: {tunnelDockets}, cur: {tunnelDockets} }
 * @returns {string|null} the row byte, or null
 */
export function tunnelDocketTrendRow (e) {
  if (!tunnelDocketTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.tunnelDockets - back.tunnelDockets
  const second = cur.tunnelDockets - prev.tunnelDockets
  const arc = `${back.tunnelDockets} -> ${prev.tunnelDockets} (${first >= 0 ? '+' : ''}${first}) -> ${cur.tunnelDockets} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, this word prices the docket's own tunnel verdict mass across the faces - the docket's own tunnel seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the tunnel docket's own trend (v0.976.158): the tunnel docket's rise ran two steps deep - ${arc} - the tunnel docket's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the tunnel docket's own trend (v0.976.158): the tunnel docket's fall ran two steps deep - ${arc} - the tunnel docket's own fade ${tail}`
  }
  return `the tunnel docket's own trend (v0.976.158): the tunnel docket's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
