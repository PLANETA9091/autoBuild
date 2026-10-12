import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { relogHandshakeWanted } from '../../src/lib/reloghandshake.mjs'

// THE RELOG'S OWN HANDSHAKE (v0.972.0).
//
// FACE 247's released artifact (run 38210886949) priced the dup cadence's
// explosion - 22 kicked lines, duplicate_login 17 of them (77.3%) - and
// the forensics named the manufacturer: the fleet's own reconnect lane.
// A session whose end-phase chain RETURNS WHOLE reaches the reconnect
// tail with the client STILL CONNECTED; the next login makes the vanilla
// server kick the old seat with multiplayer.disconnect.duplicate_login.
// THE ARITHMETIC: 22 kicked lines = 5 true disconnect.timeout kicks (the
// t+900s storm batch) + 17 duplicate_login echoes = one per end-phase
// relog (F13 x5, F14 x3, F9 x4, F11/F19/F17/F15/F8 x1); every echo's
// "ride" printed the legacy attempt-1 shape with the why seat EMPTY - the
// v0.904.0 duplicate floor never missed a ride it owned; the retimeter's
// MISS class joined the echo to the NEXT attempt's normal relog print.
// THE CURE: the whole-returning session ends its own seat (bot.end())
// before the next login - the old session is gone cleanly, the echo
// starves at the source. The kick path declines (the server owns that
// goodbye); junk reads the no-op-safe side (end).

test('THE WHOLE RETURN ENDS ITS OWN SEAT: no throw rides the end verdict', () => {
  const r = relogHandshakeWanted({ threw: false })
  assert.equal(r.end, true, 'the client must end its own seat before the next login')
  assert.match(r.why, /returned whole/, 'the why names the whole return')
  assert.match(r.why, /duplicate/, 'the why names the echo it starves')
})

test('THE KICK PATH DECLINES: the session that died in its own throw keeps the server as the goodbye owner', () => {
  const r = relogHandshakeWanted({ threw: true })
  assert.equal(r.end, false, 'the client is already gone on the kick path')
  assert.match(r.why, /server owns the goodbye/, 'the why names the goodbye owner')
})

test('junk seats read the no-op-safe side: ending a dead socket is nothing, leaving a live one feeds the churn', () => {
  for (const junk of [undefined, null, 'yes', 1, {}, [], NaN]) {
    const r = relogHandshakeWanted({ threw: junk })
    assert.equal(r.end, true, `junk threw ${String(junk)} reads the safe seat (end)`)
  }
  const naked = relogHandshakeWanted()
  assert.equal(naked.end, true, 'the naked call reads the safe seat')
})

test('THE WIRE: the seat read rides the why truth before the reset, the end gate rides after the sleep', () => {
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  // ONE import, the v0.972.0 tag rides it
  const imports = fleetSrc.match(/import \{ relogHandshakeWanted \} from '\.\.\/src\/lib\/reloghandshake\.mjs'/g) || []
  assert.equal(imports.length, 1, 'the handshake law imports once')
  // the seat read: the why seat's own truth, read BEFORE the reset below
  const seatReads = fleetSrc.match(/const handshake = relogHandshakeWanted\(\{ threw: lastWhy !== '' \}\)/g) || []
  assert.equal(seatReads.length, 1, 'ONE seat read, the why truth is the input')
  const fillAt = fleetSrc.indexOf('const filled = kickWitnessFill({ lastWhy, kickKind, reason: kickWitness })')
  const seatAt = fleetSrc.indexOf("const handshake = relogHandshakeWanted({ threw: lastWhy !== '' })")
  const resetAt = fleetSrc.indexOf("    lastWhy = ''\n    kickKind = null")
  assert.ok(fillAt > -1 && seatAt > fillAt, 'the seat read rides AFTER the fill (the filled why is the truth)')
  assert.ok(resetAt > -1 && seatAt < resetAt, 'the seat read rides BEFORE the reset (the reset would blind it)')
  // the end gate: after the sleep, before the loop's next createMiner
  const gateAt = fleetSrc.indexOf('if (handshake.end) { try { miner?.bot?.end() } catch')
  const sleepAt = fleetSrc.indexOf('await new Promise(r => setTimeout(r, delay))')
  assert.ok(gateAt > -1, 'the end gate exists, try-guarded')
  assert.ok(sleepAt > -1 && gateAt > sleepAt, 'the gate rides AFTER the sleep (the reporter keeps the seat until the last moment)')
  assert.ok(gateAt < fleetSrc.indexOf('process.on(\'unhandledRejection\''), 'the gate rides inside the attempt loop (before the runBot tail)')
})

test('CENSUS GUARD: the handshake rides no print - zero new line families', () => {
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  // the pin slices the handshake's OWN bytes only (the const seat + the gate) -
  // the tail's legacy retry print between them is the v0.16.3 shape, not the handshake's
  const seatBlock = fleetSrc.slice(
    fleetSrc.indexOf("// (v0.972.0) THE RELOG'S OWN HANDSHAKE - the seat read"),
    fleetSrc.indexOf("const handshake = relogHandshakeWanted({ threw: lastWhy !== '' })") + 60
  )
  assert.doesNotMatch(seatBlock, /console\.log/, 'the seat read adds no log line')
  const gateBlock = fleetSrc.slice(
    fleetSrc.indexOf("// (v0.972.0) THE RELOG'S OWN HANDSHAKE - the end gate"),
    fleetSrc.indexOf('if (handshake.end) { try { miner?.bot?.end() } catch') + 80
  )
  assert.doesNotMatch(gateBlock, /console\.log/, 'the end gate adds no log line (the existing kicked-lines census prices it)')
  const libSrc = readFileSync(new URL('../../src/lib/reloghandshake.mjs', import.meta.url), 'utf8')
  assert.equal(/console\.log/.test(libSrc), false, 'the lib itself is silent (pure law)')
})
