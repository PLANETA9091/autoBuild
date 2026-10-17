// (v0.976.195) THE SMELT MACHINE WALK'S OWN NUDGE TREND - the smelt
// attempt's own walk-leg mass across the faces beside the raw lane
// words: the F432's own census named the walk's own seat (the smelt
// refusal census 'machine unreachable 4, cannot open 2, no fuel 1 of
// 7 refused attempts' the healed chain prices, the pre-position
// census 'armed 16, landed 2 (+246u), failed 24' the walks' own tax
// beside) - the walk nudge's own lines ('[F<n>] walk nudge: <verdict>'
// - ONE emitter (smelting.mjs's own machine walk nudge, the
// approachWalk's own receipt at the last naked walk site the v0.147.0
// cure built), one shape, the BRACKET voice the smelt walk prints
// only - THE RAW LAW: every line the shape prints rides, no exclusion
// the shape needs; the four verdict tails never split (the approach
// skin, the inside skin, the closed skin, the stall side-step skin)
// - the line's own count rides whole whatever the verdict's name
// (the .192's own law co-exists by seat); the bare form never rode
// the whole cache - zero untagged lines the field holds).
// THE CELL'S OWN WEIGHT 1016u the thirty-nine faces' own total - the
// raw hop fail's own 1797u the heavier sibling beside (the .191
// word's own cell), the smelt dry gamble's own 257u the lighter
// sibling beside (the .192 word's own cell) - this word's own skin
// the mid-heavy weight the machine walks price.
// THE FIELD'S OWN TOP THE COUNT 66 rode ONCE (the face 368's own
// crest - THE STORM the book holds), THE FIELD'S OWN FLOOR THE COUNT
// ZERO rode ONCE (the face 359's own floor - THE ONE DROUGHT). The
// breath book THIRTY-FIVE of THIRTY-SEVEN windows speaking (TWENTY
// swings, THREE swells, TWELVE fades, the TWO honest silences - THE
// PAIR the faces 374/375 hold the held steps chain in twos). THE TWIN
// SIX-SWING RUNS the faces 360..365 and 368..373 hold - THE RECORD
// THE BOOK RIDES (the pair 351/352 and the six solos beside). THE
// TWIN TRIPLE FADE RUNS the faces 357..359 and 384..386 hold (the
// tail's own triple the closer rides), the PAIR 366/367 beside, the
// four solo fades 350/353/376/380 beside; the THREE swell solos
// 355/378/382 never chain (the zero back-to-back swell pairs the
// honest spread rides). THE ZERO ROUND TRIPS the book holds (the
// swings never mirrored - the sweep defer's own EIGHT the record the
// mirror beside). THE BOUNDS' OWN LEGS: the +61 the max rise rode ONE
// leg ONE boundary (the boundary 359/360 - THE DROUGHT'S OWN CLIMB
// the floor 0 the climb prices), the -56 the max fall rode ONE leg
// ONE boundary (the boundary 368/369 - THE STORM'S OWN DRAIN the top
// paid near-whole 66 -> 10); the last word the face 386's own window
// the fade (26 -> 23 (-3) -> 13 (-10) the tail's own triple rides out
// on).
// THE WHOLE-CACHE SEAT 1346u the fifty-six faces the cache holds -
// the face 432's own 22u the newest add rides (the W432 window the
// swing 16 -> 0 (-16) -> 22 (+22) MY WORD'S OWN FIRST LIVE READ the
// nearest-completed law holds - the absent 419/424/428 the honest
// gaps ride; THE WHOLE-CACHE TOP THE COUNT 72 rode ONCE the face
// 418's own crest - THE WHOLE-CACHE STORM above the birth's own 66
// the same book prices, the +66 the gap-crossing step the W417 window
// holds and its -66 mirror the next window rides - THE ROUND TRIP
// ACROSS THE GAP the weight-66 mirror the honest 419 ride holds);
// THE WHOLE-CACHE FLOOR THE ZERO rode TWICE (the faces 359/431's own
// droughts - the birth floor and MY WORD'S OWN NEWEST DROUGHT the
// F431 face holds, the healthy fleet's own honest zero the vertical
// doom's instant verdicts priced beside); the face 347's own 16u the
// pre-field face beside.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain).
// The fold receives the walk nudge's own mass per face (walkNudges
// owns the read - one-parser law: the same read runs over each face's
// own lines, never a fork). No two-back face given -> no read (the
// carrier's own null pass); the walk nudge's own zero is no fence - a
// zero-drought face rides a lawful count (the lean law the zero
// rides, the smelt lane's own zero precedent v0.976.90).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// nudge's own swell, fall then fall prices the nudge's own fade, a
// traded direction prices the nudge's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held nudge mass
// is no direction - the bars never invent; the watertrend family's
// own held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first walk nudge read - the lane the
// reader never priced before this word; the fuel commons lane's own
// path nudge approach lines the nudgebook's own cell prices beside -
// the single-tag anatomy a different lane, the lanes never merge;
// the nudge approach verdicts census row the decompose's own block
// prices beside never rides; the pre-position walk-home announcements
// the bankcensus's own lane prices beside never ride).

const WALK_NUDGE_RE = /^\[F\d+\] walk nudge: .+$/

/**
 * The cell's own read - the walk nudge's own mass across the lines.
 * One parser per shape: the strict bracket grammar the smelt walk's
 * own emitter prints (the verdict tails never split - the approach
 * skin, the inside skin, the closed skin, the stall side-step skin
 * the same shape's own skins, the line's own count rides whole);
 * the fuel commons lane's own path nudge lines never ride (the
 * nudgebook's own cell), the torn line never rides (the grammar
 * strict - the bare form never rode the whole cache).
 *
 * @param {string[]} [lines]
 * @returns {number} the nudge mass (0 when the lane never spoke - the
 *   honest drought's own zero)
 */
export function walkNudges (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && WALK_NUDGE_RE.test(l)) n++
  }
  return n
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own honest zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {walkNudges}, prev: {walkNudges}, cur: {walkNudges} }
 * @returns {boolean}
 */
export function walkNudgeTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.walkNudges) && s.walkNudges >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the walk nudge's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {walkNudges}, prev: {walkNudges}, cur: {walkNudges} }
 * @returns {string|null} the row byte, or null
 */
export function walkNudgeTrendRow (e) {
  if (!walkNudgeTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.walkNudges - back.walkNudges
  const second = cur.walkNudges - prev.walkNudges
  const arc = `${back.walkNudges} -> ${prev.walkNudges} (${first >= 0 ? '+' : ''}${first}) -> ${cur.walkNudges} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, this word prices the walk nudge's own mass across the faces - the smelt machine walk's own nudge seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the walk nudge trend (v0.976.195): the nudge's rise ran two steps deep - ${arc} - the nudge's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the walk nudge trend (v0.976.195): the nudge's fall ran two steps deep - ${arc} - the nudge's own fade ${tail}`
  }
  return `the walk nudge trend (v0.976.195): the nudge's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
