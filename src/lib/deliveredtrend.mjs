// (v0.976.92) THE DELIVERED'S OWN TREND - the commons ledger's own
// delivery book's trend seat: the delivered - the yard chests' own
// handoffs ('took N units (M x coal) from a yard chest' - the sweep
// is the walk, the took is the yield) - their magnitude shape across
// three faces. The mass: the ledger's own delivered count (one-parser
// law; the SAME cell the sweeps line already holds: "delivered N (M
// units)").
//
// The field priced every branch by hand EIGHTEEN faces deep before
// the word existed (the delivered's own count face by face, the
// ledger's own arithmetic: 347 rode 0, 348 rode 0, 349 rode 0,
// 350 rode 0, 351 rode 0, 352 rode 0, 353 rode 0, 354 rode 0,
// 355 rode 0, 356 rode 0, 357 rode 0, 358 rode 0, 359 rode 0,
// 360 rode 0, 361 rode 0, 362 rode 0, 363 rode 0, 364 rode 0 - the
// count never left zero, THE YARD'S OWN LONG DRY: the sweeps walk
// every face (the walk's own mass the sweeps' own word v0.976.88
// prices beside), the chests give nothing back - the empties, the
// open fails, the last-mile refusals, the budget's own 0/2 exits)
// - EVERY SIXTEEN CHAINS THE FIELD HAS HELD RODE THE HONEST SILENCE
// - THE WORD BORN WHOLE AND SILENT, THE FAMILY'S SECOND ALL-SILENT
// BIRTH (the waterline kill's own v0.976.87 the mirror: that seat
// ships whole because the storm had not come yet, and its own FACE
// 360 twelve-kill storm arrived after - the dry-shore kill's own
// precedent). The seat ships whole because the yard's own waking has
// not come yet: the first took the field records will speak the
// word's own birth ride (the swing the drought's own exit - the
// family speaks across the zero, the held DELTA is the silence).
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
// mass ACROSS the walks, the torch lane's own trend (v0.976.89)
// prices the ask's own lane's mass ACROSS the walks, the smelt
// lane's own trend (v0.976.90) prices the unasked visit's own
// lane's mass ACROSS the walks, the asks' own trend (v0.976.91)
// prices the request book's own mass ACROSS the walks, this word
// prices the DELIVERED'S OWN MASS ACROSS the walks - the yield book
// (the sweep is the walk, the took is the yield - the chest's own
// close prices the drought WITHIN one face, this word prices the
// tooks' own shape ACROSS the faces - the cells never merge). The
// delivered's own units never join - the sizing rides the chests'
// own depths (the askCoal's own law mirrored: the count is the
// book's own mass). The branch law: ONE SHAPE ONE WORD - rise then
// rise prices the delivered's own swell, fall then fall prices the
// delivered's own fade, a traded direction prices the delivered's
// own swing, a held step (any count-to-count zero) prices the
// honest silence (a held delivery is no direction - the bars never
// invent; the watertrend family's own held law). The byte-pin: the
// trend row never speaks the shape's own verdict words (no return,
// no repeat, no stay, no run) nor the seats' own verdict word (no
// owns) nor the dynasty's own (no dynasty, no turn) - co-existence
// by seat never by duplication; the seat-law tail names the
// neighbor seats (the sweep's seat, the chest's close, the rent's
// seat, the dry read's clock, the tithe's clock, the starvation's
// grand total, the sweeps' own trend, the torch lane's own trend,
// the smelt lane's own trend, the asks' own trend) - the names ride
// by law, the neighbor verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's
// own precedent, v0.976.26 - the two-back face rides argv[5],
// nearest first; the trend family's own carrier chain v0.976.34
// through the asks' own v0.976.91). The fold receives the ledger's
// own delivered per face (commonsLedger owns the delivered count -
// one-parser law: the same ledger runs over each face's own lines,
// never a fork; the SAME cell the sweeps line holds: "delivered N
// (M units)"). No two-back face given -> no read (the carrier's own
// null pass); the sweeps gate above the fold is the branch's own
// fence - a zero-sweep face reads the honest silence (the v0.800.0
// law); the delivered's own zero is no fence - a zero-delivered
// face rides a lawful count (the smelt lane's own zero precedent
// v0.976.90; the field's own eighteen-face drought the proof).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). The zero count is lawful (the
 * yard's own drought rides).
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {delivered}, prev: {delivered}, cur: {delivered} }
 * @returns {boolean}
 */
export function deliveredTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.delivered) && s.delivered >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the delivered's own two-step shape. The
 * honest null when a step held (no direction - the family's own
 * held law) or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {delivered}, prev: {delivered}, cur: {delivered} }
 * @returns {string|null} the row byte, or null
 */
export function deliveredTrendRow (e) {
  if (!deliveredTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.delivered - back.delivered
  const second = cur.delivered - prev.delivered
  const arc = `${back.delivered} -> ${prev.delivered} (${first >= 0 ? '+' : ''}${first}) -> ${cur.delivered} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, this word prices the delivered's own mass across the walks, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the delivered's own trend (v0.976.92): the delivered's rise ran two steps deep - ${arc} - the delivered's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the delivered's own trend (v0.976.92): the delivered's fall ran two steps deep - ${arc} - the delivered's own fade ${tail}`
  }
  return `the delivered's own trend (v0.976.92): the delivered's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
