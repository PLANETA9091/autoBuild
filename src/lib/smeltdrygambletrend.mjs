// (v0.976.192) THE SMELT DRY GAMBLE TREND - the smelt attempt's own
// dry-gamble mass across the faces beside the raw lane words: the
// F431's own census named the no-fuel front first ('smelt refusal
// census: no fuel 19, machine unreachable 9, busy 3 of 33 refused
// attempts - the smelt chain names its tax' the census's own evidence
// rides, the F430's own no fuel 2 of 17 the lighter mirror behind) -
// the gamble's own lines the dry attempt's own voice holds (the
// '[F<n>] smelt: pocket and commons dry on <item> - one machine
// gamble (the live rows decide)' lines - ONE emitter (smelting.mjs's
// own dry gate, the pocket-and-commons drought prices the gamble),
// one shape, the BRACKET voice the smelt attempt prints only - every
// line the shape prints rides, the item token never splits (the
// cobblestone and the oak_log and the sand and the birch_log the
// same shape's own skins - the line's own count rides whole whatever
// the item's name, the .191's own law co-exists by seat); the bare
// form never rode the whole cache - zero untagged lines the field
// holds).
// THE CELL'S OWN WEIGHT 257u the thirty-nine faces' own total - the
// raw hop fail's own 1797u the heavier sibling beside (the .191
// word's own cell), the sweep defer's own 46u the lightest sibling
// beside (the .190 word's own cell) - this word's own skin the
// mid-light weight the drought lanes price.
// THE FIELD'S OWN TOP THE COUNT 23 rode ONCE (the face 353's own
// crest - THE STORM the book holds), THE FIELD'S OWN FLOOR THE COUNT
// ZERO rode TWICE (the faces 354/364's own floors - THE TWO
// DROUGHTS the honest gaps ride). THE STORM'S OWN FULL ROUND TRIP
// the face 354's own window holds (1 -> 23 (+22) -> 0 (-23) - the
// spike's own arrival AND exit in ONE window, the bounds' own
// legs the same trade prices). THE FIVE SILENCES the windows
// 357/358/382/383/384 hold - the PAIR the faces 357/358 hold (the
// shared face 358 the count 9 the pair's own seat) + THE TRIPLE
// SILENCE RUN the faces 382/383/384's own windows the longest
// drought this book holds (the plateau 16 -> 4 -> 4 -> 4 -> 1 the
// breath's own rest the chain rides). THE FOUR FADES chain in twos -
// the PAIR the faces 361/362 hold (the storm drain's own echo) + the
// PAIR the faces 369/370 hold (the descent's own pair). THE SIX
// SWELLS the faces 351/356/366/367/372/386 hold - the PAIR the faces
// 366/367 hold (the drought's own exit the recovery climb prices,
// the pair the book's own swell chain rides) + the four solo seats
// beside. THE THREE ROUND TRIPS the faces 363/365/368 hold (3 -> 2
// (-1) -> 3 (+1), 3 -> 0 (-3) -> 3 (+3), 6 -> 8 (+2) -> 6 (-2) - the
// swings' own mirrors the raw hop's zero the mirror beside). THE
// BOUNDS' OWN LEGS: the +22 the max rise rode TWO legs ONE boundary
// (the boundary 352/353 - THE STORM'S OWN CLIMB the crest 23 the
// climb prices), the -23 the max fall rode TWO legs ONE boundary
// (the boundary 353/354 - THE STORM'S OWN DRAIN the fall from the
// crest); the last word the face 386's own window the swell (1 -> 3
// (+2) -> 9 (+6) the birth closer the tail rides out on). THE
// WHOLE-CACHE SEAT 387u the fifty-five faces the cache holds - the
// face 431's own 37u the newest add rides (the W431 window the
// swing 4 -> 3 (-1) -> 37 (+34) MY WORD'S OWN FIRST LIVE READ the
// nearest-completed law holds - the absent 428 and the cancelled 424
// the honest gaps ride; THE WHOLE-CACHE TOP THE COUNT 37 rode ONCE
// the face 431's own crest - the storm's own arrival the whole-cache
// prices, the +34 the field's own biggest step the same window
// holds; the W427 window the swing 6 -> 3 (-3) -> 7 (+4) the mirror
// beside; the W387 window the swell 3 -> 9 (+6) -> 15 (+6) the post
// field holds; the face 347's own 4u the pre-field face beside).
// ONE SHAPE ONE WORD: src/lib/smeltdrygambletrend.mjs (smeltDryGambles
// + smeltDryGambleTrendConsistent + smeltDryGambleTrendRow, byte-pin
// no return no repeat no stay no run no owns no dynasty no turn, the
// tail names the neighbor seats incl. the raw hop lane's own fail
// trend the newest sibling and the sweep lane's own defer trend
// beside, the fence never rejects extra keys) + the decompose wire
// right after the raw hop lane's own wire (variable sdbg beside
// their rh, the fold rides smeltDryGambles's own read - one parser,
// never a second; the decompose's own first smelt dry gamble read
// the lane the reader never priced before this word). Bump law held:
// the origin raw read 0.976.191 stood at bump time (the raw hop
// lane's own fail trend 63f6da55 theirs - the fire-1742's own word
// landed mid-fire, the rebase took their word whole) - 0.976.192
// free - taken zero version race.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first smelt dry gamble read - the lane
// the reader never priced before this word; the bank lane's own
// smelt-hold skip the bank colon's own lane prices beside - the
// pocket-side drought a different lane, the fuel commons docket's
// own lane mass the docket trend prices beside - the lanes never
// merge, co-existence by seat).

const SMELT_DRY_GAMBLE_RE = /^\[F\d+\] smelt: pocket and commons dry on .+ - one machine gamble \(the live rows decide\)$/

/**
 * The cell's own read - the smelt attempt's own dry-gamble count
 * across the lines. One parser per shape: the smelt dry gamble seat,
 * the bank lane's own smelt-hold skip the bank colon's own book
 * prices never ride (the pocket-side drought a different lane), the
 * fuel commons' own verdicts the docket's own book prices beside
 * (the commons-side drought a different lane), the smelt verdicts
 * the smelthold's own book prices beside (the lanes never merge).
 */
export function smeltDryGambles (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && SMELT_DRY_GAMBLE_RE.test(l)) n++
  }
  return n
}

export function smeltDryGambleTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.smeltDryGambles) && s.smeltDryGambles >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

export function smeltDryGambleTrendRow (e) {
  if (!smeltDryGambleTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.smeltDryGambles - back.smeltDryGambles
  const second = cur.smeltDryGambles - prev.smeltDryGambles
  const arc = `${back.smeltDryGambles} -> ${prev.smeltDryGambles} (${first >= 0 ? '+' : ''}${first}) -> ${cur.smeltDryGambles} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, this word prices the smelt dry gamble mass across the faces - the smelt dry gamble seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the smelt dry gamble trend (v0.976.192): the gamble's rise ran two steps deep - ${arc} - the gamble's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the smelt dry gamble trend (v0.976.192): the gamble's fall ran two steps deep - ${arc} - the gamble's own fade ${tail}`
  }
  return `the smelt dry gamble trend (v0.976.192): the gamble's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
