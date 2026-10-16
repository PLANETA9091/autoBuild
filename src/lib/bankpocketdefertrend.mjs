// (v0.976.148) THE BANK POCKET'S OWN DEFER TREND - the bank book's own
// pocket-defer seat: the bank pocket's own defer mass across the
// faces (the 'F<n> <bot> final bank deferred: night (tod=...) - the
// pocket rides out the dark alive (the v0.140.1 night hold)' lines -
// ONE emitter, one shape, the fleet19's own pocket ride-out the night
// hold prints; the bank pocket's own caught breath - every final
// defer the fleet printed to ride the dark out alive, the pocket's
// own hold the night's own levy). The read owns the shape - one
// parser per shape (the chestLidBook precedent: the file IS the
// census owner; the bank trip defer shape the bank chain's own defer
// trend prices (v0.976.144) - a different cell, the cells never
// merge; the .144 read EXCLUDED this shape by name - the exclusion
// holds, this seat the named-next beside; the docket's own trip
// climb-refused verdicts the docket's own trip climb-refused trend
// prices (v0.976.147) - a different cell, the cells never merge; the
// 'bank trip: deferred' trip defers and the budget-spent verdicts and
// the grants different shapes, never priced by this read).
//
// The field priced every face by hand THIRTY-NINE faces deep (the
// pocket regex's own arithmetic: 348=11, 349=15, 350=12, 351=6,
// 352=9, 353=12, 354=6, 355=13, 356=14, 357=10, 358=13, 359=10,
// 360=1, 361=11, 362=10, 363=13, 364=15, 365=8, 366=1, 367=11,
// 368=6, 369=10, 370=14, 371=11, 372=5, 373=10, 374=2, 375=12,
// 376=9, 377=3, 378=5, 379=11, 380=12, 381=13, 382=13, 383=0,
// 384=13, 385=2, 386=9 - THE CELL'S OWN WEIGHT 361u the faces' own
// total across the priced faces - THE BANK BOOK'S OWN HEAVIEST CAUGHT
// BREATH the trip defer's own 52u the seventh beside, the pocket's
// own mass the night hold's own levy the fleet pays every face), THE
// FIELD'S OWN TOP the count 15 rode TWICE (the faces 349/364's own
// tops - the levy's own heavy pair), the +13 the face 384's own
// window's second leg the max rise step's own single bound (the 0 ->
// 13 the rebuild), the -13 the face 384's own window's first leg the
// max fall step's own bound (the 13 -> 0 the collapse) - THE
// ONE-WINDOW ROUND TRIP THE FACE 384'S OWN WINDOW RODE WHOLE (the 13
// -> 0 -> 13 the full trade both bounds one window deep - the food
// commons lane's own F369 round trip the face beside, the family's
// own second), THE FIELD'S OWN FLOOR the ZERO the face 383's own
// count rode once - THE DROUGHT'S OWN SINGLE FACE (the trip defer's
// own nine zero faces and the walk fuel commons's none beside; the
// near-droughts the faces 360/366's own counts 1 the levy's own
// rests) - THE BANK POCKET'S OWN BREATH BOOK: the word born speaking
// THIRTY-FIVE of THIRTY-SEVEN windows (TWENTY-THREE swings, SEVEN
// swells, FIVE fades, the TWO honest silences beside - THE DENSEST
// BOOK THE FAMILY HOLDS the walk total's own thirty-five beside, THE
// SWING HEAD the food commons lane's own twenty-two beside - the
// twenty-three trades the heaviest trade book the family holds).
//
// The seat law: the bank book's own anatomy the fleet's own lines
// hold - the bank trip grant lines the bank trip grant's own trend
// prices (the chain's own first link), the bank trip defer lines the
// bank chain's own defer trend prices (the chain's own caught
// breath), the docket's own trip climb-refused verdicts the docket's
// own trip climb-refused trend prices, this word prices the
// 'final bank deferred: night' pocket defers (the pocket's own
// ride-out mass); the budget-spent verdicts the budget spread's own
// word prices, the bank decide's own trend prices the docket's own
// door decide - a different census; the cells never merge
// (co-existence by seat never by duplication). The branch law: ONE
// SHAPE ONE WORD - rise then rise prices the bank pocket defer's own
// swell, fall then fall prices the bank pocket defer's own fade, a
// traded direction prices the bank pocket defer's own swing, a held
// step (any count-to-count zero) prices the honest silence (a held
// count is no direction - the bars never invent; the watertrend
// family's own held law; the priced field rode TWO held windows the
// silences' own count). The byte-pin: the trend row never speaks the
// shape's own verdict words (no return, no repeat, no stay, no run)
// nor the seats' own verdict word (no owns) nor the dynasty's own
// (no dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats - the names ride by
// law, the neighbor skins never ride.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain
// v0.976.34 through the walk food commons's own v0.976.146). The
// fold receives the bank pocket defer count per face (this file owns
// the parse - one-parser law: the same read runs over each face's
// own lines, never a fork). No two-back face given -> no read (the
// carrier's own null pass); the cell's own zero is no fence - a
// zero-defer face rides a lawful count (the smelt lane's own zero
// precedent v0.976.90; the priced field rode ONE zero face - the
// drought's own single face, the law the field exercised).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

const POCKET_RE = /^F\d+ final bank deferred: night \(tod=/

/**
 * The cell's own read - the bank pocket defer count across the lines.
 * The bank book's own pocket-defer seat's count - the count this word
 * prices across the faces (the 'final bank deferred: night' pocket
 * ride-outs - one emitter, one shape).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the bank pocket defer count (0 when the lines
 *   cannot prove a pocket defer - the zero a lawful count)
 */
export function bankPocketDefers (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && POCKET_RE.test(l)) n++
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
 *   { back: {bankPocketDefers}, prev: {bankPocketDefers}, cur: {bankPocketDefers} }
 * @returns {boolean}
 */
export function bankPocketDeferTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.bankPocketDefers) && s.bankPocketDefers >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the bank pocket defer's own two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {bankPocketDefers}, prev: {bankPocketDefers}, cur: {bankPocketDefers} }
 * @returns {string|null} the row byte, or null
 */
export function bankPocketDeferTrendRow (e) {
  if (!bankPocketDeferTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.bankPocketDefers - back.bankPocketDefers
  const second = cur.bankPocketDefers - prev.bankPocketDefers
  const arc = `${back.bankPocketDefers} -> ${prev.bankPocketDefers} (${first >= 0 ? '+' : ''}${first}) -> ${cur.bankPocketDefers} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, this word prices the bank pocket's own defer mass across the faces - the bank book's own pocket-defer seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the bank pocket defer's own trend (v0.976.148): the bank pocket defer's rise ran two steps deep - ${arc} - the bank pocket defer's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the bank pocket defer's own trend (v0.976.148): the bank pocket defer's fall ran two steps deep - ${arc} - the bank pocket defer's own fade ${tail}`
  }
  return `the bank pocket defer's own trend (v0.976.148): the bank pocket defer's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
