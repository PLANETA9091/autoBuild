// (v0.976.153) THE TOOL RECOVERY'S OWN TREND - the strict 'tool
// recovery:' emitter's own seat: the tool recovery's own mass across
// the faces (the 'F<n> <bot> tool recovery: <reason>' lines - ONE
// emitter, one shape, the toolrecovery.mjs module's own book - the
// no-pickaxe triggers, the spare craft failures, the surfaced
// outcomes, the other reasons beside). The read owns the shape - one
// parser per shape (the chestLidBook precedent: the file IS the
// census owner; the strict 'tool recovery:' emitter lines THIS word
// prices, the anatomy byte-true: the no-pickaxe triggers 230, the
// spare craft failures 113, the surfaced outcomes 115, the other
// reasons 224 - THE CELL'S OWN WEIGHT 682u the faces' own total; the
// climb out (tool recovery) verdicts the climb-out tool recovery
// word's own cell (v0.976.149) - a different shape the cells never
// merge, THIS read never rides the climb-out lines; the climb out
// (bank) / (trip) / (wood trip) / (food trip) skins different cells
// (the bank skin the climb-out bank word's own cell v0.976.150, the
// others the unowned seats beside) never priced by this read; the
// pre-position climb's own riders census (v0.811.0) a different
// anatomy, the census never merges; the climbrefusal WHY census
// (v0.691.0) a different book again).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// strict tool recovery regex's own arithmetic: 348=16, 349=24,
// 350=16, 351=4, 352=28, 353=20, 354=16, 355=12, 356=20, 357=8,
// 358=8, 359=48, 360=28, 361=8, 362=20, 363=16, 364=0, 365=8,
// 366=28, 367=12, 368=24, 369=0, 370=24, 371=8, 372=20, 373=16,
// 374=8, 375=8, 376=24, 377=42, 378=12, 379=8, 380=40, 381=20,
// 382=32, 383=4, 384=12, 385=28, 386=12 - THE CELL'S OWN WEIGHT
// 682u the faces' own total), THE FIELD'S OWN TOP the count 48 the
// face 359's own top rode once - THE TOP'S OWN SILENT ARRIVAL the
// face 359's window rode (the held first step priced the window's
// silence the top the window's second leg 8 -> 48, the held law kept
// quiet - the bank skin's own face 356 and the food commons lane's
// own face 368 the silent arrivals beside), the +40 the face 359's
// own window's second leg the max rise step's own single bound (the
// 8 -> 48 the burst), the -30 the face 378's own window's second leg
// the max fall step's own bound (the 42 -> 12 the storm's own drain),
// THE FIELD'S OWN FLOOR THE ZERO rode TWICE (the faces 364/369's own
// drought pair five apart - the drought's own two visits), THE TOOL
// RECOVERY'S OWN BREATH BOOK: the word born speaking THIRTY-THREE of
// THIRTY-SEVEN windows (TWENTY-THREE swings, THREE swells, SEVEN
// fades, the FOUR honest silences beside - the swing head second
// beside the climb-out bank's own twenty-four), THE THREE ONE-WINDOW
// ROUND TRIPS THE FIRST BOOK RIDES THREE (the face 350's own window
// 16 -> 24 (+8) -> 16 (-8), the face 370's own window 24 -> 0 (-24)
// -> 24 (+24) - THE COLLAPSE-AND-REBUILD WHOLE the drought rode
// mid-trip the full trade one window deep, the face 386's own window
// 12 -> 28 (+16) -> 12 (-16) - every prior book rode ONE or TWO, the
// climb-out bank's own two the record beside - THIS book rides
// THREE).
//
// The seat law: the strict emitter's own anatomy the fleet's own
// lines hold - the 'tool recovery:' lines THIS word prices (the
// shape's own mass across the faces), the climb-out tool-recovery
// verdicts the climb-out tool recovery word's own cell (v0.976.149)
// different cells never priced by this read (co-existence by seat
// never by duplication). The branch law: ONE SHAPE ONE WORD - rise
// then rise prices the tool recovery's own swell, fall then fall
// prices the tool recovery's own fade, direction exchange prices the
// tool recovery's own swing, a held step prices no direction - the
// honest silence (the family's own held law: the bars never invent).
// The byte-pin law: the swell's own count THREE, the fade's own
// count SEVEN, the swing's own count TWENTY-THREE - the field's own
// arithmetic the tests pin byte-exact.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// - the fold receives back/prev/cur the faces' own counts; the
// missing leg prices nothing - no back face -> no read (the
// carrier's own null pass); the cell's own zero is no fence - a
// lawful count (the smelt lane's own zero precedent v0.976.90, the
// priced field's own drought pair beside)).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

const SKIN_RE = /^F\d+ tool recovery: /

/**
 * The cell's own read - the strict tool recovery count across the
 * lines. The tool recovery's own seat's count - the count this word
 * prices across the faces (the 'tool recovery:' emissions - one
 * emitter, one shape).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the strict tool recovery count (0 when the lines
 *   cannot prove a tool recovery emission - the zero a lawful count)
 */
export function toolRecoveries (lines) {
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
 *   { back: {toolRecoveries}, prev: {toolRecoveries}, cur: {toolRecoveries} }
 * @returns {boolean}
 */
export function toolRecoveryTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.toolRecoveries) && s.toolRecoveries >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the tool recovery's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {toolRecoveries}, prev: {toolRecoveries}, cur: {toolRecoveries} }
 * @returns {string|null} the row byte, or null
 */
export function toolRecoveryTrendRow (e) {
  if (!toolRecoveryTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.toolRecoveries - back.toolRecoveries
  const second = cur.toolRecoveries - prev.toolRecoveries
  const arc = `${back.toolRecoveries} -> ${prev.toolRecoveries} (${first >= 0 ? '+' : ''}${first}) -> ${cur.toolRecoveries} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, this word prices the strict 'tool recovery:' emitter's own mass across the faces - the tool recovery's own seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the tool recovery's own trend (v0.976.153): the tool recovery's rise ran two steps deep - ${arc} - the tool recovery's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the tool recovery's own trend (v0.976.153): the tool recovery's fall ran two steps deep - ${arc} - the tool recovery's own fade ${tail}`
  }
  return `the tool recovery's own trend (v0.976.153): the tool recovery's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
