// (v0.976.91) THE ASKS' OWN TREND - the commons ledger's own request
// book's trend seat: the asks - the torch-coal resupply requests the
// fleet's pockets opened at the commons (the ask is the request, the
// sweep is the walk - the sweeps' own word named the split; the
// summary line holds the book's own cell: "asks N (M coal asked)")
// - their magnitude shape across three faces. The mass: the ledger's
// own asks count (one-parser law; the SAME cell the summary line
// already holds).
//
// The field priced every branch by hand SEVENTEEN faces deep before
// the word existed (the asks' own count face by face, the ledger's
// own arithmetic - the ask's own sizing rides the constant's own law,
// the askCoal held exactly two units per ask on every priced face, so
// the count is the book's own mass: 347 rode 32, 348 rode 36, 349
// rode 35, 350 rode 25, 351 rode 36, 352 rode 33, 353 rode 42, 354
// rode 34, 355 rode 45, 356 rode 38, 357 rode 38, 358 rode 37, 359
// rode 41, 360 rode 39, 361 rode 33, 362 rode 31, 363 rode 31 - the
// count never fell to zero, the pockets' own hunger breathes every
// walk - THE FACE 349 CHAIN THE SWING 32 -> 36 (+4) -> 35 (-1), THE
// FACE 350 CHAIN THE FADE 36 -> 35 (-1) -> 25 (-10), the FACE 351
// through 356 chains the swings six rides straight (35 -> 25 (-10)
// -> 36 (+11), 25 -> 36 (+11) -> 33 (-3), 36 -> 33 (-3) -> 42 (+9),
// 33 -> 42 (+9) -> 34 (-8), 42 -> 34 (-8) -> 45 (+13), 34 -> 45
// (+13) -> 38 (-7)), the FACE 357 CHAIN the held second step 45 ->
// 38 (-7) -> 38 (0) (the honest silence), the FACE 358 CHAIN the
// held first step 38 -> 38 (0) -> 37 (-1) (the honest silence), the
// FACE 359 CHAIN THE SWING 38 -> 37 (-1) -> 41 (+4), the FACE 360
// CHAIN THE SWING 37 -> 41 (+4) -> 39 (-2), the FACE 361 CHAIN THE
// FADE 41 -> 39 (-2) -> 33 (-6), the FACE 362 CHAIN THE FADE 39 ->
// 33 (-6) -> 31 (-2), and THE FACE 363 CHAIN the held second step
// 33 -> 31 (-2) -> 31 (0) - THE WORD'S OWN BIRTH RIDE, the ask's own
// settle closing the two fades' own window - THE WORD BORN SPEAKING
// TWELVE CHAINS DEEP (nine swings + three fades) with the THREE
// honest silences riding the priced field beside them (the re-verdict's
// own FACE 350 arrival the precedent - the word born on the honest
// silence speaks when the held breaks). The swell never rode the
// seventeen priced faces (the asks never built two rises straight -
// the pockets' own hunger breathes in trades, the yard's own law
// mirrored); the law prices it anyway, the bars never invent the
// shapes the field keeps.
//
// The seat law: the sweep's own seat (v0.800.0) prices WHICH close
// class the book holds WITHIN one face, the chest's own close
// (v0.815.0) prices the yard's own drought WITHIN one face, the
// rent's own seat (v0.821.0) prices the last mile's own band WITHIN
// one face, the dry read's own clock (v0.924.0) prices the dry
// reads' own thirds WITHIN one face, the tithe's own clock
// (v0.927.0) prices the inflow's own thirds WITHIN one face, the
// starvation's own grand total (v0.975.5) prices the decide lanes'
// own sum, the sweeps' own trend (v0.976.88) prices the walks' own
// TOTAL mass across the faces, the torch lane's own trend
// (v0.976.89) prices the ask's own lane's class count across the
// walks, the smelt lane's own trend (v0.976.90) prices the silent
// leg's own class count across the walks, this word prices the
// ASKS' OWN COUNT ACROSS the walks - different books, the cells
// never merge (the ask is the request, the sweep is the walk - the
// sweeps' own word named the split; the askCoal's own units never
// join - the sizing rides the constant's own law, the count is the
// mass). The branch law: ONE SHAPE ONE WORD - rise then rise prices
// the asks' own swell, fall then fall prices the asks' own fade, a
// traded direction prices the asks' own swing, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own
// held law). The byte-pin: the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - co-existence by seat never by duplication;
// the seat-law tail names the neighbor seats (the sweep's seat, the
// chest's close, the rent's seat, the dry read's clock, the tithe's
// clock, the starvation's grand total, the sweeps' own trend, the
// torch lane's own trend, the smelt lane's own trend) - the names
// ride by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the smelt lane's own v0.976.90). The fold receives the
// ledger's own asks per face (commonsLedger owns the asks count -
// one-parser law: the same ledger runs over each face's own lines,
// never a fork; the SAME cell the summary line holds: "asks N").
// No two-back face given -> no read (the carrier's own null pass);
// the commons gate above the fold is the branch's own fence (the
// sweeps word's own law).
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
 *   { back: {asks}, prev: {asks}, cur: {asks} }
 * @returns {boolean}
 */
export function asksTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.asks) && s.asks >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the asks' own two-step shape. The honest null
 * when a step held (no direction - the family's own held law) or the
 * fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {asks}, prev: {asks}, cur: {asks} }
 * @returns {string|null} the row byte, or null
 */
export function asksTrendRow (e) {
  if (!asksTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.asks - back.asks
  const second = cur.asks - prev.asks
  const arc = `${back.asks} -> ${prev.asks} (${first >= 0 ? '+' : ''}${first}) -> ${cur.asks} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the walks' own total mass across the faces, the torch lane's own trend prices the ask's own lane's class count across the walks, the smelt lane's own trend prices the silent leg's own class count across the walks, this word prices the asks' own count across the walks, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the asks' own trend (v0.976.91): the asks' rise ran two steps deep - ${arc} - the asks' own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the asks' own trend (v0.976.91): the asks' fall ran two steps deep - ${arc} - the asks' own fade ${tail}`
  }
  return `the asks' own trend (v0.976.91): the asks' own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
