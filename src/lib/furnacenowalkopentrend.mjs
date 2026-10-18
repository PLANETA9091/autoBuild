// (v0.976.225) THE FURNACE NO-WALK OPEN'S OWN TREND - the smelting
// lane's no-walk opener mass across the faces beside the raw lane
// words: the field's own scan named the family the seat first (the
// '[F<n>] furnace within reach - opening without a walk' and the
// '[F<n>] blast_furnace within reach - opening without a walk'
// family - the machine's own block name rides verbatim, the smelting
// lane's tag carries the SINGLE bracket form - the torchbook's
// doubled 'F9 [F9]' shape is tools.mjs's own wrapper - the bot
// already stands at the machine, the pathfinder hop never spent, the
// deposit.mjs lesson's furnace twin); the furnace put's own pair
// census (v0.664.0) reads the lane's own act WITHIN one face (the
// opens and the slot read-back pairing) - and the opens' own mass
// ACROSS the faces rode unnamed, this word takes that seat,
// co-existence by seat never by duplication.
// THE RAW LAW: every line the emitter prints rides, no exclusion the
// family needs ('[F<n>] (furnace|blast_furnace) within reach -
// opening without a walk' - ONE emitter, one prefix shape, the
// bracket voice the family prints only - the machine name the
// registry's own vocabulary holds); the line's own count rides whole
// whatever the machine kind holds; the slot read-backs never ride
// ('[F<n>] furnace slots after put: input=<name|empty> fuel=<name|
// empty>[ (pocket keeps N)]' - the furnace put's own pair census
// holds that lane), the camp furnace lane and the smelt ledger's own
// intent side and the smelt verdicts and the fuel diet bill the
// lane's own other voices hold never ride - the lanes never merge.
// THE ONE-PARSER LAW: the count rides FURNACE_NOWALK_OPEN_RE - the
// furnace put census's own exported regex, the SAME object the
// v0.664.0 wire holds, never a second grammar (the startstrend
// family's own ride-the-census precedent v0.976.45); furnaceNoWalk
// OpenCount the family's own count the fold rides, one parser never
// a fork.
// THE CELL'S OWN WEIGHT 224u the thirteen faces' own total (the
// honest window - the faces 446..458 the artifact fetches re-spoke,
// the fire-1400 mapping the abg and brt and vdt anchors re-proved;
// the field proof 13/13 census==raw zero mismatches -
// scripts/fieldread-furnaceopen-1400.mjs, the grammar strict 224/224
// zero mismatch, the bracket voice the family prints only), the
// book ELEVEN of ELEVEN windows speaking (EIGHT swings, THREE
// swells, the ZERO fades, the ZERO honest silences - the family's
// own restless skin): the W448 swing 1 -> 20 (+19) -> 18 (-2), the
// W449 swing 20 -> 18 (-2) -> 22 (+4), the W450 swell 18 -> 22
// (+4) -> 32 (+10), the W451 swing 22 -> 32 (+10) -> 21 (-11), the
// W452 swing 32 -> 21 (-11) -> 36 (+15), the W453 swing 21 -> 36
// (+15) -> 6 (-30), the W454 swing 36 -> 6 (-30) -> 7 (+1), the
// W455 swell 6 -> 7 (+1) -> 11 (+4), the W456 swing 7 -> 11 (+4) ->
// 2 (-9), the W457 swing 11 -> 2 (-9) -> 6 (+4), the W458 swell 2
// -> 6 (+4) -> 42 (+36) MY FIRST LIVE READ - THE FURNACE'S OWN
// RETURN the newest face's own crest rides. THE TOP the count 42
// rode ONCE (the F458's own crest - MY WORD'S OWN FIRST LIVE READ
// the birth face prices), THE FLOOR the count 1 rode ONCE (the
// F446's own drought the window's oldest edge prices - the zero
// never rode the window, the machine's own quiet a lawful count the
// smelt lane's own zero precedent v0.976.90 keeps). THE BOUNDS' OWN
// LEGS: the +36 the max rise rode ONE leg ONE boundary (the
// boundary 457/458 - THE FURNACE'S OWN RETURN the quiet paid whole
// 6 -> 42 through the held swell), the -30 the max fall rode ONCE
// (the boundary 452/453 - THE STORM'S OWN DRAIN the machine's own
// bust paid whole 36 -> 6); the round trips the ZERO the book holds
// (the swings never mirrored).
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier
// chain). The fold receives the count per face (furnaceNoWalkOpen
// Count owns the census - the SAME regex the furnace put census
// holds, never a fork). No two-back face given -> no read (the
// carrier's own null pass); the open's own zero is no fence - a
// zero face rides a lawful count (the drought's own zero the fence
// keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// opens' own swell, fall then fall prices the opens' own fade, a
// traded direction prices the opens' own swing, a held step (any
// count-to-count zero) prices the honest silence (a held count is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication.
//
// THE .223 SEAT THEIRS - their banked receipt's own trend (0d20b69)
// the fire before rode - this word the no-walk open cell's own seat
// takes, the banked receipt cell the .223 seat keeps - different
// cells the seats co-exist by, ONE reader the book holds all words
// read. CENSUS GUARD: zero fleet wiring, zero new fleet log lines -
// the word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first no-walk open trend read - the
// cell the reader never priced across the faces before this word).

import { FURNACE_NOWALK_OPEN_RE } from './furnaceput.mjs'

const OPEN_RE = FURNACE_NOWALK_OPEN_RE

/**
 * The family's own count - the no-walk opens' own strict grammar
 * (the ride-the-census law - the SAME regex the furnace put census
 * holds, one parser never a fork). The slot read-backs and the camp
 * furnace lane and the smelt intent side never ride (the lanes
 * never merge - the open cell alone).
 *
 * @param {string[]} lines the face's own log lines
 * @returns {number} the no-walk opens' own count
 */
export function furnaceNoWalkOpenCount (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && OPEN_RE.test(l)) n++
  }
  return n
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {opens}, prev: {opens}, cur: {opens} }
 * @returns {boolean}
 */
export function furnaceNoWalkOpenTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.opens) && s.opens >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the opens' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {opens}, prev: {opens}, cur: {opens} }
 * @returns {string|null} the row byte, or null
 */
export function furnaceNoWalkOpenTrendRow (e) {
  if (!furnaceNoWalkOpenTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.opens - back.opens
  const second = cur.opens - prev.opens
  const arc = `${back.opens} -> ${prev.opens} (${first >= 0 ? '+' : ''}${first}) -> ${cur.opens} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, the bank views' own trend prices the bank views' own mass across the faces, the air bar glitch's own trend prices the air bar glitch's own mass across the faces, the banked receipt's own trend prices the banked receipt's own mass across the faces, the water rescue lane's own trend prices the water rescue lane's own mass across the faces, this word prices the furnace no-walk open's own mass across the faces - the furnace no-walk open seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the furnace no-walk open trend (v0.976.225): the opens' rise ran two steps deep - ${arc} - the opens' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the furnace no-walk open trend (v0.976.225): the opens' fall ran two steps deep - ${arc} - the opens' own fade ${tail}`
  }
  return `the furnace no-walk open trend (v0.976.225): the opens' own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
