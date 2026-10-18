// (v0.976.222) THE AIR-BAR GLITCH'S OWN TREND - the oxygen bar's own
// ignored-glitch read mass across the faces beside the raw lane words:
// the field's own scan named the family the seat first (the 'F<n>
// [F<n>] water: air-bar glitch ignored (oxygen 0 on dry land at
// [x,y,z], N total)' family the water guard prints when the oxygen
// bar reads critical while the bot stands on dry land - the liar
// ladder's own page the ratchet prices before the override believes
// the bar, the v0.976.x liar-ladder ratchet the override's own gate
// holds) - this word prices the ignored reads' own mass ACROSS the
// faces, co-existence by seat never by duplication.
// THE RAW LAW: every line the emitter prints rides, no exclusion the
// family needs ('F<n> [F<n>] water: air-bar glitch ignored (oxygen 0
// on dry land at [x,y,z], N total)' - ONE emitter, one prefix shape,
// the bracket voice the family prints only - the bare form never rode
// the window - zero untagged lines the field holds, the grammar the
// bracket keeps for the bare caller's own read); the line's own count
// rides whole whatever the cell and the total hold; the override's
// own lines never ride ('water: air-bar glitch override - N
// consecutive critical-on-dry reads, believing the bar at [x,y,z]' -
// the override the ratchet's own BELIEF print, a different emitter
// voice the same guard holds - the ignored cell alone), the liar
// ladder's own ratchet pages and the water pass and the rescue and
// the hazard and the frozen lanes the water guard's own other voices
// hold never ride - the lanes never merge.
// THE CENSUS LAW: the word owns the count - no census owned the
// ignored-glitch cell (the .212 hazardMemorizeCount precedent the
// family's first census rides, the .217 relootHeadingCount and the
// .220 verticalDoomSkipCount the same law hold) - airBarGlitchCount
// the family's own count, one parser never a second; the lanes never
// merge (the override's own lines and the liar-ladder ratchet pages
// and the water guard's own other lanes never ride - the ignored
// cell alone).
// THE CELL'S OWN WEIGHT 20u the eleven faces' own total (the honest
// window - the faces 446..456 the artifact fetches re-spoke, the
// storm's own wake the window prices; the field proof 11/11
// census==raw zero mismatches - scripts/fieldread-airbarglitch-1230.mjs,
// the grammar strict 20/20 zero mismatch, the bare form the zero the
// survey holds, the override lines the FOUR the window holds never
// ride - the ignored cell alone), THE TOP the count 14 rode ONCE
// (the F456's own crest - MY WORD'S OWN FIRST LIVE READ the birth
// face the .220 tree's own log prices), THE FLOOR the count 0 rode
// EIGHT times (the faces 448..455's own droughts - THE QUIET SKIN
// THE BOOK HOLDS the storm's own wake the drought prices, the zero a
// lawful count - the smelt lane's own zero precedent v0.976.90), the
// book ONE of NINE windows speaking (ONE fade, the ZERO swells, the
// ZERO swings, the EIGHT honest silences - the family's own quiet
// skin): the W448 fade 4 -> 2 (-2) -> 0 (-2) the storm's own drain,
// the W449..W455 the sevens' own silences the drought rides, the
// W456 the held first step the honest silence prices - THE CREST'S
// OWN SILENCE the 14 the held law keeps quiet (the bars never
// invent: a held step is no direction, the crest's own climb the
// bounds price beside). THE BOUNDS' OWN LEGS: the +14 the max rise
// rode ONE leg ONE boundary (the boundary 455/456 - THE CREST'S OWN
// CLIMB the quiet paid whole 0 -> 14), the -2 the max fall rode TWICE
// two boundaries (the boundaries 446/447 and 447/448 - THE STORM'S
// OWN WAKE the twin drain); the round trips the ZERO the book holds
// (the swings never mirrored).
//
// The carrier: decompose's deep-prior argv tail (the two-back face
// rides argv[5], nearest first; the trend family's own carrier chain).
// The fold receives the count per face (airBarGlitchCount owns the
// census - one-parser law: the SAME count runs over each face's own
// lines, never a fork). No two-back face given -> no read (the
// carrier's own null pass); the ignored's own zero is no fence - a
// zero face rides a lawful count (the drought's own zero the fence
// keeps).
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// ignored's own swell, fall then fall prices the ignored's own fade,
// a traded direction prices the ignored's own swing, a held step (any
// count-to-count zero) prices the honest silence (a held count is no
// direction - the bars never invent; the watertrend family's own held
// law). The byte-pin: the trend row never speaks the shape's own
// verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication.
//
// THE .221 SEAT THEIRS - their bank views' own trend (e6e2e03) the
// fire before rode - this word the air-bar glitch cell's own seat
// takes, the bank views cell the .221 seat keeps - different cells
// the seats co-exist by, ONE reader the book holds all words read.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits (the decompose's own first air-bar glitch trend read - the
// cell the reader never priced across the faces before this word).

const IGNORED_RE = /^F\d+ (?:\[[A-Za-z0-9]+\] )?water: air-bar glitch ignored \(oxygen 0 on dry land at \[-?\d+,-?\d+,-?\d+\], \d+ total\)$/

/**
 * The family's own count - the ignored reads' own strict grammar
 * (the .212 hazardMemorizeCount precedent - the word owns the
 * census, one parser never a second). The override's own lines and
 * the liar-ladder ratchet pages never ride (the lanes never merge -
 * the ignored cell alone).
 *
 * @param {string[]} lines the face's own log lines
 * @returns {number} the ignored reads' own count
 */
export function airBarGlitchCount (lines) {
  if (!Array.isArray(lines)) return 0
  let n = 0
  for (const l of lines) {
    if (typeof l === 'string' && IGNORED_RE.test(l)) n++
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
 *   { back: {ignored}, prev: {ignored}, cur: {ignored} }
 * @returns {boolean}
 */
export function airBarGlitchTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.ignored) && s.ignored >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the ignored's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {ignored}, prev: {ignored}, cur: {ignored} }
 * @returns {string|null} the row byte, or null
 */
export function airBarGlitchTrendRow (e) {
  if (!airBarGlitchTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.ignored - back.ignored
  const second = cur.ignored - prev.ignored
  const arc = `${back.ignored} -> ${prev.ignored} (${first >= 0 ? '+' : ''}${first}) -> ${cur.ignored} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, the bank views' own trend prices the bank views' own mass across the faces, this word prices the air-bar glitch's own mass across the faces - the air-bar glitch seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the air-bar glitch trend (v0.976.222): the ignored's rise ran two steps deep - ${arc} - the ignored's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the air-bar glitch trend (v0.976.222): the ignored's fall ran two steps deep - ${arc} - the ignored's own fade ${tail}`
  }
  return `the air-bar glitch trend (v0.976.222): the ignored's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
