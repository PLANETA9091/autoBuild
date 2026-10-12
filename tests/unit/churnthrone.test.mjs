// THE CHURN BOT'S THRONE - the churnthrone tests (v0.961.0).
// The three instability lanes' own join: the rescue starts' cast
// (v0.774.0), the frozen standdown's bot (v0.931.0), the relog census's
// own per-bot cells - each priced alone, the cross-lane ownership never
// rode a book. The verbatim cells below are the faces' own reads: face
// 226's throne birth (F5 churn 9/14 + standdown 10/17 + relog 7/8 - the
// lane's own assembled read) and face 210's one-vote-short shape (F18
// churn 8/14 + standdown 7/8 + relog 1/1 - the tie law held). The join
// consumes the books' OWN cells (the one-parser law: the standdown side
// rides standdownclock's own tally, imported never re-spelled; the test
// forks nothing).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { churnThrone, churnThroneRow, churnThroneRiders, churnThroneRidersRow, churnShadow, churnShadowRow } from '../../src/lib/churnthrone.mjs'
import { standdownBotTally } from '../../src/lib/standdownclock.mjs'
import { stickyLaneCells } from '../../src/lib/stickyseat.mjs'

// face 226's own cells (the lane's own read, byte for byte)
const FACE226 = {
  rescuePerBot: {
    F5: { starts: 9 }, F13: { starts: 2 }, F2: { starts: 1 },
    F16: { starts: 1 }, F19: { starts: 1 }
  },
  rescueTotals: { starts: 14 },
  relogsByBot: { F5: 7, F13: 1 },
  relogsTotal: 8,
  standdownBook: { stamps: [...Array(10).fill({ bot: 'F5' }), ...Array(7).fill({ bot: 'F13' })] }
}

// face 210's own shape (decomp210 verbatim): starts F18=8 F17=2 F16=1
// F12=1 F9=1 F14=1 (14); standdowns F18 7 of 8; relogs F18=1 F17=1
const FACE210 = {
  rescuePerBot: {
    F18: { starts: 8 }, F17: { starts: 2 }, F16: { starts: 1 },
    F12: { starts: 1 }, F9: { starts: 1 }, F14: { starts: 1 }
  },
  rescueTotals: { starts: 14 },
  relogsByBot: { F18: 1, F17: 1 },
  relogsTotal: 2,
  standdownBook: { stamps: [...Array(7).fill({ bot: 'F18' }), { bot: 'F17' }] }
}

test('THE THRONE: face 226 verbatim - F5 owns every lane at once', () => {
  const t = churnThrone(FACE226)
  assert.ok(t, 'the throne seats')
  assert.equal(t.bot, 'F5')
  assert.deepEqual(t.lanes, [
    { lane: 'churn', owns: 9, of: 14 },
    { lane: 'standdown', owns: 10, of: 17 },
    { lane: 'relog', owns: 7, of: 8 }
  ])
  assert.equal(t.owns, 26)
  assert.equal(t.ofEvents, 39)
  assert.equal(t.share, 0.667)
})

test('THE ROW: the throne byte verbatim', () => {
  const row = churnThroneRow(churnThrone(FACE226))
  assert.equal(row, "the churn bot's own throne (v0.961.0): F5 owns the strict majority of every instability lane at once - the churn 9 of 14, the standdown 10 of 17, the relog 7 of 8 (26 of 39 event(s), 66.7%) - THE CHURN BOT'S THRONE: one bot's own sessions churn the lanes together - the starts' cast (v0.774.0) priced the water lane, the standdown's bot (v0.931.0) named the freeze, nobody priced the lanes' own join")
})

test('THE TIE LAW: face 210 - the relog lane contested, no throne, the riders measure', () => {
  const t = churnThrone(FACE210)
  assert.equal(t, null, 'the relog tie owns nothing - the storm-has-no-seat precedent')
  const r = churnThroneRiders(FACE210)
  assert.ok(r, 'the riders measure beside the silence')
  assert.equal(r.leader, 'F18')
  assert.equal(r.leaderOwns, 16)
  assert.equal(r.runner, 'F17')
  assert.equal(r.runnerOwns, 4)
  assert.equal(r.ofEvents, 24)
  assert.equal(r.pairOwns, 20)
  assert.equal(r.share, 0.833)
  const row = churnThroneRidersRow(r)
  assert.ok(row.includes("no bot owns every lane's majority - F18 x16 + F17 x4 own 20 of 24 event(s) (83.3%)"), row)
})

test('THE MAJORITY LAW: a lane under half never seats', () => {
  // the churn lane's top bot holds 6 of 14 (43%) - the lane contested,
  // the join prices nothing even though the other lanes would seat F1
  const cells = {
    rescuePerBot: { F1: { starts: 6 }, F2: { starts: 4 }, F3: { starts: 4 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F1: 3, F2: 1 },
    relogsTotal: 4,
    standdownBook: { stamps: [...Array(5).fill({ bot: 'F1' }), ...Array(3).fill({ bot: 'F2' })] }
  }
  assert.equal(churnThrone(cells), null)
  // exactly half is the tie - owns nothing byte for byte
  const tie = {
    rescuePerBot: { F1: { starts: 7 }, F2: { starts: 7 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F1: 3, F2: 1 },
    relogsTotal: 4
  }
  assert.equal(churnThrone(tie), null, 'the tie owns nothing')
})

test('THE ONE-OWNER LAW: two lanes, two owners - no throne', () => {
  const cells = {
    rescuePerBot: { F1: { starts: 9 }, F2: { starts: 5 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F2: 3, F1: 1 },
    relogsTotal: 4
  }
  assert.equal(churnThrone(cells), null, 'different owners never seat the throne')
  const r = churnThroneRiders(cells)
  assert.ok(r, 'the riders measure the split')
  assert.equal(r.leader, 'F1')
})

test('THE JOIN FENCE: a single non-empty lane stays the existing seats own verdict', () => {
  // the standdown lane alone (the v0.931.0 seat's own row) prices nothing here
  const solo = {
    rescuePerBot: null,
    rescueTotals: null,
    relogsByBot: null,
    relogsTotal: null,
    standdownBook: { stamps: [...Array(5).fill({ bot: 'F1' }), { bot: 'F2' }] }
  }
  assert.equal(churnThrone(solo), null, 'one lane - the join is not priced')
  // two junk lanes = zero non-empty lanes - the silence itself
  assert.equal(churnThrone({}), null)
  assert.equal(churnThrone(null), null)
})

test('THE ABSENT-LANE HONESTY: an absent lane never blocks, never votes', () => {
  // no relogs rode - the join seats on churn + standdown alone
  const cells = {
    rescuePerBot: { F1: { starts: 9 }, F2: { starts: 5 } },
    rescueTotals: { starts: 14 },
    relogsByBot: null,
    relogsTotal: null,
    standdownBook: { stamps: [...Array(5).fill({ bot: 'F1' }), ...Array(2).fill({ bot: 'F2' })] }
  }
  const t = churnThrone(cells)
  assert.ok(t, 'two lanes seat the throne')
  assert.equal(t.bot, 'F1')
  assert.deepEqual(t.lanes, [
    { lane: 'churn', owns: 9, of: 14 },
    { lane: 'standdown', owns: 5, of: 7 }
  ])
  assert.equal(t.ofEvents, 21)
})

test('THE JUNK BATTERY: junk cells price nothing, never invent a throne', () => {
  // junky per-bot rows (non-finite / non-positive starts) never vote
  const junkRows = {
    rescuePerBot: { F1: { starts: NaN }, F2: null, F3: 'junk', F4: { starts: -1 }, F5: { starts: 0 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F1: 3 },
    relogsTotal: 4
  }
  assert.equal(churnThrone(junkRows), null, 'no real churn votes - the lane rides absent')
  // junky totals leave the lane silent
  assert.equal(churnThrone({ rescuePerBot: { F1: { starts: 9 } }, rescueTotals: { starts: 'junk' } }), null)
  assert.equal(churnThrone({ rescuePerBot: { F1: { starts: 9 } }, rescueTotals: { starts: 0 } }), null)
  // junky relogs (byBot without the census's own n) ride absent
  assert.equal(churnThrone({
    rescuePerBot: { F1: { starts: 9 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F1: 3 },
    relogsTotal: null
  }), null, 'the census n and byBot ship together - no re-derivation')
  // a junky standdown book (no stamps array) rides absent
  assert.equal(churnThrone({
    rescuePerBot: { F1: { starts: 9 } },
    rescueTotals: { starts: 14 },
    standdownBook: { stamps: 'junk' }
  }), null)
  // non-string / empty bot bytes never vote
  assert.equal(churnThrone({
    rescuePerBot: { '': { starts: 9 }, F2: { starts: 5 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { '': 3 },
    relogsTotal: 4
  }), null)
})

test('THE BRANCH LAW: the riders read null beside a throne (fenced in the lib)', () => {
  assert.equal(churnThroneRiders(FACE226), null, 'the throne owns the row - the riders stay unprinted')
})

test('THE RIDERS JUNK LAW: junk never invents a shape', () => {
  assert.equal(churnThroneRiders(null), null)
  assert.equal(churnThroneRiders({}), null)
  // a single bot riding events - no crowd to measure
  assert.equal(churnThroneRiders({
    rescuePerBot: { F1: { starts: 9 } },
    rescueTotals: { starts: 14 }
  }), null)
})

test('THE ROWS JUNK LAW: bad bytes never print', () => {
  assert.equal(churnThroneRow(null), null)
  assert.equal(churnThroneRow('junk'), null)
  assert.equal(churnThroneRow({ bot: 'F1', lanes: [{ lane: 'churn', owns: 1, of: 0 }], owns: 1, ofEvents: 1, share: 1 }), null)
  assert.equal(churnThroneRow({ bot: '', lanes: [{ lane: 'churn', owns: 1, of: 2 }, { lane: 'relog', owns: 1, of: 2 }], owns: 2, ofEvents: 4, share: 0.5 }), null)
  assert.equal(churnThroneRow({ bot: 'F1', lanes: [{ lane: 'churn', owns: 2, of: 2 }], owns: 2, ofEvents: 2, share: 1 }), null, 'a one-lane throne never prints')
  assert.equal(churnThroneRidersRow(null), null)
  assert.equal(churnThroneRidersRow({ leader: 'F1', leaderOwns: 0, runner: 'F2', runnerOwns: 1, ofEvents: 2, pairOwns: 1, share: 0.5 }), null)
})

test('THE ONE-PARSER LAW: the standdown side rides the clocks own tally, never re-spelled', () => {
  // the lib's own tally (exported v0.961.0) reads the same book the seat reads
  const tally = standdownBotTally(FACE226.standdownBook)
  assert.ok(tally)
  assert.equal(tally.total, 17)
  assert.deepEqual(tally.byBot, { F5: 10, F13: 7 })
  // junk books refuse (the tally's own fences)
  assert.equal(standdownBotTally(null), null)
  assert.equal(standdownBotTally({ stamps: 'junk' }), null)
  assert.equal(standdownBotTally({ stamps: [{ bot: 'X1' }] }), null, 'the F\\d+ bot byte law holds')
})

test('WIRING: decompose imports the book and prints it beside the standdown seat', () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.match(src, /import \{[^}]*churnThrone, churnThroneRow, churnThroneRiders, churnThroneRidersRow[^}]*\} from '\.\.\/\.\.\/src\/lib\/churnthrone\.mjs'/)
  assert.match(src, /const throne = churnThrone\(/)
  assert.match(src, /churnThroneRow\(throne\)/)
  assert.match(src, /churnThroneRidersRow\(throneRiders\)/)
  // the print site rides inside the standdown clock's own block (the
  // freeze's own bot row's neighbor - the import band's order)
  const sdbAt = src.indexOf('const sdb = standdownClockBook(lines)')
  const throneAt = src.indexOf('const throne = churnThrone(')
  assert.ok(sdbAt > 0 && throneAt > sdbAt, 'the throne prints after the standdown book reads')
})

// === (v0.974.11) THE THRONE'S OWN SHADOW - the plurality fold beside the
// throne's silence. Face 272's own cells (the four lanes' own reads):
// churn F14 19 / F6 15 of 62, standdown F14 13 of 22, relog F14=3 F15=2
// F11=1 F12=1 of 7, sticky F14 15 of 26 - the hand-assembled face the
// throne's strict-majority law refused to seat.
const FACE272 = {
  rescuePerBot: {
    F14: { starts: 19 }, F6: { starts: 15 }, F15: { starts: 10 },
    F17: { starts: 8 }, F12: { starts: 6 }, F11: { starts: 2 }, F13: { starts: 2 }
  },
  rescueTotals: { starts: 62 },
  relogsByBot: { F14: 3, F15: 2, F11: 1, F12: 1 },
  relogsTotal: 7,
  standdownBook: { stamps: [...Array(13).fill({ bot: 'F14' }), ...Array(9).fill({ bot: 'F6' })] },
  stickyByBot: { F14: 15, F6: 4, F12: 4, F13: 3 },
  stickyTotal: 26
}

test('SHADOW: the unanimous plurality fold names the face the throne refused (face 272 real layout)', () => {
  assert.equal(churnThrone(FACE272), null, 'the throne stays dark (the churn lane rides spread - no strict majority)')
  const s = churnShadow(FACE272)
  assert.ok(s, 'the shadow seats')
  assert.equal(s.bot, 'F14')
  assert.equal(s.nonEmpty, 4)
  assert.deepEqual(s.lanes, [
    { lane: 'churn', owns: 19, of: 62 },
    { lane: 'standdown', owns: 13, of: 22 },
    { lane: 'relog', owns: 3, of: 7 },
    { lane: 'sticky', owns: 15, of: 26 }
  ])
  const row = churnShadowRow(s)
  assert.match(row, /the throne's own shadow \(v0\.974\.11\): F14 led every non-empty lane's own plurality at once - the churn 19 of 62, the standdown 13 of 22, the relog 3 of 7, the sticky 15 of 26 \(4 lane\(s\)\)/)
  assert.match(row, /THE SHADOW'S OWN FACE/)
})

test('SHADOW: the branch law - a seated throne reads the shadow\'s own silence', () => {
  // face 226's own throne + a sticky lane F5 also leads: the throne seats,
  // the shadow never double-prints the owner's face
  const cells = { ...FACE226, stickyByBot: { F5: 5, F13: 3 }, stickyTotal: 8 }
  assert.ok(churnThrone(cells), 'the throne seats (the strict-majority law)')
  assert.equal(churnShadow(cells), null, 'the shadow rides silent beside the throne')
})

test('SHADOW: a partial lead reads the honest silence (the riders\' own words own the spread)', () => {
  const cells = { ...FACE272, relogsByBot: { F15: 4, F14: 3 } }
  const s = churnShadow(cells)
  assert.equal(s, null, 'F15 leads the relog lane - the unanimity fails')
})

test('SHADOW: a leaderless tie blocks the unanimity (the tie law\'s own byte)', () => {
  const cells = { ...FACE272, relogsByBot: { F14: 3, F15: 3, F11: 1 } }
  assert.equal(churnShadow(cells), null, 'the relog lane rides leaderless (3 = 3)')
})

test('SHADOW: the absent lane votes never (the honest silence cannot block)', () => {
  const { stickyByBot, stickyTotal, ...three } = FACE272
  const s = churnShadow(three)
  assert.ok(s, 'the three-lane fold still seats')
  assert.equal(s.nonEmpty, 3)
  assert.equal(s.bot, 'F14')
  assert.equal(churnShadowRow(s).includes('(3 lane(s))'), true, 'the row names the lanes it read')
})

test('SHADOW: the sticky lane rides stickyseat\'s own fold (one read per emitter)', () => {
  const perBot = {
    F14: { starts: 3, frozenStanddown: 10, timeout: 5, dead: 1, complete: 99 },
    F6: { starts: 2, complete: 7, released: 4 }
  }
  const lane = stickyLaneCells(perBot)
  assert.deepEqual(lane, { byBot: { F14: 16 }, total: 16 }, 'the five sticky classes fold, the clean closes stay out')
  assert.equal(stickyLaneCells(null), null, 'the junk perBot reads the honest silence')
  assert.equal(stickyLaneCells({ F14: { complete: 5 } }), null, 'the clean-only book reads the honest silence')
})
