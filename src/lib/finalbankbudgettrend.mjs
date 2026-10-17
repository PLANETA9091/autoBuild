// (v0.976.188) THE BANK CHAINS CRATER FRONT'S OWN BUDGET CLAMP TREND -
// the final-bank budget lane's own clamp mass across the faces beside
// the raw lane words: the F427's own census named the front first
// ('banked crater decode: crater: 0.1% of the endgame loot reached
// chests (banked 2 of 1888u) - the bank chains are the bottleneck,
// the mines are not' the census's own evidence rides, the 'bank flow:
// 0.0u/s (banked +0u over 287s) - the chains stood still' line the
// crater's own verdict beside, the F425's own bank budget gap 912s
// short at 0.8u/s the mirror behind) - the budget's own clamp the
// final bank's own flow-pricing holds (the 'F<n> final bank budget:
// flow-priced <n>s (fleet bankable pocket <n>u (raw <n>u) at <n.n>u/s
// needs <n>s) - the static <n>s covered only the fast flows - clamped
// to <n>s (the kill margin)' lines - ONE emitter (the endphase's own
// final-bank budget lane, the flow-pricing's own function prices the
// pocket's own rate), one shape, every line the shape prints rides,
// no exclusion the shape needs - every line the lane printed across
// the whole cache carried the flow-priced token, zero variants the
// field holds).
// THE CELL'S OWN WEIGHT 220u the thirty-nine faces' own total - the
// wet-wall yield's own 126u the sibling beside (the .186 word's own
// cell), the bank skin's own 729u the record the family holds - this
// word's own skin the mid-heavy mass the crater front prices.
// THE FIELD'S OWN TOP THE COUNT 18 rode ONCE (the face 360's own
// crest - THE CLAMP'S OWN STORM the book holds), THE FIELD'S OWN
// FLOOR THE COUNT ZERO rode ELEVEN times (the faces 351/354/355/365/
// 368/370/373/377/379/383/385's own floors - THE ELEVEN DROUGHTS the
// budget lane's own honest gaps ride). THE PAIR SILENCE RUN the faces
// 355/356's own two the longest drought this book holds (the
// shortest longest-drought the family holds beside the bfcu's own
// thirty-seven the heaviest drought record). THE ONE BACK-TO-BACK
// SWELL PAIR the faces 375/376 hold, the ONE back-to-back fade pair
// the faces 382/383 hold (the drought's own tail the staircase
// rides). THE FOUR ROUND TRIPS the faces 370/379/385/386 hold - THE
// ROUND-TRIP RECORD THE FAMILY HOLDS (the .186 word's own two never
// back-to-back the mirror beside - this book's own closer pair
// 385/386 back-to-back mirrored, the clamp's own breath the record
// rides). THE BOUNDS' OWN LEGS: the +16 the max rise rode FOUR legs
// TWO boundaries (the boundaries 359/360 and 377/378 - THE STORM'S
// OWN CLIMBS), the -16 the max fall rode TWO legs ONE boundary (the
// boundary 378/379 - THE CRATER'S OWN DRAIN the crest 16 the floor
// 0); the last word the face 386's own window the swing (7 -> 0 (-7)
// -> 7 (+7) the round trip the closer holds). THE WHOLE-CACHE SEAT
// 305u the faces the cache holds - the face 427's own 11u the newest
// add rides (the W427 window the swell 0 -> 6 (+6) -> 11 (+5) MY
// WORD'S OWN FIRST LIVE READ the nearest-completed law holds - the
// cancelled 424 the honest gap rides; the face 426's own 6u the
// first dispatched add the double-swell birth holds, the face 347's
// own 7u the pre-field face beside; the W422 swell + the W423 swing
// the post windows the cache holds). ONE SHAPE ONE WORD:
// src/lib/finalbankbudgettrend.mjs (finalBankBudgets +
// finalBankBudgetTrendConsistent + finalBankBudgetTrendRow, byte-pin
// no return no repeat no stay no run no owns no dynasty no turn, the
// tail names the neighbor seats incl. the wet-wall yield's own trend
// the newest sibling and the reconnect retry's own trend beside, the
// fence never rejects extra keys) + the decompose wire right after
// the wet-wall yield's own wire (variable fbb beside their wwy, the
// fold rides finalBankBudgets's own read - one parser, never a
// second; the decompose's own first bank budget clamp read the lane
// the reader never priced before this word). Bump law held: the
// origin raw read 0.976.186 stood at bump time (the wet-wall yield's
// own trend 5dcdb87b the fire-1500's own word) - 0.976.188 free -
// taken zero version race.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first bank budget clamp read - the lane
// the reader never priced before this word).

const BANK_BUDGET_CLAMP_RE = /^F\d+ final bank budget: flow-priced /

/**
 * The cell's own read - the bank chains crater front's count across
 * the lines. One parser per shape: the final-bank budget lane's own
 * seat, the final bank verdicts the bankdrain's own book prices
 * never ride (the lanes never merge - the 'final bank: <n> (<why>)'
 * verdicts a different lane), the bank raw colon mass the
 * bankcolontrend's own book prices never ride beside.
 */
export function finalBankBudgets (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && BANK_BUDGET_CLAMP_RE.test(l)) n++
  }
  return n
}

export function finalBankBudgetTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.finalBankBudgets) && s.finalBankBudgets >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

export function finalBankBudgetTrendRow (e) {
  if (!finalBankBudgetTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.finalBankBudgets - back.finalBankBudgets
  const second = cur.finalBankBudgets - prev.finalBankBudgets
  const arc = `${back.finalBankBudgets} -> ${prev.finalBankBudgets} (${first >= 0 ? '+' : ''}${first}) -> ${cur.finalBankBudgets} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, this word prices the bank budget clamp mass across the faces - the bank chains crater front's own budget seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the bank budget clamp trend (v0.976.188): the budget's rise ran two steps deep - ${arc} - the budget's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the bank budget clamp trend (v0.976.188): the budget's fall ran two steps deep - ${arc} - the budget's own fade ${tail}`
  }
  return `the bank budget clamp trend (v0.976.188): the budget's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
