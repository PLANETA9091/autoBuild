import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { kickWitnessFill } from '../../src/lib/kickwitness.mjs'

// THE SILENT DEATH'S OWN WITNESS (v0.908.0).
//
// The face-187 read priced THE MISS: the empty-reason skin '()' rode
// 4.5s on a DUPLICATE - the kind never reached the catch's own if. The
// seam: the kick's own byte rides the mineflayer 'kicked' EVENT (the
// server's own reason, the same JSON the KICKED line prints), and the
// silent session death (the entity dies, no throw surfaces) reaches the
// reconnect with the catch NEVER having fired - lastWhy still '',
// kickKind still null, the legacy delay rides. The fill law: the EMPTY
// why fills 'kick/disconnect', the NULL kind fills the duplicate's own
// kind off the witness byte (the SAME two-vocabulary regex the catch
// reads); a SET seat NEVER overwrites, a missing/junk byte fills
// NOTHING (the legacy shape byte for byte).

// the server's own reason byte - the same JSON the KICKED line prints
const DUP_JSON = '{"type":"compound","value":{"translate":{"type":"string","value":"multiplayer.disconnect.duplicate_login"}}}'
const TIMEOUT_JSON = '{"type":"compound","value":{"translate":{"type":"string","value":"disconnect.timeout"}}}'
const MINEFLAYER_DUP = 'Already logged in (duplicate_login)'

test("THE FACE-187 SHAPE: the silent skin's own fill - empty why + duplicate byte rides both seats", () => {
  const r = kickWitnessFill({ lastWhy: '', kickKind: null, reason: DUP_JSON })
  assert.equal(r.lastWhy, 'kick/disconnect', "the '()' skin's own seat fills")
  assert.equal(r.kickKind, 'multiplayer.disconnect.duplicate_login', 'the kind rides the event byte')
})

test('the probe path\'s kind fill: the why stands, the null kind fills off the witness', () => {
  const r = kickWitnessFill({ lastWhy: 'kick/disconnect', kickKind: null, reason: DUP_JSON })
  assert.equal(r.lastWhy, 'kick/disconnect', 'the catch\'s own verdict stands')
  assert.equal(r.kickKind, 'multiplayer.disconnect.duplicate_login', 'the e.message carried no vocabulary - the event byte did')
})

test('the set seat NEVER overwrites: a priced why and a filled kind keep their seats', () => {
  const keptWhy = kickWitnessFill({ lastWhy: 'Timeout waiting for 4 ticks', kickKind: null, reason: DUP_JSON })
  assert.equal(keptWhy.lastWhy, 'Timeout waiting for 4 ticks', 'the catch\'s own message is the why seat\'s truth')
  assert.equal(keptWhy.kickKind, 'multiplayer.disconnect.duplicate_login')
  const keptKind = kickWitnessFill({ lastWhy: '', kickKind: 'multiplayer.disconnect.duplicate_login', reason: DUP_JSON })
  assert.equal(keptKind.lastWhy, 'kick/disconnect')
  assert.equal(keptKind.kickKind, 'multiplayer.disconnect.duplicate_login', 'the catch\'s own kind is the kind seat\'s truth')
})

test('a non-duplicate byte fills the why (the kick class), never the kind', () => {
  const r = kickWitnessFill({ lastWhy: '', kickKind: null, reason: TIMEOUT_JSON })
  assert.equal(r.lastWhy, 'kick/disconnect', 'a kicked client IS the kick/disconnect class')
  assert.equal(r.kickKind, null, 'the timeout is not the floor\'s customer')
})

test('THE MINEFLAYER VOCABULARY: the phrasing seat fills the kind too (one law, both seats)', () => {
  const r = kickWitnessFill({ lastWhy: '', kickKind: null, reason: MINEFLAYER_DUP })
  assert.equal(r.kickKind, 'multiplayer.disconnect.duplicate_login')
})

test('the junk bytes fill NOTHING (the legacy shape byte for byte)', () => {
  const seats = { lastWhy: 'legacy why', kickKind: 'multiplayer.disconnect.duplicate_login' }
  for (const junk of [null, undefined, 42, {}, ['x'], true]) {
    const r = kickWitnessFill({ lastWhy: 'legacy why', kickKind: null, reason: junk })
    assert.deepEqual(r, { lastWhy: 'legacy why', kickKind: null }, `junk reason ${typeof junk} judges nothing`)
  }
  const empty = kickWitnessFill({ lastWhy: '', kickKind: null, reason: '' })
  assert.deepEqual(empty, { lastWhy: '', kickKind: null }, 'the empty byte is the no-witness byte')
  const noOpts = kickWitnessFill()
  assert.deepEqual(noOpts, { lastWhy: '', kickKind: null }, 'the naked call reads the honest silence')
  assert.deepEqual(kickWitnessFill(seats), seats, 'a no-op fill returns the seats byte for byte')
})

test('the non-string why seat reads the legacy shape (junk judges nothing at the why too)', () => {
  // the runner's lastWhy is always a string, but the pure law prices the junk seat anyway
  const r = kickWitnessFill({ lastWhy: undefined, kickKind: null, reason: DUP_JSON })
  assert.equal(r.lastWhy, 'kick/disconnect', 'undefined reads the empty seat (the default param)')
})

test('THE WIRE: the runner captures the kicked byte per attempt and reads the fill before the delay', () => {
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  // the per-attempt witness seat (fresh per attempt - no stale carry, no reset law)
  assert.equal(fleetSrc.match(/let kickWitness = null/g).length, 1, 'the witness seat is declared once, per attempt')
  // the capture listener - attached BEFORE the login fence (a duplicate login-reject is captured too)
  const captures = fleetSrc.match(/miner\.bot\.on\('kicked', r => \{ kickWitness = typeof r === 'string' \? r : JSON\.stringify\(r\) \}\)/g) || []
  assert.equal(captures.length, 1, 'ONE capture listener per attempt loop')
  const fenceAt = fleetSrc.indexOf("await withTimeout(miner.ready, LOGIN_SPAWN_TIMEOUT_MS, 'login spawn')")
  const captureAt = fleetSrc.indexOf("miner.bot.on('kicked', r => { kickWitness")
  assert.ok(captureAt > -1 && fenceAt > captureAt, 'the capture rides BEFORE the fence (the login-reject class is the floor\'s own food)')
  // the fill site - after the catch, before the delay computation and the retry print
  const fillAt = fleetSrc.indexOf('kickWitnessFill({ lastWhy, kickKind, reason: kickWitness })')
  const delayAt = fleetSrc.indexOf('const delay = reconnectDelayMs({ attempt: failStreak, index, rand: Math.random, kickKind })')
  const printAt = fleetSrc.indexOf('console.log(`${name} retry #${failStreak} in')
  assert.ok(fillAt > -1, 'the fill site rides the runner')
  assert.ok(delayAt > fillAt, 'the kind rides the delay AFTER the fill (the floor lifts)')
  assert.ok(printAt > fillAt, 'the why rides the retry line AFTER the fill (the skin starves)')
  // the import - one truth, the lib's own seat
  assert.equal(fleetSrc.match(/import \{ kickWitnessFill \} from '\.\.\/src\/lib\/kickwitness\.mjs'/g).length, 1)
})

test('THE CENSUS GUARD: the fill adds ZERO fleet log lines (the KICKED byte rides no print)', () => {
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  const libSrc = readFileSync(new URL('../../src/lib/kickwitness.mjs', import.meta.url), 'utf8')
  const fillBlock = fleetSrc.slice(
    fleetSrc.indexOf("const filled = kickWitnessFill({ lastWhy, kickKind, reason: kickWitness })") - 800,
    fleetSrc.indexOf("const filled = kickWitnessFill({ lastWhy, kickKind, reason: kickWitness })") + 200
  )
  assert.doesNotMatch(fillBlock, /console\.log\([^)]*kickWitness/, 'the witness byte rides no print')
  assert.equal(/console\.log/.test(libSrc), false, 'the lib itself is silent (pure law)')
})
