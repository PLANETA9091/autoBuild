//
// reloghandshake.mjs - THE RELOG'S OWN HANDSHAKE (v0.972.0)
//
// FACE 247's released artifact (run 38210886949, the v0.971.0 tree's first
// field read) priced the dup cadence's explosion - 22 kicked lines,
// duplicate_login 17 of them (77.3%) - and the forensics named the
// manufacturer: NOT a server storm, the fleet's own reconnect lane. The
// kick/retry anatomy, line by line:
//
//   F13 final bank: 0 (still underground after 1 climb attempt - ...)
//   F13 retry #1 in 6.1s ()                 <- the why seat EMPTY
//   ... the bot logs in again ...
//   F13 [F13] KICKED: {...duplicate_login}  <- the OLD client's death byte
//   F13 pre-position: 29b from yard ...     <- the NEW session ALIVE
//
// THE MECHANISM: a session whose end-phase chain RETURNS WHOLE (no throw)
// reaches the reconnect tail with the client STILL CONNECTED - lastWhy '',
// kickKind null, the legacy delay rides, the tail sleeps, and the NEXT
// attempt logs in while the old seat still lives. The vanilla server
// answers the same-name login by kicking the OLD connection with
// multiplayer.disconnect.duplicate_login - the fleet manufactures its own
// dup kick, one per early end-phase relog. THE ARITHMETIC PROVES IT: the
// face's 22 kicked lines = 5 true disconnect.timeout kicks (the t+900s
// storm batch, lines 975-996) + 17 duplicate_login echoes = one per
// end-phase relog (F13 x5, F14 x3, F9 x4, F11/F19/F17/F15/F8 x1). And
// every echo's "ride" prints the legacy attempt-1 shape (the why seat
// empty, the delay inside the bot's own [base, cap] + phase window) - the
// v0.904.0 duplicate floor NEVER missed a ride it owned; the retimeter's
// MISS class joined the echo to the NEXT attempt's normal relog print.
//
// THE CURE: a session that returns WHOLE ends its own seat before the
// next login - bot.end() on the still-live client closes the old session
// cleanly, the server removes the player, and the next login finds no old
// seat to collide with. The manufactured echo starves at the source. The
// kick path (the session died in its own throw) is NOT the handshake's
// customer: the server already said its goodbye there, the client is gone
// - the law declines honestly. Junk-safe: a non-boolean seat reads the
// no-op-safe side (end - closing a dead socket is nothing, leaving a live
// one feeds the churn). Zero new log lines: the byte rides no print - the
// census guard holds, the next faces price the effect on the EXISTING
// kicked-lines census (the duplicate_login share starves).
//

/**
 * relogHandshakeWanted({ threw }) - the relog's own handshake law.
 *
 * @param {object} [opts]
 * @param {boolean} [opts.threw=false] whether the session's own catch
 *   fired (the why seat non-empty at the reconnect tail). A non-boolean
 *   seat reads false - the no-op-safe side (ending a dead client is a
 *   no-op; leaving a live one feeds the next login a duplicate).
 * @returns {{end: boolean, why: string}} the handshake verdict:
 *   threw  -> { end: false } the server owns the goodbye (the client is
 *             already gone - the kick's own path)
 *   whole  -> { end: true }  the client ends its own seat (the old
 *             session must not feed the next login a duplicate)
 */
export function relogHandshakeWanted ({ threw = false } = {}) {
  const t = threw === true
  return t
    ? { end: false, why: 'the session died in its own throw - the server owns the goodbye, the seat is already gone' }
    : { end: true, why: 'the session returned whole - the client ends its own seat, the old session must not feed the next login a duplicate' }
}
