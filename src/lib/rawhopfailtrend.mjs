// (v0.976.191) THE RAW HOP LANE'S OWN FAIL TREND - the raw hop lane's
// own fail mass across the faces beside the raw lane words: the F429's
// own log named the lane first (the '[F<n>] raw hop failed: raw walk
// <why> - pathfinder retry' lines rode F429 fifty-five strong while
// the banks stood at 16.6% - the walk tax the end-phase's own raw
// controls price, the A* saturation cure's own failures the v0.45.0
// cure's own receipt holds) - the raw hop's own fails the deposit
// lane's own walk seat holds (the 'F<n> [F<n>] raw hop failed: raw
// walk ... - pathfinder retry' lines - ONE emitter (deposit.mjs's own
// raw hop catch, the walkRawToward's own failure receipt), one shape,
// the DOUBLE- PREFIX voice the raw hop lane prints only ('F<n> [F<n>]'
// - the bot's own name the bracket rides beside) - THE RAW LAW: every
// line the shape prints rides, no exclusion the shape needs; the three
// why kinds the shape holds (the stalled-after skin, the
// no-net-progress skin, the timeout-after skin) the why tokens never
// split - the line's own count rides whole whatever the why's name
// (the .189's own law co-exists by seat); the bare form never rode the
// whole cache - zero untagged lines the field holds).
// THE CELL'S OWN WEIGHT 1797u the thirty-nine faces' own total - the
// sweep defer's own 46u the lightest sibling beside (the .190 word's
// own cell), the whys' own 13399u the heavier sibling beside (the
// .189 word's own cell) - this word's own skin the mid-heavy the raw
// hop prices.
// THE FIELD'S OWN TOP THE COUNT 110 rode ONCE (the face 368's own
// crest - THE STORM the book holds, the A* storm's own walk tax rode
// heavy that face), THE FIELD'S OWN FLOOR THE COUNT 12 rode ONCE (the
// face 376's own floor) - THE NO-DROUGHT BOOK the raw hop lane rides
// (the zero never rode the whole cache - forty-seven faces and no
// drought the book holds, the honest zeros the sibling books'
// droughts hold beside - the sweep defer's own fifteen the mirror
// behind, the whys' own twelve the heavier mirror beside).
// THE THREE back-to-back silence PAIRS the faces 353/354, 364/365,
// 373/374 hold (the held steps chain in twos - the breath's own rest
// the book rides). THE TRIPLE FADE RUN the faces 356/357/358 hold
// (the fades chain in threes - the storm's own drain the chain rides,
// the sweep defer's own TRIPLE round-trip run the mirror beside) and
// the PAIR the faces 375/376 hold (the floor's own approach the pair
// rides - the fade 12-floor's own descent), the five solo fades
// 366/370/384 beside - the EIGHT fades the book holds; the SIX swells
// the faces 351/360/363/368/372/382 hold never chain (the zero
// back-to-back swell pairs the honest spread rides - the storm 368's
// own arrival the crest climb prices). THE ZERO ROUND TRIPS the book
// holds (the swings never mirrored - the sweep defer's own EIGHT the
// record the mirror beside, the legs never returned the same weight
// the raw hop's own churn prices).
// THE BOUNDS' OWN LEGS: the +58 the max rise rode TWO legs ONE
// boundary (the boundary 368/369 the two windows share - THE STORM'S
// OWN CLIMB the crest 110 the climb prices), the -60 the max fall rode
// TWO legs ONE boundary (the boundary 369/370 the two windows share -
// THE STORM'S OWN DRAIN the fall from the crest the drain prices); the
// last word the face 386's own window the swing (39 -> 88 (+49) -> 48
// (-40) - the storm echo's own closer the tail rides out on).
// THE DRIFT LANE the named read prices beside: the no-net-progress
// class owns the mass (1157u of 1797u, 64.4% the birth's own read;
// 1465u of 2254u, 65.0% the whole-cache's own read) - the drift x32 of
// the thirty-nine faces (82.1%) the majority's own seat, the stalled
// x7 (the faces 353/358/359/366/367/369/384) the minority beside, the
// timeout x0 (the timeout class never owned a face's majority - the
// honest spread the raw walk's own gates price).
// THE WHOLE-CACHE SEAT 2254u the forty-eight faces the cache holds -
// the face 430's own 59u the newest add rides (the W430 window the
// swell 30 -> 55 (+25) -> 59 (+4) MY WORD'S OWN FIRST LIVE READ the
// nearest-completed law holds - the absent 428 the honest gap rides;
// the W429 window the swing 66 -> 30 (-36) -> 55 (+25) the mirror
// beside; the W428 window the swing 22 -> 66 (+44) -> 30 (-36) the
// mirror beside; the W427 window the swing 80 -> 22 (-58) -> 66 (+44)
// the storm drain's own echo rides; the face 347's own 65u the
// pre-field face beside; the cancelled 424 the honest gap rides).
// ONE SHAPE ONE WORD: src/lib/rawhopfailtrend.mjs (rawHopFails +
// rawHopFailTrendConsistent + rawHopFailTrendRow, byte-pin no return
// no repeat no stay no run no owns no dynasty no turn, the tail names
// the neighbor seats incl. the sweep lane's own defer trend the newest
// sibling and the dusk bank front's own whys trend beside, the fence
// never rejects extra keys) + the decompose wire right after the sweep
// lane's own defer wire (variable rh beside their sd, the fold rides
// rawHopFails's own read - one parser, never a second; the decompose's
// own first raw hop fail read the lane the reader never priced before
// this word).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first raw hop fail read - the lane the
// reader never priced before this word; the raw hop WALK machinery
// the rawhop test prices beside - the walk's own unit seat, the log's
// own trend seat co-exists by lane, the lanes never merge).

const RAW_HOP_FAIL_RE = /^F\d+ \[F\d+\] raw hop failed: raw walk( stalled after \d+ms \(d=\d+(\.\d+)?\)|: no net progress for \d+ms \(best d=\d+(\.\d+)?\)| timeout after \d+ms \(d=\d+(\.\d+)?\)) - pathfinder retry$/

/**
 * The cell's own read - the raw hop lane's own fail count across the
 * lines. One parser per shape: the raw hop lane's own fail seat, the
 * raw hop WALK machinery's own unit tests never ride here (the walk's
 * own seat), the hop decide-timeout zeros the hop census's own book
 * prices never ride (the A* hop lane's own seat - a different lane),
 * the walk-fail buckets the walkfail's own book prices beside (the
 * lanes never merge).
 */
export function rawHopFails (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && RAW_HOP_FAIL_RE.test(l)) n++
  }
  return n
}

export function rawHopFailTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.rawHopFails) && s.rawHopFails >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

export function rawHopFailTrendRow (e) {
  if (!rawHopFailTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.rawHopFails - back.rawHopFails
  const second = cur.rawHopFails - prev.rawHopFails
  const arc = `${back.rawHopFails} -> ${prev.rawHopFails} (${first >= 0 ? '+' : ''}${first}) -> ${cur.rawHopFails} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, this word prices the raw hop fail mass across the faces - the raw hop lane's own fail seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the raw hop fail trend (v0.976.191): the fail's rise ran two steps deep - ${arc} - the fail's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the raw hop fail trend (v0.976.191): the fail's fall ran two steps deep - ${arc} - the fail's own fade ${tail}`
  }
  return `the raw hop fail trend (v0.976.191): the fail's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
