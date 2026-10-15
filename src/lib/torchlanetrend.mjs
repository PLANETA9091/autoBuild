// (v0.976.89) THE TORCH LANE'S OWN TREND - the commons ledger's own
// torch lane book's trend seat: the torch lane - the sweeps the ask
// armed (the craft torches' pocket-coal resupply asked the commons,
// the sweep opened under the ask's own lane, the visit closed by
// class) - its magnitude shape across three faces. The mass: the
// ledger's own laneTorch count (one-parser law; the SAME cell the
// sweeps line already holds: "sweeps N (torch lane N / smelt lane N)").
//
// The field priced every branch by hand SIXTEEN faces deep before the
// word existed (the torch lane's own count face by face, the ledger's
// own arithmetic: 347 rode 31, 348 rode 35, 349 rode 33, 350 rode 25,
// 351 rode 35, 352 rode 33, 353 rode 40, 354 rode 32, 355 rode 45,
// 356 rode 38, 357 rode 37, 358 rode 37, 359 rode 41, 360 rode 39,
// 361 rode 33, 362 rode 31 - the count never fell to zero, the ask's
// own lane breathes every walk) - the FACE 349 chain the swing
// 31 -> 35 (+4) -> 33 (-2), THE FACE 350 CHAIN THE FADE'S OWN RIDE
// 35 -> 33 (-2) -> 25 (-8) - the lane's own easing, the FACE 351
// through 356 chains the swings six rides straight (33 -> 25 (-8) ->
// 35 (+10), 25 -> 35 (+10) -> 33 (-2), 35 -> 33 (-2) -> 40 (+7),
// 33 -> 40 (+7) -> 32 (-8), 40 -> 32 (-8) -> 45 (+13), 32 -> 45
// (+13) -> 38 (-7) - the ask-and-answer the sweeps' own word priced
// beside it, the lane's own breath the same shape one book deeper),
// THE FACE 357 CHAIN THE FADE 45 -> 38 (-7) -> 37 (-1), the FACE 358
// chain the held second step 38 -> 37 (-1) -> 37 (0), the FACE 359
// chain the held first step 37 -> 37 (0) -> 41 (+4), the FACE 360
// chain the swing 37 -> 41 (+4) -> 39 (-2), and the FACE 361/362
// chains TWO FADES STRAIGHT (41 -> 39 (-2) -> 33 (-6), 39 -> 33 (-6)
// -> 31 (-2) - the lane's own easing closing the word's own birth
// window, the sweeps' own two-fade exit v0.976.88 mirrored one book
// down) - THE WORD BORN SPEAKING TWELVE CHAINS DEEP (eight swings +
// four fades) with the held step riding the priced field twice as the
// honest silence - THE FAMILY'S OWN FIRST MIXED BIRTH (the arrows and
// the holds side by side; the waterline's own all-silent birth
// v0.976.87 the mirror, the sweeps' own all-speaking v0.976.88 the
// other). The swell never rode the sixteen priced faces (the lane
// never built two rises straight - the commons' own ask breathes in
// trades, the yard's own law mirrored); the branch law prices it, the
// bars never invent the shapes the field keeps.
//
// The seat law: the sweep's own seat (v0.800.0) prices WHICH close
// class the book holds WITHIN one face, the chest's own close
// (v0.815.0) prices the yard's own drought WITHIN one face, the
// rent's own seat (v0.821.0) prices the last mile's own band WITHIN
// one face, the dry read's own clock (v0.924.0) prices the dry
// reads' own thirds WITHIN one face, the tithe's own clock
// (v0.927.0) prices the inflow's own thirds WITHIN one face, the
// starvation's own grand total (v0.975.5) prices the decide lanes'
// own sum, the sweeps' own trend (v0.976.88) prices the sweeps' own
// mass ACROSS the walks, this word prices the TORCH LANE'S OWN MASS
// ACROSS the walks - the lane split of the sweep book (the kill
// venue's own trilogy the precedent: the kills' word prices the
// mass, the venues' words price the classes - the cells never merge).
// The smelt lane's own mass never joins - a different lane, a
// different book (the ask armed the torch visit, the unasked visit
// the smelt lane's own; this word prices the ask's own lane alone).
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// torch lane's own swell, fall then fall prices the torch lane's own
// fade, a traded direction prices the torch lane's own swing, a held
// step (any count-to-count zero) prices the honest silence (a held
// lane is no direction - the bars never invent; the watertrend
// family's own held law). The byte-pin: the trend row never speaks
// the shape's own verdict words (no return, no repeat, no stay, no
// run) nor the seats' own verdict word (no owns) nor the dynasty's
// own (no dynasty, no turn) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the
// sweep's seat, the chest's close, the rent's seat, the dry read's
// clock, the tithe's clock, the starvation's grand total, the
// sweeps' own trend) - the names ride by law, the neighbor verdicts
// never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the sweeps' own v0.976.88). The fold receives the ledger's
// own laneTorch per face (commonsLedger owns the lane count - one-
// parser law: the same ledger runs over each face's own lines, never
// a fork; the SAME cell the sweeps line holds: "torch lane N"). No
// two-back face given -> no read (the carrier's own null pass); the
// sweeps gate above the fold is the branch's own fence - a
// zero-sweep face reads the honest silence (the v0.800.0 law).
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
 *   { back: {laneTorch}, prev: {laneTorch}, cur: {laneTorch} }
 * @returns {boolean}
 */
export function torchLaneTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.laneTorch) && s.laneTorch >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the torch lane's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {laneTorch}, prev: {laneTorch}, cur: {laneTorch} }
 * @returns {string|null} the row byte, or null
 */
export function torchLaneTrendRow (e) {
  if (!torchLaneTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.laneTorch - back.laneTorch
  const second = cur.laneTorch - prev.laneTorch
  const arc = `${back.laneTorch} -> ${prev.laneTorch} (${first >= 0 ? '+' : ''}${first}) -> ${cur.laneTorch} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, this word prices the torch lane's own mass across the walks, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the torch lane's own trend (v0.976.89): the torch lane's rise ran two steps deep - ${arc} - the torch lane's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the torch lane's own trend (v0.976.89): the torch lane's fall ran two steps deep - ${arc} - the torch lane's own fade ${tail}`
  }
  return `the torch lane's own trend (v0.976.89): the torch lane's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
