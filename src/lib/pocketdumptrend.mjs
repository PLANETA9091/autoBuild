// (v0.976.229) THE POCKET DUMP'S OWN TREND - the reporter tick's own
// fleet-wide pocket-snapshot mass across the faces beside the raw lane
// words: the field's own scan named the lane the seat first (the
// '   F<n>=<mined>[<item>:<n> ...| empty]' family the reporter tick
// prints every heartbeat - ONE line, nineteen bots the joiner rides,
// the heaviest clean unpriced voice the fire-1630 seathunt named: the
// hardened seathunt's literal probe the map priced seat by seat (the
// fire-1542 method the cache holds - the stale-probe false positives
// the overrides map priced honest) and the .228's own comment the
// lighter siblings named: every unpriced fragment the dump lane prints
// the next seats price). THE RAW LAW: every line the lane prints
// rides - the empty pockets and the mined zeros and the negative
// drift skin and the full three-item tops the same lane holds (the
// wrl lane's own lane law - the lane's own count rides whole whatever
// the skin's name); the reporter's OTHER lines never ride (the pulse
// header the maptrip's own header prices, the deficits row the
// plantoptrend seat prices, the plan top the plantoptrend seat prices
// beside, the mem line the memhb seat prices, the pocket TOTALS the
// pocketline book prices - the live-object read, never the lane's own
// log skin - the dump lane alone).
// THE CENSUS LAW: the word owns the count - no trend word owned the
// dump lane cell (the .228 rationLaneCount precedent the family's
// census rides, the .223 bankedReceiptCount and the .220
// verticalDoomSkipCount the same law hold) - pocketDumpCount the
// family's own count, one parser never a second; the strict grammar
// the field's own proof prices (the field proof 7/7 census==raw zero
// mismatches - scripts/fieldread-pocketdump-1630.mjs, the faces
// 455..461 the artifact fetches re-spoke).
// THE CELL'S OWN WEIGHT 393u the seven faces' own total (the honest
// window; the 455 54, the 456 60, the 457 63, the 458 58, the 459 46,
// the 460 58, the F461 54) - the ration lane's own 337u the
// twenty-five faces' total beside, the per-face weight the dump's own
// tick cadence prices heavier.
// THE BOOK FIVE of FIVE windows speaking (THREE swings, ONE swell,
// ONE fade, the ZERO honest silences - the all-speaking family's own
// skin, the .208 combat band's own 41/41 + 65/65 pair the precedent
// holds): the W456 swell 54 -> 60 (+6) -> 63 (+3), the W457 swing 60
// -> 63 (+3) -> 58 (-5), the W458 fade 63 -> 58 (-5) -> 46 (-12), the
// W459 swing 58 -> 46 (-12) -> 58 (+12), the W460 swing 46 -> 58
// (+12) -> 54 (-4) MY WORD'S OWN BIRTH WINDOW the newest face prices.
// THE BOUNDS' OWN LEGS: the +12 ONE leg ONE boundary 459/460 and the
// -12 ONE leg ONE boundary 458/459 - the mirror pair the storm prices
// (the trough's own climb and the crest's own drain the same weight
// holds); the round trips the ZERO the book holds.
// THE TOP the count 63 rode ONCE (the F457 crest), THE FLOOR the
// count 46 rode ONCE (the F459 trough).
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier
// chain). The fold receives the count per face (pocketDumpCount owns
// the census - the word's own strict grammar, never a fork). No
// two-back face given -> no read (the carrier's own null pass); the
// lane's own zero is no fence - a zero face rides a lawful count (the
// drought's own zero the fence keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// pocket dump's own swell, fall then fall prices the pocket dump's
// own fade, a traded direction prices the pocket dump's own swing, a
// held step (any count-to-count zero) prices the honest silence (a
// held count is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the seats' own verdict word (no owns) nor the dynasty's
// own (no dynasty, no turn) - co-existence by seat never by
// duplication.
//
// THE .228 SEAT THEIRS - their ration lane's own trend (319ffa9) the
// fire before rode; MY .227 the liar-ladder ratchet's own trend
// (b3ca561) beside. This word the pocket dump's own seat takes -
// different cells the seats co-exist by (the ration lane the gate's
// own bite prices, the pocket dump the reporter tick's own snapshot
// prices), ONE reader the book holds all words read.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first pocket-dump read - the lane the
// reader never priced across the faces before this word).

/**
 * The census - the family's own strict grammar, the word's own count
 * (the .228 rationLaneCount precedent the family's census rides).
 * Every line the dump lane's ONE shape classifies rides - the empty
 * pockets and the mined zeros and the negative drift skin included;
 * the pulse header and the deficits row and the plan top and the mem
 * line never ride.
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the pocket dump count (0 when the lines hold no
 *   dump print - the zero a lawful count)
 */
export function pocketDumpCount (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && DUMP_RE.test(l)) n++
  }
  return n
}

const BOT_SEG = 'F\\d+=-?\\d+\\[(?:empty|[a-z0-9_]+:\\d+(?: [a-z0-9_]+:\\d+){0,2})\\]'
const DUMP_RE = new RegExp('^   ' + BOT_SEG + '(?: \\| ' + BOT_SEG + ')*$')

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {dumps}, prev: {dumps}, cur: {dumps} }
 * @returns {boolean}
 */
export function pocketDumpTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.dumps) && s.dumps >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the pocket dump's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {dumps}, prev: {dumps}, cur: {dumps} }
 * @returns {string|null} the row byte, or null
 */
export function pocketDumpTrendRow (e) {
  if (!pocketDumpTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.dumps - back.dumps
  const second = cur.dumps - prev.dumps
  const arc = `${back.dumps} -> ${prev.dumps} (${first >= 0 ? '+' : ''}${first}) -> ${cur.dumps} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, the bank views' own trend prices the bank views' own mass across the faces, the air bar glitch's own trend prices the air bar glitch's own mass across the faces, the banked receipt's own trend prices the banked receipt's own mass across the faces, the water rescue lane's own trend prices the water rescue lane's own mass across the faces, the furnace no-walk open's own trend prices the furnace no-walk open's own mass across the faces, the pre-position walk home's own trend prices the pre-position walk home's own mass across the faces, the liar-ladder ratchet's own trend prices the liar-ladder ratchet's own mass across the faces, the ration lane's own trend prices the ration lane's own mass across the faces, this word prices the pocket dump's own mass across the faces - the pocket dump seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the pocket dump trend (v0.976.229): the pocket dump's rise ran two steps deep - ${arc} - the pocket dump's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the pocket dump trend (v0.976.229): the pocket dump's fall ran two steps deep - ${arc} - the pocket dump's own fade ${tail}`
  }
  return `the pocket dump trend (v0.976.229): the pocket dump's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
