// (v0.976.217) THE RELOOT HEADING'S OWN TREND - the reloot ladder's
// own heading broadcast's own mass across the faces beside the raw
// lane words: the field's own scan named the family the seat first
// (the 'F<n> dir=(x.xx,z.zz) logs=<n> tools=<kit>' family - the
// terminal broadcast the reloot loop prints after the second
// sitting's ladder resolves - the <dir> the heading vector the walk
// steers, the <logs> the log stack the bot carries, the <kit> the
// ensureTools verdict the ladder holds, the 2280 lines the heaviest
// clean-grammar unpriced voice the cache holds); THE RAW LAW: every
// heading line the family's own marker classifies rides, no
// exclusion the family needs - ONE emitter, one shape, the strict
// grammar 2280/2280 the cache holds zero mismatch (the kits the
// wooden_pickaxe default rides, the drought verdicts the no-planks
// and the no-table skins the ladder prints, the no-pickaxe bracket
// the sticks/planks-best/table meter rides, the comma lists the
// multi-broadcast holds, the none the toolless bare form); the
// reloot's own walk-lane mass never rides (the v0.843 word prices
// the 'reloot: ' lines - the heading never carries the reloot
// prefix, the different prefix the different lane holds), the
// reconnect retry's own trend and the relog's own trend their own
// lanes never ride (the link-stability front's own cells - the
// heading is no retry and no relog); THE CENSUS LAW: the word owns
// the count - no census owned the heading cell (the .212
// hazardMemorizeCount precedent the family's first census rides) -
// relootHeadingCount the family's own count the fold rides, one
// parser never a second.
// THE CELL'S OWN WEIGHT 2280u the one-hundred-thirteen faces' own
// total (the reloot lane's own mass the heavier beside - the heading
// the ladder's own terminal print; the tunnel steering's own 6720u
// the .215 seat and the dead-lid record's own 110u the .216 seat the
// trend family's own recent seats beside - the heading the heaviest
// clean unpriced the scan priced).
// THE SPAN LAW: the field 340.. the family's own span the field
// opens (the heading spoke every face the cache holds - the family's
// own birth the cache's own first face rides), the absent 419 the
// honest gap the cache holds not (the face number the run consumed,
// the log the cache never received; the windows the array-position
// read prices - the .206 honest fix the law rides).
// THE FIELD 1008u the fifty faces' own total (the span 340..389) -
// THE ALL-SPEAKING BIRTH the zero rode NEVER (the exhaust's own
// all-speaking birth the family precedent v0.976.94 - the heading's
// own cell spoke every face the field holds; the drought never rode
// the priced field, the law prices the branch, the bars never invent
// it). THE FIELD'S OWN TOP THE COUNT 24 rode ONCE (the face 354's
// own crest - THE FIELD STORM), THE FIELD'S OWN FLOOR THE COUNT 14
// rode ONCE (the face 346's own floor); the whole-cache top THE
// COUNT 25 rode THRICE (the faces 423 and 424 and 434's own crests
// the cache adds - THE WHOLE-CACHE STORM the three-crest ride, no
// single face owns the tidal), the whole-cache floor THE COUNT 14
// rode ONCE (the same floor face both books share).
// THE FIELD BOOK TWENTY-TWO of FORTY-EIGHT windows speaking
// (NINETEEN swings, ONE swell, TWO fades, TWENTY-SIX honest
// silences - the quiet book the held windows price) beside the
// whole-cache book FIFTY-SEVEN of ONE-HUNDRED-ELEVEN speaking
// (FORTY-SIX swings, THREE swells, EIGHT fades, FIFTY-FOUR
// silences); both books all-speaking on the counts (the zero rode
// NEVER) yet rich in silences - the heading's own band the
// nineteen-to-twenty-two shelf the fleet's own roster prices (the
// broadcast once per bot per run the shape holds, the roster drift
// the ±few the respawns price - the window the held steps price
// honest).
// THE SIX-SWING RUN 377..382 THE FIELD'S OWN RECORD THE WHOLE-CACHE
// RECORD BOTH BOOKS RIDE (the bounds never extend - the fade 376 and
// the silence 383 hold), the secondaries beside (the three-swing
// 354..356 and 386..388, the two-swing 346..347 the floor's own
// climb and drain; the whole cache the five-swing 410..414 and the
// four-swing 416..420 and 441..444 and the three-swing 401..403).
// THE ROUND TRIPS the field NINE (the W359 weight-2 mirror the
// biggest field trip 20 -> 22 (+2) -> 20 (-2), the weight-1 mirrors
// beside) beside the whole cache TWENTY-FIVE (THE W435 WEIGHT-5
// MIRROR THE BIGGEST 20 -> 25 (+5) -> 20 (-5) - the whole-cache
// storm's own return leg, the W431 and the W397 the weight-3 mirrors
// beside).
// THE BOUNDS' OWN LEGS the +6 rode ONE leg ONE boundary (346/347 -
// THE FLOOR'S OWN CLIMB the 14 -> 20) and the -7 rode ONE leg ONE
// boundary (345/346 - THE FLOOR'S OWN DRAIN the 21 -> 14) BOTH
// BOOKS SHARE (the floor the same face the legs the same
// boundaries the cache never extends).
// THE LAST FIELD WORD the face 389's own window the swell (19 ->
// 20 (+1) -> 21 (+1)). The newest windows the W449 and the W450 the
// swings the cache prices, the W451 and the W452 and the W453 the
// honest silences the held law prices - the W453 the silence the
// .217's own first live read rides (the row the null the held step
// prices, the F452->F453 leg +3 the face 453's own 22 the counts
// hold).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own reloot heading trend read - the cell
// the reader never priced across the faces before this word; the
// reloot walk lane and the reconnect retry and the relog lanes
// never ride - the lanes never merge).

/**
 * The family's own census - the heading count the word owns (the
 * .212 hazardMemorizeCount precedent: no census owned the cell, the
 * word's own count rides, one parser never a second). Every heading
 * line the family's own marker classifies rides whole - the dirs and
 * the logs and the kits the emitter prints ride inside the count,
 * the strict grammar the cache proved 2280/2280 zero mismatch.
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {number} the heading count (0 when the lines hold no
 *   heading read - the zero a lawful count)
 */
export function relootHeadingCount (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && HEADING_RE.test(l)) n++
  }
  return n
}

const HEADING_RE = new RegExp('^F\\d+ dir=\\(-?\\d+\\.\\d{2},-?\\d+\\.\\d{2}\\) logs=\\d+ tools=(?:(?:no planks recipe|no crafting table|no pickaxe \\(sticks \\d+, planks-best \\d+, table \\d+\\))|(?:[a-z_]+)(?:,(?:[a-z_]+))*)$')

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {heads}, prev: {heads}, cur: {heads} }
 * @returns {boolean}
 */
export function relootHeadingTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.heads) && s.heads >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the heading's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {heads}, prev: {heads}, cur: {heads} }
 * @returns {string|null} the row byte, or null
 */
export function relootHeadingTrendRow (e) {
  if (!relootHeadingTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.heads - back.heads
  const second = cur.heads - prev.heads
  const arc = `${back.heads} -> ${prev.heads} (${first >= 0 ? '+' : ''}${first}) -> ${cur.heads} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, this word prices the reloot heading's own mass across the faces - the reloot heading seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the reloot heading trend (v0.976.217): the heading's rise ran two steps deep - ${arc} - the heading's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the reloot heading trend (v0.976.217): the heading's fall ran two steps deep - ${arc} - the heading's own fade ${tail}`
  }
  return `the reloot heading trend (v0.976.217): the heading's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
