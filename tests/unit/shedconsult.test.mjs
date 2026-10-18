// (v0.976.236) THE SHED CONSULT'S OWN VERDICT LINE - the battery.
// THE EVIDENCE (the F466 and the F467 faces): the whale cure's own arm
// consulted EVERY pass and printed NOTHING across both faces whole while
// the crater row priced 23.5% -> 25.4% and the pocket row priced 459u ->
// 1580u stranded - the gate's silence is lawful but UNREAD: the face
// cannot tell light (healthy) from late (the crater's own cause) from
// unknown (the junk gate). The pins: every refusal term byte-exact with
// and without its numbers, the due verdicts' null (the trip line is the
// verdict of record - never a second voice), the refractory's null (the
// cadence keeps the log silent), the alien term's null, and the emitter
// grammar (the fleet19 wiring the line rides must consult the arm the
// formatter prices).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { shedConsultLine, SHED_RETRY_MS } from '../../src/lib/bankshed.mjs'

test('the light verdict: the numbers ride, the honest generic without', () => {
  assert.equal(
    shedConsultLine({ why: 'light', needS: 412.7, budgetS: 248.2 }),
    'bank shed consult: refused - light (the need 412s rides inside the budget 248s - the leanness law holds)'
  )
  assert.equal(
    shedConsultLine({ why: 'light' }),
    'bank shed consult: refused - light (the end bank covers the pocket - the leanness law holds)'
  )
  // junk numbers are the honest generic's own shape (never a NaN byte)
  assert.equal(
    shedConsultLine({ why: 'light', needS: NaN, budgetS: -5 }),
    'bank shed consult: refused - light (the end bank covers the pocket - the leanness law holds)'
  )
})

test('the late verdict: the run clock rides, the honest generic without', () => {
  assert.equal(
    shedConsultLine({ why: 'late', remainingMs: 123456 }),
    'bank shed consult: deferred - late (the trip cannot land, 123s of run clock left - the endphase owns the goal)'
  )
  assert.equal(
    shedConsultLine({ why: 'late' }),
    'bank shed consult: deferred - late (the trip cannot land - the endphase owns the goal)'
  )
})

test('the holding verdict: the trip clock rides, the honest generic without', () => {
  assert.equal(
    shedConsultLine({ why: 'holding', holdMs: 61000 }),
    'bank shed consult: deferred - holding (the active shed trip owns the clock, 61s left)'
  )
  assert.equal(
    shedConsultLine({ why: 'holding' }),
    'bank shed consult: deferred - holding (the active shed trip owns the clock)'
  )
})

test('the unknown verdict: the guess-free zero names itself', () => {
  assert.equal(
    shedConsultLine({ why: 'unknown' }),
    'bank shed consult: refused - unknown (the junk inputs price no shed - the guess-free zero)'
  )
  // numbers never ride the unknown line (the junk gate priced nothing)
  assert.equal(
    shedConsultLine({ why: 'unknown', needS: 99, budgetS: 1 }),
    'bank shed consult: refused - unknown (the junk inputs price no shed - the guess-free zero)'
  )
})

test('the silences the other voices own price null (never a second voice)', () => {
  // the armed trip's own 'bank trip: shed ...' line is the verdict of record
  assert.equal(shedConsultLine({ why: 'go' }), null)
  assert.equal(shedConsultLine({ why: 'seed' }), null)
  // the refractory the cadence keeps silent (the arm's own law)
  assert.equal(shedConsultLine({ why: 'refractory' }), null)
  // an alien term the gate never returns prices nothing (the strict grammar)
  assert.equal(shedConsultLine({ why: 'everything' }), null)
  assert.equal(shedConsultLine({}), null)
  assert.equal(shedConsultLine(null), null)
})

test('the constants: the refractory window the wire prints inside stands', () => {
  assert.equal(SHED_RETRY_MS, 150000)
})

test('the emitter grammar: the fleet19 wiring the line rides must consult the arm', () => {
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  // the shed arm's consult the formatter prices must stand in the wiring
  assert.ok(fleetSrc.includes('const shedArm'), 'the shed arm the consult line prices must stand')
  // the wiring must call the formatter and ride the per-bot refractory clock
  assert.ok(fleetSrc.includes('shedConsultLine'), 'the consult line the wiring prints must call the formatter')
  assert.ok(fleetSrc.includes('shedConsultAt'), 'the per-bot refractory clock the line prints inside must stand')
})
