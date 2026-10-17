// (v0.976.186) THE WATER'S WALL FRONT'S OWN WET-WALL YIELD TREND -
// the climb lane's own blocked-rotations mass across the faces: the
// F425's own write-off whys named the front first ('write-off whys:
// wet-wall carries 569u of 1056u (53.9%) - the water's wall is the
// front' the census's own evidence rides, the pre-position's own
// surface-refused storm the evidence beside) - the wall's own yield
// verdict the climb level's blocked rotations hold (the 'F<n> [F<n>]
// climb wet-wall yield: <w> wet rotations vs <d> dry at y=<y> - no
// dry bearing owns this column, the fence reserve returns to the
// chain' lines - ONE emitter (the miner's own climb lane, the
// verdict surface's own function prices the rotations), one shape,
// the TAGGED voice the climb lane prints only - every line the shape
// prints rides, no exclusion the shape needs).
// THE CELL'S OWN WEIGHT 126u the thirty-nine faces' own total - the
// bank skin's own 729u the record the family holds, the reconnect
// retry's own 508u the third-heaviest beside (the .185 word's own
// cell) - this word's own skin the mid-weight the wall front prices.
// THE FIELD'S OWN TOP THE COUNT 17 rode ONCE (the face 366's own
// crest - THE WALL'S OWN STORM the book holds), THE FIELD'S OWN
// FLOOR THE COUNT ZERO rode THREE times (the faces 355/359/377's
// own floors - THE TRIPLE DROUGHT beside the bfcu's own
// thirty-seven the heaviest drought record the family holds). THE
// QUAD SILENCE RUN the faces 370..373's own four the longest
// drought this book holds (the .185's own one silence run the faces
// 360..363 hold - the same four-window weight the mirror rides).
// THE TRIPLE BACK-TO-BACK FADE RUN the faces 363/364/365's own
// windows every one descending (the .185's own triple SWELL pair
// run the mirror beside - the fades' own triple the book holds,
// the drought's own staircase rides); the ONE back-to-back swell
// pair the faces 357/358 hold (the bprep's own ONE pair the mirror
// beside); the TWO round trips the faces 351/386 hold (never
// back-to-back - the mirrored legs the +2/-2 weight rides). THE
// BOUNDS' OWN LEGS: the +16 the max rise rode TWICE two legs ONE
// boundary (the boundary 365/366 the two windows share - THE
// CREST'S OWN CLIMB), the -15 the max fall rode TWICE two legs ONE
// boundary (the boundary 366/367 the two windows share - THE
// CRATER'S OWN DRAIN the crest 17 the floor 2); the last word the
// face 386's own window the swing (1 -> 3 (+2) -> 1 (-2) the round
// trip the mirror holds). THE WHOLE-CACHE SEAT 161u the faces the
// cache holds - the face 425's own 6u the newest add rides (the
// W425 window the swing 7 -> 3 (-4) -> 6 (+3) MY WORD'S OWN FIRST
// LIVE READ the nearest-completed law holds - the cancelled 424 the
// honest gap rides; the face 422's own 7u the mirror beside; the
// W389 window the swing 2 -> 0 (-2) -> 7 (+5) the post field
// holds). ONE SHAPE ONE WORD:
// src/lib/wetwallyieldtrend.mjs (wetWallYields +
// wetWallYieldTrendConsistent + wetWallYieldTrendRow, byte-pin no
// return no repeat no stay no run no owns no dynasty no turn, the
// tail names the neighbor seats incl. the reconnect retry's own
// trend the newest sibling and the climb-out pre-position's own
// trend beside, the fence never rejects extra keys) +
// tests/unit/wetwallyieldtrend.test.mjs (ALL FIVE swells + the FIVE
// fades byte-exact, ALL SEVENTEEN swings byte-exact, the TEN
// silences pinned incl. the quad run, the tally
// {swing:17,swell:5,fade:5,silence:10} + the 126u sum pin byte-true
// + the top-17 rode-once pin + the THREE zero faces pin (THE TRIPLE
// DROUGHT) + the quad silence run pin + the triple back-to-back
// fade run pin + the one back-to-back swell pair pin + the two
// round trips pin + the bounds' own legs pins (the +16 TWICE two
// legs ONE boundary, the -15 TWICE two legs ONE boundary) + the
// last word pin + the whole-cache pins (the 161u, the face 425's
// own 6u the newest add, the W425 window the swing, the W389 window
// the swing) + the landmark windows byte-exact + byte-pin/fence/
// extra-key/junk/read batteries + the one-parser ride over the REAL
// yield lines (the write-off whys line's own wet-wall why token
// never rides, the final write-off line's own why tokens never
// ride, the climb wet ascend lines the climbwet's own book prices
// never ride, the repeat wet page lines never ride, the bare skin
// never rides - no such emitter voice, the no-colon junk never
// rides)) + the decompose wire right after the reconnect retry's
// own wire (variable wwy beside their rr, the fold rides
// wetWallYields's own read - one parser, never a second; the
// decompose's own first wet-wall yield read the lane the reader
// never priced before this word). Bump law held: the origin raw
// read 0.976.185 stood at bump time (the reconnect retry's own
// trend d432240f theirs - the seat race the FOURTEENTH rode
// mid-fire) - 0.976.186 free - taken zero version race.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first wet-wall yield read - the lane
// the reader never priced before this word).

const WET_WALL_YIELD_RE = /^F\d+ \[F\d+\] climb wet-wall yield: /

/**
 * The cell's own read - the water's wall front's count across the
 * lines. One parser per shape: the climb lane's own yield seat, the
 * write-off lanes and the ascend lanes never ride (the lanes never
 * merge - the write-off whys the pocket's own census prices beside).
 */
export function wetWallYields (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && WET_WALL_YIELD_RE.test(l)) n++
  }
  return n
}

export function wetWallYieldTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.wetWallYields) && s.wetWallYields >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

export function wetWallYieldTrendRow (e) {
  if (!wetWallYieldTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.wetWallYields - back.wetWallYields
  const second = cur.wetWallYields - prev.wetWallYields
  const arc = `${back.wetWallYields} -> ${prev.wetWallYields} (${first >= 0 ? '+' : ''}${first}) -> ${cur.wetWallYields} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, this word prices the wet-wall yield mass across the faces - the water's wall front's own yield seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the wet-wall yield trend (v0.976.186): the yield's rise ran two steps deep - ${arc} - the yield's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the wet-wall yield trend (v0.976.186): the yield's fall ran two steps deep - ${arc} - the yield's own fade ${tail}`
  }
  return `the wet-wall yield trend (v0.976.186): the yield's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
