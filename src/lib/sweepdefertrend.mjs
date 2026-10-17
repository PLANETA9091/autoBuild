// (v0.976.190) THE SWEEP LANE'S OWN DEFER TREND - the sweep lane's
// own defer mass across the faces beside the raw lane words: the
// F429's own census named the smelt chain's tax first ('smelt
// refusal census: cannot open 3, machine unreachable 2 of 5 refused
// attempts - the smelt chain names its tax' the census's own
// evidence rides, the F427's own machine unreachable 18 no fuel 5 of
// 23 the heavier mirror behind) - the sweep's own defers the
// machines' own visit lanes hold (the '[F<n>] sweep deferred (the
// lanes hold) - the 12s cooldown outlives the census clock (<n>
// machine(s) untried, the next pass owns them)' lines - ONE emitter
// (the smelting lane's own sweep defer, the cooldown's own gate
// prices the pass), one shape, the BRACKET voice the sweep lane
// prints only - every line the shape prints rides, no exclusion the
// shape needs; the bare form never rode the whole cache - zero
// untagged lines the field holds).
// THE CELL'S OWN WEIGHT 46u the thirty-nine faces' own total - the
// bank budget clamp's own 220u the sibling beside (the .188 word's
// own cell), the wet-wall yield's own 126u beside (the .186 word's
// own cell) - this word's own skin the light weight the machine
// lanes price.
// THE FIELD'S OWN TOP THE COUNT 6 rode TWICE (the faces 372/380's
// own crests - THE DOUBLE STORM the book holds), THE FIELD'S OWN
// FLOOR THE COUNT ZERO rode FIFTEEN times (the faces 349/351/353/
// 355/359/365/366/367/369/370/374/375/379/382/384's own floors - THE
// FIFTEEN DROUGHTS the sweep lane's own honest gaps ride). THE
// SEVEN-SILENCE RUN the faces 362..368's own windows the longest
// drought this book holds (the drought's own spine rides - the wwy's
// own quad the mirror beside, the bfcu's own thirty-seven the
// heaviest record the family holds). THE EIGHT ROUND TRIPS the faces
// 351/352/353/355/369/373/383/384 hold - THE ROUND-TRIP RECORD THE
// FAMILY HOLDS (the bank budget clamp's own four the .188 record the
// mirror beside - EIGHT the new record, every one mirrored, none
// back-to-back: the gaps 2/2/14/4/10 the spread rides). THE ONE
// swell the face 372's own window holds (0 -> 1 (+1) -> 6 (+5) - the
// storm's own arrival the lone swell rides), the TWO fades the faces
// 374/382's own windows hold every one identical (6 -> 1 (-5) -> 0
// (-1) - THE MIRRORED FADE PAIR the storm's own drain rides). THE
// BOUNDS' OWN LEGS: the +6 the max rise rode TWO legs ONE boundary
// (the boundary 379/380 - THE STORM'S OWN CLIMB), the -5 the max
// fall rode FOUR legs TWO boundaries (the boundaries 372/373 and
// 380/381 - THE STORMS' OWN DRAINS the crest 6 the floor 1); the
// last word the face 386's own window the honest silence (0 -> 2
// (+2) -> 2 (0) the held second leg the row never invents). THE
// WHOLE-CACHE SEAT 60u the faces the cache holds - the face 429's
// own 0u the newest add rides (the W429 window the round trip 0 ->
// 3 (+3) -> 0 (-3) MY WORD'S OWN FIRST LIVE READ the
// nearest-completed law holds - the absent 428 the honest gap rides;
// the W427 window the swing 3 -> 0 (-3) -> 3 (+3) the mirror beside;
// the face 425's own 3u the post field holds). ONE SHAPE ONE WORD:
// src/lib/sweepdefertrend.mjs (sweepDefers + sweepDeferTrendConsistent
// + sweepDeferTrendRow, byte-pin no return no repeat no stay no run
// no owns no dynasty no turn, the tail names the neighbor seats incl.
// the dusk bank front's own whys trend the newest sibling and the
// bank budget clamp's own trend beside, the fence never rejects
// extra keys) + the decompose wire right after the dusk bank front's
// own wire (variable sd beside their wow, the fold rides
// sweepDefers's own read - one parser, never a second; the
// decompose's own first sweep defer read the lane the reader never
// priced before this word). Bump law held: the origin raw read
// 0.976.189 stood at bump time (the dusk bank front's own whys trend
// b2c1178d theirs - the seat race the SEVENTEENTH rode post-dispatch)
// - 0.976.190 free - taken zero version race.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first sweep defer read - the lane the
// reader never priced before this word; the walk-fail's own defer
// bucket the walkfail's own book prices beside - the bucket lens the
// why-split's own precedent co-exists by seat, the lanes never
// merge).

const SWEEP_DEFER_RE = /^\[F\d+\] sweep deferred \(the lanes hold\)/

/**
 * The cell's own read - the sweep lane's own defer count across the
 * lines. One parser per shape: the sweep lane's own defer seat, the
 * sweep verdicts the walkfail's own book prices never ride (the
 * lanes never merge - the 'sweep: 0 collected' verdicts a different
 * lane), the walk-fail buckets the walkfail's own book prices beside.
 */
export function sweepDefers (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && SWEEP_DEFER_RE.test(l)) n++
  }
  return n
}

export function sweepDeferTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.sweepDefers) && s.sweepDefers >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

export function sweepDeferTrendRow (e) {
  if (!sweepDeferTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.sweepDefers - back.sweepDefers
  const second = cur.sweepDefers - prev.sweepDefers
  const arc = `${back.sweepDefers} -> ${prev.sweepDefers} (${first >= 0 ? '+' : ''}${first}) -> ${cur.sweepDefers} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, this word prices the sweep defer mass across the faces - the sweep lane's own defer seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the sweep defer trend (v0.976.190): the defer's rise ran two steps deep - ${arc} - the defer's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the sweep defer trend (v0.976.190): the defer's fall ran two steps deep - ${arc} - the defer's own fade ${tail}`
  }
  return `the sweep defer trend (v0.976.190): the defer's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
