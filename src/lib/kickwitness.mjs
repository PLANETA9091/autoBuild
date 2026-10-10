//
// kickwitness.mjs - THE SILENT DEATH'S OWN WITNESS (v0.908.0)
//
// The duplicate floor (v0.904.0) reads the kick's kind off the session
// error's own text - the catch's e.message. The face-187 read priced the
// hole: the empty-reason skin '()' rode 4.5s on a DUPLICATE - the kind
// never reached the catch's own if. The seam the read named: the kick's
// own byte rides the mineflayer 'kicked' EVENT (the server's own reason,
// the same JSON the fleet log's KICKED line prints), and a silent session
// death (the entity dies, no throw ever surfaces - the shift loop's
// entity check exits, the end phase's guarded legs swallow, the try
// completes "normally" on a dead client) reaches the reconnect with the
// catch NEVER having fired: lastWhy still '', kickKind still null, the
// legacy delay rides. The catch path has the same hole one leg down: the
// probe's throw ("the session ended mid-shift") matches the kick
// classifier but carries NO duplicate vocabulary, so a duplicate the
// server kicked for reads the legacy floor there too.
//
// kickWitnessFill({ lastWhy, kickKind, reason }) is the fill law (pure,
// additive, junk judges nothing): the EMPTY why fills 'kick/disconnect'
// (the '()' skin's own seat - the KICKED byte IS the kick/disconnect
// class); the NULL kind fills the duplicate's own kind when the reason
// carries the vocabulary (the SAME two-vocabulary regex the catch reads -
// the translate value 'duplicate_login' + mineflayer's 'already logged
// in' phrasing, one law both seats). A SET seat NEVER overwrites (the
// catch's own verdict stands); a missing/junk byte fills NOTHING (the
// legacy shape byte for byte). The runner captures the reason at the
// kicked event (one listener per attempt, a fresh bot object per attempt
// - no stale carry, no reset law needed) and reads the fill before the
// delay and the retry print - the kind rides reconnectDelayMs (the floor
// lifts), the why rides the retry line (the skin starves).
//
// WHY THE FILL AND NOT A RE-CLASSIFIER: the catch's e.message and the
// kicked event's reason are TWO witnesses of ONE session end - the fill
// joins them at the seats the catch cannot see, it does not re-judge a
// seat the catch already priced. The retimeter (v0.907.0) prices the
// field effect on the next faces: the cured rides read ABOVE (the
// grace's own proof), the '()' skin starves (the why's own fill).
//

// the catch's own classifier, verbatim - one vocabulary law, both seats
const DUP_RE = /duplicate_login|already logged in/i

/**
 * kickWitnessFill({ lastWhy, kickKind, reason }) - the silent death's own fill.
 * @param {object} [opts]
 * @param {string} [opts.lastWhy=''] the runner's why seat ('' = the silent skin)
 * @param {string|null} [opts.kickKind=null] the runner's kind seat (null = unfilled)
 * @param {string|null} [opts.reason=null] the kicked event's own byte
 *   (the JSON.stringify'd reason the KICKED line prints)
 * @returns {{lastWhy: string, kickKind: string|null}} the filled seats
 *   (a missing/junk reason returns the seats byte for byte)
 */
export function kickWitnessFill ({ lastWhy = '', kickKind = null, reason = null } = {}) {
  const r = typeof reason === 'string' ? reason : ''
  if (!r) return { lastWhy, kickKind }
  const why = lastWhy === '' ? 'kick/disconnect' : lastWhy
  const kind = (!kickKind && DUP_RE.test(r)) ? 'multiplayer.disconnect.duplicate_login' : kickKind
  return { lastWhy: why, kickKind: kind }
}
