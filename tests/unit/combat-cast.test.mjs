//
// combat-cast.test.mjs - THE COMBAT BOOK'S OWN BOT SEAT (v0.954.0)
//
// The count-seat family's own sibling on the v0.390.0 shooter census's
// own WHO axis. The count law: the census's own byBot cells ARE the
// book's own lines (each emitter combat line bumped exactly once per
// bot); the measures (byAttacker, the verbs' splits, the sessions,
// the dists, the ranged band, the flips, the shelter split) never
// vote - they price lines, they are not lines. The strict-majority
// law: a bot owns the seat only above half the book's own lines, a
// tie owns nothing. The riders: the cast's silence's own companion,
// a measure never a verdict-owner. The branch law fenced in the lib.
// Junk never invents a seat - the honest silence's own row law.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { shooterCensus } from '../../src/lib/shootercensus.mjs'
import {
  combatCast,
  combatCastRow,
  combatRiders,
  combatRidersRow
} from '../../src/lib/combatcast.mjs'

// The emitter's own canonical forms (the combat: marker's documented
// shapes, byte-exact off the live face-213 log) - every verb class at
// least once, the measures riding their lines.
const FROZEN = [
  'F11 [F11] combat: critical bar (seen < 8) - the shelter scan is refused, the drain outruns it',
  'F11 [F11] combat: fleeing zombie (dist 5.7, hp 7.0, 2 nearby, proximity)',
  'F12 [F12] combat: fighting zombie (dist 2.4, hp 17.7, 2 nearby, proximity)',
  'F9 [F9] combat: fighting zombie (dist 4.9, hp 20.0, 2 nearby, proximity)',
  'F8 [F8] combat: fighting zombie (dist 3.5, hp 20.0, 2 nearby, proximity)',
  'F9 [F9] combat: fight ended vs zombie (mob down, hp 20.0 -> 17.0, swings 6, weapon wooden_sword, 6 rounds)',
  'F12 [F12] combat: fight ended vs zombie (mob down, hp 17.7 -> 11.7, swings 5, weapon wooden_sword, 5 rounds)',
  'F8 [F8] combat: fight ended vs zombie (mob down, hp 20.0 -> 12.0, swings 7, weapon wooden_sword, 7 rounds)',
  'F9 [F9] combat: verdict flipped to flee vs zombie (hp 18.4)'
]

test('the count law: the byBot cells sum, the measures never vote', () => {
  const c = shooterCensus(FROZEN)
  assert.equal(c.total, 9)
  // the cells' own sum IS the book's own lines - byte-for-byte
  const sum = Object.values(c.byBot).reduce((a, n) => a + n, 0)
  assert.equal(sum, c.total)
  assert.deepEqual(c.byBot, { F11: 2, F12: 2, F9: 3, F8: 2 })
  // the measures' own pins: priced, never counted
  assert.equal(c.byAttacker.zombie, 8)
  assert.equal(c.byBotVerb.F9.fighting, 1)
  assert.equal(c.byBotVerb.F9['fight-ended'], 1)
  assert.equal(c.byBotVerb.F9['verdict-flip'], 1)
  assert.equal(c.sessions.byBot.F9.sessions >= 1, true)
})

test('the strict-majority law: the owner case reads the seat', () => {
  const cast = combatCast({ F9: 3, F8: 2 })
  assert.deepEqual(cast, { bot: 'F9', owns: 3, ofLines: 5, share: 0.6 })
})

test('the tie law: a tie owns nothing', () => {
  assert.equal(combatCast({ F9: 2, F8: 2 }), null)
})

test('the minority law: a minority top reads the silence', () => {
  assert.equal(combatCast({ F9: 3, F8: 2, F12: 2, F11: 2 }), null)
})

test('END-TO-END: shooterCensus(frozen) feeds the cast - the frozen trio reads the silence', () => {
  // the live face-213 shape: F12 x8 + F9 x8 + F8 x8 over 26 lines -
  // no solo above half, the arena's own crowd.
  const c = shooterCensus(FROZEN)
  const cast = combatCast(c.byBot)
  assert.equal(cast, null)
  const r = combatRiders(c.byBot)
  // the byte law: count desc then name asc - F9 3 leads; among the
  // 2s the name asc rides (F11 < F12 < F8 - the '8' byte outranks '1')
  assert.equal(r.leader, 'F9')
  assert.equal(r.leaderOwns, 3)
  assert.equal(r.runner, 'F11')
  assert.equal(r.runnerOwns, 2)
  assert.equal(r.ofLines, 9)
  assert.equal(r.pairOwns, 5)
  assert.equal(r.share, 0.556)
})

test('the cast row: byte-exact on the owner case', () => {
  const row = combatCastRow({ bot: 'F9', owns: 3, ofLines: 5, share: 0.6 })
  assert.equal(row, "the combat book's own cast (v0.954.0): F9 owns 3 of 5 combat lines (60.0%) - THE ENCOUNTER'S OWN GLADIATOR: one bot's own touches keep the combat book's voice - the v0.792.0 attacker seat priced the WHAT, the cast names its WHO")
})

test('the cast row: the singular law holds', () => {
  const row = combatCastRow({ bot: 'F9', owns: 1, ofLines: 1, share: 1 })
  assert.equal(row, "the combat book's own cast (v0.954.0): F9 owns 1 of 1 combat line (100.0%) - THE ENCOUNTER'S OWN GLADIATOR: one bot's own touches keep the combat book's voice - the v0.792.0 attacker seat priced the WHAT, the cast names its WHO")
})

test('the cast row: the junk battery never prints a seat', () => {
  assert.equal(combatCastRow(null), null)
  assert.equal(combatCastRow('junk'), null)
  assert.equal(combatCastRow({}), null)
  assert.equal(combatCastRow({ bot: '', owns: 1, ofLines: 1, share: 1 }), null)
  assert.equal(combatCastRow({ bot: 'F9', owns: 0, ofLines: 1, share: 0 }), null)
  assert.equal(combatCastRow({ bot: 'F9', owns: 2, ofLines: 1, share: 2 }), null)
})

test('the riders row: byte-exact on the frozen crowd', () => {
  const c = shooterCensus(FROZEN)
  const row = combatRidersRow(combatRiders(c.byBot))
  assert.equal(row, "the combat book's own riders (v0.954.0): no solo gladiator owns the majority - F9 x3 + F11 x2 own 5 of 9 combat lines (55.6%) - THE GLADIATORS' OWN CROWD: the cast's tie law held, the arena's crowd is still real - the pair prices the fights the solo law refused to name")
})

test('the riders row: the singular law holds', () => {
  const row = combatRidersRow({ leader: 'F9', leaderOwns: 1, runner: 'F8', runnerOwns: 1, ofLines: 2, pairOwns: 2, share: 1 })
  assert.equal(row, "the combat book's own riders (v0.954.0): no solo gladiator owns the majority - F9 x1 + F8 x1 own 2 of 2 combat lines (100.0%) - THE GLADIATORS' OWN CROWD: the cast's tie law held, the arena's crowd is still real - the pair prices the fights the solo law refused to name")
  const one = combatRidersRow({ leader: 'F9', leaderOwns: 1, runner: 'F8', runnerOwns: 0, ofLines: 1, pairOwns: 1, share: 1 })
  assert.equal(one, null)
})

test('the riders row: the junk battery never prints a shape', () => {
  assert.equal(combatRidersRow(null), null)
  assert.equal(combatRidersRow('junk'), null)
  assert.equal(combatRidersRow({}), null)
  assert.equal(combatRidersRow({ leader: 'F9', leaderOwns: 0, runner: 'F8', runnerOwns: 2, ofLines: 2, pairOwns: 2, share: 1 }), null)
  assert.equal(combatRidersRow({ leader: 'F9', leaderOwns: 3, runner: 'F8', runnerOwns: 2, ofLines: 4, pairOwns: 5, share: 1 }), null)
})

test('the branch law fenced in the lib: the owner case leaves the riders silent', () => {
  const owner = { F9: 4, F8: 1 }
  assert.notEqual(combatCast(owner), null)
  assert.equal(combatRiders(owner), null)
})

test('the junk map battery: the missing books read the honest silence', () => {
  for (const junk of [null, undefined, [], 42, 'map', {}]) {
    assert.equal(combatCast(junk), null)
    assert.equal(combatRiders(junk), null)
  }
})

test('the junk cell battery: a non-positive-integer cell never votes', () => {
  const junk = { F9: 'three', F8: 2.5, F12: -1, F11: 0, F7: NaN, F6: Infinity, F5: null, F4: undefined }
  assert.equal(combatCast(junk), null)
  // only F8's honest 2 rides - a single pocket cannot seat the riders
  assert.equal(combatRiders(junk), null)
  // the honest cells beside the junk still price
  const cast = combatCast({ F9: 3, F8: 'junk' })
  assert.deepEqual(cast, { bot: 'F9', owns: 3, ofLines: 3, share: 1 })
})

test('the byte law: equal counts ride the name asc', () => {
  const cast = combatCast({ F12: 3, F9: 3, F8: 1 })
  assert.equal(cast, null)
  const r = combatRiders({ F12: 3, F9: 3, F8: 1 })
  assert.equal(r.leader, 'F12')
  assert.equal(r.runner, 'F9')
  assert.equal(r.pairOwns, 6)
  assert.equal(r.ofLines, 7)
})

test('the census-guard purity: read-time only, the input is never touched', () => {
  const c = shooterCensus(FROZEN)
  const snapshot = JSON.stringify(c.byBot)
  combatCast(c.byBot)
  combatRiders(c.byBot)
  assert.equal(JSON.stringify(c.byBot), snapshot)
  const again = combatRiders(shooterCensus(FROZEN).byBot)
  assert.equal(again.pairOwns, 5)
})

test('the face-213 END-TO-END: the live field speaks the trio', () => {
  // the live face-213 read (this fire's own verification): 26 lines
  // across 4 bots, F12 x8 + F9 x8 + F8 x8 own 24 of 26 (92.3%) - the
  // trio's own crowd, the tie law held. The frozen mini rides the
  // same shape (the top pair over a tail).
  const frozen213 = [
    'F12 [F12] combat: fighting zombie (dist 2.4, hp 17.7, 2 nearby, proximity)',
    'F9 [F9] combat: fighting zombie (dist 4.9, hp 20.0, 2 nearby, proximity)',
    'F11 [F11] combat: fleeing zombie (dist 5.7, hp 7.0, 2 nearby, proximity)'
  ]
  const c = shooterCensus(frozen213)
  assert.equal(combatCast(c.byBot), null)
  const r = combatRiders(c.byBot)
  // the byte law: all three rode one line - the name asc leads (F11)
  assert.equal(r.leader, 'F11')
  assert.equal(r.runner, 'F12')
  assert.equal(r.ofLines, 3)
  assert.equal(r.pairOwns, 2)
  assert.equal(r.share, 0.667)
})

test("the wiring: the decompose's branch prints the cast or the riders - never both", () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.equal(/const ccSeat = combatCast\(shooter\.byBot\)/.test(src), true)
  assert.equal(/if \(ccSeat\) console\.log\(`\s*\$\{combatCastRow\(ccSeat\)\}`\)/.test(src), true)
  assert.equal(/else \{\s*const ccRiders = combatRiders\(shooter\.byBot\)/.test(src), true)
  assert.equal(/if \(ccRiders\) console\.log\(`\s*\$\{combatRidersRow\(ccRiders\)\}`\)/.test(src), true)
})
