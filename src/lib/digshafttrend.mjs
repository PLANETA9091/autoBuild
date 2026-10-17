// (v0.976.205) THE DIG SHAFT LANE'S OWN TREND - the fleet's core mining
// engine's own descent lane's own line mass across the faces beside the
// raw lane words: the field's own scan named the lane the seat first
// (the 'F<n> [F<n>] digShaft: <skin>' family - the water table lids and
// the hazard refusals and the water strikes the whole lane prints) -
// the shaft lane's own within-face seats beside (the aquifer's own
// census prices the strike and the lid and the give-up anatomy within
// one face, the waterhazard's own lens prices the refusal's own cell
// within one face) - this word prices the LANE's own mass ACROSS the
// faces, co-existence by seat never by duplication.
// THE RAW LAW: every line the shape prints rides, no exclusion the
// shape needs (the lid and the refusal and the strike skins - the
// strike's own name never splits, the water strike and the
// bubble_column strike the same count rides whole - and the give-up
// and the health-pause skins the emitters hold the same prefix shape
// prices) - the survey's own zero-variant proof rides (every digShaft
// line the whole cache holds the one double-prefix shape classifies,
// zero non-shape lines - the grammar strict).
// THE CELL'S OWN WEIGHT 5618u the sixty-five faces' own total - the
// vein sweep's own 11630u the heavier sibling beside (the .204 word's
// own cell), the pounce probe's own 1698u the lighter beside (the
// .203 word's own cell), the smelt bands' own 571u the lighter still
// (the .201 word's own cell) - this word's own weight the aquifer
// front's own mass the mining engine's descent lane prices.
// THE BIRTH FIELD 3866u the forty-three faces' own total beside - THE
// NO-DROUGHT BIRTH the zero never rode (forty-three faces and no zero
// the book holds, the whole cache the zero never rode either -
// sixty-five faces and no drought the no-drought family the newest
// seat joins).
// THE FIELD'S OWN TOP THE COUNT 190 rode ONCE (the face 371's own
// crest - THE STORM), THE FIELD'S OWN FLOOR THE COUNT 2 rode ONCE
// (the face 377's own floor - THE FLOOR THE STORM'S OWN DRAIN prices);
// the whole-cache top THE COUNT 190 the same crest rides, the
// whole-cache floor THE COUNT 2 the same floor rides.
// THE FIELD BOOK FORTY-ONE of FORTY-ONE windows speaking (THIRTY
// swings, SIX swells, FIVE fades, the ZERO honest silences) beside the
// whole-cache book SIXTY-THREE of SIXTY-THREE windows speaking
// (FORTY-SIX swings, ELEVEN swells, SIX fades, the ZERO honest
// silences) - THE ALL-SPEAKING FAMILY'S OWN SEAT the pair rides (the
// .204's own pair 48/48 + 98/98 the record was, this word's own pair
// 41/41 + 63/63 the all-speaking family's own newest seat holds).
// THE ELEVEN-SWING RUN the faces 350..360 hold - THE RECORD BOTH
// BOOKS RIDE (the field's own record and the whole cache's own record
// the SAME run prices - the .204's own eight-swing run a different
// lane's own record, the records never merge; the bounds never extend
// - the swell 349 and the fade 361 hold); THE EIGHT-SWING RUN the
// faces 432..439 hold the whole cache beside (the bounds never extend
// - the swell 431 and the swell 440 hold); the gap-crossing swing
// runs the five-window pair holds beside (the 386..417 run the absent
// 390..416 span crosses, the 420..425 run the absent 424 crosses).
// THE ZERO ROUND TRIPS the books hold (the swings never mirrored -
// the field and the whole cache agree).
// THE BOUNDS' OWN LEGS: the +168 the max rise rode ONE leg ONE
// boundary (the boundary 381/382 - THE SECOND CREST'S OWN CLIMB the
// 18u trough paid), the -128 the max fall rode ONE leg ONE boundary
// (the boundary 382/383 - THE SECOND CREST'S OWN DRAIN 186 -> 58) -
// both books the same legs ride.
// the last field word the face 389's own window the swing (100 -> 30
// (-70) -> 124 (+94)).
// THE WHOLE-CACHE SEAT 5618u the sixty-five faces the cache holds
// (the span 347..441, the absent 390..416 span and the 419 and the
// 424 and the 428 the honest gaps the cache holds not) - the newest
// windows the W434..W439 swings and the W440 swell (23 -> 59 (+36) ->
// 111 (+52)) and the W441 swell (59 -> 111 (+52) -> 158 (+47)) MY
// WORD'S OWN FIRST LIVE READ the nearest-completed law holds.
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain).
// The fold receives the lane's own raw count per face (the raw law's
// own read - every line the double-prefix shape prints rides; no
// census fork the lane needs - the aquifer's and the waterhazard's own
// within-face censuses the seats beside price, never this word's own
// read). No two-back face given -> no read (the carrier's own null
// pass); the lane's own zero is no fence - a zero face rides a lawful
// count (the drought's own zero the fence keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// lane's own swell, fall then fall prices the lane's own fade, a
// traded direction prices the lane's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane count is
// no direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's own
// verdict words (no return, no repeat, no stay, no run) nor the seats'
// own verdict word (no owns) nor the dynasty's own (no dynasty, no
// turn) - co-existence by seat never by duplication.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// decompose's own first dig shaft trend read - the lane the reader
// never priced across the faces before this word; the aquifer's own
// anatomy census and the waterhazard's own refusal cell and the
// veincast's own bot axis never ride - the lanes never merge).

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * no-drought birth's own zero the proof). Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {digShafts}, prev: {digShafts}, cur: {digShafts} }
 * @returns {boolean}
 */
export function digShaftTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.digShafts) && s.digShafts >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the lane's own two-step shape. The honest null
 * when a step held (no direction - the family's own held law) or the
 * fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {digShafts}, prev: {digShafts}, cur: {digShafts} }
 * @returns {string|null} the row byte, or null
 */
export function digShaftTrendRow (e) {
  if (!digShaftTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.digShafts - back.digShafts
  const second = cur.digShafts - prev.digShafts
  const arc = `${back.digShafts} -> ${prev.digShafts} (${first >= 0 ? '+' : ''}${first}) -> ${cur.digShafts} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, this word prices the dig shaft's own mass across the faces - the dig shaft seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the dig shaft trend (v0.976.205): the lane's rise ran two steps deep - ${arc} - the lane's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the dig shaft trend (v0.976.205): the lane's fall ran two steps deep - ${arc} - the lane's own fade ${tail}`
  }
  return `the dig shaft trend (v0.976.205): the lane's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
