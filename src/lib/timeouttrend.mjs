// (v0.976.69) THE RESCUE TIMEOUTS' OWN TREND - the still-wet budget
// expiries' own magnitude shape across three faces. The field priced
// every branch by hand twelve faces deep before the word existed (the
// lane's own full-budget timeouts - the walks the clock closed while
// the bot was STILL WET - face by face, the ledger's own arithmetic:
// 337 rode 2, 338 rode 0, 339 rode 1, 340 rode 0, 341 rode 0, 342
// rode 0, 343 rode 0, 344 rode 3, 345 rode 1, 346 rode 0, 347 rode
// 0, 348 rode 0 - the TIMEOUT'S OWN SWING rode three times (2 -> 0
// -> 1 on the FACE 339 chain, 0 -> 1 -> 0 on the FACE 340 chain, 0
// -> 3 -> 1 on the FACE 345 chain - the budget's own burn arriving
// and draining between the walks), the TIMEOUT'S OWN FADE rode once
// (3 -> 1 -> 0 on the FACE 346 chain - the branch's own birth face,
// the storm's burn draining two steps deep), the held step priced
// the silence six times (1 -> 0 -> 0 on the FACE 341 chain, the
// clean trios 0 -> 0 -> 0 on the FACE 342/343 chains, 0 -> 0 -> 3 on
// the FACE 344 chain - the arrival riding unnamed behind a held
// first step, 1 -> 0 -> 0 on the FACE 347 chain and 0 -> 0 -> 0 on
// the FACE 348 chain), and the TIMEOUT'S OWN SWELL never rode the
// twelve faces the ledger priced - the law prices it, the bars never
// invent it.
//
// The seat law: the ends family's own unnamed seat. The arms' word
// (v0.976.45) prices the STARTS' own mass, the release's word
// (v0.976.47) prices the RELEASES' own mass, the landings' word
// (v0.976.49) prices the DELIVERED ENDS' own mass, the dead ends'
// word (v0.976.50) prices the FALLEN WALKS' own mass, the frozen
// ends' word (v0.976.52) prices the STANDDOWNS' own mass - and the
// TIMEOUT ENDS' own mass - the walks whose own budget burned out
// still wet - rode unnamed. A different book each: the calm
// paradox's own fate line prices the face's own deadline result, the
// timeout budget's own per-bot split prices the seconds' own burn -
// this word prices the timeout ends' own mass.
//
// The branch law: ONE SHAPE ONE WORD - rise then rise prices the
// TIMEOUT'S OWN SWELL, fall then fall prices the TIMEOUT'S OWN FADE,
// a traded direction prices the TIMEOUT'S OWN SWING, a held step (any
// count-to-count zero) prices the honest silence (a held lane is no
// direction - the bars never invent; the watertrend family's own held
// law). The byte-pin: the trend row never speaks the shape's own
// verdict words (no return, no repeat, no stay, no run) nor the
// bill's own verdict word (no owns) - co-existence by seat never by
// duplication; the seat-law tail names the neighbor seats (the arms'
// word, the release's word, the landings' word, the dead ends' word,
// the frozen ends' word) - the names ride by law, the neighbor
// verdicts never ride.
//
// The carrier: decompose's deep-prior argv tail (the grounddeep's own
// precedent, v0.976.26 - the two-back face rides argv[5], nearest
// first; the watertrend's own, v0.976.34; the rescue book's own,
// v0.976.36; the kind's own, v0.976.39; the floor's own, v0.976.41;
// the relog book's own, v0.976.42; the siege's own, v0.976.44; the
// starts' own, v0.976.45; the scar's own, v0.976.46; the release's
// own, v0.976.47; the landings' own, v0.976.49; the dead ends' own,
// v0.976.50; the frozen ends' own, v0.976.52). The fold receives the
// ledger's own totals per face (rescueLedger owns the timeout count -
// one-parser law: the same ledger runs over each face's own lines,
// never a fork; the SAME cells the ends' bill's, the arms', the
// release's, the landings', the dead ends' and the frozen ends'
// wires already hold). No two-back face given -> no read (the
// carrier's own null pass).
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
 *   { back: {timeout}, prev: {timeout}, cur: {timeout} }
 * @returns {boolean}
 */
export function timeoutTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.timeout) && s.timeout >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the timeouts' own two-step shape. The honest
 * null when a step held (no direction - the family's own held law)
 * or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {timeout}, prev: {timeout}, cur: {timeout} }
 * @returns {string|null} the row byte, or null
 */
export function timeoutTrendRow (e) {
  if (!timeoutTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.timeout - back.timeout
  const second = cur.timeout - prev.timeout
  const arc = `${back.timeout} -> ${prev.timeout} (${first >= 0 ? '+' : ''}${first}) -> ${cur.timeout} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = '(the arms\' word prices the begins\' own mass, the release\'s word prices the exits\' own mass, the landings\' word prices the delivered ends\' own mass, the dead ends\' word prices the fallen walks\' own mass, the frozen ends\' word prices the standdowns\' own mass - this word prices the still-wet expiries\' own mass, co-existence by seat never by duplication)'
  if (first > 0 && second > 0) {
    return `the rescue timeout's own trend (v0.976.69): the timeout's rise ran two steps deep - ${arc} - the timeout's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the rescue timeout's own trend (v0.976.69): the timeout's fall ran two steps deep - ${arc} - the timeout's own fade ${tail}`
  }
  return `the rescue timeout's own trend (v0.976.69): the timeout's own swing - ${arc} - the rise and the fall traded seats between the walks ${tail}`
}
