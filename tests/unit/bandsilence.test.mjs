// THE BAND ARM'S OWN SILENCE - the bandsilence tests (v0.964.0).
//
// The o2-low trigger front's own gate-level byte: the v0.958.0 lane
// wired the band arm (the descent through 10..5 arms on witnessed wet
// contact) and the deaths still rode the reset (faces 229/231/232) -
// nobody priced the band arm's own gate AT THE DEATH TICK. The drown
// context line (o2gap's own grammar - the one-parser law) carries the
// whole tick: the o2 bar, the feet/head cells with their waterlogged
// flags, the rescue relation. The synthetic lines below ride the
// emitter's own grammar byte for byte (the v0.875.0 precedent:
// pre-field tests pin the shape, the field face rides the next fire's
// artifact read). The trust rides airBarTrust imported (the
// one-classifier law - the test forks nothing).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { DROWN_CONTEXT_RE } from '../../src/lib/o2gap.mjs'
import { OXYGEN_CRITICAL_LEVEL, OXYGEN_RESCUE_LEVEL } from '../../src/lib/drowning.mjs'
import { bandSilenceBook, bandSilenceConsistent, bandSilenceOwner, bandSilenceRow, bandSilenceRidersRow } from '../../src/lib/bandsilence.mjs'

// the emitter's own template (miner.mjs's death handler via
// statcarry's drownContextLine, byte for byte)
const ctx = (bot, o2, feet, head, rescue, leg, wet) =>
  `${bot} [${bot}] death: drown context (o2 ${o2}, feet ${feet}, head ${head}, rescue ${rescue}, leg ${leg}, ${wet})`

test('the grammar pin - the emitters\' own bytes, the one-constant law by import', () => {
  assert.ok(DROWN_CONTEXT_RE.test(ctx('F5', '7', 'water', 'air', 'never', 'mine', 'wet 12s')), 'the plain tick rides o2gap\'s own RE')
  assert.ok(DROWN_CONTEXT_RE.test(ctx('F6', 'reset(-1)', 'unknown', 'water wl', '8s ago', 'unknown', 'wet 0s')), 'the blind skin + the wl flag ride the same RE')
  assert.ok(DROWN_CONTEXT_RE.test(ctx('F3', '?', 'stone', 'air', '30s ago', 'walk', 'wet 2s')), 'the ? skin + the ago rescue ride the same RE')
  assert.equal(OXYGEN_CRITICAL_LEVEL, 4, 'the critical edge is drowning\'s own constant, never forked')
  assert.equal(OXYGEN_RESCUE_LEVEL, 10, 'the rescue edge is drowning\'s own constant, never forked')
})

test('the seats\' own arithmetic - seven ticks, seven seats, the cells byte-exact', () => {
  const lines = [
    ctx('F5', '7', 'water', 'air', 'never', 'mine', 'wet 12s'),          // bandSilence (feet water -> trust wet)
    ctx('F14', '3', 'water', 'water', 'active', 'swim', 'wet 4s@last'),  // critical (the bar below the seat)
    ctx('F18', '15', 'stone', 'air', 'never', 'walk', 'wet unknown'),    // headroom (the band never owned the tick)
    ctx('F6', 'reset(-1)', 'unknown', 'water wl', '8s ago', 'unknown', 'wet 0s'), // blind (the sensor's own death)
    ctx('F9', '8', 'stone', 'air', 'never', 'mine', 'wet 0s'),           // bandDryHold (the out-vote's own hold)
    ctx('F12', '6', 'water', 'kelp', 'active', 'swim', 'wet 9s'),        // bandFlight (the lane flew)
    ctx('F3', '9', 'stone', 'air', '30s ago', 'walk', 'wet 2s')          // bandDryFlight (the hold moot)
  ]
  const b = bandSilenceBook(lines)
  assert.equal(b.deaths, 7, 'seven contexts fold seven deaths')
  assert.deepEqual(b.seats, {
    blind: 1, critical: 1, bandSilence: 1, bandFlight: 1,
    bandDryHold: 1, bandDryFlight: 1, headroom: 1
  }, 'the seven seats split one apiece')
  assert.deepEqual(b.trust, { wet: 2, unknown: 0, dry: 2 }, 'the trust split rides the band ticks only (silence+flight wet, the dry pair dry)')
  assert.deepEqual(b.rescue, { never: 3, active: 2, ago: 2 }, 'the rescue split rides every tick')
  assert.equal(bandSilenceConsistent(b), true, 'the fold proves itself')
  const f5 = b.rows[0]
  assert.deepEqual({ bot: f5.bot, o2: f5.o2, o2Byte: f5.o2Byte, trust: f5.trust, rescue: f5.rescue, seat: f5.seat, leg: f5.leg, wet: f5.wet },
    { bot: 'F5', o2: 7, o2Byte: '7', trust: 'wet', rescue: 'never', seat: 'bandSilence', leg: 'mine', wet: 'wet 12s' }, 'the silence row rides the tick\'s own bytes')
  const f6 = b.rows[3]
  assert.equal(f6.o2, null, 'the blind skin prices no bar')
  assert.equal(f6.o2Byte, 'reset(-1)', 'the raw byte rides the row')
  assert.equal(f6.seat, 'blind', 'the blind seat owns the skin')
  assert.equal(bandSilenceOwner(b), null, 'the seven-way tie owns nothing (the honest silence)')
  // the wl flag's own ride: a waterlogged dry-name is water contact
  const wl = bandSilenceBook([ctx('F2', '9', 'stone', 'stone wl', 'never', 'mine', 'wet 0s')])
  assert.equal(wl.rows[0].trust, 'wet', 'the wl flag rides the emitter\'s own round trip (the trust judges wet)')
  assert.equal(wl.rows[0].seat, 'bandSilence', 'the waterlogged tick seats the band lane, not the dry hold')
})

test('the owner law - the majority owns, the tie owns nothing, the rows byte-exact', () => {
  const maj = bandSilenceBook([
    ctx('F5', '7', 'water', 'air', 'never', 'mine', 'wet 12s'),
    ctx('F9', '8', 'stone wl', 'air', 'never', 'mine', 'wet 0s'),
    ctx('F12', '6', 'water', 'kelp', 'active', 'swim', 'wet 9s')
  ])
  assert.deepEqual(bandSilenceOwner(maj), { seat: 'bandSilence', n: 2 }, 'the silence seat holds the strict majority')
  assert.equal(bandSilenceRow(maj),
    'the band arm\'s own silence (v0.964.0): 3 drown tick(s) - blind 0 / critical 0 / band-silence 2 / band-flight 1 / band-dry-hold 0 / band-dry-flight 0 / headroom 0 - band trust wet 3 / unknown 0 / dry 0 - the band arm\'s own conjunction rode satisfied and the rescue never flew - the v0.958.0 lane\'s own silence is the front',
    'the row rides the house idiom byte for byte')
  assert.equal(bandSilenceRidersRow(maj),
    'F5 [band-silence o2 7 never] F9 [band-silence o2 8 never] F12 [band-flight o2 6 active]',
    'the riders ride line order with the raw o2 bytes')
  const tie = bandSilenceBook([
    ctx('F5', '7', 'water', 'air', 'never', 'mine', 'wet 12s'),
    ctx('F12', '6', 'water', 'kelp', 'active', 'swim', 'wet 9s')
  ])
  assert.equal(bandSilenceOwner(tie), null, 'the 1-1 tie owns nothing')
  assert.ok(bandSilenceRow(tie).endsWith('no seat holds the majority (the honest silence)'), 'the tie\'s verdict reads the honest silence')
  // the junk battery - the fold never invents, the row never builds
  for (const junk of [null, 'blob', undefined, [42, null, 'junk line', 7]]) {
    const b = bandSilenceBook(junk)
    assert.equal(b.deaths, 0, 'the junk fold reads the empty book')
    assert.equal(bandSilenceConsistent(b), true, 'the empty book proves itself')
    assert.equal(bandSilenceRow(b), null, 'the row stays silent on an empty book')
    assert.equal(bandSilenceRidersRow(b), null, 'the riders stay silent on an empty book')
    assert.equal(bandSilenceOwner(b), null, 'the owner stays silent on an empty book')
  }
  // the fence law - a tampered cell prices nothing
  const bad = bandSilenceBook([ctx('F5', '7', 'water', 'air', 'never', 'mine', 'wet 12s')])
  bad.seats.blind++
  assert.equal(bandSilenceConsistent(bad), false, 'the seats\' sum fence holds')
  assert.equal(bandSilenceRow(bad), null, 'a lying book prices nothing')
  const badTrust = bandSilenceBook([ctx('F5', '7', 'water', 'air', 'never', 'mine', 'wet 12s')])
  badTrust.trust.wet = 9
  assert.equal(bandSilenceConsistent(badTrust), false, 'the trust image fence holds')
  const badSeat = bandSilenceBook([ctx('F5', '7', 'water', 'air', 'never', 'mine', 'wet 12s')])
  badSeat.rows[0].seat = 'headroom'
  assert.equal(bandSilenceConsistent(badSeat), false, 'the row re-seat fence holds')
})

test('the decompose WIRING pins - the prose lives in the lib, the mine imports the names', () => {
  const dec = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(dec.includes('bandSilenceBook(lines)'), 'the mine wires the fold')
  assert.ok(dec.includes('bandSilenceRow(bsb)'), 'the mine wires the row')
  assert.ok(dec.includes('bandSilenceRidersRow(bsb)'), 'the mine wires the riders')
  assert.ok(!dec.includes('band-silence (v0.964.0)'), 'the row prose never forks into the mine')
  const lib = readFileSync(new URL('../../src/lib/bandsilence.mjs', import.meta.url), 'utf8')
  assert.ok(lib.includes('Mining-surface only'), 'the census guard rides the header')
  assert.ok(!lib.includes('from \'../bots/'), 'the lib never wires the fleet')
  assert.ok(!lib.includes('_waterRescue'), 'the lib never touches the fleet\'s own gate')
})
