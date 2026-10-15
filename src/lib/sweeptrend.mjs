// (v0.976.88) THE SWEEPS' OWN TREND - the commons ledger's own
// sweep book's trend seat: the sweeps - the fuel commons visits the
// fleet opens at the anchor read and closes by class (the delivered,
// the budget spent, the ghost, the no-chest, the honest exhaust) -
// their magnitude shape across three faces. The mass: the ledger's
// own sweeps count (one-parser law; the SAME cell the sweeps line
// already holds: "sweeps N (torch lane N / smelt lane N)").
//
// The field priced every branch by hand FIFTEEN faces deep before the
// word existed (the sweeps' own count face by face, the ledger's own
// arithmetic: 348 rode 44, 349 rode 36, 350 rode 31, 351 rode 41,
// 352 rode 34, 353 rode 57, 354 rode 32, 355 rode 51, 356 rode 44,
// 357 rode 45, 358 rode 43, 359 rode 57, 360 rode 44, 361 rode 36,
// 362 rode 32 - the count never fell to zero, the yard's own ask
// breathes every walk - THE FACE 350 CHAIN THE FADE'S OWN RIDE
// 44 -> 36 (-8) -> 31 (-5), the FACE 351 through 360 chains the
// swings (ten rides straight: 36 -> 31 (-5) -> 41 (+10), 31 -> 41
// (+10) -> 34 (-7), 41 -> 34 (-7) -> 57 (+23), 34 -> 57 (+23) ->
// 32 (-25), 57 -> 32 (-25) -> 51 (+19), 32 -> 51 (+19) -> 44 (-7),
// 51 -> 44 (-7) -> 45 (+1), 44 -> 45 (+1) -> 43 (-2), 45 -> 43 (-2)
// -> 57 (+14), 43 -> 57 (+14) -> 44 (-13) - the yard's own
// ask-and-answer trading walk after walk), THE FACE 361 CHAIN THE
// FADE 57 -> 44 (-13) -> 36 (-8), and THE FACE 362 CHAIN THE FADE
// 44 -> 36 (-8) -> 32 (-4) - TWO FADES STRAIGHT, the yard's own
// easing closing the word's own birth window - THE WORD BORN
// SPEAKING THIRTEEN CHAINS DEEP (three fades + ten swings, the
// fullest chain coverage at birth beside the water kill's seven-chain
// v0.976.84 and the other exit's five-chain v0.976.86). The swell
// never rode the fifteen priced faces (the sweeps never built two
// rises straight - the yard's own ask breathes in trades); the held
// step never rode either - the branch law prices both, the bars
// never invent the shapes the field keeps, the law prices the
// branches, the field holds the silence.
//
// The seat law: the sweep's own seat (v0.800.0) prices WHICH close
// class the book holds WITHIN one face, the chest's own close
// (v0.815.0) prices the yard's own drought WITHIN one face, the
// rent's own seat (v0.821.0) prices the last mile's own band WITHIN
// one face, the dry read's own clock (v0.924.0) prices the dry
// reads' own thirds WITHIN one face, the tithe's own clock
// (v0.927.0) prices the inflow's own thirds WITHIN one face, the
// starvation's own grand total (v0.975.5) prices the decide lanes'
// own sum, this word prices the SWEEPS' OWN MASS ACROSS the walks -
// different books, the cells never merge (the delivered's own mass
// never joins - its own drought the chest's word prices; the asks'
// own count never joins - the ask is the request, the sweep is the
// walk, a different book again). The branch law: ONE SHAPE ONE WORD
// - rise then rise prices the sweeps' own swell, fall then fall
// prices the sweeps' own fade, a traded direction prices the
// sweeps' own swing, a held step (any count-to-count zero) prices
// the honest silence (a held lane is no direction - the bars never
// invent; the watertrend family's own held law). The byte-pin: the
// trend row never speaks the shape's own verdict words (no return,
// no repeat, no stay, no run) nor the seats' own verdict word
// (no owns) nor the dynasty's own (no dynasty, no turn) -
// co-existence by seat never by duplication; the seat-law tail
// names the neighbor seats (the sweep's seat, the chest's close,
// the rent's seat, the dry read's clock, the tithe's clock, the
// starvation's grand total) - the names ride by law, the neighbor
// verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the other exit's own v0.976.86). The fold receives the
// ledger's own sweeps per face (commonsLedger owns the sweeps count
// - one-parser law: the same ledger runs over each face's own
// lines, never a fork; the SAME cell the sweeps line holds:
// "sweeps N"). No two-back face given -> no read (the carrier's
// own null pass); the sweeps gate above the fold is the branch's
// own fence - a zero-sweep face reads the honest silence (the
// v0.800.0 law).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {sweeps}, prev: {sweeps}, cur: {sweeps} }
 * @returns {boolean}
 */
export function sweepTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.sweeps) && s.sweeps >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the sweeps' own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {sweeps}, prev: {sweeps}, cur: {sweeps} }
 * @returns {string|null} the row byte, or null
 */
export function sweepTrendRow (e) {
  if (!sweepTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.sweeps - back.sweeps
  const second = cur.sweeps - prev.sweeps
  const arc = `${back.sweeps} -> ${prev.sweeps} (${first >= 0 ? '+' : ''}${first}) -> ${cur.sweeps} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, this word prices the sweeps' own mass across the walks, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the sweeps' own trend (v0.976.88): the sweeps' rise ran two steps deep - ${arc} - the sweeps' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the sweeps' own trend (v0.976.88): the sweeps' fall ran two steps deep - ${arc} - the sweeps' own fade ${tail}`
  }
  return `the sweeps' own trend (v0.976.88): the sweeps' own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
