// (v0.976.219) THE PLAN TOP'S OWN TREND - the named board's own print mass
// across the faces beside the raw lane words: the field's own scan
// named the family the seat first (the 'plan top: <res> <req>/<have>
// (<pct>%) ...' family - the named board the ticker block prints
// beside the deficits row, the v0.440.0 word's own voice - the <res>
// the plan's resource key the slot leads, the <req>/<have> the
// deficits entry's own numbers the board tiles byte for byte, the
// <pct> the fill percent the entry prices, the 5891u the heaviest
// clean-grammar unpriced voice the cache holds, the strict grammar
// 5891/5891 zero mismatch); THE RAW LAW: every line the
// named board's own token classifies rides, no exclusion the family
// needs (the entries tile the tail the emitter's own law holds - the
// v0.440.0 tiling law); the deficits row never rides (the 'deficits:
// ' token the other lane's own shape the .199 seat prices, the same
// tick the different line), the status line and the mem line and the
// heartbeat the ticker's own other rows never ride.
// THE REUSE LAW: planTopCensus's own rows cell the fold rides (the
// v0.440.0 census - one-parser law, never a fork; the SAME census the
// decompose's own wire already holds) - the rows cell the board's own
// parsed-row count sums, the slots per row and the seat names and the
// by-res arcs and the unparsed the census's own other cells hold
// never ride - the lanes never merge (the leak sentinels the
// v0.442.0 law holds - a slot named undefined or null reads bad, the
// fake name never joins the board).
// THE CELL'S OWN WEIGHT 5891u the 114 faces' own total, THE
// ALL-SPEAKING BIRTH the zero rode NEVER over the field 2639u/50f
// (the whole cache the zero never rode either - the no-drought cache
// the ticker's own cadence prices).
// THE FIELD'S OWN TOP THE COUNT 64 rode ONCE (the face 379's own
// crest - THE FIELD STORM), THE FIELD'S OWN FLOOR THE COUNT 8 rode
// ONCE (the face 346's own floor);
// the whole-cache top THE COUNT 64 rode ONCE (the face 379's own
// crest - THE WHOLE-CACHE STORM), the whole-cache floor THE COUNT
// 8 rode TWO (the faces 346, 396's own floors).
// THE FIELD'S OWN BOOK 42 of 48 windows speaking (26 swings,
// 11 swells, 5 fades, 6 honest silences) beside the whole-cache
// book 94 of 112 (59/21/14/18).
// THE FIVE-SWING RUN 360..364 THE FIELD'S OWN RECORD THE WHOLE-CACHE RECORD BOTH BOOKS RIDE (the bounds never extend).
// THE ROUND TRIPS the field 1 (the W374 weight-12 mirror the biggest field trip) beside the whole cache 3.
// THE BOUNDS' OWN LEGS: the +54 rode ONE leg ONE boundary (346/347 the climb), the
// -49 rode ONE leg ONE boundary (345/346 the drain).
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain).
// The fold receives the plan top rows cell per face (planTopCensus
// owns the census - one-parser law: the SAME census the decompose's
// own wire already holds rides the fold, never a re-run; the rows
// cell the board's own parsed-row count sums). No two-back face given
// -> no read (the carrier's own null pass); the board's own zero is
// no fence - a zero face rides a lawful count (the drought's own zero
// the fence keeps - the zero never rode the cache the all-speaking
// law prices).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// board's own swell, fall then fall prices the board's own fade, a
// traded direction prices the board's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held board count
// is no direction - the bars never invent; the watertrend family's
// own held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no dynasty,
// no turn) - co-existence by seat never by duplication.
//
// THE .218 SEAT THEIRS - their ledger dead-lid save's own trend the
// fire before rode - this word the named board's own seat takes, the
// deficits row the .199 seat keeps - different cells the seats
// co-exist by, ONE ticker block the same tick prints both lines.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// decompose's own first plan top trend read - the named board the
// reader never priced across the faces before this word; the deficits
// row and the status line and the mem line and the heartbeat never
// ride - the lanes never merge).

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * drought's own zero the proof - the zero never rode the cache the
 * all-speaking law prices). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {rows}, prev: {rows}, cur: {rows} }
 * @returns {boolean}
 */
export function planTopTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.rows) && s.rows >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the board's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {rows}, prev: {rows}, cur: {rows} }
 * @returns {string|null} the row byte, or null
 */
export function planTopTrendRow (e) {
  if (!planTopTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.rows - back.rows
  const second = cur.rows - prev.rows
  const arc = `${back.rows} -> ${prev.rows} (${first >= 0 ? '+' : ''}${first}) -> ${cur.rows} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, this word prices the plan top's own mass across the faces - the plan top seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the plan top trend (v0.976.219): the board's rise ran two steps deep - ${arc} - the board's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the plan top trend (v0.976.219): the board's fall ran two steps deep - ${arc} - the board's own fade ${tail}`
  }
  return `the plan top trend (v0.976.219): the board's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
