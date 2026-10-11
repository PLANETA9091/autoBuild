// THE TRIGGER'S OWN LAG - the triggerlag tests (v0.960.0).
//
// The o2-low trigger front's own missing join: the window book
// (v0.884.0) prices the RUNWAY (the last band crossing to the death
// line), the page lead book (v0.875.0) prices the LEAD (the page's own
// arrival before death) - NOBODY priced the span between the two
// books' own bytes: the lag = window - lead, per death. The synthetic
// lines below ride the emitters' own grammar byte for byte (the
// v0.875.0 precedent: pre-field tests pin the shape, the field face
// rides the next fire's artifact read). The window side rides
// o2TriggerBook's OWN fold, the lead side rides pageLeadBook's OWN
// fold (one parser per emitter - the test forks nothing); the join's
// own fences ride both books' own consistency cells.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { o2Gap, DROWN_CONTEXT_RE } from '../../src/lib/o2gap.mjs'
import { pageLeadBook, pageLeadBookConsistent, LAST_BREATH_MAX_S } from '../../src/lib/pagelead.mjs'
import { o2TriggerBook, o2TriggerConsistent } from '../../src/lib/o2trigger.mjs'
import { triggerLagBook, triggerLagConsistent, triggerLagRow, triggerLagRidersRow } from '../../src/lib/triggerlag.mjs'
import { DEATH_CENSUS_LINE_RE } from '../../src/lib/deathcensus.mjs'

// the emitters' own templates (miner.mjs's death handler + the sentry's
// own pass line + the heartbeat's own stamp, byte for byte)
const hb = (n, ts) => `fleet [fleet] n=${n} ts=${ts}s rss=456M late=10ms mainLate=5ms`
const pass = (bot, n, o2) =>
  `${bot} [${bot}] water: pass ${n} head=wet shore=none land=n/a y=60.4 o2=${o2} probes=0 at=[-134,60,387]`
const died = (bot, cause) => `${bot} [${bot}] died - respawning (cause: server: ${cause} [kind=drown] | inferred: none)`
const mirrorRescue = (bot, lead, o2, snap) =>
  `${bot} [${bot}] water: breath mirror [rescue-ran] - the rescue lane owned the death window (paged ${lead}s before death) - its own timeline lines own the failure (o2 ${o2}, head WET, snapshot ${snap}s old)`
const MIRROR_BLIND = `F14 [F14] water: breath mirror [controls-blind] - the wet-escape climb owned the controls but the sentry's sight died 25s before death - the o2 burned unwatched while the owner failed (the F14 36566021862 class: the snapshot was the blindness evidence) (o2 20, head dry/unknown, snapshot 24.5s old)`
const ctx = (bot, o2, rescue, leg, wet) =>
  `${bot} [${bot}] death: drown context (o2 ${o2}, feet water, head water, rescue ${rescue}, leg ${leg}, ${wet})`
const save = (bot, s) => `${bot} [${bot}] water: rescue complete (shore reached) in ${s}s`

// the join's own harness: both books' own folds from the same lines
// (the two-walks-agree law's own inputs, never hand-built in the
// honest tests)
const fold = (lines) => {
  const o2t = o2TriggerBook(lines)
  const o2g = o2Gap(lines)
  const plb = pageLeadBook(o2g, lines)
  return { o2t, o2g, plb }
}

test('the grammar pin - the emitters\' own bytes, the one-constant law by import', () => {
  assert.ok(DEATH_CENSUS_LINE_RE.test(died('F19', 'drowned')), 'the announce token rides the census\'s own RE')
  assert.ok(DROWN_CONTEXT_RE.test(ctx('F19', 'reset(-1)', '2s ago', 'deploy', 'wet 12s')), 'the context rides o2gap\'s own RE')
  assert.equal(LAST_BREATH_MAX_S, 3, 'the last-breath band is pagelead\'s own constant, never forked')
})

test('the join law - the late page: lag = window - lead, the lever\'s own price', () => {
  const lines = [
    save('F2', '0'), save('F3', '1.1'), save('F5', '2.3'), // the lane's own saves (the verdict's own input)
    hb(1, 20),
    pass('F12', 0, 15), // above the band
    hb(2, 40),
    pass('F12', 5, 8), // THE CROSSING (ts 40)
    mirrorRescue('F12', '4.4', 'reset(-1)', '4.4'), // the page: 4.4s before death (over the last-breath band)
    hb(3, 200),
    died('F12', 'drowned'), // the window: 200 - 40 = 160s
    ctx('F12', 'reset(-1)', '2s ago', 'deploy', 'wet 160s')
  ]
  const { o2t, plb } = fold(lines)
  assert.ok(o2TriggerConsistent(o2t))
  assert.ok(pageLeadBookConsistent(plb))
  const b = triggerLagBook(o2t, plb, lines)
  assert.ok(b, 'the join prices')
  assert.ok(triggerLagConsistent(b))
  assert.equal(b.deaths, 1)
  assert.equal(b.joined, 1)
  assert.equal(b.rows[0].window, 160)
  assert.equal(b.rows[0].lead, 4.4)
  assert.equal(b.rows[0].lag, 155.6, 'the lag is the runway the page let burn')
  assert.equal(b.rows[0].sub, 'late', '4.4s lead over a 160s runway: the late page')
  assert.equal(b.late, 1)
  assert.equal(b.windowSum, 160)
  assert.equal(b.lateLagSum, 155.6)
  assert.ok(Math.abs(b.burnedShare - 155.6 / 160) < 1e-12, 'the lever\'s own price: the burned share')
  const row = triggerLagRow(b)
  assert.ok(row && row.includes("the trigger's own lag (v0.960.0)"), 'the row byte rides')
  assert.ok(row.includes('joined 1 (lag 155.6..155.6s avg 155.6s)'), 'the lag spread rides')
  assert.ok(row.includes('the late page burned 97.2% of the joined runway'), 'the burned share rides the row')
  assert.ok(row.includes('the o2-low threshold is the lever'), 'the late verdict byte')
})

test('the early page - the page preceded the last in-band read: the cure witnessed', () => {
  const lines = [
    hb(1, 20),
    pass('F5', 0, 15), // above the band
    hb(2, 94),
    pass('F5', 3, 9), // THE CROSSING (ts 94)
    hb(3, 97),
    died('F5', 'drowned'), // the window: 97 - 94 = 3s
    mirrorRescue('F5', '5', 'reset(-1)', '5'), // the page 5s before death - BEFORE the crossing
    ctx('F5', 'reset(-1)', 'active', 'deploy', 'wet 9s')
  ]
  const { o2t, plb } = fold(lines)
  const b = triggerLagBook(o2t, plb, lines)
  assert.ok(b && triggerLagConsistent(b))
  assert.equal(b.early, 1, 'lag 3 - 5 = -2: the page rode the band, not the reset')
  assert.equal(b.rows[0].lag, -2)
  assert.equal(b.late, 0)
  const row = triggerLagRow(b)
  assert.ok(row.includes("the o2-low page witnessed"), 'the cure\'s own verdict byte')
  assert.ok(row.includes('early 1 / last-breath 0 / late 0'))
})

test('the last-breath page - the reset\'s own page (the front\'s own disease)', () => {
  const lines = [
    save('F2', '0'), save('F3', '2.3'),
    hb(1, 20),
    pass('F13', 0, 2), // the crossing (the stream's own opening read, ts 20)
    hb(2, 180),
    died('F13', 'drowned'), // the window: 160s
    mirrorRescue('F13', '2', 'reset(-1)', '2'), // the page 2s before death (<= 3)
    ctx('F13', 'reset(-1)', '2s ago', 'deploy', 'wet 160s')
  ]
  const { o2t, plb } = fold(lines)
  const b = triggerLagBook(o2t, plb, lines)
  assert.ok(b && triggerLagConsistent(b))
  assert.equal(b.joined, 1)
  assert.equal(b.rows[0].lag, 158)
  assert.equal(b.rows[0].sub, 'lastBreath', 'lead 2 <= 3: the last-breath class')
  assert.equal(b.lastBreath, 1)
  const row = triggerLagRow(b)
  assert.ok(row.includes('the page rides the reset'), 'the disease\'s own verdict byte')
  assert.ok(row.includes('the trigger must fire at o2 low, not at the reset'), 'the front rides the row')
})

test('the honest no-window - the death the band never saw rides its own class', () => {
  const lines = [
    hb(1, 20),
    mirrorRescue('F8', '1.5', 'reset(-1)', '1.5'), // the page rode, the stream never crossed
    hb(2, 60),
    died('F8', 'drowned'), // no pass stream: noCrossing -> window null
    ctx('F8', 'reset(-1)', '2s ago', 'deploy', 'wet 30s')
  ]
  const { o2t, plb } = fold(lines)
  assert.equal(o2t.crossed, 0, 'the window book\'s own honest zero')
  const b = triggerLagBook(o2t, plb, lines)
  assert.ok(b && triggerLagConsistent(b))
  assert.equal(b.noWindow, 1)
  assert.equal(b.rows[0].lead, 1.5, 'the provable lead rides the row (the map image holds)')
  assert.equal(b.joined, 0)
  const riders = triggerLagRidersRow(b)
  assert.ok(riders === 'F8 [no window]', 'the honest bracket')
})

test('the honest unpaged - the controls-blind death never carried a page', () => {
  const lines = [
    hb(1, 20),
    pass('F14', 0, 6), // the crossing (ts 20)
    MIRROR_BLIND, // the controls-blind mirror: no '(paged Ns)' prose
    hb(2, 120),
    died('F14', 'drowned'),
    ctx('F14', 'reset(-1)', '214s ago', 'walk to chest', 'wet 0s@last')
  ]
  const { o2t, plb } = fold(lines)
  const b = triggerLagBook(o2t, plb, lines)
  assert.ok(b && triggerLagConsistent(b))
  assert.equal(b.unpaged, 1)
  assert.equal(b.rows[0].window, 100)
  assert.equal(b.rows[0].lead, null)
  assert.equal(b.kinds.drown, 1, 'the kind word rides the announce\'s own server verdict')
  const riders = triggerLagRidersRow(b)
  assert.ok(riders === 'F14 [unpaged]')
})

test('the map wart law - a bot that drowns twice: the first death unjoined, the last byte-true', () => {
  const lines = [
    save('F2', '0'), save('F3', '2.3'),
    hb(1, 20),
    pass('F9', 0, 5), // crossing one (ts 20)
    hb(2, 90),
    died('F9', 'drowned'), // death one: window 70s
    mirrorRescue('F9', '3.3', 'reset(-1)', '3.3'), // death one's page (the wart: the map holds the LAST)
    ctx('F9', 'reset(-1)', '2s ago', 'deploy', 'wet 70s'),
    pass('F9', 1, 16), // respawned, above the band
    hb(3, 140),
    pass('F9', 4, 7), // crossing two (ts 140)
    mirrorRescue('F9', '2', 'reset(-1)', '2'), // death two's page (the map's own byte)
    hb(4, 240),
    died('F9', 'drowned'), // death two: window 100s
    ctx('F9', 'reset(-1)', '2s ago', 'deploy', 'wet 100s')
  ]
  const { o2t, plb } = fold(lines)
  assert.equal(plb.deaths, 2, 'the lead book counts both deaths (the counts ride the death lines)')
  const b = triggerLagBook(o2t, plb, lines)
  assert.ok(b && triggerLagConsistent(b), 'the wart prices without forging')
  assert.equal(b.deaths, 2)
  assert.equal(b.unjoined, 1, 'death one: the lead not per-death provable - the honest class')
  assert.equal(b.joined, 1, 'death two: the map\'s own byte joins')
  assert.equal(b.rows[0].cls, 'unjoined')
  assert.equal(b.rows[0].lead, null, 'the last death\'s lead never rides the earlier death')
  assert.equal(b.rows[1].lead, 2)
  assert.equal(b.rows[1].lag, 98)
  const riders = triggerLagRidersRow(b)
  assert.ok(riders.includes('F9 [unjoined]') && riders.includes('F9 [lag 98s - lastBreath]'))
})

test('the unkinded seat - the inferred-only announce joins the population honestly', () => {
  const lines = [
    hb(1, 20),
    pass('F16', 0, 4), // the crossing (ts 20)
    hb(2, 80),
    died('F16', 'drowned'),
    ctx('F16', 'reset(-1)', 'never', 'unknown', 'wet 60s')
  ]
  const { o2t, plb } = fold(lines)
  const b = triggerLagBook(o2t, plb, lines)
  assert.ok(b && triggerLagConsistent(b))
  // no mirror at all: the lead side rides blind (the kind word 'blind'
  // is the lead book's own) - unpaged
  assert.equal(b.unpaged, 1)
  assert.equal(b.rows[0].window, 60)
  assert.equal(b.kinds.drown, 1, 'the server verdict stays the authority')
})

test('the fences - the two walks disagree or a book lies: nothing prices', () => {
  const lines = [
    hb(1, 20),
    pass('F12', 0, 8),
    mirrorRescue('F12', '2.4', 'reset(-1)', '2.4'),
    hb(2, 100),
    died('F12', 'drowned'),
    ctx('F12', 'reset(-1)', '2s ago', 'deploy', 'wet 80s')
  ]
  const { o2t, plb } = fold(lines)
  // (a) a window book from another face (extra perDeath row, kept
  // self-consistent) - the alignment fence fails
  const o2tForeign = o2TriggerBook([...lines,
    hb(3, 300),
    died('F3', 'drowned'),
    ctx('F3', '5', 'never', 'unknown', 'wet 10s')])
  const o2gForeign = o2Gap([...lines,
    hb(3, 300),
    died('F3', 'drowned'),
    ctx('F3', '5', 'never', 'unknown', 'wet 10s')])
  const plbForeign = pageLeadBook(o2gForeign, [...lines,
    hb(3, 300),
    died('F3', 'drowned'),
    ctx('F3', '5', 'never', 'unknown', 'wet 10s')])
  assert.ok(o2TriggerConsistent(o2tForeign) && pageLeadBookConsistent(plbForeign))
  assert.equal(triggerLagBook(o2tForeign, plbForeign, lines), null, 'the populations disagree - nothing prices')
  // (b) a lying window book (the cell mutated off its own image)
  const o2tLie = { ...o2t, window: { ...o2t.window, sum: o2t.window.sum + 1 } }
  assert.equal(triggerLagBook(o2tLie, plb, lines), null, 'a book that cannot prove itself prices nothing')
  // (c) a lying lead book
  const plbLie = { ...plb, deaths: plb.deaths + 1 }
  assert.equal(triggerLagBook(o2t, plbLie, lines), null)
  // (d) the honest folds price
  assert.ok(triggerLagBook(o2t, plb, lines))
})

test('the zero-death silence - no drown contexts, no book', () => {
  const lines = [hb(1, 20), pass('F1', 0, 15)]
  const { o2t, plb } = fold(lines)
  assert.equal(plb, null, 'the lead book\'s own healthy silence')
  assert.equal(triggerLagBook(o2t, plb, lines), null, 'the join rides the lead book\'s own population')
})

test('the junk safety - non-string rows judge nothing, the classes stay exclusive', () => {
  const lines = [
    save('F2', '0'),
    hb(1, 20),
    null,
    undefined,
    42,
    pass('F6', 0, 3),
    mirrorRescue('F6', '1.1', 'reset(-1)', '1.1'),
    hb(2, 90),
    died('F6', 'drowned'),
    ctx('F6', 'reset(-1)', '2s ago', 'deploy', 'wet 60s')
  ]
  const { o2t, plb } = fold(lines)
  const b = triggerLagBook(o2t, plb, lines)
  assert.ok(b && triggerLagConsistent(b))
  assert.equal(b.deaths, 1)
  assert.equal(b.joined, 1)
  assert.equal(b.rows[0].lag, 90 - 20 - 1.1, 'the lag rides the junk-free fold')
})
