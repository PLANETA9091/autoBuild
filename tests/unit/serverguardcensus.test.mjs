// (v0.976.249) THE SERVER GUARD'S OWN VERDICT MASS - the word's own
// pins. THE EVIDENCE (the fleet faces' own report blocks): the final
// report prints 'server guard: losses=2 (window 0/10) relogins=22
// probe=n/a dead=no revives=0 restarts=0' (run36284626465's own face)
// - the v0.52.0 server-death verdict's own report frame, one print per
// face - and no book owned the frame (the serverguard.mjs module the
// runtime owns, the frozen-census battery holds the line as
// junk-control only - the cells rode unread).
// The pins: the census parse byte-exact (the real face's line whole,
// the wave-class probe skins ok/timeout/refused ride, the
// LAST-PRINT-WINS law, the near-miss lanes' refusal incl. the runtime
// verdict lines and the forged window, the junk laws), the fence
// (every honest branch, the skin sets, the window-over-total lie, the
// junk laws), the row (the fade / the swell / the swing byte-exact,
// the held step's honest null, the three-face zero's lawful null, the
// junk fold's null), the face's own report block re-speaks the census
// whole, the skins' whole space (4 probes x 2 deads) rides and the
// emitter grammar (the fleet19 template the word parses is the line
// the fleet prints - the deliberate-miss law: a near-miss census voice
// never rides).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { serverGuardCensus, serverGuardCensusConsistent, serverGuardTrendRow, LAWFUL_PROBES, LAWFUL_DEADS } from '../../src/lib/serverguardcensus.mjs'

const TAIL = "(the runtime's own SUSPECT and CLEARED verdicts keep the fleet-wired lanes the guard's live lines ride, the blocks mined's own productivity meter keeps the .247 word's seat beside, the final body's own survivor mass keeps the roster's alive cell - the server guard's verdict row alone, co-existence by seat never by duplication)"

test('the census: the real face line rides whole (byte-exact shape)', () => {
  // run36284626465's own face: losses=2 the window's own mass 0 held
  const c = serverGuardCensus([
    'server guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=no revives=0 restarts=0'
  ])
  assert.deepEqual(c, { losses: 2, winLosses: 0, winThreshold: 10, relogins: 22, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
})

test('the census: the wave-class skins ride (the probe and the dead)', () => {
  // the run51 wave class: the probe connected, the SUSPECT cleared
  const ok = serverGuardCensus([
    'server guard: losses=24 (window 4/10) relogins=25 probe=ok dead=no revives=0 restarts=0'
  ])
  assert.deepEqual(ok, { losses: 24, winLosses: 4, winThreshold: 10, relogins: 25, probe: 'ok', dead: 'no', revives: 0, restarts: 0 })
  // the run49 funeral class: the probe timed out, the verdict YES
  const timeout = serverGuardCensus([
    'server guard: losses=19 (window 9/10) relogins=0 probe=timeout dead=YES revives=0 restarts=0'
  ])
  assert.deepEqual(timeout, { losses: 19, winLosses: 9, winThreshold: 10, relogins: 0, probe: 'timeout', dead: 'YES', revives: 0, restarts: 0 })
  // the refused probe + the resurrection bridge: history survives, the
  // revive counts, the fresh boot's restart rides
  const refused = serverGuardCensus([
    'server guard: losses=35 (window 0/10) relogins=8 probe=refused dead=no revives=1 restarts=1'
  ])
  assert.deepEqual(refused, { losses: 35, winLosses: 0, winThreshold: 10, relogins: 8, probe: 'refused', dead: 'no', revives: 1, restarts: 1 })
})

test('the census: LAST-PRINT-WINS (the last print the freshest state holds)', () => {
  const c = serverGuardCensus([
    'server guard: losses=35 (window 7/10) relogins=8 probe=refused dead=YES revives=1 restarts=1',
    'server guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=no revives=0 restarts=0'
  ])
  assert.deepEqual(c, { losses: 2, winLosses: 0, winThreshold: 10, relogins: 22, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
})

test('the census: near-misses and junk never ride', () => {
  // the runtime's own SUSPECT verdict line never rides (a different
  // frame - the fleet-wired live lane the guard's module owns)
  assert.deepEqual(serverGuardCensus(['[fleet] server guard: SUSPECT - 10 transport losses fleet-wide (threshold 10); probing 127.0.0.1:25565 every 5s']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the runtime's own CLEARED verdict line never rides
  assert.deepEqual(serverGuardCensus(['[fleet] server guard: suspect CLEARED - a re-login or a live probe says the server breathes (the run51 wave class); the run continues']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the bot-tagged prefix never rides (the fleet-level frame's own law)
  assert.deepEqual(serverGuardCensus(['F1 server guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=no revives=0 restarts=0']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the truncated tail never rides
  assert.deepEqual(serverGuardCensus(['server guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=no revives=0']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the lowercase dead skin never rides (the emitter's own ternary)
  assert.deepEqual(serverGuardCensus(['server guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=yes revives=0 restarts=0']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the uppercase probe skin never rides (the emitter's own answer set)
  assert.deepEqual(serverGuardCensus(['server guard: losses=2 (window 0/10) relogins=22 probe=OK dead=no revives=0 restarts=0']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the bogus probe skin never rides
  assert.deepEqual(serverGuardCensus(['server guard: losses=2 (window 0/10) relogins=22 probe=maybe dead=no revives=0 restarts=0']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the forged window never rides (the emitter's own arithmetic the
  // census holds - the window's own mass never exceeds the total:
  // losses=2, window 5 never rode from it)
  assert.deepEqual(serverGuardCensus(['server guard: losses=2 (window 5/10) relogins=22 probe=n/a dead=no revives=0 restarts=0']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the altered prose never rides
  assert.deepEqual(serverGuardCensus(['server-guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=no revives=0 restarts=0']), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // junk-safe: the empty and non-string faces hold the lawful zero, the
  // non-array junk prices null (the family's own law the census rides)
  assert.deepEqual(serverGuardCensus([]), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  assert.equal(serverGuardCensus(null), null)
  assert.equal(serverGuardCensus('server guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=no revives=0 restarts=0'), null)
  assert.deepEqual(serverGuardCensus([42, {}]), { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { losses: 2, winLosses: 0, winThreshold: 10, relogins: 22, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 }
  assert.equal(serverGuardCensusConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the never-printed face the fence keeps)
  const zero = { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 }
  assert.equal(serverGuardCensusConsistent({ back: zero, prev: zero, cur: zero }), true)
  // every lawful skin pair rides the fence (4 probes x 2 deads)
  for (const probe of LAWFUL_PROBES) {
    for (const dead of LAWFUL_DEADS) {
      const f = { ...face, probe, dead }
      assert.equal(serverGuardCensusConsistent({ back: f, prev: f, cur: f }), true, `${probe}/${dead}`)
    }
  }
  // extra keys never rejected (the family's own extra-keys law)
  assert.equal(serverGuardCensusConsistent({ back: { ...face, note: 'x' }, prev: face, cur: face }), true)
  // the junk laws: the null face, the missing face, the non-integer,
  // the negative, the bogus skins, the window-over-total lie
  assert.equal(serverGuardCensusConsistent(null), false)
  assert.equal(serverGuardCensusConsistent({}), false)
  assert.equal(serverGuardCensusConsistent({ back: face, prev: face }), false)
  assert.equal(serverGuardCensusConsistent({ back: face, prev: { ...face, losses: 1.5 }, cur: face }), false)
  assert.equal(serverGuardCensusConsistent({ back: face, prev: { ...face, relogins: -1 }, cur: face }), false)
  assert.equal(serverGuardCensusConsistent({ back: face, prev: { ...face, probe: 'maybe' }, cur: face }), false)
  assert.equal(serverGuardCensusConsistent({ back: face, prev: { ...face, dead: 'yes' }, cur: face }), false)
  assert.equal(serverGuardCensusConsistent({ back: face, prev: { ...face, winLosses: 5 }, cur: face }), false)
  assert.equal(serverGuardCensusConsistent({ back: 'x', prev: face, cur: face }), false)
  assert.equal(serverGuardCensusConsistent([face, face, face]), false)
})

test('the row: the swell and the fade byte-exact', () => {
  const swell = serverGuardTrendRow({
    back: { losses: 2, winLosses: 0, winThreshold: 10, relogins: 22, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 },
    prev: { losses: 12, winLosses: 3, winThreshold: 10, relogins: 26, probe: 'ok', dead: 'no', revives: 0, restarts: 0 },
    cur: { losses: 35, winLosses: 7, winThreshold: 10, relogins: 30, probe: 'refused', dead: 'YES', revives: 1, restarts: 1 }
  })
  assert.equal(swell, 'the server guard trend (v0.976.249): the transport-loss mass\'s own swell ran two steps deep - 2 -> 12 (+10) -> 35 (+23) - the losses mass\'s own swell, the probe rode n/a -> ok -> refused, the dead rode no -> no -> YES, the relogins rode 22 -> 26 -> 30 ' + TAIL)
  const fade = serverGuardTrendRow({
    back: { losses: 35, winLosses: 7, winThreshold: 10, relogins: 30, probe: 'refused', dead: 'YES', revives: 1, restarts: 1 },
    prev: { losses: 12, winLosses: 3, winThreshold: 10, relogins: 26, probe: 'ok', dead: 'no', revives: 0, restarts: 0 },
    cur: { losses: 2, winLosses: 0, winThreshold: 10, relogins: 22, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 }
  })
  assert.equal(fade, 'the server guard trend (v0.976.249): the transport-loss mass\'s own fade ran two steps deep - 35 -> 12 (-23) -> 2 (-10) - the losses mass\'s own fade, the probe rode refused -> ok -> n/a, the dead rode YES -> no -> no, the relogins rode 30 -> 26 -> 22 ' + TAIL)
})

test('the row: the swing rides, the held step is the honest null', () => {
  const swing = serverGuardTrendRow({
    back: { losses: 35, winLosses: 7, winThreshold: 10, relogins: 30, probe: 'refused', dead: 'YES', revives: 1, restarts: 1 },
    prev: { losses: 4, winLosses: 1, winThreshold: 10, relogins: 24, probe: 'ok', dead: 'no', revives: 0, restarts: 0 },
    cur: { losses: 12, winLosses: 3, winThreshold: 10, relogins: 26, probe: 'timeout', dead: 'YES', revives: 0, restarts: 0 }
  })
  assert.equal(swing, 'the server guard trend (v0.976.249): the losses mass\'s own swing - 35 -> 4 (-31) -> 12 (+8) - the fade and the swell traded seats between the faces, the probe rode refused -> ok -> timeout, the dead rode YES -> no -> YES, the relogins rode 30 -> 24 -> 26 ' + TAIL)
  // a held step prices no direction (the family's own held law)
  const f = { losses: 12, winLosses: 3, winThreshold: 10, relogins: 26, probe: 'ok', dead: 'no', revives: 0, restarts: 0 }
  assert.equal(serverGuardTrendRow({ back: { ...f, losses: 2 }, prev: f, cur: f }), null)
  assert.equal(serverGuardTrendRow({ back: f, prev: f, cur: { ...f, losses: 35 } }), null)
  // the three-face zero mass prices nothing (the links never broke)
  const zero = { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 }
  assert.equal(serverGuardTrendRow({ back: zero, prev: zero, cur: zero }), null)
  // the junk fold prices null (the fence's own law the row inherits)
  assert.equal(serverGuardTrendRow(null), null)
  assert.equal(serverGuardTrendRow({}), null)
})

test('the face the word\'s own read re-speaks (the report block whole)', () => {
  // the fleet face's own final-report block: the guard line rides
  // among its neighbours - the census the face holds: losses 2, the
  // window 0/10, the relogins 22, the probe n/a, the dead no; the
  // face's own neighbour lines the near-miss law keeps out (the
  // pickaxe tiers and the blocks mined and the loot ledger lines the
  // log carries)
  const lines = [
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=22 stone=4 iron=0',
    'server guard: losses=2 (window 0/10) relogins=22 probe=n/a dead=no revives=0 restarts=0',
    'blocks mined: 1860 in ~600s = 3.10 blocks/s (186/min)',
    'loot ledger: mined=1860 banked=427 smelted=1 pocket=986u/152s accounted=1414 unaccounted=446 surplus=0u conversion=76.0%'
  ]
  const c = serverGuardCensus(lines)
  assert.deepEqual(c, { losses: 2, winLosses: 0, winThreshold: 10, relogins: 22, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 })
  // the face held into the next face the honest null prices (the
  // two-step shape the family keeps: the second leg 0 - no direction)
  const row = serverGuardTrendRow({ back: { ...c, losses: 12, winLosses: 3 }, prev: c, cur: c })
  assert.ok(row === null, 'the held step the honest null prices')
})

test('the emitter grammar: the fleet template the word parses rides the fleet\'s own print', () => {
  // the word parses the line the fleet ALREADY prints (the census
  // guard's own law: zero fleet wiring, zero new fleet log lines) -
  // the emitter's own shape the fleet19 source holds must stay the
  // grammar the census parses (the deliberate-miss law: the parse
  // never forks a second voice)
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  assert.ok(fleetSrc.includes('server guard: losses=${serverGuard.totalLosses} (window ${serverGuard.lossesInWindow}/${serverGuard.threshold}) relogins=${serverGuard.relogins} probe=${serverGuard.lastProbe ?? \'n/a\'} dead=${serverGuard.dead ? \'YES\' : \'no\'} revives=${serverGuard.revives} restarts=${serverRestarts}'), 'the fleet19 server guard emitter the word parses must stand')
})
