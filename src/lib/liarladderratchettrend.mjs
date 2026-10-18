// (v0.976.227) THE LIAR-LADDER RATCHET'S OWN TREND - the chronic-liar
// patience ladder's own confirmed-page mass across the faces beside
// the raw lane words: the field's own scan named the family the seat
// first (the 'F<n> [F<n>] water: liar ladder ratchets - confirmed
// no-op glitch page #N, the next override needs N fresh critical-on-
// dry reads' family the water guard's ratchet prints when a no-op
// glitch streak confirms - ONE emitter shape, the page number the
// streak's own rung the line carries, the F459 storm the field's own
// face prices); the liar ladder's own reach book (v0.976.10, the
// v0.976.16 streak) reads the ladder's own anatomy WITHIN one face
// (the reach, the bar at the reach, the per-bot pages, the
// unattributed share, the abandons, the resets) - and the ratchets'
// own mass ACROSS the faces rode unnamed, this word takes that seat,
// co-existence by seat never by duplication.
// THE RAW LAW: every line the census's own includes classifies rides
// ('liar ladder ratchets' - ONE substring voice, the page number and
// the cap the line's own tail holds whatever they read); the abandon
// lines ('liar ladder abandons the glitch class - N confirmed no-op
// pages') and the reset lines ('liar ladder resets') the book's own
// other cells hold never ride - the ratchet cell alone; the ignored-
// glitch cell the abg seat prices and the rescue lane the wrl seat
// prices and the water pass the .202 seat prices and the shore pin
// and the hazard memorize and the transit target the water guard's
// own other voices hold never ride - the lanes never merge.
// THE CENSUS'S OWN RIDE: the word owns no new parser - liarLadder
// ReachBook's own ratchets cell the fold rides (the v0.976.10 census
// - one-parser law, never a fork; the SAME book the reach wire
// already holds; the startstrend family's own ride-the-census
// precedent v0.976.45) - the ratchets cell the line count sums, the
// reach and the cap and the per-bot pages and the unattributed share
// and the abandons and the resets the book's own other cells never
// ride - the ratchet cell alone.
// THE CELL'S OWN WEIGHT 96u the fourteen faces' own total (the
// honest window - the faces 446..459 the artifact fetches re-spoke,
// the fire-1400 mapping the abg and brt and vdt anchors re-proved;
// the field proof 14/14 census==raw zero mismatches -
// scripts/fieldread-liarladder-1500.mjs), THE TOP the count 85 rode
// ONCE (the F459's own crest - MY WORD'S OWN FIRST LIVE READ the
// birth face prices - THE GLITCH'S OWN RETURN the storm the +85 the
// newest climb rides, the reach 55 the storm's own depth the book
// prices beside), the F456's own 8 the return's rehearsal beside,
// THE FLOOR the count 0 rode TEN times (the faces 448..455 and 457
// and 458's own droughts - THE QUIET SKIN THE BOOK HOLDS the zero a
// lawful count - the smelt lane's own zero precedent v0.976.90), the
// book TWO of TWELVE windows speaking (ONE swing, the ZERO swells,
// the ONE fade, the TEN honest silences - the family's own quiet
// skin): the W448 fade 2 -> 1 (-1) -> 0 (-1) the class's own
// stand-down, the W457 swing 0 -> 8 (+8) -> 0 (-8) THE WEIGHT-8
// MIRROR THE ROUND TRIP THE BOOK HOLDS (the return's rehearsal the
// echo paid whole ONE leg ONE boundary 456/457), the W459 the held
// first step the honest silence prices - THE CREST'S OWN SILENCE the
// 85 the held law keeps quiet (the bars never invent: a held step is
// no direction, the storm's own climb the bounds price beside). THE
// BOUNDS' OWN LEGS: the +85 the max rise rode ONE leg ONE boundary
// (the boundary 458/459 - THE GLITCH'S OWN RETURN the quiet paid
// whole 0 -> 85), the -8 the max fall rode ONCE (the boundary
// 456/457 - THE REHEARSAL'S OWN DRAIN the mirror rides); the round
// trips the ONE the weight-8 mirror the book holds.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier
// chain). The fold receives the ratchets count per face (liarLadder
// ReachBook owns the census - one-parser law: the SAME book the
// reach wire holds, never a fork). No two-back face given -> no read
// (the carrier's own null pass); the ratchet's own zero is no fence
// - a zero face rides a lawful count (the drought's own zero the
// fence keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// ratchets' own swell, fall then fall prices the ratchets' own fade,
// a traded direction prices the ratchets' own swing, a held step (any
// count-to-count zero) prices the honest silence (a held count is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's own
// verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication.
//
// THE .225 SEAT MINE - the furnace no-walk open's own trend the fire
// before rode - this word the ratchet cell's own seat takes, the
// furnace open cell the .225 seat keeps - different cells the seats
// co-exist by, ONE reader the book holds all words read. CENSUS
// GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits
// (the decompose's own first ratchet trend read - the cell the
// reader never priced across the faces before this word).

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {ratchets}, prev: {ratchets}, cur: {ratchets} }
 * @returns {boolean}
 */
export function liarLadderRatchetTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.ratchets) && s.ratchets >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the ratchets' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {ratchets}, prev: {ratchets}, cur: {ratchets} }
 * @returns {string|null} the row byte, or null
 */
export function liarLadderRatchetTrendRow (e) {
  if (!liarLadderRatchetTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.ratchets - back.ratchets
  const second = cur.ratchets - prev.ratchets
  const arc = `${back.ratchets} -> ${prev.ratchets} (${first >= 0 ? '+' : ''}${first}) -> ${cur.ratchets} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, the bank views' own trend prices the bank views' own mass across the faces, the air bar glitch's own trend prices the air bar glitch's own mass across the faces, the banked receipt's own trend prices the banked receipt's own mass across the faces, the water rescue lane's own trend prices the water rescue lane's own mass across the faces, the furnace no-walk open's own trend prices the furnace no-walk open's own mass across the faces, the pre-position walk home's own trend prices the pre-position walk home's own mass across the faces, this word prices the liar-ladder ratchet's own mass across the faces - the liar-ladder ratchet seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the liar-ladder ratchet trend (v0.976.227): the ratchets' rise ran two steps deep - ${arc} - the ratchets' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the liar-ladder ratchet trend (v0.976.227): the ratchets' fall ran two steps deep - ${arc} - the ratchets' own fade ${tail}`
  }
  return `the liar-ladder ratchet trend (v0.976.227): the ratchets' own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
